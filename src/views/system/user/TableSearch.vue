<template>
  <div class="table-search-container" >
    <el-form ref="tableSearchRef" :model="state.form" size="default" label-width="85px" class="table-form">
      <el-row style="position: relative;">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20" >
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20" >
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" class="mb20">
          <el-form-item label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-if="state.isToggle" style="margin-top: 20px;">
          <el-form-item style="visibility: hidden" label="用户名称">
            <el-input size="default" v-model="state.form.name" placeholder="请输入用户名称" style="width: 100%"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" class="mb20 fr">
          <el-form-item class="table-form-btn">
            <template #label >
              <div class="table-form-btn-toggle ml10" @click="state.isToggle = !state.isToggle">
                <span class="test">{{ state.isToggle ? '收筛选' : '展筛选' }}</span>
                <SvgIcon :name="state.isToggle ? 'ele-ArrowUp' : 'ele-ArrowDown'" />
              </div>
            </template>
            <div>
              <el-button size="default" type="primary" @click="onSearch">查询 </el-button>
              <el-button size="default" type="info" class="ml10" @click="onReset"> 重置 </el-button>
            </div>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script setup lang="ts" name="makeTableDemo">
import { reactive,ref } from 'vue';
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
  position: absolute;
  bottom: 0;
  right: 0;
}
.test {
  color: var(--el-color-primary);
}
</style>
