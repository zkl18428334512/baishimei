(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bind/bind"],{"8ca6":function(n,t,o){"use strict";o.r(t);var e=o("ed37"),i=o("fc28");for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);o("d05e");var c=o("2877"),s=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=s.exports},a774:function(n,t,o){"use strict";(function(n){o("f263"),o("921b");e(o("66fd"));var t=e(o("8ca6"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("6e42")["createPage"])},b212:function(n,t,o){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("0fa4"),a=o("4f1f"),c=o("2f62");function s(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),e.forEach(function(t){u(n,t,o[t])})}return n}function u(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var r={data:function(){return{name:"",account:"",password:"",openId:"",positionTop:0,askLoginCode:!0,counter:60,platform:"manage_wx_app"}},onLoad:function(t){console.log(n(t," at pages\\bind\\bind.vue:52")),this.openId=t.openId},onReady:function(){this.initPosition()},methods:s({initPosition:function(){this.positionTop=e.getSystemInfoSync().windowHeight-100},isHidePasswordClick:function(){this.isHidePassword=!this.isHidePassword},handleLoginCode:function(){var n=this;(0,a.checkPhone)(this.account)&&(0,i.getLoginCode)(this.account).then(function(t){e.showToast({title:"验证码已发送",icon:"success",mask:!0}),n.askLoginCode=!1,n.timedown()}).catch(function(n){var t=n.msg;e.showToast({title:t,mask:!0,icon:"none"})})},bindUser:function(){var t=this;(0,a.checkPhone)(this.account)&&(0,a.checkPwd)(this.password)&&(0,i.doLogin)({username:this.account,password:this.password,openId:this.openId,platform:this.platform}).then(function(o){t.loading=!1,console.log(n("request success",o," at pages\\bind\\bind.vue:103")),e.showToast({title:"请求成功",icon:"success",mask:!0}),t.login(o.data),(0,i.getUserInfo)().then(function(n){t.info(n.data),t.toMain()})}).catch(function(o){t.loading=!1;var i=o.msg;e.showToast({title:i,mask:!0,icon:"none"}),console.log(n("request fail",o," at pages\\bind\\bind.vue:123"))})},timedown:function(){var n=this;this.counter>0?(this.counter=this.counter-1,setTimeout(function(){n.timedown()},1e3)):(this.askLoginCode=!0,this.counter=60)},toMain:function(){e.reLaunch({url:"../main/main"})}},(0,c.mapMutations)(["login","info"]))};t.default=r}).call(this,o("0de9")["default"],o("6e42")["default"])},d05e:function(n,t,o){"use strict";var e=o("fc77"),i=o.n(e);i.a},ed37:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})},fc28:function(n,t,o){"use strict";o.r(t);var e=o("b212"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=i.a},fc77:function(n,t,o){}},[["a774","common/runtime","common/vendor"]]]);