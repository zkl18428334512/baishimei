(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purchase/purchase"],{"7c5f":function(t,e,r){"use strict";r.r(e);var a=r("be25"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"8b98":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.list,function(e,r){var a=t._f("parseTime")(e.deliverDate,"{m}-{d}"),n=t.__map(e.list,function(e,r){var a=t._f("parseTime")(e.deliveryTime,"{a}"),n=t._f("parseTime")(e.deliveryTime,"{h}:{i}"),s=t._f("statusNameFilter")(e.status),i=t._f("sellerOrgNameFilter")(e.sellerOrgName);return{$orig:t.__get_orig(e),f1:a,f2:n,f3:s,f4:i}});return{$orig:t.__get_orig(e),f0:a,l0:n}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},n=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n})},aa9f:function(t,e,r){"use strict";(function(t){r("f263"),r("921b");a(r("66fd"));var e=a(r("af3b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},af3b:function(t,e,r){"use strict";r.r(e);var a=r("8b98"),n=r("7c5f");for(var s in n)"default"!==s&&function(t){r.d(e,t,function(){return n[t]})}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},be25:function(t,e,r){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("5320"),s=r("a627");function i(t){return l(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var c={filters:{statusNameFilter:function(t){var e={0:"采购中",5:"采购中",10:"备货完成",20:"已收货",30:"售后",40:"已完成"};return e[t]||"采购中"},statusClassFilter:function(t){var e={0:"bg-orange",5:"bg-orange",10:"bg-green",20:"bg-grey",30:"bg-grey",40:"bg-grey"};return e[t]||"bg-orange"},sellerOrgNameFilter:function(t){return t||"自采购"}},data:function(){return{listQuery:{pageNo:1,pageSize:5,sorts:"-deliveryTime"},list:[],loadOver:!1}},onLoad:function(t){this.getList(!1)},onShow:function(e){var r=this,a=t.getStorageSync("up_purchase_order");a&&(this.list.forEach(function(t){if(t.list){var e=t.list.find(function(t){return t.purchaseOrderId===a.purchaseOrderId});e&&(e.status=a.status,e.statusClassName=r.$options.filters["statusClassFilter"](e.status))}}),t.removeStorageSync("up_purchase_order"))},onPullDownRefresh:function(){this.listQuery.pageNo=1,this.loadOver=!1,this.getList(!1,function(){return setTimeout(function(){t.stopPullDownRefresh()},1e3)})},onReachBottom:function(){console.log(a("no:"+this.listQuery.pageNo," at pages\\purchase\\purchase.vue:113")),this.loadOver||(this.listQuery.pageNo=this.listQuery.pageNo+1,this.getList(!0))},methods:{getList:function(t,e){var r=this;(0,n.fetchOrder)(this.listQuery).then(function(a){var n=i(a.data.list||[]);n.length<=0?r.loadOver=!0:r.loadOver=!1,r.setData(n,t),e&&e()}).catch(function(t){console.log(a("error!",t," at pages\\purchase\\purchase.vue:135"))})},setData:function(t,e){var r=this;e||(this.list=[]),t.forEach(function(t,e){var a=(0,s.parseTime)(t.deliveryTime,"{y}-{m}-{d}"),n=r.$options.filters["statusClassFilter"](t.status);t.statusClassName=n;for(var i=!1,o=0;o<r.list.length;o++)r.list[o].deliverDate===a&&(r.list[o].list.push(t),i=!0);i||r.list.push({deliverDate:a,list:[t]})})},handleTap:function(e){console.log(a(e," at pages\\purchase\\purchase.vue:160")),t.navigateTo({url:"/pages/purchaseitem/purchaseitem?orderId="+e})}}};e.default=c}).call(this,r("6e42")["default"],r("0de9")["default"])}},[["aa9f","common/runtime","common/vendor"]]]);