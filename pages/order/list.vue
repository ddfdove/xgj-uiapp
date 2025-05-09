<template>
	<view class="write_list_page">
		<div class="write_list_nav">
			<div class="write_list_nav_view" v-if="menuButtonInfo" :style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
				<image src="../../static/back.png" mode="" @click="back"></image>
				<div :style="{height:menuButtonInfo.height+'px'}" v-if="type==2">
					<u--input placeholder="搜场地" prefixIcon="search" placeholderStyle="background-color:#F0F5FF;" prefixIconStyle="font-size: 26px;color: #6C7B92" shape="circle"></u--input>
				</div>
			</div>
		</div>
		<div class="write_list_content">
			<div class="write_list_content_top">
				<div class="write_list_content_top_l">
					<div  v-for="(item,index) in tabs" :key="index" @click="checkedDate(index,item)">
						<span :style="{'color':item.checked?'#FE5BA4':''}" v-text="item.label">今日核销</span>
					</div> 
				</div>
				<span class="write_list_content_top_r">共计：{{count}}张门票</span>
			</div>
			<div class="write_list_content_item" v-for="(item,index) in list" :key="index" @click="goToPage(`/pages/order/info?ticketNumber=${item.number}`)">
				<div class="write_list_content_item_top" >
					<span>核销码：{{item.number}}</span>
					<text >购票详情</text>
				</div>
				<div class="write_list_content_item_content">
					<div class="content_left">
						<image style="width:100%;height:100%;" :src="(item.orderExtActivity&&item.orderExtActivity.coverPath)?(baseUrl+item.orderExtActivity.coverPath):'../../wutu.png'" mode=""></image>
					</div>
					<div class="content_right">
						<p v-text="item.orderExtActivity&&item.orderExtActivity.name">2022年温泉镇第五届红楼迷马山…</p>
						<div>
							<p>￥<span v-text="item.actualPay">358.00</span></p>
							<text v-if="item.orderExtActivity">× {{item.orderExtActivity.ticketNum||0}}</text>
						</div>
						<span>核销时间 {{item.verificationTime}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="write_list_botttom">
			<div class="write_list_botttom_content">
				<image src="../../static/write_list_left.png" mode="" @click="changePage(0)"></image>
				<div>
					<p><span>{{listParam.pageNum}}</span>/{{totalPages}}</p>
					<text>当前共{{count}}条，每页显示{{listParam.pageLimit}}条</text>
				</div>
				<image src="../../static/write_list_right.png" mode="" @click="changePage(1)"></image>
			</div>
		</div>
	</view>
</template> 
<script>
	import {publicMixin} from "@/pages/mixin/mixin.js"
	import { mineOrderList} from "@/api/index.js" 
	import { util,router} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo:null,
				listParam: {
				  "number": "",
				  "orderType": "1",
				  "verificationTime":util.formatDate("YYYY-MM-DD",new Date()),
					pageNum: 1,
					pageLimit:10,
				},
				list: [],
				totalPages:0,//总页数
				count:"0",//总条数
				type:"",
				tabs:[{
					label:"今日核销",
					value:util.formatDate("YYYY-MM-DD",new Date()),
					checked:true,
					 
				},{
					label:"全部",
					value:"",
					checked:false,
				}]
			};
		},
		onLoad({type}) {
			this.type=type;
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect(); 
			this.asyncGetList();//核销列表
		},
		// onReachBottom(res) {
		// 	// console.log(this.listParam.pageNum, this.totalPages);
		// 	if (this.listParam.pageNum < this.totalPages) {
		// 		this.listParam.pageNum = this.listParam.pageNum + 1;
		// 		this.getList();
		// 	}
		// },
		methods:{
			checkedDate(i,row){
				this.tabs.forEach((item,index)=>{
					if(i==index){
						item.checked=true
						this.listParam.verificationTime=item.value;
						this.asyncGetList();
					}else item.checked=false;
				})
			},
			changePage(args){
				if(args){
					if(this.listParam.pageNum>=this.totalPages){
						this.$mvc.alert("已经是最后页了","error");
					}else{
						++this.listParam.pageNum 
						this.asyncGetList()
					}
				}else{
					if(this.listParam.pageNum<=1){
						this.$mvc.alert("已经是第一页了","error");
					}else{
						--this.listParam.pageNum
						this.asyncGetList()
					}
				}
			},
			back(){
				uni.navigateBack()
			},
			asyncGetList(){
				mineOrderList(this.listParam).then(res=>{
					if(res.code==200){
						let data = res.data;
						this.totalPages = data.totalPages; //总页数
						this.count=data.count;  
						this.list = data.list||[];
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.write_list_page{
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: hidden;
		.write_list_nav{
			width: 750rpx;
			height: 176rpx;
			background-color: #fff;
			position: relative;
			.write_list_nav_view{
				width: 750rpx;
				position: absolute;
				display: flex;
				flex-direction: row;
				align-items: center;
				>div{
					width: 440rpx;
					height: 64rpx;
					>::v-deep.u-input{
						background-color: #F0F5FF;
						padding-top: 3px!important;
						padding-bottom: 3px!important;
					}
					>::v-deep.u-border{
						border-color: #F0F5FF!important;
						   
					}
				}
				image{
					width: 44rpx;
					height: 44rpx;
					margin-left: 24rpx;
					margin-right: 10rpx;
				}
			}
		}
		.write_list_content{
			width: 750rpx;
			height: calc(100vh - 176rpx - 132rpx);
			padding-bottom: 50rpx;
			box-sizing: border-box;
			background-color: transparent;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow-y: scroll;
			.write_list_content_top{
				width: 702rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: 20rpx;
				.write_list_content_top_l{
					width: 384rpx;
					height: 62rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					>div{
						width: 180rpx;
						height: 62rpx;
						background: #FFFFFF;
						border-radius: 34rpx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						span{
							font-size: 26rpx;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #6C7B92 ;
							line-height: 26rpx;
						}
					}
				}
				.write_list_content_top_r{
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #6C7B92;
					line-height: 28rpx;
				}
			}
			.write_list_content_item{
				margin-top: 20rpx;
				width: 702rpx;
				height: 278rpx;
				background: #FFFFFF;
				box-shadow: 0px 14rpx 20rpx 0px rgba(246,246,249,0.75);
				border-radius: 16rpx;
				display: flex;
				padding: 30rpx 20rpx;
				box-sizing: border-box;
				flex-direction: column;
				.write_list_content_item_top{
					width: 662rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 30rpx;
					span{
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 28rpx;
					}
					text{
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #2591FF;
						line-height: 28rpx;
					}
				}
				.write_list_content_item_content{
					display: flex;
					flex-direction: row;
					align-items: center;
					.content_left{
						width: 160rpx;
						height: 160rpx;
						border-radius: 12rpx;
						margin-right: 20rpx;
						background-color: #0a0;
					}
					.content_right{
						width: 472rpx;
						height: 160rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						p{
							font-size: 30rpx;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: bold;
							color: #333333;
							line-height: 30rpx;
						}
						div{
							width: 472rpx;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							p{
								font-size: 22rpx;
								color: #FE5BA4;
								line-height: 22rpx;
								span{
									font-size: 34rpx;
									font-weight: bold;
									color: #FE5BA4;
									line-height: 34rpx;
								}
							}
							text{
								font-size: 26rpx;
								font-weight: 400;
								color: #979CB3;
								line-height: 26rpx;
							}
						}
						>span{
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #6C7B92;
							line-height: 25rpx;
						}
					}
				}
			}
		}
		.write_list_botttom{
			width: 750rpx;
			height: 132rpx;
			background: #FFFFFF;
			box-shadow: 0px -6px 14px 0px #F0F5FF;
			display: flex;
			flex-direction: row;
			justify-content: center;
			.write_list_botttom_content{
				margin-top: 21rpx;
				width: 602rpx;
				height: 58rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				>div{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					p{
						font-size: 26rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #FE5BA4;
						line-height: 26rpx;
						span{
							color:#FE5BA4;
						}
					}
					text{
						font-size: 22rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #979CB3;
						line-height: 22rpx;
					}
				}
				image{
					width: 100rpx;
					height: 58rpx;
				}
			}
		}
	}
</style>
