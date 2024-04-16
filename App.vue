<script>
	import {util,router} from "@/utils/util.js" 
	import { auth} from "@/api/index.js" 
	export default {
		onLaunch: function() {  
			try{
				let token=util.getToken()
				console.log("跳转获取值",token); 
				// if(!token)uni.redirectTo({url:"/pages/login/index"}) 
			}catch(e){
				console.error(e);
			}
		},
		onLoad:function(){
		
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import url('@/static/css/iconfont.css');
	@import url('@/static/css/flex_base.css');
	@import '@/uni_modules/uview-ui/theme.scss';
	/*每个页面公共css */
</style>
