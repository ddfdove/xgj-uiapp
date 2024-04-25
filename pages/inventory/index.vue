<template>
	<view class="index_page"> 
		 <div class="nav-btn" v-for="(item,index) in navigator" :key="index" @click="jumpPage(item)">
			 <img :src="item.icon" alt="" class="icon-img" /><span v-text="item.title"></span>
		 </div>
	</view>
</template>
<script>
	import {publicMixin} from "@/pages/mixin/mixin.js"
	import { util,router} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				 navigator:[
				   {title:"食材入库",href:"/pages/inventory/warehousing/list",icon:"/static/canteen.png",},
				   {title:"食材盘点",href:"/pages/inventory/check/list",icon:"/static/inventory.png",},
				   {title:"食材出库",href:"/pages/inventory/outbound/list",icon:"/static/vehicle.png",}
				 ]
			};
		},
		onLoad() {
			// this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		onShow(){},
		methods:{ 
			jumpPage(item){
				this.goToPage(item.href);
			}, 
			changeStatus(){}
		}
	}
</script>

<style lang="scss">
	.index_page{
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content:center;
		overflow-y: scroll;
		position: relative;
		.nav-btn{
			.icon-img{width:50rpx;height:50rpx;vertical-align:middle;margin-right:25rpx;}
			 width:80%;
			 line-height:120rpx;
			 color:#333;
			 border:1px solid grey;
			 margin:50rpx auto;
			 text-align: center;
			 border-radius:10rpx;
			 &:hover{
				 background:#FE5BA4;
				 color:#fff;
				 border:0;
			 }
		}
	}
</style>
