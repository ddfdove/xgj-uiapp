(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle/reportRepair/list"],{"9e26":function(t,e,n){},a224:function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("3396");a(n("66fd"));var i=a(n("dddf"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},c958:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,"0344"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.list.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},u=[]},d4f6:function(t,e,n){"use strict";var a=n("9e26"),i=n.n(a);i.a},db20:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3080"),i=n("ddde"),u=(n("8f7a"),{mixins:[a.publicMixin],data:function(){return{menuButtonInfo:null,listParam:{createBy:"",createTime:"",updateBy:null,updateTime:null,remark:null,isSelected:!1,drivingId:"",orderNumber:null,oilNumber:null,kilometreNumber:null,peopleNumber:null,address:null,type:3,status:null,delFlag:null,mxDrivingSupplementList:null},list:[],totalPages:0,count:"0"}},onLoad:function(e){var n=e.type;this.listParam.type=n,this.menuButtonInfo=t.getMenuButtonBoundingClientRect(),this.asyncGetList()},methods:{checkedDate:function(){this.goToPage("/pages/vehicle/reportRepair/info")},changePage:function(t){t?this.listParam.pageNum>=this.totalPages?this.$mvc.alert("已经是最后页了","error"):(++this.listParam.pageNum,this.asyncGetList()):this.listParam.pageNum<=1?this.$mvc.alert("已经是第一页了","error"):(--this.listParam.pageNum,this.asyncGetList())},back:function(){t.navigateBack()},asyncGetList:function(){var t=this;(0,i.reportRepairList)(this.listParam).then((function(e){console.log(e),0==e.code&&(console.log(e),t.totalPages=Math.ceil(e.total/e.pageSize),t.count=e.total,t.listParam.pageNum=e.pageNum,t.listParam.pageSize=e.pageSize,t.list=e.data||[])}))}}});e.default=u}).call(this,n("543d")["default"])},dddf:function(t,e,n){"use strict";n.r(e);var a=n("c958"),i=n("de18");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("d4f6");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=r.exports},de18:function(t,e,n){"use strict";n.r(e);var a=n("db20"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a}},[["a224","common/runtime","common/vendor"]]]);