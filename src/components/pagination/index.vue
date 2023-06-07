<template>
  <el-pagination
      @size-change="onHandleSizeChange"
      @current-change="onHandleCurrentChange"
      class="mt15"
      :pager-count="5"
      :page-sizes="[10, 20, 30]"
      :current-page="currentPage"
      background
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
  >
  </el-pagination>
</template>

<script setup lang="ts" name="pagination">
// 定义父组件传过来的值
defineProps({
  // 当前总页数
  total: {
    type: Number,
    default: () => 0,
  },
  // 当前页数
  currentPage: {
    type: Number,
    default: () => 1,
  },
  // 自定义右侧图标
  pageSize: {
    type: Number,
    default: () => 10,
  },
})
// 定义子组件向父组件传值/事件
const emit = defineEmits(['handleChange']);
// 分页改变
const onHandleSizeChange = (val: number) => {
  emit('handleChange',{type:'pageSize',value: val});
};
// 分页改变
const onHandleCurrentChange = (val: number) => {
  emit('handleChange',{type:'currentPage',value: val});
};
</script>

<style scoped>

</style>
