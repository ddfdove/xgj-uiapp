<template>
	<!-- <view class="index_page" style="background:url('../../static/bg.png');background-size: 381px 381px;background-repeat: no-repeat;"> -->
	<view class="index_page" :style="{backgroundImage:`url(${bgImg})`,backgroundSize: '381px 381px',backgroundRepeat:'no-repeat'}">
		<view class="canteen_nav" v-if="menuButtonInfo"
			:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<image src="../../static/back.png" mode="" @click="this.goTab('/pages/index/index');"></image>
			<view>库存管理</view>
		</view>
		<h class="tip">库存管理，健康，高效，安全至上</h>
		<view class="purchase">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[0],0)">
				<div style="font-size: 36rpx;">食材入库</div>
				<div style="font-size: 24rpx;">食材新鲜，品质入库保障</div>
			</view>
			<view class="icon iconfont icon-ruku" style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);">
			</view>
		</view>
		<view class="inspection">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[1],1)">
				<div style="font-size: 36rpx;">食材盘点</div>
				<div style="font-size: 24rpx;">食材盘点，确保数量品质无虞</div>
			</view>
			<view class="icon iconfont icon-navicon-kcpd"
				style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);"></view>
		</view>
		<view class="keepSample">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[2],2)">
				<div style="font-size: 36rpx;">食品出库</div>
				<div style="font-size: 24rpx;">食品出库，新鲜直达安全</div>
			</view>
			<view class="icon iconfont icon-chuku" style="font-size: 100rpx;flex:1;color: rgba(255, 255, 255, 0.8);">
			</view>
		</view>
		<!-- <div class="btn">
			<div class="nav-btn" v-for="(item,index) in navigator" :key="index" @click="jumpPage(item)">
				<img :src="item.icon" alt="" class="icon-img" /><span v-text="item.title"></span>
			</div>
		</div> -->

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
	import bgImg from "../../static/bg.png"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				bgImg:  bgImg,
				menuButtonInfo: null,
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
		onLoad() {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
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
									let data = res2.data.data;

									// console.log(this.materialId);
									// console.log(this.warehouseId);
									// me.goToPage(
									// 	`${item.href}?wareId=${this.warehouseId}&matId=${this.materialId}`
									// 	);
									me.goToPage(`${item.href}?info=${JSON.stringify(data)}`);
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

		.canteen_nav {
			position: absolute;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;

			image {
				width: 44rpx;
				height: 44rpx;
				margin-left: 24rpx;
				margin-right: 10rpx;
			}

			view {
				font-size: 48rpx;
				// font-weight: 600;
				color: #1A1A1A;
				line-height: 32rpx;
				margin: 28rpx 0 28rpx 32rpx;
			}
		}
        .tip{
        	/* 食堂管理，健康、高效、安全至上 */
        	
        	position: absolute;
        	left: 46.66px;
        	top: 105.67px;
        	width: 300px;
        	height: 22.97px;
        	opacity: 1;
        		
        	font-family: ZhenyanGB;
        	font-size: 20px;
        	font-weight: 800;
        	line-height: 140%;
        	text-align: center;
        	letter-spacing: 0em;
        		text-align: center;
        	font-variation-settings: "opsz" auto;
        	color: #1DC36A;
        		
        	text-shadow: 0px 2px 2px rgba(24, 144, 255, 0.08);
        	
        }
		.purchase {
			position: absolute;
			left: 20px;
			top: 172.94px;
			width: 336px;
			height: 78px;
			border-radius: 12px;
			opacity: 1;
			background: linear-gradient(180deg, #E6A733 0%, #E8AE39 100%);
			display: flex;
			align-items: center;

			view>div {
				color: #FFFFFF;
				padding-left: 30rpx;
			}
		}

		.inspection {
			position: absolute;
			left: 20px;
			top: 265.94px;
			width: 336px;
			height: 78px;
			border-radius: 12px;
			opacity: 1;
			background: linear-gradient(180deg, #0066FF 0%, #6786EE 100%);
			display: flex;
			align-items: center;

			view>div {
				color: #FFFFFF;
				padding-left: 30rpx;
			}
		}

		.keepSample {
			position: absolute;
			left: 20px;
			top: 358.94px;
			width: 336px;
			height: 78px;
			border-radius: 12px;
			opacity: 1;
			background: linear-gradient(180deg, #1DC36A 0%, #31C877 100%);
			display: flex;
			align-items: center;

			view>div {
				color: #FFFFFF;
				padding-left: 30rpx;
			}
		}

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