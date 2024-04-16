import request from '@/utils/request.js'
import baseUrl from '@/utils/baseUrl.js'
import { util, router } from "@/utils/util.js"

//微信认证
export function auth(data) {
	return request({
		url: '/api/login/miniapp?jscode=' + data,
		method: 'GET'
	})
}

export function login(data) {
	return request({
		url:'/api/wms/user/login',
		method: 'POST',
		data
	})
} 

//核销
export function verification(data) {
	return request({
		url:'/api/vma/order/ticket/verification',
		method: 'GET',
		data
	})
}
//采购列表
export function purchaseList(data) {
	return request({
		url:'/api/wms/purchase/list',
		method: 'POST',
		data
	})
}
//所有核销详细
export function getOrderDetail(data) {
	return request({
		url:'/api/vma/order/ticket/to/verification/detail',
		method: 'GET',
		data
	})
}


//套票核销 
export function snowVerification(data) {
	return request({
		url:'/api/vma/package/ticket/snow/verification',
		method: 'GET',
		data
	})
}
//套票核销列表
export function mineSnowOrderList(data) {
	return request({
		url:'/api/vma/package/ticket/snow/mine/page/list',
		method: 'POST',
		data
	})
}
//通过二维码查详细
export function getSnowOrderDetail(data) {
	return request({
		url:'/api/vma/package/ticket/snow/to/verification/detail',
		method: 'GET',
		data
	})
}
//通过订单id查详细
export function getSnowOrderDetailById(data) {
	return request({
		url:'/api/vma/package/ticket/snow/info',
		method: 'GET',
		data
	})
}