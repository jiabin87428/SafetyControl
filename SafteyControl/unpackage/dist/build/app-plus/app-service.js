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
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
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
Z([[7],[3,'animationData']])
Z([[4],[[5],[[5],[[5],[1,'uni-drawer data-v-0cf0e840']],[[2,'?:'],[[6],[[7],[3,'option']],[3,'visible']],[1,'uni-drawer-visible'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'option']],[3,'rightMode']],[1,'uni-drawer-right'],[1,'']]]])
Z([[7],[3,'showmask']])
Z([3,'__e'])
Z(z[3])
Z(z[3])
Z([3,'uni-drawer-content data-v-0cf0e840'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'updateStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'updateMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'updateEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[6],[[7],[3,'option']],[3,'width']],[1,'%']]],[1,';']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visibleSync']])
Z([[7],[3,'catchtouchmove']])
Z([[4],[[5],[[5],[[5],[1,'uni-drawer']],[[2,'?:'],[[7],[3,'showDrawer']],[1,'uni-drawer--visible'],[1,'']]],[[2,'?:'],[[7],[3,'rightMode']],[1,'uni-drawer--right'],[1,'']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
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
Z([[4],[[5],[[5],[1,'uni-list-cell']],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[1,'uni-list-cell--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]],[1,''],[1,'uni-list-cell--hover']])
Z([3,'uni-list-cell__container'])
Z([[7],[3,'thumb']])
Z([[2,'||'],[[2,'==='],[[7],[3,'showExtraIcon']],[1,true]],[[2,'==='],[[7],[3,'showExtraIcon']],[1,'true']]])
Z([3,'__l'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'subnote']],[[2,'==='],[[7],[3,'showBadge']],[1,true]]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]],[[2,'==='],[[7],[3,'showArrow']],[1,true]]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([3,'uni-list-cell__extra'])
Z([[7],[3,'subnote']])
Z([[2,'||'],[[2,'==='],[[7],[3,'showBadge']],[1,true]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]])
Z(z[7])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showSwitch']],[1,true]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showArrow']],[1,true]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]])
Z(z[7])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowright'])
Z([3,'3'])
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
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#666666'],[1,'#cccccc']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'serach data-v-7d27aa5c'])
Z([[7],[3,'isDelShow']])
Z([[2,'==='],[[7],[3,'button']],[1,'outside']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canvasId']])
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
Z([3,'cellInfoView'])
Z([3,'__l'])
Z([3,'false'])
Z([[7],[3,'fqr']])
Z([3,'发现人'])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[7],[3,'zrbm']])
Z([3,'责任部门'])
Z([3,'2'])
Z(z[1])
Z([3,'3'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'bhgys']],[1,'请输入隐患描述']]]],[[4],[[5],[1,'bhgys']]]]]]]]]]])
Z([3,'true'])
Z([[7],[3,'bhgys']])
Z([3,'隐患描述'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'3']])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedyhdj']]]]]]]]])
Z(z[17])
Z([[7],[3,'yhdj']])
Z([3,'隐患级别'])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'3']])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedyhhg']]]]]]]]])
Z(z[17])
Z([[7],[3,'yhhg']])
Z([3,'隐患分类'])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'3']])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'wfflfgjtk']],[1,'请输入对应条款']]]],[[4],[[5],[1,'wfflfgjtk']]]]]]]]]]])
Z(z[17])
Z([[7],[3,'wfflfgjtk']])
Z([3,'对应条款'])
Z([[2,'+'],[[2,'+'],[1,'7'],[1,',']],[1,'3']])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'gsyqjjy']],[1,'请输入整改要求及建议']]]],[[4],[[5],[1,'gsyqjjy']]]]]]]]]]])
Z(z[17])
Z([[7],[3,'gsyqjjy']])
Z([3,'整改建议'])
Z([[2,'+'],[[2,'+'],[1,'8'],[1,',']],[1,'3']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'false'])
Z([[7],[3,'fqr']])
Z([3,'发现人'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'zrbm']])
Z([3,'责任部门'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'yhdj']])
Z([3,'隐患级别'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'yhhg']])
Z([3,'隐患后果'])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'bhgys']])
Z([3,'不合格因素'])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'wfflfgjtk']])
Z([3,'对应条款'])
Z([[2,'+'],[[2,'+'],[1,'7'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[7],[3,'gsyqjjy']])
Z([3,'整改要求及建议'])
Z([[2,'+'],[[2,'+'],[1,'8'],[1,',']],[1,'1']])
Z(z[1])
Z([3,'9'])
Z(z[3])
Z(z[1])
Z(z[5])
Z([[7],[3,'tbr']])
Z([3,'填报人'])
Z([[2,'+'],[[2,'+'],[1,'10'],[1,',']],[1,'9']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateZgqx']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([[7],[3,'zgqx']])
Z(z[1])
Z([[7],[3,'spFlag']])
Z(z[50])
Z([3,'整改期限'])
Z([[2,'+'],[[2,'+'],[1,'11'],[1,',']],[1,'9']])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateTxrq']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[49])
Z([[7],[3,'txrq']])
Z(z[1])
Z(z[52])
Z(z[59])
Z([3,'填写日期'])
Z([[2,'+'],[[2,'+'],[1,'12'],[1,',']],[1,'9']])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedzgyj']]]]]]]]])
Z(z[52])
Z([[7],[3,'zgyj']])
Z([3,'整改意见'])
Z([[2,'+'],[[2,'+'],[1,'13'],[1,',']],[1,'9']])
Z(z[1])
Z([3,'14'])
Z(z[3])
Z(z[1])
Z(z[5])
Z([[7],[3,'zgr']])
Z([3,'整改人'])
Z([[2,'+'],[[2,'+'],[1,'15'],[1,',']],[1,'14']])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateZgwcrq']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[49])
Z([[7],[3,'zgwcrq']])
Z(z[1])
Z([[7],[3,'zgFlag']])
Z(z[83])
Z([3,'整改完成日期'])
Z([[2,'+'],[[2,'+'],[1,'16'],[1,',']],[1,'14']])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateTbrq']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[49])
Z([[7],[3,'tbrq']])
Z(z[1])
Z(z[85])
Z(z[92])
Z([3,'填报日期'])
Z([[2,'+'],[[2,'+'],[1,'17'],[1,',']],[1,'14']])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedzlzj']]]]]]]]])
Z(z[85])
Z([[7],[3,'zlzj']])
Z([3,'治理资金'])
Z([[2,'+'],[[2,'+'],[1,'18'],[1,',']],[1,'14']])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedzgqk']]]]]]]]])
Z(z[85])
Z([[7],[3,'zgqk']])
Z([3,'整改情况'])
Z([[2,'+'],[[2,'+'],[1,'19'],[1,',']],[1,'14']])
Z(z[1])
Z([3,'20'])
Z(z[3])
Z(z[1])
Z(z[5])
Z([[7],[3,'yzr']])
Z([3,'验证人'])
Z([[2,'+'],[[2,'+'],[1,'21'],[1,',']],[1,'20']])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateTbrq2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[49])
Z([[7],[3,'tbrq2']])
Z(z[1])
Z([[7],[3,'yzFlag']])
Z(z[123])
Z(z[96])
Z([[2,'+'],[[2,'+'],[1,'22'],[1,',']],[1,'20']])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedyyfx']]]]]]]]])
Z(z[125])
Z([[7],[3,'yyfx']])
Z([3,'原因分析'])
Z([[2,'+'],[[2,'+'],[1,'23'],[1,',']],[1,'20']])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedyzqk']]]]]]]]])
Z(z[125])
Z([[7],[3,'yzqk']])
Z([3,'验证情况'])
Z([[2,'+'],[[2,'+'],[1,'24'],[1,',']],[1,'20']])
Z(z[1])
Z([3,'25'])
Z(z[3])
Z(z[1])
Z(z[47])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selecteddestNode']]]]]]]]])
Z([3,'true'])
Z([[7],[3,'destNode']])
Z([3,'请选择即将跳转节点'])
Z([[2,'+'],[[2,'+'],[1,'26'],[1,',']],[1,'25']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'host']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入域名'])
Z([3,'text'])
Z([[7],[3,'host']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([[2,'=='],[[7],[3,'userType']],[1,1]])
Z([[2,'!='],[[7],[3,'userType']],[1,1]])
Z([3,'middleView'])
Z(z[1])
Z(z[1])
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
Z([3,'container'])
Z([3,'__l'])
Z([3,'pie'])
Z([3,'vue-ref'])
Z([3,'pieChart'])
Z([[7],[3,'echarts']])
Z([[7],[3,'pieInit']])
Z([3,'1'])
Z(z[1])
Z([[7],[3,'options']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__l'])
Z([3,'pie'])
Z([3,'vue-ref'])
Z([3,'pieChart'])
Z([[7],[3,'echarts']])
Z([[7],[3,'pieInit']])
Z([3,'1'])
Z(z[1])
Z([[7],[3,'options']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__l'])
Z([3,'pie'])
Z([3,'vue-ref'])
Z([3,'pieChart'])
Z([[7],[3,'echarts']])
Z([[7],[3,'pieInit']])
Z([3,'1'])
Z(z[1])
Z([3,'line'])
Z(z[3])
Z([3,'lineChart'])
Z(z[5])
Z([[7],[3,'lineInit']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([3,'__l'])
Z([3,'line'])
Z([3,'vue-ref'])
Z([3,'lineChart'])
Z([[7],[3,'echarts']])
Z([[7],[3,'lineInit']])
Z([3,'1'])
Z(z[1])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'name'])
Z([[7],[3,'xLine']])
Z(z[11])
Z(z[1])
Z([3,'false'])
Z([[6],[[7],[3,'lineData']],[[7],[3,'index']]])
Z([[7],[3,'name']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,',']],[1,'2']])
Z(z[1])
Z([[7],[3,'options']])
Z([3,'4'])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'false'])
Z([3,'true'])
Z([[6],[[7],[3,'obj']],[3,'dwbh']])
Z([3,'点位编号'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'zrrmc']])
Z([3,'检查人'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([[6],[[7],[3,'obj']],[3,'jcrq']])
Z(z[1])
Z(z[18])
Z([3,'检查日期'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'zrbm']])
Z([3,'责任部门'])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'lc']])
Z([3,'楼层'])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'wz']])
Z([3,'位置'])
Z([[2,'+'],[[2,'+'],[1,'7'],[1,',']],[1,'1']])
Z([3,'cellTitleView'])
Z(z[1])
Z([3,'#24BE41'])
Z([3,'22'])
Z([3,'checkbox-filled'])
Z([3,'8'])
Z(z[1])
Z([3,'#FFDE52'])
Z(z[41])
Z([3,'info-filled'])
Z([3,'9'])
Z(z[1])
Z([3,'#C11E1E'])
Z(z[41])
Z([3,'clear'])
Z([3,'10'])
Z(z[1])
Z([3,'11'])
Z(z[3])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[57])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpEdit']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'obj.sublist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'m0']])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'jcwtms']])
Z([[7],[3,'editable']])
Z(z[6])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'jcbz']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'12-'],[[7],[3,'index']]],[1,',']],[1,'11']])
Z([3,'btnView'])
Z([[7],[3,'showSave']])
Z([[7],[3,'showClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cellInfoView'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'jcjl']],[1,'异常']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'id']],[1,'']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'part2'])
Z([[2,'!='],[[7],[3,'userType']],[1,1]])
Z([[2,'=='],[[7],[3,'userType']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTemplate']],[1,0]])
Z([3,'menuBlockView'])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[2])
Z([[2,'=='],[[7],[3,'currentTemplate']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTemplate']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'false'])
Z([3,'true'])
Z([[6],[[7],[3,'obj']],[3,'dwbh']])
Z([3,'点位编号'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'zrrmc']])
Z([3,'检查人'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([[6],[[7],[3,'obj']],[3,'jcrq']])
Z(z[1])
Z(z[18])
Z([3,'检查日期'])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'zrbm']])
Z([3,'责任部门'])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'lc']])
Z([3,'楼层'])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'1']])
Z(z[1])
Z(z[5])
Z([[6],[[7],[3,'obj']],[3,'wz']])
Z([3,'位置'])
Z([[2,'+'],[[2,'+'],[1,'7'],[1,',']],[1,'1']])
Z([3,'cellTitleView'])
Z(z[1])
Z([3,'#24BE41'])
Z([3,'22'])
Z([3,'checkbox-filled'])
Z([3,'8'])
Z(z[1])
Z([3,'#FFDE52'])
Z(z[41])
Z([3,'info-filled'])
Z([3,'9'])
Z(z[1])
Z([3,'#C11E1E'])
Z(z[41])
Z([3,'clear'])
Z([3,'10'])
Z(z[1])
Z([3,'11'])
Z(z[3])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[57])
Z(z[1])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpEdit']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'obj.sublist']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'m0']])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'jcwtms']])
Z(z[6])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'jcbz']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'12-'],[[7],[3,'index']]],[1,',']],[1,'11']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'baseView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'moveHandle']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([3,'scrollView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'isScrolling']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'__l'])
Z([[7],[3,'showDrawer']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'baseView'])
Z([3,'cellInfoView'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selecteddhzlx']]]]]]]]])
Z([3,'true'])
Z([[7],[3,'dhzlx']])
Z([3,'动火证类型'])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'zydw']],[1,'请输入作业单位']]]],[[4],[[5],[1,'zydw']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'zydw']])
Z([3,'作业单位'])
Z([3,'2'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'dhfzr']],[1,'请输入动火负责人']]]],[[4],[[5],[1,'dhfzr']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'dhfzr']])
Z([3,'动火负责人'])
Z([3,'3'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'dhfs']],[1,'请输入动火方式']]]],[[4],[[5],[1,'dhfs']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'dhfs']])
Z([3,'动火方式'])
Z([3,'4'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'dhdd']],[1,'请输入动火地点']]]],[[4],[[5],[1,'dhdd']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'dhdd']])
Z([3,'动火地点'])
Z([3,'5'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'sgxm']],[1,'请输入施工项目']]]],[[4],[[5],[1,'sgxm']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'sgxm']])
Z([3,'施工项目'])
Z([3,'6'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'dhnr']],[1,'请输入动火内容']]]],[[4],[[5],[1,'dhnr']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'dhnr']])
Z([3,'动火内容'])
Z([3,'7'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'zzjhr']],[1,'请输入组织监火人']]]],[[4],[[5],[1,'zzjhr']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'zzjhr']])
Z([3,'组织监火人'])
Z([3,'8'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'zzjhrgw']],[1,'请输入组织监火人岗位']]]],[[4],[[5],[1,'zzjhrgw']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'zzjhrgw']])
Z([3,'组织监火人岗位'])
Z([3,'9'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'ddjhr']],[1,'请输入地点监火人']]]],[[4],[[5],[1,'ddjhr']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'ddjhr']])
Z([3,'地点监火人'])
Z([3,'10'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'ddjhrgw']],[1,'请输入地点监火人岗位']]]],[[4],[[5],[1,'ddjhrgw']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'ddjhrgw']])
Z([3,'地点监火人岗位'])
Z([3,'11'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'whbs']],[1,'请输入危害辨识']]]],[[4],[[5],[1,'whbs']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'whbs']])
Z([3,'危害辨识'])
Z([3,'12'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'aqcs']],[1,'请输入安全措施']]]],[[4],[[5],[1,'aqcs']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'aqcs']])
Z([3,'安全措施'])
Z([3,'13'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'jumpInput']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'ssqk']],[1,'请输入实施情况']]]],[[4],[[5],[1,'ssqk']]]]]]]]]]])
Z(z[5])
Z([[7],[3,'ssqk']])
Z([3,'实施情况'])
Z([3,'14'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedsfjxfxfx']]]]]]]]])
Z(z[5])
Z([[7],[3,'sfjxfxfx']])
Z([3,'是否进行风险分析'])
Z([3,'15'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'selectedsfyss']]]]]]]]])
Z(z[5])
Z([[7],[3,'sfyss']])
Z([3,'是否已实施'])
Z([3,'16'])
Z(z[1])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateDhqx']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([[7],[3,'dhqx']])
Z(z[2])
Z(z[5])
Z(z[118])
Z([3,'动火期限起'])
Z([3,'17'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindDateDhqx2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[117])
Z([[7],[3,'dhqx2']])
Z(z[2])
Z(z[5])
Z(z[127])
Z(z[122])
Z([3,'18'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'choiceICON']]]]]]]]])
Z([3,'false'])
Z([3,'安全措施选择器'])
Z([3,'19'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__e'])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'slide_list data-v-49b0dbf2'])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[[5],[1,'$event']],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[[5],[1,'$event']],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchMove']],[[4],[[5],[[5],[1,'$event']],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'recover']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translate3d('],[[6],[[7],[3,'item']],[3,'slide_x']]],[1,'px, 0, 0)']]],[1,';']])
Z([[6],[[7],[3,'item']],[3,'nr']])
Z([[6],[[7],[3,'item']],[3,'isShare']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'solutions']])
Z(z[0])
Z([3,'infoView'])
Z([[6],[[7],[3,'item']],[3,'selected']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'selected']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z([3,'text'])
Z([[7],[3,'email']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'email']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请输入邮箱'])
Z(z[5])
Z([[7],[3,'email']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'logo-title'])
Z([[7],[3,'hasLogin']])
Z([[2,'!'],[[7],[3,'hasLogin']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/drawer/hj-dragabledrawer.wxml','./components/drawer/uni-drawer.wxml','./components/list/uni-badge/uni-badge.wxml','./components/list/uni-icon/uni-icon.wxml','./components/list/uni-list-item/uni-list-item.wxml','./components/list/uni-list/uni-list.wxml','./components/m-icon/m-icon.wxml','./components/m-input.wxml','./components/m-search/m-search.wxml','./components/mpvue-echarts/src/echarts.wxml','./pages/common/inputPage.wxml','./pages/danger/addDanger.wxml','./pages/danger/detailDanger.wxml','./pages/login/diyHost.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/mpvue-echarts/chartList.wxml','./pages/mpvue-echarts/deviceChart.wxml','./pages/mpvue-echarts/eventChart.wxml','./pages/mpvue-echarts/mpvue-echarts.wxml','./pages/mpvue-echarts/valveChart.wxml','./pages/pointAdd/pointAdd.wxml','./pages/pointAdd/pointCheckInfo.wxml','./pages/pointCheck/pointCheck.wxml','./pages/pointDetail/pointDetail.wxml','./pages/pointList/pointList.wxml','./pages/ptw/addPtw.wxml','./pages/ptw/rapAdd.wxml','./pages/ptw/rapConsider.wxml','./pages/ptw/rapHarm.wxml','./pages/ptw/rapSelected.wxml','./pages/ptw/rapSolution.wxml','./pages/pwd/pwd.wxml','./pages/reg/reg.wxml','./pages/statistics/statistics.wxml','./pages/user/accountEdit.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['animation',0,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_mz(z,'view',['bindtouchend',3,'bindtouchstart',1,'catchtouchmove',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var fE=_n('slot')
_(oD,fE)
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
var oH=_mz(z,'view',['catchtouchmove',1,'class',1],[],e,s,gg)
var cI=_n('slot')
_(oH,cI)
_(hG,oH)
}
hG.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lK=_v()
_(r,lK)
if(_oz(z,0,e,s,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
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
var eN=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var bO=_n('view')
_rz(z,bO,'class',4,e,s,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,5,e,s,gg)){oP.wxVkey=1
}
else{oP.wxVkey=2
var fS=_v()
_(oP,fS)
if(_oz(z,6,e,s,gg)){fS.wxVkey=1
var cT=_mz(z,'uni-icon',['bind:__l',7,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(fS,cT)
}
fS.wxXCkey=1
fS.wxXCkey=3
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,12,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(bO,oR)
if(_oz(z,13,e,s,gg)){oR.wxVkey=1
var hU=_n('view')
_rz(z,hU,'class',14,e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,15,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,16,e,s,gg)){cW.wxVkey=1
var aZ=_mz(z,'uni-badge',['bind:__l',17,'text',1,'type',2,'vueId',3],[],e,s,gg)
_(cW,aZ)
}
var oX=_v()
_(hU,oX)
if(_oz(z,21,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(hU,lY)
if(_oz(z,22,e,s,gg)){lY.wxVkey=1
var t1=_mz(z,'uni-icon',['bind:__l',23,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(lY,t1)
}
oV.wxXCkey=1
cW.wxXCkey=1
cW.wxXCkey=3
oX.wxXCkey=1
lY.wxXCkey=1
lY.wxXCkey=3
_(oR,hU)
}
oP.wxXCkey=1
oP.wxXCkey=3
xQ.wxXCkey=1
oR.wxXCkey=1
oR.wxXCkey=3
_(eN,bO)
_(r,eN)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var b3=_n('slot')
_(r,b3)
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
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,1,e,s,gg)){f7.wxVkey=1
var h9=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(f7,h9)
}
var c8=_v()
_(o6,c8)
if(_oz(z,9,e,s,gg)){c8.wxVkey=1
var o0=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(c8,o0)
}
f7.wxXCkey=1
f7.wxXCkey=3
c8.wxXCkey=1
c8.wxXCkey=3
_(r,o6)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,1,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,2,e,s,gg)){aDB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
_(r,oBB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eFB=_v()
_(r,eFB)
if(_oz(z,0,e,s,gg)){eFB.wxVkey=1
}
eFB.wxXCkey=1
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
var xIB=_n('view')
_rz(z,xIB,'class',0,e,s,gg)
var oJB=_mz(z,'uni-list-item',['bind:__l',1,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xIB,oJB)
var fKB=_mz(z,'uni-list-item',['bind:__l',6,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xIB,fKB)
var cLB=_mz(z,'uni-list',['bind:__l',11,'vueId',1,'vueSlots',2],[],e,s,gg)
var hMB=_mz(z,'uni-list-item',['bind:__l',14,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cLB,hMB)
var oNB=_mz(z,'uni-list-item',['bind:__l',21,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cLB,oNB)
var cOB=_mz(z,'uni-list-item',['bind:__l',28,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cLB,cOB)
var oPB=_mz(z,'uni-list-item',['bind:__l',35,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cLB,oPB)
var lQB=_mz(z,'uni-list-item',['bind:__l',42,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cLB,lQB)
_(xIB,cLB)
_(r,xIB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_mz(z,'uni-list',['bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var bUB=_mz(z,'uni-list-item',['bind:__l',4,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,bUB)
var oVB=_mz(z,'uni-list-item',['bind:__l',9,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,oVB)
var xWB=_mz(z,'uni-list-item',['bind:__l',14,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,xWB)
var oXB=_mz(z,'uni-list-item',['bind:__l',19,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,oXB)
var fYB=_mz(z,'uni-list-item',['bind:__l',24,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,fYB)
var cZB=_mz(z,'uni-list-item',['bind:__l',29,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,cZB)
var h1B=_mz(z,'uni-list-item',['bind:__l',34,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(eTB,h1B)
_(tSB,eTB)
var o2B=_mz(z,'uni-list',['bind:__l',39,'vueId',1,'vueSlots',2],[],e,s,gg)
var c3B=_mz(z,'uni-list-item',['bind:__l',42,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(o2B,c3B)
var o4B=_mz(z,'picker',['bindchange',47,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var l5B=_mz(z,'uni-list-item',['bind:__l',51,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(o4B,l5B)
_(o2B,o4B)
var a6B=_mz(z,'picker',['bindchange',56,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var t7B=_mz(z,'uni-list-item',['bind:__l',60,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(a6B,t7B)
_(o2B,a6B)
var e8B=_mz(z,'uni-list-item',['bind:__l',65,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(o2B,e8B)
_(tSB,o2B)
var b9B=_mz(z,'uni-list',['bind:__l',72,'vueId',1,'vueSlots',2],[],e,s,gg)
var o0B=_mz(z,'uni-list-item',['bind:__l',75,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(b9B,o0B)
var xAC=_mz(z,'picker',['bindchange',80,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var oBC=_mz(z,'uni-list-item',['bind:__l',84,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xAC,oBC)
_(b9B,xAC)
var fCC=_mz(z,'picker',['bindchange',89,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var cDC=_mz(z,'uni-list-item',['bind:__l',93,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(fCC,cDC)
_(b9B,fCC)
var hEC=_mz(z,'uni-list-item',['bind:__l',98,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(b9B,hEC)
var oFC=_mz(z,'uni-list-item',['bind:__l',105,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(b9B,oFC)
_(tSB,b9B)
var cGC=_mz(z,'uni-list',['bind:__l',112,'vueId',1,'vueSlots',2],[],e,s,gg)
var oHC=_mz(z,'uni-list-item',['bind:__l',115,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(cGC,oHC)
var lIC=_mz(z,'picker',['bindchange',120,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var aJC=_mz(z,'uni-list-item',['bind:__l',124,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(lIC,aJC)
_(cGC,lIC)
var tKC=_mz(z,'uni-list-item',['bind:__l',129,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cGC,tKC)
var eLC=_mz(z,'uni-list-item',['bind:__l',136,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(cGC,eLC)
_(tSB,cGC)
var bMC=_mz(z,'uni-list',['bind:__l',143,'vueId',1,'vueSlots',2],[],e,s,gg)
var oNC=_mz(z,'uni-list-item',['bind:__l',146,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(bMC,oNC)
_(tSB,bMC)
_(r,tSB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oPC=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',0,'bind:input',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(r,oPC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
var oTC=_n('view')
_rz(z,oTC,'class',1,e,s,gg)
var cUC=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',2,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oTC,cUC)
var oVC=_mz(z,'m-input',['displayable',-1,'bind:__l',10,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oTC,oVC)
_(cRC,oTC)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,17,e,s,gg)){hSC.wxVkey=1
}
hSC.wxXCkey=1
_(r,cRC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var aXC=_n('view')
_rz(z,aXC,'class',0,e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,1,e,s,gg)){tYC.wxVkey=1
}
var eZC=_v()
_(aXC,eZC)
if(_oz(z,2,e,s,gg)){eZC.wxVkey=1
}
var b1C=_n('view')
_rz(z,b1C,'class',3,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,4,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,5,e,s,gg)){x3C.wxVkey=1
}
o2C.wxXCkey=1
x3C.wxXCkey=1
_(aXC,b1C)
tYC.wxXCkey=1
eZC.wxXCkey=1
_(r,aXC)
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
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var h7C=_mz(z,'mpvue-echarts',['bind:__l',1,'canvasId',1,'class',2,'data-ref',3,'echarts',4,'onInit',5,'vueId',6],[],e,s,gg)
_(c6C,h7C)
var o8C=_mz(z,'hj-dragabledrawer',['bind:__l',8,'options',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(c6C,o8C)
_(r,c6C)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_mz(z,'mpvue-echarts',['bind:__l',1,'canvasId',1,'class',2,'data-ref',3,'echarts',4,'onInit',5,'vueId',6],[],e,s,gg)
_(o0C,lAD)
var aBD=_mz(z,'hj-dragabledrawer',['bind:__l',8,'options',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(o0C,aBD)
_(r,o0C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_mz(z,'mpvue-echarts',['bind:__l',1,'canvasId',1,'class',2,'data-ref',3,'echarts',4,'onInit',5,'vueId',6],[],e,s,gg)
_(eDD,bED)
var oFD=_mz(z,'mpvue-echarts',['bind:__l',8,'canvasId',1,'class',2,'data-ref',3,'echarts',4,'onInit',5,'vueId',6],[],e,s,gg)
_(eDD,oFD)
_(r,eDD)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oHD=_n('view')
_rz(z,oHD,'class',0,e,s,gg)
var fID=_mz(z,'mpvue-echarts',['bind:__l',1,'canvasId',1,'class',2,'data-ref',3,'echarts',4,'onInit',5,'vueId',6],[],e,s,gg)
_(oHD,fID)
var cJD=_mz(z,'uni-list',['bind:__l',8,'vueId',1,'vueSlots',2],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_mz(z,'uni-list-item',['bind:__l',15,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],oND,cMD,gg)
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=4
_2z(z,13,oLD,e,s,gg,hKD,'name','index','index')
_(oHD,cJD)
var eRD=_mz(z,'hj-dragabledrawer',['bind:__l',20,'options',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oHD,eRD)
_(r,oHD)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oTD=_n('view')
_rz(z,oTD,'class',0,e,s,gg)
var xUD=_mz(z,'uni-list',['bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var oVD=_mz(z,'uni-list-item',['bind:__l',4,'showArrow',1,'showBadge',2,'subnote',3,'title',4,'vueId',5],[],e,s,gg)
_(xUD,oVD)
var fWD=_mz(z,'uni-list-item',['bind:__l',10,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xUD,fWD)
var cXD=_mz(z,'picker',['bindchange',15,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var hYD=_mz(z,'uni-list-item',['bind:__l',19,'subnote',1,'title',2,'vueId',3],[],e,s,gg)
_(cXD,hYD)
_(xUD,cXD)
var oZD=_mz(z,'uni-list-item',['bind:__l',23,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xUD,oZD)
var c1D=_mz(z,'uni-list-item',['bind:__l',28,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xUD,c1D)
var o2D=_mz(z,'uni-list-item',['bind:__l',33,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(xUD,o2D)
_(oTD,xUD)
var l3D=_n('view')
_rz(z,l3D,'class',38,e,s,gg)
var a4D=_mz(z,'uni-icon',['bind:__l',39,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(l3D,a4D)
var t5D=_mz(z,'uni-icon',['bind:__l',44,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(l3D,t5D)
var e6D=_mz(z,'uni-icon',['bind:__l',49,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(l3D,e6D)
_(oTD,l3D)
var b7D=_mz(z,'uni-list',['bind:__l',54,'vueId',1,'vueSlots',2],[],e,s,gg)
var o8D=_v()
_(b7D,o8D)
var x9D=function(fAE,o0D,cBE,gg){
var oDE=_mz(z,'uni-list-item',['bind:__l',61,'bind:click',1,'data-event-opts',2,'extraIcon',3,'note',4,'showArrow',5,'showExtraIcon',6,'title',7,'vueId',8],[],fAE,o0D,gg)
_(cBE,oDE)
return cBE
}
o8D.wxXCkey=4
_2z(z,59,x9D,e,s,gg,o8D,'item','index','index')
_(oTD,b7D)
var cEE=_n('view')
_rz(z,cEE,'class',70,e,s,gg)
var oFE=_v()
_(cEE,oFE)
if(_oz(z,71,e,s,gg)){oFE.wxVkey=1
}
var lGE=_v()
_(cEE,lGE)
if(_oz(z,72,e,s,gg)){lGE.wxVkey=1
}
oFE.wxXCkey=1
lGE.wxXCkey=1
_(oTD,cEE)
_(r,oTD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var tIE=_n('view')
_rz(z,tIE,'class',0,e,s,gg)
var eJE=_v()
_(tIE,eJE)
if(_oz(z,1,e,s,gg)){eJE.wxVkey=1
}
var bKE=_v()
_(tIE,bKE)
if(_oz(z,2,e,s,gg)){bKE.wxVkey=1
}
eJE.wxXCkey=1
bKE.wxXCkey=1
_(r,tIE)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var xME=_n('view')
_rz(z,xME,'class',0,e,s,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,1,e,s,gg)){oNE.wxVkey=1
}
var fOE=_v()
_(xME,fOE)
if(_oz(z,2,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(xME,cPE)
if(_oz(z,3,e,s,gg)){cPE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'class',4,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,5,e,s,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,6,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(oTE,tWE)
if(_oz(z,7,e,s,gg)){tWE.wxVkey=1
}
lUE.wxXCkey=1
aVE.wxXCkey=1
tWE.wxXCkey=1
_(cPE,oTE)
var cSE=_v()
_(cPE,cSE)
if(_oz(z,8,e,s,gg)){cSE.wxVkey=1
}
cSE.wxXCkey=1
}
var hQE=_v()
_(xME,hQE)
if(_oz(z,9,e,s,gg)){hQE.wxVkey=1
}
var oRE=_v()
_(xME,oRE)
if(_oz(z,10,e,s,gg)){oRE.wxVkey=1
}
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
hQE.wxXCkey=1
oRE.wxXCkey=1
_(r,xME)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var bYE=_n('view')
_rz(z,bYE,'class',0,e,s,gg)
var oZE=_mz(z,'uni-list',['bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var x1E=_mz(z,'uni-list-item',['bind:__l',4,'showArrow',1,'showBadge',2,'subnote',3,'title',4,'vueId',5],[],e,s,gg)
_(oZE,x1E)
var o2E=_mz(z,'uni-list-item',['bind:__l',10,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(oZE,o2E)
var f3E=_mz(z,'picker',['bindchange',15,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var c4E=_mz(z,'uni-list-item',['bind:__l',19,'subnote',1,'title',2,'vueId',3],[],e,s,gg)
_(f3E,c4E)
_(oZE,f3E)
var h5E=_mz(z,'uni-list-item',['bind:__l',23,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(oZE,h5E)
var o6E=_mz(z,'uni-list-item',['bind:__l',28,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(oZE,o6E)
var c7E=_mz(z,'uni-list-item',['bind:__l',33,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(oZE,c7E)
_(bYE,oZE)
var o8E=_n('view')
_rz(z,o8E,'class',38,e,s,gg)
var l9E=_mz(z,'uni-icon',['bind:__l',39,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(o8E,l9E)
var a0E=_mz(z,'uni-icon',['bind:__l',44,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(o8E,a0E)
var tAF=_mz(z,'uni-icon',['bind:__l',49,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(o8E,tAF)
_(bYE,o8E)
var eBF=_mz(z,'uni-list',['bind:__l',54,'vueId',1,'vueSlots',2],[],e,s,gg)
var bCF=_v()
_(eBF,bCF)
var oDF=function(oFF,xEF,fGF,gg){
var hIF=_mz(z,'uni-list-item',['bind:__l',61,'bind:click',1,'data-event-opts',2,'extraIcon',3,'note',4,'showExtraIcon',5,'title',6,'vueId',7],[],oFF,xEF,gg)
_(fGF,hIF)
return fGF
}
bCF.wxXCkey=4
_2z(z,59,oDF,e,s,gg,bCF,'item','index','index')
_(bYE,eBF)
_(r,bYE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var cKF=_mz(z,'view',['catchtouchmove',0,'class',1,'data-event-opts',1],[],e,s,gg)
var oLF=_mz(z,'scroll-view',['bindscroll',3,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var lMF=_mz(z,'uni-drawer',['bind:__l',7,'visible',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(oLF,lMF)
_(cKF,oLF)
_(r,cKF)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tOF=_n('view')
_rz(z,tOF,'class',0,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',1,e,s,gg)
var bQF=_mz(z,'uni-list-item',['bind:__l',2,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,bQF)
var oRF=_mz(z,'uni-list-item',['bind:__l',9,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,oRF)
var xSF=_mz(z,'uni-list-item',['bind:__l',16,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,xSF)
var oTF=_mz(z,'uni-list-item',['bind:__l',23,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,oTF)
var fUF=_mz(z,'uni-list-item',['bind:__l',30,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,fUF)
var cVF=_mz(z,'uni-list-item',['bind:__l',37,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,cVF)
var hWF=_mz(z,'uni-list-item',['bind:__l',44,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,hWF)
var oXF=_mz(z,'uni-list-item',['bind:__l',51,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,oXF)
var cYF=_mz(z,'uni-list-item',['bind:__l',58,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,cYF)
var oZF=_mz(z,'uni-list-item',['bind:__l',65,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,oZF)
var l1F=_mz(z,'uni-list-item',['bind:__l',72,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,l1F)
var a2F=_mz(z,'uni-list-item',['bind:__l',79,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,a2F)
var t3F=_mz(z,'uni-list-item',['bind:__l',86,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,t3F)
var e4F=_mz(z,'uni-list-item',['bind:__l',93,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,e4F)
var b5F=_mz(z,'uni-list-item',['bind:__l',100,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,b5F)
var o6F=_mz(z,'uni-list-item',['bind:__l',107,'bind:click',1,'data-event-opts',2,'showArrow',3,'subnote',4,'title',5,'vueId',6],[],e,s,gg)
_(ePF,o6F)
_(tOF,ePF)
var x7F=_n('view')
_rz(z,x7F,'class',114,e,s,gg)
var o8F=_mz(z,'picker',['bindchange',115,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var f9F=_mz(z,'uni-list-item',['bind:__l',119,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(o8F,f9F)
_(x7F,o8F)
var c0F=_mz(z,'picker',['bindchange',124,'data-event-opts',1,'mode',2,'value',3],[],e,s,gg)
var hAG=_mz(z,'uni-list-item',['bind:__l',128,'showArrow',1,'subnote',2,'title',3,'vueId',4],[],e,s,gg)
_(c0F,hAG)
_(x7F,c0F)
_(tOF,x7F)
var oBG=_mz(z,'uni-list-item',['bind:__l',133,'bind:click',1,'data-event-opts',2,'showArrow',3,'title',4,'vueId',5],[],e,s,gg)
_(tOF,oBG)
_(r,tOF)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var tGG=_v()
_(r,tGG)
var eHG=function(oJG,bIG,xKG,gg){
var fMG=_mz(z,'view',['bindtap',4,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4,'data-event-opts',5,'style',6],[],oJG,bIG,gg)
var cNG=_v()
_(fMG,cNG)
if(_oz(z,11,oJG,bIG,gg)){cNG.wxVkey=1
}
var hOG=_v()
_(fMG,hOG)
if(_oz(z,12,oJG,bIG,gg)){hOG.wxVkey=1
}
cNG.wxXCkey=1
hOG.wxXCkey=1
_(xKG,fMG)
return xKG
}
tGG.wxXCkey=2
_2z(z,2,eHG,e,s,gg,tGG,'item','index','index')
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cQG=_v()
_(r,cQG)
var oRG=function(aTG,lSG,tUG,gg){
var bWG=_n('view')
_rz(z,bWG,'class',4,aTG,lSG,gg)
var oXG=_v()
_(bWG,oXG)
if(_oz(z,5,aTG,lSG,gg)){oXG.wxVkey=1
}
var xYG=_v()
_(bWG,xYG)
if(_oz(z,6,aTG,lSG,gg)){xYG.wxVkey=1
}
oXG.wxXCkey=1
xYG.wxXCkey=1
_(tUG,bWG)
return tUG
}
cQG.wxXCkey=2
_2z(z,2,oRG,e,s,gg,cQG,'item','idx','idx')
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var f1G=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',0,'bind:input',1,'data-event-opts',1,'placeholder',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(r,f1G)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var h3G=_n('view')
_rz(z,h3G,'class',0,e,s,gg)
var o4G=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(h3G,o4G)
var c5G=_mz(z,'m-input',['displayable',-1,'bind:__l',8,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(h3G,c5G)
var o6G=_mz(z,'m-input',['clearable',-1,'bind:__l',15,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(h3G,o6G)
_(r,h3G)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var e0G=_n('view')
_rz(z,e0G,'class',0,e,s,gg)
var bAH=_v()
_(e0G,bAH)
if(_oz(z,1,e,s,gg)){bAH.wxVkey=1
}
var oBH=_v()
_(e0G,oBH)
if(_oz(z,2,e,s,gg)){oBH.wxVkey=1
}
bAH.wxXCkey=1
oBH.wxXCkey=1
_(r,e0G)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/main/main","pages/login/login","pages/login/diyHost","pages/reg/reg","pages/pwd/pwd","pages/user/accountEdit","pages/user/user","pages/pointCheck/pointCheck","pages/pointList/pointList","pages/pointDetail/pointDetail","pages/pointAdd/pointAdd","pages/pointAdd/pointCheckInfo","pages/mpvue-echarts/chartList","pages/mpvue-echarts/deviceChart","pages/mpvue-echarts/eventChart","pages/mpvue-echarts/valveChart","pages/mpvue-echarts/mpvue-echarts","pages/common/inputPage","pages/danger/addDanger","pages/statistics/statistics","pages/danger/detailDanger","pages/ptw/addPtw","pages/ptw/rapSelected","pages/ptw/rapAdd","pages/ptw/rapConsider","pages/ptw/rapHarm","pages/ptw/rapSolution"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2D68AA","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/pointCheck/pointCheck","text":"应用","iconPath":"static/img/point.png","selectedIconPath":"static/img/pointHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"networkTimeout":{"request":60000},"nvue":{"pages":{"pages/pointList/uni-tabs.html":{"window":{"usingComponents":{},"navigationBarTitleText":"点位检查","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]}},"nvue":true},"pages/uni-tabs/uni-tabs.html":{"window":{"usingComponents":{},"navigationBarTitleText":"点位检查11"},"nvue":true},"pages/danger/dangerList.html":{"window":{"usingComponents":{},"navigationBarTitleText":"隐患审批"},"nvue":true},"pages/danger/readHistory.html":{"window":{"usingComponents":{},"navigationBarTitleText":"审批阅读历史列表"},"nvue":true}}},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"移动安全管家","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/drawer/hj-dragabledrawer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/drawer/hj-dragabledrawer.wxml']=$gwx('./components/drawer/hj-dragabledrawer.wxml');

__wxAppCode__['components/drawer/uni-drawer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/drawer/uni-drawer.wxml']=$gwx('./components/drawer/uni-drawer.wxml');

__wxAppCode__['components/list/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/list/uni-badge/uni-badge.wxml']=$gwx('./components/list/uni-badge/uni-badge.wxml');

__wxAppCode__['components/list/uni-icon/uni-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/list/uni-icon/uni-icon.wxml']=$gwx('./components/list/uni-icon/uni-icon.wxml');

__wxAppCode__['components/list/uni-list-item/uni-list-item.json']={"usingComponents":{"uni-icon":"/components/list/uni-icon/uni-icon","uni-badge":"/components/list/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/list/uni-list-item/uni-list-item.wxml']=$gwx('./components/list/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/list/uni-list/uni-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/list/uni-list/uni-list.wxml']=$gwx('./components/list/uni-list/uni-list.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['components/m-search/m-search.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-search/m-search.wxml']=$gwx('./components/m-search/m-search.wxml');

__wxAppCode__['components/mpvue-echarts/src/echarts.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-echarts/src/echarts.wxml']=$gwx('./components/mpvue-echarts/src/echarts.wxml');

__wxAppCode__['pages/common/inputPage.json']={"navigationBarTitleText":"输入内容","usingComponents":{}};
__wxAppCode__['pages/common/inputPage.wxml']=$gwx('./pages/common/inputPage.wxml');

__wxAppCode__['pages/danger/addDanger.json']={"navigationBarTitleText":"隐患上报","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/danger/addDanger.wxml']=$gwx('./pages/danger/addDanger.wxml');

__wxAppCode__['pages/danger/detailDanger.json']={"navigationBarTitleText":"隐患整改审批","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/danger/detailDanger.wxml']=$gwx('./pages/danger/detailDanger.wxml');

__wxAppCode__['pages/login/diyHost.json']={"navigationBarTitleText":"自定义域名","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/diyHost.wxml']=$gwx('./pages/login/diyHost.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/mpvue-echarts/chartList.json']={"navigationBarTitleText":"数据统计","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item"}};
__wxAppCode__['pages/mpvue-echarts/chartList.wxml']=$gwx('./pages/mpvue-echarts/chartList.wxml');

__wxAppCode__['pages/mpvue-echarts/deviceChart.json']={"navigationBarTitleText":"报警设备类型统计","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts","hj-dragabledrawer":"/components/drawer/hj-dragabledrawer"}};
__wxAppCode__['pages/mpvue-echarts/deviceChart.wxml']=$gwx('./pages/mpvue-echarts/deviceChart.wxml');

__wxAppCode__['pages/mpvue-echarts/eventChart.json']={"navigationBarTitleText":"报警事件类型统计","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts","hj-dragabledrawer":"/components/drawer/hj-dragabledrawer"}};
__wxAppCode__['pages/mpvue-echarts/eventChart.wxml']=$gwx('./pages/mpvue-echarts/eventChart.wxml');

__wxAppCode__['pages/mpvue-echarts/mpvue-echarts.json']={"navigationBarTitleText":"ECharts图表","usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts"}};
__wxAppCode__['pages/mpvue-echarts/mpvue-echarts.wxml']=$gwx('./pages/mpvue-echarts/mpvue-echarts.wxml');

__wxAppCode__['pages/mpvue-echarts/valveChart.json']={"navigationBarTitleText":"阀组压力统计","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"mpvue-echarts":"/components/mpvue-echarts/src/echarts","hj-dragabledrawer":"/components/drawer/hj-dragabledrawer","uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/mpvue-echarts/valveChart.wxml']=$gwx('./pages/mpvue-echarts/valveChart.wxml');

__wxAppCode__['pages/pointAdd/pointAdd.json']={"navigationBarTitleText":"新增检查","titleNView":{"buttons":[{"text":"一键正常","fontSrc":"/static/uni.ttf","fontSize":"14px","width":"70px"}]},"usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/pointAdd/pointAdd.wxml']=$gwx('./pages/pointAdd/pointAdd.wxml');

__wxAppCode__['pages/pointAdd/pointCheckInfo.json']={"navigationBarTitleText":"检查结论","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item"}};
__wxAppCode__['pages/pointAdd/pointCheckInfo.wxml']=$gwx('./pages/pointAdd/pointCheckInfo.wxml');

__wxAppCode__['pages/pointCheck/pointCheck.json']={"navigationBarTitleText":"应用中心","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"uni-drawer":"/components/drawer/uni-drawer"}};
__wxAppCode__['pages/pointCheck/pointCheck.wxml']=$gwx('./pages/pointCheck/pointCheck.wxml');

__wxAppCode__['pages/pointDetail/pointDetail.json']={"navigationBarTitleText":"点位详情","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/pointDetail/pointDetail.wxml']=$gwx('./pages/pointDetail/pointDetail.wxml');

__wxAppCode__['pages/pointList/pointList.json']={"navigationBarTitleText":"点位检查","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"uni-drawer":"/components/drawer/uni-drawer"}};
__wxAppCode__['pages/pointList/pointList.wxml']=$gwx('./pages/pointList/pointList.wxml');

__wxAppCode__['pages/ptw/addPtw.json']={"navigationBarTitleText":"作业风险评估","usingComponents":{"uni-list":"/components/list/uni-list/uni-list","uni-list-item":"/components/list/uni-list-item/uni-list-item","uni-icon":"/components/list/uni-icon/uni-icon"}};
__wxAppCode__['pages/ptw/addPtw.wxml']=$gwx('./pages/ptw/addPtw.wxml');

__wxAppCode__['pages/ptw/rapAdd.json']={"navigationBarTitleText":"新增安全措施","usingComponents":{"uni-drawer":"/components/drawer/uni-drawer"}};
__wxAppCode__['pages/ptw/rapAdd.wxml']=$gwx('./pages/ptw/rapAdd.wxml');

__wxAppCode__['pages/ptw/rapConsider.json']={"navigationBarTitleText":"考虑因素","usingComponents":{}};
__wxAppCode__['pages/ptw/rapConsider.wxml']=$gwx('./pages/ptw/rapConsider.wxml');

__wxAppCode__['pages/ptw/rapHarm.json']={"navigationBarTitleText":"危害","usingComponents":{}};
__wxAppCode__['pages/ptw/rapHarm.wxml']=$gwx('./pages/ptw/rapHarm.wxml');

__wxAppCode__['pages/ptw/rapSelected.json']={"navigationBarTitleText":"安全措施","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]},"usingComponents":{"m-search":"/components/m-search/m-search"}};
__wxAppCode__['pages/ptw/rapSelected.wxml']=$gwx('./pages/ptw/rapSelected.wxml');

__wxAppCode__['pages/ptw/rapSolution.json']={"navigationBarTitleText":"参考措施","usingComponents":{}};
__wxAppCode__['pages/ptw/rapSolution.wxml']=$gwx('./pages/ptw/rapSolution.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"找回密码","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"注册","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/statistics/statistics.json']={"navigationBarTitleText":"数据统计","usingComponents":{}};
__wxAppCode__['pages/statistics/statistics.wxml']=$gwx('./pages/statistics/statistics.wxml');

__wxAppCode__['pages/user/accountEdit.json']={"navigationBarTitleText":"账号管理","usingComponents":{}};
__wxAppCode__['pages/user/accountEdit.wxml']=$gwx('./pages/user/accountEdit.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1294:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("17f7"));function a(e){return e&&e.__esModule?e:{default:e}}var c={onLaunch:function(){console.log(e("App Launch"," at App.vue:5"));var t=u.default.host;o.getStorage({key:"LOCAL_URL",success:function(n){t=n.data,u.default.host=t,console.log(e("基础URL："+u.default.host," at App.vue:12"))}})},onShow:function(){console.log(e("App Show"," at App.vue:17"))},onHide:function(){console.log(e("App Hide"," at App.vue:20"))}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"3d4d":function(e,t,n){"use strict";n.r(t);var o=n("c8ea");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("90c6");var a,c,r=n("2877"),l=Object(r["a"])(o["default"],a,c,!1,null,null,null);t["default"]=l.exports},"90c6":function(e,t,n){"use strict";var o=n("c9a4"),u=n.n(o);u.a},adb8:function(e,t,n){"use strict";(function(e){n("de83"),n("921b");var t=a(n("66fd")),o=a(n("3d4d")),u=a(n("0edc"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=u.default,o.default.mpType="app";var l=new t.default(c({store:u.default},o.default));e(l).$mount()}).call(this,n("6e42")["createApp"])},c8ea:function(e,t,n){"use strict";n.r(t);var o=n("1294"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=u.a},c9a4:function(e,t,n){}},[["adb8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, o, c = n[0], a = n[1], u = n[2], l = 0, m = []; l < c.length; l++) {
      o = c[l], i[o] && m.push(i[o][0]), i[o] = 0;
    }

    for (r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }

    p && p(n);

    while (m.length) {
      m.shift()();
    }

    return s.push.apply(s, u || []), t();
  }

  function t() {
    for (var e, n = 0; n < s.length; n++) {
      for (var t = s[n], r = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== i[c] && (r = !1);
      }

      r && (s.splice(n--, 1), e = a(a.s = t[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      s = [];

  function c(e) {
    return a.p + "" + e + ".js";
  }

  function a(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports;
  }

  a.e = function (e) {
    var n = [],
        t = {
      "components/m-input": 1,
      "components/drawer/uni-drawer": 1,
      "components/list/uni-icon/uni-icon": 1,
      "components/list/uni-list-item/uni-list-item": 1,
      "components/list/uni-list/uni-list": 1,
      "components/mpvue-echarts/src/echarts": 1,
      "components/drawer/hj-dragabledrawer": 1,
      "components/m-search/m-search": 1,
      "components/m-icon/m-icon": 1,
      "components/list/uni-badge/uni-badge": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var r = ({
        "components/m-input": "components/m-input",
        "components/drawer/uni-drawer": "components/drawer/uni-drawer",
        "components/list/uni-icon/uni-icon": "components/list/uni-icon/uni-icon",
        "components/list/uni-list-item/uni-list-item": "components/list/uni-list-item/uni-list-item",
        "components/list/uni-list/uni-list": "components/list/uni-list/uni-list",
        "components/mpvue-echarts/src/echarts": "components/mpvue-echarts/src/echarts",
        "components/drawer/hj-dragabledrawer": "components/drawer/hj-dragabledrawer",
        "components/m-search/m-search": "components/m-search/m-search",
        "components/m-icon/m-icon": "components/m-icon/m-icon",
        "components/list/uni-badge/uni-badge": "components/list/uni-badge/uni-badge"
      }[e] || e) + ".wxss", i = a.p + r, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
        var u = s[c],
            l = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (l === r || l === i)) return n();
      }

      var m = document.getElementsByTagName("style");

      for (c = 0; c < m.length; c++) {
        u = m[c], l = u.getAttribute("data-href");
        if (l === r || l === i) return n();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = n, p.onerror = function (n) {
        var r = n && n.target && n.target.src || i,
            s = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        s.request = r, delete o[e], p.parentNode.removeChild(p), t(s);
      }, p.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var s = new Promise(function (n, t) {
        r = i[e] = [n, t];
      });
      n.push(r[2] = s);
      var u,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = c(e), u = function u(n) {
        l.onerror = l.onload = null, clearTimeout(m);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                s = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            s.type = r, s.request = o, t[1](s);
          }

          i[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        u({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = u, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, a.m = e, a.c = r, a.d = function (e, n, t) {
    a.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, n) {
    if (1 & n && (e = a(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (a.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      a.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, a.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(n, "a", n), n;
  }, a.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = u.push.bind(u);
  u.push = n, u = u.slice();

  for (var m = 0; m < u.length; m++) {
    n(u[m]);
  }

  var p = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"03a6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/main/main":{navigationBarTitleText:"首页"},"pages/login/login":{navigationBarTitleText:"登录"},"pages/login/diyHost":{navigationBarTitleText:"自定义域名"},"pages/reg/reg":{navigationBarTitleText:"注册"},"pages/pwd/pwd":{navigationBarTitleText:"找回密码"},"pages/user/accountEdit":{navigationBarTitleText:"账号管理"},"pages/user/user":{navigationBarTitleText:"我的"},"pages/pointCheck/pointCheck":{navigationBarTitleText:"应用中心",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/pointList/pointList":{navigationBarTitleText:"点位检查",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/pointDetail/pointDetail":{navigationBarTitleText:"点位详情"},"pages/pointAdd/pointAdd":{navigationBarTitleText:"新增检查",titleNView:{buttons:[{text:"一键正常",fontSrc:"/static/uni.ttf",fontSize:"14px",width:"70px"}]}},"pages/pointAdd/pointCheckInfo":{navigationBarTitleText:"检查结论"},"pages/mpvue-echarts/chartList":{navigationBarTitleText:"数据统计"},"pages/mpvue-echarts/deviceChart":{navigationBarTitleText:"报警设备类型统计",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/mpvue-echarts/eventChart":{navigationBarTitleText:"报警事件类型统计",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/mpvue-echarts/valveChart":{navigationBarTitleText:"阀组压力统计",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/mpvue-echarts/mpvue-echarts":{navigationBarTitleText:"ECharts图表"},"pages/common/inputPage":{navigationBarTitleText:"输入内容"},"pages/danger/addDanger":{navigationBarTitleText:"隐患上报"},"pages/statistics/statistics":{navigationBarTitleText:"数据统计"},"pages/danger/detailDanger":{navigationBarTitleText:"隐患整改审批"},"pages/ptw/addPtw":{navigationBarTitleText:"作业风险评估"},"pages/ptw/rapSelected":{navigationBarTitleText:"安全措施",titleNView:{buttons:[{text:"",fontSrc:"/static/aliIcon/iconfont.ttf",fontSize:"22px"}]}},"pages/ptw/rapAdd":{navigationBarTitleText:"新增安全措施"},"pages/ptw/rapConsider":{navigationBarTitleText:"考虑因素"},"pages/ptw/rapHarm":{navigationBarTitleText:"危害"},"pages/ptw/rapSolution":{navigationBarTitleText:"参考措施"}},globalStyle:{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#2D68AA",backgroundColor:"#fbf9fe"}};e.default=i},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"0edc":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("66fd")),r=o(n("2f62"));function o(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var a=new r.default.Store({state:{forcedLogin:!0,hasLogin:!1,userName:"",userType:1,userInfo:null,inputPageText:"",key:"",sublistItem:null,sublistIndex:0},mutations:{login:function(t,e){null!=e&&(t.userName=e.username||"新用户",t.hasLogin=!0,t.userType=e.yhlx,t.userInfo=e)},logout:function(t){t.userName="",t.userInfo=null,t.hasLogin=!1},setInputPageText:function(t,e){t.inputPageText=e.text,t.key=e.key},setSublistItem:function(t,e){t.sublistItem=e.item,t.sublistIndex=e.index},removeSublistItem:function(t){t.sublistItem=null},removeInputItem:function(t){t.inputPageText="",t.key=""}}}),s=a;e.default=s},"17f7":function(t,e,n){"use strict";var i="http://222.223.19.166:10012/ehsq",r={host:i,login:"/mobile/system/login.do",scan:"/mobile/dwsm.do",UpdatePoint:"/mobile/updateJcjl.do",getTabCounts:"/mobile/getTabCount.do",getPointDetail:"/mobile/getJcjl.do",getMainPageCount:"/mobile/getSytj.do",alertDeviceCount:"/mobile/bjsblx.do",alertEventCount:"/mobile/bjsjlx.do",alertValveCount:"/mobile/ylfz.do",getValveDataByFloor:"/mobile/getfz.do",uploadImage:"/uploadImg",loadImage:"/mobile/loadYhzp.do?fileid=",deleteImage:"/mobile/delZp.do",addYhzgToFlow:"/mobile/addYhzgToFlow.do",getYhzgListByType:"/mobile/getYhzgListByType.do",getYhzgTabCounts:"/mobile/getYhzgTabCounts.do",getYhzgDetail:"/mobile/getYhzgDetail.do",updateAndSendFlowForMobile:"/mobile/updateAndSendFlowForMobile.do",showFlowPic:"/mobile/showFlowPic.do",getUserDeptName:"/mobile/getUserDeptName.do",getActNodeInsts:"/mobile/getActNodeInsts.do",listForInst:"/mobile/listForInst.do",getYjzsStatics:"/mobile/getYjzsStatics.do",choiceICON:"/mobile/choiceICON.do",savePTW:"/mobile/savePTW.do",savePTWFlow:"/mobile/savePTWFlow.do",getConsiderByIcon:"/mobile/loadklysForVue.do",getHarmByConsi:"/mobile/loadwhForVue.do",getSolutionsByHarmId:"/mobile/loadckcsForVue.do",getSelectedSolutionById:"/mobile/loadIconAndAqcsForVue.do",addSolution:"/mobile/addIconAndAqcsForVue.do",deleteSelectedSolution:"/mobile/delIconAndAqcsForVue.do"};t.exports=r},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return p}),n.d(e,"install",function(){return C}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return A}),n.d(e,"mapGetters",function(){return O}),n.d(e,"mapActions",function(){return P}),n.d(e,"createNamespacedHelpers",function(){return L});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,c);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;f(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new u(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var p=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&C(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,l=s.dispatch,u=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=i,_(this,r,[],this._modules.root),y(this,r),n.forEach(function(t){return t(e)}),d.config.devtools&&o(this)},g={state:{configurable:!0}};function v(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),y(t,n,e)}function y(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:o}),d.config.silent=s,t.strict&&k(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),d.nextTick(function(){return i.$destroy()}))}function _(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=T(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){d.set(s,l,i.state)})}var u=i.context=x(t,a,n);i.forEachMutation(function(e,n){var i=a+n;w(t,i,e,u)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;S(t,i,r,u)}),i.forEachGetter(function(e,n){var i=a+n;M(t,i,e,u)}),i.forEachChild(function(i,o){_(t,e,n.concat(o),i,r)})}function x(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=I(n,i,r),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,r){var o=I(n,i,r),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function w(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function S(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function M(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function k(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function I(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function C(t){d&&t===d||(d=t,i(d))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},p.prototype.commit=function(t,e,n){var i=this,r=I(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},p.prototype.dispatch=function(t,e){var n=this,i=I(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},p.prototype.subscribe=function(t){return v(t,this._subscribers)},p.prototype.subscribeAction=function(t){return v(t,this._actionSubscribers)},p.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},p.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},p.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),y(this,this.state)},p.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),m(this)},p.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},p.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(p.prototype,g);var D=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=B(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),A=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=B(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),O=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||B(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),P=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=B(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),L=function(t){return{mapState:D.bind(null,t),mapGetters:O.bind(null,t),mapMutations:A.bind(null,t),mapActions:P.bind(null,t)}};function E(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function B(t,e,n){var i=t._modulesNamespaceMap[n];return i}var R={Store:p,install:C,version:"3.0.1",mapState:D,mapMutations:A,mapGetters:O,mapActions:P,createNamespacedHelpers:L};e["default"]=R},3731:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("17f7"),o=function(e,n,o,a,s,l){""!=o&&t.showLoading({title:o}),console.log(i("request.js :"+e," at util/request.js:15")),t.request({url:r.host+e,data:n,header:{"Content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){""!=o&&t.hideLoading(),"true"==e.data.success?a(e.data):s()},fail:function(e){""!=o&&t.hideLoading(),s()},complete:function(){""!=o&&t.hideLoading(),l()}})},a=function(e,n,i,o,a,s){""!=i&&t.showLoading({title:i}),t.request({url:r.host+e,data:n,header:{"Content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){t.hideLoading(),"200"==e.statusCode?o(e.data):a()},fail:function(e){t.hideLoading(),a()},complete:function(){t.hideLoading(),s()}})},s=function(e,n,i,r){t.request({url:e,header:{"Content-type":"application/x-www-form-urlencoded"},method:"GET",success:function(t){"true"==t.success?i(t.data):r()},fail:function(t){r()}})},l=function(e,n,i,o,a,s,l,u){var c=this;t.uploadFile({url:r.host+e,filePath:n[a],name:"fileData",formData:{},success:function(t){i++,l(t)},fail:function(t){o++},complete:function(){a++,a==s?(t.showToast({title:"总共"+i+"张上传成功,"+o+"张上传失败！",icon:"none",duration:2e3}),null!=u&&u("200")):c.uploadImage(e,n,i,o,a,s,l,u)}})},u={request:s,requestLoading:o,requestLoadingNew:a,uploadImage:l};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"59a9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USERS_KEY",i=function(){var e="";return e=t.getStorageSync(n),e?JSON.parse(e):null},r=function(e){t.setStorageSync(n,JSON.stringify(e))},o=function(){t.removeStorageSync(n),t.removeStorageSync("userInfo")},a=function(t){var e={};return e=JSON.parse(JSON.stringify(t)),e},s={getUsers:i,addUser:r,removeUser:o,copyObj:a};e.default=s}).call(this,n("6e42")["default"])},"5ec9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__3823D2C"};e.default=i},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function c(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||c(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),M=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,T=b(function(t){return t.replace(k,"-$1").toLowerCase()});function I(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var D=Function.prototype.bind?C:I;function A(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function O(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function L(t,e,n){}var E=function(t,e,n){return!1},N=function(t){return t};function B(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return B(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return B(t[n],e[n])})}catch(u){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],j={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:L,parsePlatformTagName:N,mustUseProp:E,async:!0,_lifecycleHooks:F},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var G=new RegExp("[^"+V.source+".$_\\d]");function q(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var U,Y="__proto__"in{},X="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Z&&WXEnvironment.platform.toLowerCase(),K=X&&window.navigator.userAgent.toLowerCase(),Q=K&&/msie|trident/.test(K),tt=(K&&K.indexOf("msie 9.0"),K&&K.indexOf("edge/")>0),et=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===J),nt=(K&&/chrome\/\d+/.test(K),K&&/phantomjs/.test(K),K&&K.match(/firefox\/(\d+)/),{}.watch);if(X)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===U&&(U=!X&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),U},ot=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=L,ct=0,ht=function(){this.id=ct++,this.subs=[]};function ft(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function dt(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){y(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var pt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function mt(t){return new pt(void 0,void 0,void 0,String(t))}function yt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,xt=Object.create(_t),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=_t[t];W(xt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(xt),St=!0;function Mt(t){St=t}var kt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)?(Y?t.push!==t.__proto__.push?It(t,xt,wt):Tt(t,xt):It(t,xt,wt),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function It(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];W(t,o,e[o])}}function Ct(t,e){var n;if(l(t)&&!(t instanceof pt))return x(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:St&&!rt()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Dt(t,e,n,i,r){var o=new ht,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var u=!r&&Ct(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Pt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,u=!r&&Ct(e),o.notify())}})}}function At(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Dt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Pt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Dt(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Ct(t[e])};var Lt=j.optionMergeStrategies;function Et(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],x(t,n)?i!==r&&c(i)&&c(r)&&Et(i,r):At(t,n,r));return t}function Nt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Et(i,r):r}:e?t?function(){return Et("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Bt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function $t(t,e,n,i){var r=Object.create(t||null);return e?O(r,e):r}Lt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},F.forEach(function(t){Lt[t]=Bt}),z.forEach(function(t){Lt[t+"s"]=$t}),Lt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in O(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},Lt.props=Lt.methods=Lt.inject=Lt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return O(r,t),e&&O(r,e),r},Lt.provide=Nt;var zt=function(t,e){return void 0===e?t:e};function Ft(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=S(r),a[o]={type:null})}else if(c(n))for(var s in n)r=n[s],o=S(s),a[o]=c(r)?r:{type:r};else 0;t.props=a}}function jt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(c(n))for(var o in n){var a=n[o];i[o]=c(a)?O({from:o},a):{from:a}}else 0}}function Vt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Ft(e,n),jt(e,n),Vt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ht(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)x(t,o)||s(o);function s(i){var r=Lt[i]||zt;a[i]=r(t[i],e[i],n,i)}return a}function Wt(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var o=S(n);if(x(r,o))return r[o];var a=M(o);if(x(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Gt(t,e,n,i){var r=e[t],o=!x(n,t),a=n[t],s=Xt(Boolean,r.type);if(s>-1)if(o&&!x(r,"default"))a=!1;else if(""===a||a===T(t)){var l=Xt(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=qt(i,r,t);var u=St;Mt(!0),Ct(a),Mt(u)}return a}function qt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Ut(e.type)?i.call(t):i}}function Ut(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Yt(t,e){return Ut(t)===Ut(e)}function Xt(t,e){if(!Array.isArray(e))return Yt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Yt(e[n],t))return n;return-1}function Zt(t,e,n){ft();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(er){Kt(er,i,"errorCaptured hook")}}}Kt(t,e,n)}finally{dt()}}function Jt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&d(o)&&!o._handled&&(o.catch(function(t){return Zt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(er){Zt(er,i,r)}return o}function Kt(t,e,n){if(j.errorHandler)try{return j.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Qt(er,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!X&&!Z||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(L)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,ae=new MutationObserver(ie),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Zt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ue=new st;function ce(t){he(t,ue),ue.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var fe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function de(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Jt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)Jt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function pe(t,e,n,r,a,s){var l,u,c,h;for(l in t)u=t[l],c=e[l],h=fe(l),i(u)||(i(c)?(i(u.fns)&&(u=t[l]=de(u,s)),o(h.once)&&(u=t[l]=a(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==c&&(c.fns=u,t[l]=c));for(l in e)i(t[l])&&(h=fe(l),r(h.name,e[l],h.capture))}function ge(t,e,n){var o=e.options.props;if(!i(o)){var a={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var u in o){var c=T(u);ve(a,l,u,c,!0)||ve(a,s,u,c,!1)}return a}}function ve(t,e,n,i,o){if(r(e)){if(x(e,n))return t[n]=e[n],o||delete e[n],!0;if(x(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function me(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ye(t){return s(t)?[mt(t)]:Array.isArray(t)?xe(t):void 0}function _e(t){return r(t)&&r(t.text)&&a(t.isComment)}function xe(t,e){var n,a,l,u,c=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=c.length-1,u=c[l],Array.isArray(a)?a.length>0&&(a=xe(a,(e||"")+"_"+n),_e(a[0])&&_e(u)&&(c[l]=mt(u.text+a[0].text),a.shift()),c.push.apply(c,a)):s(a)?_e(u)?c[l]=mt(u.text+a):""!==a&&c.push(mt(a)):_e(a)&&_e(u)?c[l]=mt(u.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),c.push(a)));return c}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(Mt(!1),Object.keys(e).forEach(function(n){Dt(t,n,e[n])}),Mt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&x(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Me(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var u in n)n[u].every(ke)&&delete n[u];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Ie(e,l,t[l]))}else r={};for(var u in e)u in r||(r[u]=Ce(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),W(r,"$stable",a),W(r,"$key",s),W(r,"$hasNormal",o),r}function Ie(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ye(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ce(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),c=u.next();while(!c.done)n.push(e(c.value,n.length)),c=u.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Ae(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=O(O({},i),n)),r=o(n)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Oe(t){return Wt(this.$options,"filters",t,!0)||N}function Pe(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Le(t,e,n,i,r){var o=j.keyCodes[e]||n;return r&&i&&!j.keyCodes[e]?Pe(r,i):o?Pe(o,t):i?T(i)!==e:void 0}function Ee(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||j.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(a),u=T(a);if(!(l in o)&&!(u in o)&&(o[a]=n[a],r)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(i,"__static__"+t,!1),i)}function Be(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&$e(t[i],e+"_"+i,n);else $e(t,e,n)}function $e(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ze(t,e){if(e)if(c(e)){var n=t.on=t.on?O({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Fe(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Fe(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function je(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Be,t._n=g,t._s=p,t._l=De,t._t=Ae,t._q=B,t._i=R,t._m=Ne,t._f=Oe,t._k=Le,t._b=Ee,t._v=mt,t._e=vt,t._u=Fe,t._g=ze,t._d=je,t._p=Ve}function We(t,e,i,r,a){var s,l=this,u=a.options;x(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var c=o(u._compiled),h=!c;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Se(u.inject,r),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=Me(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),c&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=rn(s,t,e,n,i,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,h)}}function Ge(t,e,i,o,a){var s=t.options,l={},u=s.props;if(r(u))for(var c in u)l[c]=Gt(c,u,e||n);else r(i.attrs)&&Ue(l,i.attrs),r(i.props)&&Ue(l,i.props);var h=new We(i,l,a,o,t),f=s.render.call(null,h._c,h);if(f instanceof pt)return qe(f,i,h.parent,s,h);if(Array.isArray(f)){for(var d=ye(f)||[],p=new Array(d.length),g=0;g<d.length;g++)p[g]=qe(d[g],i,h.parent,s,h);return p}}function qe(t,e,n,i,r){var o=yt(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ue(t,e){for(var n in e)t[S(n)]=e[n]}He(We.prototype);var Ye={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ye.prepatch(n,n)}else{var i=t.componentInstance=Je(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;In(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,On(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?An(e,!0):e.$destroy())}},Xe=Object.keys(Ye);function Ze(t,e,n,a,s){if(!i(t)){var u=n.$options._base;if(l(t)&&(t=u.extend(t)),"function"===typeof t){var c;if(i(t.cid)&&(c=t,t=pn(c,u),void 0===t))return dn(c,e,n,a,s);e=e||{},fi(t),r(e.model)&&tn(t.options,e);var h=ge(e,t,s);if(o(t.options.functional))return Ge(t,h,e,n,a);var f=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}Ke(e);var p=t.options.name||s,g=new pt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:a},c);return g}}}function Je(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ke(t){for(var e=t.hook||(t.hook={}),n=0;n<Xe.length;n++){var i=Xe[n],r=e[i],o=Ye[i];r===o||r&&r._merged||(e[i]=r?Qe(o,r):o)}}function Qe(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=nn),on(t,e,n,i,r)}function on(t,e,n,i,o){if(r(n)&&r(n.__ob__))return vt();if(r(n)&&r(n.is)&&(e=n.is),!e)return vt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===nn?i=ye(i):o===en&&(i=me(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||j.getTagNamespace(e),a=j.isReservedTag(e)?new pt(j.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Wt(t.$options,"components",e))?new pt(e,n,i,void 0,void 0,t):Ze(l,n,t,i,e)):a=Ze(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&an(a,s),r(n)&&sn(n),a):vt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&an(l,e,n)}}function sn(t){l(t.style)&&ce(t.style),l(t.class)&&ce(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Me(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var o=i&&i.data;Dt(t,"$attrs",o&&o.attrs||n,null,!0),Dt(t,"$listeners",e._parentListeners||n,null,!0)}var un,cn=null;function hn(t){He(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Te(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{cn=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Zt(er,e,"render"),t=e._vnode}finally{cn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=vt()),t.parent=r,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function dn(t,e,n,i,r){var o=vt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function pn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=cn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,u=null,c=null;n.$on("hook:destroyed",function(){return y(a,n)});var h=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==u&&(clearTimeout(u),u=null),null!==c&&(clearTimeout(c),c=null))},f=$(function(n){t.resolved=fn(n,e),s?a.length=0:h(!0)}),p=$(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(f,p);return l(g)&&(d(g)?i(t.resolved)&&g.then(f,p):d(g.component)&&(g.component.then(f,p),r(g.error)&&(t.errorComp=fn(g.error,e)),r(g.loading)&&(t.loadingComp=fn(g.loading,e),0===g.delay?t.loading=!0:u=setTimeout(function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(c=setTimeout(function(){c=null,i(t.resolved)&&p(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function vn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||gn(n)))return n}}function mn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function yn(t,e){un.$on(t,e)}function _n(t,e){un.$off(t,e)}function xn(t,e){var n=un;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){un=t,pe(e,n||{},yn,_n,xn,t),un=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?A(n):n;for(var i=A(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)Jt(n[o],e,i,e,r)}return e}}var Sn=null;function Mn(t){var e=Sn;return Sn=t,function(){Sn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=Mn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){On(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),On(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function In(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),u=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Mt(!1);for(var c=t._props,h=t.$options._propKeys||[],f=0;f<h.length;f++){var d=h[f],p=t.$options.props;c[d]=Gt(d,p,e,t)}Mt(!0),t.$options.propsData=e}i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,g),u&&(t.$slots=Me(o,r.context),t.$forceUpdate())}function Cn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Cn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);On(t,"activated")}}function An(t,e){if((!e||(t._directInactive=!0,!Cn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)An(t.$children[n]);On(t,"deactivated")}}function On(t,e){ft();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Jt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Pn=[],Ln=[],En={},Nn=!1,Bn=!1,Rn=0;function $n(){Rn=Pn.length=Ln.length=0,En={},Nn=Bn=!1}var zn=Date.now;if(X&&!Q){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&zn()>document.createEvent("Event").timeStamp&&(zn=function(){return Fn.now()})}function jn(){var t,e;for(zn(),Bn=!0,Pn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Pn.length;Rn++)t=Pn[Rn],t.before&&t.before(),e=t.id,En[e]=null,t.run();var n=Ln.slice(),i=Pn.slice();$n(),Wn(n),Vn(i),ot&&j.devtools&&ot.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&On(i,"updated")}}function Hn(t){t._inactive=!1,Ln.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Gn(t){var e=t.id;if(null==En[e]){if(En[e]=!0,Bn){var n=Pn.length-1;while(n>Rn&&Pn[n].id>t.id)n--;Pn.splice(n+1,0,t)}else Pn.push(t);Nn||(Nn=!0,le(jn))}}var qn=0,Un=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++qn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};Un.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Zt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ce(t),dt(),this.cleanupDeps()}return t},Un.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Un.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Un.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Un.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Zt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Un.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Un.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Un.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Yn={enumerable:!0,configurable:!0,get:L,set:L};function Xn(t,e,n){Yn.get=function(){return this[e][n]},Yn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Yn)}function Zn(t){t._watchers=[];var e=t.$options;e.props&&Jn(t,e.props),e.methods&&oi(t,e.methods),e.data?Kn(t):Ct(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&ai(t,e.watch)}function Jn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||Mt(!1);var a=function(o){r.push(o);var a=Gt(o,e,n,t);Dt(i,o,a),o in t||Xn(t,"_props",o)};for(var s in e)a(s);Mt(!0)}function Kn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},c(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&x(i,o)||H(o)||Xn(t,"_data",o)}Ct(e,!0)}function Qn(t,e){ft();try{return t.call(e,e)}catch(er){return Zt(er,e,"data()"),{}}finally{dt()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new Un(t,a||L,L,ti)),r in t||ni(t,r,o)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(Yn.get=i?ii(e):ri(n),Yn.set=L):(Yn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):L,Yn.set=n.set||L),Object.defineProperty(t,e,Yn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:D(e[n],t)}function ai(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return c(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=At,t.prototype.$delete=Ot,t.prototype.$watch=function(t,e,n){var i=this;if(c(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Un(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){Zt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ui=0;function ci(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=Ht(fi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),mn(e),ln(e),On(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Zn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&On(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fi(t){var e=t.options;if(t.super){var n=fi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=di(t);r&&O(t.extendOptions,r),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function pi(t){this._init(t)}function gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function vi(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function mi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&yi(a),a.options.computed&&_i(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,z.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),r[i]=a,a}}function yi(t){var e=t.options.props;for(var n in e)Xn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function xi(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function wi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Si(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=bi(a.componentOptions);s&&!e(s)&&Mi(n,o,i,r)}}}function Mi(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}ci(pi),li(pi),wn(pi),Tn(pi),hn(pi);var ki=[String,RegExp,Array],Ti={name:"keep-alive",abstract:!0,props:{include:ki,exclude:ki,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Mi(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Si(t,function(t){return wi(e,t)})}),this.$watch("exclude",function(e){Si(t,function(t){return!wi(e,t)})})},render:function(){var t=this.$slots.default,e=vn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!wi(o,i))||a&&i&&wi(a,i))return e;var s=this,l=s.cache,u=s.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[c]?(e.componentInstance=l[c].componentInstance,y(u,c),u.push(c)):(l[c]=e,u.push(c),this.max&&u.length>parseInt(this.max)&&Mi(l,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Ii={KeepAlive:Ti};function Ci(t){var e={get:function(){return j}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:O,mergeOptions:Ht,defineReactive:Dt},t.set=At,t.delete=Ot,t.nextTick=le,t.observable=function(t){return Ct(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,Ii),gi(t),vi(t),mi(t),xi(t)}Ci(pi),Object.defineProperty(pi.prototype,"$isServer",{get:rt}),Object.defineProperty(pi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pi,"FunctionalRenderContext",{value:We}),pi.version="2.6.10";var Di="[object Array]",Ai="[object Object]";function Oi(t,e){var n={};return Pi(t,e),Li(t,e,"",n),n}function Pi(t,e){if(t!==e){var n=Ni(t),i=Ni(e);if(n==Ai&&i==Ai){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:Pi(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){Pi(t[n],e)})}}function Li(t,e,n,i){if(t!==e){var r=Ni(t),o=Ni(e);if(r==Ai)if(o!=Ai||Object.keys(t).length<Object.keys(e).length)Ei(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Ni(o),l=Ni(a);if(s!=Di&&s!=Ai)o!=e[r]&&Ei(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ei(i,(""==n?"":n+".")+r,o):o.length<a.length?Ei(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Li(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Ai)if(l!=Ai||Object.keys(o).length<Object.keys(a).length)Ei(i,(""==n?"":n+".")+r,o);else for(var u in o)Li(o[u],a[u],(""==n?"":n+".")+r+"."+u,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ei(i,n,t):t.length<e.length?Ei(i,n,t):t.forEach(function(t,r){Li(t,e[r],n+"["+r+"]",i)}):Ei(i,n,t)}}function Ei(t,e,n){t[e]=n}function Ni(t){return Object.prototype.toString.call(t)}function Bi(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ri(t){return Pn.find(function(e){return t._watcher===e})}function $i(t,e){if(!t.__next_tick_pending&&!Ri(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Zt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function zi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Fi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=zi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Oi(r,o);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Bi(n)})):Bi(this)}};function ji(){}function Vi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=ji),t.$options.render||(t.$options.render=ji),"mp-toutiao"!==t.mpHost&&On(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Un(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&On(t,"beforeUpdate")}},!0),n=!1,t}function Hi(t,e){return r(t)||r(e)?Wi(t,Gi(e)):""}function Wi(t,e){return t?e?t+" "+e:t:e||""}function Gi(t){return Array.isArray(t)?qi(t):l(t)?Ui(t):"string"===typeof t?t:""}function qi(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Gi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ui(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Yi=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Xi(t){return Array.isArray(t)?P(t):"string"===typeof t?Yi(t):t}var Zi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Ji(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Ji(t[i],n.slice(1).join("."))}function Ki(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:A(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return $i(this,t)},Zi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;ft();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=Jt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t),dt(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return c(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Ji(e||this,t)},t.prototype.__get_class=function(t,e){return Hi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Xi(t),i=e?O(e,n):n;return Object.keys(i).map(function(t){return T(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var Qi=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qi.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Qi.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Qi}pi.prototype.__patch__=Fi,pi.prototype.$mount=function(t,e){return Vi(this,t,e)},tr(pi),Ki(pi),e["default"]=pi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=Me,e.createPage=Se,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return d(t)||f(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var p=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function m(t){return"string"===typeof t}function y(t){return"[object Object]"===p.call(t)}function _(t,e){return g.call(t,e)}function x(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),M=["invoke","success","fail","complete","returnValue"],k={},T={};function I(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?C(n):n}function C(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function A(t,e){Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&(t[n]=I(t[n],e[n]))})}function O(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==M.indexOf(n)&&v(e[n])&&D(t[n],e[n])})}function P(t,e){"string"===typeof t&&y(e)?A(T[t]||(T[t]={}),e):y(t)&&A(k,t)}function L(t,e){"string"===typeof t?y(e)?O(T[t],e):delete T[t]:y(t)&&O(k,t)}function E(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function B(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(E(r));else{var o=r(e);if(N(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){B(t[n],e).then(function(t){return v(i)&&i(t)||t})}}}),e}function $(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,c(k.returnValue));var i=T[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,c(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function F(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=z(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=B(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(r))})}return e.apply(void 0,[R(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var j={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},V=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,W=/^on/;function G(t){return H.test(t)}function q(t){return V.test(t)}function U(t){return W.test(t)}function Y(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function X(t){return!(G(t)||q(t)||U(t))}function Z(t,e){return X(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return v(n.success)||v(n.fail)||v(n.complete)?$(t,F.apply(void 0,[t,e,n].concat(r))):$(t,Y(new Promise(function(i,o){F.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var J=1e-4,K=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/K*(e||tt);return n<0&&(n=-n),n=Math.floor(n+J),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:j},ot=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:P,removeInterceptor:L}),at={},st=[],lt=[],ut=["success","fail","cancel","complete"];function ct(t,e,n){return function(i){return e(ft(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(e)){var o=!0===r?e:{};for(var a in v(n)&&(n=n(e,o)||{}),e)if(_(n,a)){var s=n[a];v(s)&&(s=s(e[a],e,o)),s?m(s)?o[s]=e[a]:y(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?o[a]=ct(t,e[a],i):r||(o[a]=e[a]);return o}return v(e)&&(e=ct(t,e,i)),e}function ft(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(at.returnValue)&&(e=at.returnValue(t,e)),ht(t,e,n,{},i)}function dt(t,e){if(_(at,t)){var n=at[t];return n?function(e,i){var r=n;v(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return q(t)?ft(t,a,r.returnValue,G(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),gt=["subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(r),v(i)&&i(r)}}gt.forEach(function(t){pt[t]=vt(t)});var mt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function yt(t,e,n){return t[e].apply(t,n)}function _t(){return yt(mt(),"$on",Array.prototype.slice.call(arguments))}function xt(){return yt(mt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return yt(mt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return yt(mt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:_t,$off:xt,$once:bt,$emit:wt});function Mt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i=plus.webview.getWebviewById(t.__uniapp_mask_id);i=i.parent()||i;var r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Mt(e),e}function Tt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var It=Object.freeze({requireNativePlugin:Tt,getSubNVueById:kt}),Ct=Page,Dt=Component,At=/:/g,Ot=b(function(t){return S(t.replace(At,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Ot(n)].concat(r))}}}function Lt(t,e){var n=e[t];e[t]=n?function(){Pt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("onLoad",t),Ct(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Lt("created",t),Dt(t)};var Et=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Bt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Bt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Bt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function $t(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ft(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function jt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return y(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var Vt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Wt(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(i)&&i.props&&a.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){y(t)&&t.props&&a.push(e({properties:qt(t.props,!0)}))}),a}function Gt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):y(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(y(i)){var r=i["default"];v(r)&&(r=r()),i.type=Gt(e,i.type),n[e]={type:-1!==Vt.indexOf(i.type)?i.type:null,value:r,observer:Ht(e)}}else{var o=Gt(e,i);n[e]={type:-1!==Vt.indexOf(o)?o:null,observer:Ht(e)}}}),n}function Ut(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=x,t.preventDefault=x,t.target=t.target||{},_(t,"detail")||(t.detail={}),y(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Yt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):y(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Xt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Yt(t,e)}),i}function Zt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Jt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Xt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Zt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Kt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Ut(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var l=i.charAt(0)===Kt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent);var a=r[i];if(!v(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,Jt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Nt(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return o.globalData=t.$options.globalData||{},Rt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=oe(n[r],e),i)return i}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ce(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ue})}var fe=["onUniNViewMessage"];function de(t){var e=he(t);return Rt(e,fe),e}function pe(t){return App(de(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=$t(i.default,t),s=o(a,2),l=s[0],u=s[1],c={options:{multipleSlots:!0,addGlobalClass:!0},data:jt(u,i.default.prototype),behaviors:Wt(u,ae),properties:qt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ft(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ce,__e:ee}};return Array.isArray(u.wxsCallMethods)&&u.wxsCallMethods.forEach(function(t){c.methods[t]=function(e){return this.$vm[t](e)}}),n?c:[c,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function me(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ye=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=me(t);return Rt(n.methods,ye,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function xe(t){return _e(t,{isPage:se,initRelation:le})}ye.push.apply(ye,Et);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=xe(t);return Rt(e.methods,be),e}function Se(t){return Component(we(t))}function Me(t){return Component(me(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var ke={};Object.keys(ot).forEach(function(t){ke[t]=ot[t]}),Object.keys(St).forEach(function(t){ke[t]=St[t]}),Object.keys(It).forEach(function(t){ke[t]=Z(t,It[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(at,t))&&(ke[t]=Z(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=St),wx.createApp=pe,wx.createPage=Se,wx.createComponent=Me;var Te=ke,Ie=Te;e.default=Ie}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var h=e.version,f="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",p=1800,g=300,v=10,m="__DC_STAT_UUID",y="__DC_UUID_VALUE";function _(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(m)}catch(n){e=y}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(m,e)}catch(n){t.setStorageSync(m,y)}}return e}var x=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var o in n)i[n[o]]=t[n[o]],r+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},M=function(){var e="";return"wx"!==S()&&"qq"!==S()||(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===S()?plus.runtime.version:""},T=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},I=function(e){var n=S(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},C="First__Visit__Time",D="Last__Visit__Time",A=function(){var e=t.getStorageSync(C),n=0;return e?n=e:(n=w(),t.setStorageSync(C,n),t.removeStorageSync(D)),n},O=function(){var e=t.getStorageSync(D),n=0;return n=e||"",t.setStorageSync(D,w()),n},P="__page__residence__time",L=0,E=0,N=function(){return L=w(),"n"===S()&&t.setStorageSync(P,w()),L},B=function(){return E=w(),"n"===S()&&(L=t.getStorageSync(P)),E-L},R="Total__Visit__Count",$=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},z=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},F=0,j=0,V=function(){var t=(new Date).getTime();return F=t,j=0,t},H=function(){var t=(new Date).getTime();return j=t,t},W=function(t){var e=0;if(0!==F&&(e=j-F),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>p;return{residenceTime:e,overtime:i}}return{residenceTime:e}},G=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===S()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},U=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Y=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=n("03a6").default,Z=n("5ec9").default||n("5ec9"),J=t.getSystemInfoSync(),K=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:S(),mpn:M(),ak:Z.appid,usv:h,v:k(),ch:T(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===J.platform?"a":"i",brand:J.brand||"",md:J.model,sv:J.system.replace(/(Android|iOS)\s/,""),mpsdk:J.SDKVersion||"",mpv:J.version||"",lang:J.language,pr:J.pixelRatio,ww:J.windowWidth,wh:J.windowHeight,sw:J.screenWidth,sh:J.screenHeight}}return c(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=W("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=W();V();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=G();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=W("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=W("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=I(t.scene),this.statData.fvts=A(),this.statData.lvts=O(),this.statData.tvc=$(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=w(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===S()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",a),!(B()<v)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var l=[],u=[],c=[],f=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?c.push(n):u.push(n)})};for(var d in s)f(d);l.push.apply(l,u.concat(c));var p={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){i._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=x(z(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){Y(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return l(this,n),e=i(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),c(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),c(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,U(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,U(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(K),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},a10a:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return o(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},cc99:function(t,e,n){"use strict";(function(t){!function(t,n){n(e)}(0,function(e,n,i){function r(t,e){"createCanvas"===t&&(Lu=null),Ou[t]=e}function o(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Mu.call(t);if("[object Array]"===n){if(!R(t)){e=[];for(var i=0,r=t.length;i<r;i++)e[i]=o(t[i])}}else if(Su[n]){if(!R(t)){var a=t.constructor;if(t.constructor.from)e=a.from(t);else{e=new a(t.length);for(i=0,r=t.length;i<r;i++)e[i]=o(t[i])}}}else if(!wu[n]&&!R(t)&&!I(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=o(t[s]));return e}function a(t,e,n){if(!M(e)||!M(t))return n?o(e):t;for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],s=e[i];!M(s)||!M(r)||b(s)||b(r)||I(s)||I(r)||k(s)||k(r)||R(s)||R(r)?!n&&i in t||(t[i]=o(e[i],!0)):a(r,s,n)}return t}function s(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=a(n,t[i],e);return n}function l(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function u(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function c(){return Lu||(Lu=Pu().getContext("2d")),Lu}function h(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function f(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function d(t,e,n){u(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function p(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function g(t,e,n){if(t&&e)if(t.forEach&&t.forEach===Tu)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function v(t,e,n){if(t&&e){if(t.map&&t.map===Du)return t.map(e,n);for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t));return i}}function m(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===Au)return t.reduce(e,n,i);for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t);return n}}function y(t,e,n){if(t&&e){if(t.filter&&t.filter===Iu)return t.filter(e,n);for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function _(t,e){var n=Cu.call(arguments,2);return function(){return t.apply(e,n.concat(Cu.call(arguments)))}}function x(t){var e=Cu.call(arguments,1);return function(){return t.apply(this,e.concat(Cu.call(arguments)))}}function b(t){return"[object Array]"===Mu.call(t)}function w(t){return"function"==typeof t}function S(t){return"[object String]"===Mu.call(t)}function M(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function k(t){return!!wu[Mu.call(t)]}function T(t){return!!Su[Mu.call(t)]}function I(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function C(t){return t!==t}function D(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function A(t,e){return null!=t?t:e}function O(t,e,n){return null!=t?t:null!=e?e:n}function P(){return Function.call.apply(Cu,arguments)}function L(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function E(t,e){if(!t)throw new Error(e)}function N(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function B(t){t[Eu]=!0}function R(t){return t[Eu]}function $(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=b(t),i=this;t instanceof $?t.each(e):t&&g(t,e)}function z(t){return new $(t)}function F(){}function j(t,e){var n=new Nu(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function V(t){var e=new Nu(2);return e[0]=t[0],e[1]=t[1],e}function H(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function W(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function G(t){return Math.sqrt(q(t))}function q(t){return t[0]*t[0]+t[1]*t[1]}function U(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function Y(t,e){var n=G(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function X(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Z(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function J(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function K(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function Q(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function tt(t,e){return{target:t,topTarget:e&&e.topTarget}}function et(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}function nt(){}function it(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||Fu}return!1}function rt(){var t=new Hu(6);return ot(t),t}function ot(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function at(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function st(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function lt(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function ut(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function ct(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function ht(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function ft(t){return t>Gu||t<-Gu}function dt(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function pt(t){return(t=Math.round(t))<0?0:t>255?255:t}function gt(t){return t<0?0:t>1?1:t}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function mt(t){return gt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function yt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function _t(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function xt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function bt(t,e){ic&&xt(ic,e),ic=nc.put(t,ic||e.slice())}function wt(t,e){if(t){e=e||[];var n=nc.get(t);if(n)return xt(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in ec)return xt(e,ec[i]),bt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void _t(e,0,0,0,1);l=mt(s.pop());case"rgb":return 3!==s.length?void _t(e,0,0,0,1):(_t(e,vt(s[0]),vt(s[1]),vt(s[2]),l),bt(t,e),e);case"hsla":return 4!==s.length?void _t(e,0,0,0,1):(s[3]=mt(s[3]),St(s,e),bt(t,e),e);case"hsl":return 3!==s.length?void _t(e,0,0,0,1):(St(s,e),bt(t,e),e);default:return}}_t(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(_t(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),bt(t,e),e):void _t(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(_t(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),bt(t,e),e):void _t(e,0,0,0,1)}}}}function St(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=mt(t[1]),r=mt(t[2]),o=r<=.5?r*(i+1):r+i-r*i,a=2*r-o;return e=e||[],_t(e,pt(255*yt(a,o,n+1/3)),pt(255*yt(a,o,n)),pt(255*yt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function Mt(t,e){var n=wt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return kt(n,4===n.length?"rgba":"rgb")}}function kt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function Tt(t,e){return t[e]}function It(t,e,n){t[e]=n}function Ct(t,e,n){return(e-t)*n+t}function Dt(t,e,n){return n>.5?e:t}function At(t,e,n,i,r){var o=t.length;if(1==r)for(s=0;s<o;s++)i[s]=Ct(t[s],e[s],n);else for(var a=o&&t[0].length,s=0;s<o;s++)for(var l=0;l<a;l++)i[s][l]=Ct(t[s][l],e[s][l],n)}function Ot(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(a=i;a<r;a++)t.push(1===n?e[a]:rc.call(e[a]));for(var o=t[0]&&t[0].length,a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var s=0;s<o;s++)isNaN(t[a][s])&&(t[a][s]=e[a][s])}function Pt(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(o=0;o<i;o++)if(t[o]!==e[o])return!1}else for(var r=t[0].length,o=0;o<i;o++)for(var a=0;a<r;a++)if(t[o][a]!==e[o][a])return!1;return!0}function Lt(t,e,n,i,r,o,a,s,l){var u=t.length;if(1==l)for(h=0;h<u;h++)s[h]=Et(t[h],e[h],n[h],i[h],r,o,a);else for(var c=t[0].length,h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=Et(t[h][f],e[h][f],n[h][f],i[h][f],r,o,a)}function Et(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Nt(t){if(p(t)){var e=t.length;if(p(t[0])){for(var n=[],i=0;i<e;i++)n.push(rc.call(t[i]));return n}return rc.call(t)}return t}function Bt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Rt(t){var e=t[t.length-1].value;return p(e&&e[0])?2:1}function $t(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=p(i[0].value),f=!1,d=!1,g=h?Rt(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/c);var b=i[x].value;if(h&&Pt(b,y,g)||!h&&b===y||(_=!1),y=b,"string"==typeof b){var w=wt(b);w?(b=w,f=!0):d=!0}m.push(b)}if(o||!_){var S=m[u-1];for(x=0;x<u-1;x++)h?Ot(m[x],S,g):!isNaN(m[x])||isNaN(S)||d||f||(m[x]=S);h&&Ot(a(t._target,r),S,g);var M,k,T,I,C,D=0,A=0;if(f)var O=[0,0,0,0];var P=new dt({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(D+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=D;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}D=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(T=m[n],k=m[0===n?n:n-1],I=m[n>u-2?u-1:n+1],C=m[n>u-3?u-1:n+2],h)Lt(k,T,I,C,M,M*M,M*M*M,a(t,r),g);else{if(f)o=Lt(k,T,I,C,M,M*M,M*M*M,O,1),o=Bt(O);else{if(d)return Dt(T,I,M);o=Et(k,T,I,C,M,M*M,M*M*M)}s(t,r,o)}else if(h)At(m[n],m[n+1],M,a(t,r),g);else{var o;if(f)At(m[n],m[n+1],M,O,1),o=Bt(O);else{if(d)return Dt(m[n],m[n+1],M);o=Ct(m[n],m[n+1],M)}s(t,r,o)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function zt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function Ft(t){for(var e=0;t>=vc;)e|=1&t,t>>=1;return t+e}function jt(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;Vt(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Vt(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Ht(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)r(a,t[o=s+l>>>1])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function Wt(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function Gt(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function qt(t,e){function n(n){var s=o[n],u=a[n],c=o[n+1],h=a[n+1];a[n]=u+h,n===l-3&&(o[n+1]=o[n+2],a[n+1]=a[n+2]),l--;var f=Gt(t[c],t,s,u,0,e);s+=f,0!==(u-=f)&&0!==(h=Wt(t[s+u-1],t,c,h,h-1,e))&&(u<=h?i(s,u,c,h):r(s,u,c,h))}function i(n,i,r,o){var a=0;for(a=0;a<i;a++)u[a]=t[n+a];var l=0,c=r,h=n;if(t[h++]=t[c++],0!=--o)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[c],u[l])<0){if(t[h++]=t[c++],d++,f=0,0==--o){p=!0;break}}else if(t[h++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Gt(t[c],u,l,i,0,e))){for(a=0;a<f;a++)t[h+a]=u[l+a];if(h+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[h++]=t[c++],0==--o){p=!0;break}if(0!==(d=Wt(u[l],t,c,o,0,e))){for(a=0;a<d;a++)t[h+a]=t[c+a];if(h+=d,c+=d,0===(o-=d)){p=!0;break}}if(t[h++]=u[l++],1==--i){p=!0;break}g--}while(f>=mc||d>=mc);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else{if(0===i)throw new Error;for(a=0;a<i;a++)t[h+a]=u[l+a]}}else{for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else for(a=0;a<i;a++)t[h+a]=u[l+a]}function r(n,i,r,o){var a=0;for(a=0;a<o;a++)u[a]=t[r+a];var l=n+i-1,c=o-1,h=r+o-1,f=0,d=0;if(t[h--]=t[l--],0!=--i)if(1!==o){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[c],t[l])<0){if(t[h--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[h--]=u[c--],v++,g=0,1==--o){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Gt(u[c],t,n,i,i-1,e))){for(i-=g,d=1+(h-=g),f=1+(l-=g),a=g-1;a>=0;a--)t[d+a]=t[f+a];if(0===i){m=!0;break}}if(t[h--]=u[c--],1==--o){m=!0;break}if(0!=(v=o-Wt(t[l],u,0,o,o-1,e))){for(o-=v,d=1+(h-=v),f=1+(c-=v),a=0;a<v;a++)t[d+a]=u[f+a];if(o<=1){m=!0;break}}if(t[h--]=t[l--],0==--i){m=!0;break}p--}while(g>=mc||v>=mc);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===o){for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else{if(0===o)throw new Error;for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}}else{for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}var o,a,s=mc,l=0,u=[];o=[],a=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&a[t-1]<=a[t]+a[t+1]||t>=2&&a[t-2]<=a[t]+a[t-1])a[t-1]<a[t+1]&&t--;else if(a[t]>a[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&a[t-1]<a[t+1]&&t--,n(t)}},this.pushRun=function(t,e){o[l]=t,a[l]=e,l+=1}}function Ut(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var o=0;if(r<vc)return o=jt(t,n,i,e),void Ht(t,n,i,n+o,e);var a=new qt(t,e),s=Ft(r);do{if((o=jt(t,n,i,e))<s){var l=r;l>s&&(l=s),Ht(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function Yt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Xt(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a,t.createLinearGradient(i,o,r,a)}function Zt(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(a=a*i+n.x,s=s*r+n.y,l*=o),t.createRadialGradient(a,s,0,a,s,l)}function Jt(){return!1}function Kt(t,e,n){var i=Pu(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Qt(t){if("string"==typeof t){var e=Dc.get(t);return e&&e.image}return t}function te(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=Dc.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?!ne(e=o.image)&&o.pending.push(a):(!e&&(e=new Image),e.onload=ee,Dc.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function ee(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function ne(t){return t&&t.width&&t.height}function ie(t,e){var n=t+":"+(e=e||Ec);if(Ac[n])return Ac[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;o<a;o++)r=Math.max(ge(i[o],e).width,r);return Oc>Pc&&(Oc=0,Ac={}),Oc++,Ac[n]=r,r}function re(t,e,n,i,r,o,a){return o?ae(t,e,n,i,r,o,a):oe(t,e,n,i,r,a)}function oe(t,e,n,i,r,o){var a=ve(t,e,r,o),s=ie(t,e);r&&(s+=r[1]+r[3]);var l=a.outerHeight,u=new zt(se(0,s,n),le(0,l,i),s,l);return u.lineHeight=a.lineHeight,u}function ae(t,e,n,i,r,o,a){var s=me(t,{rich:o,truncate:a,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new zt(se(0,l,n),le(0,u,i),l,u)}function se(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function le(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function ue(t,e,n){var i=e.x,r=e.y,o=e.height,a=e.width,s=o/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+a,r+=s,u="middle";break;case"top":i+=a/2,r-=n,l="center",u="bottom";break;case"bottom":i+=a/2,r+=o+n,l="center";break;case"inside":i+=a/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=a-n,r+=s,l="right",u="middle";break;case"insideTop":i+=a/2,r+=n,l="center";break;case"insideBottom":i+=a/2,r+=o-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=a-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=o-n,u="bottom";break;case"insideBottomRight":i+=a-n,r+=o-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function ce(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=he(e,n,i,r);for(var a=0,s=o.length;a<s;a++)o[a]=fe(o[a],r);return o.join("\n")}function he(t,e,n,i){(i=l({},i)).font=e;n=A(n,"...");i.maxIterations=A(i.maxIterations,2);var r=i.minChar=A(i.minChar,0);i.cnCharWidth=ie("国",e);var o=i.ascCharWidth=ie("a",e);i.placeholder=A(i.placeholder,"");for(var a=t=Math.max(0,t-1),s=0;s<r&&a>=o;s++)a-=o;var u=ie(n);return u>a&&(n="",u=0),a=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=a,i.containerWidth=t,i}function fe(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=ie(t,i);if(o<=n)return t;for(var a=0;;a++){if(o<=r||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?de(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;o=ie(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function de(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o);r+=0<=s&&s<=127?n:i}return o}function pe(t){return ie("国",t)}function ge(t,e){return Nc.measureText(t,e)}function ve(t,e,n,i){null!=t&&(t+="");var r=pe(e),o=t?t.split("\n"):[],a=o.length*r,s=a;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",o=[];else if(null!=u)for(var c=he(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),h=0,f=o.length;h<f;h++)o[h]=fe(o[h],c)}return{lines:o,height:a,outerHeight:s,lineHeight:r}}function me(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Lc.lastIndex=0;null!=(i=Lc.exec(t));){var o=i.index;o>r&&ye(n,t.substring(r,o)),ye(n,i[2],i[1]),r=Lc.lastIndex}r<t.length&&ye(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;for(c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2])),C=0;C<a.length;C++){for(var p=a[C],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(D=p.tokens[m]).styleName&&e.rich[D.styleName]||{},_=D.textPadding=y.textPadding,x=D.font=y.font||e.font,b=D.textHeight=A(y.textHeight,pe(x));if(_&&(b+=_[0]+_[2]),D.height=b,D.lineHeight=O(y.textLineHeight,e.textLineHeight,b),D.textAlign=y&&y.textAlign||e.textAlign,D.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+D.lineHeight>d)return{lines:[],width:0,height:0};D.textWidth=ie(D.text,x);var w=y.textWidth,S=null==w||"auto"===w;if("string"==typeof w&&"%"===w.charAt(w.length-1))D.percentWidth=w,u.push(D),w=0;else{if(S){w=D.textWidth;var M=y.textBackgroundColor,k=M&&M.image;k&&ne(k=Qt(k))&&(w=Math.max(w,k.width*b/k.height))}var T=_?_[1]+_[3]:0;w+=T;var I=null!=f?f-v:null;null!=I&&I<w&&(!S||I<T?(D.text="",D.textWidth=w=0):(D.text=ce(D.text,I-T,x,h.ellipsis,{minChar:h.minChar}),D.textWidth=ie(D.text,x),w=D.textWidth+T))}v+=D.width=w,y&&(g=Math.max(g,D.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=A(e.textWidth,l),n.outerHeight=n.height=A(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(var C=0;C<u.length;C++){var D=u[C],P=D.percentWidth;D.width=parseInt(P,10)/100*l}return n}function ye(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function _e(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&N(e)||t.textFont||t.font}function xe(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;u<0&&(s+=u,u=-u),c<0&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(n*=u/(a=n+i),i*=u/a),r+o>u&&(r*=u/(a=r+o),o*=u/a),i+r>c&&(i*=c/(a=i+r),r*=c/a),n+o>c&&(n*=c/(a=n+o),o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function be(t){return we(t),g(t.rich,we),t}function we(t){if(t){t.font=_e(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Bc[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Rc[n]?n:"top",t.textPadding&&(t.textPadding=L(t.textPadding))}}function Se(t,e,n,i,r){i.rich?ke(t,e,n,i,r):Me(t,e,n,i,r)}function Me(t,e,n,i,r){var o=Le(e,"font",i.font||Ec),a=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=ve(n,o,a,i.truncate));var l=s.outerHeight,u=s.lines,c=s.lineHeight,h=Pe(l,i,r),f=h.baseX,d=h.baseY,p=h.textAlign,g=h.textVerticalAlign;Ie(e,i,r,f,d);var v=le(d,l,g),m=f,y=v,_=De(i);if(_||a){var x=ie(n,o);a&&(x+=a[1]+a[3]);var b=se(f,x,p);_&&Ae(t,e,i,b,v,x,l),a&&(m=Re(f,p,a),y+=a[0])}Le(e,"textAlign",p||"left"),Le(e,"textBaseline","middle"),Le(e,"shadowBlur",i.textShadowBlur||0),Le(e,"shadowColor",i.textShadowColor||"transparent"),Le(e,"shadowOffsetX",i.textShadowOffsetX||0),Le(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=c/2;var w=i.textStrokeWidth,S=Ee(i.textStroke,w),M=Ne(i.textFill);S&&(Le(e,"lineWidth",w),Le(e,"strokeStyle",S)),M&&Le(e,"fillStyle",M);for(var k=0;k<u.length;k++)S&&e.strokeText(u[k],m,y),M&&e.fillText(u[k],m,y),y+=c}function ke(t,e,n,i,r){var o=t.__textCotentBlock;o&&!t.__dirty||(o=t.__textCotentBlock=me(n,i)),Te(t,e,o,i,r)}function Te(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=Pe(s,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;Ie(e,i,r,c,h);var p=se(c,a,f),g=le(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;De(i)&&Ae(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,b=n.lines[_],w=b.tokens,S=w.length,M=b.lineHeight,k=b.width,T=0,I=v,C=y,D=S-1;T<S&&(!(x=w[T]).textAlign||"left"===x.textAlign);)Ce(t,e,x,i,M,m,I,"left"),k-=x.width,I+=x.width,T++;for(;D>=0&&"right"===(x=w[D]).textAlign;)Ce(t,e,x,i,M,m,C,"right"),k-=x.width,C-=x.width,D--;for(I+=(o-(I-v)-(y-C)-k)/2;T<=D;)Ce(t,e,x=w[T],i,M,m,I+x.width/2,"center"),I+=x.width,T++;m+=M}}function Ie(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function Ce(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&De(l)&&Ae(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=Re(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),Le(e,"shadowBlur",O(l.textShadowBlur,i.textShadowBlur,0)),Le(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Le(e,"shadowOffsetX",O(l.textShadowOffsetX,i.textShadowOffsetX,0)),Le(e,"shadowOffsetY",O(l.textShadowOffsetY,i.textShadowOffsetY,0)),Le(e,"textAlign",s),Le(e,"textBaseline","middle"),Le(e,"font",n.font||Ec);var f=Ee(l.textStroke||i.textStroke,p),d=Ne(l.textFill||i.textFill),p=A(l.textStrokeWidth,i.textStrokeWidth);f&&(Le(e,"lineWidth",p),Le(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(Le(e,"fillStyle",d),e.fillText(n.text,a,c))}function De(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function Ae(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=S(s);if(Le(e,"shadowBlur",n.textBoxShadowBlur||0),Le(e,"shadowColor",n.textBoxShadowColor||"transparent"),Le(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Le(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?xe(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)Le(e,"fillStyle",s),e.fill();else if(M(s)){var f=s.image;(f=te(f,null,t,Oe,s))&&ne(f)&&e.drawImage(f,i,r,o,a)}l&&u&&(Le(e,"lineWidth",l),Le(e,"strokeStyle",u),e.stroke())}function Oe(t,e){e.image=t}function Pe(t,e,n){var i=e.x||0,r=e.y||0,o=e.textAlign,a=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+Be(s[0],n.width),r=n.y+Be(s[1],n.height);else{var l=ue(s,n,e.textDistance);i=l.x,r=l.y,o=o||l.textAlign,a=a||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:o,textVerticalAlign:a}}function Le(t,e,n){return t[e]=xc(t,e,n),t[e]}function Ee(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ne(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Be(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Re(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function $e(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function ze(t){for(var e in t=t||{},hc.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new wc(t.style,this),this._rect=null,this.__clipPaths=[]}function Fe(t){ze.call(this,t)}function je(t){return parseInt(t,10)}function Ve(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function He(t,e,n){return Fc.copy(t.getBoundingRect()),t.transform&&Fc.applyTransform(t.transform),jc.width=e,jc.height=n,!Fc.intersect(jc)}function We(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function Ge(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function qe(t,e){var n=i.createElement("div");return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}function Ue(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function Ye(t,e,n,i){return n=n||{},i||!bu.canvasSupported?Xe(t,e,n):bu.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):Xe(t,e,n),n}function Xe(t,e,n){var i=Ue(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function Ze(t,e,i){if(null!=(e=e||n.event).zrX)return e;var r=e.type;if(r&&r.indexOf("touch")>=0){var o="touchend"!=r?e.targetTouches[0]:e.changedTouches[0];o&&Ye(t,o,e,i)}else Ye(t,e,e,i),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3;var a=e.button;return null==e.which&&void 0!==a&&Wc.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e}function Je(t,e,n){Hc?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ke(t,e,n){Hc?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Qe(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function tn(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function en(t){return"mousewheel"===t&&bu.browser.firefox?"DOMMouseScroll":t}function nn(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var o=r.type;e.gestureEvent=o,t.handler.dispatchToElement({target:r.target},o,r.event)}}function rn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function on(t){var e=t.pointerType;return"pen"===e||"touch"===e}function an(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}g(Xc,function(e){t._handlers[e]=_(Kc[e],t)}),g(Jc,function(e){t._handlers[e]=_(Kc[e],t)}),g(Yc,function(n){t._handlers[n]=e(Kc[n],t)})}function sn(t){function e(e,n){g(e,function(e){Je(t,en(e),n._handlers[e])},n)}zu.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new qc,this._handlers={},an(this),bu.pointerEventsSupported?e(Jc,this):(bu.touchEventsSupported&&e(Xc,this),e(Yc,this))}function ln(t,e){return new nh(xu(),t,e)}function un(t){return t instanceof Array?t:null==t?[]:[t]}function cn(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function hn(t){return!rh(t)||oh(t)||t instanceof Date?t:t.value}function fn(t){return rh(t)&&!(t instanceof Array)}function dn(t,e){e=(e||[]).slice();var n=v(t||[],function(t,e){return{exist:t}});return ih(e,function(t,i){if(rh(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||vn(t)||vn(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),ih(e,function(t,e){if(rh(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!vn(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function pn(t){var e=z();ih(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),ih(t,function(t,n){var i=t.option;E(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),ih(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(rh(r)){if(o.name=null!=r.name?r.name+"":i?i.name:ah+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})}function gn(t){var e=t.name;return!(!e||!e.indexOf(ah))}function vn(t){return rh(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function mn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?b(e.dataIndex)?v(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?b(e.name)?v(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function yn(){var t="__\0ec_inner_"+lh+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function _n(t,e,n){if(S(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||xn(e,r+"Index")||xn(e,r+"Id")||xn(e,r+"Name")||(e[r+"Index"]=0);var o={};return ih(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var a=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=a[1],l=(a[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&h(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var c=t.queryComponents(u);o[s+"Models"]=c,o[s+"Model"]=c[0]}}else o[r]=i}),o}function xn(t,e){return t&&t.hasOwnProperty(e)}function bn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function wn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function Sn(t){var e={main:"",sub:""};return t&&(t=t.split(uh),e.main=t[0]||"",e.sub=t[1]||""),e}function Mn(t){E(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function kn(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return l(n.prototype,t),n.extend=this.extend,n.superCall=In,n.superApply=Cn,f(n,this),n.superClass=e,n}}function Tn(t){var e=["__\0is_clz",hh++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function In(t,e){var n=P(arguments,2);return this.superClass.prototype[e].apply(t,n)}function Cn(t,e,n){return this.superClass.prototype[e].apply(t,n)}function Dn(t,e){function n(t){var e=i[t.main];return e&&e[ch]||((e=i[t.main]={})[ch]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Mn(e),(e=Sn(e)).sub?e.sub!==ch&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[ch]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=Sn(t);var e=[],n=i[t.main];return n&&n[ch]?g(n,function(t,n){n!==ch&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=Sn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return g(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=Sn(t);var e=i[t.main];return e&&e[ch]},t.parseClassType=Sn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function An(t){return t>-_h&&t<_h}function On(t){return t>_h||t<-_h}function Pn(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function Ln(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function En(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(An(c)&&An(h))An(s)?o[0]=0:(M=-l/s)>=0&&M<=1&&(o[d++]=M);else{var p=h*h-4*c*f;if(An(p)){var g=h/c,v=-g/2;(M=-s/a+g)>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v)}else if(p>0){var m=yh(p),y=c*s+1.5*a*(-h+m),_=c*s+1.5*a*(-h-m);(M=(-s-((y=y<0?-mh(-y,wh):mh(y,wh))+(_=_<0?-mh(-_,wh):mh(_,wh))))/(3*a))>=0&&M<=1&&(o[d++]=M)}else{var x=(2*c*s-3*a*h)/(2*yh(c*c*c)),b=Math.acos(x)/3,w=yh(c),S=Math.cos(b),M=(-s-2*w*S)/(3*a),k=(v=(-s+w*(S+bh*Math.sin(b)))/(3*a),(-s+w*(S-bh*Math.sin(b)))/(3*a));M>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v),k>=0&&k<=1&&(o[d++]=k)}}return d}function Nn(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(An(a))On(o)&&(h=-s/o)>=0&&h<=1&&(r[l++]=h);else{var u=o*o-4*a*s;if(An(u))r[0]=-o/(2*a);else if(u>0){var c=yh(u),h=(-o+c)/(2*a),f=(-o-c)/(2*a);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Bn(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function Rn(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;Sh[0]=l,Sh[1]=u;for(var y=0;y<1;y+=.05)Mh[0]=Pn(t,n,r,a,y),Mh[1]=Pn(e,i,o,s,y),(p=Ru(Sh,Mh))<m&&(h=y,m=p);m=1/0;for(var _=0;_<32&&!(v<xh);_++)f=h-v,d=h+v,Mh[0]=Pn(t,n,r,a,f),Mh[1]=Pn(e,i,o,s,f),p=Ru(Mh,Sh),f>=0&&p<m?(h=f,m=p):(kh[0]=Pn(t,n,r,a,d),kh[1]=Pn(e,i,o,s,d),g=Ru(kh,Sh),d<=1&&g<m?(h=d,m=g):v*=.5);return c&&(c[0]=Pn(t,n,r,a,h),c[1]=Pn(e,i,o,s,h)),yh(m)}function $n(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function zn(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function Fn(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(An(o))On(a)&&(h=-s/a)>=0&&h<=1&&(r[l++]=h);else{var u=a*a-4*o*s;if(An(u))(h=-a/(2*o))>=0&&h<=1&&(r[l++]=h);else if(u>0){var c=yh(u),h=(-a+c)/(2*o),f=(-a-c)/(2*o);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function jn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function Vn(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function Hn(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;Sh[0]=a,Sh[1]=s;for(var f=0;f<1;f+=.05)Mh[0]=$n(t,n,r,f),Mh[1]=$n(e,i,o,f),(v=Ru(Sh,Mh))<h&&(u=f,h=v);h=1/0;for(var d=0;d<32&&!(c<xh);d++){var p=u-c,g=u+c;Mh[0]=$n(t,n,r,p),Mh[1]=$n(e,i,o,p);var v=Ru(Mh,Sh);if(p>=0&&v<h)u=p,h=v;else{kh[0]=$n(t,n,r,g),kh[1]=$n(e,i,o,g);var m=Ru(kh,Sh);g<=1&&m<h?(u=g,h=m):c*=.5}}return l&&(l[0]=$n(t,n,r,u),l[1]=$n(e,i,o,u)),yh(h)}function Wn(t,e,n,i,r,o){r[0]=Th(t,n),r[1]=Th(e,i),o[0]=Ih(t,n),o[1]=Ih(e,i)}function Gn(t,e,n,i,r,o,a,s,l,u){var c,h=Nn,f=Pn,d=h(t,n,r,a,Eh);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;c<d;c++){var p=f(t,n,r,a,Eh[c]);l[0]=Th(p,l[0]),u[0]=Ih(p,u[0])}for(d=h(e,i,o,s,Nh),c=0;c<d;c++){var g=f(e,i,o,s,Nh[c]);l[1]=Th(g,l[1]),u[1]=Ih(g,u[1])}l[0]=Th(t,l[0]),u[0]=Ih(t,u[0]),l[0]=Th(a,l[0]),u[0]=Ih(a,u[0]),l[1]=Th(e,l[1]),u[1]=Ih(e,u[1]),l[1]=Th(s,l[1]),u[1]=Ih(s,u[1])}function qn(t,e,n,i,r,o,a,s){var l=jn,u=$n,c=Ih(Th(l(t,n,r),1),0),h=Ih(Th(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=Th(t,r,f),a[1]=Th(e,o,d),s[0]=Ih(t,r,f),s[1]=Ih(e,o,d)}function Un(t,e,n,i,r,o,a,s,l){var u=J,c=K,h=Math.abs(r-o);if(h%Ah<1e-4&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Oh[0]=Dh(r)*n+t,Oh[1]=Ch(r)*i+e,Ph[0]=Dh(o)*n+t,Ph[1]=Ch(o)*i+e,u(s,Oh,Ph),c(l,Oh,Ph),(r%=Ah)<0&&(r+=Ah),(o%=Ah)<0&&(o+=Ah),r>o&&!a?o+=Ah:r<o&&a&&(r+=Ah),a){var f=o;o=r,r=f}for(var d=0;d<o;d+=Math.PI/2)d>r&&(Lh[0]=Dh(d)*n+t,Lh[1]=Ch(d)*i+e,u(s,Lh,s),c(l,Lh,l))}function Yn(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0;if(a>e+s&&a>i+s||a<e-s&&a<i-s||o>t+s&&o>n+s||o<t-s&&o<n-s)return!1;if(t===n)return Math.abs(o-t)<=s/2;var u=(l=(e-i)/(t-n))*o-a+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function Xn(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;return!(c>e+h&&c>i+h&&c>o+h&&c>s+h||c<e-h&&c<i-h&&c<o-h&&c<s-h||u>t+h&&u>n+h&&u>r+h&&u>a+h||u<t-h&&u<n-h&&u<r-h&&u<a-h)&&Rn(t,e,n,i,r,o,a,s,u,c,null)<=h/2}function Zn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;return!(l>e+u&&l>i+u&&l>o+u||l<e-u&&l<i-u&&l<o-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&Hn(t,e,n,i,r,o,s,l,null)<=u/2}function Jn(t){return(t%=Xh)<0&&(t+=Xh),t}function Kn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||c+u<n)return!1;if(Math.abs(i-r)%Zh<1e-4)return!0;if(o){var h=i;i=Jn(r),r=Jn(h)}else i=Jn(i),r=Jn(r);i>r&&(r+=Zh);var f=Math.atan2(l,s);return f<0&&(f+=Zh),f>=i&&f<=r||f+Zh>=i&&f+Zh<=r}function Qn(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0;if(i===e)return 0;var a=i<e?1:-1,s=(o-e)/(i-e);1!==s&&0!==s||(a=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function ti(t,e){return Math.abs(t-e)<Qh}function ei(){var t=ef[0];ef[0]=ef[1],ef[1]=t}function ni(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||u<e&&u<i&&u<o&&u<s)return 0;var c=En(e,i,o,s,u,tf);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;g<c;g++){var v=tf[g],m=0===v||1===v?.5:1;Pn(t,n,r,a,v)<l||(p<0&&(p=Nn(e,i,o,s,ef),ef[1]<ef[0]&&p>1&&ei(),h=Pn(e,i,o,s,ef[0]),p>1&&(f=Pn(e,i,o,s,ef[1]))),2==p?v<ef[0]?d+=h<e?m:-m:v<ef[1]?d+=f<h?m:-m:d+=s<f?m:-m:v<ef[0]?d+=h<e?m:-m:d+=s<h?m:-m)}return d}function ii(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||s<e&&s<i&&s<o)return 0;var l=Fn(e,i,o,s,tf);if(0===l)return 0;var u=jn(e,i,o);if(u>=0&&u<=1){for(var c=0,h=$n(e,i,o,u),f=0;f<l;f++)d=0===tf[f]||1===tf[f]?.5:1,(p=$n(t,n,r,tf[f]))<a||(tf[f]<u?c+=h<e?d:-d:c+=o<h?d:-d);return c}var d=0===tf[0]||1===tf[0]?.5:1,p=$n(t,n,r,tf[0]);return p<a?0:o<e?d:-d}function ri(t,e,n,i,r,o,a,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),tf[0]=-u,tf[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Kh<1e-4)return i=0,r=Kh,p=o?1:-1,a>=tf[0]+t&&a<=tf[1]+t?p:0;if(o){var u=i;i=Jn(r),r=Jn(u)}else i=Jn(i),r=Jn(r);i>r&&(r+=Kh);for(var c=0,h=0;h<2;h++){var f=tf[h];if(f+t>a){var d=Math.atan2(s,f),p=o?1:-1;d<0&&(d=Kh+d),(d>=i&&d<=r||d+Kh>=i&&d+Kh<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),c+=p)}}return c}function oi(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===Jh.M&&c>1&&(n||(o+=Qn(a,s,l,u,i,r))),1==c&&(l=a=t[c],u=s=t[c+1]),h){case Jh.M:a=l=t[c++],s=u=t[c++];break;case Jh.L:if(n){if(Yn(a,s,t[c],t[c+1],e,i,r))return!0}else o+=Qn(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Jh.C:if(n){if(Xn(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ni(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Jh.Q:if(n){if(Zn(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ii(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Jh.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++],y=(t[c++],1-t[c++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=Qn(a,s,_,x,i,r):(l=_,u=x);var b=(i-f)*g/p+f;if(n){if(Kn(f,d,g,v,v+m,y,e,b,r))return!0}else o+=ri(f,d,g,v,v+m,y,b,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case Jh.R:l=a=t[c++],u=s=t[c++];_=l+t[c++],x=u+t[c++];if(n){if(Yn(l,u,_,u,e,i,r)||Yn(_,u,_,x,e,i,r)||Yn(_,x,l,x,e,i,r)||Yn(l,x,l,u,e,i,r))return!0}else o+=Qn(_,u,_,x,i,r),o+=Qn(l,x,l,u,i,r);break;case Jh.Z:if(n){if(Yn(a,s,l,u,e,i,r))return!0}else o+=Qn(a,s,l,u,i,r);a=l,s=u}}return n||ti(s,u)||(o+=Qn(a,s,l,u,i,r)||0),0!==o}function ai(t,e,n){return oi(t,0,!1,e,n)}function si(t,e,n,i){return oi(t,e,!0,n,i)}function li(t){ze.call(this,t),this.path=null}function ui(t,e,n,i,r,o,a,s,l,u,c){var h=l*(gf/180),f=pf(h)*(t-n)/2+df(h)*(e-i)/2,d=-1*df(h)*(t-n)/2+pf(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=ff(p),s*=ff(p));var g=(r===o?-1:1)*ff((a*a*(s*s)-a*a*(d*d)-s*s*(f*f))/(a*a*(d*d)+s*s*(f*f)))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+pf(h)*v-df(h)*m,_=(e+i)/2+df(h)*v+pf(h)*m,x=yf([1,0],[(f-v)/a,(d-m)/s]),b=[(f-v)/a,(d-m)/s],w=[(-1*f-v)/a,(-1*d-m)/s],S=yf(b,w);mf(b,w)<=-1&&(S=gf),mf(b,w)>=1&&(S=0),0===o&&S>0&&(S-=2*gf),1===o&&S<0&&(S+=2*gf),c.addData(u,y,_,a,s,x,S,h,o)}function ci(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<hf.length;e++)n=n.replace(new RegExp(hf[e],"g"),"|"+hf[e]);var i,r=n.split("|"),o=0,a=0,s=new Yh,l=Yh.CMD;for(e=1;e<r.length;e++){var u,c=r[e],h=c.charAt(0),f=0,d=c.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,b,w=o,S=a;switch(h){case"l":o+=d[f++],a+=d[f++],u=l.L,s.addData(u,o,a);break;case"L":o=d[f++],a=d[f++],u=l.L,s.addData(u,o,a);break;case"m":o+=d[f++],a+=d[f++],u=l.M,s.addData(u,o,a),h="l";break;case"M":o=d[f++],a=d[f++],u=l.M,s.addData(u,o,a),h="L";break;case"h":o+=d[f++],u=l.L,s.addData(u,o,a);break;case"H":o=d[f++],u=l.L,s.addData(u,o,a);break;case"v":a+=d[f++],u=l.L,s.addData(u,o,a);break;case"V":a=d[f++],u=l.L,s.addData(u,o,a);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),o=d[f-2],a=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a),o+=d[f-2],a+=d[f-1];break;case"S":g=o,v=a;var M=s.len(),k=s.data;i===l.C&&(g+=o-k[M-4],v+=a-k[M-3]),u=l.C,w=d[f++],S=d[f++],o=d[f++],a=d[f++],s.addData(u,g,v,w,S,o,a);break;case"s":g=o,v=a;M=s.len(),k=s.data;i===l.C&&(g+=o-k[M-4],v+=a-k[M-3]),u=l.C,w=o+d[f++],S=a+d[f++],o+=d[f++],a+=d[f++],s.addData(u,g,v,w,S,o,a);break;case"Q":w=d[f++],S=d[f++],o=d[f++],a=d[f++],u=l.Q,s.addData(u,w,S,o,a);break;case"q":w=d[f++]+o,S=d[f++]+a,o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,w,S,o,a);break;case"T":g=o,v=a;M=s.len(),k=s.data;i===l.Q&&(g+=o-k[M-4],v+=a-k[M-3]),o=d[f++],a=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"t":g=o,v=a;M=s.len(),k=s.data;i===l.Q&&(g+=o-k[M-4],v+=a-k[M-3]),o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],b=d[f++],ui(w=o,S=a,o=d[f++],a=d[f++],x,b,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],b=d[f++],ui(w=o,S=a,o+=d[f++],a+=d[f++],x,b,m,y,_,u=l.A,s)}}"z"!==h&&"Z"!==h||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}function hi(t,e){var n=ci(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){cf(n,t),this.dirty(!0)},e}function fi(t,e){return new li(hi(t,e))}function di(t,e){return li.extend(hi(t,e))}function pi(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function gi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=Tf(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;s<(n?a:a-1);s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=kf(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;s<h;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function vi(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Ln:Pn)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Ln:Pn)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?zn:$n)(t.x1,t.cpx1,t.x2,e),(n?zn:$n)(t.y1,t.cpy1,t.y2,e)]}function mi(t){ze.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function yi(t){return li.extend(t)}function _i(t,e,n,i){var r=fi(t,e),o=r.getBoundingRect();return n&&("center"===i&&(n=bi(n,o)),wi(r,n)),r}function xi(t,e,n){var i=new Fe({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(bi(e,r))}}});return i}function bi(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function wi(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function Si(t){var e=t.shape,n=t.style.lineWidth;return zf(2*e.x1)===zf(2*e.x2)&&(e.x1=e.x2=Mi(e.x1,n,!0)),zf(2*e.y1)===zf(2*e.y2)&&(e.y1=e.y2=Mi(e.y1,n,!0)),t}function Mi(t,e,n){var i=zf(2*t);return(i+zf(e))%2==0?i/2:(i+(n?1:-1))/2}function ki(t){return null!=t&&"none"!=t}function Ti(t){return"string"==typeof t?Mt(t,-.1):t}function Ii(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(ki(n)?Ti(n):null),i.stroke=i.stroke||(ki(e)?Ti(e):null);var r={};for(var o in i)null!=i[o]&&(r[o]=t.style[o]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Ci(t){if(!t.__isHover){if(Ii(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&Gi(e),e.extendFrom(t.__hoverStl),n&&(Wi(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Di(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Ai(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ci(t)}):Ci(t)}function Oi(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Di(t)}):Di(t)}function Pi(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&Ii(t)}function Li(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Ai(this)}function Ei(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Oi(this)}function Ni(){this.__isEmphasis=!0,Ai(this)}function Bi(){this.__isEmphasis=!1,Oi(this)}function Ri(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Pi(t,e)}):Pi(t,e),t.on("mouseover",Li).on("mouseout",Ei),t.on("emphasis",Ni).on("normal",Bi)}function $i(t,e,n,i,r,o,a){var s,l=(r=r||Vf).labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=w(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?A(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;null==d&&null==p||(zi(t,n,o,r),zi(e,i,a,r,!0)),t.text=d,e.text=p}function zi(t,e,n,i,r){return Fi(t,e,i,r),n&&l(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function Fi(t,e,n,i){if((n=n||Vf).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=A(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=ji(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);Vi(a[c]={},h,l,n,i)}return t.rich=a,Vi(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function ji(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Vf).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Vi(t,e,n,i,r,o){if(n=!r&&n||Vf,t.textFill=Hi(e.getShallow("color"),i)||n.color,t.textStroke=Hi(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=A(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(o){var a=t.textPosition;t.insideRollback=Wi(t,a,i),t.insideOriginalTextPosition=a,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=Hi(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Hi(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Hi(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Wi(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Gi(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function qi(t,e){var n=e||e.getModel("textStyle");return N([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Ui(t,e,n,i,r,o){if("function"==typeof r&&(o=r,r=null),i&&i.isAnimationEnabled()){var a=t?"Update":"",s=i.getShallow("animationDuration"+a),l=i.getShallow("animationEasing"+a),u=i.getShallow("animationDelay"+a);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function Yi(t,e,n,i,r){Ui(!0,t,e,n,i,r)}function Xi(t,e,n,i,r){Ui(!1,t,e,n,i,r)}function Zi(t,e,n){return e&&!p(e)&&(e=qu.getLocalTransform(e)),n&&(e=ht([],e)),Z([],t,e)}function Ji(t,e,n,i){function r(t){var e={position:V(t.position),rotation:t.rotation};return t.shape&&(e.shape=l({},t.shape)),e}if(t&&e){var o=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),Yi(t,i,n,t.dataIndex)}}})}}function Ki(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Qi(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function tr(t,e){var n=Xf(t).getParent;return n?n.call(t,e):t.parentModel}function er(t){return[t||"",Zf++,Math.random().toFixed(5)].join("_")}function nr(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function ir(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function rr(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?nr(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function or(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function ar(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function sr(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}function lr(t,e,n){if(!t[e])return 0;var i=m(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=v(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=v(o,function(t){return Math.floor(t)}),l=m(s,function(t,e){return t+e},0),u=v(o,function(t,e){return t-s[e]});l<a;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;f<d;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}function ur(t){var e=2*Math.PI;return(t%e+e)%e}function cr(t){return t>-Jf&&t<Jf}function hr(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Kf.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function fr(t){return Math.pow(10,dr(t))}function dr(t){return Math.floor(Math.log(t)/Math.LN10)}function pr(t,e){var n,i=dr(t),r=Math.pow(10,i),o=t/r;return n=e?o<1.5?1:o<2.5?2:o<4?3:o<7?5:10:o<1?1:o<2?2:o<3?3:o<5?5:10,t=n*r,i>=-20?+t.toFixed(i<0?-i:0):t}function gr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function vr(t){return null==t?"":(t+"").replace(td,function(t,e){return ed[e]})}function mr(t,e,n){b(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=nd[o];t=t.replace(id(a),id(a,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(id(nd[l],s),n?vr(u):u)}return t}function yr(t,e){var n=(t=S(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+vr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+vr(n)+";"+(e||"")+'"></span>':""}function _r(t,e){return t+="","0000".substr(0,e-t.length)+t}function xr(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=hr(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",_r(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",_r(s,2)).replace("d",s).replace("hh",_r(l,2)).replace("h",l).replace("mm",_r(u,2)).replace("m",u).replace("ss",_r(c,2)).replace("s",c).replace("SSS",_r(h,3))}function br(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(c=o+v)>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(h=a+m)>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function wr(t,e,n){n=Qf(n||0);var i=e.width,r=e.height,o=rr(t.left,i),a=rr(t.top,r),s=rr(t.right,i),l=rr(t.bottom,r),u=rr(t.width,i),c=rr(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new zt(o+n[3],a+n[0],u,c);return p.margin=n,p}function Sr(t,e,n){function i(n,i){var a={},l=0,u={},c=0;if(od(n,function(e){u[e]=t[e]}),od(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(2!==c&&l){if(l>=2)return a;for(var h=0;h<n.length;h++){var f=n[h];if(!r(a,f)&&r(t,f)){a[f]=t[f];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){od(t,function(t){e[t]=n[t]})}!M(n)&&(n={});var s=n.ignoreSize;!b(s)&&(s=[s,s]);var l=i(sd[0],0),u=i(sd[1],1);a(sd[0],t,l),a(sd[1],t,u)}function Mr(t){return kr({},t)}function kr(t,e){return e&&t&&od(ad,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Tr(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}function Ir(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:z(),categoryAxisMap:z()},i=gd[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Cr(t){return"category"===t.get("type")}function Dr(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===_d?{}:[]),this.sourceFormat=t.sourceFormat||xd,this.seriesLayoutBy=t.seriesLayoutBy||wd,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&z(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Ar(t){var e=t.option.source,n=xd;if(T(e))n=bd;else if(b(e))for(var i=0,r=e.length;i<r;i++){var o=e[i];if(null!=o){if(b(o)){n=md;break}if(M(o)){n=yd;break}}}else if(M(e)){for(var a in e)if(e.hasOwnProperty(a)&&p(e[a])){n=_d;break}}else if(null!=e)throw new Error("Invalid data");Md(t).sourceFormat=n}function Or(t){return Md(t).source}function Pr(t){Md(t).datasetMap=z()}function Lr(t){var e=t.option,n=e.data,i=T(n)?bd:vd,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=zr(t);if(l){var u=l.option;n=u.source,i=Md(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var c=Er(n,i,o,a,s),h=e.encode;!h&&l&&(h=$r(t,l,n,i,o,c)),Md(t).source=new Dr({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function Er(t,e,n,i,r){if(!t)return{dimensionsDefine:Nr(r)};var o,a,s,l;if(e===md)"auto"===i||null==i?Br(function(t){null!=t&&"-"!==t&&(S(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],Br(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===Sd?t.length:t[0]?t[0].length:null;else if(e===yd)r||(r=Rr(t),s=!0);else if(e===_d)r||(r=[],s=!0,g(t,function(t,e){r.push(e)}));else if(e===vd){var u=hn(t[0]);o=b(u)&&u.length||1}return s&&g(r,function(t,e){"name"===(M(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Nr(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}function Nr(t){if(t){var e=z();return v(t,function(t,n){if(null==(t=l({},M(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Br(t,e,n,i){if(null==i&&(i=1/0),e===Sd)for(o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o);else for(var r=n[0]||[],o=0;o<r.length&&o<i;o++)t(r[o],o)}function Rr(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return g(e,function(t,e){i.push(e)}),i}}function $r(t,e,n,i,r,o){var a=Ir(t),s={},l=[],u=[],c=t.subType,h=z(["pie","map","funnel"]),f=z(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=f.get(c)){var d=t.ecModel,p=Md(d).datasetMap,v=e.uid+"_"+r,m=p.get(v)||p.set(v,{categoryWayDim:1,valueWayDim:0});g(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=h.get(c)){for(var y,_=0;_<5&&null==y;_++)jr(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function zr(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function Fr(t,e){return jr(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function jr(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!S(t)||"-"===t)||void 0)}var s,l;if(T(t))return!1;if(i&&(l=M(l=i[o])?l.name:l),e===md)if(n===Sd){for(var u=t[o],c=0;c<(u||[]).length&&c<5;c++)if(null!=(s=a(u[r+c])))return s}else for(c=0;c<t.length&&c<5;c++){var h=t[r+c];if(h&&null!=(s=a(h[o])))return s}else if(e===yd){if(!l)return;for(c=0;c<t.length&&c<5;c++)if((f=t[c])&&null!=(s=a(f[l])))return s}else if(e===_d){if(!l)return;if(!(u=t[l])||T(u))return!1;for(c=0;c<u.length&&c<5;c++)if(null!=(s=a(u[c])))return s}else if(e===vd)for(c=0;c<t.length&&c<5;c++){var f=t[c],d=hn(f);if(!b(d))return!1;if(null!=(s=a(d[o])))return s}return!1}function Vr(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function Hr(t,e){var n=t.color&&!t.colorLayer;g(e,function(e,i){"colorLayer"===i&&n||cd.hasClass(i)||("object"==typeof e?t[i]=t[i]?a(t[i],e,!1):o(e):null==t[i]&&(t[i]=e))})}function Wr(t){t=t,this.option={},this.option[kd]=1,this._componentsMap=z({series:[]}),this._seriesIndices,this._seriesIndicesMap,Hr(t,this._theme.option),a(t,fd,!1),this.mergeOption(t)}function Gr(t,e){b(e)||(e=e?[e]:[]);var n={};return g(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function qr(t,e,n){return e.type?e.type:n?n.subType:cd.determineSubType(t,e)}function Ur(t,e){t._seriesIndicesMap=z(t._seriesIndices=v(e,function(t){return t.componentIndex})||[])}function Yr(t,e){return e.hasOwnProperty("subType")?y(t,function(t){return t.subType===e.subType}):t}function Xr(t){g(Id,function(e){this[e]=_(t[e],t)},this)}function Zr(){this._coordinateSystems=[]}function Jr(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Kr(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Dd(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Dd([r].concat(o).concat(v(a,function(t){return t.option})),function(t){Dd(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function Qr(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return g(t,function(t,e){var n=e.match(Ld);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();to(i[a],t,o)||(r=!1)}}),r}function to(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function eo(t,e){return t.join(",")===e.join(",")}function no(t,e){Dd(e=e||{},function(e,n){if(null!=e){var i=t[n];if(cd.hasClass(n)){e=un(e);var r=dn(i=un(i),e);t[n]=Od(r,function(t){return t.option&&t.exist?Pd(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Pd(i,e,!0)}})}function io(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Bd.length;n<i;n++){var r=Bd[n],o=e.normal,s=e.emphasis;o&&o[r]&&(t[r]=t[r]||{},t[r].normal?a(t[r].normal,o[r]):t[r].normal=o[r],o[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?a(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function ro(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,u(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function oo(t){ro(t,"itemStyle"),ro(t,"lineStyle"),ro(t,"areaStyle"),ro(t,"label"),ro(t,"labelLine"),ro(t,"upperLabel"),ro(t,"edgeLabel")}function ao(t,e){var n=Nd(t)&&t[e],i=Nd(n)&&n.textStyle;if(i)for(var r=0,o=sh.length;r<o;r++){e=sh[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function so(t){t&&(oo(t),ao(t,"label"),t.emphasis&&ao(t.emphasis,"label"))}function lo(t){if(Nd(t)){io(t),oo(t),ao(t,"label"),ao(t,"upperLabel"),ao(t,"edgeLabel"),t.emphasis&&(ao(t.emphasis,"label"),ao(t.emphasis,"upperLabel"),ao(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(io(e),so(e));var n=t.markLine;n&&(io(n),so(n));var i=t.markArea;i&&so(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!T(o))for(s=0;s<o.length;s++)so(o[s]);g(t.categories,function(t){oo(t)})}if(r&&!T(r))for(s=0;s<r.length;s++)so(r[s]);if((e=t.markPoint)&&e.data)for(var a=e.data,s=0;s<a.length;s++)so(a[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)b(l[s])?(so(l[s][0]),so(l[s][1])):so(l[s])}"gauge"===t.type?(ao(t,"axisLabel"),ao(t,"title"),ao(t,"detail")):"treemap"===t.type?(ro(t.breadcrumb,"itemStyle"),g(t.levels,function(t){oo(t)})):"tree"===t.type&&oo(t.leaves)}}function uo(t){return b(t)?t:t?[t]:[]}function co(t){return(b(t)?t[0]:t)||{}}function ho(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function fo(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)null==o[r=e[a]]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function po(t){g($d,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function go(t){g(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function vo(t,e){Dr.isInstance(t)||(t=Dr.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===bd&&(this._offset=0,this._dimSize=e,this._data=n),l(this,Vd[i===md?i+"_"+t.seriesLayoutBy:i])}function mo(){return this._data.length}function yo(t){return this._data[t]}function _o(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function xo(t,e,n,i){return null!=n?t[n]:t}function bo(t,e,n,i){return wo(t[i],this._dimensionInfos[e])}function wo(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+hr(t)),null==t||""===t?NaN:+t}function So(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),Hd[a](i,e,o,r)}}}function Mo(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===vd||i===yd){var r=t.getRawDataItem(e);return i!==vd||M(r)||(r=null),r?r[n]:void 0}}}function ko(t){return new To(t)}function To(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Io(t,e,n,i,r,o){Yd.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Yd.next},t.context)}function Co(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),b(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Do(t){var e=t.name;gn(t)||(t.name=Ao(t)||e)}function Ao(t){var e=t.getRawData(),n=[];return g(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function Oo(t){return t.model.getRawData().count()}function Po(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Lo}function Lo(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Eo(t,e){g(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,x(No,e))})}function No(t){var e=Bo(t);e&&e.setOutputEnd(this.count())}function Bo(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Ro(){this.group=new gc,this.uid=er("viewChart"),this.renderTask=ko({plan:Fo,reset:jo}),this.renderTask.context={view:this}}function $o(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)$o(t.childAt(n),e)}function zo(t,e,n){var i=mn(t,e);null!=i?g(un(i),function(e){$o(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){$o(t,n)})}function Fo(t){return ep(t.model)}function jo(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&tp(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),ip[l]}function Vo(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}function Ho(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=z()}function Wo(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},g(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,c=l.overallTask;if(c){var h,f=c.agentStubMap;f.each(function(t){o(r,t)&&(t.dirty(),h=!0)}),h&&c.dirty(),up(c,i);var d=t.getPerformArgs(c,r.block);f.each(function(t){t.perform(d)}),a|=c.perform(d)}else u&&u.each(function(s,l){o(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),up(s,i),a|=s.perform(u)})}}),t.unfinished|=a}function Go(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,ko({plan:Jo,reset:Ko,count:ta}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ea(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=z()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}function qo(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,ko({reset:Yo,onDirty:Zo})),a.dirty()),i.context={model:e,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,ea(t,e,i)}var a=n.overallTask=n.overallTask||ko({reset:Uo});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||z(),l=e.seriesType,u=e.getTargetSeries,c=!0,h=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(c=!1,g(i.getSeries(),o));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}function Uo(t){t.overallReset(t.ecModel,t.api,t.payload)}function Yo(t,e){return t.overallProgress&&Xo}function Xo(){this.agent.dirty(),this.getDownstream().dirty()}function Zo(){this.agent&&this.agent.dirty()}function Jo(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Ko(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=un(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?v(e,function(t,e){return Qo(e)}):cp}function Qo(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function ta(t){return t.data.count()}function ea(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function na(t){hp=null;try{t(fp,dp)}catch(t){}return hp}function ia(t,e){for(var n in e.prototype)t[n]=F}function ra(t){return function(e,n,i){e=e&&e.toLowerCase(),zu.prototype[t].call(this,e,n,i)}}function oa(){zu.call(this)}function aa(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=Fp[e]),this.id,this.group,this._dom=t;var r=this._zr=ln(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Vo(_(r.flush,r),17),(e=o(e))&&Fd(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Zr;var a=this._api=Ma(this);Ut(zp,i),Ut(Bp,i),this._scheduler=new Ho(this,a,Bp,zp),zu.call(this),this._messageCenter=new oa,this._initEvents(),this.resize=_(this.resize,this),this._pendingActions=[],r.animation.on("frame",this._onframe,this),pa(r,this),B(this)}function sa(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=_n(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function la(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),ga(t,"component",e,n),ga(t,"chart",e,n),n.plan()}function ua(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=z(un(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else _p(t._componentsViews.concat(t._chartsViews),o)}function ca(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function ha(t,e){var n=t.type,i=t.escapeConnect,r=Ep[n],o=r.actionInfo,a=(o.update||"update").split(":"),s=a.pop();a=null!=a[0]&&wp(a[0]),this[Cp]=!0;var c=[t],h=!1;t.batch&&(h=!0,c=v(t.batch,function(e){return e=u(l({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;_p(c,function(t){f=r.action(t,this._model,this._api),(f=f||l({},t)).type=o.event||f.type,d.push(f),p?ua(this,s,t,"series"):a&&ua(this,s,t,a.main,a.sub)},this),"none"===s||p||a||(this[Dp]?(la(this),Pp.update.call(this,t),this[Dp]=!1):Pp[s].call(this,t)),f=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[Cp]=!1,!e&&this._messageCenter.trigger(f.type,f)}function fa(t){for(var e=this._pendingActions;e.length;){var n=e.shift();ha.call(this,n,t)}}function da(t){!t&&this.trigger("updated")}function pa(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Dp]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function ga(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=wp(t.type);(r=new(o?Jd.getClass(c.main,c.sub):Ro.getClass(c.sub))).init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;for(o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function va(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function ma(t,e,n,i){ya(t,e,n,i),_p(t._chartsViews,function(t){t.__alive=!1}),_a(t,e,n,i),_p(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function ya(t,e,n,i,r){_p(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),Sa(r,t)})}function _a(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),Sa(e,n),wa(e,n)}),a.unfinished|=o,ba(t._zr,e),ap(t._zr.dom,e)}function xa(t,e){_p($p,function(n){n(t,e)})}function ba(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!bu.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function wa(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function Sa(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Ma(t){var e=t._coordSysMgr;return l(new Xr(t),{getCoordinateSystems:_(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function ka(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";_p(Np,function(i,r){t._messageCenter.on(r,function(i){if(Hp[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),o=[];_p(Vp,function(e){e!==t&&e.group===t.group&&o.push(e)}),e(o,0),_p(o,function(t){1!==t[n]&&t.dispatchAction(r)}),e(o,2)}})})}function Ta(t){Hp[t]=!1}function Ia(t){return Vp[wn(t,qp)]}function Ca(t,e){Fp[t]=e}function Da(t){Rp.push(t)}function Aa(t,e){Ea(Bp,t,e,Mp)}function Oa(t,e,n){"function"==typeof e&&(n=e,e="");var i=bp(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,yp(Ap.test(i)&&Ap.test(e)),Ep[i]||(Ep[i]={action:n,actionInfo:t}),Np[e]=i}function Pa(t,e){Ea(zp,t,e,kp,"layout")}function La(t,e){Ea(zp,t,e,Tp,"visual")}function Ea(t,e,n,i,r){(xp(e)||bp(e))&&(n=e,e=i);var o=Ho.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function Na(t,e){jp[t]=e}function Ba(t){return Jd.extend(t)}function Ra(t){return Zd.extend(t)}function $a(t){return Ro.extend(t)}function za(t){return t}function Fa(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||za,this._newKeyGetter=i||za,this.context=r}function ja(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function Va(t){var e={},n=e.encode={},i=z(),r=[],o=[];g(t.dimensions,function(e){var a=t.getDimensionInfo(e),s=a.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[a.coordDimIndex]=e,a.isExtraCoord||(i.set(s,1),Wa(a.type)&&(r[0]=e)),a.defaultTooltip&&o.push(e)}Zp.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)})});var a=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],a=a.concat(i)}),e.dataDimsOnCoord=a,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?o=u.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}function Ha(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Wa(t){return!("ordinal"===t||"time"===t)}function Ga(t){return t._rawCount>65535?tg:eg}function qa(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function Ua(t,e){g(ng.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,g(ig,function(n){t[n]=o(e[n])}),t._calculationInfo=l(e._calculationInfo)}function Ya(t){var e=t._invertedIndicesMap;g(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new tg(r.categories.length),o=0;o<n.length;o++)n[o]=NaN;for(var o=0;o<t._count;o++)n[t.get(i,o)]=o}})}function Xa(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Za(t){return t}function Ja(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ka(t,e){var n=t._idList[e];return null==n&&(n=Xa(t,t._idDimIdx,e)),null==n&&(n=Kp+e),n}function Qa(t){return b(t)||(t=[t]),t}function ts(t,e){var n=t.dimensions,i=new rg(v(n,t.getDimensionInfo,t),t.hostModel);Ua(i,t);for(var r=i._storage={},o=t._storage,a=0;a<n.length;a++){var s=n[a];o[s]&&(h(e,s)>=0?(r[s]=es(o[s]),i._rawExtent[s]=ns(),i._extent[s]=null):r[s]=o[s])}return i}function es(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=qa(t[n]);return e}function ns(){return[1/0,-1/0]}function is(t,e,n){function i(t,e,n){null!=Zp.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,c.set(e,!0))}Dr.isInstance(e)||(e=Dr.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var r=(n.dimsDef||[]).slice(),a=z(n.encodeDef),s=z(),c=z(),h=[],f=rs(e,t,r,n.dimCount),d=0;d<f;d++){var p=r[d]=l({},M(r[d])?r[d]:{name:r[d]}),v=p.name,m=h[d]={otherDims:{}};null!=v&&null==s.get(v)&&(m.name=m.displayName=v,s.set(v,d)),null!=p.type&&(m.type=p.type),null!=p.displayName&&(m.displayName=p.displayName)}a.each(function(t,e){t=un(t).slice();var n=a.set(e,[]);g(t,function(t,r){S(t)&&(t=s.get(t)),null!=t&&t<f&&(n[r]=t,i(h[t],e,r))})});var y=0;g(t,function(t,e){var n,r,s;if(S(t))n=t,t={};else{n=t.name;var l=t.ordinalMeta;t.ordinalMeta=null,(t=o(t)).ordinalMeta=l,r=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var c=un(a.get(n));if(!c.length)for(var f=0;f<(r&&r.length||1);f++){for(;y<h.length&&null!=h[y].coordDim;)y++;y<h.length&&c.push(y++)}g(c,function(e,o){var a=h[e];if(i(u(a,t),n,o),null==a.name&&r){var l=r[o];!M(l)&&(l={name:l}),a.name=a.displayName=l.name,a.defaultTooltip=l.defaultTooltip}s&&u(a.otherDims,s)})});var _=n.generateCoord,x=n.generateCoordCount,b=null!=x;x=_?x||1:0;for(var w=_||"value",k=0;k<f;k++)null==(m=h[k]=h[k]||{}).coordDim&&(m.coordDim=os(w,c,b),m.coordDimIndex=0,(!_||x<=0)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=os(m.coordDim,s)),null==m.type&&Fr(e,k,m.name)&&(m.type="ordinal");return h}function rs(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return g(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function os(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function as(t,e,n){var i,r,o,a,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(g(e,function(t,n){S(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;g(e,function(t){t.coordDim===c&&f++}),e.push({name:o,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:a,coordDim:a,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}function ss(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function ls(t,e){return ss(t,e)?t.getCalculationInfo("stackResultDimension"):e}function us(t,e,n){n=n||{},Dr.isInstance(t)||(t=Dr.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=Zr.get(r),a=Ir(e);a&&(i=v(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=Ha(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=sg(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&g(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=as(e,u),h=new rg(u,e);h.setCalculationInfo(c);var f=null!=s&&cs(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}function cs(t){if(t.sourceFormat===vd){var e=hs(t.data||[]);return null!=e&&!b(hn(e))}}function hs(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function fs(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function ds(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?xi(t.slice(8),new zt(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?_i(t.slice(7),{},new zt(e,n,i,r),a?"center":"cover"):new pg({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=fs,s.setColor(o),s}function ps(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return So(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=So(t,e,n[o]);r.push(a)}return r.join(" ")}}function gs(t,e,n){gc.call(this),this.updateData(t,e,n)}function vs(t){return[t[0]/2,t[1]/2]}function ms(t,e){this.parent.drift(t,e)}function ys(t){this.group=new gc,this._symbolCtor=t||gs}function _s(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function xs(t){return null==t||M(t)||(t={isIgnore:t}),t||{}}function bs(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function ws(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=Ss(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=v(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=ss(e,f[0]))&&(f[0]=d),(i|=ss(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function Ss(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Ms(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function ks(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Ts(t){return isNaN(t[0])||isNaN(t[1])}function Is(t,e,n,i,r,o,a,s,l,u,c){return"none"!==u&&u?Cs.apply(this,arguments):Ds.apply(this,arguments)}function Cs(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Ts(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;Tg(Cg,g),Cg[v]=g[v]+m,Tg(Dg,p),Dg[v]=p[v]-m,t.bezierCurveTo(Cg[0],Cg[1],Dg[0],Dg[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Ds(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Ts(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),Tg(Cg,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&Ts(e[g]);)v=e[g+=o];var m=.5,y=e[h];if(!(v=e[g])||Ts(v))Tg(Dg,p);else{var _,x;if(Ts(v)&&!c&&(v=p),W(Ig,v,y),"x"===u||"y"===u){var b="x"===u?0:1;_=Math.abs(p[b]-y[b]),x=Math.abs(p[b]-v[b])}else _=Bu(p,y),x=Bu(p,v);kg(Dg,p,Ig,-l*(1-(m=x/(x+_))))}Sg(Cg,Cg,s),Mg(Cg,Cg,a),Sg(Dg,Dg,s),Mg(Dg,Dg,a),t.bezierCurveTo(Cg[0],Cg[1],Dg[0],Dg[1],p[0],p[1]),kg(Cg,p,Ig,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function As(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function Os(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Ps(t){return"number"==typeof t?t:t?.5:0}function Ls(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Es(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();r<o;r++)i.push(Ms(n,t,e,r));return i}function Ns(t,e,n,i){var r=Ls(t.getAxis("x")),o=Ls(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new Df({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,Xi(d,{shape:{width:u,height:c}},i)),d}function Bs(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis().getExtent().slice();o[0]>o[1]&&o.reverse();var a=r.getExtent(),s=Math.PI/180;n&&(o[0]-=.5,o[1]+=.5);var l=new Sf({shape:{cx:or(t.cx,1),cy:or(t.cy,1),r0:or(o[0],1),r:or(o[1],1),startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-a[0]*s,Xi(l,{shape:{endAngle:-a[1]*s}},i)),l}function Rs(t,e,n,i){return"polar"===t.type?Bs(t,e,n,i):Ns(t,e,n,i)}function $s(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function zs(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),c=v(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=c[0].coord-10,p=c[h-1].coord+10,m=p-d;if(m<.001)return"transparent";g(c,function(t){t.offset=(t.coord-d)/m}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var y=new Bf(0,0,0,0,c,!0);return y[i]=d,y[i+"2"]=p,y}}}function Fs(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!js(o,e))){var a=e.mapDimension(o.dim),s={};return g(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function js(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;a<r;a+=o)if(1.5*gs.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}function Vs(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Hs(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Ws(t){return t._map||(t._map=z(t.categories))}function Gs(t){return M(t)&&null!=t.value?t.value:t+""}function qs(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=pr(o/e,!0);null!=n&&a<n&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=Us(a);return Xs(r.niceTickExtent=[Rg(Math.ceil(t[0]/a)*a,s),Rg(Math.floor(t[1]/a)*a,s)],t),r}function Us(t){return ar(t)+2}function Ys(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Xs(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ys(t,0,e),Ys(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Zs(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var o=n[0];o<=n[1]&&(r.push(o),(o=Rg(o+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function Js(t){return t.get("stack")||Fg+t.seriesIndex}function Ks(t){return t.dim+t.index}function Qs(t,e){var n=[];return e.eachSeriesByType(t,function(t){il(t)&&!rl(t)&&n.push(t)}),n}function tl(t){var e=[];return g(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),a=rr(t.get("barWidth"),o),s=rr(t.get("barMaxWidth"),o),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:o,barWidth:a,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Ks(i),stackId:Js(t)})}),el(e)}function el(t){var e={};g(t,function(t,n){var i=t.axisKey,r=t.bandWidth,o=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=o.stacks;e[i]=o;var s=t.stackId;a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!a[s].width&&(a[s].width=l,l=Math.min(o.remainedWidth,l),o.remainedWidth-=l);var u=t.barMaxWidth;u&&(a[s].maxWidth=u);var c=t.barGap;null!=c&&(o.gap=c);var h=t.barCategoryGap;null!=h&&(o.categoryGap=h)});var n={};return g(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=rr(t.categoryGap,r),a=rr(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),g(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var c,h=0;g(i,function(t,e){t.width||(t.width=u),c=t,h+=t.width*(1+a)}),c&&(h-=c.width*a);var f=-h/2;g(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+a)})}),n}function nl(t,e,n){if(t&&e){var i=t[Ks(e)];return null!=i&&null!=n&&(i=i[Js(n)]),i}}function il(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function rl(t){return t.pipelineContext&&t.pipelineContext.large}function ol(t,e,n){return h(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function al(t,e){return Kg(t,Jg(e))}function sl(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,c=t.getExtent();"ordinal"===o?n=e.getCategories().length:(b(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=rr(i[0],1),i[1]=rr(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==a&&(a="ordinal"===o?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===a?a=c[0]:"function"==typeof a&&(a=a({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(C(a)||C(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),a<0&&s<0&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===o){var f,d=Qs("bar",h);if(g(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var p=tl(d),v=ll(a,s,e,p);a=v.min,s=v.max}}return[a,s]}function ll(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=nl(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;g(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;g(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=c/(1-(s+l)/o)-c;return e+=h*(l/u),t-=h*(s/u),{min:t,max:e}}function ul(t,e){var n=sl(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function cl(t,e){if(e=e||t.get("type"))switch(e){case"category":return new Bg(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new zg;default:return(Vs.getClass(e)||zg).create(t)}}function hl(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function fl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(dl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function dl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function pl(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();r=o?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=fl(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;h<r;h+=c){var f=u(i?i[h]:a[0]+h),d=gl(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}function gl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n);return new zt(i.x,i.y,a,s)}function vl(t){return this._axes[t]}function ml(t){rv.call(this,t)}function yl(t){return"category"===t.type?xl(t):Sl(t)}function _l(t,e){return"category"===t.type?wl(t,e):{ticks:t.scale.getTicks()}}function xl(t){var e=t.getLabelModel(),n=bl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function bl(t,e){var n,i,r=Ml(t,"labels"),o=Pl(e),a=kl(r,o);return a||(n=w(o)?Ol(t,o):Al(t,i="auto"===o?Il(t):o),Tl(r,o,{labels:n,labelCategoryInterval:i}))}function wl(t,e){var n,i,r=Ml(t,"ticks"),o=Pl(e),a=kl(r,o);if(a)return a;if(e.get("show")&&!t.scale.isBlank()||(n=[]),w(o))n=Ol(t,o,!0);else if("auto"===o){var s=bl(t,t.getLabelModel());i=s.labelCategoryInterval,n=v(s.labels,function(t){return t.tickValue})}else n=Al(t,i=o,!0);return Tl(r,o,{ticks:n,tickCategoryInterval:i})}function Sl(t){var e=t.scale.getTicks(),n=fl(t);return{labels:v(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Ml(t,e){return ov(t)[e]||(ov(t)[e]=[])}function kl(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Tl(t,e,n){return t.push({key:e,value:n}),n}function Il(t){var e=ov(t).autoInterval;return null!=e?e:ov(t).autoInterval=t.calculateCategoryInterval()}function Cl(t){var e=Dl(t),n=fl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p=0,g=0,v=re(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=ov(t.model),b=x.lastAutoInterval,w=x.lastTickCount;return null!=b&&null!=w&&Math.abs(b-_)<=1&&Math.abs(w-a)<=1&&b>_?_=b:(x.lastTickCount=a,x.lastAutoInterval=_),_}function Dl(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Al(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=fl(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};f.min&&c!==a[0]&&i(a[0]);for(var d=c;d<=a[1];d+=u)i(d);return f.max&&d!==a[1]&&i(a[1]),l}function Ol(t,e,n){var i=t.scale,r=fl(t),o=[];return g(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function Pl(t){var e=t.get("interval");return null==e?"auto":e}function Ll(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function El(t,e,n,i,r){function o(t,e){return c?t>e:t<e}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;g(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var c=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}function Nl(t,e){return e.type||(e.data?"category":"value")}function Bl(t,e,n){return t.getCoordSysModel()===e}function Rl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function $l(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],o=n.model,a=o.get("axisLine.onZero"),s=o.get("axisLine.onZeroAxisIndex");if(a)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&zl(r[l])){i=r[l];break}}else zl(r[s])&&(i=r[s])}function zl(t){return t&&"category"!==t.type&&"time"!==t.type&&hl(t)}function Fl(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function jl(t,e){return v(mv,function(e){return t.getReferringComponents(e)[0]})}function Vl(t){return"cartesian2d"===t.get("coordinateSystem")}function Hl(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function Wl(t,e,n,i){var r,o,a=ur(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return cr(a-yv/2)?(o=l?"bottom":"top",r="center"):cr(a-1.5*yv)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*yv&&a>yv/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function Gl(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function ql(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(Ul(o),Ul(u)):Yl(o,a)&&(i?(Ul(a),Ul(c)):(Ul(o),Ul(u))),!1===r?(Ul(s),Ul(h)):Yl(l,s)&&(r?(Ul(l),Ul(f)):(Ul(s),Ul(h)))}function Ul(t){t&&(t.ignore=!0)}function Yl(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var o=ot([]);return ut(o,o,-t.rotation),i.applyTransform(st([],o,t.getLocalTransform())),r.applyTransform(st([],o,e.getLocalTransform())),i.intersect(r)}}function Xl(t){return"middle"===t||"center"===t}function Zl(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),a=r.get("length"),s=i.getTicksCoords(),l=[],c=[],h=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;l[0]=p,l[1]=0,c[0]=p,c[1]=n.tickDirection*a,h&&(Z(l,l,h),Z(c,c,h));var g=new Af(Si({anid:"tick_"+s[d].tickValue,shape:{x1:l[0],y1:l[1],x2:c[0],y2:c[1]},style:u(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}function Jl(t,e,n){var i=e.axis;if(D(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),o=r.get("margin"),a=i.getViewLabels(),s=(D(n.labelRotate,r.get("rotate"))||0)*yv/180,l=bv(n.rotation,s,n.labelDirection),u=e.getCategories(!0),c=[],h=Gl(e),f=e.get("triggerEvent");return g(a,function(a,s){var d=a.tickValue,p=a.formattedLabel,g=a.rawLabel,v=r;u&&u[d]&&u[d].textStyle&&(v=new Ki(u[d].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(d),n.labelOffset+n.labelDirection*o],_=new _f({anid:"label_"+d,position:y,rotation:l.rotation,silent:h,z2:10});zi(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?d+"":d,s):m}),f&&(_.eventData=Hl(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),c.push(_),t.group.add(_),_.decomposeTransform()}),c}}function Kl(t){var e=Ql(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=eu(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Ql(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[nu(t)]}function tu(t){var e=Ql(t);return e&&e.axisPointerModel}function eu(t){return!!t.get("handle.show")}function nu(t){return t.type+"||"+t.id}function iu(t,e,n,i,r,o){var a=wv.getAxisPointerClass(t.axisPointerClass);if(a){var s=tu(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):ru(t,i)}}function ru(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function ou(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=v[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),D(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var m=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-m:m,o.z2=1,o}function au(t,e,n,i,r,o,a){$i(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:o,defaultText:ps(r.getData(),o),isRectText:!0,autoColor:i}),su(t),su(e)}function su(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function lu(t,e,n){n.style.text=null,Yi(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uu(t,e,n){n.style.text=null,Yi(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function cu(t,e,n,i,r,o,a,s){var l=e.getItemVisual(n,"color"),c=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(u({fill:l,opacity:c},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=a?r.height>0?"bottom":"top":r.width>0?"left":"right";s||au(t.style,f,i,l,o,n,p),Ri(t,f)}function hu(t,e){var n=t.get(Dv)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function fu(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new Pv({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:o});e.add(a),du(a,t,i)}function du(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function pu(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){gu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function gu(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function vu(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}gc.call(this);var r=new Sf({z2:2}),o=new Cf,a=new _f;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function mu(t,e,n,i,r,o,a){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=u<r+c?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&f<=a&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var u,c=0,h=t.length,f=[],d=[],p=0;p<h;p++)(u=t[p].y-c)<0&&function(e,n,i,r){for(var o=e;o<n;o++)if(t[o].y+=i,o>e&&o+1<n&&t[o+1].y>t[o].y+t[o].height)return void s(o,i/2);s(n-1,i/2)}(p,h,-u),c=t[p].y+t[p].height;for(a-c<0&&s(h-1,c-a),p=0;p<h;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}function yu(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)t[l].x<e?a.push(t[l]):s.push(t[l]);for(mu(s,e,n,i,1,r,o),mu(a,e,n,i,-1,r,o),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}var _u=2311,xu=function(){return _u++},bu="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof i&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var e={},r={},o=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return o&&(r.firefox=!0,r.version=o[1]),a&&(r.ie=!0,r.version=a[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:e,node:!1,canvasSupported:!!i.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in n&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in n&&(r.edge||r.ie&&r.version>=11)}}(navigator.userAgent),wu={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},Su={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Mu=Object.prototype.toString,ku=Array.prototype,Tu=ku.forEach,Iu=ku.filter,Cu=ku.slice,Du=ku.map,Au=ku.reduce,Ou={},Pu=function(){return Ou.createCanvas()};Ou.createCanvas=function(){return i.createElement("canvas")};var Lu,Eu="__ec_primitive__";$.prototype={constructor:$,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=_(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var Nu="undefined"==typeof Float32Array?Array:Float32Array,Bu=X,Ru=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};Q.prototype={constructor:Q,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(tt(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(tt(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(tt(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(tt(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(tt(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(tt(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var $u=Array.prototype.slice,zu=function(){this._$handlers={}};zu.prototype={constructor:zu,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=$u.call(e,1));for(var i=this._$handlers[t],r=i.length,o=0;o<r;){switch(n){case 1:i[o].h.call(i[o].ctx);break;case 2:i[o].h.call(i[o].ctx,e[1]);break;case 3:i[o].h.call(i[o].ctx,e[1],e[2]);break;default:i[o].h.apply(i[o].ctx,e)}i[o].one?(i.splice(o,1),r--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=$u.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],o=r.length,a=0;a<o;){switch(n){case 1:r[a].h.call(i);break;case 2:r[a].h.call(i,e[1]);break;case 3:r[a].h.call(i,e[1],e[2]);break;default:r[a].h.apply(i,e)}r[a].one?(r.splice(a,1),o--):a++}}return this}};var Fu="silent";nt.prototype.dispose=function(){};var ju=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Vu=function(t,e,n,i){zu.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new nt,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,Q.call(this),this.setHandlerProxy(n)};Vu.prototype={constructor:Vu,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(g(ju,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,o=et(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=it(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==Fu)){r.target=i[o];break}}return r}},g(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Vu.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||Bu(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),d(Vu,zu),d(Vu,Q);var Hu="undefined"==typeof Float32Array?Array:Float32Array,Wu=ot,Gu=5e-5,qu=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Uu=qu.prototype;Uu.transform=null,Uu.needLocalTransform=function(){return ft(this.rotation)||ft(this.position[0])||ft(this.position[1])||ft(this.scale[0]-1)||ft(this.scale[1]-1)},Uu.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||rt(),n?this.getLocalTransform(i):Wu(i),e&&(n?st(i,t.transform,i):at(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||rt(),ht(this.invTransform,i)):i&&Wu(i)},Uu.getLocalTransform=function(t){return qu.getLocalTransform(this,t)},Uu.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Uu.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Yu=[];Uu.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(st(Yu,t.invTransform,e),e=Yu);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,o=this.scale;ft(n-1)&&(n=Math.sqrt(n)),ft(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],o[0]=n,o[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},Uu.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},Uu.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&Z(n,n,i),n},Uu.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&Z(n,n,i),n},qu.getLocalTransform=function(t,e){Wu(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),ct(e,e,i),r&&ut(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var Xu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Xu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Xu.bounceIn(2*t):.5*Xu.bounceOut(2*t-1)+.5}};dt.prototype={constructor:dt,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Xu[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Zu=function(){this.head=null,this.tail=null,this._len=0},Ju=Zu.prototype;Ju.insert=function(t){var e=new Ku(t);return this.insertEntry(e),e},Ju.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Ju.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Ju.len=function(){return this._len},Ju.clear=function(){this.head=this.tail=null,this._len=0};var Ku=function(t){this.value=t,this.next,this.prev},Qu=function(t){this._list=new Zu,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},tc=Qu.prototype;tc.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new Ku(e),a.key=t,n.insertEntry(a),i[t]=a}return r},tc.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},tc.clear=function(){this._list.clear(),this._map={}};var ec={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},nc=new Qu(20),ic=null,rc=Array.prototype.slice,oc=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||Tt,this._setter=i||It,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};oc.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Nt(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var a=$t(this,t,function(){--r||i._doneCallback()},this._tracks[o],o,e);a&&(this._clipList.push(a),r++,this.animation&&this.animation.addClip(a),n=a)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var ac=1;"undefined"!=typeof n&&(ac=Math.max(n.devicePixelRatio||1,1));var sc=ac,lc=function(){},uc=lc,cc=function(){this.animators=[]};cc.prototype={constructor:cc,animate:function(t,e){var n,i=!1,r=this,o=this.__zr;if(t){var a=t.split("."),s=r;i="shape"===a[0];for(var l=0,u=a.length;l<u;l++)s&&(s=s[a[l]]);s&&(n=s)}else n=r;if(n){var c=r.animators,f=new oc(n,e);return f.during(function(t){r.dirty(i)}).done(function(){c.splice(h(c,f),1)}),c.push(f),o&&o.animation.addAnimator(f),f}uc('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){S(n)?(r=i,i=n,n=0):w(i)?(r=i,i="linear",n=0):w(n)?(r=n,n=0):w(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var a=this.animators.slice(),s=a.length;s||r&&r();for(var l=0;l<a.length;l++)a[l].done(function(){--s||r&&r()}).start(i,o)},_animateToShallow:function(t,e,n,i,r){var o={},a=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])M(n[s])&&!p(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(o[s]=n[s],a++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return a>0&&this.animate(t,!1).when(null==i?500:i,o).delay(r||0),this}};var hc=function(t){qu.call(this,t),zu.call(this,t),cc.call(this,t),this.id=t.id||xu()};hc.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(M(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},d(hc,cc),d(hc,qu),d(hc,zu);var fc=Z,dc=Math.min,pc=Math.max;zt.prototype={constructor:zt,union:function(t){var e=dc(t.x,this.x),n=dc(t.y,this.y);this.width=pc(t.x+t.width,this.x+this.width)-e,this.height=pc(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,fc(t,t,r),fc(e,e,r),fc(n,n,r),fc(i,i,r),this.x=dc(t[0],e[0],n[0],i[0]),this.y=dc(t[1],e[1],n[1],i[1]);var o=pc(t[0],e[0],n[0],i[0]),a=pc(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=rt();return lt(r,r,[-e.x,-e.y]),ct(r,r,[n,i]),lt(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof zt||(t=zt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<a||s<n||o<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new zt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},zt.create=function(t){return new zt(t.x,t.y,t.width,t.height)};var gc=function(t){for(var e in t=t||{},hc.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};gc.prototype={constructor:gc,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof gc&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=h(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof gc&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof gc&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof gc&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof gc&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new zt(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},f(gc,hc);var vc=32,mc=7,yc=function(){this._roots=[],this._displayList=[],this._displayListLen=0};yc.prototype={constructor:yc,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,bu.canvasSupported&&Ut(n,Yt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof gc&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof gc&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=h(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof gc&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Yt};var _c={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},xc=function(t,e,n){return _c.hasOwnProperty(e)?n*=t.dpr:n},bc=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],wc=function(t,e){this.extendFrom(t,!1),this.host=e};wc.prototype={constructor:wc,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,o=!r,a=0;a<bc.length;a++){var s=bc[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=xc(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?Zt:Xt)(t,e,n),r=e.colorStops,o=0;o<r.length;o++)i.addColorStop(r[o].offset,r[o].color);return i}};for(var Sc=wc.prototype,Mc=0;Mc<bc.length;Mc++){var kc=bc[Mc];kc[0]in Sc||(Sc[kc[0]]=kc[1])}wc.getGradient=Sc.getGradient;var Tc=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Tc.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Ic=function(t,e,n){var i;n=n||sc,"string"==typeof t?i=Kt(t,e,n):M(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Jt,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};Ic.prototype={constructor:Ic,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Kt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||wc.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=Tc.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var Cc="undefined"!=typeof n&&(n.requestAnimationFrame&&n.requestAnimationFrame.bind(n)||n.msRequestAnimationFrame&&n.msRequestAnimationFrame.bind(n)||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Dc=new Qu(50),Ac={},Oc=0,Pc=5e3,Lc=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Ec="12px sans-serif",Nc={measureText:function(t,e){var n=c();return n.font=e||Ec,n.measureText(t)}},Bc={left:1,right:1,center:1},Rc={top:1,bottom:1,middle:1},$c=new zt,zc=function(){};zc.prototype={constructor:zc,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&be(n);var i=n.text;if(null!=i&&(i+=""),$e(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&($c.copy(e),$c.applyTransform(r),e=$c),Se(this,t,i,n,e),t.restore()}}},ze.prototype={constructor:ze,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?hc.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new wc(t,this),this.dirty(!1),this}},f(ze,hc),d(ze,zc),Fe.prototype={constructor:Fe,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=te(i,this._image,this,this.onload);if(r&&ne(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){var f=s-(c=n.sx),d=l-(h=n.sy);t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new zt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},f(Fe,ze);var Fc=new zt(0,0,0,0),jc=new zt(0,0,0,0),Vc=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=l({},n||{}),this.dpr=n.devicePixelRatio||sc,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var s=t.width,u=t.height;null!=n.width&&(s=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=s*this.dpr,t.height=u*this.dpr,this._width=s,this._height=u;var c=new Ic(t,this,this.dpr);c.__builtin__=!0,c.initContext(),a[314159]=c,c.zlevel=314159,o.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=qe(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};Vc.prototype={constructor:Vc,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=h(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Ut(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Cc(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(e,n){for(var i=[],r=0;r<this._zlevelList.length;r++){var o=this._zlevelList[r];(l=this._layers[o]).__builtin__&&l!==this._hoverlayer&&(l.__dirty||n)&&i.push(l)}for(var a=!0,s=0;s<i.length;s++){var l=i[s],u=l.ctx,c={};u.save();var h=n?l.__startIndex:l.__drawIndex,f=!n&&l.incremental&&Date.now,d=f&&Date.now(),p=l.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(l.__startIndex===l.__endIndex)l.clear(!1,p);else if(h===l.__startIndex){var v=e[h];v.incremental&&v.notClear&&!n||l.clear(!1,p)}-1===h&&(console.error(t("For some unknown reason. drawIndex is -1"," at components/echarts/echarts.simple.min.js:22")),h=l.__startIndex);for(var m=h;m<l.__endIndex;m++){var y=e[m];if(this._doPaintEl(y,l,n,c),y.__dirty=!1,f&&Date.now()-d>15)break}l.__drawIndex=m,l.__drawIndex<l.__endIndex&&(a=!1),c.prevElClipPaths&&u.restore(),u.restore()}return bu.wxa&&g(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!o||o[0]||o[3])&&(!t.culling||!He(t,this._width,this._height))){var a=t.__clipPaths;i.prevElClipPaths&&!We(a,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),Ge(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new Ic("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&a(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])uc("ZLevel "+t+" has been used already");else if(Ve(e)){if(r>0&&t>i[0]){for(a=0;a<r-1&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else uc("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((a=t[r]).zlevel!==t[r-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var o,a=t[r],s=a.zlevel;a.incremental?((o=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):o=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),o.__builtin__||uc("ZLevel "+s+" has been used by unkown layer "+o.id),o!==n&&(o.__used=!0,o.__startIndex!==r&&(o.__dirty=!0),o.__startIndex=r,o.incremental?o.__drawIndex=-1:o.__drawIndex=r,e(r),n=o),a.__dirty&&(o.__dirty=!0,o.incremental&&o.__drawIndex<0&&(o.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?a(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||a(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(h(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);g(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new Ic("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n]);var s=this.root,l=i.defaultView.getComputedStyle(s);return(s[r]||je(l[n])||je(s.style[n]))-(je(l[o])||0)-(je(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var n=i.createElement("canvas"),r=n.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur*e,l=a.shadowOffsetX*e,u=a.shadowOffsetY*e,c=a.hasStroke()?a.lineWidth:0,h=Math.max(c/2,-l+s),f=Math.max(c/2,l+s),d=Math.max(c/2,-u+s),p=Math.max(c/2,u+s),g=o.width+h+f,v=o.height+d+p;n.width=g*e,n.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new Fe({style:{x:0,y:0,image:n}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var Hc="undefined"!=typeof n&&!!n.addEventListener,Wc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Gc=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,zu.call(this)};Gc.prototype={constructor:Gc,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=h(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;a<i;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;a<i;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;for(i=r.length,a=0;a<i;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Cc(t),!e._paused&&e._update())}var e=this;this._running=!0,Cc(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new oc(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},d(Gc,zu);var qc=function(){this._track=[]};qc.prototype={constructor:qc,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;o<a;o++){var s=i[o],l=Ye(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Uc)if(Uc.hasOwnProperty(e)){var n=Uc[e](this._track,t);if(n)return n}}};var Uc={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=Qe(i)/Qe(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=tn(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},Yc=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Xc=["touchstart","touchend","touchmove"],Zc={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Jc=v(Yc,function(t){var e=t.replace("mouse","pointer");return Zc[e]?e:t}),Kc={mousemove:function(t){t=Ze(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ze(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,nn(this,t,"start"),Kc.mousemove.call(this,t),Kc.mousedown.call(this,t),rn(this)},touchmove:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,nn(this,t,"change"),Kc.mousemove.call(this,t),rn(this)},touchend:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,nn(this,t,"end"),Kc.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Kc.click.call(this,t),rn(this)},pointerdown:function(t){Kc.mousedown.call(this,t)},pointermove:function(t){on(t)||Kc.mousemove.call(this,t)},pointerup:function(t){Kc.mouseup.call(this,t)},pointerout:function(t){on(t)||Kc.mouseout.call(this,t)}};g(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Kc[t]=function(e){e=Ze(this.dom,e),this.trigger(t,e)}});var Qc=sn.prototype;Qc.dispose=function(){for(var t=Yc.concat(Xc),e=0;e<t.length;e++){var n=t[e];Ke(this.dom,en(n),this._handlers[n])}},Qc.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},d(sn,zu);var th=!bu.canvasSupported,eh={canvas:Vc},nh=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new yc,o=n.renderer;if(th){if(!eh.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&eh[o]||(o="canvas");var a=new eh[o](e,r,n,t);this.storage=r,this.painter=a;var s=bu.node||bu.worker?null:new sn(a.getViewportRoot());this.handler=new Vu(r,a,s,a.root),this.animation=new Gc({stage:{update:_(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};nh.prototype={constructor:nh,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var ih=g,rh=M,oh=b,ah="series\0",sh=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],lh=0,uh=".",ch="___EC__COMPONENT__CONTAINER___",hh=0,fh=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(n&&h(n,a)>=0||i&&h(i,a)<0)){var s=e.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}},dh=fh([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),ph={getLineStyle:function(t){var e=dh(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},gh=fh([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),vh={getAreaStyle:function(t,e){return gh(this,t,e)}},mh=Math.pow,yh=Math.sqrt,_h=1e-8,xh=1e-4,bh=yh(3),wh=1/3,Sh=j(),Mh=j(),kh=j(),Th=Math.min,Ih=Math.max,Ch=Math.sin,Dh=Math.cos,Ah=2*Math.PI,Oh=j(),Ph=j(),Lh=j(),Eh=[],Nh=[],Bh={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Rh=[],$h=[],zh=[],Fh=[],jh=Math.min,Vh=Math.max,Hh=Math.cos,Wh=Math.sin,Gh=Math.sqrt,qh=Math.abs,Uh="undefined"!=typeof Float32Array,Yh=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Yh.prototype={constructor:Yh,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=qh(1/sc/t)||0,this._uy=qh(1/sc/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Bh.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=qh(t-this._xi)>this._ux||qh(e-this._yi)>this._uy||this._len<5;return this.addData(Bh.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(Bh.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Bh.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(Bh.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=Hh(r)*n+t,this._yi=Wh(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Bh.R,t,e,n,i),this},closePath:function(){this.addData(Bh.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Uh||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(Uh&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=Gh(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,o<0&&(o=r+o),d-=(o%=r)*c,p-=o*h;c>0&&d<=t||c<0&&d>=t||0==c&&(h>0&&p<=e||h<0&&p>=e);)d+=c*(n=a[i=this._dashIdx]),p+=h*n,this._dashIdx=(i+1)%g,c>0&&d<l||c<0&&d>l||h>0&&p<u||h<0&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?jh(d,t):Vh(d,t),h>=0?jh(p,e):Vh(p,e));c=d-t,h=p-e,this._dashOffset=-Gh(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=Pn,y=0,_=this._dashIdx,x=d.length,b=0;for(f<0&&(f=h+f),f%=h,a=0;a<1;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=Gh(s*s+l*l);for(;_<x&&!((b+=d[_])>f);_++);for(a=(b-f)/y;a<=1;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-Gh(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Uh&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Rh[0]=Rh[1]=zh[0]=zh[1]=Number.MAX_VALUE,$h[0]=$h[1]=Fh[0]=Fh[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1==o&&(i=e=t[o],r=n=t[o+1]),a){case Bh.M:e=i=t[o++],n=r=t[o++],zh[0]=i,zh[1]=r,Fh[0]=i,Fh[1]=r;break;case Bh.L:Wn(e,n,t[o],t[o+1],zh,Fh),e=t[o++],n=t[o++];break;case Bh.C:Gn(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],zh,Fh),e=t[o++],n=t[o++];break;case Bh.Q:qn(e,n,t[o++],t[o++],t[o],t[o+1],zh,Fh),e=t[o++],n=t[o++];break;case Bh.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h,d=(t[o++],1-t[o++]);1==o&&(i=Hh(h)*u+s,r=Wh(h)*c+l),Un(s,l,u,c,h,f,d,zh,Fh),e=Hh(f)*u+s,n=Wh(f)*c+l;break;case Bh.R:Wn(i=e=t[o++],r=n=t[o++],i+t[o++],r+t[o++],zh,Fh);break;case Bh.Z:e=i,n=r}J(Rh,Rh,zh),K($h,$h,Fh)}return 0===o&&(Rh[0]=Rh[1]=$h[0]=$h[1]=0),new zt(Rh[0],Rh[1],$h[0]-Rh[0],$h[1]-Rh[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;h<c;){var f=s[h++];switch(1==h&&(e=i=s[h],n=r=s[h+1]),f){case Bh.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case Bh.L:o=s[h++],a=s[h++],(qh(o-i)>l||qh(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case Bh.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Bh.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Bh.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],b=g>v?g:v,w=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(w,S),t.arc(0,0,b,m,M,1-x),t.scale(1/w,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,b,m,M,1-x),1==h&&(e=Hh(m)*g+d,n=Wh(m)*v+p),i=Hh(M)*g+d,r=Wh(M)*v+p;break;case Bh.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case Bh.Z:t.closePath(),i=e,r=n}}}},Yh.CMD=Bh;var Xh=2*Math.PI,Zh=2*Math.PI,Jh=Yh.CMD,Kh=2*Math.PI,Qh=1e-4,tf=[-1,-1,-1],ef=[-1,-1],nf=Tc.prototype.getCanvasPattern,rf=Math.abs,of=new Yh(!0);li.prototype={constructor:li,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||of,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=nf.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=nf.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new Yh},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Yh),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),si(o,a/s,t,e)))return!0}if(r.hasFill())return ai(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):ze.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(M(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&rf(t[0]-1)>1e-10&&rf(t[3]-1)>1e-10?Math.sqrt(rf(t[0]*t[3]-t[2]*t[1])):1}},li.extend=function(t){var e=function(e){li.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in f(e,li),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},f(li,ze);var af=Yh.CMD,sf=[[],[],[]],lf=Math.sqrt,uf=Math.atan2,cf=function(t,e){var n,i,r,o,a,s,l=t.data,u=af.M,c=af.C,h=af.L,f=af.R,d=af.A,p=af.Q;for(r=0,o=0;r<l.length;){switch(n=l[r++],o=r,i=0,n){case u:case h:i=1;break;case c:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=lf(e[0]*e[0]+e[1]*e[1]),y=lf(e[2]*e[2]+e[3]*e[3]),_=uf(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,o=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[o++]=s[0],l[o++]=s[1],s[0]+=l[r++],s[1]+=l[r++],Z(s,s,e),l[o++]=s[0],l[o++]=s[1]}for(a=0;a<i;a++)(s=sf[a])[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[o++]=s[0],l[o++]=s[1]}},hf=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],ff=Math.sqrt,df=Math.sin,pf=Math.cos,gf=Math.PI,vf=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},mf=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(vf(t)*vf(e))},yf=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(mf(t,e))},_f=function(t){ze.call(this,t)};_f.prototype={constructor:_f,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&be(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),$e(i,n)&&(this.setTransform(t),Se(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&be(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=re(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Ee(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},f(_f,ze);var xf=li.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),bf=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],wf=function(t){return bu.browser.ie&&bu.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(l=0;l<bf.length;l++)bf[l][2]=i[bf[l][0]],i[bf[l][0]]=bf[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<bf.length;l++)i[bf[l][0]]=bf[l][2]}:t},Sf=li.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:wf(li.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),Mf=li.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),kf=function(t,e){for(var n=t.length,i=[],r=0,o=1;o<n;o++)r+=X(t[o-1],t[o]);var a=r/2;for(a=a<n?n:a,o=0;o<a;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([pi(s[0],d[0],l[0],u[0],f,p,g),pi(s[1],d[1],l[1],u[1],f,p,g)])}return i},Tf=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)J(a,a,t[f]),K(s,s,t[f]);J(a,a,i[0]),K(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(V(t[f]));continue}r=t[f-1],o=t[f+1]}W(u,o,r),U(u,u,e);var g=X(p,r),v=X(p,o),m=g+v;0!==m&&(g/=m,v/=m),U(c,u,-g),U(h,u,v);var y=H([],p,c),_=H([],p,h);i&&(K(y,y,a),J(y,y,s),K(_,_,a),J(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},If=li.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){gi(t,e,!0)}}),Cf=li.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){gi(t,e,!1)}}),Df=li.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,o=e.height;e.r?xe(t,e):t.rect(n,i,r,o),t.closePath()}}),Af=li.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(n,i),a<1&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Of=[],Pf=li.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(c<1&&(Vn(n,a,r,c,Of),a=Of[1],r=Of[2],Vn(i,s,o,c,Of),s=Of[1],o=Of[2]),t.quadraticCurveTo(a,s,r,o)):(c<1&&(Bn(n,a,l,r,c,Of),a=Of[1],l=Of[2],r=Of[3],Bn(i,s,u,o,c,Of),s=Of[1],u=Of[2],o=Of[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return vi(this.shape,t,!1)},tangentAt:function(t){var e=vi(this.shape,t,!0);return Y(e,e)}}),Lf=li.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),Ef=li.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),li.prototype.getBoundingRect.call(this)}}),Nf=function(t){this.colorStops=t||[]};Nf.prototype={constructor:Nf,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Bf=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,Nf.call(this,r)};Bf.prototype={constructor:Bf},f(Bf,Nf);var Rf=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Nf.call(this,i)};Rf.prototype={constructor:Rf},f(Rf,Nf),mi.prototype.incremental=!0,mi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},mi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},mi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},mi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},mi.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},mi.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var $f=[];mi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new zt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform($f)),t.union(i)}this._rect=t}return this._rect},mi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},f(mi,ze);var zf=Math.round,Ff=Math.max,jf=Math.min,Vf={},Hf=(Object.freeze||Object)({extendShape:yi,extendPath:function(t,e){return di(t,e)},makePath:_i,makeImage:xi,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new li(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a},resizePath:wi,subPixelOptimizeLine:Si,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,o=e.width,a=e.height;return e.x=Mi(e.x,n,!0),e.y=Mi(e.y,n,!0),e.width=Math.max(Mi(i+o,n,!1)-e.x,0===o?0:1),e.height=Math.max(Mi(r+a,n,!1)-e.y,0===a?0:1),t},subPixelOptimize:Mi,setHoverStyle:Ri,setLabelStyle:$i,setTextStyle:zi,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Fi(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:qi,updateProps:Yi,initProps:Xi,getTransform:function(t,e){for(var n=ot([]);t&&t!==e;)st(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:Zi,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=Zi(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"},groupTransition:Ji,clipPointsByRect:function(t,e){return v(t,function(t){var n=t[0];n=Ff(n,e.x),n=jf(n,e.x+e.width);var i=t[1];return i=Ff(i,e.y),i=jf(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=Ff(t.x,e.x),i=jf(t.x+t.width,e.x+e.width),r=Ff(t.y,e.y),o=jf(t.y+t.height,e.y+e.height);if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}},createIcon:function(t,e,n){var i=(e=l({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),u(i,n),new Fe(e)):_i(t.replace("path://",""),e,n,"center")},Group:gc,Image:Fe,Text:_f,Circle:xf,Sector:Sf,Ring:Mf,Polygon:If,Polyline:Cf,Rect:Df,Line:Af,BezierCurve:Pf,Arc:Lf,IncrementalDisplayable:mi,CompoundPath:Ef,LinearGradient:Bf,RadialGradient:Rf,BoundingRect:zt}),Wf=["textStyle","color"],Gf={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Wf):null)},getFont:function(){return qi({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return re(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},qf=fh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Uf={getItemStyle:function(t,e){var n=qf(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Yf=d,Xf=yn();Ki.prototype={constructor:Ki,init:null,mergeOption:function(t){a(this.option,t,!0)},get:function(t,e){return null==t?this.option:Qi(this.option,this.parsePath(t),!e&&tr(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&tr(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Qi(this.option,t=this.parsePath(t));return e=e||(n=tr(this,t))&&n.getModel(t),new Ki(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(o(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Xf(this).getParent=t},isAnimationEnabled:function(){if(!bu.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},kn(Ki),Tn(Ki),Yf(Ki,ph),Yf(Ki,vh),Yf(Ki,Gf),Yf(Ki,Uf);var Zf=0,Jf=1e-4,Kf=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Qf=L,td=/([&<>"'])/g,ed={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nd=["a","b","c","d","e","f","g"],id=function(t,e){return"{"+t+(null==e?"":e)+"}"},rd=ce,od=g,ad=["left","right","top","bottom","width","height"],sd=[["width","left","right"],["height","top","bottom"]],ld=(x(br,"vertical"),x(br,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ud=yn(),cd=Ki.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Ki.call(this,t,e,n,i),this.uid=er("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Mr(t):{};a(t,e.getTheme().get(this.mainType)),a(t,this.getDefaultOption()),n&&Sr(t,i,n)},mergeOption:function(t,e){a(this.option,t,!0);var n=this.layoutMode;n&&Sr(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=ud(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},o=e.length-1;o>=0;o--)r=a(r,e[o],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Dn(cd,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=Sn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=Sn(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r}}(cd),function(t,e){function n(t){var n={},o=[];return g(t,function(a){var s=i(n,a),l=r(s.originalDeps=e(a),t);s.entryCount=l.length,0===s.entryCount&&o.push(a),g(l,function(t){h(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);h(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:o}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return g(t,function(t){h(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function o(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var a=n(e),s=a.graph,l=a.noEntryList,u={};for(g(t,function(t){u[t]=!0});l.length;){var c=l.pop(),h=s[c],f=!!u[c];f&&(i.call(r,c,h.originalDeps.slice()),delete u[c]),g(h.successor,f?function(t){u[t]=!0,o(t)}:o)}g(u,function(){throw new Error("Circle dependency may exists")})}}}(cd,function(t){var e=[];return g(cd.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=v(e,function(t){return Sn(t).main}),"dataset"!==t&&h(e,"dataset")<=0&&e.unshift("dataset"),e}),d(cd,ld);var hd="";"undefined"!=typeof navigator&&(hd=navigator.platform||"");var fd={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:hd.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},dd=yn(),pd={clearColorPalette:function(){dd(this).colorIdx=0,dd(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=dd(e=e||this),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=un(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Tr(s,n):a;if((l=l||a)&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},gd={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Cr(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Cr(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Cr(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Cr(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Cr(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();g(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Cr(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},vd="original",md="arrayRows",yd="objectRows",_d="keyedColumns",xd="unknown",bd="typedArray",wd="column",Sd="row";Dr.seriesDataToSource=function(t){return new Dr({data:t,sourceFormat:T(t)?bd:vd,fromDataset:!1})},Tn(Dr);var Md=yn(),kd="\0_ec_inner",Td=Ki.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Ki(n),this._optionManager=i},setOption:function(t,e){E(!(kd in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Wr.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&g(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];Pr(this),g(t,function(t,n){null!=t&&(cd.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?o(t):a(e[n],t,!0))}),cd.topologicalTravel(i,cd.getAllClassMainTypes(),function(i,r){var o=un(t[i]),a=dn(n.get(i),o);pn(a),g(a,function(t,e){var n=t.option;M(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=qr(i,n,t.exist))});var s=Gr(n,r);e[i]=[],n.set(i,[]),g(a,function(t,r){var o=t.exist,a=t.option;if(E(M(a)||o,"Empty component definition"),a){var u=cd.getClass(i,t.keyInfo.subType,!0);if(o&&o instanceof u)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var c=l({dependentModels:s,componentIndex:r},t.keyInfo);l(o=new u(a,this,this,c),c),o.init(a,this,this,c),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);n.get(i)[r]=o,e[i][r]=o.option},this),"series"===i&&Ur(this,n.get("series"))},this),this._seriesIndicesMap=z(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=o(this.option);return g(t,function(e,n){if(cd.hasClass(n)){for(var i=(e=un(e)).length-1;i>=0;i--)vn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[kd],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];if(null!=i)b(i)||(i=[i]),n=y(v(i,function(t){return a[t]}),function(t){return!!t});else if(null!=r){var s=b(r);n=y(a,function(t){return s&&h(r,t.id)>=0||!s&&t.id===r})}else if(null!=o){var l=b(o);n=y(a,function(t){return l&&h(o,t.name)>=0||!l&&t.name===o})}else n=a.slice();return Yr(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?y(e,t.filter):e}(Yr(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){g(t,function(t,r){e.call(n,i,t,r)})})):S(t)?g(i.get(t),e,n):M(t)&&g(this.findComponents(t),e,n)},getSeriesByName:function(t){return y(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return y(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){g(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){g(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){g(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return g(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Ur(this,y(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Ur(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),cd.topologicalTravel(n,cd.getAllClassMainTypes(),function(n,i){g(e.get(n),function(e){("series"!==n||!Vr(e,t))&&e.restoreData()})})}});d(Td,pd);var Id=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Cd={};Zr.prototype={constructor:Zr,create:function(t,e){var n=[];g(Cd,function(i,r){var o=i.create(t,e);n=n.concat(o||[])}),this._coordinateSystems=n},update:function(t,e){g(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Zr.register=function(t,e){Cd[t]=e},Zr.get=function(t){return Cd[t]};var Dd=g,Ad=o,Od=v,Pd=a,Ld=/^(min|max)?(.+)$/;Jr.prototype={constructor:Jr,setOption:function(t,e){t&&g(un(t.series),function(t){t&&t.data&&T(t.data)&&B(t.data)}),t=Ad(t,!0);var n=this._optionBackup,i=Kr.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(no(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Od(e.timelineOptions,Ad),this._mediaList=Od(e.mediaList,Ad),this._mediaDefault=Ad(e.mediaDefault),this._currentMediaIndices=[],Ad(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Ad(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,o=[],a=[];if(!i.length&&!r)return a;for(var s=0,l=i.length;s<l;s++)Qr(i[s].query,e,n)&&o.push(s);return!o.length&&r&&(o=[-1]),o.length&&!eo(o,this._currentMediaIndices)&&(a=Od(o,function(t){return Ad(-1===t?r.option:i[t].option)})),this._currentMediaIndices=o,a}};var Ed=g,Nd=M,Bd=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Rd=function(t,e){Ed(uo(t.series),function(t){Nd(t)&&lo(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Ed(n,function(e){Ed(uo(t[e]),function(t){t&&(ao(t,"axisLabel"),ao(t.axisPointer,"label"))})}),Ed(uo(t.parallel),function(t){var e=t&&t.parallelAxisDefault;ao(e,"axisLabel"),ao(e&&e.axisPointer,"label")}),Ed(uo(t.calendar),function(t){ro(t,"itemStyle"),ao(t,"dayLabel"),ao(t,"monthLabel"),ao(t,"yearLabel")}),Ed(uo(t.radar),function(t){ao(t,"name")}),Ed(uo(t.geo),function(t){Nd(t)&&(so(t),Ed(uo(t.regions),function(t){so(t)}))}),Ed(uo(t.timeline),function(t){so(t),ro(t,"label"),ro(t,"itemStyle"),ro(t,"controlStyle",!0);var e=t.data;b(e)&&g(e,function(t){M(t)&&(ro(t,"label"),ro(t,"itemStyle"))})}),Ed(uo(t.toolbox),function(t){ro(t,"iconStyle"),Ed(t.feature,function(t){ro(t,"iconStyle")})}),ao(co(t.axisPointer),"label"),ao(co(t.tooltip).axisPointer,"label")},$d=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],zd=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],Fd=function(t,e){Rd(t,e),t.series=un(t.series),g(t.series,function(t){if(M(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=ho(t,"pointer.color");null!=n&&fo(t,"itemStyle.normal.color",n)}po(t)}}),t.dataRange&&(t.visualMap=t.dataRange),g(zd,function(e){var n=t[e];n&&(b(n)||(n=[n]),g(n,function(t){po(t)}))})},jd=vo.prototype;jd.pure=!1,jd.persistent=!0,jd.getSource=function(){return this._source};var Vd={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:_o},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:mo,getItem:yo,appendData:_o},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;g(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:mo,getItem:yo,appendData:_o},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Hd={arrayRows:xo,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:xo,original:function(t,e,n,i){var r=hn(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:xo},Wd={arrayRows:bo,objectRows:function(t,e,n,i){return wo(t[e],this._dimensionInfos[e])},keyedColumns:bo,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&fn(t)&&(this.hasItemOption=!0),wo(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},Gd=/\{@(.+?)\}/g,qd={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,marker:yr(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?mr(l,s).replace(Gd,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),So(o,t,n)}):void 0},getRawValue:function(t,e){return So(this.getData(e),t)},formatTooltip:function(){}},Ud=To.prototype;Ud.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;s===u&&l===c||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=Co(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||f<d)){var p=this._progress;if(b(p))for(var g=0;g<p.length;g++)Io(this,p[g],f,d,u,c);else Io(this,p,f,d,u,c)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var Yd=function(){function t(){return i<n?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:t<o?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();Ud.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},Ud.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},Ud.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},Ud.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},Ud.getUpstream=function(){return this._upstream},Ud.getDownstream=function(){return this._downstream},Ud.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Xd=yn(),Zd=cd.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=ko({count:Oo,reset:Po}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Lr(this);var r=this.getInitialData(t,n);Eo(r,this),this.dataTask.context.data=r,Xd(this).dataBeforeProcessed=r,Do(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Mr(t):{},r=this.subType;cd.hasClass(r)&&(r+="Series"),a(t,e.getTheme().get(this.subType)),a(t,this.getDefaultOption()),cn(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&Sr(t,i,n)},mergeOption:function(t,e){t=a(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&Sr(this.option,t,n),Lr(this);var i=this.getInitialData(t,e);Eo(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Xd(this).dataBeforeProcessed=i,Do(this)},fillDataTextStyle:function(t){if(t&&!T(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&cn(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Bo(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Xd(this).data},setData:function(t){var e=Bo(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Xd(this).data=t},getSource:function(){return Or(this)},getRawData:function(){return Xd(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function i(t){return vr(gr(t))}var r=this.getData(),o=r.mapDimension("defaultedTooltip",!0),a=o.length,s=this.getRawValue(t),l=b(s),u=r.getItemVisual(t,"color");M(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var c=a>1||l&&!a?function(n){function i(t,n){var i=r.getDimensionInfo(n);if(i&&!1!==i.otherDims.tooltip){var o=i.type,l=yr({color:u,type:"subItem"}),c=(a?l+vr(i.displayName||"-")+": ":"")+vr("ordinal"===o?t+"":"time"===o?e?"":xr("yyyy/MM/dd hh:mm:ss",t):gr(t));c&&s.push(c)}}var a=m(n,function(t,e,n){var i=r.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];return o.length?g(o,function(e){i(So(r,t,e),e)}):g(n,i),(a?"<br/>":"")+s.join(a?"<br/>":", ")}(s):i(a?So(r,t,o[0]):l?s[0]:s),h=yr(u),f=r.getName(t),d=this.name;return gn(this)||(d=""),d=d?vr(d)+(e?": ":"<br/>"):"",e?h+d+c:d+h+(f?vr(f)+": "+c:c)},isAnimationEnabled:function(){if(bu.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=pd.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});d(Zd,qd),d(Zd,pd);var Jd=function(){this.group=new gc,this.uid=er("viewComponent")};Jd.prototype={constructor:Jd,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var Kd=Jd.prototype;Kd.updateView=Kd.updateLayout=Kd.updateVisual=function(t,e,n,i){},kn(Jd),Dn(Jd,{registerWhenExtend:!0});var Qd=function(){var t=yn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},tp=yn(),ep=Qd();Ro.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){zo(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){zo(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var np=Ro.prototype;np.updateView=np.updateLayout=np.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},kn(Ro),Dn(Ro,{registerWhenExtend:!0}),Ro.markUpdateMethod=function(t,e){tp(t).updateMethod=e};var ip={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},rp={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof Nf||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},op={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},ap=function(t,e){function i(t,e){if("string"!=typeof t)return t;var n=t;return g(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=a.get(t);if(null==e){for(var n=t.split("."),i=op.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function o(t){return op.series.typeNames[t]||"自定义图"}var a=e.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var s=0;e.eachSeries(function(t,e){++s},this);var l,u=a.get("data.maxCount")||10,c=a.get("series.maxCount")||10,h=Math.min(s,c);if(!(s<1)){var f=function(){var t=e.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();l=f?i(r("general.withTitle"),{title:f}):r("general.withoutTitle");var d=[];l+=i(r(s>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:s}),e.eachSeries(function(t,e){if(e<h){var a,l=t.get("name"),c="series."+(s>1?"multiple":"single")+".";a=i(a=r(l?c+"withName":c+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:o(t.subType)});var f=t.getData();n.data=f,f.count()>u?a+=i(r("data.partialData"),{displayCnt:u}):a+=r("data.allData");for(var p=[],g=0;g<f.count();g++)if(g<u){var v=f.getName(g),m=So(f,g);p.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}a+=p.join(r("data.separator.middle"))+r("data.separator.end"),d.push(a)}}),l+=d.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",l)}}},sp=Math.PI,lp=Ho.prototype;lp.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},lp.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,o=i&&i.modDataCount;return{step:r,modBy:null!=o?Math.ceil(o/r):null,modDataCount:o}}},lp.getPipeline=function(t){return this._pipelineMap.get(t)},lp.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,o=t.get("large")&&i>=t.get("largeThreshold"),a="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:a,large:o}},lp.restorePipelines=function(t){var e=this,n=e._pipelineMap=z();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),ea(e,t,t.dataTask)})},lp.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;g(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Go(this,i,r,e,n),i.overallReset&&qo(this,i,r,e,n)},this)},lp.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,ea(this,e,r)},lp.performDataProcessorTasks=function(t,e){Wo(this,this._dataProcessorHandlers,t,e,{block:!0})},lp.performVisualTasks=function(t,e,n){Wo(this,this._visualHandlers,t,e,n)},lp.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},lp.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var up=lp.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},cp=Qo(0);Ho.wrapStageHandler=function(t,e){return w(t)&&(t={overallReset:t,seriesType:na(t)}),t.uid=er("stageHandler"),e&&(t.visualType=e),t};var hp,fp={},dp={};ia(fp,Td),ia(dp,Xr),fp.eachSeriesByType=fp.eachRawSeriesByType=function(t){hp=t},fp.eachComponent=function(t){"series"===t.mainType&&t.subType&&(hp=t.subType)};var pp=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],gp={color:pp,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],pp]},vp=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],mp={color:vp,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:vp[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:vp},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};mp.categoryAxis.splitLine.show=!1,cd.extend({type:"dataset",defaultOption:{seriesLayoutBy:wd,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){Ar(this)}}),Jd.extend({type:"dataset"});var yp=E,_p=g,xp=w,bp=M,wp=cd.parseClassType,Sp={zrender:"4.0.4"},Mp=1e3,kp=1e3,Tp=3e3,Ip={PROCESSOR:{FILTER:Mp,STATISTIC:5e3},VISUAL:{LAYOUT:kp,GLOBAL:2e3,CHART:Tp,COMPONENT:4e3,BRUSH:5e3}},Cp="__flagInMainProcess",Dp="__optionUpdated",Ap=/^[a-zA-Z0-9_]+$/;oa.prototype.on=ra("on"),oa.prototype.off=ra("off"),oa.prototype.one=ra("one"),d(oa,zu);var Op=aa.prototype;Op._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Dp]){var e=this[Dp].silent;this[Cp]=!0,la(this),Pp.update.call(this),this[Cp]=!1,this[Dp]=!1,fa.call(this,e),da.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),ca(this,i),t.performVisualTasks(i),_a(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Op.getDom=function(){return this._dom},Op.getZr=function(){return this._zr},Op.setOption=function(t,e,n){var i;if(bp(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Cp]=!0,!this._model||e){var r=new Jr(this._api),o=this._theme,a=this._model=new Td(null,null,o,r);a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,Rp),n?(this[Dp]={silent:i},this[Cp]=!1):(la(this),Pp.update.call(this),this._zr.flush(),this[Dp]=!1,this[Cp]=!1,fa.call(this,i),da.call(this,i))},Op.setTheme=function(){console.log(t("ECharts#setTheme() is DEPRECATED in ECharts 3.0"," at components/echarts/echarts.simple.min.js:22"))},Op.getModel=function(){return this._model},Op.getOption=function(){return this._model&&this._model.getOption()},Op.getWidth=function(){return this._zr.getWidth()},Op.getHeight=function(){return this._zr.getHeight()},Op.getDevicePixelRatio=function(){return this._zr.painter.dpr||n.devicePixelRatio||1},Op.getRenderedCanvas=function(t){if(bu.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Op.getSvgDataUrl=function(){if(bu.svgSupported){var t=this._zr;return g(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Op.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;_p(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return _p(i,function(t){t.group.ignore=!1}),o},Op.getConnectedDataURL=function(t){if(bu.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(Hp[e]){var r=1/0,a=1/0,s=-1/0,l=-1/0,u=[],c=t&&t.pixelRatio||1;g(Vp,function(c,h){if(c.group===e){var f=c.getRenderedCanvas(o(t)),d=c.getDom().getBoundingClientRect();r=n(d.left,r),a=n(d.top,a),s=i(d.right,s),l=i(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var h=(s*=c)-(r*=c),f=(l*=c)-(a*=c),d=Pu();d.width=h,d.height=f;var p=ln(d);return _p(u,function(t){var e=new Fe({style:{x:t.left*c-r,y:t.top*c-a,image:t.dom}});p.add(e)}),p.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Op.convertToPixel=x(sa,"convertToPixel"),Op.convertFromPixel=x(sa,"convertFromPixel"),Op.containPixel=function(t,e){var n;return t=_n(this._model,t),g(t,function(t,i){i.indexOf("Models")>=0&&g(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},Op.getVisual=function(t,e){var n=(t=_n(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Op.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Op.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Pp={prepareAndUpdate:function(t){la(this),Pp.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),ca(this,e),r.update(e,n),va(e),o.performVisualTasks(e,t),ma(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(bu.canvasSupported)i.setBackgroundColor(a);else{var s=wt(a);a=kt(s,"rgb"),0===s[3]&&(a="transparent")}xa(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=z();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),va(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),_a(n,e,0,t,o),xa(e,this._api)}},updateView:function(t){var e=this._model;e&&(Ro.markUpdateMethod(t,"updateView"),va(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),ma(this,this._model,this._api,t),xa(e,this._api))},updateVisual:function(t){Pp.update.call(this,t)},updateLayout:function(t){Pp.update.call(this,t)}};Op.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Cp]=!0,n&&la(this),Pp.update.call(this),this[Cp]=!1,fa.call(this,i),da.call(this,i)}},Op.showLoading=function(t,e){if(bp(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),jp[t]){var n=jp[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Op.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Op.makeActionFromEvent=function(t){var e=l({},t);return e.type=Np[t.type],e},Op.dispatchAction=function(t,e){bp(e)||(e={silent:!!e}),Ep[t.type]&&this._model&&(this[Cp]?this._pendingActions.push(t):(ha.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&bu.browser.weChat&&this._throttledZrFlush(),fa.call(this,e.silent),da.call(this,e.silent)))},Op.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Op.on=ra("on"),Op.off=ra("off"),Op.one=ra("one");var Lp=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Op._initEvents=function(){_p(Lp,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var o=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=o&&o.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=l({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),_p(Np,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Op.isDisposed=function(){return this._disposed},Op.clear=function(){this.setOption({series:[]},!0)},Op.dispose=function(){if(!this._disposed){this._disposed=!0,bn(this.getDom(),qp,"");var t=this._api,e=this._model;_p(this._componentsViews,function(n){n.dispose(e,t)}),_p(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete Vp[this.id]}},d(aa,zu);var Ep={},Np={},Bp=[],Rp=[],$p=[],zp=[],Fp={},jp={},Vp={},Hp={},Wp=new Date-0,Gp=new Date-0,qp="_echarts_instance_",Up={},Yp=Ta;La(2e3,rp),Da(Fd),Aa(5e3,function(t){var e=z();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(go)}),Na("default",function(t,e){u(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new Df({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Lf({shape:{startAngle:-sp/2,endAngle:-sp/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new Df({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*sp/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*sp/2}).delay(300).start("circularInOut");var o=new gc;return o.add(i),o.add(r),o.add(n),o.resize=function(){var e=t.getWidth()/2,o=t.getHeight()/2;i.setShape({cx:e,cy:o});var a=i.shape.r;r.setShape({x:e-a,y:o-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},o.resize(),o}),Oa({type:"highlight",event:"highlight",update:"highlight"},F),Oa({type:"downplay",event:"downplay",update:"downplay"},F),Ca("light",gp),Ca("dark",mp);var Xp={};Fa.prototype={constructor:Fa,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(ja(t,{},i,"_oldKeyGetter",this),ja(e,n,r,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(s=n[a=i[o]])?((u=s.length)?(1===u&&(n[a]=null),s=s.unshift()):n[a]=null,this._update&&this._update(s,o)):this._remove&&this._remove(o);for(var o=0;o<r.length;o++){var a=r[o];if(n.hasOwnProperty(a)){var s=n[a];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Zp=z(["tooltip","label","itemName","itemId","seriesName"]),Jp=M,Kp="e\0\0",Qp={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},tg="undefined"==typeof Uint32Array?Array:Uint32Array,eg="undefined"==typeof Uint16Array?Array:Uint16Array,ng=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],ig=["_extent","_approximateExtent","_rawExtent"],rg=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];S(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Va(this),this._invertedIndicesMap=r,this._calculationInfo={}},og=rg.prototype;og.type="list",og.hasItemOption=!0,og.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},og.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},og.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},og.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},og.initData=function(t,e,n){(Dr.isInstance(t)||p(t))&&(t=new vo(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Wd[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},og.getProvider=function(){return this._rawData},og.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},og._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){h[T=a[g]]||(h[T]=[1/0,-1/0]);var v=l[T];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=Qp[v.type];o[T]||(o[T]=[]);var y=o[T][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];o[T][p]=_}for(k=d*i;k<e;k+=i)o[T].push(new m(Math.min(e-k,i)));this._chunkCount=o[T].length}for(var b=new Array(s),w=t;w<e;w++){b=r.getItem(w,b);for(var S=Math.floor(w/i),M=w%i,k=0;k<s;k++){var T=a[k],I=o[T][S],C=this._dimValueGetter(b,T,w,k);I[M]=C;var D=h[T];C<D[0]&&(D[0]=C),C>D[1]&&(D[1]=C)}if(!r.pure){var A=u[w];if(b&&null==A)if(null!=b.name)u[w]=A=b.name;else if(null!=n){var O=a[n],P=o[O][S];if(P){A=P[M];var L=l[O].ordinalMeta;L&&L.categories.length&&(A=L.categories[A])}}var E=null==b?null:b.id;null==E&&null!=A&&(f[A]=f[A]||0,E=A,f[A]>0&&(E+="__ec__"+f[A]),f[A]++),null!=E&&(c[w]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Ya(this)}},og.count=function(){return this._count},og.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=Ga(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},og.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},og.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},og._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},og.getValues=function(t,e){var n=[];b(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},og.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},og.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],o=n[1],a=0;a<i;a++){var s=this._getFast(t,this.getRawIndex(a));s<r&&(r=s),s>o&&(o=s)}return n=[r,o],this._extent[t]=n,n},og.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},og.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},og.getCalculationInfo=function(t){return this._calculationInfo[t]},og.setCalculationInfo=function(t,e){Jp(t)?l(this._calculationInfo,t):this._calculationInfo[t]=e},og.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},og.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},og.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},og.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},og.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},og.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,o=-1,a=0,s=this.count();a<s;a++){var l=e-this.get(t,a),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&o<0)&&(r=u,o=l,i.length=0),i.push(a))}return i},og.getRawIndex=Za,og.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},og.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Xa(this,this._nameDimIdx,e)||""},og.getId=function(t){return Ka(this,this.getRawIndex(t))},og.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=v(Qa(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];a<r;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},og.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=v(Qa(t),this.getDimension,this);for(var r=this.count(),o=new(Ga(this))(r),a=[],s=t.length,l=0,u=t[0],c=0;c<r;c++){var h,f=this.getRawIndex(c);if(0===s)h=e.call(n,c);else if(1===s){var d=this._getFast(u,f);h=e.call(n,d,c)}else{for(var p=0;p<s;p++)a[p]=this._getFast(u,f);a[p]=c,h=e.apply(n,a)}h&&(o[l++]=f)}return l<r&&(this._indices=o),this._count=l,this._extent={},this.getRawIndex=this._indices?Ja:Za,this}},og.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=new(Ga(this))(r),a=0,s=e[0],l=t[s][0],u=t[s][1],c=!1;if(!this._indices){var h=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((b=p[v])>=l&&b<=u||isNaN(b))&&(o[a++]=h),h++;c=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var b=p[v],w=x[v];(b>=l&&b<=u||isNaN(b))&&(w>=y&&w<=_||isNaN(w))&&(o[a++]=h),h++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((b=this._getFast(s,M))>=l&&b<=u||isNaN(b))&&(o[a++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var k=e[d];((b=this._getFast(n,M))<t[k][0]||b>t[k][1])&&(S=!1)}S&&(o[a++]=this.getRawIndex(v))}return a<r&&(this._indices=o),this._count=a,this._extent={},this.getRawIndex=this._indices?Ja:Za,this}}},og.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},og.map=function(t,e,n,i){n=n||i||this;var r=ts(this,t=v(Qa(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?Ja:Za;for(var o=r._storage,a=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;f<u;f++){for(var d=0;d<l;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(a[0]=p,p=a);for(var g=this.getRawIndex(f),m=Math.floor(g/s),y=g%s,_=0;_<p.length;_++){var x=t[_],b=p[_],w=h[x],S=o[x];S&&(S[m][y]=b),b<w[0]&&(w[0]=b),b>w[1]&&(w[1]=b)}}}return r},og.downSample=function(t,e,n,i){for(var r=ts(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(Ga(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),b=x%c;l[Math.floor(x/c)][b]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=Ja,r},og.getItemModel=function(t){var e=this.hostModel;return new Ki(this.getRawDataItem(t),e,e&&e.ecModel)},og.diff=function(t){var e=this;return new Fa(t?t.getIndices():[],this.getIndices(),function(e){return Ka(t,e)},function(t){return Ka(e,t)})},og.getVisual=function(t){var e=this._visual;return e&&e[t]},og.setVisual=function(t,e){if(Jp(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},og.setLayout=function(t,e){if(Jp(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},og.getLayout=function(t){return this._layout[t]},og.getItemLayout=function(t){return this._itemLayouts[t]},og.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?l(this._itemLayouts[t]||{},e):e},og.clearItemLayouts=function(){this._itemLayouts.length=0},og.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},og.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,Jp(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},og.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var ag=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};og.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(ag,e)),this._graphicEls[t]=e},og.getItemGraphicEl=function(t){return this._graphicEls[t]},og.eachItemGraphicEl=function(t,e){g(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},og.cloneShallow=function(t){if(!t){var e=v(this.dimensions,this.getDimensionInfo,this);t=new rg(e,this.hostModel)}if(t._storage=this._storage,Ua(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?Ja:Za,t},og.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(P(arguments)))})},og.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],og.CHANGABLE_METHODS=["filterSelf","selectRange"];var sg=function(t,e){return e=e||{},is(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Zd.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return us(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var lg=yi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),ug=yi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),cg=yi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),hg=yi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),fg={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},dg={};g({line:Af,rect:Df,roundRect:Df,square:Df,circle:xf,diamond:ug,pin:cg,arrow:hg,triangle:lg},function(t,e){dg[e]=new t});var pg=yi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=dg[i];"none"!==e.symbolType&&(r||(r=dg[i="rect"]),fg[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),gg=gs.prototype,vg=gs.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};gg._createSymbol=function(t,e,n,i,r){this.removeAll();var o=ds(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);o.attr({z2:100,culling:!0,scale:vs(i)}),o.drift=ms,this._symbolType=t,this.add(o)},gg.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},gg.getSymbolPath=function(){return this.childAt(0)},gg.getScale=function(){return this.childAt(0).scale},gg.highlight=function(){this.childAt(0).trigger("emphasis")},gg.downplay=function(){this.childAt(0).trigger("normal")},gg.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},gg.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},gg.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=vg(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else(l=this.childAt(0)).silent=!1,Yi(l,{scale:vs(o)},r,e);if(this._updateCommon(t,e,o,n),a){var l=this.childAt(0),u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Xi(l,c,r,e)}this._seriesModel=r};var mg=["itemStyle"],yg=["emphasis","itemStyle"],_g=["label"],xg=["emphasis","label"];gg._updateCommon=function(t,e,n,i){var r=this.childAt(0),o=t.hostModel,a=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var s=i&&i.itemStyle,u=i&&i.hoverItemStyle,c=i&&i.symbolRotate,h=i&&i.symbolOffset,f=i&&i.labelModel,d=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);s=v.getModel(mg).getItemStyle(["color"]),u=v.getModel(yg).getItemStyle(),c=v.getShallow("symbolRotate"),h=v.getShallow("symbolOffset"),f=v.getModel(_g),d=v.getModel(xg),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=l({},u);var m=r.style;r.attr("rotation",(c||0)*Math.PI/180||0),h&&r.attr("position",[rr(h[0],n[0]),rr(h[1],n[1])]),g&&r.attr("cursor",g),r.setColor(a,i&&i.symbolInnerColor),r.setStyle(s);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var b=i&&i.useNameLabel;$i(m,u,f,d,{labelFetcher:o,labelDataIndex:e,defaultText:function(e,n){return b?t.getName(e):ps(t,e)},isRectText:!0,autoColor:a}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,Ri(r);var w=vs(n);if(p&&o.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=w[1]/w[0];this.animateTo({scale:[Math.max(1.1*w[0],w[0]+3),Math.max(1.1*w[1],w[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:w},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},gg.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),Yi(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},f(gs,gc);var bg=ys.prototype;bg.updateData=function(t,e){e=xs(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=bs(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(_s(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);_s(t,c,s,e)?(u?(u.updateData(t,s,a),Yi(u,{position:c},i)):(u=new o(t,s)).attr("position",c),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},bg.isPersistent=function(){return!0},bg.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},bg.incrementalPrepareUpdate=function(t){this._seriesScope=bs(t),this._data=null,this.group.removeAll()},bg.incrementalUpdate=function(t,e,n){n=xs(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(_s(e,r,i,n)){var o=new this._symbolCtor(e,i,this._seriesScope);o.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),o.attr("position",r),this.group.add(o),e.setItemGraphicEl(i,o)}}},bg.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var wg=function(t,e,n,i,r,o,a,s){for(var l=ks(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=ws(r,e,a),m=ws(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var b=t.getItemLayout(_.idx),w=e.getItemLayout(_.idx1);(isNaN(b[0])||isNaN(b[1]))&&(b=w.slice()),u.push(b),c.push(w),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Ms(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Ms(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var k=[],T=[],I=[],C=[],D=[];for(y=0;y<p.length;y++)S=p[y],k[y]=u[S],T[y]=c[S],I[y]=h[S],C[y]=f[S],D[y]=d[S];return{current:k,next:T,stackedOnCurrent:I,stackedOnNext:C,status:D}},Sg=J,Mg=K,kg=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Tg=function(t,e){return t[0]=e[0],t[1]=e[1],t},Ig=[],Cg=[],Dg=[],Ag=li.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:wf(li.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=As(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Ts(n[r-1]);r--);for(;i<r&&Ts(n[i]);i++);}for(;i<r;)i+=Is(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Og=li.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:wf(li.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=As(n,e.smoothConstraint),l=As(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Ts(n[o-1]);o--);for(;r<o&&Ts(n[r]);r++);}for(;r<o;){var u=Is(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);Is(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});Ro.extend({type:"line",init:function(){var t=new gc,e=new ys;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,o=t.getData(),a=t.getModel("lineStyle"),s=t.getModel("areaStyle"),l=o.mapArray(o.getItemLayout),c="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Es(i,o,ws(i,o,y)),x=t.get("showSymbol"),b=x&&!c&&Fs(t,o,i),w=this._data;w&&w.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),w.setItemGraphicEl(e,null))}),x||f.remove(),r.add(g);var S=!c&&t.get("step");d&&h.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(l,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Rs(i,!1,!1,t)),x&&f.updateData(o,{isIgnore:b,clipShape:Rs(i,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),Os(this._stackedOnPoints,_)&&Os(this._points,l)||(v?this._updateAnimation(o,_,i,n,S,y):(S&&(l=$s(l,i,S),_=$s(_,i,S)),d.setShape({points:l}),p&&p.setShape({points:l,stackedOnPoints:_})))):(x&&f.updateData(o,{isIgnore:b,clipShape:Rs(i,!1,!0,t)}),S&&(l=$s(l,i,S),_=$s(_,i,S)),d=this._newPolyline(l,i,v),m&&(p=this._newPolygon(l,_,i,v)),g.setClipPath(Rs(i,!0,!1,t)));var M=zs(o,i)||o.getVisual("color");d.useStyle(u(a.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var k=t.get("smooth");if(k=Ps(t.get("smooth")),d.setShape({smooth:k,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var T=o.getCalculationInfo("stackedOnSeries"),I=0;p.useStyle(u(s.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),T&&(I=Ps(T.get("smooth"))),p.setShape({smooth:k,stackedOnSmooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=i,this._stackedOnPoints=_,this._points=l,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=mn(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;(a=new gs(r,o)).position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else Ro.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=mn(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else Ro.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Ag({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Og({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=wg(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=$s(u.current,n,r),h=$s(u.stackedOnCurrent,n,r),f=$s(u.next,n,r),d=$s(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,Yi(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),Yi(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",a.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Pg={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Lg=function(t,e){return Math.round(t.length/2)};Vs.prototype.parse=function(t){return t},Vs.prototype.getSetting=function(t){return this._setting[t]},Vs.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Vs.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Vs.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Vs.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Vs.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Vs.prototype.getExtent=function(){return this._extent.slice()},Vs.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Vs.prototype.isBlank=function(){return this._isBlank},Vs.prototype.setBlank=function(t){this._isBlank=t},Vs.prototype.getLabel=null,kn(Vs),Dn(Vs,{registerWhenExtend:!0}),Hs.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&v(n,Gs);return new Hs({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var Eg=Hs.prototype;Eg.getOrdinal=function(t){return Ws(this).get(t)},Eg.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Ws(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var Ng=Vs.prototype,Bg=Vs.extend({type:"ordinal",init:function(t,e){t&&!b(t)||(t=new Hs({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),Ng.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return Ng.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(Ng.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:F,niceExtent:F});Bg.create=function(){return new Bg};var Rg=or,$g=or,zg=Vs.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),zg.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Us(t)},getTicks:function(){return Zs(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=ar(t)||0:"auto"===n&&(n=this._intervalPrecision),t=$g(t,n,!0),gr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var o=qs(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=$g(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=$g(Math.ceil(e[1]/r)*r))}});zg.create=function(){return new zg};var Fg="__ec_stack_",jg="undefined"!=typeof Float32Array?Float32Array:Array,Vg={seriesType:"bar",plan:Qd(),reset:function(t){if(il(t)&&rl(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),o=e.mapDimension(r.dim),a=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=nl(tl([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var c,h=new jg(2*t.count),f=[],d=[],p=0;null!=(c=t.next());)d[l]=e.get(o,c),d[1-l]=e.get(a,c),f=n.dataToPoint(d,null,f),h[p++]=f[0],h[p++]=f[1];e.setLayout({largePoints:h,barWidth:u,valueAxisStart:ol(i,r,!1),valueAxisHorizontal:s})}}}}},Hg=zg.prototype,Wg=Math.ceil,Gg=Math.floor,qg=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},Ug=zg.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return xr(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=or(Gg(e[0]/i)*i)),t.fixMax||(e[1]=or(Wg(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&o<e&&(o=e),null!=n&&o>n&&(o=n);var a=Yg.length,s=qg(Yg,o,0,a),l=Yg[Math.min(s,a-1)],u=l[1];"year"===l[0]&&(u*=pr(r/u/t,!0));var c=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,h=[Math.round(Wg((i[0]-c)/u)*u+c),Math.round(Gg((i[1]-c)/u)*u+c)];Xs(h,i),this._stepLvl=l,this._interval=u,this._niceExtent=h},parse:function(t){return+hr(t)}});g(["contain","normalize"],function(t){Ug.prototype[t]=function(e){return Hg[t].call(this,this.parse(e))}});var Yg=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];Ug.create=function(t){return new Ug({useUTC:t.ecModel.get("useUTC")})};var Xg=Vs.prototype,Zg=zg.prototype,Jg=ar,Kg=or,Qg=Math.floor,tv=Math.ceil,ev=Math.pow,nv=Math.log,iv=Vs.extend({type:"log",base:10,$constructor:function(){Vs.apply(this,arguments),this._originalScale=new zg},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return v(Zg.getTicks.call(this),function(i){var r=or(ev(this.base,i));return r=i===e[0]&&t.__fixMin?al(r,n[0]):r,i===e[1]&&t.__fixMax?al(r,n[1]):r},this)},getLabel:Zg.getLabel,scale:function(t){return t=Xg.scale.call(this,t),ev(this.base,t)},setExtent:function(t,e){var n=this.base;t=nv(t)/nv(n),e=nv(e)/nv(n),Zg.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Xg.getExtent.call(this);e[0]=ev(t,e[0]),e[1]=ev(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=al(e[0],i[0])),n.__fixMax&&(e[1]=al(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=nv(t[0])/nv(e),t[1]=nv(t[1])/nv(e),Xg.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=fr(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[or(tv(e[0]/i)*i),or(Qg(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Zg.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});g(["contain","normalize"],function(t){iv.prototype[t]=function(e){return e=nv(e)/nv(this.base),Xg[t].call(this,e)}}),iv.create=function(){return new iv};var rv=function(t){this._axes={},this._dimList=[],this.name=t||""};rv.prototype={constructor:rv,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return v(this._dimList,vl,this)},getAxesByScale:function(t){return t=t.toLowerCase(),y(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},ml.prototype={constructor:ml,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},f(ml,rv);var ov=yn(),av=[0,1],sv=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};sv.prototype={constructor:sv,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return sr(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Ll(n=n.slice(),i.count()),ir(t,av,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Ll(n=n.slice(),i.count());var r=ir(t,n,av,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=_l(this,e),i=v(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return El(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return yl(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Cl(this)}};var lv=function(t,e,n,i,r){sv.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};lv.prototype={constructor:lv,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},f(lv,sv);var uv={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},cv={};cv.categoryAxis=a({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},uv),cv.valueAxis=a({boundaryGap:[0,0],splitNumber:5},uv),cv.timeAxis=u({scale:!0,min:"dataMin",max:"dataMax"},cv.valueAxis),cv.logAxis=u({scale:!0,logBase:10},cv.valueAxis);var hv=["value","category","time","log"],fv=function(t,e,n,i){g(hv,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,s=o?Mr(e):{};a(e,i.getTheme().get(r+"Axis")),a(e,this.getDefaultOption()),e.type=n(t,e),o&&Sr(e,s,o)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Hs.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:s([{},cv[r+"Axis"],i],!0)})}),cd.registerSubTypeDefaulter(t+"Axis",x(n,t))},dv={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!C(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:F,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},pv=cd.extend({type:"cartesian2dAxis",axis:null,init:function(){pv.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){pv.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){pv.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});a(pv.prototype,dv);var gv={offset:0};fv("x",pv,Nl,gv),fv("y",pv,Nl,gv),cd.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var vv=Rl.prototype;vv.type="grid",vv.axisPointerEnabled=!0,vv.getRect=function(){return this._rect},vv.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),g(n.x,function(t){ul(t.scale,t.model)}),g(n.y,function(t){ul(t.scale,t.model)}),g(n.x,function(t){$l(n,"y",t)}),g(n.y,function(t){$l(n,"x",t)}),this.resize(this.model,e)},vv.resize=function(t,e,n){function i(){g(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),Fl(t,e?r.x:r.y)})}var r=wr(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(g(o,function(t){if(!t.model.get("axisLabel.inside")){var e=pl(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},vv.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},vv.getAxes=function(){return this._axesList.slice()},vv.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}M(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},vv.getCartesians=function(){return this._coordsList.slice()},vv.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},vv.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},vv._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?h(l,n=r.coordinateSystem)<0&&(n=null):o&&a?n=this.getCartesian(o.componentIndex,a.componentIndex):o?i=this.getAxis("x",o.componentIndex):a?i=this.getAxis("y",a.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},vv.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},vv._initCartesian=function(t,e,n){function i(n){return function(i,s){if(Bl(i,t,e)){var l=i.get("position");"x"===n?"top"!==l&&"bottom"!==l&&r[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&r[l="left"]&&(l="left"===l?"right":"left"),r[l]=!0;var u=new lv(n,cl(i),[0,0],i.get("type"),l),c="category"===u.type;u.onBand=c&&i.get("boundaryGap"),u.inverse=i.get("inverse"),i.axis=u,u.model=i,u.grid=this,u.index=s,this._axesList.push(u),o[n][s]=u,a[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},o={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=o,g(o.x,function(e,n){g(o.y,function(i,r){var o="x"+n+"y"+r,a=new ml(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)},vv._updateScale=function(t,e){function n(t,e,n){g(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,ls(t,n))})}g(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Vl(i)){var r=jl(i),o=r[0],a=r[1];if(!Bl(o,e,t)||!Bl(a,e,t))return;var s=this.getCartesian(o.componentIndex,a.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u),n(l,c))}},this)},vv.getTooltipAxes=function(t){var e=[],n=[];return g(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);h(e,r)<0&&e.push(r),h(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var mv=["xAxis","yAxis"];Rl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new Rl(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(t){if(Vl(t)){var e=jl(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Rl.dimensions=Rl.prototype.dimensions=ml.prototype.dimensions,Zr.register("cartesian2d",Rl);var yv=Math.PI,_v=function(t,e){this.opt=e,this.axisModel=t,u(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new gc;var n=new gc({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};_v.prototype={constructor:_v,hasBuilder:function(t){return!!xv[t]},add:function(t){xv[t].call(this)},getGroup:function(){return this.group}};var xv={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(Z(r,r,i),Z(o,o,i));var a=l({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Af(Si({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:a,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var s=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),c=e.get("axisLine.symbolOffset")||0;if("number"==typeof c&&(c=[c,c]),null!=s){"string"==typeof s&&(s=[s,s]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var h=u[0],f=u[1];g([{rotate:t.rotation+Math.PI/2,offset:c[0],r:0},{rotate:t.rotation-Math.PI/2,offset:c[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==s[n]&&null!=s[n]){var i=ds(s[n],-h/2,-f/2,h,f,a.stroke,!0),o=e.r+e.offset,l=[r[0]+o*Math.cos(t.rotation),r[1]-o*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:l,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Zl(this,t,e);ql(t,Jl(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=D(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),a=t.nameDirection,s=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===o?c[0]-h*u:"end"===o?c[1]+h*u:(c[0]+c[1])/2,Xl(o)?t.labelOffset+a*u:0],d=e.get("nameRotate");null!=d&&(d=d*yv/180),Xl(o)?i=bv(t.rotation,null!=d?d:t.rotation,a):(i=Wl(t,o,d||0,c),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=s.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=D(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?rd(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,b={componentType:x,name:n,$vars:["name"]};b[x+"Index"]=e.componentIndex;var w=new _f({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:Gl(e),z2:1,tooltip:_&&_.show?l({content:n,formatter:function(){return n},formatterParams:b},_):null});zi(w.style,s,{text:y,textFont:p,textFill:s.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(w.eventData=Hl(e),w.eventData.targetType="axisName",w.eventData.name=n),this._dumbGroup.add(w),w.updateTransform(),this.group.add(w),w.decomposeTransform()}}},bv=_v.innerTextLayout=function(t,e,n){var i,r,o=ur(e-t);return cr(o)?(r=n>0?"top":"bottom",i="center"):cr(o-yv)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<yv?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},wv=Ba({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Kl(t),wv.superApply(this,"render",arguments),iu(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){iu(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),wv.superApply(this,"remove",arguments)},dispose:function(t,e){ru(this,e),wv.superApply(this,"dispose",arguments)}}),Sv=[];wv.registerAxisPointerClass=function(t,e){Sv[t]=e},wv.getAxisPointerClass=function(t){return t&&Sv[t]};var Mv=["axisLine","axisTickLabel","axisName"],kv=["splitArea","splitLine"],Tv=wv.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new gc,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=ou(o,t),s=new _v(t,a);g(Mv,s.add,s),this._axisGroup.add(s.getGroup()),g(kv,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),Ji(r,this._axisGroup,t),Tv.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),o=r.get("color");o=b(o)?o:[o];for(var a=e.coordinateSystem.getRect(),s=n.isHorizontal(),l=0,c=n.getTicksCoords({tickModel:i}),h=[],f=[],d=r.getLineStyle(),p=0;p<c.length;p++){var g=n.toGlobalCoord(c[p].coord);s?(h[0]=g,h[1]=a.y,f[0]=g,f[1]=a.y+a.height):(h[0]=a.x,h[1]=g,f[0]=a.x+a.width,f[1]=g);var v=l++%o.length,m=c[p].tickValue;this._axisGroup.add(new Af(Si({anid:null!=m?"line_"+c[p].tickValue:null,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:u({stroke:o[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),o=r.get("color"),a=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var l=o.length,c=this._splitAreaColors,h=z(),f=0;if(c)for(v=0;v<s.length;v++){var d=c.get(s[v].tickValue);if(null!=d){f=(d+(l-1)*v)%l;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();o=b(o)?o:[o];for(var v=1;v<s.length;v++){var m,y,_,x,w=n.toGlobalCoord(s[v].coord);n.isHorizontal()?(m=p,y=a.y,_=w-m,x=a.height,p=m+_):(m=a.x,y=p,_=a.width,p=y+(x=w-y));var S=s[v-1].tickValue;null!=S&&h.set(S,f),this._axisGroup.add(new Df({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:x},style:u({fill:o[f]},g),silent:!0})),f=(f+1)%l}this._splitAreaColors=h}}}});Tv.extend({type:"xAxis"}),Tv.extend({type:"yAxis"}),Ba({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new Df({shape:t.coordinateSystem.getRect(),style:u({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Da(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),La(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var o=t.getData(),a=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(o.setVisual({legendSymbol:n||a,symbol:a,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:o.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),a=o.getShallow("symbol",!0),l=o.getShallow("symbolSize",!0),u=o.getShallow("symbolKeepAspect",!0);null!=a&&e.setItemVisual(n,"symbol",a),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}("line","circle","line")),Pa(function(t){return{seriesType:t,plan:Qd(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=v(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),o=r.length,a=e.getCalculationInfo("stackResultDimension");return ss(e,r[0])&&(r[0]=a),ss(e,r[1])&&(r[1]=a),o&&{progress:function(t,e){for(var a=t.end-t.start,s=i&&new Float32Array(a*o),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===o)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,h);else{var d=c[0]=e.get(r[0],l),p=c[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(c,null,h)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),Aa(Ip.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a,s=o.getBaseAxis(),l=o.getOtherAxis(s),u=s.getExtent(),c=u[1]-u[0],h=Math.round(i.count()/c);if(h>1)"string"==typeof r?a=Pg[r]:"function"==typeof r&&(a=r),a&&t.setData(i.downSample(i.mapDimension(l.dim),1/h,a,Lg))}}}}("line")),Zd.extend({type:"series.__base_bar__",getInitialData:function(t,e){return us(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var Iv=fh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Cv={getBarItemStyle:function(t){var e=Iv(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Dv=["itemStyle","barBorderWidth"];l(Ki.prototype,Cv),$a({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,o=t.getData(),a=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;o.diff(a).add(function(e){if(o.hasValue(e)){var n=o.getItemModel(e),a=Ov[s.type](o,e,n),l=Av[s.type](o,e,n,a,i,u);o.setItemGraphicEl(e,l),r.add(l),cu(l,o,e,n,a,t,i,"polar"===s.type)}}).update(function(e,n){var l=a.getItemGraphicEl(n);if(o.hasValue(e)){var c=o.getItemModel(e),h=Ov[s.type](o,e,c);l?Yi(l,{shape:h},u,e):l=Av[s.type](o,e,c,h,i,u,!0),o.setItemGraphicEl(e,l),r.add(l),cu(l,o,e,c,h,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=a.getItemGraphicEl(t);"cartesian2d"===s.type?e&&lu(t,u,e):e&&uu(t,u,e)}).execute(),this._data=o},_renderLarge:function(t,e,n){this._clear(),fu(t,this.group)},_incrementalRenderLarge:function(t,e){fu(e,this.group,!0)},dispose:F,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?uu(e.dataIndex,t,e):lu(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Av={cartesian2d:function(t,e,n,i,r,o,a){var s=new Df({shape:l({},i)});if(o){var u=s.shape,c=r?"height":"width",h={};u[c]=0,h[c]=i[c],Hf[a?"updateProps":"initProps"](s,{shape:h},o,e)}return s},polar:function(t,e,n,i,r,o,a){var s=i.startAngle<i.endAngle,l=new Sf({shape:u({clockwise:s},i)});if(o){var c=l.shape,h=r?"r":"endAngle",f={};c[h]=r?0:i.startAngle,f[h]=i[h],Hf[a?"updateProps":"initProps"](l,{shape:f},o,e)}return l}},Ov={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=hu(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},Pv=li.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,o=0;o<n.length;o+=2)i[this.__valueIdx]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}});Pa(x(function(t,e){var n=Qs(t,e),i=tl(n),r={};g(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=Js(t),s=i[Ks(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=ss(e,f),g=c.isHorizontal(),v=ol(o,c,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var b,w,S,M,k=_>=0?"p":"n",T=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),T=r[a][x][k]),g)b=T,w=(I=n.dataToPoint([_,x]))[1]+l,S=I[0]-v,M=u,Math.abs(S)<h&&(S=(S<0?-1:1)*h),p&&(r[a][x][k]+=S);else{var I=n.dataToPoint([x,_]);b=I[0]+l,w=T,S=u,M=I[1]-v,Math.abs(M)<h&&(M=(M<=0?-1:1)*h),p&&(r[a][x][k]+=M)}e.setItemLayout(m,{x:b,y:w,width:S,height:M})}}},this)},"bar")),Pa(Vg),La({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Lv=function(t,e,n){e=b(e)&&{coordDimensions:e}||l({},e);var i=t.getSource(),r=sg(i,e),o=new rg(r,t);return o.initData(i,n),o},Ev={updateSelectedMap:function(t){this._targetList=b(t)?t.slice():[],this._selectTargetMap=m(t||[],function(t,e){return t.set(e.name,e),t},z())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Nv=Ra({type:"series.pie",init:function(t){Nv.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Nv.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Lv(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:Mo(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Nv.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=lr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){cn(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});d(Nv,Ev);var Bv=vu.prototype;Bv.updateData=function(t,e,n){function i(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r+a.get("hoverOffset")}},300,"elasticOut")}function r(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r}},300,"elasticOut")}var o=this.childAt(0),a=t.hostModel,s=t.getItemModel(e),c=t.getItemLayout(e),h=l({},c);h.label=null,n?(o.setShape(h),"scale"===a.getShallow("animationType")?(o.shape.r=c.r0,Xi(o,{shape:{r:c.r}},a,e)):(o.shape.endAngle=c.startAngle,Yi(o,{shape:{endAngle:c.endAngle}},a,e))):Yi(o,{shape:h},a,e);var f=t.getItemVisual(e,"color");o.useStyle(u({lineJoin:"bevel",fill:f},s.getModel("itemStyle").getItemStyle())),o.hoverStyle=s.getModel("emphasis.itemStyle").getItemStyle();var d=s.getShallow("cursor");d&&o.attr("cursor",d),gu(this,t.getItemLayout(e),a.isSelected(null,e),a.get("selectedOffset"),a.get("animation")),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),s.get("hoverAnimation")&&a.isAnimationEnabled()&&o.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),Ri(this)},Bv._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Yi(n,{shape:{points:a.linePoints||[[a.x,a.y],[a.x,a.y],[a.x,a.y]]}},r,e),Yi(i,{style:{x:a.x,y:a.y}},r,e),i.attr({rotation:a.rotation,origin:[a.x,a.y],z2:10});var l=o.getModel("label"),u=o.getModel("emphasis.label"),c=o.getModel("labelLine"),h=o.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");$i(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!a.inside},{textAlign:a.textAlign,textVerticalAlign:a.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!c.get("show"),n.hoverIgnore=!h.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(c.getModel("lineStyle").getLineStyle()),n.hoverStyle=h.getModel("lineStyle").getLineStyle();var f=c.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},f(vu,gc),Ro.extend({type:"pie",init:function(){var t=new gc;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=x(pu,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new vu(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=_(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new Sf({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Xi(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,o=Math.sqrt(i*i+r*r);return o<=n.r&&o>=n.r0}}});var Rv=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1;a.each(function(n){var i,u,c,h,f=a.getItemLayout(n),d=a.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),b=Math.sin(_);r=f.cx,o=f.cy;var w="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,h="center";else{var S=(w?(f.r+f.r0)/2*x:f.r*x)+r,M=(w?(f.r+f.r0)/2*b:f.r*b)+o;if(i=S+3*x,u=M+3*b,!w){var k=S+x*(m+e-f.r),T=M+b*(m+e-f.r),I=k+(x<0?-1:1)*y,C=T;i=I+(x<0?-5:5),u=C,c=[[S,M],[k,T],[I,C]]}h=w?"center":x>0?"left":"right"}var D=p.getFont(),A=p.get("rotate")?x<0?-_+Math.PI:-_:0,O=re(t.getFormattedLabel(n,"normal")||a.getName(n),D,h,"top");l=!!A,f.label={x:i,y:u,position:g,height:O.height,len:m,len2:y,linePoints:c,textAlign:h,verticalAlign:"middle",rotation:A,inside:w},w||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&yu(s,r,o,e,n,i)},$v=2*Math.PI,zv=Math.PI/180;!function(t,e){g(e,function(e){e.update="updateView",Oa(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),La(function(t){return{getTargetSeries:function(e){var n={},i=z();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var o=i[e],a=null!=o&&r.getItemVisual(o,"color",!0);if(a)n.setItemVisual(e,"color",a);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=o&&r.setItemVisual(o,"color",s)}})}}}("pie")),Pa(x(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");b(o)||(o=[0,o]),b(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=rr(r[0],a),c=rr(r[1],s),h=rr(o[0],l/2),f=rr(o[1],l/2),d=-t.get("startAngle")*zv,p=t.get("minAngle")*zv,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),x=t.get("stillShowZeroSum"),w=e.getDataExtent(i);w[0]=0;var S=$v,M=0,k=d,T=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{(i="area"!==_?0===v&&x?m:t*m:$v/g)<p?(i=p,S-=p):M+=t;var r=k+T*i;e.setItemLayout(n,{angle:i,startAngle:k,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?ir(t,w,[h,f]):f}),k=r}}),S<$v&&g)if(S<=.001){var I=$v/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=I,i.startAngle=d+T*n*I,i.endAngle=d+T*(n+1)*I}})}else m=S/M,k=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=k,i.endAngle=k+T*r,k+=T*r}});Rv(t,f,a,s)})},"pie")),Aa(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),e.version="4.1.0",e.dependencies=Sp,e.PRIORITY=Ip,e.init=function(t,e,n){var i=Ia(t);if(i)return i;var r=new aa(t,e,n);return r.id="ec_"+Wp++,Vp[r.id]=r,bn(t,qp,r.id),ka(r),r},e.connect=function(t){if(b(t)){var e=t;t=null,_p(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+Gp++,_p(e,function(e){e.group=t})}return Hp[t]=!0,t},e.disConnect=Ta,e.disconnect=Yp,e.dispose=function(t){"string"==typeof t?t=Vp[t]:t instanceof aa||(t=Ia(t)),t instanceof aa&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=Ia,e.getInstanceById=function(t){return Vp[t]},e.registerTheme=Ca,e.registerPreprocessor=Da,e.registerProcessor=Aa,e.registerPostUpdate=function(t){$p.push(t)},e.registerAction=Oa,e.registerCoordinateSystem=function(t,e){Zr.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=Zr.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},e.registerLayout=Pa,e.registerVisual=La,e.registerLoading=Na,e.extendComponentModel=function(t){return cd.extend(t)},e.extendComponentView=Ba,e.extendSeriesModel=Ra,e.extendChartView=$a,e.setCanvasCreator=function(t){r("createCanvas",t)},e.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),Up[t]={geoJson:e,specialAreas:n}},e.getMap=function(t){return Up[t]},e.dataTool=Xp})}).call(this,n("0de9")["default"])},de83:function(t,e,n){}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/drawer/hj-dragabledrawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/drawer/hj-dragabledrawer.js';

define('components/drawer/hj-dragabledrawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/drawer/hj-dragabledrawer"], {
  "0658": function _(t, e, n) {
    "use strict";

    (function (t) {
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }))), o.forEach(function (e) {
            i(t, e, n[e]);
          });
        }

        return t;
      }

      function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "hj-dragabledrawer",
        props: {
          options: Object
        },
        data: function data() {
          return {
            def: {
              visible: !1,
              rightMode: !0,
              mask: !0,
              width: 60
            },
            animationData: {},
            show: !0
          };
        },
        computed: {
          option: function option() {
            return n({}, this.def, this.options);
          },
          showmask: function showmask() {
            return this.option.mask && this.show;
          }
        },
        created: function created() {
          var e = getCurrentPages(),
              n = e[e.length - 1],
              i = n.$getAppWebview();
          i.setStyle({
            pullToRefresh: {
              support: !1
            }
          }), this.animation = t.createAnimation(), this.screenWidth = t.getSystemInfoSync().windowWidth;
        },
        methods: {
          close: function close() {
            this.options.visible = !1;
          },
          updateStart: function updateStart(t) {
            this.start = t.touches[0].pageX, this.scale = this.screenWidth / (this.screenWidth - this.start);
          },
          updateMove: function updateMove(t) {
            this.tx = this.scale * (t.touches[0].pageX - this.start), this.show = !1, this.option.rightMode ? this.tx > 0 && this.animation.translateX(this.tx).step({
              duration: 100
            }) : this.tx < 0 && this.animation.translateX(this.tx).step({
              duration: 100
            }), this.animationData = this.animation.export();
          },
          updateEnd: function updateEnd() {
            this.show = !0, this.option.rightMode ? this.tx > 100 && this.close() : this.tx < -80 && this.close(), this.animation.translateX(0).step(), this.animationData = this.animation.export();
          },
          stopref: t.stopPullDownRefresh
        }
      };
      e.default = o;
    }).call(this, n("6e42")["default"]);
  },
  2134: function _(t, e, n) {
    "use strict";

    var i = n("b351"),
        o = n.n(i);
    o.a;
  },
  "2f31": function f31(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  b351: function b351(t, e, n) {},
  bd1a: function bd1a(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("2f31"),
        o = n("cb3b");

    for (var a in o) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(a);
    }

    n("2134");
    var s = n("2877"),
        r = Object(s["a"])(o["default"], i["a"], i["b"], !1, null, "0cf0e840", null);
    e["default"] = r.exports;
  },
  cb3b: function cb3b(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("0658"),
        o = n.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    e["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/drawer/hj-dragabledrawer-create-component', {
  'components/drawer/hj-dragabledrawer-create-component': function componentsDrawerHjDragabledrawerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd1a"));
  }
}, [['components/drawer/hj-dragabledrawer-create-component']]]);
});
require('components/drawer/hj-dragabledrawer.js');
__wxRoute = 'components/drawer/uni-drawer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/drawer/uni-drawer.js';

define('components/drawer/uni-drawer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/drawer/uni-drawer"], {
  6238: function _(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  "6cfe": function cfe(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("6238"),
        r = n("d219");

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    n("e5e7");
    var u = n("2877"),
        s = Object(u["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  b61c: function b61c(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var i = {
      name: "uni-drawer",
      props: {
        visible: {
          type: Boolean,
          default: !1
        },
        mode: String,
        mask: {
          type: [Boolean, String],
          default: !0
        }
      },
      data: function data() {
        return {
          visibleSync: !1,
          showDrawer: !1,
          rightMode: !1,
          catchtouchmove: !1
        };
      },
      watch: {
        visible: function visible(t) {
          var e = this;
          setTimeout(function () {
            e.showDrawer = t;
          }, 100), t ? this.visibleSync = t : setTimeout(function () {
            e.visibleSync = t;
          }, 300);
        }
      },
      computed: {
        showMask: function showMask() {
          return "true" === String(this.mask);
        }
      },
      created: function created() {
        var t = this;
        this.visibleSync = this.visible, setTimeout(function () {
          t.showDrawer = t.visible;
        }, 100), this.rightMode = "right" === this.mode;
      },
      methods: {
        close: function close() {
          var t = this;
          this.showDrawer = !1, setTimeout(function () {
            t.visibleSync = !1, t.$emit("close");
          }, 300);
        }
      }
    };
    e.default = i;
  },
  d219: function d219(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("b61c"),
        r = n.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    e["default"] = r.a;
  },
  e5e7: function e5e7(t, e, n) {
    "use strict";

    var i = n("ef8f"),
        r = n.n(i);
    r.a;
  },
  ef8f: function ef8f(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/drawer/uni-drawer-create-component', {
  'components/drawer/uni-drawer-create-component': function componentsDrawerUniDrawerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6cfe"));
  }
}, [['components/drawer/uni-drawer-create-component']]]);
});
require('components/drawer/uni-drawer.js');
__wxRoute = 'components/list/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/list/uni-badge/uni-badge.js';

define('components/list/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/list/uni-badge/uni-badge"], {
  2560: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "uni-badge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      computed: {
        setClass: function setClass() {
          var t = ["uni-badge-" + this.type, "uni-badge--" + this.size];
          return !0 === this.inverted && t.push("uni-badge-inverted"), t.join(" ");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = u;
  },
  "2d25": function d25(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  3977: function _(t, e, n) {},
  "3ad2": function ad2(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("2d25"),
        a = n("4c10");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("6aa1");
    var r = n("2877"),
        o = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = o.exports;
  },
  "4c10": function c10(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("2560"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  "6aa1": function aa1(t, e, n) {
    "use strict";

    var u = n("3977"),
        a = n.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/list/uni-badge/uni-badge-create-component', {
  'components/list/uni-badge/uni-badge-create-component': function componentsListUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3ad2"));
  }
}, [['components/list/uni-badge/uni-badge-create-component']]]);
});
require('components/list/uni-badge/uni-badge.js');
__wxRoute = 'components/list/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/list/uni-icon/uni-icon.js';

define('components/list/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/list/uni-icon/uni-icon"], {
  "3b9f": function b9f(n, t, e) {},
  "4e4f": function e4f(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var i = {
      name: "uni-icon",
      props: {
        type: String,
        color: String,
        size: [Number, String]
      },
      computed: {
        fontSize: function fontSize() {
          return "".concat(this.size, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = i;
  },
  "72fc": function fc(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("4e4f"),
        u = e.n(i);

    for (var c in i) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(c);
    }

    t["default"] = u.a;
  },
  b39f: function b39f(n, t, e) {
    "use strict";

    var i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return i;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  ba08: function ba08(n, t, e) {
    "use strict";

    e.r(t);
    var i = e("b39f"),
        u = e("72fc");

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    e("c5d5");
    var o = e("2877"),
        r = Object(o["a"])(u["default"], i["a"], i["b"], !1, null, null, null);
    t["default"] = r.exports;
  },
  c5d5: function c5d5(n, t, e) {
    "use strict";

    var i = e("3b9f"),
        u = e.n(i);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/list/uni-icon/uni-icon-create-component', {
  'components/list/uni-icon/uni-icon-create-component': function componentsListUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ba08"));
  }
}, [['components/list/uni-icon/uni-icon-create-component']]]);
});
require('components/list/uni-icon/uni-icon.js');
__wxRoute = 'components/list/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/list/uni-list-item/uni-list-item.js';

define('components/list/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/list/uni-list-item/uni-list-item"], {
  "4b9c": function b9c(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("8690"),
        o = e("c0c8");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("e56c");
    var c = e("2877"),
        a = Object(c["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  6993: function _(t, n, e) {},
  8690: function _(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  c0c8: function c0c8(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("c820"),
        o = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  c820: function c820(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return e.e("components/list/uni-icon/uni-icon").then(e.bind(null, "ba08"));
    },
        o = function o() {
      return e.e("components/list/uni-badge/uni-badge").then(e.bind(null, "3ad2"));
    },
        u = {
      name: "uni-list-item",
      components: {
        uniIcon: i,
        uniBadge: o
      },
      data: function data() {
        return {};
      },
      props: {
        title: String,
        note: String,
        subnote: String,
        disabled: {
          type: [Boolean, String],
          default: !1
        },
        showArrow: {
          type: [Boolean, String],
          default: !0
        },
        showBadge: {
          type: [Boolean, String],
          default: !1
        },
        showSwitch: {
          type: [Boolean, String],
          default: !1
        },
        switchChecked: {
          type: [Boolean, String],
          default: !1
        },
        badgeText: String,
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: String,
        showExtraIcon: {
          type: [Boolean, String],
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: "20"
            };
          }
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    n.default = u;
  },
  e56c: function e56c(t, n, e) {
    "use strict";

    var i = e("6993"),
        o = e.n(i);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/list/uni-list-item/uni-list-item-create-component', {
  'components/list/uni-list-item/uni-list-item-create-component': function componentsListUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4b9c"));
  }
}, [['components/list/uni-list-item/uni-list-item-create-component']]]);
});
require('components/list/uni-list-item/uni-list-item.js');
__wxRoute = 'components/list/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/list/uni-list/uni-list.js';

define('components/list/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/list/uni-list/uni-list"], {
  "02a1": function a1(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d77b"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = a.a;
  },
  "14e4": function e4(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "7c03": function c03(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("14e4"),
        a = e("02a1");

    for (var i in a) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(i);
    }

    e("e0fa");
    var r = e("2877"),
        c = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = c.exports;
  },
  "9bab": function bab(n, t, e) {},
  d77b: function d77b(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-list"
    };
    t.default = u;
  },
  e0fa: function e0fa(n, t, e) {
    "use strict";

    var u = e("9bab"),
        a = e.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/list/uni-list/uni-list-create-component', {
  'components/list/uni-list/uni-list-create-component': function componentsListUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7c03"));
  }
}, [['components/list/uni-list/uni-list-create-component']]]);
});
require('components/list/uni-list/uni-list.js');
__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  2806: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = c;
  },
  "2b62": function b62(t, n, e) {
    "use strict";

    var c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return c;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "31cc": function cc(t, n, e) {
    "use strict";

    var c = e("e498"),
        u = e.n(c);
    u.a;
  },
  "514d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("2b62"),
        u = e("a4c8");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("31cc");
    var i = e("2877"),
        o = Object(i["a"])(u["default"], c["a"], c["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  a4c8: function a4c8(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("2806"),
        u = e.n(c);

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  e498: function e498(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("514d"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "34fc": function fc(t, n, e) {
    "use strict";

    var u = e("a256"),
        o = e.n(u);
    o.a;
  },
  "43a0": function a0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6592"),
        o = e("63bc");

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    e("34fc");
    var a = e("2877"),
        r = Object(a["a"])(o["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  "63bc": function bc(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("9636"),
        o = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = o.a;
  },
  6592: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  9636: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "514d"));
    },
        o = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.value = "";
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = o;
  },
  a256: function a256(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("43a0"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'components/m-search/m-search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-search/m-search.js';

define('components/m-search/m-search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-search/m-search"], {
  2696: function _(t, e, n) {},
  "89ee": function ee(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  "97d8": function d8(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          mode: {
            value: Number,
            default: 1
          },
          button: {
            value: String,
            default: "outside"
          },
          show: {
            value: Boolean,
            default: !0
          },
          radius: {
            value: String,
            default: 60
          }
        },
        data: function data() {
          return {
            active: !1,
            inputVal: "",
            searchName: "取消",
            isDelShow: !1,
            isFocus: !1
          };
        },
        methods: {
          focus: function focus() {
            this.active = !0;
          },
          blur: function blur() {
            this.isFocus = !1, this.inputVal || (this.active = !1);
          },
          clear: function clear() {
            this.inputVal = "", this.active = !1, this.$emit("search", "");
          },
          getFocus: function getFocus() {
            this.isFocus = !0;
          },
          search: function search() {
            console.log(t(this.inputVal, " at components/m-search/m-search.vue:69")), this.$emit("search", this.inputVal);
          }
        },
        watch: {
          inputVal: function inputVal(t) {
            t ? (this.searchName = "搜索", this.isDelShow = !0) : (this.searchName = "取消", this.isDelShow = !1);
          }
        }
      };
      e.default = n;
    }).call(this, n("0de9")["default"]);
  },
  c481: function c481(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("97d8"),
        i = n.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    e["default"] = i.a;
  },
  d607: function d607(t, e, n) {
    "use strict";

    var a = n("2696"),
        i = n.n(a);
    i.a;
  },
  d857: function d857(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("89ee"),
        i = n("c481");

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    n("d607");
    var s = n("2877"),
        c = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, "7d27aa5c", null);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-search/m-search-create-component', {
  'components/m-search/m-search-create-component': function componentsMSearchMSearchCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d857"));
  }
}, [['components/m-search/m-search-create-component']]]);
});
require('components/m-search/m-search.js');
__wxRoute = 'components/mpvue-echarts/src/echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-echarts/src/echarts.js';

define('components/mpvue-echarts/src/echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-echarts/src/echarts"], {
  "078f": function f(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = r(n("a10a"));

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
              a = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          }))), a.forEach(function (e) {
            o(t, e, n[e]);
          });
        }

        return t;
      }

      function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t;
      }

      var i = {
        props: {
          echarts: {
            required: !0,
            type: Object,
            default: function _default() {
              return null;
            }
          },
          onInit: {
            required: !0,
            type: Function,
            default: null
          },
          canvasId: {
            type: String,
            default: "ec-canvas"
          },
          lazyLoad: {
            type: Boolean,
            default: !1
          },
          disableTouch: {
            type: Boolean,
            default: !1
          },
          throttleTouch: {
            type: Boolean,
            default: !1
          }
        },
        onReady: function onReady() {
          this.echarts ? this.lazyLoad || this.init() : console.warn(t('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>', " at components/mpvue-echarts/src/echarts.vue:62"));
        },
        methods: {
          init: function init() {
            var e = this;

            if (this.onInit) {
              var n = this.canvasId;
              this.ctx = wx.createCanvasContext(n);
              var r = new a.default(this.ctx, n);
              this.echarts.setCanvasCreator(function () {
                return r;
              });
              var c = wx.createSelectorQuery();
              c.select("#".concat(n)).boundingClientRect(function (t) {
                t ? e.chart = e.onInit(r, t.width, t.height) : setTimeout(function () {
                  return e.init();
                }, 50);
              }).exec();
            } else console.warn(t("请传入 onInit 函数进行初始化", " at components/mpvue-echarts/src/echarts.vue:73"));
          },
          canvasToTempFilePath: function canvasToTempFilePath(t) {
            var e = this.canvasId;
            this.ctx.draw(!0, function () {
              wx.canvasToTempFilePath(c({
                canvasId: e
              }, t));
            });
          },
          touchStart: function touchStart(t) {
            var e = this.disableTouch,
                n = this.chart;

            if (!e && n && t.mp.touches.length) {
              var a = t.mp.touches[0];
              n._zr.handler.dispatch("mousedown", {
                zrX: a.x,
                zrY: a.y
              }), n._zr.handler.dispatch("mousemove", {
                zrX: a.x,
                zrY: a.y
              });
            }
          },
          touchMove: function touchMove(t) {
            var e = this.disableTouch,
                n = this.throttleTouch,
                a = this.chart,
                r = this.lastMoveTime;

            if (!e && a && t.mp.touches.length) {
              if (n) {
                var c = Date.now();
                if (c - r < 240) return;
                this.lastMoveTime = c;
              }

              var o = t.mp.touches[0];

              a._zr.handler.dispatch("mousemove", {
                zrX: o.x,
                zrY: o.y
              });
            }
          },
          touchEnd: function touchEnd(t) {
            var e = this.disableTouch,
                n = this.chart;

            if (!e && n) {
              var a = t.mp.changedTouches ? t.mp.changedTouches[0] : {};
              n._zr.handler.dispatch("mouseup", {
                zrX: a.x,
                zrY: a.y
              }), n._zr.handler.dispatch("click", {
                zrX: a.x,
                zrY: a.y
              });
            }
          }
        }
      };
      e.default = i;
    }).call(this, n("0de9")["default"]);
  },
  "0f5b": function f5b(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("078f"),
        r = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = r.a;
  },
  "427a": function a(t, e, n) {},
  "502f": function f(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("da92"),
        r = n("0f5b");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    n("a192");
    var o = n("2877"),
        i = Object(o["a"])(r["default"], a["a"], a["b"], !1, null, "2ebf557d", null);
    e["default"] = i.exports;
  },
  a192: function a192(t, e, n) {
    "use strict";

    var a = n("427a"),
        r = n.n(a);
    r.a;
  },
  da92: function da92(t, e, n) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return a;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-echarts/src/echarts-create-component', {
  'components/mpvue-echarts/src/echarts-create-component': function componentsMpvueEchartsSrcEchartsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("502f"));
  }
}, [['components/mpvue-echarts/src/echarts-create-component']]]);
});
require('components/mpvue-echarts/src/echarts.js');

__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0071":function(n,t,e){"use strict";(function(n){e("de83"),e("921b");o(e("66fd"));var t=o(e("e02f"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},5822:function(n,t,e){"use strict";e.r(t);var o=e("a6e8"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},"9b87":function(n,t,e){"use strict";var o=e("e066"),u=e.n(o);u.a},a6e8:function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=c(e("59a9")),i=c(e("17f7")),r=c(e("3731")),a=e("2f62");function c(n){return n&&n.__esModule?n:{default:n}}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l={computed:(0,a.mapState)(["forcedLogin","hasLogin","userType","userInfo"]),data:function(){return{bzwjcsl:"正在读取...",dthjs:"正在读取...",dywjcsl:"正在读取..."}},methods:s({},(0,a.mapMutations)(["login"]),{openScan:function(){var t=this;n.scanCode({success:function(e){var o={userid:t.userInfo.userid,dwbh:e.result};r.default.requestLoading(i.default.scan,o,"正在加载",function(t){n.navigateTo({url:"../pointAdd/pointAdd?obj="+JSON.stringify(t)})},function(){n.showToast({icon:"none",title:"请求失败"})},function(){})}})},openCharts:function(){n.navigateTo({url:"../mpvue-echarts/chartList"})},getCount:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this,e={userid:t.userInfo.userid};r.default.requestLoading(i.default.getMainPageCount,e,n,function(n){console.log(o(""+JSON.stringify(n)," at pages/main/main.vue:128")),t.bzwjcsl=n.bzwjcsl,t.dthjs=n.dthjs,t.dywjcsl=n.dywjcsl},function(){t.bzwjcsl="获取失败，点击重新获取",t.dthjs="获取失败，点击重新获取",t.dywjcsl="获取失败，点击重新获取"},function(){})}}),onShow:function(){var t=this;this.login(u.default.getUsers()),this.hasLogin?1==this.userType&&this.getCount():n.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(e){e.confirm&&(t.forcedLogin?n.reLaunch({url:"../login/login"}):n.navigateTo({url:"../login/login"}))}})}};t.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])},e02f:function(n,t,e){"use strict";e.r(t);var o=e("f7f1"),u=e("5822");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("9b87");var r=e("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},e066:function(n,t,e){},f7f1:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})}},[["0071","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"35e9":function(n,t,e){},"3e53":function(n,t,e){"use strict";(function(n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(e("59a9")),r=c(e("17f7")),u=c(e("3731")),a=e("2f62");function c(n){return n&&n.__esModule?n:{default:n}}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){f(n,t,e[t])})}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var l=function(){return e.e("components/m-input").then(e.bind(null,"43a0"))},d={components:{mInput:l},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,a.mapState)(["forcedLogin"]),methods:s({},(0,a.mapMutations)(["login"]),{initProvider:function(){var t=this,e=["weixin","qq","sinaweibo"];n.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var o=0;o<n.provider.length;o++)~e.indexOf(n.provider[o])&&t.providerList.push({value:n.provider[o],image:"../../static/img/"+n.provider[o]+".png"});t.hasProvider=!0}},fail:function(n){console.error(o("获取服务供应商失败："+JSON.stringify(n)," at pages/login/login.vue:73"))}})},initPosition:function(){this.positionTop=n.getSystemInfoSync().windowHeight-100},bindLogin:function(){var t=this,e={username:t.account,password:t.password};n.showLoading({title:"正在登录"}),u.default.requestLoading(r.default.login,e,"正在登录",function(e){i.default.addUser(e),t.toMain(e),n.setStorage({key:"userInfo",data:e,success:function(){console.log(o("用户信息缓存成功"," at pages/login/login.vue:126"))}})},function(){plus.nativeUI.alert("失败")},function(){})},oauth:function(t){var e=this;n.login({provider:t,success:function(o){n.getUserInfo({provider:t,success:function(n){e.toMain(n.userInfo.nickName)}})},fail:function(n){console.error(o("授权登录失败："+JSON.stringify(n)," at pages/login/login.vue:164"))}})},toMain:function(t){this.login(t),this.forcedLogin?n.reLaunch({url:"../main/main"}):n.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}};t.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},"4d71":function(n,t,e){"use strict";e.r(t);var o=e("890b"),i=e("c81f");for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);e("6b8b");var u=e("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"6b8b":function(n,t,e){"use strict";var o=e("35e9"),i=e.n(o);i.a},"890b":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},8928:function(n,t,e){"use strict";(function(n){e("de83"),e("921b");o(e("66fd"));var t=o(e("4d71"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c81f:function(n,t,e){"use strict";e.r(t);var o=e("3e53"),i=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=i.a}},[["8928","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/diyHost';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/diyHost.js';

define('pages/login/diyHost.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/diyHost"],{"0e7f":function(t,n,e){"use strict";e.r(n);var o=e("246e"),u=e("4a7b");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var c=e("2877"),f=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=f.exports},"246e":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},"4a7b":function(t,n,e){"use strict";e.r(n);var o=e("f3f3"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},cb16:function(t,n,e){"use strict";(function(t){e("de83"),e("921b");o(e("66fd"));var n=o(e("0e7f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f3f3:function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;a(e("59a9"));var u=a(e("17f7"));a(e("3731"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return e.e("components/m-input").then(e.bind(null,"43a0"))},f={components:{mInput:c},data:function(){return{host:""}},onLoad:function(){this.host=u.default.host},methods:{testConnect:function(){var n=this;t.showModal({title:"提示",content:"请确认地址输入正确\n"+n.host,success:function(e){e.confirm?(u.default.host=n.host,t.setStorage({key:"LOCAL_URL",data:n.host,success:function(){console.log(o("自定义域缓存成功"," at pages/login/diyHost.vue:47")),t.navigateBack({delta:1})}})):e.cancel}})}}};n.default=f}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["cb16","common/runtime","common/vendor"]]]);
});
require('pages/login/diyHost.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"18e5":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"1e27":function(t,e,n){"use strict";(function(t){n("de83"),n("921b");a(n("66fd"));var e=a(n("3f01"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3f01":function(t,e,n){"use strict";n.r(e);var a=n("18e5"),o=n("7a00");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7a00":function(t,e,n){"use strict";n.r(e);var a=n("cfc4"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},cfc4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("59a9"));function o(t){return t&&t.__esModule?t:{default:t}}var u=function(){return n.e("components/m-input").then(n.bind(null,"43a0"))},i={components:{mInput:u},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};a.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=i}).call(this,n("6e42")["default"])}},[["1e27","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{"30a4":function(n,t,e){"use strict";e.r(t);var u=e("43ae"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"43ae":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("59a9"));function u(n){return n&&n.__esModule?n:{default:n}}var o=function(){return e.e("components/m-input").then(e.bind(null,"43a0"))},a={components:{mInput:o},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?n.showToast({icon:"none",title:"邮箱地址不合法"}):n.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};t.default=a}).call(this,e("6e42")["default"])},"564e":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"6f34":function(n,t,e){"use strict";(function(n){e("de83"),e("921b");u(e("66fd"));var t=u(e("7cc5"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7cc5":function(n,t,e){"use strict";e.r(t);var u=e("564e"),o=e("30a4");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports}},[["6f34","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/user/accountEdit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/accountEdit.js';

define('pages/user/accountEdit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/accountEdit"],{"140e":function(e,t,n){"use strict";n.r(t);var u=n("abc5"),o=n("44eb");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("fee6");var c=n("2877"),a=Object(c["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},3626:function(e,t,n){"use strict";(function(e){n("de83"),n("921b");u(n("66fd"));var t=u(n("140e"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3662:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("59a9")),o=n("2f62");function r(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={data:function(){return{}},computed:c({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:c({},(0,o.mapMutations)(["logout"]),{bindLogout:function(){var t=this;e.showModal({title:"提示",content:"确认要退出登录吗？",success:function(n){n.confirm?(t.logout(),u.default.removeUser(),t.forcedLogin&&e.reLaunch({url:"../login/login"})):n.cancel}})}})};t.default=i}).call(this,n("6e42")["default"])},"44eb":function(e,t,n){"use strict";n.r(t);var u=n("3662"),o=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=o.a},"658d":function(e,t,n){},abc5:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return o})},fee6:function(e,t,n){"use strict";var u=n("658d"),o=n.n(u);o.a}},[["3626","common/runtime","common/vendor"]]]);
});
require('pages/user/accountEdit.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"1b29":function(e,t,n){"use strict";var u=n("64ec"),r=n.n(u);r.a},"44ec":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"4b01":function(e,t,n){"use strict";(function(e,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={computed:o({},(0,r.mapState)(["hasLogin","forcedLogin","userInfo"])),data:function(){return{userid:"",avatarUrl:"../../static/img/head.png",uerInfo:{}}},onLoad:function(){this.userid=this.userInfo.userid,console.log(e(""+JSON.stringify(this.userInfo)," at pages/user/user.vue:139"))},methods:o({},(0,r.mapMutations)(["logout"]),{bindLogin:function(){u.navigateTo({url:"../login/login"})},jumpAccountEdit:function(){u.navigateTo({url:"./accountEdit"})}})};t.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},"64ec":function(e,t,n){},"7b67":function(e,t,n){"use strict";n.r(t);var u=n("4b01"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=r.a},a857:function(e,t,n){"use strict";n.r(t);var u=n("44ec"),r=n("7b67");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("1b29");var a=n("2877"),i=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},ed3d:function(e,t,n){"use strict";(function(e){n("de83"),n("921b");u(n("66fd"));var t=u(n("a857"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ed3d","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/pointCheck/pointCheck';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointCheck/pointCheck.js';

define('pages/pointCheck/pointCheck.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(e,t,n){"use strict";n.r(t);var o=n("3594"),a=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=a.a},"1ed9":function(e,t,n){},3594:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("17f7")),u=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return n.e("components/drawer/uni-drawer").then(n.bind(null,"6cfe"))},f={computed:r({},(0,u.mapState)(["hasLogin","forcedLogin","userType","userInfo"])),components:{uniDrawer:s},data:function(){return{navBtnMuen:[],currentTemplate:0}},onLoad:function(){var e={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",e);var t={name:"本周未检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",t);var n={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",n),this.saveTabInfo("消防泵",n),this.setCurrentTemp()},onNavigationBarButtonTap:function(){var t=this;e.showActionSheet({itemList:t.navBtnMuen,success:function(n){console.log(o("选中了第"+(n.tapIndex+1)+"个按钮"," at pages/pointCheck/pointCheck.vue:635")),e.showLoading({title:"正在切换主题..."}),setTimeout(function(){e.hideLoading(),t.currentTemplate=n.tapIndex,t.setCurrentTemp()},1e3)},fail:function(e){console.log(o(e.errMsg," at pages/pointCheck/pointCheck.vue:646"))}})},methods:{setCurrentTemp:function(){this.navBtnMuen=["默认主题","安全标准化主题","ISO45001主题"],this.navBtnMuen[this.currentTemplate]+="[当前]"},jumpListPage:function(t){this.saveTabInfo("currentLx",t),e.navigateTo({url:"../pointList/uni-tabs"})},jumpPage:function(t){""!=t?e.navigateTo({url:t}):e.showToast({icon:"none",title:"敬请期待～"})},jumpPageForYCYJ:function(){plus.runtime.openWeb(a.default.host+a.default.getYjzsStatics)},saveTabInfo:function(t,n){e.setStorage({key:t,data:n,success:function(){console.log(o("保存成功"," at pages/pointCheck/pointCheck.vue:686"))}})}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"6dd0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},a36f:function(e,t,n){"use strict";var o=n("1ed9"),a=n.n(o);a.a},ab69:function(e,t,n){"use strict";n.r(t);var o=n("6dd0"),a=n("0927");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("a36f");var i=n("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},be2a:function(e,t,n){"use strict";(function(e){n("de83"),n("921b");o(n("66fd"));var t=o(n("ab69"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["be2a","common/runtime","common/vendor"]]]);
});
require('pages/pointCheck/pointCheck.js');
__wxRoute = 'pages/pointList/pointList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointList/pointList.js';

define('pages/pointList/pointList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointList/pointList"],{"0d0f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"44ed":function(t,n,e){"use strict";(function(t){e("de83"),e("921b");a(e("66fd"));var n=a(e("de09"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"4ed3":function(t,n,e){},8370:function(t,n,e){"use strict";e.r(n);var a=e("c41d"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},c41d:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;s(e("59a9"));var o=s(e("17f7")),i=s(e("3731"));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("components/drawer/uni-drawer").then(e.bind(null,"6cfe"))},r={components:{uniDrawer:u},data:function(){return{userid:"",pageRows:15,lx:"点位检查",refreshing:!1,refreshText:"下拉可以刷新",tabIndex:0,tabType:0,newsitems:[],showDrawer:!1,tabBars:[{name:"待整改",id:"/mobile/dzglb.do"},{name:"已完成",id:"/mobile/ywclb.do"},{name:"未检查",id:"/mobile/wjclb.do"}]}},onLoad:function(n){console.log(t("新建pointList"," at pages/pointList/pointList.vue:110"));var e=this;e.lx=n.lx,a.setNavigationBarTitle({title:e.lx}),a.getStorage({key:"userInfo",success:function(n){console.log(t(""+JSON.stringify(n.data.userid)," at pages/pointList/pointList.vue:119")),e.userid=n.data.userid,e.newsitems=e.randomfn(),a.getStorage({key:e.lx,success:function(t){e.tabBars.push(t.data)},complete:function(){e.getTabCounts()}})}})},onUnload:function(){console.log(t("销毁pointList"," at pages/pointList/pointList.vue:137"))},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{isScrolling:function(n){console.log(t("正在滚动...."," at pages/pointList/pointList.vue:150"))},randomfn:function(){for(var t=[],n=0,e=this.tabBars.length;n<e;n++){var a={loadingText:"加载更多...",data:[],pageNum:1};t.push(a)}return t},changeTab:function(n){console.log(t("Tab页切换"+n," at pages/pointList/pointList.vue:167")),this.tabIndex=n},getTabCounts:function(){var n=this;i.default.requestLoading(o.default.getTabCounts,{lx:n.lx,userid:n.userid},"正在加载",function(e){console.log(t("Tab页数量："+JSON.stringify(e)," at pages/pointList/pointList.vue:175"));for(var a=0;a<n.tabBars.length;a++){var o=n.tabBars[a];"待整改"==o.name?o.name="待整改("+e.dzgsl+")":"已完成"==o.name?o.name="已完成("+e.ywcsl+")":"未检查"==o.name?o.name="未检查("+e.wjcsl+")":"当月未检查"==o.name?o.name="当月未检查("+e.dywjcsl+")":"本周未检查"==o.name?o.name="本周未检查("+e.bzwjcsl+")":"当天未检查"==o.name&&(o.name="当天未检查("+e.dtwjcsl+")")}},function(){a.showToast({icon:"none",title:"请求失败"})},function(){})},swiperChange:function(t){this.tabIndex=t.detail.current},moveHandle:function(t){}}};n.default=r}).call(this,e("0de9")["default"],e("6e42")["default"])},d1dd:function(t,n,e){"use strict";var a=e("4ed3"),o=e.n(a);o.a},de09:function(t,n,e){"use strict";e.r(n);var a=e("0d0f"),o=e("8370");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("d1dd");var s=e("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports}},[["44ed","common/runtime","common/vendor"]]]);
});
require('pages/pointList/pointList.js');
__wxRoute = 'pages/pointDetail/pointDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointDetail/pointDetail.js';

define('pages/pointDetail/pointDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointDetail/pointDetail"],{"39fd":function(t,n,e){"use strict";e.r(n);var i=e("9312"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},"77a6":function(t,n,e){"use strict";var i=e("eccb"),o=e.n(i);o.a},9312:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e("17f7")),u=c(e("3731")),s=c(e("59a9")),l=e("2f62");function c(t){return t&&t.__esModule?t:{default:t}}var a=function(){return e.e("components/list/uni-list/uni-list").then(e.bind(null,"7c03"))},r=function(){return e.e("components/list/uni-icon/uni-icon").then(e.bind(null,"ba08"))},f=function(){return e.e("components/list/uni-list-item/uni-list-item").then(e.bind(null,"4b9c"))},d={computed:(0,l.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:a,uniListItem:f,uniIcon:r},data:function(){return{needGetItemOnShow:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj)},onNavigationBarButtonTap:function(){var n=this;t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var e=0;e<n.obj.sublist.length;e++){var i=n.obj.sublist[e];i["jcjl"]="正常",i["jcwtms"]="",i["zgfs"]=""}else t.cancel}})},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(i(""+JSON.stringify(this.sublistItem)," at pages/pointDetail/pointDetail.vue:99")),this.obj.sublist[this.sublistIndex]=this.sublistItem),this.needGetItemOnShow=!1},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(t,n){},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},submit:function(){var n=this,e=s.default.copyObj(n.obj);e["userid"]=n.userInfo.userid,e["sublist"]=JSON.stringify(e["sublist"]),u.default.requestLoading(o.default.UpdatePoint,e,"正在加载",function(n){t.showToast({icon:"none",title:"新建检查成功",duration:2e3,complete:function(){t.navigateBack({delta:1})}})},function(){t.showToast({icon:"none",title:"新建检查失败"})},function(){})}}};n.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},9513:function(t,n,e){"use strict";(function(t){e("de83"),e("921b");i(e("66fd"));var n=i(e("d353"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d353:function(t,n,e){"use strict";e.r(n);var i=e("f9d1"),o=e("39fd");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("77a6");var s=e("2877"),l=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=l.exports},eccb:function(t,n,e){},f9d1:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.obj.sublist,function(n,e){var i=t.getIcon(n);return{$orig:t.__get_orig(n),m0:i}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["9513","common/runtime","common/vendor"]]]);
});
require('pages/pointDetail/pointDetail.js');
__wxRoute = 'pages/pointAdd/pointAdd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointAdd.js';

define('pages/pointAdd/pointAdd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointAdd"],{"0a4f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.obj.sublist,function(e,n){var o=t.getIcon(e);return{$orig:t.__get_orig(e),m0:o}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"348f":function(t,e,n){},"7c65":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("17f7")),s=c(n("3731")),u=c(n("59a9")),a=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){return n.e("components/list/uni-list/uni-list").then(n.bind(null,"7c03"))},d=function(){return n.e("components/list/uni-icon/uni-icon").then(n.bind(null,"ba08"))},b=function(){return n.e("components/list/uni-list-item/uni-list-item").then(n.bind(null,"4b9c"))},h={computed:(0,a.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:f,uniListItem:b,uniIcon:d},data:function(){return{needGetItemOnShow:!1,showClose:!1,showSave:!1,editable:!1,backPressFlag:!0,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj),this.checkShowClose()},onNavigationBarButtonTap:function(){var e=this;0!=e.editable?t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var n=0;n<e.obj.sublist.length;n++){var o=e.obj.sublist[n];o["jcjl"]="正常",o["jcwtms"]="",o["zgfs"]=""}else t.cancel}}):t.showToast({icon:"none",title:"已关单 无法编辑",duration:1e3})},onBackPress:function(){var e=this;if(1==e.backPressFlag)return t.showModal({title:"请确认是否有修改需要保存",content:"如果直接返回，所有修改将不作保存。",confirmText:"保存一下",cancelText:"直接返回",success:function(n){n.confirm?e.saveClick():n.cancel&&(e.backPressFlag=!1,console.log(o("backPressFlag2: "+e.backPressFlag," at pages/pointAdd/pointAdd.vue:131")),t.navigateBack({delta:1}))}}),console.log(o("backPressFlag1: "+e.backPressFlag," at pages/pointAdd/pointAdd.vue:138")),e.backPressFlag},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(o(""+JSON.stringify(this.sublistItem)," at pages/pointAdd/pointAdd.vue:144")),this.obj.sublist[this.sublistIndex]=this.sublistItem,this.removeSublistItem(),console.log(o("1111111"," at pages/pointAdd/pointAdd.vue:147"))),this.needGetItemOnShow=!1},methods:l({},(0,a.mapMutations)(["removeSublistItem"]),{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(e,n){0!=this.editable&&(this.needGetItemOnShow=!0,t.navigateTo({url:"./pointCheckInfo?item="+JSON.stringify(e)+"&index="+n}))},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},saveClick:function(){var e=this,n=u.default.copyObj(e.obj);n["userid"]=e.userInfo.userid,n["sublist"]=JSON.stringify(n["sublist"]),s.default.requestLoading(i.default.UpdatePoint,n,"正在加载",function(n){t.showToast({icon:"none",title:"保存成功",duration:1e3}),e.obj.id=n.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},closeClick:function(){var e=this,n=u.default.copyObj(e.obj);n["userid"]=e.userInfo.userid,n["sublist"]=JSON.stringify(n["sublist"]),n["status"]="2",s.default.requestLoading(i.default.UpdatePoint,n,"正在加载",function(n){t.showToast({icon:"none",title:"关单成功",duration:1e3}),e.obj.status=n.status,e.obj.id=n.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"关单失败"})},function(){})},checkShowClose:function(){"1"==this.obj.status&&null!=this.obj.id&&""!=this.obj.id?this.showClose=!0:this.showClose=!1,"2"==this.obj.status?(this.showSave=!1,this.editable=!1):(this.showSave=!0,this.editable=!0)}})};e.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},"7d51":function(t,e,n){"use strict";(function(t){n("de83"),n("921b");o(n("66fd"));var e=o(n("e51e"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7f6f":function(t,e,n){"use strict";var o=n("348f"),i=n.n(o);i.a},bafa:function(t,e,n){"use strict";n.r(e);var o=n("7c65"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},e51e:function(t,e,n){"use strict";n.r(e);var o=n("0a4f"),i=n("bafa");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("7f6f");var u=n("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports}},[["7d51","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointAdd.js');
__wxRoute = 'pages/pointAdd/pointCheckInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointCheckInfo.js';

define('pages/pointAdd/pointCheckInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointCheckInfo"],{"2bc3":function(t,e,i){"use strict";i.r(e);var n=i("4924"),o=i("e7d1");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("9e98");var a=i("2877"),u=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"37b6":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(i("17f7")),s=u(i("3731")),a=i("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=function(){return i.e("components/list/uni-list/uni-list").then(i.bind(null,"7c03"))},f=function(){return i.e("components/list/uni-list-item/uni-list-item").then(i.bind(null,"4b9c"))},d={computed:(0,a.mapState)(["inputPageText","key","userInfo"]),components:{uniList:l,uniListItem:f},data:function(){return{needGetInputOnShow:!1,typeArray:["正常","未检","异常"],rectifyTypes:["发起隐患整改单"],item:"",itemIndex:0,imageViewHeight:100,imageList:[],littleImageWidth:0}},onLoad:function(e){if(console.log(t("测试："+e.item," at pages/pointAdd/pointCheckInfo.vue:98")),this.item=JSON.parse(e.item),this.itemIndex=JSON.parse(e.index),this.littleImageWidth=(n.getSystemInfoSync().windowWidth-50)/4,null!=this.item.fj&&""!=this.item.fj){console.log(t("FJ:"+this.item.fj," at pages/pointAdd/pointCheckInfo.vue:106"));for(var i=JSON.parse(this.item.fj),s=0;s<i.length;s++){var a=i[s],u=o.default.host+o.default.loadImage+a.fileId+"&userid="+this.userInfo.userid,r={fileid:a.fileId,src:u,type:2};this.imageList.push(r)}}},onShow:function(){1==this.needGetInputOnShow&&(this.item[this.key]=this.inputPageText,this.needGetInputOnShow=!1)},methods:r({},(0,a.mapMutations)(["setSublistItem"]),{bindTypeChange:function(t){this.item.jcjl=this.typeArray[t.detail.value],"正常"==this.item.jcjl&&(this.item.zgfs="")},bindRectifyChange:function(t){this.item.zgfs=this.rectifyTypes[t.detail.value]},jumpInput:function(t){this.needGetInputOnShow=!0,n.navigateTo({url:"../common/inputPage?text="+t+"&key=jcwtms&placeholder=请输入问题描述"})},saveItem:function(){for(var e=this,i=o.default.uploadImage+"?from=jc&yyid="+e.item.id+"&userid="+e.userInfo.userid,a=[],u=0;u<e.imageList.length;u++){var r=e.imageList[u];1!=r.type||r.src.startsWith("http:")||a.push(r.src)}if(0==a.length)return e.saveLocalItem(),void n.navigateBack({delta:1});n.showLoading({title:"正在上传图片"}),s.default.uploadImage(i,a,0,0,0,a.length,function(i){var n=JSON.parse(i.data),o=n.fj;e.item.fj=o,console.log(t("Item:",JSON.stringify(e.item)," at pages/pointAdd/pointCheckInfo.vue:171"))},function(t){n.hideLoading(),"200"==t&&(e.saveLocalItem(),n.showToast({title:"上传成功",complete:setTimeout(function(){n.navigateBack({delta:1})},1500)}))})},saveLocalItem:function(){var t={item:this.item,index:this.itemIndex};this.setSublistItem(t)},deleteImage:function(e,i){var a=this;if(e.src.startsWith("http:")){var u={item:a.item,index:a.itemIndex};a.setSublistItem(u);var r={from:"jc",yyid:a.item.id,fileid:e.fileid,userid:a.userInfo.userid};s.default.requestLoading(o.default.deleteImage,r,"正在删除图片",function(e){console.log(t("删除成功："+JSON.stringify(e)," at pages/pointAdd/pointCheckInfo.vue:215")),a.item.fj=e.fj,a.imageList.splice(i,1)},function(){n.showToast({icon:"none",title:"删除失败"})},function(){})}else a.imageList.splice(i,1)},viewPhoto:function(){for(var t=this,e=[],i=0;i<t.imageList.length;i++){var o=t.imageList[i];e.push(o.src)}n.previewImage({urls:e})},addPhoto:function(){var e=this;n.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){console.log(t(JSON.stringify(i.tempFilePaths)," at pages/pointAdd/pointCheckInfo.vue:254"));for(var n=0;n<i.tempFilePaths.length;n++){var o={fileid:"",src:i.tempFilePaths[n],type:1};e.imageList.push(o)}}})}})};e.default=d}).call(this,i("0de9")["default"],i("6e42")["default"])},4924:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"9e98":function(t,e,i){"use strict";var n=i("b674"),o=i.n(n);o.a},b674:function(t,e,i){},c479:function(t,e,i){"use strict";(function(t){i("de83"),i("921b");n(i("66fd"));var e=n(i("2bc3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},e7d1:function(t,e,i){"use strict";i.r(e);var n=i("37b6"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["c479","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointCheckInfo.js');
__wxRoute = 'pages/mpvue-echarts/chartList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/chartList.js';

define('pages/mpvue-echarts/chartList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/chartList"],{"001f":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},"0c8a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/list/uni-list/uni-list").then(e.bind(null,"7c03"))},i=function(){return e.e("components/list/uni-list-item/uni-list-item").then(e.bind(null,"4b9c"))},a={components:{uniList:u,uniListItem:i},methods:{onClick:function(n){"device"==n?t.navigateTo({url:"./deviceChart"}):"event"==n?t.navigateTo({url:"./eventChart"}):"valve"==n?t.navigateTo({url:"./valveChart"}):t.navigateTo({url:"./mpvue-echarts"})}}};n.default=a}).call(this,e("6e42")["default"])},"424e":function(t,n,e){"use strict";var u=e("bb34"),i=e.n(u);i.a},7911:function(t,n,e){"use strict";e.r(n);var u=e("001f"),i=e("8555");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("424e");var c=e("2877"),r=Object(c["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=r.exports},8555:function(t,n,e){"use strict";e.r(n);var u=e("0c8a"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},bb34:function(t,n,e){},fdcf:function(t,n,e){"use strict";(function(t){e("de83"),e("921b");u(e("66fd"));var n=u(e("7911"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fdcf","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/chartList.js');
__wxRoute = 'pages/mpvue-echarts/deviceChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/deviceChart.js';

define('pages/mpvue-echarts/deviceChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/deviceChart"],{"0bd4":function(e,t,n){"use strict";n.r(t);var i=n("47f9"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"2d8c":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"44a4":function(e,t,n){"use strict";(function(e){n("de83"),n("921b");i(n("66fd"));var t=i(n("57e5"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"47f9":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("cc99")),r=(s(n("59a9")),s(n("17f7"))),o=s(n("3731")),u=n("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}var l=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"502f"))},f=function(){return n.e("components/drawer/hj-dragabledrawer").then(n.bind(null,"bd1a"))},d={animation:!1,backgroundColor:"#FFFFFF",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},h={components:{mpvueEcharts:l,hjDragabledrawer:f},computed:(0,u.mapState)(["userInfo"]),data:function(){return{echarts:a,options:{visible:!1,rightMode:!0},lx:"",beginDate:"",endDate:"",title:"",deviceList:[],events:["火灾报警","消防故障","监控站监控信号"]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{pieInit:function(e,t,n){var i=a.init(e,null,{width:t,height:n});return e.setChart(i),i.setOption(d),i},getCountDate:function(){var t=this,n={lx:t.lx,ksrq:t.beginDate,jsrq:t.endDate,userid:t.userInfo.userid};o.default.requestLoading(r.default.alertDeviceCount,n,"正在查询统计数据",function(n){console.log(e("统计数据："+JSON.stringify(n)," at pages/mpvue-echarts/deviceChart.vue:132")),t.title=n.title,t.beginDate=n.ksrq,t.endDate=n.jsrq,d.series[0].data=n.list.slice(0),t.$refs.pieChart.init(),t.options.visible=!1,0==n.list.length&&i.showToast({icon:"none",title:"暂无数据"})},function(){i.showToast({icon:"none",title:"查询失败"})},function(){})},eventChange:function(e){this.lx=this.events[e.target.value]},beginDateChange:function(e){this.beginDate=e.target.value},endDateChange:function(e){this.endDate=e.target.value},searchClick:function(e){this.getCountDate()}}};t.default=h}).call(this,n("0de9")["default"],n("6e42")["default"])},"57e5":function(e,t,n){"use strict";n.r(t);var i=n("2d8c"),a=n("0bd4");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("fbd0");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},5931:function(e,t,n){},fbd0:function(e,t,n){"use strict";var i=n("5931"),a=n.n(i);a.a}},[["44a4","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/deviceChart.js');
__wxRoute = 'pages/mpvue-echarts/eventChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/eventChart.js';

define('pages/mpvue-echarts/eventChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/eventChart"],{"09af":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("cc99")),a=(u(n("59a9")),u(n("17f7"))),r=u(n("3731")),o=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"502f"))},l=function(){return n.e("components/drawer/hj-dragabledrawer").then(n.bind(null,"bd1a"))},f={animation:!1,backgroundColor:"#FFFFFF",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},d={components:{mpvueEcharts:c,hjDragabledrawer:l},computed:(0,o.mapState)(["userInfo"]),data:function(){return{echarts:i,options:{visible:!1,rightMode:!0},beginDate:"",endDate:"",title:"",deviceList:[]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{pieInit:function(t,e,n){var a=i.init(t,null,{width:e,height:n});return t.setChart(a),a.setOption(f),a},getCountDate:function(){var e=this,n={ksrq:e.beginDate,jsrq:e.endDate,userid:e.userInfo.userid};r.default.requestLoading(a.default.alertEventCount,n,"正在查询统计数据",function(n){e.title=n.title,e.beginDate=n.ksrq,e.endDate=n.jsrq,f.series[0].data=n.list.slice(0),e.$refs.pieChart.init(),e.options.visible=!1,0==n.list.length&&t.showToast({icon:"none",title:"暂无数据"})},function(){t.showToast({icon:"none",title:"查询失败"})},function(){})},beginDateChange:function(t){this.beginDate=t.target.value},endDateChange:function(t){this.endDate=t.target.value},searchClick:function(t){this.getCountDate()}}};e.default=d}).call(this,n("6e42")["default"])},"4aa3":function(t,e,n){"use strict";(function(t){n("de83"),n("921b");i(n("66fd"));var e=i(n("ad0d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4f5d":function(t,e,n){"use strict";n.r(e);var i=n("09af"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"66f3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},8884:function(t,e,n){},ad0d:function(t,e,n){"use strict";n.r(e);var i=n("66f3"),a=n("4f5d");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("e843");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},e843:function(t,e,n){"use strict";var i=n("8884"),a=n.n(i);a.a}},[["4aa3","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/eventChart.js');
__wxRoute = 'pages/mpvue-echarts/valveChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/valveChart.js';

define('pages/mpvue-echarts/valveChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/valveChart"],{"32cb":function(t,e,n){"use strict";n.r(e);var i=n("726e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},3711:function(t,e,n){},"530f":function(t,e,n){"use strict";var i=n("3711"),a=n.n(i);a.a},"694f":function(t,e,n){"use strict";n.r(e);var i=n("fda6"),a=n("32cb");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("530f");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"726e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=l(n("cc99")),a=(u(n("59a9")),u(n("17f7"))),o=u(n("3731")),r=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function l(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"502f"))},c=function(){return n.e("components/drawer/hj-dragabledrawer").then(n.bind(null,"bd1a"))},f=function(){return n.e("components/list/uni-list/uni-list").then(n.bind(null,"7c03"))},d=function(){return n.e("components/list/uni-icon/uni-icon").then(n.bind(null,"ba08"))},h=function(){return n.e("components/list/uni-list-item/uni-list-item").then(n.bind(null,"4b9c"))},v={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!0,xAxis:[{type:"category",data:[]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"供水压力",type:"line",data:[],itemStyle:{normal:{label:{show:!0}}}}]},p={components:{mpvueEcharts:s,hjDragabledrawer:c,uniList:f,uniListItem:h,uniIcon:d},computed:(0,r.mapState)(["userInfo"]),data:function(){return{echarts:i,options:{visible:!1,rightMode:!0},beginDate:"",endDate:"",lx:"",lc:"",fz:"",title:"",xLine:[],lineData:[],floorDatas:["1号楼","1号楼1层","1号楼2层","1号楼2夹层","1号楼3层","1号楼4层","1号楼地下室","1号楼屋面","2号楼","2号楼1层","1号楼2夹层","2号楼2层","2号楼3层","2号楼4层","2号楼地下室","2号楼屋面","3号楼","3号楼1层","3号楼2层","3号楼3层","3号楼4夹层","3号楼4层","4号楼","5号楼","5号楼1层","5号楼2层","5号楼屋面","6号楼","6号楼1层","6号楼2层","7号楼","8号楼","9号楼","10号楼","11号楼","12号楼","12号楼1层","12号楼2层","12号楼屋面","14号楼","15号楼"],checkDatas:["供水压力","管网压力","膜片腔压力"],valveNumDatas:[]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{lineInit:function(t,e,n){var a=i.init(t,null,{width:e,height:200});return t.setChart(a),a.setOption(v),a},getCountDate:function(){var e=this,n={ksrq:e.beginDate,jsrq:e.endDate,userid:e.userInfo.userid,lx:e.lx,fz:e.fz};o.default.requestLoading(a.default.alertValveCount,n,"正在查询统计数据",function(n){e.title=n.title,e.beginDate=n.ksrq,e.endDate=n.jsrq,e.lx=n.lx,e.fz=n.fz,v.xAxis.data=n.xLine.slice(0),v.series[0].data=n.data.slice(0),e.xLine=n.xLine.slice(0),e.lineData=n.data.slice(0),e.$refs.lineChart.init(),e.options.visible=!1,0==n.xLine.length&&t.showToast({icon:"none",title:"暂无数据"})},function(){t.showToast({icon:"none",title:"查询失败"})},function(){})},checkChange:function(t){this.lx=this.checkDatas[t.target.value]},floorChange:function(e){var n=this;n.lc=n.floorDatas[e.target.value];var i={lc:n.lc,userid:n.userInfo.userid};o.default.requestLoading(a.default.getValveDataByFloor,i,"正在查询阀组信息",function(e){for(var i=[],a=0;a<e.data.length;a++){var o=e.data[a];i.push(o.id)}n.valveNumDatas=i,0==i.length&&t.showToast({icon:"none",title:"该楼层无阀组数据"})},function(){t.showToast({icon:"none",title:"查询失败"})},function(){})},valveChange:function(t){this.fz=this.valveNumDatas[t.target.value]},beginDateChange:function(t){this.beginDate=t.target.value},endDateChange:function(t){this.endDate=t.target.value},searchClick:function(t){this.getCountDate()}}};e.default=p}).call(this,n("6e42")["default"])},a021:function(t,e,n){"use strict";(function(t){n("de83"),n("921b");i(n("66fd"));var e=i(n("694f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fda6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[["a021","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/valveChart.js');
__wxRoute = 'pages/mpvue-echarts/mpvue-echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/mpvue-echarts.js';

define('pages/mpvue-echarts/mpvue-echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/mpvue-echarts"],{"07ec":function(e,t,n){},"27c5":function(e,t,n){"use strict";(function(e){n("de83"),n("921b");a(n("66fd"));var t=a(n("d3af"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("cc99"));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}var i=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-echarts/src/echarts")]).then(n.bind(null,"502f"))},u=[{value:55,name:"北京"},{value:38,name:"上海"},{value:20,name:"广州"}],o={animation:!1,backgroundColor:"#F8F8F8",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},s={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"蒸发量",type:"line",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"line",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]},c={data:function(){return{echarts:a,updateStatus:!1}},onLoad:function(){o.series[0].data=u.slice(0)},methods:{goBrowser:function(){plus.runtime.openURL("https://github.com/F-loat/mpvue-echarts")},updatePie:function(){this.updateStatus||(o.series[0].data.push({value:20,name:"武汉"}),o.series[0].data.push({value:10,name:"杭州"}),this.$refs.pieChart.init(),this.updateStatus=!0)},pieInit:function(e,t,n){var r=a.init(e,null,{width:t,height:n});return e.setChart(r),r.setOption(o),r},lineInit:function(e,t,n){var r=a.init(e,null,{width:t,height:n});return e.setChart(r),r.setOption(s),r}},components:{mpvueEcharts:i}};t.default=c},ab0f:function(e,t,n){"use strict";var a=n("07ec"),r=n.n(a);r.a},c48d:function(e,t,n){"use strict";n.r(t);var a=n("3395"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},d3af:function(e,t,n){"use strict";n.r(t);var a=n("d500"),r=n("c48d");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("ab0f");var u=n("2877"),o=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},d500:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})}},[["27c5","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/mpvue-echarts.js');
__wxRoute = 'pages/common/inputPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/common/inputPage.js';

define('pages/common/inputPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/inputPage"],{"4b25":function(t,e,n){},6974:function(t,e,n){"use strict";var u=n("4b25"),r=n.n(u);r.a},"86cb":function(t,e,n){"use strict";n.r(e);var u=n("8cee"),r=n("a6e4");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("6974");var c=n("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},"8cee":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},a6e4:function(t,e,n){"use strict";n.r(e);var u=n("bb51"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},bb51:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),u.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{placeholder:"请输入内容",text:"",key:""}},onLoad:function(t){this.placeholder=t.placeholder,this.text=t.text,this.key=t.key},methods:r({},(0,u.mapMutations)(["setInputPageText"]),{saveText:function(){var e={text:this.text,key:this.key};this.setInputPageText(e),t.navigateBack({delta:1})},descInput:function(t){this.text=t.detail.value}})};e.default=c}).call(this,n("6e42")["default"])},f07d:function(t,e,n){"use strict";(function(t){n("de83"),n("921b");u(n("66fd"));var e=u(n("86cb"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f07d","common/runtime","common/vendor"]]]);
});
require('pages/common/inputPage.js');
__wxRoute = 'pages/danger/addDanger';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/danger/addDanger.js';

define('pages/danger/addDanger.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/addDanger"],{"5bf1":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("17f7")),o=s(n("3731")),u=(s(n("59a9")),n("2f62"));function s(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(){return n.e("components/list/uni-list/uni-list").then(n.bind(null,"7c03"))},d=function(){return n.e("components/list/uni-icon/uni-icon").then(n.bind(null,"ba08"))},l=function(){return n.e("components/list/uni-list-item/uni-list-item").then(n.bind(null,"4b9c"))},h={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo","inputPageText","key"]),components:{uniList:f,uniListItem:l,uniIcon:d},data:function(){return{needGetInputOnShow:!1,item:"",itemIndex:0,imageViewHeight:100,imageList:[],littleImageWidth:0,id:"",yhdj:"",yhhg:"",bhgys:"",wfflfgjtk:"",gsyqjjy:"",zrbm:"",fqr:"",fj:"",yhdjData:["一般隐患","重大隐患"],yhhgData:["人员伤害","财产损失","其他"],zrbmData:["从隐患库选择/检索","自行输入问题","从部门库选择"]}},onLoad:function(){var t=this;t.littleImageWidth=(e.getSystemInfoSync().windowWidth-50)/4,t.fqr=t.userInfo.fullname,o.default.requestLoadingNew(a.default.getUserDeptName,{userid:t.userInfo.userid},"正在加载",function(e){t.zrbm=e.dept},function(){},function(){})},onNavigationBarButtonTap:function(){},onShow:function(){1==this.needGetInputOnShow&&(this.$data[this.key]=this.inputPageText,this.needGetInputOnShow=!1,this.removeInputItem())},methods:r({},(0,u.mapMutations)(["removeInputItem","setSublistItem"]),{selectedyhdj:function(t){var n=this;e.showActionSheet({itemList:n.yhdjData,success:function(e){n.yhdj=n.yhdjData[e.tapIndex]},fail:function(e){console.log(i(e.errMsg," at pages/danger/addDanger.vue:120"))}})},selectedyhhg:function(t){var n=this;e.showActionSheet({itemList:n.yhhgData,success:function(e){n.yhhg=n.yhhgData[e.tapIndex]},fail:function(e){console.log(i(e.errMsg," at pages/danger/addDanger.vue:133"))}})},checkDateChange:function(e){this.checkDate=e.target.value},deadLineChange:function(e){this.deadLine=e.target.value},saveItem:function(t){for(var n=this,i=a.default.uploadImage+"?from=flowyh&yyid="+n.id+"&fjlx=fj1&userid="+n.userInfo.userid,u=[],s=0;s<n.imageList.length;s++){var r=n.imageList[s];1!=r.type||r.src.startsWith("http:")||u.push(r.src)}if(0==u.length)return n.saveLocalItem(),void e.navigateBack({delta:1});e.showLoading({title:"正在上传图片"}),o.default.uploadImage(i,u,0,0,0,u.length,function(e){var t=JSON.parse(e.data),i=t.fj;n.fj=i},function(t){e.hideLoading(),"200"==t&&(n.saveLocalItem(),e.showToast({title:"上传成功",complete:setTimeout(function(){e.navigateBack({delta:1})},1500)}))})},saveLocalItem:function(){var e={item:this.item,index:this.itemIndex};this.setSublistItem(e)},saveClick:function(){var t=this,n={refid:t.id,yhdj:t.yhdj,yhhg:t.yhhg,bhgys:t.bhgys,wfflfgjtk:t.wfflfgjtk,gsyqjjy:t.gsyqjjy,zrbm:t.zrbm,fqr:t.fqr,userid:t.userInfo.userid};o.default.requestLoadingNew(a.default.addYhzgToFlow,n,"正在加载",function(n){e.showToast({icon:"none",title:"保存成功",duration:1e3}),console.log(i(""+JSON.stringify(n)," at pages/danger/addDanger.vue:217")),t.id=n.id,console.log(i(t.id," at pages/danger/addDanger.vue:219")),t.saveItem()},function(){e.showToast({icon:"none",title:"保存失败"})},function(){})},jumpInput:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入描述";this.needGetInputOnShow=!0,e.navigateTo({url:"../common/inputPage?text="+t+"&key="+n+"&placeholder="+i})},addPhoto:function(){var t=this;e.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(i(JSON.stringify(e.tempFilePaths)," at pages/danger/addDanger.vue:244"));for(var n=0;n<e.tempFilePaths.length;n++){var a={fileid:"",src:e.tempFilePaths[n],type:1};t.imageList.push(a)}}})},deleteImage:function(t,n){var u=this;if(t.src.startsWith("http:")){var s={item:u.item,index:u.itemIndex};u.setSublistItem(s);var r={from:"jc",yyid:u.item.id,fileid:t.fileid,userid:u.userInfo.userid};o.default.requestLoading(a.default.deleteImage,r,"正在删除图片",function(e){console.log(i("删除成功："+JSON.stringify(e)," at pages/danger/addDanger.vue:274")),u.item.fj=e.fj,u.imageList.splice(n,1)},function(){e.showToast({icon:"none",title:"删除失败"})},function(){})}else u.imageList.splice(n,1)},viewPhoto:function(){for(var t=this,n=[],i=0;i<t.imageList.length;i++){var a=t.imageList[i];n.push(a.src)}e.previewImage({urls:n})}})};t.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},7058:function(e,t,n){"use strict";n.r(t);var i=n("8e79"),a=n("c5e3");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("712e");var u=n("2877"),s=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"712e":function(e,t,n){"use strict";var i=n("c43f"),a=n.n(i);a.a},"8e79":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},a35e:function(e,t,n){"use strict";(function(e){n("de83"),n("921b");i(n("66fd"));var t=i(n("7058"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c43f:function(e,t,n){},c5e3:function(e,t,n){"use strict";n.r(t);var i=n("5bf1"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a}},[["a35e","common/runtime","common/vendor"]]]);
});
require('pages/danger/addDanger.js');
__wxRoute = 'pages/statistics/statistics';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/statistics/statistics.js';

define('pages/statistics/statistics.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/statistics/statistics"],{"0cb7":function(t,n,c){"use strict";c.r(n);var e=c("411d"),u=c.n(e);for(var r in e)"default"!==r&&function(t){c.d(n,t,function(){return e[t]})}(r);n["default"]=u.a},"411d":function(t,n,c){},"4c29":function(t,n,c){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];c.d(n,"a",function(){return e}),c.d(n,"b",function(){return u})},"8d9e":function(t,n,c){"use strict";var e=c("93bb"),u=c.n(e);u.a},"93bb":function(t,n,c){},c527:function(t,n,c){"use strict";c.r(n);var e=c("4c29"),u=c("0cb7");for(var r in u)"default"!==r&&function(t){c.d(n,t,function(){return u[t]})}(r);c("8d9e");var a=c("2877"),i=Object(a["a"])(u["default"],e["a"],e["b"],!1,null,null,null);n["default"]=i.exports},c80e:function(t,n,c){"use strict";(function(t){c("de83"),c("921b");e(c("66fd"));var n=e(c("c527"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,c("6e42")["createPage"])}},[["c80e","common/runtime","common/vendor"]]]);
});
require('pages/statistics/statistics.js');
__wxRoute = 'pages/danger/detailDanger';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/danger/detailDanger.js';

define('pages/danger/detailDanger.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/detailDanger"],{1490:function(e,t,a){"use strict";a.r(t);var n=a("5206"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},1965:function(e,t,a){"use strict";(function(e){a("de83"),a("921b");n(a("66fd"));var t=n(a("d4a9"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},2533:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"34ce":function(e,t,a){},5206:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("17f7")),s=r(a("3731")),o=(r(a("59a9")),a("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){u(e,t,a[t])})}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=function(){return a.e("components/list/uni-list/uni-list").then(a.bind(null,"7c03"))},f=function(){return a.e("components/list/uni-icon/uni-icon").then(a.bind(null,"ba08"))},g=function(){return a.e("components/list/uni-list-item/uni-list-item").then(a.bind(null,"4b9c"))},c={computed:(0,o.mapState)(["sublistItem","sublistIndex","userInfo","inputPageText","key"]),components:{uniList:d,uniListItem:g,uniIcon:f},data:function(){return{needGetInputOnShow:!1,imageViewHeight:100,imageList:[],imageList2:[],imageList3:[],littleImageWidth:0,fjflag:"",id:"",yhdj:"",yhhg:"",bhgys:"",wfflfgjtk:"",gsyqjjy:"",zrbm:"",fqr:"",zgwcrq:"",zlzj:"",zgr:"",tbrq:"",zgqk:"",tbr:"",zgyj:"",zgqx:"",txrq:"",yyfx:"",yzqk:"",yzr:"",tbrq2:"",taskDefKey:"",instId:"",nodeName:"",actDefId:"",obj:null,taskId:"",zgFlag:!1,spFlag:!1,yzFlag:!1,zgReadFlag:!0,spReadFlag:!0,yzReadFlag:!0,commonFlow:!0,owner:"",showFlow:"",destNodeData:[],destNodeParam:[],nodeParam:"",destNode:"",zgqkData:["点击输入整改情况"],zlzjData:["点击输入治理资金"],yzqkData:["点击输入验证情况"],yyfxData:["人","物","环","管"],zgyjData:["点击输入整改意见"],nodeFlag:!0}},onLoad:function(t){console.log(e("加载页面..."," at pages/danger/detailDanger.vue:214"));var a=this,o=JSON.parse(t.params);a.taskDefKey=o.taskDefKey,a.instId=o.instId,a.nodeName=o.name,a.actDefId=o.actDefId,a.taskId=o.taskId,a.owner=o.owner,a.showFlow=o.showFlow,a.commonFlow=o.commonFlow,s.default.requestLoadingNew(i.default.getYhzgDetail,o,"正在加载详情",function(t){var n=t.data;a.nodeFlag=!t.lx;var s,o,r=t.destNodeUserList,l=[],u=[];for(var d in r)s=r[d],o=s.taskNodeUser,u.push(o.userIds+":"+o.userFullnames+"@"+s.nodeId+":"+s.nodeText),l.push(s.nodeText+(o.userFullnames?"【"+o.userFullnames+"】":""));a.destNodeParam=u,a.destNodeData=l;var f=a.taskDefKey;if(a.id=n.id,a.yhdj=n.yhdj,a.yhhg=n.yhhg,a.bhgys=n.bhgys,a.wfflfgjtk=n.wfflfgjtk,a.gsyqjjy=n.gsyqjjy,a.zrbm=n.zrbm,a.fqr=n.fqr,n.fj){var g=JSON.parse(n.fj);for(d=0;d<g.length;d++){var c=g[d],h=i.default.host+i.default.loadImage+c.fileId+"&userid="+a.userInfo.userid,m={fileid:c.fileId,src:h,type:2};a.imageList.push(m)}}if("sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"===f);else if("sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"===f){if(a.zgReadFlag=!1,a.spReadFlag=!1,a.yzReadFlag=!1,a.zgqx=n.zgqx,a.tbr=n.tbr,a.txrq=n.txrq,a.zgyj=n.zgyj,a.zgwcrq=n.zgwcrq,a.zlzj=n.zlzj,a.zgr=n.zgr,a.tbrq=n.tbrq,a.zgqk=n.zgqk,n.fj2){console.log(e("FJ2:"+n.fj2," at pages/danger/detailDanger.vue:292"));var p=JSON.parse(n.fj2);for(d=0;d<p.length;d++){var y=p[d],z=i.default.host+i.default.loadImage+y.fileId+"&userid="+a.userInfo.userid,v={fileid:y.fileId,src:z,type:2};a.imageList2.push(v)}}if(a.yyfx=n.yyfx,a.yzqk=n.yzqk,a.yzr=n.yzr,a.tbrq2=n.tbrq2,n.fj3){console.log(e("FJ3:"+n.fj3," at pages/danger/detailDanger.vue:311"));var I=JSON.parse(n.fj3);for(d=0;d<I.length;d++){var j=I[d],q=i.default.host+i.default.loadImage+j.fileId+"&userid="+a.userInfo.userid,D={fileid:j.fileId,src:q,type:2};a.imageList3.push(D)}}}else if("sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"===f)a.zgr=a.userInfo.fullname,a.zgFlag=!0,a.zgReadFlag=!1,a.spReadFlag=!1,a.zgqx=n.zgqx,a.tbr=n.tbr,a.txrq=n.txrq,a.zgyj=n.zgyj,a.fjflag="fj2";else if("sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"===f){if(a.yzr=a.userInfo.fullname,a.yzFlag=!0,a.zgReadFlag=!1,a.spReadFlag=!1,a.yzReadFlag=!1,a.fjflag="fj3",a.zgqx=n.zgqx,a.tbr=n.tbr,a.txrq=n.txrq,a.zgyj=n.zgyj,a.zgwcrq=n.zgwcrq,a.zlzj=n.zlzj,a.zgr=n.zgr,a.tbrq=n.tbrq,a.zgqk=n.zgqk,n.fj2){console.log(e("FJ2:"+n.fj2," at pages/danger/detailDanger.vue:358"));var b=JSON.parse(n.fj2);for(d=0;d<b.length;d++){var w=b[d],F=i.default.host+i.default.loadImage+w.fileId+"&userid="+a.userInfo.userid,k={fileid:w.fileId,src:F,type:2};a.imageList2.push(k)}}}else"sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205"!==f&&"sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"!==f||(a.tbr=a.userInfo.fullname,a.spFlag=!0,a.zgReadFlag=!1,a.spReadFlag=!1)},function(){n.showToast({icon:"none",title:"请求失败"})},function(){}),this.littleImageWidth=(n.getSystemInfoSync().windowWidth-50)/4,this.checkPeople=this.userInfo.fullname},onNavigationBarButtonTap:function(){},onShow:function(){1==this.needGetInputOnShow&&(this.$data[this.key]=this.inputPageText,this.needGetInputOnShow=!1,this.removeInputItem())},methods:l({},(0,o.mapMutations)(["removeInputItem","setSublistItem"]),{deadLineChange:function(e){this.deadLine=e.target.value},bindDateZgwcrq:function(e){this.zgwcrq=e.target.value},bindDateTbrq:function(e){this.tbrq=e.target.value},bindDateZgqx:function(e){this.zgqx=e.target.value},bindDateTxrq:function(e){this.txrq=e.target.value},bindDateTbrq2:function(e){this.tbrq2=e.target.value},selecteddestNode:function(t){var a=this;n.showActionSheet({itemList:a.destNodeData,success:function(e){a.nodeParam=a.destNodeParam[e.tapIndex],a.destNode=a.destNodeData[e.tapIndex]},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:430"))}})},selectedzlzj:function(t){var a=this;n.showActionSheet({itemList:a.zlzjData,success:function(e){0==e.tapIndex&&(this.needGetInputOnShow=!0,a.jumpInput(a.zlzj,"zlzj","请输入治理资金"))},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:446"))}})},selectedzgyj:function(t){var a=this;n.showActionSheet({itemList:a.zgyjData,success:function(e){0==e.tapIndex&&(this.needGetInputOnShow=!0,a.jumpInput(a.zgyj,"zgyj","请输入整改意见"))},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:462"))}})},selectedzgqk:function(t){var a=this;n.showActionSheet({itemList:a.zgqkData,success:function(e){0==e.tapIndex&&(this.needGetInputOnShow=!0,a.jumpInput(a.zgqk,"zgqk","请输入整改情况"))},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:478"))}})},selectedyyfx:function(t){var a=this;n.showActionSheet({itemList:a.yyfxData,success:function(e){a.yyfx=a.yyfxData[e.tapIndex]},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:491"))}})},selectedyzqk:function(t){var a=this;n.showActionSheet({itemList:a.yzqkData,success:function(e){0==e.tapIndex&&(this.needGetInputOnShow=!0,a.jumpInput(a.yzqk,"yzqk","请输入验证情况"))},fail:function(t){console.log(e(t.errMsg," at pages/danger/detailDanger.vue:507"))}})},historyClick:function(){var e=this,t={instId:e.instId,actDefId:e.actDefId};n.setStorageSync("params",JSON.stringify(t)),n.navigateTo({url:"../danger/readHistory"})},flowPicClick:function(){var e=this;plus.runtime.openWeb(i.default.host+i.default.showFlowPic+"?actInstId="+e.instId+"&host="+i.default.host)},backFlowClick:function(){this.jumpType="BACK",this.saveClick()},agreeFlowClick:function(){this.jumpType="AGREE",this.nodeParam?this.saveClick():n.showToast({icon:"none",title:"请选择操作节点"})},saveItem:function(t){var a=this,o=a.fjflag;if(console.log(e("flag:::"+o," at pages/danger/detailDanger.vue:568")),o){for(var r=i.default.uploadImage+"?from=flowyh&yyid="+a.id+"&fjlx="+o+"&userid="+a.userInfo.userid,l="fj2"===o?a.imageList2:"fj3"===o?a.imageList3:[],u=[],d=0;d<l.length;d++){var f=l[d];1!=f.type||f.src.startsWith("http:")||u.push(f.src)}if(0==u.length)return a.saveLocalItem(),void n.navigateBack({delta:1});n.showLoading({title:"正在上传图片"}),s.default.uploadImage(r,u,0,0,0,u.length,function(e){var t=JSON.parse(e.data),n=t.fj;a.fj=n},function(e){n.hideLoading(),"200"==e&&(a.saveLocalItem(),n.showToast({title:"上传成功",complete:setTimeout(function(){n.navigateBack({delta:1})},1500)}))})}else a.saveLocalItem()},saveLocalItem:function(){var e={item:0,index:0};this.setSublistItem(e)},saveClick:function(){var t=this,a={refid:t.id,id:t.id,userid:t.userInfo.userid,owner:t.owner,destNode:t.nodeParam,taskDefKey:t.taskDefKey,jumpType:t.jumpType,actDefId:t.actDefId,taskId:t.taskId};console.log(e(JSON.stringify(a)," at pages/danger/detailDanger.vue:640"));var o=t.taskDefKey;"sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"===o||"sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"===o||("sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"===o?(a.zgwcrq=t.zgwcrq,a.zlzj=t.zlzj,a.zgr=t.zgr,a.tbrq=t.tbrq,a.zgqk=t.zgqk):"sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"===o?(a.yyfx=t.yyfx,a.yzqk=t.yzqk,a.yzr=t.yzr,a.tbrq2=t.tbrq2):"sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205"!==o&&"sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"!==o||(a.zgqx=t.zgqx,a.tbr=t.tbr,a.txrq=t.txrq,a.zgyj=t.zgyj)),s.default.requestLoadingNew(i.default.updateAndSendFlowForMobile,a,"正在加载",function(e){n.showToast({icon:"none",title:"操作成功！",duration:1e3}),t.saveItem()},function(){n.showToast({icon:"none",title:"保存失败"})},function(){setTimeout(function(){n.navigateBack({delta:1})},1500)})},jumpInput:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入描述";this.needGetInputOnShow=!0,n.navigateTo({url:"../common/inputPage?text="+e+"&key="+t+"&placeholder="+a})},addPhoto:function(){var t=this;n.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){console.log(e(JSON.stringify(a.tempFilePaths)," at pages/danger/detailDanger.vue:697"));var n=t.fjflag;if(n)for(var i="fj2"===n?t.imageList2:"fj3"===n?t.imageList3:[],s=0;s<a.tempFilePaths.length;s++){var o={fileid:"",src:a.tempFilePaths[s],type:1};i.push(o)}}})},deleteImage:function(t,a){var o=this;if(t.src.startsWith("http:")){var r={item:o.item,index:o.itemIndex};o.setSublistItem(r);var l={from:"jc",yyid:o.item.id,fileid:t.fileid,userid:o.userInfo.userid};s.default.requestLoading(i.default.deleteImage,l,"正在删除图片",function(t){var n=o.fjflag;if(n){var i="fj2"===n?o.imageList2:"fj3"===n?o.imageList3:[];console.log(e("删除成功："+JSON.stringify(t)," at pages/danger/detailDanger.vue:734")),o.item.fj=t.fj,i.splice(a,1)}},function(){n.showToast({icon:"none",title:"删除失败"})},function(){})}else{var u=o.fjflag;if(u){var d="fj2"===u?o.imageList2:"fj3"===u?o.imageList3:[];d.splice(a,1)}}},viewPhoto:function(){var t=this,a=[],i=t.imageList.length>0?t.imageList:t.imageList2.length>0?t.imageList2:t.imageList3;console.log(e(JSON.stringify(i)," at pages/danger/detailDanger.vue:760"));for(var s=0;s<i.length;s++){var o=i[s];a.push(o.src)}n.previewImage({urls:a})}})};t.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},"520a":function(e,t,a){"use strict";var n=a("34ce"),i=a.n(n);i.a},d4a9:function(e,t,a){"use strict";a.r(t);var n=a("2533"),i=a("1490");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("520a");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["1965","common/runtime","common/vendor"]]]);
});
require('pages/danger/detailDanger.js');
__wxRoute = 'pages/ptw/addPtw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/addPtw.js';

define('pages/ptw/addPtw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/addPtw"],{"020f":function(t,e,n){"use strict";n.r(e);var i=n("eefe"),s=n("5ffa");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("8a5f");var o=n("2877"),u=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"5ffa":function(t,e,n){"use strict";n.r(e);var i=n("bae2"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"7c90":function(t,e,n){},"8a5f":function(t,e,n){"use strict";var i=n("7c90"),s=n.n(i);s.a},"958b":function(t,e,n){"use strict";(function(t){n("de83"),n("921b");i(n("66fd"));var e=i(n("020f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bae2:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=u(n("17f7")),a=u(n("3731")),o=(u(n("59a9")),n("2f62"));function u(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(){return n.e("components/list/uni-list/uni-list").then(n.bind(null,"7c03"))},l=function(){return n.e("components/list/uni-icon/uni-icon").then(n.bind(null,"ba08"))},f=function(){return n.e("components/list/uni-list-item/uni-list-item").then(n.bind(null,"4b9c"))},h={computed:(0,o.mapState)(["sublistItem","sublistIndex","userInfo","inputPageText","key"]),components:{uniList:c,uniListItem:f,uniIcon:l},data:function(){return{needGetInputOnShow:!1,imageViewHeight:100,imageList:[],littleImageWidth:0,item:"",itemIndex:0,id:"",dhzlx:"",zydw:"",dhfzr:"",dhfs:"",dhdd:"",sgxm:"",dhnr:"",zzjhr:"",zzjhrgw:"",ddjhr:"",ddjhrgw:"",whbs:"",dhqx:"",dhqx2:"",sfjxfxfx:"",sfyss:"",fj:"",aqcs:"",ssqk:"",sfData:["是","否"],dhzlxData:["特殊危险动火","一级动火","二级动火"]}},onLoad:function(){this.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4},onNavigationBarButtonTap:function(){},onShow:function(){1==this.needGetInputOnShow&&(this.$data[this.key]=this.inputPageText,this.needGetInputOnShow=!1,this.removeInputItem())},methods:d({},(0,o.mapMutations)(["removeInputItem","setSublistItem"]),{selecteddhzlx:function(e){var n=this;t.showActionSheet({itemList:n.dhzlxData,success:function(t){n.dhzlx=n.dhzlxData[t.tapIndex]},fail:function(t){console.log(i(t.errMsg," at pages/ptw/addPtw.vue:143"))}})},selectedsfjxfxfx:function(e){var n=this;t.showActionSheet({itemList:n.sfData,success:function(t){n.sfjxfxfx=n.sfData[t.tapIndex]},fail:function(t){console.log(i(t.errMsg," at pages/ptw/addPtw.vue:155"))}})},selectedsfyss:function(e){var n=this;t.showActionSheet({itemList:n.sfData,success:function(t){n.sfyss=n.sfData[t.tapIndex]},fail:function(t){console.log(i(t.errMsg," at pages/ptw/addPtw.vue:167"))}})},bindDateDhqx:function(t){this.dhqx=t.target.value},bindDateDhqx2:function(t){this.dhqx2=t.target.value},saveItem:function(e){for(var n=this,i=s.default.uploadImage+"?from=ptw&yyid="+n.id+"&userid="+n.userInfo.userid,o=[],u=0;u<n.imageList.length;u++){var d=n.imageList[u];1!=d.type||d.src.startsWith("http:")||o.push(d.src)}0!=o.length?(t.showLoading({title:"正在上传图片"}),a.default.uploadImage(i,o,0,0,0,o.length,function(t){var e=JSON.parse(t.data),i=e.fj;n.fj=i},function(e){t.hideLoading()})):n.saveLocalItem()},saveLocalItem:function(){var t={item:this.item,index:this.itemIndex};this.setSublistItem(t)},choiceICON:function(){var e=this,n=e.id;n?t.navigateTo({url:"rapSelected?recordid="+n}):t.showToast({icon:"none",title:"请先保存作业"})},savePTW:function(){this.saveClick(s.default.savePTW)},savePTWFlow:function(){this.saveClick(s.default.savePTWFlow)},saveAndClose:function(){var e=this;e.saveClick(s.default.savePTW),e.saveLocalItem(),t.showToast({title:"保存成功，即将关闭",complete:setTimeout(function(){t.navigateBack({delta:1})},1500)})},closeBtn:function(){var e=this;e.saveLocalItem(),t.showToast({title:"即将关闭",complete:setTimeout(function(){t.navigateBack({delta:1})},1500)})},saveClick:function(e){var n=this,s={userid:n.userInfo.userid,dhzlx:n.dhzlx,zydw:n.zydw,dhfzr:n.dhfzr,dhfs:n.dhfs,dhdd:n.dhdd,sgxm:n.sgxm,dhnr:n.dhnr,zzjhr:n.zzjhr,zzjhrgw:n.zzjhrgw,ddjhr:n.ddjhr,ddjhrgw:n.ddjhrgw,whbs:n.whbs,dhqx:n.dhqx,dhqx2:n.dhqx2,sfjxfxfx:n.sfjxfxfx,sfyss:n.sfyss,aqcs:n.aqcs,ssqk:n.ssqk},o=[{val:n.zydw,msg:"作业单位"},{val:n.dhfzr,msg:"动火负责人"},{val:n.dhfs,msg:"动火方式"},{val:n.dhdd,msg:"动火地点"},{val:n.sgxm,msg:"施工项目"},{val:n.dhnr,msg:"动火内容"},{val:n.zzjhr,msg:"组织监火人"},{val:n.zzjhrgw,msg:"组织监火人岗位"},{val:n.ddjhr,msg:"地点监火人"},{val:n.ddjhrgw,msg:"地点监火人岗位"},{val:n.whbs,msg:"危害辨识"},{val:n.aqcs,msg:"安全措施"},{val:n.ssqk,msg:"实施情况"}];n.checkVal(o)&&a.default.requestLoadingNew(e,s,"正在加载",function(e){t.showToast({icon:"none",title:"保存成功",duration:1e3}),console.log(i(""+JSON.stringify(e)," at pages/ptw/addPtw.vue:302")),n.id=e.id,console.log(i(n.id," at pages/ptw/addPtw.vue:304")),n.saveItem()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},jumpInput:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入描述";this.needGetInputOnShow=!0,t.navigateTo({url:"../common/inputPage?text="+e+"&key="+n+"&placeholder="+i})},addPhoto:function(){var e=this;t.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(i(JSON.stringify(t.tempFilePaths)," at pages/ptw/addPtw.vue:329"));for(var n=e.imageList,s=0;s<t.tempFilePaths.length;s++){var a={fileid:"",src:t.tempFilePaths[s],type:1};n.push(a)}}})},checkVal:function(e){for(var n in e)if(!e[n].val)return t.showToast({icon:"none",title:e[n].msg+"不能为空！"}),!1;return!0},deleteImage:function(e,n){var o=this;if(e.src.startsWith("http:")){var u={item:o.item,index:o.itemIndex};o.setSublistItem(u);var d={from:"jc",yyid:o.item.id,fileid:e.fileid,userid:o.userInfo.userid};a.default.requestLoading(s.default.deleteImage,d,"正在删除图片",function(t){console.log(i("删除成功："+JSON.stringify(t)," at pages/ptw/addPtw.vue:373"));var e=o.imageList;o.item.fj=t.fj,e.splice(n,1)},function(){t.showToast({icon:"none",title:"删除失败"})},function(){})}else imageList.splice(n,1)},viewPhoto:function(){for(var e=this,n=[],i=e.imageList,s=0;s<i.length;s++){var a=i[s];n.push(a.src)}t.previewImage({urls:n})}})};e.default=h}).call(this,n("6e42")["default"],n("0de9")["default"])},eefe:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})}},[["958b","common/runtime","common/vendor"]]]);
});
require('pages/ptw/addPtw.js');
__wxRoute = 'pages/ptw/rapSelected';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/rapSelected.js';

define('pages/ptw/rapSelected.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/rapSelected"],{"06f5":function(t,e,i){"use strict";i.r(e);var n=i("99b1"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},"27a1":function(t,e,i){},"32ee":function(t,e,i){"use strict";var n=i("27a1"),s=i.n(n);s.a},"3a13":function(t,e,i){"use strict";i.r(e);var n=i("9950"),s=i("06f5");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("32ee");var c=i("2877"),a=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,"49b0dbf2",null);e["default"]=a.exports},9950:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"99b1":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(i("17f7")),o=c(i("3731"));function c(t){return t&&t.__esModule?t:{default:t}}var a=function(){return i.e("components/m-search/m-search").then(i.bind(null,"d857"))},u={components:{mSearch:a},name:"slide-list",computed:{Screen_width:function(){return t.getSystemInfoSync().windowWidth}},data:function(){return{recordid:"",img:"../../static/slide-list/qr_code.png",visible:!1,start_slide_x:0,btnWidth:0,startX:0,LastX:0,startTime:0,screenName:"",list:[],btuBottom:"0",secondHeight:""}},onLoad:function(t){this.recordid=t.recordid},onShow:function(){var e=t.getSystemInfoSync();this.secondHeight=e.windowHeight,this.getSelectedSolutions()},onNavigationBarButtonTap:function(){t.navigateTo({url:"rapAdd?recordid="+this.recordid})},methods:{getSelectedSolutions:function(t){var e=this,i={recordid:e.recordid};o.default.requestLoadingNew(s.default.getSelectedSolutionById,i,"正在加载...",function(t){"true"==t.success&&(e.list=t.data.aqcs)},function(){},function(){})},cancelEvent:function(){this.visible=!1},search:function(t,e){this.screenName=t,console.log(n("点击搜索"," at pages/ptw/rapSelected.vue:153"))},getDetail:function(t){console.log(n("查看详情"," at pages/ptw/rapSelected.vue:156"))},touchStart:function(e,i){var n=this;this.startTime=e.timeStamp,this.start_slide_x=this.list[i].slide_x,t.createSelectorQuery().selectAll(".group-btn").boundingClientRect().exec(function(t){null!=t[0]&&(n.btnWidth=-1*t[0][i].width)}),this.startX=e.touches[0].pageX,this.lastX=this.startX,this.list.forEach(function(t,e){e!==i&&(t.slide_x=0)})},touchMove:function(t,e){var i=t.touches[0].pageX,n=i-this.lastX,s=this.list[e].slide_x+n;s<=0&&s>=this.btnWidth&&(this.list[e].slide_x=s),this.lastX=i},touchEnd:function(t,e){var i=10,n=t.timeStamp,s=this.startX-this.lastX;Math.abs(n-this.startTime)>200&&(i=this.btnWidth/-2),this.list[e].slide_x=s>i?this.btnWidth:s<-1*i?0:this.start_slide_x},recover:function(t){this.list[t].slide_x=0},top:function(t){console.log(n("点击分享"," at pages/ptw/rapSelected.vue:220")),this.visible?this.visible=!1:this.visible=!0},removeM:function(e,i){t.showToast({title:"点击删除",icon:"none"});var n=this,c={ckcsid:i,recordid:n.recordid};o.default.requestLoadingNew(s.default.deleteSelectedSolution,c,"正在删除...",function(t){"true"==t.success&&n.getSelectedSolutions()},function(){},function(){})},okClick:function(e){t.navigateBack({delta:1})}}};e.default=u}).call(this,i("6e42")["default"],i("0de9")["default"])},"9bf3":function(t,e,i){"use strict";(function(t){i("de83"),i("921b");n(i("66fd"));var e=n(i("3a13"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["9bf3","common/runtime","common/vendor"]]]);
});
require('pages/ptw/rapSelected.js');
__wxRoute = 'pages/ptw/rapAdd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/rapAdd.js';

define('pages/ptw/rapAdd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/rapAdd"],{"0959":function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o})},"09c6":function(n,e,t){},"7c3b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(t("17f7"));var r=t("2f62");function o(n){return n&&n.__esModule?n:{default:n}}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=function(){return t.e("components/drawer/uni-drawer").then(t.bind(null,"6cfe"))},i={computed:u({},(0,r.mapState)(["hasLogin","forcedLogin","userType","userInfo"])),components:{uniDrawer:a},data:function(){return{recordid:""}},onLoad:function(n){this.recordid=n.recordid},onNavigationBarButtonTap:function(){},methods:{jumpConsider:function(e){n.navigateTo({url:"rapConsider?id="+e.currentTarget.id+"&recordid="+this.recordid})}}};e.default=i}).call(this,t("6e42")["default"])},"8e77":function(n,e,t){"use strict";t.r(e);var r=t("7c3b"),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e["default"]=o.a},"9c5a":function(n,e,t){"use strict";var r=t("09c6"),o=t.n(r);o.a},a9c2:function(n,e,t){"use strict";(function(n){t("de83"),t("921b");r(t("66fd"));var e=r(t("acf9"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},acf9:function(n,e,t){"use strict";t.r(e);var r=t("0959"),o=t("8e77");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("9c5a");var c=t("2877"),a=Object(c["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports}},[["a9c2","common/runtime","common/vendor"]]]);
});
require('pages/ptw/rapAdd.js');
__wxRoute = 'pages/ptw/rapConsider';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/rapConsider.js';

define('pages/ptw/rapConsider.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/rapConsider"],{"0516":function(e,t,n){"use strict";var r=n("e152"),o=n.n(r);o.a},"0c1b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("17f7")),o=i(n("3731")),u=n("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={computed:(0,u.mapState)(["inputPageText","key","userInfo"]),data:function(){return{iconid:"",recordid:"",considers:[]}},onLoad:function(e){this.iconid=e.id,this.recordid=e.recordid,this.getConsiders()},onShow:function(){},methods:c({},(0,u.mapMutations)(["setSublistItem"]),{jumpHarm:function(t){e.navigateTo({url:"rapHarm?id="+t+"&recordid="+this.recordid})},getConsiders:function(){var e=this,t={iconid:e.iconid};o.default.requestLoadingNew(r.default.getConsiderByIcon,t,"正在加载...",function(t){"true"==t.success&&(e.considers=t.data.rapKlys)},function(){},function(){})}})};t.default=f}).call(this,n("6e42")["default"])},"83e0":function(e,t,n){"use strict";(function(e){n("de83"),n("921b");r(n("66fd"));var t=r(n("e162"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e152:function(e,t,n){},e162:function(e,t,n){"use strict";n.r(t);var r=n("f1b6"),o=n("e5cb");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("0516");var i=n("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},e5cb:function(e,t,n){"use strict";n.r(t);var r=n("0c1b"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=o.a},f1b6:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}},[["83e0","common/runtime","common/vendor"]]]);
});
require('pages/ptw/rapConsider.js');
__wxRoute = 'pages/ptw/rapHarm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/rapHarm.js';

define('pages/ptw/rapHarm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/rapHarm"],{"3cf8":function(t,e,n){"use strict";n.r(e);var r=n("c5a5"),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=u.a},"943b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},"9c87":function(t,e,n){},a8c2:function(t,e,n){"use strict";(function(t){n("de83"),n("921b");r(n("66fd"));var e=r(n("ba93"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ba93:function(t,e,n){"use strict";n.r(e);var r=n("943b"),u=n("3cf8");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("c24c");var a=n("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},c24c:function(t,e,n){"use strict";var r=n("9c87"),u=n.n(r);u.a},c5a5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("17f7")),u=a(n("3731")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={computed:(0,o.mapState)(["inputPageText","key","userInfo"]),data:function(){return{klysid:"",recordid:"",harms:[]}},onLoad:function(t){this.klysid=t.id,this.recordid=t.recordid,this.getHarms()},onShow:function(){},methods:c({},(0,o.mapMutations)(["setSublistItem"]),{jumpSolution:function(e){t.navigateTo({url:"rapSolution?id="+e+"&recordid="+this.recordid})},getHarms:function(){var t=this,e={klysid:t.klysid};u.default.requestLoadingNew(r.default.getHarmByConsi,e,"正在加载...",function(e){"true"==e.success&&(t.harms=e.data.rapWh)},function(){},function(){})}})};e.default=f}).call(this,n("6e42")["default"])}},[["a8c2","common/runtime","common/vendor"]]]);
});
require('pages/ptw/rapHarm.js');
__wxRoute = 'pages/ptw/rapSolution';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ptw/rapSolution.js';

define('pages/ptw/rapSolution.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ptw/rapSolution"],{"1eec":function(t,e,n){},2155:function(t,e,n){"use strict";(function(t){n("de83"),n("921b");o(n("66fd"));var e=o(n("3518"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3518:function(t,e,n){"use strict";n.r(e);var o=n("655c"),u=n("8ef0");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("f00c");var c=n("2877"),r=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"372f":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("17f7")),i=r(n("3731")),c=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={computed:(0,c.mapState)(["inputPageText","key","userInfo"]),data:function(){return{whid:"",recordid:"",solutions:[],selectedSolutions:[]}},onLoad:function(t){this.whid=t.id,this.recordid=t.recordid,this.getSolutions()},onShow:function(){},methods:a({},(0,c.mapMutations)(["setSublistItem"]),{addSolution:function(t){var e=this,n=t.currentTarget,o={ckcsid:n.id,recordid:e.recordid};i.default.requestLoadingNew(u.default.addSolution,o,"正在添加...",function(t){"true"==t.success&&e.getSelectedSolutions()},function(){},function(){})},getSolutions:function(){var t=this,e={whid:t.whid};i.default.requestLoadingNew(u.default.getSolutionsByHarmId,e,"正在加载...",function(e){"true"==e.success&&(t.solutions=e.data.rapCkcs,t.getSelectedSolutions())},function(){},function(){})},getSelectedSolutions:function(t){var e=this,n={recordid:e.recordid};i.default.requestLoadingNew(u.default.getSelectedSolutionById,n,"正在加载...",function(t){"true"==t.success&&(e.selectedSolutions=t.data.aqcs,e.checkSelected())},function(){},function(){})},checkSelected:function(){for(var e in this.selectedSolutions){var n=this.selectedSolutions[e];for(var o in this.solutions){var u=this.solutions[o];u.ckcsrecordid==n.yckcsid&&(u.selected=!0,console.log(t(""+JSON.stringify(this.solutions)," at pages/ptw/rapSolution.vue:111")))}}},gobackToSelected:function(t){o.navigateBack({delta:4})}})};e.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},"655c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},"8ef0":function(t,e,n){"use strict";n.r(e);var o=n("372f"),u=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=u.a},f00c:function(t,e,n){"use strict";var o=n("1eec"),u=n.n(o);u.a}},[["2155","common/runtime","common/vendor"]]]);
});
require('pages/ptw/rapSolution.js');
__wxRoute = 'pages/pointList/uni-tabs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointList/uni-tabs.js';

define('pages/pointList/uni-tabs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/pointList/uni-tabs.js');
__wxRoute = 'pages/uni-tabs/uni-tabs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uni-tabs/uni-tabs.js';

define('pages/uni-tabs/uni-tabs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/uni-tabs/uni-tabs.js');
__wxRoute = 'pages/danger/dangerList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/danger/dangerList.js';

define('pages/danger/dangerList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/danger/dangerList.js');
__wxRoute = 'pages/danger/readHistory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/danger/readHistory.js';

define('pages/danger/readHistory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/danger/readHistory.js');
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

