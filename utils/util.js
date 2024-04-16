class Router {
	constructor() {
		this.callBack = () => {};
	}
	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}
	push(to) { 
		this.callBack('navigateTo', to);
	}
	redirectTo(to) {
		this.callBack('redirectTo', to);
	}
	reLaunch(to) {
		this.callBack('reLaunch', to);
	}
	switchTab(to) {
		this.callBack('switchTab', to);
	}
	back(delta) {
		// #ifdef H5
		history.back();
		// #endif
		// #ifndef H5
		uni.navigateBack({
			delta
		});
		// #endif
	}
}
let router=new Router(); 
let util= new class {  
	alert(text,success='success', duration) {
		return new Promise((resolve,reject)=>{
			uni.showToast({
				title: text || "出错啦~",
				icon: success,
				duration: duration || 2000,
				success:res=>{
					resolve(res);
				},
				fail:err=>{
					reject(err);
				}
			})
		})
	}
	/* 转换年月日方法 */
	formatDate(fmt, date) {
		let ret;
		if(date instanceof Date)date=date
		else date=new Date(date);
		const opt = {
			"Y+": date.getFullYear().toString(),        // 年
			"M+": (date.getMonth() + 1).toString(),     // 月
			"D+": date.getDate().toString(),            // 日
			"h+": date.getHours().toString(),           // 时
			"m+": date.getMinutes().toString(),         // 分
			"s+": date.getSeconds().toString()          // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		};
		for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
				fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			};
		};
		return fmt;
	}
	/*  //补0操作  */
	getzf(num) {
		if (parseInt(num) < 10) {
			num = '0' + num;
		}
		return num;
	}
	
	//随机数
	randomNo(randomLen=10) {
		var random_no = "";
		for (var i = 0; i < randomLen; i++)
		{
		random_no += Math.floor(Math.random() * 10);
		}
		random_no = new Date().getTime() + random_no;
		return random_no;
	}
	getWeek(time){
		let day=new Date(time).getDay();
		var week=["日","一","二","三","四","五","六"].filter((item,index)=>index==day)[0]
		return "周"+week;
	}
	createDateAry(day=30,mapName=["今天","明天","后天"]){
		//day多少天
		let stamp=new Date().getTime()
		
		let ary=[];
		for(let i=0;i<day;i++){   
			 ary.push({
				 date:util.formatDate("YYYY-MM-DD",stamp+24*60*60*1000*i),
				 checked:false,
				 disabled:(i==0)?true:false,
				 id:i,
				 week:mapName[i]?mapName[i]:util.getWeek(stamp+24*60*60*1000*i),
				 })
		}  
		return ary; 
	}
	 
	//设置本地存储
	setUserInfo(args) { 
		 uni.setStorageSync('user',args)
	}
	//读取token
	getUserInfo() {
		 const value = uni.getStorageSync('user');
		 return value;
	}
	//设置本地存储
	setToken(args) { 
		 uni.setStorageSync('token',args)
	}
	//读取token
	getToken() {
		 const value = uni.getStorageSync('token');
		 return value;
	} 
	//设置本地存储
	setWXToken(args) { 
		 uni.setStorageSync('wxtoken',args)
	}
	//读取token
	getWXToken() {
		 const value = uni.getStorageSync('wxtoken');
		 return value;
	} 
	//设置经纬度
	setAddress(args){
		 uni.setStorageSync('address',args)
	}
	getAddress(args){
		const value = uni.getStorageSync('address');
		return value;
	} 
	setItem(key,value){
		 value=typeof(value)=="string"?value:JSON.stringify(value);
		 uni.setStorageSync(key,value)
	}
	getItem(key){ 
		const value = uni.getStorageSync(key);
		return value;
	}
}
export {
	util,
	router
};