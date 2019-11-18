var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-33e1d601'])
Z([[2,'!'],[[7],[3,'modal']]])
Z([3,'__e'])
Z([3,'order-time data-v-33e1d601'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'showCalendar']]]]]]]]])
Z([[7],[3,'singleDate']])
Z([3,'time-viewer data-v-33e1d601'])
Z([[2,'=='],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[6],[[6],[[7],[3,'choiceDate']],[1,0]],[3,'year']],[1,'']],[[6],[[6],[[7],[3,'choiceDate']],[1,0]],[3,'month']]],[1,'']],[[6],[[6],[[7],[3,'choiceDate']],[1,0]],[3,'day']]],[[7],[3,'today']]])
Z([[2,'=='],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[6],[[6],[[7],[3,'choiceDate']],[[2,'-'],[[6],[[7],[3,'choiceDate']],[3,'length']],[1,1]]],[3,'year']],[1,'']],[[6],[[6],[[7],[3,'choiceDate']],[[2,'-'],[[6],[[7],[3,'choiceDate']],[3,'length']],[1,1]]],[3,'month']]],[1,'']],[[6],[[6],[[7],[3,'choiceDate']],[[2,'-'],[[6],[[7],[3,'choiceDate']],[3,'length']],[1,1]]],[3,'day']]],[[7],[3,'tomorrow']]])
Z([[4],[[5],[[5],[1,'layer-content data-v-33e1d601']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'choice']],[1,true]],[[7],[3,'singleDate']]],[1,'choiceDate'],[1,'']]]])
Z([3,'index'])
Z([3,'monthData'])
Z([[7],[3,'date']])
Z(z[10])
Z([3,'index2'])
Z([3,'data'])
Z([[7],[3,'monthData']])
Z(z[14])
Z(z[2])
Z([[4],[[5],[[5],[1,'day data-v-33e1d601']],[[2,'?:'],[[2,'<'],[[6],[[7],[3,'data']],[3,'re']],[[7],[3,'today']]],[[2,'?:'],[[6],[[7],[3,'data']],[3,'selected']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'data']],[3,'date']],[[6],[[6],[[7],[3,'choiceDate']],[1,0]],[3,'date']]],[1,' begin'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'data']],[3,'date']],[[6],[[6],[[7],[3,'choiceDate']],[1,1]],[3,'date']]],[1,' end'],[1,'']]],[1,'']],[[2,'?:'],[[6],[[7],[3,'data']],[3,'selected']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'data']],[3,'date']],[[6],[[6],[[7],[3,'choiceDate']],[1,0]],[3,'date']]],[1,' begin'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'data']],[3,'date']],[[6],[[6],[[7],[3,'choiceDate']],[1,1]],[3,'date']]],[1,' end'],[1,'']]],[1,'']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'dayClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'index2']])
Z([[2,'?:'],[[2,'=='],[[7],[3,'index2']],[1,0]],[[2,'+'],[[2,'+'],[1,'margin-left:'],[[2,'*'],[[6],[[7],[3,'weeks']],[[7],[3,'index']]],[[2,'/'],[1,100],[1,7]]]],[1,'%']],[1,'']])
Z([1,false])
Z(z[24])
Z([[2,'||'],[[2,'==='],[[7],[3,'choice']],[1,true]],[[7],[3,'singleDate']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'tki-tree'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'treeList']])
Z(z[3])
Z([[2,'?:'],[[7],[3,'selectParent']],[1,true],[[6],[[7],[3,'item']],[3,'lastRank']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[0])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'data'])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z([3,'deliveryOrderId'])
Z([3,'__e'])
Z([3,'margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleTap']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'list']],[1,'deliveryOrderId']],[[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'deliveryOrderId']]],[1,'deliveryOrderId']]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'remark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'order']],[3,'deliveryOrderId']])
Z([3,'cu-item shadow'])
Z([3,'text-content'])
Z([[6],[[7],[3,'order']],[3,'deliveryAddress']])
Z([[6],[[7],[3,'order']],[3,'remark']])
Z([[2,'>'],[[6],[[7],[3,'sourceList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([[7],[3,'daysCount']])
Z([3,'2019-06-05'])
Z([3,'2019-06-01'])
Z([3,'1'])
Z([3,'position:absolute;top:30rpx;right:10rpx;'])
Z(z[2])
Z([3,'trig-item _a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTree']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'#654321'])
Z([3,'20'])
Z([3,'chevron-down'])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'treeConfirm']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'treeCancel']]]]]]]]])
Z([3,'tkitree'])
Z([[7],[3,'multiple']])
Z([[7],[3,'list']])
Z([3,'name'])
Z([[7],[3,'selectParent']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'order']],[3,'deliveryDate']])
Z([[2,'>'],[[6],[[7],[3,'sourceList']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'data'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z([3,'productId'])
Z([3,'__i1__'])
Z([3,'item'])
Z([[6],[[7],[3,'data']],[3,'l0']])
Z([3,'purchaseOrderItemId'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'prevBuyerOrgId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([[7],[3,'hasLogin']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cuIconList']])
Z(z[2])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'hidden']]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,0]])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'badge']],[1,1]])
Z([[7],[3,'loadModal']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[0])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'data'])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z([3,'purchaseOrderId'])
Z([3,'__e'])
Z([3,'margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleTap']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'list']],[1,'purchaseOrderId']],[[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'purchaseOrderId']]],[1,'purchaseOrderId']]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'sellerOrgAddress']])
Z([[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'remark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'order']],[3,'purchaseOrderId']])
Z([3,'cu-item shadow'])
Z([3,'text-content'])
Z([[6],[[7],[3,'order']],[3,'sellerOrgAddress']])
Z([[6],[[7],[3,'order']],[3,'remark']])
Z([[2,'>'],[[6],[[7],[3,'sourceList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l1']])
Z(z[0])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'__i0__'])
Z([3,'data'])
Z([[6],[[7],[3,'item']],[3,'l0']])
Z([3,'purchaseOrderId'])
Z([3,'__e'])
Z([3,'margin-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'handleTap']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]],[[4],[[5],[[5],[[5],[[5],[1,'list']],[1,'purchaseOrderId']],[[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'purchaseOrderId']]],[1,'purchaseOrderId']]]]]]]]]]]]]]])
Z([[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'buyerOrgAddress']])
Z([[6],[[6],[[7],[3,'data']],[3,'$orig']],[3,'remark']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([[7],[3,'daysCount']])
Z([3,'2019-06-05'])
Z([3,'2019-06-01'])
Z([3,'1'])
Z([3,'position:absolute;top:30rpx;right:10rpx;'])
Z(z[2])
Z([3,'trig-item _a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTree']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'#654321'])
Z([3,'20'])
Z([3,'chevron-down'])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z(z[2])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'treeConfirm']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'treeCancel']]]]]]]]])
Z([3,'tkitree'])
Z([[7],[3,'multiple']])
Z([[7],[3,'list']])
Z([3,'name'])
Z([[7],[3,'selectParent']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'order']],[3,'purchaseOrderId']])
Z([3,'cu-item shadow'])
Z([3,'flex-treble'])
Z([[6],[[7],[3,'order']],[3,'buyerOrgAddress']])
Z([[6],[[7],[3,'order']],[3,'remark']])
Z([[2,'>'],[[6],[[7],[3,'sourceList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./components/cmd-icon/cmd-icon.wxml','./components/date-picker/date-picker2.wxml','./components/kilvn-fa-icon/fa-icon.wxml','./components/tki-tree/tki-tree.wxml','./components/yang-paging/fy.wxml','./pages/bind/bind.wxml','./pages/deliver/deliver.wxml','./pages/deliveritem/deliveritem.wxml','./pages/grossprofitanalysis/grossprofitanalysis.wxml','./pages/inspect/inspect.wxml','./pages/inspectitem/inspectitem.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/purchase/purchase.wxml','./pages/purchaseitem/purchaseitem.wxml','./pages/report/report.wxml','./pages/sales/sales.wxml','./pages/salesanalysis/salesanalysis.wxml','./pages/salesitem/salesitem.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,1,e,s,gg)){lK.wxVkey=1
var aL=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,5,e,s,gg)){tM.wxVkey=1
}
else{tM.wxVkey=2
var eN=_n('view')
_rz(z,eN,'class',6,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,7,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(eN,oP)
if(_oz(z,8,e,s,gg)){oP.wxVkey=1
}
bO.wxXCkey=1
oP.wxXCkey=1
_(tM,eN)
}
tM.wxXCkey=1
_(lK,aL)
}
var xQ=_n('view')
_rz(z,xQ,'class',9,e,s,gg)
var fS=_v()
_(xQ,fS)
var cT=function(oV,hU,cW,gg){
var lY=_v()
_(cW,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2,'data-index',3,'data-indexs',4,'style',5],[],e2,t1,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,24,e2,t1,gg)){o6.wxVkey=1
}
var f7=_v()
_(x5,f7)
if(_oz(z,25,e2,t1,gg)){f7.wxVkey=1
}
o6.wxXCkey=1
f7.wxXCkey=1
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,16,aZ,oV,hU,gg,lY,'data','index2','index2')
return cW
}
fS.wxXCkey=2
_2z(z,12,cT,e,s,gg,fS,'monthData','index','index')
var oR=_v()
_(xQ,oR)
if(_oz(z,26,e,s,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
_(oJ,xQ)
lK.wxXCkey=1
_(r,oJ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o0=_mz(z,'view',['catchtouchmove',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
var oBB=function(aDB,lCB,tEB,gg){
var bGB=_v()
_(tEB,bGB)
if(_oz(z,7,aDB,lCB,gg)){bGB.wxVkey=1
}
bGB.wxXCkey=1
return tEB
}
cAB.wxXCkey=2
_2z(z,5,oBB,e,s,gg,cAB,'item','index','index')
_(r,o0)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var fKB=_v()
_(r,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
if(_oz(z,4,oNB,hMB,gg)){lQB.wxVkey=1
var aRB=_v()
_(lQB,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],bUB,eTB,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,12,bUB,eTB,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
_(oVB,oXB)
return oVB
}
aRB.wxXCkey=2
_2z(z,7,tSB,oNB,hMB,gg,aRB,'data','__i0__','deliveryOrderId')
}
else{lQB.wxVkey=2
}
lQB.wxXCkey=1
return cOB
}
fKB.wxXCkey=2
_2z(z,2,cLB,e,s,gg,fKB,'item','index','index')
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var h1B=_v()
_(r,h1B)
if(_oz(z,0,e,s,gg)){h1B.wxVkey=1
var o2B=_n('view')
_rz(z,o2B,'class',1,e,s,gg)
var o4B=_n('view')
_rz(z,o4B,'class',2,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,3,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,4,e,s,gg)){a6B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
_(o2B,o4B)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,5,e,s,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
_(h1B,o2B)
}
h1B.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_mz(z,'calendar',['bind:__l',1,'bind:change',1,'data-event-opts',2,'daysCount',3,'endDate',4,'startDate',5,'vueId',6],[],e,s,gg)
_(e8B,b9B)
var o0B=_n('view')
_rz(z,o0B,'style',8,e,s,gg)
var xAC=_mz(z,'navigator',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var oBC=_mz(z,'cmd-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(xAC,oBC)
_(o0B,xAC)
var fCC=_mz(z,'tki-tree',['bind:__l',17,'bind:cancel',1,'bind:confirm',2,'class',3,'data-event-opts',4,'data-ref',5,'multiple',6,'range',7,'rangeKey',8,'selectParent',9,'vueId',10],[],e,s,gg)
_(o0B,fCC)
_(e8B,o0B)
_(r,e8B)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oFC=_n('view')
var cGC=_v()
_(oFC,cGC)
if(_oz(z,0,e,s,gg)){cGC.wxVkey=1
var oHC=_v()
_(cGC,oHC)
if(_oz(z,1,e,s,gg)){oHC.wxVkey=1
}
oHC.wxXCkey=1
}
var lIC=_v()
_(oFC,lIC)
var aJC=function(eLC,tKC,bMC,gg){
var xOC=_v()
_(bMC,xOC)
var oPC=function(cRC,fQC,hSC,gg){
var cUC=_v()
_(hSC,cUC)
if(_oz(z,10,cRC,fQC,gg)){cUC.wxVkey=1
}
cUC.wxXCkey=1
return hSC
}
xOC.wxXCkey=2
_2z(z,8,oPC,eLC,tKC,gg,xOC,'item','__i1__','purchaseOrderItemId')
return bMC
}
lIC.wxXCkey=2
_2z(z,4,aJC,e,s,gg,lIC,'data','__i0__','productId')
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lWC=_v()
_(r,lWC)
if(_oz(z,0,e,s,gg)){lWC.wxVkey=1
}
lWC.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var tYC=_n('view')
_rz(z,tYC,'class',0,e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,1,e,s,gg)){eZC.wxVkey=1
}
var o2C=_v()
_(tYC,o2C)
var x3C=function(f5C,o4C,c6C,gg){
var o8C=_v()
_(c6C,o8C)
if(_oz(z,6,f5C,o4C,gg)){o8C.wxVkey=1
var c9C=_v()
_(o8C,c9C)
if(_oz(z,7,f5C,o4C,gg)){c9C.wxVkey=1
var o0C=_v()
_(c9C,o0C)
if(_oz(z,8,f5C,o4C,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
}
c9C.wxXCkey=1
}
o8C.wxXCkey=1
return c6C
}
o2C.wxXCkey=2
_2z(z,4,x3C,e,s,gg,o2C,'item','index','index')
var b1C=_v()
_(tYC,b1C)
if(_oz(z,9,e,s,gg)){b1C.wxVkey=1
}
eZC.wxXCkey=1
b1C.wxXCkey=1
_(r,tYC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var aBD=_v()
_(r,aBD)
var tCD=function(bED,eDD,oFD,gg){
var oHD=_v()
_(oFD,oHD)
if(_oz(z,4,bED,eDD,gg)){oHD.wxVkey=1
var fID=_v()
_(oHD,fID)
var cJD=function(oLD,hKD,cMD,gg){
var lOD=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],oLD,hKD,gg)
var aPD=_v()
_(lOD,aPD)
if(_oz(z,12,oLD,hKD,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(lOD,tQD)
if(_oz(z,13,oLD,hKD,gg)){tQD.wxVkey=1
}
aPD.wxXCkey=1
tQD.wxXCkey=1
_(cMD,lOD)
return cMD
}
fID.wxXCkey=2
_2z(z,7,cJD,bED,eDD,gg,fID,'data','__i0__','purchaseOrderId')
}
else{oHD.wxVkey=2
}
oHD.wxXCkey=1
return oFD
}
aBD.wxXCkey=2
_2z(z,2,tCD,e,s,gg,aBD,'item','index','index')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var bSD=_v()
_(r,bSD)
if(_oz(z,0,e,s,gg)){bSD.wxVkey=1
var oTD=_n('view')
_rz(z,oTD,'class',1,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'class',2,e,s,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,3,e,s,gg)){fWD.wxVkey=1
}
var cXD=_v()
_(oVD,cXD)
if(_oz(z,4,e,s,gg)){cXD.wxVkey=1
}
fWD.wxXCkey=1
cXD.wxXCkey=1
_(oTD,oVD)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,5,e,s,gg)){xUD.wxVkey=1
}
xUD.wxXCkey=1
_(bSD,oTD)
}
bSD.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var c1D=_v()
_(r,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_v()
_(t5D,b7D)
if(_oz(z,4,a4D,l3D,gg)){b7D.wxVkey=1
var o8D=_v()
_(b7D,o8D)
var x9D=function(fAE,o0D,cBE,gg){
var oDE=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],fAE,o0D,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,12,fAE,o0D,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,13,fAE,o0D,gg)){oFE.wxVkey=1
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(cBE,oDE)
return cBE
}
o8D.wxXCkey=2
_2z(z,7,x9D,a4D,l3D,gg,o8D,'data','__i0__','purchaseOrderId')
}
else{b7D.wxVkey=2
}
b7D.wxXCkey=1
return t5D
}
c1D.wxXCkey=2
_2z(z,2,o2D,e,s,gg,c1D,'item','index','index')
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var aHE=_n('view')
_rz(z,aHE,'class',0,e,s,gg)
var tIE=_mz(z,'calendar',['bind:__l',1,'bind:change',1,'data-event-opts',2,'daysCount',3,'endDate',4,'startDate',5,'vueId',6],[],e,s,gg)
_(aHE,tIE)
var eJE=_n('view')
_rz(z,eJE,'style',8,e,s,gg)
var bKE=_mz(z,'navigator',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var oLE=_mz(z,'cmd-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(bKE,oLE)
_(eJE,bKE)
var xME=_mz(z,'tki-tree',['bind:__l',17,'bind:cancel',1,'bind:confirm',2,'class',3,'data-event-opts',4,'data-ref',5,'multiple',6,'range',7,'rangeKey',8,'selectParent',9,'vueId',10],[],e,s,gg)
_(eJE,xME)
_(aHE,eJE)
_(r,aHE)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var fOE=_v()
_(r,fOE)
if(_oz(z,0,e,s,gg)){fOE.wxVkey=1
var cPE=_n('view')
_rz(z,cPE,'class',1,e,s,gg)
var oRE=_n('view')
_rz(z,oRE,'class',2,e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,3,e,s,gg)){cSE.wxVkey=1
}
var oTE=_v()
_(oRE,oTE)
if(_oz(z,4,e,s,gg)){oTE.wxVkey=1
}
cSE.wxXCkey=1
oTE.wxXCkey=1
_(cPE,oRE)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,5,e,s,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
_(fOE,cPE)
}
fOE.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var aVE=_v()
_(r,aVE)
if(_oz(z,0,e,s,gg)){aVE.wxVkey=1
}
aVE.wxXCkey=1
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/main/main","pages/login/login","pages/bind/bind","pages/user/user","pages/deliver/deliver","pages/deliveritem/deliveritem","pages/purchase/purchase","pages/purchaseitem/purchaseitem","pages/inspect/inspect","pages/inspectitem/inspectitem","pages/sales/sales","pages/salesitem/salesitem","pages/report/report","pages/salesanalysis/salesanalysis","pages/grossprofitanalysis/grossprofitanalysis"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"食采配管理","compilerVersion":"2.3.3","usingComponents":{"cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['components/cmd-icon/cmd-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/cmd-icon/cmd-icon.wxml']=$gwx('./components/cmd-icon/cmd-icon.wxml');

__wxAppCode__['components/date-picker/date-picker2.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/date-picker/date-picker2.wxml']=$gwx('./components/date-picker/date-picker2.wxml');

__wxAppCode__['components/kilvn-fa-icon/fa-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/kilvn-fa-icon/fa-icon.wxml']=$gwx('./components/kilvn-fa-icon/fa-icon.wxml');

__wxAppCode__['components/tki-tree/tki-tree.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/tki-tree/tki-tree.wxml']=$gwx('./components/tki-tree/tki-tree.wxml');

__wxAppCode__['components/yang-paging/fy.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/yang-paging/fy.wxml']=$gwx('./components/yang-paging/fy.wxml');

__wxAppCode__['pages/bind/bind.json']={"navigationBarTitleText":"账号绑定","usingComponents":{}};
__wxAppCode__['pages/bind/bind.wxml']=$gwx('./pages/bind/bind.wxml');

__wxAppCode__['pages/deliver/deliver.json']={"navigationBarTitleText":"配送任务","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/deliver/deliver.wxml']=$gwx('./pages/deliver/deliver.wxml');

__wxAppCode__['pages/deliveritem/deliveritem.json']={"navigationBarTitleText":"装车","usingComponents":{}};
__wxAppCode__['pages/deliveritem/deliveritem.wxml']=$gwx('./pages/deliveritem/deliveritem.wxml');

__wxAppCode__['pages/grossprofitanalysis/grossprofitanalysis.json']={"navigationBarTitleText":"毛利分析","usingComponents":{"calendar":"/components/date-picker/date-picker2","tki-tree":"/components/tki-tree/tki-tree","fa-icon":"/components/kilvn-fa-icon/fa-icon","cmd-icon":"/components/cmd-icon/cmd-icon"}};
__wxAppCode__['pages/grossprofitanalysis/grossprofitanalysis.wxml']=$gwx('./pages/grossprofitanalysis/grossprofitanalysis.wxml');

__wxAppCode__['pages/inspect/inspect.json']={"navigationBarTitleText":"验收任务","usingComponents":{}};
__wxAppCode__['pages/inspect/inspect.wxml']=$gwx('./pages/inspect/inspect.wxml');

__wxAppCode__['pages/inspectitem/inspectitem.json']={"navigationBarTitleText":"验收","usingComponents":{}};
__wxAppCode__['pages/inspectitem/inspectitem.wxml']=$gwx('./pages/inspectitem/inspectitem.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/purchase/purchase.json']={"navigationBarTitleText":"采购任务","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/purchase/purchase.wxml']=$gwx('./pages/purchase/purchase.wxml');

__wxAppCode__['pages/purchaseitem/purchaseitem.json']={"navigationBarTitleText":"定价","usingComponents":{}};
__wxAppCode__['pages/purchaseitem/purchaseitem.wxml']=$gwx('./pages/purchaseitem/purchaseitem.wxml');

__wxAppCode__['pages/report/report.json']={"navigationBarTitleText":"报表","usingComponents":{}};
__wxAppCode__['pages/report/report.wxml']=$gwx('./pages/report/report.wxml');

__wxAppCode__['pages/sales/sales.json']={"navigationBarTitleText":"销售单","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/sales/sales.wxml']=$gwx('./pages/sales/sales.wxml');

__wxAppCode__['pages/salesanalysis/salesanalysis.json']={"navigationBarTitleText":"销售额分析","usingComponents":{"calendar":"/components/date-picker/date-picker2","paging":"/components/yang-paging/fy","tki-tree":"/components/tki-tree/tki-tree","cmd-icon":"/components/cmd-icon/cmd-icon"}};
__wxAppCode__['pages/salesanalysis/salesanalysis.wxml']=$gwx('./pages/salesanalysis/salesanalysis.wxml');

__wxAppCode__['pages/salesitem/salesitem.json']={"navigationBarTitleText":"销售菜品","usingComponents":{}};
__wxAppCode__['pages/salesitem/salesitem.wxml']=$gwx('./pages/salesitem/salesitem.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4d42":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),u=n("ae74"),a=n("0fa4");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={computed:(0,r.mapState)(["hasLogin"]),onLaunch:function(){var t=this;console.log(e("App Launch"," at App.vue:8"));var n=(0,u.getToken)();n?(console.log(e("has token:"+n," at App.vue:11")),this.loadingInfo(!0),(0,a.getUserInfo)().then(function(e){t.info(e.data),t.loadingInfo(!1)}),console.log(e("launch done info"," at App.vue:19"))):o.reLaunch({url:"pages/login/login"})},onShow:function(){console.log(e("App Show"," at App.vue:27"))},onHide:function(){console.log(e("App Hide"," at App.vue:30"))},methods:c({},(0,r.mapMutations)(["login","info","loadingInfo"]))};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},"500d":function(e,t,n){},"7df3":function(e,t,n){"use strict";var o=n("500d"),r=n.n(o);r.a},"91b6":function(e,t,n){"use strict";n.r(t);var o=n("bfb0");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("7df3");var u,a,c=n("2877"),f=Object(c["a"])(o["default"],u,a,!1,null,null,null);t["default"]=f.exports},bfb0:function(e,t,n){"use strict";n.r(t);var o=n("4d42"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},ea41:function(e,t,n){"use strict";(function(e){n("f263"),n("921b");var t=c(n("66fd")),o=c(n("91b6")),r=c(n("2f09")),u=a(n("86dc"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){return n.e("colorui/components/cu-custom").then(n.bind(null,"4f78"))};t.default.component("cu-custom",i),t.default.config.productionTip=!1,t.default.prototype.$store=r.default,o.default.mpType="app",Object.keys(u).forEach(function(e){t.default.filter(e,u[e])});var p=new t.default(f({store:r.default},o.default));e(p).$mount()}).call(this,n("6e42")["createApp"])}},[["ea41","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, a = t[0], u = t[1], l = t[2], p = 0, s = []; p < a.length; p++) {
      r = a[p], c[r] && s.push(c[r][0]), c[r] = 0;
    }

    for (o in u) {
      Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
    }

    f && f(t);

    while (s.length) {
      s.shift()();
    }

    return i.push.apply(i, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, r = 1; r < n.length; r++) {
        var a = n[r];
        0 !== c[a] && (o = !1);
      }

      o && (i.splice(t--, 1), e = u(u.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      c = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
  }

  u.e = function (e) {
    var t = [],
        n = {
      "components/date-picker/date-picker2": 1,
      "components/cmd-icon/cmd-icon": 1,
      "components/tki-tree/tki-tree": 1,
      "components/yang-paging/fy": 1,
      "components/kilvn-fa-icon/fa-icon": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "colorui/components/cu-custom": "colorui/components/cu-custom",
        "components/date-picker/date-picker2": "components/date-picker/date-picker2",
        "components/cmd-icon/cmd-icon": "components/cmd-icon/cmd-icon",
        "components/tki-tree/tki-tree": "components/tki-tree/tki-tree",
        "components/yang-paging/fy": "components/yang-paging/fy",
        "components/kilvn-fa-icon/fa-icon": "components/kilvn-fa-icon/fa-icon"
      }[e] || e) + ".wxss", c = u.p + o, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === o || p === c)) return t();
      }

      var s = document.getElementsByTagName("style");

      for (a = 0; a < s.length; a++) {
        l = s[a], p = l.getAttribute("data-href");
        if (p === o || p === c) return t();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
        var o = t && t.target && t.target.src || c,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        i.request = o, delete r[e], f.parentNode.removeChild(f), n(i);
      }, f.href = c;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      r[e] = 0;
    }));
    var o = c[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var i = new Promise(function (t, n) {
        o = c[e] = [t, n];
      });
      t.push(o[2] = i);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, u.nc && p.setAttribute("nonce", u.nc), p.src = a(e), l = function l(t) {
        p.onerror = p.onload = null, clearTimeout(s);
        var n = c[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            i.type = o, i.request = r, n[1](i);
          }

          c[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, u.m = e, u.c = o, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      u.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var s = 0; s < l.length; s++) {
    t(l[s]);
  }

  var f = p;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"00bf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pinyinMatch=a;var r=i(n("935e"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return r.default.match(t,e)}},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(i.length>1){var o=i.pop();a=i.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=i[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"0f52":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/main/main":{navigationBarTitleText:"首页"},"pages/login/login":{navigationBarTitleText:"登录"},"pages/bind/bind":{navigationBarTitleText:"账号绑定"},"pages/user/user":{navigationBarTitleText:"我的"},"pages/deliver/deliver":{navigationBarTitleText:"配送任务",enablePullDownRefresh:!0},"pages/deliveritem/deliveritem":{navigationBarTitleText:"装车"},"pages/purchase/purchase":{navigationBarTitleText:"采购任务",enablePullDownRefresh:!0},"pages/purchaseitem/purchaseitem":{navigationBarTitleText:"定价"},"pages/inspect/inspect":{navigationBarTitleText:"验收任务"},"pages/inspectitem/inspectitem":{navigationBarTitleText:"验收"},"pages/sales/sales":{navigationBarTitleText:"销售单",enablePullDownRefresh:!0},"pages/salesitem/salesitem":{navigationBarTitleText:"销售菜品"},"pages/report/report":{navigationBarTitleText:"报表"},"pages/salesanalysis/salesanalysis":{navigationBarTitleText:"销售额分析"},"pages/grossprofitanalysis/grossprofitanalysis":{navigationBarTitleText:"毛利分析"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#fbf9fe"}};e.default=r},"0fa4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.doLogin=a,e.getLoginCode=o,e.doLoginWithWechat=s,e.getUserInfo=c;var r=i(n("639f"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return r.default.request({url:"/auth/login-code",method:"post",data:{data:t}})}function o(t){return r.default.request({url:"/auth/sms-login-code",method:"post",data:{data:t}})}function s(t){return r.default.request({url:"/auth/login-wechat-code",method:"post",data:{data:t}})}function c(){return r.default.request({url:"/auth/me",method:"GET"})}},"1ce9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDeliveryOrder=a,e.fetchPendingDelivery=o,e.countPendingDelivery=s,e.fetchDeliveryItem=c,e.loadItem=l;var r=i(n("639f"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return r.default.request({url:"/api/v1/supply-chain/delivery-order/{deliveryOrderId}",method:"GET",data:t})}function o(t){return r.default.request({url:"/api/v1/supply-chain/delivery-order/list-pending-delivery-order",method:"GET",data:t})}function s(){return r.default.request({url:"/api/v1/supply-chain/delivery-order/count-pending-delivery-order",method:"GET"})}function c(t){return r.default.request({url:"/api/v1/supply-chain/delivery-order-item/{deliveryOrderId}/list",method:"GET",data:t})}function l(t){return r.default.request({url:"/api/v1/supply-chain/delivery-order-item/load-item",method:"POST",data:{data:t}})}},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o,s){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},"2f09":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("66fd")),i=o(n("2f62")),a=n("ae74");function o(t){return t&&t.__esModule?t:{default:t}}r.default.use(i.default);var s=new i.default.Store({state:{forcedLogin:!0,hasLogin:!1,isLoading:!1,userInfo:void 0,permissionList:[],userToken:"",tokenExpireTime:void 0},mutations:{login:function(t,e){t.userToken=e.token,(0,a.setToken)(e.token)},logout:function(t){t.hasLogin=!1,t.userInfo=void 0,t.permissionList=[],t.userToken="",t.tokenExpireTime=void 0,(0,a.removeToken)()},loadingInfo:function(t,e){t.isLoading=e},info:function(t,e){t.hasLogin=!0,t.userToken=(0,a.getToken)(),t.userInfo=e,t.permissionList=e.permissionList}}}),c=s;e.default=c},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return O}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return C}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return $}),n.d(e,"createNamespacedHelpers",function(){return E});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},i="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){i&&(t._devtoolHook=i,i.emit("vuex:init",t),i.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){i.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var l=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},l.prototype.addChild=function(t,e){this._children[t]=e},l.prototype.removeChild=function(t){delete this._children[t]},l.prototype.getChild=function(t){return this._children[t]},l.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},l.prototype.forEachChild=function(t){o(this._children,t)},l.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},l.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},l.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(l.prototype,u);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;f(t.concat(r),e.getChild(r),n.modules[r])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new l(e,n);if(0===t.length)this.root=i;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],i)}e.modules&&o(e.modules,function(e,i){r.register(t.concat(i),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var d=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&O(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"===typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var o=this,s=this,c=s.dispatch,l=s.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return l.call(o,t,e,n)},this.strict=r,x(this,i,[],this._modules.root),m(this,i),n.forEach(function(t){return t(e)}),p.config.devtools&&a(this)},g={state:{configurable:!0}};function v(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;x(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,a={};o(i,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:a}),p.config.silent=s,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function x(t,e,n,r,i){var a=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]=r),!a&&!i){var s=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(s,c,r.state)})}var l=r.context=_(t,o,n);r.forEachMutation(function(e,n){var r=o+n;w(t,r,e,l)}),r.forEachAction(function(e,n){var r=e.root?n:o+n,i=e.handler||e;S(t,r,i,l)}),r.forEachGetter(function(e,n){var r=o+n;T(t,r,e,l)}),r.forEachChild(function(r,a){x(t,e,n.concat(a),r,i)})}function _(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var a=P(n,r,i),o=a.payload,s=a.options,c=a.type;return s&&s.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var a=P(n,r,i),o=a.payload,s=a.options,c=a.type;s&&s.root||(c=e+c),t.commit(c,o,s)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return k(t.state,n)}}}),i}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var a=i.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function w(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n.call(t,r.state,e)})}function S(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return c(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function T(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function P(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function O(t){p&&t===p||(p=t,r(p))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,i=P(t,e,n),a=i.type,o=i.payload,s=(i.options,{type:a,payload:o}),c=this._mutations[a];c&&(this._withCommit(function(){c.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=P(t,e),i=r.type,a=r.payload,o={type:i,payload:a},s=this._actions[i];if(s)return this._actionSubscribers.forEach(function(t){return t(o,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(a)})):s[0](a)},d.prototype.subscribe=function(t){return v(t,this._subscribers)},d.prototype.subscribeAction=function(t){return v(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,g);var D=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=L(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0}),n}),C=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var a=L(this.$store,"mapMutations",t);if(!a)return;r=a.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),M=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||L(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0}),n}),$=R(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var a=L(this.$store,"mapActions",t);if(!a)return;r=a.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}}),n}),E=function(t){return{mapState:D.bind(null,t),mapGetters:M.bind(null,t),mapMutations:C.bind(null,t),mapActions:$.bind(null,t)}};function j(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function R(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function L(t,e,n){var r=t._modulesNamespaceMap[n];return r}var I={Store:d,install:O,version:"3.0.1",mapState:D,mapMutations:C,mapGetters:M,mapActions:$,createNamespacedHelpers:E};e["default"]=I},"39ac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadYesterdaySalesData=a,e.FlipInstantaneousLoadingSalesData=o,e.CustomerDataChangeDataAnalysis=s,e.Changethetimetorenderdata=c,e.Loadingcustomerinformation=l,e.Loadingcommodityinformation=u,e.CommodityChangeData=h,e.Grossprofitanalysisdata=f;var r=i(n("639f"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-gross-profit-data",method:"GET",data:t})}function o(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-sale-data",method:"GET",data:t})}function s(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-sale-data",method:"GET",data:t})}function c(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-sale-data",method:"GET",data:t})}function l(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-rel-org",method:"GET",data:t})}function u(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/product-type-tree",method:"GET",data:t})}function h(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-sale-data",method:"GET",data:t})}function f(t){return r.default.request({url:"/report-svc/api/v1/report/stat-data-report/list-gross-profit-data",method:"GET",data:t})}},"4f1f":function(t,e,n){"use strict";(function(t){function n(e){t.showToast({icon:"none",title:e})}function r(t){var e=/^1\d{10}$/;return!!e.test(t)||(n("手机号格式错误"),!1)}function i(t){return t.length>=6||(n("密码必须大于6位"),!1)}function a(t){return 6==t.length||(n("验证码必须是6位数字"),!1)}function o(t){var e=/^\d{15}|\d{18}$/;return!!e.test(t)||(n("身份证必须是15或18位数字"),!1)}function s(t){var e=/^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{18})$/;return!!e.test(t)||(n("请输入正确的银行卡号"),!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.toast=n,e.checkPhone=r,e.checkPwd=i,e.checkCode=a,e.checkIdCard=o,e.checkBankCard=s}).call(this,n("6e42")["default"])},5320:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fetchOrder=a,e.fetchSalesOrder=o,e.getPurchaseOrder=s,e.priceOrderItem=c,e.countPendingPriceOrder=l,e.countPendingSalesOrder=u,e.fetchCollectReceiveItemByBuyer=h,e.receiveOrderItem=f,e.myFirstOrderDate=p,e.checkinSingleSalesOrder=d;var r=i(n("639f"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order/list-by-current-buyer",method:"GET",data:t})}function o(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order/list-by-current-seller",method:"GET",data:t})}function s(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order/{purchaseOrderId}",method:"GET",data:t})}function c(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order-item/price-order-item",method:"POST",data:{data:t}})}function l(){return r.default.request({url:"/api/v1/supply-chain/purchase-order/count-pending-price-order",method:"GET"})}function u(){return r.default.request({url:"/api/v1/supply-chain/purchase-order/count-pending-sales-order",method:"GET"})}function h(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order-item/collect-receive-item-list",method:"GET",data:t})}function f(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order-item/receive-order-item",method:"POST",data:{data:t}})}function p(){return r.default.request({url:"/api/v1/supply-chain/purchase-order/buyer-first-order-date",method:"GET"})}function d(t){return r.default.request({url:"/api/v1/supply-chain/purchase-order/checkin-single-sales-order",method:"POST",data:{data:t}})}},"639f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("ae74");function i(t,e){return s(t)||o(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l="";l="https://sc.tomatogo365.com";var u={config:{baseUrl:l,header:c({"Content-Type":"application/json;charset=UTF-8"},"Content-Type","application/x-www-form-urlencoded"),data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(e){var n=this;e||(e={});var a=e.url;if(a.match(new RegExp("{.*}","i"))){var o=e.data;if("string"===typeof o||"number"===typeof o)a=a.replace(new RegExp("{.*}","i"),o);else for(var s=Object.entries(o),c=0;c<s.length;c++){var l=i(s[c],2),u=l[0],h=l[1];a=a.replace(new RegExp("{"+u+"}","i"),h)}e.url=a}e.baseUrl=e.baseUrl||this.config.baseUrl,e.dataType=e.dataType||this.config.dataType,e.url=e.baseUrl+e.url,e.data=e.data||{},e.method=e.method||this.config.method;var f=(0,r.getToken)(),p={"access-token":f||""};return e.header=Object.assign({},e.header,p),new Promise(function(r,i){var a=null;e.complete=function(e){var o=e.statusCode,s=e.data;if(e.config=a,n.interceptor.response){var c=n.interceptor.response(e);c&&(e=c)}200===o&&0===s.code&&r(s),401===o||10001401===s.code?t.reLaunch({url:"/pages/login/login"}):i(s)},a=Object.assign({},n.config,e),a.requestId=(new Date).getTime(),n.interceptor.request&&n.interceptor.request(a),t.request(a)})},get:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="GET",this.request(n)},post:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="POST",this.request(n)},put:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="PUT",this.request(n)},delete:function(t,e,n){return n||(n={}),n.url=t,n.data=e,n.method="DELETE",this.request(n)}};e.default=u}).call(this,n("6e42")["default"])},6660:function(t,e,n){"use strict";(function(t){function n(e){null!==e&&void 0!==e||(e="成功"),t.showToast({title:e,icon:"success",mask:!0})}function r(e){null!==e&&void 0!==e||(e="失败"),t.showToast({title:e,icon:"none",mask:!0})}Object.defineProperty(e,"__esModule",{value:!0}),e.msgSuccess=n,e.msgError=r}).call(this,n("6e42")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var l=Object.prototype.toString;function u(t){return"[object Object]"===l.call(t)}function h(t){return"[object RegExp]"===l.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===l?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var x=Object.prototype.hasOwnProperty;function _(t,e){return x.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),T=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,k=b(function(t){return t.replace(A,"-$1").toLowerCase()});function P(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var D=Function.prototype.bind?O:P;function C(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function M(t,e){for(var n in e)t[n]=e[n];return t}function $(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function E(t,e,n){}var j=function(t,e,n){return!1},R=function(t){return t};function L(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),a=Array.isArray(e);if(i&&a)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return L(t[n],e[n])})}catch(l){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:E,parsePlatformTagName:R,mustUseProp:j,async:!0,_lifecycleHooks:N},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var U=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!U.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var V,X="__proto__"in{},J="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Q=J&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===K),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===V&&(V=!J&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),V},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ct="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=E,ut=0,ht=function(){this.id=ut++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function pt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){m(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,r,i,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var xt=Array.prototype,_t=Object.create(xt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=xt[t];H(_t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),a})});var wt=Object.getOwnPropertyNames(_t),St=!0;function Tt(t){St=t}var At=function(t){this.value=t,this.dep=new ht,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?Pt(t,_t,wt):kt(t,_t):Pt(t,_t,wt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function Pt(t,e,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];H(t,a,e[a])}}function Ot(t,e){var n;if(c(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:St&&!it()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,r,i){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,c=o&&o.set;s&&!c||2!==arguments.length||(n=t[e]);var l=!i&&Ot(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),l&&(l.dep.depend(),Array.isArray(e)&&$t(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!c||(c?c.call(t,e):n=e,l=!i&&Ot(e),a.notify())}})}}function Ct(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Dt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function $t(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&$t(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ot(t[e])};var Et=q.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,r,i,a=ct?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(r=t[n],i=e[n],_(t,n)?r!==i&&u(r)&&u(i)&&jt(r,i):Ct(t,n,i));return t}function Rt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?jt(r,i):i}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ft(t,e,n,r){var i=Object.create(t||null);return e?M(i,e):i}Et.data=function(t,e,n){return n?Rt(t,e,n):e&&"function"!==typeof e?t:Rt(t,e)},N.forEach(function(t){Et[t]=Lt}),z.forEach(function(t){Et[t+"s"]=Ft}),Et.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var a in M(i,t),e){var o=i[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),i[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return i},Et.props=Et.methods=Et.inject=Et.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return M(i,t),e&&M(i,e),i},Et.provide=Rt;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var n=t.props;if(n){var r,i,a,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(a=S(i),o[a]={type:null})}else if(u(n))for(var s in n)i=n[s],a=S(s),o[a]=u(i)?i:{type:i};else 0;t.props=o}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(u(n))for(var a in n){var o=n[a];r[a]=u(o)?M({from:a},o):{from:o}}else 0}}function Bt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Nt(e,n),qt(e,n),Bt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Wt(t,e.mixins[r],n);var a,o={};for(a in t)s(a);for(a in e)_(t,a)||s(a);function s(r){var i=Et[r]||zt;o[r]=i(t[r],e[r],n,r)}return o}function Ht(t,e,n,r){if("string"===typeof n){var i=t[e];if(_(i,n))return i[n];var a=S(n);if(_(i,a))return i[a];var o=T(a);if(_(i,o))return i[o];var s=i[n]||i[a]||i[o];return s}}function Ut(t,e,n,r){var i=e[t],a=!_(n,t),o=n[t],s=Jt(Boolean,i.type);if(s>-1)if(a&&!_(i,"default"))o=!1;else if(""===o||o===k(t)){var c=Jt(String,i.type);(c<0||s<c)&&(o=!0)}if(void 0===o){o=Gt(r,i,t);var l=St;Tt(!0),Ot(o),Tt(l)}return o}function Gt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Vt(e.type)?r.call(t):r}}function Vt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Vt(t)===Vt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Yt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var a=0;a<i.length;a++)try{var o=!1===i[a].call(r,t,e,n);if(o)return}catch(ei){Qt(ei,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{pt()}}function Kt(t,e,n,r,i){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&p(a)&&!a._handled&&(a.catch(function(t){return Yt(t,r,i+" (Promise/async)")}),a._handled=!0)}catch(ei){Yt(ei,r,i)}return a}function Qt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(ei){ei!==t&&Zt(ei,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!J&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var ie=Promise.resolve();te=function(){ie.then(re),et&&setTimeout(E)}}else if(Z||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ae=1,oe=new MutationObserver(re),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function ce(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(ei){Yt(ei,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var le=new st;function ue(t){he(t,le),le.clear()}function he(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(i){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function pe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Kt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),a=0;a<i.length;a++)Kt(i[a],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,i,o,s){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=fe(c),r(l)||(r(u)?(r(l.fns)&&(l=t[c]=pe(l,s)),a(h.once)&&(l=t[c]=o(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)r(t[c])&&(h=fe(c),i(h.name,e[c],h.capture))}function ge(t,e,n){var a=e.options.props;if(!r(a)){var o={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var l in a){var u=k(l);ve(o,c,l,u,!0)||ve(o,s,l,u,!1)}return o}}function ve(t,e,n,r,a){if(i(e)){if(_(e,n))return t[n]=e[n],a||delete e[n],!0;if(_(e,r))return t[n]=e[r],a||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function xe(t){return i(t)&&i(t.text)&&o(t.isComment)}function _e(t,e){var n,o,c,l,u=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=u.length-1,l=u[c],Array.isArray(o)?o.length>0&&(o=_e(o,(e||"")+"_"+n),xe(o[0])&&xe(l)&&(u[c]=yt(l.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?xe(l)?u[c]=yt(l.text+o):""!==o&&u.push(yt(o)):xe(o)&&xe(l)?u[c]=yt(l.text+o.text):(a(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(Tt(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),Tt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var a=r[i];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&_(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var c=t[a].default;n[a]="function"===typeof c?c.call(e):c}else 0}}return n}}function Te(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var a=t[r],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children||[]):c.push(a)}}for(var l in n)n[l].every(Ae)&&delete n[l];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var i,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&s===r.$key&&!a&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=Pe(e,c,t[c]))}else i={};for(var l in e)l in i||(i[l]=Oe(e,l));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",o),H(i,"$key",s),H(i,"$hasNormal",a),i}function Pe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Oe(t,e){return function(){return t[e]}}function De(t,e){var n,r,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,a=t.length;r<a;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)n.push(e(u.value,n.length)),u=l.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,a=o.length;r<a;r++)s=o[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ce(t,e,n,r){var i,a=this.$scopedSlots[t];a?(n=n||{},r&&(n=M(M({},r),n)),i=a(n)||e):i=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Me(t){return Ht(this.$options,"filters",t,!0)||R}function $e(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ee(t,e,n,r,i){var a=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?$e(i,r):a?$e(a,t):r?k(r)!==e:void 0}function je(t,e,n,r,i){if(n)if(c(n)){var a;Array.isArray(n)&&(n=$(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=r||q.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(o),l=k(o);if(!(c in a)&&!(l in a)&&(a[o]=n[o],i)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(r,"__static__"+t,!1),r)}function Le(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Fe(t[r],e+"_"+r,n);else Fe(t,e,n)}function Fe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function Ne(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var a=t[i];Array.isArray(a)?Ne(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Be(t,e){return"string"===typeof t?e+t:t}function We(t){t._o=Le,t._n=g,t._s=d,t._l=De,t._t=Ce,t._q=L,t._i=I,t._m=Re,t._f=Me,t._k=Ee,t._b=je,t._v=yt,t._e=vt,t._u=Ne,t._g=ze,t._d=qe,t._p=Be}function He(t,e,r,i,o){var s,c=this,l=o.options;_(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var u=a(l._compiled),h=!u;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Se(l.inject,i),this.slots=function(){return c.$slots||ke(t.scopedSlots,c.$slots=Te(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),u&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var a=rn(s,t,e,n,r,h);return a&&!Array.isArray(a)&&(a.fnScopeId=l._scopeId,a.fnContext=i),a}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,h)}}function Ue(t,e,r,a,o){var s=t.options,c={},l=s.props;if(i(l))for(var u in l)c[u]=Ut(u,l,e||n);else i(r.attrs)&&Ve(c,r.attrs),i(r.props)&&Ve(c,r.props);var h=new He(r,c,o,a,t),f=s.render.call(null,h._c,h);if(f instanceof dt)return Ge(f,r,h.parent,s,h);if(Array.isArray(f)){for(var p=me(f)||[],d=new Array(p.length),g=0;g<p.length;g++)d[g]=Ge(p[g],r,h.parent,s,h);return d}}function Ge(t,e,n,r,i){var a=mt(t);return a.fnContext=n,a.fnOptions=r,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Ve(t,e){for(var n in e)t[S(n)]=e[n]}We(He.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Ke(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Pn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Wn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Cn(e,!0):e.$destroy())}},Je=Object.keys(Xe);function Ye(t,e,n,o,s){if(!r(t)){var l=n.$options._base;if(c(t)&&(t=l.extend(t)),"function"===typeof t){var u;if(r(t.cid)&&(u=t,t=dn(u,l),void 0===t))return pn(u,e,n,o,s);e=e||{},fr(t),i(e.model)&&tn(t.options,e);var h=ge(e,t,s);if(a(t.options.functional))return Ue(t,h,e,n,o);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Qe(e);var d=t.options.name||s,g=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:o},u);return g}}}function Ke(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var r=Je[n],i=e[r],a=Xe[r];i===a||i&&i._merged||(e[r]=i?Ze(a,i):a)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[r],s=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[r]=[s].concat(o)):a[r]=s}var en=1,nn=2;function rn(t,e,n,r,i,o){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),a(o)&&(i=nn),an(t,e,n,r,i)}function an(t,e,n,r,a){if(i(n)&&i(n.__ob__))return vt();if(i(n)&&i(n.is)&&(e=n.is),!e)return vt();var o,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),a===nn?r=me(r):a===en&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),o=q.isReservedTag(e)?new dt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ye(c,n,t,r,e)):o=Ye(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(s)&&on(o,s),i(n)&&sn(n),o):vt()}function on(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,s=t.children.length;o<s;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||a(n)&&"svg"!==c.tag)&&on(c,e,n)}}function sn(t){c(t.style)&&ue(t.style),c(t.class)&&ue(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Te(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return rn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return rn(t,e,n,r,i,!0)};var a=r&&r.data;Dt(t,"$attrs",a&&a.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var ln,un=null;function hn(t){We(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=ke(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{un=e,t=r.call(e._renderProxy,e.$createElement)}catch(ei){Yt(ei,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=vt()),t.parent=i,t}}function fn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function pn(t,e,n,r,i){var a=vt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:r,tag:i},a}function dn(t,e){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=un;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],s=!0,l=null,u=null;n.$on("hook:destroyed",function(){return m(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==l&&(clearTimeout(l),l=null),null!==u&&(clearTimeout(u),u=null))},f=F(function(n){t.resolved=fn(n,e),s?o.length=0:h(!0)}),d=F(function(e){i(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,d);return c(g)&&(p(g)?r(t.resolved)&&g.then(f,d):p(g.component)&&(g.component.then(f,d),i(g.error)&&(t.errorComp=fn(g.error,e)),i(g.loading)&&(t.loadingComp=fn(g.loading,e),0===g.delay?t.loading=!0:l=setTimeout(function(){l=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),i(g.timeout)&&(u=setTimeout(function(){u=null,r(t.resolved)&&d(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function vn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||gn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function mn(t,e){ln.$on(t,e)}function xn(t,e){ln.$off(t,e)}function _n(t,e){var n=ln;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function bn(t,e,n){ln=t,de(e,n||{},mn,xn,_n,t),ln=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?C(n):n;for(var r=C(arguments,1),i='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Kt(n[a],e,r,e,i)}return e}}var Sn=null;function Tn(t){var e=Sn;return Sn=t,function(){Sn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,a=Tn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),a(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,r,i,a){var o=i.data.scopedSlots,s=t.$scopedSlots,c=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),l=!!(a||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=a,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Tt(!1);for(var u=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var p=h[f],d=t.$options.props;u[p]=Ut(p,d,e,t)}Tt(!0),t.$options.propsData=e}r=r||n;var g=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,g),l&&(t.$slots=Te(a,i.context),t.$forceUpdate())}function On(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,On(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Mn(t,"activated")}}function Cn(t,e){if((!e||(t._directInactive=!0,!On(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,a=n.length;i<a;i++)Kt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var $n=[],En=[],jn={},Rn=!1,Ln=!1,In=0;function Fn(){In=$n.length=En.length=0,jn={},Rn=Ln=!1}var zn=Date.now;if(J&&!Z){var Nn=window.performance;Nn&&"function"===typeof Nn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Nn.now()})}function qn(){var t,e;for(zn(),Ln=!0,$n.sort(function(t,e){return t.id-e.id}),In=0;In<$n.length;In++)t=$n[In],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=En.slice(),r=$n.slice();Fn(),Hn(n),Bn(r),at&&q.devtools&&at.emit("flush")}function Bn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function Wn(t){t._inactive=!1,En.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Un(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Ln){var n=$n.length-1;while(n>In&&$n[n].id>t.id)n--;$n.splice(n+1,0,t)}else $n.push(t);Rn||(Rn=!0,ce(qn))}}var Gn=0,Vn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=E)),this.value=this.lazy?void 0:this.get()};Vn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ei){if(!this.user)throw ei;Yt(ei,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),pt(),this.cleanupDeps()}return t},Vn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Vn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Vn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Un(this)},Vn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ei){Yt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Vn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Vn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Vn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:E,set:E};function Jn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Kn(t,e.props),e.methods&&ar(t,e.methods),e.data?Qn(t):Ot(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&or(t,e.watch)}function Kn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],a=!t.$parent;a||Tt(!1);var o=function(a){i.push(a);var o=Ut(a,e,n,t);Dt(r,a,o),a in t||Jn(t,"_props",a)};for(var s in e)o(s);Tt(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var a=n[i];0,r&&_(r,a)||W(a)||Jn(t,"_data",a)}Ot(e,!0)}function Zn(t,e){ft();try{return t.call(e,e)}catch(ei){return Yt(ei,e,"data()"),{}}finally{pt()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var a=e[i],o="function"===typeof a?a:a.get;0,r||(n[i]=new Vn(t,o||E,E,tr)),i in t||nr(t,i,a)}}function nr(t,e,n){var r=!it();"function"===typeof n?(Xn.get=r?rr(e):ir(n),Xn.set=E):(Xn.get=n.get?r&&!1!==n.cache?rr(e):ir(n.get):E,Xn.set=n.set||E),Object.defineProperty(t,e,Xn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?E:D(e[n],t)}function or(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)sr(t,n,r[i]);else sr(t,n,r)}}function sr(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ct,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(u(e))return sr(r,t,e,n);n=n||{},n.user=!0;var i=new Vn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(a){Yt(a,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var lr=0;function ur(t){t.prototype._init=function(t){var e=this;e._uid=lr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=Wt(fr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),cn(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Yn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fr(t){var e=t.options;if(t.super){var n=fr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=pr(t);i&&M(t.extendOptions,i),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function dr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=C(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function vr(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Wt(n.options,t),o["super"]=n,o.options.props&&mr(o),o.options.computed&&xr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,z.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=M({},o.options),i[r]=o,o}}function mr(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function xr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function _r(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var a in n){var o=n[a];if(o){var s=br(o.componentOptions);s&&!e(s)&&Tr(n,a,r,i)}}}function Tr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,m(n,e)}ur(dr),cr(dr),wn(dr),kn(dr),hn(dr);var Ar=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Tr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=vn(t),n=e&&e.componentOptions;if(n){var r=br(n),i=this,a=i.include,o=i.exclude;if(a&&(!r||!wr(a,r))||o&&r&&wr(o,r))return e;var s=this,c=s.cache,l=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,m(l,u),l.push(u)):(c[u]=e,l.push(u),this.max&&l.length>parseInt(this.max)&&Tr(c,l[0],l,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Pr={KeepAlive:kr};function Or(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:lt,extend:M,mergeOptions:Wt,defineReactive:Dt},t.set=Ct,t.delete=Mt,t.nextTick=ce,t.observable=function(t){return Ot(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,Pr),gr(t),vr(t),yr(t),_r(t)}Or(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Dr="[object Array]",Cr="[object Object]";function Mr(t,e){var n={};return $r(t,e),Er(t,e,"",n),n}function $r(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==Cr&&r==Cr){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var a=t[i];void 0===a?t[i]=null:$r(a,e[i])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){$r(t[n],e)})}}function Er(t,e,n,r){if(t!==e){var i=Rr(t),a=Rr(e);if(i==Cr)if(a!=Cr||Object.keys(t).length<Object.keys(e).length)jr(r,n,t);else{var o=function(i){var a=t[i],o=e[i],s=Rr(a),c=Rr(o);if(s!=Dr&&s!=Cr)a!=e[i]&&jr(r,(""==n?"":n+".")+i,a);else if(s==Dr)c!=Dr?jr(r,(""==n?"":n+".")+i,a):a.length<o.length?jr(r,(""==n?"":n+".")+i,a):a.forEach(function(t,e){Er(t,o[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Cr)if(c!=Cr||Object.keys(a).length<Object.keys(o).length)jr(r,(""==n?"":n+".")+i,a);else for(var l in a)Er(a[l],o[l],(""==n?"":n+".")+i+"."+l,r)};for(var s in t)o(s)}else i==Dr?a!=Dr?jr(r,n,t):t.length<e.length?jr(r,n,t):t.forEach(function(t,i){Er(t,e[i],n+"["+i+"]",r)}):jr(r,n,t)}}function jr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Lr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Ir(t){return $n.find(function(e){return t._watcher===e})}function Fr(t,e){if(!t.__next_tick_pending&&!Ir(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ei){Yt(ei,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function zr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Nr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=zr(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var a=Object.create(null);Object.keys(i).forEach(function(t){a[t]=r.data[t]});var o=Mr(i,a);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,r.setData(o,function(){n.__next_tick_pending=!1,Lr(n)})):Lr(this)}};function qr(){}function Br(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Vn(t,r,E,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function Wr(t,e){return i(t)||i(e)?Hr(t,Ur(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function Ur(t){return Array.isArray(t)?Gr(t):c(t)?Vr(t):"string"===typeof t?t:""}function Gr(t){for(var e,n="",r=0,a=t.length;r<a;r++)i(e=Ur(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Vr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Jr(t){return Array.isArray(t)?$(t):"string"===typeof t?Xr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Kr(t[r],n.slice(1).join("."))}function Qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:C(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Fr(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,i=n.$options[t],a=t+" hook";if(i)for(var o=0,s=i.length;o<s;o++)r=Kt(i[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Kr(e||this,t)},t.prototype.__get_class=function(t,e){return Wr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Jr(t),r=e?M(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,a,o;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(c(t)){for(a=Object.keys(t),n=Object.create(null),r=0,i=a.length;r<i;r++)o=a[r],n[o]=e(t[o],o,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ti(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=Nr,dr.prototype.$mount=function(t,e){return Br(this,t,e)},ti(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Te,e.createPage=Se,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return p(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function p(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===d.call(t)}function x(t,e){return g.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),T=["invoke","success","fail","complete","returnValue"],A={},k={};function P(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?O(n):n}function O(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function C(t,e){Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&v(e[n])&&(t[n]=P(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==T.indexOf(n)&&v(e[n])&&D(t[n],e[n])})}function $(t,e){"string"===typeof t&&m(e)?C(k[t]||(k[t]={}),e):m(t)&&C(A,t)}function E(t,e){"string"===typeof t?m(e)?M(k[t],e):delete k[t]:m(t)&&M(A,t)}function j(t){return function(e){return t(e)||e}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function L(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(j(i));else{var a=i(e);if(R(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){L(t[n],e).then(function(t){return v(r)&&r(t)||t})}}}),e}function F(t,e){var n=[];Array.isArray(A.returnValue)&&n.push.apply(n,u(A.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,u(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(A).forEach(function(t){"returnValue"!==t&&(e[t]=A[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function N(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];var o=z(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=L(o.invoke,n);return s.then(function(t){return e.apply(void 0,[I(o,t)].concat(i))})}return e.apply(void 0,[I(o,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var q={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},B=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,H=/^on/;function U(t){return W.test(t)}function G(t){return B.test(t)}function V(t){return H.test(t)}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(U(t)||G(t)||V(t))}function Y(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return v(n.success)||v(n.fail)||v(n.complete)?F(t,N.apply(void 0,[t,e,n].concat(i))):F(t,X(new Promise(function(r,a){N.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:a})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var K=1e-4,Q=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Q*(e||tt);return n<0&&(n=-n),n=Math.floor(n+K),0===n?1!==et&&Z?.5:1:t<0?-n:n}var it={promiseInterceptor:q},at=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:$,removeInterceptor:E}),ot={},st=[],ct=[],lt=["success","fail","cancel","complete"];function ut(t,e,n){return function(r){return e(ft(t,r,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var a=!0===i?e:{};for(var o in v(n)&&(n=n(e,a)||{}),e)if(x(n,o)){var s=n[o];v(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:m(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==lt.indexOf(o)?a[o]=ut(t,e[o],r):i||(a[o]=e[o]);return a}return v(e)&&(e=ut(t,e,r)),e}function ft(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(ot.returnValue)&&(e=ot.returnValue(t,e)),ht(t,e,n,{},r)}function pt(t,e){if(x(ot,t)){var n=ot[t];return n?function(e,r){var i=n;v(n)&&(i=n(e)),e=ht(t,e,i.args,i.returnValue);var a=[e];"undefined"!==typeof r&&a.push(r);var o=wx[i.name||t].apply(wx,a);return G(t)?ft(t,o,i.returnValue,U(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),gt=["subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(i),v(r)&&r(i)}}gt.forEach(function(t){dt[t]=vt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function xt(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:xt,$off:_t,$once:bt,$emit:wt});function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,a=t.hide,o=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return a.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o.apply(t,r)}}}function At(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Pt=Object.freeze({requireNativePlugin:kt,getSubNVueById:At}),Ot=Page,Dt=Component,Ct=/:/g,Mt=b(function(t){return S(t.replace(Ct,"-"))});function $t(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return e.apply(t,[Mt(n)].concat(i))}}}function Et(t,e){var n=e[t];e[t]=n?function(){$t(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){$t(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Et("onLoad",t),Ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Et("created",t),Dt(t)};var jt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){x(n,e)&&(t[e]=n[e])})}function Lt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Lt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Lt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ft(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Nt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||x(n,t)||(n[t]=r[t])}),n}var Bt=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&o.push(e({properties:Gt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){m(t)&&t.props&&o.push(e({properties:Gt(t.props,!0)}))}),o}function Ut(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Wt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var i=r["default"];v(i)&&(i=i()),r.type=Ut(e,r.type),n[e]={type:-1!==Bt.indexOf(r.type)?r.type:null,value:i,observer:Wt(e)}}else{var a=Ut(e,r);n[e]={type:-1!==Bt.indexOf(a)?a:null,observer:Wt(e)}}}),n}function Vt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},x(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var a=e[1],o=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===i}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],o&&(n=t.__get_value(o,n))}}),n}function Jt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Xt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Kt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(i&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||i?i&&!o?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Yt(t)):"string"===typeof t&&x(s,t)?c.push(s[t]):c.push(t)}),c}var Qt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Vt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,a=[];return r.forEach(function(n){var r=n[0],o=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var c=r.charAt(0)===Qt;r=c?r.slice(1):r,o&&te(i,r)&&o.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var o=i[r];if(!v(o))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(o.once)return;o.once=!0}a.push(o.apply(i,Kt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=l({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Rt(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return a.globalData=t.$options.globalData||{},It(a,ne),a}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=ae(n[i],e),r)return r}function oe(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function le(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),i.parent=e}function he(t){return re(t,{mocks:ie,initRefs:le})}var fe=["onUniNViewMessage"];function pe(t){var e=he(t);return It(e,fe),e}function de(t){return App(pe(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,o=Ft(r.default,t),s=a(o,2),c=s[0],l=s[1],u={options:{multipleSlots:!0,addGlobalClass:!0},data:qt(l,r.default.prototype),behaviors:Ht(l,oe),properties:Gt(l.props,!1,l.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(l.wxsCallMethods)&&l.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),n?u:[u,c]}function ve(t){return ge(t,{isPage:se,initRelation:ce})}function ye(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function xe(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function _e(t){return xe(t,{isPage:se,initRelation:ce})}me.push.apply(me,jt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return It(e.methods,be),e}function Se(t){return Component(we(t))}function Te(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),ct.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Ae={};Object.keys(at).forEach(function(t){Ae[t]=at[t]}),Object.keys(St).forEach(function(t){Ae[t]=St[t]}),Object.keys(Pt).forEach(function(t){Ae[t]=Y(t,Pt[t])}),Object.keys(wx).forEach(function(t){(x(wx,t)||x(ot,t))&&(Ae[t]=Y(t,pt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ae,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Te;var ke=Ae,Pe=ke;e.default=Pe}).call(this,n("c8ba"))},"7fc1":function(t,e,n){"use strict";function r(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}r.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var n=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:n}),e(n)},fail:function(n){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:n.errMsg||""})}})},r.prototype.getRegeo=function(t){function e(e){var r=n.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:n.key,location:e,extensions:"all",s:r.s,platform:r.platform,appname:n.key,sdkversion:r.sdkversion,logversion:r.logversion},method:"GET",header:{"content-type":"application/json"},success:function(n){var r,i,a,o,s,c,l,u,h;n.data.status&&"1"==n.data.status?(r=n.data.regeocode,i=r.addressComponent,a=[],o="",r&&r.roads[0]&&r.roads[0].name&&(o=r.roads[0].name+"附近"),s=e.split(",")[0],c=e.split(",")[1],r.pois&&r.pois[0]&&(o=r.pois[0].name+"附近",l=r.pois[0].location,l&&(s=parseFloat(l.split(",")[0]),c=parseFloat(l.split(",")[1]))),i.provice&&a.push(i.provice),i.city&&a.push(i.city),i.district&&a.push(i.district),i.streetNumber&&i.streetNumber.street&&i.streetNumber.number?(a.push(i.streetNumber.street),a.push(i.streetNumber.number)):(u="",r&&r.roads[0]&&r.roads[0].name&&(u=r.roads[0].name),a.push(u)),a=a.join(""),h=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:a,desc:o,longitude:s,latitude:c,id:0,regeocodeData:r}],t.success(h)):t.fail({errCode:n.data.infocode,errMsg:n.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var n=this;t.location?e(t.location):n.getWxLocation(t,function(t){e(t)})},r.prototype.getWeather=function(t){function e(e){var n="base";t.type&&"forecast"==t.type&&(n="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:r.key,city:e,extensions:n,s:i.s,platform:i.platform,appname:r.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function n(t){var e={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return e}var r,i;e.data.status&&"1"==e.data.status?e.data.lives?(r=e.data.lives,r&&r.length>0&&(r=r[0],i=n(r),i["liveData"]=r,t.success(i))):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function n(n){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:r.key,location:n,extensions:"all",s:i.s,platform:i.platform,appname:r.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(n){var r,i;n.data.status&&"1"==n.data.status?(i=n.data.regeocode,i.addressComponent?r=i.addressComponent.adcode:i.aois&&i.aois.length>0&&(r=i.aois[0].adcode),e(r)):t.fail({errCode:n.data.infocode,errMsg:n.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var r=this,i=r.requestConfig;t.city?e(t.city):r.getWxLocation(t,function(t){n(t)})},r.prototype.getPoiAround=function(t){function e(e){var i={key:n.key,location:e,s:r.s,platform:r.platform,appname:n.key,sdkversion:r.sdkversion,logversion:r.logversion};t.querytypes&&(i["types"]=t.querytypes),t.querykeywords&&(i["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:i,method:"GET",header:{"content-type":"application/json"},success:function(e){var n,r,i,a;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(n=[],r=0;r<e.pois.length;r++)i=0==r?t.iconPathSelected:t.iconPath,n.push({latitude:parseFloat(e.pois[r].location.split(",")[1]),longitude:parseFloat(e.pois[r].location.split(",")[0]),iconPath:i,width:22,height:32,id:r,name:e.pois[r].name,address:e.pois[r].address});a={markers:n,poisData:e.pois},t.success(a)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var n=this,r=n.requestConfig;t.location?e(t.location):n.getWxLocation(t,function(t){e(t)})},r.prototype.getStaticmap=function(t){function e(e){i.push("location="+e),t.zoom&&i.push("zoom="+t.zoom),t.size&&i.push("size="+t.size),t.scale&&i.push("scale="+t.scale),t.markers&&i.push("markers="+t.markers),t.labels&&i.push("labels="+t.labels),t.paths&&i.push("paths="+t.paths),t.traffic&&i.push("traffic="+t.traffic);var n=a+i.join("&");t.success({url:n})}var n,r=this,i=[],a="https://restapi.amap.com/v3/staticmap?";i.push("key="+r.key),n=r.requestConfig,i.push("s="+n.s),i.push("platform="+n.platform),i.push("appname="+n.appname),i.push("sdkversion="+n.sdkversion),i.push("logversion="+n.logversion),t.location?e(t.location):r.getWxLocation(t,function(t){e(t)})},r.prototype.getInputtips=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.location&&(r["location"]=t.location),t.keywords&&(r["keywords"]=t.keywords),t.type&&(r["type"]=t.type),t.city&&(r["city"]=t.city),t.citylimit&&(r["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getDrivingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),t.strategy&&(r["strategy"]=t.strategy),t.waypoints&&(r["waypoints"]=t.waypoints),t.avoidpolygons&&(r["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(r["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getWalkingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getTransitRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),t.strategy&&(r["strategy"]=t.strategy),t.city&&(r["city"]=t.city),t.cityd&&(r["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var n=e.data.route;t.success({distance:n.distance||"",taxi_cost:n.taxi_cost||"",transits:n.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},r.prototype.getRidingRoute=function(t){var e=this,n=e.requestConfig,r={key:e.key,s:n.s,platform:n.platform,appname:e.key,sdkversion:n.sdkversion,logversion:n.logversion};t.origin&&(r["origin"]=t.origin),t.destination&&(r["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:r,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"86dc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timeAgo=a,e.numberFormatter=o,e.toThousandFilter=s,e.uppercaseFirst=c,Object.defineProperty(e,"parseTime",{enumerable:!0,get:function(){return r.parseTime}}),Object.defineProperty(e,"formatTime",{enumerable:!0,get:function(){return r.formatTime}});var r=n("a627");function i(t,e){return 1===t?t+e:t+e+"s"}function a(t){var e=Date.now()/1e3-Number(t);return e<3600?i(~~(e/60)," minute"):e<86400?i(~~(e/3600)," hour"):i(~~(e/86400)," day")}function o(t,e){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],r=0;r<n.length;r++)if(t>=n[r].value)return(t/n[r].value+.1).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[r].symbol;return t.toString()}function s(t){return(+t||0).toString().replace(/^-?\d+/g,function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")})}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",d=1800,g=300,v=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function x(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,m)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),r={},i="";for(var a in n)r[n[a]]=t[n[a]],i+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},T=function(){var e="";return"wx"!==S()&&"qq"!==S()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===S()?plus.runtime.version:""},k=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},P=function(e){var n=S(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},O="First__Visit__Time",D="Last__Visit__Time",C=function(){var e=t.getStorageSync(O),n=0;return e?n=e:(n=w(),t.setStorageSync(O,n),t.removeStorageSync(D)),n},M=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,w()),n},$="__page__residence__time",E=0,j=0,R=function(){return E=w(),"n"===S()&&t.setStorageSync($,w()),E},L=function(){return j=w(),"n"===S()&&(E=t.getStorageSync($)),j-E},I="Total__Visit__Count",F=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},N=0,q=0,B=function(){var t=(new Date).getTime();return N=t,q=0,t},W=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==N&&(e=q-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},U=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,i=t._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===S()?r.$mp&&r.$mp.page.is+a:r.$scope&&r.$scope.route+a||r.$mp&&r.$mp.page.route+a},V=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("0f52").default,Y=n("b619").default||n("b619"),K=t.getSystemInfoSync(),Q=function(){function e(){c(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:S(),mpn:T(),ak:Y.appid,usv:h,v:A(),ch:k(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){W();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,W();var n=H();B();var r=G(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=U();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=t);W(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){W();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=P(t.scene),this.statData.fvts=C(),this.statData.lvts=M(),this.statData.tvc=F(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,i=void 0===r?"":r,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,i=w(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===S()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",o),!(L()<v)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),R();var c=[],l=[],u=[],f=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?c.push(n):3===t?u.push(n):l.push(n)})};for(var p in s)f(p);c.push.apply(c,l.concat(u));var d={usv:h,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(z(t)).options;e.src=p+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return c(this,n),e=r(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,R(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,V(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,V(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},9357:function(t,e,n){"use strict";(function(t){function n(e,n){if(0===arguments.length)return null;var r,i=n||"{y}-{m}-{d} {H}:{i}:{s}";if("object"===typeof e)r=e;else{if("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),"string"===typeof e&&"ios"===t.getSystemInfoSync().platform){var a,o=e.split(/[^0-9]/);a=o.length>3?new Date(o[0],o[1]-1,o[2],o[3],o[4],o[5]):new Date(o[0],o[1]-1,o[2]),e=a.getTime(),8===o.length&&"0000"===o[7]&&(e+=288e5)}r=new Date(e)}var s={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate()+1,h:r.getHours(),H:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),e:r.getDay(),a:r.getHours()},c=i.replace(/{(y|m|d|h|H|i|s|e|a)+}/g,function(t,e){var n=s[e];return"e"===e?["日","一","二","三","四","五","六"][n]:"a"===e?n>12?"下午":"上午":("h"===e&&n>12&&(n-=12),t.length>0&&n<10&&(n="0"+n),n||0)});return c}function r(e){if("ios"===t.getSystemInfoSync().platform){var n,r=e.split(/[^0-9]/);n=r.length>3?new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5]):new Date(r[0],r[1]-1,r[2]);var i=n.getTime();return 8===r.length&&"0000"===r[7]&&(i+=288e5),new Date(i)}return new Date(e)}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),r=Date.now(),i=(r-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":e?parseTime(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function a(t){t=null==t?window.location.href:t;var e=t.substring(t.lastIndexOf("?")+1),n={},r=/([^?&=]+)=([^?&=]*)/g;return e.replace(r,function(t,e,r){var i=decodeURIComponent(e),a=decodeURIComponent(r);return a=String(a),n[i]=a,t}),n}function o(t){for(var e=t.length,n=t.length-1;n>=0;n--){var r=t.charCodeAt(n);r>127&&r<=2047?e++:r>2047&&r<=65535&&(e+=2),r>=56320&&r<=57343&&n--}return e}function s(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function c(t){return t?s(Object.keys(t).map(function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"):""}function l(t){var e=t.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function u(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}function h(t,e){return"object"!==typeof t&&(t={}),Array.isArray(e)?e.slice():(Object.keys(e).forEach(function(n){var r=e[n];t[n]="object"===typeof r?h(t[n],r):r}),t)}function f(t,e){if(t&&e){var n=t.className,r=n.indexOf(e);-1===r?n+=""+e:n=n.substr(0,r)+n.substr(r+e.length),t.className=n}}function p(t){return"start"===t?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function d(t,e,n){var r,i,a,o,s,c=function c(){var l=+new Date-o;l<e&&l>0?r=setTimeout(c,e-l):(r=null,n||(s=t.apply(a,i),r||(a=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];a=this,o=+new Date;var h=n&&!r;return r||(r=setTimeout(c,e)),h&&(s=t.apply(a,l),a=l=null),s}}function g(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return Object.keys(t).forEach(function(n){t[n]&&"object"===typeof t[n]?e[n]=g(t[n]):e[n]=t[n]}),e}function v(t){return Array.from(new Set(t))}function y(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function m(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function x(t,e){m(t,e)||(t.className+=" "+e)}function _(t,e){if(m(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime1=n,e.parseJavaTime=r,e.formatTime=i,e.getQueryObject=a,e.byteLength=o,e.cleanArray=s,e.param=c,e.param2Obj=l,e.html2Text=u,e.objectMerge=h,e.toggleClass=f,e.getTime=p,e.debounce=d,e.deepClone=g,e.uniqueArr=v,e.createUniqueString=y,e.hasClass=m,e.addClass=x,e.removeClass=_}).call(this,n("6e42")["default"])},"935e":function(t,e,n){"use strict";!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){e.pinyin_dict_notone={a:"阿啊呵腌嗄吖锕",e:"额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",ai:"爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",ei:"诶",xi:"系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",yi:"一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",an:"安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",han:"厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",ang:"昂仰盎肮",ao:"奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",wa:"瓦挖娃洼袜蛙凹哇佤娲呙腽",yu:"于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",niu:"牛纽扭钮拗妞忸狃",o:"哦噢喔",ba:"把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",pa:"怕帕爬扒趴琶啪葩耙杷钯筢",pi:"被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",bi:"比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",bai:"百白败摆伯拜柏佰掰呗擘捭稗",bo:"波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",bei:"北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",ban:"办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",pan:"判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",bin:"份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",bang:"帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",pang:"旁庞乓磅螃彷滂逄耪",beng:"泵崩蚌蹦迸绷甭嘣甏堋",bao:"报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",bu:"不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",pu:"普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",mian:"面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",po:"破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",fan:"反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",fu:"府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",ben:"本体奔苯笨夯贲锛畚坌",feng:"风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",bian:"变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",pian:"便片篇偏骗翩扁骈胼蹁谝犏缏",zhen:"镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",biao:"表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",piao:"票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",huo:"和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",bie:"别鳖憋瘪蹩",min:"民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",fen:"分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",bing:"并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",geng:"更耕颈庚耿梗埂羹哽赓绠鲠",fang:"方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",xian:"现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",fou:"不否缶",ca:"拆擦嚓礤",cha:"查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",cai:"才采财材菜彩裁蔡猜踩睬",can:"参残餐灿惨蚕掺璨惭粲孱骖黪",shen:"信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",cen:"参岑涔",san:"三参散伞叁糁馓毵",cang:"藏仓苍沧舱臧伧",zang:"藏脏葬赃臧奘驵",chen:"称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",cao:"草操曹槽糙嘈漕螬艚屮",ce:"策测册侧厕栅恻",ze:"责则泽择侧咋啧仄箦赜笮舴昃迮帻",zhai:"债择齐宅寨侧摘窄斋祭翟砦瘵哜",dao:"到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",ceng:"层曾蹭噌",zha:"查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",chai:"差拆柴钗豺侪虿瘥",ci:"次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",zi:"资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",cuo:"措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",chan:"产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",shan:"山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",zhan:"展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",xin:"新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",lian:"联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",chang:"场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",zhang:"长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",chao:"超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",zhao:"着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",zhou:"调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",che:"车彻撤尺扯澈掣坼砗屮",ju:"车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",cheng:"成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",rong:"容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",sheng:"生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",deng:"等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",zhi:"制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",zheng:"政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",tang:"堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",chi:"持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",shi:"是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",qi:"企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",chuai:"揣踹啜搋膪",tuo:"托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",duo:"多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",xue:"学血雪削薛穴靴谑噱鳕踅泶彐",chong:"重种充冲涌崇虫宠忡憧舂茺铳艟",chou:"筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",qiu:"求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",xiu:"修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",chu:"出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",tuan:"团揣湍疃抟彖",zhui:"追坠缀揣椎锥赘惴隹骓缒",chuan:"传川船穿串喘椽舛钏遄氚巛舡",zhuan:"专转传赚砖撰篆馔啭颛",yuan:"元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",cuan:"窜攒篡蹿撺爨汆镩",chuang:"创床窗闯幢疮怆",zhuang:"装状庄壮撞妆幢桩奘僮戆",chui:"吹垂锤炊椎陲槌捶棰",chun:"春纯醇淳唇椿蠢鹑朐莼肫蝽",zhun:"准屯淳谆肫窀",cu:"促趋趣粗簇醋卒蹴猝蹙蔟殂徂",dun:"吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",qu:"区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",xu:"需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",chuo:"辍绰戳淖啜龊踔辶",zu:"组族足祖租阻卒俎诅镞菹",ji:"济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",cong:"从丛匆聪葱囱琮淙枞骢苁璁",zong:"总从综宗纵踪棕粽鬃偬枞腙",cou:"凑辏腠楱",cui:"衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",wei:"为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",cun:"村存寸忖皴",zuo:"作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",zuan:"钻纂攥缵躜",da:"大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",dai:"大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",tai:"大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",ta:"他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",dan:"但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",lu:"路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",tan:"谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",ren:"人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",jie:"家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",yan:"研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",dang:"当党档荡挡宕砀铛裆凼菪谠",tao:"套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",tiao:"条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",te:"特忑忒铽慝",de:"的地得德底锝",dei:"得",di:"的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",ti:"体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",tui:"推退弟腿褪颓蜕忒煺",you:"有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",dian:"电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",tian:"天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",zhu:"主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",nian:"年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",diao:"调掉雕吊钓刁貂凋碉鲷叼铫铞",yao:"要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",die:"跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",she:"设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",ye:"业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",xie:"些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",zhe:"这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",ding:"定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",diu:"丢铥",ting:"听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",dong:"动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",tong:"同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",zhong:"中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",dou:"都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",du:"度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",duan:"断段短端锻缎煅椴簖",dui:"对队追敦兑堆碓镦怼憝",rui:"瑞兑锐睿芮蕊蕤蚋枘",yue:"月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",tun:"吞屯囤褪豚臀饨暾氽",hui:"会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",wu:"务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",ya:"亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",he:"和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",wo:"我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",en:"恩摁蒽",n:"嗯唔",er:"而二尔儿耳迩饵洱贰铒珥佴鸸鲕",fa:"发法罚乏伐阀筏砝垡珐",quan:"全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",fei:"费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",pei:"配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",ping:"平评凭瓶冯屏萍苹乒坪枰娉俜鲆",fo:"佛",hu:"和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",ga:"夹咖嘎尬噶旮伽尕钆尜",ge:"个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",ha:"哈蛤铪",xia:"下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",gai:"改该盖概溉钙丐芥赅垓陔戤",hai:"海还害孩亥咳骸骇氦嗨胲醢",gan:"干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",gang:"港钢刚岗纲冈杠缸扛肛罡戆筻",jiang:"将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",hang:"行航杭巷夯吭桁沆绗颃",gong:"工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",hong:"红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",guang:"广光逛潢犷胱咣桄",qiong:"穷琼穹邛茕筇跫蛩銎",gao:"高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",hao:"好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",li:"理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",jia:"家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",luo:"落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",ke:"可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",qia:"卡恰洽掐髂袷咭葜",gei:"给",gen:"根跟亘艮哏茛",hen:"很狠恨痕哏",gou:"构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",kou:"口扣寇叩抠佝蔻芤眍筘",gu:"股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",pai:"牌排派拍迫徘湃俳哌蒎",gua:"括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",tou:"投头透偷愉骰亠",guai:"怪拐乖",kuai:"会快块筷脍蒯侩浍郐蒉狯哙",guan:"关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",wan:"万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",ne:"呢哪呐讷疒",gui:"规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",jun:"军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",jiong:"窘炯迥炅冂扃",jue:"决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",gun:"滚棍辊衮磙鲧绲丨",hun:"婚混魂浑昏棍珲荤馄诨溷阍",guo:"国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",hei:"黑嘿嗨",kan:"看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",heng:"衡横恒亨哼珩桁蘅",mo:"万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",peng:"鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",hou:"后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",hua:"化华划话花画滑哗豁骅桦猾铧砉",huai:"怀坏淮徊槐踝",huan:"还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",xun:"讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",huang:"黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",nai:"能乃奶耐奈鼐萘氖柰佴艿",luan:"乱卵滦峦鸾栾銮挛孪脔娈",qie:"切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",jian:"建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",nan:"南难男楠喃囡赧腩囝蝻",qian:"前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",qiang:"强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",xiang:"向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",jiao:"教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",zhuo:"着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",qiao:"桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",xiao:"小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",si:"司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",kai:"开凯慨岂楷恺揩锴铠忾垲剀锎蒈",jin:"进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",qin:"亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",jing:"经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",ying:"应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",jiu:"就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",zui:"最罪嘴醉咀蕞觜",juan:"卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",suan:"算酸蒜狻",yun:"员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",qun:"群裙逡麇",ka:"卡喀咖咔咯佧胩",kang:"康抗扛慷炕亢糠伉钪闶",keng:"坑铿吭",kao:"考靠烤拷铐栲尻犒",ken:"肯垦恳啃龈裉",yin:"因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",kong:"空控孔恐倥崆箜",ku:"苦库哭酷裤枯窟挎骷堀绔刳喾",kua:"跨夸垮挎胯侉",kui:"亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",kuan:"款宽髋",kuang:"况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",que:"确却缺雀鹊阙瘸榷炔阕悫",kun:"困昆坤捆琨锟鲲醌髡悃阃",kuo:"扩括阔廓蛞",la:"拉落垃腊啦辣蜡喇剌旯砬邋瘌",lai:"来莱赖睐徕籁涞赉濑癞崃疠铼",lan:"兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",lin:"林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",lang:"浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",liang:"量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",lao:"老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",mu:"目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",le:"了乐勒肋叻鳓嘞仂泐",lei:"类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",sui:"随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",lie:"列烈劣裂猎冽咧趔洌鬣埒捩躐",leng:"冷愣棱楞塄",ling:"领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",lia:"俩",liao:"了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",liu:"流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",lun:"论轮伦仑纶沦抡囵",lv:"率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",lou:"楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",mao:"贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",long:"龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",nong:"农浓弄脓侬哝",shuang:"双爽霜孀泷",shu:"术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",shuai:"率衰帅摔甩蟀",lve:"略掠锊",ma:"么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",me:"么麽",mai:"买卖麦迈脉埋霾荬劢",man:"满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",mi:"米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",men:"们门闷瞒汶扪焖懑鞔钔",mang:"忙盲茫芒氓莽蟒邙硭漭",meng:"蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",miao:"苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",mou:"某谋牟缪眸哞鍪蛑侔厶",miu:"缪谬",mei:"美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",wen:"文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",mie:"灭蔑篾乜咩蠛",ming:"明名命鸣铭冥茗溟酩瞑螟暝",na:"内南那纳拿哪娜钠呐捺衲镎肭",nei:"内那哪馁",nuo:"难诺挪娜糯懦傩喏搦锘",ruo:"若弱偌箬",nang:"囊馕囔曩攮",nao:"脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",ni:"你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",nen:"嫩恁",neng:"能",nin:"您恁",niao:"鸟尿溺袅脲茑嬲",nie:"摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",niang:"娘酿",ning:"宁凝拧泞柠咛狞佞聍甯",nu:"努怒奴弩驽帑孥胬",nv:"女钕衄恧",ru:"入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",nuan:"暖",nve:"虐疟",re:"热若惹喏",ou:"区欧偶殴呕禺藕讴鸥瓯沤耦怄",pao:"跑炮泡抛刨袍咆疱庖狍匏脬",pou:"剖掊裒",pen:"喷盆湓",pie:"瞥撇苤氕丿",pin:"品贫聘频拼拚颦姘嫔榀牝",se:"色塞瑟涩啬穑铯槭",qing:"情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",zan:"赞暂攒堑昝簪糌瓒錾趱拶",shao:"少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",sao:"扫骚嫂梢缫搔瘙臊埽缲鳋",sha:"沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",xuan:"县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",ran:"然染燃冉苒髯蚺",rang:"让壤攘嚷瓤穰禳",rao:"绕扰饶娆桡荛",reng:"仍扔",ri:"日",rou:"肉柔揉糅鞣蹂",ruan:"软阮朊",run:"润闰",sa:"萨洒撒飒卅仨脎",suo:"所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",sai:"思赛塞腮噻鳃",shui:"说水税谁睡氵",sang:"桑丧嗓搡颡磉",sen:"森",seng:"僧",shai:"筛晒",shang:"上商尚伤赏汤裳墒晌垧觞殇熵绱",xing:"行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",shou:"收手受首售授守寿瘦兽狩绶艏扌",shuo:"说数硕烁朔铄妁槊蒴搠",su:"速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",shua:"刷耍唰",shuan:"栓拴涮闩",shun:"顺瞬舜吮",song:"送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",sou:"艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",sun:"损孙笋荪榫隼狲飧",teng:"腾疼藤滕誊",tie:"铁贴帖餮萜",tu:"土突图途徒涂吐屠兔秃凸荼钍菟堍酴",wai:"外歪崴",wang:"王望往网忘亡旺汪枉妄惘罔辋魍",weng:"翁嗡瓮蓊蕹",zhua:"抓挝爪",yang:"样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",xiong:"雄兄熊胸凶匈汹芎",yo:"哟唷",yong:"用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",za:"杂扎咱砸咋匝咂拶",zai:"在再灾载栽仔宰哉崽甾",zao:"造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",zei:"贼",zen:"怎谮",zeng:"增曾综赠憎锃甑罾缯",zhei:"这",zou:"走邹奏揍诹驺陬楱鄹鲰",zhuai:"转拽",zun:"尊遵鳟樽撙",dia:"嗲",nou:"耨"},e.allPinyin=["a","ai","an","ang","ao","ba","bao","bai","ban","bang","bei","ben","beng","bi","bian","biao","bie","bin","bing","bo","bu","ca","cai","can","cang","cao","ce","cen","ceng","cha","chai","chan","chang","chao","che","chen","cheng","chong","chou","chi","chu","chua","chuai","chuan","chuang","chui","chun","chuo","ci","cong","cou","cu","cuan","cui","cun","cuo","da","dai","dan","dang","dao","de","dei","den","deng","di","dian","diao","die","ding","diu","dong","dou","du","duan","dui","dun","duo","e","ei","en","eng","er","fa","fan","fang","fei","fen","feng","fo","fou","fu","ga","gai","gan","gang","gao","ge","gei","gen","geng","gong","gou","gu","gua","guai","guan","guang","gui","gun","guo","ha","hai","han","hang","hao","he","hei","hen","heng","hong","hou","hu","hua","huai","huan","huang","hui","hun","huo","ji","jia","jian","jiang","jiao","jie","jin","jing","jiong","jiu","ju","juan","jue","jun","ka","kai","kan","kang","kao","ke","ken","keng","kong","kou","ku","kua","kuai","kuan","kuang","kui","kun","kuo","la","lai","lan","lang","lao","le","lei","leng","li","lia","lian","liang","liao","lie","lin","ling","liu","long","lou","lu","lv","luan","lve","lun","luo","ma","mai","man","mang","mao","me","mei","men","meng","mi","mian","miao","mie","min","ming","miu","mo","mou","mu","na","nai","nan","nang","nao","ne","nei","nen","neng","ni","nian","niang","niao","nie","nin","ning","niu","nong","nou","nu","nv","nuan","nve","nuaio","o","ou","pa","pai","pan","pang","pao","pei","pen","peng","pi","pian","piao","pie","pin","ping","po","pou","pu","qi","qia","qian","qiang","qiao","qie","qin","qing","qiong","qiu","qu","quan","que","qun","ran","rang","rao","re","ren","reng","ri","rong","rou","ru","ruan","rui","run","ruo","sa","sai","san","sang","sao","se","sen","seng","sha","shai","shan","shang","shao","she","shei","shen","sheng","shou","shi","shu","shua","shuai","shuan","shuang","shui","shun","shuo","si","song","sou","su","suan","sui","sun","suo","ta","tai","tan","tang","tao","te","teng","ti","tian","tiao","tie","ting","tong","tou","tu","tuan","tui","tun","tuo","wa","wai","wan","wang","wei","wen","weng","wo","wu","xi","xia","xian","xiang","xiao","xie","xin","xing","xiong","xiu","xu","xuan","xue","xun","ya","yan","yang","yao","ye","yi","yin","ying","yong","you","yu","yuan","yue","yun","za","zai","zan","zang","zao","ze","zei","zen","zeng","zha","zhai","zhan","zhang","zhao","zhe","zhei","zhen","zheng","zhong","zhou","zhi","zhu","zhua","zhuai","zhuan","zhuang","zhui","zhun","zhuo","zi","zong","zou","zu","zuan","zui","zun","zuo"]},function(t,e,n){var r=n(0).pinyin_dict_notone,i=n(0).allPinyin,a=function(){var t={};for(var e in r)for(var n=r[e],i=0,a=n.length;i<a;i++)t[n[i]]?t[n[i]]=t[n[i]]+" "+e:t[n[i]]=e;return t}(),o={};function s(t){for(var e=[],n=(t.length,[]),r=0;r<=t.length;r++)n.push(!0);return function t(e,n,r,a,o){if(e!==n.length)for(var s=function(s){var c=n.substring(e,s+1),l=!1;if(i.some(function(t){return 0===t.indexOf(c)})&&!n[s+1]&&o[s+1]){if(1===c.length)r.push(c);else{var u=[];i.forEach(function(t){0===t.indexOf(c)&&u.push(t)}),r.push(u)}l=!0}else-1!==i.indexOf(c)&&o[s+1]&&(r.push(c),l=!0);if(l){var h=a.length;t(s+1,n,r,a,o),a.length===h&&(o[s+1]=!1),r.pop()}},c=e;c<n.length;c++)s(c);else a.push(r.join(" "))}(0,t,[],e,n),e}function c(t){var e=[];return s(t).forEach(function(t){var n=t.split(" "),r=n.length-1;n[r].indexOf(",")?n[r].split(",").forEach(function(t){n.splice(r,1,t),e.push(JSON.parse(JSON.stringify(n)))}):e.push(n)}),0!==e.length&&e[0].length===t.length||e.push(t.split("")),o=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},t,e),e}function l(t,e,n,r){if(!t)return!1;var i=t.split(" ");return i.forEach(function(t){t.length>0&&r&&i.push(t.charAt(0))}),n?i.some(function(t){return 0===t.indexOf(e)}):-1!==i.indexOf(e)}function u(t,e,n){for(var r=t.length,i=0;i<e.length;i++){var a=e[i],o=a.length,s=o===n.length;if(o<=r)for(var c=0;r-c>=o;){for(var u=!0,h=0,f=0,p=0;p<a.length;p+=1)if(0===p&&" "===t[c+p+h])h+=1,p-=1;else if(" "===t[c+p+f])f+=1,p-=1;else if(!l(t[c+p+f],a[p],!t[c+p+1]||!a[p+1],s)){c+=1,u=!1;break}if(u)return[c+h,c+f+p-1]}}return!1}var h={match:function(t,e){t=t.toLowerCase(),e=e.replace(/\s+/g,"").toLowerCase();var n=t.indexOf(e);if(-1!==n)return[n,n+e.length-1];var r=u(t.split(""),[e.split("")],e);return r||u(function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t.charAt(n);e.push(a[i]||i)}return e}(t),o[e]||c(e),e)}};t.exports=h}])})},9673:function(t,e,n){"use strict";(function(t){function n(e,n){if(0===arguments.length)return null;var r,i=n||"{y}-{m}-{d} {H}:{i}:{s}";if("object"===typeof e)r=e;else{if("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),"string"===typeof e&&"ios"===t.getSystemInfoSync().platform){var a,o=e.split(/[^0-9]/);a=o.length>3?new Date(o[0],o[1]-1,o[2],o[3],o[4],o[5]):new Date(o[0],o[1]-1,o[2]),e=a.getTime(),8===o.length&&"0000"===o[7]&&(e+=288e5)}r=new Date(e)}var s={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate()-1,h:r.getHours(),H:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),e:r.getDay(),a:r.getHours()},c=i.replace(/{(y|m|d|h|H|i|s|e|a)+}/g,function(t,e){var n=s[e];return"e"===e?["日","一","二","三","四","五","六"][n]:"a"===e?n>12?"下午":"上午":("h"===e&&n>12&&(n-=12),t.length>0&&n<10&&(n="0"+n),n||0)});return c}function r(e){if("ios"===t.getSystemInfoSync().platform){var n,r=e.split(/[^0-9]/);n=r.length>3?new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5]):new Date(r[0],r[1]-1,r[2]);var i=n.getTime();return 8===r.length&&"0000"===r[7]&&(i+=288e5),new Date(i)}return new Date(e)}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var r=new Date(t),i=Date.now(),a=(i-r)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":e?n(t,e):r.getMonth()+1+"月"+r.getDate()+"日"+r.getHours()+"时"+r.getMinutes()+"分"}function a(t){t=null==t?window.location.href:t;var e=t.substring(t.lastIndexOf("?")+1),n={},r=/([^?&=]+)=([^?&=]*)/g;return e.replace(r,function(t,e,r){var i=decodeURIComponent(e),a=decodeURIComponent(r);return a=String(a),n[i]=a,t}),n}function o(t){for(var e=t.length,n=t.length-1;n>=0;n--){var r=t.charCodeAt(n);r>127&&r<=2047?e++:r>2047&&r<=65535&&(e+=2),r>=56320&&r<=57343&&n--}return e}function s(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function c(t){return t?s(Object.keys(t).map(function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"):""}function l(t){var e=t.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function u(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}function h(t,e){return"object"!==typeof t&&(t={}),Array.isArray(e)?e.slice():(Object.keys(e).forEach(function(n){var r=e[n];t[n]="object"===typeof r?h(t[n],r):r}),t)}function f(t,e){if(t&&e){var n=t.className,r=n.indexOf(e);-1===r?n+=""+e:n=n.substr(0,r)+n.substr(r+e.length),t.className=n}}function p(t){return"start"===t?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function d(t,e,n){var r,i,a,o,s,c=function c(){var l=+new Date-o;l<e&&l>0?r=setTimeout(c,e-l):(r=null,n||(s=t.apply(a,i),r||(a=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];a=this,o=+new Date;var h=n&&!r;return r||(r=setTimeout(c,e)),h&&(s=t.apply(a,l),a=l=null),s}}function g(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return Object.keys(t).forEach(function(n){t[n]&&"object"===typeof t[n]?e[n]=g(t[n]):e[n]=t[n]}),e}function v(t){return Array.from(new Set(t))}function y(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function m(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function x(t,e){m(t,e)||(t.className+=" "+e)}function _(t,e){if(m(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=n,e.parseJavaTime=r,e.formatTime=i,e.getQueryObject=a,e.byteLength=o,e.cleanArray=s,e.param=c,e.param2Obj=l,e.html2Text=u,e.objectMerge=h,e.toggleClass=f,e.getTime=p,e.debounce=d,e.deepClone=g,e.uniqueArr=v,e.createUniqueString=y,e.hasClass=m,e.addClass=x,e.removeClass=_}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=_;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={},v={};v[o]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y($([])));m&&m!==r&&i.call(m,o)&&(v=m);var x=T.prototype=w.prototype=Object.create(v);S.prototype=x.constructor=T,T.constructor=S,T[c]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},A(k.prototype),k.prototype[s]=function(){return this},u.AsyncIterator=k,u.async=function(t,e,n,r){var i=new k(_(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},A(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=$,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function _(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),o=new M(r||[]);return a._invoke=P(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function S(){}function T(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,a,o){var s=b(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},function(t){return e("throw",t,a,o)})}o(s.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function P(t,e,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return E()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=O(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},a627:function(t,e,n){"use strict";(function(t){function n(e,n){if(0===arguments.length)return null;var r,i=n||"{y}-{m}-{d} {H}:{i}:{s}";if("object"===typeof e)r=e;else{if("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),"string"===typeof e&&"ios"===t.getSystemInfoSync().platform){var a,o=e.split(/[^0-9]/);a=o.length>3?new Date(o[0],o[1]-1,o[2],o[3],o[4],o[5]):new Date(o[0],o[1]-1,o[2]),e=a.getTime(),8===o.length&&"0000"===o[7]&&(e+=288e5)}r=new Date(e)}var s={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),H:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),e:r.getDay(),a:r.getHours()},c=i.replace(/{(y|m|d|h|H|i|s|e|a)+}/g,function(t,e){var n=s[e];return"e"===e?["日","一","二","三","四","五","六"][n]:"a"===e?n>12?"下午":"上午":("h"===e&&n>12&&(n-=12),t.length>0&&n<10&&(n="0"+n),n||0)});return c}function r(e){if("ios"===t.getSystemInfoSync().platform){var n,r=e.split(/[^0-9]/);n=r.length>3?new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5]):new Date(r[0],r[1]-1,r[2]);var i=n.getTime();return 8===r.length&&"0000"===r[7]&&(i+=288e5),new Date(i)}return new Date(e)}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var r=new Date(t),i=Date.now(),a=(i-r)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":e?n(t,e):r.getMonth()+1+"月"+r.getDate()+"日"+r.getHours()+"时"+r.getMinutes()+"分"}function a(t){t=null==t?window.location.href:t;var e=t.substring(t.lastIndexOf("?")+1),n={},r=/([^?&=]+)=([^?&=]*)/g;return e.replace(r,function(t,e,r){var i=decodeURIComponent(e),a=decodeURIComponent(r);return a=String(a),n[i]=a,t}),n}function o(t){for(var e=t.length,n=t.length-1;n>=0;n--){var r=t.charCodeAt(n);r>127&&r<=2047?e++:r>2047&&r<=65535&&(e+=2),r>=56320&&r<=57343&&n--}return e}function s(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function c(t){return t?s(Object.keys(t).map(function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"):""}function l(t){var e=t.split("?")[1];return e?JSON.parse('{"'+decodeURIComponent(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function u(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}function h(t,e){return"object"!==typeof t&&(t={}),Array.isArray(e)?e.slice():(Object.keys(e).forEach(function(n){var r=e[n];t[n]="object"===typeof r?h(t[n],r):r}),t)}function f(t,e){if(t&&e){var n=t.className,r=n.indexOf(e);-1===r?n+=""+e:n=n.substr(0,r)+n.substr(r+e.length),t.className=n}}function p(t){return"start"===t?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function d(t,e,n){var r,i,a,o,s,c=function c(){var l=+new Date-o;l<e&&l>0?r=setTimeout(c,e-l):(r=null,n||(s=t.apply(a,i),r||(a=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];a=this,o=+new Date;var h=n&&!r;return r||(r=setTimeout(c,e)),h&&(s=t.apply(a,l),a=l=null),s}}function g(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return Object.keys(t).forEach(function(n){t[n]&&"object"===typeof t[n]?e[n]=g(t[n]):e[n]=t[n]}),e}function v(t){return Array.from(new Set(t))}function y(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function m(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function x(t,e){m(t,e)||(t.className+=" "+e)}function _(t,e){if(m(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=n,e.parseJavaTime=r,e.formatTime=i,e.getQueryObject=a,e.byteLength=o,e.cleanArray=s,e.param=c,e.param2Obj=l,e.html2Text=u,e.objectMerge=h,e.toggleClass=f,e.getTime=p,e.debounce=d,e.deepClone=g,e.uniqueArr=v,e.createUniqueString=y,e.hasClass=m,e.addClass=x,e.removeClass=_}).call(this,n("6e42")["default"])},ae74:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.getToken=r,e.setToken=i,e.removeToken=a;var n="access_token";function r(){return t.getStorageSync(n)}function i(e){return t.setStorageSync(n,e)}function a(){return t.removeStorageSync(n)}}).call(this,n("6e42")["default"])},b619:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__C9395DE"};e.default=r},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(o){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},de9a:function(t,e,n){"use strict";(function(e,n){var r,i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};r=Object.assign?Object.assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n};var a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=t.replace(n,function(t,e,n,r){return e+e+n+n+r+r}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),a=parseInt(i[1],16),o=parseInt(i[2],16),s=parseInt(i[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var r=1;while(n<1)n*=10,r*=10;t="upper"===e?Math.ceil(t*r):Math.floor(t*r);while(t%n!==0)"upper"===e?t++:t--;return t/r}function c(t,e,n,r){for(var i=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:n[a]},s=0,c=r.length;s<c;s++)if(s<t[a])o.data.push(null);else{for(var l=0,u=0;u<t[a];u++)l+=r[s-u][1];o.data.push(+(l/t[a]).toFixed(3))}i.push(o)}return i}function l(t,e,n,r){var i=r.width-r.area[1]-r.area[3],a=e.eachSpacing*(r.chartData.xAxisData.xAxisPoints.length-1),o=t;return t>=0?o=0:Math.abs(t)>=a-i&&(o=i-a),o}function u(t,e,n){function r(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=r(t),e=r(e),n=r(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var r=t,i=n-e,a=r+(n-i-r)/Math.sqrt(2);a*=-1;var o=(n-i)*(Math.sqrt(2)-1)-(n-i-r)/Math.sqrt(2);return{transX:a,transY:o}}function f(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var r=.2,i=.2,a=null,o=null,s=null,c=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*r,o=t[0].y+(t[1].y-t[0].y)*r):(a=t[e].x+(t[e+1].x-t[e-1].x)*r,o=t[e].y+(t[e+1].y-t[e-1].y)*r),e>t.length-3){var l=t.length-1;s=t[l].x-(t[l].x-t[l-1].x)*i,c=t[l].y-(t[l].y-t[l-1].y)*i}else s=t[e+1].x-(t[e+2].x-t[e].x)*i,c=t[e+1].y-(t[e+2].y-t[e].y)*i;return n(t,e+1)&&(c=t[e+1].y),n(t,e)&&(o=t[e].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:c}}}function p(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function g(t,e,n){var r=0;return t.map(function(t){if(t.color||(t.color=n.colors[r],r=(r+1)%n.colors.length),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function v(t,e){var n=0,r=e-t;return n=r>=1e4?1e3:r>=1e3?100:r>=100?10:r>=10?5:r>=1?1:r>=.1?.1:r>=.01?.01:r>=.001?.001:r>=1e-4?1e-4:r>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var a=t[r];/[a-zA-Z]/.test(a)?n+=7:/[0-9]/.test(a)?n+=5.5:/\./.test(a)?n+=2.7:/-/.test(a)?n+=3.25:/[\u4e00-\u9fa5]/.test(a)?n+=10:/\(|\)/.test(a)?n+=3.73:/\s/.test(a)?n+=2.5:/%/.test(a)?n+=8:n+=10}return n*e/10}function m(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function x(t,e){for(var n=new Array(e),r=0;r<n.length;r++)n[r]=0;for(var i=0;i<t.length;i++)for(r=0;r<n.length;r++)n[r]+=t[i].data[r];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function _(t,e,n){var r,i;return t.clientX?e.rotate?(i=e.height-t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(r=t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(i=e.height-t.x*e.pixelRatio,r=t.y*e.pixelRatio):(r=t.x*e.pixelRatio,i=t.y*e.pixelRatio),{x:r,y:i}}function b(t,e){for(var n=[],r=0;r<t.length;r++){var i=t[r];if(null!==i.data[e]&&"undefined"!==typeof i.data[e]&&i.show){var a={};a.color=i.color,a.type=i.type,a.style=i.style,a.pointShape=i.pointShape,a.disableLegend=i.disableLegend,a.name=i.name,a.show=i.show,a.data=i.format?i.format(i.data[e]):i.data[e],n.push(a)}}return n}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function S(t){for(var e=2*Math.PI/t,n=[],r=0;r<t;r++)n.push(e*r);return n.map(function(t){return-1*t+Math.PI/2})}function T(t,e,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:i.format?i.format(t,r[n]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},c=0;c<e.length;c++){var l=e[c];"undefined"!==typeof l[n]&&null!==l[n]&&o.push(l[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function A(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:i.format?i.format(t,r[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},c=0;c<e.length;c++){var l=e[c];"undefined"!==typeof l[n]&&null!==l[n]&&o.push(l[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function k(t,e,n,r,i,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,c=[o,o,s,o],l=[],u={text:i[r],color:null};l.push(u),e.map(function(e){0==r&&e.data[1]-e.data[0]<0?c[1]=s:(e.data[0]<t[r-1][1]&&(c[0]=s),e.data[1]<e.data[0]&&(c[1]=s),e.data[2]>t[r-1][1]&&(c[2]=o),e.data[3]<t[r-1][1]&&(c[3]=s));var n={text:"开盘："+e.data[0],color:c[0]},i={text:"收盘："+e.data[1],color:c[1]},a={text:"最低："+e.data[2],color:c[2]},u={text:"最高："+e.data[3],color:c[3]};l.push(n,i,a,u)});for(var h=[],f={x:0,y:0},p=0;p<n.length;p++){var d=n[p];"undefined"!==typeof d[r]&&null!==d[r]&&h.push(d[r])}return f.x=Math.round(h[0][0].x),{textList:l,offset:f}}function P(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function O(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(o=n.chartData.eachSpacing/2),M(t,n,r)&&e.forEach(function(e,n){t.x+i+o>e&&(a=n)}),a}function D(t,e,n){var r=-1;if(C(t,e.area)){for(var i=e.points,a=-1,o=0,s=i.length;o<s;o++)for(var c=i[o],l=0;l<c.length;l++){a+=1;var u=c[l]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){r=a;break}}return r}return r}function C(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function M(t,e,n){return t.x<e.width-e.area[1]+10&&t.x>e.area[3]-10&&t.y>e.area[0]&&t.y<e.height-e.area[2]}function $(t,e,n){var r=2*Math.PI/n,i=-1;if(R(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var n=a(t-r/2),s=a(t+r/2);s<n&&(s+=2*Math.PI),(o>=n&&o<=s||o+2*Math.PI>=n&&o+2*Math.PI<=s)&&(i=e)})}return i}function E(t,e){for(var n=-1,r=0,i=e.series.length;r<i;r++){var a=e.series[r];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){n=r;break}}return n}function j(t,e){var n=-1;if(R(t,e.center,e.radius)){var r=Math.atan2(e.center.y-t.y,t.x-e.center.x);r=-r;for(var i=0,a=e.series.length;i<a;i++){var o=e.series[i];if(u(r,o._start_,o._start_+2*o._proportion_*Math.PI)){n=i;break}}}return n}function R(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function L(t){var e=[],n=[];return t.forEach(function(t,r){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function I(t,e,n,r){var i={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return r.legendData=i,i;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,c=15*e.pixelRatio,l=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],f=0,p=[],d=[],g=0;g<t.length;g++){var v=t[g],m=c+l+y(v.name||"undefined",s)+e.legend.itemGap;f+m>e.width-e.padding[1]-e.padding[3]?(h.push(d),p.push(f-e.legend.itemGap),f=m,d=[v]):(f+=m,d.push(v))}if(d.length){h.push(d),p.push(f-e.legend.itemGap),i.widthArr=p;var x=Math.max.apply(null,p);switch(e.legend.float){case"left":i.area.start.x=e.padding[3],i.area.end.x=e.padding[3]+2*a;break;case"right":i.area.start.x=e.width-e.padding[1]-x-2*a,i.area.end.x=e.width-e.padding[1];break;default:i.area.start.x=(e.width-x)/2-a,i.area.end.x=(e.width+x)/2+a}i.area.width=x+2*a,i.area.wholeWidth=x+2*a,i.area.height=h.length*u+2*a,i.area.wholeHeight=h.length*u+2*a+2*o,i.points=h}}else{var _=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*a,w=Math.min(Math.floor(b/u),_);switch(i.area.height=w*u+2*a,i.area.wholeHeight=w*u+2*a,e.legend.float){case"top":i.area.start.y=e.padding[0]+o,i.area.end.y=e.padding[0]+o+i.area.height;break;case"bottom":i.area.start.y=e.height-e.padding[2]-o-i.area.height,i.area.end.y=e.height-e.padding[2]-o;break;default:i.area.start.y=(e.height-i.area.height)/2,i.area.end.y=(e.height+i.area.height)/2}for(var S=_%w===0?_/w:Math.floor(_/w+1),T=[],A=0;A<S;A++){var k=t.slice(A*w,A*w+w);T.push(k)}if(i.points=T,T.length){for(var P=0;P<T.length;P++){for(var O=T[P],D=0,C=0;C<O.length;C++){var M=c+l+y(O[C].name||"undefined",s)+e.legend.itemGap;M>D&&(D=M)}i.widthArr.push(D),i.heightArr.push(O.length*u+2*a)}for(var $=0,E=0;E<i.widthArr.length;E++)$+=i.widthArr[E];i.area.width=$-e.legend.itemGap+2*a,i.area.wholeWidth=i.area.width+a}}switch(e.legend.position){case"top":i.area.start.y=e.padding[0]+o,i.area.end.y=e.padding[0]+o+i.area.height;break;case"bottom":i.area.start.y=e.height-e.padding[2]-i.area.height-o,i.area.end.y=e.height-e.padding[2]-o;break;case"left":i.area.start.x=e.padding[3],i.area.end.x=e.padding[3]+i.area.width;break;case"right":i.area.start.x=e.width-e.padding[1]-i.area.width,i.area.end.x=e.width-e.padding[1];break}return r.legendData=i,i}function F(t,e,n,r){var i={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>r&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(i.angle)),i}function z(t,e,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=i.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,m(r))),c=[],l=function(i){var o=r[i],l={};l.color=o.color,l.data=[],o.data.forEach(function(r,i){var o={};o.angle=t[i],o.proportion=r/s,o.position=p(n*o.proportion*a*Math.cos(o.angle),n*o.proportion*a*Math.sin(o.angle),e),l.data.push(o)}),c.push(l)},u=0;u<r.length;u++)l(u);return c}function N(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0,i=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,r+=o.data}for(var s=0;s<t.length;s++){var c=t[s];c.data=null===c.data?0:c.data,c._proportion_=0===r?1/t.length*n:c.data/r*n,c._radius_=e}for(var l=0;l<t.length;l++){var u=t[l];u._start_=i,i+=2*u._proportion_*Math.PI}return t}function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var r=0;r<t.length;r++)t[r].radius=t[r].data/t[0].data*e*n,t[r]._proportion_=t[r].data/t[0].data;return t.reverse()}function B(t,e,n,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],c=0;c<t.length;c++){var l=t[c];l.data=null===l.data?0:l.data,a+=l.data,s.push(l.data)}for(var u=s.pop(),h=s.shift(),f=r-n,p=0;p<t.length;p++){var d=t[p];d.data=null===d.data?0:d.data,d._proportion_=0===a||"area"==e?1/t.length*i:d.data/a*i,d._radius_=n+f*((d.data-u)/(h-u))}for(var g=0;g<t.length;g++){var v=t[g];v._start_=o,o+=2*v._proportion_*Math.PI}return t}function W(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var r=0;r<t.length;r++){var i=t[r];i.data=null===i.data?0:i.data;var a=void 0;a="default"==e.type?e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle:2,i._proportion_=a*i.data*n+e.startAngle,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return t}function H(t,e,n){for(var r=e-n+1,i=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=i,t[a]._endAngle_=r*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),i=t[a]._endAngle_;return t}function U(t,e,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<t.length;i++){var a=t[i];if(a.data=null===a.data?0:a.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;a._endAngle_=s*a.data+n.startAngle,a._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(a._oldAngle_+=2),a.data>=n.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*r+n.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*r,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function G(t){t=N(t);for(var e=0,n=0;n<t.length;n++){var r=t[n],i=r.format?r.format(+r._proportion_.toFixed(2)):a.toFixed(100*r._proportion_)+"%";e=Math.max(e,y(i))}return e}function V(t,e,n,r,i,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/n),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(r+.5-n/2)*t.width,t)})}function X(t,e,n,r,i,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),r>0&&(t.width-=2*o),t)})}function J(t,e,n,r,i,a,o){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*i.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function Y(t,e,n){n.yAxisWidth,n.yAxisTitleWidth;var r=e.width-e.area[1]-e.area[3],i=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&i>1&&"justify"==e.xAxis.boundaryGap&&(i-=1);var a=r/i,o=[],s=e.area[3],c=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(c)),{xAxisPoints:o,startX:s,endX:c,eachSpacing:a}}function K(t,e,n,r,i,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c=[],l=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)c.push(null);else{var u=[];t.forEach(function(t,c){var h={};h.x=r[o]+Math.round(i/2);var f=t.value||t,p=l*(f-e)/(n-e);p*=s,h.y=a.height-Math.round(p)-a.area[2],u.push(h)}),c.push(u)}}),c}function Q(t,e,n,r,i,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,c="center";"line"!=a.type&&"area"!=a.type||(c=a.xAxis.boundaryGap);var l=[],u=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var h={};h.color=t.color,h.x=r[o],"center"==c&&(h.x+=Math.round(i/2));var f=t;"object"===typeof t&&null!==t&&(f=t.value);var p=u*(f-e)/(n-e);p*=s,h.y=a.height-Math.round(p)-a.area[2],l.push(h)}}),l}function Z(t,e,n,r,i,a,o,s,c){var l=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=r[o]+Math.round(i/2),s>0){for(var p=0,d=0;d<=s;d++)p+=c[d].data[o];var g=p-t,v=h*(p-e)/(n-e),y=h*(g-e)/(n-e)}else p=t,v=h*(p-e)/(n-e),y=0;var m=y;v*=l,m*=l,f.y=a.height-Math.round(v)-a.area[2],f.y0=a.height-Math.round(m)-a.area[2],u.push(f)}}),u}function tt(t,e,n,r){var i;i="stack"==r?x(t,e.categories.length):m(t);var a=[];i=i.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),i.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){a.push(t)}):a.push(t.value):a.push(t)});var o=0,s=0;if(a.length>0&&(o=Math.min.apply(this,a),s=Math.max.apply(this,a)),"number"===typeof e.yAxis.min&&(o=Math.min(e.yAxis.min,o)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),o===s){var c=s||10;s+=c}for(var l=v(o,s),u=l.minRange,h=l.maxRange,f=[],p=(h-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)f.push(u+p*d);return f.reverse()}function et(t,e,n){var i=r({},{type:""},e.extra.column),o=tt(t,e,n,i.type),s=n.yAxisWidth,c=e.yAxis.fontSize||n.fontSize,l=o.map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,y(t,c)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:l,ranges:o,yAxisWidth:s}}function nt(t,e,n,r,i){var a=tt(e,n,r),o=n.height-n.area[0]-n.area[2],s=a[0],c=a[a.length-1],l=n.padding[3],u=n.padding[1]+o,h=s-(s-c)*(t-l)/(u-l);return h=n.yAxis.format?n.yAxis.format(Number(h)):h,h}function rt(t,e,n,r){for(var i=r.height-r.area[0]-r.area[2],a=0;a<n.length;a++){var o=i*(n[a].value-t)/(e-t);n[a].y=r.height-Math.round(o)-r.area[2]}return n}function it(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function at(t,e,n,r,i){r.beginPath(),r.setStrokeStyle("#ffffff"),r.setLineWidth(1*i.pixelRatio),r.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y),r.lineTo(t.x,t.y+4.5),r.lineTo(t.x+4.5,t.y),r.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x+3.5*i.pixelRatio,t.y),r.arc(t.x,t.y,4*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(r.moveTo(t.x-3.5,t.y-3.5),r.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(r.moveTo(t.x,t.y-4.5),r.lineTo(t.x-4.5,t.y+4.5),r.lineTo(t.x+4.5,t.y+4.5),r.lineTo(t.x,t.y-4.5))}),r.closePath(),r.fill(),r.stroke()}function ot(t,e,n,r){var i=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",c=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,u=o?i:0,h=s?a:0,f=5;if(s){var p=y(s,a),d=r.x-p/2+(t.subtitle.offsetX||0),g=r.y+a/2+(t.subtitle.offsetY||0);o&&(g+=(u+f)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(l),n.fillText(s,d,g),n.closePath(),n.stroke()}if(o){var v=y(o,i),m=r.x-v/2+(t.title.offsetX||0),x=r.y+i/2+(t.title.offsetY||0);s&&(x-=(h+f)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(c),n.fillText(o,m,x),n.closePath(),n.stroke()}}function st(t,e,n,r){var i=e.data;t.forEach(function(t,a){if(null!==t){r.beginPath(),r.setFontSize(e.textSize||n.fontSize),r.setFillStyle(e.textColor||"#666666");var o=i[a];"object"===typeof i[a]&&null!==i[a]&&(o=i[a].value);var s=e.format?e.format(o):o;r.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-2),r.closePath(),r.stroke()}})}function ct(t,e,n,r,i,a){e-=t.width/2+i.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,c=t.endNumber-t.startNumber,l=c/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,f=0;f<t.splitLine.splitNumber+1;f++){var p={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;p.x+=n.x-y(d)/2,p.y+=n.y;var g=p.x,v=p.y;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(d,g,v+i.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),h+=l}}function lt(t,e,n,r,i,o){var s=r.extra.radar||{};e+=i.radarLabelTextMargin,t.forEach(function(t,c){var l={x:e*Math.cos(t),y:e*Math.sin(t)},u=p(l.x,l.y,n),h=u.x,f=u.y;a.approximatelyEqual(l.x,0)?h-=y(r.categories[c]||"")/2:l.x<0&&(h-=y(r.categories[c]||"")),o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(r.categories[c]||"",h,f+i.fontSize/2),o.closePath(),o.stroke()})}function ut(t,e,n,r,i,o){for(var s=n.pieChartLinePadding,c=[],l=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_)+"%",r=t.color,i=t._radius_;return{arc:e,text:n,color:r,radius:i,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var f=u[h],g=Math.cos(f.arc)*(f.radius+s),v=Math.sin(f.arc)*(f.radius+s),m=Math.cos(f.arc)*f.radius,x=Math.sin(f.arc)*f.radius,_=g>=0?g+n.pieChartTextPadding:g-n.pieChartTextPadding,b=v,w=y(f.text),S=b;l&&a.isSameXCoordinateArea(l.start,{x:_})&&(S=_>0?Math.min(b,l.start.y):g<0?Math.max(b,l.start.y):b>0?Math.max(b,l.start.y):Math.min(b,l.start.y)),_<0&&(_-=w);var T={lineStart:{x:m,y:x},lineEnd:{x:g,y:v},start:{x:_,y:S},width:w,height:n.fontSize,text:f.text,color:f.color,textColor:f.textColor,textSize:f.textSize};l=d(T,l),c.push(l)}for(var A=0;A<c.length;A++){var k=c[A],P=p(k.lineStart.x,k.lineStart.y,o),O=p(k.lineEnd.x,k.lineEnd.y,o),D=p(k.start.x,k.start.y,o);r.setLineWidth(1*e.pixelRatio),r.setFontSize(n.fontSize),r.beginPath(),r.setStrokeStyle(k.color),r.setFillStyle(k.color),r.moveTo(P.x,P.y);var C=k.start.x<0?D.x+k.width:D.x,M=k.start.x<0?D.x-5:D.x+5;r.quadraticCurveTo(O.x,O.y,C,D.y),r.moveTo(P.x,P.y),r.stroke(),r.closePath(),r.beginPath(),r.moveTo(D.x+k.width,D.y),r.arc(C,D.y,2,0,2*Math.PI),r.closePath(),r.fill(),r.beginPath(),r.setFontSize(k.textSize||n.fontSize),r.setFillStyle(k.textColor||"#666666"),r.fillText(k.text,M,D.y+3),r.closePath(),r.stroke(),r.closePath()}}function ht(t,e,n,r){var i=e.extra.tooltip||{};i.gridType=void 0==i.gridType?"solid":i.gridType,i.dashLength=void 0==i.dashLength?4:i.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==i.gridType&&r.setLineDash([i.dashLength,i.dashLength]),r.setStrokeStyle(i.gridColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),r.beginPath(),r.moveTo(t,a),r.lineTo(t,s),r.stroke(),r.setLineDash([]),i.xAxisLabel){var c=e.categories[e.tooltip.index];r.setFontSize(n.fontSize);var l=y(c,n.fontSize),u=t-.5*l,h=s;r.beginPath(),r.setFillStyle(o(i.labelBgColor||n.toolTipBackground,i.labelBgOpacity||n.toolTipOpacity)),r.setStrokeStyle(i.labelBgColor||n.toolTipBackground),r.setLineWidth(1*e.pixelRatio),r.rect(u-n.toolTipPadding,h,l+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),r.closePath(),r.stroke(),r.fill(),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(i.labelFontColor||n.fontColor),r.fillText(String(c),u,h+n.toolTipPadding+n.fontSize),r.closePath(),r.stroke()}}function ft(t,e,n,i,a){for(var s=r({},{type:"solid",dashLength:4,data:[]},n.extra.markLine),c=n.area[3],l=n.width-n.padding[1],u=rt(t,e,s.data,n),h=0;h<u.length;h++){var f=r({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[h]);if("dash"==s.type&&a.setLineDash([s.dashLength,s.dashLength]),a.setStrokeStyle(f.lineColor),a.setLineWidth(1*n.pixelRatio),a.beginPath(),a.moveTo(c,f.y),a.lineTo(l,f.y),a.stroke(),a.setLineDash([]),f.showLabel){var p=n.yAxis.format?n.yAxis.format(Number(f.value)):f.value;a.setFontSize(i.fontSize);var d=y(p,i.fontSize),g=n.padding[3]+i.yAxisTitleWidth-i.toolTipPadding,v=Math.max(n.area[3],d+2*i.toolTipPadding),m=v-g,x=g+(m-d)/2,_=f.y;a.setFillStyle(o(f.labelBgColor,f.labelBgOpacity)),a.setStrokeStyle(f.labelBgColor),a.setLineWidth(1*n.pixelRatio),a.beginPath(),a.rect(g,_-.5*i.fontSize-i.toolTipPadding,m,i.fontSize+2*i.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(f.labelFontColor),a.fillText(String(p),x,_+.5*i.fontSize),a.stroke()}}}function pt(t,e,n,i,a){var s=r({},{gridType:"solid",dashLength:4},t.extra.tooltip),c=t.area[3],l=t.width-t.padding[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(c,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel){var u=nt(t.tooltip.offset.y,t.series,t,e,i);n.setFontSize(e.fontSize);var h=y(u,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,p=Math.max(t.area[3],h+2*e.toolTipPadding),d=p-f,g=f+(d-h)/2,v=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(f,v-.5*e.fontSize-e.toolTipPadding,d,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u,g,v+.5*e.fontSize),n.closePath(),n.stroke()}}function dt(t,e,n,i,a){var s=r({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),c=e.area[0],l=e.height-e.area[2];i.beginPath(),i.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),i.rect(t-a/2,c,a,l-c),i.closePath(),i.fill()}function gt(t,e,n,i,a,s,c){var l=r({},{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,f=8*n.pixelRatio,p=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||ht(n.tooltip.offset.x,n,i,a),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,i.fontSize)}),g=u+h+4*i.toolTipPadding+Math.max.apply(null,d),v=2*i.toolTipPadding+t.length*i.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+f+g>n.width&&(p=!0),v+e.y>n.height&&(e.y=n.height-v),a.beginPath(),a.setFillStyle(o(l.bgColor||i.toolTipBackground,l.bgOpacity||i.toolTipOpacity)),p?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-f,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-f,e.y),a.lineTo(e.x-f-Math.round(g),e.y),a.lineTo(e.x-f-Math.round(g),e.y+v),a.lineTo(e.x-f,e.y+v),a.lineTo(e.x-f,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+f,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+f,e.y),a.lineTo(e.x+f+Math.round(g),e.y),a.lineTo(e.x+f+Math.round(g),e.y+v),a.lineTo(e.x+f,e.y+v),a.lineTo(e.x+f,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var r=e.x+f+2*i.toolTipPadding,o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;p&&(r=e.x-g-f+2*i.toolTipPadding),a.fillRect(r,o,u,i.fontSize),a.closePath()}}),t.forEach(function(t,n){var r=e.x+f+2*i.toolTipPadding+u+h;p&&(r=e.x-g-f+2*i.toolTipPadding+ +u+h);var o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(l.fontColor),a.fillText(t.text,r,o+i.fontSize),a.closePath(),a.stroke()})}function vt(t,e,n,r){var i=n.xAxisHeight+(e.height-n.xAxisHeight-y(t))/2;r.save(),r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(e.yAxis.titleFontColor||"#333333"),r.translate(0,e.height),r.rotate(-90*Math.PI/180),r.fillText(t,i,e.padding[3]+.5*n.fontSize),r.closePath(),r.stroke(),r.restore()}function yt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,c=s.xAxisPoints,l=s.eachSpacing,u=r({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),h=o.pop(),f=o.shift(),p=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&dt(e.tooltip.offset.x,e,n,i,l),t.forEach(function(r,o){var s=r.data;switch(u.type){case"group":var d=Q(s,h,f,c,l,e,n,a),g=Z(s,h,f,c,l,e,n,o,t,a);p.push(g),d=V(d,l,t.length,o,n,e),d.forEach(function(t,n){if(null!==t){i.beginPath(),i.setFillStyle(t.color||r.color);var a=t.x-t.width/2+1,o=e.height-t.y-e.area[2];i.moveTo(a,t.y),i.fillRect(a,t.y,t.width-2,o),i.closePath(),i.fill()}});break;case"stack":d=Z(s,h,f,c,l,e,n,o,t,a);p.push(d),d=J(d,l,t.length,o,n,e,t),d.forEach(function(t,n){if(null!==t){i.beginPath(),i.setFillStyle(t.color||r.color);var a=t.x-t.width/2+1,s=e.height-t.y-e.area[2],c=e.height-t.y0-e.area[2];o>0&&(s-=c),i.moveTo(a,t.y),i.fillRect(a,t.y,t.width-2,s),i.closePath(),i.fill()}});break;case"meter":d=Q(s,h,f,c,l,e,n,a);p.push(d),d=X(d,l,t.length,o,n,e,u.meter.border),0==o?d.forEach(function(t,n){if(null!==t){i.beginPath(),i.setFillStyle(u.meter.fillColor);var a=t.x-t.width/2,o=e.height-t.y-e.area[2];i.moveTo(a,t.y),i.fillRect(a,t.y,t.width,o),i.closePath(),i.fill(),u.meter.border>0&&(i.beginPath(),i.setStrokeStyle(r.color),i.setLineWidth(u.meter.border*e.pixelRatio),i.moveTo(a+.5*u.meter.border,t.y+o),i.lineTo(a+.5*u.meter.border,t.y+.5*u.meter.border),i.lineTo(a+t.width-.5*u.meter.border,t.y+.5*u.meter.border),i.lineTo(a+t.width-.5*u.meter.border,t.y+o),i.stroke())}}):d.forEach(function(t,n){if(null!==t){i.beginPath(),i.setFillStyle(t.color||r.color);var a=t.x-t.width/2,o=e.height-t.y-e.area[2];i.moveTo(a,t.y),i.fillRect(a,t.y,t.width,o),i.closePath(),i.fill()}});break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(r,o){var s=r.data;switch(u.type){case"group":var p=Q(s,h,f,c,l,e,n,a);p=V(p,l,t.length,o,n,e),st(p,r,n,i);break;case"stack":p=Z(s,h,f,c,l,e,n,o,t,a);st(p,r,n,i);break;case"meter":p=Q(s,h,f,c,l,e,n,a);st(p,r,n,i);break}}),i.restore(),{xAxisPoints:c,calPoints:p,eachSpacing:l,minRange:h,maxRange:f}}function mt(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{color:{},average:{}},n.extra.candle);s.color=r({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=r({},{show:!1,name:[],day:[],color:i.colors},s.average),n.extra.candle=s;var c=[].concat(n.chartData.yAxisData.ranges),l=n.chartData.xAxisData,u=l.xAxisPoints,h=l.eachSpacing,p=c.pop(),d=c.shift(),g=[];return a.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&a.translate(n._scrollDistance_,0),s.average.show&&e.forEach(function(t,e){var r=t.data,s=Q(r,p,d,u,h,n,i,o),c=L(s);c.forEach(function(e,n){a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===e.length?(a.moveTo(e[0].x,e[0].y),a.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(a.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var r=f(e,n-1);a.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}),a.moveTo(e[0].x,e[0].y)),a.closePath(),a.stroke()})}),t.forEach(function(t,e){var r=t.data,c=K(r,p,d,u,h,n,i,o);g.push(c);var l=L(c);l=l[0],l.forEach(function(t,e){a.beginPath(),r[e][1]-r[e][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(t[3].x,t[3].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[1].x-h/4,t[1].y),a.lineTo(t[0].x-h/4,t[0].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[2].x,t[2].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[0].x+h/4,t[0].y),a.lineTo(t[1].x+h/4,t[1].y),a.lineTo(t[1].x,t[1].y),a.moveTo(t[3].x,t[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(t[3].x,t[3].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[0].x-h/4,t[0].y),a.lineTo(t[1].x-h/4,t[1].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[2].x,t[2].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[1].x+h/4,t[1].y),a.lineTo(t[0].x+h/4,t[0].y),a.lineTo(t[0].x,t[0].y),a.moveTo(t[3].x,t[3].y)),a.closePath(),a.fill(),a.stroke()})}),a.restore(),{xAxisPoints:u,calPoints:g,eachSpacing:h,minRange:p,maxRange:d}}function xt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"straight",opacity:.2,addLine:!1,width:2},e.extra.area),c=[].concat(e.chartData.yAxisData.ranges),l=e.chartData.xAxisData,u=l.xAxisPoints,h=l.eachSpacing,p=c.pop(),d=c.shift(),g=e.height-e.area[2],v=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,r){var c=t.data,l=Q(c,p,d,u,h,e,n,a);v.push(l);for(var y=L(l),m=function(n){var r=y[n];if(i.beginPath(),i.setStrokeStyle(o(t.color,s.opacity)),i.setFillStyle(o(t.color,s.opacity)),i.setLineWidth(s.width*e.pixelRatio),r.length>1){var a=r[0],c=r[r.length-1];i.moveTo(a.x,a.y),"curve"===s.type?r.forEach(function(t,e){if(e>0){var n=f(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(c.x,g),i.lineTo(a.x,g),i.lineTo(a.x,a.y)}else{var l=r[0];i.moveTo(l.x-h/2,l.y),i.lineTo(l.x+h/2,l.y),i.lineTo(l.x+h/2,g),i.lineTo(l.x-h/2,g),i.moveTo(l.x-h/2,l.y)}i.closePath(),i.fill(),s.addLine&&(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(s.width*e.pixelRatio),1===r.length?(i.moveTo(r[0].x,r[0].y),i.arc(r[0].x,r[0].y,1,0,2*Math.PI)):(i.moveTo(r[0].x,r[0].y),"curve"===s.type?r.forEach(function(t,e){if(e>0){var n=f(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(r[0].x,r[0].y)),i.closePath(),i.stroke())},x=0;x<y.length;x++)m(x);if(!1!==e.dataPointShape){var _=n.dataPointShape[r%n.dataPointShape.length];at(l,t.color,_,i,e)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o=t.data,s=Q(o,p,d,u,h,e,n,a);st(s,t,n,i)}),i.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:h,minRange:p,maxRange:d}}function _t(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.line||{type:"straight",width:2};a.type=a.type?a.type:"straight",a.width=a.width?a.width:2;var o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,c=s.xAxisPoints,l=s.eachSpacing,u=o.pop(),h=o.shift(),p=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),t.forEach(function(t,o){var s=t.data,d=Q(s,u,h,c,l,e,n,i);p.push(d);var g=L(d);if(g.forEach(function(n,i){r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(a.width*e.pixelRatio),1===n.length?(r.moveTo(n[0].x,n[0].y),r.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(r.moveTo(n[0].x,n[0].y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var i=f(n,e-1);r.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.moveTo(n[0].x,n[0].y)),r.closePath(),r.stroke()}),!1!==e.dataPointShape){var v=n.dataPointShape[o%n.dataPointShape.length];at(d,t.color,v,r,e)}}),!1!==e.dataLabel&&1===i&&t.forEach(function(t,a){var o=t.data,s=Q(o,u,h,c,l,e,n,i);st(s,t,n,r)}),r.restore(),{xAxisPoints:c,calPoints:p,eachSpacing:l,minRange:u,maxRange:h}}function bt(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,c=s.xAxisPoints,l=s.eachSpacing,u=a.pop(),h=a.shift(),p=e.height-e.area[2],d=[],g=0,v=0;if(t.forEach(function(t,e){"column"==t.type&&(v+=1)}),r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,y=Q(s,u,h,c,l,e,n,i);if(d.push(y),"column"==t.type&&(y=V(y,l,v,g,n,e),y.forEach(function(n,i){if(null!==n){r.beginPath(),r.setFillStyle(n.color||t.color);var a=n.x-n.width/2+1,o=e.height-n.y-e.area[2];r.moveTo(a,n.y),r.rect(a,n.y,n.width-2,o),r.closePath(),r.fill()}}),g+=1),"area"==t.type)for(var m=L(y),x=function(n){var i=m[n];if(r.beginPath(),r.setStrokeStyle(t.color),r.setFillStyle(o(t.color,.2)),r.setLineWidth(2*e.pixelRatio),i.length>1){b=i[0];var a=i[i.length-1];r.moveTo(b.x,b.y),"curve"===t.style?i.forEach(function(t,e){if(e>0){var n=f(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.lineTo(a.x,p),r.lineTo(b.x,p),r.lineTo(b.x,b.y)}else{var s=i[0];r.moveTo(s.x-l/2,s.y),r.lineTo(s.x+l/2,s.y),r.lineTo(s.x+l/2,p),r.lineTo(s.x-l/2,p),r.moveTo(s.x-l/2,s.y)}r.closePath(),r.fill()},_=0;_<m.length;_++){var b;x(_)}if("line"==t.type){var w=L(y);w.forEach(function(n,i){r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(2*e.pixelRatio),1===n.length?(r.moveTo(n[0].x,n[0].y),r.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(r.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var i=f(n,e-1);r.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.moveTo(n[0].x,n[0].y)),r.closePath(),r.stroke()})}if("point"==t.type&&y.forEach(function(n,i){n&&(r.beginPath(),r.setFillStyle(t.color),r.setStrokeStyle("#FFFFFF"),r.setLineWidth(1*e.pixelRatio),r.moveTo(n.x+3.5*e.pixelRatio,n.y),r.arc(n.x,n.y,4*e.pixelRatio,0,2*Math.PI),r.closePath(),r.fill(),r.stroke())}),1==t.addPoint&&"column"!==t.type){var S=n.dataPointShape[a%n.dataPointShape.length];at(y,t.color,S,r,e)}}),!1!==e.dataLabel&&1===i){g=0;t.forEach(function(t,a){var o=t.data,s=Q(o,u,h,c,l,e,n,i);"column"!==t.type?st(s,t,n,r):(s=V(s,l,v,g,n,e),st(s,t,n,r),g+=1)})}return r.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:l,minRange:u,maxRange:h}}function wt(t,e,n,r,i,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===r&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&pt(t,e,n,i,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===r&&gt(t.tooltip.textList,t.tooltip.offset,t,e,n,i,a),n.restore()}function St(t,e,n,r){var i=e.chartData.xAxisData,a=i.xAxisPoints,o=i.startX,s=i.endX,c=i.eachSpacing,l="center";"line"!=e.type&&"area"!=e.type||(l=e.xAxis.boundaryGap);var u=e.height-e.area[2],f=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var p=e.height-e.area[2]+n.xAxisHeight,d=s-o,g=c*(a.length-1),v=d*d/g,m=0;e._scrollDistance_&&(m=-e._scrollDistance_*d/g),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),r.moveTo(o,p),r.lineTo(s,p),r.stroke(),r.closePath(),r.beginPath(),r.setLineCap("round"),r.setLineWidth(6*e.pixelRatio),r.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),r.moveTo(o+m,p),r.lineTo(o+m+v,p),r.stroke(),r.closePath(),r.setLineCap("butt")}if(r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),!0!==e.xAxis.disableGrid&&(r.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),r.setLineCap("butt"),r.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&r.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),"calibration"===e.xAxis.type?a.forEach(function(t,n){n>0&&(r.beginPath(),r.moveTo(t-c/2,u),r.lineTo(t-c/2,u+4*e.pixelRatio),r.closePath(),r.stroke())}):(e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){n%e.xAxis.gridEval==0&&(r.beginPath(),r.moveTo(t,u),r.lineTo(t,f),r.stroke())})),r.setLineDash([])),!0!==e.xAxis.disabled){e.width,e.padding[1],e.padding[3],n.yAxisWidth,n.yAxisTitleWidth;var x=t.length;e.xAxis.labelCount&&(x=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,x-=1);for(var _=Math.ceil(t.length/x),b=[],w=t.length,S=0;S<w;S++)S%_!==0?b.push(""):b.push(t[S]);b[w-1]=t[w-1];var T=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,i){var o=-y(t,T)/2;"center"==l&&(o+=c/2),r.beginPath(),r.setFontSize(T),r.setFillStyle(e.xAxis.fontColor||"#666666"),r.fillText(t,a[i]+o,u+T+(n.xAxisHeight-T)/2),r.closePath(),r.stroke()}):b.forEach(function(t,i){r.save(),r.beginPath(),r.setFontSize(T),r.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(t),s=-o;"center"==l&&(s+=c/2);var f=h(a[i]+c/2,u+T/2+5,e.height),p=f.transX,d=f.transY;r.rotate(-1*n._xAxisTextAngle_),r.translate(p,d),r.fillText(t,a[i]+s,u+T+5),r.closePath(),r.stroke(),r.restore()})}r.restore()}function Tt(t,e,n,r){if(!0!==e.yAxis.disableGrid){for(var i=e.height-e.area[0]-e.area[2],a=i/n.yAxisSplit,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,c=e.chartData.xAxisData.eachSpacing,l=c*(s.length-1),u=o+l,h=[],f=0;f<n.yAxisSplit+1;f++)h.push(e.height-e.area[2]-a*f);r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&r.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&r.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),r.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),r.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){r.beginPath(),r.moveTo(o,t),r.lineTo(u,t),r.stroke()}),r.setLineDash([]),r.restore()}}function At(t,e,n,r){if(!0!==e.yAxis.disabled){var i=e.chartData.yAxisData.rangesFormat,a=e.height-e.area[0]-e.area[2],o=Math.floor(a/n.yAxisSplit),s=e.area[3],c=e.width-e.area[1],l=e.height-e.area[2],u=l+n.xAxisHeight;e.xAxis.scrollShow&&(u-=3*e.pixelRatio),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&r.fillRect(0,0,s,u),1==e.enableScroll&&r.fillRect(c,0,e.width,u),r.closePath(),r.stroke();for(var h=[],f=0;f<=n.yAxisSplit;f++)h.push(e.area[0]+o*f);var p=e.yAxis.fontSize||n.fontSize;i.forEach(function(t,i){var a=h[i]?h[i]:l;r.beginPath(),r.setFontSize(p),r.setFillStyle(e.yAxis.fontColor||"#666666"),r.fillText(String(t),e.area[3]-n.yAxisWidth,a+p/2),r.closePath(),r.stroke()}),e.yAxis.title&&vt(e.yAxis.title,e,n,r)}}function kt(t,e,n,r,i){if(!1!==e.legend.show){var a=i.legendData,o=a.points,s=a.area,c=e.legend.padding,l=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,f=e.legend.itemGap,p=Math.max(e.legend.lineHeight*e.pixelRatio,l);r.beginPath(),r.setLineWidth(e.legend.borderWidth),r.setStrokeStyle(e.legend.borderColor),r.setFillStyle(e.legend.backgroundColor),r.moveTo(s.start.x,s.start.y),r.rect(s.start.x,s.start.y,s.width,s.height),r.closePath(),r.fill(),r.stroke(),o.forEach(function(t,i){var o=0,d=0;o=a.widthArr[i],d=a.heightArr[i];var g=0,v=0;"top"==e.legend.position||"bottom"==e.legend.position?(g=s.start.x+(s.width-o)/2,v=s.start.y+c+i*p):(o=0==i?0:a.widthArr[i-1],g=s.start.x+c+o,v=s.start.y+c+(s.height-d)/2),r.setFontSize(n.fontSize);for(var m=0;m<t.length;m++){var x=t[m];switch(x.area=[0,0,0,0],x.area[0]=g,x.area[1]=v,x.area[3]=v+p,r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(x.show?x.color:e.legend.hiddenColor),r.setFillStyle(x.show?x.color:e.legend.hiddenColor),x.legendShape){case"line":r.moveTo(g,v+.5*p-2*e.pixelRatio),r.fillRect(g,v+.5*p-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":r.moveTo(g+7.5*e.pixelRatio,v+.5*p-5*e.pixelRatio),r.lineTo(g+2.5*e.pixelRatio,v+.5*p+5*e.pixelRatio),r.lineTo(g+12.5*e.pixelRatio,v+.5*p+5*e.pixelRatio),r.lineTo(g+7.5*e.pixelRatio,v+.5*p-5*e.pixelRatio);break;case"diamond":r.moveTo(g+7.5*e.pixelRatio,v+.5*p-5*e.pixelRatio),r.lineTo(g+2.5*e.pixelRatio,v+.5*p),r.lineTo(g+7.5*e.pixelRatio,v+.5*p+5*e.pixelRatio),r.lineTo(g+12.5*e.pixelRatio,v+.5*p),r.lineTo(g+7.5*e.pixelRatio,v+.5*p-5*e.pixelRatio);break;case"circle":r.moveTo(g+7.5*e.pixelRatio,v+.5*p),r.arc(g+7.5*e.pixelRatio,v+.5*p,5*e.pixelRatio,0,2*Math.PI);break;case"rect":r.moveTo(g,v+.5*p-5*e.pixelRatio),r.fillRect(g,v+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:r.moveTo(g,v+.5*p-5*e.pixelRatio),r.fillRect(g,v+.5*p-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}r.closePath(),r.fill(),r.stroke(),g+=u+h;var _=.5*p+.5*l-2;r.beginPath(),r.setFontSize(l),r.setFillStyle(x.show?e.legend.fontColor:e.legend.hiddenColor),r.fillText(x.name,g,v+_),r.closePath(),r.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(g+=y(x.name,l)+f,x.area[2]=g):(x.area[2]=g+y(x.name,l)+f,g-=u+h,v+=p)}})}}function Pt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=N(t,l,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),"ring"===e.type){var h=.6*l;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,l-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(c.x,c.y),i.arc(c.x,c.y,h,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===a){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ut(t,e,n,i,l,c)}return 1===a&&"ring"===e.type&&ot(e,n,i,c),{center:c,radius:l,series:t}}function Ot(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},l=Math.min(c.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,c.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=e.padding[1]+e.padding[3];var u=s.minRadius||.5*l;t=B(t,s.type,u,l,a);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,s.activeOpacity||.5)),i.moveTo(c.x,c.y),i.arc(c.x,c.y,h+t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(c.x,c.y),i.arc(c.x,c.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),!1!==e.dataLabel&&1===a){for(var f=!1,p=0,d=t.length;p<d;p++)if(t[p].data>0){f=!0;break}f&&ut(t,e,n,i,l,c)}return{center:c,radius:l,series:t}}function Dt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=r({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio},e.extra.arcbar);t=W(t,o,a);var s={x:e.width/2,y:e.height/2},c=Math.min(s.x,s.y);c-=5*e.pixelRatio,c-=o.width/2,i.setLineWidth(o.width),i.setStrokeStyle(o.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==o.type?i.arc(s.x,s.y,c,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):i.arc(s.x,s.y,c,0,2*Math.PI,!1),i.stroke();for(var l=0;l<t.length;l++){var u=t[l];i.setLineWidth(o.width),i.setStrokeStyle(u.color),i.setLineCap("round"),i.beginPath(),i.arc(s.x,s.y,c,o.startAngle*Math.PI,u._proportion_*Math.PI,!1),i.stroke()}return ot(e,n,i,s),{center:s,radius:c,series:t}}function Ct(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==s.oldAngle&&(s.oldAngle=s.startAngle),void 0==s.oldData&&(s.oldData=0),t=H(t,s.startAngle,s.endAngle);var c={x:n.width/2,y:n.height/2},l=Math.min(c.x,c.y);l-=5*n.pixelRatio,l-=s.width/2;var u=l-s.width;a.setLineWidth(s.width),a.setLineCap("butt");for(var h=0;h<t.length;h++){var f=t[h];a.beginPath(),a.setStrokeStyle(f.color),a.arc(c.x,c.y,l,f._startAngle_*Math.PI,f._endAngle_*Math.PI,!1),a.stroke()}a.save();var p=s.startAngle-s.endAngle+1,d=p/s.splitLine.splitNumber,g=p/s.splitLine.splitNumber/s.splitLine.childNumber,v=-l-.5*s.width-s.splitLine.fixRadius,y=-l-.5*s.width-s.splitLine.fixRadius+s.splitLine.width,m=-l-.5*s.width-s.splitLine.fixRadius+s.splitLine.childWidth;a.translate(c.x,c.y),a.rotate((s.startAngle-1)*Math.PI);for(var x=0;x<s.splitLine.splitNumber+1;x++)a.beginPath(),a.setStrokeStyle(s.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(v,0),a.lineTo(y,0),a.stroke(),a.rotate(d*Math.PI);a.restore(),a.save(),a.translate(c.x,c.y),a.rotate((s.startAngle-1)*Math.PI);for(var _=0;_<s.splitLine.splitNumber*s.splitLine.childNumber+1;_++)a.beginPath(),a.setStrokeStyle(s.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(v,0),a.lineTo(m,0),a.stroke(),a.rotate(g*Math.PI);a.restore(),e=U(e,t,s,o);for(var b=0;b<e.length;b++){var w=e[b];a.save(),a.translate(c.x,c.y),a.rotate((w._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle(w.color),a.moveTo(s.pointer.width,0),a.lineTo(0,-s.pointer.width/2),a.lineTo(-u,0),a.lineTo(0,s.pointer.width/2),a.lineTo(s.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,s.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}return!1!==n.dataLabel&&ct(s,l,c,n,i,a),ot(n,i,a,c),1===o&&"gauge"===n.type&&(s.oldAngle=e[0]._proportion_,s.oldData=e[0].data),{center:c,radius:l,innerRadius:u,categories:t,totalAngle:p}}function Mt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2},e.extra.radar),c=S(e.categories.length),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(l.x-(w(e.categories)+n.radarLabelTextMargin),l.y-n.radarLabelTextMargin);u-=e.padding[1],i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),c.forEach(function(t){var e=p(u*Math.cos(t),u*Math.sin(t),l);i.moveTo(l.x,l.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var h=function(t){var r={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),c.forEach(function(e,a){var o=p(u/n.radarGridCount*t*Math.cos(e),u/n.radarGridCount*t*Math.sin(e),l);0===a?(r=o,i.moveTo(o.x,o.y)):i.lineTo(o.x,o.y)}),i.lineTo(r.x,r.y),i.stroke(),i.closePath()},f=1;f<=n.radarGridCount;f++)h(f);var d=z(c,l,u,t,e,a);return d.forEach(function(t,r){if(i.beginPath(),i.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),!1!==e.dataPointShape){var a=n.dataPointShape[r%n.dataPointShape.length],c=t.data.map(function(t){return t.position});at(c,t.color,a,i,e)}}),lt(c,u,l,e,n,i),{center:l,radius:u,angleList:c}}function $t(t,e,n){n=0==n?1:n;for(var r=[],i=0;i<n;i++)r[i]=Math.random();return Math.floor(r.reduce(function(t,e){return t+e})/n*(e-t))+t}function Et(t,e,n,r){for(var i=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){i=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>r){i=!0;break}i=!1}return i}function jt(t,e,n,i){var a=r({},{type:"normal",autoColors:!0},e.extra.word);i.beginPath(),i.clearRect(0,0,e.width,e.height),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill(),i.save();var o=t.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(a.type){case"normal":i.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){i.save();var c=o[s].name,l=o[s].textSize,u=y(c,l),h=void 0,f=void 0,p=void 0,d=0;while(1){d++,h=$t(-e.width/2,e.width/2,5)-u/2,f=$t(-e.height/2,e.height/2,5)+l/2,p=[h-5+e.width/2,f-5-l+e.height/2,h+u+5+e.width/2,f+5+e.height/2];var g=Et(p,o,e.width,e.height);if(!g)break;if(1e3==d){p=[-100,-100,-100,-100];break}}o[s].area=p,i.beginPath(),i.setFillStyle(o[s].color),i.setFontSize(l),i.fillText(c,p[0]+5-e.width/2,p[1]+5+l-e.height/2),i.stroke(),i.draw(!0),i.restore()}break;case"vertical":i.translate(e.width/2,e.height/2);for(var v=function(){return Math.random()>.7&&(i.rotate(90*Math.PI/180),!0)},m=0;m<o.length;m++){i.save();var x=o[m].name,_=o[m].textSize,b=y(x,_),w=v(),S=void 0,T=void 0,A=void 0,k=void 0,P=0;while(1){P++;var O=void 0;if(w?(S=$t(-e.width/2,e.width/2,5)-b/2,T=$t(-e.height/2,e.height/2,5)+_/2,A=[T-5-b+e.width/2,-S-5+e.height/2,T+5+e.width/2,-S+_+5+e.height/2],k=[e.width-(e.width/2-e.height/2)-(-S+_+5+e.height/2)-5,e.height/2-e.width/2+(T-5-b+e.width/2)-5,e.width-(e.width/2-e.height/2)-(-S+_+5+e.height/2)+_,e.height/2-e.width/2+(T-5-b+e.width/2)+b+5],O=Et(k,o,e.height,e.width)):(S=$t(-e.width/2,e.width/2,5)-b/2,T=$t(-e.height/2,e.height/2,5)+_/2,A=[S-5+e.width/2,T-5-_+e.height/2,S+b+5+e.width/2,T+5+e.height/2],O=Et(A,o,e.width,e.height)),!O)break;if(1e3==P){A=[-100,-100,-100,-100];break}}o[m].area=w?k:A,i.beginPath(),i.setFillStyle(o[m].color),i.setFontSize(_),i.fillText(x,A[0]+5-e.width/2,A[1]+5+_-e.height/2),i.stroke(),i.draw(!0),i.restore()}break;case"tilt":break;case"random":break}i.restore()}function Rt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),c=(e.height-e.area[0]-e.area[2])/t.length,l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=q(t,h,a),i.save(),i.translate(l.x,l.y);for(var f=0;f<t.length;f++)0==f?(e.tooltip&&e.tooltip.index==f&&(i.beginPath(),i.setFillStyle(o(t[f].color,s.activeOpacity)),i.moveTo(-u,0),i.lineTo(-t[f].radius-u,-c),i.lineTo(t[f].radius+u,-c),i.lineTo(u,0),i.lineTo(-u,0),i.closePath(),i.fill()),t[f].funnelArea=[l.x-t[f].radius,l.y-c,l.x+t[f].radius,l.y],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[f].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[f].radius,-c),i.lineTo(t[f].radius,-c),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()):(e.tooltip&&e.tooltip.index==f&&(i.beginPath(),i.setFillStyle(o(t[f].color,s.activeOpacity)),i.moveTo(0,0),i.lineTo(-t[f-1].radius-u,0),i.lineTo(-t[f].radius-u,-c),i.lineTo(t[f].radius+u,-c),i.lineTo(t[f-1].radius+u,0),i.lineTo(0,0),i.closePath(),i.fill(),i.closePath(),i.fill()),t[f].funnelArea=[l.x-t[f].radius,l.y-c*(f+1),l.x+t[f].radius,l.y-c*f],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[f].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[f-1].radius,0),i.lineTo(-t[f].radius,-c),i.lineTo(t[f].radius,-c),i.lineTo(t[f-1].radius,0),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()),i.translate(0,-c);return i.restore(),!1!==e.dataLabel&&1===a&&Lt(t,e,i,c,s.labelAlign,u,l),{center:l,radius:h,series:t}}function Lt(t,e,n,r,i,o,s){for(var c=0;c<t.length;c++){var l=t[c],u=void 0,h=void 0,f=void 0,p=void 0,d=l.format?l.format(+l._proportion_.toFixed(2)):a.toFixed(100*l._proportion_)+"%";"right"==i?(u=0==c?(l.funnelArea[2]+s.x)/2:(l.funnelArea[2]+t[c-1].funnelArea[2])/2,h=u+2*o,f=l.funnelArea[1]+r/2,p=l.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(l.color),n.setFillStyle(l.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(l.textColor||"#666666"),n.fillText(d,h+5,f+p/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==c?(l.funnelArea[0]+s.x)/2:(l.funnelArea[0]+t[c-1].funnelArea[0])/2,h=u-2*o,f=l.funnelArea[1]+r/2,p=l.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(l.color),n.setFillStyle(l.color),n.beginPath(),n.moveTo(u,f),n.lineTo(h,f),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,f),n.arc(h,f,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(p),n.setFillStyle(l.textColor||"#666666"),n.fillText(d,h-5-y(d),f+p/2-2),n.closePath(),n.stroke(),n.closePath())}}function It(t,e){e.draw()}var Ft={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function zt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var r=n(),i=null,a=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===i&&(i=n),n-i<t.duration){var o=(n-i)/t.duration,s=Ft[t.timing];o=s(o),t.onProcess&&t.onProcess(o),r(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),r(a,e)}function Nt(t,e,n,i){var a=this,o=e.series,s=e.categories;o=g(o,e,n);var l=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var h=r({},e.extra.candle.average);h.show?(u=c(h.day,h.name,h.color,o[0].data),u=g(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=g(e.seriesMA,e,n):o}else u=o;e._series_=o=P(o),e.area=new Array(4);for(var f=0;f<4;f++)e.area[f]=e.padding[f];var p=I(u,e,n,e.chartData),d=p.area.wholeHeight,v=p.area.wholeWidth;switch(n.legendHeight=d,e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=v;break;case"right":e.area[1]+=v;break}var y={},m=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type?(y=et(o,e,n),m=y.yAxisWidth,n.yAxisWidth=m,e.area[3]+=m):n.yAxisWidth=m,e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=Y(e.categories,e,n);var x=F(e.categories,e,n,e.chartData.xAxisData.eachSpacing),_=x.xAxisHeight,b=x.angle;n.xAxisHeight=_,n._xAxisTextAngle_=b,e.area[2]+=_,e.chartData.categoriesData=x}if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var w=0,S=e.chartData.xAxisData.xAxisPoints,T=e.chartData.xAxisData.startX,A=e.chartData.xAxisData.endX,k=e.chartData.xAxisData.eachSpacing,O=k*(S.length-1),D=A-T;w=D-O,a.scrollOption={currentOffset:w,startTouchX:w,distance:0,lastMoveTime:0},e._scrollDistance_=w}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:G(u)),t){case"word":i.clearRect(0,0,e.width,e.height),jt(o,e,n,i);break;case"funnel":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.funnelData=Rt(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new zt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),Tt(s,e,n,i),St(s,e,n,i);var r=_t(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing,u=r.minRange,h=r.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,At(o,e,n,i),!1!==e.enableMarkLine&&1===t&&ft(u,h,e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new zt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),Tt(s,e,n,i),St(s,e,n,i);var r=bt(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing,u=r.minRange,h=r.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,At(o,e,n,i),!1!==e.enableMarkLine&&1===t&&ft(u,h,e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new zt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),Tt(s,e,n,i),St(s,e,n,i);var r=yt(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing,u=r.minRange,h=r.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,At(o,e,n,i),!1!==e.enableMarkLine&&1===t&&ft(u,h,e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new zt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),Tt(s,e,n,i),St(s,e,n,i);var r=xt(o,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing,u=r.minRange,h=r.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,At(o,e,n,i),!1!==e.enableMarkLine&&1===t&&ft(u,h,e,n,i),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.pieData=Pt(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.pieData=Ot(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.radarData=Mt(o,e,n,i,t),kt(e.series,e,n,i,e.chartData),wt(e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.arcbarData=Dt(o,e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new zt({timing:"easeInOut",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),e.chartData.gaugeData=Ct(s,o,e,n,i,t),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new zt({timing:"easeIn",duration:l,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&it(i,e),Tt(s,e,n,i),St(s,e,n,i);var r=mt(o,u,e,n,i,t),a=r.xAxisPoints,c=r.calPoints,l=r.eachSpacing,h=r.minRange,f=r.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=c,e.chartData.eachSpacing=l,At(o,e,n,i),!1!==e.enableMarkLine&&1===t&&ft(h,f,e,n,i),kt(u||e.series,e,n,i,e.chartData),wt(e,n,i,t,l,a),It(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function qt(){this.events={}}zt.prototype.stop=function(){this.isStop=!0},qt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},qt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],a=n.slice(1);this.events[i]&&this.events[i].forEach(function(t){try{t.apply(null,a)}catch(n){console.error(e(n," at components\\js_sdk\\u-charts\\u-charts\\u-charts.js:4271"))}})};var Bt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=r({},t.title),t.subtitle=r({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=r({},{gridType:"solid",dashLength:4*t.pixelRatio},t.yAxis),t.xAxis=r({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4*t.pixelRatio,scrollAlign:"left",boundaryGap:"center"},t.xAxis),t.legend=r({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=r({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation;var e=JSON.parse(JSON.stringify(i));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.legendHeight=i.legendHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new qt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Nt.call(this,t.type,t,e,this.context)};Bt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t);var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=et(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var a=0,o=Y(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,c=o.startX,l=o.endX,u=o.eachSpacing,h=u*(s.length-1),f=l-c;a=f-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Nt.call(this,this.opts.type,this.opts,this.config,this.context)},Bt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var r=et(this.opts.series,this.opts,this.config),i=r.yAxisWidth;this.config.yAxisWidth=i;var a=0,o=Y(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,c=o.startX,l=o.endX,u=o.eachSpacing,h=u*n,f=l-c,p=f-u*(s.length-1);a=f/2-h,a>0&&(a=0),a<p&&(a=p),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Nt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components\\js_sdk\\u-charts\\u-charts\\u-charts.js:4431"))},Bt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Bt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Bt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?j({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?$({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?E({x:n.x,y:n.y},this.opts.chartData.funnelData):O({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Bt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return D({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Bt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){_(n,this.opts,t);var r=this.getLegendDataIndex(t);r>=0&&(this.opts.series[r].show=!this.opts.series[r].show,this.opts.animation=!!e.animation,Nt.call(this,this.opts.type,this.opts,this.config,this.context))}},Bt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i||console.log(e("touchError"," at components\\js_sdk\\u-charts\\u-charts\\u-charts.js:4557"));var a=_(i,this.opts,t),o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var c=this.getCurrentDataIndex(t);if(c>-1){var l=b(this.opts.series,c);if(0!==l.length){var u=T(l,this.opts.chartData.calPoints,c,this.opts.categories,n),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:c}}}Nt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=b(this.opts.series,c);if(0!==l.length){var p=A(l,this.opts.chartData.calPoints,c,this.opts.categories,n);h=p.textList,f=p.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:c}}}Nt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=b(this.opts.series,c);if(0!==l.length){u=k(this.opts.series[0].data,l,this.opts.chartData.calPoints,c,this.opts.categories,this.opts.extra.candle,n),h=u.textList,f=u.offset;f.y=a.y,s.tooltip={textList:h,offset:f,option:n,index:c}}}Nt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=this.opts._series_[c],h=[{text:n.format?n.format(l):l.name+": "+l.data,color:l.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:c}}Nt.call(this,s.type,s,this.config,this.context)}if("funnel"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=this.opts._series_[c],h=[{text:n.format?n.format(l):l.name+": "+l.data,color:l.color}],f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:c}}Nt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){c=this.getCurrentDataIndex(t);if(c>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),l=b(this.opts.series,c);if(0!==l.length){h=l.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),f={x:a.x,y:a.y};s.tooltip={textList:h,offset:f,option:n,index:c}}}Nt.call(this,s.type,s,this.config,this.context)}},Bt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Nt.call(this,this.opts.type,e,this.config,this.context)},Bt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Bt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=_(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var c=this.scrollOption.currentOffset,u=l(c+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-c;var h=r({},this.opts,{_scrollDistance_:c+o,animation:!1});return Nt.call(this,h.type,h,this.config,this.context),c+o}}},Bt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,r=e.distance;this.scrollOption.currentOffset=n+r,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Bt)}).call(this,n("0de9")["default"],n("6e42")["default"])},f263:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {
  "4f78": function f78(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("a58f"),
        e = n("f1b3");

    for (var o in e) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return e[t];
        });
      }(o);
    }

    var r = n("2877"),
        c = Object(r["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    a["default"] = c.exports;
  },
  a58f: function a58f(t, a, n) {
    "use strict";

    var u = function u() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        e = [];

    n.d(a, "a", function () {
      return u;
    }), n.d(a, "b", function () {
      return e;
    });
  },
  f1b3: function f1b3(t, a, n) {
    "use strict";

    n.r(a);
    var u = n("ffba"),
        e = n.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(a, t, function () {
          return u[t];
        });
      }(o);
    }

    a["default"] = e.a;
  },
  ffba: function ffba(t, a, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var n = {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar
          };
        },
        name: "cu-custom",
        computed: {
          style: function style() {
            var t = this.StatusBar,
                a = this.CustomBar,
                n = this.bgImage,
                u = "height:".concat(a, "px;padding-top:").concat(t, "px;");
            return this.bgImage && (u = "".concat(u, "background-image:url(").concat(n, ");")), u;
          }
        },
        props: {
          bgColor: {
            type: String,
            default: ""
          },
          isBack: {
            type: [Boolean, String],
            default: !1
          },
          bgImage: {
            type: String,
            default: ""
          }
        },
        methods: {
          BackPage: function BackPage() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      a.default = n;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['colorui/components/cu-custom-create-component', {
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4f78"));
  }
}, [['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');
__wxRoute = 'components/cmd-icon/cmd-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/cmd-icon/cmd-icon.js';

define('components/cmd-icon/cmd-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cmd-icon/cmd-icon"], {
  "5d68": function d68(t, n, e) {
    "use strict";

    var c = e("9c08"),
        i = e.n(c);
    i.a;
  },
  "63e3": function e3(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = {
      name: "cmd-icon",
      props: {
        prefixClass: {
          type: String,
          default: "cmd-icon"
        },
        type: String,
        color: {
          type: String,
          default: "#fff"
        },
        size: {
          type: [Number, String],
          default: "24"
        }
      },
      computed: {
        setStyle: function setStyle() {
          return "color:".concat(this.color, ";\n\t\t\tfont-size:").concat(this.size, "px;\n\t\t\tline-height:").concat(this.size, "px");
        }
      },
      methods: {
        $_click: function $_click(t) {
          this.$emit("click", t);
        }
      }
    };
    n.default = c;
  },
  6604: function _(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("8d13"),
        i = e("ac52");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("5d68");
    var u = e("2877"),
        r = Object(u["a"])(i["default"], c["a"], c["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  "8d13": function d13(t, n, e) {
    "use strict";

    var c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return c;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "9c08": function c08(t, n, e) {},
  ac52: function ac52(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("63e3"),
        i = e.n(c);

    for (var o in c) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(o);
    }

    n["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/cmd-icon/cmd-icon-create-component', {
  'components/cmd-icon/cmd-icon-create-component': function componentsCmdIconCmdIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6604"));
  }
}, [['components/cmd-icon/cmd-icon-create-component']]]);
});
require('components/cmd-icon/cmd-icon.js');
__wxRoute = 'components/date-picker/date-picker2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/date-picker/date-picker2.js';

define('components/date-picker/date-picker2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/date-picker/date-picker2"], {
  5303: function _(e, t, a) {
    "use strict";

    a.r(t);
    var i = a("5912"),
        o = a("7b8e");

    for (var n in o) {
      "default" !== n && function (e) {
        a.d(t, e, function () {
          return o[e];
        });
      }(n);
    }

    a("85bb");
    var c = a("2877"),
        r = Object(c["a"])(o["default"], i["a"], i["b"], !1, null, "33e1d601", null);
    t["default"] = r.exports;
  },
  5912: function _(e, t, a) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        o = [];

    a.d(t, "a", function () {
      return i;
    }), a.d(t, "b", function () {
      return o;
    });
  },
  "5c65": function c65(e, t, a) {
    "use strict";

    (function (e, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = n(a("a34a"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function c(e) {
        return h(e) || s(e) || r();
      }

      function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function s(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }

      function h(e) {
        if (Array.isArray(e)) {
          for (var t = 0, a = new Array(e.length); t < e.length; t++) {
            a[t] = e[t];
          }

          return a;
        }
      }

      function d(e, t, a, i, o, n, c) {
        try {
          var r = e[n](c),
              s = r.value;
        } catch (h) {
          return void a(h);
        }

        r.done ? t(s) : Promise.resolve(s).then(i, o);
      }

      function l(e) {
        return function () {
          var t = this,
              a = arguments;
          return new Promise(function (i, o) {
            var n = e.apply(t, a);

            function c(e) {
              d(n, i, o, c, r, "next", e);
            }

            function r(e) {
              d(n, i, o, c, r, "throw", e);
            }

            c(void 0);
          });
        };
      }

      var u = {
        data: function data() {
          return {
            date: [],
            weeks: [],
            dayCount: 1,
            dayCount2: "共1晚",
            festival: {
              101: "元旦",
              214: "情人节",
              308: "妇女节",
              312: "植树节",
              315: "消费者权益日",
              401: "愚人节",
              405: "清明节",
              501: "劳动节",
              504: "青年节",
              512: "护士节",
              601: "儿童节",
              701: "建党节",
              801: "建军节",
              910: "教师节",
              928: "孔子诞辰",
              1001: "国庆节",
              1006: "老人节",
              1024: "联合国日",
              1224: "平安夜",
              1225: "圣诞节"
            },
            haveOrder: [],
            dateFlag: {},
            choice: "",
            today: "",
            choiceDate: [],
            choiceDateArr: [],
            tomorrow: "",
            afterTomorrow: "",
            weekNameArr: ["日", "一", "二", "三", "四", "五", "六"],
            animation: null,
            animationData: null,
            curScrollTop: 0,
            monthTitleRectList: [],
            fixedId: "",
            layerTop: 0,
            bak_date: [],
            bak_weeks: [],
            bak_choiceDate: [],
            bak_choiceDateArr: [],
            bak_dayCount: 1,
            isShow_H5: "",
            isShow_NoH5: !1,
            tmpWeekArr: {}
          };
        },
        props: {
          startDate: {
            type: String,
            default: ""
          },
          endDate: {
            type: String,
            default: ""
          },
          modal: {
            type: Boolean,
            default: !1
          },
          show: {
            type: Boolean,
            default: !1
          },
          daysCount: {
            type: Number,
            default: 150
          },
          singleDate: {
            type: Boolean,
            default: !1
          }
        },
        components: {},
        created: function created() {
          this.init();
        },
        onLoad: function onLoad() {
          this.init();
        },
        watch: {
          show: function show(e, t) {
            this.isShow_NoH5 ? this.hideCalendar() : this.showCalendar();
          }
        },
        methods: {
          pad: function pad(e, t) {
            return Array(t - ("" + e).length + 1).join(0) + e;
          },
          init: function init() {
            this.animation = e.createAnimation({
              duration: 400,
              timingFunction: "ease",
              delay: 0
            }), this.dateData(), this.modal && this.$emit("change", {
              choiceDate: this.choiceDate,
              dayCount: this.dayCount
            });
          },
          getLayerTop: function getLayerTop() {
            return new Promise(function (t) {
              var a = e.createSelectorQuery().select(".layer-list");
              a.boundingClientRect(function (e) {
                t(e.top);
              }).exec();
            });
          },
          getMonthTitleRectList: function getMonthTitleRectList() {
            return new Promise(function (t) {
              var a = e.createSelectorQuery().selectAll(".month-title");
              a.boundingClientRect(function (e) {
                t(e);
              }).exec();
            });
          },
          getRectList: function () {
            var e = l(o.default.mark(function e() {
              var t;
              return o.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.layerTop && !(this.layerTop < 0)) {
                        e.next = 4;
                        break;
                      }

                      return e.next = 3, this.getLayerTop();

                    case 3:
                      this.layerTop = e.sent;

                    case 4:
                      if (t = !0, !(this.monthTitleRectList && this.monthTitleRectList.length > 0)) {
                        e.next = 13;
                        break;
                      }

                      if (0 != this.monthTitleRectList[0].top) {
                        e.next = 11;
                        break;
                      }

                      return e.next = 9, this.getMonthTitleRectList();

                    case 9:
                      this.monthTitleRectList = e.sent, t = !1;

                    case 11:
                      e.next = 14;
                      break;

                    case 13:
                      t = !1;

                    case 14:
                      if (0 != t) {
                        e.next = 18;
                        break;
                      }

                      return e.next = 17, this.getMonthTitleRectList();

                    case 17:
                      this.monthTitleRectList = e.sent;

                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function t() {
              return e.apply(this, arguments);
            }

            return t;
          }(),
          showCalendar: function showCalendar() {
            this.bak_date = JSON.parse(JSON.stringify(this.date)), console.log(i(this.date, " at components\\date-picker\\date-picker2.vue:231")), console.log(i(this.bak_date, " at components\\date-picker\\date-picker2.vue:232")), this.bak_weeks = JSON.parse(JSON.stringify(this.weeks)), this.bak_choiceDate = JSON.parse(JSON.stringify(this.choiceDate)), this.bak_choiceDateArr = JSON.parse(JSON.stringify(this.choiceDateArr)), this.bak_dayCount = this.dayCount, this.animation.bottom("0px").height("100%").step(), this.animationData = this.animation.export(), this.isShow_NoH5 = !0;
          },
          hideCalendar: function hideCalendar(e) {
            this.animation.bottom("-100%").height("0upx").step(), this.animationData = this.animation.export(), this.isShow_NoH5 = !1, e || (this.dateFlag = {}, this.choice = "", this.dayCount = this.bak_dayCount, this.dayCount2 = "共" + this.dayCount + "晚", this.date = JSON.parse(JSON.stringify(this.bak_date)), console.log(i(this.date, " at components\\date-picker\\date-picker2.vue:281")), this.weeks = JSON.parse(JSON.stringify(this.bak_weeks)), this.choiceDate = JSON.parse(JSON.stringify(this.bak_choiceDate)), this.choiceDateArr = JSON.parse(JSON.stringify(this.bak_choiceDateArr)));
          },
          setData: function setData(e) {
            var t,
                a,
                i = this,
                o = [];
            Object.keys(e).forEach(function (n) {
              o = n.split("."), t = e[n], a = i.$data, o.forEach(function (e, n) {
                n + 1 == o.length ? i.$set(a, e, t) : a[e] || i.$set(a, e, {}), a = a[e];
              });
            });
          },
          onScroll: function onScroll(e) {},
          dateData: function dateData() {
            var e = this,
                t = [],
                a = [],
                o = [],
                n = new Date();
            console.log(i(n, " at components\\date-picker\\date-picker2.vue:329"));
            var c = n.getTime(),
                r = n.getFullYear(),
                s = (n.getDay(), []),
                h = n.getMonth() + 1,
                d = n.getDate(),
                l = Math.min(this.daysCount, 60);
            l = Math.min(this.daysCount, 366);
            var u = 0,
                p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                f = [];
            this.today = r + "-" + this.pad(h, 2) + "-" + this.pad(d, 2), console.log(i(this.today, " at components\\date-picker\\date-picker2.vue:344")), this.tomorrow = r + "-" + this.pad(h, 2) + "-" + this.pad(d + 1, 2), this.afterTomorrow = r + "-" + this.pad(h, 2) + "-" + this.pad(d + 2, 2);
            var g = this.startDate,
                k = this.endDate;

            if (g ? (g = new Date(g.split("-").join("/")), g.getTime() < c && (g = new Date())) : g = new Date(), k ? (k = new Date(this.endDate.split("-").join("/")), k.getTime() < c && (k = new Date(g.getTime() + 864e5))) : k = new Date(g.getTime() + 864e5), g.getTime() > k.getTime()) {
              var m = [k, g];
              g = m[0], k = m[1];
            }

            var v = new Date(c + 24 * l * 3600 * 1e3);

            if (k.getTime() > v.getTime()) {
              var D = k.getTime() - v.getTime();
              l += parseInt(D / 864e5) + 7;
            }

            for (var y = 1; y <= h; y++) {
              f.push(y);
            }

            console.log(i(f, " at components\\date-picker\\date-picker2.vue:384"));
            var b = [r - 1, r];
            console.log(i(b, " at components\\date-picker\\date-picker2.vue:386"));

            for (var w = function w(e) {
              return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
            }, A = 0; A < b.length; A++) {
              var T = void 0;
              if (b[A] == r) T = f, console.log(i(T, " at components\\date-picker\\date-picker2.vue:401"));else {
                var S = p;
                T = S.slice(h, 12), console.log(i(T, " at components\\date-picker\\date-picker2.vue:405"));
              }

              for (var C = 0; C < T.length; C++) {
                o = [];
                var _ = [31, 28 + w(b[A]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    N = [];

                if (b[A] == r) {
                  for (var x = 0; x < f.length; x++) {
                    N.push(_[T[x] - 1]);
                  }

                  _ = N;
                } else {
                  var O = [31, 28 + w(b[A]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  _ = O.slice(h, 12);
                }

                for (var F = 0; F < _[C]; F++) {
                  u++;
                  var J = void 0;
                  if (!(u < l)) break;
                  var L = this.pad(F + 1, 2),
                      R = T[C] + "" + L,
                      j = (b[A], T[C], this.festival[R]),
                      M = !1,
                      W = new Date(b[A] + "/" + T[C] + "/" + (F + 1)),
                      $ = W.getTime(),
                      E = 0;

                  if (b[A] == r && T[C] == h) {
                    if (0 == F) {
                      var H = new Date(b[A] + "/" + T[C] + "/" + (F + 1));
                      console.log(i(H, " at components\\date-picker\\date-picker2.vue:445"));
                      var P = H.getDay();
                      s.push(P);
                    }

                    J = {
                      year: b[A],
                      month: this.pad(T[C], 2),
                      act: {
                        subject: j || "",
                        none: M,
                        tip: "",
                        defaultStr: 0
                      },
                      day: this.pad(F + 1, 2),
                      date: b[A] + "" + this.pad(T[C], 2) + L,
                      selected: E,
                      re: b[A] + "-" + this.pad(T[C], 2) + "-" + L,
                      dateTime: $,
                      week: this.getWeek(s, h, r, b[A], T[C], F + 1)
                    }, o.push(J);
                  } else {
                    if (0 == F) {
                      var B = new Date(b[A] + "/" + T[C] + "/" + (F + 1)),
                          I = B.getDay();
                      s.push(I);
                    }

                    J = {
                      year: b[A],
                      month: this.pad(T[C], 2),
                      act: {
                        subject: j || "",
                        none: M,
                        tip: "",
                        defaultStr: 0
                      },
                      day: this.pad(F + 1, 2),
                      date: b[A] + "" + this.pad(T[C], 2) + L,
                      selected: E,
                      re: b[A] + "-" + this.pad(T[C], 2) + "-" + L,
                      dateTime: $,
                      week: this.getWeek(s, h, r, b[A], T[C], F + 1)
                    }, o.push(J);
                  }
                }

                t.push(o);
              }
            }

            console.log(i(t, " at components\\date-picker\\date-picker2.vue:502"));

            for (var Y = 0; Y < t.length; Y++) {
              0 != t[Y].length && a.push(t[Y]);
            }

            console.log(i(a, " at components\\date-picker\\date-picker2.vue:508"));
            var Q = g.getFullYear(),
                q = g.getMonth() + 12,
                z = g.getDate(),
                G = k.getFullYear(),
                K = k.getMonth() + 12,
                U = k.getDate(),
                V = Q == r ? q - h : q + (12 - h),
                X = z - 1;
            console.log(i(V, " at components\\date-picker\\date-picker2.vue:521")), console.log(i(X, " at components\\date-picker\\date-picker2.vue:522"));
            var Z = G == r ? K - h : K + (12 - h),
                ee = U - 1;
            a[V][X].selected = 1, a[V][X].act.tip = "入住", a[V][X].act.defaultStr = 1, this.choiceDate.push(a[V][X]);
            var te = !1;
            V == Z && ee - X == 1 && a[V][X + 1] ? (a[V][X + 1].selected = 1, a[V][X + 1].act.tip = "离店", a[V][X + 1].act.defaultStr = 1, this.choiceDate.push(a[V][X + 1])) : te = !0, te && (a[Z][ee].selected = 1, a[Z][ee].act.tip = "离店", a[Z][ee].act.defaultStr = 1, this.choiceDate.push(a[Z][ee])), this.$nextTick(function () {
              e.selectday(V, X), e.selectday(Z, ee);
            }), this.date = a, console.log(i(this.date, " at components\\date-picker\\date-picker2.vue:560")), this.weeks = s, this.choiceDate = this.choiceDate, this.choiceDateArr = this.choiceDate;
          },
          getWeek: function getWeek(e, t, a, i, o, n) {
            var r = 0;
            r = i > a ? 12 * (i - a) + o - t : o - t;
            var s = e[r],
                h = i + "-" + o;

            if (!this.tmpWeekArr[h]) {
              for (var d = [], l = s; l < this.weekNameArr.length; l++) {
                d.push(this.weekNameArr[l]);
              }

              d = [].concat(c(d), c(this.weekNameArr)), this.tmpWeekArr[h] = d;
            }

            var u = n % 7 || 7;
            return u--, this.tmpWeekArr[h][u];
          },
          dayClick: function dayClick(e) {
            console.log(i(e, " at components\\date-picker\\date-picker2.vue:605"));
            var t = e.currentTarget.dataset.indexs,
                a = e.currentTarget.dataset.index;
            this.selectday(a, t, !0);
          },
          selectday: function selectday(e, t, a) {
            if (this.singleDate && "{}" != JSON.stringify(this.dateFlag) && (this.dateFlag = {}), -1 != t) {
              console.log(i(t, " at components\\date-picker\\date-picker2.vue:623"));
              var o = this.date[e][t];

              if (console.log(i(o, " at components\\date-picker\\date-picker2.vue:625")), o.selected = 1, o.act.tip = "入住", console.log(i(this.dateFlag, " at components\\date-picker\\date-picker2.vue:647")), console.log(i(this.dateFlag.date, " at components\\date-picker\\date-picker2.vue:648")), this.dateFlag && this.dateFlag.date) {
                if (console.log(i("", " at components\\date-picker\\date-picker2.vue:650")), this.dateFlag.index == e && this.dateFlag.indexs == t) return;
                o.act.tip = "离店";
                var n = this,
                    c = n.dateFlag.date.dateTime,
                    r = n.date[e][t].dateTime;
                n.choiceDateArr = [], n.choiceDateArr.push(n.dateFlag.date), console.log(i(n.choiceDateArr, " at components\\date-picker\\date-picker2.vue:661"));
                var s = [],
                    h = 0;
                this.date.forEach(function (e) {
                  e.forEach(function (e) {
                    e.dateTime > c && e.dateTime < r && (e.act.none && (!0, s.push(e.day)), n.choiceDateArr.push(e), e.selected = 1, h++);
                  });
                }), console.log(i(n.choiceDateArr, " at components\\date-picker\\date-picker2.vue:678")), n.choiceDateArr.push(n.date[e][t]), console.log(i(n.choiceDateArr, " at components\\date-picker\\date-picker2.vue:680")), this.choiceDate[0] = n.choiceDateArr[0], this.choiceDate[1] = n.choiceDateArr[n.choiceDateArr.length - 1], this.dateFlag = {}, this.choice = !0, this.dayCount = h + 1, this.dayCount2 = "共" + (h + 1) + "晚", console.log(i(this.today, " at components\\date-picker\\date-picker2.vue:688"));
              } else console.log(i(this.choiceDateArr, " at components\\date-picker\\date-picker2.vue:690")), this.choiceDateArr[this.choiceDateArr.length - 1].selected = 0, console.log(i(this.choiceDateArr, " at components\\date-picker\\date-picker2.vue:692")), this.dateFlag = {
                date: o,
                index: e,
                indexs: t
              }, this.choice = !1, this.dayCount = 1, this.choiceDate[0] = o, console.log(i(this.dateFlag.date, " at components\\date-picker\\date-picker2.vue:702")), console.log(i(this.today, " at components\\date-picker\\date-picker2.vue:703"));
            }
          },
          submitbtn: function submitbtn() {
            this.choiceDate[0] = this.choiceDateArr[0], this.choiceDate[0].date < this.choiceDateArr[this.choiceDateArr.length - 1].date ? this.choiceDate[1] = this.choiceDateArr[this.choiceDateArr.length - 1] : (this.choiceDate[0] = this.choiceDateArr[this.choiceDateArr.length - 1], this.choiceDate[1] = this.choiceDateArr[0]), this.dayCount2 = "共" + this.dayCount + "晚", this.hideCalendar(!0), this.$emit("change", {
              choiceDate: this.singleDate ? this.choiceDate[0] : this.choiceDate,
              dayCount: this.dayCount
            });
          }
        }
      };
      t.default = u;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  "7b8e": function b8e(e, t, a) {
    "use strict";

    a.r(t);
    var i = a("5c65"),
        o = a.n(i);

    for (var n in i) {
      "default" !== n && function (e) {
        a.d(t, e, function () {
          return i[e];
        });
      }(n);
    }

    t["default"] = o.a;
  },
  "85bb": function bb(e, t, a) {
    "use strict";

    var i = a("a11b"),
        o = a.n(i);
    o.a;
  },
  a11b: function a11b(e, t, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/date-picker/date-picker2-create-component', {
  'components/date-picker/date-picker2-create-component': function componentsDatePickerDatePicker2CreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5303"));
  }
}, [['components/date-picker/date-picker2-create-component']]]);
});
require('components/date-picker/date-picker2.js');
__wxRoute = 'components/kilvn-fa-icon/fa-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/kilvn-fa-icon/fa-icon.js';

define('components/kilvn-fa-icon/fa-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/kilvn-fa-icon/fa-icon"], {
  "14a1": function a1(t, n, e) {},
  "38ee": function ee(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d3f7"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  "7b30": function b30(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "81b2": function b2(t, n, e) {
    "use strict";

    var u = e("14a1"),
        a = e.n(u);
    a.a;
  },
  "986d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("7b30"),
        a = e("38ee");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("81b2");
    var i = e("2877"),
        o = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  d3f7: function d3f7(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "faIcon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/kilvn-fa-icon/fa-icon-create-component', {
  'components/kilvn-fa-icon/fa-icon-create-component': function componentsKilvnFaIconFaIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("986d"));
  }
}, [['components/kilvn-fa-icon/fa-icon-create-component']]]);
});
require('components/kilvn-fa-icon/fa-icon.js');
__wxRoute = 'components/tki-tree/tki-tree';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/tki-tree/tki-tree.js';

define('components/tki-tree/tki-tree.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-tree/tki-tree"], {
  3707: function _(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("603b"),
        r = i.n(n);

    for (var o in n) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return n[e];
        });
      }(o);
    }

    t["default"] = r.a;
  },
  "3c2c": function c2c(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("dfd5"),
        r = i("3707");

    for (var o in r) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return r[e];
        });
      }(o);
    }

    i("e3f4");
    var c = i("2877"),
        l = Object(c["a"])(r["default"], n["a"], n["b"], !1, null, null, null);
    t["default"] = l.exports;
  },
  "603b": function b(e, t, i) {
    "use strict";

    (function (e) {
      function i(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i, e;
      }

      function n(e) {
        return c(e) || o(e) || r();
      }

      function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function o(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }

      function c(e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = new Array(e.length); t < e.length; t++) {
            i[t] = e[t];
          }

          return i;
        }
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var l = {
        name: "tki-tree",
        props: {
          range: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          rangeKey: {
            type: String,
            default: "label"
          },
          title: {
            type: String,
            default: ""
          },
          multiple: {
            type: Boolean,
            default: !1
          },
          selectParent: {
            type: Boolean,
            default: !1
          },
          confirmColor: {
            type: String,
            default: ""
          },
          cancelColor: {
            type: String,
            default: ""
          },
          titleColor: {
            type: String,
            default: ""
          },
          currentIcon: {
            type: String,
            default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ0QTM0MzQ1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ0QTM0MzU1Q0RBMTFFOUE0MjY4NzI1Njc1RjI1ODIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDRBMzQzMjVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDRBMzQzMzVDREExMUU5QTQyNjg3MjU2NzVGMjU4MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PidwepsAAAK0SURBVHja7JxbTsJAFIYHww7ciStgCeoGvGxAiOsgURegoL5720AXYLiIr0aJviq3Zx3PhIEnKG3ndtr+f3KixrSUj/ZjzjClIqUUiFm2gAAQAREQEUAEREAERAQQAREQAREBREAEREBEEqa67h9RFDWllDv0awWYlqlQHmu1WjMRRMoV1QFttA12y3xRtdNczq8EsE4/f8FumX2q77ROvNXk8UGMEKdUz6tYJHljaZAbuyUH+UR1to5BEohTuqwPCeS4pAA/qY6o/kyHOAMCeRK3owJnj+rH1jjxhqpVsstaebCz6TmnHWyXyY+xHjSBWBY/bvSgadtXBj9u9KCN3rnIfkzkQVsTEEX0Y2IP2oKo/HhMICcFAThUcwVZNGU6FdbX/XURzkbVF4+ybGhjPrFdgP66QdXNurGtSdk6Xdb9nAJ8oDo3OQlsQZzkdPw41ONBo6vI5scDefRjZg+6gpg3Pxp50CXEvPjR2IOuIXL3oxUPuobI3Y9WPOgDIlc/WvOgL4iL/vqFCcD7LH0xB4hj7cfQ/fWH9qCT+FhG0tN+DBk1PzjOM0SVllixcsBT1AvYc/kAPhc0hRg/3uvxoCgKRN9+dOrBUBB9+9GpB0NC9OVH5x4MDdG1H714kANEV3705kEOEBf9dcPi/lQnsuvLg1wgSu3Ha0v7Uh4MMgUXeuG71H407a+VBy9CPQkOdw+MtB+nGbd/D+FBbhBNxo9SjwcngJjNj0E9yBFiFj8G9SBXiGn8GNyDnCEm8SMLD3KHGOdHNh7kDjHOj2w8mAeIi/5arX+c6b/fxHz9oADEdGdjR/fXCw/OOB5oVfCOgnepz8IB14PMw03jCmTE+QBx5z0gAmKSqK9OUF+hcAeIhu/QYr4Qie8rjW83hhMBERARQAREQAREBBABERCLnH8BBgA+TQI7U4t53AAAAABJRU5ErkJggg=="
          },
          defaultIcon: {
            type: String,
            default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAYAAACqj0o2AAACE0lEQVR4Xu3c200DMRCF4XEltJAOkEugA+ggpUAHoQMqiFMCdEAJUMEiS4mEELlIO7bPOeN9i6K1rG/952myyea1WiCtXmEuYBPR4RBMxInoIOCwhOtJLKVszWyXc/5y2BvNEq6I+/3+kFK6M7OHnPM7jcLKjbZAvD/uaZtzflm5P4rbWyJWgDcze1LPuzVihfxUz7sH4ilJ2bx7Isrm3RtRMu8RiHJ5j0SUyXs0okTeCIj0eSMh0uaNhkiZNyIiXd7IiDR5oyNS5M2ACJ83EyJs3myIkHkzIsLlzYwIkzc7IkTeCojD81ZCHJa3GuKQvBURu+etjNgtb3XELnlHQGyedyTEZnlHQ2ySd0RE97wjI7rlHR3RJe+JeIrbLOecD6ePpZQ6W1kn2epo4MUrPOKyLN8ppYq1+y1VStncOjIdGnFZlo+U0uOtWOeOY2TE12Ouq//pEA7xXL7XfvcufR8K0Svfv6CREN3yDYfYIt9QiK3yjYTYLF95xB75SiP2ylcZsVu+cogj8pVCHJWvEuKwfOkREfKlRkTJlxkRJl86RMR8qRBR82VChM0XHpEhX2hElnyREWnyhUNkzBcKkTVfJETafIcjKuQ7FFEl35GIMvl2R1TMtyuiar49EWXzbY5oZpv/hibXTF2h3+s60FRKeT6+3TjMS3nrA3ZFRD8xrfY3ER1kJ+JEdBBwWGKeRAfEH1wS5WFZSDB/AAAAAElFTkSuQmCC"
          },
          lastIcon: {
            type: String,
            default: ""
          },
          border: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            showTree: !1,
            treeList: [],
            selectIndex: -1,
            arr: [],
            arr1: []
          };
        },
        computed: {},
        methods: {
          _show: function _show() {
            this.showTree = !0;
          },
          _hide: function _hide() {
            this.showTree = !1;
          },
          _cancel: function _cancel() {
            this._hide(), this.$emit("cancel", "");
          },
          _confirm: function _confirm() {
            var e = this,
                t = [],
                i = {};
            this.treeList.forEach(function (n, r) {
              e.treeList[r].checked && (i = {}, i.parents = e.treeList[r].parents, i = Object.assign(i, e.treeList[r].source), delete i.children, t.push(i));
            }), this._hide(), this.$emit("confirm", t);
          },
          _renderTreeList: function _renderTreeList() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
            t.forEach(function (t) {
              if (e.treeList.push({
                id: t.id,
                name: t[e.rangeKey],
                source: t,
                parentId: o,
                parents: c,
                rank: r,
                showChild: !1,
                show: 0 === r,
                checked: !1
              }), Array.isArray(t.children) && t.children.length > 0) {
                var l = n(o),
                    s = n(c);
                delete s.children, l.push(t.id), s.push(i({
                  id: t.id
                }, e.rangeKey, t[e.rangeKey])), e._renderTreeList(t.children, r + 1, l, s);
              } else e.treeList[e.treeList.length - 1].lastRank = !0;
            });
          },
          _treeItemTap: function _treeItemTap(t, i) {
            if (!0 === t.lastRank) return this.treeList[i].checked = !this.treeList[i].checked, this._fixMultiple(i), void console.log(e("1", " at components\\tki-tree\\tki-tree.vue:166"));
            var n = this.treeList,
                r = t.id;
            t.showChild = !t.showChild, n.forEach(function (e, i) {
              if (!1 === t.showChild) {
                if (!e.parentId.includes(r)) return;
                !0 !== e.lastRank && (e.showChild = !1), e.show = !1;
              } else e.parentId[e.parentId.length - 1] === r && (e.show = !0);
            });
          },
          _treeItemSelect: function _treeItemSelect(t, i) {
            console.log(e(this.treeList, " at components\\tki-tree\\tki-tree.vue:194")), this.treeList[i].checked = !this.treeList[i].checked, console.log(e(this.treeList.slice(1, 4).length, " at components\\tki-tree\\tki-tree.vue:197"));
            var n = [],
                r = [];
            if (console.log(e(this.treeList[1].id.indexof(), " at components\\tki-tree\\tki-tree.vue:201")), console.log(e(n, " at components\\tki-tree\\tki-tree.vue:219")), console.log(e(r, " at components\\tki-tree\\tki-tree.vue:220")), 0 == i) for (var o = 1; o <= this.treeList.slice(1, 5).length; o++) {
              this.treeList[o].checked = !0;
            }

            for (var c = 1; c <= this.treeList.slice(1, 5).length; c++) {
              0 == this.treeList[c].checked && (this.treeList[0].checked = !1);
            }

            console.log(e(i, " at components\\tki-tree\\tki-tree.vue:243"));
          },
          _fixMultiple: function _fixMultiple(e) {
            var t = this;
            this.multiple || this.treeList.forEach(function (i, n) {
              n != e && (t.treeList[n].checked = !1);
            });
          },
          _reTreeList: function _reTreeList() {
            var e = this;
            this.treeList.forEach(function (t, i) {
              e.treeList[i].checked = !1;
            });
          }
        },
        watch: {
          range: function range(e) {
            this._renderTreeList(e);
          },
          multiple: function multiple() {
            this.range.length && this._reTreeList();
          },
          selectParent: function selectParent() {
            this.range.length && this._reTreeList();
          }
        },
        mounted: function mounted() {}
      };
      t.default = l;
    }).call(this, i("0de9")["default"]);
  },
  "866b": function b(e, t, i) {},
  dfd5: function dfd5(e, t, i) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    i.d(t, "a", function () {
      return n;
    }), i.d(t, "b", function () {
      return r;
    });
  },
  e3f4: function e3f4(e, t, i) {
    "use strict";

    var n = i("866b"),
        r = i.n(n);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/tki-tree/tki-tree-create-component', {
  'components/tki-tree/tki-tree-create-component': function componentsTkiTreeTkiTreeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3c2c"));
  }
}, [['components/tki-tree/tki-tree-create-component']]]);
});
require('components/tki-tree/tki-tree.js');
__wxRoute = 'components/yang-paging/fy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/yang-paging/fy.js';

define('components/yang-paging/fy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/yang-paging/fy"], {
  "0eb2": function eb2(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("1d30"),
        o = t.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(r);
    }

    n["default"] = o.a;
  },
  "1d30": function d30(e, n, t) {
    "use strict";

    (function (e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var t = {
        name: "paging",
        props: {
          total: {
            type: Number,
            default: 0
          },
          pageSize: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            page: [],
            current: 1,
            zpage: 0
          };
        },
        created: function created() {
          var n = this,
              t = parseInt(n.total),
              a = parseInt(n.pageSize),
              o = parseInt(t / a);
          t / a > o && o++, n.zpage = o;
          var r = [];
          if (o < 5) for (var u = 1; u <= o; u++) {
            r.push(u);
          } else r = [1, 2, 3, 4, 5];
          n.page = r, console.log(e(n.page + "1111111111111111111", " at components\\yang-paging\\fy.vue:58"));
        },
        methods: {
          qy: function qy(n) {
            console.log(e(n, " at components\\yang-paging\\fy.vue:62"));
            var t = this;
            t.current = n;
            var a = parseInt(t.total),
                o = parseInt(t.pageSize),
                r = parseInt(a / o);
            a / o > r && r++;
            var u = [];
            if (!(r < 5)) return n >= r - 2 ? (u = [r - 4, r - 3, r - 2, r - 1, r], t.page = u, void console.log(e(t.page + "2222222222222", " at components\\yang-paging\\fy.vue:78"))) : r > 5 && n < 4 ? (u = [1, 2, 3, 4, 5], t.page = u, void console.log(e(t.page + "333333333333", " at components\\yang-paging\\fy.vue:84"))) : r > 5 && n > 3 ? (u = [n - 2, n - 1, n, n + 1, n + 2], t.page = u, void console.log(e(t.page + "444444444444444444", " at components\\yang-paging\\fy.vue:90"))) : void 0;
          }
        },
        onLoad: function onLoad() {}
      };
      n.default = t;
    }).call(this, t("0de9")["default"]);
  },
  "3bcd": function bcd(e, n, t) {
    "use strict";

    var a = function a() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        o = [];

    t.d(n, "a", function () {
      return a;
    }), t.d(n, "b", function () {
      return o;
    });
  },
  "5b6b": function b6b(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("3bcd"),
        o = t("0eb2");

    for (var r in o) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return o[e];
        });
      }(r);
    }

    t("8d3e");
    var u = t("2877"),
        i = Object(u["a"])(o["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  6094: function _(e, n, t) {},
  "8d3e": function d3e(e, n, t) {
    "use strict";

    var a = t("6094"),
        o = t.n(a);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/yang-paging/fy-create-component', {
  'components/yang-paging/fy-create-component': function componentsYangPagingFyCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5b6b"));
  }
}, [['components/yang-paging/fy-create-component']]]);
});
require('components/yang-paging/fy.js');

__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"63fe":function(n,e,a){"use strict";a.r(e);var t=a("f363"),i=a("8c0d");for(var o in i)"default"!==o&&function(n){a.d(e,n,function(){return i[n]})}(o);var r=a("2877"),c=Object(r["a"])(i["default"],t["a"],t["b"],!1,null,null,null);e["default"]=c.exports},"7ea7":function(n,e,a){"use strict";(function(n){a("f263"),a("921b");t(a("66fd"));var e=t(a("63fe"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("6e42")["createPage"])},"8c0d":function(n,e,a){"use strict";a.r(e);var t=a("dea3"),i=a.n(t);for(var o in t)"default"!==o&&function(n){a.d(e,n,function(){return t[n]})}(o);e["default"]=i.a},dea3:function(n,e,a){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("1ce9"),o=a("5320"),r=a("2f62");c(a("7fc1"));function c(n){return n&&n.__esModule?n:{default:n}}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.forEach(function(e){u(n,e,a[e])})}return n}function u(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var l={data:function(){return{amapPlugin:null,key:"1ba03b51d8cfe5690c97972ebc3a9cd1",addressName:"",weather:{hasData:!1,data:[]},gridCol:3,gridBorder:!1,loadModal:!1,Obtainposition:[],Obtainposition1:"",cuIconList:[{url:"../../static/img/zhu_03.png",cuIcon:"deliver",color:"red",badge:0,name:"配送",path:"/pages/deliver/deliver",permission:["admin","app:manage:delivery"],hidden:!0},{url:"../../static/img/zhu_05.png",cuIcon:"goodsnew",color:"orange",badge:0,name:"采购",path:"/pages/purchase/purchase",permission:["admin","app:manage:purchase"],hidden:!0},{url:"../../static/img/zhu_10.png",cuIcon:"squarecheck",color:"yellow",badge:0,name:"收货",path:"/pages/inspect/inspect",permission:["admin","app:manage:inspect"],hidden:!0},{url:"../../static/img/zhu_12.png",cuIcon:"edit",color:"yellow",badge:0,name:"销售单",path:"/pages/sales/sales",permission:["admin","app:manage:sales"],hidden:!0},{url:"../../static/img/background.jpg",cuIcon:"squarecheck",color:"yellow",badge:0,name:"报表",path:"/pages/report/report",permission:["admin","app:manage:inspect"],hidden:!0}]}},computed:(0,r.mapState)(["hasLogin","userInfo","permissionList","isLoading","userToken"]),watch:{hasLogin:function(n,e){!0===n&&(this.loadModal=!1)},isLoading:function(n,e){!1===n&&this.loadData()}},onLoad:function(){this.hasLogin?(this.loadData(),console.log(n("3"," at pages\\main\\main.vue:124"))):(this.isLoading?(this.loadModal=!0,console.log(n("2"," at pages\\main\\main.vue:132"))):this.backToLogin(),console.log(n("1"," at pages\\main\\main.vue:134"))),console.log(n(this.userInfo," at pages\\main\\main.vue:136")),console.log(n(this.userToken," at pages\\main\\main.vue:137")),this.obtainposition()},onShow:function(n){this.loadData()},methods:s({},(0,r.mapMutations)(["logout"]),{loadData:function(){var e=this,a=this.permissionList;this.cuIconList.forEach(function(t){e.hasPermission(a,t.permission)&&(t.hidden=!1,"deliver"===t.cuIcon&&(console.log(n(t," at pages\\main\\main.vue:155")),e.getPendingDeliveryOrderCount(t)),"goodsnew"===t.cuIcon&&e.getPendingPriceOrderCount(t),"edit"===t.cuIcon&&e.getPendingSalesOrderCount(t))})},backToLogin:function(){t.reLaunch({url:"../login/login"})},handleTap:function(e){console.log(n(e," at pages\\main\\main.vue:173")),t.navigateTo({url:e})},getPendingDeliveryOrderCount:function(e){(0,i.countPendingDelivery)().then(function(n){e.badge=n.data}).catch(function(e){console.log(n("error!",e," at pages\\main\\main.vue:182"))})},getPendingPriceOrderCount:function(e){(0,o.countPendingPriceOrder)().then(function(n){e.badge=n.data}).catch(function(e){console.log(n("error!",e," at pages\\main\\main.vue:189"))})},getPendingSalesOrderCount:function(e){(0,o.countPendingSalesOrder)().then(function(n){e.badge=n.data}).catch(function(e){console.log(n("error!",e," at pages\\main\\main.vue:196"))})},hasPermission:function(n,e){return n.some(function(n){return e.includes(n)})},obtainposition:function(){for(var n=0;n<this.cuIconList.length;n++)this.Obtainposition.push(this.cuIconList[n].name),this.Obtainposition1=this.Obtainposition.join("/")}})};e.default=l}).call(this,a("0de9")["default"],a("6e42")["default"])},f363:function(n,e,a){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},i=[];a.d(e,"a",function(){return t}),a.d(e,"b",function(){return i})}},[["7ea7","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"27f9":function(n,t,o){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},e=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return e})},2895:function(n,t,o){},"59c6":function(n,t,o){"use strict";o.r(t);var i=o("87ea"),e=o.n(i);for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);t["default"]=e.a},"87ea":function(n,t,o){"use strict";(function(n,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o("0fa4"),a=o("4f1f"),s=o("2f62");function r(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),i.forEach(function(t){c(n,t,o[t])})}return n}function c(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var u={data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0,askLoginCode:!0,counter:60,platform:"manage_wx_app"}},computed:(0,s.mapState)(["forcedLogin","userToken"]),methods:r({initProvider:function(){var t=this,o=["weixin"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var i=0;i<n.provider.length;i++)~o.indexOf(n.provider[i])&&t.providerList.push({value:n.provider[i],image:"../../static/img/"+n.provider[i]+".png"});t.hasProvider=!0}},fail:function(n){console.error(i("获取服务供应商失败："+JSON.stringify(n)," at pages\\login\\login.vue:78"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},isHidePasswordClick:function(){this.isHidePassword=!this.isHidePassword},handleLoginCode:function(){var t=this;(0,a.checkPhone)(this.account)&&(0,e.getLoginCode)(this.account).then(function(o){n.showToast({title:"验证码已发送",icon:"success",mask:!0}),t.askLoginCode=!1,t.timedown()}).catch(function(t){var o=t.msg;n.showToast({title:o,mask:!0,icon:"none"})})},bindLogin:function(){var t=this;(0,a.checkPhone)(this.account)&&(0,a.checkPwd)(this.password)&&(0,e.doLogin)({username:this.account,password:this.password}).then(function(o){t.loading=!1,console.log(i("request success",o," at pages\\login\\login.vue:125")),n.showToast({title:"请求成功",icon:"success",mask:!0}),t.login(o.data),(0,e.getUserInfo)().then(function(n){t.info(n.data),t.toMain()})}).catch(function(o){t.loading=!1;var e=o.msg;n.showToast({title:e,mask:!0,icon:"none"}),console.log(i("request fail",o," at pages\\login\\login.vue:144"))})},oauth:function(t){var o=this;n.login({provider:t,success:function(t){console.log(i(t," at pages\\login\\login.vue:151")),(0,e.doLoginWithWechat)({username:t.code,platform:o.platform}).then(function(t){10001999===t.code?o.toBind(t.data):(n.showToast({title:"请求成功",icon:"success",mask:!0}),o.login(t.data),(0,e.getUserInfo)().then(function(n){o.info(n.data),o.toMain()}))}).catch(function(t){if(10001999===t.code)o.toBind(t.data);else{var i=t.msg;n.showToast({title:i,mask:!0,icon:"none"})}})},fail:function(n){console.error(i("授权登录失败："+JSON.stringify(n)," at pages\\login\\login.vue:181"))}})},toMain:function(){this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()},toBind:function(t){n.navigateTo({url:"../bind/bind?openId="+t})},timedown:function(){var n=this;this.counter>0?(this.counter=this.counter-1,setTimeout(function(){n.timedown()},1e3)):(this.askLoginCode=!0,this.counter=60)}},(0,s.mapMutations)(["login","info"])),onReady:function(){this.initPosition(),this.initProvider()}};t.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},"8d4f":function(n,t,o){"use strict";o.r(t);var i=o("27f9"),e=o("59c6");for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);o("8d8e");var s=o("2877"),r=Object(s["a"])(e["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},"8d8e":function(n,t,o){"use strict";var i=o("2895"),e=o.n(i);e.a},f524:function(n,t,o){"use strict";(function(n){o("f263"),o("921b");i(o("66fd"));var t=i(o("8d4f"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("6e42")["createPage"])}},[["f524","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/bind/bind';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bind/bind.js';

define('pages/bind/bind.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bind/bind"],{"8ca6":function(n,t,o){"use strict";o.r(t);var e=o("ed37"),i=o("fc28");for(var a in i)"default"!==a&&function(n){o.d(t,n,function(){return i[n]})}(a);o("d05e");var c=o("2877"),s=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=s.exports},a774:function(n,t,o){"use strict";(function(n){o("f263"),o("921b");e(o("66fd"));var t=e(o("8ca6"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("6e42")["createPage"])},b212:function(n,t,o){"use strict";(function(n,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o("0fa4"),a=o("4f1f"),c=o("2f62");function s(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),e.forEach(function(t){u(n,t,o[t])})}return n}function u(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var r={data:function(){return{name:"",account:"",password:"",openId:"",positionTop:0,askLoginCode:!0,counter:60,platform:"manage_wx_app"}},onLoad:function(t){console.log(n(t," at pages\\bind\\bind.vue:52")),this.openId=t.openId},onReady:function(){this.initPosition()},methods:s({initPosition:function(){this.positionTop=e.getSystemInfoSync().windowHeight-100},isHidePasswordClick:function(){this.isHidePassword=!this.isHidePassword},handleLoginCode:function(){var n=this;(0,a.checkPhone)(this.account)&&(0,i.getLoginCode)(this.account).then(function(t){e.showToast({title:"验证码已发送",icon:"success",mask:!0}),n.askLoginCode=!1,n.timedown()}).catch(function(n){var t=n.msg;e.showToast({title:t,mask:!0,icon:"none"})})},bindUser:function(){var t=this;(0,a.checkPhone)(this.account)&&(0,a.checkPwd)(this.password)&&(0,i.doLogin)({username:this.account,password:this.password,openId:this.openId,platform:this.platform}).then(function(o){t.loading=!1,console.log(n("request success",o," at pages\\bind\\bind.vue:103")),e.showToast({title:"请求成功",icon:"success",mask:!0}),t.login(o.data),(0,i.getUserInfo)().then(function(n){t.info(n.data),t.toMain()})}).catch(function(o){t.loading=!1;var i=o.msg;e.showToast({title:i,mask:!0,icon:"none"}),console.log(n("request fail",o," at pages\\bind\\bind.vue:123"))})},timedown:function(){var n=this;this.counter>0?(this.counter=this.counter-1,setTimeout(function(){n.timedown()},1e3)):(this.askLoginCode=!0,this.counter=60)},toMain:function(){e.reLaunch({url:"../main/main"})}},(0,c.mapMutations)(["login","info"]))};t.default=r}).call(this,o("0de9")["default"],o("6e42")["default"])},d05e:function(n,t,o){"use strict";var e=o("fc77"),i=o.n(e);i.a},ed37:function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},i=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i})},fc28:function(n,t,o){"use strict";o.r(t);var e=o("b212"),i=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=i.a},fc77:function(n,t,o){}},[["a774","common/runtime","common/vendor"]]]);
});
require('pages/bind/bind.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{3562:function(t,n,e){"use strict";e.r(n);var o=e("7ae8"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},3667:function(t,n,e){"use strict";e.r(n);var o=e("f890"),r=e("3562");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},"7ae8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={computed:r({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:r({},(0,o.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})};n.default=a}).call(this,e("6e42")["default"])},"84a6":function(t,n,e){"use strict";(function(t){e("f263"),e("921b");o(e("66fd"));var n=o(e("3667"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f890:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})}},[["84a6","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/deliver/deliver';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/deliver/deliver.js';

define('pages/deliver/deliver.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/deliver/deliver"],{"30f6":function(e,t,r){"use strict";(function(e){r("f263"),r("921b");i(r("66fd"));var t=i(r("702d"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},4114:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=(e._self._c,e.__map(e.list,function(t,r){var i=e._f("parseTime")(t.deliverDate,"{m}-{d}"),n=e.__map(t.list,function(t,r){var i=e._f("parseTime")(t.deliveryTime,"{a}"),n=e._f("parseTime")(t.deliveryTime,"{h}:{i}"),a=e._f("statusNameFilter")(t.status);return{$orig:e.__get_orig(t),f1:i,f2:n,f3:a}});return{$orig:e.__get_orig(t),f0:i,l0:n}}));e.$mp.data=Object.assign({},{$root:{l1:r}})},n=[];r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n})},6378:function(e,t,r){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("1ce9"),a=r("a627");function o(e){return u(e)||s(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var f={filters:{statusNameFilter:function(e){var t={0:"未装车",15:"配送中",20:"完成"};return t[e]||"未装车"},statusClassFilter:function(e){var t={0:"bg-orange",15:"bg-green",20:"bg-grey"};return t[e]||"bg-orange"}},data:function(){return{listQuery:{pageNo:1,pageSize:5},list:[],loadOver:!1}},onLoad:function(e){this.getList(!1)},onShow:function(t){var r=e.getStorageSync("up_delivery_order");r&&(this.list.forEach(function(e){if(e.list){var t=e.list.find(function(e){return e.deliveryOrderId===r.deliveryOrderId});t&&(t.status=r.status)}}),e.removeStorageSync("up_delivery_order"))},onPullDownRefresh:function(){this.listQuery.pageNo=1,this.loadOver=!1,console.log(i("下拉加载成功"," at pages\\deliver\\deliver.vue:97")),this.getList(!1,function(){return setTimeout(function(){e.stopPullDownRefresh()},1e3)})},onReachBottom:function(){console.log(i("no:"+this.listQuery.pageNo," at pages\\deliver\\deliver.vue:103")),this.loadOver||(this.listQuery.pageNo=this.listQuery.pageNo+1,this.getList(!0))},methods:{getList:function(e,t){var r=this;(0,n.fetchPendingDelivery)(this.listQuery).then(function(n){console.log(i(n," at pages\\deliver\\deliver.vue:112"));var a=o(n.data.list||[]);a.length<=0?r.loadOver=!0:r.loadOver=!1,r.setData(a,e),t&&t()}).catch(function(e){console.log(i("error!",e," at pages\\deliver\\deliver.vue:125"))})},setData:function(e,t){var r=this;t||(this.list=[]),e.forEach(function(e,t){for(var i=(0,a.parseTime)(e.deliveryTime,"{y}-{m}-{d}"),n=!1,o=0;o<r.list.length;o++)r.list[o].deliverDate===i&&(r.list[o].list.push(e),n=!0);n||r.list.push({deliverDate:i,list:[e]})})},handleTap:function(t){e.navigateTo({url:"/pages/deliveritem/deliveritem?orderId="+t})}}};t.default=f}).call(this,r("6e42")["default"],r("0de9")["default"])},"702d":function(e,t,r){"use strict";r.r(t);var i=r("4114"),n=r("75a1");for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);var o=r("2877"),l=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=l.exports},"75a1":function(e,t,r){"use strict";r.r(t);var i=r("6378"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);t["default"]=n.a}},[["30f6","common/runtime","common/vendor"]]]);
});
require('pages/deliver/deliver.js');
__wxRoute = 'pages/deliveritem/deliveritem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/deliveritem/deliveritem.js';

define('pages/deliveritem/deliveritem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/deliveritem/deliveritem"],{"108e":function(e,t,r){"use strict";r.r(t);var i=r("8ae1"),n=r("e6b3");for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a);r("674a");var o=r("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},6631:function(e,t,r){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("1ce9"),a=r("00bf");function o(e){return u(e)||l(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var d={data:function(){return{isCard:!1,listQuery:{pageNo:1,pageSize:20,deliveryOrderId:void 0},order:{deliveryOrderId:void 0,purchaseOrderId:"",receiverOrgName:""},size:10,sourceList:[],list:[]}},onLoad:function(t){console.log(e(t," at pages\\deliveritem\\deliveritem.vue:82")),this.listQuery.deliveryOrderId=t.orderId,this.getOrder()},onReachBottom:function(){this.loadData()},methods:{getOrder:function(){var t=this;(0,n.getDeliveryOrder)(this.listQuery).then(function(r){console.log(e(r," at pages\\deliveritem\\deliveritem.vue:92")),t.order=r.data,t.sourceList=r.data.deliveryOrderItemList,t.loadData()}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:97"))})},loadData:function(){if(this.list.length<this.sourceList.length){for(var t=this.list.length,r=0;t<this.sourceList.length&&r<this.size;t++,r++)this.list.push(this.sourceList[t]);console.log(e(this.list," at pages\\deliveritem\\deliveritem.vue:105"))}},getList:function(){var t=this;(0,n.fetchDeliveryItem)(this.listQuery).then(function(r){console.log(e(r," at pages\\deliveritem\\deliveritem.vue:110")),t.sourceList=o(r.data.list||[]),t.setData(orderList)}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:114"))})},handleTap:function(t){var r=0===t.status;(0,n.loadItem)({deliveryOrderItemId:t.deliveryOrderItemId,loaded:r,deliveryQty:t.deliveryQty}).then(function(e){var n=e.data;t.status=r?15:0,i.setStorageSync("up_delivery_order",{deliveryOrderId:n.deliveryOrderId,status:n.status}),i.showToast({title:"",icon:"success",mask:!1})}).catch(function(t){console.log(e("error!",t," at pages\\deliveritem\\deliveritem.vue:129"))})},handleSearch:function(e){var t=e.detail.value.toLowerCase();this.sourceList;this.list=this.sourceList.filter(function(e){return(0,a.pinyinMatch)(e.productName,t)})}}};t.default=d}).call(this,r("0de9")["default"],r("6e42")["default"])},"674a":function(e,t,r){"use strict";var i=r("8186"),n=r.n(i);n.a},8186:function(e,t,r){},"8ae1":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n})},ce38:function(e,t,r){"use strict";(function(e){r("f263"),r("921b");i(r("66fd"));var t=i(r("108e"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},e6b3:function(e,t,r){"use strict";r.r(t);var i=r("6631"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,function(){return i[e]})}(a);t["default"]=n.a}},[["ce38","common/runtime","common/vendor"]]]);
});
require('pages/deliveritem/deliveritem.js');
__wxRoute = 'pages/purchase/purchase';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purchase/purchase.js';

define('pages/purchase/purchase.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purchase/purchase"],{"7c5f":function(t,e,r){"use strict";r.r(e);var a=r("be25"),n=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"8b98":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.list,function(e,r){var a=t._f("parseTime")(e.deliverDate,"{m}-{d}"),n=t.__map(e.list,function(e,r){var a=t._f("parseTime")(e.deliveryTime,"{a}"),n=t._f("parseTime")(e.deliveryTime,"{h}:{i}"),s=t._f("statusNameFilter")(e.status),i=t._f("sellerOrgNameFilter")(e.sellerOrgName);return{$orig:t.__get_orig(e),f1:a,f2:n,f3:s,f4:i}});return{$orig:t.__get_orig(e),f0:a,l0:n}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},n=[];r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n})},aa9f:function(t,e,r){"use strict";(function(t){r("f263"),r("921b");a(r("66fd"));var e=a(r("af3b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},af3b:function(t,e,r){"use strict";r.r(e);var a=r("8b98"),n=r("7c5f");for(var s in n)"default"!==s&&function(t){r.d(e,t,function(){return n[t]})}(s);var i=r("2877"),o=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},be25:function(t,e,r){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("5320"),s=r("a627");function i(t){return l(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var c={filters:{statusNameFilter:function(t){var e={0:"采购中",5:"采购中",10:"备货完成",20:"已收货",30:"售后",40:"已完成"};return e[t]||"采购中"},statusClassFilter:function(t){var e={0:"bg-orange",5:"bg-orange",10:"bg-green",20:"bg-grey",30:"bg-grey",40:"bg-grey"};return e[t]||"bg-orange"},sellerOrgNameFilter:function(t){return t||"自采购"}},data:function(){return{listQuery:{pageNo:1,pageSize:5,sorts:"-deliveryTime"},list:[],loadOver:!1}},onLoad:function(t){this.getList(!1)},onShow:function(e){var r=this,a=t.getStorageSync("up_purchase_order");a&&(this.list.forEach(function(t){if(t.list){var e=t.list.find(function(t){return t.purchaseOrderId===a.purchaseOrderId});e&&(e.status=a.status,e.statusClassName=r.$options.filters["statusClassFilter"](e.status))}}),t.removeStorageSync("up_purchase_order"))},onPullDownRefresh:function(){this.listQuery.pageNo=1,this.loadOver=!1,this.getList(!1,function(){return setTimeout(function(){t.stopPullDownRefresh()},1e3)})},onReachBottom:function(){console.log(a("no:"+this.listQuery.pageNo," at pages\\purchase\\purchase.vue:113")),this.loadOver||(this.listQuery.pageNo=this.listQuery.pageNo+1,this.getList(!0))},methods:{getList:function(t,e){var r=this;(0,n.fetchOrder)(this.listQuery).then(function(a){var n=i(a.data.list||[]);n.length<=0?r.loadOver=!0:r.loadOver=!1,r.setData(n,t),e&&e()}).catch(function(t){console.log(a("error!",t," at pages\\purchase\\purchase.vue:135"))})},setData:function(t,e){var r=this;e||(this.list=[]),t.forEach(function(t,e){var a=(0,s.parseTime)(t.deliveryTime,"{y}-{m}-{d}"),n=r.$options.filters["statusClassFilter"](t.status);t.statusClassName=n;for(var i=!1,o=0;o<r.list.length;o++)r.list[o].deliverDate===a&&(r.list[o].list.push(t),i=!0);i||r.list.push({deliverDate:a,list:[t]})})},handleTap:function(e){console.log(a(e," at pages\\purchase\\purchase.vue:160")),t.navigateTo({url:"/pages/purchaseitem/purchaseitem?orderId="+e})}}};e.default=c}).call(this,r("6e42")["default"],r("0de9")["default"])}},[["aa9f","common/runtime","common/vendor"]]]);
});
require('pages/purchase/purchase.js');
__wxRoute = 'pages/purchaseitem/purchaseitem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purchaseitem/purchaseitem.js';

define('pages/purchaseitem/purchaseitem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purchaseitem/purchaseitem"],{"0bda":function(e,t,r){"use strict";r.r(t);var s=r("ded5"),a=r("30db");for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);r("a632");var u=r("2877"),n=Object(u["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=n.exports},"30db":function(e,t,r){"use strict";r.r(t);var s=r("32bb"),a=r.n(s);for(var i in s)"default"!==i&&function(e){r.d(t,e,function(){return s[e]})}(i);t["default"]=a.a},"32bb":function(e,t,r){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("5320"),i=r("00bf"),u={filters:{sellerOrgNameFilter:function(e){return e||"自采购"}},data:function(){return{isCard:!1,listQuery:{pageNo:1,pageSize:20,purchaseOrderId:void 0},order:{purchaseOrderId:void 0,sellerOrgName:void 0},itemPriceData:{purchaseOrderItemId:"",salesUnitPrice:0,orderQty:0},size:10,sourceList:[],list:[]}},onLoad:function(t){console.log(e(t," at pages\\purchaseitem\\purchaseitem.vue:93")),this.listQuery.purchaseOrderId=t.orderId,this.getOrder()},onReachBottom:function(){this.loadData()},methods:{getOrder:function(){var t=this;(0,a.getPurchaseOrder)(this.listQuery).then(function(r){console.log(e(r," at pages\\purchaseitem\\purchaseitem.vue:103")),t.order=r.data,t.sourceList=r.data.purchaseOrderItemList,t.loadData()}).catch(function(t){console.log(e("error!",t," at pages\\purchaseitem\\purchaseitem.vue:108"))})},loadData:function(){if(this.list.length<this.sourceList.length){for(var t=this.list.length,r=0;t<this.sourceList.length&&r<this.size;t++,r++)this.list.push(this.sourceList[t]);console.log(e(this.list," at pages\\purchaseitem\\purchaseitem.vue:116"))}},handleTap:function(t){console.log(e(t," at pages\\purchaseitem\\purchaseitem.vue:120")),(0,a.priceOrderItem)({purchaseOrderItemId:t.purchaseOrderItemId,salesUnitPrice:t.salesUnitPrice,orderQty:t.orderQty}).then(function(e){var r=e.data,a=r.purchaseOrderItemList[0];t.status=a.status,t.salesUnitPrice=a.salesUnitPrice,t.orderQty=a.orderQty,s.setStorageSync("up_purchase_order",{purchaseOrderId:r.purchaseOrderId,status:r.status}),s.showToast({title:"",icon:"success",mask:!1})}).catch(function(t){console.log(e("error!",t," at pages\\purchaseitem\\purchaseitem.vue:135"))})},handleSearch:function(e){var t=e.detail.value.toLowerCase();this.sourceList;this.list=this.sourceList.filter(function(e){return(0,i.pinyinMatch)(e.productName,t)})}}};t.default=u}).call(this,r("0de9")["default"],r("6e42")["default"])},"9e9e":function(e,t,r){},a632:function(e,t,r){"use strict";var s=r("9e9e"),a=r.n(s);a.a},ca59:function(e,t,r){"use strict";(function(e){r("f263"),r("921b");s(r("66fd"));var t=s(r("0bda"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},ded5:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("sellerOrgNameFilter")(e.order.sellerOrgName));e.$mp.data=Object.assign({},{$root:{f0:r}})},a=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return a})}},[["ca59","common/runtime","common/vendor"]]]);
});
require('pages/purchaseitem/purchaseitem.js');
__wxRoute = 'pages/inspect/inspect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/inspect/inspect.js';

define('pages/inspect/inspect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inspect/inspect"],{4170:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,function(e,n){var i=t._f("parseTime")(e.deliverDate,"{m}-{d}"),a=t.__map(e.list,function(e,n){var i=t._f("statusNameFilter")(e.status);return{$orig:t.__get_orig(e),f1:i}});return{$orig:t.__get_orig(e),f0:i,l0:a}}));t.$mp.data=Object.assign({},{$root:{l1:n}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"6df7":function(t,e,n){"use strict";n.r(e);var i=n("a799"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"8f64":function(t,e,n){"use strict";n.r(e);var i=n("4170"),a=n("6df7");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},a799:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("5320"),r=n("a627"),s={filters:{statusNameFilter:function(t){var e={0:"查看",10:"配送中",20:"完成"};return e[t]||"查看"},statusClassFilter:function(t){var e={0:"bg-orange",10:"bg-green",20:"bg-grey"};return e[t]||"bg-orange"}},data:function(){return{list:[],loadOver:!1,todayDate:new Date,firstDate:void 0,currentDate:void 0}},onLoad:function(t){this.getList(!1)},onShow:function(t){},onPullDownRefresh:function(){this.getList(!1,function(){return setTimeout(function(){t.stopPullDownRefresh()},1e3)})},onReachBottom:function(){this.getList(!0)},methods:{getList:function(t,e){var n=this;void 0===this.firstDate?(0,a.myFirstOrderDate)().then(function(a){a.data?(console.log(i(a.data," at pages\\inspect\\inspect.vue:92")),n.firstDate=(0,r.parseJavaTime)(a.data)):n.firstDate=new Date,n.setData(t),e&&e()}).catch(function(t){console.log(i("error!",t," at pages\\inspect\\inspect.vue:103"))}):this.setData(t)},setData:function(t){t||(this.list=[]),void 0===this.currentDate&&(this.currentDate=new Date,this.currentDate.setTime(this.currentDate.getTime()+864e5));var e=0;while(e<20&&this.currentDate>=this.firstDate){for(var n=this.currentDate,i=(0,r.parseTime)(n,"{y}-{m}-{d}"),a=(0,r.parseTime)(n,"{e}"),s={status:0,deliverDate:i,deliveryWeek:a},u=!1,o=0;o<this.list.length;o++)this.list[o].deliverDate===i&&(this.list[o].list.push(s),u=!0);u||this.list.push({deliverDate:i,list:[s]}),e++,this.currentDate.setTime(this.currentDate.getTime()-864e5)}},handleTap:function(e){console.log(i(e," at pages\\inspect\\inspect.vue:144")),t.navigateTo({url:"/pages/inspectitem/inspectitem?date="+e})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},af1c:function(t,e,n){"use strict";(function(t){n("f263"),n("921b");i(n("66fd"));var e=i(n("8f64"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["af1c","common/runtime","common/vendor"]]]);
});
require('pages/inspect/inspect.js');
__wxRoute = 'pages/inspectitem/inspectitem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/inspectitem/inspectitem.js';

define('pages/inspectitem/inspectitem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/inspectitem/inspectitem"],{"2f7a":function(e,t,i){},"5ceb":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__map(e.list,function(t,i){var r=e.__map(t.itemList,function(t,i){var r=e._f("sellerOrgNameFilter")(t.sellerOrgName);return{$orig:e.__get_orig(t),f0:r}});return{$orig:e.__get_orig(t),l0:r}}));e.$mp.data=Object.assign({},{$root:{l1:i}})},n=[];i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n})},"6ac8":function(e,t,i){"use strict";i.r(t);var r=i("5ceb"),n=i("ad4c");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("9b9d");var s=i("2877"),c=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},"6f6e":function(e,t,i){"use strict";(function(e){i("f263"),i("921b");r(i("66fd"));var t=r(i("6ac8"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},9406:function(e,t,i){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("5320"),a=i("00bf"),s=(i("a627"),i("6660")),c={filters:{sellerOrgNameFilter:function(e){return e||"自采购"}},data:function(){return{isCard:!1,listQuery:{pageNo:1,pageSize:2e4,deliveryDate:void 0},order:{deliveryDate:void 0},itemReceiveData:{warehouseId:void 0,purchaseOrderItemId:"",receivedQty:0},size:10,sourceList:[],list:[]}},onLoad:function(t){console.log(e(t," at pages\\inspectitem\\inspectitem.vue:103")),this.listQuery.deliveryDate=t.date,this.order={deliveryDate:t.date},this.getOrder()},onReachBottom:function(){this.loadData()},methods:{getOrder:function(){var t=this;(0,n.fetchCollectReceiveItemByBuyer)(this.listQuery).then(function(i){console.log(e(i," at pages\\inspectitem\\inspectitem.vue:114")),t.sourceList=i.data,t.setDefaultData(),t.loadData()}).catch(function(t){console.log(e("error!",t," at pages\\inspectitem\\inspectitem.vue:119")),(0,s.msgError)(t.msg)})},setDefaultData:function(){this.sourceList.forEach(function(e){e.itemList&&e.itemList.forEach(function(e){0===e.receivedQty&&(e.receivedQty=e.orderQty)})})},loadData:function(){if(this.list.length<this.sourceList.length)for(var e=this.list.length,t=0;e<this.sourceList.length&&t<this.size;e++,t++)this.list.push(this.sourceList[e])},handleTap:function(t){null!==t.receivedQty&&void 0!==t.receivedQty&&""!==t.receivedQty||(t.receivedQty=t.orderQty),(0,n.receiveOrderItem)({purchaseOrderItemId:t.purchaseOrderItemId,receivedQty:t.receivedQty}).then(function(i){var n=i.data,a=n.purchaseOrderItemList[0];t.status=a.status,t.receivedQty=a.receivedQty,r.showToast({title:"",icon:"success",mask:!1}),console.log(e(r.getStorageSync("up_inspect_order")," at pages\\inspectitem\\inspectitem.vue:164"))}).catch(function(t){console.log(e("error!",t," at pages\\inspectitem\\inspectitem.vue:166")),(0,s.msgError)(t.msg)})},handleSearch:function(e){var t=e.detail.value.toLowerCase();this.sourceList;this.list=this.sourceList.filter(function(e){return(0,a.pinyinMatch)(e.productName,t)})}}};t.default=c}).call(this,i("0de9")["default"],i("6e42")["default"])},"9b9d":function(e,t,i){"use strict";var r=i("2f7a"),n=i.n(r);n.a},ad4c:function(e,t,i){"use strict";i.r(t);var r=i("9406"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);t["default"]=n.a}},[["6f6e","common/runtime","common/vendor"]]]);
});
require('pages/inspectitem/inspectitem.js');
__wxRoute = 'pages/sales/sales';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sales/sales.js';

define('pages/sales/sales.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sales/sales"],{"3b2c":function(t,e,r){"use strict";r.r(e);var s=r("b349"),a=r("f56f");for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var i=r("2877"),o=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},4197:function(t,e,r){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r("5320"),n=r("a627");function i(t){return l(t)||u(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var f={filters:{statusNameFilter:function(t){var e={0:"已下单",5:"已接单",10:"配送中",20:"已收货",30:"售后",40:"已完成"};return e[t]||"采购中"},statusClassFilter:function(t){var e={0:"bg-orange",5:"bg-green",10:"bg-green",20:"bg-grey",30:"bg-grey",40:"bg-grey"};return e[t]||"bg-grey"},buyerOrgNameFilter:function(t){return t||"无"}},data:function(){return{listQuery:{pageNo:1,pageSize:5,sorts:"-deliveryTime"},list:[],loadOver:!1}},onLoad:function(t){this.getList(!1)},onShow:function(e){var r=this,s=t.getStorageSync("up_sales_order");s&&(this.list.forEach(function(t){if(t.list){var e=t.list.find(function(t){return t.purchaseOrderId===s.purchaseOrderId});e&&(e.status=s.status,e.statusClassName=r.$options.filters["statusClassFilter"](e.status))}}),t.removeStorageSync("up_sales_order"))},onPullDownRefresh:function(){this.listQuery.pageNo=1,this.loadOver=!1,this.getList(!1,function(){return setTimeout(function(){t.stopPullDownRefresh()},1e3)})},onReachBottom:function(){console.log(s("no:"+this.listQuery.pageNo," at pages\\sales\\sales.vue:113")),this.loadOver||(this.listQuery.pageNo=this.listQuery.pageNo+1,this.getList(!0))},methods:{getList:function(t,e){var r=this;(0,a.fetchSalesOrder)(this.listQuery).then(function(s){var a=i(s.data.list||[]);a.length<=0?r.loadOver=!0:r.loadOver=!1,r.setData(a,t),e&&e()}).catch(function(t){console.log(s("error!",t," at pages\\sales\\sales.vue:135"))})},setData:function(t,e){var r=this;e||(this.list=[]),t.forEach(function(t,e){var s=(0,n.parseTime)(t.deliveryTime,"{y}-{m}-{d}"),a=r.$options.filters["statusClassFilter"](t.status);t.statusClassName=a;for(var i=!1,o=0;o<r.list.length;o++)r.list[o].deliverDate===s&&(r.list[o].list.push(t),i=!0);i||r.list.push({deliverDate:s,list:[t]})})},handleTap:function(e){t.navigateTo({url:"/pages/salesitem/salesitem?orderId="+e})}}};e.default=f}).call(this,r("6e42")["default"],r("0de9")["default"])},b349:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.list,function(e,r){var s=t._f("parseTime")(e.deliverDate,"{m}-{d}"),a=t.__map(e.list,function(e,r){var s=t._f("parseTime")(e.deliveryTime,"{a}"),a=t._f("parseTime")(e.deliveryTime,"{h}:{i}"),n=t._f("statusNameFilter")(e.status),i=t._f("buyerOrgNameFilter")(e.buyerOrgName);return{$orig:t.__get_orig(e),f1:s,f2:a,f3:n,f4:i}});return{$orig:t.__get_orig(e),f0:s,l0:a}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},a=[];r.d(e,"a",function(){return s}),r.d(e,"b",function(){return a})},eb9b:function(t,e,r){"use strict";(function(t){r("f263"),r("921b");s(r("66fd"));var e=s(r("3b2c"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},f56f:function(t,e,r){"use strict";r.r(e);var s=r("4197"),a=r.n(s);for(var n in s)"default"!==n&&function(t){r.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["eb9b","common/runtime","common/vendor"]]]);
});
require('pages/sales/sales.js');
__wxRoute = 'pages/salesitem/salesitem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/salesitem/salesitem.js';

define('pages/salesitem/salesitem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/salesitem/salesitem"],{"4a5c":function(e,t,r){},"795a":function(e,t,r){"use strict";r.r(t);var s=r("b3cd"),a=r("c676");for(var i in a)"default"!==i&&function(e){r.d(t,e,function(){return a[e]})}(i);r("9715");var n=r("2877"),o=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);t["default"]=o.exports},9715:function(e,t,r){"use strict";var s=r("4a5c"),a=r.n(s);a.a},a1e5:function(e,t,r){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("5320"),i=r("00bf"),n={filters:{statusNameFilter:function(e){var t={0:"接单"};return t[e]||"已接单"},statusClassFilter:function(e){var t={0:"bg-blue"};return t[e]||"bg-grey"},buyerOrgNameFilter:function(e){return e||"无"}},data:function(){return{isCard:!1,listQuery:{pageNo:1,pageSize:20,purchaseOrderId:void 0},order:{purchaseOrderId:void 0,sellerOrgName:void 0},itemPriceData:{purchaseOrderItemId:"",salesUnitPrice:0,orderQty:0},size:10,sourceList:[],list:[]}},onLoad:function(e){this.listQuery.purchaseOrderId=e.orderId,this.getOrder()},onReachBottom:function(){this.loadData()},methods:{getOrder:function(){var t=this;(0,a.getPurchaseOrder)(this.listQuery).then(function(r){console.log(e(r," at pages\\salesitem\\salesitem.vue:109")),t.order=r.data,t.order.statusClassName=t.$options.filters["statusClassFilter"](t.order.status),t.sourceList=r.data.purchaseOrderItemList,t.loadData()}).catch(function(t){console.log(e("error!",t," at pages\\salesitem\\salesitem.vue:115"))})},loadData:function(){if(this.list.length<this.sourceList.length){for(var t=this.list.length,r=0;t<this.sourceList.length&&r<this.size;t++,r++)this.list.push(this.sourceList[t]);console.log(e(this.list," at pages\\salesitem\\salesitem.vue:123"))}},handleConfirmOrder:function(){var t=this;(0,a.checkinSingleSalesOrder)(this.order.purchaseOrderId).then(function(e){var r=e.data;r&&(t.order.statusClassName=t.$options.filters["statusClassFilter"](5),t.order.status=5,s.setStorageSync("up_sales_order",{purchaseOrderId:t.order.purchaseOrderId,status:5}),s.showToast({title:"",icon:"success",mask:!1}))}).catch(function(t){console.log(e("error!",t," at pages\\salesitem\\salesitem.vue:140"))})},handleSearch:function(e){var t=e.detail.value.toLowerCase();this.sourceList;this.list=this.sourceList.filter(function(e){return(0,i.pinyinMatch)(e.productName,t)})}}};t.default=n}).call(this,r("0de9")["default"],r("6e42")["default"])},ac30:function(e,t,r){"use strict";(function(e){r("f263"),r("921b");s(r("66fd"));var t=s(r("795a"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},b3cd:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=(e._self._c,e._f("buyerOrgNameFilter")(e.order.buyerOrgName)),s=e._f("statusNameFilter")(e.order.status);e.$mp.data=Object.assign({},{$root:{f0:r,f1:s}})},a=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return a})},c676:function(e,t,r){"use strict";r.r(t);var s=r("a1e5"),a=r.n(s);for(var i in s)"default"!==i&&function(e){r.d(t,e,function(){return s[e]})}(i);t["default"]=a.a}},[["ac30","common/runtime","common/vendor"]]]);
});
require('pages/salesitem/salesitem.js');
__wxRoute = 'pages/report/report';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/report/report.js';

define('pages/report/report.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{4789:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a("2f62"),r=a("9673"),s=a("39ac"),u={data:function(){return{salemoney:"1000",saleProfit:"10000",SalesAnalysis:"销售额分析",Grossprofitanalysis:"毛利分析",systemDate:""}},computed:(0,o.mapState)(["userInfo","userToken"]),onLoad:function(){this.addDate(),this.yesterdaySales(),console.log(e(this.userInfo," at pages\\report\\report.vue:35")),console.log(e(this.userToken," at pages\\report\\report.vue:36"))},methods:{jump:function(){n.navigateTo({url:"../salesanalysis/salesanalysis?id=销量走势&name=销售额分析"})},jump1:function(){n.navigateTo({url:"../grossprofitanalysis/grossprofitanalysis?name=毛利分析"})},yesterdaySales:function(){var t=this;(0,s.LoadYesterdaySalesData)({"access-token":this.userToken,beginDate:this.systemDate,searchType:2}).then(function(a){console.log(e(a.data," at pages\\report\\report.vue:56"));var n=a.data;t.saleProfit="",t.salemoney="";for(var o=0,r=0,s=0;s<n.length;s++)o+=Number(n[s].grossProfitPrice),r+=Number(n[s].totalSalesPrice);t.saleProfit=o,t.salemoney=r}).catch(function(t){console.log(e("error!",t," at pages\\report\\report.vue:70"))})},addDate:function(){var t=new Date;this.systemDate=(0,r.parseTime)(t,"{y}-{m}-{d}"),console.log(e(this.systemDate," at pages\\report\\report.vue:76"))}}};t.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},"6a3a":function(e,t,a){"use strict";a.r(t);var n=a("efb5"),o=a("9658");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("aee3");var s=a("2877"),u=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},"6a5f":function(e,t,a){},9658:function(e,t,a){"use strict";a.r(t);var n=a("4789"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},aee3:function(e,t,a){"use strict";var n=a("6a5f"),o=a.n(n);o.a},efb5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},f9e2:function(e,t,a){"use strict";(function(e){a("f263"),a("921b");n(a("66fd"));var t=n(a("6a3a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f9e2","common/runtime","common/vendor"]]]);
});
require('pages/report/report.js');
__wxRoute = 'pages/salesanalysis/salesanalysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/salesanalysis/salesanalysis.js';

define('pages/salesanalysis/salesanalysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/salesanalysis/salesanalysis"],{"0917":function(a,s,e){"use strict";var t=e("aee7"),n=e.n(t);n.a},"2a59":function(a,s,e){"use strict";var t=function(){var a=this,s=a.$createElement;a._self._c},n=[];e.d(s,"a",function(){return t}),e.d(s,"b",function(){return n})},"87b3":function(a,s,e){"use strict";(function(a){e("f263"),e("921b");t(e("66fd"));var s=t(e("c061"));function t(a){return a&&a.__esModule?a:{default:a}}a(s.default)}).call(this,e("6e42")["createPage"])},aee7:function(a,s,e){},c061:function(a,s,e){"use strict";e.r(s);var t=e("2a59"),n=e("ed97");for(var l in n)"default"!==l&&function(a){e.d(s,a,function(){return n[a]})}(l);e("0917");var i=e("2877"),o=Object(i["a"])(n["default"],t["a"],t["b"],!1,null,null,null);s["default"]=o.exports},c864:function(a,s,e){"use strict";(function(a,t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("2f62"),l=u(e("de9a")),i=e("a627"),o=e("9357"),r=e("39ac");function u(a){return a&&a.__esModule?a:{default:a}}var c,d=function(){return e.e("components/cmd-icon/cmd-icon").then(e.bind(null,"6604"))},h=function(){return e.e("components/tki-tree/tki-tree").then(e.bind(null,"3c2c"))},g=function(){return e.e("components/yang-paging/fy").then(e.bind(null,"5b6b"))},p=function(){return Promise.all([e.e("common/vendor"),e.e("components/date-picker/date-picker2")]).then(e.bind(null,"5303"))},y=null,v={components:{calendar:p,paging:g,tkiTree:h,cmdIcon:d},data:function(){return{total:[1],pageSize:5,page:[],current:1,zpage:0,testList:[{id:2,name:"客户",children:[]},{id:3,name:"产品",children:[]}],list:[],multiple:!0,selectParent:!0,beginDate:"2019-05-06",endDate:"2019-05-07",showCaledar:!1,dateStr:"",daysCount:366,singleDate:!0,res1:[],e:"",tableData:{},PsearchData:[],SsearchData:[],SsearchData1:[],searchvalue:[],searchvalues:[],systemDate1:"",systemDate:"",arr10:["全部商品"],inputsArray:[{type:"picker-custom",itemArray:[],defaultValue:[0,0],onceShowDefaultValue:!0,steps:{steps_1_value:"name"}}],inputsArray1:[{border_top:"1px solid #f2f2f2",type:"picker-custom2",title:"",itemObject:{step_1:[],step_2:[]},steps:{step_1_value:"name",step_2_value:"",step_3_value:""},defaultValue:[1,0],onceShowDefaultValue:!0,linkageNum:2,linkage:!0}],cWidth:"",cHeight:"",pixelRatio:1,serverData:"",title:"销售分析",content:"1111"}},created:function(){this.productPage()},computed:(0,n.mapState)(["userInfo","userToken"]),onLoad:function(s){c=this,this.title=s.name,this.content=s.id,this.addDate(),this.addDate1(),this.onloadsalep(),a.getSystemInfo({success:function(a){a.pixelRatio>1&&(c.pixelRatio=2)}}),this.cWidth=a.upx2px(750),this.cHeight=a.upx2px(500),this.getServerData()},onBackPress:function(){if(!1!==this.showCaledar)return this.showCaledar=!1,!0},methods:{productPage:function(){var a=this,s=parseInt(a.total),e=parseInt(a.pageSize),t=parseInt(s/e);s/e>t&&t++,a.zpage=t;var n=[];if(t<5)for(var l=1;l<=t;l++)n.push(l);else n=[1,2,3,4,5];a.page=n},getServerData:function(){(0,r.FlipInstantaneousLoadingSalesData)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1}).then(function(a){console.log(t(a.data," at pages\\salesanalysis\\salesanalysis.vue:191")),c.serverData=a.data.data;for(var s={categories:[],series:[{name:"销售量",data:[]},{name:"毛利",data:[]}]},e=0;e<a.data.length;e++)s.categories.push(a.data[e].date.substring(8,10)),s.series[0].data.push(a.data[e].totalSalesPrice),s.series[1].data.push(a.data[e].grossProfitPrice);c.showColumn("canvasColumn",s)})},showColumn:function(a,s){y=new l.default({$this:c,canvasId:a,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",pixelRatio:c.pixelRatio,animation:!0,categories:s.categories,series:s.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:c.cWidth*c.pixelRatio,height:c.cHeight*c.pixelRatio,extra:{column:{width:c.cWidth*c.pixelRatio*.45/s.categories.length}}})},changeData:function(){y.updateData({series:c.serverData.ColumnB.series,categories:c.serverData.ColumnB.categories})},addDate:function(){var a=new Date;this.systemDate=(0,i.parseTime)(a,"{y}-{m}-{d}")},addDate1:function(){var a=new Date;this.systemDate1=(0,o.parseTime1)(a,"{y}-{m}-{d}")},ChangeDate:function(a){var s=new Date(a);this.systemDate1=(0,o.parseTime1)(s,"{y}-{m}-{d}")},onloadsalep:function(){var a=this;(0,r.Loadingcustomerinformation)({"access-token":this.userToken}).then(function(a){console.log(t(a.data," at pages\\salesanalysis\\salesanalysis.vue:257"));for(var s=[],e=0;e<a.data.length;e++){var n={id:"2"+e,name:a.data[e].buyerOrgName,value:a.data[e].buyerOrgId};s.push(n),c.SsearchData.push(a.data[e].buyerOrgId)}c.testList[0].children=[],c.testList[0].children=s}),(0,r.Loadingcommodityinformation)({"access-token":this.userToken}).then(function(s){console.log(t(s.data," at pages\\salesanalysis\\salesanalysis.vue:273")),console.log(t(c.testList[1].children," at pages\\salesanalysis\\salesanalysis.vue:274")),c.testList[1].children=[];for(var e=0;e<s.data.length;e++){var n={id:"3"+e,name:s.data[e].name,children:[],value:s.data[e].productTypeId};if(c.searchvalue.push(s.data[e].productTypeId),null==s.data[e].childProductTypeList)c.testList[1].children.push(n);else{for(var l=0;l<s.data[e].childProductTypeList.length;l++){var i={id:"3"+e+l,name:s.data[e].childProductTypeList[l].name,value:s.data[e].childProductTypeList[l].productTypeId};n.children.push(i),c.searchvalue.push(s.data[e].childProductTypeList[l].productTypeId)}c.testList[1].children.push(n)}}console.log(t(c.SsearchData," at pages\\salesanalysis\\salesanalysis.vue:300")),console.log(t(c.searchvalue," at pages\\salesanalysis\\salesanalysis.vue:301")),setTimeout(function(){a.list=c.testList},300)})},unique:function(a){var s=new Map;return a.filter(function(a){return!s.has(a.id)&&s.set(a.id,1)})},change:function(a){var s=this,e=a.choiceDate,n=a.dayCount;this.systemDate="",this.systemDate1="",console.log(t(e,n," at pages\\salesanalysis\\salesanalysis.vue:322")),console.log(t("入住从 "+e[0].re+"  到 "+e[1].re+"  共 "+n+" 晚"," at pages\\salesanalysis\\salesanalysis.vue:323")),this.systemDate=e[0].date.substring(0,4)+"-"+e[0].date.substring(4,6)+"-"+e[0].date.substring(6,8),this.systemDate1=e[1].date.substring(0,4)+"-"+e[1].date.substring(4,6)+"-"+e[1].date.substring(6,8),console.log(t(this.systemDate," at pages\\salesanalysis\\salesanalysis.vue:326")),console.log(t(this.systemDate1," at pages\\salesanalysis\\salesanalysis.vue:327")),console.log(t(c.SsearchData1.join(",")," at pages\\salesanalysis\\salesanalysis.vue:328")),console.log(t(c.searchvalues.join(",")," at pages\\salesanalysis\\salesanalysis.vue:329")),(0,r.FlipInstantaneousLoadingSalesData)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,buyerOrgIdList:c.SsearchData1.join(","),productTypeIdList:c.searchvalues.join(",")}).then(function(a){console.log(t(a.data," at pages\\salesanalysis\\salesanalysis.vue:335")),console.log(t(s.systemDate," at pages\\salesanalysis\\salesanalysis.vue:336")),console.log(t(s.systemDate1," at pages\\salesanalysis\\salesanalysis.vue:337")),c.res1=[],s.total=[],s.total.push(a.data.length),console.log(t(s.total[0]," at pages\\salesanalysis\\salesanalysis.vue:341")),s.productPage();var e=s.splitarray(a.data,5);if(console.log(t(e," at pages\\salesanalysis\\salesanalysis.vue:344")),a.data.length<5)c.res1=a.data;else for(var n=0;n<a.data.length;n++)n<5&&c.res1.push(a.data[n]);console.log(t(c.res1," at pages\\salesanalysis\\salesanalysis.vue:354"));for(var l={categories:[],series:[{name:"销售量",data:[]},{name:"毛利",data:[]}]},i=0;i<c.res1.length;i++)l.categories.push(c.res1[i].date.substring(8,10)),l.series[0].data.push(c.res1[i].totalSalesPrice),l.series[1].data.push(c.res1[i].grossProfitPrice);c.showColumn("canvasColumn",l)})},qy:function(a){var s=this;console.log(t(a," at pages\\salesanalysis\\salesanalysis.vue:372")),console.log(t(this.systemDate," at pages\\salesanalysis\\salesanalysis.vue:373")),console.log(t(this.systemDate1," at pages\\salesanalysis\\salesanalysis.vue:374")),(0,r.CustomerDataChangeDataAnalysis)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,buyerOrgIdList:c.SsearchData1.join(","),productTypeIdList:c.searchvalues.join(",")}).then(function(e){console.log(t(e.data," at pages\\salesanalysis\\salesanalysis.vue:380")),c.res1=[],s.total=[],s.total.push(e.data.length),console.log(t(s.total[0]," at pages\\salesanalysis\\salesanalysis.vue:384"));var n=s.splitarray(e.data,5);console.log(t(n," at pages\\salesanalysis\\salesanalysis.vue:386")),c.res1=n[a-1],console.log(t(c.res1," at pages\\salesanalysis\\salesanalysis.vue:388"));for(var l={categories:[],series:[{name:"销售量",data:[]},{name:"毛利",data:[]}]},i=0;i<c.res1.length;i++)l.categories.push(c.res1[i].date.substring(8,10)),l.series[0].data.push(c.res1[i].totalSalesPrice),l.series[1].data.push(c.res1[i].grossProfitPrice);c.showColumn("canvasColumn",l)});var e=this;e.current=a;var n=parseInt(e.total),l=parseInt(e.pageSize),i=parseInt(n/l);n/l>i&&i++;var o=[];if(!(i<5))return a>=i-2?(o=[i-4,i-3,i-2,i-1,i],e.page=o,void console.log(t(e.page+"2222222222222"," at pages\\salesanalysis\\salesanalysis.vue:418"))):i>5&&a<4?(o=[1,2,3,4,5],e.page=o,void console.log(t(e.page+"333333333333"," at pages\\salesanalysis\\salesanalysis.vue:424"))):i>5&&a>3?(o=[a-2,a-1,a,a+1,a+2],e.page=o,void console.log(t(e.page+"444444444444444444"," at pages\\salesanalysis\\salesanalysis.vue:430"))):void 0},treeConfirm:function(a){var s=this;console.log(t(a," at pages\\salesanalysis\\salesanalysis.vue:436")),c.searchvalues=[],c.SsearchData1=[],console.log(t(c.SsearchData," at pages\\salesanalysis\\salesanalysis.vue:439")),console.log(t(c.searchvalue," at pages\\salesanalysis\\salesanalysis.vue:440"));for(var e=0;e<c.searchvalue.length;e++)for(var n=0;n<a.length;n++)a[n].value==c.searchvalue[e]&&c.searchvalues.push(a[n].value);for(var l=0;l<c.SsearchData.length;l++)for(var i=0;i<a.length;i++)a[i].value==c.SsearchData[l]&&c.SsearchData1.push(a[i].value);c.res1=[],console.log(t(this.systemDate," at pages\\salesanalysis\\salesanalysis.vue:456")),console.log(t(this.systemDate1," at pages\\salesanalysis\\salesanalysis.vue:457")),console.log(t(c.SsearchData1.join(",")," at pages\\salesanalysis\\salesanalysis.vue:458")),console.log(t(c.searchvalues.join(",")," at pages\\salesanalysis\\salesanalysis.vue:459")),(0,r.CustomerDataChangeDataAnalysis)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,buyerOrgIdList:c.SsearchData1.join(","),productTypeIdList:c.searchvalues.join(",")}).then(function(a){console.log(t(a.data," at pages\\salesanalysis\\salesanalysis.vue:465")),c.res1=[],s.total=[],s.total.push(a.data.length),s.productPage();s.splitarray(a.data,5);if(a.data.length<5)c.res1=a.data;else for(var e=0;e<a.data.length;e++)e<5&&c.res1.push(a.data[e]);for(var n={categories:[],series:[{name:"销售量",data:[]},{name:"毛利",data:[]}]},l=0;l<c.res1.length;l++)n.categories.push(c.res1[l].date.substring(8,10)),n.series[0].data.push(c.res1[l].totalSalesPrice),n.series[1].data.push(c.res1[l].grossProfitPrice);c.showColumn("canvasColumn",n)})},treeCancel:function(a){console.log(t(a," at pages\\salesanalysis\\salesanalysis.vue:500"))},showTree:function(){this.$refs.tkitree._show()},splitarray:function(a,s){for(var e=a.length,t=[],n=0;n<e;n+=s)t.push(a.slice(n,n+s));return t}}};s.default=v}).call(this,e("6e42")["default"],e("0de9")["default"])},ed97:function(a,s,e){"use strict";e.r(s);var t=e("c864"),n=e.n(t);for(var l in t)"default"!==l&&function(a){e.d(s,a,function(){return t[a]})}(l);s["default"]=n.a}},[["87b3","common/runtime","common/vendor"]]]);
});
require('pages/salesanalysis/salesanalysis.js');
__wxRoute = 'pages/grossprofitanalysis/grossprofitanalysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/grossprofitanalysis/grossprofitanalysis.js';

define('pages/grossprofitanalysis/grossprofitanalysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/grossprofitanalysis/grossprofitanalysis"],{"0545":function(s,a,e){"use strict";(function(s){e("f263"),e("921b");t(e("66fd"));var a=t(e("e642"));function t(s){return s&&s.__esModule?s:{default:s}}s(a.default)}).call(this,e("6e42")["createPage"])},"1dc2":function(s,a,e){},3623:function(s,a,e){"use strict";(function(s,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=g(e("de9a")),r=e("2f62"),i=e("a627"),n=e("9357"),l=e("39ac");function g(s){return s&&s.__esModule?s:{default:s}}var p,c=function(){return e.e("components/cmd-icon/cmd-icon").then(e.bind(null,"6604"))},u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"986d"))},f=function(){return e.e("components/tki-tree/tki-tree").then(e.bind(null,"3c2c"))},h=function(){return Promise.all([e.e("common/vendor"),e.e("components/date-picker/date-picker2")]).then(e.bind(null,"5303"))},y=null,d={components:{calendar:h,tkiTree:f,faIcon:u,cmdIcon:c},data:function(){return{total:[2],pageSize:5,page:[],current:1,zpage:0,res1:[],testList:[{id:2,name:"客户"},{id:1,name:"商品"}],list:[],multiple:!1,selectParent:!1,beginDate:"2019-05-06",endDate:"2019-05-07",showCaledar:!1,dateStr:"",daysCount:365,singleDate:!0,PsearchData:[],SsearchData:[],systemDate1:"",systemDate:"",searchType:[2],inputsArray:[{title:"分析类别",type:"radio",itemArray:[{name:"客户",value:"客户",defaultValue:!0},{name:"商品",value:"商品"}],color:"#c0ebd7",scale:".8"}],cWidth:"",cHeight:"",pixelRatio:1,serverData:"",title:"销售分析",content1:"1111",isShowSelect:!1}},computed:(0,r.mapState)(["userInfo","userToken"]),onLoad:function(a){var e=this;p=this,this.title=a.name,this.addDate(),this.addDate1(),setTimeout(function(){e.list=e.testList},300),s.getSystemInfo({success:function(s){s.pixelRatio>1&&(p.pixelRatio=2)}}),this.cWidth=s.upx2px(750),this.cHeight=s.upx2px(500),this.getServerData()},onBackPress:function(){if(!1!==this.showCaledar)return this.showCaledar=!1,!0},created:function(){this.productPage()},methods:{productPage:function(){var s=this,a=parseInt(s.total),e=parseInt(s.pageSize),o=parseInt(a/e);a/e>o&&o++,s.zpage=o;var r=[];if(o<5)for(var i=1;i<=o;i++)r.push(i);else r=[1,2,3,4,5];s.page=r,console.log(t(s.page+"1111111111111111111"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:159"))},arrowDown:function(){this.isShowSelect=!this.isShowSelect},select:function(s,a){this.isShowSelect=!1,this.unitName=s.value},getServerData:function(){var s=this;console.log(t(this.systemDate," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:169")),console.log(t(this.systemDate1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:170")),(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(a){console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:175")),p.res1=[],s.total=[],s.total.push(a.data.length),console.log(t(s.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:179")),s.productPage();var e=s.splitarray(a.data,5);if(console.log(t(e," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:182")),a.data.length<5)p.res1=a.data;else for(var o=0;o<a.data.length;o++)o<5&&p.res1.push(a.data[o]);for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)})},getServerData1:function(){var s=this;(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(a){console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:209"));var e=a.data,o=e.sort(p.compare("grossProfitRate"));console.log(t(a.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:212")),p.res1=[],s.total=[],s.total.push(o.length),console.log(t(s.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:216")),s.productPage();var r=s.splitarray(o,5);if(console.log(t(r," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:219")),o.length<5)p.res1=o;else for(var i=0;i<o.length;i++)i<5&&p.res1.push(o[i]);for(var n={categories:[],series:[{name:"毛利率",data:[]}]},l=0;l<p.res1.length;l++)n.categories.push(p.res1[l].productName),n.series[0].data.push(p.res1[l].grossProfitRate);p.showColumn("canvasColumn",n)})},showColumn:function(s,a){y=new o.default({$this:p,canvasId:s,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",pixelRatio:p.pixelRatio,animation:!0,categories:a.categories,series:a.series,xAxis:{disableGrid:!0},yAxis:{},dataLabel:!0,width:p.cWidth*p.pixelRatio,height:p.cHeight*p.pixelRatio,extra:{column:{width:p.cWidth*p.pixelRatio*.45/a.categories.length}}})},changeData:function(){y.updateData({series:p.serverData.ColumnB.series,categories:p.serverData.ColumnB.categories})},addDate:function(){var s=new Date;console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:276")),this.systemDate=(0,i.parseTime)(s,"{y}-{m}-{d}"),console.log(t(this.systemDate+"截止时间"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:278"))},addDate1:function(){var s=new Date;this.systemDate1=(0,n.parseTime1)(s,"{y}-{m}-{d}"),console.log(t(this.systemDate1+"开始时间"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:284"))},ChangeDate:function(s){var a=new Date(s);this.systemDate=(0,i.parseTime)(a,"{y}-{m}-{d}")},ChangeDate1:function(s){console.log(t(s+"截止日期"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:293"));var a=new Date(s);this.systemDate1=(0,i.parseTime)(a,"{y}-{m}-{d}")},compare:function(s){return function(a,e){var t=a[s],o=e[s];return t<o?1:t>o?-1:0}},toPercent:function(s){var a=Number(100*s).toFixed(1);return a+="%",a},change:function(s){var a=this,e=s.choiceDate,o=s.dayCount;this.systemDate="",this.systemDate1="",console.log(t(e,o," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:323")),console.log(t("入住从 "+e[0].re+"  到 "+e[1].re+"  共 "+o+" 晚"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:324")),this.systemDate=e[0].date.substring(0,4)+"-"+e[0].date.substring(4,6)+"-"+e[0].date.substring(6,8),this.systemDate1=e[1].date.substring(0,4)+"-"+e[1].date.substring(4,6)+"-"+e[1].date.substring(6,8),console.log(t(this.systemDate," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:327")),console.log(t(this.systemDate1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:328")),(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(s){console.log(t(s.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:333")),p.res1=[],a.total=[],a.total.push(s.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:337")),a.productPage();var e=a.splitarray(s.data,5);if(console.log(t(e," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:340")),s.data.length<5)p.res1=s.data;else for(var o=0;o<s.data.length;o++)o<5&&p.res1.push(s.data[o]);for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)})},treeConfirm:function(s){console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:364")),2==s[0].id?(this.searchType=[],this.searchType.push(2),console.log(t(this.searchType[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:368")),this.getServerData()):(this.searchType=[],this.searchType.push(1),console.log(t(this.searchType[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:373")),this.getServerData1())},treeCancel:function(s){console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:379"))},showTree:function(){this.$refs.tkitree._show()},qy:function(s){var a=this,e=this;e.current=s,console.log(t(s," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:388")),2==this.searchType?(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(e){console.log(t(e.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:394")),p.res1=[],a.total=[],a.total.push(e.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:398"));var o=a.splitarray(e.data,5);console.log(t(o," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:401")),p.res1=o[s-1],console.log(t(p.res1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:403"));for(var r={categories:[],series:[{name:"毛利率",data:[]}]},i=0;i<p.res1.length;i++)r.categories.push(p.res1[i].buyerOrgName),r.series[0].data.push(p.res1[i].grossProfitRate);p.showColumn("canvasColumn",r)}):(0,l.Grossprofitanalysisdata)({"access-token":this.userToken,beginDate:this.systemDate,endDate:this.systemDate1,searchType:this.searchType[0]}).then(function(e){console.log(t(e.data," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:420"));var o=e.data,r=o.sort(p.compare("grossProfitRate"));p.res1=[],a.total=[],a.total.push(e.data.length),console.log(t(a.total[0]," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:426"));var i=a.splitarray(r,5);console.log(t(i," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:429")),p.res1=i[s-1],console.log(t(p.res1," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:431"));for(var n={categories:[],series:[{name:"毛利率",data:[]}]},l=0;l<p.res1.length;l++)n.categories.push(p.res1[l].productName),n.series[0].data.push(p.res1[l].grossProfitRate);p.showColumn("canvasColumn",n)});var o=parseInt(e.total),r=parseInt(e.pageSize),i=parseInt(o/r);o/r>i&&i++;var n=[];if(!(i<5))return s>=i-2?(n=[i-4,i-3,i-2,i-1,i],e.page=n,void console.log(t(e.page+"2222222222222"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:457"))):i>5&&s<4?(n=[1,2,3,4,5],e.page=n,void console.log(t(e.page+"333333333333"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:463"))):i>5&&s>3?(n=[s-2,s-1,s,s+1,s+2],e.page=n,void console.log(t(e.page+"444444444444444444"," at pages\\grossprofitanalysis\\grossprofitanalysis.vue:469"))):void 0},splitarray:function(s,a){for(var e=s.length,t=[],o=0;o<e;o+=a)t.push(s.slice(o,o+a));return t}}};a.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},"380e":function(s,a,e){"use strict";e.r(a);var t=e("3623"),o=e.n(t);for(var r in t)"default"!==r&&function(s){e.d(a,s,function(){return t[s]})}(r);a["default"]=o.a},6494:function(s,a,e){"use strict";var t=e("1dc2"),o=e.n(t);o.a},"794e":function(s,a,e){"use strict";var t=function(){var s=this,a=s.$createElement;s._self._c},o=[];e.d(a,"a",function(){return t}),e.d(a,"b",function(){return o})},e642:function(s,a,e){"use strict";e.r(a);var t=e("794e"),o=e("380e");for(var r in o)"default"!==r&&function(s){e.d(a,s,function(){return o[s]})}(r);e("6494");var i=e("2877"),n=Object(i["a"])(o["default"],t["a"],t["b"],!1,null,null,null);a["default"]=n.exports}},[["0545","common/runtime","common/vendor"]]]);
});
require('pages/grossprofitanalysis/grossprofitanalysis.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

