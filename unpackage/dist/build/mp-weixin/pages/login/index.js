(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"05be":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t("3080"),o=t("ddde"),i=t("8f7a"),r=t("2338"),a={mixins:[u.publicMixin],data:function(){return{menuButtonInfo:{},form:{username:"admin",password:"1234qwer",rememberMe:""},rules:[{name:"username",rule:["required"],msg:["请输入手机号","请输入正确电话格式"]},{name:"password",rule:["required"],msg:["请输入密码"]}]}},onLoad:function(){},methods:{submit:function(){var e=r.validation(this.form,this.rules);e?this.$mvc.alert(e,"error"):this.goLogin()},goLogin:function(){var e=this;(0,o.login)(this.form).then((function(n){console.log(n),0==n.code&&(i.util.setToken(n.data.access_token),e.$mvc.alert("登录成功","success"),e.goToTab("/pages/index/index")),console.log("登录成功",n)}))}}};n.default=a},"1bd9":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,"0344"))}},o=function(){var e=this.$createElement;this._self._c},i=[]},"2b78":function(e,n,t){},"30e4":function(e,n,t){"use strict";(function(e,n){var u=t("4ea4");t("3396");u(t("66fd"));var o=u(t("874b"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"874b":function(e,n,t){"use strict";t.r(n);var u=t("1bd9"),o=t("ce6f");for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("f5c1");var r=t("f0c5"),a=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"4e15d95c",null,!1,u["a"],void 0);n["default"]=a.exports},ce6f:function(e,n,t){"use strict";t.r(n);var u=t("05be"),o=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=o.a},f5c1:function(e,n,t){"use strict";var u=t("2b78"),o=t.n(u);o.a}},[["30e4","common/runtime","common/vendor"]]]);