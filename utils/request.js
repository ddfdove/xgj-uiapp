import baseUrl from "@/utils/baseUrl.js"
import {util,router} from "@/utils/util.js"


let headerToken={};
export default function request({url,data={},method='POST',isFormRequest=false,showload=true}){  
	return new Promise((resolve,reject) => {
		if(showload) uni.showLoading({ title: '加载中...', mask:true }); 
		let urls=baseUrl+url; 
		// let wxtoken=util.getWXToken()
		// if(wxtoken) headerToken['X-Wx-Login-Token']=wxtoken
		let token=util.getToken() 
		if(token) headerToken['access_token']=token   
		if(/https/.test(url))urls=url;    
		uni.request({
			url:urls,
			data,
			method, 
			header:{
				...headerToken, 
				'content-type': isFormRequest ?'application/x-www-form-urlencoded' : 'application/json',
			},
			success: (res) => { 
				if(showload) uni.hideLoading(); 
				if (res.statusCode == 200) { 
					if(res.data&&res.data.code=="0"){  
					resolve(res.data)
					}else if(res.data&&(res.data.code=="401")){  
							 var pages = getCurrentPages() //获取加载的页面  
							 var currentPage = pages[pages.length - 1] //获取当前页面的对象
							 var url = currentPage.route //当前页面url 
						  	util.setToken("");
							 if(url=="pages/login/index"){
								 uni.showToast({ title:res.data.msg,icon:'none'});
							 }else{
								  console.log("转发当前页面到登录",url);
								 let curParam = pages[pages.length - 1].options;
								  let param = '?'
								  for (let key in curParam) {
								      param += '&' + key + '=' + curParam[key]
								  } 
								 router.push("/pages/login/index?url="+encodeURIComponent("/"+url+param))
							 } 
					}else{
						uni.showToast({ title:res.data.msg,icon:'none'});
						reject(res.data);
					}
				}else if(res.statusCode == 403||res.statusCode == 401){  
					router.push("/pages/login/index") 
				}else{
					uni.showToast({title:`接口请求${res.statusCode}`,icon:'none'});
				} 
			},
			fail(err) {
				uni.showToast({ title: '请求失败', icon:'none'});
				reject(err)
			},
			complete:()=>{}
		}) 
		
	})
}
