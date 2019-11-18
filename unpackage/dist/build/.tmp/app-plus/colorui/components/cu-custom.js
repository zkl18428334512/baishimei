(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"4f78":function(t,a,n){"use strict";n.r(a);var u=n("a58f"),e=n("f1b3");for(var o in e)"default"!==o&&function(t){n.d(a,t,function(){return e[t]})}(o);var r=n("2877"),c=Object(r["a"])(e["default"],u["a"],u["b"],!1,null,null,null);a["default"]=c.exports},a58f:function(t,a,n){"use strict";var u=function(){var t=this,a=t.$createElement;t._self._c},e=[];n.d(a,"a",function(){return u}),n.d(a,"b",function(){return e})},f1b3:function(t,a,n){"use strict";n.r(a);var u=n("ffba"),e=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(a,t,function(){return u[t]})}(o);a["default"]=e.a},ffba:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,u="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(n,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=n}).call(this,n("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("4f78"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);                
