(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/canteen/keepSample/info"],{"32d2":function(e,t,n){"use strict";n.r(t);var a=n("e0ed"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"42ef":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("3396");a(n("66fd"));var i=a(n("e236"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"8ece":function(e,t,n){},"9c7a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uniDataSelect:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-data-select/components/uni-data-select/uni-data-select")]).then(n.bind(null,"2957"))},uniDatetimePicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(n.bind(null,"1180"))}},i=function(){var e=this.$createElement;this._self._c},r=[]},e0ed:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3080"),i=n("ddde"),r=(n("8f7a"),n("2338")),u={mixins:[a.publicMixin],data:function(){return{menuButtonInfo:null,deptOptions:[],userOptions:[],materialOptions:[],canteenOptions:[],mealOptions:[],dishOptions:[],form:{canteenId:"",mealId:"",dishId:"",srResult:"",srTime:"",servingQuantity:"",srBy:"",destructionBy:"",danwei:"",fuzeBy:"",remark:"",srId:""},queryParam:{srId:""},rules:[{name:"canteenId",rule:["required"],msg:["请选择食堂"]},{name:"mealId",rule:["required"],msg:["请选择餐别"]},{name:"dishId",rule:["required"],msg:["请选择菜品"]},{name:"srResult",rule:["required"],msg:["请输入留样结果"]},{name:"srTime",rule:["required"],msg:["请选择留样时间"]},{name:"servingQuantity",rule:["required"],msg:["请输入数量"]},{name:"srBy",rule:["required"],msg:["请选择留样人"]},{name:"destructionBy",rule:["required"],msg:["请选择销毁人"]},{name:"danwei",rule:["required"],msg:["请输入单位名"]},{name:"fuzeBy",rule:["required"],msg:["请选择负责人"]}]}},onLoad:function(t){var n=t.id;this.menuButtonInfo=e.getMenuButtonBoundingClientRect(),this.getOptionsData(),n&&(console.log(n),this.queryParam.srId=n,this.asyncGetDetail())},methods:{back:function(){e.navigateBack()},getOptionsData:function(){var e=this;Promise.all([(0,i.deptList)(),(0,i.mxMaterialInfoList)(),(0,i.userList)(),(0,i.canteenList)(),(0,i.mealList)(),(0,i.dishList)()]).then((function(t){console.log("所有下拉数据",t);var n=t[0],a=t[1],i=t[2],r=t[3],u=t[4],s=t[5];e.deptOptions=n.data.map((function(e){return{text:e.deptName,value:e.deptId}})),e.materialOptions=a.data.map((function(e){return{text:e.materialName,value:e.materialId}})),e.userOptions=i.data.map((function(e){return{text:e.userName,value:e.userId}})),e.canteenOptions=r.data.map((function(e){return{text:e.canteenName,value:e.canteenId}})),e.mealOptions=u.data.map((function(e){return{text:e.mealPeriodName,value:e.mealId}})),e.dishOptions=s.data.map((function(e){return{text:e.dishName,value:e.dishId}}))}))},suer:function(){var e=this,t=this.queryParam.srId?i.getKeepSampleUpdate:i.getKeepSampleSave,n=r.validation(this.form,this.rules);n?this.$mvc.alert(n,"error"):t(this.form).then((function(t){0==t.code&&(e.$mvc.alert("提交成功!","success"),console.log("成功"),setTimeout((function(){e.goToPage("/pages/canteen/keepSample/list")}),2e3))}))},asyncGetDetail:function(){var e=this;(0,i.getKeepSampleInfo)(this.queryParam).then((function(t){0==t.code&&(console.log(t),e.form=t.data)}))}}};t.default=u}).call(this,n("543d")["default"])},e236:function(e,t,n){"use strict";n.r(t);var a=n("9c7a"),i=n("32d2");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("fcb8");var u=n("f0c5"),s=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=s.exports},fcb8:function(e,t,n){"use strict";var a=n("8ece"),i=n.n(a);i.a}},[["42ef","common/runtime","common/vendor"]]]);