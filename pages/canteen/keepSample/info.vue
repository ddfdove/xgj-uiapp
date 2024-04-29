<template>
	<view class="write_info_page">
		<div class="write_info_nav" v-if="menuButtonInfo" :style="{
        height: menuButtonInfo.height + 'px',
        top: menuButtonInfo.top + 'px',
      }">
			<image src="../../../static/back.png" mode="" @click="back()"></image>
			<span>食品留样</span>
		</div>
		<div class="write_info_content">
			<view class="personForm">

				<view class="flex-row-start formItem">
					<view class="label">食堂</view>
					<uni-data-select class="select" v-model="form.canteenId"
						:localdata="canteenOptions" placeholder="请选择食堂"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">餐别</view>
					<uni-data-select class="select" v-model="form.mealId"
						:localdata="mealOptions" placeholder="请选择餐别"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">菜品</view>
					<uni-data-select class="select" v-model="form.dishId"
						:localdata="dishOptions" placeholder="请选择菜品"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">留样结果</view>
					<input class="input" type="text" v-model="form.srResult" placeholder="请输入留样结果"/>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">留样时间</view>
					<uni-datetime-picker class="picker" type="datetime" v-model="form.srTime" placeholder="请选择留样时间" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">数量</view>
					<input class="input" type="text" v-model="form.servingQuantity" placeholder="请输入数量" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">留样人</view>
					<uni-data-select class="select" v-model="form.srBy"
						:localdata="userOptions" placeholder="请选择留样人"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">销毁人</view>
					<uni-data-select class="select" v-model="form.destructionBy"
						:localdata="userOptions" placeholder="请选择销毁人"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">单位</view>
					<input class="input" type="text" v-model="form.danwei" placeholder="请输入单位" />
				</view>
				<!-- <view class="flex-row-start formItem">
					<view class="label">负责人</view>
					<input class="input" type="text" v-model="form.fuzeByName" placeholder="请输入负责人" />
				</view> -->
				<view class="flex-row-start formItem">
					<view class="label">负责人</view>
					<uni-data-select class="select" v-model="form.fuzeBy"
						:localdata="userOptions" placeholder="请选择负责人"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">备注</view>
					<textarea class="textare" v-model="form.remark" placeholder="请输入备注..."></textarea>
				</view>
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
		getKeepSampleInfo,
		getKeepSampleSave,
		deptList,
		mxMaterialInfoList,
		userList,
		canteenList,
		dishList,
		mealList,
		getKeepSampleUpdate,
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
				canteenOptions:[],
				mealOptions:[],
				dishOptions:[],
				form: {
					
					        // "canteenName": "",
					        "canteenId": '',
							"mealId": '',
							// "mealName": "",
							"dishId": '',
							// "dishName": "",
							"srResult": "",
							"srTime": "",
							"servingQuantity": "",
							"srBy": '',
							// "srByName": "",
							"destructionBy": '',
							// "destructionByName": "",
							"danwei": "",
							"fuzeBy": '',
							// "fuzeByName": "",
					        "remark": "",
					        "srId": "",
					        
				},
				queryParam: {
					srId: "",
				},
				rules: [{
						name: "canteenId",
						rule: ["required"],
						msg: ["请选择食堂"],
					},
					{
						name: "mealId",
						rule: ["required"],
						msg: ["请选择餐别"],
					},
					{
						name: "dishId",
						rule: ["required"],
						msg: ["请选择菜品"],
					},
					{
						name: "srResult",
						rule: ["required"],
						msg: ["请输入留样结果"],
					},
					{
						name: "srTime",
						rule: ["required"],
						msg: ["请选择留样时间"],
					},
					{
						name: "servingQuantity",
						rule: ["required"],
						msg: ["请输入数量"],
					},
					{
						name: "srBy",
						rule: ["required"],
						msg: ["请选择留样人"],
					},
					{
						name: "destructionBy",
						rule: ["required"],
						msg: ["请选择销毁人"],
					},
					{
						name: "danwei",
						rule: ["required"],
						msg: ["请输入单位名"],
					},
					{
						name: "fuzeBy",
						rule: ["required"],
						msg: ["请选择负责人"],
					},
					
				],
			};
		},
		onLoad({
			id
		}) {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.getOptionsData(); //获取所有下拉数据
			if (id) {
				console.log(id)
				this.queryParam.srId = id;
				this.asyncGetDetail();
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			},
			//所有下拉列表数据
			getOptionsData() {
				Promise.all([deptList(), mxMaterialInfoList(), userList(),canteenList(),mealList(),dishList()]).then(
					(res) => {
						console.log("所有下拉数据", res);
						let dp = res[0];
						let mt = res[1];
						let user = res[2];
						let canteen=res[3];
						let meal=res[4];
						let dish=res[5];
						this.deptOptions = dp.data.map((item) => ({
							text: item.deptName,
							value: item.deptId,
							// value: String(item.deptId),
						}));
						this.materialOptions = mt.data.map((item) => ({
							text: item.materialName,
							value: item.materialId,
							// value: item.materialId,
						}));
						this.userOptions = user.data.map((item) => ({
							text: item.userName,
							value: item.userId,
							// value: String(item.userId),
						}));
						this.canteenOptions = canteen.data.map((item) => ({
							text: item.canteenName,
							value: item.canteenId,
							// value: String(item.canteenId),
						}));
						this.mealOptions = meal.data.map((item) => ({
							text: item.mealPeriodName,
							value: item.mealId,
							// value: String(item.mealId),
						}));
						this.dishOptions = dish.data.map((item) => ({
							text: item.dishName,
							value: item.dishId,
							// value: String(item.dishId),
						}));
					}
				);
			},
			suer() {
				let method = this.queryParam.srId ? getKeepSampleUpdate : getKeepSampleSave;
				let checkRes = validateForm.validation(this.form, this.rules);
				if (checkRes) {
					this.$mvc.alert(checkRes, "error");
				} else {
					method(this.form).then((res) => {
						if (res.code == 0) {
							this.$mvc.alert("提交成功!", "success");
							console.log('成功')
							setTimeout(() => {
								this.goToPage("/pages/canteen/keepSample/list");
							}, 2000);
						}
					});
				}
			},
			asyncGetDetail() {
				getKeepSampleInfo(this.queryParam).then((res) => {

					if (res.code == 0) {
						console.log(res);
						this.form = res.data;
						
					}
				});
			},
		},
	};
</script>
<style lang="scss">
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