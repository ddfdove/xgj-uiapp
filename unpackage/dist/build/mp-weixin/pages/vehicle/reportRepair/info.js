(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vehicle/reportRepair/info"],{"0adf":function(e,t,r){},1214:function(e,t,r){"use strict";r.r(t);var n=r("9128"),i=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"5fae":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var n={uniDatetimePicker:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(r.bind(null,"1180"))}},i=function(){var e=this.$createElement;this._self._c},a=[]},"7d90":function(e,t,r){"use strict";(function(e,t){var n=r("4ea4");r("3396");n(r("66fd"));var i=n(r("cbf08"));e.__webpack_require_UNI_MP_PLUGIN__=r,t(i.default)}).call(this,r("bc2e")["default"],r("543d")["createPage"])},9128:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("3080"),i=r("ddde"),a=(r("8f7a"),r("2338")),u={mixins:[n.publicMixin],data:function(){return{isRemark:!1,show:!1,menuButtonInfo:null,deptOptions:[],userOptions:[],materialOptions:[],inputs:[],form:{orderNumber:"",peopleNumber:"",kilometreNumber:"",address:" ",remark:"",createTime:"",updateTime:"",type:"3"},queryParam:{drivingId:""},rules:[{name:"orderNumber",rule:["required"],msg:["请输入单号"]},{name:"peopleNumber",rule:["required"],msg:["请输入人数"]},{name:"kilometreNumber",rule:["required"],msg:["请输入公里数"]},{name:"address",rule:["required"],msg:["请输入地点"]},{name:"updateTime",rule:["required"],msg:["出车时间"]},{name:"updateTime",rule:["required"],msg:["回车时间"]}]}},onLoad:function(t){var r=t.id;this.menuButtonInfo=e.getMenuButtonBoundingClientRect(),this.getOptionsData(),r&&(this.queryParam.drivingId=r,console.log(this.queryParam.drivingId),this.asyncGetDetail())},methods:{switchRemark:function(){this.isRemark=!this.isRemark},back:function(){e.navigateBack()},getOptionsData:function(){var e=this;Promise.all([(0,i.deptList)(),(0,i.mxMaterialInfoList)(),(0,i.userList)()]).then((function(t){console.log("所有下拉数据",t);var r=t[0],n=t[1],i=t[2];e.deptOptions=r.data.map((function(e){return{text:e.deptName,value:String(e.deptId)}})),e.materialOptions=n.data.map((function(e){return{text:e.materialName,value:e.materialId}})),e.userOptions=i.data.map((function(e){return{text:e.userName,value:String(e.userId)}}))}))},suer:function(){var e=this,t=this.queryParam.drivingId?i.reportRepairUpdate:i.reportRepairSave,r=a.validation(this.form,this.rules);r?this.$mvc.alert(r,"error"):t(this.form).then((function(t){console.log(t),0==t.code&&(console.log(t),e.$mvc.alert("提交成功!","success"),setTimeout((function(){e.goToPage("/pages/vehicle/reportRepair/list?type=".concat(e.form.type))}),2e3))}))},asyncGetDetail:function(){var e=this;(0,i.reportRepairInfo)(this.queryParam).then((function(t){0==t.code&&(e.form=t.data)}))}}};t.default=u}).call(this,r("543d")["default"])},cbf08:function(e,t,r){"use strict";r.r(t);var n=r("5fae"),i=r("1214");for(var a in i)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("ff2f");var u=r("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=o.exports},ff2f:function(e,t,r){"use strict";var n=r("0adf"),i=r.n(n);i.a}},[["7d90","common/runtime","common/vendor"]]]);