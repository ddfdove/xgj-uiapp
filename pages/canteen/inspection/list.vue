<template>
	<view class="write_list_page">
		<div class="write_list_nav">
			<div class="write_list_nav_view" v-if="menuButtonInfo"
				:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
				<image src="../../../static/back.png" mode="" @click="back"></image>
				<text
					style="margin-left: 80px;color: #1A1A1A;font-size: 18px; font-weight: 500;font-family: Source Han Sans CN;">添加食材检验</text>
			</div>
		</div>
		<div class="write_list_content">
			<div>
				<div class="write_list_content_top">
					<u-search placeholder="请输入检验人" prefixIcon="search" placeholderStyle=";color:#1A1A1A"
						prefixIconStyle="font-size: 26px;color: #BFBFBF" bgColor="#FFFFFF" shape="square" height="76rpx"
						searchIconSize="44" :showAction="true" v-model="keyword" @search="searchHistory"
						:actionStyle="actionStyle"></u-search>
				</div>
				<div style="margin: 15px 0 10px 0px; color: #86909C;font-size: 13px;">共计：{{count}}条</div>
			</div>
			<div>
				<div class="write_list_content_item" v-for="(item,index) in list" :key="index"
					@click="goToPage(`/pages/canteen/inspection/info?id=${item.testId}`)"
					style="display: flex;flex-direction: column;">
					<div class="write_list_content_item_top" style="flex:1;display: flex;margin-top: 20px;">
						<span
							style="margin-left: 30px;color: #1A1A1A;font-size: 18px; font-weight: 500;">{{item.materialName}}</span>
						<span style="margin-left: 160px;">{{item.testByName}}</span>
					</div>
					<div class="write_list_content_item_content" style="flex:1;display: flex;">
						<span
							style="flex:1.6;margin-left: 10px;">国家标准：{{item.nationalStandard?item.nationalStandard:'无'}}</span>
						<span style="flex:1;">日期：{{item.testTime.substr(0,10)}}</span>
					</div>

				</div>
				<button style="margin-top: 40px;background-color: #1DC36A;" @click="checkedDate()">添加</button>
			</div>

		</div>
		</div>
		<div class="write_list_botttom">
			<div class="write_list_botttom_content">
				<image src="../../../static/write_list_left.png" mode="" @click="changePage(0)"></image>
				<div>
					<p><span>{{listParam.pageNum}}</span>/{{totalPages}}</p>
					<text>当前共{{count}}条，每页显示{{listParam.pageSize}}条</text>
				</div>
				<image src="../../../static/write_list_right.png" mode="" @click="changePage(1)"></image>
			</div>
		</div>
	</view>
</template>
<script>
	import {
		publicMixin
	} from "@/pages/mixin/mixin.js"
	import {
		getInspectionList
	} from "@/api/index.js"
	import {
		util,
		router
	} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo: null,
				listParam: {
					"createBy": "",
					"createTime": "",
					"delFlag": "",
					"department": "",
					"isSelected": true,
					"materialId": '',
					"materialName": "",
					"params": {},
					"planDate": "",
					"planManager": "",
					"planManagerName": "",
					"purchaseId": '',
					"purchaseNumber": "",
					"quantity": '',
					"remark": "",
					"status": "",
					"unit": "",
					"updateBy": "",
					"updateTime": "",
					pageNum: 1,
					pageSize: 10,
				},
				actionStyle: {
					backgroundColor: '#1DC36A',
					margin: '0 10px 0 20px',
					padding: '10px',
					width: '40px',
					height: '18px',
					lineHeight: '18px',
					color: '#FFFFFF',
					fontSize: '14px'
				},
				keyword: '',
				searchList: [],
				list: [],
				totalPages: 0, //总页数
				count: "0", //总条数

			};
		},
		onLoad({}) {

			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.asyncGetList(); //列表
		},
		// onReachBottom(res) {
		// 	// console.log(this.listParam.pageNum, this.totalPages);
		// 	if (this.listParam.pageNum < this.totalPages) {
		// 		this.listParam.pageNum = this.listParam.pageNum + 1;
		// 		this.getList();
		// 	}
		// },
		methods: {
			checkedDate() {
				this.goToPage(`/pages/canteen/inspection/info`)
			},
			changePage(args) {
				if (args) {
					if (this.listParam.pageNum >= this.totalPages) {
						this.$mvc.alert("已经是最后页了", "error");
					} else {
						++this.listParam.pageNum
						this.asyncGetList()
					}
				} else {
					if (this.listParam.pageNum <= 1) {
						this.$mvc.alert("已经是第一页了", "error");
					} else {
						--this.listParam.pageNum
						this.asyncGetList()
					}
				}
			},
			back() {
				uni.navigateBack()
			},
			searchHistory(value) {
				// value自动接收输入框中的内容
				if (value == '') {
					//如果输入的值为空则加载所有的列表
					this.asyncGetList();
				} else {
					//先清空展示的数据
					this.searchList = []
					//然后开始循环全部数据
					for (var i = 0; i < this.list.length; i++) {
						//判断数据里面是否有符合输入的内容  不符合返回-1 只需要大于或等于0就是符合
						//（核心所在，其它都是根据需求来自己写）
						if (this.list[i].testByName.indexOf(value) >= 0 |this.list[i].materialName.indexOf(value) >= 0) {
							this.searchList.push(this.list[i])
						}
					}
				}
				this.list=this.searchList
			},
			asyncGetList() {
				getInspectionList(this.listParam).then(res => {
					console.log(res);
					if (res.code == 0) {
						this.totalPages = Math.ceil(res.total / res.pageSize); //总页数
						this.count = res.total;
						this.listParam.pageNum = res.pageNum;
						this.listParam.pageSize = res.pageSize;
						this.list = res.data || [];
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.write_list_page {
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: hidden;

		.write_list_nav {
			width: 750rpx;
			height: 176rpx;
			background-color: #fff;
			position: relative;

			.write_list_nav_view {
				width: 750rpx;
				position: absolute;
				display: flex;
				flex-direction: row;
				align-items: center;

				>div {
					width: 440rpx;
					height: 64rpx;

					>/deep/.u-input {
						background-color: #F0F5FF;
						padding-top: 3px !important;
						padding-bottom: 3px !important;
					}

					>/deep/.u-border {
						border-color: #F0F5FF !important;

					}
				}

				image {
					width: 44rpx;
					height: 44rpx;
					margin-left: 24rpx;
					margin-right: 10rpx;
				}
			}
		}

		.write_list_content {
			width: 750rpx;
			height: calc(100vh - 176rpx - 132rpx);
			padding-bottom: 50rpx;
			box-sizing: border-box;
			background-color: transparent;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow-y: scroll;


			.write_list_content_top {
				width: 702rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				margin-top: 20rpx;

				.write_list_content_top_l {
					width: 384rpx;
					height: 62rpx;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					>div {
						width: 180rpx;
						height: 62rpx;
						background: #FFFFFF;
						border-radius: 34rpx;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						span {
							font-size: 26rpx;
							font-family: PingFangSC-Semibold, PingFang SC;
							font-weight: 600;
							color: #6C7B92;
							line-height: 26rpx;
						}
					}
				}

				.write_list_content_top_r {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #6C7B92;
					line-height: 28rpx;
				}
			}

			.write_list_content_item {
				margin-top: 20rpx;
				width: 702rpx;
				height: 278rpx;
				background: #FFFFFF;
				box-shadow: 0px 14rpx 20rpx 0px rgba(246, 246, 249, 0.75);
				border-radius: 16rpx;
				display: flex;
				padding: 30rpx 20rpx;
				box-sizing: border-box;
				flex-direction: column;

				span {
					flex: 1;
					color: #86909C;
					font-size: 13px;
					font-weight: 350;
				}


			}
		}

		.write_list_botttom {
			width: 750rpx;
			height: 132rpx;
			background: #FFFFFF;
			box-shadow: 0px -6px 14px 0px #F0F5FF;
			display: flex;
			flex-direction: row;
			justify-content: center;

			.write_list_botttom_content {
				margin-top: 21rpx;
				width: 602rpx;
				height: 58rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				>div {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;

					p {
						font-size: 26rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #FE5BA4;
						line-height: 26rpx;

						span {
							color: #FE5BA4;
						}
					}

					text {
						font-size: 22rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #979CB3;
						line-height: 22rpx;
					}
				}

				image {
					width: 100rpx;
					height: 58rpx;
				}
			}
		}
	}
</style>