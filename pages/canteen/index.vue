<template>
	<!-- <view class="index_page" style="background:url('../../static/bg.png');background-size: 381px 381px;background-repeat: no-repeat;"> -->
	<view class="index_page" :style="{backgroundImage:`url(${bgImg})`,backgroundSize: '381px 381px',backgroundRepeat:'no-repeat'}">
	<!-- <view class="index_page" :style="{backgroundImage:`url(${common.urlTobase64('/static', 'bg')})`"> -->
		<!-- <image class="image-bg" src="/static/bg.png"/> -->
		<view class="canteen_nav" v-if="menuButtonInfo"
			:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<image src="../../static/back.png" mode="" @click="this.goTab('/pages/index/index');"></image>
			<view>食堂管理</view>
		</view>
		<h class="tip">食堂管理，健康，高效，安全至上</h>
		<view class="purchase">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[0])">
				<div style="font-size: 36rpx;">采购计划</div>
				<div style="font-size: 24rpx;">采购计划，精准筹划先行</div>
			</view>
			<view class="icon iconfont icon-caigoujihua3"
				style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);"></view>
		</view>
		<view class="inspection">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[1])">
				<div style="font-size: 36rpx;">食材检验</div>
				<div style="font-size: 24rpx;">食材检验，安全放心每一餐</div>
			</view>
			<view class="icon iconfont icon-jianyanzhe"
				style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);"></view>
		</view>
		<view class="keepSample">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[2])">
				<div style="font-size: 36rpx;">食品留样</div>
				<div style="font-size: 24rpx;">食品留样，安全追溯无忧</div>
			</view>
			<view class="icon iconfont icon-caipinliuyang"
				style="font-size: 100rpx;flex:1;color: rgba(255, 255, 255, 0.8);"></view>
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
	 import common from '@/utils/common.js'
	 import bgImg from "../../static/bg.png"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				// imageURL: '../../static/image 3@1x.png',
				bgImg:  bgImg,
				menuButtonInfo: null,
				navigator: [{
						title: "采购计划",
						href: "/pages/canteen/purchase/list",
						icon: "/static/canteen.png",
					},
					{
						title: "食材检验",
						href: "/pages/canteen/inspection/list",
						icon: "/static/inventory.png",
					},
					{
						title: "食品留样",
						href: "/pages/canteen/keepSample/list",
						icon: "/static/vehicle.png",
					}
				]
			};
		},
		onLoad() {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		onShow() {},
		methods: {
			back() {
				this.goTab('/pages/index/index');
			},
			jumpPage(item) {
				this.goToPage(item.href);
				// if(type=="1")this.$router.push("/pages/order/list?activityType="+type);
				// else this.$router.push("/pages/packageTicket/orderList?activityType="+type);
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

		//       background-image: url('/static/image 3@1x.png');
		// background-size: 381px 381px;
		// background-repeat: no-repeat;
		// .image-bg {
		// 	position: absolute;
		// 	z-index: -1;
		// 	left: 0;
		// 	right: 0;
		// 	bottom: 0;
		// 	right: 0;
		// 	width: 100%;
		// 	height: 100%;
		// }

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

	// page {
	// 	background-color: #1DC36A;
	//   background-image: url('/static/bg.png'); //这里将图片路径替换成你的图片路径
	//   background-size: cover; // 背景图片等比例缩放并铺满整个页面
	//   background-repeat: no-repeat; // 不重复平铺背景图片
	//   background-position: center center; // 背景图片居中显示
	//   background-size: 381px 381px;
	//   // filter: opacity(0.25);
	// }
</style>