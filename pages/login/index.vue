<template>
	<view class="login_page">
		<view class="login_nav" v-if="menuButtonInfo"
			:style="{height:menuButtonInfo.height+'px',top:menuButtonInfo.top+'px'}">
			<view>西供局</view>
		</view>
		<view class="login_content">
			<view class="login_content_top">
				<!-- <image src="../../static/login_icon.png" mode=""></image> -->
			</view>
			<view class="login_content_title">欢迎来到西供局</view>
			<view class="login_content_input">
				<view style="margin-bottom: 40rpx;">
					<u--input placeholder="请输入手机号" v-model="form.username" placeholderStyle="background-color:#F0F5FF;"
						shape="circle"></u--input>
				</view>
				<view>
					<u--input placeholder="请输入密码" v-model="form.password" placeholderStyle="background-color:#F0F5FF;"
						shape="circle" type="password"></u--input>
				</view>
			</view>
			<view class="login_content_button" @click="submit">
				<view>登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	const validateForm = require("@/utils/validation.js");
	import {
		publicMixin
	} from "@/pages/mixin/mixin.js"
	import {
		auth,
		login
	} from "@/api/index.js"
	import {
		util,
		router
	} from "@/utils/util.js"
	export default {
		mixins: [publicMixin],
		data() {
			return {
				menuButtonInfo: {},
				form: {
					username: "admin",
					password: "1234qwer",
					rememberMe: ""
				},
				rules: [{
					name: "username",
					rule: ["required"], //,'isMobile'
					msg: ["请输入手机号", "请输入正确电话格式"]
				}, {
					name: "password",
					rule: ["required"],
					msg: ["请输入密码"]
				}],
			}
		},
		onLoad() {
			// this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		},
		methods: {
			submit() {
				let me = this;
				let checkRes = validateForm.validation(this.form, this.rules);
				if (checkRes) {
					this.$mvc.alert(checkRes, 'error');
				} else {
					this.goLogin();
					/* uni.showLoading({
						mask: true,
						title: '请稍候...',
						success(res) {}
					}) 
					wx.checkSession({
					  success () {
						 uni.hideLoading(); 
						  // me.goLogin();
						  wx.login({
						  	success(respone) { 
						  		uni.hideLoading();
						  		if(respone.errMsg=="login:ok"){
						  			auth(respone.code).then(res => {
						  				if (res.code == 200) {  
						  					util.setWXToken(res.wxtoken);  
						  					me.goLogin();
						  				}
						  			})
						  		} 
						  	}
						  })
					   },
					  fail () {
					    wx.login({
					    	success(respone) { 
								uni.hideLoading();
								if(respone.errMsg=="login:ok"){
									auth(respone.code).then(res => {
										if (res.code == 200) {  
											util.setWXToken(res.wxtoken);  
											me.goLogin();
										}
									})
								} 
					    	}
					    })
					  }
					})  
				
				 */
				}
			}, 
			goLogin() {
				login(this.form).then(res => {
					console.log(res);
					if(res.code==0){
						util.setToken(res.data.access_token);
						this.$mvc.alert("登录成功", 'success');
						 this.goToTab("/pages/index/index");
					} 
					console.log("登录成功", res);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_page {
		width: 750rpx;
		height: 100vh;
		background-color: #F5F8FE;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		overflow-y: scroll;

		.login_nav {
			position: absolute;
			width: 750rpx;
			display: flex;
			flex-direction: row;
			align-items: center;

			view {
				font-size: 36rpx;
				font-weight: 600;
				color: #333333;
				line-height: 36rpx;
				margin-left: 30rpx;
			}
		}

		.login_content {
			margin-top: 282rpx;
			width: 690rpx;
			height: 852rpx;
			background-color: #FFFFFF;
			box-shadow: 0px 14rpx 20rpx 0px rgba(243, 245, 251, 0.75);
			border-radius: 32rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			align-items: center;

			.login_content_top {
				width: 140rpx;
				height: 140rpx;
				margin: -70rpx 0 70rpx 0;

				image {
					width: 140rpx;
					height: 140rpx;
				}
			}

			.login_content_title {
				font-size: 34rpx;
				font-weight: 600;
				color: #333333;
				line-height: 34rpx;
				margin-bottom: 140rpx;
			}

			.login_content_input {
				>view {
					width: 590rpx;

					/deep/.u-input {
						border-radius: 4px !important;
						background-color: #F0F5FF;
						padding-top: 3px !important;
						padding-bottom: 3px !important;
						height: 92rpx;
					}

					/deep/.u-border {
						border-color: #F0F5FF !important;

					}
				}
			}

			.login_content_button {
				margin-top: 60rpx;
				width: 590rpx;
				height: 84rpx;
				background: #FE5BA4;
				border-radius: 42rpx;
				// opacity: 0.5;
				display: flex;
				justify-content: center;
				align-items: center;

				view {
					font-size: 32rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 32rpx;
				}
			}

			.reset {
				margin-top: 60rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #979CB3;
				line-height: 26rpx;
			}
		}
	}
</style>