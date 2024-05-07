<template>

	<view class="index_page">
		<view class="index_nav" v-if="menuButtonInfo"
			:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<view>首页</view>
		</view>
		<view class="banner">
			<view style="flex:1.8">
				<view style="color: #FFFFFF; font-size: 40rpx;margin: 0 0 16rpx 30rpx;padding-left: 6rpx;">仓储材料储备系统</view>
				<view class="banner_text">
					智慧仓储，材料储备无忧</view>
			</view>
			<view style="flex:1.2">
				<image src="../../static/index_banner.png" mode=""
					style="width:100%;height:256rpx;margin:34rpx 22rpx 34rpx 0"></image>
			</view>
		</view>
		<text class="title"> 快捷操作</text>
		<view class="btn">
			<div class="nav-btn" v-for="(item,index) in navigator" :key="index" @click="jumpPage(item)">
				<!-- <img :src="item.icon" alt="" class="icon-img" />
				 -->
				<div :class="item.class" :style="item.style"></div>
				<div v-text="item.title"></div>
			</div>
		</view>

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
						title: "食堂管理",
						href: "/pages/canteen/index",
						// icon: "/static/canteen.png",
						class: "iconfont icon-jiucanshitang",
						style: "color:#79C372;font-size: 108rpx;"
					},
					{
						title: "库存管理",
						href: "/pages/inventory/index",
						icon: "/static/inventory.png",
						class: "iconfont icon-kucunguanli1",
						style: "color:#DF8711;font-size: 108rpx;"
					},
					{
						title: "车辆管理",
						href: "/pages/vehicle/index",
						icon: "/static/vehicle.png",
						class: "iconfont icon-cheliangguanli2",
						style: "color:#007FFF;font-size: 108rpx;"
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
				this.goToTab(item.href);
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

		.index_nav {
			position: absolute;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;

			view {
				font-size: 48rpx;
				// font-weight: 600;
				color: #1A1A1A;
				line-height: 32rpx;
				margin: 28rpx 0 28rpx 32rpx;
			}
		}

		.banner {
			/* banner 4 */

			position: absolute;
			left: 32rpx;
			top: 188rpx;
			width: 688rpx;
			height: 328rpx;
			border-radius: 16rpx;
			opacity: 1;
			align-self: stretch;
			background: #1DC36A;
			display: flex;
			align-items: center;

			.banner_text {
				color: #FFFFFF;
				font-size: 24rpx;
				margin-left: 24rpx;
				width: 280rpx;
				padding: 12rpx 24rpx;
				background: rgba(255, 255, 255, 0.1);
				border: 1px solid;
				border-radius: 48rpx;
				border-image: linear-gradient(180deg, #25C56F 0%, #24C46E 100%) 1;
				backdrop-filter: blur(10px);
			}
		}

		.title {
			/* 快捷操作 */

			position: absolute;
			left: 46rpx;
			top: 570rpx;
			width: 120rpx;
			height: 46rpx;
			opacity: 1;

			font-family: Source Han Sans CN;
			font-size: 30rpx;
			font-weight: 500;
			line-height: normal;
			display: flex;
			align-items: flex-end;
			letter-spacing: 0em;

			/* 文本/正文 */
			color: #1A1A1A;

		}

		.btn {
			position: absolute;
			left: 32rpx;
			top: 652rpx;
			width: 688rpx;
			height: 146rpx;
			opacity: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 0rpx;
			align-items: center;

			.nav_btn {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.iconfont {
					color: #1afa29;
					font-size: 108rpx;
				}
			}
		}

		// .nav-btn {
		// 	.icon-img {
		// 		width: 50rpx;
		// 		height: 50rpx;
		// 		vertical-align: middle;
		// 		margin-right: 25rpx;
		// 	}
		// 	width:80%;
		// 	line-height:120rpx;
		// 	color:#333;
		// 	border:1px solid grey;
		// 	margin:50rpx auto;
		// 	text-align: center;
		// 	border-radius:10rpx;

		// 	&:hover {
		// 		background: #FE5BA4;
		// 		color: #fff;
		// 		border: 0;
		// 	}
		// }
	}
</style>