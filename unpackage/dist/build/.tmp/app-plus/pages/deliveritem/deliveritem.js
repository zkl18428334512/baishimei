(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/deliveritem/deliveritem"],{"108e":function(e,t,r){"use strict";r.r(t);var i=r("8ae1"),n=r("e6b3");for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);r("674a");var o=r("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},6631:function(e,t,r){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("1ce9"),a=r("00bf");function o(e){return u(e)||l(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var d={data:function(){return{isCard:!1,listQuery:{pageNo:1,pageSize:20,deliveryOrderId:void 0},order:{deliveryOrderId:void 0,purchaseOrderId:"",receiverOrgName:""},size:10,sourceList:[],list:[]}},onLoad:function(t){console.log(e(t," at pages\\deliveritem\\deliveritem.vue:82")),this.listQuery.deliveryOrderId=t.orderId,this.getOrder()},onReachBottom:function(){this.loadData()},methods:{getOrder:function(){var t=this;(0,n.getDeliveryOrder)(this.listQuery).then(function(r){console.log(e(r," at pages\\deliveritem\\deliveritem.vue:92")),t.order=r.data,t.sourceList=r.data.deliveryOrderItemList,t.loadData()}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:97"))})},loadData:function(){if(this.list.length<this.sourceList.length){for(var t=this.list.length,r=0;t<this.sourceList.length&&r<this.size;t++,r++)this.list.push(this.sourceList[t]);console.log(e(this.list," at pages\\deliveritem\\deliveritem.vue:105"))}},getList:function(){var t=this;(0,n.fetchDeliveryItem)(this.listQuery).then(function(r){console.log(e(r," at pages\\deliveritem\\deliveritem.vue:110")),t.sourceList=o(r.data.list||[]),t.setData(orderList)}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:114"))})},handleTap:function(t){var r=0===t.status;(0,n.loadItem)({deliveryOrderItemId:t.deliveryOrderItemId,loaded:r,deliveryQty:t.deliveryQty}).then(function(e){var n=e.data;t.status=r?15:0,i.setStorageSync("up_delivery_order",{deliveryOrderId:n.deliveryOrderId,status:n.status}),i.showToast({title:"",icon:"success",mask:!1})}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:129"))})},handleSearch:function(e){var t=e.detail.value.toLowerCase();this.sourceList;this.list=this.sourceList.filter(function(e){return(0,a.pinyinMatch)(e.productName,t)})}}};t.default=d}).call(this,r("0de9")["default"],r("6e42")["default"])},"674a":function(e,t,r){"use strict";var i=r("8186"),n=r.n(i);n.a},8186:function(e,t,r){},"8ae1":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n})},ce38:function(e,t,r){"use strict";(function(e){r("f263"),r("921b");i(r("66fd"));var t=i(r("108e"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},e6b3:function(e,t,r){"use strict";r.r(t);var i=r("6631"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);t["default"]=n.a}},[["ce38","common/runtime","common/vendor"]]]);