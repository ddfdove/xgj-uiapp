(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle/refuel/list"],{"18ae":function(t,e,i){"use strict";var n=i("b2ed"),a=i.n(n);a.a},"49a7":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("edd4"),a=i("b22e"),r=(i("9dfa"),{mixins:[n.publicMixin],data:function(){return{menuButtonInfo:null,listParam:{createBy:"1",createTime:"",updateBy:null,updateTime:null,remark:null,isSelected:!1,drivingId:1,orderNumber:null,oilNumber:null,kilometreNumber:null,peopleNumber:null,address:null,type:1,status:null,delFlag:null,mxDrivingSupplementList:null},actionStyle:{backgroundColor:"#1DC36A",margin:"0 10px 0 20px",padding:"10px",width:"40px",height:"18px",lineHeight:"18px",color:"#FFFFFF",fontSize:"14px"},keyword:"",searchList:[],list:[],totalPages:0,count:"0"}},onLoad:function(e){var i=e.type;this.listParam.type=i,console.log(this.type),console.log(i),this.menuButtonInfo=t.getMenuButtonBoundingClientRect(),this.asyncGetList()},methods:{checkedDate:function(){this.goToPage("/pages/vehicle/refuel/info")},changePage:function(t){t?this.listParam.pageNum>=this.totalPages?this.$mvc.alert("已经是最后页了","error"):(++this.listParam.pageNum,this.asyncGetList()):this.listParam.pageNum<=1?this.$mvc.alert("已经是第一页了","error"):(--this.listParam.pageNum,this.asyncGetList())},back:function(){t.navigateBack()},searchHistory:function(t){if(""==t)this.asyncGetList();else{this.list=[];for(var e=0;e<this.searchList.length;e++)this.searchList[e].orderNumber.indexOf(t)>=0|this.searchList[e].oilNumber.toString().indexOf(t)>=0|this.searchList[e].kilometreNumber.toString().indexOf(t)>=0&&this.list.push(this.searchList[e])}},asyncGetList:function(){var t=this;(0,a.refuelList)(this.listParam).then((function(e){console.log(e),0==e.code&&(console.log(e),t.totalPages=Math.ceil(e.total/e.pageSize),t.count=e.total,t.listParam.pageNum=e.pageNum,t.listParam.pageSize=e.pageSize,t.list=e.data||[],t.searchList=e.data||[])}))}}});e.default=r}).call(this,i("543d")["default"])},"5cd0":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("c960");n(i("66fd"));var a=n(i("be01"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(a.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},6628:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uSearch:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-search/u-search")]).then(i.bind(null,"f36b"))}},a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.list.length),n=t.__map(t.list,(function(e,i){var n=t.__get_orig(e),a=e.createTime?e.createTime.substr(0,10):null;return{$orig:n,g1:a}}));t.$mp.data=Object.assign({},{$root:{g0:i,l0:n}})},r=[]},"814b":function(t,e,i){"use strict";i.r(e);var n=i("49a7"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b2ed:function(t,e,i){},be01:function(t,e,i){"use strict";i.r(e);var n=i("6628"),a=i("814b");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("18ae");var s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=l.exports}},[["5cd0","common/runtime","common/vendor"]]]);