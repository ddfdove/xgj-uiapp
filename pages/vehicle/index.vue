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
				   {title:"加油",href:"/pages/vehicle/refuel/list",icon:"/static/canteen.png",type:'1'},
				   {title:"修理",href:"/pages/vehicle/repair/list",icon:"/static/inventory.png",type:'2'},
				   {title:"报修",href:"/pages/vehicle/reportRepair/list",icon:"/static/vehicle.png",type:'3'}
				 ]
			};
		},
		onLoad() {
			// this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		onShow(){},
		methods:{ 
			jumpPage(item){
				this.goToPage(`${item.href}?type=${item.type}`);
				// if(type=="1")this.$router.push("/pages/order/list?activityType="+type);
				// else this.$router.push("/pages/packageTicket/orderList?activityType="+type);
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
