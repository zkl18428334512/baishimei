(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/grossprofitanalysis/grossprofitanalysis"],{"0545":function(s,a,e){"use strict";(function(s){e("f263"),e("921b");t(e("66fd"));var a=t(e("e642"));function t(s){return s&&s.__esModule?s:{default:s}}s(a.default)}).call(this,e("6e42")["createPage"])},"1dc2":function(s,a,e){},3623:function(s,a,e){"use strict";(function(s,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=g(e("de9a")),r=e("2f62"),i=e("a627"),n=e("9357"),l=e("39ac");function g(s){return s&&s.__esModule?s:{default:s}}var p,c=function(){return e.e("components/cmd-icon/cmd-icon").then(e.bind(null,"6604"))},u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"986d"))},f=function(){return e.e("components/tki-tree/tki-tree").then(e.bind(null,"3c2c"))},h=function(){return Promise.all([e.e("common/vendor"),e.e("components/date-picker/date-picker2")]).then(e.bind(null,"5303"))},y=null,d={components:{calendar:h,tkiTree:f,faIcon:u,cmdIcon:c},data:function(){return{total:[2],pageSize:5,page:[],current:1,zpage:0,res1:[],testList:[{id:2,name:"客户"},{id:1,name:"商品"}],list:[],multiple:!1,selectParent:!1,beginDate:"2019-05-06",endDate:"2019-05-07",showCaledar:!1,dateStr:"",daysCount:365,singleDate:!0,PsearchData:[],SsearchData:[],systemDate1:"",systemDate:"",searchType:[2],inputsArray:[{title:"分析类别",type:"radio",itemArray:[{name:"客户",value:"客户",defaultValue:!0},{name:"商品",value:"商品"}],color:"#c0ebd7",scale:".8"}],cWidth:"",cHeight:"",pixelRatio:1,serverData:"",title:"销售分析",content1:"1111",isShowSelect:!1}},computed:(0,r.mapState)(["userInfo","userToken"]),onLoad:function(a){var e=this;p=this,this.title=a.name,this.addDate(),this.addDate1(),setTimeout(function(){e.list=e.testList},300),s.getSystemInfo({success:function(s){s.pixelRatio>1&&(p.pixelRatio=2)}}),this.cWidth=s.upx2px(750),this.cHeight=s.upx2px(500),this.getServerData()},onBackPress:function(){if(!1!==this.showCaledar)return this.showCaledar=!1,!0},created:function(){this.productPage()},methods:{productPage:function(){var s=this,a=parseInt(s.total),e=parseInt(s.pageSize),o=parseInt(a/e);a/e>o&&o++,s.zpage=o;var r=[];if(o<5)for(var i=1;i<=o;i++)r.push(i);else r=[1,2,3,4,5];s.page=r,console.log(t(s.page+"1111111111111111111"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:159"))},arrowDown:function(){this.isShowSelect=!this.isShowSelect},select:function(s,a){this.isShowSelect=!1,this.unitName=s.value},getServerData:function(){var s=this;console.log(t(this.systemDate," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:169")),console.log(t(this.systemDate1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:170")),(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(a){console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:175")),p.res1=[],s.total=[],s.total.push(a.data.length),console.log(t(s.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:179")),s.productPage();var e=s.splitarray(a.data,5);if(console.log(t(e," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:182")),a.data.length<5)p.res1=a.data;else for(var o=0;o<a.data.length;o++)o<5&&p.res1.push(a.data[o]);for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)})},getServerData1:function(){var s=this;(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(a){console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:209"));var e=a.data,o=e.sort(p.compare("grossProfitRate"));console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:212")),p.res1=[],s.total=[],s.total.push(o.length),console.log(t(s.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:216")),s.productPage();var r=s.splitarray(o,5);if(console.log(t(r," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:219")),o.length<5)p.res1=o;else for(var i=0;i<o.length;i++)i<5&&p.res1.push(o[i]);for(var n={categories:[],series:[{name:"毛利率",data:[]}]},l=0;l<p.res1.length;l++)n.categories.push(p.res1[l].productName),n.series[0].data.push(p.res1[l].grossProfitRate);p.showColumn("canvasColumn",n)})},showColumn:function(s,a){y=new o.default({$this:p,canvasId:s,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",pixelRatio:p.pixelRatio,animation:!0,categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:p.cWidth*p.pixelRatio,height:p.cHeight*p.pixelRatio,extra:{column:{width:p.cWidth*p.pixelRatio*.45/a.categories.length}}})},changeData:function(){y.updateData({series:p.serverData.ColumnB.series,categories:p.serverData.ColumnB.categories})},addDate:function(){var s=new Date;console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:276")),this.systemDate=(0,i.parseTime)(s,"{y}-{m}-{d}"),console.log(t(this.systemDate+"截止时间"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:278"))},addDate1:function(){var s=new Date;this.systemDate1=(0,n.parseTime1)(s,"{y}-{m}-{d}"),console.log(t(this.systemDate1+"开始时间"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:284"))},ChangeDate:function(s){var a=new Date(s);this.systemDate=(0,i.parseTime)(a,"{y}-{m}-{d}")},ChangeDate1:function(s){console.log(t(s+"截止日期"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:293"));var a=new Date(s);this.systemDate1=(0,i.parseTime)(a,"{y}-{m}-{d}")},compare:function(s){return function(a,e){var t=a[s],o=e[s];return t<o?1:t>o?-1:0}},toPercent:function(s){var a=Number(100*s).toFixed(1);return a+="%",a},change:function(s){var a=this,e=s.choiceDate,o=s.dayCount;this.systemDate="",this.systemDate1="",console.log(t(e,o," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:323")),console.log(t("入住从 "+e[0].re+"  到 "+e[1].re+"  共 "+o+" 晚"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:324")),this.systemDate=e[0].date.substring(0,4)+"-"+e[0].date.substring(4,6)+"-"+e[0].date.substring(6,8),this.systemDate1=e[1].date.substring(0,4)+"-"+e[1].date.substring(4,6)+"-"+e[1].date.substring(6,8),console.log(t(this.systemDate," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:327")),console.log(t(this.systemDate1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:328")),(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(s){console.log(t(s.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:333")),p.res1=[],a.total=[],a.total.push(s.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:337")),a.productPage();var e=a.splitarray(s.data,5);if(console.log(t(e," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:340")),s.data.length<5)p.res1=s.data;else for(var o=0;o<s.data.length;o++)o<5&&p.res1.push(s.data[o]);for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)})},treeConfirm:function(s){console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:364")),2==s[0].id?(this.searchType=[],this.searchType.push(2),console.log(t(this.searchType[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:368")),this.getServerData()):(this.searchType=[],this.searchType.push(1),console.log(t(this.searchType[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:373")),this.getServerData1())},treeCancel:function(s){console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:379"))},showTree:function(){this.$refs.tkitree._show()},qy:function(s){var a=this,e=this;e.current=s,console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:388")),2==this.searchType?(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(e){console.log(t(e.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:394")),p.res1=[],a.total=[],a.total.push(e.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:398"));var o=a.splitarray(e.data,5);console.log(t(o," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:401")),p.res1=o[s-1],console.log(t(p.res1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:403"));for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)}):(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(e){console.log(t(e.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:420"));var o=e.data,r=o.sort(p.compare("grossProfitRate"));p.res1=[],a.total=[],a.total.push(e.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:426"));var i=a.splitarray(r,5);console.log(t(i," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:429")),p.res1=i[s-1],console.log(t(p.res1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:431"));for(var n={categories:[],series:[{name:"毛利率",data:[]}]},l=0;l<p.res1.length;l++)n.categories.push(p.res1[l].productName),n.series[0].data.push(p.res1[l].grossProfitRate);p.showColumn("canvasColumn",n)});var o=parseInt(e.total),r=parseInt(e.pageSize),i=parseInt(o/r);o/r>i&&i++;var n=[];if(!(i<5))return s>=i-2?(n=[i-4,i-3,i-2,i-1,i],e.page=n,void console.log(t(e.page+"2222222222222"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:457"))):i>5&&s<4?(n=[1,2,3,4,5],e.page=n,void console.log(t(e.page+"333333333333"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:463"))):i>5&&s>3?(n=[s-2,s-1,s,s+1,s+2],e.page=n,void console.log(t(e.page+"444444444444444444"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:469"))):void 0},splitarray:function(s,a){for(var e=s.length,t=[],o=0;o<e;o+=a)t.push(s.slice(o,o+a));return t}}};a.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},"380e":function(s,a,e){"use strict";e.r(a);var t=e("3623"),o=e.n(t);for(var r in t)"default"!==r&&function(s){e.d(a,s,function(){return t[s]})}(r);a["default"]=o.a},6494:function(s,a,e){"use strict";var t=e("1dc2"),o=e.n(t);o.a},"794e":function(s,a,e){"use strict";var t=function(){var s=this,a=s.$createElement;s._self._c},o=[];e.d(a,"a",function(){return t}),e.d(a,"b",function(){return o})},e642:function(s,a,e){"use strict";e.r(a);var t=e("794e"),o=e("380e");for(var r in o)"default"!==r&&function(s){e.d(a,s,function(){return o[s]})}(r);e("6494");var i=e("2877"),n=Object(i["a"])(o["default"],t["a"],t["b"],!1,null,null,null);a["default"]=n.exports}},[["0545","common/runtime","common/vendor"]]]);