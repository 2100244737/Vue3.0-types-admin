<template>
  <el-card  class="cardBox table-search-container" >
    <el-form ref="tableSearchRef" :model="state.form" size="default" label-width="85px" class="table-form">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"  class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20" >
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20" >
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <div class="mb20 fr" >
          <el-form-item class="table-form-btn">
            <template #label >
              <div class="table-form-btn-toggle ml10" @click="state.isToggle = !state.isToggle">
                <span class="test">{{ state.isToggle ? '收筛选' : '展筛选' }}</span>
                <SvgIcon :name="state.isToggle ? 'ele-ArrowUp' : 'ele-ArrowDown'" />
              </div>
            </template>
            <div>
              <el-button size="default" type="primary" v-auth="'USER_PAGE'" @click="onSearch">查询 </el-button>
              <el-button size="default" type="info" class="ml10" @click="onReset"> 重置 </el-button>
            </div>
          </el-form-item>
        </div>
      </el-row>

    </el-form>
  </el-card>
</template>

<script setup lang="ts" name="makeTableDemo">
import { reactive, ref} from 'vue';

// 定义变量内容
const tableSearchRef = ref();
// 定义子组件向父组件传值/事件
const emit = defineEmits(['search']);
const state = reactive({
  form: {
    name:''
  },
  isToggle: false,
});

// 查询
const onSearch =()=> {
  emit('search', state.form);
}
// 重置
const onReset =()=> {
  tableSearchRef.value.resetFields()
  state.form.name = ''
  emit('search', state.form);
}
</script>

<style scoped lang="scss">
.fr {
 text-align: right;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}
.test {
  color: var(--el-color-primary);
  margin-right: 5px;
}
.cardBox {
  margin-bottom: 15px;
}
.cardBox :deep(.el-card__body){
  padding-bottom: 0;
}
.table-form-btn-toggle {
  cursor: pointer;
}
.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}
.table-search-container {
  display: flex;
  .table-form {
    flex: 1;
    .table-form-btn-toggle {
      white-space: nowrap;
      user-select: none;
      display: flex;
      align-items: center;
      color: var(--el-color-primary);
    }
  }
}
</style>
