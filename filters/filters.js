//通过id获取值
function getValueById(id, ary) { 
	return ary.filter(item => item.id == id).length > 0 ? ary.filter(item => item.id == id)[0].value : "";
}
/* 默认图片 */
function defImg(string) {
	if (string == '' || string == undefined) {
		string = '/static/wutu.png'
	}
	return string
}
/* 隐藏手机号 */
function hiddenPhone(tel) {
	if(tel) return tel.substr(0, 3) + '****' + tel.substr(7)
	return "";
}
//隐藏身份证
function hiddenCardId(cardId){
	if(cardId)return cardId.substr(0, 3) + '***********' + cardId.substr(14);
	return "";
}
/* 金额格式化 */
function formatMoney(args, pre = false) {
	args=typeof(args)=="string"?Number(args):args;  
	if (args)
		return pre ? (pre + args.toFixed(2)) : args.toFixed(2);
	else
		return pre ? (pre + "0.00") :'0.00'// "--"
}
// 四舍五入保留2位小数（若第二位小数为0，则保留一位小数）
function keepTwoDecimal(num) {
	let result = parseFloat(num);
	result = Math.round(num * 100) / 100;
	return result;
}
function dateFormat(date,fmt) {
    let ret;
	date=new Date(date);
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
function formatDate(num) {
	 let date=new Date(num);
	let month=(date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1);
	let day=date.getDate()<10?"0"+date.getDate():date.getDate(); 
	return month+"月"+day+"日";
}
export default {
	getValueById,
	keepTwoDecimal,
	formatMoney,
	hiddenPhone,
	hiddenCardId,
	dateFormat,
	formatDate,
	defImg
};
