(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inventory/warehousing/info"],{"4c96":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("c960");a(n("66fd"));var r=a(n("5b99"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"5b99":function(e,t,n){"use strict";n.r(t);var a=n("b849"),r=n("d5bb");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("b0d3");var i=n("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=o.exports},"71f7":function(e,t,n){},b0d3:function(e,t,n){"use strict";var a=n("71f7"),r=n.n(a);r.a},b849:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uniDataSelect:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select")]).then(n.bind(null,"5030"))}},r=function(){var e=this.$createElement;this._self._c},u=[]},d5bb:function(e,t,n){"use strict";n.r(t);var a=n("debf"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},debf:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("9523")),u=n("edd4"),i=n("b22e"),o=(n("9dfa"),n("0f84")),s={mixins:[u.publicMixin],data:function(){return{menuButtonInfo:null,deptOptions:[],userOptions:[],materialOptions:[],productOptions:[],warehouseOptions:[],mark:[{value:"2",text:"已入库"},{value:"3",text:"未入库"}],form:{productId:"",warehouseId:"",materialId:"",specification:"",quantity:"",keeperSignature:"",keeperReinspection:"",status:"",remark:""},queryParam:{warehousingId:""},rules:[{name:"productId",rule:["required"],msg:["请选择账单号"]},{name:"warehouseId",rule:["required"],msg:["请选择库房"]},{name:"materialId",rule:["required"],msg:["请选择食材"]},{name:"specification",rule:["required"],msg:["请输入规格"]},{name:"quantity",rule:["required"],msg:["请输入数量"]},{name:"keeperSignature",rule:["required"],msg:["请选择签字关联库管"]},{name:"keeperReinspection",rule:["required"],msg:["请选择复检关联库管"]},{name:"status",rule:["required"],msg:["请选择入库标志"]}]}},onLoad:function(t){var n=t.id,a=t.info;this.menuButtonInfo=e.getMenuButtonBoundingClientRect(),a&&(console.log(a),this.form=Object.assign({},this.form,JSON.parse(a)),console.log(this.form.warehouseId),console.log(this.form.materialId)),this.getOptionsData(),n&&(console.log(n),this.queryParam.warehousingId=n,this.asyncGetDetail())},methods:{back:function(){e.navigateBack()},getOptionsData:function(){var e=this;Promise.all([(0,i.deptList)(),(0,i.mxMaterialInfoList)(),(0,i.userList)(),(0,i.productList)(),(0,i.warehouseList)()]).then((function(t){console.log("所有下拉数据",t);var n=t[0],a=t[1],u=t[2],i=t[3],o=t[4];e.deptOptions=n.data.map((function(e){return(0,r.default)({text:e.deptName,value:String(e.deptId)},"value",e.deptId)})),e.materialOptions=a.data.map((function(e){return{text:e.materialName,value:e.materialId}})),e.userOptions=u.data.map((function(e){return{text:e.userName,value:e.userId}})),e.productOptions=i.data.map((function(e){return{text:e.productNumber,value:e.productId}})),e.warehouseOptions=o.data.map((function(e){return{text:e.warehouseName,value:e.warehouseId}}))}))},suer:function(){var e=this,t=this.queryParam.warehousingId?i.getWarehousingUpdate:i.getWarehousingSave,n=o.validation(this.form,this.rules);n?this.$mvc.alert(n,"error"):t(this.form).then((function(t){0==t.code&&(e.$mvc.alert("提交成功!","success"),setTimeout((function(){e.goToPage("/pages/inventory/warehousing/list")}),2e3))}))},asyncGetDetail:function(){var e=this;(0,i.getWarehousingInfo)(this.queryParam).then((function(t){console.log(t),0==t.code&&(e.form=t.data)}))}}};t.default=s}).call(this,n("543d")["default"])}},[["4c96","common/runtime","common/vendor"]]]);