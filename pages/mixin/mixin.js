import {
	util,
	router
} from "@/utils/util.js"
import baseUrl from "@/utils/baseUrl.js"
export const publicMixin = {
	data() {
		return {
			baseUrl,
			shareData: {
				title: '',
				path: '',
			}
		}
	},
	//#ifdef MP-WEIXIN
	onShareAppMessage() {
		var pages = getCurrentPages() //获取加载的页面
		var currentPage = pages[pages.length - 1] //获取当前页面的对象
		var url = currentPage.route //当前页面url
		let curParam = pages[pages.length - 1].options;
		let param = curParam ? '?' : '';
		for (let key in curParam) {
			param += '&' + key + '=' + curParam[key]
		}
		return {
			title: this.shareData.title,
			imageUrl: this.shareData.imageUrl,
			path: this.shareData.path || "/" + url + param,
			success: res => {
				console.info(res)
			}
		}
	},
	//#endif 
	methods: {
		goToPage(url) {
			if (url) this.$router.push(url);
		},
		goToTab(url, param) {
			this.$router.reLaunch(url);
		},
		goBack(args = 1) {
			uni.navigateBack(args)
		}
	}
}