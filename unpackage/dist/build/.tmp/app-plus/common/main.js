(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4d42":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),u=n("ae74"),a=n("0fa4");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={computed:(0,r.mapState)(["hasLogin"]),onLaunch:function(){var t=this;console.log(e("App Launch"," at App.vue:8"));var n=(0,u.getToken)();n?(console.log(e("has token:"+n," at App.vue:11")),this.loadingInfo(!0),(0,a.getUserInfo)().then(function(e){t.info(e.data),t.loadingInfo(!1)}),console.log(e("launch done info"," at App.vue:19"))):o.reLaunch({url:"pages/login/login"})},onShow:function(){console.log(e("App Show"," at App.vue:27"))},onHide:function(){console.log(e("App Hide"," at App.vue:30"))},methods:c({},(0,r.mapMutations)(["login","info","loadingInfo"]))};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},"500d":function(e,t,n){},"7df3":function(e,t,n){"use strict";var o=n("500d"),r=n.n(o);r.a},"91b6":function(e,t,n){"use strict";n.r(t);var o=n("bfb0");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("7df3");var u,a,c=n("2877"),f=Object(c["a"])(o["default"],u,a,!1,null,null,null);t["default"]=f.exports},bfb0:function(e,t,n){"use strict";n.r(t);var o=n("4d42"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},ea41:function(e,t,n){"use strict";(function(e){n("f263"),n("921b");var t=c(n("66fd")),o=c(n("91b6")),r=c(n("2f09")),u=a(n("86dc"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"4f78"))};t.default.component("cu-custom",i),t.default.config.productionTip=!1,t.default.prototype.$store=r.default,o.default.mpType="app",Object.keys(u).forEach(function(e){t.default.filter(e,u[e])});var p=new t.default(f({store:r.default},o.default));e(p).$mount()}).call(this,n("6e42")["createApp"])}},[["ea41","common/runtime","common/vendor"]]]);