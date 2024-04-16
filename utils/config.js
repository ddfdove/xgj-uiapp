import {
	util
} from "@/utils/util.js"
import baseUrl from "@/utils/baseUrl.js"
let mobileList = {
	// 咨询电话：0318--3881399
	// 投诉电话：0318--3881388
	// 紧急救援电话：18631893956
	baojing: '110',
	zhiyuan: '0318-3881399',
	tousu: '0318-3881388',
	jiuyuan: '0318-3733388',
	shangjia: '15810346612'
}

////////////////////////////////////////////////
//活动类型
let activityType = [{
		id: 0,
		title: '亲子户外',
		value: '1',
		checked: false,
		notice: 0,
	}, {
		id: 1,
		title: '公司团建',
		value: '2',
		checked: false,
		notice: 0,
	},
	{
		id: 2,
		title: '其他活动',
		value: '3',
		checked: false,
		notice: 0,
	}
]
 let activityTypeUI = [{
 		id: 0,
 		title: '最热',
 		value: '1',
 		checked: false,
 		notice: 0,
 	}, {
 		id: 1,
 		title: '最新',
 		value: '2',
 		checked: false,
 		notice: 0,
 	},
 	{
 		id: 2,
 		title: '我的活动',
 		value: '3',
 		checked: false,
 		notice: 0,
 	},{
 		id: 2,
 		title: '我收藏的活动',
 		value: '4',
 		checked: false,
 		notice: 0,
 	}
 ]
let ticketType = [{
		id: 0,
		title: '一大一小',
		value: '1',
		checked: false,
		notice: 0,
	}, {
		id: 1,
		title: '一位儿童',
		value: '2',
		checked: false,
		notice: 0,
	},
	{
		id: 2,
		title: '一位成人',
		value: '3',
		checked: false,
		notice: 0,
	}
]
//订单状态
let orderStatus = [{
	id:0,
	title: '全部',
	value: '',
	checked: false,
}, {
	id: 1,
	title: '未支付',
	value: '0',
	checked: false,
}, {
	id: 2,
	title: '已支付',
	value: '2',
	checked: false,
}, {
	id: 3,
	title: '已完成',
	value: '20',
	checked: false,
}, {
	id: 4,
	title: '退款审核中',
	value: '30',
	checked: false,
}, {
	id: 5,
	title: '已退款',
	value: '32',
	checked: false,
}]
//订单类型
let orderType = [{
	id: '0',
	title: '活动',
	value: '1',
	checked: false,
}, {
	id: '1',
	title: '场地',
	value: '2',
	checked: false,
}]


let payStatus = [{
	id: util.randomNo(10),
	name: '待支付',
	value: 1,
}, {
	id: util.randomNo(10),
	name: '支付中',
	value: 2,
}, {
	id: util.randomNo(10),
	name: '支付异常',
	value: 3,
}, {
	id: util.randomNo(10),
	name: '支付成功',
	value: 4,
}]
let refundStatus = [{
		id: 0,
		title: '全部',
		value: '',
		checked: false,
	}, {
		id: 1,
		title: '退款审核中',
		value: 30,
		checked: false,
		name: 'article',
	}, {
		id: 2,
		title: '退款审通过',
		value: 301,
		checked: false,
		name: 'merchant',
	},
	{
		id: 3,
		title: '退款审不通过',
		value: 302,
		checked: false,
		name: 'goods',
	},
	{
		id: 4,
		title: '退款中',
		value: 31,
		checked: false,
		name: 'scenicSpots',
	},
	{
		id: 5,
		title: '已退款',
		value: 32,
		checked: false,
		name: 'tickets',
	},
	{
		id: 6,
		title: '已部分退款',
		value: 33,
		checked: false,
		name: 'tickets',
	}
]

let orderStatusUI = [{
	id:0,
	title: '全部',
	value: '',
	checked: true,
}, {
	id: 1,
	title: '待使用',
	value: '1',
	checked: false,
}, {
	id: 2,
	title: '已使用',
	value: '2',
	checked: false,
}, {
	id: 3,
	title: '已结束',
	value: '20',
	checked: false,
}]
let myOrderStatusUI = [{
	id:0,
	title: '全部',
	value: '',
	checked: true,
}, {
	id: 1,
	title: '待使用',
	value: 2,
	checked: false,
}, {
	id: 2,
	title: '已完成',
	value: 20,
	checked: false,
}, {
	id: 3,
	title: '退款',
	value: 30,
	checked: false,
}]
export {
	baseUrl,
	activityType,
	ticketType,
	orderType,
	orderStatus,
	payStatus,
	refundStatus,
	orderStatusUI,
	myOrderStatusUI
}