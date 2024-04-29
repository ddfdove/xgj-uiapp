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
//登录
export function login(data) {
	return request({
		url:'/api/wms/user/login',
		method: 'POST',
		data
	})
} 
export function verification(data) {
	return request({
		url:'/api/vma/order/ticket/verification',
		method: 'GET',
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


// ***********************************************************//
//下拉列表接口

//部门列表 
export function deptList(data) {
	return request({
		url:'/api/wms/list/deptList',
		method: 'POST',
		data
	})
}
//食材列表
export function mxMaterialInfoList(data) {
	return request({
		url:'/api/wms/list/mxMaterialInfoList',
		method: 'POST',
		data
	})
}
//用户列表
export function userList(data) {
	return request({
		url:'/api/wms/list/userList',
		method: 'POST',
		data
	})
}
//食堂列表
export function canteenList(data) {
	return request({
		url:'/api/wms/list/mxCanteenInfoList',
		method: 'POST',
		data
	})
}
//餐别列表
export function mealList(data) {
	return request({
		url:'/api/wms/list/mxMealInfoList',
		method: 'POST',
		data
	})
}
//菜品列表
export function dishList(data) {
	return request({
		url:'/api/wms/list/mxDishInfoList',
		method: 'POST',
		data
	})
}
//台账下拉列表
export function productList(data) {
	return request({
		url:'/api/wms/list/mxPurchasingRecordList',
		method: 'POST',
		data
	})
}
//库房下拉列表
export function warehouseList(data) {
	return request({
		url:'/api/wms/list/mxWarehouseInfoList',
		method: 'POST',
		data
	})
}
//入库下拉列表
export function warehousingList(data) {
	return request({
		url:'/api/wms/list/mxWarehousingRecordList',
		method: 'POST',
		data
	})
}

// ***********************************************************//
//食堂管理接口

//采购列表
export function purchaseList(data) {
	return request({
		url:'/api/wms/purchase/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//采购详情
export function purchaseInfo(data) {
	return request({
		url:'/api/wms/purchase/info',
		method: 'GET',
		data
	})
}
//新增采购
export function purchaseSave(data) {
	return request({
		url:'/api/wms/purchase/save',
		method: 'POST',
		data
	})
}
//更新采购
export function purchaseUpdate(data) {
	return request({
		url:'/api/wms/purchase/update',
		method: 'PUT',
		data
	})
}
//食材检验列表
export function getInspectionList(data) {
	return request({
		url:'/api/wms/test/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//食材检验详情
export function getInspectionInfo(data) {
	return request({
		url:'/api/wms/test/info',
		method: 'GET',
		data
	})
}
//新增检验
export function getInspectionSave(data) {
	return request({
		url:'/api/wms/test/save',
		method: 'POST',
		data
	})
}
//更新检验
export function getInspectionUpdate(data) {
	return request({
		url:'/api/wms/test/update',
		method: 'PUT',
		data
	})
}

//食品留样列表
export function getKeepSampleList(data) {
	return request({
		url:'/api/wms/sampleretention/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//留样详情
export function getKeepSampleInfo(data) {
	return request({
		url:'/api/wms/sampleretention/info',
		method: 'GET',
		data
	})
}
//新增留样
export function getKeepSampleSave(data) {
	return request({
		url:'/api/wms/sampleretention/save',
		method: 'POST',
		data
	})
}
//更新留样
export function getKeepSampleUpdate(data) {
	return request({
		url:'/api/wms/sampleretention/update',
		method: 'PUT',
		data
	})
}

// ***********************************************************//
//库存管理接口

//获取入库记录列表
export function getWarehousingList(data) {
	return request({
		url:'/api/wms/warehousing/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//获取入库记录详情
export function getWarehousingInfo(data) {
	return request({
		url:'/api/wms/warehousing/info',
		method: 'GET',
		data
	})
}
//新增入库记录
export function getWarehousingSave(data) {
	return request({
		url:'/api/wms/warehousing/save',
		method: 'POST',
		data
	})
}
//更新入库记录
export function getWarehousingUpdate(data) {
	return request({
		url:'/api/wms/warehousing/update',
		method: 'PUT',
		data
	})
}

//获取盘点记录列表
export function getCheckList(data) {
	return request({
		url:'/api/wms/inventory/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//获取盘点记录详情
export function getCheckInfo(data) {
	return request({
		url:'/api/wms/inventory/info',
		method: 'GET',
		data
	})
}
//新增盘点记录
export function getCheckSave(data) {
	return request({
		url:'/api/wms/inventory/save',
		method: 'POST',
		data
	})
}
//更新盘点记录
export function getCheckUpdate(data) {
	return request({
		url:'/api/wms/inventory/update',
		method: 'PUT',
		data
	})
}

//获取出库记录列表
export function getOutboundList(data) {
	return request({
		url:'/api/wms/outbound/list?pageNum='+data.pageNum,
		method: 'POST',
		data
	})
}
//获取出库记录详情
export function getOutboundInfo(data) {
	return request({
		url:'/api/wms/outbound/info',
		method: 'GET',
		data
	})
}
//新增出库记录
export function getOutboundSave(data) {
	return request({
		url:'/api/wms/outbound/save',
		method: 'POST',
		data
	})
}
//更新出库记录
export function getOutboundUpdate(data) {
	return request({
		url:'/api/wms/outbound/update',
		method: 'PUT',
		data
	})
}

//加油列表
export function refuelList(data) {
	return request({
		url:'/api/wms/driving/list',
		method: 'POST',
		data
	})
}
//加油详情
export function refuelInfo(data) {
	return request({
		url:'/api/wms/driving/info',
		method: 'GET',
		data
	})
}
//新增加油
export function refuelSave(data) {
	return request({
		url:'/api/wms/driving/save',
		method: 'POST',
		data
	})
}
//更新加油
export function refuelUpdate(data) {
	return request({
		url:'/api/wms/driving/update',
		method: 'PUT',
		data
	})
}




//维修列表
export function repairList(data) {
	return request({
		url:'/api/wms/driving/list',
		method: 'POST',
		data
	})
}
//维修详情
export function repairInfo(data) {
	return request({
		url:'/api/wms/driving/info',
		method: 'GET',
		data
	})
}
//新增维修
export function repairSave(data) {
	return request({
		url:'/api/wms/driving/save',
		method: 'POST',
		data
	})
}
//更新维修
export function repairUpdate(data) {
	return request({
		url:'/api/wms/driving/update',
		method: 'PUT',
		data
	})
}




//保修列表
export function reportRepairList(data) {
	return request({
		url:'/api/wms/driving/list',
		method: 'POST',
		data
	})
}
//保修详情
export function reportRepairInfo(data) {
	return request({
		url:'/api/wms/driving/info',
		method: 'GET',
		data
	})
}
//新增保修
export function reportRepairSave(data) {
	return request({
		url:'/api/wms/driving/save',
		method: 'POST',
		data
	})
}
//更新保修
export function reportRepairUpdate(data) {
	return request({
		url:'/api/wms/driving/update',
		method: 'PUT',
		data
	})
}