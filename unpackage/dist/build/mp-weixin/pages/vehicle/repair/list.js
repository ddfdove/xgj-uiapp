(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle/repair/list"],{"0955":function(t,e,n){"use strict";var a=n("b35b"),i=n.n(a);i.a},"3ffa":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3080"),i=n("ddde"),u=(n("8f7a"),{mixins:[a.publicMixin],data:function(){return{menuButtonInfo:null,listParam:{createBy:"1",createTime:"2024-04-24 13:45:35",updateBy:null,updateTime:null,remark:null,isSelected:!1,drivingId:1,orderNumber:null,oilNumber:null,kilometreNumber:null,peopleNumber:null,address:null,type:2,status:null,delFlag:null,mxDrivingSupplementList:null},list:[],totalPages:0,count:"0"}},onLoad:function(e){var n=e.type;this.listParam.type=n,this.menuButtonInfo=t.getMenuButtonBoundingClientRect(),this.asyncGetList()},methods:{checkedDate:function(){this.goToPage("/pages/vehicle/repair/info")},changePage:function(t){t?this.listParam.pageNum>=this.totalPages?this.$mvc.alert("已经是最后页了","error"):(++this.listParam.pageNum,this.asyncGetList()):this.listParam.pageNum<=1?this.$mvc.alert("已经是第一页了","error"):(--this.listParam.pageNum,this.asyncGetList())},back:function(){t.navigateBack()},asyncGetList:function(){var t=this;(0,i.repairList)(this.listParam).then((function(e){console.log(e),0==e.code&&(console.log(e),t.totalPages=Math.ceil(e.total/e.pageSize),t.count=e.total,t.listParam.pageNum=e.pageNum,t.listParam.pageSize=e.pageSize,t.list=e.data||[])}))}}});e.default=u}).call(this,n("543d")["default"])},4200:function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("3396");a(n("66fd"));var i=a(n("c6a0"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},b35b:function(t,e,n){},c3b1:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,"0344"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.list.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},u=[]},c6a0:function(t,e,n){"use strict";n.r(e);var a=n("c3b1"),i=n("dfdb");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("0955");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports},dfdb:function(t,e,n){"use strict";n.r(e);var a=n("3ffa"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a}},[["4200","common/runtime","common/vendor"]]]);