<template>
	<view class="index_page">
		<view class="canteen_nav" v-if="menuButtonInfo"
			:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<image src="../../static/back.png" mode="" @click="this.goTab('/pages/index/index');"></image>
			<view>车辆管理</view>
		</view>
		<view class="purchase">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[0])">
				<div style="font-size: 36rpx;">加油</div>
				<div style="font-size: 24rpx;">车辆加油，动力源源不断</div>
			</view>
			<view class="icon iconfont icon-youxiang" style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);">
			</view>
		</view>
		<view class="inspection">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[1])">
				<div style="font-size: 36rpx;">修理</div>
				<div style="font-size: 24rpx;">专业修理，故障一修就好</div>
			</view>
			<view class="icon iconfont icon-xiulixian"
				style="font-size: 108rpx;flex:1;color: rgba(255, 255, 255, 0.8);"></view>
		</view>
		<view class="keepSample">
			<view class="title" style="flex:3;" @click="jumpPage(navigator[2])">
				<div style="font-size: 36rpx;">报修</div>
				<div style="font-size: 24rpx;">设备故障，及时报修解决</div>
			</view>
			<view class="icon iconfont icon-baoxiu" style="font-size: 100rpx;flex:1;color: rgba(255, 255, 255, 0.8);">
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
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo: null,
				navigator: [{
						title: "加油",
						href: "/pages/vehicle/refuel/list",
						icon: "/static/canteen.png",
						type: '1'
					},
					{
						title: "修理",
						href: "/pages/vehicle/repair/list",
						icon: "/static/inventory.png",
						type: '2'
					},
					{
						title: "报修",
						href: "/pages/vehicle/reportRepair/list",
						icon: "/static/vehicle.png",
						type: '3'
					}
				]
			};
		},
		onLoad() {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		onShow() {},
		methods: {
			jumpPage(item) {
				this.goToPage(`${item.href}?type=${item.type}`);
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

		.purchase {
			position: absolute;
			left: 20px;
			top: 104px;
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
			top: 197px;
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
			top: 290px;
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