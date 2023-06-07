<template>
	<div class="system-user-container layout-padding">
		<el-card shadow="hover" class="layout-padding-auto">
<!--			<div class="system-user-search mb15">-->
<!--				<el-input size="default" placeholder="请输入用户名称" style="max-width: 180px"> </el-input>-->
<!--				<el-button size="default" type="primary" class="ml10" @click="getData">-->
<!--					<el-icon>-->
<!--						<ele-Search />-->
<!--					</el-icon>-->
<!--					查询-->
<!--				</el-button>-->
<!--				<el-button size="default" type="success" class="ml10" @click="onOpenAddUser('add')">-->
<!--					<el-icon>-->
<!--						<ele-FolderAdd />-->
<!--					</el-icon>-->
<!--					新增用户-->
<!--				</el-button>-->
<!--			</div>-->
      <TableSearch @search="searchChange"/>
			<el-table :data="state.tableData.data" v-loading="state.tableData.loading" style="width: 100%">
				<el-table-column type="index" label="序号" width="60" />
				<el-table-column prop="operatorCode" label="工号" show-overflow-tooltip></el-table-column>
				<el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
				<el-table-column prop="mobile" label="手机号" show-overflow-tooltip></el-table-column>
				<el-table-column prop="orgName" label="所属机构" show-overflow-tooltip></el-table-column>
				<el-table-column prop="status" label="用户状态" show-overflow-tooltip>
					<template #default="scope">
						<el-tag type="success" v-if="scope.row.status">启用</el-tag>
						<el-tag type="info" v-else>停用</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="100">
					<template #default="scope">
						<el-button  size="small" text type="primary" @click="onOpenEditUser('edit', scope.row)">修改</el-button>
						<el-button  size="small"  v-if="scope.row.status == '1'" text type="primary" @click="onRowDel(scope.row)">停用</el-button>
						<el-button  size="small"  v-if="scope.row.status == '2'" text type="primary" @click="onRowDel(scope.row)">启用</el-button>
					</template>
				</el-table-column>
			</el-table>
      <Pagination class="mt15"
       :total="state.tableData.total"
       :currentPage="state.tableData.param.pageNo"
       :pageSize="state.tableData.param.pageSize" @handleChange="onHandleChange"/>
		</el-card>
		<UserDialog ref="userDialogRef" @refresh="getData()" />
	</div>
</template>

<script setup lang="ts" name="systemUser">
import { defineAsyncComponent, reactive, onMounted, ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { gettingData, system } from "/@/api/index.ts";
// 分页
const Pagination = defineAsyncComponent(() => import('/@/components/pagination/index.vue'));
// 引入组件
const UserDialog = defineAsyncComponent(() => import('/@/views/system/user/dialog.vue'));
const TableSearch = defineAsyncComponent(() => import('/@/views/system/user/TableSearch.vue'));


// 定义变量内容
const userDialogRef = ref();
const state = reactive({
	tableData: {
		data: [],
		total: 0,
		loading: false,
		param: {
      pageNo: 1,
			pageSize: 10,
		},
	},
});
// 查询分页
const getData =()=> {
  gettingData(state.tableData.param, system.USER_PAGE).then((res:string) => {
    const dataModel = JSON.parse(res)
    state.tableData.data = dataModel.data
    state.tableData.total = dataModel.totalCount
  })
}
// 查询事件
const searchChange =(data: object)=> {
  state.tableData.param = Object.assign({}, state.tableData.param, { ...data });
  getData();
}
// 打开修改用户弹窗
const onOpenEditUser = (type: string, row: RowUserType) => {
	userDialogRef.value.openDialog(type, row);

};
// 删除用户
const onRowDel = (row: RowUserType) => {
	ElMessageBox.confirm(`此操作将永久删除账户名称：“${row.userName}”，是否继续?`, '提示', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning',
	}).then(() => {
			getData();
			ElMessage.success('删除成功');
		})
		.catch(() => {});
};

// 分页改变
const onHandleChange = (val: object) => {
  if (val && val['type'] =='pageSize') {
    state.tableData.param.pageSize = val['value'];
  }
  if (val && val['type'] =='currentPage') {
    state.tableData.param.pageNo = val['value'];
  }
  getData();
};
// 页面加载时
onMounted(() => {
  getData()
});
</script>

<style scoped lang="scss">
.system-user-container {
	:deep(.el-card__body) {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: auto;
		.el-table {
			flex: 1;
		}
	}
}
</style>
