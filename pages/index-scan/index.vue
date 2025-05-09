<template>
	<view class="index_page"> 
		<!-- <h3 class="title">非雪季票核销</h3> -->
		<div class="index_content">
			<div class="index_content_scan" @click="scanCode">
				<image src="../../static/index_scan.png" mode=""></image>
				<span>扫码核验</span>
			</div>
			<div class="index_content_input">
				<div class="index_content_input_text" v-if="textShow" @click="changeStatus">
					<image src="../../static/index_input.png" mode=""></image>
					<span>输入核销码</span>
				</div>
				<u--input v-else placeholderStyle="background-color:#F0F5FF;color:#333;font-weight: bold;" shape="circle" clearable v-model="inputValue" @blur="blur" @focus="focus" ></u--input>
			</div>
		</div>
		<div class="index_button">
			<div @click="goto('1')">
				<span>已核销-活动门票</span>
			</div>
			<div @click="goto('2')">
				<span>已核销-套票</span>
			</div>
		</div>
	</view>
</template>

<script>
	const validateForm = require("@/utils/validation.js");
	import {publicMixin} from "@/pages/mixin/mixin.js"
	import { login} from "@/api/index.js" 
	import { util,router} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				textShow:true,
				menuButtonInfo:null,
				inputValue:''
			};
		},
		onLoad() {
			// this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		onShow(){},
		methods:{ 
			goto(type){
				if(type=="1")this.$router.push("/pages/order/list?activityType="+type);
				else this.$router.push("/pages/packageTicket/orderList?activityType="+type);
				 // this.$mvc.alert("场地暂未开发","error");
			},
			naviGo(type){
				this.$router.push("/pages/packageTicket/index"); 
			},
			scanCode(){
				let me=this;
				uni.scanCode({
					success(res) {
					  // console.log("扫码成功",res);
					  if(res.errMsg=="scanCode:ok"){ 
						  me.goOderInfo(res.result);
						   // me.goToPage("/pages/order/info?ticketNumber="+res.result);
					  }else{
						  me.$mvc.alert("扫码失败","error");
					  }
					},
					fail(e){
						me.$mvc.alert("扫码失败","error");
					}
				})
			},
			blur(){
				if(!this.inputValue){  
					this.textShow = true
				}else{
					this.textShow = false
					if(this.inputValue!=""){
						console.log("输入",this.inputValue);
						// this.goToPage("/pages/order/info?ticketNumber="+this.inputValue);
						this.goOderInfo(this.inputValue);
					}else{
					    this.$mvc.alert("请输入订单号","error");
					} 
				}
			},
			goOderInfo(args){ 
				let [one,two]=args.split("_");
				console.log("扫描二维码",args,one,two);
				let ary=one.split("");
				
				let url="/pages/order/info?ticketNumber="
				if(two){
					url="/pages/packageTicket/orderInfo?ticketNumber="
				}else{
					if(ary[0]=="V"){
						url="/pages/order/info?ticketNumber="
					}else{
						url="/pages/packageTicket/orderInfo?ticketNumber="
					}
				}
				this.goToPage(url+encodeURIComponent(one));
			},
			focus(){
				this.textShow = false
			},
			changeStatus(){
				this.textShow = false
			}
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
		overflow-y: scroll;
		position: relative;
	}
	.index_nav{
		position: absolute;
		width: 750rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		span{
			font-size: 36rpx;
			font-weight: 600;
			color: #333333;
			line-height: 36rpx;
			margin-left: 30rpx;
		}
	}
	.index_content{
		margin-top: 216rpx;
		width: 690rpx;
		height: 560rpx;
		background: #FFFFFF;
		box-shadow: 0px 14rpx 20rpx 0px rgba(243,245,251,0.75);
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.index_content_scan{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 520rpx;
			height: 110rpx;
			background: #F0F5FF;
			border-radius: 12rpx;
			image{
				width: 52rpx;
				height: 52rpx;
				margin-right: 40rpx;
			}
			span{
				font-size: 34rpx;
				font-weight: 500;
				color: #333333;
				line-height: 34rpx;
			}
		}
		.index_content_input{
			width: 520rpx;
			height: 110rpx;
			margin-top: 100rpx;
			position: relative;
			::v-deep.u-input{
				border-radius:4px!important;
				background-color: #F0F5FF;
				padding-top: 3px!important;
				padding-bottom: 3px!important;
				height: 92rpx;
			}
			::v-deep.u-border{
				border-color: #F0F5FF!important;
				   
			}
			.index_content_input_text{
				left: 0;
				top: 0;
				position: absolute;
				z-index: 1;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 520rpx;
				height: 110rpx;
				background: #F0F5FF;
				border-radius: 12rpx;
				image{
					width: 52rpx;
					height: 52rpx;
					margin-right: 40rpx;
				}
				span{
					font-size: 34rpx;
					font-weight: 500;
					color: #333333;
					line-height: 34rpx;
				}
			}
		}
	}
	.index_button{
		width: 690rpx;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 60rpx;
		div{
			width: 330rpx;
			height: 80rpx;
			background: #FFFFFF;
			border-radius: 40rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			span{
				font-size: 28rpx;
				font-weight: bold;
				color: #FE5BA4;
				line-height: 28rpx;
			}
		}
	}
	.title{
		font-size: 35rpx;
		margin:180rpx auto 0rpx auto;
		text-align: center;
		font-weight: bold;
	}
	.mvc-nav{
		width: 690rpx;
		margin:40rpx auto;
		text-align: center;
		font-size: 35rpx;
		font-weight: bold;
		color: #FE5BA4;
		line-height: 28rpx;
		text-decoration: underline;
	}
</style>
