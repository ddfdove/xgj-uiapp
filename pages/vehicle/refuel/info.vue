<template>
	<view class="write_info_page">
		<div class="write_info_nav" v-if="menuButtonInfo" :style="{
		  height: menuButtonInfo.height + 'px',
		  top: menuButtonInfo.top + 'px',
		}">
			<image src="/static/back.png" mode="" @click="back"></image>
			<span>加油详情</span>
		</div>
		<div class="write_info_content">
			<view class="personForm">
				<view class="flex-row-start formItem">
					<view class="label">单号：</view>
					<input class="input" type="text" v-model="form.orderNumber" placeholder="默认显示" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">加油升数</view>
					<input class="input" type="text" v-model="form.oilNumber" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">公里数</view>
					<input class="input" type="text" v-model="form.kilometreNumber" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">备注</view>
					<textarea class="textare" v-model="form.remark" placeholder="请输入备注..."></textarea>
				</view>
				<text>驾驶员：账号登录默认姓名</text>
				<view class="flex-row-start formItem">
					<view class="label">创建者</view>
					<input class="input" type="text" v-model="form.createBy" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">创建时间</view>
					<input class="input" type="text" v-model="form.createTime" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">更新者</view>
					<input class="input" type="text" v-model="form.updateBy" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">更新时间</view>
					<input class="input" type="text" v-model="form.updateTime" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">备注</view>
					<input class="input" type="text" v-model="form.remark" placeholder="单行输入" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">出车日期</view>
					<uni-datetime-picker class="picker" type="datetime" v-model="form.updateTime" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">回车日期</view>
					<uni-datetime-picker class="picker" type="datetime" v-model="form.updateTime" />
				</view>
			</view>
			<view class="uni-container">
				<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent"
						:total="total" @change="change" /></view>
			</view>
			<div class="write_info_content_button" @click="suer">
				<span>提交</span>
			</div>
		</div>
	</view>



</template>

<script>
	const validateForm = require("@/utils/validation.js");
	import {
		publicMixin
	} from "@/pages/mixin/mixin.js";
	import {
		refuelInfo,
		refuelSave,
		refuelUpdate,
		deptList,
		mxMaterialInfoList,
		userList,
	} from "@/api/index.js";
	import {
		util,
		router
	} from "@/utils/util.js";
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo: null,
				deptOptions: [],
				userOptions: [],
				materialOptions: [],
				searchVal: '',

				// tableData: [{
				// 	"date": "202",
				// 	"name": "Dcloud2",
				// 	"address": "上"
				// }, {
				// 	"date": "2020-03",
				// 	"name": "Dcloud3",
				// 	"address": "上 "
				// }, {
				// 	"date": "2020-",
				// 	"name": "Dcloud4",
				// 	"address": "上"
				// }],
				// 每页数据量
				pageSize: 10,
				// 当前页
				pageCurrent: 1,
				// 数据总量
				total: 0,
				loading: false,
				form: {
					"createBy": "1",
					"createTime": "2024-04-25 09:47:04",
					"updateBy": null,
					"updateTime": null,
					"remark": null,
					"isSelected": false,
					"drivingId": 2,
					"orderNumber": null,
					"oilNumber": null,
					"kilometreNumber": null,
					"peopleNumber": null,
					"address": null,
					"type": null,
					"status": null,
					"delFlag": null,
					"mxDrivingSupplementList": []
				},
				queryParam: {
					drivingId: "",
				},
				rules: [{
						name: "orderNumber",
						rule: ["required"],
						msg: ["请选择单号"],
					},
					{
						name: "oilNumber",
						rule: ["required"],
						msg: ["加油升数"],
					},
					{
						name: "kilometreNumber",
						rule: ["required"],
						msg: ["公里数"],
					},
					{
						name: "updateTime",
						rule: ["required"],
						msg: ["出车时间"],
					},
					{
						name: "updateTime",
						rule: ["required"],
						msg: ["回车时间"],
					},
					{
						name: "createBy",
						rule: ["required"],
						msg: ["创建者"],
					},
					{
						name: "createTime",
						rule: ["required"],
						msg: ["创建时间"],
					},
					{
						name: "updateBy",
						rule: ["required"],
						msg: ["更新者"],
					},
					{
						name: "updateTime",
						rule: ["required"],
						msg: ["更新时间"],
					},
					{
						name: "remark",
						rule: ["required"],
						msg: ["备注"],
					},
				],
			};
		},
		onLoad({
			id
		}) {
			// this.selectedIndexs = []
			// this.getData(1)
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.getOptionsData(); //获取所有下拉数据
			if (id) {
				this.queryParam.drivingId = id;
				this.asyncGetDetail();
			}
		},
		methods: {
			// 多选处理
			// selectedItems() {
			// 	return this.selectedIndexs.map(i => this.tableData[i])
			// },
			// // 多选
			// selectionChange(e) {
			// 	console.log(e.detail.index)
			// 	this.selectedIndexs = e.detail.index
			// },
			// //批量删除
			// delTable() {
			// 	console.log(this.selectedItems())
			// },
			// // 分页触发
			// change(e) {
			// 	this.$refs.table.clearSelection()
			// 	this.selectedIndexs.length = 0
			// 	this.getData(e.current)
			// },
			// 搜索
			search() {
				this.getData(1, this.searchVal)
			},
			// 获取数据
			// getData(pageCurrent, value = '') {
			// 	this.loading = true
			// 	this.pageCurrent = pageCurrent
			// 	// this.request({
			// 	// 	pageSize: this.pageSize,
			// 	// 	pageCurrent: pageCurrent,
			// 	// 	value: value,
			// 	// 	success: res => {
			// 	// 		// console.log('data', res);
			// 	// 		this.tableData = res.data
			// 	// 		this.total = res.total
			// 	// 		this.loading = false
			// 	// 	}
			// 	// })
			// },
			back() {
				uni.navigateBack();
			},
			//所有下拉列表数据
			getOptionsData() {
				Promise.all([deptList(), mxMaterialInfoList(), userList()]).then(
					(res) => {
						console.log("所有下拉数据", res);
						let dp = res[0];
						let mt = res[1];
						let user = res[2];
						this.deptOptions = dp.data.map((item) => ({
							text: item.deptName,
							value: String(item.deptId),
						}));
						this.materialOptions = mt.data.map((item) => ({
							text: item.materialName,
							value: item.materialId,
						}));
						this.userOptions = user.data.map((item) => ({
							text: item.userName,
							value: String(item.userId),
						}));
					}
				);
			},
			suer() {
				let method = this.queryParam.drivingId ? refuelUpdate : refuelSave;
				let checkRes = validateForm.validation(this.form, this.rules);
				if (checkRes) {
					this.$mvc.alert(checkRes, "error");
				} else {
					method(this.form).then((res) => {
						console.log(res)
						if (res.code == 0) {
							console.log(res)
							this.$mvc.alert("提交成功!", "success");
							setTimeout(() => {
								this.goToPage("/pages/vehicle/refuel/list");
							}, 2000);
						}
					});
				}
			},
			asyncGetDetail() {
				refuelInfo(this.queryParam).then((res) => {
					if (res.code == 0) {
						this.form = res.data;
						/* let {
						   department,
						   materialId,
						   planManager,
						   updateTime,
						   quantity,
						   unit,
						   remark,
						 } = res.data;
						 this.form = {
						   department,
						   materialId,
						   planManager,
						   planManager,
						   updateTime,
						   quantity,
						   unit,
						   remark,
						 }; */
					}
				});
			},
		},
	};
</script>
<style lang="scss">
	.uni-group {
		display: flex;
		align-items: center;
	}

	table-tr {
		display: flex;
		flex-direction: row;
	}

	tr-td {
		flex: 1;
	}

	.write_info_page {
		width: 750rpx;
		height: 100vh;
		background-color: #f5f8fe;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		overflow-y: scroll;

		.write_info_nav {
			position: absolute;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			image {
				width: 44rpx;
				height: 44rpx;
				position: absolute;
				left: 24rpx;
			}

			span {
				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 32rpx;
			}
		}

		.write_info_content {
			margin-top: 155rpx;
			padding-bottom: 50rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 702rpx;

			.personForm {
				border-radius: 30rpx;
				background-color: #ffffff;
				width: 100%;
				box-shadow: 0px -2px 27px 0px rgba(208, 208, 208, 0.25);

				.formItem {
					padding: 30rpx 0rpx;
					border-bottom: 1rpx solid #f2f2f2;
					margin: 0rpx 25rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;

					&:last-child {
						border-bottom: 0rpx;
					}

					.label {
						min-width: 150rpx;
						display: inline-block;
						font-weight: 500;
						font-size: 32rpx;
						color: #333333;
					}

					.input {
						font-size: 32rpx;
						border: 1px solid #e5e5e5;
						border-radius: 4px;
						padding: 0 5px;
						padding-left: 10px;
						-webkit-user-select: none;
						user-select: none;
						width: 100%;
						flex: 1;
						height: 80rpx;
					}

					.select {
						width: 100%;
						border: 0;

						.uni-select {
							font-size: 32rpx;
						}
					}

					.uni-date-editor {
						.uniui-calendar:before {
							content: "";
						}

						.uni-date__x-input {
							padding-left: 20rpx;
							font-size: 32rpx !important;
						}
					}

					.textare {
						border: 1px solid #e5e5e5;
						font-size: 32rpx;
						padding: 5px;
						height: 200rpx;
					}

					.input[type="textare"] {
						height: 200rpx;
					}
				}
			}

			.write_info_content_button {
				width: 620rpx;
				height: 84rpx;
				background: #fe5ba4;
				border-radius: 42rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 50rpx;

				span {
					font-size: 32rpx;
					font-weight: 400;
					color: #ffffff;
					line-height: 32rpx;
				}
			}
		}
	}
</style>