<template>
	<view class="index_page">
		<div class="nav-btn" v-for="(item,index) in navigator" :key="index" @click="jumpPage(item,index)">
			<img :src="item.icon" alt="" class="icon-img" /><span v-text="item.title"></span>
		</div>
	</view>
</template>
<script>
	import {
		publicMixin
	} from "@/pages/mixin/mixin.js"
	import {
		util,
		router
	} from "@/utils/util.js"
	// import request from '@/utils/request.js'
	export default {
		mixins: [publicMixin],
		data() {
			return {
				navigator: [{
						title: "食材入库",
						href: "/pages/inventory/warehousing/info",
						icon: "/static/canteen.png",
					},
					{
						title: "食材盘点",
						href: "/pages/inventory/check/list",
						icon: "/static/inventory.png",
					},
					{
						title: "食材出库",
						href: "/pages/inventory/outbound/info",
						icon: "/static/vehicle.png",
					}
				],

				materialId: '',
				warehouseId: ''

			};
		},
		onLoad() {},
		onShow() {},

		methods: {

			scanCode(index, item) {
				let me = this;
				uni.scanCode({
					success(res) {
						// console.log("扫码成功",res);
						if (res.errMsg == "scanCode:ok") {
							// me.goOderInfo(res.result);
							// me.goToPage("/pages/order/info?ticketNumber="+res.result);
							uni.request({
								url: res.result,
								success: (res2) => {
									console.log(res2.data.data);
									this.materialId = res2.data.data.materialId
									this.warehouseId = res2.data.data.warehouseId
									// console.log(this.materialId);
									// console.log(this.warehouseId);
									me.goToPage(
										`${item.href}?wareId=${this.warehouseId}?matId=${this.materialId}`
										);
								}
							})
						} else {
							me.$mvc.alert("扫码失败", "error");
						}
					},
					fail(e) {
						me.$mvc.alert("扫码失败", "error");
					}
				})
			},
			jumpPage(item, index) {
				if (index == 0 | index == 2) {
					this.scanCode(index, item)
				} else {
					this.goToPage(item.href);
				}

			},
			changeStatus() {}
		}
	}
</script>

<style lang="scss">
	.index_page {
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow-y: scroll;
		position: relative;

		.nav-btn {
			.icon-img {
				width: 50rpx;
				height: 50rpx;
				vertical-align: middle;
				margin-right: 25rpx;
			}

			width:80%;
			line-height:120rpx;
			color:#333;
			border:1px solid grey;
			margin:50rpx auto;
			text-align: center;
			border-radius:10rpx;

			&:hover {
				background: #FE5BA4;
				color: #fff;
				border: 0;
			}
		}
	}
</style>