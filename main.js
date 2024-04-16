import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import {util,router} from "@/utils/util.js" 
import './uni.promisify.adaptor'
import filters from "@/filters/filters.js";
Vue.config.productionTip = false
Vue.use(uView)
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		// radio: {
		// 	size: 15
		// }
		// 其他组件属性配置
		// ......
	}
})
/* 全局注入过滤器 */   
Vue.prototype.$mvc=util; 
//加载路由
Vue.prototype.$router =router;
//路由拦截
Vue.prototype.$router.beforeEach((type, to) => {
	//每次跳转页面进行微信登录检测是否过期 
	 uni[type]({ url: to }) 
})
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
App.mpType = 'app'
const app = new Vue({ 
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif