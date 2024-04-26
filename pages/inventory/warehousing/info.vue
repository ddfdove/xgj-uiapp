<template>
	<view class="write_info_page">
		<div class="write_info_nav" v-if="menuButtonInfo" :style="{
        height: menuButtonInfo.height + 'px',
        top: menuButtonInfo.top + 'px',
      }">
			<image src="../../../static/back.png" mode="" @click="back"></image>
			<span>入库记录详情</span>
		</div>
		<div class="write_info_content">
			<view class="personForm">
				<view class="flex-row-start formItem">
					<view class="label">采购台账单号</view>
					<uni-data-select class="select" v-model="form.productId" :localdata="productOptions"
						clear></uni-data-select>
					<!-- <uni-icons type="right" size="20"></uni-icons> -->
				</view>
				<view class="flex-row-start formItem">
					<view class="label">库房</view>
					<uni-data-select class="select" v-model="form.warehouseId"
						:localdata="warehouseOptions"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">食材</view>
					<uni-data-select class="select" v-model="form.materialId" :localdata="materialOptions"
						placeholder="请选择食材"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">规格</view>
					<input class="input" type="text" v-model="form.specification" placeholder="请输入规格" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">数量</view>
					<input class="input" type="text" v-model="form.quantity" placeholder="请输入数量" />
				</view>
				<view class="flex-row-start formItem">
					<view class="label">库管员签字关联库管</view>
					<uni-data-select class="select" v-model="form.keeperSignature"
						:localdata="userOptions"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">库管员复检关联库管</view>
					<uni-data-select class="select" v-model="form.keeperReinspection"
						:localdata="userOptions"></uni-data-select>
				</view>
				<view class="flex-row-start formItem">
					<view class="label">入库标志</view>
					<uni-data-select class="select" v-model="form.status" :localdata="mark"
						placeholder="请选择标志"></uni-data-select>
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
		getWarehousingInfo,
		getWarehousingSave,
		getWarehousingUpdate,
		deptList,
		mxMaterialInfoList,
		userList,
		productList,
		warehouseList
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
				productOptions: [],
				warehouseOptions: [],
				mark: [{
						value: '2',
						text: '已入库'
					},
					{
						value: '3',
						text: '未入库'
					},
				],
				form: {
					"productId": '', //采购台账单id
					// "productNumber": "TZ202404100946350004", //采购台账单号
					"warehouseId": '', //库房id
					// "warehouseName": "蔬菜库房01", //库房号
					"materialId": '', //食材id
					// "materialName": "土豆", //食材名
					"specification": "", //规格
					"quantity": '', //数量
					"keeperSignature": '', //库管员签字关联库管id
					// "keeperSignatureName": "王青利", //库管员签字关联库管
					"keeperReinspection": '', //库管员复检关联库管id
					// "keeperReinspectionName": "王青利", //库管员复检关联库管
					"status": "",
					"remark": "",


					// "createBy": "1",
					// "createTime": "2024-04-10 09:56:34",
					// "updateBy": "1",
					// "updateTime": "2024-04-11 18:29:33",
					// "isSelected": false,
					// "warehousingId": 3, //入库产品id
					// "warehousingNumber": "RK202404100956330001", //入库产品单号
					// "delFlag": null
				},
				queryParam: {
					warehousingId: "",
				},
				rules: [{
						name: "productId",
						rule: ["required"],
						msg: ["请选择采购台账单号"],
					},

					{
						name: "warehouseId",
						rule: ["required"],
						msg: ["请输入库房"],
					},
					{
						name: "materialId",
						rule: ["required"],
						msg: ["请选择食材"],
					},
					{
						name: "specification",
						rule: ["required"],
						msg: ["请选择规格"],
					},
					{
						name: "quantity",
						rule: ["required"],
						msg: ["请选择数量"],
					},
					{
						name: "keeperSignature",
						rule: ["required"],
						msg: ["库管员签字关联库管"],
					},
					{
						name: "keeperReinspection",
						rule: ["required"],
						msg: ["库管员复检关联库管"],
					},
				],
			};
		},
		onLoad({
			id,
			matId,
			wareId,

		}) {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			if (matId) {
				console.log('matId=' + matId)
				this.form.materialId = matId;
				
			}
			if (wareId) {
				console.log('wareId=' + wareId)
				this.form.warehouseId = wareId;
			}
			this.getOptionsData(); //获取所有下拉数据
			if (id) {
				console.log(id)
				this.queryParam.warehousingId = id;
				this.asyncGetDetail();
			}

		},
		methods: {
			back() {
				uni.navigateBack();
			},
			//所有下拉列表数据
			getOptionsData() {
				Promise.all([deptList(), mxMaterialInfoList(), userList(), productList(), warehouseList()]).then(
					(res) => {
						console.log("所有下拉数据", res);
						let dp = res[0];
						let mt = res[1];
						let user = res[2];
						let pro = res[3];
						let warehouse = res[4];
						this.deptOptions = dp.data.map((item) => ({
							text: item.deptName,
							value: String(item.deptId),
							value: item.deptId,
						}));
						this.materialOptions = mt.data.map((item) => ({
							text: item.materialName,
							value: item.materialId,
						}));
						this.userOptions = user.data.map((item) => ({
							text: item.userName,
							// value: String(item.userId),
							value: item.userId,
						}));
						this.productOptions = pro.data.map((item) => ({
							text: item.productNumber,
							// value: String(item.productId),
							value: item.productId,
						}));
						this.warehouseOptions = warehouse.data.map((item) => ({
							text: item.warehouseName,
							// value: String(item.warehouseId),
							value: item.warehouseId,

						}));
					}
				);
			},
			suer() {
				let method = this.queryParam.warehousingId ? getWarehousingUpdate : getWarehousingSave;
				let checkRes = validateForm.validation(this.form, this.rules);
				if (checkRes) {
					this.$mvc.alert(checkRes, "error");
				} else {
					method(this.form).then((res) => {
						if (res.code == 0) {
							this.$mvc.alert("提交成功!", "success");
							setTimeout(() => {
								this.goToPage("/pages/inventory/warehousing/list");
							}, 2000);
						}
					});
				}
			},
			asyncGetDetail() {
				getWarehousingInfo(this.queryParam).then((res) => {
					console.log(res);
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