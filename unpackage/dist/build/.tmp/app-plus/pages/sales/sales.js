(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sales/sales"],{"3b2c":function(t,e,r){"use strict";r.r(e);var s=r("b349"),a=r("f56f");for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var i=r("2877"),o=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},4197:function(t,e,r){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r("5320"),n=r("a627");function i(t){return l(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var f={filters:{statusNameFilter:function(t){var e={0:"已下单",5:"已接单",10:"配送中",20:"已收货",30:"售后",40:"已完成"};return e[t]||"采购中"},statusClassFilter:function(t){var e={0:"bg-orange",5:"bg-green",10:"bg-green",20:"bg-grey",30:"bg-grey",40:"bg-grey"};return e[t]||"bg-grey"},buyerOrgNameFilter:function(t){return t||"无"}},data:function(){return{listQuery:{pageNo:1,pageSize:5,sorts:"-deliveryTime"},list:[],loadOver:!1}},onLoad:function(t){this.getList(!1)},onShow:function(e){var r=this,s=t.getStorageSync("up_sales_order");s&&(this.list.forEach(function(t){if(t.list){var e=t.list.find(function(t){return t.purchaseOrderId===s.purchaseOrderId});e&&(e.status=s.status,e.statusClassName=r.$options.filters["statusClassFilter"](e.status))}}),t.removeStorageSync("up_sales_order"))},onPullDownRefresh:function(){this.listQuery.pageNo=1,this.loadOver=!1,this.getList(!1,function(){return setTimeout(function(){t.stopPullDownRefresh()},1e3)})},onReachBottom:function(){console.log(s("no:"+this.listQuery.pageNo," at pages\\sales\\sales.vue:113")),this.loadOver||(this.listQuery.pageNo=this.listQuery.pageNo+1,this.getList(!0))},methods:{getList:function(t,e){var r=this;(0,a.fetchSalesOrder)(this.listQuery).then(function(s){var a=i(s.data.list||[]);a.length<=0?r.loadOver=!0:r.loadOver=!1,r.setData(a,t),e&&e()}).catch(function(t){console.log(s("error!",t," at pages\\sales\\sales.vue:135"))})},setData:function(t,e){var r=this;e||(this.list=[]),t.forEach(function(t,e){var s=(0,n.parseTime)(t.deliveryTime,"{y}-{m}-{d}"),a=r.$options.filters["statusClassFilter"](t.status);t.statusClassName=a;for(var i=!1,o=0;o<r.list.length;o++)r.list[o].deliverDate===s&&(r.list[o].list.push(t),i=!0);i||r.list.push({deliverDate:s,list:[t]})})},handleTap:function(e){t.navigateTo({url:"/pages/salesitem/salesitem?orderId="+e})}}};e.default=f}).call(this,r("6e42")["default"],r("0de9")["default"])},b349:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.list,function(e,r){var s=t._f("parseTime")(e.deliverDate,"{m}-{d}"),a=t.__map(e.list,function(e,r){var s=t._f("parseTime")(e.deliveryTime,"{a}"),a=t._f("parseTime")(e.deliveryTime,"{h}:{i}"),n=t._f("statusNameFilter")(e.status),i=t._f("buyerOrgNameFilter")(e.buyerOrgName);return{$orig:t.__get_orig(e),f1:s,f2:a,f3:n,f4:i}});return{$orig:t.__get_orig(e),f0:s,l0:a}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},a=[];r.d(e,"a",function(){return s}),r.d(e,"b",function(){return a})},eb9b:function(t,e,r){"use strict";(function(t){r("f263"),r("921b");s(r("66fd"));var e=s(r("3b2c"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},f56f:function(t,e,r){"use strict";r.r(e);var s=r("4197"),a=r.n(s);for(var n in s)"default"!==n&&function(t){r.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["eb9b","common/runtime","common/vendor"]]]);