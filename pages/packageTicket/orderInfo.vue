<template>
	<view class="write_info_page">
		<div class="write_info_nav" v-if="menuButtonInfo" :style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<image src="../../static/back.png" mode="" @click="back"></image>
			<span>核销订单</span>
		</div>
		<div class="write_info_content">
			<div class="content_order_info">
				<div class="content_order_info_tips">
					<span v-text="(info.packageTicketSnowRecord&&info.packageTicketSnowRecord.verificationStatus.code=='0')?'待核销':'已核销'">待核验</span>
				</div>
				<p v-text="info.snowTicketInfo&&info.snowTicketInfo.ticketName">温迪姆小小勇士障碍赛</p>
				<div class="content_order_info_content"   :style="{marginTop:'60rpx'}">
					<div><span>有效时间</span></div>
					<span v-if="info.snowTicketInfo&&info.snowTicketInfo.availableStartTime">
					{{info.snowTicketInfo.startDate|dateFormat("YYYY-mm-dd")}}&nbsp;{{info.snowTicketInfo.availableStartTime|dateFormat("HH:MM")}}~{{info.snowTicketInfo.endDate|dateFormat("YYYY-mm-dd")}}&nbsp;{{info.snowTicketInfo.availableEndTime|dateFormat("HH:MM")}}
					
					</span>
				</div>
				<div class="content_order_info_content">
					<div style="width:150rpx"><span>票号(核销码)</span></div>
					<span v-text="info.snowTicketInfo&&info.snowTicketInfo.code"></span>
				</div> 
				<div class="content_order_info_content" >
					<div><span>餐饮套餐</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.packageTicketInfo&&info.packageTicketInfo.cateringProducts.map(i=>i.name+'*'+i.number).join('+')"></span>
				</div>
				<div class="content_order_info_content" >
					<div><span>餐饮价格</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.packageTicketInfo&&info.packageTicketInfo.cateringPrice"></span>
				</div>
				<div class="content_order_info_content">
					<div><span>姓名</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.snowTicketInfo&&info.snowTicketInfo.buyerName"></span>
				</div>
				<div class="content_order_info_content">
					<div><span>手机号码</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.snowTicketInfo&&info.snowTicketInfo.buyerMobile"></span>
				</div>
				<!-- <div class="content_order_info_content" >
					<div><span>核验码</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.number"></span>
				</div>
				<div class="content_order_info_content">
					<div><span>儿童姓名</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.ticketExtActivitys&&info.ticketExtActivitys[0].childName"></span>
				</div>
				<div class="content_order_info_content">
					<div><span>儿童年龄</span></div>
					<span :style="{color:'#2591FF'}" v-text="info.ticketExtActivitys&&info.ticketExtActivitys[0].childAge"></span>
				</div> -->
			</div>
			<div class="content_payment_info">
				<div style="margin-bottom: 70rpx;">
					<div class="content_payment_info_price"   :style="{marginTop:'0'}">
						<div>
							<span>商品价格</span>
						</div>
						<span v-text="info.snowOrderInfo&&info.snowOrderInfo.orderTicketTotal"></span>
					</div>
					<div class="content_payment_info_price">
						<div>
							<span>押金金额</span>
						</div>
						<span v-text="info.snowOrderInfo&&info.snowOrderInfo.orderDeposit"></span>
					</div>
					<div class="content_payment_info_price">
						<div>
							<span>实付金额</span>
						</div>
						<span :style="{color:'#FE5BA4'}" v-text="info.snowOrderInfo&&info.snowOrderInfo.orderTotal"></span>
					</div>
				</div>
				<div class="content_payment_info_orderNo">
					<div>
						<span>订单编号</span>
					</div>
					<span v-text="info.snowOrderInfo&&info.snowOrderInfo.orderNo"></span>
				</div>
				<div class="content_payment_info_orderNo">
					<div>
						<span>下单时间</span>
					</div> 
					<span v-if="info.snowOrderInfo">{{info.snowOrderInfo.creationTime|dateFormat("YYYY-mm-dd HH:MM:SS")}}</span> 
				</div>
				<div class="content_payment_info_orderNo">
					<div>
						<span>支付方式</span>
					</div>
					<span v-text="info.snowOrderInfo&&info.snowOrderInfo.payMethod"></span>
				</div>
				<div class="content_payment_info_orderNo" v-if="info.packageTicketSnowRecord&&info.packageTicketSnowRecord.verificationTime">
					<div>
						<span>核销时间</span>
					</div>
					<span v-text="info.packageTicketSnowRecord&&info.packageTicketSnowRecord.verificationTime"></span>
				</div>
			</div>
			<div v-if="info.packageTicketSnowRecord&&info.packageTicketSnowRecord.verificationStatus.code=='0'" class="write_info_content_button" @click="suer">
				<span >确认核销</span>
			</div>
		</div>
	</view>
</template>

<script>
	const validateForm = require("@/utils/validation.js");
	import {publicMixin} from "@/pages/mixin/mixin.js"
	import { snowVerification,getSnowOrderDetail,getSnowOrderDetailById} from "@/api/index.js" 
	import { util,router} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo:null,
				info:{},
				writeOfForm:{
					qrCode :"",
				}
			}
		},
		onLoad({ticketNumber,type}) {
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()  
			ticketNumber=decodeURIComponent(ticketNumber); 
			if(ticketNumber){
				this.asyncGetDetail(ticketNumber,type)
				if(/^[0-9]*$/.test(ticketNumber)){ 
					this.writeOfForm.snowTicketNum=ticketNumber
				}else{
					this.writeOfForm.qrCode=ticketNumber;
				}
			} 
		},
		methods:{
			back(){
				uni.navigateBack()
			},
			suer(){
				// console.log(this.$mvc); 
				snowVerification(this.writeOfForm).then(res=>{
					if(res.code==200){
						this.$mvc.alert("核销成功!","success")
						setTimeout(()=>{
							this.$router.redirectTo("/pages/index/index")
						},2000)
					}
				})
			},
			asyncGetDetail(args,type){   
				console.log("type",type);
			    let method=getSnowOrderDetail
				let param={qrCode:"",snowTicketNum:""}; 
				
				if(type=="list"){
					method=getSnowOrderDetailById;
					param={recordId:args};
				}else{
					//判断雪票是否是二维码方式进入
					if(/^[0-9]*$/.test(args)){
						param.snowTicketNum=args
					}else{
						param.qrCode=args
					}
				}
				method(param).then(res=>{
					if(res.code==200){
						this.info=res.data;
						// this.writeOfForm.orderNumber=this.info.order.number;
					}
				})
			}
			
		}
	}
</script> 
<style lang="scss">
	.write_info_page{
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		overflow-y: scroll;
		.write_info_nav{
			position: absolute;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			image{
				width: 44rpx;
				height: 44rpx;
				position: absolute;
				left: 24rpx;
			}
			span{
				font-size: 32rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #333333;
				line-height: 32rpx;
			}
		}
		.write_info_content{
			margin-top: 196rpx;
			padding-bottom: 50rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			.content_order_info{
				width: 702rpx;
				background: #FFFFFF;
				border-radius: 30rpx;
				position: relative;
				padding: 40rpx 30rpx;
				box-sizing: border-box;
				.content_order_info_tips{
					position: absolute;
					right: 0;
					top: 0;
					width: 130rpx;
					height: 48rpx;
					background: #FE5BA4;
					border-top-right-radius: 30rpx;
					border-bottom-left-radius: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					span{
						font-size: 24rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 24rpx;
					}
				}
				>p{
					font-size: 32rpx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: bold;
					color: #333333;
					line-height: 32rpx;
					margin-bottom: 26rpx;
				}
				.content_order_info_content{
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: 34rpx;
					>div{
						width: 112rpx;
						span{
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #6C7B92;
							line-height: 28rpx;
						}
					}
					>span{
						margin-left: 40rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 28rpx;
					}
				}
			}
			.content_payment_info{
				width: 702rpx;
				background: #FFFFFF;
				border-radius: 30rpx;
				padding: 40rpx 30rpx;
				box-sizing: border-box;
				margin-top: 24rpx;
				.content_payment_info_price{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-top: 34rpx;
					>div{
						width: 112rpx;
						span{
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #6C7B92;
							line-height: 28rpx;
						}
					}
					>span{
						margin-left: 40rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #666;
						line-height: 28rpx;
					}
				}.content_payment_info_orderNo{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-top: 34rpx;
					>div{
						width: 112rpx;
						span{
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #6C7B92;
							line-height: 28rpx;
						}
					}
					>span{
						margin-left: 40rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #666;
						line-height: 28rpx;
					}
				}
			}
			.write_info_content_button{
				width: 620rpx;
				height: 84rpx;
				background: #FE5BA4;
				border-radius: 42rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 50rpx;
				span{
					font-size: 32rpx;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 32rpx;
				}
			}
		}
	}
</style>
