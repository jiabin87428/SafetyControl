var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180810_syb_zp*/global.__wcc_version__='v0.5vv_20180810_syb_zp';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};
if(typeof __WXML_GLOBAL__ === 'undefined') __WXML_GLOBAL__={};
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
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
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
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7be27b0c-default-7be27b0c-6'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'30c48a99'])
Z([3,'false'])
Z([3,'点位编号'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z([3,'检查人'])
Z([3,'handleProxy'])
Z([3,'_picker 7be27b0c'])
Z([[7],[3,'$k']])
Z([1,'7be27b0c-0'])
Z([3,'date'])
Z([[6],[[7],[3,'obj']],[3,'jcrq']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z([3,'检查日期'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z([3,'责任部门'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z([3,'楼层'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-5']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z([3,'位置'])
Z([3,'7be27b0c-default-7be27b0c-11'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'obj']],[3,'sublist']])
Z(z[31])
Z(z[9])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-10-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[11])
Z([[2,'+'],[1,'7be27b0c-1-'],[[7],[3,'index']]])
Z(z[2])
Z([3,'true'])
Z([3,'4bd08622-default-4bd08622-3'])
Z(z[9])
Z([3,'_picker 4bd08622'])
Z(z[11])
Z([1,'4bd08622-0'])
Z([[7],[3,'typeArray']])
Z([[7],[3,'index']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4bd08622-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z([3,'检查结论'])
Z(z[9])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4bd08622-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[11])
Z([1,'4bd08622-1'])
Z(z[2])
Z([3,'问题描述'])
Z(z[9])
Z(z[43])
Z(z[11])
Z([1,'4bd08622-2'])
Z([[7],[3,'rectifyTypes']])
Z(z[47])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4bd08622-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z([3,'整改方式'])
Z([3,'47b16668-default-47b16668-3'])
Z(z[9])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'47b16668-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[11])
Z([1,'47b16668-0'])
Z(z[2])
Z([3,'报警设备类型统计'])
Z(z[9])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'47b16668-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[11])
Z([1,'47b16668-1'])
Z(z[2])
Z([3,'报警事件类型统计'])
Z(z[9])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'47b16668-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[11])
Z([1,'47b16668-2'])
Z(z[2])
Z([3,'阀组压力统计'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'68dcfa4a'])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'346bda0d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'30c48a99'])
Z([3,'handleProxy'])
Z([a,[3,'_view 30c48a99 uni-list-cell '],[[4],[[5],[[2,'?:'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[1,'uni-list-cell--disabled'],[1,'']]]]])
Z([[7],[3,'$k']])
Z([1,'30c48a99-1'])
Z([[2,'?:'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'disabled']],[1,true]],[[2,'==='],[[7],[3,'disabled']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]],[1,''],[1,'uni-list-cell--hover']])
Z([3,'_view 30c48a99 uni-list-cell__container'])
Z([[7],[3,'thumb']])
Z([[2,'||'],[[2,'==='],[[7],[3,'showExtraIcon']],[1,true]],[[2,'==='],[[7],[3,'showExtraIcon']],[1,'true']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'30c48a99-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'346bda0d'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'==='],[[7],[3,'showBadge']],[1,true]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]],[[2,'==='],[[7],[3,'showArrow']],[1,true]]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([3,'_view 30c48a99 uni-list-cell__extra'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showBadge']],[1,true]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'30c48a99-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'68dcfa4a'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showSwitch']],[1,true]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showArrow']],[1,true]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]])
Z([3,'#bbb'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'30c48a99-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[10])
Z([3,'20'])
Z([3,'arrowright'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3b6bb3ad'])
Z([3,'_view 3b6bb3ad uni-list'])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2241d2a0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7dcb1efb'])
Z([3,'_view 7dcb1efb m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'handleProxy'])
Z([3,'#666666'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7dcb1efb-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'7dcb1efb-1'])
Z([3,'2241d2a0'])
Z([3,'20'])
Z([3,'clear'])
Z([[7],[3,'displayable_']])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7dcb1efb-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'7dcb1efb-2'])
Z(z[8])
Z(z[9])
Z([3,'eye'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'53499e7e'])
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ab7aaa6c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ab7aaa6c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4ef7e761'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4ef7e761-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'4ef7e761-0'])
Z([3,'7dcb1efb'])
Z([3,'请输入域名'])
Z([3,'text'])
Z([[7],[3,'host']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4ef7e761'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2d8d4fae'])
Z([3,'_view 2d8d4fae content'])
Z([3,'_view 2d8d4fae input-group'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2d8d4fae-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'2d8d4fae-0'])
Z([3,'7dcb1efb'])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2d8d4fae-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([1,'2d8d4fae-1'])
Z(z[7])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([[7],[3,'hasProvider']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2d8d4fae'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00cb397a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00cb397a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'47b16668'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'47b16668-3']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'47b16668-default-47b16668-3']]])
Z([3,'3b6bb3ad'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'47b16668'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00eed4f4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00eed4f4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7e389618'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7e389618'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'18e9acfc'])
Z([3,'_view 18e9acfc container'])
Z([3,'pie'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'18e9acfc-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53499e7e'])
Z([3,'pieChart'])
Z([3,'line'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'18e9acfc-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[4])
Z([3,'lineChart'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'18e9acfc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1b853e3c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1b853e3c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7be27b0c'])
Z([3,'_view 7be27b0c baseView'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-6']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'7be27b0c-default-7be27b0c-6']]])
Z([3,'3b6bb3ad'])
Z([3,'_view 7be27b0c cellTitleView'])
Z([3,'#24BE41'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-7']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'346bda0d'])
Z([3,'22'])
Z([3,'checkbox-filled'])
Z([3,'#FFDE52'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-8']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
Z(z[8])
Z([3,'info-filled'])
Z([3,'#C11E1E'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-9']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
Z(z[8])
Z([3,'clear'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-11']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'7be27b0c-default-7be27b0c-11']]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7be27b0c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4bd08622'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4bd08622-3']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'4bd08622-default-4bd08622-3']]])
Z([3,'3b6bb3ad'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4bd08622'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'10bbdf1a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'10bbdf1a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'21b694de'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'21b694de'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6cbf6956'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6cbf6956-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'6cbf6956-0'])
Z([3,'7dcb1efb'])
Z([3,'请输入邮箱'])
Z([3,'text'])
Z([[7],[3,'email']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6cbf6956'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'90021ef8'])
Z([3,'_view 90021ef8 input-group'])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'90021ef8-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'90021ef8-0'])
Z([3,'7dcb1efb'])
Z([3,'请输入账号'])
Z([3,'text'])
Z([[7],[3,'account']])
Z(z[2])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'90021ef8-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[4])
Z([1,'90021ef8-1'])
Z(z[6])
Z([3,'请输入密码'])
Z([3,'password'])
Z([[7],[3,'password']])
Z(z[2])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'90021ef8-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[4])
Z([1,'90021ef8-2'])
Z(z[6])
Z([3,'请输入邮箱'])
Z(z[8])
Z([[7],[3,'email']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'90021ef8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'240234ba'])
Z([3,'_view 240234ba btn-row'])
Z([[2,'!'],[[7],[3,'hasLogin']]])
Z([[7],[3,'hasLogin']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'240234ba'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./common/slots.wxml','/components/list/uni-list/uni-list.vue.wxml','/components/list/uni-list-item/uni-list-item.vue.wxml','/components/list/uni-icon/uni-icon.vue.wxml','/components/m-input.vue.wxml','/components/mpvue-echarts/src/echarts.vue.wxml','/components/m-icon/m-icon.vue.wxml','/common/slots.wxml','/components/list/uni-badge/uni-badge.vue.wxml','./components/list/uni-badge/uni-badge.vue.wxml','./components/list/uni-icon/uni-icon.vue.wxml','./components/list/uni-list-item/uni-list-item.vue.wxml','./components/list/uni-list/uni-list.vue.wxml','./components/m-icon/m-icon.vue.wxml','./components/m-input.vue.wxml','./components/mpvue-echarts/src/echarts.vue.wxml','./pages/common/inputPage.vue.wxml','./pages/common/inputPage.wxml','./inputPage.vue.wxml','./pages/login/diyHost.vue.wxml','./pages/login/diyHost.wxml','./diyHost.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/main/main.vue.wxml','./pages/main/main.wxml','./main.vue.wxml','./pages/mpvue-echarts/chartList.vue.wxml','./pages/mpvue-echarts/chartList.wxml','./chartList.vue.wxml','./pages/mpvue-echarts/deviceChart.vue.wxml','./pages/mpvue-echarts/deviceChart.wxml','./deviceChart.vue.wxml','./pages/mpvue-echarts/eventChart.vue.wxml','./pages/mpvue-echarts/eventChart.wxml','./eventChart.vue.wxml','./pages/mpvue-echarts/mpvue-echarts.vue.wxml','./pages/mpvue-echarts/mpvue-echarts.wxml','./mpvue-echarts.vue.wxml','./pages/mpvue-echarts/valveChart.vue.wxml','./pages/mpvue-echarts/valveChart.wxml','./valveChart.vue.wxml','./pages/pointAdd/pointAdd.vue.wxml','./pages/pointAdd/pointAdd.wxml','./pointAdd.vue.wxml','./pages/pointAdd/pointCheckInfo.vue.wxml','./pages/pointAdd/pointCheckInfo.wxml','./pointCheckInfo.vue.wxml','./pages/pointCheck/pointCheck.vue.wxml','./pages/pointCheck/pointCheck.wxml','./pointCheck.vue.wxml','./pages/pointDetail/pointDetail.vue.wxml','./pages/pointDetail/pointDetail.wxml','./pointDetail.vue.wxml','./pages/pwd/pwd.vue.wxml','./pages/pwd/pwd.wxml','./pwd.vue.wxml','./pages/reg/reg.vue.wxml','./pages/reg/reg.wxml','./reg.vue.wxml','./pages/user/user.vue.wxml','./pages/user/user.wxml','./user.vue.wxml'];d_[x[0]]={}
d_[x[0]]["7be27b0c-default-7be27b0c-6"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':7be27b0c-default-7be27b0c-6'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:10:47")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[0],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[0],10,158)
cs.pop()
var cF=_v()
_(r,cF)
cs.push("./common/slots.wxml:template:10:181")
var hG=_oz(z,6,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],10,289)
cs.pop()
cs.push("./common/slots.wxml:picker:10:312")
var oJ=_mz(z,'picker',['bindchange',9,'class',1,'data-comkey',2,'data-eventid',3,'mode',4,'value',5],[],e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./common/slots.wxml:template:10:456")
var aL=_oz(z,16,e,s,gg)
var tM=_gd(x[0],aL,e_,d_)
if(tM){
var eN=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[0],10,548)
cs.pop()
cs.pop()
_(r,oJ)
var bO=_v()
_(r,bO)
cs.push("./common/slots.wxml:template:10:580")
var oP=_oz(z,19,e,s,gg)
var xQ=_gd(x[0],oP,e_,d_)
if(xQ){
var oR=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[0],10,691)
cs.pop()
var fS=_v()
_(r,fS)
cs.push("./common/slots.wxml:template:10:714")
var cT=_oz(z,23,e,s,gg)
var hU=_gd(x[0],cT,e_,d_)
if(hU){
var oV=_1z(z,22,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[0],10,819)
cs.pop()
var cW=_v()
_(r,cW)
cs.push("./common/slots.wxml:template:10:842")
var oX=_oz(z,27,e,s,gg)
var lY=_gd(x[0],oX,e_,d_)
if(lY){
var aZ=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[0],10,947)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["7be27b0c-default-7be27b0c-11"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':7be27b0c-default-7be27b0c-11'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:12:48")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
cs.push("./common/slots.wxml:template:12:48")
var cI=_oz(z,39,fE,oD,gg)
var oJ=_gd(x[0],cI,e_,d_)
if(oJ){
var lK=_1z(z,36,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[0],12,247)
cs.pop()
return cF
}
oB.wxXCkey=2
_2z(z,33,xC,e,s,gg,oB,'item','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["4bd08622-default-4bd08622-3"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':4bd08622-default-4bd08622-3'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
cs.push("./common/slots.wxml:picker:14:47")
var oB=_mz(z,'picker',['bindchange',42,'class',1,'data-comkey',2,'data-eventid',3,'range',4,'value',5],[],e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./common/slots.wxml:template:14:198")
var oD=_oz(z,49,e,s,gg)
var fE=_gd(x[0],oD,e_,d_)
if(fE){
var cF=_1z(z,48,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[0],14,290)
cs.pop()
cs.pop()
_(r,oB)
var hG=_v()
_(r,hG)
cs.push("./common/slots.wxml:template:14:322")
var oH=_oz(z,55,e,s,gg)
var cI=_gd(x[0],oH,e_,d_)
if(cI){
var oJ=_1z(z,52,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[0],14,489)
cs.pop()
cs.push("./common/slots.wxml:picker:14:512")
var lK=_mz(z,'picker',['bindchange',57,'class',1,'data-comkey',2,'data-eventid',3,'range',4,'value',5],[],e,s,gg)
var aL=_v()
_(lK,aL)
cs.push("./common/slots.wxml:template:14:666")
var tM=_oz(z,64,e,s,gg)
var eN=_gd(x[0],tM,e_,d_)
if(eN){
var bO=_1z(z,63,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[0],14,758)
cs.pop()
cs.pop()
_(r,lK)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["47b16668-default-47b16668-3"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':47b16668-default-47b16668-3'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:16:47")
var xC=_oz(z,71,e,s,gg)
var oD=_gd(x[0],xC,e_,d_)
if(oD){
var fE=_1z(z,68,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[0],16,226)
cs.pop()
var cF=_v()
_(r,cF)
cs.push("./common/slots.wxml:template:16:249")
var hG=_oz(z,77,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,74,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],16,428)
cs.pop()
var oJ=_v()
_(r,oJ)
cs.push("./common/slots.wxml:template:16:451")
var lK=_oz(z,83,e,s,gg)
var aL=_gd(x[0],lK,e_,d_)
if(aL){
var tM=_1z(z,80,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[0],16,624)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
_ai(oB,x[2],e_,x[0],2,2)
_ai(oB,x[3],e_,x[0],3,2)
_ai(oB,x[4],e_,x[0],4,2)
_ai(oB,x[5],e_,x[0],5,2)
_ai(oB,x[6],e_,x[0],6,2)
_ai(oB,x[7],e_,x[0],7,2)
_ai(oB,x[8],e_,x[0],8,2)
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["68dcfa4a"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[9]+':68dcfa4a'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-badge/uni-badge.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/list/uni-badge/uni-badge.vue.wxml:text:1:27")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[9]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["346bda0d"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[10]+':346bda0d'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-icon/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[10]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
d_[x[11]]["30c48a99"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[11]+':30c48a99'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list-item/uni-list-item.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:149")
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-comkey',2,'data-eventid',3,'hoverClass',4],[],e,s,gg)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:484")
var xC=_n('view')
_rz(z,xC,'class',6,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:538")
cs.pop()
}
else if(_oz(z,8,e,s,gg)){oD.wxVkey=2
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:691")
var hG=_v()
_(oD,hG)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:805")
var oH=_oz(z,10,e,s,gg)
var cI=_gd(x[11],oH,e_,d_)
if(cI){
var oJ=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[11],1,876)
cs.pop()
cs.pop()
}
var fE=_v()
_(xC,fE)
if(_oz(z,11,e,s,gg)){fE.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:1032")
cs.pop()
}
var cF=_v()
_(xC,cF)
if(_oz(z,12,e,s,gg)){cF.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:1128")
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:1128")
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,14,e,s,gg)){aL.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1325")
var bO=_v()
_(aL,bO)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1325")
var oP=_oz(z,16,e,s,gg)
var xQ=_gd(x[11],oP,e_,d_)
if(xQ){
var oR=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[11],1,1451)
cs.pop()
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,17,e,s,gg)){tM.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:switch:1:1474")
cs.pop()
}
var eN=_v()
_(lK,eN)
if(_oz(z,18,e,s,gg)){eN.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1696")
var fS=_v()
_(eN,fS)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1696")
var cT=_oz(z,21,e,s,gg)
var hU=_gd(x[11],cT,e_,d_)
if(hU){
var oV=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[11],1,1863)
cs.pop()
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
cs.pop()
_(cF,lK)
cs.pop()
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cF=e_[x[11]].i
_ai(cF,x[3],e_,x[11],1,1)
_ai(cF,x[8],e_,x[11],1,61)
cF.pop()
cF.pop()
return r
}
e_[x[11]]={f:m3,j:[],i:[],ti:[x[3],x[8]],ic:[]}
d_[x[12]]={}
d_[x[12]]["3b6bb3ad"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[12]+':3b6bb3ad'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list/uni-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
cs.push("./components/list/uni-list/uni-list.vue.wxml:view:1:62")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/list/uni-list/uni-list.vue.wxml:template:1:136")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[12],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[12],1,194)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[12]]["default"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[12]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list/uni-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oH=e_[x[12]].i
_ai(oH,x[7],e_,x[12],1,1)
oH.pop()
return r
}
e_[x[12]]={f:m4,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[13]]={}
d_[x[13]]["2241d2a0"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[13]+':2241d2a0'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-icon/m-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[13]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["7dcb1efb"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[14]+':7dcb1efb'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-input.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
cs.push("./components/m-input.vue.wxml:view:1:78")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:1:427")
var fE=_v()
_(xC,fE)
cs.push("./components/m-input.vue.wxml:template:1:521")
var cF=_oz(z,8,e,s,gg)
var hG=_gd(x[14],cF,e_,d_)
if(hG){
var oH=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[14],1,706)
cs.pop()
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
cs.push("./components/m-input.vue.wxml:view:1:736")
var cI=_v()
_(oD,cI)
cs.push("./components/m-input.vue.wxml:template:1:803")
var oJ=_oz(z,16,e,s,gg)
var lK=_gd(x[14],oJ,e_,d_)
if(lK){
var aL=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[14],1,970)
cs.pop()
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lK=e_[x[14]].i
_ai(lK,x[6],e_,x[14],1,1)
lK.pop()
return r
}
e_[x[14]]={f:m6,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[15]]={}
d_[x[15]]["53499e7e"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[15]+':53499e7e'
r.wxVkey=b
gg.f=$gdc(f_["./components/mpvue-echarts/src/echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/mpvue-echarts/src/echarts.vue.wxml:canvas:1:27")
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[15]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["ab7aaa6c"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[16]+':ab7aaa6c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/inputPage.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[16]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bO=e_[x[17]].i
_ai(bO,x[18],e_,x[17],1,1)
var oP=_v()
_(r,oP)
cs.push("./pages/common/inputPage.wxml:template:2:6")
var xQ=_oz(z,1,e,s,gg)
var oR=_gd(x[17],xQ,e_,d_)
if(oR){
var fS=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[17],2,18)
cs.pop()
bO.pop()
return r
}
e_[x[17]]={f:m9,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["4ef7e761"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[19]+':4ef7e761'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/diyHost.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/login/diyHost.vue.wxml:template:1:247")
var xC=_oz(z,5,e,s,gg)
var oD=_gd(x[19],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[19],1,471)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var hU=e_[x[19]].i
_ai(hU,x[4],e_,x[19],1,1)
hU.pop()
return r
}
e_[x[19]]={f:m10,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[20]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cW=e_[x[20]].i
_ai(cW,x[21],e_,x[20],1,1)
var oX=_v()
_(r,oX)
cs.push("./pages/login/diyHost.wxml:template:2:6")
var lY=_oz(z,1,e,s,gg)
var aZ=_gd(x[20],lY,e_,d_)
if(aZ){
var t1=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[20],2,18)
cs.pop()
cW.pop()
return r
}
e_[x[20]]={f:m11,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["2d8d4fae"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[22]+':2d8d4fae'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
cs.push("./pages/login/login.vue.wxml:view:1:72")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/login/login.vue.wxml:view:1:109")
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./pages/login/login.vue.wxml:template:1:247")
var cF=_oz(z,7,e,s,gg)
var hG=_gd(x[22],cF,e_,d_)
if(hG){
var oH=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[22],1,474)
cs.pop()
var cI=_v()
_(oD,cI)
cs.push("./pages/login/login.vue.wxml:template:1:594")
var oJ=_oz(z,15,e,s,gg)
var lK=_gd(x[22],oJ,e_,d_)
if(lK){
var aL=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[22],1,822)
cs.pop()
cs.pop()
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,19,e,s,gg)){xC.wxVkey=1
cs.push("./pages/login/login.vue.wxml:view:1:1290")
cs.pop()
}
xC.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var b3=e_[x[22]].i
_ai(b3,x[4],e_,x[22],1,1)
b3.pop()
return r
}
e_[x[22]]={f:m12,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[23]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var x5=e_[x[23]].i
_ai(x5,x[24],e_,x[23],1,1)
var o6=_v()
_(r,o6)
cs.push("./pages/login/login.wxml:template:2:6")
var f7=_oz(z,1,e,s,gg)
var c8=_gd(x[23],f7,e_,d_)
if(c8){
var h9=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o6.wxXCkey=3
c8(h9,h9,o6,gg)
gg.f=cur_globalf
}
else _w(f7,x[23],2,18)
cs.pop()
x5.pop()
return r
}
e_[x[23]]={f:m13,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["00cb397a"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[25]+':00cb397a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main/main.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[25]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oBB=e_[x[26]].i
_ai(oBB,x[27],e_,x[26],1,1)
var lCB=_v()
_(r,lCB)
cs.push("./pages/main/main.wxml:template:2:6")
var aDB=_oz(z,1,e,s,gg)
var tEB=_gd(x[26],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[26],2,18)
cs.pop()
oBB.pop()
return r
}
e_[x[26]]={f:m15,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["47b16668"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[28]+':47b16668'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/chartList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/mpvue-echarts/chartList.vue.wxml:template:1:194")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[28],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[28],1,309)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oHB=e_[x[28]].i
_ai(oHB,x[1],e_,x[28],1,1)
_ai(oHB,x[2],e_,x[28],1,61)
oHB.pop()
oHB.pop()
return r
}
e_[x[28]]={f:m16,j:[],i:[],ti:[x[1],x[2]],ic:[]}
d_[x[29]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oJB=e_[x[29]].i
_ai(oJB,x[30],e_,x[29],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/mpvue-echarts/chartList.wxml:template:2:6")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[29],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[29],2,18)
cs.pop()
oJB.pop()
return r
}
e_[x[29]]={f:m17,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["00eed4f4"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[31]+':00eed4f4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/deviceChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[31]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var lQB=e_[x[32]].i
_ai(lQB,x[33],e_,x[32],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/mpvue-echarts/deviceChart.wxml:template:2:6")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[32],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[32],2,18)
cs.pop()
lQB.pop()
return r
}
e_[x[32]]={f:m19,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["7e389618"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[34]+':7e389618'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/eventChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[34]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oXB=e_[x[35]].i
_ai(oXB,x[36],e_,x[35],1,1)
var fYB=_v()
_(r,fYB)
cs.push("./pages/mpvue-echarts/eventChart.wxml:template:2:6")
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[35],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[35],2,18)
cs.pop()
oXB.pop()
return r
}
e_[x[35]]={f:m21,j:[],i:[],ti:[x[36]],ic:[]}
d_[x[37]]={}
d_[x[37]]["18e9acfc"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[37]+':18e9acfc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/mpvue-echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[37]);return}
p_[b]=true
try{
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:view:1:90")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:template:1:446")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[37],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[37],1,547)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:template:1:674")
var oH=_oz(z,8,e,s,gg)
var cI=_gd(x[37],oH,e_,d_)
if(cI){
var oJ=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[37],1,777)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var o4B=e_[x[37]].i
_ai(o4B,x[5],e_,x[37],1,1)
o4B.pop()
return r
}
e_[x[37]]={f:m22,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[38]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var a6B=e_[x[38]].i
_ai(a6B,x[39],e_,x[38],1,1)
var t7B=_v()
_(r,t7B)
cs.push("./pages/mpvue-echarts/mpvue-echarts.wxml:template:2:6")
var e8B=_oz(z,1,e,s,gg)
var b9B=_gd(x[38],e8B,e_,d_)
if(b9B){
var o0B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
t7B.wxXCkey=3
b9B(o0B,o0B,t7B,gg)
gg.f=cur_globalf
}
else _w(e8B,x[38],2,18)
cs.pop()
a6B.pop()
return r
}
e_[x[38]]={f:m23,j:[],i:[],ti:[x[39]],ic:[]}
d_[x[40]]={}
d_[x[40]]["1b853e3c"]=function(e,s,r,gg){
var z=gz$gwx_25()
var b=x[40]+':1b853e3c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/valveChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[40]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[40]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var fCC=e_[x[41]].i
_ai(fCC,x[42],e_,x[41],1,1)
var cDC=_v()
_(r,cDC)
cs.push("./pages/mpvue-echarts/valveChart.wxml:template:2:6")
var hEC=_oz(z,1,e,s,gg)
var oFC=_gd(x[41],hEC,e_,d_)
if(oFC){
var cGC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cDC.wxXCkey=3
oFC(cGC,cGC,cDC,gg)
gg.f=cur_globalf
}
else _w(hEC,x[41],2,18)
cs.pop()
fCC.pop()
return r
}
e_[x[41]]={f:m25,j:[],i:[],ti:[x[42]],ic:[]}
d_[x[43]]={}
d_[x[43]]["7be27b0c"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[43]+':7be27b0c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointAdd/pointAdd.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[43]);return}
p_[b]=true
try{
cs.push("./pages/pointAdd/pointAdd.vue.wxml:view:1:217")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:405")
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[43],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[43],1,520)
cs.pop()
cs.push("./pages/pointAdd/pointAdd.vue.wxml:view:1:550")
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:704")
var cI=_oz(z,7,e,s,gg)
var oJ=_gd(x[43],cI,e_,d_)
if(oJ){
var lK=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[43],1,824)
cs.pop()
var aL=_v()
_(hG,aL)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:900")
var tM=_oz(z,12,e,s,gg)
var eN=_gd(x[43],tM,e_,d_)
if(eN){
var bO=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[43],1,1016)
cs.pop()
var oP=_v()
_(hG,oP)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:1092")
var xQ=_oz(z,17,e,s,gg)
var oR=_gd(x[43],xQ,e_,d_)
if(oR){
var fS=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[43],1,1202)
cs.pop()
cs.pop()
_(oB,hG)
var cT=_v()
_(oB,cT)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:1274")
var hU=_oz(z,21,e,s,gg)
var oV=_gd(x[43],hU,e_,d_)
if(oV){
var cW=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[43],1,1391)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var lIC=e_[x[43]].i
_ai(lIC,x[1],e_,x[43],1,1)
_ai(lIC,x[2],e_,x[43],1,61)
_ai(lIC,x[3],e_,x[43],1,131)
lIC.pop()
lIC.pop()
lIC.pop()
return r
}
e_[x[43]]={f:m26,j:[],i:[],ti:[x[1],x[2],x[3]],ic:[]}
d_[x[44]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var tKC=e_[x[44]].i
_ai(tKC,x[45],e_,x[44],1,1)
var eLC=_v()
_(r,eLC)
cs.push("./pages/pointAdd/pointAdd.wxml:template:2:6")
var bMC=_oz(z,1,e,s,gg)
var oNC=_gd(x[44],bMC,e_,d_)
if(oNC){
var xOC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eLC.wxXCkey=3
oNC(xOC,xOC,eLC,gg)
gg.f=cur_globalf
}
else _w(bMC,x[44],2,18)
cs.pop()
tKC.pop()
return r
}
e_[x[44]]={f:m27,j:[],i:[],ti:[x[45]],ic:[]}
d_[x[46]]={}
d_[x[46]]["4bd08622"]=function(e,s,r,gg){
var z=gz$gwx_29()
var b=x[46]+':4bd08622'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointAdd/pointCheckInfo.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/pointAdd/pointCheckInfo.vue.wxml:template:1:346")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[46],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[46],1,461)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var fQC=e_[x[46]].i
_ai(fQC,x[1],e_,x[46],1,1)
_ai(fQC,x[2],e_,x[46],1,61)
fQC.pop()
fQC.pop()
return r
}
e_[x[46]]={f:m28,j:[],i:[],ti:[x[1],x[2]],ic:[]}
d_[x[47]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var hSC=e_[x[47]].i
_ai(hSC,x[48],e_,x[47],1,1)
var oTC=_v()
_(r,oTC)
cs.push("./pages/pointAdd/pointCheckInfo.wxml:template:2:6")
var cUC=_oz(z,1,e,s,gg)
var oVC=_gd(x[47],cUC,e_,d_)
if(oVC){
var lWC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTC.wxXCkey=3
oVC(lWC,lWC,oTC,gg)
gg.f=cur_globalf
}
else _w(cUC,x[47],2,18)
cs.pop()
hSC.pop()
return r
}
e_[x[47]]={f:m29,j:[],i:[],ti:[x[48]],ic:[]}
d_[x[49]]={}
d_[x[49]]["10bbdf1a"]=function(e,s,r,gg){
var z=gz$gwx_31()
var b=x[49]+':10bbdf1a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointCheck/pointCheck.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[49]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[49]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var eZC=e_[x[50]].i
_ai(eZC,x[51],e_,x[50],1,1)
var b1C=_v()
_(r,b1C)
cs.push("./pages/pointCheck/pointCheck.wxml:template:2:6")
var o2C=_oz(z,1,e,s,gg)
var x3C=_gd(x[50],o2C,e_,d_)
if(x3C){
var o4C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b1C.wxXCkey=3
x3C(o4C,o4C,b1C,gg)
gg.f=cur_globalf
}
else _w(o2C,x[50],2,18)
cs.pop()
eZC.pop()
return r
}
e_[x[50]]={f:m31,j:[],i:[],ti:[x[51]],ic:[]}
d_[x[52]]={}
d_[x[52]]["21b694de"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[52]+':21b694de'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointDetail/pointDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[52]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[52]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var h7C=e_[x[53]].i
_ai(h7C,x[54],e_,x[53],1,1)
var o8C=_v()
_(r,o8C)
cs.push("./pages/pointDetail/pointDetail.wxml:template:2:6")
var c9C=_oz(z,1,e,s,gg)
var o0C=_gd(x[53],c9C,e_,d_)
if(o0C){
var lAD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o8C.wxXCkey=3
o0C(lAD,lAD,o8C,gg)
gg.f=cur_globalf
}
else _w(c9C,x[53],2,18)
cs.pop()
h7C.pop()
return r
}
e_[x[53]]={f:m33,j:[],i:[],ti:[x[54]],ic:[]}
d_[x[55]]={}
d_[x[55]]["6cbf6956"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[55]+':6cbf6956'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pwd/pwd.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[55]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/pwd/pwd.vue.wxml:template:1:240")
var xC=_oz(z,5,e,s,gg)
var oD=_gd(x[55],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[55],1,465)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var tCD=e_[x[55]].i
_ai(tCD,x[4],e_,x[55],1,1)
tCD.pop()
return r
}
e_[x[55]]={f:m34,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[56]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var bED=e_[x[56]].i
_ai(bED,x[57],e_,x[56],1,1)
var oFD=_v()
_(r,oFD)
cs.push("./pages/pwd/pwd.wxml:template:2:6")
var xGD=_oz(z,1,e,s,gg)
var oHD=_gd(x[56],xGD,e_,d_)
if(oHD){
var fID=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oFD.wxXCkey=3
oHD(fID,fID,oFD,gg)
gg.f=cur_globalf
}
else _w(xGD,x[56],2,18)
cs.pop()
bED.pop()
return r
}
e_[x[56]]={f:m35,j:[],i:[],ti:[x[57]],ic:[]}
d_[x[58]]={}
d_[x[58]]["90021ef8"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[58]+':90021ef8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/reg/reg.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[58]);return}
p_[b]=true
try{
cs.push("./pages/reg/reg.vue.wxml:view:1:109")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/reg/reg.vue.wxml:template:1:247")
var oD=_oz(z,6,e,s,gg)
var fE=_gd(x[58],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[58],1,474)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/reg/reg.vue.wxml:template:1:601")
var oH=_oz(z,14,e,s,gg)
var cI=_gd(x[58],oH,e_,d_)
if(cI){
var oJ=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[58],1,829)
cs.pop()
var lK=_v()
_(oB,lK)
cs.push("./pages/reg/reg.vue.wxml:template:1:949")
var aL=_oz(z,22,e,s,gg)
var tM=_gd(x[58],aL,e_,d_)
if(tM){
var eN=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[58],1,1168)
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var hKD=e_[x[58]].i
_ai(hKD,x[4],e_,x[58],1,1)
hKD.pop()
return r
}
e_[x[58]]={f:m36,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[59]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cMD=e_[x[59]].i
_ai(cMD,x[60],e_,x[59],1,1)
var oND=_v()
_(r,oND)
cs.push("./pages/reg/reg.wxml:template:2:6")
var lOD=_oz(z,1,e,s,gg)
var aPD=_gd(x[59],lOD,e_,d_)
if(aPD){
var tQD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oND.wxXCkey=3
aPD(tQD,tQD,oND,gg)
gg.f=cur_globalf
}
else _w(lOD,x[59],2,18)
cs.pop()
cMD.pop()
return r
}
e_[x[59]]={f:m37,j:[],i:[],ti:[x[60]],ic:[]}
d_[x[61]]={}
d_[x[61]]["240234ba"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[61]+':240234ba'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[61]);return}
p_[b]=true
try{
cs.push("./pages/user/user.vue.wxml:view:1:64")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/user/user.vue.wxml:button:1:101")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/user/user.vue.wxml:button:1:269")
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[61]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var oTD=e_[x[62]].i
_ai(oTD,x[63],e_,x[62],1,1)
var xUD=_v()
_(r,xUD)
cs.push("./pages/user/user.wxml:template:2:6")
var oVD=_oz(z,1,e,s,gg)
var fWD=_gd(x[62],oVD,e_,d_)
if(fWD){
var cXD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xUD.wxXCkey=3
fWD(cXD,cXD,xUD,gg)
gg.f=cur_globalf
}
else _w(oVD,x[62],2,18)
cs.pop()
oTD.pop()
return r
}
e_[x[62]]={f:m39,j:[],i:[],ti:[x[63]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/main/main","pages/login/login","pages/login/diyHost","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/pointCheck/pointCheck","pages/pointDetail/pointDetail","pages/pointAdd/pointAdd","pages/pointAdd/pointCheckInfo","pages/mpvue-echarts/chartList","pages/mpvue-echarts/deviceChart","pages/mpvue-echarts/eventChart","pages/mpvue-echarts/valveChart","pages/mpvue-echarts/mpvue-echarts","pages/common/inputPage"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2D68AA","backgroundColor":"#fbf9fe"},"usingComponents":{},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/pointCheck/pointCheck","text":"检查记录","iconPath":"static/img/point.png","selectedIconPath":"static/img/pointHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"networkTimeout":{"request":60000},"nvue":{"pages":{"pages/uni-tabs/uni-tabs.html":{"window":{"navigationBarTitleText":"点位检查11"}},"pages/pointList/uni-tabs.html":{"window":{"navigationBarTitleText":"点位检查"}}}},"splashscreen":{"autoclose":true},"appname":"移动安全管家"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0edc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("f3d3")),o=r(n("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}u.default.use(o.default);var a=new o.default.Store({state:{forcedLogin:!0,hasLogin:!1,userName:"",userInfo:null,inputPageText:"",key:"",sublistItem:null,sublistIndex:0},mutations:{login:function(e,t){null!=t&&(e.userName=t.username||"新用户",e.hasLogin=!0,e.userInfo=t)},logout:function(e){e.userName="",e.hasLogin=!1},setInputPageText:function(e,t){e.inputPageText=t.text,e.key=t.key},setSublistItem:function(e,t){e.sublistItem=t.item,e.sublistIndex=t.index}}}),l=a;t.default=l},"3d4d":function(e,t,n){"use strict";n.r(t);var u=n("c8ea");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("90c6");var r,a,l=n("2877"),i=Object(l["a"])(u["default"],r,a,!1,null,null,null);i.options.__file="App.vue",t["default"]=i.exports},"3d76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=u},"90c6":function(e,t,n){"use strict";var u=n("9120"),o=n.n(u);o.a},9120:function(e,t,n){},adb8:function(e,t,n){"use strict";n("de83");var u=a(n("f3d3")),o=a(n("3d4d")),r=a(n("0edc"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}u.default.config.productionTip=!1,u.default.prototype.$store=r.default,o.default.mpType="app";var f=new u.default(l({store:r.default},o.default));f.$mount()},c8ea:function(e,t,n){"use strict";n.r(t);var u=n("3d76"),o=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=o.a}},[["adb8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"02a1":function(t,e,n){"use strict";n.r(e);var r=n("e6d6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"07fa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("ba08")),o=i(n("3ad2"));function i(t){return t&&t.__esModule?t:{default:t}}var a={name:"uni-list-item",components:{uniIcon:r.default,uniBadge:o.default},data:function(){return{}},props:{title:String,note:String,disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:String,badgeType:{type:String,default:"success"},thumb:String,showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:"20"}}}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(t){this.$emit("switchChange",t.detail)}}};e.default=a},"14e4":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-list"},[t._t("default",null,{mpcomid:"3b6bb3ad-0"})],2)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"17f7":function(t,e,n){"use strict";var r="http://222.223.19.166:10012/boeb9",o={host:r,login:"".concat(r,"/mobile/system/login.do"),scan:"".concat(r,"/mobile/dwsm.do"),createCheckPoint:"".concat(r,"/mobile/updateJcjl.do")};t.exports=o},"196b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},"20aa":function(t,e,n){},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"2b62":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-icon",class:["m-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"2241d2a0-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"2d25":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("text",{staticClass:"uni-badge",class:t.setClass,attrs:{eventid:"68dcfa4a-0"},on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return k}),n.d(e,"mapState",function(){return j}),n.d(e,"mapMutations",function(){return P}),n.d(e,"mapGetters",function(){return E}),n.d(e,"mapActions",function(){return T}),n.d(e,"createNamespacedHelpers",function(){return I});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,f);var l=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;p(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){p([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new u(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&k(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=r,g(this,o,[],this._modules.root),_(this,o),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;g(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&A(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function g(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=C(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){d.set(s,c,r.state)})}var u=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;$(t,r,e,u)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;x(t,r,o,u)}),r.forEachGetter(function(e,n){var r=a+n;O(t,r,e,u)}),r.forEachChild(function(r,i){g(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=S(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=S(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return C(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function $(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function x(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function A(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function C(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function S(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function k(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=S(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=S(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return y(t,this._subscribers)},h.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),g(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=C(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),m(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var j=D(function(t,e){var n={};return M(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=N(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),P=D(function(t,e){var n={};return M(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=N(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),E=D(function(t,e){var n={};return M(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||N(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),T=D(function(t,e){var n={};return M(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=N(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),I=function(t){return{mapState:j.bind(null,t),mapGetters:E.bind(null,t),mapMutations:P.bind(null,t),mapActions:T.bind(null,t)}};function M(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function D(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){var r=t._modulesNamespaceMap[n];return r}var B={Store:h,install:k,version:"3.0.1",mapState:j,mapMutations:P,mapGetters:E,mapActions:T,createNamespacedHelpers:I};e["default"]=B},"31cc":function(t,e,n){"use strict";var r=n("58b9"),o=n.n(r);o.a},"34fc":function(t,e,n){"use strict";var r=n("c89d"),o=n.n(r);o.a},3731:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(e,n,r,o,i,a){""!=r&&t.showLoading({title:r}),console.log("request.js :"+e),t.request({url:e,data:n,header:{"Content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){""!=r&&t.hideLoading(),"true"==e.data.success?o(e.data):i()},fail:function(e){""!=r&&t.hideLoading(),i()},complete:function(){""!=r&&t.hideLoading(),a()}})},r=function(e,n,r,o){t.request({url:e,header:{"Content-type":"application/x-www-form-urlencoded"},method:"GET",success:function(t){"true"==t.success?r(t.data):o()},fail:function(t){o()}})},o={request:r,requestLoading:n};e.default=o}).call(this,n("649d")["default"])},"3ad2":function(t,e,n){"use strict";n.r(e);var r=n("2d25"),o=n("4c10");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("6aa1");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="uni-badge.vue",e["default"]=s.exports},"3bd6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var t=Number(this.size);return t=isNaN(t)?24:t,"".concat(t,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},"43a0":function(t,e,n){"use strict";n.r(e);var r=n("6592"),o=n("63bc");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("34fc");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="m-input.vue",e["default"]=s.exports},"4b9c":function(t,e,n){"use strict";n.r(e);var r=n("92c8"),o=n("c0c8");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("e56c");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="uni-list-item.vue",e["default"]=s.exports},"4c10":function(t,e,n){"use strict";n.r(e);var r=n("7bd0"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"514d":function(t,e,n){"use strict";n.r(e);var r=n("2b62"),o=n("a4c8");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("31cc");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="m-icon.vue",e["default"]=s.exports},"58b9":function(t,e,n){},"59a9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USERS_KEY",r=function(){var e="";return e=t.getStorageSync(n),e?JSON.parse(e):null},o=function(e){t.setStorageSync(n,JSON.stringify(e))},i=function(t){var e={};return e=JSON.parse(JSON.stringify(t)),e},a={getUsers:r,addUser:o,copyObj:i};e.default=a}).call(this,n("649d")["default"])},"63bc":function(t,e,n){"use strict";n.r(e);var r=n("b588"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"649d":function(t,e,n){"use strict";n.r(e);var r=function(t){return"function"===typeof t},o=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},i=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!i.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},c=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(a.success)||r(a.fail)||r(a.complete)?t.apply(void 0,[a].concat(n)):o(new Promise(function(e,r){t.apply(void 0,[Object.assign({},a,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,f=750,l=!1,p=0,d=0;function h(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;p=r,d=n,l="ios"===e}function v(t,e){return 0===p&&h(),0===t?0:(t=t/f*(e||p),t=Math.floor(t+u),0===t?1!==d&&l?.5:1:t)}function y(t){return __requireNativePlugin__(t)}var m={},_={os:{plus:!0}};"undefined"!==typeof Proxy?m=new Proxy({},{get:function(t,e){return _.hasOwnProperty(e)?_[e]:"upx2px"===e?v:"requireNativePlugin"===e?y:wx.hasOwnProperty(e)?s(e)?c(wx[e]):wx[e]:void 0}}):(m.upx2px=v,m.requireNativePlugin=y,Object.keys(_).forEach(function(t){m[t]=_[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?m[t]=c(wx[t]):m[t]=wx[t])}));var g=m;e["default"]=g},6592:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-input-view"},[n("input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword,eventid:"7dcb1efb-0"},on:{input:t.onInput,focus:t.onFocus,blur:t.onBlur}}),t.clearable_&&!t.displayable_&&t.value.length?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20",eventid:"7dcb1efb-1",mpcomid:"7dcb1efb-0"},on:{click:t.clear}})],1):t._e(),t.displayable_?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20",eventid:"7dcb1efb-2",mpcomid:"7dcb1efb-1"},on:{click:t.display}})],1):t._e()])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"6aa1":function(t,e,n){"use strict";var r=n("eb82"),o=n.n(r);o.a},"72fc":function(t,e,n){"use strict";n.r(e);var r=n("196b"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},"7bd0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},"7c03":function(t,e,n){"use strict";n.r(e);var r=n("14e4"),o=n("02a1");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("e0fa");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="uni-list.vue",e["default"]=s.exports},"92c8":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-list-cell",class:[!0===t.disabled||"true"===t.disabled?"uni-list-cell--disabled":""],attrs:{"hover-class":!0===t.disabled||"true"===t.disabled||!0===t.showSwitch||"true"===t.showSwitch?"":"uni-list-cell--hover",eventid:"30c48a99-1"},on:{click:t.onClick}},[n("view",{staticClass:"uni-list-cell__container"},[t.thumb?n("view",{staticClass:"uni-list-cell__icon"},[n("image",{staticClass:"uni-list-cell__icon-img",attrs:{src:t.thumb}})]):!0===t.showExtraIcon||"true"===t.showExtraIcon?n("view",{staticClass:"uni-list-cell__icon"},[n("uni-icon",{attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type,mpcomid:"30c48a99-0"}})],1):t._e(),n("view",{staticClass:"uni-list-cell__content"},[n("view",{staticClass:"uni-list-cell__content-title"},[t._v(t._s(t.title))]),t.note?n("view",{staticClass:"uni-list-cell__content-note"},[t._v(t._s(t.note))]):t._e()]),!0===t.showBadge||"true"===t.showBadge||!0===t.showArrow||"true"===t.showArrow||!0===t.showSwitch||"true"===t.showSwitch?n("view",{staticClass:"uni-list-cell__extra"},[!0===t.showBadge||"true"===t.showBadge?n("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText,mpcomid:"30c48a99-1"}}):t._e(),!0===t.showSwitch||"true"===t.showSwitch?n("switch",{attrs:{disabled:t.disabled,checked:t.switchChecked,eventid:"30c48a99-0"},on:{change:t.onSwitchChange}}):t._e(),!0===t.showArrow||"true"===t.showArrow?n("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowright",mpcomid:"30c48a99-2"}}):t._e()],1):t._e()])])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},a4c8:function(t,e,n){"use strict";n.r(e);var r=n("3bd6"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b39f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"346bda0d-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},b588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("514d"));function o(t){return t&&t.__esModule?t:{default:t}}var i={components:{mIcon:r.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick(function(){t.isFocus=!1})},onInput:function(t){this.$emit("input",t.target.value)}}};e.default=i},ba08:function(t,e,n){"use strict";n.r(e);var r=n("b39f"),o=n("72fc");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("c5d5");var a=n("2877"),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);s.options.__file="uni-icon.vue",e["default"]=s.exports},c0c8:function(t,e,n){"use strict";n.r(e);var r=n("07fa"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},c5d5:function(t,e,n){"use strict";var r=n("20aa"),o=n.n(r);o.a},c89d:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},de83:function(t,e,n){},e0fa:function(t,e,n){"use strict";var r=n("f280"),o=n.n(r);o.a},e56c:function(t,e,n){"use strict";var r=n("ec79"),o=n.n(r);o.a},e6d6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-list"};e.default=r},eb82:function(t,e,n){},ec79:function(t,e,n){},f280:function(t,e,n){},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,l=c.length;f<l&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function l(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var m=y("key,ref,slot,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function b(t,e){return g.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,x=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),O=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/([^-])([A-Z])/g,C=w(function(t){return t.replace(A,"$1-$2").replace(A,"$1-$2").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function P(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function E(t,e,n){}var T=function(t,e,n){return!1},I=function(t){return t};function M(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function D(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B="data-server-rendered",R=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:T,isReservedAttr:T,isUnknownElement:T,getTagNamespace:E,parsePlatformTagName:I,mustUseProp:T,_lifecycleHooks:L},U=Object.freeze({});function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function F(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function W(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G=E;function q(t,e,n){if(V.errorHandler)V.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var J,K="__proto__"in{},X="undefined"!==typeof window,Y=["mpvue-runtime"].join(),Z=(Y&&/msie|trident/.test(Y),Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),Q=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)),tt=(Y&&/chrome\/\d+/.test(Y),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===J&&(J=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),J},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Q&&setTimeout(E)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){_(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function lt(t){ut.target&&ft.push(ut.target),ut.target=t}function pt(){ut.target=ft.pop()}var dt=Array.prototype,ht=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];F(ht,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(ht),yt={shouldConvert:!0},mt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t)){var e=K?_t:gt;e(t,ht,vt),this.observeArray(t)}else this.walk(t)};function _t(t,e,n){t.__proto__=e}function gt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];F(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof mt?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new mt(t)),e&&n&&n.vmCount++,n}function wt(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&Ot(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&bt(e),i.notify())}})}}function $t(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(wt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ot(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ot(e)}mt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)wt(t,e[n],t[e[n]])},mt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var At=V.optionMergeStrategies;function Ct(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?l(r)&&l(o)&&Ct(r,o):$t(t,n,o);return t}function St(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?Ct(r,o):o}:void 0:e?t?function(){return Ct("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function kt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function jt(t,e){var n=Object.create(t||null);return e?j(n,e):n}At.data=function(t,e,n){return n?St(t,e,n):e&&"function"!==typeof e?t:St.call(this,t,e)},L.forEach(function(t){At[t]=kt}),R.forEach(function(t){At[t+"s"]=jt}),At.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in j(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},At.props=At.methods=At.inject=At.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return j(n,t),j(n,e),n},At.provide=St;var Pt=function(t,e){return void 0===e?t:e};function Et(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(l(e))for(var a in e)r=e[a],o=x(a),i[o]=l(r)?r:{type:r};t.props=i}}function Tt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function It(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Mt(t,e,n){"function"===typeof e&&(e=e.options),Et(e),Tt(e),It(e);var r=e.extends;if(r&&(t=Mt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Mt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=At[r]||Pt;s[r]=o(t[r],e[r],n,r)}return s}function Dt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=O(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Nt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Lt(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Lt(String,o.type)||""!==a&&a!==C(t)||(a=!0)),void 0===a){a=Bt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Bt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Rt(e.type)?r.call(t):r}}function Rt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Lt(t,e){if(!Array.isArray(e))return Rt(e)===Rt(t);for(var n=0,r=e.length;n<r;n++)if(Rt(e[n])===Rt(t))return!0;return!1}var Vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ut={child:{}};Ut.child.get=function(){return this.componentInstance},Object.defineProperties(Vt.prototype,Ut);var zt=function(t){void 0===t&&(t="");var e=new Vt;return e.text=t,e.isComment=!0,e};function Ft(t){return new Vt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Vt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Wt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Gt,qt=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Jt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Jt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=C(u);Yt(a,c,u,f,!0)||Yt(a,s,u,f,!1)}return a}}function Yt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Zt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Qt(t){return c(t)?[Ft(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Ft(r)):te(r)&&te(s)?u[u.length-1]=Ft(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=zt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=N(function(n){t.resolved=ne(n,e),s||c()}),l=N(function(e){i(t.errorComp)&&(t.error=!0,c())}),p=t(f,l);return u(p)&&("function"===typeof p.then?o(t.resolved)&&p.then(f,l):i(p.component)&&"function"===typeof p.component.then&&(p.component.then(f,l),i(p.error)&&(t.errorComp=ne(p.error,e)),i(p.loading)&&(t.loadingComp=ne(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},p.delay||200)),i(p.timeout)&&setTimeout(function(){o(t.resolved)&&l(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Gt.$once(t,e):Gt.$on(t,e)}function ce(t,e){Gt.$off(t,e)}function ue(t,e,n){Gt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?k(r):r;for(var o=k(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function le(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(pe)||(n.default=r),n}function pe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var he=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&$e(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=he;he=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),he=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$e(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$e(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function me(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=zt),$e(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Ne(t,r,E),n=!1,null==t.$vnode&&(t._isMounted=!0,$e(t,"mounted")),t}function _e(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==U);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Nt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=le(o,r.context),t.$forceUpdate())}function ge(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,ge(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);$e(t,"activated")}}function we(t,e){if((!e||(t._directInactive=!0,!ge(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);$e(t,"deactivated")}}function $e(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Oe=[],Ae={},Ce=!1,Se=!1,ke=0;function je(){ke=xe.length=Oe.length=0,Ae={},Ce=Se=!1}function Pe(){var t,e;for(Se=!0,xe.sort(function(t,e){return t.id-e.id}),ke=0;ke<xe.length;ke++)t=xe[ke],e=t.id,Ae[e]=null,t.run();var n=Oe.slice(),r=xe.slice();je(),Ie(n),Ee(r),rt&&V.devtools&&rt.emit("flush")}function Ee(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&$e(r,"updated")}}function Te(t){t._inactive=!1,Oe.push(t)}function Ie(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Me(t){var e=t.id;if(null==Ae[e]){if(Ae[e]=!0,Se){var n=xe.length-1;while(n>ke&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);Ce||(Ce=!0,st(Pe))}}var De=0,Ne=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ne.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Re(t),pt(),this.cleanupDeps()}return t},Ne.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ne.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ne.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Me(this)},Ne.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ne.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ne.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Ne.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Be=new it;function Re(t){Be.clear(),Le(t,Be)}function Le(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Le(t[r[n]],e)}}}var Ve={enumerable:!0,configurable:!0,get:E,set:E};function Ue(t,e,n){Ve.get=function(){return this[e][n]},Ve.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ve)}function ze(t){t._watchers=[];var e=t.$options;e.props&&Fe(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):bt(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ye(t,e.watch)}function Fe(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Nt(i,e,n,t);wt(r,i,a),i in t||Ue(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?We(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||z(i)||Ue(t,"_data",i)}bt(e,!0)}function We(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Ge={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Ne(t,i,E,Ge),r in t||Je(t,r,o)}}function Je(t,e,n){"function"===typeof n?(Ve.get=Ke(e),Ve.set=E):(Ve.get=n.get?!1!==n.cache?Ke(e):n.get:E,Ve.set=n.set?n.set:E),Object.defineProperty(t,e,Ve)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?E:S(e[n],t)}function Ye(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Ze(t,n,r[o]);else Ze(t,n,r)}}function Ze(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Qe(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=$t,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return Ze(r,t,e,n);n=n||{},n.user=!0;var o=new Ne(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){wt(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Nt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},l=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return le(o,r)}});return l instanceof Vt&&(l.functionalContext=r,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,he,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;_e(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,$e(n,"mounted")),t.data.keepAlive&&(e._isMounted?Te(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?we(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},In(t),i(e.model)&&pn(t.options,e);var l=Xt(e,t,s);if(a(t.options.functional))return rn(t,l,e,n,r);var p=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}fn(e);var h=t.options.name||s,v=new Vt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?ln(o,r):o}}function ln(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function pn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var dn=1,hn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=hn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return zt();if(i(n)&&i(n.is)&&(e=n.is),!e)return zt();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hn?r=Qt(r):o===dn&&(r=Zt(r)),"string"===typeof e)?(s=V.getTagNamespace(e),a=V.isReservedTag(e)?new Vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Dt(t.$options,"components",e))?cn(c,n,t,r,e):new Vt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&mn(a,s),a):zt()}function mn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&mn(a,e)}}function _n(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function gn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=j(j({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Dt(this.$options,"filters",t,!0)||I}function wn(t,e,n){var r=V.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function $n(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=P(n));var a=function(a){if("class"===a||"style"===a||m(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Wt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),An(n,"__static__"+t,!1),n)}function On(t,e,n){return An(t,"__once__"+e+(n?"_"+n:""),!0),t}function An(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Cn(t[r],e+"_"+r,n);else Cn(t,e,n)}function Cn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Sn(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function kn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=le(t.$options._renderChildren,n),t.$scopedSlots=U,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;wt(t,"$attrs",r&&r.attrs,null,!0),wt(t,"$listeners",r&&r.on,null,!0)}function jn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Wt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||U,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Vt||(t=zt()),t.parent=a,t},t.prototype._o=On,t.prototype._n=v,t.prototype._s=h,t.prototype._l=_n,t.prototype._t=gn,t.prototype._q=M,t.prototype._i=D,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=wn,t.prototype._b=$n,t.prototype._v=Ft,t.prototype._e=zt,t.prototype._u=de,t.prototype._g=Sn}var Pn=0;function En(t){t.prototype._init=function(t){var e=this;e._uid=Pn++,e._isVue=!0,t&&t._isComponent?Tn(e,t):e.$options=Mt(In(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),kn(e),$e(e,"beforeCreate"),en(e),ze(e),tn(e),$e(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Tn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function In(t){var e=t.options;if(t.super){var n=In(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Mn(t);o&&j(t.extendOptions,o),e=t.options=Mt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Mn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Dn(n[i],r[i],o[i]));return e}function Dn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Nn(t){this._init(t)}function Bn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Rn(t){t.mixin=function(t){return this.options=Mt(this.options,t),this}}function Ln(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Mt(n.options,t),a["super"]=n,a.options.props&&Vn(a),a.options.computed&&Un(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,R.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function Vn(t){var e=t.options.props;for(var n in e)Ue(t.prototype,"_props",n)}function Un(t){var e=t.options.computed;for(var n in e)Je(t.prototype,n,e[n])}function zn(t){R.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}En(Nn),Qe(Nn),fe(Nn),ye(Nn),jn(Nn);var Fn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Wn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Gn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Jn={name:"keep-alive",abstract:!0,props:{include:Fn,exclude:Fn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Gn(this.cache,this._vnode,function(e){return Wn(t,e)})},exclude:function(t){Gn(this.cache,this._vnode,function(e){return!Wn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!Wn(this.include,n)||this.exclude&&Wn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:Jn};function Xn(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:G,extend:j,mergeOptions:Mt,defineReactive:wt},t.set=$t,t.delete=xt,t.nextTick=st,t.options=Object.create(null),R.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,Kn),Bn(t),Rn(t),Ln(t),zn(t)}Xn(Nn),Object.defineProperty(Nn.prototype,"$isServer",{get:nt}),Object.defineProperty(Nn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Nn.version="2.4.1",Nn.mpvueVersion="1.0.12";var Yn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Zn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Qn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function lr(t,e){}function pr(t){return or}function dr(t){return or}function hr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var mr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:lr,parentNode:pr,nextSibling:dr,tagName:hr,setTextContent:vr,setAttribute:yr}),_r={create:function(t,e){gr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(gr(t,!0),gr(e))},destroy:function(t){gr(t,!0)}};function gr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?_(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new Vt("",{},[]),wr=["create","activate","update","remove","destroy"];function $r(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Or(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Ar(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<wr.length;++e)for(r[wr[e]]=[],n=0;n<s.length;++n)i(s[n][wr[e]])&&r[wr[e]].push(s[n][wr[e]]);function f(t){return new Vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function l(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function d(t,e,n,r,o){if(t.isRootInsert=!o,!h(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),$(t),g(t,c,e),i(s)&&w(t,e),_(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),_(n,t.elm,r)):(t.elm=u.createTextNode(t.text),_(n,t.elm,r))}}function h(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&m(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?(w(t,e),$(t)):(gr(t),e.push(t))}function m(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}_(n,t.elm,o)}function _(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function g(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)d(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function w(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function $(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=he)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)d(n[r],i,t,e)}function O(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)O(t.children[n])}function A(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(C(o),O(o)):p(o.elm))}}function C(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=l(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&C(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else p(t.elm)}function S(t,e,n,r,a){var s,c,f,l,p=0,h=0,v=e.length-1,y=e[0],m=e[v],_=n.length-1,g=n[0],b=n[_],w=!a;while(p<=v&&h<=_)o(y)?y=e[++p]:o(m)?m=e[--v]:$r(y,g)?(k(y,g,r),y=e[++p],g=n[++h]):$r(m,b)?(k(m,b,r),m=e[--v],b=n[--_]):$r(y,b)?(k(y,b,r),w&&u.insertBefore(t,y.elm,u.nextSibling(m.elm)),y=e[++p],b=n[--_]):$r(m,g)?(k(m,g,r),w&&u.insertBefore(t,m.elm,y.elm),m=e[--v],g=n[++h]):(o(s)&&(s=Or(e,p,v)),c=i(g.key)?s[g.key]:null,o(c)?(d(g,r,t,y.elm),g=n[++h]):(f=e[c],$r(f,g)?(k(f,g,r),e[c]=void 0,w&&u.insertBefore(t,f.elm,y.elm),g=n[++h]):(d(g,r,t,y.elm),g=n[++h])));p>v?(l=o(n[_+1])?null:n[_+1].elm,x(t,l,n,h,_,r)):h>_&&A(t,e,p,v)}function k(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?E(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;i(l)&&i(f=l.hook)&&i(f=f.prepatch)&&f(t,e);var p=t.children,d=e.children;if(i(l)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=l.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(p)&&i(d)?p!==d&&S(c,p,d,n,s):i(d)?(i(t.text)&&u.setTextContent(c,""),x(c,null,d,0,d.length-1,n)):i(p)?A(c,p,0,p.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(l)&&i(f=l.hook)&&i(f=f.postpatch)&&f(t,e)}}}function j(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var P=y("attrs,style,class,staticClass,staticStyle,key");function E(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,l=0;l<c.length;l++){if(!f||!E(f,c[l],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else g(n,c,r);if(i(s))for(var p in s)if(!P(p)){w(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,l){if(!o(e)){var p=!1,h=[];if(o(t))p=!0,d(e,h,c,l);else{var v=i(t.nodeType);if(!v&&$r(t,e))k(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(B)&&(t.removeAttribute(B),n=!0),a(n)&&E(t,e,h))return j(e,h,!0),t;t=f(t)}var y=t.elm,m=u.parentNode(y);if(d(e,h,y._leaveCb?null:m,u.nextSibling(y)),i(e.parent)){var _=e.parent;while(_)_.elm=e.elm,_=_.parent;if(b(e))for(var g=0;g<r.create.length;++g)r.create[g](br,e.parent)}i(m)?A(m,[t],0,0):i(t.tag)&&O(t)}}return j(e,h,p),e.elm}i(t)&&O(t)}}var Cr=[_r],Sr=Ar({nodeOps:mr,modules:Cr});function kr(){Sr.apply(this,arguments),this.$updateDataToMP()}function jr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return jr(t,e,r)}),o}function Pr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Er(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(l(t))for(var a in t)o=t[a],i=x(a),e[i]=l(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Tr(t){var e=t.$options.properties,n=t.$options.props,r={};return Er(e,r,t),Er(n,r,t),r}function Ir(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ue(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Mr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?jr(this,"onLaunch",o.appOptions):jr(this,"onLoad",o.query),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,jr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,jr(r,"onShow",t)},onHide:function(){o.status="hide",jr(r,"onHide")},onError:function(t){jr(r,"onError",t)},onUniNViewMessage:function(t){jr(r,"onUniNViewMessage",t)}});else if("component"===t)Ir(r),e.Component({properties:Tr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",jr(r,"attached")},ready:function(){o.status="ready",jr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){jr(r,"moved")},detached:function(){o.status="detached",jr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,o.page=this,o.query=t,o.status="load",Pr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),jr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,o.page=this,o.status="show",jr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",jr(r,"onReady"),n()},onHide:function(){o.status="hide",jr(r,"onHide")},onUnload:function(){o.status="unload",jr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){jr(r,"onPullDownRefresh")},onReachBottom:function(){jr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return jr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){jr(r,"onPageScroll",t)},onTabItemTap:function(t){jr(r,"onTabItemTap",t)}})}}function Dr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Nr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Nr(r,e):e):e}function Br(t){var e=Nr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Dr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Rr(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Rr(t,e)}),Object.assign(e,Br(t))}function Lr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var l=Date.now();s||!1!==n.leading||(s=l);var p=e-(l-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],p<=0||p>e?(clearTimeout(a),a=null,s=l,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,p)),i}}var Vr=Lr(function(t,e){t(e)},50);function Ur(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function zr(){var t=Ur(this);if(t){var e=JSON.parse(JSON.stringify(Br(this)));Vr(t.setData.bind(t),r(e,t.data))}}function Fr(){var t=Ur(this);if(t){var e=Rr(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function Wr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(Wr(t,e,n))})}):a.forEach(function(t){r=r.concat(Wr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Gr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:E,preventDefault:E};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],l=Wr(u._vnode,c,f);if(l.length){var p=Gr(t);if(1===l.length){var d=l[0](p);return d}l.forEach(function(t){return t(p)})}}}return Nn.config.mustUseProp=Qn,Nn.config.isReservedTag=Yn,Nn.config.isReservedAttr=Zn,Nn.config.getTagNamespace=tr,Nn.config.isUnknownElement=er,Nn.prototype.__patch__=kr,Nn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return me(n,void 0,void 0)})}return me(this,void 0,void 0)},Nn.prototype._initMP=Mr,Nn.prototype.$updateDataToMP=zr,Nn.prototype._initDataToMP=Fr,Nn.prototype.$handleProxyWithVue=qr,Nn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0071":function(t,e,n){"use strict";n("de83");var i=s(n("b0ce")),a=s(n("e02f"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},"394c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[t._m(0),n("view",{staticClass:"middleView"},[n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-0"},on:{tap:function(e){t.openScan()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/scan.png"}}),n("text",{staticClass:"btnText"},[t._v("添加检查")])]),n("view",{staticClass:"vLine"}),n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-1"},on:{tap:function(e){t.openCharts()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/chart.png"}}),n("text",{staticClass:"btnText"},[t._v("数据统计")])])]),n("view",{staticClass:"hLine"})])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"topView"},[n("text",{staticClass:"topTextTitle"},[t._v("检查总数")]),n("text",{staticClass:"topTextNum"},[t._v("1000条")])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},5822:function(t,e,n){"use strict";n.r(e);var i=n("f1c0"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},9660:function(t,e,n){},"9b87":function(t,e,n){"use strict";var i=n("9660"),a=n.n(i);a.a},e02f:function(t,e,n){"use strict";n.r(e);var i=n("394c"),a=n("5822");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("9b87");var o=n("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);c.options.__file="main.vue",e["default"]=c.exports},f1c0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("59a9")),a=c(n("17f7")),s=c(n("3731")),o=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={computed:(0,o.mapState)(["forcedLogin","hasLogin","userInfo"]),methods:r({},(0,o.mapMutations)(["login"]),{openScan:function(){var e=this;t.scanCode({success:function(n){var i={userid:e.userInfo.userid,dwbh:n.result};s.default.requestLoading(a.default.scan,i,"正在加载",function(e){t.navigateTo({url:"../pointAdd/pointAdd?obj="+JSON.stringify(e)})},function(){t.showToast({icon:"none",title:"请求失败"})},function(){})}})},openCharts:function(){t.navigateTo({url:"../mpvue-echarts/chartList"})}}),onShow:function(){var e=this;this.login(i.default.getUsers()),this.hasLogin||t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(n){n.confirm&&(e.forcedLogin?t.reLaunch({url:"../login/login"}):t.navigateTo({url:"../login/login"}))}})}};e.default=l}).call(this,n("649d")["default"])}},[["0071","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"4d71":function(t,e,n){"use strict";n.r(e);var i=n("890b"),o=n("c81f");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6b8b");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="login.vue",e["default"]=s.exports},6002:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("59a9")),o=u(n("17f7")),a=u(n("3731")),r=n("2f62"),s=u(n("43a0"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={components:{mInput:s.default},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,r.mapState)(["forcedLogin"]),methods:c({},(0,r.mapMutations)(["login"]),{initProvider:function(){var e=this,n=["weixin","qq","sinaweibo"];t.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var i=0;i<t.provider.length;i++)~n.indexOf(t.provider[i])&&e.providerList.push({value:t.provider[i],image:"../../static/img/"+t.provider[i]+".png"});e.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+JSON.stringify(t))}})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){var e=this,n={username:e.account,password:e.password};t.showLoading({title:"正在登录"}),a.default.requestLoading(o.default.login,n,"正在登录",function(n){i.default.addUser(n),e.toMain(n),t.setStorage({key:"userInfo",data:n,success:function(){console.log("用户信息缓存成功")}})},function(){plus.nativeUI.alert("失败")},function(){})},oauth:function(e){var n=this;t.login({provider:e,success:function(i){t.getUserInfo({provider:e,success:function(t){n.toMain(t.userInfo.nickName)}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})},toMain:function(e){this.login(e),this.forcedLogin?t.reLaunch({url:"../main/main"}):t.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}};e.default=d}).call(this,n("649d")["default"])},"6b8b":function(t,e,n){"use strict";var i=n("b06d"),o=n.n(i);o.a},"890b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row border"},[n("text",{staticClass:"title"},[t._v("账号：")]),n("m-input",{staticClass:"m-input",attrs:{type:"text",clearable:"",focus:"",placeholder:"请输入账号",eventid:"2d8d4fae-0",mpcomid:"2d8d4fae-0"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("密码：")]),n("m-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码",eventid:"2d8d4fae-1",mpcomid:"2d8d4fae-1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"2d8d4fae-2"},on:{tap:t.bindLogin}},[t._v("登录")])],1),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"diyHost"}},[t._v("自定义域")]),n("text",[t._v("|")]),n("navigator",{attrs:{url:"../pwd/pwd"}},[t._v("忘记密码")])],1),t.hasProvider?n("view",{staticClass:"oauth-row",style:{top:t.positionTop+"px"}},t._l(t.providerList,function(e,i){return n("view",{key:e.value,staticClass:"oauth-image"},[n("image",{attrs:{src:e.image,eventid:"2d8d4fae-3-"+i},on:{tap:function(n){t.oauth(e.value)}}})])})):t._e()])},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},8928:function(t,e,n){"use strict";n("de83");var i=a(n("b0ce")),o=a(n("4d71"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},b06d:function(t,e,n){},c81f:function(t,e,n){"use strict";n.r(e);var i=n("6002"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["8928","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/diyHost';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/diyHost.js';

define('pages/login/diyHost.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/diyHost"],{"0e7f":function(t,e,n){"use strict";n.r(e);var o=n("a7cb"),a=n("4a7b");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);s.options.__file="diyHost.vue",e["default"]=s.exports},"4a7b":function(t,e,n){"use strict";n.r(e);var o=n("eca9"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},a7cb:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row border"},[n("text",{staticClass:"title"},[t._v("域名：")]),n("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入域名",eventid:"4ef7e761-0",mpcomid:"4ef7e761-0"},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}})],1)]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"4ef7e761-1"},on:{tap:t.testConnect}},[t._v("测试连接")])],1)])},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},cb16:function(t,e,n){"use strict";n("de83");var o=u(n("b0ce")),a=u(n("0e7f"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},eca9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("59a9"));var o=i(n("43a0")),a=i(n("17f7")),u=i(n("3731"));function i(t){return t&&t.__esModule?t:{default:t}}var s={components:{mInput:o.default},data:function(){return{host:""}},onLoad:function(){this.host=a.default.host},methods:{testConnect:function(){var e=this;u.default.requestLoading(e.host,{},"正在测试连接",function(n){a.default.host=e.host,t.showToast({title:"连接成功",duration:1e3,complete:function(){t.navigateBack({delta:1})}})},function(){t.showToast({icon:"none",title:"连接失败"})},function(){t.showToast({icon:"none",title:"连接失败"})})}}};e.default=s}).call(this,n("649d")["default"])}},[["cb16","common/runtime","common/vendor"]]]);
});
require('pages/login/diyHost.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"18e5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("账号：")]),a("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入账号",eventid:"90021ef8-0",mpcomid:"90021ef8-0"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("m-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码",eventid:"90021ef8-1",mpcomid:"90021ef8-1"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("m-input",{attrs:{type:"text",clearable:"",placeholder:"请输入邮箱",eventid:"90021ef8-2",mpcomid:"90021ef8-2"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"90021ef8-3"},on:{tap:t.register}},[t._v("注册")])],1)])},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"1e27":function(t,e,a){"use strict";a("de83");var n=i(a("b0ce")),s=i(a("3f01"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"2ea9":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("59a9")),s=i(a("43a0"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{mInput:s.default},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};n.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=o}).call(this,a("649d")["default"])},"3f01":function(t,e,a){"use strict";a.r(e);var n=a("18e5"),s=a("7a00");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var o=a("2877"),l=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);l.options.__file="reg.vue",e["default"]=l.exports},"7a00":function(t,e,a){"use strict";a.r(e);var n=a("2ea9"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a}},[["1e27","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{2762:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("59a9"));var a=i(n("43a0"));function i(t){return t&&t.__esModule?t:{default:t}}var u={components:{mInput:a.default},data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?t.showToast({icon:"none",title:"邮箱地址不合法"}):t.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};e.default=u}).call(this,n("649d")["default"])},"30a4":function(t,e,n){"use strict";n.r(e);var a=n("2762"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},"564e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("邮箱：")]),n("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入邮箱",eventid:"6cbf6956-0",mpcomid:"6cbf6956-0"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"6cbf6956-1"},on:{tap:t.findPassword}},[t._v("提交")])],1)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"6f34":function(t,e,n){"use strict";n("de83");var a=u(n("b0ce")),i=u(n("7cc5"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"7cc5":function(t,e,n){"use strict";n.r(e);var a=n("564e"),i=n("30a4");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s.options.__file="pwd.vue",e["default"]=s.exports}},[["6f34","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"1c85":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={computed:r({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:r({},(0,o.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})};n.default=a}).call(this,e("649d")["default"])},"7b67":function(t,n,e){"use strict";e.r(n);var o=e("1c85"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=r.a},a857:function(t,n,e){"use strict";e.r(n);var o=e("c57f"),r=e("7b67");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var a=e("2877"),i=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);i.options.__file="user.vue",n["default"]=i.exports},c57f:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"content"},[e("view",{staticClass:"btn-row"},[t.hasLogin?t._e():e("button",{staticClass:"primary",attrs:{type:"primary",eventid:"240234ba-0"},on:{tap:t.bindLogin}},[t._v("登录")]),t.hasLogin?e("button",{attrs:{type:"default",eventid:"240234ba-1"},on:{tap:t.bindLogout}},[t._v("退出登录")]):t._e()],1)])},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},ed3d:function(t,n,e){"use strict";e("de83");var o=u(e("b0ce")),r=u(e("a857"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(r.default))}},[["ed3d","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/pointCheck/pointCheck';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointCheck/pointCheck.js';

define('pages/pointCheck/pointCheck.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(t,a,e){"use strict";e.r(a);var s=e("0ad6"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a},"0ad6":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={onLoad:function(){var t={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",t);var a={name:"周末检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",a);var e={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",e),this.saveTabInfo("消防泵",e)},methods:{jumpListPage:function(a){this.saveTabInfo("currentLx",a),t.navigateTo({url:"../pointList/uni-tabs",success:function(t){},fail:function(){},complete:function(){}})},saveTabInfo:function(a,e){t.setStorage({key:a,data:e,success:function(){console.log("success")}})}}};a.default=e}).call(this,e("649d")["default"])},"2dc8":function(t,a,e){},"84b8":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"part2"},[e("swiper",{staticClass:"banner-box",attrs:{"indicator-dots":"",autoplay:"","indicator-active-color":"#169bd5",circular:"",interval:5e3,duration:300,"indicator-color":"rgba(0,0,0,.3)"}},[e("swiper-item",{attrs:{mpcomid:"10bbdf1a-0"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-1"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-2"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-3"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])],1),e("view",{staticClass:"userinfo"},[e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-0"},on:{tap:function(a){t.jumpListPage("所有记录")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),t._m(0)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-1"},on:{tap:function(a){t.jumpListPage("消火栓")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xhs.png",mode:"widthFix"}}),t._m(1)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-2"},on:{tap:function(a){t.jumpListPage("阀组")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_fz.png",mode:"widthFix"}}),t._m(2)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-3"},on:{tap:function(a){t.jumpListPage("高位水箱")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_sx.png",mode:"widthFix"}}),t._m(3)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-4"},on:{tap:function(a){t.jumpListPage("消防泵")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xfb.png",mode:"widthFix"}}),t._m(4)])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("所有记录")]),e("text",{staticClass:"subText"},[t._v("所有记录")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("消火栓")]),e("text",{staticClass:"subText"},[t._v("消火栓")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("阀组")]),e("text",{staticClass:"subText"},[t._v("阀组")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("高位水箱")]),e("text",{staticClass:"subText"},[t._v("高位水箱")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("消防泵")]),e("text",{staticClass:"subText"},[t._v("消防泵")])])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})},a36f:function(t,a,e){"use strict";var s=e("2dc8"),i=e.n(s);i.a},ab69:function(t,a,e){"use strict";e.r(a);var s=e("84b8"),i=e("0927");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("a36f");var c=e("2877"),r=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);r.options.__file="pointCheck.vue",a["default"]=r.exports},be2a:function(t,a,e){"use strict";e("de83");var s=n(e("b0ce")),i=n(e("ab69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["be2a","common/runtime","common/vendor"]]]);
});
require('pages/pointCheck/pointCheck.js');
__wxRoute = 'pages/pointDetail/pointDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointDetail/pointDetail.js';

define('pages/pointDetail/pointDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointDetail/pointDetail"],{"39fd":function(n,t,e){"use strict";e.r(t);var u=e("ed6e"),r=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=r.a},9513:function(n,t,e){"use strict";e("de83");var u=o(e("b0ce")),r=o(e("d353"));function o(n){return n&&n.__esModule?n:{default:n}}Page((0,u.default)(r.default))},d353:function(n,t,e){"use strict";e.r(t);var u=e("fdcb"),r=e("39fd");for(var o in r)"default"!==o&&function(n){e.d(t,n,function(){return r[n]})}(o);var a=e("2877"),i=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);i.options.__file="pointDetail.vue",t["default"]=i.exports},ed6e:function(n,t,e){},fdcb:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._v("详情页面")])},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["9513","common/runtime","common/vendor"]]]);
});
require('pages/pointDetail/pointDetail.js');
__wxRoute = 'pages/pointAdd/pointAdd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointAdd.js';

define('pages/pointAdd/pointAdd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointAdd"],{"0724":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-6"}},[i("uni-list-item",{attrs:{title:"点位编号",note:t.obj.dwbh,"show-arrow":"false",mpcomid:"7be27b0c-0"}}),i("uni-list-item",{attrs:{title:"检查人",note:t.obj.zrrmc,"show-arrow":"false",mpcomid:"7be27b0c-1"}}),i("picker",{attrs:{mode:"date",value:t.obj.jcrq,eventid:"7be27b0c-0"},on:{change:t.bindDateChange}},[i("uni-list-item",{attrs:{title:"检查日期",note:t.obj.jcrq,mpcomid:"7be27b0c-2"}})],1),i("uni-list-item",{attrs:{title:"责任部门",note:t.obj.zrbm,"show-arrow":"false",mpcomid:"7be27b0c-3"}}),i("uni-list-item",{attrs:{title:"楼层",note:t.obj.lc,"show-arrow":"false",mpcomid:"7be27b0c-4"}}),i("uni-list-item",{attrs:{title:"位置",note:t.obj.wz,"show-arrow":"false",mpcomid:"7be27b0c-5"}})],1)],1),i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("检查信息")]),i("text",{staticClass:"cellTitle"},[t._v("正常-")]),i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#24BE41",mpcomid:"7be27b0c-7"}}),i("text",{staticClass:"cellTitle"},[t._v("未检-")]),i("uni-icon",{attrs:{type:"info-filled",size:"22",color:"#FFDE52",mpcomid:"7be27b0c-8"}}),i("text",{staticClass:"cellTitle"},[t._v("异常-")]),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#C11E1E",mpcomid:"7be27b0c-9"}})],1),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-11"}},t._l(t.obj.sublist,function(e,n){return i("uni-list-item",{key:n,attrs:{title:e.jcbz,"show-extra-icon":"true","extra-icon":t.getIcon(e),eventid:"7be27b0c-1-"+n,mpcomid:"7be27b0c-10-"+n},on:{click:function(i){t.jumpEdit(e,n)}}})}))],1),i("view",{staticClass:"btn-row"},[i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"7be27b0c-2"},on:{tap:t.submit}},[t._v("提交")])],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"16c2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("7c03")),o=r(i("ba08")),s=r(i("4b9c")),c=r(i("17f7")),a=r(i("3731")),l=r(i("59a9")),u=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}var f={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:n.default,uniListItem:s.default,uniIcon:o.default},data:function(){return{needGetItemOnShow:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj)},onNavigationBarButtonTap:function(){var e=this;t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var i=0;i<e.obj.sublist.length;i++){var n=e.obj.sublist[i];n["jcjl"]="正常",n["jcwtms"]="",n["zgfs"]=""}else t.cancel}})},onShow:function(){1==this.needGetItemOnShow&&(this.obj.sublist[this.sublistIndex]=this.sublistItem,this.needGetItemOnShow=!1)},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(e,i){this.needGetItemOnShow=!0,t.navigateTo({url:"./pointCheckInfo?item="+JSON.stringify(e)+"&index="+i})},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},submit:function(){var e=this,i=l.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),a.default.requestLoading(c.default.createCheckPoint,i,"正在加载",function(e){t.showToast({icon:"none",title:"新建检查成功",duration:1e3,complete:function(){t.navigateBack({delta:1})}})},function(){t.showToast({icon:"none",title:"新建检查失败"})},function(){})}}};e.default=f}).call(this,i("649d")["default"])},"7d51":function(t,e,i){"use strict";i("de83");var n=s(i("b0ce")),o=s(i("e51e"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},"7f6f":function(t,e,i){"use strict";var n=i("c07b"),o=i.n(n);o.a},bafa:function(t,e,i){"use strict";i.r(e);var n=i("16c2"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},c07b:function(t,e,i){},e51e:function(t,e,i){"use strict";i.r(e);var n=i("0724"),o=i("bafa");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("7f6f");var c=i("2877"),a=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a.options.__file="pointAdd.vue",e["default"]=a.exports}},[["7d51","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointAdd.js');
__wxRoute = 'pages/pointAdd/pointCheckInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointCheckInfo.js';

define('pages/pointAdd/pointCheckInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointCheckInfo"],{"10b0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[n("view",{staticClass:"cellTitleView"},[n("text",{staticClass:"cellTitle"},[t._v(t._s(t.item.jcbz))])]),n("view",{staticClass:"cellInfoView"},[n("uni-list",{attrs:{mpcomid:"4bd08622-3"}},[n("picker",{attrs:{value:t.index,range:t.typeArray,eventid:"4bd08622-0"},on:{change:t.bindTypeChange}},[n("uni-list-item",{attrs:{title:"检查结论",note:t.item.jcjl,mpcomid:"4bd08622-0"}})],1),n("uni-list-item",{attrs:{title:"问题描述",note:t.item.jcwtms,eventid:"4bd08622-1",mpcomid:"4bd08622-1"},on:{click:function(e){t.jumpInput(t.item.jcwtms)}}}),n("picker",{attrs:{value:t.index,range:t.rectifyTypes,eventid:"4bd08622-2"},on:{change:t.bindRectifyChange}},[n("uni-list-item",{attrs:{title:"整改方式",note:t.item.zgfs,mpcomid:"4bd08622-2"}})],1)],1)],1),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"4bd08622-3"},on:{tap:t.saveItem}},[t._v("确定")])],1)])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"2bc3":function(t,e,n){"use strict";n.r(e);var i=n("10b0"),a=n("e7d1");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("9e98");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);r.options.__file="pointCheckInfo.vue",e["default"]=r.exports},3571:function(t,e,n){},"9e98":function(t,e,n){"use strict";var i=n("3571"),a=n.n(i);a.a},b330:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("7c03")),a=c(n("4b9c")),u=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={computed:(0,u.mapState)(["inputPageText","key"]),components:{uniList:i.default,uniListItem:a.default},data:function(){return{needGetInputOnShow:!1,typeArray:["正常","未检","异常"],rectifyTypes:["立即整改","整改通知","整改中"],item:"",itemIndex:0}},onLoad:function(t){this.item=JSON.parse(t.item),this.itemIndex=JSON.parse(t.index)},onShow:function(){1==this.needGetInputOnShow&&(this.item[this.key]=this.inputPageText,this.needGetInputOnShow=!1)},methods:r({},(0,u.mapMutations)(["setSublistItem"]),{bindTypeChange:function(t){this.item.jcjl=this.typeArray[t.detail.value]},bindRectifyChange:function(t){this.item.zgfs=this.rectifyTypes[t.detail.value]},jumpInput:function(e){this.needGetInputOnShow=!0,t.navigateTo({url:"../common/inputPage?text="+e+"&key=jcwtms&placeholder=请输入问题描述"})},saveItem:function(){var e={item:this.item,index:this.itemIndex};this.setSublistItem(e),t.navigateBack({delta:1})}})};e.default=s}).call(this,n("649d")["default"])},c479:function(t,e,n){"use strict";n("de83");var i=u(n("b0ce")),a=u(n("2bc3"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},e7d1:function(t,e,n){"use strict";n.r(e);var i=n("b330"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a}},[["c479","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointCheckInfo.js');
__wxRoute = 'pages/mpvue-echarts/chartList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/chartList.js';

define('pages/mpvue-echarts/chartList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/chartList"],{7911:function(t,e,n){"use strict";n.r(e);var i=n("893a"),u=n("8555");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);var a=n("2877"),o=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,null,null);o.options.__file="chartList.vue",e["default"]=o.exports},8555:function(t,e,n){"use strict";n.r(e);var i=n("b8b9"),u=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=u.a},"893a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("uni-list",{attrs:{mpcomid:"47b16668-3"}},[n("uni-list-item",{attrs:{title:"报警设备类型统计",eventid:"47b16668-0",mpcomid:"47b16668-0"},on:{click:function(e){t.onClick("device")}}}),n("uni-list-item",{attrs:{title:"报警事件类型统计",eventid:"47b16668-1",mpcomid:"47b16668-1"},on:{click:function(e){t.onClick("event")}}}),n("uni-list-item",{attrs:{title:"阀组压力统计",eventid:"47b16668-2",mpcomid:"47b16668-2"},on:{click:function(e){t.onClick("valve")}}})],1)],1)},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},b8b9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("7c03")),u=c(n("4b9c"));function c(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniList:i.default,uniListItem:u.default},methods:{onClick:function(e){"device"==e?t.navigateTo({url:"./deviceChart"}):"event"==e?t.navigateTo({url:"./eventChart"}):"valve"==e&&t.navigateTo({url:"./valveChart"})}}};e.default=a}).call(this,n("649d")["default"])},fdcf:function(t,e,n){"use strict";n("de83");var i=c(n("b0ce")),u=c(n("7911"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(u.default))}},[["fdcf","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/chartList.js');
__wxRoute = 'pages/mpvue-echarts/deviceChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/deviceChart.js';

define('pages/mpvue-echarts/deviceChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/deviceChart"],{"0bd4":function(n,e,t){"use strict";t.r(e);var u=t("d3d4"),r=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=r.a},"44a4":function(n,e,t){"use strict";t("de83");var u=a(t("b0ce")),r=a(t("57e5"));function a(n){return n&&n.__esModule?n:{default:n}}Page((0,u.default)(r.default))},"57e5":function(n,e,t){"use strict";t.r(e);var u=t("9051"),r=t("0bd4");for(var a in r)"default"!==a&&function(n){t.d(e,n,function(){return r[n]})}(a);var c=t("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);o.options.__file="deviceChart.vue",e["default"]=o.exports},9051:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("1111")])},r=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return r})},d3d4:function(n,e,t){}},[["44a4","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/deviceChart.js');
__wxRoute = 'pages/mpvue-echarts/eventChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/eventChart.js';

define('pages/mpvue-echarts/eventChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/eventChart"],{"15ae":function(n,t,e){},"4aa3":function(n,t,e){"use strict";e("de83");var a=r(e("b0ce")),u=r(e("ad0d"));function r(n){return n&&n.__esModule?n:{default:n}}Page((0,a.default)(u.default))},"4f5d":function(n,t,e){"use strict";e.r(t);var a=e("15ae"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},"6abf":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div")},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},ad0d:function(n,t,e){"use strict";e.r(t);var a=e("6abf"),u=e("4f5d");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);var f=e("2877"),o=Object(f["a"])(u["default"],a["a"],a["b"],!1,null,null,null);o.options.__file="eventChart.vue",t["default"]=o.exports}},[["4aa3","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/eventChart.js');
__wxRoute = 'pages/mpvue-echarts/valveChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/valveChart.js';

define('pages/mpvue-echarts/valveChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/valveChart"],{"32cb":function(n,t,e){"use strict";e.r(t);var u=e("3508"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},3508:function(n,t,e){},"694f":function(n,t,e){"use strict";e.r(t);var u=e("edf0"),r=e("32cb");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var f=e("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);c.options.__file="valveChart.vue",t["default"]=c.exports},a021:function(n,t,e){"use strict";e("de83");var u=a(e("b0ce")),r=a(e("694f"));function a(n){return n&&n.__esModule?n:{default:n}}Page((0,u.default)(r.default))},edf0:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div")},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["a021","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/valveChart.js');
__wxRoute = 'pages/mpvue-echarts/mpvue-echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/mpvue-echarts.js';

define('pages/mpvue-echarts/mpvue-echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/mpvue-echarts"],{"0e19":function(t,e,n){},"0f5b":function(t,e,n){"use strict";n.r(e);var i=n("93f4"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"27c5":function(t,e,n){"use strict";n("de83");var i=a(n("b0ce")),r=a(n("d3af"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(r.default))},"502f":function(t,e,n){"use strict";n.r(e);var i=n("da92"),r=n("0f5b");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("a192");var o=n("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"2ebf557d",null);s.options.__file="echarts.vue",e["default"]=s.exports},"5bc7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("cc99")),r=a(n("502f"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}var s=[{value:55,name:"北京"},{value:38,name:"上海"},{value:20,name:"广州"}],l={animation:!1,backgroundColor:"#F8F8F8",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},u={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"蒸发量",type:"line",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"line",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]},h={data:function(){return{echarts:i,updateStatus:!1}},onLoad:function(){l.series[0].data=s.slice(0)},methods:{goBrowser:function(){plus.runtime.openURL("https://github.com/F-loat/mpvue-echarts")},updatePie:function(){this.updateStatus||(l.series[0].data.push({value:20,name:"武汉"}),l.series[0].data.push({value:10,name:"杭州"}),this.$refs.pieChart.init(),this.updateStatus=!0)},pieInit:function(t,e,n){var r=i.init(t,null,{width:e,height:n});return t.setChart(r),r.setOption(l),r},lineInit:function(t,e,n){var r=i.init(t,null,{width:e,height:n});return t.setChart(r),r.setOption(u),r}},components:{mpvueEcharts:r.default}};e.default=h},"93f4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a10a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{required:!0,type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(){var t=this;if(this.onInit){var e=this.canvasId;this.ctx=wx.createCanvasContext(e);var n=new i.default(this.ctx,e);this.echarts.setCanvasCreator(function(){return n});var r=wx.createSelectorQuery();r.select("#".concat(e)).boundingClientRect(function(e){e?t.chart=t.onInit(n,e.width,e.height):setTimeout(function(){return t.init()},50)}).exec()}else console.warn("请传入 onInit 函数进行初始化")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(a({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n&&t.mp.touches.length){var i=t.mp.touches[0];n._zr.handler.dispatch("mousedown",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("mousemove",{zrX:i.x,zrY:i.y})}},touchMove:function(t){var e=this.disableTouch,n=this.throttleTouch,i=this.chart,r=this.lastMoveTime;if(!e&&i&&t.mp.touches.length){if(n){var a=Date.now();if(a-r<240)return;this.lastMoveTime=a}var o=t.mp.touches[0];i._zr.handler.dispatch("mousemove",{zrX:o.x,zrY:o.y})}},touchEnd:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n){var i=t.mp.changedTouches?t.mp.changedTouches[0]:{};n._zr.handler.dispatch("mouseup",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("click",{zrX:i.x,zrY:i.y})}}}};e.default=s},a10a:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return a(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=o},a192:function(t,e,n){"use strict";var i=n("d734"),r=n.n(i);r.a},ab0f:function(t,e,n){"use strict";var i=n("0e19"),r=n.n(i);r.a},c48d:function(t,e,n){"use strict";n.r(e);var i=n("5bc7"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},cc99:function(t,e,n){"use strict";!function(t,n){n(e)}(0,function(t,e,n){function i(t,e){"createCanvas"===t&&(Pu=null),Au[t]=e}function r(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Su.call(t);if("[object Array]"===n){if(!z(t)){e=[];for(var i=0,a=t.length;i<a;i++)e[i]=r(t[i])}}else if(bu[n]){if(!z(t)){var o=t.constructor;if(t.constructor.from)e=o.from(t);else{e=new o(t.length);for(i=0,a=t.length;i<a;i++)e[i]=r(t[i])}}}else if(!wu[n]&&!z(t)&&!C(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=r(t[s]));return e}function a(t,e,n){if(!S(e)||!S(t))return n?r(e):t;for(var i in e)if(e.hasOwnProperty(i)){var o=t[i],s=e[i];!S(s)||!S(o)||x(s)||x(o)||C(s)||C(o)||M(s)||M(o)||z(s)||z(o)?!n&&i in t||(t[i]=r(e[i],!0)):a(o,s,n)}return t}function o(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=a(n,t[i],e);return n}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function l(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function u(){return Pu||(Pu=Lu().getContext("2d")),Pu}function h(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function c(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function f(t,e,n){l(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function d(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function p(t,e,n){if(t&&e)if(t.forEach&&t.forEach===Iu)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function g(t,e,n){if(t&&e){if(t.map&&t.map===Du)return t.map(e,n);for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t));return i}}function v(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===ku)return t.reduce(e,n,i);for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t);return n}}function m(t,e,n){if(t&&e){if(t.filter&&t.filter===Cu)return t.filter(e,n);for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function y(t,e){var n=Tu.call(arguments,2);return function(){return t.apply(e,n.concat(Tu.call(arguments)))}}function _(t){var e=Tu.call(arguments,1);return function(){return t.apply(this,e.concat(Tu.call(arguments)))}}function x(t){return"[object Array]"===Su.call(t)}function w(t){return"function"==typeof t}function b(t){return"[object String]"===Su.call(t)}function S(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function M(t){return!!wu[Su.call(t)]}function I(t){return!!bu[Su.call(t)]}function C(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function T(t){return t!==t}function D(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function k(t,e){return null!=t?t:e}function A(t,e,n){return null!=t?t:null!=e?e:n}function L(){return Function.call.apply(Tu,arguments)}function P(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function O(t,e){if(!t)throw new Error(e)}function E(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function N(t){t[Ou]=!0}function z(t){return t[Ou]}function B(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=x(t),i=this;t instanceof B?t.each(e):t&&p(t,e)}function R(t){return new B(t)}function F(){}function V(t,e){var n=new Eu(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function W(t){var e=new Eu(2);return e[0]=t[0],e[1]=t[1],e}function H(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function G(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function X(t){return Math.sqrt(j(t))}function j(t){return t[0]*t[0]+t[1]*t[1]}function q(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function Y(t,e){var n=X(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function U(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Z(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function $(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function K(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function Q(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function J(t,e){return{target:t,topTarget:e&&e.topTarget}}function tt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}function et(){}function nt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||Fu}return!1}function it(){var t=new Hu(6);return rt(t),t}function rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function at(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ot(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t}function st(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function lt(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n);return t[0]=i*h+o*u,t[1]=-i*u+o*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t}function ut(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function ht(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null}function ct(t){return t>Xu||t<-Xu}function ft(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function dt(t){return(t=Math.round(t))<0?0:t>255?255:t}function pt(t){return t<0?0:t>1?1:t}function gt(t){return dt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function mt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function yt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function _t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function xt(t,e){nh&&_t(nh,e),nh=eh.put(t,nh||e.slice())}function wt(t,e){if(t){e=e||[];var n=eh.get(t);if(n)return _t(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in th)return _t(e,th[i]),xt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),a=i.indexOf(")");if(-1!==r&&a+1===i.length){var o=i.substr(0,r),s=i.substr(r+1,a-(r+1)).split(","),l=1;switch(o){case"rgba":if(4!==s.length)return void yt(e,0,0,0,1);l=vt(s.pop());case"rgb":return 3!==s.length?void yt(e,0,0,0,1):(yt(e,gt(s[0]),gt(s[1]),gt(s[2]),l),xt(t,e),e);case"hsla":return 4!==s.length?void yt(e,0,0,0,1):(s[3]=vt(s[3]),bt(s,e),xt(t,e),e);case"hsl":return 3!==s.length?void yt(e,0,0,0,1):(bt(s,e),xt(t,e),e);default:return}}yt(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(yt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),xt(t,e),e):void yt(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(yt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),xt(t,e),e):void yt(e,0,0,0,1)}}}}function bt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=vt(t[1]),r=vt(t[2]),a=r<=.5?r*(i+1):r+i-r*i,o=2*r-a;return e=e||[],yt(e,dt(255*mt(o,a,n+1/3)),dt(255*mt(o,a,n)),dt(255*mt(o,a,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function St(t,e){var n=wt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return Mt(n,4===n.length?"rgba":"rgb")}}function Mt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function It(t,e){return t[e]}function Ct(t,e,n){t[e]=n}function Tt(t,e,n){return(e-t)*n+t}function Dt(t,e,n){return n>.5?e:t}function kt(t,e,n,i,r){var a=t.length;if(1==r)for(s=0;s<a;s++)i[s]=Tt(t[s],e[s],n);else for(var o=a&&t[0].length,s=0;s<a;s++)for(var l=0;l<o;l++)i[s][l]=Tt(t[s][l],e[s][l],n)}function At(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(o=i;o<r;o++)t.push(1===n?e[o]:ih.call(e[o]));for(var a=t[0]&&t[0].length,o=0;o<t.length;o++)if(1===n)isNaN(t[o])&&(t[o]=e[o]);else for(var s=0;s<a;s++)isNaN(t[o][s])&&(t[o][s]=e[o][s])}function Lt(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(a=0;a<i;a++)if(t[a]!==e[a])return!1}else for(var r=t[0].length,a=0;a<i;a++)for(var o=0;o<r;o++)if(t[a][o]!==e[a][o])return!1;return!0}function Pt(t,e,n,i,r,a,o,s,l){var u=t.length;if(1==l)for(c=0;c<u;c++)s[c]=Ot(t[c],e[c],n[c],i[c],r,a,o);else for(var h=t[0].length,c=0;c<u;c++)for(var f=0;f<h;f++)s[c][f]=Ot(t[c][f],e[c][f],n[c][f],i[c][f],r,a,o)}function Ot(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function Et(t){if(d(t)){var e=t.length;if(d(t[0])){for(var n=[],i=0;i<e;i++)n.push(ih.call(t[i]));return n}return ih.call(t)}return t}function Nt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function zt(t){var e=t[t.length-1].value;return d(e&&e[0])?2:1}function Bt(t,e,n,i,r,a){var o=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var h,c=d(i[0].value),f=!1,p=!1,g=c?zt(i):0;i.sort(function(t,e){return t.time-e.time}),h=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/h);var w=i[x].value;if(c&&Lt(w,y,g)||!c&&w===y||(_=!1),y=w,"string"==typeof w){var b=wt(w);b?(w=b,f=!0):p=!0}m.push(w)}if(a||!_){var S=m[u-1];for(x=0;x<u-1;x++)c?At(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||f||(m[x]=S);c&&At(o(t._target,r),S,g);var M,I,C,T,D,k=0,A=0;if(f)var L=[0,0,0,0];var P=new ft({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(k+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=k;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}k=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(C=m[n],I=m[0===n?n:n-1],T=m[n>u-2?u-1:n+1],D=m[n>u-3?u-1:n+2],c)Pt(I,C,T,D,M,M*M,M*M*M,o(t,r),g);else{if(f)a=Pt(I,C,T,D,M,M*M,M*M*M,L,1),a=Nt(L);else{if(p)return Dt(C,T,M);a=Ot(I,C,T,D,M,M*M,M*M*M)}s(t,r,a)}else if(c)kt(m[n],m[n+1],M,o(t,r),g);else{var a;if(f)kt(m[n],m[n+1],M,L,1),a=Nt(L);else{if(p)return Dt(m[n],m[n+1],M);a=Tt(m[n],m[n+1],M)}s(t,r,a)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function Rt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function Ft(t){for(var e=0;t>=gh;)e|=1&t,t>>=1;return t+e}function Vt(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;Wt(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function Wt(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Ht(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function Gt(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])>0){for(s=i-r;l<s&&a(t,e[n+r+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])>0?o=h+1:l=h}return l}function Xt(t,e,n,i,r,a){var o=0,s=0,l=1;if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=o;o=r-l,l=r-u}else{for(s=i-r;l<s&&a(t,e[n+r+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),o+=r,l+=r}for(o++;o<l;){var h=o+(l-o>>>1);a(t,e[n+h])<0?l=h:o=h+1}return l}function jt(t,e){function n(n){var s=a[n],u=o[n],h=a[n+1],c=o[n+1];o[n]=u+c,n===l-3&&(a[n+1]=a[n+2],o[n+1]=o[n+2]),l--;var f=Xt(t[h],t,s,u,0,e);s+=f,0!==(u-=f)&&0!==(c=Gt(t[s+u-1],t,h,c,c-1,e))&&(u<=c?i(s,u,h,c):r(s,u,h,c))}function i(n,i,r,a){var o=0;for(o=0;o<i;o++)u[o]=t[n+o];var l=0,h=r,c=n;if(t[c++]=t[h++],0!=--a)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[h],u[l])<0){if(t[c++]=t[h++],d++,f=0,0==--a){p=!0;break}}else if(t[c++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Xt(t[h],u,l,i,0,e))){for(o=0;o<f;o++)t[c+o]=u[l+o];if(c+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[c++]=t[h++],0==--a){p=!0;break}if(0!==(d=Gt(u[l],t,h,a,0,e))){for(o=0;o<d;o++)t[c+o]=t[h+o];if(c+=d,h+=d,0===(a-=d)){p=!0;break}}if(t[c++]=u[l++],1==--i){p=!0;break}g--}while(f>=vh||d>=vh);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else{if(0===i)throw new Error;for(o=0;o<i;o++)t[c+o]=u[l+o]}}else{for(o=0;o<a;o++)t[c+o]=t[h+o];t[c+a]=u[l]}else for(o=0;o<i;o++)t[c+o]=u[l+o]}function r(n,i,r,a){var o=0;for(o=0;o<a;o++)u[o]=t[r+o];var l=n+i-1,h=a-1,c=r+a-1,f=0,d=0;if(t[c--]=t[l--],0!=--i)if(1!==a){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[h],t[l])<0){if(t[c--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[c--]=u[h--],v++,g=0,1==--a){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Xt(u[h],t,n,i,i-1,e))){for(i-=g,d=1+(c-=g),f=1+(l-=g),o=g-1;o>=0;o--)t[d+o]=t[f+o];if(0===i){m=!0;break}}if(t[c--]=u[h--],1==--a){m=!0;break}if(0!=(v=a-Gt(t[l],u,0,a,a-1,e))){for(a-=v,d=1+(c-=v),f=1+(h-=v),o=0;o<v;o++)t[d+o]=u[f+o];if(a<=1){m=!0;break}}if(t[c--]=t[l--],0==--i){m=!0;break}p--}while(g>=vh||v>=vh);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===a){for(d=1+(c-=i),f=1+(l-=i),o=i-1;o>=0;o--)t[d+o]=t[f+o];t[c]=u[h]}else{if(0===a)throw new Error;for(f=c-(a-1),o=0;o<a;o++)t[f+o]=u[o]}}else{for(d=1+(c-=i),f=1+(l-=i),o=i-1;o>=0;o--)t[d+o]=t[f+o];t[c]=u[h]}else for(f=c-(a-1),o=0;o<a;o++)t[f+o]=u[o]}var a,o,s=vh,l=0,u=[];a=[],o=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&o[t-1]<=o[t]+o[t+1]||t>=2&&o[t-2]<=o[t]+o[t-1])o[t-1]<o[t+1]&&t--;else if(o[t]>o[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&o[t-1]<o[t+1]&&t--,n(t)}},this.pushRun=function(t,e){a[l]=t,o[l]=e,l+=1}}function qt(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var a=0;if(r<gh)return a=Vt(t,n,i,e),void Ht(t,n,i,n+a,e);var o=new jt(t,e),s=Ft(r);do{if((a=Vt(t,n,i,e))<s){var l=r;l>s&&(l=s),Ht(t,n,n+l,n+a,e),a=l}o.pushRun(n,a),o.mergeRuns(),r-=a,n+=a}while(0!==r);o.forceMergeRuns()}}function Yt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Ut(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)}function Zt(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}function $t(){return!1}function Kt(t,e,n){var i=Lu(),r=e.getWidth(),a=e.getHeight(),o=i.style;return o&&(o.position="absolute",o.left=0,o.top=0,o.width=r+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=a*n,i}function Qt(t){if("string"==typeof t){var e=Dh.get(t);return e&&e.image}return t}function Jt(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var a=Dh.get(t),o={hostEl:n,cb:i,cbPayload:r};return a?!ee(e=a.image)&&a.pending.push(o):(!e&&(e=new Image),e.onload=te,Dh.put(t,e.__cachedImgObj={image:e,pending:[o]}),e.src=e.__zrImageSrc=t),e}return t}return e}function te(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function ee(t){return t&&t.width&&t.height}function ne(t,e){var n=t+":"+(e=e||Oh);if(kh[n])return kh[n];for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;a<o;a++)r=Math.max(pe(i[a],e).width,r);return Ah>Lh&&(Ah=0,kh={}),Ah++,kh[n]=r,r}function ie(t,e,n,i,r,a,o){return a?ae(t,e,n,i,r,a,o):re(t,e,n,i,r,o)}function re(t,e,n,i,r,a){var o=ge(t,e,r,a),s=ne(t,e);r&&(s+=r[1]+r[3]);var l=o.outerHeight,u=new Rt(oe(0,s,n),se(0,l,i),s,l);return u.lineHeight=o.lineHeight,u}function ae(t,e,n,i,r,a,o){var s=ve(t,{rich:a,truncate:o,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new Rt(oe(0,l,n),se(0,u,i),l,u)}function oe(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function se(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function le(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+o,r+=s,u="middle";break;case"top":i+=o/2,r-=n,l="center",u="bottom";break;case"bottom":i+=o/2,r+=a+n,l="center";break;case"inside":i+=o/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=o-n,r+=s,l="right",u="middle";break;case"insideTop":i+=o/2,r+=n,l="center";break;case"insideBottom":i+=o/2,r+=a-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=o-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=a-n,u="bottom";break;case"insideBottomRight":i+=o-n,r+=a-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function ue(t,e,n,i,r){if(!e)return"";var a=(t+"").split("\n");r=he(e,n,i,r);for(var o=0,s=a.length;o<s;o++)a[o]=ce(a[o],r);return a.join("\n")}function he(t,e,n,i){(i=s({},i)).font=e;n=k(n,"...");i.maxIterations=k(i.maxIterations,2);var r=i.minChar=k(i.minChar,0);i.cnCharWidth=ne("国",e);var a=i.ascCharWidth=ne("a",e);i.placeholder=k(i.placeholder,"");for(var o=t=Math.max(0,t-1),l=0;l<r&&o>=a;l++)o-=a;var u=ne(n);return u>o&&(n="",u=0),o=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=o,i.containerWidth=t,i}function ce(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var a=ne(t,i);if(a<=n)return t;for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis;break}var s=0===o?fe(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0;a=ne(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function fe(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a);r+=0<=s&&s<=127?n:i}return a}function de(t){return ne("国",t)}function pe(t,e){return Eh.measureText(t,e)}function ge(t,e,n,i){null!=t&&(t+="");var r=de(e),a=t?t.split("\n"):[],o=a.length*r,s=o;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",a=[];else if(null!=u)for(var h=he(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,f=a.length;c<f;c++)a[c]=ce(a[c],h)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function ve(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Ph.lastIndex=0;null!=(i=Ph.exec(t));){var a=i.index;a>r&&me(n,t.substring(r,a)),me(n,i[2],i[1]),r=Ph.lastIndex}r<t.length&&me(n,t.substring(r,t.length));var o=n.lines,s=0,l=0,u=[],h=e.textPadding,c=e.truncate,f=c&&c.outerWidth,d=c&&c.outerHeight;for(h&&(null!=f&&(f-=h[1]+h[3]),null!=d&&(d-=h[0]+h[2])),D=0;D<o.length;D++){for(var p=o[D],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(L=p.tokens[m]).styleName&&e.rich[L.styleName]||{},_=L.textPadding=y.textPadding,x=L.font=y.font||e.font,w=L.textHeight=k(y.textHeight,de(x));if(_&&(w+=_[0]+_[2]),L.height=w,L.lineHeight=A(y.textLineHeight,e.textLineHeight,w),L.textAlign=y&&y.textAlign||e.textAlign,L.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+L.lineHeight>d)return{lines:[],width:0,height:0};L.textWidth=ne(L.text,x);var b=y.textWidth,S=null==b||"auto"===b;if("string"==typeof b&&"%"===b.charAt(b.length-1))L.percentWidth=b,u.push(L),b=0;else{if(S){b=L.textWidth;var M=y.textBackgroundColor,I=M&&M.image;I&&ee(I=Qt(I))&&(b=Math.max(b,I.width*w/I.height))}var C=_?_[1]+_[3]:0;b+=C;var T=null!=f?f-v:null;null!=T&&T<b&&(!S||T<C?(L.text="",L.textWidth=b=0):(L.text=ue(L.text,T-C,x,c.ellipsis,{minChar:c.minChar}),L.textWidth=ne(L.text,x),b=L.textWidth+C))}v+=L.width=b,y&&(g=Math.max(g,L.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=k(e.textWidth,l),n.outerHeight=n.height=k(e.textHeight,s),h&&(n.outerWidth+=h[1]+h[3],n.outerHeight+=h[0]+h[2]);for(var D=0;D<u.length;D++){var L=u[D],P=L.percentWidth;L.width=parseInt(P,10)/100*l}return n}function me(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i};if(o)a.push({tokens:[l]});else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length;1===h&&u[0].isLineHolder?u[0]=l:(s||!h||i)&&u.push(l)}}}function ye(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&E(e)||t.textFont||t.font}function _e(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r;u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=a=c:c instanceof Array?1===c.length?n=i=r=a=c[0]:2===c.length?(n=r=c[0],i=a=c[1]):3===c.length?(n=c[0],i=a=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],a=c[3]):n=i=r=a=0,n+i>u&&(n*=u/(o=n+i),i*=u/o),r+a>u&&(r*=u/(o=r+a),a*=u/o),i+r>h&&(i*=h/(o=i+r),r*=h/o),n+a>h&&(n*=h/(o=n+a),a*=h/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+a,l+h),0!==a&&t.arc(s+a,l+h-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function xe(t){return we(t),p(t.rich,we),t}function we(t){if(t){t.font=ye(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Nh[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||zh[n]?n:"top",t.textPadding&&(t.textPadding=P(t.textPadding))}}function be(t,e,n,i,r){i.rich?Me(t,e,n,i,r):Se(t,e,n,i,r)}function Se(t,e,n,i,r){var a=Pe(e,"font",i.font||Oh),o=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=ge(n,a,o,i.truncate));var l=s.outerHeight,u=s.lines,h=s.lineHeight,c=Le(l,i,r),f=c.baseX,d=c.baseY,p=c.textAlign,g=c.textVerticalAlign;Ce(e,i,r,f,d);var v=se(d,l,g),m=f,y=v,_=De(i);if(_||o){var x=ne(n,a);o&&(x+=o[1]+o[3]);var w=oe(f,x,p);_&&ke(t,e,i,w,v,x,l),o&&(m=ze(f,p,o),y+=o[0])}Pe(e,"textAlign",p||"left"),Pe(e,"textBaseline","middle"),Pe(e,"shadowBlur",i.textShadowBlur||0),Pe(e,"shadowColor",i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",i.textShadowOffsetX||0),Pe(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=h/2;var b=i.textStrokeWidth,S=Oe(i.textStroke,b),M=Ee(i.textFill);S&&(Pe(e,"lineWidth",b),Pe(e,"strokeStyle",S)),M&&Pe(e,"fillStyle",M);for(var I=0;I<u.length;I++)S&&e.strokeText(u[I],m,y),M&&e.fillText(u[I],m,y),y+=h}function Me(t,e,n,i,r){var a=t.__textCotentBlock;a&&!t.__dirty||(a=t.__textCotentBlock=ve(n,i)),Ie(t,e,a,i,r)}function Ie(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=Le(s,i,r),h=u.baseX,c=u.baseY,f=u.textAlign,d=u.textVerticalAlign;Ce(e,i,r,h,c);var p=oe(h,o,f),g=se(c,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+a;De(i)&&ke(t,e,i,p,g,o,s);for(var _=0;_<n.lines.length;_++){for(var x,w=n.lines[_],b=w.tokens,S=b.length,M=w.lineHeight,I=w.width,C=0,T=v,D=y,k=S-1;C<S&&(!(x=b[C]).textAlign||"left"===x.textAlign);)Te(t,e,x,i,M,m,T,"left"),I-=x.width,T+=x.width,C++;for(;k>=0&&"right"===(x=b[k]).textAlign;)Te(t,e,x,i,M,m,D,"right"),I-=x.width,D-=x.width,k--;for(T+=(a-(T-v)-(y-D)-I)/2;C<=k;)Te(t,e,x=b[C],i,M,m,T+x.width/2,"center"),T+=x.width,C++;m+=M}}function Ce(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin;"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function Te(t,e,n,i,r,a,o,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,h=a+r/2;"top"===u?h=a+n.height/2:"bottom"===u&&(h=a+r-n.height/2),!n.isLineHolder&&De(l)&&ke(t,e,l,"right"===s?o-n.width:"center"===s?o-n.width/2:o,h-n.height/2,n.width,n.height);var c=n.textPadding;c&&(o=ze(o,s,c),h-=n.height/2-c[2]-n.textHeight/2),Pe(e,"shadowBlur",A(l.textShadowBlur,i.textShadowBlur,0)),Pe(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",A(l.textShadowOffsetX,i.textShadowOffsetX,0)),Pe(e,"shadowOffsetY",A(l.textShadowOffsetY,i.textShadowOffsetY,0)),Pe(e,"textAlign",s),Pe(e,"textBaseline","middle"),Pe(e,"font",n.font||Oh);var f=Oe(l.textStroke||i.textStroke,p),d=Ee(l.textFill||i.textFill),p=k(l.textStrokeWidth,i.textStrokeWidth);f&&(Pe(e,"lineWidth",p),Pe(e,"strokeStyle",f),e.strokeText(n.text,o,h)),d&&(Pe(e,"fillStyle",d),e.fillText(n.text,o,h))}function De(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function ke(t,e,n,i,r,a,o){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,h=b(s);if(Pe(e,"shadowBlur",n.textBoxShadowBlur||0),Pe(e,"shadowColor",n.textBoxShadowColor||"transparent"),Pe(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Pe(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),h||l&&u){e.beginPath();var c=n.textBorderRadius;c?_e(e,{x:i,y:r,width:a,height:o,r:c}):e.rect(i,r,a,o),e.closePath()}if(h)Pe(e,"fillStyle",s),e.fill();else if(S(s)){var f=s.image;(f=Jt(f,null,t,Ae,s))&&ee(f)&&e.drawImage(f,i,r,a,o)}l&&u&&(Pe(e,"lineWidth",l),Pe(e,"strokeStyle",u),e.stroke())}function Ae(t,e){e.image=t}function Le(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+Ne(s[0],n.width),r=n.y+Ne(s[1],n.height);else{var l=le(s,n,e.textDistance);i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function Pe(t,e,n){return t[e]=_h(t,e,n),t[e]}function Oe(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ee(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ne(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function ze(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function Be(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function Re(t){for(var e in t=t||{},hh.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new wh(t.style,this),this._rect=null,this.__clipPaths=[]}function Fe(t){Re.call(this,t)}function Ve(t){return parseInt(t,10)}function We(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function He(t,e,n){return Fh.copy(t.getBoundingRect()),t.transform&&Fh.applyTransform(t.transform),Vh.width=e,Vh.height=n,!Fh.intersect(Vh)}function Ge(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function Xe(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function je(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function qe(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function Ye(t,e,n,i){return n=n||{},i||!xu.canvasSupported?Ue(t,e,n):xu.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):Ue(t,e,n),n}function Ue(t,e,n){var i=qe(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function Ze(t,n,i){if(null!=(n=n||e.event).zrX)return n;var r=n.type;if(r&&r.indexOf("touch")>=0){var a="touchend"!=r?n.targetTouches[0]:n.changedTouches[0];a&&Ye(t,a,n,i)}else Ye(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var o=n.button;return null==n.which&&void 0!==o&&Gh.test(n.type)&&(n.which=1&o?1:2&o?3:4&o?2:0),n}function $e(t,e,n){Hh?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ke(t,e,n){Hh?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Qe(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Je(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function tn(t){return"mousewheel"===t&&xu.browser.firefox?"DOMMouseScroll":t}function en(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var a=r.type;e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function nn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function rn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function an(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}p(Uh,function(e){t._handlers[e]=y(Kh[e],t)}),p($h,function(e){t._handlers[e]=y(Kh[e],t)}),p(Yh,function(n){t._handlers[n]=e(Kh[n],t)})}function on(t){function e(e,n){p(e,function(e){$e(t,tn(e),n._handlers[e])},n)}Ru.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new jh,this._handlers={},an(this),xu.pointerEventsSupported?e($h,this):(xu.touchEventsSupported&&e(Uh,this),e(Yh,this))}function sn(t,e){return new ec(_u(),t,e)}function ln(t){return t instanceof Array?t:null==t?[]:[t]}function un(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var a=n[i];!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}}function hn(t){return!ic(t)||rc(t)||t instanceof Date?t:t.value}function cn(t){return ic(t)&&!(t instanceof Array)}function fn(t,e){e=(e||[]).slice();var n=g(t||[],function(t,e){return{exist:t}});return nc(e,function(t,i){if(ic(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var a=n[r].exist;if(!(n[r].option||null!=a.id&&null!=t.id||null==t.name||gn(t)||gn(a)||a.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),nc(e,function(t,e){if(ic(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!gn(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function dn(t){var e=R();nc(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),nc(t,function(t,n){var i=t.option;O(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),nc(t,function(t,n){var i=t.exist,r=t.option,a=t.keyInfo;if(ic(r)){if(a.name=null!=r.name?r.name+"":i?i.name:ac+n,i)a.id=i.id;else if(null!=r.id)a.id=r.id+"";else{var o=0;do{a.id="\0"+a.name+"\0"+o++}while(e.get(a.id))}e.set(a.id,t)}})}function pn(t){var e=t.name;return!(!e||!e.indexOf(ac))}function gn(t){return ic(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function vn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?x(e.dataIndex)?g(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?x(e.name)?g(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function mn(){var t="__\0ec_inner_"+sc+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function yn(t,e,n){if(b(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||_n(e,r+"Index")||_n(e,r+"Id")||_n(e,r+"Name")||(e[r+"Index"]=0);var a={};return nc(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var o=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=o[1],l=(o[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&h(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var c=t.queryComponents(u);a[s+"Models"]=c,a[s+"Model"]=c[0]}}else a[r]=i}),a}function _n(t,e){return t&&t.hasOwnProperty(e)}function xn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function wn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function bn(t){var e={main:"",sub:""};return t&&(t=t.split(lc),e.main=t[0]||"",e.sub=t[1]||""),e}function Sn(t){O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Mn(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return s(n.prototype,t),n.extend=this.extend,n.superCall=Cn,n.superApply=Tn,c(n,this),n.superClass=e,n}}function In(t){var e=["__\0is_clz",hc++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function Cn(t,e){var n=L(arguments,2);return this.superClass.prototype[e].apply(t,n)}function Tn(t,e,n){return this.superClass.prototype[e].apply(t,n)}function Dn(t,e){function n(t){var e=i[t.main];return e&&e[uc]||((e=i[t.main]={})[uc]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Sn(e),(e=bn(e)).sub?e.sub!==uc&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[uc]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=bn(t);var e=[],n=i[t.main];return n&&n[uc]?p(n,function(t,n){n!==uc&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=bn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return p(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=bn(t);var e=i[t.main];return e&&e[uc]},t.parseClassType=bn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function kn(t){return t>-yc&&t<yc}function An(t){return t>yc||t<-yc}function Ln(t,e,n,i,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function Pn(t,e,n,i,r){var a=1-r;return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)}function On(t,e,n,i,r,a){var o=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,h=s*s-3*o*l,c=s*l-9*o*u,f=l*l-3*s*u,d=0;if(kn(h)&&kn(c))kn(s)?a[0]=0:(M=-l/s)>=0&&M<=1&&(a[d++]=M);else{var p=c*c-4*h*f;if(kn(p)){var g=c/h,v=-g/2;(M=-s/o+g)>=0&&M<=1&&(a[d++]=M),v>=0&&v<=1&&(a[d++]=v)}else if(p>0){var m=mc(p),y=h*s+1.5*o*(-c+m),_=h*s+1.5*o*(-c-m);(M=(-s-((y=y<0?-vc(-y,wc):vc(y,wc))+(_=_<0?-vc(-_,wc):vc(_,wc))))/(3*o))>=0&&M<=1&&(a[d++]=M)}else{var x=(2*h*s-3*o*c)/(2*mc(h*h*h)),w=Math.acos(x)/3,b=mc(h),S=Math.cos(w),M=(-s-2*b*S)/(3*o),I=(v=(-s+b*(S+xc*Math.sin(w)))/(3*o),(-s+b*(S-xc*Math.sin(w)))/(3*o));M>=0&&M<=1&&(a[d++]=M),v>=0&&v<=1&&(a[d++]=v),I>=0&&I<=1&&(a[d++]=I)}}return d}function En(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(kn(o))An(a)&&(c=-s/a)>=0&&c<=1&&(r[l++]=c);else{var u=a*a-4*o*s;if(kn(u))r[0]=-a/(2*o);else if(u>0){var h=mc(u),c=(-a+h)/(2*o),f=(-a-h)/(2*o);c>=0&&c<=1&&(r[l++]=c),f>=0&&f<=1&&(r[l++]=f)}}return l}function Nn(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,h=(l-s)*r+s,c=(h-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=i}function zn(t,e,n,i,r,a,o,s,l,u,h){var c,f,d,p,g,v=.005,m=1/0;bc[0]=l,bc[1]=u;for(var y=0;y<1;y+=.05)Sc[0]=Ln(t,n,r,o,y),Sc[1]=Ln(e,i,a,s,y),(p=zu(bc,Sc))<m&&(c=y,m=p);m=1/0;for(var _=0;_<32&&!(v<_c);_++)f=c-v,d=c+v,Sc[0]=Ln(t,n,r,o,f),Sc[1]=Ln(e,i,a,s,f),p=zu(Sc,bc),f>=0&&p<m?(c=f,m=p):(Mc[0]=Ln(t,n,r,o,d),Mc[1]=Ln(e,i,a,s,d),g=zu(Mc,bc),d<=1&&g<m?(c=d,m=g):v*=.5);return h&&(h[0]=Ln(t,n,r,o,c),h[1]=Ln(e,i,a,s,c)),mc(m)}function Bn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function Rn(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function Fn(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),s=t-i,l=0;if(kn(a))An(o)&&(c=-s/o)>=0&&c<=1&&(r[l++]=c);else{var u=o*o-4*a*s;if(kn(u))(c=-o/(2*a))>=0&&c<=1&&(r[l++]=c);else if(u>0){var h=mc(u),c=(-o+h)/(2*a),f=(-o-h)/(2*a);c>=0&&c<=1&&(r[l++]=c),f>=0&&f<=1&&(r[l++]=f)}}return l}function Vn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function Wn(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n}function Hn(t,e,n,i,r,a,o,s,l){var u,h=.005,c=1/0;bc[0]=o,bc[1]=s;for(var f=0;f<1;f+=.05)Sc[0]=Bn(t,n,r,f),Sc[1]=Bn(e,i,a,f),(v=zu(bc,Sc))<c&&(u=f,c=v);c=1/0;for(var d=0;d<32&&!(h<_c);d++){var p=u-h,g=u+h;Sc[0]=Bn(t,n,r,p),Sc[1]=Bn(e,i,a,p);var v=zu(Sc,bc);if(p>=0&&v<c)u=p,c=v;else{Mc[0]=Bn(t,n,r,g),Mc[1]=Bn(e,i,a,g);var m=zu(Mc,bc);g<=1&&m<c?(u=g,c=m):h*=.5}}return l&&(l[0]=Bn(t,n,r,u),l[1]=Bn(e,i,a,u)),mc(c)}function Gn(t,e,n,i,r,a){r[0]=Ic(t,n),r[1]=Ic(e,i),a[0]=Cc(t,n),a[1]=Cc(e,i)}function Xn(t,e,n,i,r,a,o,s,l,u){var h,c=En,f=Ln,d=c(t,n,r,o,Oc);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,h=0;h<d;h++){var p=f(t,n,r,o,Oc[h]);l[0]=Ic(p,l[0]),u[0]=Cc(p,u[0])}for(d=c(e,i,a,s,Ec),h=0;h<d;h++){var g=f(e,i,a,s,Ec[h]);l[1]=Ic(g,l[1]),u[1]=Cc(g,u[1])}l[0]=Ic(t,l[0]),u[0]=Cc(t,u[0]),l[0]=Ic(o,l[0]),u[0]=Cc(o,u[0]),l[1]=Ic(e,l[1]),u[1]=Cc(e,u[1]),l[1]=Ic(s,l[1]),u[1]=Cc(s,u[1])}function jn(t,e,n,i,r,a,o,s){var l=Vn,u=Bn,h=Cc(Ic(l(t,n,r),1),0),c=Cc(Ic(l(e,i,a),1),0),f=u(t,n,r,h),d=u(e,i,a,c);o[0]=Ic(t,r,f),o[1]=Ic(e,a,d),s[0]=Cc(t,r,f),s[1]=Cc(e,a,d)}function qn(t,e,n,i,r,a,o,s,l){var u=$,h=K,c=Math.abs(r-a);if(c%kc<1e-4&&c>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Ac[0]=Dc(r)*n+t,Ac[1]=Tc(r)*i+e,Lc[0]=Dc(a)*n+t,Lc[1]=Tc(a)*i+e,u(s,Ac,Lc),h(l,Ac,Lc),(r%=kc)<0&&(r+=kc),(a%=kc)<0&&(a+=kc),r>a&&!o?a+=kc:r<a&&o&&(r+=kc),o){var f=a;a=r,r=f}for(var d=0;d<a;d+=Math.PI/2)d>r&&(Pc[0]=Dc(d)*n+t,Pc[1]=Tc(d)*i+e,u(s,Pc,s),h(l,Pc,l))}function Yn(t,e,n,i,r,a,o){if(0===r)return!1;var s=r,l=0;if(o>e+s&&o>i+s||o<e-s&&o<i-s||a>t+s&&a>n+s||a<t-s&&a<n-s)return!1;if(t===n)return Math.abs(a-t)<=s/2;var u=(l=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function Un(t,e,n,i,r,a,o,s,l,u,h){if(0===l)return!1;var c=l;return!(h>e+c&&h>i+c&&h>a+c&&h>s+c||h<e-c&&h<i-c&&h<a-c&&h<s-c||u>t+c&&u>n+c&&u>r+c&&u>o+c||u<t-c&&u<n-c&&u<r-c&&u<o-c)&&zn(t,e,n,i,r,a,o,s,u,h,null)<=c/2}function Zn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;return!(l>e+u&&l>i+u&&l>a+u||l<e-u&&l<i-u&&l<a-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&Hn(t,e,n,i,r,a,s,l,null)<=u/2}function $n(t){return(t%=Uc)<0&&(t+=Uc),t}function Kn(t,e,n,i,r,a,o,s,l){if(0===o)return!1;var u=o;s-=t,l-=e;var h=Math.sqrt(s*s+l*l);if(h-u>n||h+u<n)return!1;if(Math.abs(i-r)%Zc<1e-4)return!0;if(a){var c=i;i=$n(r),r=$n(c)}else i=$n(i),r=$n(r);i>r&&(r+=Zc);var f=Math.atan2(l,s);return f<0&&(f+=Zc),f>=i&&f<=r||f+Zc>=i&&f+Zc<=r}function Qn(t,e,n,i,r,a){if(a>e&&a>i||a<e&&a<i)return 0;if(i===e)return 0;var o=i<e?1:-1,s=(a-e)/(i-e);1!==s&&0!==s||(o=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?o:0}function Jn(t,e){return Math.abs(t-e)<Qc}function ti(){var t=tf[0];tf[0]=tf[1],tf[1]=t}function ei(t,e,n,i,r,a,o,s,l,u){if(u>e&&u>i&&u>a&&u>s||u<e&&u<i&&u<a&&u<s)return 0;var h=On(e,i,a,s,u,Jc);if(0===h)return 0;for(var c,f,d=0,p=-1,g=0;g<h;g++){var v=Jc[g],m=0===v||1===v?.5:1;Ln(t,n,r,o,v)<l||(p<0&&(p=En(e,i,a,s,tf),tf[1]<tf[0]&&p>1&&ti(),c=Ln(e,i,a,s,tf[0]),p>1&&(f=Ln(e,i,a,s,tf[1]))),2==p?v<tf[0]?d+=c<e?m:-m:v<tf[1]?d+=f<c?m:-m:d+=s<f?m:-m:v<tf[0]?d+=c<e?m:-m:d+=s<c?m:-m)}return d}function ni(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||s<e&&s<i&&s<a)return 0;var l=Fn(e,i,a,s,Jc);if(0===l)return 0;var u=Vn(e,i,a);if(u>=0&&u<=1){for(var h=0,c=Bn(e,i,a,u),f=0;f<l;f++)d=0===Jc[f]||1===Jc[f]?.5:1,(p=Bn(t,n,r,Jc[f]))<o||(Jc[f]<u?h+=c<e?d:-d:h+=a<c?d:-d);return h}var d=0===Jc[0]||1===Jc[0]?.5:1,p=Bn(t,n,r,Jc[0]);return p<o?0:a<e?d:-d}function ii(t,e,n,i,r,a,o,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Jc[0]=-u,Jc[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Kc<1e-4)return i=0,r=Kc,p=a?1:-1,o>=Jc[0]+t&&o<=Jc[1]+t?p:0;if(a){var u=i;i=$n(r),r=$n(u)}else i=$n(i),r=$n(r);i>r&&(r+=Kc);for(var h=0,c=0;c<2;c++){var f=Jc[c];if(f+t>o){var d=Math.atan2(s,f),p=a?1:-1;d<0&&(d=Kc+d),(d>=i&&d<=r||d+Kc>=i&&d+Kc<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),h+=p)}}return h}function ri(t,e,n,i,r){for(var a=0,o=0,s=0,l=0,u=0,h=0;h<t.length;){var c=t[h++];switch(c===$c.M&&h>1&&(n||(a+=Qn(o,s,l,u,i,r))),1==h&&(l=o=t[h],u=s=t[h+1]),c){case $c.M:o=l=t[h++],s=u=t[h++];break;case $c.L:if(n){if(Yn(o,s,t[h],t[h+1],e,i,r))return!0}else a+=Qn(o,s,t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.C:if(n){if(Un(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=ei(o,s,t[h++],t[h++],t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.Q:if(n){if(Zn(o,s,t[h++],t[h++],t[h],t[h+1],e,i,r))return!0}else a+=ni(o,s,t[h++],t[h++],t[h],t[h+1],i,r)||0;o=t[h++],s=t[h++];break;case $c.A:var f=t[h++],d=t[h++],p=t[h++],g=t[h++],v=t[h++],m=t[h++],y=(t[h++],1-t[h++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;h>1?a+=Qn(o,s,_,x,i,r):(l=_,u=x);var w=(i-f)*g/p+f;if(n){if(Kn(f,d,g,v,v+m,y,e,w,r))return!0}else a+=ii(f,d,g,v,v+m,y,w,r);o=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case $c.R:l=o=t[h++],u=s=t[h++];_=l+t[h++],x=u+t[h++];if(n){if(Yn(l,u,_,u,e,i,r)||Yn(_,u,_,x,e,i,r)||Yn(_,x,l,x,e,i,r)||Yn(l,x,l,u,e,i,r))return!0}else a+=Qn(_,u,_,x,i,r),a+=Qn(l,x,l,u,i,r);break;case $c.Z:if(n){if(Yn(o,s,l,u,e,i,r))return!0}else a+=Qn(o,s,l,u,i,r);o=l,s=u}}return n||Jn(s,u)||(a+=Qn(o,s,l,u,i,r)||0),0!==a}function ai(t,e,n){return ri(t,0,!1,e,n)}function oi(t,e,n,i){return ri(t,e,!0,n,i)}function si(t){Re.call(this,t),this.path=null}function li(t,e,n,i,r,a,o,s,l,u,h){var c=l*(pf/180),f=df(c)*(t-n)/2+ff(c)*(e-i)/2,d=-1*ff(c)*(t-n)/2+df(c)*(e-i)/2,p=f*f/(o*o)+d*d/(s*s);p>1&&(o*=cf(p),s*=cf(p));var g=(r===a?-1:1)*cf((o*o*(s*s)-o*o*(d*d)-s*s*(f*f))/(o*o*(d*d)+s*s*(f*f)))||0,v=g*o*d/s,m=g*-s*f/o,y=(t+n)/2+df(c)*v-ff(c)*m,_=(e+i)/2+ff(c)*v+df(c)*m,x=mf([1,0],[(f-v)/o,(d-m)/s]),w=[(f-v)/o,(d-m)/s],b=[(-1*f-v)/o,(-1*d-m)/s],S=mf(w,b);vf(w,b)<=-1&&(S=pf),vf(w,b)>=1&&(S=0),0===a&&S>0&&(S-=2*pf),1===a&&S<0&&(S+=2*pf),h.addData(u,y,_,o,s,x,S,c,a)}function ui(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<hf.length;e++)n=n.replace(new RegExp(hf[e],"g"),"|"+hf[e]);var i,r=n.split("|"),a=0,o=0,s=new Yc,l=Yc.CMD;for(e=1;e<r.length;e++){var u,h=r[e],c=h.charAt(0),f=0,d=h.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,w,b=a,S=o;switch(c){case"l":a+=d[f++],o+=d[f++],u=l.L,s.addData(u,a,o);break;case"L":a=d[f++],o=d[f++],u=l.L,s.addData(u,a,o);break;case"m":a+=d[f++],o+=d[f++],u=l.M,s.addData(u,a,o),c="l";break;case"M":a=d[f++],o=d[f++],u=l.M,s.addData(u,a,o),c="L";break;case"h":a+=d[f++],u=l.L,s.addData(u,a,o);break;case"H":a=d[f++],u=l.L,s.addData(u,a,o);break;case"v":o+=d[f++],u=l.L,s.addData(u,a,o);break;case"V":o=d[f++],u=l.L,s.addData(u,a,o);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),a=d[f-2],o=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o),a+=d[f-2],o+=d[f-1];break;case"S":g=a,v=o;var M=s.len(),I=s.data;i===l.C&&(g+=a-I[M-4],v+=o-I[M-3]),u=l.C,b=d[f++],S=d[f++],a=d[f++],o=d[f++],s.addData(u,g,v,b,S,a,o);break;case"s":g=a,v=o;M=s.len(),I=s.data;i===l.C&&(g+=a-I[M-4],v+=o-I[M-3]),u=l.C,b=a+d[f++],S=o+d[f++],a+=d[f++],o+=d[f++],s.addData(u,g,v,b,S,a,o);break;case"Q":b=d[f++],S=d[f++],a=d[f++],o=d[f++],u=l.Q,s.addData(u,b,S,a,o);break;case"q":b=d[f++]+a,S=d[f++]+o,a+=d[f++],o+=d[f++],u=l.Q,s.addData(u,b,S,a,o);break;case"T":g=a,v=o;M=s.len(),I=s.data;i===l.Q&&(g+=a-I[M-4],v+=o-I[M-3]),a=d[f++],o=d[f++],u=l.Q,s.addData(u,g,v,a,o);break;case"t":g=a,v=o;M=s.len(),I=s.data;i===l.Q&&(g+=a-I[M-4],v+=o-I[M-3]),a+=d[f++],o+=d[f++],u=l.Q,s.addData(u,g,v,a,o);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],li(b=a,S=o,a=d[f++],o=d[f++],x,w,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],w=d[f++],li(b=a,S=o,a+=d[f++],o+=d[f++],x,w,m,y,_,u=l.A,s)}}"z"!==c&&"Z"!==c||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}function hi(t,e){var n=ui(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){uf(n,t),this.dirty(!0)},e}function ci(t,e){return new si(hi(t,e))}function fi(t,e){return si.extend(hi(t,e))}function di(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function pi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var a=If(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var o=i.length,s=0;s<(n?o:o-1);s++){var l=a[2*s],u=a[2*s+1],h=i[(s+1)%o];t.bezierCurveTo(l[0],l[1],u[0],u[1],h[0],h[1])}}else{"spline"===r&&(i=Mf(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var c=i.length;s<c;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function gi(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Pn:Ln)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Pn:Ln)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?Rn:Bn)(t.x1,t.cpx1,t.x2,e),(n?Rn:Bn)(t.y1,t.cpy1,t.y2,e)]}function vi(t){Re.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function mi(t){return si.extend(t)}function yi(t,e,n,i){var r=ci(t,e),a=r.getBoundingRect();return n&&("center"===i&&(n=xi(n,a)),wi(r,n)),r}function _i(t,e,n){var i=new Fe({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(xi(e,r))}}});return i}function xi(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function wi(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function bi(t){var e=t.shape,n=t.style.lineWidth;return Rf(2*e.x1)===Rf(2*e.x2)&&(e.x1=e.x2=Si(e.x1,n,!0)),Rf(2*e.y1)===Rf(2*e.y2)&&(e.y1=e.y2=Si(e.y1,n,!0)),t}function Si(t,e,n){var i=Rf(2*t);return(i+Rf(e))%2==0?i/2:(i+(n?1:-1))/2}function Mi(t){return null!=t&&"none"!=t}function Ii(t){return"string"==typeof t?St(t,-.1):t}function Ci(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(Mi(n)?Ii(n):null),i.stroke=i.stroke||(Mi(e)?Ii(e):null);var r={};for(var a in i)null!=i[a]&&(r[a]=t.style[a]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Ti(t){if(!t.__isHover){if(Ci(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&Xi(e),e.extendFrom(t.__hoverStl),n&&(Gi(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Di(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function ki(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ti(t)}):Ti(t)}function Ai(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Di(t)}):Di(t)}function Li(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&Ci(t)}function Pi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&ki(this)}function Oi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Ai(this)}function Ei(){this.__isEmphasis=!0,ki(this)}function Ni(){this.__isEmphasis=!1,Ai(this)}function zi(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Li(t,e)}):Li(t,e),t.on("mouseover",Pi).on("mouseout",Oi),t.on("emphasis",Ei).on("normal",Ni)}function Bi(t,e,n,i,r,a,o){var s,l=(r=r||Wf).labelFetcher,u=r.labelDataIndex,h=r.labelDimIndex,c=n.getShallow("show"),f=i.getShallow("show");(c||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,h)),null==s&&(s=w(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=c?s:null,p=f?k(l?l.getFormattedLabel(u,"emphasis",null,h):null,s):null;null==d&&null==p||(Ri(t,n,a,r),Ri(e,i,o,r,!0)),t.text=d,e.text=p}function Ri(t,e,n,i,r){return Fi(t,e,i,r),n&&s(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function Fi(t,e,n,i){if((n=n||Wf).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var a=e.getShallow("rotate");null!=a&&(a*=Math.PI/180),t.textRotation=a,t.textDistance=k(e.getShallow("distance"),i?null:5)}var o,s=e.ecModel,l=s&&s.option.textStyle,u=Vi(e);if(u)for(var h in o={},u)if(u.hasOwnProperty(h)){var c=e.getModel(["rich",h]);Wi(o[h]={},c,l,n,i)}return t.rich=o,Wi(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Vi(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||Wf).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function Wi(t,e,n,i,r,a){if(n=!r&&n||Wf,t.textFill=Hi(e.getShallow("color"),i)||n.color,t.textStroke=Hi(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=k(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(a){var o=t.textPosition;t.insideRollback=Gi(t,o,i),t.insideOriginalTextPosition=o,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),a&&i.disableBox||(t.textBackgroundColor=Hi(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Hi(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Hi(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Gi(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Xi(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function ji(t,e){var n=e||e.getModel("textStyle");return E([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function qi(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function Yi(t,e,n,i,r){qi(!0,t,e,n,i,r)}function Ui(t,e,n,i,r){qi(!1,t,e,n,i,r)}function Zi(t,e,n){return e&&!d(e)&&(e=ju.getLocalTransform(e)),n&&(e=ht([],e)),Z([],t,e)}function $i(t,e,n,i){function r(t){var e={position:W(t.position),rotation:t.rotation};return t.shape&&(e.shape=s({},t.shape)),e}if(t&&e){var a=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid];if(e){var i=r(t);t.attr(r(e)),Yi(t,i,n,t.dataIndex)}}})}}function Ki(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Qi(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function Ji(t,e){var n=Uf(t).getParent;return n?n.call(t,e):t.parentModel}function tr(t){return[t||"",Zf++,Math.random().toFixed(5)].join("_")}function er(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function nr(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0];if(0===r)return 0===a?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]}function ir(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?er(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function rr(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function ar(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function or(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20);return isFinite(o)?o:20}function sr(t,e,n){if(!t[e])return 0;var i=v(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),a=g(t,function(t){return(isNaN(t)?0:t)/i*r*100}),o=100*r,s=g(a,function(t){return Math.floor(t)}),l=v(s,function(t,e){return t+e},0),u=g(a,function(t,e){return t-s[e]});l<o;){for(var h=Number.NEGATIVE_INFINITY,c=null,f=0,d=u.length;f<d;++f)u[f]>h&&(h=u[f],c=f);++s[c],u[c]=0,++l}return s[e]/r}function lr(t){var e=2*Math.PI;return(t%e+e)%e}function ur(t){return t>-$f&&t<$f}function hr(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Kf.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function cr(t){return Math.pow(10,fr(t))}function fr(t){return Math.floor(Math.log(t)/Math.LN10)}function dr(t,e){var n,i=fr(t),r=Math.pow(10,i),a=t/r;return n=e?a<1.5?1:a<2.5?2:a<4?3:a<7?5:10:a<1?1:a<2?2:a<3?3:a<5?5:10,t=n*r,i>=-20?+t.toFixed(i<0?-i:0):t}function pr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function gr(t){return null==t?"":(t+"").replace(Jf,function(t,e){return td[e]})}function vr(t,e,n){x(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],a=0;a<r.length;a++){var o=ed[a];t=t.replace(nd(o),nd(o,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(nd(ed[l],s),n?gr(u):u)}return t}function mr(t,e){var n=(t=b(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':""}function yr(t,e){return t+="","0000".substr(0,e-t.length)+t}function _r(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=hr(e),r=n?"UTC":"",a=i["get"+r+"FullYear"](),o=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),h=i["get"+r+"Seconds"](),c=i["get"+r+"Milliseconds"]();return t.replace("MM",yr(o,2)).replace("M",o).replace("yyyy",a).replace("yy",a%100).replace("dd",yr(s,2)).replace("d",s).replace("hh",yr(l,2)).replace("h",l).replace("mm",yr(u,2)).replace("m",u).replace("ss",yr(h,2)).replace("s",h).replace("SSS",yr(c,3))}function xr(t,e,n,i,r){var a=0,o=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var h,c,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(h=a+v)>i||l.newline?(a=0,h=v,o+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(c=o+m)>r||l.newline?(a+=s+n,o=0,c=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=h+n:o=c+n)})}function wr(t,e,n){n=Qf(n||0);var i=e.width,r=e.height,a=ir(t.left,i),o=ir(t.top,r),s=ir(t.right,i),l=ir(t.bottom,r),u=ir(t.width,i),h=ir(t.height,r),c=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-a),isNaN(h)&&(h=r-l-c-o),null!=d&&(isNaN(u)&&isNaN(h)&&(d>i/r?u=.8*i:h=.8*r),isNaN(u)&&(u=d*h),isNaN(h)&&(h=u/d)),isNaN(a)&&(a=i-s-u-f),isNaN(o)&&(o=r-l-h-c),t.left||t.right){case"center":a=i/2-u/2-n[3];break;case"right":a=i-u-f}switch(t.top||t.bottom){case"middle":case"center":o=r/2-h/2-n[0];break;case"bottom":o=r-h-c}a=a||0,o=o||0,isNaN(u)&&(u=i-f-a-(s||0)),isNaN(h)&&(h=r-c-o-(l||0));var p=new Rt(a+n[3],o+n[0],u,h);return p.margin=n,p}function br(t,e,n){function i(n,i){var o={},l=0,u={},h=0;if(rd(n,function(e){u[e]=t[e]}),rd(n,function(t){r(e,t)&&(o[t]=u[t]=e[t]),a(o,t)&&l++,a(u,t)&&h++}),s[i])return a(e,n[1])?u[n[2]]=null:a(e,n[2])&&(u[n[1]]=null),u;if(2!==h&&l){if(l>=2)return o;for(var c=0;c<n.length;c++){var f=n[c];if(!r(o,f)&&r(t,f)){o[f]=t[f];break}}return o}return u}function r(t,e){return t.hasOwnProperty(e)}function a(t,e){return null!=t[e]&&"auto"!==t[e]}function o(t,e,n){rd(t,function(t){e[t]=n[t]})}!S(n)&&(n={});var s=n.ignoreSize;!x(s)&&(s=[s,s]);var l=i(od[0],0),u=i(od[1],1);o(od[0],t,l),o(od[1],t,u)}function Sr(t){return Mr({},t)}function Mr(t,e){return e&&t&&rd(ad,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Ir(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}function Cr(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:R(),categoryAxisMap:R()},i=pd[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Tr(t){return"category"===t.get("type")}function Dr(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===yd?{}:[]),this.sourceFormat=t.sourceFormat||_d,this.seriesLayoutBy=t.seriesLayoutBy||wd,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&R(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function kr(t){var e=t.option.source,n=_d;if(I(e))n=xd;else if(x(e))for(var i=0,r=e.length;i<r;i++){var a=e[i];if(null!=a){if(x(a)){n=vd;break}if(S(a)){n=md;break}}}else if(S(e)){for(var o in e)if(e.hasOwnProperty(o)&&d(e[o])){n=yd;break}}else if(null!=e)throw new Error("Invalid data");Sd(t).sourceFormat=n}function Ar(t){return Sd(t).source}function Lr(t){Sd(t).datasetMap=R()}function Pr(t){var e=t.option,n=e.data,i=I(n)?xd:gd,r=!1,a=e.seriesLayoutBy,o=e.sourceHeader,s=e.dimensions,l=Rr(t);if(l){var u=l.option;n=u.source,i=Sd(l).sourceFormat,r=!0,a=a||u.seriesLayoutBy,null==o&&(o=u.sourceHeader),s=s||u.dimensions}var h=Or(n,i,a,o,s),c=e.encode;!c&&l&&(c=Br(t,l,n,i,a,h)),Sd(t).source=new Dr({data:n,fromDataset:r,seriesLayoutBy:a,sourceFormat:i,dimensionsDefine:h.dimensionsDefine,startIndex:h.startIndex,dimensionsDetectCount:h.dimensionsDetectCount,encodeDefine:c})}function Or(t,e,n,i,r){if(!t)return{dimensionsDefine:Er(r)};var a,o,s,l;if(e===vd)"auto"===i||null==i?Nr(function(t){null!=t&&"-"!==t&&(b(t)?null==o&&(o=1):o=0)},n,t,10):o=i?1:0,r||1!==o||(r=[],Nr(function(t,e){r[e]=null!=t?t:""},n,t)),a=r?r.length:n===bd?t.length:t[0]?t[0].length:null;else if(e===md)r||(r=zr(t),s=!0);else if(e===yd)r||(r=[],s=!0,p(t,function(t,e){r.push(e)}));else if(e===gd){var u=hn(t[0]);a=x(u)&&u.length||1}return s&&p(r,function(t,e){"name"===(S(t)?t.name:t)&&(l=e)}),{startIndex:o,dimensionsDefine:Er(r),dimensionsDetectCount:a,potentialNameDimIndex:l}}function Er(t){if(t){var e=R();return g(t,function(t,n){if(null==(t=s({},S(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Nr(t,e,n,i){if(null==i&&(i=1/0),e===bd)for(a=0;a<n.length&&a<i;a++)t(n[a]?n[a][0]:null,a);else for(var r=n[0]||[],a=0;a<r.length&&a<i;a++)t(r[a],a)}function zr(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return p(e,function(t,e){i.push(e)}),i}}function Br(t,e,n,i,r,a){var o=Cr(t),s={},l=[],u=[],h=t.subType,c=R(["pie","map","funnel"]),f=R(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(o&&null!=f.get(h)){var d=t.ecModel,g=Sd(d).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});p(o.coordSysDims,function(t){if(null==o.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(o.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=c.get(h)){for(var y,_=0;_<5&&null==y;_++)Vr(n,i,r,a.dimensionsDefine,a.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=a.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function Rr(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function Fr(t,e){return Vr(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Vr(t,e,n,i,r,a){function o(t){return(null==t||!isFinite(t)||""===t)&&(!(!b(t)||"-"===t)||void 0)}var s,l;if(I(t))return!1;if(i&&(l=S(l=i[a])?l.name:l),e===vd)if(n===bd){for(var u=t[a],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=o(u[r+h])))return s}else for(h=0;h<t.length&&h<5;h++){var c=t[r+h];if(c&&null!=(s=o(c[a])))return s}else if(e===md){if(!l)return;for(h=0;h<t.length&&h<5;h++)if((f=t[h])&&null!=(s=o(f[l])))return s}else if(e===yd){if(!l)return;if(!(u=t[l])||I(u))return!1;for(h=0;h<u.length&&h<5;h++)if(null!=(s=o(u[h])))return s}else if(e===gd)for(h=0;h<t.length&&h<5;h++){var f=t[h],d=hn(f);if(!x(d))return!1;if(null!=(s=o(d[a])))return s}return!1}function Wr(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function Hr(t,e){var n=t.color&&!t.colorLayer;p(e,function(e,i){"colorLayer"===i&&n||ud.hasClass(i)||("object"==typeof e?t[i]=t[i]?a(t[i],e,!1):r(e):null==t[i]&&(t[i]=e))})}function Gr(t){t=t,this.option={},this.option[Md]=1,this._componentsMap=R({series:[]}),this._seriesIndices,this._seriesIndicesMap,Hr(t,this._theme.option),a(t,cd,!1),this.mergeOption(t)}function Xr(t,e){x(e)||(e=e?[e]:[]);var n={};return p(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function jr(t,e,n){return e.type?e.type:n?n.subType:ud.determineSubType(t,e)}function qr(t,e){t._seriesIndicesMap=R(t._seriesIndices=g(e,function(t){return t.componentIndex})||[])}function Yr(t,e){return e.hasOwnProperty("subType")?m(t,function(t){return t.subType===e.subType}):t}function Ur(t){p(Cd,function(e){this[e]=y(t[e],t)},this)}function Zr(){this._coordinateSystems=[]}function $r(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Kr(t,e,n){var i,r,a=[],o=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},a=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Dd(l,function(t){t&&t.option&&(t.query?o.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Dd([r].concat(a).concat(g(o,function(t){return t.option})),function(t){Dd(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:a,mediaDefault:i,mediaList:o}}function Qr(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return p(t,function(t,e){var n=e.match(Pd);if(n&&n[1]&&n[2]){var a=n[1],o=n[2].toLowerCase();Jr(i[o],t,a)||(r=!1)}}),r}function Jr(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function ta(t,e){return t.join(",")===e.join(",")}function ea(t,e){Dd(e=e||{},function(e,n){if(null!=e){var i=t[n];if(ud.hasClass(n)){e=ln(e);var r=fn(i=ln(i),e);t[n]=Ad(r,function(t){return t.option&&t.exist?Ld(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Ld(i,e,!0)}})}function na(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Nd.length;n<i;n++){var r=Nd[n],o=e.normal,s=e.emphasis;o&&o[r]&&(t[r]=t[r]||{},t[r].normal?a(t[r].normal,o[r]):t[r].normal=o[r],o[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?a(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function ia(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,l(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ra(t){ia(t,"itemStyle"),ia(t,"lineStyle"),ia(t,"areaStyle"),ia(t,"label"),ia(t,"labelLine"),ia(t,"upperLabel"),ia(t,"edgeLabel")}function aa(t,e){var n=Ed(t)&&t[e],i=Ed(n)&&n.textStyle;if(i)for(var r=0,a=oc.length;r<a;r++){e=oc[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function oa(t){t&&(ra(t),aa(t,"label"),t.emphasis&&aa(t.emphasis,"label"))}function sa(t){if(Ed(t)){na(t),ra(t),aa(t,"label"),aa(t,"upperLabel"),aa(t,"edgeLabel"),t.emphasis&&(aa(t.emphasis,"label"),aa(t.emphasis,"upperLabel"),aa(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(na(e),oa(e));var n=t.markLine;n&&(na(n),oa(n));var i=t.markArea;i&&oa(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var a=t.links||t.edges;if(a&&!I(a))for(s=0;s<a.length;s++)oa(a[s]);p(t.categories,function(t){ra(t)})}if(r&&!I(r))for(s=0;s<r.length;s++)oa(r[s]);if((e=t.markPoint)&&e.data)for(var o=e.data,s=0;s<o.length;s++)oa(o[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)x(l[s])?(oa(l[s][0]),oa(l[s][1])):oa(l[s])}"gauge"===t.type?(aa(t,"axisLabel"),aa(t,"title"),aa(t,"detail")):"treemap"===t.type?(ia(t.breadcrumb,"itemStyle"),p(t.levels,function(t){ra(t)})):"tree"===t.type&&ra(t.leaves)}}function la(t){return x(t)?t:t?[t]:[]}function ua(t){return(x(t)?t[0]:t)||{}}function ha(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function ca(t,e,n,i){e=e.split(",");for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r];(i||null==a[e[o]])&&(a[e[o]]=n)}function fa(t){p(Bd,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function da(t){p(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var h,c,f=o.get(e.stackedDimension,u);if(isNaN(f))return r;s?c=o.getRawIndex(u):h=o.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(c=g.data.rawIndexOf(g.stackedByDimension,h)),c>=0){var v=g.data.getByRawIndex(g.stackResultDimension,c);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});o.hostModel.setData(l),e.data=l})}function pa(t,e){Dr.isInstance(t)||(t=Dr.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===xd&&(this._offset=0,this._dimSize=e,this._data=n),s(this,Wd[i===vd?i+"_"+t.seriesLayoutBy:i])}function ga(){return this._data.length}function va(t){return this._data[t]}function ma(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function ya(t,e,n,i){return null!=n?t[n]:t}function _a(t,e,n,i){return xa(t[i],this._dimensionInfos[e])}function xa(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+hr(t)),null==t||""===t?NaN:+t}function wa(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,a=s.index),Hd[o](i,e,a,r)}}}function ba(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===gd||i===md){var r=t.getRawDataItem(e);return i!==gd||S(r)||(r=null),r?r[n]:void 0}}}function Sa(t){return new Ma(t)}function Ma(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function Ia(t,e,n,i,r,a){Yd.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:Yd.next},t.context)}function Ca(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),x(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Ta(t){var e=t.name;pn(t)||(t.name=Da(t)||e)}function Da(t){var e=t.getRawData(),n=[];return p(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function ka(t){return t.model.getRawData().count()}function Aa(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),La}function La(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Pa(t,e){p(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,_(Oa,e))})}function Oa(t){var e=Ea(t);e&&e.setOutputEnd(this.count())}function Ea(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Na(){this.group=new ph,this.uid=tr("viewChart"),this.renderTask=Sa({plan:Ra,reset:Fa}),this.renderTask.context={view:this}}function za(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)za(t.childAt(n),e)}function Ba(t,e,n){var i=vn(t,e);null!=i?p(ln(i),function(e){za(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){za(t,n)})}function Ra(t){return tp(t.model)}function Fa(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&Jd(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render";return"render"!==l&&o[l](e,n,i,r),np[l]}function Va(t,e,n){function i(){h=(new Date).getTime(),c=null,t.apply(o,s||[])}var r,a,o,s,l,u=0,h=0,c=null;e=e||0;var f=function(){r=(new Date).getTime(),o=this,s=arguments;var t=l||e,f=l||n;l=null,a=r-(f?u:h)-t,clearTimeout(c),f?c=setTimeout(i,t):a>=0?i():c=setTimeout(i,-a),u=r};return f.clear=function(){c&&(clearTimeout(c),c=null)},f.debounceNextCall=function(t){l=t},f}function Wa(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=R()}function Ha(t,e,n,i,r){function a(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var o;r=r||{},p(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask;if(h){var c,f=h.agentStubMap;f.each(function(t){a(r,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),lp(h,i);var d=t.getPerformArgs(h,r.block);f.each(function(t){t.perform(d)}),o|=h.perform(d)}else u&&u.each(function(s,l){a(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),lp(s,i),o|=s.perform(u)})}}),t.unfinished|=o}function Ga(t,e,n,i,r){function a(n){var a=n.uid,s=o.get(a)||o.set(a,Sa({plan:Za,reset:$a,count:Qa}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},Ja(t,n,s)}var o=n.seriesTaskMap||(n.seriesTaskMap=R()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(a):s?i.eachRawSeriesByType(s,a):l&&l(i,r).each(a);var u=t._pipelineMap;o.each(function(t,e){u.get(e)||(t.dispose(),o.removeKey(e))})}function Xa(t,e,n,i,r){function a(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Sa({reset:qa,onDirty:Ua})),o.dirty()),i.context={model:e,overallProgress:h,modifyOutputEnd:c},i.agent=o,i.__block=h,Ja(t,e,i)}var o=n.overallTask=n.overallTask||Sa({reset:ja});o.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=o.agentStubMap=o.agentStubMap||R(),l=e.seriesType,u=e.getTargetSeries,h=!0,c=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,a):u?u(i,r).each(a):(h=!1,p(i.getSeries(),a));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),o.dirty(),s.removeKey(e))})}function ja(t){t.overallReset(t.ecModel,t.api,t.payload)}function qa(t,e){return t.overallProgress&&Ya}function Ya(){this.agent.dirty(),this.getDownstream().dirty()}function Ua(){this.agent&&this.agent.dirty()}function Za(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function $a(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=ln(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?g(e,function(t,e){return Ka(e)}):up}function Ka(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a);else r&&r.progress&&r.progress(e,i)}}function Qa(t){return t.data.count()}function Ja(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function to(t){hp=null;try{t(cp,fp)}catch(t){}return hp}function eo(t,e){for(var n in e.prototype)t[n]=F}function no(t){return function(e,n,i){e=e&&e.toLowerCase(),Ru.prototype[t].call(this,e,n,i)}}function io(){Ru.call(this)}function ro(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=Fp[e]),this.id,this.group,this._dom=t;var a=this._zr=sn(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=Va(y(a.flush,a),17),(e=r(e))&&Fd(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Zr;var o=this._api=So(this);qt(Rp,i),qt(Np,i),this._scheduler=new Wa(this,o,Np,Rp),Ru.call(this),this._messageCenter=new io,this._initEvents(),this.resize=y(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),fo(a,this),N(this)}function ao(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems();e=yn(r,e);for(var o=0;o<a.length;o++){var s=a[o];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function oo(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),po(t,"component",e,n),po(t,"chart",e,n),n.plan()}function so(t,e,n,i,r){function a(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}var o=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=R(ln(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||a(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else yp(t._componentsViews.concat(t._chartsViews),a)}function lo(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function uo(t,e){var n=t.type,i=t.escapeConnect,r=Op[n],a=r.actionInfo,o=(a.update||"update").split(":"),u=o.pop();o=null!=o[0]&&wp(o[0]),this[Tp]=!0;var h=[t],c=!1;t.batch&&(c=!0,h=g(t.batch,function(e){return e=l(s({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;yp(h,function(t){f=r.action(t,this._model,this._api),(f=f||s({},t)).type=a.event||f.type,d.push(f),p?so(this,u,t,"series"):o&&so(this,u,t,o.main,o.sub)},this),"none"===u||p||o||(this[Dp]?(oo(this),Lp.update.call(this,t),this[Dp]=!1):Lp[u].call(this,t)),f=c?{type:a.event||n,escapeConnect:i,batch:d}:d[0],this[Tp]=!1,!e&&this._messageCenter.trigger(f.type,f)}function ho(t){for(var e=this._pendingActions;e.length;){var n=e.shift();uo.call(this,n,t)}}function co(t){!t&&this.trigger("updated")}function fo(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Dp]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function po(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var h=wp(t.type);(r=new(a?$d.getClass(h.main,h.sub):Na.getClass(h.sub))).init(n,u),s[e]=r,o.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!a&&i.prepareView(r,t,n,u)}for(var a="component"===e,o=a?t._componentsViews:t._chartsViews,s=a?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,h=0;h<o.length;h++)o[h].__alive=!1;for(a?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),h=0;h<o.length;){var c=o[h];c.__alive?h++:(!a&&c.renderTask.dispose(),l.remove(c.group),c.dispose(n,u),o.splice(h,1),delete s[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function go(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function vo(t,e,n,i){mo(t,e,n,i),yp(t._chartsViews,function(t){t.__alive=!1}),yo(t,e,n,i),yp(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function mo(t,e,n,i,r){yp(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),bo(r,t)})}function yo(t,e,n,i,r){var a,o=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;o.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),a|=s.perform(o.getPerformArgs(s)),n.group.silent=!!e.get("silent"),bo(e,n),wo(e,n)}),o.unfinished|=a,xo(t._zr,e),ap(t._zr.dom,e)}function _o(t,e){yp(Bp,function(n){n(t,e)})}function xo(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!xu.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function wo(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function bo(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function So(t){var e=t._coordSysMgr;return s(new Ur(t),{getCoordinateSystems:y(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Mo(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";yp(Ep,function(i,r){t._messageCenter.on(r,function(i){if(Hp[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),a=[];yp(Wp,function(e){e!==t&&e.group===t.group&&a.push(e)}),e(a,0),yp(a,function(t){1!==t[n]&&t.dispatchAction(r)}),e(a,2)}})})}function Io(t){Hp[t]=!1}function Co(t){return Wp[wn(t,jp)]}function To(t,e){Fp[t]=e}function Do(t){zp.push(t)}function ko(t,e){Oo(Np,t,e,Sp)}function Ao(t,e,n){"function"==typeof e&&(n=e,e="");var i=xp(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,mp(kp.test(i)&&kp.test(e)),Op[i]||(Op[i]={action:n,actionInfo:t}),Ep[e]=i}function Lo(t,e){Oo(Rp,t,e,Mp,"layout")}function Po(t,e){Oo(Rp,t,e,Ip,"visual")}function Oo(t,e,n,i,r){(_p(e)||xp(e))&&(n=e,e=i);var a=Wa.wrapStageHandler(n,r);return a.__prio=e,a.__raw=n,t.push(a),a}function Eo(t,e){Vp[t]=e}function No(t){return $d.extend(t)}function zo(t){return Zd.extend(t)}function Bo(t){return Na.extend(t)}function Ro(t){return t}function Fo(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||Ro,this._newKeyGetter=i||Ro,this.context=r}function Vo(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o];null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}function Wo(t){var e={},n=e.encode={},i=R(),r=[],a=[];p(t.dimensions,function(e){var o=t.getDimensionInfo(e),s=o.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[o.coordDimIndex]=e,o.isExtraCoord||(i.set(s,1),Go(o.type)&&(r[0]=e)),o.defaultTooltip&&a.push(e)}Zp.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=o.otherDims[e];null!=r&&!1!==r&&(i[r]=o.name)})});var o=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],o=o.concat(i)}),e.dataDimsOnCoord=o,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?a=u.slice():a.length||(a=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=a,e}function Ho(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Go(t){return!("ordinal"===t||"time"===t)}function Xo(t){return t._rawCount>65535?Jp:tg}function jo(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function qo(t,e){p(eg.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,p(ng,function(n){t[n]=r(e[n])}),t._calculationInfo=s(e._calculationInfo)}function Yo(t){var e=t._invertedIndicesMap;p(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Jp(r.categories.length),a=0;a<n.length;a++)n[a]=NaN;for(var a=0;a<t._count;a++)n[t.get(i,a)]=a}})}function Uo(t,e,n){var i;if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a];if(l){i=l[o];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Zo(t){return t}function $o(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ko(t,e){var n=t._idList[e];return null==n&&(n=Uo(t,t._idDimIdx,e)),null==n&&(n=Kp+e),n}function Qo(t){return x(t)||(t=[t]),t}function Jo(t,e){var n=t.dimensions,i=new ig(g(n,t.getDimensionInfo,t),t.hostModel);qo(i,t);for(var r=i._storage={},a=t._storage,o=0;o<n.length;o++){var s=n[o];a[s]&&(h(e,s)>=0?(r[s]=ts(a[s]),i._rawExtent[s]=es(),i._extent[s]=null):r[s]=a[s])}return i}function ts(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=jo(t[n]);return e}function es(){return[1/0,-1/0]}function ns(t,e,n){function i(t,e,n){null!=Zp.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,h.set(e,!0))}Dr.isInstance(e)||(e=Dr.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var a=(n.dimsDef||[]).slice(),o=R(n.encodeDef),u=R(),h=R(),c=[],f=is(e,t,a,n.dimCount),d=0;d<f;d++){var g=a[d]=s({},S(a[d])?a[d]:{name:a[d]}),v=g.name,m=c[d]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,d)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}o.each(function(t,e){t=ln(t).slice();var n=o.set(e,[]);p(t,function(t,r){b(t)&&(t=u.get(t)),null!=t&&t<f&&(n[r]=t,i(c[t],e,r))})});var y=0;p(t,function(t,e){var n,a,s;if(b(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=r(t)).ordinalMeta=u,a=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var h=ln(o.get(n));if(!h.length)for(var f=0;f<(a&&a.length||1);f++){for(;y<c.length&&null!=c[y].coordDim;)y++;y<c.length&&h.push(y++)}p(h,function(e,r){var o=c[e];if(i(l(o,t),n,r),null==o.name&&a){var u=a[r];!S(u)&&(u={name:u}),o.name=o.displayName=u.name,o.defaultTooltip=u.defaultTooltip}s&&l(o.otherDims,s)})});var _=n.generateCoord,x=n.generateCoordCount,w=null!=x;x=_?x||1:0;for(var M=_||"value",I=0;I<f;I++)null==(m=c[I]=c[I]||{}).coordDim&&(m.coordDim=rs(M,h,w),m.coordDimIndex=0,(!_||x<=0)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=rs(m.coordDim,u)),null==m.type&&Fr(e,I,m.name)&&(m.type="ordinal");return c}function is(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return p(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function rs(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function as(t,e,n){var i,r,a,o,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(p(e,function(t,n){b(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){a="__\0ecstackresult",o="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var h=r.coordDim,c=r.type,f=0;p(e,function(t){t.coordDim===h&&f++}),e.push({name:a,coordDim:h,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:o,coordDim:o,coordDimIndex:f,type:c,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:o,stackResultDimension:a}}function os(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function ss(t,e){return os(t,e)?t.getCalculationInfo("stackResultDimension"):e}function ls(t,e,n){n=n||{},Dr.isInstance(t)||(t=Dr.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),a=Zr.get(r),o=Cr(e);o&&(i=g(o.coordSysDims,function(t){var e={name:t},n=o.axisMap.get(t);if(n){var i=n.get("type");e.type=Ho(i)}return e})),i||(i=a&&(a.getDimensionsInfo?a.getDimensionsInfo():a.dimensions.slice())||["x","y"]);var s,l,u=og(t,{coordDimensions:i,generateCoord:n.generateCoord});o&&p(u,function(t,e){var n=t.coordDim,i=o.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var h=as(e,u),c=new ig(u,e);c.setCalculationInfo(h);var f=null!=s&&us(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return c.hasItemOption=!1,c.initData(t,null,f),c}function us(t){if(t.sourceFormat===gd){var e=hs(t.data||[]);return null!=e&&!x(hn(e))}}function hs(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function cs(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function fs(t,e,n,i,r,a,o){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?_i(t.slice(8),new Rt(e,n,i,r),o?"center":"cover"):0===t.indexOf("path://")?yi(t.slice(7),{},new Rt(e,n,i,r),o?"center":"cover"):new dg({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=cs,s.setColor(a),s}function ds(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return wa(t,e,n[0]);if(i){for(var r=[],a=0;a<n.length;a++){var o=wa(t,e,n[a]);r.push(o)}return r.join(" ")}}function ps(t,e,n){ph.call(this),this.updateData(t,e,n)}function gs(t){return[t[0]/2,t[1]/2]}function vs(t,e){this.parent.drift(t,e)}function ms(t){this.group=new ph,this._symbolCtor=t||ps}function ys(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function _s(t){return null==t||S(t)||(t={isIgnore:t}),t||{}}function xs(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function ws(t,e,n){var i,r=t.getBaseAxis(),a=t.getOtherAxis(r),o=bs(a,n),s=r.dim,l=a.dim,u=e.mapDimension(l),h=e.mapDimension(s),c="x"===l||"radius"===l?1:0,f=g(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=os(e,f[0]))&&(f[0]=d),(i|=os(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:o,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:h,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function bs(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Ss(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var a=t.baseDataOffset,o=[];return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}function Ms(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Is(t){return isNaN(t[0])||isNaN(t[1])}function Cs(t,e,n,i,r,a,o,s,l,u,h){return"none"!==u&&u?Ts.apply(this,arguments):Ds.apply(this,arguments)}function Ts(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Is(p)){if(h){f+=a;continue}break}if(f===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[c],v="y"===u?1:0,m=(p[v]-g[v])*l;Ig(Tg,g),Tg[v]=g[v]+m,Ig(Dg,p),Dg[v]=p[v]-m,t.bezierCurveTo(Tg[0],Tg[1],Dg[0],Dg[1],p[0],p[1])}else t.lineTo(p[0],p[1]);c=f,f+=a}return d}function Ds(t,e,n,i,r,a,o,s,l,u,h){for(var c=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Is(p)){if(h){f+=a;continue}break}if(f===n)t[a>0?"moveTo":"lineTo"](p[0],p[1]),Ig(Tg,p);else if(l>0){var g=f+a,v=e[g];if(h)for(;v&&Is(e[g]);)v=e[g+=a];var m=.5,y=e[c];if(!(v=e[g])||Is(v))Ig(Dg,p);else{var _,x;if(Is(v)&&!h&&(v=p),G(Cg,v,y),"x"===u||"y"===u){var w="x"===u?0:1;_=Math.abs(p[w]-y[w]),x=Math.abs(p[w]-v[w])}else _=Nu(p,y),x=Nu(p,v);Mg(Dg,p,Cg,-l*(1-(m=x/(x+_))))}bg(Tg,Tg,s),Sg(Tg,Tg,o),bg(Dg,Dg,s),Sg(Dg,Dg,o),t.bezierCurveTo(Tg[0],Tg[1],Dg[0],Dg[1],p[0],p[1]),Mg(Tg,p,Cg,l*m)}else t.lineTo(p[0],p[1]);c=f,f+=a}return d}function ks(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var a=t[r];a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}function As(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Ls(t){return"number"==typeof t?t:t?.5:0}function Ps(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Os(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,a=e.count();r<a;r++)i.push(Ss(n,t,e,r));return i}function Es(t,e,n,i){var r=Ps(t.getAxis("x")),a=Ps(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(a[0],a[1]),u=Math.max(r[0],r[1])-s,h=Math.max(a[0],a[1])-l;if(n)s-=.5,u+=.5,l-=.5,h+=.5;else{var c=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?c/2:Math.max(u,h);o?(l-=f,h+=2*f):(s-=f,u+=2*f)}var d=new Df({shape:{x:s,y:l,width:u,height:h}});return e&&(d.shape[o?"width":"height"]=0,Ui(d,{shape:{width:u,height:h}},i)),d}function Ns(t,e,n,i){var r=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice();a[0]>a[1]&&a.reverse();var o=r.getExtent(),s=Math.PI/180;n&&(a[0]-=.5,a[1]+=.5);var l=new bf({shape:{cx:rr(t.cx,1),cy:rr(t.cy,1),r0:rr(a[0],1),r:rr(a[1],1),startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-o[0]*s,Ui(l,{shape:{endAngle:-o[1]*s}},i)),l}function zs(t,e,n,i){return"polar"===t.type?Ns(t,e,n,i):Es(t,e,n,i)}function Bs(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o];a.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u);break;case"middle":var h=(l[r]+s[r])/2,c=[];u[r]=c[r]=h,u[1-r]=l[1-r],c[1-r]=s[1-r],a.push(u),a.push(c);break;default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function Rs(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,a=n.length-1;a>=0;a--){var o=n[a].dimension,s=t.dimensions[o],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[a];break}}if(r){var u=e.getAxis(i),h=g(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),c=h.length,f=r.outerColors.slice();c&&h[0].coord>h[c-1].coord&&(h.reverse(),f.reverse());var d=h[0].coord-10,v=h[c-1].coord+10,m=v-d;if(m<.001)return"transparent";p(h,function(t){t.offset=(t.coord-d)/m}),h.push({offset:c?h[c-1].offset:.5,color:f[1]||"transparent"}),h.unshift({offset:c?h[0].offset:.5,color:f[0]||"transparent"});var y=new Nf(0,0,0,0,h,!0);return y[i]=d,y[i+"2"]=v,y}}}function Fs(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var a=n.getAxesByScale("ordinal")[0];if(a&&(!r||!Vs(a,e))){var o=e.mapDimension(a.dim),s={};return p(a.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(o,t))}}}}function Vs(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),a=Math.max(1,Math.round(r/5)),o=0;o<r;o+=a)if(1.5*ps.getSymbolSize(e,o)[t.isHorizontal()?1:0]>i)return!1;return!0}function Ws(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Hs(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Gs(t){return t._map||(t._map=R(t.categories))}function Xs(t){return S(t)&&null!=t.value?t.value:t+""}function js(t,e,n,i){var r={},a=t[1]-t[0],o=r.interval=dr(a/e,!0);null!=n&&o<n&&(o=r.interval=n),null!=i&&o>i&&(o=r.interval=i);var s=r.intervalPrecision=qs(o);return Us(r.niceTickExtent=[zg(Math.ceil(t[0]/o)*o,s),zg(Math.floor(t[1]/o)*o,s)],t),r}function qs(t){return ar(t)+2}function Ys(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Us(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),Ys(t,0,e),Ys(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Zs(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var a=n[0];a<=n[1]&&(r.push(a),(a=zg(a+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function $s(t){return t.get("stack")||Fg+t.seriesIndex}function Ks(t){return t.dim+t.index}function Qs(t,e){var n=[];return e.eachSeriesByType(t,function(t){nl(t)&&!il(t)&&n.push(t)}),n}function Js(t){var e=[];return p(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),a="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),o=ir(t.get("barWidth"),a),s=ir(t.get("barMaxWidth"),a),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:a,barWidth:o,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Ks(i),stackId:$s(t)})}),tl(e)}function tl(t){var e={};p(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks;e[i]=a;var s=t.stackId;o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l);var u=t.barMaxWidth;u&&(o[s].maxWidth=u);var h=t.barGap;null!=h&&(a.gap=h);var c=t.barCategoryGap;null!=c&&(a.categoryGap=c)});var n={};return p(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,a=ir(t.categoryGap,r),o=ir(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-a)/(l+(l-1)*o);u=Math.max(u,0),p(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-a)/(l+(l-1)*o),u=Math.max(u,0);var h,c=0;p(i,function(t,e){t.width||(t.width=u),h=t,c+=t.width*(1+o)}),h&&(c-=h.width*o);var f=-c/2;p(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+o)})}),n}function el(t,e,n){if(t&&e){var i=t[Ks(e)];return null!=i&&null!=n&&(i=i[$s(n)]),i}}function nl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function il(t){return t.pipelineContext&&t.pipelineContext.large}function rl(t,e,n){return h(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function al(t,e){return Kg(t,$g(e))}function ol(t,e){var n,i,r,a=t.type,o=e.getMin(),s=e.getMax(),l=null!=o,u=null!=s,h=t.getExtent();"ordinal"===a?n=e.getCategories().length:(x(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=ir(i[0],1),i[1]=ir(i[1],1),r=h[1]-h[0]||Math.abs(h[0])),null==o&&(o="ordinal"===a?n?0:NaN:h[0]-i[0]*r),null==s&&(s="ordinal"===a?n?n-1:NaN:h[1]+i[1]*r),"dataMin"===o?o=h[0]:"function"==typeof o&&(o=o({min:h[0],max:h[1]})),"dataMax"===s?s=h[1]:"function"==typeof s&&(s=s({min:h[0],max:h[1]})),(null==o||!isFinite(o))&&(o=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(T(o)||T(s)||"ordinal"===a&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(o>0&&s>0&&!l&&(o=0),o<0&&s<0&&!u&&(s=0));var c=e.ecModel;if(c&&"time"===a){var f,d=Qs("bar",c);if(p(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var g=Js(d),v=sl(o,s,e,g);o=v.min,s=v.max}}return[o,s]}function sl(t,e,n,i){var r=n.axis.getExtent(),a=r[1]-r[0],o=el(i,n.axis);if(void 0===o)return{min:t,max:e};var s=1/0;p(o,function(t){s=Math.min(t.offset,s)});var l=-1/0;p(o,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,h=e-t,c=h/(1-(s+l)/a)-h;return e+=c*(l/u),t-=c*(s/u),{min:t,max:e}}function ll(t,e){var n=ol(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var o=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function ul(t,e){if(e=e||t.get("type"))switch(e){case"category":return new Ng(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new Rg;default:return(Ws.getClass(e)||Rg).create(t)}}function hl(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function cl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(fl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function fl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function dl(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent();r=a?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=cl(t),h=1;r>40&&(h=Math.ceil(r/40));for(var c=0;c<r;c+=h){var f=u(i?i[c]:o[0]+c),d=pl(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}function pl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n);return new Rt(i.x,i.y,o,s)}function gl(t){return this._axes[t]}function vl(t){iv.call(this,t)}function ml(t){return"category"===t.type?_l(t):bl(t)}function yl(t,e){return"category"===t.type?wl(t,e):{ticks:t.scale.getTicks()}}function _l(t){var e=t.getLabelModel(),n=xl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function xl(t,e){var n,i,r=Sl(t,"labels"),a=Ll(e),o=Ml(r,a);return o||(n=w(a)?Al(t,a):kl(t,i="auto"===a?Cl(t):a),Il(r,a,{labels:n,labelCategoryInterval:i}))}function wl(t,e){var n,i,r=Sl(t,"ticks"),a=Ll(e),o=Ml(r,a);if(o)return o;if(e.get("show")&&!t.scale.isBlank()||(n=[]),w(a))n=Al(t,a,!0);else if("auto"===a){var s=xl(t,t.getLabelModel());i=s.labelCategoryInterval,n=g(s.labels,function(t){return t.tickValue})}else n=kl(t,i=a,!0);return Il(r,a,{ticks:n,tickCategoryInterval:i})}function bl(t){var e=t.scale.getTicks(),n=cl(t);return{labels:g(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Sl(t,e){return rv(t)[e]||(rv(t)[e]=[])}function Ml(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Il(t,e,n){return t.push({key:e,value:n}),n}function Cl(t){var e=rv(t).autoInterval;return null!=e?e:rv(t).autoInterval=t.calculateCategoryInterval()}function Tl(t){var e=Dl(t),n=cl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,a=r.getExtent(),o=r.count();if(a[1]-a[0]<1)return 0;var s=1;o>40&&(s=Math.max(1,Math.floor(o/40)));for(var l=a[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),h=Math.abs(u*Math.cos(i)),c=Math.abs(u*Math.sin(i)),f=0,d=0;l<=a[1];l+=s){var p=0,g=0,v=ie(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/h,y=d/c;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=rv(t.model),w=x.lastAutoInterval,b=x.lastTickCount;return null!=w&&null!=b&&Math.abs(w-_)<=1&&Math.abs(b-o)<=1&&w>_?_=w:(x.lastTickCount=o,x.lastAutoInterval=_),_}function Dl(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function kl(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:a.getLabel(t),tickValue:t})}var r=cl(t),a=t.scale,o=a.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=o[0],c=a.count();0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u));var f={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};f.min&&h!==o[0]&&i(o[0]);for(var d=h;d<=o[1];d+=u)i(d);return f.max&&d!==o[1]&&i(o[1]),l}function Al(t,e,n){var i=t.scale,r=cl(t),a=[];return p(i.getTicks(),function(t){var o=i.getLabel(t);e(t,o)&&a.push(n?t:{formattedLabel:r(t),rawLabel:o,tickValue:t})}),a}function Ll(t){var e=t.get("interval");return null==e?"auto":e}function Pl(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function Ol(t,e,n,i,r){function a(t,e){return h?t>e:t<e}var o=e.length;if(t.onBand&&!i&&o){var s,l=t.getExtent();if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;p(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1];a(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&a(l[0],e[0].coord)&&e.unshift({coord:l[0]}),a(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&a(s.coord,l[1])&&e.push({coord:l[1]})}}function El(t,e){return e.type||(e.data?"category":"value")}function Nl(t,e,n){return t.getCoordSysModel()===e}function zl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function Bl(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],a=n.model,o=a.get("axisLine.onZero"),s=a.get("axisLine.onZeroAxisIndex");if(o)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&Rl(r[l])){i=r[l];break}}else Rl(r[s])&&(i=r[s])}function Rl(t){return t&&"category"!==t.type&&"time"!==t.type&&hl(t)}function Fl(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function Vl(t,e){return g(vv,function(e){return t.getReferringComponents(e)[0]})}function Wl(t){return"cartesian2d"===t.get("coordinateSystem")}function Hl(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function Gl(t,e,n,i){var r,a,o=lr(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return ur(o-mv/2)?(a=l?"bottom":"top",r="center"):ur(o-1.5*mv)?(a=l?"top":"bottom",r="center"):(a="middle",r=o<1.5*mv&&o>mv/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}function Xl(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function jl(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var a=e[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],h=n[1],c=n[n.length-1],f=n[n.length-2];!1===i?(ql(a),ql(u)):Yl(a,o)&&(i?(ql(o),ql(h)):(ql(a),ql(u))),!1===r?(ql(s),ql(c)):Yl(l,s)&&(r?(ql(l),ql(f)):(ql(s),ql(c)))}function ql(t){t&&(t.ignore=!0)}function Yl(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var a=rt([]);return lt(a,a,-t.rotation),i.applyTransform(ot([],a,t.getLocalTransform())),r.applyTransform(ot([],a,e.getLocalTransform())),i.intersect(r)}}function Ul(t){return"middle"===t||"center"===t}function Zl(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),a=r.getModel("lineStyle"),o=r.get("length"),s=i.getTicksCoords(),u=[],h=[],c=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;u[0]=p,u[1]=0,h[0]=p,h[1]=n.tickDirection*o,c&&(Z(u,u,c),Z(h,h,c));var g=new kf(bi({anid:"tick_"+s[d].tickValue,shape:{x1:u[0],y1:u[1],x2:h[0],y2:h[1]},style:l(a.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}function $l(t,e,n){var i=e.axis;if(D(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),a=r.get("margin"),o=i.getViewLabels(),s=(D(n.labelRotate,r.get("rotate"))||0)*mv/180,l=xv(n.rotation,s,n.labelDirection),u=e.getCategories(!0),h=[],c=Xl(e),f=e.get("triggerEvent");return p(o,function(o,s){var d=o.tickValue,p=o.formattedLabel,g=o.rawLabel,v=r;u&&u[d]&&u[d].textStyle&&(v=new Ki(u[d].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(d),n.labelOffset+n.labelDirection*a],_=new yf({anid:"label_"+d,position:y,rotation:l.rotation,silent:c,z2:10});Ri(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?d+"":d,s):m}),f&&(_.eventData=Hl(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),h.push(_),t.group.add(_),_.decomposeTransform()}),h}}function Kl(t){var e=Ql(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value");null!=o&&(o=i.parse(o));var s=tu(n);null==a&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==o||o>l[1])&&(o=l[1]),o<l[0]&&(o=l[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Ql(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[eu(t)]}function Jl(t){var e=Ql(t);return e&&e.axisPointerModel}function tu(t){return!!t.get("handle.show")}function eu(t){return t.type+"||"+t.id}function nu(t,e,n,i,r,a){var o=wv.getAxisPointerClass(t.axisPointerClass);if(o){var s=Jl(e);s?(t._axisPointer||(t._axisPointer=new o)).render(e,s,i,a):iu(t,i)}}function iu(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function ru(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,a={},o=r.getAxesOnZeroOf()[0],s=r.position,l=o?"onZero":s,u=r.dim,h=i.getRect(),c=[h.x,h.x+h.width,h.y,h.y+h.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[c[2]-d,c[3]+d]:[c[0]-d,c[1]+d];if(o){var g=o.toGlobalCoord(o.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}a.position=["y"===u?p[f[l]]:c[0],"x"===u?p[f[l]]:c[3]],a.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=v[s],a.labelOffset=o?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(a.tickDirection=-a.tickDirection),D(n.labelInside,e.get("axisLabel.inside"))&&(a.labelDirection=-a.labelDirection);var m=e.get("axisLabel.rotate");return a.labelRotate="top"===l?-m:m,a.z2=1,a}function au(t,e,n,i,r,a,o){Bi(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:a,defaultText:ds(r.getData(),a),isRectText:!0,autoColor:i}),ou(t),ou(e)}function ou(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function su(t,e,n){n.style.text=null,Yi(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function lu(t,e,n){n.style.text=null,Yi(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uu(t,e,n,i,r,a,o,s){var u=e.getItemVisual(n,"color"),h=e.getItemVisual(n,"opacity"),c=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",c.get("barBorderRadius")||0),t.useStyle(l({fill:u,opacity:h},c.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=o?r.height>0?"bottom":"top":r.width>0?"left":"right";s||au(t.style,f,i,u,a,n,p),zi(t,f)}function hu(t,e){var n=t.get(Dv)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function cu(t,e,n){var i=t.getData(),r=[],a=i.getLayout("valueAxisHorizontal")?1:0;r[1-a]=i.getLayout("valueAxisStart");var o=new Lv({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:a});e.add(o),fu(o,t,i)}function fu(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function du(t,e,n,i){var r=e.getData(),a=this.dataIndex,o=r.getName(a),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:o,seriesId:e.id}),r.each(function(t){pu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function pu(t,e,n,i,r){var a=(e.startAngle+e.endAngle)/2,o=Math.cos(a),s=Math.sin(a),l=n?i:0,u=[o*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function gu(t,e){function n(){a.ignore=a.hoverIgnore,o.ignore=o.hoverIgnore}function i(){a.ignore=a.normalIgnore,o.ignore=o.normalIgnore}ph.call(this);var r=new bf({z2:2}),a=new Tf,o=new yf;this.add(r),this.add(a),this.add(o),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function vu(t,e,n,i,r,a,o){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,a){for(var o=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),h=t[s].len,c=t[s].len2,f=u<r+h?Math.sqrt((r+h+c)*(r+h+c)-u*u):Math.abs(t[s].x-n);e&&f>=o&&(f=o-10),!e&&f<=o&&(f=o+10),t[s].x=n+f*a,o=f}}t.sort(function(t,e){return t.y-e.y});for(var u,h=0,c=t.length,f=[],d=[],p=0;p<c;p++)(u=t[p].y-h)<0&&function(e,n,i,r){for(var a=e;a<n;a++)if(t[a].y+=i,a>e&&a+1<n&&t[a+1].y>t[a].y+t[a].height)return void s(a,i/2);s(n-1,i/2)}(p,c,-u),h=t[p].y+t[p].height;for(o-h<0&&s(c-1,h-o),p=0;p<c;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}function mu(t,e,n,i,r,a){for(var o=[],s=[],l=0;l<t.length;l++)t[l].x<e?o.push(t[l]):s.push(t[l]);for(vu(s,e,n,i,1,r,a),vu(o,e,n,i,-1,r,a),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var h=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+h}}}var yu=2311,_u=function(){return yu++},xu="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var i={},r={},a=t.match(/Firefox\/([\d.]+)/),o=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return a&&(r.firefox=!0,r.version=a[1]),o&&(r.ie=!0,r.version=o[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:i,node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in e&&(r.edge||r.ie&&r.version>=11)}}(navigator.userAgent),wu={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},bu={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Su=Object.prototype.toString,Mu=Array.prototype,Iu=Mu.forEach,Cu=Mu.filter,Tu=Mu.slice,Du=Mu.map,ku=Mu.reduce,Au={},Lu=function(){return Au.createCanvas()};Au.createCanvas=function(){return n.createElement("canvas")};var Pu,Ou="__ec_primitive__";B.prototype={constructor:B,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=y(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var Eu="undefined"==typeof Float32Array?Array:Float32Array,Nu=U,zu=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};Q.prototype={constructor:Q,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(J(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,a=i-this._y;this._x=n,this._y=i,e.drift(r,a,t),this.dispatchToElement(J(e,t),"drag",t.event);var o=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this.dispatchToElement(J(s,t),"dragleave",t.event),o&&o!==s&&this.dispatchToElement(J(o,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(J(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(J(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var Bu=Array.prototype.slice,Ru=function(){this._$handlers={}};Ru.prototype={constructor:Ru,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=Bu.call(e,1));for(var i=this._$handlers[t],r=i.length,a=0;a<r;){switch(n){case 1:i[a].h.call(i[a].ctx);break;case 2:i[a].h.call(i[a].ctx,e[1]);break;case 3:i[a].h.call(i[a].ctx,e[1],e[2]);break;default:i[a].h.apply(i[a].ctx,e)}i[a].one?(i.splice(a,1),r--):a++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=Bu.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],a=r.length,o=0;o<a;){switch(n){case 1:r[o].h.call(i);break;case 2:r[o].h.call(i,e[1]);break;case 3:r[o].h.call(i,e[1],e[2]);break;default:r[o].h.apply(i,e)}r[o].one?(r.splice(o,1),a--):o++}}return this}};var Fu="silent";et.prototype.dispose=function(){};var Vu=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Wu=function(t,e,n,i){Ru.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new et,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,Q.call(this),this.setHandlerProxy(n)};Wu.prototype={constructor:Wu,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(p(Vu,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy;s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,a=tt(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o;if(i[a]!==n&&!i[a].ignore&&(o=nt(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==Fu)){r.target=i[a];break}}return r}},p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Wu.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||Nu(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),f(Wu,Ru),f(Wu,Q);var Hu="undefined"==typeof Float32Array?Array:Float32Array,Gu=rt,Xu=5e-5,ju=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},qu=ju.prototype;qu.transform=null,qu.needLocalTransform=function(){return ct(this.rotation)||ct(this.position[0])||ct(this.position[1])||ct(this.scale[0]-1)||ct(this.scale[1]-1)},qu.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||it(),n?this.getLocalTransform(i):Gu(i),e&&(n?ot(i,t.transform,i):at(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||it(),ht(this.invTransform,i)):i&&Gu(i)},qu.getLocalTransform=function(t){return ju.getLocalTransform(this,t)},qu.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},qu.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var Yu=[];qu.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(ot(Yu,t.invTransform,e),e=Yu);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,a=this.scale;ct(n-1)&&(n=Math.sqrt(n)),ct(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],a[0]=n,a[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},qu.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},qu.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&Z(n,n,i),n},qu.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&Z(n,n,i),n},ju.getLocalTransform=function(t,e){Gu(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,a=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),ut(e,e,i),r&&lt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=a[0],e[5]+=a[1],e};var Uu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Uu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Uu.bounceIn(2*t):.5*Uu.bounceOut(2*t-1)+.5}};ft.prototype={constructor:ft,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Uu[i]:i,a="function"==typeof r?r(n):n;return this.fire("frame",a),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Zu=function(){this.head=null,this.tail=null,this._len=0},$u=Zu.prototype;$u.insert=function(t){var e=new Ku(t);return this.insertEntry(e),e},$u.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},$u.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},$u.len=function(){return this._len},$u.clear=function(){this.head=this.tail=null,this._len=0};var Ku=function(t){this.value=t,this.next,this.prev},Qu=function(t){this._list=new Zu,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Ju=Qu.prototype;Ju.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var a=n.len(),o=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}o?o.value=e:o=new Ku(e),o.key=t,n.insertEntry(o),i[t]=o}return r},Ju.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},Ju.clear=function(){this._list.clear(),this._map={}};var th={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},eh=new Qu(20),nh=null,ih=Array.prototype.slice,rh=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||It,this._setter=i||Ct,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};rh.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Et(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var a in this._tracks)if(this._tracks.hasOwnProperty(a)){var o=Bt(this,t,function(){--r||i._doneCallback()},this._tracks[a],a,e);o&&(this._clipList.push(o),r++,this.animation&&this.animation.addClip(o),n=o)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var ah=1;"undefined"!=typeof e&&(ah=Math.max(e.devicePixelRatio||1,1));var oh=ah,sh=function(){},lh=sh,uh=function(){this.animators=[]};uh.prototype={constructor:uh,animate:function(t,e){var n,i=!1,r=this,a=this.__zr;if(t){var o=t.split("."),s=r;i="shape"===o[0];for(var l=0,u=o.length;l<u;l++)s&&(s=s[o[l]]);s&&(n=s)}else n=r;if(n){var c=r.animators,f=new rh(n,e);return f.during(function(t){r.dirty(i)}).done(function(){c.splice(h(c,f),1)}),c.push(f),a&&a.animation.addAnimator(f),f}lh('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,a){b(n)?(r=i,i=n,n=0):w(i)?(r=i,i="linear",n=0):w(n)?(r=n,n=0):w(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var o=this.animators.slice(),s=o.length;s||r&&r();for(var l=0;l<o.length;l++)o[l].done(function(){--s||r&&r()}).start(i,a)},_animateToShallow:function(t,e,n,i,r){var a={},o=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])S(n[s])&&!d(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(a[s]=n[s],o++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return o>0&&this.animate(t,!1).when(null==i?500:i,a).delay(r||0),this}};var hh=function(t){ju.call(this,t),Ru.call(this,t),uh.call(this,t),this.id=t.id||_u()};hh.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(S(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},f(hh,uh),f(hh,ju),f(hh,Ru);var ch=Z,fh=Math.min,dh=Math.max;Rt.prototype={constructor:Rt,union:function(t){var e=fh(t.x,this.x),n=fh(t.y,this.y);this.width=dh(t.x+t.width,this.x+this.width)-e,this.height=dh(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,ch(t,t,r),ch(e,e,r),ch(n,n,r),ch(i,i,r),this.x=fh(t[0],e[0],n[0],i[0]),this.y=fh(t[1],e[1],n[1],i[1]);var a=dh(t[0],e[0],n[0],i[0]),o=dh(t[1],e[1],n[1],i[1]);this.width=a-this.x,this.height=o-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=it();return st(r,r,[-e.x,-e.y]),ut(r,r,[n,i]),st(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof Rt||(t=Rt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<o||s<n||a<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new Rt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},Rt.create=function(t){return new Rt(t.x,t.y,t.width,t.height)};var ph=function(t){for(var e in t=t||{},hh.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};ph.prototype={constructor:ph,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof ph&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=h(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof ph&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof ph&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof ph&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof ph&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new Rt(0,0,0,0),i=t||this._children,r=[],a=0;a<i.length;a++){var o=i[a];if(!o.ignore&&!o.invisible){var s=o.getBoundingRect(),l=o.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},c(ph,hh);var gh=32,vh=7,mh=function(){this._roots=[],this._displayList=[],this._displayListLen=0};mh.prototype={constructor:mh,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,xu.canvasSupported&&qt(n,Yt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof ph&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof ph&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=h(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof ph&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:Yt};var yh={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},_h=function(t,e,n){return yh.hasOwnProperty(e)?n*=t.dpr:n},xh=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],wh=function(t,e){this.extendFrom(t,!1),this.host=e};wh.prototype={constructor:wh,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,a=!r,o=0;o<xh.length;o++){var s=xh[o],l=s[0];(a||i[l]!==r[l])&&(t[l]=_h(t,l,i[l]||s[1]))}if((a||i.fill!==r.fill)&&(t.fillStyle=i.fill),(a||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(a||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(a||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?Zt:Ut)(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color);return i}};for(var bh=wh.prototype,Sh=0;Sh<xh.length;Sh++){var Mh=xh[Sh];Mh[0]in bh||(bh[Mh[0]]=Mh[1])}wh.getGradient=bh.getGradient;var Ih=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Ih.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var Ch=function(t,e,n){var i;n=n||oh,"string"==typeof t?i=Kt(t,e,n):S(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=$t,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};Ch.prototype={constructor:Ch,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Kt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,a=i.width,o=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,a/u,o/u)),r.clearRect(0,0,a,o),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||wh.getGradient(r,e,{x:0,y:0,width:a,height:o}),e.__canvasGradient=n):e.image&&(n=Ih.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,a,o),r.restore());if(s){var h=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(h,0,0,a,o),r.restore()}}};var Th="undefined"!=typeof e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Dh=new Qu(50),kh={},Ah=0,Lh=5e3,Ph=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Oh="12px sans-serif",Eh={measureText:function(t,e){var n=u();return n.font=e||Oh,n.measureText(t)}},Nh={left:1,right:1,center:1},zh={top:1,bottom:1,middle:1},Bh=new Rt,Rh=function(){};Rh.prototype={constructor:Rh,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&xe(n);var i=n.text;if(null!=i&&(i+=""),Be(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Bh.copy(e),Bh.applyTransform(r),e=Bh),be(this,t,i,n,e),t.restore()}}},Re.prototype={constructor:Re,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?hh.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new wh(t,this),this.dirty(!1),this}},c(Re,hh),f(Re,Rh),Fe.prototype={constructor:Fe,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Jt(i,this._image,this,this.onload);if(r&&ee(r)){var a=n.x||0,o=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var h=n.sx||0,c=n.sy||0;t.drawImage(r,h,c,n.sWidth,n.sHeight,a,o,s,l)}else if(n.sx&&n.sy){var f=s-(h=n.sx),d=l-(c=n.sy);t.drawImage(r,h,c,f,d,a,o,s,l)}else t.drawImage(r,a,o,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new Rt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},c(Fe,Re);var Fh=new Rt(0,0,0,0),Vh=new Rt(0,0,0,0),Wh=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=s({},n||{}),this.dpr=n.devicePixelRatio||oh,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var a=this._zlevelList=[],o=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var l=t.width,u=t.height;null!=n.width&&(l=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var h=new Ch(t,this,this.dpr);h.__builtin__=!0,h.initContext(),o[314159]=h,h.zlevel=314159,a.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var c=this._domRoot=je(this._width,this._height);t.appendChild(c)}this._hoverlayer=null,this._hoverElements=[]};Wh.prototype={constructor:Wh,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r];if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null;a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=h(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){qt(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var a=t[r],o=a.__from;o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Th(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var a=!0,o=0;o<n.length;o++){var s=n[o],l=s.ctx,u={};l.save();var h=e?s.__startIndex:s.__drawIndex,c=!e&&s.incremental&&Date.now,f=c&&Date.now(),d=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,d);else if(h===s.__startIndex){var g=t[h];g.incremental&&g.notClear&&!e||s.clear(!1,d)}-1===h&&(console.error("For some unknown reason. drawIndex is -1"),h=s.__startIndex);for(var v=h;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,c&&Date.now()-f>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(a=!1),u.prevElClipPaths&&l.restore(),l.restore()}return xu.wxa&&p(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),a},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!He(t,this._width,this._height))){var o=t.__clipPaths;i.prevElClipPaths&&!Ge(o,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),Xe(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new Ch("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&a(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,a=null,o=-1,s=this._domRoot;if(n[t])lh("ZLevel "+t+" has been used already");else if(We(e)){if(r>0&&t>i[0]){for(o=0;o<r-1&&!(i[o]<t&&i[o+1]>t);o++);a=n[i[o]]}if(i.splice(o+1,0,t),n[t]=e,!e.virtual)if(a){var l=a.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else lh("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList;for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((o=t[r]).zlevel!==t[r-1].zlevel||o.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var a,o=t[r],s=o.zlevel;o.incremental?((a=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):a=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),a.__builtin__||lh("ZLevel "+s+" has been used by unkown layer "+a.id),a!==n&&(a.__used=!0,a.__startIndex!==r&&(a.__dirty=!0),a.__startIndex=r,a.incremental?a.__drawIndex=-1:a.__drawIndex=r,e(r),n=a),o.__dirty&&(a.__dirty=!0,a.incremental&&a.__drawIndex<0&&(a.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?a(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||a(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(h(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);p(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new Ch("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var l=o[s];this._doPaintEl(l,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],a=["paddingLeft","paddingTop"][t],o=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Ve(l[i])||Ve(s.style[i]))-(Ve(l[a])||0)-(Ve(l[o])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),a=t.getBoundingRect(),o=t.style,s=o.shadowBlur*e,l=o.shadowOffsetX*e,u=o.shadowOffsetY*e,h=o.hasStroke()?o.lineWidth:0,c=Math.max(h/2,-l+s),f=Math.max(h/2,l+s),d=Math.max(h/2,-u+s),p=Math.max(h/2,u+s),g=a.width+c+f,v=a.height+d+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[c-a.x,d-a.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new Fe({style:{x:0,y:0,image:i}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var Hh="undefined"!=typeof e&&!!e.addEventListener,Gh=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Xh=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,Ru.call(this)};Xh.prototype={constructor:Xh,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=h(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e);l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++;for(i=r.length,o=0;o<i;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Th(t),!e._paused&&e._update())}var e=this;this._running=!0,Th(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new rh(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},f(Xh,Ru);var jh=function(){this._track=[]};jh.prototype={constructor:jh,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},a=0,o=i.length;a<o;a++){var s=i[a],l=Ye(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in qh)if(qh.hasOwnProperty(e)){var n=qh[e](this._track,t);if(n)return n}}};var qh={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var a=Qe(i)/Qe(r);!isFinite(a)&&(a=1),e.pinchScale=a;var o=Je(i);return e.pinchX=o[0],e.pinchY=o[1],{type:"pinch",target:t[0].target,event:e}}}}},Yh=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Uh=["touchstart","touchend","touchmove"],Zh={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},$h=g(Yh,function(t){var e=t.replace("mouse","pointer");return Zh[e]?e:t}),Kh={mousemove:function(t){t=Ze(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ze(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,en(this,t,"start"),Kh.mousemove.call(this,t),Kh.mousedown.call(this,t),nn(this)},touchmove:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,en(this,t,"change"),Kh.mousemove.call(this,t),nn(this)},touchend:function(t){(t=Ze(this.dom,t)).zrByTouch=!0,en(this,t,"end"),Kh.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Kh.click.call(this,t),nn(this)},pointerdown:function(t){Kh.mousedown.call(this,t)},pointermove:function(t){rn(t)||Kh.mousemove.call(this,t)},pointerup:function(t){Kh.mouseup.call(this,t)},pointerout:function(t){rn(t)||Kh.mouseout.call(this,t)}};p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Kh[t]=function(e){e=Ze(this.dom,e),this.trigger(t,e)}});var Qh=on.prototype;Qh.dispose=function(){for(var t=Yh.concat(Uh),e=0;e<t.length;e++){var n=t[e];Ke(this.dom,tn(n),this._handlers[n])}},Qh.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},f(on,Ru);var Jh=!xu.canvasSupported,tc={canvas:Wh},ec=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new mh,a=n.renderer;if(Jh){if(!tc.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");a="vml"}else a&&tc[a]||(a="canvas");var o=new tc[a](e,r,n,t);this.storage=r,this.painter=o;var s=xu.node||xu.worker?null:new on(o.getViewportRoot());this.handler=new Wu(r,o,s,o.root),this.animation=new Xh({stage:{update:y(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};ec.prototype={constructor:ec,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var nc=p,ic=S,rc=x,ac="series\0",oc=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],sc=0,lc=".",uc="___EC__COMPONENT__CONTAINER___",hc=0,cc=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},a=0;a<t.length;a++){var o=t[a][1];if(!(n&&h(n,o)>=0||i&&h(i,o)<0)){var s=e.getShallow(o);null!=s&&(r[t[a][0]]=s)}}return r}},fc=cc([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),dc={getLineStyle:function(t){var e=fc(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},pc=cc([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),gc={getAreaStyle:function(t,e){return pc(this,t,e)}},vc=Math.pow,mc=Math.sqrt,yc=1e-8,_c=1e-4,xc=mc(3),wc=1/3,bc=V(),Sc=V(),Mc=V(),Ic=Math.min,Cc=Math.max,Tc=Math.sin,Dc=Math.cos,kc=2*Math.PI,Ac=V(),Lc=V(),Pc=V(),Oc=[],Ec=[],Nc={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},zc=[],Bc=[],Rc=[],Fc=[],Vc=Math.min,Wc=Math.max,Hc=Math.cos,Gc=Math.sin,Xc=Math.sqrt,jc=Math.abs,qc="undefined"!=typeof Float32Array,Yc=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};Yc.prototype={constructor:Yc,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=jc(1/oh/t)||0,this._uy=jc(1/oh/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Nc.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=jc(t-this._xi)>this._ux||jc(e-this._yi)>this._uy||this._len<5;return this.addData(Nc.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(Nc.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Nc.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(Nc.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=Hc(r)*n+t,this._yi=Gc(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Nc.R,t,e,n,i),this},closePath:function(){this.addData(Nc.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!qc||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(qc&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,f=Xc(h*h+c*c),d=l,p=u,g=o.length;for(h/=f,c/=f,a<0&&(a=r+a),d-=(a%=r)*h,p-=a*c;h>0&&d<=t||h<0&&d>=t||0==h&&(c>0&&p<=e||c<0&&p>=e);)d+=h*(n=o[i=this._dashIdx]),p+=c*n,this._dashIdx=(i+1)%g,h>0&&d<l||h<0&&d>l||c>0&&p<u||c<0&&p>u||s[i%2?"moveTo":"lineTo"](h>=0?Vc(d,t):Wc(d,t),c>=0?Vc(p,e):Wc(p,e));h=d-t,c=p-e,this._dashOffset=-Xc(h*h+c*c)},_dashedBezierTo:function(t,e,n,i,r,a){var o,s,l,u,h,c=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=Ln,y=0,_=this._dashIdx,x=d.length,w=0;for(f<0&&(f=c+f),f%=c,o=0;o<1;o+=.1)s=m(g,t,n,r,o+.1)-m(g,t,n,r,o),l=m(v,e,i,a,o+.1)-m(v,e,i,a,o),y+=Xc(s*s+l*l);for(;_<x&&!((w+=d[_])>f);_++);for(o=(w-f)/y;o<=1;)u=m(g,t,n,r,o),h=m(v,e,i,a,o),_%2?p.moveTo(u,h):p.lineTo(u,h),o+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,a),s=r-u,l=a-h,this._dashOffset=-Xc(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,qc&&(this.data=new Float32Array(t)))},getBoundingRect:function(){zc[0]=zc[1]=Rc[0]=Rc[1]=Number.MAX_VALUE,Bc[0]=Bc[1]=Fc[0]=Fc[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,a=0;a<t.length;){var o=t[a++];switch(1==a&&(i=e=t[a],r=n=t[a+1]),o){case Nc.M:e=i=t[a++],n=r=t[a++],Rc[0]=i,Rc[1]=r,Fc[0]=i,Fc[1]=r;break;case Nc.L:Gn(e,n,t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.C:Xn(e,n,t[a++],t[a++],t[a++],t[a++],t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.Q:jn(e,n,t[a++],t[a++],t[a],t[a+1],Rc,Fc),e=t[a++],n=t[a++];break;case Nc.A:var s=t[a++],l=t[a++],u=t[a++],h=t[a++],c=t[a++],f=t[a++]+c,d=(t[a++],1-t[a++]);1==a&&(i=Hc(c)*u+s,r=Gc(c)*h+l),qn(s,l,u,h,c,f,d,Rc,Fc),e=Hc(f)*u+s,n=Gc(f)*h+l;break;case Nc.R:Gn(i=e=t[a++],r=n=t[a++],i+t[a++],r+t[a++],Rc,Fc);break;case Nc.Z:e=i,n=r}$(zc,zc,Rc),K(Bc,Bc,Fc)}return 0===a&&(zc[0]=zc[1]=Bc[0]=Bc[1]=0),new Rt(zc[0],zc[1],Bc[0]-zc[0],Bc[1]-zc[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,l=this._ux,u=this._uy,h=this._len,c=0;c<h;){var f=s[c++];switch(1==c&&(e=i=s[c],n=r=s[c+1]),f){case Nc.M:e=i=s[c++],n=r=s[c++],t.moveTo(i,r);break;case Nc.L:a=s[c++],o=s[c++],(jc(a-i)>l||jc(o-r)>u||c===h-1)&&(t.lineTo(a,o),i=a,r=o);break;case Nc.C:t.bezierCurveTo(s[c++],s[c++],s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Nc.Q:t.quadraticCurveTo(s[c++],s[c++],s[c++],s[c++]),i=s[c-2],r=s[c-1];break;case Nc.A:var d=s[c++],p=s[c++],g=s[c++],v=s[c++],m=s[c++],y=s[c++],_=s[c++],x=s[c++],w=g>v?g:v,b=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(b,S),t.arc(0,0,w,m,M,1-x),t.scale(1/b,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,w,m,M,1-x),1==c&&(e=Hc(m)*g+d,n=Gc(m)*v+p),i=Hc(M)*g+d,r=Gc(M)*v+p;break;case Nc.R:e=i=s[c],n=r=s[c+1],t.rect(s[c++],s[c++],s[c++],s[c++]);break;case Nc.Z:t.closePath(),i=e,r=n}}}},Yc.CMD=Nc;var Uc=2*Math.PI,Zc=2*Math.PI,$c=Yc.CMD,Kc=2*Math.PI,Qc=1e-4,Jc=[-1,-1,-1],tf=[-1,-1],ef=Ih.prototype.getCanvasPattern,nf=Math.abs,rf=new Yc(!0);si.prototype={constructor:si,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||rf,a=i.hasStroke(),o=i.hasFill(),s=i.fill,l=i.stroke,u=o&&!!s.colorStops,h=a&&!!l.colorStops,c=o&&!!s.image,f=a&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),h&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:c&&(t.fillStyle=ef.call(s,t)),h?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=ef.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&a?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),a&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new Yc},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new Yc),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var a=e.lineWidth,o=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(a=Math.max(a,this.strokeContainThreshold||4)),o>1e-10&&(r.width+=a/o,r.height+=a/o,r.x-=a/o/2,r.y-=a/o/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data;if(r.hasStroke()){var o=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(o=Math.max(o,this.strokeContainThreshold)),oi(a,o/s,t,e)))return!0}if(r.hasFill())return ai(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):Re.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(S(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&nf(t[0]-1)>1e-10&&nf(t[3]-1)>1e-10?Math.sqrt(nf(t[0]*t[3]-t[2]*t[1])):1}},si.extend=function(t){var e=function(e){si.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in c(e,si),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},c(si,Re);var af=Yc.CMD,of=[[],[],[]],sf=Math.sqrt,lf=Math.atan2,uf=function(t,e){var n,i,r,a,o,s,l=t.data,u=af.M,h=af.C,c=af.L,f=af.R,d=af.A,p=af.Q;for(r=0,a=0;r<l.length;){switch(n=l[r++],a=r,i=0,n){case u:case c:i=1;break;case h:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=sf(e[0]*e[0]+e[1]*e[1]),y=sf(e[2]*e[2]+e[3]*e[3]),_=lf(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,a=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1],s[0]+=l[r++],s[1]+=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1]}for(o=0;o<i;o++)(s=of[o])[0]=l[r++],s[1]=l[r++],Z(s,s,e),l[a++]=s[0],l[a++]=s[1]}},hf=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],cf=Math.sqrt,ff=Math.sin,df=Math.cos,pf=Math.PI,gf=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},vf=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(gf(t)*gf(e))},mf=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(vf(t,e))},yf=function(t){Re.call(this,t)};yf.prototype={constructor:yf,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&xe(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),Be(i,n)&&(this.setTransform(t),be(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&xe(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=ie(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Oe(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},c(yf,Re);var _f=si.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),xf=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],wf=function(t){return xu.browser.ie&&xu.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.shape,s=a&&a.type;if(o&&("sector"===s&&o.startAngle===o.endAngle||"rect"===s&&(!o.width||!o.height))){for(l=0;l<xf.length;l++)xf[l][2]=i[xf[l][0]],i[xf[l][0]]=xf[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<xf.length;l++)i[xf[l][0]]=xf[l][2]}:t},bf=si.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o);t.moveTo(u*r+n,h*r+i),t.lineTo(u*a+n,h*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}}),Sf=si.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Mf=function(t,e){for(var n=t.length,i=[],r=0,a=1;a<n;a++)r+=U(t[a-1],t[a]);var o=r/2;for(o=o<n?n:o,a=0;a<o;a++){var s,l,u,h=a/(o-1)*(e?n:n-1),c=Math.floor(h),f=h-c,d=t[c%n];e?(s=t[(c-1+n)%n],l=t[(c+1)%n],u=t[(c+2)%n]):(s=t[0===c?c:c-1],l=t[c>n-2?n-1:c+1],u=t[c>n-3?n-1:c+2]);var p=f*f,g=f*p;i.push([di(s[0],d[0],l[0],u[0],f,p,g),di(s[1],d[1],l[1],u[1],f,p,g)])}return i},If=function(t,e,n,i){var r,a,o,s,l=[],u=[],h=[],c=[];if(i){o=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)$(o,o,t[f]),K(s,s,t[f]);$(o,o,i[0]),K(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],a=t[(f+1)%d];else{if(0===f||f===d-1){l.push(W(t[f]));continue}r=t[f-1],a=t[f+1]}G(u,a,r),q(u,u,e);var g=U(p,r),v=U(p,a),m=g+v;0!==m&&(g/=m,v/=m),q(h,u,-g),q(c,u,v);var y=H([],p,h),_=H([],p,c);i&&(K(y,y,o),$(y,y,s),K(_,_,o),$(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},Cf=si.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){pi(t,e,!0)}}),Tf=si.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){pi(t,e,!1)}}),Df=si.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,a=e.height;e.r?_e(t,e):t.rect(n,i,r,a),t.closePath()}}),kf=si.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent;0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Af=[],Lf=si.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,h=e.percent;0!==h&&(t.moveTo(n,i),null==l||null==u?(h<1&&(Wn(n,o,r,h,Af),o=Af[1],r=Af[2],Wn(i,s,a,h,Af),s=Af[1],a=Af[2]),t.quadraticCurveTo(o,s,r,a)):(h<1&&(Nn(n,o,l,r,h,Af),o=Af[1],l=Af[2],r=Af[3],Nn(i,s,u,a,h,Af),s=Af[1],u=Af[2],a=Af[3]),t.bezierCurveTo(o,s,l,u,r,a)))},pointAt:function(t){return gi(this.shape,t,!1)},tangentAt:function(t){var e=gi(this.shape,t,!0);return Y(e,e)}}),Pf=si.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}}),Of=si.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),si.prototype.getBoundingRect.call(this)}}),Ef=function(t){this.colorStops=t||[]};Ef.prototype={constructor:Ef,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Nf=function(t,e,n,i,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=a||!1,Ef.call(this,r)};Nf.prototype={constructor:Nf},c(Nf,Ef);var zf=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Ef.call(this,i)};zf.prototype={constructor:zf},c(zf,Ef),vi.prototype.incremental=!0,vi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},vi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},vi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},vi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},vi.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},vi.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Bf=[];vi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new Rt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Bf)),t.union(i)}this._rect=t}return this._rect},vi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},c(vi,Re);var Rf=Math.round,Ff=Math.max,Vf=Math.min,Wf={},Hf=(Object.freeze||Object)({extendShape:mi,extendPath:function(t,e){return fi(t,e)},makePath:yi,makeImage:_i,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var a=t[r];a.path||a.createPathProxy(),a.__dirtyPath&&a.buildPath(a.path,a.shape,!0),n.push(a.path)}var o=new si(e);return o.createPathProxy(),o.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},o},resizePath:wi,subPixelOptimizeLine:bi,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height;return e.x=Si(e.x,n,!0),e.y=Si(e.y,n,!0),e.width=Math.max(Si(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(Si(r+o,n,!1)-e.y,0===o?0:1),t},subPixelOptimize:Si,setHoverStyle:zi,setLabelStyle:Bi,setTextStyle:Ri,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,Fi(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:ji,updateProps:Yi,initProps:Ui,getTransform:function(t,e){for(var n=rt([]);t&&t!==e;)ot(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:Zi,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return a=Zi(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"},groupTransition:$i,clipPointsByRect:function(t,e){return g(t,function(t){var n=t[0];n=Ff(n,e.x),n=Vf(n,e.x+e.width);var i=t[1];return i=Ff(i,e.y),i=Vf(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=Ff(t.x,e.x),i=Vf(t.x+t.width,e.x+e.width),r=Ff(t.y,e.y),a=Vf(t.y+t.height,e.y+e.height);if(i>=n&&a>=r)return{x:n,y:r,width:i-n,height:a-r}},createIcon:function(t,e,n){var i=(e=s({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),l(i,n),new Fe(e)):yi(t.replace("path://",""),e,n,"center")},Group:ph,Image:Fe,Text:yf,Circle:_f,Sector:bf,Ring:Sf,Polygon:Cf,Polyline:Tf,Rect:Df,Line:kf,BezierCurve:Lf,Arc:Pf,IncrementalDisplayable:vi,CompoundPath:Of,LinearGradient:Nf,RadialGradient:zf,BoundingRect:Rt}),Gf=["textStyle","color"],Xf={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Gf):null)},getFont:function(){return ji({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return ie(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},jf=cc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),qf={getItemStyle:function(t,e){var n=jf(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},Yf=f,Uf=mn();Ki.prototype={constructor:Ki,init:null,mergeOption:function(t){a(this.option,t,!0)},get:function(t,e){return null==t?this.option:Qi(this.option,this.parsePath(t),!e&&Ji(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Ji(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Qi(this.option,t=this.parsePath(t));return e=e||(n=Ji(this,t))&&n.getModel(t),new Ki(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(r(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Uf(this).getParent=t},isAnimationEnabled:function(){if(!xu.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Mn(Ki),In(Ki),Yf(Ki,dc),Yf(Ki,gc),Yf(Ki,Xf),Yf(Ki,qf);var Zf=0,$f=1e-4,Kf=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Qf=P,Jf=/([&<>"'])/g,td={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ed=["a","b","c","d","e","f","g"],nd=function(t,e){return"{"+t+(null==e?"":e)+"}"},id=ue,rd=p,ad=["left","right","top","bottom","width","height"],od=[["width","left","right"],["height","top","bottom"]],sd=(_(xr,"vertical"),_(xr,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ld=mn(),ud=Ki.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Ki.call(this,t,e,n,i),this.uid=tr("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{};a(t,e.getTheme().get(this.mainType)),a(t,this.getDefaultOption()),n&&br(t,i,n)},mergeOption:function(t,e){a(this.option,t,!0);var n=this.layoutMode;n&&br(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=ld(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},o=e.length-1;o>=0;o--)r=a(r,e[o],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});Dn(ud,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=bn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var a=bn(n).main;t.hasSubTypes(n)&&e[a]&&(r=e[a](i))}return r}}(ud),function(t,e){function n(t){var n={},a=[];return p(t,function(o){var s=i(n,o),l=r(s.originalDeps=e(o),t);s.entryCount=l.length,0===s.entryCount&&a.push(o),p(l,function(t){h(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);h(e.successor,t)<0&&e.successor.push(o)})}),{graph:n,noEntryList:a}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return p(t,function(t){h(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function a(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var o=n(e),s=o.graph,l=o.noEntryList,u={};for(p(t,function(t){u[t]=!0});l.length;){var h=l.pop(),c=s[h],f=!!u[h];f&&(i.call(r,h,c.originalDeps.slice()),delete u[h]),p(c.successor,f?function(t){u[t]=!0,a(t)}:a)}p(u,function(){throw new Error("Circle dependency may exists")})}}}(ud,function(t){var e=[];return p(ud.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=g(e,function(t){return bn(t).main}),"dataset"!==t&&h(e,"dataset")<=0&&e.unshift("dataset"),e}),f(ud,sd);var hd="";"undefined"!=typeof navigator&&(hd=navigator.platform||"");var cd={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:hd.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},fd=mn(),dd={clearColorPalette:function(){fd(this).colorIdx=0,fd(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=fd(e=e||this),r=i.colorIdx||0,a=i.colorNameMap=i.colorNameMap||{};if(a.hasOwnProperty(t))return a[t];var o=ln(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Ir(s,n):o;if((l=l||o)&&l.length){var u=l[r];return t&&(a[t]=u),i.colorIdx=(r+1)%l.length,u}}},pd={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),Tr(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Tr(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Tr(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),Tr(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),Tr(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,a=r.getComponent("parallel",t.get("parallelIndex")),o=e.coordSysDims=a.dimensions.slice();p(a.parallelAxisIndex,function(t,a){var s=r.getComponent("parallelAxis",t),l=o[a];n.set(l,s),Tr(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=a)})}},gd="original",vd="arrayRows",md="objectRows",yd="keyedColumns",_d="unknown",xd="typedArray",wd="column",bd="row";Dr.seriesDataToSource=function(t){return new Dr({data:t,sourceFormat:I(t)?xd:gd,fromDataset:!1})},In(Dr);var Sd=mn(),Md="\0_ec_inner",Id=Ki.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Ki(n),this._optionManager=i},setOption:function(t,e){O(!(Md in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Gr.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var a=n.getMediaOption(this,this._api);a.length&&p(a,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];Lr(this),p(t,function(t,n){null!=t&&(ud.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?r(t):a(e[n],t,!0))}),ud.topologicalTravel(i,ud.getAllClassMainTypes(),function(i,r){var a=ln(t[i]),o=fn(n.get(i),a);dn(o),p(o,function(t,e){var n=t.option;S(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=jr(i,n,t.exist))});var l=Xr(n,r);e[i]=[],n.set(i,[]),p(o,function(t,r){var a=t.exist,o=t.option;if(O(S(o)||a,"Empty component definition"),o){var u=ud.getClass(i,t.keyInfo.subType,!0);if(a&&a instanceof u)a.name=t.keyInfo.name,a.mergeOption(o,this),a.optionUpdated(o,!1);else{var h=s({dependentModels:l,componentIndex:r},t.keyInfo);s(a=new u(o,this,this,h),h),a.init(o,this,this,h),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1);n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&qr(this,n.get("series"))},this),this._seriesIndicesMap=R(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=r(this.option);return p(t,function(e,n){if(ud.hasClass(n)){for(var i=(e=ln(e)).length-1;i>=0;i--)gn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Md],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,a=t.name,o=this._componentsMap.get(e);if(!o||!o.length)return[];if(null!=i)x(i)||(i=[i]),n=m(g(i,function(t){return o[t]}),function(t){return!!t});else if(null!=r){var s=x(r);n=m(o,function(t){return s&&h(r,t.id)>=0||!s&&t.id===r})}else if(null!=a){var l=x(a);n=m(o,function(t){return l&&h(a,t.name)>=0||!l&&t.name===a})}else n=o.slice();return Yr(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?m(e,t.filter):e}(Yr(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){p(t,function(t,r){e.call(n,i,t,r)})})):b(t)?p(i.get(t),e,n):S(t)&&p(this.findComponents(t),e,n)},getSeriesByName:function(t){return m(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return m(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){p(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){p(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){p(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return p(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){qr(this,m(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;qr(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),ud.topologicalTravel(n,ud.getAllClassMainTypes(),function(n,i){p(e.get(n),function(e){("series"!==n||!Wr(e,t))&&e.restoreData()})})}});f(Id,dd);var Cd=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Td={};Zr.prototype={constructor:Zr,create:function(t,e){var n=[];p(Td,function(i,r){var a=i.create(t,e);n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){p(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Zr.register=function(t,e){Td[t]=e},Zr.get=function(t){return Td[t]};var Dd=p,kd=r,Ad=g,Ld=a,Pd=/^(min|max)?(.+)$/;$r.prototype={constructor:$r,setOption:function(t,e){t&&p(ln(t.series),function(t){t&&t.data&&I(t.data)&&N(t.data)}),t=kd(t,!0);var n=this._optionBackup,i=Kr.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(ea(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Ad(e.timelineOptions,kd),this._mediaList=Ad(e.mediaList,kd),this._mediaDefault=kd(e.mediaDefault),this._currentMediaIndices=[],kd(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=kd(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[];if(!i.length&&!r)return o;for(var s=0,l=i.length;s<l;s++)Qr(i[s].query,e,n)&&a.push(s);return!a.length&&r&&(a=[-1]),a.length&&!ta(a,this._currentMediaIndices)&&(o=Ad(a,function(t){return kd(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}};var Od=p,Ed=S,Nd=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],zd=function(t,e){Od(la(t.series),function(t){Ed(t)&&sa(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Od(n,function(e){Od(la(t[e]),function(t){t&&(aa(t,"axisLabel"),aa(t.axisPointer,"label"))})}),Od(la(t.parallel),function(t){var e=t&&t.parallelAxisDefault;aa(e,"axisLabel"),aa(e&&e.axisPointer,"label")}),Od(la(t.calendar),function(t){ia(t,"itemStyle"),aa(t,"dayLabel"),aa(t,"monthLabel"),aa(t,"yearLabel")}),Od(la(t.radar),function(t){aa(t,"name")}),Od(la(t.geo),function(t){Ed(t)&&(oa(t),Od(la(t.regions),function(t){oa(t)}))}),Od(la(t.timeline),function(t){oa(t),ia(t,"label"),ia(t,"itemStyle"),ia(t,"controlStyle",!0);var e=t.data;x(e)&&p(e,function(t){S(t)&&(ia(t,"label"),ia(t,"itemStyle"))})}),Od(la(t.toolbox),function(t){ia(t,"iconStyle"),Od(t.feature,function(t){ia(t,"iconStyle")})}),aa(ua(t.axisPointer),"label"),aa(ua(t.tooltip).axisPointer,"label")},Bd=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],Rd=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],Fd=function(t,e){zd(t,e),t.series=ln(t.series),p(t.series,function(t){if(S(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=ha(t,"pointer.color");null!=n&&ca(t,"itemStyle.normal.color",n)}fa(t)}}),t.dataRange&&(t.visualMap=t.dataRange),p(Rd,function(e){var n=t[e];n&&(x(n)||(n=[n]),p(n,function(t){fa(t)}))})},Vd=pa.prototype;Vd.pure=!1,Vd.persistent=!0,Vd.getSource=function(){return this._source};var Wd={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:ma},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:ga,getItem:va,appendData:ma},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;p(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:ga,getItem:va,appendData:ma},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Hd={arrayRows:ya,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:ya,original:function(t,e,n,i){var r=hn(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:ya},Gd={arrayRows:_a,objectRows:function(t,e,n,i){return xa(t[e],this._dimensionInfos[e])},keyedColumns:_a,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&cn(t)&&(this.hasItemOption=!0),xa(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},Xd=/\{@(.+?)\}/g,jd={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),a=n.getName(t),o=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:a,dataIndex:r,data:o,dataType:e,value:i,color:s,marker:mr(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var a=this.getData(n),o=a.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?vr(l,s).replace(Xd,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),wa(a,t,n)}):void 0},getRawValue:function(t,e){return wa(this.getData(e),t)},formatTooltip:function(){}},qd=Ma.prototype;qd.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var a=this.context;a.data=a.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var o,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),h=t&&t.modDataCount||0;s===u&&l===h||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,o=Ca(this,r)),this._modBy=u,this._modDataCount=h;var c=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=c?this._dueIndex+c:1/0,this._dueEnd);if(!r&&(o||f<d)){var p=this._progress;if(x(p))for(var g=0;g<p.length;g++)Ia(this,p[g],f,d,u,h);else Ia(this,p,f,d,u,h)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var Yd=function(){function t(){return i<n?i++:null}function e(){var t=i%o*r+Math.ceil(i/o),e=i>=n?null:t<a?t:i;return i++,e}var n,i,r,a,o,s={reset:function(l,u,h,c){i=l,n=u,r=h,a=c,o=Math.ceil(a/r),s.next=r>1&&a>0?e:t}};return s}();qd.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},qd.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},qd.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},qd.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},qd.getUpstream=function(){return this._upstream},qd.getDownstream=function(){return this._downstream},qd.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Ud=mn(),Zd=ud.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=Sa({count:ka,reset:Aa}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Pr(this);var r=this.getInitialData(t,n);Pa(r,this),this.dataTask.context.data=r,Ud(this).dataBeforeProcessed=r,Ta(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{},r=this.subType;ud.hasClass(r)&&(r+="Series"),a(t,e.getTheme().get(this.subType)),a(t,this.getDefaultOption()),un(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&br(t,i,n)},mergeOption:function(t,e){t=a(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&br(this.option,t,n),Pr(this);var i=this.getInitialData(t,e);Pa(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Ud(this).dataBeforeProcessed=i,Ta(this)},fillDataTextStyle:function(t){if(t&&!I(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&un(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=Ea(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Ud(this).data},setData:function(t){var e=Ea(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Ud(this).data=t},getSource:function(){return Ar(this)},getRawData:function(){return Ud(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function i(t){return gr(pr(t))}var r=this.getData(),a=r.mapDimension("defaultedTooltip",!0),o=a.length,s=this.getRawValue(t),l=x(s),u=r.getItemVisual(t,"color");S(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var h=o>1||l&&!o?function(n){function i(t,n){var i=r.getDimensionInfo(n);if(i&&!1!==i.otherDims.tooltip){var a=i.type,l=mr({color:u,type:"subItem"}),h=(o?l+gr(i.displayName||"-")+": ":"")+gr("ordinal"===a?t+"":"time"===a?e?"":_r("yyyy/MM/dd hh:mm:ss",t):pr(t));h&&s.push(h)}}var o=v(n,function(t,e,n){var i=r.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];return a.length?p(a,function(e){i(wa(r,t,e),e)}):p(n,i),(o?"<br/>":"")+s.join(o?"<br/>":", ")}(s):i(o?wa(r,t,a[0]):l?s[0]:s),c=mr(u),f=r.getName(t),d=this.name;return pn(this)||(d=""),d=d?gr(d)+(e?": ":"<br/>"):"",e?c+d+h:d+c+(f?gr(f)+": "+h:h)},isAnimationEnabled:function(){if(xu.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=dd.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});f(Zd,jd),f(Zd,dd);var $d=function(){this.group=new ph,this.uid=tr("viewComponent")};$d.prototype={constructor:$d,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var Kd=$d.prototype;Kd.updateView=Kd.updateLayout=Kd.updateVisual=function(t,e,n,i){},Mn($d),Dn($d,{registerWhenExtend:!0});var Qd=function(){var t=mn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^o||a^s)&&"reset"}},Jd=mn(),tp=Qd();Na.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){Ba(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){Ba(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var ep=Na.prototype;ep.updateView=ep.updateLayout=ep.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Mn(Na),Dn(Na,{registerWhenExtend:!0}),Na.markUpdateMethod=function(t,e){Jd(t).updateMethod=e};var np={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},ip={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof Ef||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},rp={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},ap=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return p(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=o.get(t);if(null==e){for(var n=t.split("."),i=rp.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function a(t){return rp.series.typeNames[t]||"自定义图"}var o=n.getModel("aria");if(o.get("show"))if(o.get("description"))t.setAttribute("aria-label",o.get("description"));else{var s=0;n.eachSeries(function(t,e){++s},this);var l,u=o.get("data.maxCount")||10,h=o.get("series.maxCount")||10,c=Math.min(s,h);if(!(s<1)){var f=function(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();l=f?i(r("general.withTitle"),{title:f}):r("general.withoutTitle");var d=[];l+=i(r(s>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:s}),n.eachSeries(function(t,n){if(n<c){var o,l=t.get("name"),h="series."+(s>1?"multiple":"single")+".";o=i(o=r(l?h+"withName":h+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:a(t.subType)});var f=t.getData();e.data=f,f.count()>u?o+=i(r("data.partialData"),{displayCnt:u}):o+=r("data.allData");for(var p=[],g=0;g<f.count();g++)if(g<u){var v=f.getName(g),m=wa(f,g);p.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}o+=p.join(r("data.separator.middle"))+r("data.separator.end"),d.push(o)}}),l+=d.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",l)}}},op=Math.PI,sp=Wa.prototype;sp.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},sp.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount;return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},sp.getPipeline=function(t){return this._pipelineMap.get(t)},sp.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},sp.restorePipelines=function(t){var e=this,n=e._pipelineMap=R();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),Ja(e,t,t.dataTask)})},sp.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;p(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Ga(this,i,r,e,n),i.overallReset&&Xa(this,i,r,e,n)},this)},sp.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context;a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,Ja(this,e,r)},sp.performDataProcessorTasks=function(t,e){Ha(this,this._dataProcessorHandlers,t,e,{block:!0})},sp.performVisualTasks=function(t,e,n){Ha(this,this._visualHandlers,t,e,n)},sp.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},sp.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var lp=sp.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},up=Ka(0);Wa.wrapStageHandler=function(t,e){return w(t)&&(t={overallReset:t,seriesType:to(t)}),t.uid=tr("stageHandler"),e&&(t.visualType=e),t};var hp,cp={},fp={};eo(cp,Id),eo(fp,Ur),cp.eachSeriesByType=cp.eachRawSeriesByType=function(t){hp=t},cp.eachComponent=function(t){"series"===t.mainType&&t.subType&&(hp=t.subType)};var dp=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],pp={color:dp,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],dp]},gp=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],vp={color:gp,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:gp[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:gp},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};vp.categoryAxis.splitLine.show=!1,ud.extend({type:"dataset",defaultOption:{seriesLayoutBy:wd,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){kr(this)}}),$d.extend({type:"dataset"});var mp=O,yp=p,_p=w,xp=S,wp=ud.parseClassType,bp={zrender:"4.0.4"},Sp=1e3,Mp=1e3,Ip=3e3,Cp={PROCESSOR:{FILTER:Sp,STATISTIC:5e3},VISUAL:{LAYOUT:Mp,GLOBAL:2e3,CHART:Ip,COMPONENT:4e3,BRUSH:5e3}},Tp="__flagInMainProcess",Dp="__optionUpdated",kp=/^[a-zA-Z0-9_]+$/;io.prototype.on=no("on"),io.prototype.off=no("off"),io.prototype.one=no("one"),f(io,Ru);var Ap=ro.prototype;Ap._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Dp]){var e=this[Dp].silent;this[Tp]=!0,oo(this),Lp.update.call(this),this[Tp]=!1,this[Dp]=!1,ho.call(this,e),co.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),lo(this,i),t.performVisualTasks(i),yo(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Ap.getDom=function(){return this._dom},Ap.getZr=function(){return this._zr},Ap.setOption=function(t,e,n){var i;if(xp(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Tp]=!0,!this._model||e){var r=new $r(this._api),a=this._theme,o=this._model=new Id(null,null,a,r);o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,zp),n?(this[Dp]={silent:i},this[Tp]=!1):(oo(this),Lp.update.call(this),this._zr.flush(),this[Dp]=!1,this[Tp]=!1,ho.call(this,i),co.call(this,i))},Ap.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},Ap.getModel=function(){return this._model},Ap.getOption=function(){return this._model&&this._model.getOption()},Ap.getWidth=function(){return this._zr.getWidth()},Ap.getHeight=function(){return this._zr.getHeight()},Ap.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},Ap.getRenderedCanvas=function(t){if(xu.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Ap.getSvgDataUrl=function(){if(xu.svgSupported){var t=this._zr;return p(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Ap.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;yp(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return yp(i,function(t){t.group.ignore=!1}),a},Ap.getConnectedDataURL=function(t){if(xu.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(Hp[e]){var a=1/0,o=1/0,s=-1/0,l=-1/0,u=[],h=t&&t.pixelRatio||1;p(Wp,function(h,c){if(h.group===e){var f=h.getRenderedCanvas(r(t)),d=h.getDom().getBoundingClientRect();a=n(d.left,a),o=n(d.top,o),s=i(d.right,s),l=i(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var c=(s*=h)-(a*=h),f=(l*=h)-(o*=h),d=Lu();d.width=c,d.height=f;var g=sn(d);return yp(u,function(t){var e=new Fe({style:{x:t.left*h-a,y:t.top*h-o,image:t.dom}});g.add(e)}),g.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Ap.convertToPixel=_(ao,"convertToPixel"),Ap.convertFromPixel=_(ao,"convertFromPixel"),Ap.containPixel=function(t,e){var n;return t=yn(this._model,t),p(t,function(t,i){i.indexOf("Models")>=0&&p(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var a=this._chartsMap[t.__viewId];a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},Ap.getVisual=function(t,e){var n=(t=yn(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Ap.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Ap.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Lp={prepareAndUpdate:function(t){oo(this),Lp.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,a=this._scheduler;if(e){a.restoreData(e,t),a.performSeriesTasks(e),r.create(e,n),a.performDataProcessorTasks(e,t),lo(this,e),r.update(e,n),go(e),a.performVisualTasks(e,t),vo(this,e,n,t);var o=e.get("backgroundColor")||"transparent";if(xu.canvasSupported)i.setBackgroundColor(o);else{var s=wt(o);o=Mt(s,"rgb"),0===s[3]&&(o="transparent")}_o(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(a,o){var s=n.getViewOfComponentModel(o);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var a=R();e.eachSeries(function(r){var o=n._chartsMap[r.__viewId];if(o.updateTransform){var s=o.updateTransform(r,e,i,t);s&&s.update&&a.set(r.uid,1)}else a.set(r.uid,1)}),go(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:a}),yo(n,e,0,t,a),_o(e,this._api)}},updateView:function(t){var e=this._model;e&&(Na.markUpdateMethod(t,"updateView"),go(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),vo(this,this._model,this._api,t),_o(e,this._api))},updateVisual:function(t){Lp.update.call(this,t)},updateLayout:function(t){Lp.update.call(this,t)}};Ap.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Tp]=!0,n&&oo(this),Lp.update.call(this),this[Tp]=!1,ho.call(this,i),co.call(this,i)}},Ap.showLoading=function(t,e){if(xp(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Vp[t]){var n=Vp[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Ap.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Ap.makeActionFromEvent=function(t){var e=s({},t);return e.type=Ep[t.type],e},Ap.dispatchAction=function(t,e){xp(e)||(e={silent:!!e}),Op[t.type]&&this._model&&(this[Tp]?this._pendingActions.push(t):(uo.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&xu.browser.weChat&&this._throttledZrFlush(),ho.call(this,e.silent),co.call(this,e.silent)))},Ap.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Ap.on=no("on"),Ap.off=no("off"),Ap.one=no("one");var Pp=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Ap._initEvents=function(){yp(Pp,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var a=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=a&&a.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=s({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),yp(Ep,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Ap.isDisposed=function(){return this._disposed},Ap.clear=function(){this.setOption({series:[]},!0)},Ap.dispose=function(){if(!this._disposed){this._disposed=!0,xn(this.getDom(),jp,"");var t=this._api,e=this._model;yp(this._componentsViews,function(n){n.dispose(e,t)}),yp(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete Wp[this.id]}},f(ro,Ru);var Op={},Ep={},Np=[],zp=[],Bp=[],Rp=[],Fp={},Vp={},Wp={},Hp={},Gp=new Date-0,Xp=new Date-0,jp="_echarts_instance_",qp={},Yp=Io;Po(2e3,ip),Do(Fd),ko(5e3,function(t){var e=R();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(da)}),Eo("default",function(t,e){l(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new Df({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Pf({shape:{startAngle:-op/2,endAngle:-op/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new Df({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*op/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*op/2}).delay(300).start("circularInOut");var a=new ph;return a.add(i),a.add(r),a.add(n),a.resize=function(){var e=t.getWidth()/2,a=t.getHeight()/2;i.setShape({cx:e,cy:a});var o=i.shape.r;r.setShape({x:e-o,y:a-o,width:2*o,height:2*o}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},a.resize(),a}),Ao({type:"highlight",event:"highlight",update:"highlight"},F),Ao({type:"downplay",event:"downplay",update:"downplay"},F),To("light",pp),To("dark",vp);var Up={};Fo.prototype={constructor:Fo,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Vo(t,{},i,"_oldKeyGetter",this),Vo(e,n,r,"_newKeyGetter",this),a=0;a<t.length;a++)null!=(s=n[o=i[a]])?((u=s.length)?(1===u&&(n[o]=null),s=s.unshift()):n[o]=null,this._update&&this._update(s,a)):this._remove&&this._remove(a);for(var a=0;a<r.length;a++){var o=r[a];if(n.hasOwnProperty(o)){var s=n[o];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Zp=R(["tooltip","label","itemName","itemId","seriesName"]),$p=S,Kp="e\0\0",Qp={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Jp="undefined"==typeof Uint32Array?Array:Uint32Array,tg="undefined"==typeof Uint16Array?Array:Uint16Array,eg=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],ng=["_extent","_approximateExtent","_rawExtent"],ig=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},a=0;a<t.length;a++){var o=t[a];b(o)&&(o={name:o});var s=o.name;o.type=o.type||"float",o.coordDim||(o.coordDim=s,o.coordDimIndex=0),o.otherDims=o.otherDims||{},i.push(s),n[s]=o,o.index=a,o.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=Wo(this),this._invertedIndicesMap=r,this._calculationInfo={}},rg=ig.prototype;rg.type="list",rg.hasItemOption=!0,rg.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},rg.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},rg.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},rg.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},rg.initData=function(t,e,n){(Dr.isInstance(t)||d(t))&&(t=new pa(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Gd[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},rg.getProvider=function(){return this._rawData},rg.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},rg._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,a=this._storage,o=this.dimensions,s=o.length,l=this._dimensionInfos,u=this._nameList,h=this._idList,c=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){c[C=o[g]]||(c[C]=[1/0,-1/0]);var v=l[C];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=Qp[v.type];a[C]||(a[C]=[]);var y=a[C][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];a[C][p]=_}for(I=d*i;I<e;I+=i)a[C].push(new m(Math.min(e-I,i)));this._chunkCount=a[C].length}for(var w=new Array(s),b=t;b<e;b++){w=r.getItem(b,w);for(var S=Math.floor(b/i),M=b%i,I=0;I<s;I++){var C=o[I],T=a[C][S],D=this._dimValueGetter(w,C,b,I);T[M]=D;var k=c[C];D<k[0]&&(k[0]=D),D>k[1]&&(k[1]=D)}if(!r.pure){var A=u[b];if(w&&null==A)if(null!=w.name)u[b]=A=w.name;else if(null!=n){var L=o[n],P=a[L][S];if(P){A=P[M];var O=l[L].ordinalMeta;O&&O.categories.length&&(A=O.categories[A])}}var E=null==w?null:w.id;null==E&&null!=A&&(f[A]=f[A]||0,E=A,f[A]>0&&(E+="__ec__"+f[A]),f[A]++),null!=E&&(h[b]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},Yo(this)}},rg.count=function(){return this._count},rg.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=Xo(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},rg.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},rg.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},rg._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},rg.getValues=function(t,e){var n=[];x(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},rg.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},rg.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],a=n[1],o=0;o<i;o++){var s=this._getFast(t,this.getRawIndex(o));s<r&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},rg.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},rg.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},rg.getCalculationInfo=function(t){return this._calculationInfo[t]},rg.setCalculationInfo=function(t,e){$p(t)?s(this._calculationInfo,t):this._calculationInfo[t]=e},rg.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},rg.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},rg.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},rg.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},rg.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0;if(e[a]<t)i=a+1;else{if(!(e[a]>t))return a;r=a-1}}return-1},rg.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},rg.getRawIndex=Zo,rg.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},rg.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Uo(this,this._nameDimIdx,e)||""},rg.getId=function(t){return Ko(this,this.getRawIndex(t))},rg.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=g(Qo(t),this.getDimension,this)).length,a=0;a<this.count();a++)switch(r){case 0:e.call(n,a);break;case 1:e.call(n,this.get(t[0],a),a);break;case 2:e.call(n,this.get(t[0],a),this.get(t[1],a),a);break;default:for(var o=0,s=[];o<r;o++)s[o]=this.get(t[o],a);s[o]=a,e.apply(n,s)}}},rg.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=g(Qo(t),this.getDimension,this);for(var r=this.count(),a=new(Xo(this))(r),o=[],s=t.length,l=0,u=t[0],h=0;h<r;h++){var c,f=this.getRawIndex(h);if(0===s)c=e.call(n,h);else if(1===s){var d=this._getFast(u,f);c=e.call(n,d,h)}else{for(var p=0;p<s;p++)o[p]=this._getFast(u,f);o[p]=h,c=e.apply(n,o)}c&&(a[l++]=f)}return l<r&&(this._indices=a),this._count=l,this._extent={},this.getRawIndex=this._indices?$o:Zo,this}},rg.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),a=new(Xo(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1;if(!this._indices){var c=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(a[o++]=c),c++;h=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],b=x[v];(w>=l&&w<=u||isNaN(w))&&(b>=y&&b<=_||isNaN(b))&&(a[o++]=c),c++}}h=!0}}if(!h)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((w=this._getFast(s,M))>=l&&w<=u||isNaN(w))&&(a[o++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var I=e[d];((w=this._getFast(n,M))<t[I][0]||w>t[I][1])&&(S=!1)}S&&(a[o++]=this.getRawIndex(v))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?$o:Zo,this}}},rg.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},rg.map=function(t,e,n,i){n=n||i||this;var r=Jo(this,t=g(Qo(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?$o:Zo;for(var a=r._storage,o=[],s=this._chunkSize,l=t.length,u=this.count(),h=[],c=r._rawExtent,f=0;f<u;f++){for(var d=0;d<l;d++)h[d]=this.get(t[d],f);h[l]=f;var p=e&&e.apply(n,h);if(null!=p){"object"!=typeof p&&(o[0]=p,p=o);for(var v=this.getRawIndex(f),m=Math.floor(v/s),y=v%s,_=0;_<p.length;_++){var x=t[_],w=p[_],b=c[x],S=a[x];S&&(S[m][y]=w),w<b[0]&&(b[0]=w),w>b[1]&&(b[1]=w)}}}return r},rg.downSample=function(t,e,n,i){for(var r=Jo(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=r._rawExtent[t],f=new(Xo(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/h),y=v%h;o[g]=l[m][y]}var _=n(o),x=this.getRawIndex(Math.min(p+i(o,_)||0,u-1)),w=x%h;l[Math.floor(x/h)][w]=_,_<c[0]&&(c[0]=_),_>c[1]&&(c[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=$o,r},rg.getItemModel=function(t){var e=this.hostModel;return new Ki(this.getRawDataItem(t),e,e&&e.ecModel)},rg.diff=function(t){var e=this;return new Fo(t?t.getIndices():[],this.getIndices(),function(e){return Ko(t,e)},function(t){return Ko(e,t)})},rg.getVisual=function(t){var e=this._visual;return e&&e[t]},rg.setVisual=function(t,e){if($p(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},rg.setLayout=function(t,e){if($p(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},rg.getLayout=function(t){return this._layout[t]},rg.getItemLayout=function(t){return this._itemLayouts[t]},rg.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?s(this._itemLayouts[t]||{},e):e},rg.clearItemLayouts=function(){this._itemLayouts.length=0},rg.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},rg.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,$p(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0);else i[e]=n,r[e]=!0},rg.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var ag=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};rg.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(ag,e)),this._graphicEls[t]=e},rg.getItemGraphicEl=function(t){return this._graphicEls[t]},rg.eachItemGraphicEl=function(t,e){p(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},rg.cloneShallow=function(t){if(!t){var e=g(this.dimensions,this.getDimensionInfo,this);t=new ig(e,this.hostModel)}if(t._storage=this._storage,qo(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?$o:Zo,t},rg.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(L(arguments)))})},rg.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],rg.CHANGABLE_METHODS=["filterSelf","selectRange"];var og=function(t,e){return e=e||{},ns(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Zd.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return ls(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var sg=mi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),lg=mi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2;t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),ug=mi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),f=Math.cos(u),d=.6*o,p=.7*o;t.moveTo(n-h,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*d,l+s+f*d,n-h,l+s),t.closePath()}}),hg=mi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2;t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),cg={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i);r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},fg={};p({line:kf,rect:Df,roundRect:Df,square:Df,circle:_f,diamond:lg,pin:ug,arrow:hg,triangle:sg},function(t,e){fg[e]=new t});var dg=mi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=fg[i];"none"!==e.symbolType&&(r||(r=fg[i="rect"]),cg[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),pg=ps.prototype,gg=ps.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};pg._createSymbol=function(t,e,n,i,r){this.removeAll();var a=fs(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);a.attr({z2:100,culling:!0,scale:gs(i)}),a.drift=vs,this._symbolType=t,this.add(a)},pg.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},pg.getSymbolPath=function(){return this.childAt(0)},pg.getScale=function(){return this.childAt(0).scale},pg.highlight=function(){this.childAt(0).trigger("emphasis")},pg.downplay=function(){this.childAt(0).trigger("normal")},pg.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},pg.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},pg.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,a=gg(t,e),o=i!==this._symbolType;if(o){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,a,s)}else(l=this.childAt(0)).silent=!1,Yi(l,{scale:gs(a)},r,e);if(this._updateCommon(t,e,a,n),o){var l=this.childAt(0),u=n&&n.fadeIn,h={scale:l.scale.slice()};u&&(h.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Ui(l,h,r,e)}this._seriesModel=r};var vg=["itemStyle"],mg=["emphasis","itemStyle"],yg=["label"],_g=["emphasis","label"];pg._updateCommon=function(t,e,n,i){var r=this.childAt(0),a=t.hostModel,o=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,u=i&&i.hoverItemStyle,h=i&&i.symbolRotate,c=i&&i.symbolOffset,f=i&&i.labelModel,d=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(vg).getItemStyle(["color"]),u=v.getModel(mg).getItemStyle(),h=v.getShallow("symbolRotate"),c=v.getShallow("symbolOffset"),f=v.getModel(yg),d=v.getModel(_g),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=s({},u);var m=r.style;r.attr("rotation",(h||0)*Math.PI/180||0),c&&r.attr("position",[ir(c[0],n[0]),ir(c[1],n[1])]),g&&r.attr("cursor",g),r.setColor(o,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var w=i&&i.useNameLabel;Bi(m,u,f,d,{labelFetcher:a,labelDataIndex:e,defaultText:function(e,n){return w?t.getName(e):ds(t,e)},isRectText:!0,autoColor:o}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,zi(r);var b=gs(n);if(p&&a.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=b[1]/b[0];this.animateTo({scale:[Math.max(1.1*b[0],b[0]+3),Math.max(1.1*b[1],b[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:b},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},pg.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),Yi(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},c(ps,ph);var xg=ms.prototype;xg.updateData=function(t,e){e=_s(e);var n=this.group,i=t.hostModel,r=this._data,a=this._symbolCtor,o=xs(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(ys(t,r,i,e)){var s=new a(t,i,o);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),h=t.getItemLayout(s);ys(t,h,s,e)?(u?(u.updateData(t,s,o),Yi(u,{position:h},i)):(u=new a(t,s)).attr("position",h),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},xg.isPersistent=function(){return!0},xg.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},xg.incrementalPrepareUpdate=function(t){this._seriesScope=xs(t),this._data=null,this.group.removeAll()},xg.incrementalUpdate=function(t,e,n){n=_s(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(ys(e,r,i,n)){var a=new this._symbolCtor(e,i,this._seriesScope);a.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),a.attr("position",r),this.group.add(a),e.setItemGraphicEl(i,a)}}},xg.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var wg=function(t,e,n,i,r,a,o,s){for(var l=Ms(t,e),u=[],h=[],c=[],f=[],d=[],p=[],g=[],v=ws(r,e,o),m=ws(a,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var w=t.getItemLayout(_.idx),b=e.getItemLayout(_.idx1);(isNaN(w[0])||isNaN(w[1]))&&(w=b.slice()),u.push(w),h.push(b),c.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),h.push(e.getItemLayout(S).slice()),c.push(Ss(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),c.push(n[S]),f.push(Ss(m,a,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var I=[],C=[],T=[],D=[],k=[];for(y=0;y<p.length;y++)S=p[y],I[y]=u[S],C[y]=h[S],T[y]=c[S],D[y]=f[S],k[y]=d[S];return{current:I,next:C,stackedOnCurrent:T,stackedOnNext:D,status:k}},bg=$,Sg=K,Mg=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Ig=function(t,e){return t[0]=e[0],t[1]=e[1],t},Cg=[],Tg=[],Dg=[],kg=si.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=ks(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Is(n[r-1]);r--);for(;i<r&&Is(n[i]);i++);}for(;i<r;)i+=Cs(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Ag=si.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:wf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=ks(n,e.smoothConstraint),l=ks(i,e.smoothConstraint);if(e.connectNulls){for(;a>0&&Is(n[a-1]);a--);for(;r<a&&Is(n[r]);r++);}for(;r<a;){var u=Cs(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls);Cs(t,i,r+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=u+1,t.closePath()}}});Na.extend({type:"line",init:function(){var t=new ph,e=new ms;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,a=t.getData(),o=t.getModel("lineStyle"),s=t.getModel("areaStyle"),u=a.mapArray(a.getItemLayout),h="polar"===i.type,c=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Os(i,a,ws(i,a,y)),x=t.get("showSymbol"),w=x&&!h&&Fs(t,a,i),b=this._data;b&&b.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),b.setItemGraphicEl(e,null))}),x||f.remove(),r.add(g);var S=!h&&t.get("step");d&&c.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(zs(i,!1,!1,t)),x&&f.updateData(a,{isIgnore:w,clipShape:zs(i,!1,!0,t)}),a.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),As(this._stackedOnPoints,_)&&As(this._points,u)||(v?this._updateAnimation(a,_,i,n,S,y):(S&&(u=Bs(u,i,S),_=Bs(_,i,S)),d.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&f.updateData(a,{isIgnore:w,clipShape:zs(i,!1,!0,t)}),S&&(u=Bs(u,i,S),_=Bs(_,i,S)),d=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(zs(i,!0,!1,t)));var M=Rs(a,i)||a.getVisual("color");d.useStyle(l(o.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var I=t.get("smooth");if(I=Ls(t.get("smooth")),d.setShape({smooth:I,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var C=a.getCalculationInfo("stackedOnSeries"),T=0;p.useStyle(l(s.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),C&&(T=Ls(C.get("smooth"))),p.setShape({smooth:I,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=a,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),a=vn(r,i);if(!(a instanceof Array)&&null!=a&&a>=0){var o=r.getItemGraphicEl(a);if(!o){var s=r.getItemLayout(a);if(!s)return;(o=new ps(r,a)).position=s,o.setZ(t.get("zlevel"),t.get("z")),o.ignore=isNaN(s[0])||isNaN(s[1]),o.__temp=!0,r.setItemGraphicEl(a,o),o.stopSymbolAnimation(!0),this.group.add(o)}o.highlight()}else Na.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=vn(r,i);if(null!=a&&a>=0){var o=r.getItemGraphicEl(a);o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else Na.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new kg({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Ag({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,a){var o=this._polyline,s=this._polygon,l=t.hostModel,u=wg(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),h=u.current,c=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(h=Bs(u.current,n,r),c=Bs(u.stackedOnCurrent,n,r),f=Bs(u.next,n,r),d=Bs(u.stackedOnNext,n,r)),o.shape.__points=u.current,o.shape.points=h,Yi(o,{shape:{points:f}},l),s&&(s.setShape({points:h,stackedOnPoints:c}),Yi(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}o.animators&&o.animators.length&&o.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",o.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Lg={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Pg=function(t,e){return Math.round(t.length/2)};Ws.prototype.parse=function(t){return t},Ws.prototype.getSetting=function(t){return this._setting[t]},Ws.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},Ws.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},Ws.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},Ws.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},Ws.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},Ws.prototype.getExtent=function(){return this._extent.slice()},Ws.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},Ws.prototype.isBlank=function(){return this._isBlank},Ws.prototype.setBlank=function(t){this._isBlank=t},Ws.prototype.getLabel=null,Mn(Ws),Dn(Ws,{registerWhenExtend:!0}),Hs.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&g(n,Xs);return new Hs({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var Og=Hs.prototype;Og.getOrdinal=function(t){return Gs(this).get(t)},Og.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Gs(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var Eg=Ws.prototype,Ng=Ws.extend({type:"ordinal",init:function(t,e){t&&!x(t)||(t=new Hs({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),Eg.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return Eg.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(Eg.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:F,niceExtent:F});Ng.create=function(){return new Ng};var zg=rr,Bg=rr,Rg=Ws.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),Rg.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=qs(t)},getTicks:function(){return Zs(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=ar(t)||0:"auto"===n&&(n=this._intervalPrecision),t=Bg(t,n,!0),pr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var a=js(i,t,e,n);this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=Bg(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=Bg(Math.ceil(e[1]/r)*r))}});Rg.create=function(){return new Rg};var Fg="__ec_stack_",Vg="undefined"!=typeof Float32Array?Float32Array:Array,Wg={seriesType:"bar",plan:Qd(),reset:function(t){if(nl(t)&&il(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=el(Js([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var h,c=new Vg(2*t.count),f=[],d=[],p=0;null!=(h=t.next());)d[l]=e.get(a,h),d[1-l]=e.get(o,h),f=n.dataToPoint(d,null,f),c[p++]=f[0],c[p++]=f[1];e.setLayout({largePoints:c,barWidth:u,valueAxisStart:rl(i,r,!1),valueAxisHorizontal:s})}}}}},Hg=Rg.prototype,Gg=Math.ceil,Xg=Math.floor,jg=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},qg=Rg.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return _r(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=rr(Xg(e[0]/i)*i)),t.fixMax||(e[1]=rr(Gg(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],a=r/t;null!=e&&a<e&&(a=e),null!=n&&a>n&&(a=n);var o=Yg.length,s=jg(Yg,a,0,o),l=Yg[Math.min(s,o-1)],u=l[1];"year"===l[0]&&(u*=dr(r/u/t,!0));var h=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,c=[Math.round(Gg((i[0]-h)/u)*u+h),Math.round(Xg((i[1]-h)/u)*u+h)];Us(c,i),this._stepLvl=l,this._interval=u,this._niceExtent=c},parse:function(t){return+hr(t)}});p(["contain","normalize"],function(t){qg.prototype[t]=function(e){return Hg[t].call(this,this.parse(e))}});var Yg=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];qg.create=function(t){return new qg({useUTC:t.ecModel.get("useUTC")})};var Ug=Ws.prototype,Zg=Rg.prototype,$g=ar,Kg=rr,Qg=Math.floor,Jg=Math.ceil,tv=Math.pow,ev=Math.log,nv=Ws.extend({type:"log",base:10,$constructor:function(){Ws.apply(this,arguments),this._originalScale=new Rg},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return g(Zg.getTicks.call(this),function(i){var r=rr(tv(this.base,i));return r=i===e[0]&&t.__fixMin?al(r,n[0]):r,i===e[1]&&t.__fixMax?al(r,n[1]):r},this)},getLabel:Zg.getLabel,scale:function(t){return t=Ug.scale.call(this,t),tv(this.base,t)},setExtent:function(t,e){var n=this.base;t=ev(t)/ev(n),e=ev(e)/ev(n),Zg.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Ug.getExtent.call(this);e[0]=tv(t,e[0]),e[1]=tv(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=al(e[0],i[0])),n.__fixMax&&(e[1]=al(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=ev(t[0])/ev(e),t[1]=ev(t[1])/ev(e),Ug.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=cr(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[rr(Jg(e[0]/i)*i),rr(Qg(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Zg.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});p(["contain","normalize"],function(t){nv.prototype[t]=function(e){return e=ev(e)/ev(this.base),Ug[t].call(this,e)}}),nv.create=function(){return new nv};var iv=function(t){this._axes={},this._dimList=[],this.name=t||""};iv.prototype={constructor:iv,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return g(this._dimList,gl,this)},getAxesByScale:function(t){return t=t.toLowerCase(),m(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a];i[a]=o[e](t[a])}return i}},vl.prototype={constructor:vl,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},c(vl,iv);var rv=mn(),av=[0,1],ov=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};ov.prototype={constructor:ov,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return or(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count()),nr(t,av,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count());var r=nr(t,n,av,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=yl(this,e),i=g(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return Ol(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return ml(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Tl(this)}};var sv=function(t,e,n,i,r){ov.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};sv.prototype={constructor:sv,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},c(sv,ov);var lv={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},uv={};uv.categoryAxis=a({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},lv),uv.valueAxis=a({boundaryGap:[0,0],splitNumber:5},lv),uv.timeAxis=l({scale:!0,min:"dataMin",max:"dataMax"},uv.valueAxis),uv.logAxis=l({scale:!0,logBase:10},uv.valueAxis);var hv=["value","category","time","log"],cv=function(t,e,n,i){p(hv,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var o=this.layoutMode,s=o?Sr(e):{};a(e,i.getTheme().get(r+"Axis")),a(e,this.getDefaultOption()),e.type=n(t,e),o&&br(e,s,o)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Hs.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:o([{},uv[r+"Axis"],i],!0)})}),ud.registerSubTypeDefaulter(t+"Axis",_(n,t))},fv={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:F,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},dv=ud.extend({type:"cartesian2dAxis",axis:null,init:function(){dv.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){dv.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){dv.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});a(dv.prototype,fv);var pv={offset:0};cv("x",dv,El,pv),cv("y",dv,El,pv),ud.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var gv=zl.prototype;gv.type="grid",gv.axisPointerEnabled=!0,gv.getRect=function(){return this._rect},gv.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),p(n.x,function(t){ll(t.scale,t.model)}),p(n.y,function(t){ll(t.scale,t.model)}),p(n.x,function(t){Bl(n,"y",t)}),p(n.y,function(t){Bl(n,"x",t)}),this.resize(this.model,e)},gv.resize=function(t,e,n){function i(){p(a,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),Fl(t,e?r.x:r.y)})}var r=wr(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var a=this._axesList;i(),!n&&t.get("containLabel")&&(p(a,function(t){if(!t.model.get("axisLabel.inside")){var e=dl(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},gv.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},gv.getAxes=function(){return this._axesList.slice()},gv.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}S(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},gv.getCartesians=function(){return this._coordsList.slice()},gv.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},gv.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},gv._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?h(l,n=r.coordinateSystem)<0&&(n=null):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},gv.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},gv._initCartesian=function(t,e,n){function i(n){return function(i,s){if(Nl(i,t,e)){var l=i.get("position");"x"===n?"top"!==l&&"bottom"!==l&&r[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&r[l="left"]&&(l="left"===l?"right":"left"),r[l]=!0;var u=new sv(n,ul(i),[0,0],i.get("type"),l),h="category"===u.type;u.onBand=h&&i.get("boundaryGap"),u.inverse=i.get("inverse"),i.axis=u,u.model=i,u.grid=this,u.index=s,this._axesList.push(u),a[n][s]=u,o[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=a,p(a.x,function(e,n){p(a.y,function(i,r){var a="x"+n+"y"+r,o=new vl(a);o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)},gv._updateScale=function(t,e){function n(t,e,n){p(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,ss(t,n))})}p(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(Wl(i)){var r=Vl(i),a=r[0],o=r[1];if(!Nl(a,e,t)||!Nl(o,e,t))return;var s=this.getCartesian(a.componentIndex,o.componentIndex),l=i.getData(),u=s.getAxis("x"),h=s.getAxis("y");"list"===l.type&&(n(l,u),n(l,h))}},this)},gv.getTooltipAxes=function(t){var e=[],n=[];return p(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r);h(e,r)<0&&e.push(r),h(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}};var vv=["xAxis","yAxis"];zl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var a=new zl(i,t,e);a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(Wl(t)){var e=Vl(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},zl.dimensions=zl.prototype.dimensions=vl.prototype.dimensions,Zr.register("cartesian2d",zl);var mv=Math.PI,yv=function(t,e){this.opt=e,this.axisModel=t,l(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new ph;var n=new ph({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};yv.prototype={constructor:yv,hasBuilder:function(t){return!!_v[t]},add:function(t){_v[t].call(this)},getGroup:function(){return this.group}};var _v={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],a=[n[1],0];i&&(Z(r,r,i),Z(a,a,i));var o=s({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new kf(bi({anid:"line",shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:o,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),h=e.get("axisLine.symbolOffset")||0;if("number"==typeof h&&(h=[h,h]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var c=u[0],f=u[1];p([{rotate:t.rotation+Math.PI/2,offset:h[0],r:0},{rotate:t.rotation-Math.PI/2,offset:h[1],r:Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=fs(l[n],-c/2,-f/2,c,f,o.stroke,!0),a=e.r+e.offset,s=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:s,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Zl(this,t,e);jl(t,$l(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=D(t.axisName,e.get("name"));if(n){var i,r,a=e.get("nameLocation"),o=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,h=this.axisModel.axis.getExtent(),c=h[0]>h[1]?-1:1,f=["start"===a?h[0]-c*u:"end"===a?h[1]+c*u:(h[0]+h[1])/2,Ul(a)?t.labelOffset+o*u:0],d=e.get("nameRotate");null!=d&&(d=d*mv/180),Ul(a)?i=xv(t.rotation,null!=d?d:t.rotation,o):(i=Gl(t,a,d||0,h),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=D(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?id(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,w={componentType:x,name:n,$vars:["name"]};w[x+"Index"]=e.componentIndex;var b=new yf({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:Xl(e),z2:1,tooltip:_&&_.show?s({content:n,formatter:function(){return n},formatterParams:w},_):null});Ri(b.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(b.eventData=Hl(e),b.eventData.targetType="axisName",b.eventData.name=n),this._dumbGroup.add(b),b.updateTransform(),this.group.add(b),b.decomposeTransform()}}},xv=yv.innerTextLayout=function(t,e,n){var i,r,a=lr(e-t);return ur(a)?(r=n>0?"top":"bottom",i="center"):ur(a-mv)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=a>0&&a<mv?n>0?"right":"left":n>0?"left":"right"),{rotation:a,textAlign:i,textVerticalAlign:r}},wv=No({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Kl(t),wv.superApply(this,"render",arguments),nu(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){nu(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),wv.superApply(this,"remove",arguments)},dispose:function(t,e){iu(this,e),wv.superApply(this,"dispose",arguments)}}),bv=[];wv.registerAxisPointerClass=function(t,e){bv[t]=e},wv.getAxisPointerClass=function(t){return t&&bv[t]};var Sv=["axisLine","axisTickLabel","axisName"],Mv=["splitArea","splitLine"],Iv=wv.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new ph,this.group.add(this._axisGroup),t.get("show")){var a=t.getCoordSysModel(),o=ru(a,t),s=new yv(t,o);p(Sv,s.add,s),this._axisGroup.add(s.getGroup()),p(Mv,function(e){t.get(e+".show")&&this["_"+e](t,a)},this),$i(r,this._axisGroup,t),Iv.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),a=r.get("color");a=x(a)?a:[a];for(var o=e.coordinateSystem.getRect(),s=n.isHorizontal(),u=0,h=n.getTicksCoords({tickModel:i}),c=[],f=[],d=r.getLineStyle(),p=0;p<h.length;p++){var g=n.toGlobalCoord(h[p].coord);s?(c[0]=g,c[1]=o.y,f[0]=g,f[1]=o.y+o.height):(c[0]=o.x,c[1]=g,f[0]=o.x+o.width,f[1]=g);var v=u++%a.length,m=h[p].tickValue;this._axisGroup.add(new kf(bi({anid:null!=m?"line_"+h[p].tickValue:null,shape:{x1:c[0],y1:c[1],x2:f[0],y2:f[1]},style:l({stroke:a[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),a=r.get("color"),o=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var u=a.length,h=this._splitAreaColors,c=R(),f=0;if(h)for(v=0;v<s.length;v++){var d=h.get(s[v].tickValue);if(null!=d){f=(d+(u-1)*v)%u;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();a=x(a)?a:[a];for(var v=1;v<s.length;v++){var m,y,_,w,b=n.toGlobalCoord(s[v].coord);n.isHorizontal()?(m=p,y=o.y,_=b-m,w=o.height,p=m+_):(m=o.x,y=p,_=o.width,p=y+(w=b-y));var S=s[v-1].tickValue;null!=S&&c.set(S,f),this._axisGroup.add(new Df({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:w},style:l({fill:a[f]},g),silent:!0})),f=(f+1)%u}this._splitAreaColors=c}}}});Iv.extend({type:"xAxis"}),Iv.extend({type:"yAxis"}),No({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new Df({shape:t.coordinateSystem.getRect(),style:l({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Do(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),Po(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var a=t.getData(),o=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(a.setVisual({legendSymbol:n||o,symbol:o,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:a.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var a=e.getItemModel(n),o=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0);null!=o&&e.setItemVisual(n,"symbol",o),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}("line","circle","line")),Lo(function(t){return{seriesType:t,plan:Qd(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=g(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),a=r.length,o=e.getCalculationInfo("stackResultDimension");return os(e,r[0])&&(r[0]=o),os(e,r[1])&&(r[1]=o),a&&{progress:function(t,e){for(var o=t.end-t.start,s=i&&new Float32Array(o*a),l=t.start,u=0,h=[],c=[];l<t.end;l++){var f;if(1===a)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,c);else{var d=h[0]=e.get(r[0],l),p=h[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(h,null,c)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),ko(Cp.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),a=t.coordinateSystem;if("cartesian2d"===a.type&&r){var o,s=a.getBaseAxis(),l=a.getOtherAxis(s),u=s.getExtent(),h=u[1]-u[0],c=Math.round(i.count()/h);if(c>1)"string"==typeof r?o=Lg[r]:"function"==typeof r&&(o=r),o&&t.setData(i.downSample(i.mapDimension(l.dim),1/c,o,Pg))}}}}("line")),Zd.extend({type:"series.__base_bar__",getInitialData:function(t,e){return ls(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),a=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+a/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var Cv=cc([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Tv={getBarItemStyle:function(t){var e=Cv(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Dv=["itemStyle","barBorderWidth"];s(Ki.prototype,Tv),Bo({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,a=t.getData(),o=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;a.diff(o).add(function(e){if(a.hasValue(e)){var n=a.getItemModel(e),o=Av[s.type](a,e,n),l=kv[s.type](a,e,n,o,i,u);a.setItemGraphicEl(e,l),r.add(l),uu(l,a,e,n,o,t,i,"polar"===s.type)}}).update(function(e,n){var l=o.getItemGraphicEl(n);if(a.hasValue(e)){var h=a.getItemModel(e),c=Av[s.type](a,e,h);l?Yi(l,{shape:c},u,e):l=kv[s.type](a,e,h,c,i,u,!0),a.setItemGraphicEl(e,l),r.add(l),uu(l,a,e,h,c,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=o.getItemGraphicEl(t);"cartesian2d"===s.type?e&&su(t,u,e):e&&lu(t,u,e)}).execute(),this._data=a},_renderLarge:function(t,e,n){this._clear(),cu(t,this.group)},_incrementalRenderLarge:function(t,e){cu(e,this.group,!0)},dispose:F,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?lu(e.dataIndex,t,e):su(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var kv={cartesian2d:function(t,e,n,i,r,a,o){var l=new Df({shape:s({},i)});if(a){var u=l.shape,h=r?"height":"width",c={};u[h]=0,c[h]=i[h],Hf[o?"updateProps":"initProps"](l,{shape:c},a,e)}return l},polar:function(t,e,n,i,r,a,o){var s=i.startAngle<i.endAngle,u=new bf({shape:l({clockwise:s},i)});if(a){var h=u.shape,c=r?"r":"endAngle",f={};h[c]=r?0:i.startAngle,f[c]=i[c],Hf[o?"updateProps":"initProps"](u,{shape:f},a,e)}return u}},Av={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=hu(n,i),a=i.width>0?1:-1,o=i.height>0?1:-1;return{x:i.x+a*r/2,y:i.y+o*r/2,width:i.width-a*r,height:i.height-o*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},Lv=si.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,a=0;a<n.length;a+=2)i[this.__valueIdx]=n[a+r],t.moveTo(i[0],i[1]),t.lineTo(n[a],n[a+1])}});Lo(_(function(t,e){var n=Qs(t,e),i=Js(n),r={};p(n,function(t){var e=t.getData(),n=t.coordinateSystem,a=n.getBaseAxis(),o=$s(t),s=i[Ks(a)][o],l=s.offset,u=s.width,h=n.getOtherAxis(a),c=t.get("barMinHeight")||0;r[o]=r[o]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(h.dim),d=e.mapDimension(a.dim),p=os(e,f),g=h.isHorizontal(),v=rl(a,h,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var w,b,S,M,I=_>=0?"p":"n",C=v;if(p&&(r[o][x]||(r[o][x]={p:v,n:v}),C=r[o][x][I]),g)w=C,b=(T=n.dataToPoint([_,x]))[1]+l,S=T[0]-v,M=u,Math.abs(S)<c&&(S=(S<0?-1:1)*c),p&&(r[o][x][I]+=S);else{var T=n.dataToPoint([x,_]);w=T[0]+l,b=C,S=u,M=T[1]-v,Math.abs(M)<c&&(M=(M<=0?-1:1)*c),p&&(r[o][x][I]+=M)}e.setItemLayout(m,{x:w,y:b,width:S,height:M})}}},this)},"bar")),Lo(Wg),Po({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Pv=function(t,e,n){e=x(e)&&{coordDimensions:e}||s({},e);var i=t.getSource(),r=og(i,e),a=new ig(r,t);return a.initData(i,n),a},Ov={updateSelectedMap:function(t){this._targetList=x(t)?t.slice():[],this._selectTargetMap=v(t||[],function(t,e){return t.set(e.name,e),t},R())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Ev=zo({type:"series.pie",init:function(t){Ev.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Ev.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Pv(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:ba(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Ev.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=sr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){un(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});f(Ev,Ov);var Nv=gu.prototype;Nv.updateData=function(t,e,n){function i(){a.stopAnimation(!0),a.animateTo({shape:{r:h.r+o.get("hoverOffset")}},300,"elasticOut")}function r(){a.stopAnimation(!0),a.animateTo({shape:{r:h.r}},300,"elasticOut")}var a=this.childAt(0),o=t.hostModel,u=t.getItemModel(e),h=t.getItemLayout(e),c=s({},h);c.label=null,n?(a.setShape(c),"scale"===o.getShallow("animationType")?(a.shape.r=h.r0,Ui(a,{shape:{r:h.r}},o,e)):(a.shape.endAngle=h.startAngle,Yi(a,{shape:{endAngle:h.endAngle}},o,e))):Yi(a,{shape:c},o,e);var f=t.getItemVisual(e,"color");a.useStyle(l({lineJoin:"bevel",fill:f},u.getModel("itemStyle").getItemStyle())),a.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var d=u.getShallow("cursor");d&&a.attr("cursor",d),pu(this,t.getItemLayout(e),o.isSelected(null,e),o.get("selectedOffset"),o.get("animation")),a.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&o.isAnimationEnabled()&&a.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),zi(this)},Nv._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,a=t.getItemModel(e),o=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");Yi(n,{shape:{points:o.linePoints||[[o.x,o.y],[o.x,o.y],[o.x,o.y]]}},r,e),Yi(i,{style:{x:o.x,y:o.y}},r,e),i.attr({rotation:o.rotation,origin:[o.x,o.y],z2:10});var l=a.getModel("label"),u=a.getModel("emphasis.label"),h=a.getModel("labelLine"),c=a.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");Bi(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!o.inside},{textAlign:o.textAlign,textVerticalAlign:o.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!h.get("show"),n.hoverIgnore=!c.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(h.getModel("lineStyle").getLineStyle()),n.hoverStyle=c.getModel("lineStyle").getLineStyle();var f=h.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},c(gu,ph),Na.extend({type:"pie",init:function(){var t=new ph;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),a=this._data,o=this.group,s=e.get("animation"),l=!a,u=t.get("animationType"),h=_(du,this.uid,t,s,n),c=t.get("selectedMode");if(r.diff(a).add(function(t){var e=new gu(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),c&&e.on("click",h),r.setItemGraphicEl(t,e),o.add(e)}).update(function(t,e){var n=a.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),c&&n.on("click",h),o.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=a.getItemGraphicEl(t);o.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=y(o.removeClipPath,o);o.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,a,o){var s=new bf({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Ui(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},o,a),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,a=Math.sqrt(i*i+r*r);return a<=n.r&&a>=n.r0}}});var zv=function(t,e,n,i){var r,a,o=t.getData(),s=[],l=!1;o.each(function(n){var i,u,h,c,f=o.getItemLayout(n),d=o.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),w=Math.sin(_);r=f.cx,a=f.cy;var b="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,c="center";else{var S=(b?(f.r+f.r0)/2*x:f.r*x)+r,M=(b?(f.r+f.r0)/2*w:f.r*w)+a;if(i=S+3*x,u=M+3*w,!b){var I=S+x*(m+e-f.r),C=M+w*(m+e-f.r),T=I+(x<0?-1:1)*y,D=C;i=T+(x<0?-5:5),u=D,h=[[S,M],[I,C],[T,D]]}c=b?"center":x>0?"left":"right"}var k=p.getFont(),A=p.get("rotate")?x<0?-_+Math.PI:-_:0,L=ie(t.getFormattedLabel(n,"normal")||o.getName(n),k,c,"top");l=!!A,f.label={x:i,y:u,position:g,height:L.height,len:m,len2:y,linePoints:h,textAlign:c,verticalAlign:"middle",rotation:A,inside:b},b||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&mu(s,r,a,e,n,i)},Bv=2*Math.PI,Rv=Math.PI/180;!function(t,e){p(e,function(e){e.update="updateView",Ao(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),Po(function(t){return{getTargetSeries:function(e){var n={},i=R();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var a=i[e],o=null!=a&&r.getItemVisual(a,"color",!0);if(o)n.setItemVisual(e,"color",o);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=a&&r.setItemVisual(a,"color",s)}})}}}("pie")),Lo(_(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),a=t.get("radius");x(a)||(a=[0,a]),x(r)||(r=[r,r]);var o=n.getWidth(),s=n.getHeight(),l=Math.min(o,s),u=ir(r[0],o),h=ir(r[1],s),c=ir(a[0],l/2),f=ir(a[1],l/2),d=-t.get("startAngle")*Rv,p=t.get("minAngle")*Rv,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),w=t.get("stillShowZeroSum"),b=e.getDataExtent(i);b[0]=0;var S=Bv,M=0,I=d,C=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:h,r0:c,r:_?NaN:f});else{(i="area"!==_?0===v&&w?m:t*m:Bv/g)<p?(i=p,S-=p):M+=t;var r=I+C*i;e.setItemLayout(n,{angle:i,startAngle:I,endAngle:r,clockwise:y,cx:u,cy:h,r0:c,r:_?nr(t,b,[c,f]):f}),I=r}}),S<Bv&&g)if(S<=.001){var T=Bv/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+C*n*T,i.endAngle=d+C*(n+1)*T}})}else m=S/M,I=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=I,i.endAngle=I+C*r,I+=C*r}});zv(t,f,o,s)})},"pie")),ko(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),t.version="4.1.0",t.dependencies=bp,t.PRIORITY=Cp,t.init=function(t,e,n){var i=Co(t);if(i)return i;var r=new ro(t,e,n);return r.id="ec_"+Gp++,Wp[r.id]=r,xn(t,jp,r.id),Mo(r),r},t.connect=function(t){if(x(t)){var e=t;t=null,yp(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+Xp++,yp(e,function(e){e.group=t})}return Hp[t]=!0,t},t.disConnect=Io,t.disconnect=Yp,t.dispose=function(t){"string"==typeof t?t=Wp[t]:t instanceof ro||(t=Co(t)),t instanceof ro&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=Co,t.getInstanceById=function(t){return Wp[t]},t.registerTheme=To,t.registerPreprocessor=Do,t.registerProcessor=ko,t.registerPostUpdate=function(t){Bp.push(t)},t.registerAction=Ao,t.registerCoordinateSystem=function(t,e){Zr.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Zr.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Lo,t.registerVisual=Po,t.registerLoading=Eo,t.extendComponentModel=function(t){return ud.extend(t)},t.extendComponentView=No,t.extendSeriesModel=zo,t.extendChartView=Bo,t.setCanvasCreator=function(t){i("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),qp[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return qp[t]},t.dataTool=Up})},d3af:function(t,e,n){"use strict";n.r(e);var i=n("d500"),r=n("c48d");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("ab0f");var o=n("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="mpvue-echarts.vue",e["default"]=s.exports},d500:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("view",{staticClass:"canvasView"},[n("view",{staticClass:"canvas-bar"},[n("view",{staticClass:"title"},[t._v("饼图示例")]),n("button",{staticClass:"update-btn",attrs:{type:"primary",size:"mini",eventid:"18e9acfc-0"},on:{click:t.updatePie}},[t._v("修改饼状图数据")])],1),n("mpvue-echarts",{ref:"pieChart",attrs:{echarts:t.echarts,onInit:t.pieInit,canvasId:"pie",mpcomid:"18e9acfc-0"}})],1),n("view",{staticClass:"canvasView"},[n("view",{staticClass:"title"},[t._v("折线图示例")]),n("mpvue-echarts",{ref:"lineChart",attrs:{echarts:t.echarts,onInit:t.lineInit,canvasId:"line",mpcomid:"18e9acfc-1"}})],1)])},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},d734:function(t,e,n){},da92:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canvasId?n("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"53499e7e-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})}},[["27c5","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/mpvue-echarts.js');
__wxRoute = 'pages/common/inputPage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/common/inputPage.js';

define('pages/common/inputPage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/inputPage"],{6974:function(t,e,n){"use strict";var a=n("8ade"),r=n.n(a);r.a},"86cb":function(t,e,n){"use strict";n.r(e);var a=n("b9fd"),r=n("a6e4");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("6974");var c=n("2877"),i=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,null,null);i.options.__file="inputPage.vue",e["default"]=i.exports},"8ade":function(t,e,n){},a6e4:function(t,e,n){"use strict";n.r(e);var a=n("c0d5"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},b9fd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[n("textarea",{staticClass:"myText",attrs:{placeholder:t.placeholder,value:t.text,eventid:"ab7aaa6c-0"},on:{input:t.descInput}}),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"ab7aaa6c-1"},on:{tap:t.saveText}},[t._v("确定")])],1)])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},c0d5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{placeholder:"请输入内容",text:"",key:""}},onLoad:function(t){this.placeholder=t.placeholder,this.text=t.text,this.key=t.key},methods:r({},(0,a.mapMutations)(["setInputPageText"]),{saveText:function(){var e={text:this.text,key:this.key};this.setInputPageText(e),t.navigateBack({delta:1})},descInput:function(t){this.text=t.detail.value}})};e.default=c}).call(this,n("649d")["default"])},f07d:function(t,e,n){"use strict";n("de83");var a=u(n("b0ce")),r=u(n("86cb"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))}},[["f07d","common/runtime","common/vendor"]]]);
});
require('pages/common/inputPage.js');
__wxRoute = 'pages/uni-tabs/uni-tabs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uni-tabs/uni-tabs.js';

define('pages/uni-tabs/uni-tabs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function() {}
        })
    
});
require('pages/uni-tabs/uni-tabs.js');
__wxRoute = 'pages/pointList/uni-tabs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointList/uni-tabs.js';

define('pages/pointList/uni-tabs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function() {}
        })
    
});
require('pages/pointList/uni-tabs.js');

