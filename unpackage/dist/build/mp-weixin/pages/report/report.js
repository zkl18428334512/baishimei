(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"026a":function(e,t,a){"use strict";a.r(t);var n=a("6295"),s=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=s.a},6295:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("2f62"),s=a("4808"),o=a("7545"),r={data:function(){return{salemoney:"1000",saleProfit:"10000",SalesAnalysis:"销售额分析",Grossprofitanalysis:"毛利分析",systemDate:""}},computed:(0,n.mapState)(["userInfo","userToken"]),onLoad:function(){this.addDate(),this.yesterdaySales(),console.log(this.userInfo),console.log(this.userToken)},methods:{jump:function(){e.navigateTo({url:"../salesanalysis/salesanalysis?id=销量走势&name=销售额分析"})},jump1:function(){e.navigateTo({url:"../grossprofitanalysis/grossprofitanalysis?name=毛利分析"})},yesterdaySales:function(){var e=this;(0,o.LoadYesterdaySalesData)({"access-token":this.userToken,beginDate:this.systemDate,searchType:2}).then(function(t){console.log(t.data);var a=t.data;e.saleProfit="",e.salemoney="";for(var n=0,s=0,o=0;o<a.length;o++)n+=Number(a[o].grossProfitPrice),s+=Number(a[o].totalSalesPrice);e.saleProfit=n,e.salemoney=s}).catch(function(e){console.log("error!",e)})},addDate:function(){var e=new Date;this.systemDate=(0,s.parseTime)(e,"{y}-{m}-{d}"),console.log(this.systemDate)}}};t.default=r}).call(this,a("543d")["default"])},"7c10":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},"8f3c":function(e,t,a){"use strict";a.r(t);var n=a("7c10"),s=a("026a");for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);a("f892");var r=a("2877"),i=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},f892:function(e,t,a){"use strict";var n=a("f92e"),s=a.n(n);s.a},f92e:function(e,t,a){}},[["82b3","common/runtime","common/vendor"]]]);