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
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
Z([3,'true'])
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
Z(z[32])
Z(z[10])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'7be27b0c-10-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[12])
Z([[2,'+'],[1,'7be27b0c-1-'],[[7],[3,'index']]])
Z(z[2])
Z(z[4])
Z([3,'21b694de-default-21b694de-6'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z(z[9])
Z(z[10])
Z([3,'_picker 21b694de'])
Z(z[12])
Z([1,'21b694de-0'])
Z(z[14])
Z(z[15])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[18])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z(z[22])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z(z[26])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-5']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z(z[30])
Z([3,'21b694de-default-21b694de-11'])
Z(z[32])
Z(z[33])
Z(z[34])
Z(z[32])
Z(z[10])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-10-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[12])
Z([[2,'+'],[1,'21b694de-1-'],[[7],[3,'index']]])
Z(z[2])
Z(z[4])
Z([3,'00eed4f4-default-00eed4f4-1'])
Z([3,'7e389618-default-7e389618-1'])
Z([3,'1b853e3c-default-1b853e3c-2'])
Z(z[32])
Z([3,'name'])
Z([[7],[3,'xLine']])
Z(z[32])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'1b853e3c-1-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[2])
Z(z[3])
Z([3,'1b853e3c-default-1b853e3c-3'])
Z([3,'58792338-default-58792338-10'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3c97b91b'])
Z([[7],[3,'animationData']])
Z([a,[3,'_view data-v-0cf0e840 uni-drawer '],[[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'option']],[3,'visible']],[1,'uni-drawer-visible'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'option']],[3,'rightMode']],[1,'uni-drawer-right'],[1,'']]]]])
Z([3,'default'])
Z([[7],[3,'showmask']])
Z([3,'handleProxy'])
Z(z[5])
Z(z[5])
Z([3,'_view data-v-0cf0e840 uni-drawer-content'])
Z([[7],[3,'$k']])
Z([1,'3c97b91b-1'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[6],[[7],[3,'option']],[3,'width']],[1,'%']]],[1,';']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'590c6f9d'])
Z([[7],[3,'visibleSync']])
Z([[7],[3,'catchtouchmove']])
Z([a,[3,'_view 590c6f9d uni-drawer '],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'showDrawer']],[1,'uni-drawer--visible'],[1,'']]],[[2,'?:'],[[7],[3,'rightMode']],[1,'uni-drawer--right'],[1,'']]]]])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'68dcfa4a'])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'346bda0d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
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
Z([[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'||'],[[7],[3,'subnote']],[[2,'==='],[[7],[3,'showBadge']],[1,true]]],[[2,'==='],[[7],[3,'showBadge']],[1,'true']]],[[2,'==='],[[7],[3,'showArrow']],[1,true]]],[[2,'==='],[[7],[3,'showArrow']],[1,'true']]],[[2,'==='],[[7],[3,'showSwitch']],[1,true]]],[[2,'==='],[[7],[3,'showSwitch']],[1,'true']]])
Z([3,'_view 30c48a99 uni-list-cell__extra'])
Z([[7],[3,'subnote']])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3b6bb3ad'])
Z([3,'_view 3b6bb3ad uni-list'])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2241d2a0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'53499e7e'])
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ab7aaa6c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ab7aaa6c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4ef7e761'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2d8d4fae'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00cb397a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00cb397a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'47b16668'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'47b16668'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00eed4f4'])
Z([3,'_view 00eed4f4 container'])
Z([3,'pie'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'00eed4f4-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53499e7e'])
Z([3,'pieChart'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'00eed4f4-1']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'00eed4f4-default-00eed4f4-1']]])
Z([3,'3c97b91b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00eed4f4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7e389618'])
Z([3,'_view 7e389618 container'])
Z([3,'pie'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7e389618-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53499e7e'])
Z([3,'pieChart'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7e389618-1']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'7e389618-default-7e389618-1']]])
Z([3,'3c97b91b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7e389618'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'18e9acfc'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1b853e3c'])
Z([3,'_view 1b853e3c baseView'])
Z([3,'line'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1b853e3c-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'53499e7e'])
Z([3,'lineChart'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1b853e3c-2']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'1b853e3c-default-1b853e3c-2']]])
Z([3,'3b6bb3ad'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1b853e3c-3']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'1b853e3c-default-1b853e3c-3']]])
Z([3,'3c97b91b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1b853e3c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
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
Z([3,'_view 7be27b0c btnView'])
Z([[7],[3,'showSave']])
Z([[7],[3,'showClose']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7be27b0c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4bd08622'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'jcjl']],[1,'异常']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4bd08622'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'10bbdf1a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'10bbdf1a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'21b694de'])
Z([3,'_view 21b694de baseView'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-6']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'21b694de-default-21b694de-6']]])
Z([3,'3b6bb3ad'])
Z([3,'_view 21b694de cellTitleView'])
Z([3,'#24BE41'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-7']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'346bda0d'])
Z([3,'22'])
Z([3,'checkbox-filled'])
Z([3,'#FFDE52'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-8']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
Z(z[8])
Z([3,'info-filled'])
Z([3,'#C11E1E'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-9']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
Z(z[8])
Z([3,'clear'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'21b694de-11']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'21b694de-default-21b694de-11']]])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'21b694de'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'58792338'])
Z([3,'handleProxy'])
Z([3,'_view 58792338 baseView'])
Z([[7],[3,'$k']])
Z([1,'58792338-12'])
Z(z[1])
Z([3,'_scroll-view 58792338 scrollView'])
Z(z[3])
Z([1,'58792338-11'])
Z([3,'true'])
Z([[9],[[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'58792338-10']]]]],[[8],'$root',[[7],[3,'$root']]]],[[8],'$slotdefault',[1,'58792338-default-58792338-10']]])
Z([3,'590c6f9d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'58792338'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6cbf6956'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'90021ef8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d573abf0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'d573abf0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'240234ba'])
Z([3,'_view 240234ba logo-title'])
Z([[7],[3,'hasLogin']])
Z([[2,'!'],[[7],[3,'hasLogin']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'240234ba'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','/components/list/uni-list/uni-list.vue.wxml','/components/list/uni-list-item/uni-list-item.vue.wxml','/components/list/uni-icon/uni-icon.vue.wxml','/components/mpvue-echarts/src/echarts.vue.wxml','/components/drawer/hj-dragabledrawer.vue.wxml','/components/drawer/uni-drawer.vue.wxml','/components/m-input.vue.wxml','/components/m-icon/m-icon.vue.wxml','/common/slots.wxml','/components/list/uni-badge/uni-badge.vue.wxml','./components/drawer/hj-dragabledrawer.vue.wxml','./components/drawer/uni-drawer.vue.wxml','./components/list/uni-badge/uni-badge.vue.wxml','./components/list/uni-icon/uni-icon.vue.wxml','./components/list/uni-list-item/uni-list-item.vue.wxml','./components/list/uni-list/uni-list.vue.wxml','./components/m-icon/m-icon.vue.wxml','./components/m-input.vue.wxml','./components/mpvue-echarts/src/echarts.vue.wxml','./pages/common/inputPage.vue.wxml','./pages/common/inputPage.wxml','./inputPage.vue.wxml','./pages/login/diyHost.vue.wxml','./pages/login/diyHost.wxml','./diyHost.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/main/main.vue.wxml','./pages/main/main.wxml','./main.vue.wxml','./pages/mpvue-echarts/chartList.vue.wxml','./pages/mpvue-echarts/chartList.wxml','./chartList.vue.wxml','./pages/mpvue-echarts/deviceChart.vue.wxml','./pages/mpvue-echarts/deviceChart.wxml','./deviceChart.vue.wxml','./pages/mpvue-echarts/eventChart.vue.wxml','./pages/mpvue-echarts/eventChart.wxml','./eventChart.vue.wxml','./pages/mpvue-echarts/mpvue-echarts.vue.wxml','./pages/mpvue-echarts/mpvue-echarts.wxml','./mpvue-echarts.vue.wxml','./pages/mpvue-echarts/valveChart.vue.wxml','./pages/mpvue-echarts/valveChart.wxml','./valveChart.vue.wxml','./pages/pointAdd/pointAdd.vue.wxml','./pages/pointAdd/pointAdd.wxml','./pointAdd.vue.wxml','./pages/pointAdd/pointCheckInfo.vue.wxml','./pages/pointAdd/pointCheckInfo.wxml','./pointCheckInfo.vue.wxml','./pages/pointCheck/pointCheck.vue.wxml','./pages/pointCheck/pointCheck.wxml','./pointCheck.vue.wxml','./pages/pointDetail/pointDetail.vue.wxml','./pages/pointDetail/pointDetail.wxml','./pointDetail.vue.wxml','./pages/pointList/pointList.vue.wxml','./pages/pointList/pointList.wxml','./pointList.vue.wxml','./pages/pwd/pwd.vue.wxml','./pages/pwd/pwd.wxml','./pwd.vue.wxml','./pages/reg/reg.vue.wxml','./pages/reg/reg.wxml','./reg.vue.wxml','./pages/user/accountEdit.vue.wxml','./pages/user/accountEdit.wxml','./accountEdit.vue.wxml','./pages/user/user.vue.wxml','./pages/user/user.wxml','./user.vue.wxml'];d_[x[0]]={}
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
cs.push("./common/slots.wxml:template:12:47")
var xC=_oz(z,2,e,s,gg)
var oD=_gd(x[0],xC,e_,d_)
if(oD){
var fE=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[0],12,176)
cs.pop()
var cF=_v()
_(r,cF)
cs.push("./common/slots.wxml:template:12:199")
var hG=_oz(z,7,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],12,307)
cs.pop()
cs.push("./common/slots.wxml:picker:12:330")
var oJ=_mz(z,'picker',['bindchange',10,'class',1,'data-comkey',2,'data-eventid',3,'mode',4,'value',5],[],e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./common/slots.wxml:template:12:474")
var aL=_oz(z,17,e,s,gg)
var tM=_gd(x[0],aL,e_,d_)
if(tM){
var eN=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[0],12,566)
cs.pop()
cs.pop()
_(r,oJ)
var bO=_v()
_(r,bO)
cs.push("./common/slots.wxml:template:12:598")
var oP=_oz(z,20,e,s,gg)
var xQ=_gd(x[0],oP,e_,d_)
if(xQ){
var oR=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[0],12,709)
cs.pop()
var fS=_v()
_(r,fS)
cs.push("./common/slots.wxml:template:12:732")
var cT=_oz(z,24,e,s,gg)
var hU=_gd(x[0],cT,e_,d_)
if(hU){
var oV=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[0],12,837)
cs.pop()
var cW=_v()
_(r,cW)
cs.push("./common/slots.wxml:template:12:860")
var oX=_oz(z,28,e,s,gg)
var lY=_gd(x[0],oX,e_,d_)
if(lY){
var aZ=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[0],12,965)
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
cs.push("./common/slots.wxml:template:14:48")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
cs.push("./common/slots.wxml:template:14:48")
var cI=_oz(z,40,fE,oD,gg)
var oJ=_gd(x[0],cI,e_,d_)
if(oJ){
var lK=_1z(z,37,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[0],14,247)
cs.pop()
return cF
}
oB.wxXCkey=2
_2z(z,34,xC,e,s,gg,oB,'item','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["21b694de-default-21b694de-6"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':21b694de-default-21b694de-6'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:16:47")
var xC=_oz(z,44,e,s,gg)
var oD=_gd(x[0],xC,e_,d_)
if(oD){
var fE=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[0],16,176)
cs.pop()
var cF=_v()
_(r,cF)
cs.push("./common/slots.wxml:template:16:199")
var hG=_oz(z,49,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,48,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],16,307)
cs.pop()
cs.push("./common/slots.wxml:picker:16:330")
var oJ=_mz(z,'picker',['bindchange',52,'class',1,'data-comkey',2,'data-eventid',3,'mode',4,'value',5],[],e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./common/slots.wxml:template:16:474")
var aL=_oz(z,59,e,s,gg)
var tM=_gd(x[0],aL,e_,d_)
if(tM){
var eN=_1z(z,58,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[0],16,566)
cs.pop()
cs.pop()
_(r,oJ)
var bO=_v()
_(r,bO)
cs.push("./common/slots.wxml:template:16:598")
var oP=_oz(z,62,e,s,gg)
var xQ=_gd(x[0],oP,e_,d_)
if(xQ){
var oR=_1z(z,61,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[0],16,709)
cs.pop()
var fS=_v()
_(r,fS)
cs.push("./common/slots.wxml:template:16:732")
var cT=_oz(z,66,e,s,gg)
var hU=_gd(x[0],cT,e_,d_)
if(hU){
var oV=_1z(z,65,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[0],16,837)
cs.pop()
var cW=_v()
_(r,cW)
cs.push("./common/slots.wxml:template:16:860")
var oX=_oz(z,70,e,s,gg)
var lY=_gd(x[0],oX,e_,d_)
if(lY){
var aZ=_1z(z,69,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[0],16,965)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["21b694de-default-21b694de-11"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':21b694de-default-21b694de-11'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:18:48")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
cs.push("./common/slots.wxml:template:18:48")
var cI=_oz(z,82,fE,oD,gg)
var oJ=_gd(x[0],cI,e_,d_)
if(oJ){
var lK=_1z(z,79,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[0],18,247)
cs.pop()
return cF
}
oB.wxXCkey=2
_2z(z,76,xC,e,s,gg,oB,'item','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["00eed4f4-default-00eed4f4-1"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':00eed4f4-default-00eed4f4-1'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["7e389618-default-7e389618-1"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':7e389618-default-7e389618-1'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["1b853e3c-default-1b853e3c-2"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':1b853e3c-default-1b853e3c-2'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./common/slots.wxml:template:24:47")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
cs.push("./common/slots.wxml:template:24:47")
var cI=_oz(z,92,fE,oD,gg)
var oJ=_gd(x[0],cI,e_,d_)
if(oJ){
var lK=_1z(z,91,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[0],24,159)
cs.pop()
return cF
}
oB.wxXCkey=2
_2z(z,89,xC,e,s,gg,oB,'name','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["1b853e3c-default-1b853e3c-3"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':1b853e3c-default-1b853e3c-3'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["58792338-default-58792338-10"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':58792338-default-58792338-10'
r.wxVkey=b
gg.f=$gdc(f_["./common/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
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
_ai(oB,x[9],e_,x[0],9,2)
_ai(oB,x[10],e_,x[0],10,2)
oB.pop()
oB.pop()
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
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1],x[2],x[3],x[4],x[5],x[6],x[7],x[8],x[9],x[10]],ic:[]}
d_[x[11]]={}
d_[x[11]]["3c97b91b"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[11]+':3c97b91b'
r.wxVkey=b
gg.f=$gdc(f_["./components/drawer/hj-dragabledrawer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
cs.push("./components/drawer/hj-dragabledrawer.vue.wxml:view:1:62")
var oB=_mz(z,'view',['animation',1,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,4,e,s,gg)){xC.wxVkey=1
cs.push("./components/drawer/hj-dragabledrawer.vue.wxml:view:1:271")
cs.pop()
}
cs.push("./components/drawer/hj-dragabledrawer.vue.wxml:view:1:427")
var oD=_mz(z,'view',['bindtouchend',5,'bindtouchstart',1,'catchtouchmove',2,'class',3,'data-comkey',4,'data-eventid',5,'style',6],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./components/drawer/hj-dragabledrawer.vue.wxml:template:1:673")
var cF=_oz(z,13,e,s,gg)
var hG=_gd(x[11],cF,e_,d_)
if(hG){
var oH=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[11],1,731)
cs.pop()
cs.pop()
_(oB,oD)
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
d_[x[11]]["default"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[11]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/drawer/hj-dragabledrawer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=e_[x[11]].i
_ai(oD,x[9],e_,x[11],1,1)
oD.pop()
return r
}
e_[x[11]]={f:m1,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[12]]={}
d_[x[12]]["590c6f9d"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[12]+':590c6f9d'
r.wxVkey=b
gg.f=$gdc(f_["./components/drawer/uni-drawer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/drawer/uni-drawer.vue.wxml:view:1:62")
cs.push("./components/drawer/uni-drawer.vue.wxml:view:1:62")
var xC=_mz(z,'view',['catchtouchmove',2,'class',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./components/drawer/uni-drawer.vue.wxml:template:1:459")
var fE=_oz(z,6,e,s,gg)
var cF=_gd(x[12],fE,e_,d_)
if(cF){
var hG=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[12],1,517)
cs.pop()
cs.pop()
_(oB,xC)
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
d_[x[12]]["default"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[12]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/drawer/uni-drawer.vue.wxml"],"",1)
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
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cF=e_[x[12]].i
_ai(cF,x[9],e_,x[12],1,1)
cF.pop()
return r
}
e_[x[12]]={f:m2,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[13]]={}
d_[x[13]]["68dcfa4a"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[13]+':68dcfa4a'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-badge/uni-badge.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
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
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[13]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["346bda0d"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[14]+':346bda0d'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-icon/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
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
return r
}
e_[x[14]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["30c48a99"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[15]+':30c48a99'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list-item/uni-list-item.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
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
var cI=_gd(x[15],oH,e_,d_)
if(cI){
var oJ=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[15],1,876)
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
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:view:1:1336")
cs.pop()
}
var tM=_v()
_(lK,tM)
if(_oz(z,15,e,s,gg)){tM.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1431")
var oP=_v()
_(tM,oP)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1431")
var xQ=_oz(z,17,e,s,gg)
var oR=_gd(x[15],xQ,e_,d_)
if(oR){
var fS=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[15],1,1557)
cs.pop()
cs.pop()
}
var eN=_v()
_(lK,eN)
if(_oz(z,18,e,s,gg)){eN.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:switch:1:1580")
cs.pop()
}
var bO=_v()
_(lK,bO)
if(_oz(z,19,e,s,gg)){bO.wxVkey=1
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1802")
var cT=_v()
_(bO,cT)
cs.push("./components/list/uni-list-item/uni-list-item.vue.wxml:template:1:1802")
var hU=_oz(z,22,e,s,gg)
var oV=_gd(x[15],hU,e_,d_)
if(oV){
var cW=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[15],1,1969)
cs.pop()
cs.pop()
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
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
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oJ=e_[x[15]].i
_ai(oJ,x[3],e_,x[15],1,1)
_ai(oJ,x[10],e_,x[15],1,61)
oJ.pop()
oJ.pop()
return r
}
e_[x[15]]={f:m5,j:[],i:[],ti:[x[3],x[10]],ic:[]}
d_[x[16]]={}
d_[x[16]]["3b6bb3ad"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[16]+':3b6bb3ad'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list/uni-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
cs.push("./components/list/uni-list/uni-list.vue.wxml:view:1:62")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./components/list/uni-list/uni-list.vue.wxml:template:1:136")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[16],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[16],1,194)
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
d_[x[16]]["default"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[16]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/uni-list/uni-list.vue.wxml"],"",1)
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
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aL=e_[x[16]].i
_ai(aL,x[9],e_,x[16],1,1)
aL.pop()
return r
}
e_[x[16]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[17]]={}
d_[x[17]]["2241d2a0"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[17]+':2241d2a0'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-icon/m-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
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
e_[x[17]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
d_[x[18]]["7dcb1efb"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[18]+':7dcb1efb'
r.wxVkey=b
gg.f=$gdc(f_["./components/m-input.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
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
var hG=_gd(x[18],cF,e_,d_)
if(hG){
var oH=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[18],1,706)
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
var lK=_gd(x[18],oJ,e_,d_)
if(lK){
var aL=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[18],1,970)
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
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var bO=e_[x[18]].i
_ai(bO,x[8],e_,x[18],1,1)
bO.pop()
return r
}
e_[x[18]]={f:m8,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[19]]={}
d_[x[19]]["53499e7e"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[19]+':53499e7e'
r.wxVkey=b
gg.f=$gdc(f_["./components/mpvue-echarts/src/echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
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
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[19]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
d_[x[20]]["ab7aaa6c"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[20]+':ab7aaa6c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/inputPage.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[20]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fS=e_[x[21]].i
_ai(fS,x[22],e_,x[21],1,1)
var cT=_v()
_(r,cT)
cs.push("./pages/common/inputPage.wxml:template:2:6")
var hU=_oz(z,1,e,s,gg)
var oV=_gd(x[21],hU,e_,d_)
if(oV){
var cW=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[21],2,18)
cs.pop()
fS.pop()
return r
}
e_[x[21]]={f:m11,j:[],i:[],ti:[x[22]],ic:[]}
d_[x[23]]={}
d_[x[23]]["4ef7e761"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[23]+':4ef7e761'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/diyHost.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/login/diyHost.vue.wxml:template:1:247")
var xC=_oz(z,5,e,s,gg)
var oD=_gd(x[23],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[23],1,471)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lY=e_[x[23]].i
_ai(lY,x[7],e_,x[23],1,1)
lY.pop()
return r
}
e_[x[23]]={f:m12,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[24]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var t1=e_[x[24]].i
_ai(t1,x[25],e_,x[24],1,1)
var e2=_v()
_(r,e2)
cs.push("./pages/login/diyHost.wxml:template:2:6")
var b3=_oz(z,1,e,s,gg)
var o4=_gd(x[24],b3,e_,d_)
if(o4){
var x5=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[24],2,18)
cs.pop()
t1.pop()
return r
}
e_[x[24]]={f:m13,j:[],i:[],ti:[x[25]],ic:[]}
d_[x[26]]={}
d_[x[26]]["2d8d4fae"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[26]+':2d8d4fae'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
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
var hG=_gd(x[26],cF,e_,d_)
if(hG){
var oH=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[26],1,474)
cs.pop()
var cI=_v()
_(oD,cI)
cs.push("./pages/login/login.vue.wxml:template:1:594")
var oJ=_oz(z,15,e,s,gg)
var lK=_gd(x[26],oJ,e_,d_)
if(lK){
var aL=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[26],1,822)
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
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var f7=e_[x[26]].i
_ai(f7,x[7],e_,x[26],1,1)
f7.pop()
return r
}
e_[x[26]]={f:m14,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[27]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var h9=e_[x[27]].i
_ai(h9,x[28],e_,x[27],1,1)
var o0=_v()
_(r,o0)
cs.push("./pages/login/login.wxml:template:2:6")
var cAB=_oz(z,1,e,s,gg)
var oBB=_gd(x[27],cAB,e_,d_)
if(oBB){
var lCB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0.wxXCkey=3
oBB(lCB,lCB,o0,gg)
gg.f=cur_globalf
}
else _w(cAB,x[27],2,18)
cs.pop()
h9.pop()
return r
}
e_[x[27]]={f:m15,j:[],i:[],ti:[x[28]],ic:[]}
d_[x[29]]={}
d_[x[29]]["00cb397a"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[29]+':00cb397a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/main/main.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[29]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[29]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var eFB=e_[x[30]].i
_ai(eFB,x[31],e_,x[30],1,1)
var bGB=_v()
_(r,bGB)
cs.push("./pages/main/main.wxml:template:2:6")
var oHB=_oz(z,1,e,s,gg)
var xIB=_gd(x[30],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[30],2,18)
cs.pop()
eFB.pop()
return r
}
e_[x[30]]={f:m17,j:[],i:[],ti:[x[31]],ic:[]}
d_[x[32]]={}
d_[x[32]]["47b16668"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[32]+':47b16668'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/chartList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[32]);return}
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
e_[x[32]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var hMB=e_[x[33]].i
_ai(hMB,x[34],e_,x[33],1,1)
var oNB=_v()
_(r,oNB)
cs.push("./pages/mpvue-echarts/chartList.wxml:template:2:6")
var cOB=_oz(z,1,e,s,gg)
var oPB=_gd(x[33],cOB,e_,d_)
if(oPB){
var lQB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oNB.wxXCkey=3
oPB(lQB,lQB,oNB,gg)
gg.f=cur_globalf
}
else _w(cOB,x[33],2,18)
cs.pop()
hMB.pop()
return r
}
e_[x[33]]={f:m19,j:[],i:[],ti:[x[34]],ic:[]}
d_[x[35]]={}
d_[x[35]]["00eed4f4"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[35]+':00eed4f4'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/deviceChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[35]);return}
p_[b]=true
try{
cs.push("./pages/mpvue-echarts/deviceChart.vue.wxml:view:1:152")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/mpvue-echarts/deviceChart.vue.wxml:template:1:329")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[35],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[35],1,430)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/mpvue-echarts/deviceChart.vue.wxml:template:1:460")
var oH=_oz(z,7,e,s,gg)
var cI=_gd(x[35],oH,e_,d_)
if(cI){
var oJ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[35],1,575)
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
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var tSB=e_[x[35]].i
_ai(tSB,x[4],e_,x[35],1,1)
_ai(tSB,x[5],e_,x[35],1,64)
tSB.pop()
tSB.pop()
return r
}
e_[x[35]]={f:m20,j:[],i:[],ti:[x[4],x[5]],ic:[]}
d_[x[36]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var bUB=e_[x[36]].i
_ai(bUB,x[37],e_,x[36],1,1)
var oVB=_v()
_(r,oVB)
cs.push("./pages/mpvue-echarts/deviceChart.wxml:template:2:6")
var xWB=_oz(z,1,e,s,gg)
var oXB=_gd(x[36],xWB,e_,d_)
if(oXB){
var fYB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oVB.wxXCkey=3
oXB(fYB,fYB,oVB,gg)
gg.f=cur_globalf
}
else _w(xWB,x[36],2,18)
cs.pop()
bUB.pop()
return r
}
e_[x[36]]={f:m21,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
d_[x[38]]["7e389618"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[38]+':7e389618'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/eventChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
cs.push("./pages/mpvue-echarts/eventChart.vue.wxml:view:1:152")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/mpvue-echarts/eventChart.vue.wxml:template:1:329")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[38],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[38],1,430)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/mpvue-echarts/eventChart.vue.wxml:template:1:460")
var oH=_oz(z,7,e,s,gg)
var cI=_gd(x[38],oH,e_,d_)
if(cI){
var oJ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[38],1,575)
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
var h1B=e_[x[38]].i
_ai(h1B,x[4],e_,x[38],1,1)
_ai(h1B,x[5],e_,x[38],1,64)
h1B.pop()
h1B.pop()
return r
}
e_[x[38]]={f:m22,j:[],i:[],ti:[x[4],x[5]],ic:[]}
d_[x[39]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var c3B=e_[x[39]].i
_ai(c3B,x[40],e_,x[39],1,1)
var o4B=_v()
_(r,o4B)
cs.push("./pages/mpvue-echarts/eventChart.wxml:template:2:6")
var l5B=_oz(z,1,e,s,gg)
var a6B=_gd(x[39],l5B,e_,d_)
if(a6B){
var t7B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4B.wxXCkey=3
a6B(t7B,t7B,o4B,gg)
gg.f=cur_globalf
}
else _w(l5B,x[39],2,18)
cs.pop()
c3B.pop()
return r
}
e_[x[39]]={f:m23,j:[],i:[],ti:[x[40]],ic:[]}
d_[x[41]]={}
d_[x[41]]["18e9acfc"]=function(e,s,r,gg){
var z=gz$gwx_25()
var b=x[41]+':18e9acfc'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/mpvue-echarts.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[41]);return}
p_[b]=true
try{
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:view:1:90")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:template:1:446")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[41],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[41],1,547)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/mpvue-echarts/mpvue-echarts.vue.wxml:template:1:674")
var oH=_oz(z,8,e,s,gg)
var cI=_gd(x[41],oH,e_,d_)
if(cI){
var oJ=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[41],1,777)
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
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var b9B=e_[x[41]].i
_ai(b9B,x[4],e_,x[41],1,1)
b9B.pop()
return r
}
e_[x[41]]={f:m24,j:[],i:[],ti:[x[4]],ic:[]}
d_[x[42]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var xAC=e_[x[42]].i
_ai(xAC,x[43],e_,x[42],1,1)
var oBC=_v()
_(r,oBC)
cs.push("./pages/mpvue-echarts/mpvue-echarts.wxml:template:2:6")
var fCC=_oz(z,1,e,s,gg)
var cDC=_gd(x[42],fCC,e_,d_)
if(cDC){
var hEC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oBC.wxXCkey=3
cDC(hEC,hEC,oBC,gg)
gg.f=cur_globalf
}
else _w(fCC,x[42],2,18)
cs.pop()
xAC.pop()
return r
}
e_[x[42]]={f:m25,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[44]]={}
d_[x[44]]["1b853e3c"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[44]+':1b853e3c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mpvue-echarts/valveChart.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
cs.push("./pages/mpvue-echarts/valveChart.vue.wxml:view:1:282")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/mpvue-echarts/valveChart.vue.wxml:template:1:411")
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[44],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[44],1,514)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/mpvue-echarts/valveChart.vue.wxml:template:1:586")
var oH=_oz(z,7,e,s,gg)
var cI=_gd(x[44],oH,e_,d_)
if(cI){
var oJ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[44],1,701)
cs.pop()
var lK=_v()
_(oB,lK)
cs.push("./pages/mpvue-echarts/valveChart.vue.wxml:template:1:731")
var aL=_oz(z,9,e,s,gg)
var tM=_gd(x[44],aL,e_,d_)
if(tM){
var eN=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[44],1,846)
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
var cGC=e_[x[44]].i
_ai(cGC,x[4],e_,x[44],1,1)
_ai(cGC,x[1],e_,x[44],1,64)
_ai(cGC,x[2],e_,x[44],1,124)
_ai(cGC,x[5],e_,x[44],1,194)
cGC.pop()
cGC.pop()
cGC.pop()
cGC.pop()
return r
}
e_[x[44]]={f:m26,j:[],i:[],ti:[x[4],x[1],x[2],x[5]],ic:[]}
d_[x[45]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var lIC=e_[x[45]].i
_ai(lIC,x[46],e_,x[45],1,1)
var aJC=_v()
_(r,aJC)
cs.push("./pages/mpvue-echarts/valveChart.wxml:template:2:6")
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[45],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[45],2,18)
cs.pop()
lIC.pop()
return r
}
e_[x[45]]={f:m27,j:[],i:[],ti:[x[46]],ic:[]}
d_[x[47]]={}
d_[x[47]]["7be27b0c"]=function(e,s,r,gg){
var z=gz$gwx_29()
var b=x[47]+':7be27b0c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointAdd/pointAdd.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[47]);return}
p_[b]=true
try{
cs.push("./pages/pointAdd/pointAdd.vue.wxml:view:1:217")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:405")
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[47],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[47],1,520)
cs.pop()
cs.push("./pages/pointAdd/pointAdd.vue.wxml:view:1:550")
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:704")
var cI=_oz(z,7,e,s,gg)
var oJ=_gd(x[47],cI,e_,d_)
if(oJ){
var lK=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[47],1,824)
cs.pop()
var aL=_v()
_(hG,aL)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:900")
var tM=_oz(z,12,e,s,gg)
var eN=_gd(x[47],tM,e_,d_)
if(eN){
var bO=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[47],1,1016)
cs.pop()
var oP=_v()
_(hG,oP)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:1092")
var xQ=_oz(z,17,e,s,gg)
var oR=_gd(x[47],xQ,e_,d_)
if(oR){
var fS=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[47],1,1202)
cs.pop()
cs.pop()
_(oB,hG)
var cT=_v()
_(oB,cT)
cs.push("./pages/pointAdd/pointAdd.vue.wxml:template:1:1274")
var hU=_oz(z,21,e,s,gg)
var oV=_gd(x[47],hU,e_,d_)
if(oV){
var cW=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[47],1,1391)
cs.pop()
cs.push("./pages/pointAdd/pointAdd.vue.wxml:view:1:1421")
var oX=_n('view')
_rz(z,oX,'class',22,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,23,e,s,gg)){lY.wxVkey=1
cs.push("./pages/pointAdd/pointAdd.vue.wxml:button:1:1458")
cs.pop()
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,24,e,s,gg)){aZ.wxVkey=1
cs.push("./pages/pointAdd/pointAdd.vue.wxml:button:1:1610")
cs.pop()
}
lY.wxXCkey=1
aZ.wxXCkey=1
cs.pop()
_(oB,oX)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var xOC=e_[x[47]].i
_ai(xOC,x[1],e_,x[47],1,1)
_ai(xOC,x[2],e_,x[47],1,61)
_ai(xOC,x[3],e_,x[47],1,131)
xOC.pop()
xOC.pop()
xOC.pop()
return r
}
e_[x[47]]={f:m28,j:[],i:[],ti:[x[1],x[2],x[3]],ic:[]}
d_[x[48]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var fQC=e_[x[48]].i
_ai(fQC,x[49],e_,x[48],1,1)
var cRC=_v()
_(r,cRC)
cs.push("./pages/pointAdd/pointAdd.wxml:template:2:6")
var hSC=_oz(z,1,e,s,gg)
var oTC=_gd(x[48],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[48],2,18)
cs.pop()
fQC.pop()
return r
}
e_[x[48]]={f:m29,j:[],i:[],ti:[x[49]],ic:[]}
d_[x[50]]={}
d_[x[50]]["4bd08622"]=function(e,s,r,gg){
var z=gz$gwx_31()
var b=x[50]+':4bd08622'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointAdd/pointCheckInfo.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./pages/pointAdd/pointCheckInfo.vue.wxml:picker:1:1119")
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
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[50]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var aXC=e_[x[51]].i
_ai(aXC,x[52],e_,x[51],1,1)
var tYC=_v()
_(r,tYC)
cs.push("./pages/pointAdd/pointCheckInfo.wxml:template:2:6")
var eZC=_oz(z,1,e,s,gg)
var b1C=_gd(x[51],eZC,e_,d_)
if(b1C){
var o2C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
tYC.wxXCkey=3
b1C(o2C,o2C,tYC,gg)
gg.f=cur_globalf
}
else _w(eZC,x[51],2,18)
cs.pop()
aXC.pop()
return r
}
e_[x[51]]={f:m31,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
d_[x[53]]["10bbdf1a"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[53]+':10bbdf1a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointCheck/pointCheck.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
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
e_[x[53]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var f5C=e_[x[54]].i
_ai(f5C,x[55],e_,x[54],1,1)
var c6C=_v()
_(r,c6C)
cs.push("./pages/pointCheck/pointCheck.wxml:template:2:6")
var h7C=_oz(z,1,e,s,gg)
var o8C=_gd(x[54],h7C,e_,d_)
if(o8C){
var c9C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
c6C.wxXCkey=3
o8C(c9C,c9C,c6C,gg)
gg.f=cur_globalf
}
else _w(h7C,x[54],2,18)
cs.pop()
f5C.pop()
return r
}
e_[x[54]]={f:m33,j:[],i:[],ti:[x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["21b694de"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[56]+':21b694de'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointDetail/pointDetail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
cs.push("./pages/pointDetail/pointDetail.vue.wxml:view:1:217")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/pointDetail/pointDetail.vue.wxml:template:1:405")
var oD=_oz(z,3,e,s,gg)
var fE=_gd(x[56],oD,e_,d_)
if(fE){
var cF=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[56],1,520)
cs.pop()
cs.push("./pages/pointDetail/pointDetail.vue.wxml:view:1:550")
var hG=_n('view')
_rz(z,hG,'class',4,e,s,gg)
var oH=_v()
_(hG,oH)
cs.push("./pages/pointDetail/pointDetail.vue.wxml:template:1:704")
var cI=_oz(z,7,e,s,gg)
var oJ=_gd(x[56],cI,e_,d_)
if(oJ){
var lK=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[56],1,824)
cs.pop()
var aL=_v()
_(hG,aL)
cs.push("./pages/pointDetail/pointDetail.vue.wxml:template:1:900")
var tM=_oz(z,12,e,s,gg)
var eN=_gd(x[56],tM,e_,d_)
if(eN){
var bO=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[56],1,1016)
cs.pop()
var oP=_v()
_(hG,oP)
cs.push("./pages/pointDetail/pointDetail.vue.wxml:template:1:1092")
var xQ=_oz(z,17,e,s,gg)
var oR=_gd(x[56],xQ,e_,d_)
if(oR){
var fS=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[56],1,1202)
cs.pop()
cs.pop()
_(oB,hG)
var cT=_v()
_(oB,cT)
cs.push("./pages/pointDetail/pointDetail.vue.wxml:template:1:1274")
var hU=_oz(z,21,e,s,gg)
var oV=_gd(x[56],hU,e_,d_)
if(oV){
var cW=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[56],1,1391)
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
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var lAD=e_[x[56]].i
_ai(lAD,x[1],e_,x[56],1,1)
_ai(lAD,x[2],e_,x[56],1,61)
_ai(lAD,x[3],e_,x[56],1,131)
lAD.pop()
lAD.pop()
lAD.pop()
return r
}
e_[x[56]]={f:m34,j:[],i:[],ti:[x[1],x[2],x[3]],ic:[]}
d_[x[57]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var tCD=e_[x[57]].i
_ai(tCD,x[58],e_,x[57],1,1)
var eDD=_v()
_(r,eDD)
cs.push("./pages/pointDetail/pointDetail.wxml:template:2:6")
var bED=_oz(z,1,e,s,gg)
var oFD=_gd(x[57],bED,e_,d_)
if(oFD){
var xGD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eDD.wxXCkey=3
oFD(xGD,xGD,eDD,gg)
gg.f=cur_globalf
}
else _w(bED,x[57],2,18)
cs.pop()
tCD.pop()
return r
}
e_[x[57]]={f:m35,j:[],i:[],ti:[x[58]],ic:[]}
d_[x[59]]={}
d_[x[59]]["58792338"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[59]+':58792338'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pointList/pointList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
cs.push("./pages/pointList/pointList.vue.wxml:view:1:82")
var oB=_mz(z,'view',['catchtouchmove',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/pointList/pointList.vue.wxml:scroll-view:1:602")
var xC=_mz(z,'scroll-view',['bindscroll',5,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/pointList/pointList.vue.wxml:template:1:4832")
var fE=_oz(z,11,e,s,gg)
var cF=_gd(x[59],fE,e_,d_)
if(cF){
var hG=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[59],1,4949)
cs.pop()
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
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var fID=e_[x[59]].i
_ai(fID,x[6],e_,x[59],1,1)
fID.pop()
return r
}
e_[x[59]]={f:m36,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[60]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var hKD=e_[x[60]].i
_ai(hKD,x[61],e_,x[60],1,1)
var oLD=_v()
_(r,oLD)
cs.push("./pages/pointList/pointList.wxml:template:2:6")
var cMD=_oz(z,1,e,s,gg)
var oND=_gd(x[60],cMD,e_,d_)
if(oND){
var lOD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oLD.wxXCkey=3
oND(lOD,lOD,oLD,gg)
gg.f=cur_globalf
}
else _w(cMD,x[60],2,18)
cs.pop()
hKD.pop()
return r
}
e_[x[60]]={f:m37,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["6cbf6956"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[62]+':6cbf6956'
r.wxVkey=b
gg.f=$gdc(f_["./pages/pwd/pwd.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/pwd/pwd.vue.wxml:template:1:240")
var xC=_oz(z,5,e,s,gg)
var oD=_gd(x[62],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[62],1,465)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var tQD=e_[x[62]].i
_ai(tQD,x[7],e_,x[62],1,1)
tQD.pop()
return r
}
e_[x[62]]={f:m38,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[63]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var bSD=e_[x[63]].i
_ai(bSD,x[64],e_,x[63],1,1)
var oTD=_v()
_(r,oTD)
cs.push("./pages/pwd/pwd.wxml:template:2:6")
var xUD=_oz(z,1,e,s,gg)
var oVD=_gd(x[63],xUD,e_,d_)
if(oVD){
var fWD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oTD.wxXCkey=3
oVD(fWD,fWD,oTD,gg)
gg.f=cur_globalf
}
else _w(xUD,x[63],2,18)
cs.pop()
bSD.pop()
return r
}
e_[x[63]]={f:m39,j:[],i:[],ti:[x[64]],ic:[]}
d_[x[65]]={}
d_[x[65]]["90021ef8"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[65]+':90021ef8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/reg/reg.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
cs.push("./pages/reg/reg.vue.wxml:view:1:109")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
cs.push("./pages/reg/reg.vue.wxml:template:1:247")
var oD=_oz(z,6,e,s,gg)
var fE=_gd(x[65],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[65],1,474)
cs.pop()
var hG=_v()
_(oB,hG)
cs.push("./pages/reg/reg.vue.wxml:template:1:601")
var oH=_oz(z,14,e,s,gg)
var cI=_gd(x[65],oH,e_,d_)
if(cI){
var oJ=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[65],1,829)
cs.pop()
var lK=_v()
_(oB,lK)
cs.push("./pages/reg/reg.vue.wxml:template:1:949")
var aL=_oz(z,22,e,s,gg)
var tM=_gd(x[65],aL,e_,d_)
if(tM){
var eN=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[65],1,1168)
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
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var hYD=e_[x[65]].i
_ai(hYD,x[7],e_,x[65],1,1)
hYD.pop()
return r
}
e_[x[65]]={f:m40,j:[],i:[],ti:[x[7]],ic:[]}
d_[x[66]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var c1D=e_[x[66]].i
_ai(c1D,x[67],e_,x[66],1,1)
var o2D=_v()
_(r,o2D)
cs.push("./pages/reg/reg.wxml:template:2:6")
var l3D=_oz(z,1,e,s,gg)
var a4D=_gd(x[66],l3D,e_,d_)
if(a4D){
var t5D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o2D.wxXCkey=3
a4D(t5D,t5D,o2D,gg)
gg.f=cur_globalf
}
else _w(l3D,x[66],2,18)
cs.pop()
c1D.pop()
return r
}
e_[x[66]]={f:m41,j:[],i:[],ti:[x[67]],ic:[]}
d_[x[68]]={}
d_[x[68]]["d573abf0"]=function(e,s,r,gg){
var z=gz$gwx_43()
var b=x[68]+':d573abf0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user/accountEdit.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[68]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[68]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var o8D=e_[x[69]].i
_ai(o8D,x[70],e_,x[69],1,1)
var x9D=_v()
_(r,x9D)
cs.push("./pages/user/accountEdit.wxml:template:2:6")
var o0D=_oz(z,1,e,s,gg)
var fAE=_gd(x[69],o0D,e_,d_)
if(fAE){
var cBE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x9D.wxXCkey=3
fAE(cBE,cBE,x9D,gg)
gg.f=cur_globalf
}
else _w(o0D,x[69],2,18)
cs.pop()
o8D.pop()
return r
}
e_[x[69]]={f:m43,j:[],i:[],ti:[x[70]],ic:[]}
d_[x[71]]={}
d_[x[71]]["240234ba"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[71]+':240234ba'
r.wxVkey=b
gg.f=$gdc(f_["./pages/user/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[71]);return}
p_[b]=true
try{
cs.push("./pages/user/user.vue.wxml:view:1:194")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/user/user.vue.wxml:view:1:234")
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
cs.push("./pages/user/user.vue.wxml:button:1:450")
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
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[71]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var cEE=e_[x[72]].i
_ai(cEE,x[73],e_,x[72],1,1)
var oFE=_v()
_(r,oFE)
cs.push("./pages/user/user.wxml:template:2:6")
var lGE=_oz(z,1,e,s,gg)
var aHE=_gd(x[72],lGE,e_,d_)
if(aHE){
var tIE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oFE.wxXCkey=3
aHE(tIE,tIE,oFE,gg)
gg.f=cur_globalf
}
else _w(lGE,x[72],2,18)
cs.pop()
cEE.pop()
return r
}
e_[x[72]]={f:m45,j:[],i:[],ti:[x[73]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/main/main","pages/login/login","pages/login/diyHost","pages/reg/reg","pages/pwd/pwd","pages/user/accountEdit","pages/user/user","pages/pointCheck/pointCheck","pages/pointList/pointList","pages/pointDetail/pointDetail","pages/pointAdd/pointAdd","pages/pointAdd/pointCheckInfo","pages/mpvue-echarts/chartList","pages/mpvue-echarts/deviceChart","pages/mpvue-echarts/eventChart","pages/mpvue-echarts/valveChart","pages/mpvue-echarts/mpvue-echarts","pages/common/inputPage"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#2D68AA","backgroundColor":"#fbf9fe"},"usingComponents":{},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/pointCheck/pointCheck","text":"应用","iconPath":"static/img/point.png","selectedIconPath":"static/img/pointHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"networkTimeout":{"request":60000},"nvue":{"pages":{"pages/uni-tabs/uni-tabs.html":{"window":{"navigationBarTitleText":"点位检查11"}},"pages/pointList/uni-tabs.html":{"window":{"navigationBarTitleText":"点位检查","titleNView":{"buttons":[{"text":"","fontSrc":"/static/aliIcon/iconfont.ttf","fontSize":"22px"}]}}}}},"splashscreen":{"autoclose":true},"appname":"京东方消防安全"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0edc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("f3d3")),o=r(n("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}u.default.use(o.default);var a=new o.default.Store({state:{forcedLogin:!0,hasLogin:!1,userName:"",userInfo:null,inputPageText:"",key:"",sublistItem:null,sublistIndex:0},mutations:{login:function(e,t){null!=t&&(e.userName=t.username||"新用户",e.hasLogin=!0,e.userInfo=t)},logout:function(e){e.userName="",e.userInfo=null,e.hasLogin=!1},setInputPageText:function(e,t){e.inputPageText=t.text,e.key=t.key},setSublistItem:function(e,t){e.sublistItem=t.item,e.sublistIndex=t.index}}}),l=a;t.default=l},"3d4d":function(e,t,n){"use strict";n.r(t);var u=n("c8ea");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("90c6");var r,a,l=n("2877"),i=Object(l["a"])(u["default"],r,a,!1,null,null,null);i.options.__file="App.vue",t["default"]=i.exports},"3d76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=u},"90c6":function(e,t,n){"use strict";var u=n("9120"),o=n.n(u);o.a},9120:function(e,t,n){},adb8:function(e,t,n){"use strict";n("de83");var u=a(n("f3d3")),o=a(n("3d4d")),r=a(n("0edc"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}u.default.config.productionTip=!1,u.default.prototype.$store=r.default,o.default.mpType="app";var f=new u.default(l({store:r.default},o.default));f.$mount()},c8ea:function(e,t,n){"use strict";n.r(t);var u=n("3d76"),o=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=o.a}},[["adb8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(function (e) {function r(r) {for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;}for (n in a) {Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);}c && c(r);while (s.length) {s.shift()();}return u.push.apply(u, f || []), t();}function t() {for (var e, r = 0; r < u.length; r++) {for (var t = u[r], n = !0, i = 1; i < t.length; i++) {var a = t[i];0 !== o[a] && (n = !1);}n && (u.splice(r--, 1), e = l(l.s = t[0]));}return e;}var n = {},o = { "common/runtime": 0 },u = [];function l(r) {if (n[r]) return n[r].exports;var t = n[r] = { i: r, l: !1, exports: {} };return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;}l.m = e, l.c = n, l.d = function (e, r, t) {l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });}, l.r = function (e) {"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });}, l.t = function (e, r) {if (1 & r && (e = l(e)), 8 & r) return e;if (4 & r && "object" === typeof e && e && e.__esModule) return e;var t = Object.create(null);if (l.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) {l.d(t, n, function (r) {return e[r];}.bind(null, n));}return t;}, l.n = function (e) {var r = e && e.__esModule ? function () {return e["default"];} : function () {return e;};return l.d(r, "a", r), r;}, l.o = function (e, r) {return Object.prototype.hasOwnProperty.call(e, r);}, l.p = "/";var i = global["webpackJsonp"] = global["webpackJsonp"] || [],a = i.push.bind(i);i.push = r, i = i.slice();for (var f = 0; f < i.length; f++) {r(i[f]);}var c = a;t();})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"02a1":function(t,e,n){"use strict";n.r(e);var i=n("e6d6"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"07fa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("ba08")),r=o(n("3ad2"));function o(t){return t&&t.__esModule?t:{default:t}}var a={name:"uni-list-item",components:{uniIcon:i.default,uniBadge:r.default},data:function(){return{}},props:{title:String,note:String,subnote:String,disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:String,badgeType:{type:String,default:"success"},thumb:String,showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:"20"}}}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(t){this.$emit("switchChange",t.detail)}}};e.default=a},"0f5b":function(t,e,n){"use strict";n.r(e);var i=n("93f4"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"14e4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-list"},[t._t("default",null,{mpcomid:"3b6bb3ad-0"})],2)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"17f7":function(t,e,n){"use strict";var i="http://222.223.19.166:10012/boeb9",r={host:i,login:"".concat(i,"/mobile/system/login.do"),scan:"".concat(i,"/mobile/dwsm.do"),UpdatePoint:"".concat(i,"/mobile/updateJcjl.do"),getTabCounts:"".concat(i,"/mobile/getTabCount.do"),getPointDetail:"".concat(i,"/mobile/getJcjl.do"),getMainPageCount:"".concat(i,"/mobile/getSytj.do"),alertDeviceCount:"".concat(i,"/mobile/bjsblx.do"),alertEventCount:"".concat(i,"/mobile/bjsjlx.do"),alertValveCount:"".concat(i,"/mobile/ylfz.do"),getValveDataByFloor:"".concat(i,"/mobile/getfz.do")};t.exports=r},"196b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-icon",props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"19b8":function(t,e,n){},"20aa":function(t,e,n){},2134:function(t,e,n){"use strict";var i=n("19b8"),r=n.n(i);r.a},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s){var l,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},"2b62":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-icon",class:["m-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"2241d2a0-0"},on:{click:function(e){t.onClick()}}})},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"2d25":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("text",{staticClass:"uni-badge",class:t.setClass,attrs:{eventid:"68dcfa4a-0"},on:{click:function(e){t.onClick()}}},[t._v(t._s(t.text))]):t._e()},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"2f31":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-drawer",class:{"uni-drawer-visible":t.option.visible,"uni-drawer-right":t.option.rightMode},attrs:{animation:t.animationData}},[t.showmask?n("view",{staticClass:"uni-drawer-mask",attrs:{eventid:"3c97b91b-0"},on:{tap:function(e){e.stopPropagation(),t.close(e)}}}):t._e(),n("view",{staticClass:"uni-drawer-content",style:{width:t.option.width+"%"},attrs:{eventid:"3c97b91b-1"},on:{touchstart:t.updateStart,touchmove:function(e){e.stopPropagation(),t.updateMove(e)},touchend:t.updateEnd}},[t._t("default",null,{mpcomid:"3c97b91b-0"})],2)])},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return p}),n.d(e,"install",function(){return I}),n.d(e,"mapState",function(){return D}),n.d(e,"mapMutations",function(){return A}),n.d(e,"mapGetters",function(){return O}),n.d(e,"mapActions",function(){return P}),n.d(e,"createNamespacedHelpers",function(){return L});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var u=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},u.prototype.addChild=function(t,e){this._children[t]=e},u.prototype.removeChild=function(t){delete this._children[t]},u.prototype.getChild=function(t){return this._children[t]},u.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},u.prototype.forEachChild=function(t){a(this._children,t)},u.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},u.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},u.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(u.prototype,c);var h=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;f(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){f([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new u(e,n);if(0===t.length)this.root=r;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],r)}e.modules&&a(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var p=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&I(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,l=s.dispatch,u=s.commit;this.dispatch=function(t,e){return l.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=i,_(this,r,[],this._modules.root),y(this,r),n.forEach(function(t){return t(e)}),d.config.devtools&&o(this)},g={state:{configurable:!0}};function v(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function m(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),y(t,n,e)}function y(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,o={};a(r,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:o}),d.config.silent=s,t.strict&&C(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),d.nextTick(function(){return i.$destroy()}))}function _(t,e,n,i,r){var o=!n.length,a=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[a]=i),!o&&!r){var s=k(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){d.set(s,l,i.state)})}var u=i.context=x(t,a,n);i.forEachMutation(function(e,n){var i=a+n;w(t,i,e,u)}),i.forEachAction(function(e,n){var i=e.root?n:a+n,r=e.handler||e;S(t,i,r,u)}),i.forEachGetter(function(e,n){var i=a+n;M(t,i,e,u)}),i.forEachChild(function(i,o){_(t,e,n.concat(o),i,r)})}function x(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var o=T(n,i,r),a=o.payload,s=o.options,l=o.type;return s&&s.root||(l=e+l),t.dispatch(l,a)},commit:i?t.commit:function(n,i,r){var o=T(n,i,r),a=o.payload,s=o.options,l=o.type;s&&s.root||(l=e+l),t.commit(l,a,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return k(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var o=r.slice(i);Object.defineProperty(n,o,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function w(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function S(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):o})}function M(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function C(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function T(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function I(t){d&&t===d||(d=t,i(d))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},p.prototype.commit=function(t,e,n){var i=this,r=T(t,e,n),o=r.type,a=r.payload,s=(r.options,{type:o,payload:a}),l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},p.prototype.dispatch=function(t,e){var n=this,i=T(t,e),r=i.type,o=i.payload,a={type:r,payload:o},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(o)})):s[0](o)},p.prototype.subscribe=function(t){return v(t,this._subscribers)},p.prototype.subscribeAction=function(t){return v(t,this._actionSubscribers)},p.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},p.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},p.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),y(this,this.state)},p.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),m(this)},p.prototype.hotUpdate=function(t){this._modules.update(t),m(this,!0)},p.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(p.prototype,g);var D=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=B(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),A=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var o=B(this.$store,"mapMutations",t);if(!o)return;i=o.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),O=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||B(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),P=N(function(t,e){var n={};return E(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var o=B(this.$store,"mapActions",t);if(!o)return;i=o.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),L=function(t){return{mapState:D.bind(null,t),mapGetters:O.bind(null,t),mapMutations:A.bind(null,t),mapActions:P.bind(null,t)}};function E(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function B(t,e,n){var i=t._modulesNamespaceMap[n];return i}var R={Store:p,install:I,version:"3.0.1",mapState:D,mapMutations:A,mapGetters:O,mapActions:P,createNamespacedHelpers:L};e["default"]=R},"31cc":function(t,e,n){"use strict";var i=n("58b9"),r=n.n(i);r.a},"34fc":function(t,e,n){"use strict";var i=n("c89d"),r=n.n(i);r.a},3731:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(e,n,i,r,o,a){""!=i&&t.showLoading({title:i}),console.log("request.js :"+e),t.request({url:e,data:n,header:{"Content-type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){""!=i&&t.hideLoading(),"true"==e.data.success?r(e.data):o()},fail:function(e){""!=i&&t.hideLoading(),o()},complete:function(){""!=i&&t.hideLoading(),a()}})},i=function(e,n,i,r){t.request({url:e,header:{"Content-type":"application/x-www-form-urlencoded"},method:"GET",success:function(t){"true"==t.success?i(t.data):r()},fail:function(t){r()}})},r={request:i,requestLoading:n};e.default=r}).call(this,n("649d")["default"])},"3ad2":function(t,e,n){"use strict";n.r(e);var i=n("2d25"),r=n("4c10");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("6aa1");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="uni-badge.vue",e["default"]=s.exports},"3bd6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var t=Number(this.size);return t=isNaN(t)?24:t,"".concat(t,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"3d5e":function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"hj-dragabledrawer",props:{options:Object},data:function(){return{def:{visible:!1,rightMode:!0,mask:!0,width:60},animationData:{},show:!0}},computed:{option:function(){return n({},this.def,this.options)},showmask:function(){return this.option.mask&&this.show}},created:function(){var e=getCurrentPages(),n=e[e.length-1],i=n.$getAppWebview();i.setStyle({pullToRefresh:{support:!1}}),this.animation=t.createAnimation(),this.screenWidth=t.getSystemInfoSync().windowWidth},methods:{close:function(){this.options.visible=!1},updateStart:function(t){this.start=t.touches[0].pageX,this.scale=this.screenWidth/(this.screenWidth-this.start)},updateMove:function(t){this.tx=this.scale*(t.touches[0].pageX-this.start),this.show=!1,this.option.rightMode?this.tx>0&&this.animation.translateX(this.tx).step({duration:100}):this.tx<0&&this.animation.translateX(this.tx).step({duration:100}),this.animationData=this.animation.export()},updateEnd:function(){this.show=!0,this.option.rightMode?this.tx>100&&this.close():this.tx<-80&&this.close(),this.animation.translateX(0).step(),this.animationData=this.animation.export()},stopref:t.stopPullDownRefresh}};e.default=r}).call(this,n("649d")["default"])},"43a0":function(t,e,n){"use strict";n.r(e);var i=n("6592"),r=n("63bc");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("34fc");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="m-input.vue",e["default"]=s.exports},"4b9c":function(t,e,n){"use strict";n.r(e);var i=n("5869"),r=n("c0c8");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("e56c");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="uni-list-item.vue",e["default"]=s.exports},"4c10":function(t,e,n){"use strict";n.r(e);var i=n("7bd0"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"502f":function(t,e,n){"use strict";n.r(e);var i=n("da92"),r=n("0f5b");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("a192");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"2ebf557d",null);s.options.__file="echarts.vue",e["default"]=s.exports},"514d":function(t,e,n){"use strict";n.r(e);var i=n("2b62"),r=n("a4c8");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("31cc");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="m-icon.vue",e["default"]=s.exports},5869:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-list-cell",class:[!0===t.disabled||"true"===t.disabled?"uni-list-cell--disabled":""],attrs:{"hover-class":!0===t.disabled||"true"===t.disabled||!0===t.showSwitch||"true"===t.showSwitch?"":"uni-list-cell--hover",eventid:"30c48a99-1"},on:{click:t.onClick}},[n("view",{staticClass:"uni-list-cell__container"},[t.thumb?n("view",{staticClass:"uni-list-cell__icon"},[n("image",{staticClass:"uni-list-cell__icon-img",attrs:{src:t.thumb}})]):!0===t.showExtraIcon||"true"===t.showExtraIcon?n("view",{staticClass:"uni-list-cell__icon"},[n("uni-icon",{attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type,mpcomid:"30c48a99-0"}})],1):t._e(),n("view",{staticClass:"uni-list-cell__content"},[n("view",{staticClass:"uni-list-cell__content-title"},[t._v(t._s(t.title))]),t.note?n("view",{staticClass:"uni-list-cell__content-note"},[t._v(t._s(t.note))]):t._e()]),t.subnote||!0===t.showBadge||"true"===t.showBadge||!0===t.showArrow||"true"===t.showArrow||!0===t.showSwitch||"true"===t.showSwitch?n("view",{staticClass:"uni-list-cell__extra"},[t.subnote?n("view",{staticClass:"uni-list-cell__content-note"},[t._v(t._s(t.subnote))]):t._e(),!0===t.showBadge||"true"===t.showBadge?n("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText,mpcomid:"30c48a99-1"}}):t._e(),!0===t.showSwitch||"true"===t.showSwitch?n("switch",{attrs:{disabled:t.disabled,checked:t.switchChecked,eventid:"30c48a99-0"},on:{change:t.onSwitchChange}}):t._e(),!0===t.showArrow||"true"===t.showArrow?n("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowright",mpcomid:"30c48a99-2"}}):t._e()],1):t._e()])])},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"58b9":function(t,e,n){},"59a9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="USERS_KEY",i=function(){var e="";return e=t.getStorageSync(n),e?JSON.parse(e):null},r=function(e){t.setStorageSync(n,JSON.stringify(e))},o=function(){t.removeStorageSync(n),t.removeStorageSync("userInfo")},a=function(t){var e={};return e=JSON.parse(JSON.stringify(t)),e},s={getUsers:i,addUser:r,removeUser:o,copyObj:a};e.default=s}).call(this,n("649d")["default"])},"5b0d":function(t,e,n){},6238:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visibleSync?n("view",{staticClass:"uni-drawer",class:{"uni-drawer--visible":t.showDrawer,"uni-drawer--right":t.rightMode},attrs:{catchtouchmove:t.catchtouchmove}},[n("view",{staticClass:"uni-drawer__mask",attrs:{eventid:"590c6f9d-0"},on:{tap:t.close}}),n("view",{staticClass:"uni-drawer__content"},[t._t("default",null,{mpcomid:"590c6f9d-0"})],2)]):t._e()},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"63bc":function(t,e,n){"use strict";n.r(e);var i=n("b588"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"649d":function(t,e,n){"use strict";n.r(e);var i=function(t){return"function"===typeof t},r=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},o=/^on|^create|Sync$|Manager$|^pause/,a=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~a.indexOf(t)},l=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(a.success)||i(a.fail)||i(a.complete)?t.apply(void 0,[a].concat(n)):r(new Promise(function(e,i){t.apply(void 0,[Object.assign({},a,{success:e,fail:i})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}},u=1e-4,c=750,h=!1,f=0,d=0;function p(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;f=i,d=n,h="ios"===e}function g(t,e){return 0===f&&p(),0===t?0:(t=t/c*(e||f),t=Math.floor(t+u),0===t?1!==d&&h?.5:1:t)}function v(t){return __requireNativePlugin__(t)}var m={},y={os:{plus:!0}};"undefined"!==typeof Proxy?m=new Proxy({},{get:function(t,e){return y.hasOwnProperty(e)?y[e]:"upx2px"===e?g:"requireNativePlugin"===e?v:wx.hasOwnProperty(e)?s(e)?l(wx[e]):wx[e]:void 0}}):(m.upx2px=g,m.requireNativePlugin=v,Object.keys(y).forEach(function(t){m[t]=y[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?m[t]=l(wx[t]):m[t]=wx[t])}));var _=m;e["default"]=_},6592:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"m-input-view"},[n("input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword,eventid:"7dcb1efb-0"},on:{input:t.onInput,focus:t.onFocus,blur:t.onBlur}}),t.clearable_&&!t.displayable_&&t.value.length?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20",eventid:"7dcb1efb-1",mpcomid:"7dcb1efb-0"},on:{click:t.clear}})],1):t._e(),t.displayable_?n("view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20",eventid:"7dcb1efb-2",mpcomid:"7dcb1efb-1"},on:{click:t.display}})],1):t._e()])},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"6aa1":function(t,e,n){"use strict";var i=n("eb82"),r=n.n(i);r.a},"6cfe":function(t,e,n){"use strict";n.r(e);var i=n("6238"),r=n("d219");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("e5e7");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="uni-drawer.vue",e["default"]=s.exports},"72fc":function(t,e,n){"use strict";n.r(e);var i=n("196b"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"7bd0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"7c03":function(t,e,n){"use strict";n.r(e);var i=n("14e4"),r=n("02a1");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("e0fa");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="uni-list.vue",e["default"]=s.exports},"93f4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a10a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={props:{echarts:{required:!0,type:Object,default:function(){return null}},onInit:{required:!0,type:Function,default:null},canvasId:{type:String,default:"ec-canvas"},lazyLoad:{type:Boolean,default:!1},disableTouch:{type:Boolean,default:!1},throttleTouch:{type:Boolean,default:!1}},onReady:function(){this.echarts?this.lazyLoad||this.init():console.warn('组件需绑定 echarts 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" :echarts="echarts"></ec-canvas>')},methods:{init:function(){var t=this;if(this.onInit){var e=this.canvasId;this.ctx=wx.createCanvasContext(e);var n=new i.default(this.ctx,e);this.echarts.setCanvasCreator(function(){return n});var r=wx.createSelectorQuery();r.select("#".concat(e)).boundingClientRect(function(e){e?t.chart=t.onInit(n,e.width,e.height):setTimeout(function(){return t.init()},50)}).exec()}else console.warn("请传入 onInit 函数进行初始化")},canvasToTempFilePath:function(t){var e=this.canvasId;this.ctx.draw(!0,function(){wx.canvasToTempFilePath(o({canvasId:e},t))})},touchStart:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n&&t.mp.touches.length){var i=t.mp.touches[0];n._zr.handler.dispatch("mousedown",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("mousemove",{zrX:i.x,zrY:i.y})}},touchMove:function(t){var e=this.disableTouch,n=this.throttleTouch,i=this.chart,r=this.lastMoveTime;if(!e&&i&&t.mp.touches.length){if(n){var o=Date.now();if(o-r<240)return;this.lastMoveTime=o}var a=t.mp.touches[0];i._zr.handler.dispatch("mousemove",{zrX:a.x,zrY:a.y})}},touchEnd:function(t){var e=this.disableTouch,n=this.chart;if(!e&&n){var i=t.mp.changedTouches?t.mp.changedTouches[0]:{};n._zr.handler.dispatch("mouseup",{zrX:i.x,zrY:i.y}),n._zr.handler.dispatch("click",{zrX:i.x,zrY:i.y})}}}};e.default=s},a10a:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(e,n){i(this,t),this.ctx=e,this.canvasId=n,this.chart=null,t.initStyle(e),this.initEvent()}return o(t,[{key:"getContext",value:function(t){return"2d"===t?this.ctx:null}},{key:"setChart",value:function(t){this.chart=t}},{key:"attachEvent",value:function(){}},{key:"detachEvent",value:function(){}},{key:"initEvent",value:function(){var t=this;this.event={};var e=[{wxName:"touchStart",ecName:"mousedown"},{wxName:"touchMove",ecName:"mousemove"},{wxName:"touchEnd",ecName:"mouseup"},{wxName:"touchEnd",ecName:"click"}];e.forEach(function(e){t.event[e.wxName]=function(n){var i=n.mp.touches[0];t.chart._zr.handler.dispatch(e.ecName,{zrX:"tap"===e.wxName?i.clientX:i.x,zrY:"tap"===e.wxName?i.clientY:i.y})}})}}],[{key:"initStyle",value:function(t){var e=arguments,n=["fillStyle","strokeStyle","globalAlpha","textAlign","textBaseAlign","shadow","lineWidth","lineCap","lineJoin","lineDash","miterLimit","fontSize"];n.forEach(function(e){Object.defineProperty(t,e,{set:function(n){("fillStyle"!==e&&"strokeStyle"!==e||"none"!==n&&null!==n)&&t["set".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))](n)}})}),t.createRadialGradient=function(){return t.createCircularGradient(e)}}}]),t}();e.default=a},a192:function(t,e,n){"use strict";var i=n("d734"),r=n.n(i);r.a},a4c8:function(t,e,n){"use strict";n.r(e);var i=n("3bd6"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},b0ce:function(t,e,n){"use strict";n.r(e);var i=n("f3d3"),r=n.n(i);function o(t,e,n){var i,r=t.$options[e];if("onError"===e&&r&&(r=[r]),r)for(var a=0,s=r.length;a<s;a++)i=r[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return o(t,e,n)}),i}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new r.a(t);this.$vm=n;var i=n.$root;i.__wxWebviewId__=this.__wxWebviewId__,i.$mp||(i.$mp={});var o=i.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",o(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",o(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",o(t,"onHide")},onUnload:function(){var t=a(this);o(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);o(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);o(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);o(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);o(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return o(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);o(e,"onNavigationBarButtonTap",t)},onBackPress:function(t){var e=a(this);return o(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b39f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"346bda0d-0"},on:{click:function(e){t.onClick()}}})},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},b588:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("514d"));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{mIcon:i.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick(function(){t.isFocus=!1})},onInput:function(t){this.$emit("input",t.target.value)}}};e.default=o},ba08:function(t,e,n){"use strict";n.r(e);var i=n("b39f"),r=n("72fc");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("c5d5");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="uni-icon.vue",e["default"]=s.exports},bd1a:function(t,e,n){"use strict";n.r(e);var i=n("2f31"),r=n("cb3b");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("2134");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"0cf0e840",null);s.options.__file="hj-dragabledrawer.vue",e["default"]=s.exports},c0c8:function(t,e,n){"use strict";n.r(e);var i=n("07fa"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},c5d5:function(t,e,n){"use strict";var i=n("20aa"),r=n.n(i);r.a},c89d:function(t,e,n){},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},cb3b:function(t,e,n){"use strict";n.r(e);var i=n("3d5e"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},cc99:function(t,e,n){"use strict";!function(t,n){n(e)}(0,function(t,e,n){function i(t,e){"createCanvas"===t&&(Pu=null),Au[t]=e}function r(t){if(null==t||"object"!=typeof t)return t;var e=t,n=Su.call(t);if("[object Array]"===n){if(!B(t)){e=[];for(var i=0,o=t.length;i<o;i++)e[i]=r(t[i])}}else if(wu[n]){if(!B(t)){var a=t.constructor;if(t.constructor.from)e=a.from(t);else{e=new a(t.length);for(i=0,o=t.length;i<o;i++)e[i]=r(t[i])}}}else if(!bu[n]&&!B(t)&&!k(t))for(var s in e={},t)t.hasOwnProperty(s)&&(e[s]=r(t[s]));return e}function o(t,e,n){if(!S(e)||!S(t))return n?r(e):t;for(var i in e)if(e.hasOwnProperty(i)){var a=t[i],s=e[i];!S(s)||!S(a)||x(s)||x(a)||k(s)||k(a)||M(s)||M(a)||B(s)||B(a)?!n&&i in t||(t[i]=r(e[i],!0)):o(a,s,n)}return t}function a(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=o(n,t[i],e);return n}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function l(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i]);return t}function u(){return Pu||(Pu=Ou().getContext("2d")),Pu}function c(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1}function h(t,e){function n(){}var i=t.prototype;for(var r in n.prototype=e.prototype,t.prototype=new n,i)t.prototype[r]=i[r];t.prototype.constructor=t,t.superClass=e}function f(t,e,n){l(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)}function d(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}function p(t,e,n){if(t&&e)if(t.forEach&&t.forEach===Cu)t.forEach(e,n);else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t);else for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,t)}function g(t,e,n){if(t&&e){if(t.map&&t.map===Iu)return t.map(e,n);for(var i=[],r=0,o=t.length;r<o;r++)i.push(e.call(n,t[r],r,t));return i}}function v(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===Du)return t.reduce(e,n,i);for(var r=0,o=t.length;r<o;r++)n=e.call(i,n,t[r],r,t);return n}}function m(t,e,n){if(t&&e){if(t.filter&&t.filter===ku)return t.filter(e,n);for(var i=[],r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)&&i.push(t[r]);return i}}function y(t,e){var n=Tu.call(arguments,2);return function(){return t.apply(e,n.concat(Tu.call(arguments)))}}function _(t){var e=Tu.call(arguments,1);return function(){return t.apply(this,e.concat(Tu.call(arguments)))}}function x(t){return"[object Array]"===Su.call(t)}function b(t){return"function"==typeof t}function w(t){return"[object String]"===Su.call(t)}function S(t){var e=typeof t;return"function"===e||!!t&&"object"==e}function M(t){return!!bu[Su.call(t)]}function C(t){return!!wu[Su.call(t)]}function k(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}function T(t){return t!==t}function I(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]}function D(t,e){return null!=t?t:e}function A(t,e,n){return null!=t?t:null!=e?e:n}function O(){return Function.call.apply(Tu,arguments)}function P(t){if("number"==typeof t)return[t,t,t,t];var e=t.length;return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function L(t,e){if(!t)throw new Error(e)}function E(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function N(t){t[Lu]=!0}function B(t){return t[Lu]}function R(t){function e(t,e){n?i.set(t,e):i.set(e,t)}var n=x(t),i=this;t instanceof R?t.each(e):t&&p(t,e)}function z(t){return new R(t)}function $(){}function F(t,e){var n=new Eu(2);return null==t&&(t=0),null==e&&(e=0),n[0]=t,n[1]=e,n}function j(t){var e=new Eu(2);return e[0]=t[0],e[1]=t[1],e}function V(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t}function W(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t}function H(t){return Math.sqrt(G(t))}function G(t){return t[0]*t[0]+t[1]*t[1]}function U(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t}function q(t,e){var n=H(e);return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t}function X(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Y(t,e,n){var i=e[0],r=e[1];return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t}function Z(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t}function K(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}function J(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function Q(t,e){return{target:t,topTarget:e&&e.topTarget}}function tt(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}function et(){}function nt(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1;r.silent&&(i=!0),r=r.parent}return!i||$u}return!1}function it(){var t=new Vu(6);return rt(t),t}function rt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function ot(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function at(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],o=e[0]*n[2]+e[2]*n[3],a=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5];return t[0]=i,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t}function st(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t}function lt(t,e,n){var i=e[0],r=e[2],o=e[4],a=e[1],s=e[3],l=e[5],u=Math.sin(n),c=Math.cos(n);return t[0]=i*c+a*u,t[1]=-i*u+a*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*o+u*l,t[5]=c*l-u*o,t}function ut(t,e,n){var i=n[0],r=n[1];return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t}function ct(t,e){var n=e[0],i=e[2],r=e[4],o=e[1],a=e[3],s=e[5],l=n*a-o*i;return l?(l=1/l,t[0]=a*l,t[1]=-o*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-a*r)*l,t[5]=(o*r-n*s)*l,t):null}function ht(t){return t>Hu||t<-Hu}function ft(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}function dt(t){return(t=Math.round(t))<0?0:t>255?255:t}function pt(t){return t<0?0:t>1?1:t}function gt(t){return dt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100*255:parseInt(t,10))}function vt(t){return pt(t.length&&"%"===t.charAt(t.length-1)?parseFloat(t)/100:parseFloat(t))}function mt(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function yt(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function _t(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function xt(t,e){nc&&_t(nc,e),nc=ec.put(t,nc||e.slice())}function bt(t,e){if(t){e=e||[];var n=ec.get(t);if(n)return _t(e,n);var i=(t+="").replace(/ /g,"").toLowerCase();if(i in tc)return _t(e,tc[i]),xt(t,e),e;if("#"!==i.charAt(0)){var r=i.indexOf("("),o=i.indexOf(")");if(-1!==r&&o+1===i.length){var a=i.substr(0,r),s=i.substr(r+1,o-(r+1)).split(","),l=1;switch(a){case"rgba":if(4!==s.length)return void yt(e,0,0,0,1);l=vt(s.pop());case"rgb":return 3!==s.length?void yt(e,0,0,0,1):(yt(e,gt(s[0]),gt(s[1]),gt(s[2]),l),xt(t,e),e);case"hsla":return 4!==s.length?void yt(e,0,0,0,1):(s[3]=vt(s[3]),wt(s,e),xt(t,e),e);case"hsl":return 3!==s.length?void yt(e,0,0,0,1):(wt(s,e),xt(t,e),e);default:return}}yt(e,0,0,0,1)}else{if(4===i.length)return(u=parseInt(i.substr(1),16))>=0&&u<=4095?(yt(e,(3840&u)>>4|(3840&u)>>8,240&u|(240&u)>>4,15&u|(15&u)<<4,1),xt(t,e),e):void yt(e,0,0,0,1);if(7===i.length){var u=parseInt(i.substr(1),16);return u>=0&&u<=16777215?(yt(e,(16711680&u)>>16,(65280&u)>>8,255&u,1),xt(t,e),e):void yt(e,0,0,0,1)}}}}function wt(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=vt(t[1]),r=vt(t[2]),o=r<=.5?r*(i+1):r+i-r*i,a=2*r-o;return e=e||[],yt(e,dt(255*mt(a,o,n+1/3)),dt(255*mt(a,o,n)),dt(255*mt(a,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function St(t,e){var n=bt(t);if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0);return Mt(n,4===n.length?"rgba":"rgb")}}function Mt(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2];return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}function Ct(t,e){return t[e]}function kt(t,e,n){t[e]=n}function Tt(t,e,n){return(e-t)*n+t}function It(t,e,n){return n>.5?e:t}function Dt(t,e,n,i,r){var o=t.length;if(1==r)for(s=0;s<o;s++)i[s]=Tt(t[s],e[s],n);else for(var a=o&&t[0].length,s=0;s<o;s++)for(var l=0;l<a;l++)i[s][l]=Tt(t[s][l],e[s][l],n)}function At(t,e,n){var i=t.length,r=e.length;if(i!==r)if(i>r)t.length=r;else for(a=i;a<r;a++)t.push(1===n?e[a]:ic.call(e[a]));for(var o=t[0]&&t[0].length,a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a]);else for(var s=0;s<o;s++)isNaN(t[a][s])&&(t[a][s]=e[a][s])}function Ot(t,e,n){if(t===e)return!0;var i=t.length;if(i!==e.length)return!1;if(1===n){for(o=0;o<i;o++)if(t[o]!==e[o])return!1}else for(var r=t[0].length,o=0;o<i;o++)for(var a=0;a<r;a++)if(t[o][a]!==e[o][a])return!1;return!0}function Pt(t,e,n,i,r,o,a,s,l){var u=t.length;if(1==l)for(h=0;h<u;h++)s[h]=Lt(t[h],e[h],n[h],i[h],r,o,a);else for(var c=t[0].length,h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=Lt(t[h][f],e[h][f],n[h][f],i[h][f],r,o,a)}function Lt(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function Et(t){if(d(t)){var e=t.length;if(d(t[0])){for(var n=[],i=0;i<e;i++)n.push(ic.call(t[i]));return n}return ic.call(t)}return t}function Nt(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function Bt(t){var e=t[t.length-1].value;return d(e&&e[0])?2:1}function Rt(t,e,n,i,r,o){var a=t._getter,s=t._setter,l="spline"===e,u=i.length;if(u){var c,h=d(i[0].value),f=!1,p=!1,g=h?Bt(i):0;i.sort(function(t,e){return t.time-e.time}),c=i[u-1].time;for(var v=[],m=[],y=i[0].value,_=!0,x=0;x<u;x++){v.push(i[x].time/c);var b=i[x].value;if(h&&Ot(b,y,g)||!h&&b===y||(_=!1),y=b,"string"==typeof b){var w=bt(b);w?(b=w,f=!0):p=!0}m.push(b)}if(o||!_){var S=m[u-1];for(x=0;x<u-1;x++)h?At(m[x],S,g):!isNaN(m[x])||isNaN(S)||p||f||(m[x]=S);h&&At(a(t._target,r),S,g);var M,C,k,T,I,D=0,A=0;if(f)var O=[0,0,0,0];var P=new ft({target:t._target,life:c,loop:t._loop,delay:t._delay,onframe:function(t,e){var n;if(e<0)n=0;else if(e<A){for(n=Math.min(D+1,u-1);n>=0&&!(v[n]<=e);n--);n=Math.min(n,u-2)}else{for(n=D;n<u&&!(v[n]>e);n++);n=Math.min(n-1,u-2)}D=n,A=e;var i=v[n+1]-v[n];if(0!==i)if(M=(e-v[n])/i,l)if(k=m[n],C=m[0===n?n:n-1],T=m[n>u-2?u-1:n+1],I=m[n>u-3?u-1:n+2],h)Pt(C,k,T,I,M,M*M,M*M*M,a(t,r),g);else{if(f)o=Pt(C,k,T,I,M,M*M,M*M*M,O,1),o=Nt(O);else{if(p)return It(k,T,M);o=Lt(C,k,T,I,M,M*M,M*M*M)}s(t,r,o)}else if(h)Dt(m[n],m[n+1],M,a(t,r),g);else{var o;if(f)Dt(m[n],m[n+1],M,O,1),o=Nt(O);else{if(p)return It(m[n],m[n+1],M);o=Tt(m[n],m[n+1],M)}s(t,r,o)}},ondestroy:n});return e&&"spline"!==e&&(P.easing=e),P}}}function zt(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}function $t(t){for(var e=0;t>=gc;)e|=1&t,t>>=1;return t+e}function Ft(t,e,n,i){var r=e+1;if(r===n)return 1;if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++;jt(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++;return r-e}function jt(t,e,n){for(n--;e<n;){var i=t[e];t[e++]=t[n],t[n--]=i}}function Vt(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var o,a=t[i],s=e,l=i;s<l;)r(a,t[o=s+l>>>1])<0?l=o:s=o+1;var u=i-s;switch(u){case 3:t[s+3]=t[s+2];case 2:t[s+2]=t[s+1];case 1:t[s+1]=t[s];break;default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=a}}function Wt(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])>0){for(s=i-r;l<s&&o(t,e[n+r+l])>0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}else{for(s=r+1;l<s&&o(t,e[n+r-l])<=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])>0?a=c+1:l=c}return l}function Ht(t,e,n,i,r,o){var a=0,s=0,l=1;if(o(t,e[n+r])<0){for(s=r+1;l<s&&o(t,e[n+r-l])<0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s);var u=a;a=r-l,l=r-u}else{for(s=i-r;l<s&&o(t,e[n+r+l])>=0;)a=l,(l=1+(l<<1))<=0&&(l=s);l>s&&(l=s),a+=r,l+=r}for(a++;a<l;){var c=a+(l-a>>>1);o(t,e[n+c])<0?l=c:a=c+1}return l}function Gt(t,e){function n(n){var s=o[n],u=a[n],c=o[n+1],h=a[n+1];a[n]=u+h,n===l-3&&(o[n+1]=o[n+2],a[n+1]=a[n+2]),l--;var f=Ht(t[c],t,s,u,0,e);s+=f,0!==(u-=f)&&0!==(h=Wt(t[s+u-1],t,c,h,h-1,e))&&(u<=h?i(s,u,c,h):r(s,u,c,h))}function i(n,i,r,o){var a=0;for(a=0;a<i;a++)u[a]=t[n+a];var l=0,c=r,h=n;if(t[h++]=t[c++],0!=--o)if(1!==i){for(var f,d,p,g=s;;){f=0,d=0,p=!1;do{if(e(t[c],u[l])<0){if(t[h++]=t[c++],d++,f=0,0==--o){p=!0;break}}else if(t[h++]=u[l++],f++,d=0,1==--i){p=!0;break}}while((f|d)<g);if(p)break;do{if(0!==(f=Ht(t[c],u,l,i,0,e))){for(a=0;a<f;a++)t[h+a]=u[l+a];if(h+=f,l+=f,(i-=f)<=1){p=!0;break}}if(t[h++]=t[c++],0==--o){p=!0;break}if(0!==(d=Wt(u[l],t,c,o,0,e))){for(a=0;a<d;a++)t[h+a]=t[c+a];if(h+=d,c+=d,0===(o-=d)){p=!0;break}}if(t[h++]=u[l++],1==--i){p=!0;break}g--}while(f>=vc||d>=vc);if(p)break;g<0&&(g=0),g+=2}if((s=g)<1&&(s=1),1===i){for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else{if(0===i)throw new Error;for(a=0;a<i;a++)t[h+a]=u[l+a]}}else{for(a=0;a<o;a++)t[h+a]=t[c+a];t[h+o]=u[l]}else for(a=0;a<i;a++)t[h+a]=u[l+a]}function r(n,i,r,o){var a=0;for(a=0;a<o;a++)u[a]=t[r+a];var l=n+i-1,c=o-1,h=r+o-1,f=0,d=0;if(t[h--]=t[l--],0!=--i)if(1!==o){for(var p=s;;){var g=0,v=0,m=!1;do{if(e(u[c],t[l])<0){if(t[h--]=t[l--],g++,v=0,0==--i){m=!0;break}}else if(t[h--]=u[c--],v++,g=0,1==--o){m=!0;break}}while((g|v)<p);if(m)break;do{if(0!=(g=i-Ht(u[c],t,n,i,i-1,e))){for(i-=g,d=1+(h-=g),f=1+(l-=g),a=g-1;a>=0;a--)t[d+a]=t[f+a];if(0===i){m=!0;break}}if(t[h--]=u[c--],1==--o){m=!0;break}if(0!=(v=o-Wt(t[l],u,0,o,o-1,e))){for(o-=v,d=1+(h-=v),f=1+(c-=v),a=0;a<v;a++)t[d+a]=u[f+a];if(o<=1){m=!0;break}}if(t[h--]=t[l--],0==--i){m=!0;break}p--}while(g>=vc||v>=vc);if(m)break;p<0&&(p=0),p+=2}if((s=p)<1&&(s=1),1===o){for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else{if(0===o)throw new Error;for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}}else{for(d=1+(h-=i),f=1+(l-=i),a=i-1;a>=0;a--)t[d+a]=t[f+a];t[h]=u[c]}else for(f=h-(o-1),a=0;a<o;a++)t[f+a]=u[a]}var o,a,s=vc,l=0,u=[];o=[],a=[],this.mergeRuns=function(){for(;l>1;){var t=l-2;if(t>=1&&a[t-1]<=a[t]+a[t+1]||t>=2&&a[t-2]<=a[t]+a[t-1])a[t-1]<a[t+1]&&t--;else if(a[t]>a[t+1])break;n(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2;t>0&&a[t-1]<a[t+1]&&t--,n(t)}},this.pushRun=function(t,e){o[l]=t,a[l]=e,l+=1}}function Ut(t,e,n,i){n||(n=0),i||(i=t.length);var r=i-n;if(!(r<2)){var o=0;if(r<gc)return o=Ft(t,n,i,e),void Vt(t,n,i,n+o,e);var a=new Gt(t,e),s=$t(r);do{if((o=Ft(t,n,i,e))<s){var l=r;l>s&&(l=s),Vt(t,n,n+l,n+o,e),o=l}a.pushRun(n,o),a.mergeRuns(),r-=o,n+=o}while(0!==r);a.forceMergeRuns()}}function qt(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}function Xt(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,o=null==e.y?0:e.y,a=null==e.y2?0:e.y2;return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,o=o*n.height+n.y,a=a*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,o=isNaN(o)?0:o,a=isNaN(a)?0:a,t.createLinearGradient(i,o,r,a)}function Yt(t,e,n){var i=n.width,r=n.height,o=Math.min(i,r),a=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r;return e.global||(a=a*i+n.x,s=s*r+n.y,l*=o),t.createRadialGradient(a,s,0,a,s,l)}function Zt(){return!1}function Kt(t,e,n){var i=Ou(),r=e.getWidth(),o=e.getHeight(),a=i.style;return a&&(a.position="absolute",a.left=0,a.top=0,a.width=r+"px",a.height=o+"px",i.setAttribute("data-zr-dom-id",t)),i.width=r*n,i.height=o*n,i}function Jt(t){if("string"==typeof t){var e=Ic.get(t);return e&&e.image}return t}function Qt(t,e,n,i,r){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e;var o=Ic.get(t),a={hostEl:n,cb:i,cbPayload:r};return o?!ee(e=o.image)&&o.pending.push(a):(!e&&(e=new Image),e.onload=te,Ic.put(t,e.__cachedImgObj={image:e,pending:[a]}),e.src=e.__zrImageSrc=t),e}return t}return e}function te(){var t=this.__cachedImgObj;this.onload=this.__cachedImgObj=null;for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb;i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function ee(t){return t&&t.width&&t.height}function ne(t,e){var n=t+":"+(e=e||Lc);if(Dc[n])return Dc[n];for(var i=(t+"").split("\n"),r=0,o=0,a=i.length;o<a;o++)r=Math.max(pe(i[o],e).width,r);return Ac>Oc&&(Ac=0,Dc={}),Ac++,Dc[n]=r,r}function ie(t,e,n,i,r,o,a){return o?oe(t,e,n,i,r,o,a):re(t,e,n,i,r,a)}function re(t,e,n,i,r,o){var a=ge(t,e,r,o),s=ne(t,e);r&&(s+=r[1]+r[3]);var l=a.outerHeight,u=new zt(ae(0,s,n),se(0,l,i),s,l);return u.lineHeight=a.lineHeight,u}function oe(t,e,n,i,r,o,a){var s=ve(t,{rich:o,truncate:a,font:e,textAlign:n,textPadding:r}),l=s.outerWidth,u=s.outerHeight;return new zt(ae(0,l,n),se(0,u,i),l,u)}function ae(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function se(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function le(t,e,n){var i=e.x,r=e.y,o=e.height,a=e.width,s=o/2,l="left",u="top";switch(t){case"left":i-=n,r+=s,l="right",u="middle";break;case"right":i+=n+a,r+=s,u="middle";break;case"top":i+=a/2,r-=n,l="center",u="bottom";break;case"bottom":i+=a/2,r+=o+n,l="center";break;case"inside":i+=a/2,r+=s,l="center",u="middle";break;case"insideLeft":i+=n,r+=s,u="middle";break;case"insideRight":i+=a-n,r+=s,l="right",u="middle";break;case"insideTop":i+=a/2,r+=n,l="center";break;case"insideBottom":i+=a/2,r+=o-n,l="center",u="bottom";break;case"insideTopLeft":i+=n,r+=n;break;case"insideTopRight":i+=a-n,r+=n,l="right";break;case"insideBottomLeft":i+=n,r+=o-n,u="bottom";break;case"insideBottomRight":i+=a-n,r+=o-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}}function ue(t,e,n,i,r){if(!e)return"";var o=(t+"").split("\n");r=ce(e,n,i,r);for(var a=0,s=o.length;a<s;a++)o[a]=he(o[a],r);return o.join("\n")}function ce(t,e,n,i){(i=s({},i)).font=e;n=D(n,"...");i.maxIterations=D(i.maxIterations,2);var r=i.minChar=D(i.minChar,0);i.cnCharWidth=ne("国",e);var o=i.ascCharWidth=ne("a",e);i.placeholder=D(i.placeholder,"");for(var a=t=Math.max(0,t-1),l=0;l<r&&a>=o;l++)a-=o;var u=ne(n);return u>a&&(n="",u=0),a=t-u,i.ellipsis=n,i.ellipsisWidth=u,i.contentWidth=a,i.containerWidth=t,i}function he(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth;if(!n)return"";var o=ne(t,i);if(o<=n)return t;for(var a=0;;a++){if(o<=r||a>=e.maxIterations){t+=e.ellipsis;break}var s=0===a?fe(t,r,e.ascCharWidth,e.cnCharWidth):o>0?Math.floor(t.length*r/o):0;o=ne(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function fe(t,e,n,i){for(var r=0,o=0,a=t.length;o<a&&r<e;o++){var s=t.charCodeAt(o);r+=0<=s&&s<=127?n:i}return o}function de(t){return ne("国",t)}function pe(t,e){return Ec.measureText(t,e)}function ge(t,e,n,i){null!=t&&(t+="");var r=de(e),o=t?t.split("\n"):[],a=o.length*r,s=a;if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth;if(null!=l&&s>l)t="",o=[];else if(null!=u)for(var c=ce(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),h=0,f=o.length;h<f;h++)o[h]=he(o[h],c)}return{lines:o,height:a,outerHeight:s,lineHeight:r}}function ve(t,e){var n={lines:[],width:0,height:0};if(null!=t&&(t+=""),!t)return n;for(var i,r=Pc.lastIndex=0;null!=(i=Pc.exec(t));){var o=i.index;o>r&&me(n,t.substring(r,o)),me(n,i[2],i[1]),r=Pc.lastIndex}r<t.length&&me(n,t.substring(r,t.length));var a=n.lines,s=0,l=0,u=[],c=e.textPadding,h=e.truncate,f=h&&h.outerWidth,d=h&&h.outerHeight;for(c&&(null!=f&&(f-=c[1]+c[3]),null!=d&&(d-=c[0]+c[2])),I=0;I<a.length;I++){for(var p=a[I],g=0,v=0,m=0;m<p.tokens.length;m++){var y=(O=p.tokens[m]).styleName&&e.rich[O.styleName]||{},_=O.textPadding=y.textPadding,x=O.font=y.font||e.font,b=O.textHeight=D(y.textHeight,de(x));if(_&&(b+=_[0]+_[2]),O.height=b,O.lineHeight=A(y.textLineHeight,e.textLineHeight,b),O.textAlign=y&&y.textAlign||e.textAlign,O.textVerticalAlign=y&&y.textVerticalAlign||"middle",null!=d&&s+O.lineHeight>d)return{lines:[],width:0,height:0};O.textWidth=ne(O.text,x);var w=y.textWidth,S=null==w||"auto"===w;if("string"==typeof w&&"%"===w.charAt(w.length-1))O.percentWidth=w,u.push(O),w=0;else{if(S){w=O.textWidth;var M=y.textBackgroundColor,C=M&&M.image;C&&ee(C=Jt(C))&&(w=Math.max(w,C.width*b/C.height))}var k=_?_[1]+_[3]:0;w+=k;var T=null!=f?f-v:null;null!=T&&T<w&&(!S||T<k?(O.text="",O.textWidth=w=0):(O.text=ue(O.text,T-k,x,h.ellipsis,{minChar:h.minChar}),O.textWidth=ne(O.text,x),w=O.textWidth+k))}v+=O.width=w,y&&(g=Math.max(g,O.lineHeight))}p.width=v,p.lineHeight=g,s+=g,l=Math.max(l,v)}n.outerWidth=n.width=D(e.textWidth,l),n.outerHeight=n.height=D(e.textHeight,s),c&&(n.outerWidth+=c[1]+c[3],n.outerHeight+=c[0]+c[2]);for(var I=0;I<u.length;I++){var O=u[I],P=O.percentWidth;O.width=parseInt(P,10)/100*l}return n}function me(t,e,n){for(var i=""===e,r=e.split("\n"),o=t.lines,a=0;a<r.length;a++){var s=r[a],l={styleName:n,text:s,isLineHolder:!s&&!i};if(a)o.push({tokens:[l]});else{var u=(o[o.length-1]||(o[0]={tokens:[]})).tokens,c=u.length;1===c&&u[0].isLineHolder?u[0]=l:(s||!c||i)&&u.push(l)}}}function ye(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ");return e&&E(e)||t.textFont||t.font}function _e(t,e){var n,i,r,o,a,s=e.x,l=e.y,u=e.width,c=e.height,h=e.r;u<0&&(s+=u,u=-u),c<0&&(l+=c,c=-c),"number"==typeof h?n=i=r=o=h:h instanceof Array?1===h.length?n=i=r=o=h[0]:2===h.length?(n=r=h[0],i=o=h[1]):3===h.length?(n=h[0],i=o=h[1],r=h[2]):(n=h[0],i=h[1],r=h[2],o=h[3]):n=i=r=o=0,n+i>u&&(n*=u/(a=n+i),i*=u/a),r+o>u&&(r*=u/(a=r+o),o*=u/a),i+r>c&&(i*=c/(a=i+r),r*=c/a),n+o>c&&(n*=c/(a=n+o),o*=c/a),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+c-r),0!==r&&t.arc(s+u-r,l+c-r,r,0,Math.PI/2),t.lineTo(s+o,l+c),0!==o&&t.arc(s+o,l+c-o,o,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}function xe(t){return be(t),p(t.rich,be),t}function be(t){if(t){t.font=ye(t);var e=t.textAlign;"middle"===e&&(e="center"),t.textAlign=null==e||Nc[e]?e:"left";var n=t.textVerticalAlign||t.textBaseline;"center"===n&&(n="middle"),t.textVerticalAlign=null==n||Bc[n]?n:"top",t.textPadding&&(t.textPadding=P(t.textPadding))}}function we(t,e,n,i,r){i.rich?Me(t,e,n,i,r):Se(t,e,n,i,r)}function Se(t,e,n,i,r){var o=Pe(e,"font",i.font||Lc),a=i.textPadding,s=t.__textCotentBlock;s&&!t.__dirty||(s=t.__textCotentBlock=ge(n,o,a,i.truncate));var l=s.outerHeight,u=s.lines,c=s.lineHeight,h=Oe(l,i,r),f=h.baseX,d=h.baseY,p=h.textAlign,g=h.textVerticalAlign;ke(e,i,r,f,d);var v=se(d,l,g),m=f,y=v,_=Ie(i);if(_||a){var x=ne(n,o);a&&(x+=a[1]+a[3]);var b=ae(f,x,p);_&&De(t,e,i,b,v,x,l),a&&(m=Be(f,p,a),y+=a[0])}Pe(e,"textAlign",p||"left"),Pe(e,"textBaseline","middle"),Pe(e,"shadowBlur",i.textShadowBlur||0),Pe(e,"shadowColor",i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",i.textShadowOffsetX||0),Pe(e,"shadowOffsetY",i.textShadowOffsetY||0),y+=c/2;var w=i.textStrokeWidth,S=Le(i.textStroke,w),M=Ee(i.textFill);S&&(Pe(e,"lineWidth",w),Pe(e,"strokeStyle",S)),M&&Pe(e,"fillStyle",M);for(var C=0;C<u.length;C++)S&&e.strokeText(u[C],m,y),M&&e.fillText(u[C],m,y),y+=c}function Me(t,e,n,i,r){var o=t.__textCotentBlock;o&&!t.__dirty||(o=t.__textCotentBlock=ve(n,i)),Ce(t,e,o,i,r)}function Ce(t,e,n,i,r){var o=n.width,a=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=Oe(s,i,r),c=u.baseX,h=u.baseY,f=u.textAlign,d=u.textVerticalAlign;ke(e,i,r,c,h);var p=ae(c,a,f),g=se(h,s,d),v=p,m=g;l&&(v+=l[3],m+=l[0]);var y=v+o;Ie(i)&&De(t,e,i,p,g,a,s);for(var _=0;_<n.lines.length;_++){for(var x,b=n.lines[_],w=b.tokens,S=w.length,M=b.lineHeight,C=b.width,k=0,T=v,I=y,D=S-1;k<S&&(!(x=w[k]).textAlign||"left"===x.textAlign);)Te(t,e,x,i,M,m,T,"left"),C-=x.width,T+=x.width,k++;for(;D>=0&&"right"===(x=w[D]).textAlign;)Te(t,e,x,i,M,m,I,"right"),C-=x.width,I-=x.width,D--;for(T+=(o-(T-v)-(y-I)-C)/2;k<=D;)Te(t,e,x=w[k],i,M,m,T+x.width/2,"center"),T+=x.width,k++;m+=M}}function ke(t,e,n,i,r){if(n&&e.textRotation){var o=e.textOrigin;"center"===o?(i=n.width/2+n.x,r=n.height/2+n.y):o&&(i=o[0]+n.x,r=o[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function Te(t,e,n,i,r,o,a,s){var l=i.rich[n.styleName]||{},u=n.textVerticalAlign,c=o+r/2;"top"===u?c=o+n.height/2:"bottom"===u&&(c=o+r-n.height/2),!n.isLineHolder&&Ie(l)&&De(t,e,l,"right"===s?a-n.width:"center"===s?a-n.width/2:a,c-n.height/2,n.width,n.height);var h=n.textPadding;h&&(a=Be(a,s,h),c-=n.height/2-h[2]-n.textHeight/2),Pe(e,"shadowBlur",A(l.textShadowBlur,i.textShadowBlur,0)),Pe(e,"shadowColor",l.textShadowColor||i.textShadowColor||"transparent"),Pe(e,"shadowOffsetX",A(l.textShadowOffsetX,i.textShadowOffsetX,0)),Pe(e,"shadowOffsetY",A(l.textShadowOffsetY,i.textShadowOffsetY,0)),Pe(e,"textAlign",s),Pe(e,"textBaseline","middle"),Pe(e,"font",n.font||Lc);var f=Le(l.textStroke||i.textStroke,p),d=Ee(l.textFill||i.textFill),p=D(l.textStrokeWidth,i.textStrokeWidth);f&&(Pe(e,"lineWidth",p),Pe(e,"strokeStyle",f),e.strokeText(n.text,a,c)),d&&(Pe(e,"fillStyle",d),e.fillText(n.text,a,c))}function Ie(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function De(t,e,n,i,r,o,a){var s=n.textBackgroundColor,l=n.textBorderWidth,u=n.textBorderColor,c=w(s);if(Pe(e,"shadowBlur",n.textBoxShadowBlur||0),Pe(e,"shadowColor",n.textBoxShadowColor||"transparent"),Pe(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),Pe(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),c||l&&u){e.beginPath();var h=n.textBorderRadius;h?_e(e,{x:i,y:r,width:o,height:a,r:h}):e.rect(i,r,o,a),e.closePath()}if(c)Pe(e,"fillStyle",s),e.fill();else if(S(s)){var f=s.image;(f=Qt(f,null,t,Ae,s))&&ee(f)&&e.drawImage(f,i,r,o,a)}l&&u&&(Pe(e,"lineWidth",l),Pe(e,"strokeStyle",u),e.stroke())}function Ae(t,e){e.image=t}function Oe(t,e,n){var i=e.x||0,r=e.y||0,o=e.textAlign,a=e.textVerticalAlign;if(n){var s=e.textPosition;if(s instanceof Array)i=n.x+Ne(s[0],n.width),r=n.y+Ne(s[1],n.height);else{var l=le(s,n,e.textDistance);i=l.x,r=l.y,o=o||l.textAlign,a=a||l.textVerticalAlign}var u=e.textOffset;u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:o,textVerticalAlign:a}}function Pe(t,e,n){return t[e]=_c(t,e,n),t[e]}function Le(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ee(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function Ne(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function Be(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}function Re(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}function ze(t){for(var e in t=t||{},cc.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new bc(t.style,this),this._rect=null,this.__clipPaths=[]}function $e(t){ze.call(this,t)}function Fe(t){return parseInt(t,10)}function je(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}function Ve(t,e,n){return $c.copy(t.getBoundingRect()),t.transform&&$c.applyTransform(t.transform),Fc.width=e,Fc.height=n,!$c.intersect(Fc)}function We(t,e){if(t==e)return!1;if(!t||!e||t.length!==e.length)return!0;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}function He(t,e){for(var n=0;n<t.length;n++){var i=t[n];i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}function Ge(t,e){var i=n.createElement("div");return i.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",i}function Ue(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function qe(t,e,n,i){return n=n||{},i||!xu.canvasSupported?Xe(t,e,n):xu.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):Xe(t,e,n),n}function Xe(t,e,n){var i=Ue(t);n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}function Ye(t,n,i){if(null!=(n=n||e.event).zrX)return n;var r=n.type;if(r&&r.indexOf("touch")>=0){var o="touchend"!=r?n.targetTouches[0]:n.changedTouches[0];o&&qe(t,o,n,i)}else qe(t,n,n,i),n.zrDelta=n.wheelDelta?n.wheelDelta/120:-(n.detail||0)/3;var a=n.button;return null==n.which&&void 0!==a&&Wc.test(n.type)&&(n.which=1&a?1:2&a?3:4&a?2:0),n}function Ze(t,e,n){Vc?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ke(t,e,n){Vc?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function Je(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1];return Math.sqrt(e*e+n*n)}function Qe(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}function tn(t){return"mousewheel"===t&&xu.browser.firefox?"DOMMouseScroll":t}function en(t,e,n){var i=t._gestureMgr;"start"===n&&i.clear();var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom);if("end"===n&&i.clear(),r){var o=r.type;e.gestureEvent=o,t.handler.dispatchToElement({target:r.target},o,r.event)}}function nn(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function rn(t){var e=t.pointerType;return"pen"===e||"touch"===e}function on(t){function e(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}p(Xc,function(e){t._handlers[e]=y(Kc[e],t)}),p(Zc,function(e){t._handlers[e]=y(Kc[e],t)}),p(qc,function(n){t._handlers[n]=e(Kc[n],t)})}function an(t){function e(e,n){p(e,function(e){Ze(t,tn(e),n._handlers[e])},n)}zu.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new Gc,this._handlers={},on(this),xu.pointerEventsSupported?e(Zc,this):(xu.touchEventsSupported&&e(Xc,this),e(qc,this))}function sn(t,e){return new eh(_u(),t,e)}function ln(t){return t instanceof Array?t:null==t?[]:[t]}function un(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{};for(var i=0,r=n.length;i<r;i++){var o=n[i];!t.emphasis[e].hasOwnProperty(o)&&t[e].hasOwnProperty(o)&&(t.emphasis[e][o]=t[e][o])}}}function cn(t){return!ih(t)||rh(t)||t instanceof Date?t:t.value}function hn(t){return ih(t)&&!(t instanceof Array)}function fn(t,e){e=(e||[]).slice();var n=g(t||[],function(t,e){return{exist:t}});return nh(e,function(t,i){if(ih(t)){for(r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null);for(var r=0;r<n.length;r++){var o=n[r].exist;if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||gn(t)||gn(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),nh(e,function(t,e){if(ih(t)){for(var i=0;i<n.length;i++){var r=n[i].exist;if(!n[i].option&&!gn(r)&&null==t.id){n[i].option=t;break}}i>=n.length&&n.push({option:t})}}),n}function dn(t){var e=z();nh(t,function(t,n){var i=t.exist;i&&e.set(i.id,t)}),nh(t,function(t,n){var i=t.option;L(!i||null==i.id||!e.get(i.id)||e.get(i.id)===t,"id duplicates: "+(i&&i.id)),i&&null!=i.id&&e.set(i.id,t),!t.keyInfo&&(t.keyInfo={})}),nh(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo;if(ih(r)){if(o.name=null!=r.name?r.name+"":i?i.name:oh+n,i)o.id=i.id;else if(null!=r.id)o.id=r.id+"";else{var a=0;do{o.id="\0"+o.name+"\0"+a++}while(e.get(o.id))}e.set(o.id,t)}})}function pn(t){var e=t.name;return!(!e||!e.indexOf(oh))}function gn(t){return ih(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}function vn(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?x(e.dataIndex)?g(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?x(e.name)?g(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0}function mn(){var t="__\0ec_inner_"+sh+++"_"+Math.random().toFixed(5);return function(e){return e[t]||(e[t]={})}}function yn(t,e,n){if(w(e)){var i={};i[e+"Index"]=0,e=i}var r=n&&n.defaultMainType;!r||_n(e,r+"Index")||_n(e,r+"Id")||_n(e,r+"Name")||(e[r+"Index"]=0);var o={};return nh(e,function(i,r){i=e[r];if("dataIndex"!==r&&"dataIndexInside"!==r){var a=r.match(/^(\w+)(Index|Id|Name)$/)||[],s=a[1],l=(a[2]||"").toLowerCase();if(!(!s||!l||null==i||"index"===l&&"none"===i||n&&n.includeMainTypes&&c(n.includeMainTypes,s)<0)){var u={mainType:s};"index"===l&&"all"===i||(u[l]=i);var h=t.queryComponents(u);o[s+"Models"]=h,o[s+"Model"]=h[0]}}else o[r]=i}),o}function _n(t,e){return t&&t.hasOwnProperty(e)}function xn(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n}function bn(t,e){return t.getAttribute?t.getAttribute(e):t[e]}function wn(t){var e={main:"",sub:""};return t&&(t=t.split(lh),e.main=t[0]||"",e.sub=t[1]||""),e}function Sn(t){L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}function Mn(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)};return s(n.prototype,t),n.extend=this.extend,n.superCall=kn,n.superApply=Tn,h(n,this),n.superClass=e,n}}function Cn(t){var e=["__\0is_clz",ch++,Math.random().toFixed(3)].join("_");t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}}function kn(t,e){var n=O(arguments,2);return this.superClass.prototype[e].apply(t,n)}function Tn(t,e,n){return this.superClass.prototype[e].apply(t,n)}function In(t,e){function n(t){var e=i[t.main];return e&&e[uh]||((e=i[t.main]={})[uh]=!0),e}e=e||{};var i={};if(t.registerClass=function(t,e){return e&&(Sn(e),(e=wn(e)).sub?e.sub!==uh&&(n(e)[e.sub]=t):i[e.main]=t),t},t.getClass=function(t,e,n){var r=i[t];if(r&&r[uh]&&(r=e?r[e]:null),n&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.");return r},t.getClassesByMainType=function(t){t=wn(t);var e=[],n=i[t.main];return n&&n[uh]?p(n,function(t,n){n!==uh&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=wn(t),!!i[t.main]},t.getAllClassMainTypes=function(){var t=[];return p(i,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=wn(t);var e=i[t.main];return e&&e[uh]},t.parseClassType=wn,e.registerWhenExtend){var r=t.extend;r&&(t.extend=function(e){var n=r.call(this,e);return t.registerClass(n,e.type)})}return t}function Dn(t){return t>-yh&&t<yh}function An(t){return t>yh||t<-yh}function On(t,e,n,i,r){var o=1-r;return o*o*(o*t+3*r*e)+r*r*(r*i+3*o*n)}function Pn(t,e,n,i,r){var o=1-r;return 3*(((e-t)*o+2*(n-e)*r)*o+(i-n)*r*r)}function Ln(t,e,n,i,r,o){var a=i+3*(e-n)-t,s=3*(n-2*e+t),l=3*(e-t),u=t-r,c=s*s-3*a*l,h=s*l-9*a*u,f=l*l-3*s*u,d=0;if(Dn(c)&&Dn(h))Dn(s)?o[0]=0:(M=-l/s)>=0&&M<=1&&(o[d++]=M);else{var p=h*h-4*c*f;if(Dn(p)){var g=h/c,v=-g/2;(M=-s/a+g)>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v)}else if(p>0){var m=mh(p),y=c*s+1.5*a*(-h+m),_=c*s+1.5*a*(-h-m);(M=(-s-((y=y<0?-vh(-y,bh):vh(y,bh))+(_=_<0?-vh(-_,bh):vh(_,bh))))/(3*a))>=0&&M<=1&&(o[d++]=M)}else{var x=(2*c*s-3*a*h)/(2*mh(c*c*c)),b=Math.acos(x)/3,w=mh(c),S=Math.cos(b),M=(-s-2*w*S)/(3*a),C=(v=(-s+w*(S+xh*Math.sin(b)))/(3*a),(-s+w*(S-xh*Math.sin(b)))/(3*a));M>=0&&M<=1&&(o[d++]=M),v>=0&&v<=1&&(o[d++]=v),C>=0&&C<=1&&(o[d++]=C)}}return d}function En(t,e,n,i,r){var o=6*n-12*e+6*t,a=9*e+3*i-3*t-9*n,s=3*e-3*t,l=0;if(Dn(a))An(o)&&(h=-s/o)>=0&&h<=1&&(r[l++]=h);else{var u=o*o-4*a*s;if(Dn(u))r[0]=-o/(2*a);else if(u>0){var c=mh(u),h=(-o+c)/(2*a),f=(-o-c)/(2*a);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Nn(t,e,n,i,r,o){var a=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-a)*r+a,c=(l-s)*r+s,h=(c-u)*r+u;o[0]=t,o[1]=a,o[2]=u,o[3]=h,o[4]=h,o[5]=c,o[6]=l,o[7]=i}function Bn(t,e,n,i,r,o,a,s,l,u,c){var h,f,d,p,g,v=.005,m=1/0;wh[0]=l,wh[1]=u;for(var y=0;y<1;y+=.05)Sh[0]=On(t,n,r,a,y),Sh[1]=On(e,i,o,s,y),(p=Bu(wh,Sh))<m&&(h=y,m=p);m=1/0;for(var _=0;_<32&&!(v<_h);_++)f=h-v,d=h+v,Sh[0]=On(t,n,r,a,f),Sh[1]=On(e,i,o,s,f),p=Bu(Sh,wh),f>=0&&p<m?(h=f,m=p):(Mh[0]=On(t,n,r,a,d),Mh[1]=On(e,i,o,s,d),g=Bu(Mh,wh),d<=1&&g<m?(h=d,m=g):v*=.5);return c&&(c[0]=On(t,n,r,a,h),c[1]=On(e,i,o,s,h)),mh(m)}function Rn(t,e,n,i){var r=1-i;return r*(r*t+2*i*e)+i*i*n}function zn(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))}function $n(t,e,n,i,r){var o=t-2*e+n,a=2*(e-t),s=t-i,l=0;if(Dn(o))An(a)&&(h=-s/a)>=0&&h<=1&&(r[l++]=h);else{var u=a*a-4*o*s;if(Dn(u))(h=-a/(2*o))>=0&&h<=1&&(r[l++]=h);else if(u>0){var c=mh(u),h=(-a+c)/(2*o),f=(-a-c)/(2*o);h>=0&&h<=1&&(r[l++]=h),f>=0&&f<=1&&(r[l++]=f)}}return l}function Fn(t,e,n){var i=t+n-2*e;return 0===i?.5:(t-e)/i}function jn(t,e,n,i,r){var o=(e-t)*i+t,a=(n-e)*i+e,s=(a-o)*i+o;r[0]=t,r[1]=o,r[2]=s,r[3]=s,r[4]=a,r[5]=n}function Vn(t,e,n,i,r,o,a,s,l){var u,c=.005,h=1/0;wh[0]=a,wh[1]=s;for(var f=0;f<1;f+=.05)Sh[0]=Rn(t,n,r,f),Sh[1]=Rn(e,i,o,f),(v=Bu(wh,Sh))<h&&(u=f,h=v);h=1/0;for(var d=0;d<32&&!(c<_h);d++){var p=u-c,g=u+c;Sh[0]=Rn(t,n,r,p),Sh[1]=Rn(e,i,o,p);var v=Bu(Sh,wh);if(p>=0&&v<h)u=p,h=v;else{Mh[0]=Rn(t,n,r,g),Mh[1]=Rn(e,i,o,g);var m=Bu(Mh,wh);g<=1&&m<h?(u=g,h=m):c*=.5}}return l&&(l[0]=Rn(t,n,r,u),l[1]=Rn(e,i,o,u)),mh(h)}function Wn(t,e,n,i,r,o){r[0]=Ch(t,n),r[1]=Ch(e,i),o[0]=kh(t,n),o[1]=kh(e,i)}function Hn(t,e,n,i,r,o,a,s,l,u){var c,h=En,f=On,d=h(t,n,r,a,Lh);for(l[0]=1/0,l[1]=1/0,u[0]=-1/0,u[1]=-1/0,c=0;c<d;c++){var p=f(t,n,r,a,Lh[c]);l[0]=Ch(p,l[0]),u[0]=kh(p,u[0])}for(d=h(e,i,o,s,Eh),c=0;c<d;c++){var g=f(e,i,o,s,Eh[c]);l[1]=Ch(g,l[1]),u[1]=kh(g,u[1])}l[0]=Ch(t,l[0]),u[0]=kh(t,u[0]),l[0]=Ch(a,l[0]),u[0]=kh(a,u[0]),l[1]=Ch(e,l[1]),u[1]=kh(e,u[1]),l[1]=Ch(s,l[1]),u[1]=kh(s,u[1])}function Gn(t,e,n,i,r,o,a,s){var l=Fn,u=Rn,c=kh(Ch(l(t,n,r),1),0),h=kh(Ch(l(e,i,o),1),0),f=u(t,n,r,c),d=u(e,i,o,h);a[0]=Ch(t,r,f),a[1]=Ch(e,o,d),s[0]=kh(t,r,f),s[1]=kh(e,o,d)}function Un(t,e,n,i,r,o,a,s,l){var u=Z,c=K,h=Math.abs(r-o);if(h%Dh<1e-4&&h>1e-4)return s[0]=t-n,s[1]=e-i,l[0]=t+n,void(l[1]=e+i);if(Ah[0]=Ih(r)*n+t,Ah[1]=Th(r)*i+e,Oh[0]=Ih(o)*n+t,Oh[1]=Th(o)*i+e,u(s,Ah,Oh),c(l,Ah,Oh),(r%=Dh)<0&&(r+=Dh),(o%=Dh)<0&&(o+=Dh),r>o&&!a?o+=Dh:r<o&&a&&(r+=Dh),a){var f=o;o=r,r=f}for(var d=0;d<o;d+=Math.PI/2)d>r&&(Ph[0]=Ih(d)*n+t,Ph[1]=Th(d)*i+e,u(s,Ph,s),c(l,Ph,l))}function qn(t,e,n,i,r,o,a){if(0===r)return!1;var s=r,l=0;if(a>e+s&&a>i+s||a<e-s&&a<i-s||o>t+s&&o>n+s||o<t-s&&o<n-s)return!1;if(t===n)return Math.abs(o-t)<=s/2;var u=(l=(e-i)/(t-n))*o-a+(t*i-n*e)/(t-n);return u*u/(l*l+1)<=s/2*s/2}function Xn(t,e,n,i,r,o,a,s,l,u,c){if(0===l)return!1;var h=l;return!(c>e+h&&c>i+h&&c>o+h&&c>s+h||c<e-h&&c<i-h&&c<o-h&&c<s-h||u>t+h&&u>n+h&&u>r+h&&u>a+h||u<t-h&&u<n-h&&u<r-h&&u<a-h)&&Bn(t,e,n,i,r,o,a,s,u,c,null)<=h/2}function Yn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;return!(l>e+u&&l>i+u&&l>o+u||l<e-u&&l<i-u&&l<o-u||s>t+u&&s>n+u&&s>r+u||s<t-u&&s<n-u&&s<r-u)&&Vn(t,e,n,i,r,o,s,l,null)<=u/2}function Zn(t){return(t%=Xh)<0&&(t+=Xh),t}function Kn(t,e,n,i,r,o,a,s,l){if(0===a)return!1;var u=a;s-=t,l-=e;var c=Math.sqrt(s*s+l*l);if(c-u>n||c+u<n)return!1;if(Math.abs(i-r)%Yh<1e-4)return!0;if(o){var h=i;i=Zn(r),r=Zn(h)}else i=Zn(i),r=Zn(r);i>r&&(r+=Yh);var f=Math.atan2(l,s);return f<0&&(f+=Yh),f>=i&&f<=r||f+Yh>=i&&f+Yh<=r}function Jn(t,e,n,i,r,o){if(o>e&&o>i||o<e&&o<i)return 0;if(i===e)return 0;var a=i<e?1:-1,s=(o-e)/(i-e);1!==s&&0!==s||(a=i<e?.5:-.5);var l=s*(n-t)+t;return l===r?1/0:l>r?a:0}function Qn(t,e){return Math.abs(t-e)<Jh}function ti(){var t=tf[0];tf[0]=tf[1],tf[1]=t}function ei(t,e,n,i,r,o,a,s,l,u){if(u>e&&u>i&&u>o&&u>s||u<e&&u<i&&u<o&&u<s)return 0;var c=Ln(e,i,o,s,u,Qh);if(0===c)return 0;for(var h,f,d=0,p=-1,g=0;g<c;g++){var v=Qh[g],m=0===v||1===v?.5:1;On(t,n,r,a,v)<l||(p<0&&(p=En(e,i,o,s,tf),tf[1]<tf[0]&&p>1&&ti(),h=On(e,i,o,s,tf[0]),p>1&&(f=On(e,i,o,s,tf[1]))),2==p?v<tf[0]?d+=h<e?m:-m:v<tf[1]?d+=f<h?m:-m:d+=s<f?m:-m:v<tf[0]?d+=h<e?m:-m:d+=s<h?m:-m)}return d}function ni(t,e,n,i,r,o,a,s){if(s>e&&s>i&&s>o||s<e&&s<i&&s<o)return 0;var l=$n(e,i,o,s,Qh);if(0===l)return 0;var u=Fn(e,i,o);if(u>=0&&u<=1){for(var c=0,h=Rn(e,i,o,u),f=0;f<l;f++)d=0===Qh[f]||1===Qh[f]?.5:1,(p=Rn(t,n,r,Qh[f]))<a||(Qh[f]<u?c+=h<e?d:-d:c+=o<h?d:-d);return c}var d=0===Qh[0]||1===Qh[0]?.5:1,p=Rn(t,n,r,Qh[0]);return p<a?0:o<e?d:-d}function ii(t,e,n,i,r,o,a,s){if((s-=e)>n||s<-n)return 0;u=Math.sqrt(n*n-s*s),Qh[0]=-u,Qh[1]=u;var l=Math.abs(i-r);if(l<1e-4)return 0;if(l%Kh<1e-4)return i=0,r=Kh,p=o?1:-1,a>=Qh[0]+t&&a<=Qh[1]+t?p:0;if(o){var u=i;i=Zn(r),r=Zn(u)}else i=Zn(i),r=Zn(r);i>r&&(r+=Kh);for(var c=0,h=0;h<2;h++){var f=Qh[h];if(f+t>a){var d=Math.atan2(s,f),p=o?1:-1;d<0&&(d=Kh+d),(d>=i&&d<=r||d+Kh>=i&&d+Kh<=r)&&(d>Math.PI/2&&d<1.5*Math.PI&&(p=-p),c+=p)}}return c}function ri(t,e,n,i,r){for(var o=0,a=0,s=0,l=0,u=0,c=0;c<t.length;){var h=t[c++];switch(h===Zh.M&&c>1&&(n||(o+=Jn(a,s,l,u,i,r))),1==c&&(l=a=t[c],u=s=t[c+1]),h){case Zh.M:a=l=t[c++],s=u=t[c++];break;case Zh.L:if(n){if(qn(a,s,t[c],t[c+1],e,i,r))return!0}else o+=Jn(a,s,t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.C:if(n){if(Xn(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ei(a,s,t[c++],t[c++],t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.Q:if(n){if(Yn(a,s,t[c++],t[c++],t[c],t[c+1],e,i,r))return!0}else o+=ni(a,s,t[c++],t[c++],t[c],t[c+1],i,r)||0;a=t[c++],s=t[c++];break;case Zh.A:var f=t[c++],d=t[c++],p=t[c++],g=t[c++],v=t[c++],m=t[c++],y=(t[c++],1-t[c++]),_=Math.cos(v)*p+f,x=Math.sin(v)*g+d;c>1?o+=Jn(a,s,_,x,i,r):(l=_,u=x);var b=(i-f)*g/p+f;if(n){if(Kn(f,d,g,v,v+m,y,e,b,r))return!0}else o+=ii(f,d,g,v,v+m,y,b,r);a=Math.cos(v+m)*p+f,s=Math.sin(v+m)*g+d;break;case Zh.R:l=a=t[c++],u=s=t[c++];_=l+t[c++],x=u+t[c++];if(n){if(qn(l,u,_,u,e,i,r)||qn(_,u,_,x,e,i,r)||qn(_,x,l,x,e,i,r)||qn(l,x,l,u,e,i,r))return!0}else o+=Jn(_,u,_,x,i,r),o+=Jn(l,x,l,u,i,r);break;case Zh.Z:if(n){if(qn(a,s,l,u,e,i,r))return!0}else o+=Jn(a,s,l,u,i,r);a=l,s=u}}return n||Qn(s,u)||(o+=Jn(a,s,l,u,i,r)||0),0!==o}function oi(t,e,n){return ri(t,0,!1,e,n)}function ai(t,e,n,i){return ri(t,e,!0,n,i)}function si(t){ze.call(this,t),this.path=null}function li(t,e,n,i,r,o,a,s,l,u,c){var h=l*(pf/180),f=df(h)*(t-n)/2+ff(h)*(e-i)/2,d=-1*ff(h)*(t-n)/2+df(h)*(e-i)/2,p=f*f/(a*a)+d*d/(s*s);p>1&&(a*=hf(p),s*=hf(p));var g=(r===o?-1:1)*hf((a*a*(s*s)-a*a*(d*d)-s*s*(f*f))/(a*a*(d*d)+s*s*(f*f)))||0,v=g*a*d/s,m=g*-s*f/a,y=(t+n)/2+df(h)*v-ff(h)*m,_=(e+i)/2+ff(h)*v+df(h)*m,x=mf([1,0],[(f-v)/a,(d-m)/s]),b=[(f-v)/a,(d-m)/s],w=[(-1*f-v)/a,(-1*d-m)/s],S=mf(b,w);vf(b,w)<=-1&&(S=pf),vf(b,w)>=1&&(S=0),0===o&&S>0&&(S-=2*pf),1===o&&S<0&&(S+=2*pf),c.addData(u,y,_,a,s,x,S,h,o)}function ui(t){if(!t)return[];var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",");for(e=0;e<cf.length;e++)n=n.replace(new RegExp(cf[e],"g"),"|"+cf[e]);var i,r=n.split("|"),o=0,a=0,s=new qh,l=qh.CMD;for(e=1;e<r.length;e++){var u,c=r[e],h=c.charAt(0),f=0,d=c.slice(1).replace(/e,-/g,"e-").split(",");d.length>0&&""===d[0]&&d.shift();for(var p=0;p<d.length;p++)d[p]=parseFloat(d[p]);for(;f<d.length&&!isNaN(d[f])&&!isNaN(d[0]);){var g,v,m,y,_,x,b,w=o,S=a;switch(h){case"l":o+=d[f++],a+=d[f++],u=l.L,s.addData(u,o,a);break;case"L":o=d[f++],a=d[f++],u=l.L,s.addData(u,o,a);break;case"m":o+=d[f++],a+=d[f++],u=l.M,s.addData(u,o,a),h="l";break;case"M":o=d[f++],a=d[f++],u=l.M,s.addData(u,o,a),h="L";break;case"h":o+=d[f++],u=l.L,s.addData(u,o,a);break;case"H":o=d[f++],u=l.L,s.addData(u,o,a);break;case"v":a+=d[f++],u=l.L,s.addData(u,o,a);break;case"V":a=d[f++],u=l.L,s.addData(u,o,a);break;case"C":u=l.C,s.addData(u,d[f++],d[f++],d[f++],d[f++],d[f++],d[f++]),o=d[f-2],a=d[f-1];break;case"c":u=l.C,s.addData(u,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a,d[f++]+o,d[f++]+a),o+=d[f-2],a+=d[f-1];break;case"S":g=o,v=a;var M=s.len(),C=s.data;i===l.C&&(g+=o-C[M-4],v+=a-C[M-3]),u=l.C,w=d[f++],S=d[f++],o=d[f++],a=d[f++],s.addData(u,g,v,w,S,o,a);break;case"s":g=o,v=a;M=s.len(),C=s.data;i===l.C&&(g+=o-C[M-4],v+=a-C[M-3]),u=l.C,w=o+d[f++],S=a+d[f++],o+=d[f++],a+=d[f++],s.addData(u,g,v,w,S,o,a);break;case"Q":w=d[f++],S=d[f++],o=d[f++],a=d[f++],u=l.Q,s.addData(u,w,S,o,a);break;case"q":w=d[f++]+o,S=d[f++]+a,o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,w,S,o,a);break;case"T":g=o,v=a;M=s.len(),C=s.data;i===l.Q&&(g+=o-C[M-4],v+=a-C[M-3]),o=d[f++],a=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"t":g=o,v=a;M=s.len(),C=s.data;i===l.Q&&(g+=o-C[M-4],v+=a-C[M-3]),o+=d[f++],a+=d[f++],u=l.Q,s.addData(u,g,v,o,a);break;case"A":m=d[f++],y=d[f++],_=d[f++],x=d[f++],b=d[f++],li(w=o,S=a,o=d[f++],a=d[f++],x,b,m,y,_,u=l.A,s);break;case"a":m=d[f++],y=d[f++],_=d[f++],x=d[f++],b=d[f++],li(w=o,S=a,o+=d[f++],a+=d[f++],x,b,m,y,_,u=l.A,s)}}"z"!==h&&"Z"!==h||(u=l.Z,s.addData(u)),i=u}return s.toStatic(),s}function ci(t,e){var n=ui(t);return e=e||{},e.buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e);else{var e=t;n.rebuildPath(e)}},e.applyTransform=function(t){uf(n,t),this.dirty(!0)},e}function hi(t,e){return new si(ci(t,e))}function fi(t,e){return si.extend(ci(t,e))}function di(t,e,n,i,r,o,a){var s=.5*(n-t),l=.5*(i-e);return(2*(e-n)+s+l)*a+(-3*(e-n)-2*s-l)*o+s*r+e}function pi(t,e,n){var i=e.points,r=e.smooth;if(i&&i.length>=2){if(r&&"spline"!==r){var o=Cf(i,r,n,e.smoothConstraint);t.moveTo(i[0][0],i[0][1]);for(var a=i.length,s=0;s<(n?a:a-1);s++){var l=o[2*s],u=o[2*s+1],c=i[(s+1)%a];t.bezierCurveTo(l[0],l[1],u[0],u[1],c[0],c[1])}}else{"spline"===r&&(i=Mf(i,n)),t.moveTo(i[0][0],i[0][1]);s=1;for(var h=i.length;s<h;s++)t.lineTo(i[s][0],i[s][1])}n&&t.closePath()}}function gi(t,e,n){var i=t.cpx2,r=t.cpy2;return null===i||null===r?[(n?Pn:On)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?Pn:On)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?zn:Rn)(t.x1,t.cpx1,t.x2,e),(n?zn:Rn)(t.y1,t.cpy1,t.y2,e)]}function vi(t){ze.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}function mi(t){return si.extend(t)}function yi(t,e,n,i){var r=hi(t,e),o=r.getBoundingRect();return n&&("center"===i&&(n=xi(n,o)),bi(r,n)),r}function _i(t,e,n){var i=new $e({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height};i.setStyle(xi(e,r))}}});return i}function xi(t,e){var n,i=e.width/e.height,r=t.height*i;return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}function bi(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e);t.applyTransform(n)}}function wi(t){var e=t.shape,n=t.style.lineWidth;return zf(2*e.x1)===zf(2*e.x2)&&(e.x1=e.x2=Si(e.x1,n,!0)),zf(2*e.y1)===zf(2*e.y2)&&(e.y1=e.y2=Si(e.y1,n,!0)),t}function Si(t,e,n){var i=zf(2*t);return(i+zf(e))%2==0?i/2:(i+(n?1:-1))/2}function Mi(t){return null!=t&&"none"!=t}function Ci(t){return"string"==typeof t?St(t,-.1):t}function ki(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl;i.fill=i.fill||(Mi(n)?Ci(n):null),i.stroke=i.stroke||(Mi(e)?Ci(e):null);var r={};for(var o in i)null!=i[o]&&(r[o]=t.style[o]);t.__normalStl=r,t.__hoverStlDirty=!1}}function Ti(t){if(!t.__isHover){if(ki(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl);else{var e=t.style,n=e.insideRollbackOpt;n&&Hi(e),e.extendFrom(t.__hoverStl),n&&(Wi(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function Ii(t){if(t.__isHover){var e=t.__normalStl;t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function Di(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ti(t)}):Ti(t)}function Ai(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&Ii(t)}):Ii(t)}function Oi(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&ki(t)}function Pi(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Di(this)}function Li(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&Ai(this)}function Ei(){this.__isEmphasis=!0,Di(this)}function Ni(){this.__isEmphasis=!1,Ai(this)}function Bi(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Oi(t,e)}):Oi(t,e),t.on("mouseover",Pi).on("mouseout",Li),t.on("emphasis",Ei).on("normal",Ni)}function Ri(t,e,n,i,r,o,a){var s,l=(r=r||jf).labelFetcher,u=r.labelDataIndex,c=r.labelDimIndex,h=n.getShallow("show"),f=i.getShallow("show");(h||f)&&(l&&(s=l.getFormattedLabel(u,"normal",null,c)),null==s&&(s=b(r.defaultText)?r.defaultText(u,r):r.defaultText));var d=h?s:null,p=f?D(l?l.getFormattedLabel(u,"emphasis",null,c):null,s):null;null==d&&null==p||(zi(t,n,o,r),zi(e,i,a,r,!0)),t.text=d,e.text=p}function zi(t,e,n,i,r){return $i(t,e,i,r),n&&s(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function $i(t,e,n,i){if((n=n||jf).isRectText){var r=e.getShallow("position")||(i?null:"inside");"outside"===r&&(r="top"),t.textPosition=r,t.textOffset=e.getShallow("offset");var o=e.getShallow("rotate");null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=D(e.getShallow("distance"),i?null:5)}var a,s=e.ecModel,l=s&&s.option.textStyle,u=Fi(e);if(u)for(var c in a={},u)if(u.hasOwnProperty(c)){var h=e.getModel(["rich",c]);ji(a[c]={},h,l,n,i)}return t.rich=a,ji(t,e,l,n,i,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Fi(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||jf).rich;if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1);t=t.parentModel}return e}function ji(t,e,n,i,r,o){if(n=!r&&n||jf,t.textFill=Vi(e.getShallow("color"),i)||n.color,t.textStroke=Vi(e.getShallow("textBorderColor"),i)||n.textBorderColor,t.textStrokeWidth=D(e.getShallow("textBorderWidth"),n.textBorderWidth),!r){if(o){var a=t.textPosition;t.insideRollback=Wi(t,a,i),t.insideOriginalTextPosition=a,t.insideRollbackOpt=i}null==t.textFill&&(t.textFill=i.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&i.disableBox||(t.textBackgroundColor=Vi(e.getShallow("backgroundColor"),i),t.textPadding=e.getShallow("padding"),t.textBorderColor=Vi(e.getShallow("borderColor"),i),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function Vi(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function Wi(t,e,n){var i,r=n.useInsideStyle;return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Hi(t){var e=t.insideRollback;e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}function Gi(t,e){var n=e||e.getModel("textStyle");return E([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))}function Ui(t,e,n,i,r,o){if("function"==typeof r&&(o=r,r=null),i&&i.isAnimationEnabled()){var a=t?"Update":"",s=i.getShallow("animationDuration"+a),l=i.getShallow("animationEasing"+a),u=i.getShallow("animationDelay"+a);"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,o,!!o):(e.stopAnimation(),e.attr(n),o&&o())}else e.stopAnimation(),e.attr(n),o&&o()}function qi(t,e,n,i,r){Ui(!0,t,e,n,i,r)}function Xi(t,e,n,i,r){Ui(!1,t,e,n,i,r)}function Yi(t,e,n){return e&&!d(e)&&(e=Gu.getLocalTransform(e)),n&&(e=ct([],e)),Y([],t,e)}function Zi(t,e,n,i){function r(t){var e={position:j(t.position),rotation:t.rotation};return t.shape&&(e.shape=s({},t.shape)),e}if(t&&e){var o=function(t){var e={};return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t);e.traverse(function(t){if(!t.isGroup&&t.anid){var e=o[t.anid];if(e){var i=r(t);t.attr(r(e)),qi(t,i,n,t.dataIndex)}}})}}function Ki(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function Ji(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function Qi(t,e){var n=Xf(t).getParent;return n?n.call(t,e):t.parentModel}function tr(t){return[t||"",Yf++,Math.random().toFixed(5)].join("_")}function er(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}function nr(t,e,n,i){var r=e[1]-e[0],o=n[1]-n[0];if(0===r)return 0===o?n[0]:(n[0]+n[1])/2;if(i)if(r>0){if(t<=e[0])return n[0];if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0];if(t<=e[1])return n[1]}else{if(t===e[0])return n[0];if(t===e[1])return n[1]}return(t-e[0])/r*o+n[0]}function ir(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%"}return"string"==typeof t?er(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t}function rr(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t}function or(t){var e=t.toString(),n=e.indexOf("e");if(n>0){var i=+e.slice(n+1);return i<0?-i:0}var r=e.indexOf(".");return r<0?0:e.length-1-r}function ar(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),o=Math.round(n(Math.abs(e[1]-e[0]))/i),a=Math.min(Math.max(-r+o,0),20);return isFinite(a)?a:20}function sr(t,e,n){if(!t[e])return 0;var i=v(t,function(t,e){return t+(isNaN(e)?0:e)},0);if(0===i)return 0;for(var r=Math.pow(10,n),o=g(t,function(t){return(isNaN(t)?0:t)/i*r*100}),a=100*r,s=g(o,function(t){return Math.floor(t)}),l=v(s,function(t,e){return t+e},0),u=g(o,function(t,e){return t-s[e]});l<a;){for(var c=Number.NEGATIVE_INFINITY,h=null,f=0,d=u.length;f<d;++f)u[f]>c&&(c=u[f],h=f);++s[h],u[h]=0,++l}return s[e]/r}function lr(t){var e=2*Math.PI;return(t%e+e)%e}function ur(t){return t>-Zf&&t<Zf}function cr(t){if(t instanceof Date)return t;if("string"==typeof t){var e=Kf.exec(t);if(!e)return new Date(NaN);if(e[8]){var n=+e[4]||0;return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))}function hr(t){return Math.pow(10,fr(t))}function fr(t){return Math.floor(Math.log(t)/Math.LN10)}function dr(t,e){var n,i=fr(t),r=Math.pow(10,i),o=t/r;return n=e?o<1.5?1:o<2.5?2:o<4?3:o<7?5:10:o<1?1:o<2?2:o<3?3:o<5?5:10,t=n*r,i>=-20?+t.toFixed(i<0?-i:0):t}function pr(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function gr(t){return null==t?"":(t+"").replace(Qf,function(t,e){return td[e]})}function vr(t,e,n){x(e)||(e=[e]);var i=e.length;if(!i)return"";for(var r=e[0].$vars||[],o=0;o<r.length;o++){var a=ed[o];t=t.replace(nd(a),nd(a,0))}for(var s=0;s<i;s++)for(var l=0;l<r.length;l++){var u=e[s][r[l]];t=t.replace(nd(ed[l],s),n?gr(u):u)}return t}function mr(t,e){var n=(t=w(t)?{color:t,extraCssText:e}:t||{}).color,i=t.type;e=t.extraCssText;return n?"subItem"===i?'<span style="display:inline-block;vertical-align:middle;margin-right:8upx;margin-left:3upx;border-radius:4upx;width:4upx;height:4upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5upx;border-radius:10upx;width:10upx;height:10upx;background-color:'+gr(n)+";"+(e||"")+'"></span>':""}function yr(t,e){return t+="","0000".substr(0,e-t.length)+t}function _r(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy");var i=cr(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),a=i["get"+r+"Month"]()+1,s=i["get"+r+"Date"](),l=i["get"+r+"Hours"](),u=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),h=i["get"+r+"Milliseconds"]();return t.replace("MM",yr(a,2)).replace("M",a).replace("yyyy",o).replace("yy",o%100).replace("dd",yr(s,2)).replace("d",s).replace("hh",yr(l,2)).replace("h",l).replace("mm",yr(u,2)).replace("m",u).replace("ss",yr(c,2)).replace("s",c).replace("SSS",yr(h,3))}function xr(t,e,n,i,r){var o=0,a=0;null==i&&(i=1/0),null==r&&(r=1/0);var s=0;e.eachChild(function(l,u){var c,h,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect();if("horizontal"===t){var v=d.width+(g?-g.x+d.x:0);(c=o+v)>i||l.newline?(o=0,c=v,a+=s+n,s=d.height):s=Math.max(s,d.height)}else{var m=d.height+(g?-g.y+d.y:0);(h=a+m)>r||l.newline?(o+=s+n,a=0,h=m,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=o,f[1]=a,"horizontal"===t?o=c+n:a=h+n)})}function br(t,e,n){n=Jf(n||0);var i=e.width,r=e.height,o=ir(t.left,i),a=ir(t.top,r),s=ir(t.right,i),l=ir(t.bottom,r),u=ir(t.width,i),c=ir(t.height,r),h=n[2]+n[0],f=n[1]+n[3],d=t.aspect;switch(isNaN(u)&&(u=i-s-f-o),isNaN(c)&&(c=r-l-h-a),null!=d&&(isNaN(u)&&isNaN(c)&&(d>i/r?u=.8*i:c=.8*r),isNaN(u)&&(u=d*c),isNaN(c)&&(c=u/d)),isNaN(o)&&(o=i-s-u-f),isNaN(a)&&(a=r-l-c-h),t.left||t.right){case"center":o=i/2-u/2-n[3];break;case"right":o=i-u-f}switch(t.top||t.bottom){case"middle":case"center":a=r/2-c/2-n[0];break;case"bottom":a=r-c-h}o=o||0,a=a||0,isNaN(u)&&(u=i-f-o-(s||0)),isNaN(c)&&(c=r-h-a-(l||0));var p=new zt(o+n[3],a+n[0],u,c);return p.margin=n,p}function wr(t,e,n){function i(n,i){var a={},l=0,u={},c=0;if(rd(n,function(e){u[e]=t[e]}),rd(n,function(t){r(e,t)&&(a[t]=u[t]=e[t]),o(a,t)&&l++,o(u,t)&&c++}),s[i])return o(e,n[1])?u[n[2]]=null:o(e,n[2])&&(u[n[1]]=null),u;if(2!==c&&l){if(l>=2)return a;for(var h=0;h<n.length;h++){var f=n[h];if(!r(a,f)&&r(t,f)){a[f]=t[f];break}}return a}return u}function r(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function a(t,e,n){rd(t,function(t){e[t]=n[t]})}!S(n)&&(n={});var s=n.ignoreSize;!x(s)&&(s=[s,s]);var l=i(ad[0],0),u=i(ad[1],1);a(ad[0],t,l),a(ad[1],t,u)}function Sr(t){return Mr({},t)}function Mr(t,e){return e&&t&&rd(od,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function Cr(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i];return t[n-1]}function kr(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:z(),categoryAxisMap:z()},i=pd[e];if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}function Tr(t){return"category"===t.get("type")}function Ir(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===yd?{}:[]),this.sourceFormat=t.sourceFormat||_d,this.seriesLayoutBy=t.seriesLayoutBy||bd,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&z(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}function Dr(t){var e=t.option.source,n=_d;if(C(e))n=xd;else if(x(e))for(var i=0,r=e.length;i<r;i++){var o=e[i];if(null!=o){if(x(o)){n=vd;break}if(S(o)){n=md;break}}}else if(S(e)){for(var a in e)if(e.hasOwnProperty(a)&&d(e[a])){n=yd;break}}else if(null!=e)throw new Error("Invalid data");Sd(t).sourceFormat=n}function Ar(t){return Sd(t).source}function Or(t){Sd(t).datasetMap=z()}function Pr(t){var e=t.option,n=e.data,i=C(n)?xd:gd,r=!1,o=e.seriesLayoutBy,a=e.sourceHeader,s=e.dimensions,l=zr(t);if(l){var u=l.option;n=u.source,i=Sd(l).sourceFormat,r=!0,o=o||u.seriesLayoutBy,null==a&&(a=u.sourceHeader),s=s||u.dimensions}var c=Lr(n,i,o,a,s),h=e.encode;!h&&l&&(h=Rr(t,l,n,i,o,c)),Sd(t).source=new Ir({data:n,fromDataset:r,seriesLayoutBy:o,sourceFormat:i,dimensionsDefine:c.dimensionsDefine,startIndex:c.startIndex,dimensionsDetectCount:c.dimensionsDetectCount,encodeDefine:h})}function Lr(t,e,n,i,r){if(!t)return{dimensionsDefine:Er(r)};var o,a,s,l;if(e===vd)"auto"===i||null==i?Nr(function(t){null!=t&&"-"!==t&&(w(t)?null==a&&(a=1):a=0)},n,t,10):a=i?1:0,r||1!==a||(r=[],Nr(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===wd?t.length:t[0]?t[0].length:null;else if(e===md)r||(r=Br(t),s=!0);else if(e===yd)r||(r=[],s=!0,p(t,function(t,e){r.push(e)}));else if(e===gd){var u=cn(t[0]);o=x(u)&&u.length||1}return s&&p(r,function(t,e){"name"===(S(t)?t.name:t)&&(l=e)}),{startIndex:a,dimensionsDefine:Er(r),dimensionsDetectCount:o,potentialNameDimIndex:l}}function Er(t){if(t){var e=z();return g(t,function(t,n){if(null==(t=s({},S(t)?t:{name:t})).name)return t;t.name+="",null==t.displayName&&(t.displayName=t.name);var i=e.get(t.name);return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function Nr(t,e,n,i){if(null==i&&(i=1/0),e===wd)for(o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o);else for(var r=n[0]||[],o=0;o<r.length&&o<i;o++)t(r[o],o)}function Br(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[];return p(e,function(t,e){i.push(e)}),i}}function Rr(t,e,n,i,r,o){var a=kr(t),s={},l=[],u=[],c=t.subType,h=z(["pie","map","funnel"]),f=z(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"]);if(a&&null!=f.get(c)){var d=t.ecModel,g=Sd(d).datasetMap,v=e.uid+"_"+r,m=g.get(v)||g.set(v,{categoryWayDim:1,valueWayDim:0});p(a.coordSysDims,function(t){if(null==a.firstCategoryDimIndex)e=m.valueWayDim++,s[t]=e,u.push(e);else if(a.categoryAxisMap.get(t))s[t]=0,l.push(0);else{var e=m.categoryWayDim++;s[t]=e,u.push(e)}})}else if(null!=h.get(c)){for(var y,_=0;_<5&&null==y;_++)Fr(n,i,r,o.dimensionsDefine,o.startIndex,_)||(y=_);if(null!=y){s.value=y;var x=o.potentialNameDimIndex||Math.max(y-1,0);u.push(x),l.push(x)}}return l.length&&(s.itemName=l),u.length&&(s.seriesName=u),s}function zr(t){var e=t.option;if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}function $r(t,e){return Fr(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}function Fr(t,e,n,i,r,o){function a(t){return(null==t||!isFinite(t)||""===t)&&(!(!w(t)||"-"===t)||void 0)}var s,l;if(C(t))return!1;if(i&&(l=S(l=i[o])?l.name:l),e===vd)if(n===wd){for(var u=t[o],c=0;c<(u||[]).length&&c<5;c++)if(null!=(s=a(u[r+c])))return s}else for(c=0;c<t.length&&c<5;c++){var h=t[r+c];if(h&&null!=(s=a(h[o])))return s}else if(e===md){if(!l)return;for(c=0;c<t.length&&c<5;c++)if((f=t[c])&&null!=(s=a(f[l])))return s}else if(e===yd){if(!l)return;if(!(u=t[l])||C(u))return!1;for(c=0;c<u.length&&c<5;c++)if(null!=(s=a(u[c])))return s}else if(e===gd)for(c=0;c<t.length&&c<5;c++){var f=t[c],d=cn(f);if(!x(d))return!1;if(null!=(s=a(d[o])))return s}return!1}function jr(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName;return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}function Vr(t,e){var n=t.color&&!t.colorLayer;p(e,function(e,i){"colorLayer"===i&&n||ud.hasClass(i)||("object"==typeof e?t[i]=t[i]?o(t[i],e,!1):r(e):null==t[i]&&(t[i]=e))})}function Wr(t){t=t,this.option={},this.option[Md]=1,this._componentsMap=z({series:[]}),this._seriesIndices,this._seriesIndicesMap,Vr(t,this._theme.option),o(t,hd,!1),this.mergeOption(t)}function Hr(t,e){x(e)||(e=e?[e]:[]);var n={};return p(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}function Gr(t,e,n){return e.type?e.type:n?n.subType:ud.determineSubType(t,e)}function Ur(t,e){t._seriesIndicesMap=z(t._seriesIndices=g(e,function(t){return t.componentIndex})||[])}function qr(t,e){return e.hasOwnProperty("subType")?m(t,function(t){return t.subType===e.subType}):t}function Xr(t){p(kd,function(e){this[e]=y(t[e],t)},this)}function Yr(){this._coordinateSystems=[]}function Zr(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function Kr(t,e,n){var i,r,o=[],a=[],s=t.timeline;if(t.baseOption&&(r=t.baseOption),(s||t.options)&&(r=r||{},o=(t.options||[]).slice()),t.media){r=r||{};var l=t.media;Id(l,function(t){t&&t.option&&(t.query?a.push(t):i||(i=t))})}return r||(r=t),r.timeline||(r.timeline=s),Id([r].concat(o).concat(g(a,function(t){return t.option})),function(t){Id(e,function(e){e(t,n)})}),{baseOption:r,timelineOptions:o,mediaDefault:i,mediaList:a}}function Jr(t,e,n){var i={width:e,height:n,aspectratio:e/n},r=!0;return p(t,function(t,e){var n=e.match(Pd);if(n&&n[1]&&n[2]){var o=n[1],a=n[2].toLowerCase();Qr(i[a],t,o)||(r=!1)}}),r}function Qr(t,e,n){return"min"===n?t>=e:"max"===n?t<=e:t===e}function to(t,e){return t.join(",")===e.join(",")}function eo(t,e){Id(e=e||{},function(e,n){if(null!=e){var i=t[n];if(ud.hasClass(n)){e=ln(e);var r=fn(i=ln(i),e);t[n]=Ad(r,function(t){return t.option&&t.exist?Od(t.exist,t.option,!0):t.exist||t.option})}else t[n]=Od(i,e,!0)}})}function no(t){var e=t&&t.itemStyle;if(e)for(var n=0,i=Nd.length;n<i;n++){var r=Nd[n],a=e.normal,s=e.emphasis;a&&a[r]&&(t[r]=t[r]||{},t[r].normal?o(t[r].normal,a[r]):t[r].normal=a[r],a[r]=null),s&&s[r]&&(t[r]=t[r]||{},t[r].emphasis?o(t[r].emphasis,s[r]):t[r].emphasis=s[r],s[r]=null)}}function io(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var i=t[e].normal,r=t[e].emphasis;i&&(n?(t[e].normal=t[e].emphasis=null,l(t[e],i)):t[e]=i),r&&(t.emphasis=t.emphasis||{},t.emphasis[e]=r)}}function ro(t){io(t,"itemStyle"),io(t,"lineStyle"),io(t,"areaStyle"),io(t,"label"),io(t,"labelLine"),io(t,"upperLabel"),io(t,"edgeLabel")}function oo(t,e){var n=Ed(t)&&t[e],i=Ed(n)&&n.textStyle;if(i)for(var r=0,o=ah.length;r<o;r++){e=ah[r];i.hasOwnProperty(e)&&(n[e]=i[e])}}function ao(t){t&&(ro(t),oo(t,"label"),t.emphasis&&oo(t.emphasis,"label"))}function so(t){if(Ed(t)){no(t),ro(t),oo(t,"label"),oo(t,"upperLabel"),oo(t,"edgeLabel"),t.emphasis&&(oo(t.emphasis,"label"),oo(t.emphasis,"upperLabel"),oo(t.emphasis,"edgeLabel"));var e=t.markPoint;e&&(no(e),ao(e));var n=t.markLine;n&&(no(n),ao(n));var i=t.markArea;i&&ao(i);var r=t.data;if("graph"===t.type){r=r||t.nodes;var o=t.links||t.edges;if(o&&!C(o))for(s=0;s<o.length;s++)ao(o[s]);p(t.categories,function(t){ro(t)})}if(r&&!C(r))for(s=0;s<r.length;s++)ao(r[s]);if((e=t.markPoint)&&e.data)for(var a=e.data,s=0;s<a.length;s++)ao(a[s]);if((n=t.markLine)&&n.data){var l=n.data;for(s=0;s<l.length;s++)x(l[s])?(ao(l[s][0]),ao(l[s][1])):ao(l[s])}"gauge"===t.type?(oo(t,"axisLabel"),oo(t,"title"),oo(t,"detail")):"treemap"===t.type?(io(t.breadcrumb,"itemStyle"),p(t.levels,function(t){ro(t)})):"tree"===t.type&&ro(t.leaves)}}function lo(t){return x(t)?t:t?[t]:[]}function uo(t){return(x(t)?t[0]:t)||{}}function co(t,e){e=e.split(",");for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}function ho(t,e,n,i){e=e.split(",");for(var r,o=t,a=0;a<e.length-1;a++)null==o[r=e[a]]&&(o[r]={}),o=o[r];(i||null==o[e[a]])&&(o[e[a]]=n)}function fo(t){p(Rd,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}function po(t){p(t,function(e,n){var i=[],r=[NaN,NaN],o=[e.stackResultDimension,e.stackedOverDimension],a=e.data,s=e.isStackedByIndex,l=a.map(o,function(o,l,u){var c,h,f=a.get(e.stackedDimension,u);if(isNaN(f))return r;s?h=a.getRawIndex(u):c=a.get(e.stackedByDimension,u);for(var d=NaN,p=n-1;p>=0;p--){var g=t[p];if(s||(h=g.data.rawIndexOf(g.stackedByDimension,c)),h>=0){var v=g.data.getByRawIndex(g.stackResultDimension,h);if(f>=0&&v>0||f<=0&&v<0){f+=v,d=v;break}}}return i[0]=f,i[1]=d,i});a.hostModel.setData(l),e.data=l})}function go(t,e){Ir.isInstance(t)||(t=Ir.seriesDataToSource(t)),this._source=t;var n=this._data=t.data,i=t.sourceFormat;i===xd&&(this._offset=0,this._dimSize=e,this._data=n),s(this,jd[i===vd?i+"_"+t.seriesLayoutBy:i])}function vo(){return this._data.length}function mo(t){return this._data[t]}function yo(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}function _o(t,e,n,i){return null!=n?t[n]:t}function xo(t,e,n,i){return bo(t[i],this._dimensionInfos[e])}function bo(t,e){var n=e&&e.type;if("ordinal"===n){var i=e&&e.ordinalMeta;return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+cr(t)),null==t||""===t?NaN:+t}function wo(t,e,n){if(t){var i=t.getRawDataItem(e);if(null!=i){var r,o,a=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n);return s&&(r=s.name,o=s.index),Vd[a](i,e,o,r)}}}function So(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat;if(i===gd||i===md){var r=t.getRawDataItem(e);return i!==gd||S(r)||(r=null),r?r[n]:void 0}}}function Mo(t){return new Co(t)}function Co(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}function ko(t,e,n,i,r,o){qd.reset(n,i,r,o),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:qd.next},t.context)}function To(t,e){var n,i;t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),x(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null;var r=t._downstream;return r&&r.dirty(),i}function Io(t){var e=t.name;pn(t)||(t.name=Do(t)||e)}function Do(t){var e=t.getRawData(),n=[];return p(e.mapDimension("seriesName",!0),function(t){var i=e.getDimensionInfo(t);i.displayName&&n.push(i.displayName)}),n.join(" ")}function Ao(t){return t.model.getRawData().count()}function Oo(t){var e=t.model;return e.setData(e.getRawData().cloneShallow()),Po}function Po(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function Lo(t,e){p(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,_(Eo,e))})}function Eo(t){var e=No(t);e&&e.setOutputEnd(this.count())}function No(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid);if(n){var i=n.currentTask;if(i){var r=i.agentStubMap;r&&(i=r.get(t.uid))}return i}}function Bo(){this.group=new pc,this.uid=tr("viewChart"),this.renderTask=Mo({plan:$o,reset:Fo}),this.renderTask.context={view:this}}function Ro(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)Ro(t.childAt(n),e)}function zo(t,e,n){var i=vn(t,e);null!=i?p(ln(i),function(e){Ro(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){Ro(t,n)})}function $o(t){return tp(t.model)}function Fo(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,o=e.pipelineContext.progressiveRender,a=t.view,s=r&&Qd(r).updateMethod,l=o?"incrementalPrepareRender":s&&a[s]?s:"render";return"render"!==l&&a[l](e,n,i,r),np[l]}function jo(t,e,n){function i(){c=(new Date).getTime(),h=null,t.apply(a,s||[])}var r,o,a,s,l,u=0,c=0,h=null;e=e||0;var f=function(){r=(new Date).getTime(),a=this,s=arguments;var t=l||e,f=l||n;l=null,o=r-(f?u:c)-t,clearTimeout(h),f?h=setTimeout(i,t):o>=0?i():h=setTimeout(i,-o),u=r};return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){l=t},f}function Vo(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished;n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice();this._allHandlers=n.concat(i),this._stageTaskMap=z()}function Wo(t,e,n,i,r){function o(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}var a;r=r||{},p(e,function(e,s){if(!r.visualType||r.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,c=l.overallTask;if(c){var h,f=c.agentStubMap;f.each(function(t){o(r,t)&&(t.dirty(),h=!0)}),h&&c.dirty(),lp(c,i);var d=t.getPerformArgs(c,r.block);f.each(function(t){t.perform(d)}),a|=c.perform(d)}else u&&u.each(function(s,l){o(r,s)&&s.dirty();var u=t.getPerformArgs(s,r.block);u.skip=!e.performRawSeries&&n.isSeriesFiltered(s.context.model),lp(s,i),a|=s.perform(u)})}}),t.unfinished|=a}function Ho(t,e,n,i,r){function o(n){var o=n.uid,s=a.get(o)||a.set(o,Mo({plan:Zo,reset:Ko,count:Qo}));s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},ta(t,n,s)}var a=n.seriesTaskMap||(n.seriesTaskMap=z()),s=e.seriesType,l=e.getTargetSeries;e.createOnAllSeries?i.eachRawSeries(o):s?i.eachRawSeriesByType(s,o):l&&l(i,r).each(o);var u=t._pipelineMap;a.each(function(t,e){u.get(e)||(t.dispose(),a.removeKey(e))})}function Go(t,e,n,i,r){function o(e){var n=e.uid,i=s.get(n);i||(i=s.set(n,Mo({reset:qo,onDirty:Yo})),a.dirty()),i.context={model:e,overallProgress:c,modifyOutputEnd:h},i.agent=a,i.__block=c,ta(t,e,i)}var a=n.overallTask=n.overallTask||Mo({reset:Uo});a.context={ecModel:i,api:r,overallReset:e.overallReset,scheduler:t};var s=a.agentStubMap=a.agentStubMap||z(),l=e.seriesType,u=e.getTargetSeries,c=!0,h=e.modifyOutputEnd;l?i.eachRawSeriesByType(l,o):u?u(i,r).each(o):(c=!1,p(i.getSeries(),o));var f=t._pipelineMap;s.each(function(t,e){f.get(e)||(t.dispose(),a.dirty(),s.removeKey(e))})}function Uo(t){t.overallReset(t.ecModel,t.api,t.payload)}function qo(t,e){return t.overallProgress&&Xo}function Xo(){this.agent.dirty(),this.getDownstream().dirty()}function Yo(){this.agent&&this.agent.dirty()}function Zo(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function Ko(t){t.useClearVisual&&t.data.clearAllVisual();var e=t.resetDefines=ln(t.reset(t.model,t.ecModel,t.api,t.payload));return e.length>1?g(e,function(t,e){return Jo(e)}):up}function Jo(t){return function(e,n){var i=n.data,r=n.resetDefines[t];if(r&&r.dataEach)for(var o=e.start;o<e.end;o++)r.dataEach(i,o);else r&&r.progress&&r.progress(e,i)}}function Qo(t){return t.data.count()}function ta(t,e,n){var i=e.uid,r=t._pipelineMap.get(i);!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}function ea(t){cp=null;try{t(hp,fp)}catch(t){}return cp}function na(t,e){for(var n in e.prototype)t[n]=$}function ia(t){return function(e,n,i){e=e&&e.toLowerCase(),zu.prototype[t].call(this,e,n,i)}}function ra(){zu.call(this)}function oa(t,e,n){function i(t,e){return t.__prio-e.__prio}n=n||{},"string"==typeof e&&(e=$p[e]),this.id,this.group,this._dom=t;var o=this._zr=sn(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height});this._throttledZrFlush=jo(y(o.flush,o),17),(e=r(e))&&$d(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new Yr;var a=this._api=Sa(this);Ut(zp,i),Ut(Np,i),this._scheduler=new Vo(this,a,Np,zp),zu.call(this),this._messageCenter=new ra,this._initEvents(),this.resize=y(this.resize,this),this._pendingActions=[],o.animation.on("frame",this._onframe,this),da(o,this),N(this)}function aa(t,e,n){var i,r=this._model,o=this._coordSysMgr.getCoordinateSystems();e=yn(r,e);for(var a=0;a<o.length;a++){var s=o[a];if(s[t]&&null!=(i=s[t](r,e,n)))return i}}function sa(t){var e=t._model,n=t._scheduler;n.restorePipelines(e),n.prepareStageTasks(),pa(t,"component",e,n),pa(t,"chart",e,n),n.plan()}function la(t,e,n,i,r){function o(i){i&&i.__alive&&i[e]&&i[e](i.__model,a,t._api,n)}var a=t._model;if(i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var l={mainType:i,query:s};r&&(l.subType=r);var u=n.excludeSeriesId;null!=u&&(u=z(ln(u))),a&&a.eachComponent(l,function(e){u&&null!=u.get(e.id)||o(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else yp(t._componentsViews.concat(t._chartsViews),o)}function ua(t,e){var n=t._chartsMap,i=t._scheduler;e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function ca(t,e){var n=t.type,i=t.escapeConnect,r=Lp[n],o=r.actionInfo,a=(o.update||"update").split(":"),u=a.pop();a=null!=a[0]&&bp(a[0]),this[Tp]=!0;var c=[t],h=!1;t.batch&&(h=!0,c=g(t.batch,function(e){return e=l(s({},e),t),e.batch=null,e}));var f,d=[],p="highlight"===n||"downplay"===n;yp(c,function(t){f=r.action(t,this._model,this._api),(f=f||s({},t)).type=o.event||f.type,d.push(f),p?la(this,u,t,"series"):a&&la(this,u,t,a.main,a.sub)},this),"none"===u||p||a||(this[Ip]?(sa(this),Op.update.call(this,t),this[Ip]=!1):Op[u].call(this,t)),f=h?{type:o.event||n,escapeConnect:i,batch:d}:d[0],this[Tp]=!1,!e&&this._messageCenter.trigger(f.type,f)}function ha(t){for(var e=this._pendingActions;e.length;){var n=e.shift();ca.call(this,n,t)}}function fa(t){!t&&this.trigger("updated")}function da(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[Ip]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}function pa(t,e,n,i){function r(t){var e="_ec_"+t.id+"_"+t.type,r=s[e];if(!r){var c=bp(t.type);(r=new(o?Zd.getClass(c.main,c.sub):Bo.getClass(c.sub))).init(n,u),s[e]=r,a.push(r),l.add(r.group)}t.__viewId=r.__id=e,r.__alive=!0,r.__model=t,r.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!o&&i.prepareView(r,t,n,u)}for(var o="component"===e,a=o?t._componentsViews:t._chartsViews,s=o?t._componentsMap:t._chartsMap,l=t._zr,u=t._api,c=0;c<a.length;c++)a[c].__alive=!1;for(o?n.eachComponent(function(t,e){"series"!==t&&r(e)}):n.eachSeries(r),c=0;c<a.length;){var h=a[c];h.__alive?c++:(!o&&h.renderTask.dispose(),l.remove(h.group),h.dispose(n,u),a.splice(c,1),delete s[h.__id],h.__id=h.group.__ecComponentInfo=null)}}function ga(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function va(t,e,n,i){ma(t,e,n,i),yp(t._chartsViews,function(t){t.__alive=!1}),ya(t,e,n,i),yp(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function ma(t,e,n,i,r){yp(r||t._componentsViews,function(t){var r=t.__model;t.render(r,e,n,i),wa(r,t)})}function ya(t,e,n,i,r){var o,a=t._scheduler;e.eachSeries(function(e){var n=t._chartsMap[e.__viewId];n.__alive=!0;var s=n.renderTask;a.updatePayload(s,i),r&&r.get(e.uid)&&s.dirty(),o|=s.perform(a.getPerformArgs(s)),n.group.silent=!!e.get("silent"),wa(e,n),ba(e,n)}),a.unfinished|=o,xa(t._zr,e),op(t._zr.dom,e)}function _a(t,e){yp(Rp,function(n){n(t,e)})}function xa(t,e){var n=t.storage,i=0;n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!xu.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}function ba(t,e){var n=t.get("blendMode")||null;e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}function wa(t,e){var n=t.get("z"),i=t.get("zlevel");e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}function Sa(t){var e=t._coordSysMgr;return s(new Xr(t),{getCoordinateSystems:y(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo;if(null!=n)return t._model.getComponent(n.mainType,n.index);e=e.parent}}})}function Ma(t){function e(t,e){for(var i=0;i<t.length;i++)t[i][n]=e}var n="__connectUpdateStatus";yp(Ep,function(i,r){t._messageCenter.on(r,function(i){if(Vp[t.group]&&0!==t[n]){if(i&&i.escapeConnect)return;var r=t.makeActionFromEvent(i),o=[];yp(jp,function(e){e!==t&&e.group===t.group&&o.push(e)}),e(o,0),yp(o,function(t){1!==t[n]&&t.dispatchAction(r)}),e(o,2)}})})}function Ca(t){Vp[t]=!1}function ka(t){return jp[bn(t,Gp)]}function Ta(t,e){$p[t]=e}function Ia(t){Bp.push(t)}function Da(t,e){La(Np,t,e,Sp)}function Aa(t,e,n){"function"==typeof e&&(n=e,e="");var i=xp(t)?t.type:[t,t={event:e}][0];t.event=(t.event||i).toLowerCase(),e=t.event,mp(Dp.test(i)&&Dp.test(e)),Lp[i]||(Lp[i]={action:n,actionInfo:t}),Ep[e]=i}function Oa(t,e){La(zp,t,e,Mp,"layout")}function Pa(t,e){La(zp,t,e,Cp,"visual")}function La(t,e,n,i,r){(_p(e)||xp(e))&&(n=e,e=i);var o=Vo.wrapStageHandler(n,r);return o.__prio=e,o.__raw=n,t.push(o),o}function Ea(t,e){Fp[t]=e}function Na(t){return Zd.extend(t)}function Ba(t){return Yd.extend(t)}function Ra(t){return Bo.extend(t)}function za(t){return t}function $a(t,e,n,i,r){this._old=t,this._new=e,this._oldKeyGetter=n||za,this._newKeyGetter=i||za,this.context=r}function Fa(t,e,n,i,r){for(var o=0;o<t.length;o++){var a="_ec_"+r[i](t[o],o),s=e[a];null==s?(n.push(a),e[a]=o):(s.length||(e[a]=s=[s]),s.push(o))}}function ja(t){var e={},n=e.encode={},i=z(),r=[],o=[];p(t.dimensions,function(e){var a=t.getDimensionInfo(e),s=a.coordDim;if(s){var l=n[s];n.hasOwnProperty(s)||(l=n[s]=[]),l[a.coordDimIndex]=e,a.isExtraCoord||(i.set(s,1),Wa(a.type)&&(r[0]=e)),a.defaultTooltip&&o.push(e)}Yp.each(function(t,e){var i=n[e];n.hasOwnProperty(e)||(i=n[e]=[]);var r=a.otherDims[e];null!=r&&!1!==r&&(i[r]=a.name)})});var a=[],s={};i.each(function(t,e){var i=n[e];s[e]=i[0],a=a.concat(i)}),e.dataDimsOnCoord=a,e.encodeFirstDimNotExtra=s;var l=n.label;l&&l.length&&(r=l.slice());var u=n.tooltip;return u&&u.length?o=u.slice():o.length||(o=r.slice()),n.defaultedLabel=r,n.defaultedTooltip=o,e}function Va(t){return"category"===t?"ordinal":"time"===t?"time":"float"}function Wa(t){return!("ordinal"===t||"time"===t)}function Ha(t){return t._rawCount>65535?Qp:tg}function Ga(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function Ua(t,e){p(eg.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,p(ng,function(n){t[n]=r(e[n])}),t._calculationInfo=s(e._calculationInfo)}function qa(t){var e=t._invertedIndicesMap;p(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta;if(r){for(n=e[i]=new Qp(r.categories.length),o=0;o<n.length;o++)n[o]=NaN;for(var o=0;o<t._count;o++)n[t.get(i,o)]=o}})}function Xa(t,e,n){var i;if(null!=e){var r=t._chunkSize,o=Math.floor(n/r),a=n%r,s=t.dimensions[e],l=t._storage[s][o];if(l){i=l[a];var u=t._dimensionInfos[s].ordinalMeta;u&&u.categories.length&&(i=u.categories[i])}}return i}function Ya(t){return t}function Za(t){return t<this._count&&t>=0?this._indices[t]:-1}function Ka(t,e){var n=t._idList[e];return null==n&&(n=Xa(t,t._idDimIdx,e)),null==n&&(n=Kp+e),n}function Ja(t){return x(t)||(t=[t]),t}function Qa(t,e){var n=t.dimensions,i=new ig(g(n,t.getDimensionInfo,t),t.hostModel);Ua(i,t);for(var r=i._storage={},o=t._storage,a=0;a<n.length;a++){var s=n[a];o[s]&&(c(e,s)>=0?(r[s]=ts(o[s]),i._rawExtent[s]=es(),i._extent[s]=null):r[s]=o[s])}return i}function ts(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=Ga(t[n]);return e}function es(){return[1/0,-1/0]}function ns(t,e,n){function i(t,e,n){null!=Yp.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,c.set(e,!0))}Ir.isInstance(e)||(e=Ir.seriesDataToSource(e)),n=n||{},t=(t||[]).slice();for(var o=(n.dimsDef||[]).slice(),a=z(n.encodeDef),u=z(),c=z(),h=[],f=is(e,t,o,n.dimCount),d=0;d<f;d++){var g=o[d]=s({},S(o[d])?o[d]:{name:o[d]}),v=g.name,m=h[d]={otherDims:{}};null!=v&&null==u.get(v)&&(m.name=m.displayName=v,u.set(v,d)),null!=g.type&&(m.type=g.type),null!=g.displayName&&(m.displayName=g.displayName)}a.each(function(t,e){t=ln(t).slice();var n=a.set(e,[]);p(t,function(t,r){w(t)&&(t=u.get(t)),null!=t&&t<f&&(n[r]=t,i(h[t],e,r))})});var y=0;p(t,function(t,e){var n,o,s;if(w(t))n=t,t={};else{n=t.name;var u=t.ordinalMeta;t.ordinalMeta=null,(t=r(t)).ordinalMeta=u,o=t.dimsDef,s=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var c=ln(a.get(n));if(!c.length)for(var f=0;f<(o&&o.length||1);f++){for(;y<h.length&&null!=h[y].coordDim;)y++;y<h.length&&c.push(y++)}p(c,function(e,r){var a=h[e];if(i(l(a,t),n,r),null==a.name&&o){var u=o[r];!S(u)&&(u={name:u}),a.name=a.displayName=u.name,a.defaultTooltip=u.defaultTooltip}s&&l(a.otherDims,s)})});var _=n.generateCoord,x=n.generateCoordCount,b=null!=x;x=_?x||1:0;for(var M=_||"value",C=0;C<f;C++)null==(m=h[C]=h[C]||{}).coordDim&&(m.coordDim=rs(M,c,b),m.coordDimIndex=0,(!_||x<=0)&&(m.isExtraCoord=!0),x--),null==m.name&&(m.name=rs(m.coordDim,u)),null==m.type&&$r(e,C,m.name)&&(m.type="ordinal");return h}function is(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0);return p(e,function(t){var e=t.dimsDef;e&&(r=Math.max(r,e.length))}),r}function rs(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++;t+=i}return e.set(t,!0),t}function os(t,e,n){var i,r,o,a,s=(n=n||{}).byIndex,l=n.stackedCoordDimension,u=!(!t||!t.get("stack"));if(p(e,function(t,n){w(t)&&(e[n]=t={name:t}),u&&!t.isExtraCoord&&(s||i||!t.ordinalMeta||(i=t),r||"ordinal"===t.type||"time"===t.type||l&&l!==t.coordDim||(r=t))}),!r||s||i||(s=!0),r){o="__\0ecstackresult",a="__\0ecstackedover",i&&(i.createInvertedIndices=!0);var c=r.coordDim,h=r.type,f=0;p(e,function(t){t.coordDim===c&&f++}),e.push({name:o,coordDim:c,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0}),f++,e.push({name:a,coordDim:a,coordDimIndex:f,type:h,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:r&&r.name,stackedByDimension:i&&i.name,isStackedByIndex:s,stackedOverDimension:a,stackResultDimension:o}}function as(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}function ss(t,e){return as(t,e)?t.getCalculationInfo("stackResultDimension"):e}function ls(t,e,n){n=n||{},Ir.isInstance(t)||(t=Ir.seriesDataToSource(t));var i,r=e.get("coordinateSystem"),o=Yr.get(r),a=kr(e);a&&(i=g(a.coordSysDims,function(t){var e={name:t},n=a.axisMap.get(t);if(n){var i=n.get("type");e.type=Va(i)}return e})),i||(i=o&&(o.getDimensionsInfo?o.getDimensionsInfo():o.dimensions.slice())||["x","y"]);var s,l,u=ag(t,{coordDimensions:i,generateCoord:n.generateCoord});a&&p(u,function(t,e){var n=t.coordDim,i=a.categoryAxisMap.get(n);i&&(null==s&&(s=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(l=!0)}),l||null==s||(u[s].otherDims.itemName=0);var c=os(e,u),h=new ig(u,e);h.setCalculationInfo(c);var f=null!=s&&us(t)?function(t,e,n,i){return i===s?n:this.defaultDimValueGetter(t,e,n,i)}:null;return h.hasItemOption=!1,h.initData(t,null,f),h}function us(t){if(t.sourceFormat===gd){var e=cs(t.data||[]);return null!=e&&!x(cn(e))}}function cs(t){for(var e=0;e<t.length&&null==t[e];)e++;return t[e]}function hs(t,e){if("image"!==this.type){var n=this.style,i=this.shape;i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}function fs(t,e,n,i,r,o,a){var s,l=0===t.indexOf("empty");return l&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),s=0===t.indexOf("image://")?_i(t.slice(8),new zt(e,n,i,r),a?"center":"cover"):0===t.indexOf("path://")?yi(t.slice(7),{},new zt(e,n,i,r),a?"center":"cover"):new dg({shape:{symbolType:t,x:e,y:n,width:i,height:r}}),s.__isEmptyBrush=l,s.setColor=hs,s.setColor(o),s}function ds(t,e){var n=t.mapDimension("defaultedLabel",!0),i=n.length;if(1===i)return wo(t,e,n[0]);if(i){for(var r=[],o=0;o<n.length;o++){var a=wo(t,e,n[o]);r.push(a)}return r.join(" ")}}function ps(t,e,n){pc.call(this),this.updateData(t,e,n)}function gs(t){return[t[0]/2,t[1]/2]}function vs(t,e){this.parent.drift(t,e)}function ms(t){this.group=new pc,this._symbolCtor=t||ps}function ys(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function _s(t){return null==t||S(t)||(t={isIgnore:t}),t||{}}function xs(t){var e=t.hostModel;return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}function bs(t,e,n){var i,r=t.getBaseAxis(),o=t.getOtherAxis(r),a=ws(o,n),s=r.dim,l=o.dim,u=e.mapDimension(l),c=e.mapDimension(s),h="x"===l||"radius"===l?1:0,f=g(t.dimensions,function(t){return e.mapDimension(t)}),d=e.getCalculationInfo("stackResultDimension");return(i|=as(e,f[0]))&&(f[0]=d),(i|=as(e,f[1]))&&(f[1]=d),{dataDimsForPoint:f,valueStart:a,valueAxisDim:l,baseAxisDim:s,stacked:!!i,valueDim:u,baseDim:c,baseDataOffset:h,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function ws(t,e){var n=0,i=t.scale.getExtent();return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}function Ss(t,e,n,i){var r=NaN;t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart);var o=t.baseDataOffset,a=[];return a[o]=n.get(t.baseDim,i),a[1-o]=r,e.dataToPoint(a)}function Ms(t,e){var n=[];return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}function Cs(t){return isNaN(t[0])||isNaN(t[1])}function ks(t,e,n,i,r,o,a,s,l,u,c){return"none"!==u&&u?Ts.apply(this,arguments):Is.apply(this,arguments)}function Ts(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Cs(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]);else if(l>0){var g=e[h],v="y"===u?1:0,m=(p[v]-g[v])*l;Cg(Tg,g),Tg[v]=g[v]+m,Cg(Ig,p),Ig[v]=p[v]-m,t.bezierCurveTo(Tg[0],Tg[1],Ig[0],Ig[1],p[0],p[1])}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Is(t,e,n,i,r,o,a,s,l,u,c){for(var h=0,f=n,d=0;d<i;d++){var p=e[f];if(f>=r||f<0)break;if(Cs(p)){if(c){f+=o;continue}break}if(f===n)t[o>0?"moveTo":"lineTo"](p[0],p[1]),Cg(Tg,p);else if(l>0){var g=f+o,v=e[g];if(c)for(;v&&Cs(e[g]);)v=e[g+=o];var m=.5,y=e[h];if(!(v=e[g])||Cs(v))Cg(Ig,p);else{var _,x;if(Cs(v)&&!c&&(v=p),W(kg,v,y),"x"===u||"y"===u){var b="x"===u?0:1;_=Math.abs(p[b]-y[b]),x=Math.abs(p[b]-v[b])}else _=Nu(p,y),x=Nu(p,v);Mg(Ig,p,kg,-l*(1-(m=x/(x+_))))}wg(Tg,Tg,s),Sg(Tg,Tg,a),wg(Ig,Ig,s),Sg(Ig,Ig,a),t.bezierCurveTo(Tg[0],Tg[1],Ig[0],Ig[1],p[0],p[1]),Mg(Tg,p,kg,l*m)}else t.lineTo(p[0],p[1]);h=f,f+=o}return d}function Ds(t,e){var n=[1/0,1/0],i=[-1/0,-1/0];if(e)for(var r=0;r<t.length;r++){var o=t[r];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1])}return{min:e?n:i,max:e?i:n}}function As(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n];if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function Os(t){return"number"==typeof t?t:t?.5:0}function Ps(t){var e=t.getGlobalExtent();if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1;e[0]+=i*n,e[1]-=i*n}return e}function Ls(t,e,n){if(!n.valueDim)return[];for(var i=[],r=0,o=e.count();r<o;r++)i.push(Ss(n,t,e,r));return i}function Es(t,e,n,i){var r=Ps(t.getAxis("x")),o=Ps(t.getAxis("y")),a=t.getBaseAxis().isHorizontal(),s=Math.min(r[0],r[1]),l=Math.min(o[0],o[1]),u=Math.max(r[0],r[1])-s,c=Math.max(o[0],o[1])-l;if(n)s-=.5,u+=.5,l-=.5,c+=.5;else{var h=i.get("lineStyle.width")||2,f=i.get("clipOverflow")?h/2:Math.max(u,c);a?(l-=f,c+=2*f):(s-=f,u+=2*f)}var d=new If({shape:{x:s,y:l,width:u,height:c}});return e&&(d.shape[a?"width":"height"]=0,Xi(d,{shape:{width:u,height:c}},i)),d}function Ns(t,e,n,i){var r=t.getAngleAxis(),o=t.getRadiusAxis().getExtent().slice();o[0]>o[1]&&o.reverse();var a=r.getExtent(),s=Math.PI/180;n&&(o[0]-=.5,o[1]+=.5);var l=new wf({shape:{cx:rr(t.cx,1),cy:rr(t.cy,1),r0:rr(o[0],1),r:rr(o[1],1),startAngle:-a[0]*s,endAngle:-a[1]*s,clockwise:r.inverse}});return e&&(l.shape.endAngle=-a[0]*s,Xi(l,{shape:{endAngle:-a[1]*s}},i)),l}function Bs(t,e,n,i){return"polar"===t.type?Ns(t,e,n,i):Es(t,e,n,i)}function Rs(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,o=[],a=0;a<t.length-1;a++){var s=t[a+1],l=t[a];o.push(l);var u=[];switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],o.push(u);break;case"middle":var c=(l[r]+s[r])/2,h=[];u[r]=h[r]=c,u[1-r]=l[1-r],h[1-r]=s[1-r],o.push(u),o.push(h);break;default:u[r]=l[r],u[1-r]=s[1-r],o.push(u)}}return t[a]&&o.push(t[a]),o}function zs(t,e){var n=t.getVisual("visualMeta");if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var i,r,o=n.length-1;o>=0;o--){var a=n[o].dimension,s=t.dimensions[a],l=t.getDimensionInfo(s);if("x"===(i=l&&l.coordDim)||"y"===i){r=n[o];break}}if(r){var u=e.getAxis(i),c=g(r.stops,function(t){return{coord:u.toGlobalCoord(u.dataToCoord(t.value)),color:t.color}}),h=c.length,f=r.outerColors.slice();h&&c[0].coord>c[h-1].coord&&(c.reverse(),f.reverse());var d=c[0].coord-10,v=c[h-1].coord+10,m=v-d;if(m<.001)return"transparent";p(c,function(t){t.offset=(t.coord-d)/m}),c.push({offset:h?c[h-1].offset:.5,color:f[1]||"transparent"}),c.unshift({offset:h?c[0].offset:.5,color:f[0]||"transparent"});var y=new Nf(0,0,0,0,c,!0);return y[i]=d,y[i+"2"]=v,y}}}function $s(t,e,n){var i=t.get("showAllSymbol"),r="auto"===i;if(!i||r){var o=n.getAxesByScale("ordinal")[0];if(o&&(!r||!Fs(o,e))){var a=e.mapDimension(o.dim),s={};return p(o.getViewLabels(),function(t){s[t.tickValue]=1}),function(t){return!s.hasOwnProperty(e.get(a,t))}}}}function Fs(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var r=e.count(),o=Math.max(1,Math.round(r/5)),a=0;a<r;a+=o)if(1.5*ps.getSymbolSize(e,a)[t.isHorizontal()?1:0]>i)return!1;return!0}function js(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}function Vs(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}function Ws(t){return t._map||(t._map=z(t.categories))}function Hs(t){return S(t)&&null!=t.value?t.value:t+""}function Gs(t,e,n,i){var r={},o=t[1]-t[0],a=r.interval=dr(o/e,!0);null!=n&&a<n&&(a=r.interval=n),null!=i&&a>i&&(a=r.interval=i);var s=r.intervalPrecision=Us(a);return Xs(r.niceTickExtent=[Bg(Math.ceil(t[0]/a)*a,s),Bg(Math.floor(t[1]/a)*a,s)],t),r}function Us(t){return or(t)+2}function qs(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function Xs(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),qs(t,0,e),qs(t,1,e),t[0]>t[1]&&(t[0]=t[1])}function Ys(t,e,n,i){var r=[];if(!t)return r;e[0]<n[0]&&r.push(e[0]);for(var o=n[0];o<=n[1]&&(r.push(o),(o=Bg(o+t,i))!==r[r.length-1]);)if(r.length>1e4)return[];return e[1]>(r.length?r[r.length-1]:n[1])&&r.push(e[1]),r}function Zs(t){return t.get("stack")||$g+t.seriesIndex}function Ks(t){return t.dim+t.index}function Js(t,e){var n=[];return e.eachSeriesByType(t,function(t){nl(t)&&!il(t)&&n.push(t)}),n}function Qs(t){var e=[];return p(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),r=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(r[1]-r[0])/n.count(),a=ir(t.get("barWidth"),o),s=ir(t.get("barMaxWidth"),o),l=t.get("barGap"),u=t.get("barCategoryGap");e.push({bandWidth:o,barWidth:a,barMaxWidth:s,barGap:l,barCategoryGap:u,axisKey:Ks(i),stackId:Zs(t)})}),tl(e)}function tl(t){var e={};p(t,function(t,n){var i=t.axisKey,r=t.bandWidth,o=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},a=o.stacks;e[i]=o;var s=t.stackId;a[s]||o.autoWidthCount++,a[s]=a[s]||{width:0,maxWidth:0};var l=t.barWidth;l&&!a[s].width&&(a[s].width=l,l=Math.min(o.remainedWidth,l),o.remainedWidth-=l);var u=t.barMaxWidth;u&&(a[s].maxWidth=u);var c=t.barGap;null!=c&&(o.gap=c);var h=t.barCategoryGap;null!=h&&(o.categoryGap=h)});var n={};return p(e,function(t,e){n[e]={};var i=t.stacks,r=t.bandWidth,o=ir(t.categoryGap,r),a=ir(t.gap,1),s=t.remainedWidth,l=t.autoWidthCount,u=(s-o)/(l+(l-1)*a);u=Math.max(u,0),p(i,function(t,e){var n=t.maxWidth;n&&n<u&&(n=Math.min(n,s),t.width&&(n=Math.min(n,t.width)),s-=n,t.width=n,l--)}),u=(s-o)/(l+(l-1)*a),u=Math.max(u,0);var c,h=0;p(i,function(t,e){t.width||(t.width=u),c=t,h+=t.width*(1+a)}),c&&(h-=c.width*a);var f=-h/2;p(i,function(t,i){n[e][i]=n[e][i]||{offset:f,width:t.width},f+=t.width*(1+a)})}),n}function el(t,e,n){if(t&&e){var i=t[Ks(e)];return null!=i&&null!=n&&(i=i[Zs(n)]),i}}function nl(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function il(t){return t.pipelineContext&&t.pipelineContext.large}function rl(t,e,n){return c(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}function ol(t,e){return Kg(t,Zg(e))}function al(t,e){var n,i,r,o=t.type,a=e.getMin(),s=e.getMax(),l=null!=a,u=null!=s,c=t.getExtent();"ordinal"===o?n=e.getCategories().length:(x(i=e.get("boundaryGap"))||(i=[i||0,i||0]),"boolean"==typeof i[0]&&(i=[0,0]),i[0]=ir(i[0],1),i[1]=ir(i[1],1),r=c[1]-c[0]||Math.abs(c[0])),null==a&&(a="ordinal"===o?n?0:NaN:c[0]-i[0]*r),null==s&&(s="ordinal"===o?n?n-1:NaN:c[1]+i[1]*r),"dataMin"===a?a=c[0]:"function"==typeof a&&(a=a({min:c[0],max:c[1]})),"dataMax"===s?s=c[1]:"function"==typeof s&&(s=s({min:c[0],max:c[1]})),(null==a||!isFinite(a))&&(a=NaN),(null==s||!isFinite(s))&&(s=NaN),t.setBlank(T(a)||T(s)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(a>0&&s>0&&!l&&(a=0),a<0&&s<0&&!u&&(s=0));var h=e.ecModel;if(h&&"time"===o){var f,d=Js("bar",h);if(p(d,function(t){f|=t.getBaseAxis()===e.axis}),f){var g=Qs(d),v=sl(a,s,e,g);a=v.min,s=v.max}}return[a,s]}function sl(t,e,n,i){var r=n.axis.getExtent(),o=r[1]-r[0],a=el(i,n.axis);if(void 0===a)return{min:t,max:e};var s=1/0;p(a,function(t){s=Math.min(t.offset,s)});var l=-1/0;p(a,function(t){l=Math.max(t.offset+t.width,l)}),s=Math.abs(s),l=Math.abs(l);var u=s+l,c=e-t,h=c/(1-(s+l)/o)-c;return e+=h*(l/u),t-=h*(s/u),{min:t,max:e}}function ll(t,e){var n=al(t,e),i=null!=e.getMin(),r=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var a=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:r,minInterval:"interval"===a||"time"===a?e.get("minInterval"):null,maxInterval:"interval"===a||"time"===a?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function ul(t,e){if(e=e||t.get("type"))switch(e){case"category":return new Ng(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new zg;default:return(js.getClass(e)||zg).create(t)}}function cl(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function hl(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(fl(t,i),r)}:function(e){return t.scale.getLabel(e)}}function fl(t,e){return"category"===t.type?t.scale.getLabel(e):e}function dl(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,o="category"===t.type,a=n.getExtent();r=o?n.count():(i=n.getTicks()).length;var s,l=t.getLabelModel(),u=hl(t),c=1;r>40&&(c=Math.ceil(r/40));for(var h=0;h<r;h+=c){var f=u(i?i[h]:a[0]+h),d=pl(l.getTextRect(f),l.get("rotate")||0);s?s.union(d):s=d}return s}}function pl(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,o=i.height,a=r*Math.cos(n)+o*Math.sin(n),s=r*Math.sin(n)+o*Math.cos(n);return new zt(i.x,i.y,a,s)}function gl(t){return this._axes[t]}function vl(t){iv.call(this,t)}function ml(t){return"category"===t.type?_l(t):wl(t)}function yl(t,e){return"category"===t.type?bl(t,e):{ticks:t.scale.getTicks()}}function _l(t){var e=t.getLabelModel(),n=xl(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function xl(t,e){var n,i,r=Sl(t,"labels"),o=Ol(e),a=Ml(r,o);return a||(n=b(o)?Al(t,o):Dl(t,i="auto"===o?kl(t):o),Cl(r,o,{labels:n,labelCategoryInterval:i}))}function bl(t,e){var n,i,r=Sl(t,"ticks"),o=Ol(e),a=Ml(r,o);if(a)return a;if(e.get("show")&&!t.scale.isBlank()||(n=[]),b(o))n=Al(t,o,!0);else if("auto"===o){var s=xl(t,t.getLabelModel());i=s.labelCategoryInterval,n=g(s.labels,function(t){return t.tickValue})}else n=Dl(t,i=o,!0);return Cl(r,o,{ticks:n,tickCategoryInterval:i})}function wl(t){var e=t.scale.getTicks(),n=hl(t);return{labels:g(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}function Sl(t,e){return rv(t)[e]||(rv(t)[e]=[])}function Ml(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function Cl(t,e,n){return t.push({key:e,value:n}),n}function kl(t){var e=rv(t).autoInterval;return null!=e?e:rv(t).autoInterval=t.calculateCategoryInterval()}function Tl(t){var e=Il(t),n=hl(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,o=r.getExtent(),a=r.count();if(o[1]-o[0]<1)return 0;var s=1;a>40&&(s=Math.max(1,Math.floor(a/40)));for(var l=o[0],u=t.dataToCoord(l+1)-t.dataToCoord(l),c=Math.abs(u*Math.cos(i)),h=Math.abs(u*Math.sin(i)),f=0,d=0;l<=o[1];l+=s){var p=0,g=0,v=ie(n(l),e.font,"center","top");p=1.3*v.width,g=1.3*v.height,f=Math.max(f,p,7),d=Math.max(d,g,7)}var m=f/c,y=d/h;isNaN(m)&&(m=1/0),isNaN(y)&&(y=1/0);var _=Math.max(0,Math.floor(Math.min(m,y))),x=rv(t.model),b=x.lastAutoInterval,w=x.lastTickCount;return null!=b&&null!=w&&Math.abs(b-_)<=1&&Math.abs(w-a)<=1&&b>_?_=b:(x.lastTickCount=a,x.lastAutoInterval=_),_}function Il(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function Dl(t,e,n){function i(t){l.push(n?t:{formattedLabel:r(t),rawLabel:o.getLabel(t),tickValue:t})}var r=hl(t),o=t.scale,a=o.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),c=a[0],h=o.count();0!==c&&u>1&&h/u>2&&(c=Math.round(Math.ceil(c/u)*u));var f={min:s.get("showMinLabel"),max:s.get("showMaxLabel")};f.min&&c!==a[0]&&i(a[0]);for(var d=c;d<=a[1];d+=u)i(d);return f.max&&d!==a[1]&&i(a[1]),l}function Al(t,e,n){var i=t.scale,r=hl(t),o=[];return p(i.getTicks(),function(t){var a=i.getLabel(t);e(t,a)&&o.push(n?t:{formattedLabel:r(t),rawLabel:a,tickValue:t})}),o}function Ol(t){var e=t.get("interval");return null==e?"auto":e}function Pl(t,e){var n=(t[1]-t[0])/e/2;t[0]+=n,t[1]-=n}function Ll(t,e,n,i,r){function o(t,e){return c?t>e:t<e}var a=e.length;if(t.onBand&&!i&&a){var s,l=t.getExtent();if(1===a)e[0].coord=l[0],s=e[1]={coord:l[0]};else{var u=e[1].coord-e[0].coord;p(e,function(t){t.coord-=u/2;var e=e||0;e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[a-1].coord+u},e.push(s)}var c=l[0]>l[1];o(e[0].coord,l[0])&&(r?e[0].coord=l[0]:e.shift()),r&&o(l[0],e[0].coord)&&e.unshift({coord:l[0]}),o(l[1],s.coord)&&(r?s.coord=l[1]:e.pop()),r&&o(s.coord,l[1])&&e.push({coord:l[1]})}}function El(t,e){return e.type||(e.data?"category":"value")}function Nl(t,e,n){return t.getCoordSysModel()===e}function Bl(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}function Rl(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]};var i,r=t[e],o=n.model,a=o.get("axisLine.onZero"),s=o.get("axisLine.onZeroAxisIndex");if(a)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&zl(r[l])){i=r[l];break}}else zl(r[s])&&(i=r[s])}function zl(t){return t&&"category"!==t.type&&"time"!==t.type&&cl(t)}function $l(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}function Fl(t,e){return g(vv,function(e){return t.getReferringComponents(e)[0]})}function jl(t){return"cartesian2d"===t.get("coordinateSystem")}function Vl(t){var e={componentType:t.mainType};return e[t.mainType+"Index"]=t.componentIndex,e}function Wl(t,e,n,i){var r,o,a=lr(n-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s;return ur(a-mv/2)?(o=l?"bottom":"top",r="center"):ur(a-1.5*mv)?(o=l?"top":"bottom",r="center"):(o="middle",r=a<1.5*mv&&a>mv/2?l?"left":"right":l?"right":"left"),{rotation:a,textAlign:r,textVerticalAlign:o}}function Hl(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function Gl(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel");e=e||[],n=n||[];var o=e[0],a=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],c=n[1],h=n[n.length-1],f=n[n.length-2];!1===i?(Ul(o),Ul(u)):ql(o,a)&&(i?(Ul(a),Ul(c)):(Ul(o),Ul(u))),!1===r?(Ul(s),Ul(h)):ql(l,s)&&(r?(Ul(l),Ul(f)):(Ul(s),Ul(h)))}function Ul(t){t&&(t.ignore=!0)}function ql(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone();if(i&&r){var o=rt([]);return lt(o,o,-t.rotation),i.applyTransform(at([],o,t.getLocalTransform())),r.applyTransform(at([],o,e.getLocalTransform())),i.intersect(r)}}function Xl(t){return"middle"===t||"center"===t}function Yl(t,e,n){var i=e.axis;if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),a=r.get("length"),s=i.getTicksCoords(),u=[],c=[],h=t._transform,f=[],d=0;d<s.length;d++){var p=s[d].coord;u[0]=p,u[1]=0,c[0]=p,c[1]=n.tickDirection*a,h&&(Y(u,u,h),Y(c,c,h));var g=new Df(wi({anid:"tick_"+s[d].tickValue,shape:{x1:u[0],y1:u[1],x2:c[0],y2:c[1]},style:l(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}));t.group.add(g),f.push(g)}return f}}function Zl(t,e,n){var i=e.axis;if(I(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var r=e.getModel("axisLabel"),o=r.get("margin"),a=i.getViewLabels(),s=(I(n.labelRotate,r.get("rotate"))||0)*mv/180,l=xv(n.rotation,s,n.labelDirection),u=e.getCategories(!0),c=[],h=Hl(e),f=e.get("triggerEvent");return p(a,function(a,s){var d=a.tickValue,p=a.formattedLabel,g=a.rawLabel,v=r;u&&u[d]&&u[d].textStyle&&(v=new Ki(u[d].textStyle,r,e.ecModel));var m=v.getTextColor()||e.get("axisLine.lineStyle.color"),y=[i.dataToCoord(d),n.labelOffset+n.labelDirection*o],_=new yf({anid:"label_"+d,position:y,rotation:l.rotation,silent:h,z2:10});zi(_.style,v,{text:p,textAlign:v.getShallow("align",!0)||l.textAlign,textVerticalAlign:v.getShallow("verticalAlign",!0)||v.getShallow("baseline",!0)||l.textVerticalAlign,textFill:"function"==typeof m?m("category"===i.type?g:"value"===i.type?d+"":d,s):m}),f&&(_.eventData=Vl(e),_.eventData.targetType="axisLabel",_.eventData.value=g),t._dumbGroup.add(_),_.updateTransform(),c.push(_),t.group.add(_),_.decomposeTransform()}),c}}function Kl(t){var e=Jl(t);if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,o=n.get("status"),a=n.get("value");null!=a&&(a=i.parse(a));var s=tu(n);null==o&&(r.status=s?"show":"hide");var l=i.getExtent().slice();l[0]>l[1]&&l.reverse(),(null==a||a>l[1])&&(a=l[1]),a<l[0]&&(a=l[0]),r.value=a,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}}function Jl(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo;return e&&e.axesInfo[eu(t)]}function Ql(t){var e=Jl(t);return e&&e.axisPointerModel}function tu(t){return!!t.get("handle.show")}function eu(t){return t.type+"||"+t.id}function nu(t,e,n,i,r,o){var a=bv.getAxisPointerClass(t.axisPointerClass);if(a){var s=Ql(e);s?(t._axisPointer||(t._axisPointer=new a)).render(e,s,i,o):iu(t,i)}}function iu(t,e,n){var i=t._axisPointer;i&&i.dispose(e,n),t._axisPointer=null}function ru(t,e,n){n=n||{};var i=t.coordinateSystem,r=e.axis,o={},a=r.getAxesOnZeroOf()[0],s=r.position,l=a?"onZero":s,u=r.dim,c=i.getRect(),h=[c.x,c.x+c.width,c.y,c.y+c.height],f={left:0,right:1,top:0,bottom:1,onZero:2},d=e.get("offset")||0,p="x"===u?[h[2]-d,h[3]+d]:[h[0]-d,h[1]+d];if(a){var g=a.toGlobalCoord(a.dataToCoord(0));p[f.onZero]=Math.max(Math.min(g,p[1]),p[0])}o.position=["y"===u?p[f[l]]:h[0],"x"===u?p[f[l]]:h[3]],o.rotation=Math.PI/2*("x"===u?0:1);var v={top:-1,bottom:1,left:-1,right:1};o.labelDirection=o.tickDirection=o.nameDirection=v[s],o.labelOffset=a?p[f[s]]-p[f.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),I(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection);var m=e.get("axisLabel.rotate");return o.labelRotate="top"===l?-m:m,o.z2=1,o}function ou(t,e,n,i,r,o,a){Ri(t,e,n.getModel("label"),n.getModel("emphasis.label"),{labelFetcher:r,labelDataIndex:o,defaultText:ds(r.getData(),o),isRectText:!0,autoColor:i}),au(t),au(e)}function au(t,e){"outside"===t.textPosition&&(t.textPosition=e)}function su(t,e,n){n.style.text=null,qi(n,{shape:{width:0}},e,t,function(){n.parent&&n.parent.remove(n)})}function lu(t,e,n){n.style.text=null,qi(n,{shape:{r:n.shape.r0}},e,t,function(){n.parent&&n.parent.remove(n)})}function uu(t,e,n,i,r,o,a,s){var u=e.getItemVisual(n,"color"),c=e.getItemVisual(n,"opacity"),h=i.getModel("itemStyle"),f=i.getModel("emphasis.itemStyle").getBarItemStyle();s||t.setShape("r",h.get("barBorderRadius")||0),t.useStyle(l({fill:u,opacity:c},h.getBarItemStyle()));var d=i.getShallow("cursor");d&&t.attr("cursor",d);var p=a?r.height>0?"bottom":"top":r.width>0?"left":"right";s||ou(t.style,f,i,u,o,n,p),Bi(t,f)}function cu(t,e){var n=t.get(Iv)||0;return Math.min(n,Math.abs(e.width),Math.abs(e.height))}function hu(t,e,n){var i=t.getData(),r=[],o=i.getLayout("valueAxisHorizontal")?1:0;r[1-o]=i.getLayout("valueAxisStart");var a=new Ov({shape:{points:i.getLayout("largePoints")},incremental:!!n,__startPoint:r,__valueIdx:o});e.add(a),fu(a,t,i)}function fu(t,e,n){var i=n.getVisual("borderColor")||n.getVisual("color"),r=e.getModel("itemStyle").getItemStyle(["color","borderColor"]);t.useStyle(r),t.style.fill=null,t.style.stroke=i,t.style.lineWidth=n.getLayout("barWidth")}function du(t,e,n,i){var r=e.getData(),o=this.dataIndex,a=r.getName(o),s=e.get("selectedOffset");i.dispatchAction({type:"pieToggleSelect",from:t,name:a,seriesId:e.id}),r.each(function(t){pu(r.getItemGraphicEl(t),r.getItemLayout(t),e.isSelected(r.getName(t)),s,n)})}function pu(t,e,n,i,r){var o=(e.startAngle+e.endAngle)/2,a=Math.cos(o),s=Math.sin(o),l=n?i:0,u=[a*l,s*l];r?t.animate().when(200,{position:u}).start("bounceOut"):t.attr("position",u)}function gu(t,e){function n(){o.ignore=o.hoverIgnore,a.ignore=a.hoverIgnore}function i(){o.ignore=o.normalIgnore,a.ignore=a.normalIgnore}pc.call(this);var r=new wf({z2:2}),o=new Tf,a=new yf;this.add(r),this.add(o),this.add(a),this.updateData(t,e,!0),this.on("emphasis",n).on("normal",i).on("mouseover",n).on("mouseout",i)}function vu(t,e,n,i,r,o,a){function s(e,n){for(var i=e;i>=0&&(t[i].y-=n,!(i>0&&t[i].y>t[i-1].y+t[i-1].height));i--);}function l(t,e,n,i,r,o){for(var a=e?Number.MAX_VALUE:0,s=0,l=t.length;s<l;s++)if("center"!==t[s].position){var u=Math.abs(t[s].y-i),c=t[s].len,h=t[s].len2,f=u<r+c?Math.sqrt((r+c+h)*(r+c+h)-u*u):Math.abs(t[s].x-n);e&&f>=a&&(f=a-10),!e&&f<=a&&(f=a+10),t[s].x=n+f*o,a=f}}t.sort(function(t,e){return t.y-e.y});for(var u,c=0,h=t.length,f=[],d=[],p=0;p<h;p++)(u=t[p].y-c)<0&&function(e,n,i,r){for(var o=e;o<n;o++)if(t[o].y+=i,o>e&&o+1<n&&t[o+1].y>t[o].y+t[o].height)return void s(o,i/2);s(n-1,i/2)}(p,h,-u),c=t[p].y+t[p].height;for(a-c<0&&s(h-1,c-a),p=0;p<h;p++)t[p].y>=n?d.push(t[p]):f.push(t[p]);l(f,!1,e,n,i,r),l(d,!0,e,n,i,r)}function mu(t,e,n,i,r,o){for(var a=[],s=[],l=0;l<t.length;l++)t[l].x<e?a.push(t[l]):s.push(t[l]);for(vu(s,e,n,i,1,r,o),vu(a,e,n,i,-1,r,o),l=0;l<t.length;l++){var u=t[l].linePoints;if(u){var c=u[1][0]-u[2][0];t[l].x<e?u[2][0]=t[l].x+3:u[2][0]=t[l].x-3,u[1][1]=u[2][1]=t[l].y,u[1][0]=u[2][0]+c}}}var yu=2311,_u=function(){return yu++},xu="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof n&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var i={},r={},o=t.match(/Firefox\/([\d.]+)/),a=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),s=t.match(/Edge\/([\d.]+)/),l=/micromessenger/i.test(t);return o&&(r.firefox=!0,r.version=o[1]),a&&(r.ie=!0,r.version=a[1]),s&&(r.edge=!0,r.version=s[1]),l&&(r.weChat=!0),{browser:r,os:i,node:!1,canvasSupported:!!n.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in e&&!r.ie&&!r.edge,pointerEventsSupported:"onpointerdown"in e&&(r.edge||r.ie&&r.version>=11)}}(navigator.userAgent),bu={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},wu={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},Su=Object.prototype.toString,Mu=Array.prototype,Cu=Mu.forEach,ku=Mu.filter,Tu=Mu.slice,Iu=Mu.map,Du=Mu.reduce,Au={},Ou=function(){return Au.createCanvas()};Au.createCanvas=function(){return n.createElement("canvas")};var Pu,Lu="__ec_primitive__";R.prototype={constructor:R,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=y(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}};var Eu="undefined"==typeof Float32Array?Array:Float32Array,Nu=X,Bu=function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])};J.prototype={constructor:J,_dragStart:function(t){var e=t.target;e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(Q(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var n=t.offsetX,i=t.offsetY,r=n-this._x,o=i-this._y;this._x=n,this._y=i,e.drift(r,o,t),this.dispatchToElement(Q(e,t),"drag",t.event);var a=this.findHover(n,i,e).target,s=this._dropTarget;this._dropTarget=a,e!==a&&(s&&a!==s&&this.dispatchToElement(Q(s,t),"dragleave",t.event),a&&a!==s&&this.dispatchToElement(Q(a,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(Q(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(Q(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var Ru=Array.prototype.slice,zu=function(){this._$handlers={}};zu.prototype={constructor:zu,one:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers;if(!e||!t)return this;i[t]||(i[t]=[]);for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this;return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(n[t]){for(var i=[],r=0,o=n[t].length;r<o;r++)n[t][r].h!=e&&i.push(n[t][r]);n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t];return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>3&&(e=Ru.call(e,1));for(var i=this._$handlers[t],r=i.length,o=0;o<r;){switch(n){case 1:i[o].h.call(i[o].ctx);break;case 2:i[o].h.call(i[o].ctx,e[1]);break;case 3:i[o].h.call(i[o].ctx,e[1],e[2]);break;default:i[o].h.apply(i[o].ctx,e)}i[o].one?(i.splice(o,1),r--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,n=e.length;n>4&&(e=Ru.call(e,1,e.length-1));for(var i=e[e.length-1],r=this._$handlers[t],o=r.length,a=0;a<o;){switch(n){case 1:r[a].h.call(i);break;case 2:r[a].h.call(i,e[1]);break;case 3:r[a].h.call(i,e[1],e[2]);break;default:r[a].h.apply(i,e)}r[a].one?(r.splice(a,1),o--):a++}}return this}};var $u="silent";et.prototype.dispose=function(){};var Fu=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],ju=function(t,e,n,i){zu.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new et,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,J.call(this),this.setHandlerProxy(n)};ju.prototype={constructor:ju,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(p(Fu,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target;r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target);var o=this._hovered=this.findHover(e,n),a=o.target,s=this.proxy;s.setCursor&&s.setCursor(a?a.cursor:"default"),r&&a!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(o,"mousemove",t),a&&a!==r&&this.dispatchToElement(o,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t);var e,n=t.toElement||t.relatedTarget;do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot));!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t];n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy;e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target;if(!i||!i.silent){for(var r="on"+e,o=tt(e,t,n);i&&(i[r]&&(o.cancelBubble=i[r].call(i,o)),i.trigger(e,o),i=i.parent,!o.cancelBubble););o.cancelBubble||(this.trigger(e,o),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,o),t.trigger&&t.trigger(e,o)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},o=i.length-1;o>=0;o--){var a;if(i[o]!==n&&!i[o].ignore&&(a=nt(i[o],t,e))&&(!r.topTarget&&(r.topTarget=i[o]),a!==$u)){r.target=i[o];break}}return r}},p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){ju.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target;if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i;else if("mouseup"===t)this._upEl=i;else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||Nu(this._downPoint,[e.zrX,e.zrY])>4)return;this._downPoint=null}this.dispatchToElement(n,t,e)}}),f(ju,zu),f(ju,J);var Vu="undefined"==typeof Float32Array?Array:Float32Array,Wu=rt,Hu=5e-5,Gu=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},Uu=Gu.prototype;Uu.transform=null,Uu.needLocalTransform=function(){return ht(this.rotation)||ht(this.position[0])||ht(this.position[1])||ht(this.scale[0]-1)||ht(this.scale[1]-1)},Uu.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),i=this.transform;n||e?(i=i||it(),n?this.getLocalTransform(i):Wu(i),e&&(n?at(i,t.transform,i):ot(i,t.transform)),this.transform=i,this.invTransform=this.invTransform||it(),ct(this.invTransform,i)):i&&Wu(i)},Uu.getLocalTransform=function(t){return Gu.getLocalTransform(this,t)},Uu.setTransform=function(t){var e=this.transform,n=t.dpr||1;e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},Uu.restoreTransform=function(t){var e=t.dpr||1;t.setTransform(e,0,0,e,0,0)};var qu=[];Uu.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform;t&&t.transform&&(at(qu,t.invTransform,e),e=qu);var n=e[0]*e[0]+e[1]*e[1],i=e[2]*e[2]+e[3]*e[3],r=this.position,o=this.scale;ht(n-1)&&(n=Math.sqrt(n)),ht(i-1)&&(i=Math.sqrt(i)),e[0]<0&&(n=-n),e[3]<0&&(i=-i),r[0]=e[4],r[1]=e[5],o[0]=n,o[1]=i,this.rotation=Math.atan2(-e[1]/i,e[0]/n)}},Uu.getGlobalScale=function(){var t=this.transform;if(!t)return[1,1];var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},Uu.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform;return i&&Y(n,n,i),n},Uu.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform;return i&&Y(n,n,i),n},Gu.getLocalTransform=function(t,e){Wu(e=e||[]);var n=t.origin,i=t.scale||[1,1],r=t.rotation||0,o=t.position||[0,0];return n&&(e[4]-=n[0],e[5]-=n[1]),ut(e,e,i),r&&lt(e,e,r),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=o[0],e[5]+=o[1],e};var Xu={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-Xu.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*Xu.bounceIn(2*t):.5*Xu.bounceOut(2*t-1)+.5}};ft.prototype={constructor:ft,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var n=(t-this._startTime-this._pausedTime)/this._life;if(!(n<0)){n=Math.min(n,1);var i=this.easing,r="string"==typeof i?Xu[i]:i,o="function"==typeof r?r(n):n;return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var Yu=function(){this.head=null,this.tail=null,this._len=0},Zu=Yu.prototype;Zu.insert=function(t){var e=new Ku(t);return this.insertEntry(e),e},Zu.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},Zu.remove=function(t){var e=t.prev,n=t.next;e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},Zu.len=function(){return this._len},Zu.clear=function(){this.head=this.tail=null,this._len=0};var Ku=function(t){this.value=t,this.next,this.prev},Ju=function(t){this._list=new Yu,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},Qu=Ju.prototype;Qu.put=function(t,e){var n=this._list,i=this._map,r=null;if(null==i[t]){var o=n.len(),a=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var s=n.head;n.remove(s),delete i[s.key],r=s.value,this._lastRemovedEntry=s}a?a.value=e:a=new Ku(e),a.key=t,n.insertEntry(a),i[t]=a}return r},Qu.get=function(t){var e=this._map[t],n=this._list;if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},Qu.clear=function(){this._list.clear(),this._map={}};var tc={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]},ec=new Ju(20),nc=null,ic=Array.prototype.slice,rc=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||Ct,this._setter=i||kt,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};rc.prototype={when:function(t,e){var n=this._tracks;for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[];var r=this._getter(this._target,i);if(null==r)continue;0!==t&&n[i].push({time:0,value:Et(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0;for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var a=Rt(this,t,function(){--r||i._doneCallback()},this._tracks[o],o,e);a&&(this._clipList.push(a),r++,this.animation&&this.animation.addClip(a),n=a)}if(n){var s=n.onframe;n.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i];t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var oc=1;"undefined"!=typeof e&&(oc=Math.max(e.devicePixelRatio||1,1));var ac=oc,sc=function(){},lc=sc,uc=function(){this.animators=[]};uc.prototype={constructor:uc,animate:function(t,e){var n,i=!1,r=this,o=this.__zr;if(t){var a=t.split("."),s=r;i="shape"===a[0];for(var l=0,u=a.length;l<u;l++)s&&(s=s[a[l]]);s&&(n=s)}else n=r;if(n){var h=r.animators,f=new rc(n,e);return f.during(function(t){r.dirty(i)}).done(function(){h.splice(c(h,f),1)}),h.push(f),o&&o.animation.addAnimator(f),f}lc('Property "'+t+'" is not existed in element '+r.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t);return e.length=0,this},animateTo:function(t,e,n,i,r,o){w(n)?(r=i,i=n,n=0):b(i)?(r=i,i="linear",n=0):b(n)?(r=n,n=0):b(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n);var a=this.animators.slice(),s=a.length;s||r&&r();for(var l=0;l<a.length;l++)a[l].done(function(){--s||r&&r()}).start(i,o)},_animateToShallow:function(t,e,n,i,r){var o={},a=0;for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])S(n[s])&&!d(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(o[s]=n[s],a++);else if(null!=n[s])if(t){var l={};l[t]={},l[t][s]=n[s],this.attr(l)}else this.attr(s,n[s]);return a>0&&this.animate(t,!1).when(null==i?500:i,o).delay(r||0),this}};var cc=function(t){Gu.call(this,t),zu.call(this,t),uc.call(this,t),this.id=t.id||_u()};cc.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0;break;case"vertical":t=0}var n=this.transform;n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t];n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e);else if(S(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n]);return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},f(cc,uc),f(cc,Gu),f(cc,zu);var hc=Y,fc=Math.min,dc=Math.max;zt.prototype={constructor:zt,union:function(t){var e=fc(t.x,this.x),n=fc(t.y,this.y);this.width=dc(t.x+t.width,this.x+this.width)-e,this.height=dc(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[];return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,hc(t,t,r),hc(e,e,r),hc(n,n,r),hc(i,i,r),this.x=fc(t[0],e[0],n[0],i[0]),this.y=fc(t[1],e[1],n[1],i[1]);var o=dc(t[0],e[0],n[0],i[0]),a=dc(t[1],e[1],n[1],i[1]);this.width=o-this.x,this.height=a-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,r=it();return st(r,r,[-e.x,-e.y]),ut(r,r,[n,i]),st(r,r,[t.x,t.y]),r},intersect:function(t){if(!t)return!1;t instanceof zt||(t=zt.create(t));var e=this,n=e.x,i=e.x+e.width,r=e.y,o=e.y+e.height,a=t.x,s=t.x+t.width,l=t.y,u=t.y+t.height;return!(i<a||s<n||o<l||u<r)},contain:function(t,e){var n=this;return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},clone:function(){return new zt(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},zt.create=function(t){return new zt(t.x,t.y,t.width,t.height)};var pc=function(t){for(var e in t=t||{},cc.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e]);this._children=[],this.__storage=null,this.__dirty=!0};pc.prototype={constructor:pc,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e);i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this;var e=this.__storage,n=this.__zr;e&&e!==t.__storage&&(e.addToStorage(t),t instanceof pc&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,i=this._children,r=c(i,t);return r<0?this:(i.splice(r,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof pc&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage;for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof pc&&t.delChildrenFromStorage(i)),t.parent=null;return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i];t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n];t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.addToStorage(n),n instanceof pc&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e];t.delFromStorage(n),n instanceof pc&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new zt(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var a=i[o];if(!a.ignore&&!a.invisible){var s=a.getBoundingRect(),l=a.getLocalTransform(r);l?(n.copy(s),n.applyTransform(l),(e=e||n.clone()).union(n)):(e=e||s.clone()).union(s)}}return e||n}},h(pc,cc);var gc=32,vc=7,mc=function(){this._roots=[],this._displayList=[],this._displayListLen=0};mc.prototype={constructor:mc,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0;for(var e=this._roots,n=this._displayList,i=0,r=e.length;i<r;i++)this._updateAndAddDisplayable(e[i],null,t);n.length=this._displayListLen,xu.canvasSupported&&Ut(n,qt)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate();var i=t.clipPath;if(i){e=e?e.slice():[];for(var r=i,o=t;r;)r.parent=o,r.updateTransform(),e.push(r),o=r,r=r.clipPath}if(t.isGroup){for(var a=t._children,s=0;s<a.length;s++){var l=a[s];t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof pc&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(n=0;n<this._roots.length;n++){var e=this._roots[n];e instanceof pc&&e.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var n=0,i=t.length;n<i;n++)this.delRoot(t[n]);else{var r=c(this._roots,t);r>=0&&(this.delFromStorage(t),this._roots.splice(r,1),t instanceof pc&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:qt};var yc={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1},_c=function(t,e,n){return yc.hasOwnProperty(e)?n*=t.dpr:n},xc=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],bc=function(t,e){this.extendFrom(t,!1),this.host=e};bc.prototype={constructor:bc,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var i=this,r=n&&n.style,o=!r,a=0;a<xc.length;a++){var s=xc[a],l=s[0];(o||i[l]!==r[l])&&(t[l]=_c(t,l,i[l]||s[1]))}if((o||i.fill!==r.fill)&&(t.fillStyle=i.fill),(o||i.stroke!==r.stroke)&&(t.strokeStyle=i.stroke),(o||i.opacity!==r.opacity)&&(t.globalAlpha=null==i.opacity?1:i.opacity),(o||i.blend!==r.blend)&&(t.globalCompositeOperation=i.blend||"source-over"),this.hasStroke()){var u=i.lineWidth;t.lineWidth=u/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill;return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke;return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?Yt:Xt)(t,e,n),r=e.colorStops,o=0;o<r.length;o++)i.addColorStop(r[o].offset,r[o].color);return i}};for(var wc=bc.prototype,Sc=0;Sc<xc.length;Sc++){var Mc=xc[Sc];Mc[0]in wc||(wc[Mc[0]]=Mc[1])}bc.getGradient=wc.getGradient;var Cc=function(t,e){this.image=t,this.repeat=e,this.type="pattern"};Cc.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")};var kc=function(t,e,n){var i;n=n||ac,"string"==typeof t?i=Kt(t,e,n):S(t)&&(t=(i=t).id),this.id=t,this.dom=i;var r=i.style;r&&(i.onselectstart=Zt,r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",r["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",r.padding=0,r.margin=0,r["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n};kc.prototype={constructor:kc,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr;this.domBack=Kt("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,o=this.domBack;r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,o&&(o.width=t*n,o.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,o=i.width,a=i.height,s=(e=e||this.clearColor,this.motionBlur&&!t),l=this.lastFrameAlpha,u=this.dpr;(s&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,o/u,a/u)),r.clearRect(0,0,o,a),e&&"transparent"!==e)&&(e.colorStops?(n=e.__canvasGradient||bc.getGradient(r,e,{x:0,y:0,width:o,height:a}),e.__canvasGradient=n):e.image&&(n=Cc.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,o,a),r.restore());if(s){var c=this.domBack;r.save(),r.globalAlpha=l,r.drawImage(c,0,0,o,a),r.restore()}}};var Tc="undefined"!=typeof e&&(e.requestAnimationFrame&&e.requestAnimationFrame.bind(e)||e.msRequestAnimationFrame&&e.msRequestAnimationFrame.bind(e)||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},Ic=new Ju(50),Dc={},Ac=0,Oc=5e3,Pc=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,Lc="12px sans-serif",Ec={measureText:function(t,e){var n=u();return n.font=e||Lc,n.measureText(t)}},Nc={left:1,right:1,center:1},Bc={top:1,bottom:1,middle:1},Rc=new zt,zc=function(){};zc.prototype={constructor:zc,drawRectText:function(t,e){var n=this.style;e=n.textRect||e,this.__dirty&&xe(n);var i=n.text;if(null!=i&&(i+=""),Re(i,n)){t.save();var r=this.transform;n.transformText?this.setTransform(t):r&&(Rc.copy(e),Rc.applyTransform(r),e=Rc),we(this,t,i,n,e),t.restore()}}},ze.prototype={constructor:ze,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e);return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?cc.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new bc(t,this),this.dirty(!1),this}},h(ze,cc),f(ze,zc),$e.prototype={constructor:$e,type:"image",brush:function(t,e){var n=this.style,i=n.image;n.bind(t,this,e);var r=this._image=Qt(i,this._image,this,this.onload);if(r&&ee(r)){var o=n.x||0,a=n.y||0,s=n.width,l=n.height,u=r.width/r.height;if(null==s&&null!=l?s=l*u:null==l&&null!=s?l=s/u:null==s&&null==l&&(s=r.width,l=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,h=n.sy||0;t.drawImage(r,c,h,n.sWidth,n.sHeight,o,a,s,l)}else if(n.sx&&n.sy){var f=s-(c=n.sx),d=l-(h=n.sy);t.drawImage(r,c,h,f,d,o,a,s,l)}else t.drawImage(r,o,a,s,l);null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new zt(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},h($e,ze);var $c=new zt(0,0,0,0),Fc=new zt(0,0,0,0),jc=function(t,e,n){this.type="canvas";var i=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase();this._opts=n=s({},n||{}),this.dpr=n.devicePixelRatio||ac,this._singleCanvas=i,this.root=t;var r=t.style;r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]=r["user-select"]=r["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e;var o=this._zlevelList=[],a=this._layers={};if(this._layerConfig={},this._needsManuallyCompositing=!1,i){var l=t.width,u=t.height;null!=n.width&&(l=n.width),null!=n.height&&(u=n.height),this.dpr=n.devicePixelRatio||1,t.width=l*this.dpr,t.height=u*this.dpr,this._width=l,this._height=u;var c=new kc(t,this,this.dpr);c.__builtin__=!0,c.initContext(),a[314159]=c,c.zlevel=314159,o.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1);var h=this._domRoot=Ge(this._width,this._height);t.appendChild(h)}this._hoverlayer=null,this._hoverElements=[]};jc.prototype={constructor:jc,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList;this._redrawId=Math.random(),this._paintList(e,t,this._redrawId);for(var i=0;i<n.length;i++){var r=n[i],o=this._layers[r];if(!o.__builtin__&&o.refresh){var a=0===i?this._backgroundColor:null;o.refresh(a)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape});n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=c(n,e);i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from;i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer;if(n&&n.clear(),e){Ut(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5));var i={};n.ctx.save();for(var r=0;r<e;){var o=t[r],a=o.__from;a&&a.__zr?(r++,a.invisible||(o.transform=a.transform,o.invTransform=a.invTransform,o.__clipPaths=a.__clipPaths,this._doPaintEl(o,n,!0,i))):(t.splice(r,1),a.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t);var i=this._doPaintList(t,e);if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this;Tc(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height;t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];(s=this._layers[r]).__builtin__&&s!==this._hoverlayer&&(s.__dirty||e)&&n.push(s)}for(var o=!0,a=0;a<n.length;a++){var s=n[a],l=s.ctx,u={};l.save();var c=e?s.__startIndex:s.__drawIndex,h=!e&&s.incremental&&Date.now,f=h&&Date.now(),d=s.zlevel===this._zlevelList[0]?this._backgroundColor:null;if(s.__startIndex===s.__endIndex)s.clear(!1,d);else if(c===s.__startIndex){var g=t[c];g.incremental&&g.notClear&&!e||s.clear(!1,d)}-1===c&&(console.error("For some unknown reason. drawIndex is -1"),c=s.__startIndex);for(var v=c;v<s.__endIndex;v++){var m=t[v];if(this._doPaintEl(m,s,e,u),m.__dirty=!1,h&&Date.now()-f>15)break}s.__drawIndex=v,s.__drawIndex<s.__endIndex&&(o=!1),u.prevElClipPaths&&l.restore(),l.restore()}return xu.wxa&&p(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),o},_doPaintEl:function(t,e,n,i){var r=e.ctx,o=t.transform;if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!o||o[0]||o[3])&&(!t.culling||!Ve(t,this._width,this._height))){var a=t.__clipPaths;i.prevElClipPaths&&!We(a,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),a&&(r.save(),He(a,r),i.prevElClipPaths=a)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159);var n=this._layers[t];return n||((n=new kc("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&o(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,a=-1,s=this._domRoot;if(n[t])lc("ZLevel "+t+" has been used already");else if(je(e)){if(r>0&&t>i[0]){for(a=0;a<r-1&&!(i[a]<t&&i[a+1]>t);a++);o=n[i[a]]}if(i.splice(a+1,0,t),n[t]=e,!e.virtual)if(o){var l=o.dom;l.nextSibling?s.insertBefore(e.dom,l.nextSibling):s.appendChild(e.dom)}else s.firstChild?s.insertBefore(e.dom,s.firstChild):s.appendChild(e.dom)}else lc("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList;for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,o=this._zlevelList;for(r=0;r<o.length;r++)i=o[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){n&&(n.__endIndex!==t&&(n.__dirty=!0),n.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(r=1;r<t.length;r++)if((a=t[r]).zlevel!==t[r-1].zlevel||a.incremental){this._needsManuallyCompositing=!0;break}for(var n=null,i=0,r=0;r<t.length;r++){var o,a=t[r],s=a.zlevel;a.incremental?((o=this.getLayer(s+.001,this._needsManuallyCompositing)).incremental=!0,i=1):o=this.getLayer(s+(i>0?.01:0),this._needsManuallyCompositing),o.__builtin__||lc("ZLevel "+s+" has been used by unkown layer "+o.id),o!==n&&(o.__used=!0,o.__startIndex!==r&&(o.__dirty=!0),o.__startIndex=r,o.incremental?o.__drawIndex=-1:o.__drawIndex=r,e(r),n=o),a.__dirty&&(o.__dirty=!0,o.incremental&&o.__drawIndex<0&&(o.__drawIndex=r))}e(r),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig;n[t]?o(n[t],e,!0):n[t]=e;for(var i=0;i<this._zlevelList.length;i++){var r=this._zlevelList[i];r!==t&&r!==t+.01||o(this._layers[r],n[t],!0)}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t];i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(c(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot;n.style.display="none";var i=this._opts;if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var r in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(r)&&this._layers[r].resize(t,e);p(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return;this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom;var e=new kc("image",this,t.pixelRatio||this.dpr);if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh();var n=e.dom.width,i=e.dom.height,r=e.ctx;this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var o={},a=this.storage.getDisplayList(!0),s=0;s<a.length;s++){var l=a[s];this._doPaintEl(l,e,!0,o)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,i=["width","height"][t],r=["clientWidth","clientHeight"][t],o=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t];if(null!=e[i]&&"auto"!==e[i])return parseFloat(e[i]);var s=this.root,l=n.defaultView.getComputedStyle(s);return(s[r]||Fe(l[i])||Fe(s.style[i]))-(Fe(l[o])||0)-(Fe(l[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr;var i=n.createElement("canvas"),r=i.getContext("2d"),o=t.getBoundingRect(),a=t.style,s=a.shadowBlur*e,l=a.shadowOffsetX*e,u=a.shadowOffsetY*e,c=a.hasStroke()?a.lineWidth:0,h=Math.max(c/2,-l+s),f=Math.max(c/2,l+s),d=Math.max(c/2,-u+s),p=Math.max(c/2,u+s),g=o.width+h+f,v=o.height+d+p;i.width=g*e,i.height=v*e,r.scale(e,e),r.clearRect(0,0,g,v),r.dpr=e;var m={position:t.position,rotation:t.rotation,scale:t.scale};t.position=[h-o.x,d-o.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(r);var y=new $e({style:{x:0,y:0,image:i}});return null!=m.position&&(y.position=t.position=m.position),null!=m.rotation&&(y.rotation=t.rotation=m.rotation),null!=m.scale&&(y.scale=t.scale=m.scale),y}};var Vc="undefined"!=typeof e&&!!e.addEventListener,Wc=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Hc=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,zu.call(this)};Hc.prototype={constructor:Hc,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=c(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],o=[],a=0;a<i;a++){var s=n[a],l=s.step(t,e);l&&(r.push(l),o.push(s))}for(a=0;a<i;)n[a]._needsRemove?(n[a]=n[i-1],n.pop(),i--):a++;for(i=r.length,a=0;a<i;a++)o[a].fire(r[a]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){function t(){e._running&&(Tc(t),!e._paused&&e._update())}var e=this;this._running=!0,Tc(t)},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new rc(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(n),n}},f(Hc,zu);var Gc=function(){this._track=[]};Gc.prototype={constructor:Gc,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var i=t.touches;if(i){for(var r={points:[],touches:[],target:e,event:t},o=0,a=i.length;o<a;o++){var s=i[o],l=qe(n,s,{});r.points.push([l.zrX,l.zrY]),r.touches.push(s)}this._track.push(r)}},_recognize:function(t){for(var e in Uc)if(Uc.hasOwnProperty(e)){var n=Uc[e](this._track,t);if(n)return n}}};var Uc={pinch:function(t,e){var n=t.length;if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i;if(r&&r.length>1&&i&&i.length>1){var o=Je(i)/Je(r);!isFinite(o)&&(o=1),e.pinchScale=o;var a=Qe(i);return e.pinchX=a[0],e.pinchY=a[1],{type:"pinch",target:t[0].target,event:e}}}}},qc=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],Xc=["touchstart","touchend","touchmove"],Yc={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},Zc=g(qc,function(t){var e=t.replace("mouse","pointer");return Yc[e]?e:t}),Kc={mousemove:function(t){t=Ye(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=Ye(this.dom,t)).toElement||t.relatedTarget;if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return;e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,en(this,t,"start"),Kc.mousemove.call(this,t),Kc.mousedown.call(this,t),nn(this)},touchmove:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,en(this,t,"change"),Kc.mousemove.call(this,t),nn(this)},touchend:function(t){(t=Ye(this.dom,t)).zrByTouch=!0,en(this,t,"end"),Kc.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&Kc.click.call(this,t),nn(this)},pointerdown:function(t){Kc.mousedown.call(this,t)},pointermove:function(t){rn(t)||Kc.mousemove.call(this,t)},pointerup:function(t){Kc.mouseup.call(this,t)},pointerout:function(t){rn(t)||Kc.mouseout.call(this,t)}};p(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){Kc[t]=function(e){e=Ye(this.dom,e),this.trigger(t,e)}});var Jc=an.prototype;Jc.dispose=function(){for(var t=qc.concat(Xc),e=0;e<t.length;e++){var n=t[e];Ke(this.dom,tn(n),this._handlers[n])}},Jc.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},f(an,zu);var Qc=!xu.canvasSupported,th={canvas:jc},eh=function(t,e,n){n=n||{},this.dom=e,this.id=t;var i=this,r=new mc,o=n.renderer;if(Qc){if(!th.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");o="vml"}else o&&th[o]||(o="canvas");var a=new th[o](e,r,n,t);this.storage=r,this.painter=a;var s=xu.node||xu.worker?null:new an(a.getViewportRoot());this.handler=new ju(r,a,s,a.root),this.animation=new Hc({stage:{update:y(this.flush,this)}}),this.animation.start(),this._needsRefresh;var l=r.delFromStorage,u=r.addToStorage;r.delFromStorage=function(t){l.call(r,t),t&&t.removeSelfFromZr(i)},r.addToStorage=function(t){u.call(r,t),t.addSelfToZr(i)}};eh.prototype={constructor:eh,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t;this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null}};var nh=p,ih=S,rh=x,oh="series\0",ah=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],sh=0,lh=".",uh="___EC__COMPONENT__CONTAINER___",ch=0,hh=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0]);return function(e,n,i){for(var r={},o=0;o<t.length;o++){var a=t[o][1];if(!(n&&c(n,a)>=0||i&&c(i,a)<0)){var s=e.getShallow(a);null!=s&&(r[t[o][0]]=s)}}return r}},fh=hh([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),dh={getLineStyle:function(t){var e=fh(this,t),n=this.getLineDash(e.lineWidth);return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1);var e=this.get("type"),n=Math.max(t,2),i=4*t;return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}},ph=hh([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),gh={getAreaStyle:function(t,e){return ph(this,t,e)}},vh=Math.pow,mh=Math.sqrt,yh=1e-8,_h=1e-4,xh=mh(3),bh=1/3,wh=F(),Sh=F(),Mh=F(),Ch=Math.min,kh=Math.max,Th=Math.sin,Ih=Math.cos,Dh=2*Math.PI,Ah=F(),Oh=F(),Ph=F(),Lh=[],Eh=[],Nh={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},Bh=[],Rh=[],zh=[],$h=[],Fh=Math.min,jh=Math.max,Vh=Math.cos,Wh=Math.sin,Hh=Math.sqrt,Gh=Math.abs,Uh="undefined"!=typeof Float32Array,qh=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null};qh.prototype={constructor:qh,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=Gh(1/ac/t)||0,this._uy=Gh(1/ac/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(Nh.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=Gh(t-this._xi)>this._ux||Gh(e-this._yi)>this._uy||this._len<5;return this.addData(Nh.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,o){return this.addData(Nh.C,t,e,n,i,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,o):this._ctx.bezierCurveTo(t,e,n,i,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,n,i){return this.addData(Nh.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,o){return this.addData(Nh.A,t,e,n,n,i,r-i,0,o?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,o),this._xi=Vh(r)*n+t,this._yi=Wh(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(Nh.R,t,e,n,i),this},closePath:function(){this.addData(Nh.Z);var t=this._ctx,e=this._x0,n=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,n=0;n<t.length;n++)e+=t[n];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length;this.data&&this.data.length==e||!Uh||(this.data=new Float32Array(e));for(var n=0;n<e;n++)this.data[n]=t[n];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len();for(Uh&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var o=t[r].data,a=0;a<o.length;a++)this.data[i++]=o[a];this._len=i},addData:function(t){if(this._saveData){var e=this.data;this._len+arguments.length>e.length&&(this._expandData(),e=this.data);for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n];this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,o=this._dashOffset,a=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,c=t-l,h=e-u,f=Hh(c*c+h*h),d=l,p=u,g=a.length;for(c/=f,h/=f,o<0&&(o=r+o),d-=(o%=r)*c,p-=o*h;c>0&&d<=t||c<0&&d>=t||0==c&&(h>0&&p<=e||h<0&&p>=e);)d+=c*(n=a[i=this._dashIdx]),p+=h*n,this._dashIdx=(i+1)%g,c>0&&d<l||c<0&&d>l||h>0&&p<u||h<0&&p>u||s[i%2?"moveTo":"lineTo"](c>=0?Fh(d,t):jh(d,t),h>=0?Fh(p,e):jh(p,e));c=d-t,h=p-e,this._dashOffset=-Hh(c*c+h*h)},_dashedBezierTo:function(t,e,n,i,r,o){var a,s,l,u,c,h=this._dashSum,f=this._dashOffset,d=this._lineDash,p=this._ctx,g=this._xi,v=this._yi,m=On,y=0,_=this._dashIdx,x=d.length,b=0;for(f<0&&(f=h+f),f%=h,a=0;a<1;a+=.1)s=m(g,t,n,r,a+.1)-m(g,t,n,r,a),l=m(v,e,i,o,a+.1)-m(v,e,i,o,a),y+=Hh(s*s+l*l);for(;_<x&&!((b+=d[_])>f);_++);for(a=(b-f)/y;a<=1;)u=m(g,t,n,r,a),c=m(v,e,i,o,a),_%2?p.moveTo(u,c):p.lineTo(u,c),a+=d[_]/y,_=(_+1)%x;_%2!=0&&p.lineTo(r,o),s=r-u,l=o-c,this._dashOffset=-Hh(s*s+l*l)},_dashedQuadraticTo:function(t,e,n,i){var r=n,o=i;n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,o)},toStatic:function(){var t=this.data;t instanceof Array&&(t.length=this._len,Uh&&(this.data=new Float32Array(t)))},getBoundingRect:function(){Bh[0]=Bh[1]=zh[0]=zh[1]=Number.MAX_VALUE,Rh[0]=Rh[1]=$h[0]=$h[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,n=0,i=0,r=0,o=0;o<t.length;){var a=t[o++];switch(1==o&&(i=e=t[o],r=n=t[o+1]),a){case Nh.M:e=i=t[o++],n=r=t[o++],zh[0]=i,zh[1]=r,$h[0]=i,$h[1]=r;break;case Nh.L:Wn(e,n,t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.C:Hn(e,n,t[o++],t[o++],t[o++],t[o++],t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.Q:Gn(e,n,t[o++],t[o++],t[o],t[o+1],zh,$h),e=t[o++],n=t[o++];break;case Nh.A:var s=t[o++],l=t[o++],u=t[o++],c=t[o++],h=t[o++],f=t[o++]+h,d=(t[o++],1-t[o++]);1==o&&(i=Vh(h)*u+s,r=Wh(h)*c+l),Un(s,l,u,c,h,f,d,zh,$h),e=Vh(f)*u+s,n=Wh(f)*c+l;break;case Nh.R:Wn(i=e=t[o++],r=n=t[o++],i+t[o++],r+t[o++],zh,$h);break;case Nh.Z:e=i,n=r}Z(Bh,Bh,zh),K(Rh,Rh,$h)}return 0===o&&(Bh[0]=Bh[1]=Rh[0]=Rh[1]=0),new zt(Bh[0],Bh[1],Rh[0]-Bh[0],Rh[1]-Bh[1])},rebuildPath:function(t){for(var e,n,i,r,o,a,s=this.data,l=this._ux,u=this._uy,c=this._len,h=0;h<c;){var f=s[h++];switch(1==h&&(e=i=s[h],n=r=s[h+1]),f){case Nh.M:e=i=s[h++],n=r=s[h++],t.moveTo(i,r);break;case Nh.L:o=s[h++],a=s[h++],(Gh(o-i)>l||Gh(a-r)>u||h===c-1)&&(t.lineTo(o,a),i=o,r=a);break;case Nh.C:t.bezierCurveTo(s[h++],s[h++],s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Nh.Q:t.quadraticCurveTo(s[h++],s[h++],s[h++],s[h++]),i=s[h-2],r=s[h-1];break;case Nh.A:var d=s[h++],p=s[h++],g=s[h++],v=s[h++],m=s[h++],y=s[h++],_=s[h++],x=s[h++],b=g>v?g:v,w=g>v?1:g/v,S=g>v?v/g:1,M=m+y;Math.abs(g-v)>.001?(t.translate(d,p),t.rotate(_),t.scale(w,S),t.arc(0,0,b,m,M,1-x),t.scale(1/w,1/S),t.rotate(-_),t.translate(-d,-p)):t.arc(d,p,b,m,M,1-x),1==h&&(e=Vh(m)*g+d,n=Wh(m)*v+p),i=Vh(M)*g+d,r=Wh(M)*v+p;break;case Nh.R:e=i=s[h],n=r=s[h+1],t.rect(s[h++],s[h++],s[h++],s[h++]);break;case Nh.Z:t.closePath(),i=e,r=n}}}},qh.CMD=Nh;var Xh=2*Math.PI,Yh=2*Math.PI,Zh=qh.CMD,Kh=2*Math.PI,Jh=1e-4,Qh=[-1,-1,-1],tf=[-1,-1],ef=Cc.prototype.getCanvasPattern,nf=Math.abs,rf=new qh(!0);si.prototype={constructor:si,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||rf,o=i.hasStroke(),a=i.hasFill(),s=i.fill,l=i.stroke,u=a&&!!s.colorStops,c=o&&!!l.colorStops,h=a&&!!s.image,f=o&&!!l.image;(i.bind(t,this,e),this.setTransform(t),this.__dirty)&&(u&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,s,n)),c&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,l,n)));u?t.fillStyle=this._fillGradient:h&&(t.fillStyle=ef.call(s,t)),c?t.strokeStyle=this._strokeGradient:f&&(t.strokeStyle=ef.call(l,t));var d=i.lineDash,p=i.lineDashOffset,g=!!t.setLineDash,v=this.getGlobalScale();r.setScale(v[0],v[1]),this.__dirtyPath||d&&!g&&o?(r.beginPath(t),d&&!g&&(r.setLineDash(d),r.setLineDashOffset(p)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),a&&r.fill(t),d&&g&&(t.setLineDash(d),t.lineDashOffset=p),o&&r.stroke(t),d&&g&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new qh},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t;if(n){var i=this.path;i||(i=this.path=new qh),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone());if(this.__dirty||n){r.copy(t);var o=e.lineWidth,a=e.strokeNoScale?this.getLineScale():1;e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),a>1e-10&&(r.width+=o/a,r.height+=o/a,r.x-=o/a/2,r.y-=o/a/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style;if(t=n[0],e=n[1],i.contain(t,e)){var o=this.path.data;if(r.hasStroke()){var a=r.lineWidth,s=r.strokeNoScale?this.getLineScale():1;if(s>1e-10&&(r.hasFill()||(a=Math.max(a,this.strokeContainThreshold)),ai(o,a/s,t,e)))return!0}if(r.hasFill())return oi(o,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):ze.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape;if(n){if(S(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);else n[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this.transform;return t&&nf(t[0]-1)>1e-10&&nf(t[3]-1)>1e-10?Math.sqrt(nf(t[0]*t[3]-t[2]*t[1])):1}},si.extend=function(t){var e=function(e){si.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var n=t.shape;if(n){this.shape=this.shape||{};var i=this.shape;for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)};for(var n in h(e,si),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n]);return e},h(si,ze);var of=qh.CMD,af=[[],[],[]],sf=Math.sqrt,lf=Math.atan2,uf=function(t,e){var n,i,r,o,a,s,l=t.data,u=of.M,c=of.C,h=of.L,f=of.R,d=of.A,p=of.Q;for(r=0,o=0;r<l.length;){switch(n=l[r++],o=r,i=0,n){case u:case h:i=1;break;case c:i=3;break;case p:i=2;break;case d:var g=e[4],v=e[5],m=sf(e[0]*e[0]+e[1]*e[1]),y=sf(e[2]*e[2]+e[3]*e[3]),_=lf(-e[1]/y,e[0]/m);l[r]*=m,l[r++]+=g,l[r]*=y,l[r++]+=v,l[r++]*=m,l[r++]*=y,l[r++]+=_,l[r++]+=_,o=r+=2;break;case f:s[0]=l[r++],s[1]=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1],s[0]+=l[r++],s[1]+=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1]}for(a=0;a<i;a++)(s=af[a])[0]=l[r++],s[1]=l[r++],Y(s,s,e),l[o++]=s[0],l[o++]=s[1]}},cf=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],hf=Math.sqrt,ff=Math.sin,df=Math.cos,pf=Math.PI,gf=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},vf=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(gf(t)*gf(e))},mf=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(vf(t,e))},yf=function(t){ze.call(this,t)};yf.prototype={constructor:yf,type:"text",brush:function(t,e){var n=this.style;this.__dirty&&xe(n),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null;var i=n.text;null!=i&&(i+=""),n.bind(t,this,e),Re(i,n)&&(this.setTransform(t),we(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style;if(this.__dirty&&xe(t),!this._rect){var e=t.text;null!=e?e+="":e="";var n=ie(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich);if(n.x+=t.x||0,n.y+=t.y||0,Le(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth;n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},h(yf,ze);var _f=si.extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}}),xf=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]],bf=function(t){return xu.browser.ie&&xu.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style;if(n)for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.shape,s=o&&o.type;if(a&&("sector"===s&&a.startAngle===a.endAngle||"rect"===s&&(!a.width||!a.height))){for(l=0;l<xf.length;l++)xf[l][2]=i[xf[l][0]],i[xf[l][0]]=xf[l][1];e=!0;break}}if(t.apply(this,arguments),e)for(var l=0;l<xf.length;l++)i[xf[l][0]]=xf[l][2]}:t},wf=si.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:bf(si.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),o=Math.max(e.r,0),a=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(a),c=Math.sin(a);t.moveTo(u*r+n,c*r+i),t.lineTo(u*o+n,c*o+i),t.arc(n,i,o,a,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,a,l),t.closePath()}}),Sf=si.extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI;t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}}),Mf=function(t,e){for(var n=t.length,i=[],r=0,o=1;o<n;o++)r+=X(t[o-1],t[o]);var a=r/2;for(a=a<n?n:a,o=0;o<a;o++){var s,l,u,c=o/(a-1)*(e?n:n-1),h=Math.floor(c),f=c-h,d=t[h%n];e?(s=t[(h-1+n)%n],l=t[(h+1)%n],u=t[(h+2)%n]):(s=t[0===h?h:h-1],l=t[h>n-2?n-1:h+1],u=t[h>n-3?n-1:h+2]);var p=f*f,g=f*p;i.push([di(s[0],d[0],l[0],u[0],f,p,g),di(s[1],d[1],l[1],u[1],f,p,g)])}return i},Cf=function(t,e,n,i){var r,o,a,s,l=[],u=[],c=[],h=[];if(i){a=[1/0,1/0],s=[-1/0,-1/0];for(var f=0,d=t.length;f<d;f++)Z(a,a,t[f]),K(s,s,t[f]);Z(a,a,i[0]),K(s,s,i[1])}for(f=0,d=t.length;f<d;f++){var p=t[f];if(n)r=t[f?f-1:d-1],o=t[(f+1)%d];else{if(0===f||f===d-1){l.push(j(t[f]));continue}r=t[f-1],o=t[f+1]}W(u,o,r),U(u,u,e);var g=X(p,r),v=X(p,o),m=g+v;0!==m&&(g/=m,v/=m),U(c,u,-g),U(h,u,v);var y=V([],p,c),_=V([],p,h);i&&(K(y,y,a),Z(y,y,s),K(_,_,a),Z(_,_,s)),l.push(y),l.push(_)}return n&&l.push(l.shift()),l},kf=si.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){pi(t,e,!0)}}),Tf=si.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){pi(t,e,!1)}}),If=si.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width,o=e.height;e.r?_e(t,e):t.rect(n,i,r,o),t.closePath()}}),Df=si.extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.percent;0!==a&&(t.moveTo(n,i),a<1&&(r=n*(1-a)+r*a,o=i*(1-a)+o*a),t.lineTo(r,o))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}}),Af=[],Of=si.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,o=e.y2,a=e.cpx1,s=e.cpy1,l=e.cpx2,u=e.cpy2,c=e.percent;0!==c&&(t.moveTo(n,i),null==l||null==u?(c<1&&(jn(n,a,r,c,Af),a=Af[1],r=Af[2],jn(i,s,o,c,Af),s=Af[1],o=Af[2]),t.quadraticCurveTo(a,s,r,o)):(c<1&&(Nn(n,a,l,r,c,Af),a=Af[1],l=Af[2],r=Af[3],Nn(i,s,u,o,c,Af),s=Af[1],u=Af[2],o=Af[3]),t.bezierCurveTo(a,s,l,u,r,o)))},pointAt:function(t){return gi(this.shape,t,!1)},tangentAt:function(t){var e=gi(this.shape,t,!0);return q(e,e)}}),Pf=si.extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),o=e.startAngle,a=e.endAngle,s=e.clockwise,l=Math.cos(o),u=Math.sin(o);t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,o,a,!s)}}),Lf=si.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath;this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty();for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),si.prototype.getBoundingRect.call(this)}}),Ef=function(t){this.colorStops=t||[]};Ef.prototype={constructor:Ef,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};var Nf=function(t,e,n,i,r,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,Ef.call(this,r)};Nf.prototype={constructor:Nf},h(Nf,Ef);var Bf=function(t,e,n,i,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=r||!1,Ef.call(this,i)};Bf.prototype={constructor:Bf},h(Bf,Ef),vi.prototype.incremental=!0,vi.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},vi.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},vi.prototype.addDisplayables=function(t,e){e=e||!1;for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},vi.prototype.eachPendingDisplayable=function(t){for(e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e]);for(var e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},vi.prototype.update=function(){for(this.updateTransform(),t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null;for(var t=0;t<this._temporaryDisplayables.length;t++){var e=this._temporaryDisplayables[t];e.parent=this,e.update(),e.parent=null}},vi.prototype.brush=function(t,e){for(n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t);this._cursor=n;for(var n=0;n<this._temporaryDisplayables.length;n++){var i=this._temporaryDisplayables[n];i.beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0};var Rf=[];vi.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new zt(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone();n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(Rf)),t.union(i)}this._rect=t}return this._rect},vi.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e);if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0;return!1},h(vi,ze);var zf=Math.round,$f=Math.max,Ff=Math.min,jf={},Vf=(Object.freeze||Object)({extendShape:mi,extendPath:function(t,e){return fi(t,e)},makePath:yi,makeImage:_i,mergePath:function(t,e){for(var n=[],i=t.length,r=0;r<i;r++){var o=t[r];o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var a=new si(e);return a.createPathProxy(),a.buildPath=function(t){t.appendPath(n);var e=t.getContext();e&&t.rebuildPath(e)},a},resizePath:bi,subPixelOptimizeLine:wi,subPixelOptimizeRect:function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,o=e.width,a=e.height;return e.x=Si(e.x,n,!0),e.y=Si(e.y,n,!0),e.width=Math.max(Si(i+o,n,!1)-e.x,0===o?0:1),e.height=Math.max(Si(r+a,n,!1)-e.y,0===a?0:1),t},subPixelOptimize:Si,setHoverStyle:Bi,setLabelStyle:Ri,setTextStyle:zi,setText:function(t,e,n){var i,r={isRectText:!0};!1===n?i=!0:r.autoColor=n,$i(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},getFont:Gi,updateProps:qi,initProps:Xi,getTransform:function(t,e){for(var n=rt([]);t&&t!==e;)at(n,t.getLocalTransform(),n),t=t.parent;return n},applyTransform:Yi,transformDirection:function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),o=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0];return o=Yi(o,e,n),Math.abs(o[0])>Math.abs(o[1])?o[0]>0?"right":"left":o[1]>0?"bottom":"top"},groupTransition:Zi,clipPointsByRect:function(t,e){return g(t,function(t){var n=t[0];n=$f(n,e.x),n=Ff(n,e.x+e.width);var i=t[1];return i=$f(i,e.y),i=Ff(i,e.y+e.height),[n,i]})},clipRectByRect:function(t,e){var n=$f(t.x,e.x),i=Ff(t.x+t.width,e.x+e.width),r=$f(t.y,e.y),o=Ff(t.y+t.height,e.y+e.height);if(i>=n&&o>=r)return{x:n,y:r,width:i-n,height:o-r}},createIcon:function(t,e,n){var i=(e=s({rectHover:!0},e)).style={strokeNoScale:!0};if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(i.image=t.slice(8),l(i,n),new $e(e)):yi(t.replace("path://",""),e,n,"center")},Group:pc,Image:$e,Text:yf,Circle:_f,Sector:wf,Ring:Sf,Polygon:kf,Polyline:Tf,Rect:If,Line:Df,BezierCurve:Of,Arc:Pf,IncrementalDisplayable:vi,CompoundPath:Lf,LinearGradient:Nf,RadialGradient:Bf,BoundingRect:zt}),Wf=["textStyle","color"],Hf={getTextColor:function(t){var e=this.ecModel;return this.getShallow("color")||(!t&&e?e.get(Wf):null)},getFont:function(){return Gi({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return ie(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}},Gf=hh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),Uf={getItemStyle:function(t,e){var n=Gf(this,t,e),i=this.getBorderLineDash();return i&&(n.lineDash=i),n},getBorderLineDash:function(){var t=this.get("borderType");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}},qf=f,Xf=mn();Ki.prototype={constructor:Ki,init:null,mergeOption:function(t){o(this.option,t,!0)},get:function(t,e){return null==t?this.option:Ji(this.option,this.parsePath(t),!e&&Qi(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&Qi(this,t);return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n,i=null==t?this.option:Ji(this.option,t=this.parsePath(t));return e=e||(n=Qi(this,t))&&n.getModel(t),new Ki(i,e,this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(r(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){Xf(this).getParent=t},isAnimationEnabled:function(){if(!xu.node){if(null!=this.option.animation)return!!this.option.animation;if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},Mn(Ki),Cn(Ki),qf(Ki,dh),qf(Ki,gh),qf(Ki,Hf),qf(Ki,Uf);var Yf=0,Zf=1e-4,Kf=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,Jf=P,Qf=/([&<>"'])/g,td={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ed=["a","b","c","d","e","f","g"],nd=function(t,e){return"{"+t+(null==e?"":e)+"}"},id=ue,rd=p,od=["left","right","top","bottom","width","height"],ad=[["width","left","right"],["height","top","bottom"]],sd=(_(xr,"vertical"),_(xr,"horizontal"),{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}),ld=mn(),ud=Ki.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){Ki.call(this,t,e,n,i),this.uid=tr("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{};o(t,e.getTheme().get(this.mainType)),o(t,this.getDefaultOption()),n&&wr(t,i,n)},mergeOption:function(t,e){o(this.option,t,!0);var n=this.layoutMode;n&&wr(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=ld(this);if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var i=n.prototype.defaultOption;i&&e.push(i),n=n.superClass}for(var r={},a=e.length-1;a>=0;a--)r=o(r,e[a],!0);t.defaultOption=r}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}});In(ud,{registerWhenExtend:!0}),function(t){var e={};t.registerSubTypeDefaulter=function(t,n){t=wn(t),e[t.main]=n},t.determineSubType=function(n,i){var r=i.type;if(!r){var o=wn(n).main;t.hasSubTypes(n)&&e[o]&&(r=e[o](i))}return r}}(ud),function(t,e){function n(t){var n={},o=[];return p(t,function(a){var s=i(n,a),l=r(s.originalDeps=e(a),t);s.entryCount=l.length,0===s.entryCount&&o.push(a),p(l,function(t){c(s.predecessor,t)<0&&s.predecessor.push(t);var e=i(n,t);c(e.successor,t)<0&&e.successor.push(a)})}),{graph:n,noEntryList:o}}function i(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function r(t,e){var n=[];return p(t,function(t){c(e,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,e,i,r){function o(t){s[t].entryCount--,0===s[t].entryCount&&l.push(t)}if(t.length){var a=n(e),s=a.graph,l=a.noEntryList,u={};for(p(t,function(t){u[t]=!0});l.length;){var c=l.pop(),h=s[c],f=!!u[c];f&&(i.call(r,c,h.originalDeps.slice()),delete u[c]),p(h.successor,f?function(t){u[t]=!0,o(t)}:o)}p(u,function(){throw new Error("Circle dependency may exists")})}}}(ud,function(t){var e=[];return p(ud.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=g(e,function(t){return wn(t).main}),"dataset"!==t&&c(e,"dataset")<=0&&e.unshift("dataset"),e}),f(ud,sd);var cd="";"undefined"!=typeof navigator&&(cd=navigator.platform||"");var hd={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:cd.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1},fd=mn(),dd={clearColorPalette:function(){fd(this).colorIdx=0,fd(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=fd(e=e||this),r=i.colorIdx||0,o=i.colorNameMap=i.colorNameMap||{};if(o.hasOwnProperty(t))return o[t];var a=ln(this.get("color",!0)),s=this.get("colorLayer",!0),l=null!=n&&s?Cr(s,n):a;if((l=l||a)&&l.length){var u=l[r];return t&&(o[t]=u),i.colorIdx=(r+1)%l.length,u}}},pd={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],o=t.getReferringComponents("yAxis")[0];e.coordSysDims=["x","y"],n.set("x",r),n.set("y",o),Tr(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),Tr(o)&&(i.set("y",o),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0];e.coordSysDims=["single"],n.set("single",r),Tr(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],o=r.findAxisModel("radiusAxis"),a=r.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],n.set("radius",o),n.set("angle",a),Tr(o)&&(i.set("radius",o),e.firstCategoryDimIndex=0),Tr(a)&&(i.set("angle",a),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),a=e.coordSysDims=o.dimensions.slice();p(o.parallelAxisIndex,function(t,o){var s=r.getComponent("parallelAxis",t),l=a[o];n.set(l,s),Tr(s)&&null==e.firstCategoryDimIndex&&(i.set(l,s),e.firstCategoryDimIndex=o)})}},gd="original",vd="arrayRows",md="objectRows",yd="keyedColumns",_d="unknown",xd="typedArray",bd="column",wd="row";Ir.seriesDataToSource=function(t){return new Ir({data:t,sourceFormat:C(t)?xd:gd,fromDataset:!1})},Cn(Ir);var Sd=mn(),Md="\0_ec_inner",Cd=Ki.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new Ki(n),this._optionManager=i},setOption:function(t,e){L(!(Md in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var i=n.mountOption("recreate"===t);this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):Wr.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var r=n.getTimelineOption(this);r&&(this.mergeOption(r),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o.length&&p(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[];Or(this),p(t,function(t,n){null!=t&&(ud.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?r(t):o(e[n],t,!0))}),ud.topologicalTravel(i,ud.getAllClassMainTypes(),function(i,r){var o=ln(t[i]),a=fn(n.get(i),o);dn(a),p(a,function(t,e){var n=t.option;S(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=Gr(i,n,t.exist))});var l=Hr(n,r);e[i]=[],n.set(i,[]),p(a,function(t,r){var o=t.exist,a=t.option;if(L(S(a)||o,"Empty component definition"),a){var u=ud.getClass(i,t.keyInfo.subType,!0);if(o&&o instanceof u)o.name=t.keyInfo.name,o.mergeOption(a,this),o.optionUpdated(a,!1);else{var c=s({dependentModels:l,componentIndex:r},t.keyInfo);s(o=new u(a,this,this,c),c),o.init(a,this,this,c),o.optionUpdated(null,!0)}}else o.mergeOption({},this),o.optionUpdated({},!1);n.get(i)[r]=o,e[i][r]=o.option},this),"series"===i&&Ur(this,n.get("series"))},this),this._seriesIndicesMap=z(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=r(this.option);return p(t,function(e,n){if(ud.hasClass(n)){for(var i=(e=ln(e)).length-1;i>=0;i--)gn(e[i])&&e.splice(i,1);t[n]=e}}),delete t[Md],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t);if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType;if(!e)return[];var n,i=t.index,r=t.id,o=t.name,a=this._componentsMap.get(e);if(!a||!a.length)return[];if(null!=i)x(i)||(i=[i]),n=m(g(i,function(t){return a[t]}),function(t){return!!t});else if(null!=r){var s=x(r);n=m(a,function(t){return s&&c(r,t.id)>=0||!s&&t.id===r})}else if(null!=o){var l=x(o);n=m(a,function(t){return l&&c(o,t.name)>=0||!l&&t.name===o})}else n=a.slice();return qr(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name";return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e);return function(e){return t.filter?m(e,t.filter):e}(qr(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap;"function"==typeof t?(n=e,e=t,i.each(function(t,i){p(t,function(t,r){e.call(n,i,t,r)})})):w(t)?p(i.get(t),e,n):S(t)&&p(this.findComponents(t),e,n)},getSeriesByName:function(t){return m(this._componentsMap.get("series"),function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){return m(this._componentsMap.get("series"),function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){p(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n];t.call(e,i,n)},this)},eachRawSeries:function(t,e){p(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){p(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i];r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return p(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){Ur(this,m(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap;Ur(this,e.get("series"));var n=[];e.each(function(t,e){n.push(e)}),ud.topologicalTravel(n,ud.getAllClassMainTypes(),function(n,i){p(e.get(n),function(e){("series"!==n||!jr(e,t))&&e.restoreData()})})}});f(Cd,dd);var kd=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"],Td={};Yr.prototype={constructor:Yr,create:function(t,e){var n=[];p(Td,function(i,r){var o=i.create(t,e);n=n.concat(o||[])}),this._coordinateSystems=n},update:function(t,e){p(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},Yr.register=function(t,e){Td[t]=e},Yr.get=function(t){return Td[t]};var Id=p,Dd=r,Ad=g,Od=o,Pd=/^(min|max)?(.+)$/;Zr.prototype={constructor:Zr,setOption:function(t,e){t&&p(ln(t.series),function(t){t&&t.data&&C(t.data)&&N(t.data)}),t=Dd(t,!0);var n=this._optionBackup,i=Kr.call(this,t,e,!n);this._newBaseOption=i.baseOption,n?(eo(n.baseOption,i.baseOption),i.timelineOptions.length&&(n.timelineOptions=i.timelineOptions),i.mediaList.length&&(n.mediaList=i.mediaList),i.mediaDefault&&(n.mediaDefault=i.mediaDefault)):this._optionBackup=i},mountOption:function(t){var e=this._optionBackup;return this._timelineOptions=Ad(e.timelineOptions,Dd),this._mediaList=Ad(e.mediaList,Dd),this._mediaDefault=Dd(e.mediaDefault),this._currentMediaIndices=[],Dd(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions;if(n.length){var i=t.getComponent("timeline");i&&(e=Dd(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,o=[],a=[];if(!i.length&&!r)return a;for(var s=0,l=i.length;s<l;s++)Jr(i[s].query,e,n)&&o.push(s);return!o.length&&r&&(o=[-1]),o.length&&!to(o,this._currentMediaIndices)&&(a=Ad(o,function(t){return Dd(-1===t?r.option:i[t].option)})),this._currentMediaIndices=o,a}};var Ld=p,Ed=S,Nd=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"],Bd=function(t,e){Ld(lo(t.series),function(t){Ed(t)&&so(t)});var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"];e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),Ld(n,function(e){Ld(lo(t[e]),function(t){t&&(oo(t,"axisLabel"),oo(t.axisPointer,"label"))})}),Ld(lo(t.parallel),function(t){var e=t&&t.parallelAxisDefault;oo(e,"axisLabel"),oo(e&&e.axisPointer,"label")}),Ld(lo(t.calendar),function(t){io(t,"itemStyle"),oo(t,"dayLabel"),oo(t,"monthLabel"),oo(t,"yearLabel")}),Ld(lo(t.radar),function(t){oo(t,"name")}),Ld(lo(t.geo),function(t){Ed(t)&&(ao(t),Ld(lo(t.regions),function(t){ao(t)}))}),Ld(lo(t.timeline),function(t){ao(t),io(t,"label"),io(t,"itemStyle"),io(t,"controlStyle",!0);var e=t.data;x(e)&&p(e,function(t){S(t)&&(io(t,"label"),io(t,"itemStyle"))})}),Ld(lo(t.toolbox),function(t){io(t,"iconStyle"),Ld(t.feature,function(t){io(t,"iconStyle")})}),oo(uo(t.axisPointer),"label"),oo(uo(t.tooltip).axisPointer,"label")},Rd=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],zd=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"],$d=function(t,e){Bd(t,e),t.series=ln(t.series),p(t.series,function(t){if(S(t)){var e=t.type;if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=co(t,"pointer.color");null!=n&&ho(t,"itemStyle.normal.color",n)}fo(t)}}),t.dataRange&&(t.visualMap=t.dataRange),p(zd,function(e){var n=t[e];n&&(x(n)||(n=[n]),p(n,function(t){fo(t)}))})},Fd=go.prototype;Fd.pure=!1,Fd.persistent=!0,Fd.getSource=function(){return this._source};var jd={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:yo},arrayRows_row:{pure:!0,count:function(){var t=this._data[0];return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex;for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i];e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:vo,getItem:mo,appendData:yo},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t];return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name];e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data;p(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:vo,getItem:mo,appendData:yo},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[];for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i];return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}},Vd={arrayRows:_o,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:_o,original:function(t,e,n,i){var r=cn(t);return null!=n&&r instanceof Array?r[n]:r},typedArray:_o},Wd={arrayRows:xo,objectRows:function(t,e,n,i){return bo(t[e],this._dimensionInfos[e])},keyedColumns:xo,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return!this._rawData.pure&&hn(t)&&(this.hasItemOption=!0),bo(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}},Hd=/\{@(.+?)\}/g,Gd={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),a=n.getRawDataItem(t),s=n.getItemVisual(t,"color");return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:a,dataType:e,value:i,color:s,marker:mr(s),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,i,r){e=e||"normal";var o=this.getData(n),a=o.getItemModel(t),s=this.getDataParams(t,n);null!=i&&s.value instanceof Array&&(s.value=s.value[i]);var l=a.get("normal"===e?[r||"label","formatter"]:[e,r||"label","formatter"]);return"function"==typeof l?(s.status=e,l(s)):"string"==typeof l?vr(l,s).replace(Hd,function(e,n){var i=n.length;return"["===n.charAt(0)&&"]"===n.charAt(i-1)&&(n=+n.slice(1,i-1)),wo(o,t,n)}):void 0},getRawValue:function(t,e){return wo(this.getData(e),t)},formatTooltip:function(){}},Ud=Co.prototype;Ud.perform=function(t){function e(t){return!(t>=1)&&(t=1),t}var n,i=this._upstream,r=t&&t.skip;if(this._dirty&&i){var o=this.context;o.data=o.outputData=i.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(n=this._plan(this.context));var a,s=e(this._modBy),l=this._modDataCount||0,u=e(t&&t.modBy),c=t&&t.modDataCount||0;s===u&&l===c||(n="reset"),(this._dirty||"reset"===n)&&(this._dirty=!1,a=To(this,r)),this._modBy=u,this._modDataCount=c;var h=t&&t.step;if(this._dueEnd=i?i._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,d=Math.min(null!=h?this._dueIndex+h:1/0,this._dueEnd);if(!r&&(a||f<d)){var p=this._progress;if(x(p))for(var g=0;g<p.length;g++)ko(this,p[g],f,d,u,c);else ko(this,p,f,d,u,c)}this._dueIndex=d;var v=null!=this._settedOutputEnd?this._settedOutputEnd:d;this._outputDueEnd=v}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var qd=function(){function t(){return i<n?i++:null}function e(){var t=i%a*r+Math.ceil(i/a),e=i>=n?null:t<o?t:i;return i++,e}var n,i,r,o,a,s={reset:function(l,u,c,h){i=l,n=u,r=c,o=h,a=Math.ceil(o/r),s.next=r>1&&o>0?e:t}};return s}();Ud.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},Ud.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},Ud.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},Ud.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},Ud.getUpstream=function(){return this._upstream},Ud.getDownstream=function(){return this._downstream},Ud.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t};var Xd=mn(),Yd=ud.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=Mo({count:Ao,reset:Oo}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),Pr(this);var r=this.getInitialData(t,n);Lo(r,this),this.dataTask.context.data=r,Xd(this).dataBeforeProcessed=r,Io(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,i=n?Sr(t):{},r=this.subType;ud.hasClass(r)&&(r+="Series"),o(t,e.getTheme().get(this.subType)),o(t,this.getDefaultOption()),un(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&wr(t,i,n)},mergeOption:function(t,e){t=o(this.option,t,!0),this.fillDataTextStyle(t.data);var n=this.layoutMode;n&&wr(this.option,t,n),Pr(this);var i=this.getInitialData(t,e);Lo(i,this),this.dataTask.dirty(),this.dataTask.context.data=i,Xd(this).dataBeforeProcessed=i,Io(this)},fillDataTextStyle:function(t){if(t&&!C(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&un(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=No(this);if(e){var n=e.context.data;return null==t?n:n.getLinkedData(t)}return Xd(this).data},setData:function(t){var e=No(this);if(e){var n=e.context;n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}Xd(this).data=t},getSource:function(){return Ar(this)},getRawData:function(){return Xd(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem;return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){function i(t){return gr(pr(t))}var r=this.getData(),o=r.mapDimension("defaultedTooltip",!0),a=o.length,s=this.getRawValue(t),l=x(s),u=r.getItemVisual(t,"color");S(u)&&u.colorStops&&(u=(u.colorStops[0]||{}).color),u=u||"transparent";var c=a>1||l&&!a?function(n){function i(t,n){var i=r.getDimensionInfo(n);if(i&&!1!==i.otherDims.tooltip){var o=i.type,l=mr({color:u,type:"subItem"}),c=(a?l+gr(i.displayName||"-")+": ":"")+gr("ordinal"===o?t+"":"time"===o?e?"":_r("yyyy/MM/dd hh:mm:ss",t):pr(t));c&&s.push(c)}}var a=v(n,function(t,e,n){var i=r.getDimensionInfo(n);return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),s=[];return o.length?p(o,function(e){i(wo(r,t,e),e)}):p(n,i),(a?"<br/>":"")+s.join(a?"<br/>":", ")}(s):i(a?wo(r,t,o[0]):l?s[0]:s),h=mr(u),f=r.getName(t),d=this.name;return pn(this)||(d=""),d=d?gr(d)+(e?": ":"<br/>"):"",e?h+d+c:d+h+(f?gr(f)+": "+c:c)},isAnimationEnabled:function(){if(xu.node)return!1;var t=this.getShallow("animation");return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=dd.getColorFromPalette.call(this,t,e,n);return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null});f(Yd,Gd),f(Yd,dd);var Zd=function(){this.group=new pc,this.uid=tr("viewComponent")};Zd.prototype={constructor:Zd,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}};var Kd=Zd.prototype;Kd.updateView=Kd.updateLayout=Kd.updateVisual=function(t,e,n,i){},Mn(Zd),In(Zd,{registerWhenExtend:!0});var Jd=function(){var t=mn();return function(e){var n=t(e),i=e.pipelineContext,r=n.large,o=n.progressiveRender,a=n.large=i.large,s=n.progressiveRender=i.progressiveRender;return!!(r^a||o^s)&&"reset"}},Qd=mn(),tp=Jd();Bo.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){zo(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){zo(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null};var ep=Bo.prototype;ep.updateView=ep.updateLayout=ep.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},Mn(Bo),In(Bo,{registerWhenExtend:!0}),Bo.markUpdateMethod=function(t,e){Qd(t).updateMethod=e};var np={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},ip={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),i=(t.visualColorAccessPath||"itemStyle.color").split("."),r=t.get(i)||t.getColorFromPalette(t.name,null,e.getSeriesCount());if(n.setVisual("color",r),!e.isSeriesFiltered(t))return"function"!=typeof r||r instanceof Ef||n.each(function(e){n.setItemVisual(e,"color",r(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(i,!0);null!=n&&t.setItemVisual(e,"color",n)}:null}}},rp={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}},op=function(t,n){function i(t,e){if("string"!=typeof t)return t;var n=t;return p(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function r(t){var e=a.get(t);if(null==e){for(var n=t.split("."),i=rp.aria,r=0;r<n.length;++r)i=i[n[r]];return i}return e}function o(t){return rp.series.typeNames[t]||"自定义图"}var a=n.getModel("aria");if(a.get("show"))if(a.get("description"))t.setAttribute("aria-label",a.get("description"));else{var s=0;n.eachSeries(function(t,e){++s},this);var l,u=a.get("data.maxCount")||10,c=a.get("series.maxCount")||10,h=Math.min(s,c);if(!(s<1)){var f=function(){var t=n.getModel("title").option;return t&&t.length&&(t=t[0]),t&&t.text}();l=f?i(r("general.withTitle"),{title:f}):r("general.withoutTitle");var d=[];l+=i(r(s>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:s}),n.eachSeries(function(t,n){if(n<h){var a,l=t.get("name"),c="series."+(s>1?"multiple":"single")+".";a=i(a=r(l?c+"withName":c+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:o(t.subType)});var f=t.getData();e.data=f,f.count()>u?a+=i(r("data.partialData"),{displayCnt:u}):a+=r("data.allData");for(var p=[],g=0;g<f.count();g++)if(g<u){var v=f.getName(g),m=wo(f,g);p.push(i(r(v?"data.withName":"data.withoutName"),{name:v,value:m}))}a+=p.join(r("data.separator.middle"))+r("data.separator.end"),d.push(a)}}),l+=d.join(r("series.multiple.separator.middle"))+r("series.multiple.separator.end"),t.setAttribute("aria-label",l)}}},ap=Math.PI,sp=Vo.prototype;sp.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask;e&&e.dirty()})},sp.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,o=i&&i.modDataCount;return{step:r,modBy:null!=o?Math.ceil(o/r):null,modDataCount:o}}},sp.getPipeline=function(t){return this._pipelineMap.get(t)},sp.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,o=t.get("large")&&i>=t.get("largeThreshold"),a="mod"===t.get("progressiveChunkMode")?i:null;t.pipelineContext=n.context={progressiveRender:r,modDataCount:a,large:o}},sp.restorePipelines=function(t){var e=this,n=e._pipelineMap=z();t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid;n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),ta(e,t,t.dataTask)})},sp.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api;p(this._allHandlers,function(i){var r=t.get(i.uid)||t.set(i.uid,[]);i.reset&&Ho(this,i,r,e,n),i.overallReset&&Go(this,i,r,e,n)},this)},sp.prepareView=function(t,e,n,i){var r=t.renderTask,o=r.context;o.model=e,o.ecModel=n,o.api=i,r.__block=!t.incrementalPrepareRender,ta(this,e,r)},sp.performDataProcessorTasks=function(t,e){Wo(this,this._dataProcessorHandlers,t,e,{block:!0})},sp.performVisualTasks=function(t,e,n){Wo(this,this._visualHandlers,t,e,n)},sp.performSeriesTasks=function(t){var e;t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},sp.plan=function(){this._pipelineMap.each(function(t){var e=t.tail;do{if(e.__block){t.blockIndex=e.__idxInPipeline;break}e=e.getUpstream()}while(e)})};var lp=sp.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)},up=Jo(0);Vo.wrapStageHandler=function(t,e){return b(t)&&(t={overallReset:t,seriesType:ea(t)}),t.uid=tr("stageHandler"),e&&(t.visualType=e),t};var cp,hp={},fp={};na(hp,Cd),na(fp,Xr),hp.eachSeriesByType=hp.eachRawSeriesByType=function(t){cp=t},hp.eachComponent=function(t){"series"===t.mainType&&t.subType&&(cp=t.subType)};var dp=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],pp={color:dp,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],dp]},gp=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],vp={color:gp,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:gp[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:gp},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};vp.categoryAxis.splitLine.show=!1,ud.extend({type:"dataset",defaultOption:{seriesLayoutBy:bd,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){Dr(this)}}),Zd.extend({type:"dataset"});var mp=L,yp=p,_p=b,xp=S,bp=ud.parseClassType,wp={zrender:"4.0.4"},Sp=1e3,Mp=1e3,Cp=3e3,kp={PROCESSOR:{FILTER:Sp,STATISTIC:5e3},VISUAL:{LAYOUT:Mp,GLOBAL:2e3,CHART:Cp,COMPONENT:4e3,BRUSH:5e3}},Tp="__flagInMainProcess",Ip="__optionUpdated",Dp=/^[a-zA-Z0-9_]+$/;ra.prototype.on=ia("on"),ra.prototype.off=ia("off"),ra.prototype.one=ia("one"),f(ra,zu);var Ap=oa.prototype;Ap._onframe=function(){if(!this._disposed){var t=this._scheduler;if(this[Ip]){var e=this[Ip].silent;this[Tp]=!0,sa(this),Op.update.call(this),this[Tp]=!1,this[Ip]=!1,ha.call(this,e),fa.call(this,e)}else if(t.unfinished){var n=1,i=this._model;this._api,t.unfinished=!1;do{var r=+new Date;t.performSeriesTasks(i),t.performDataProcessorTasks(i),ua(this,i),t.performVisualTasks(i),ya(this,this._model,0,"remain"),n-=+new Date-r}while(n>0&&t.unfinished);t.unfinished||this._zr.flush()}}},Ap.getDom=function(){return this._dom},Ap.getZr=function(){return this._zr},Ap.setOption=function(t,e,n){var i;if(xp(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[Tp]=!0,!this._model||e){var r=new Zr(this._api),o=this._theme,a=this._model=new Cd(null,null,o,r);a.scheduler=this._scheduler,a.init(null,null,o,r)}this._model.setOption(t,Bp),n?(this[Ip]={silent:i},this[Tp]=!1):(sa(this),Op.update.call(this),this._zr.flush(),this[Ip]=!1,this[Tp]=!1,ha.call(this,i),fa.call(this,i))},Ap.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},Ap.getModel=function(){return this._model},Ap.getOption=function(){return this._model&&this._model.getOption()},Ap.getWidth=function(){return this._zr.getWidth()},Ap.getHeight=function(){return this._zr.getHeight()},Ap.getDevicePixelRatio=function(){return this._zr.painter.dpr||e.devicePixelRatio||1},Ap.getRenderedCanvas=function(t){if(xu.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},Ap.getSvgDataUrl=function(){if(xu.svgSupported){var t=this._zr;return p(t.storage.getDisplayList(),function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},Ap.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this;yp(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group.ignore||(i.push(e),e.group.ignore=!0)})});var o="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return yp(i,function(t){t.group.ignore=!1}),o},Ap.getConnectedDataURL=function(t){if(xu.canvasSupported){var e=this.group,n=Math.min,i=Math.max;if(Vp[e]){var o=1/0,a=1/0,s=-1/0,l=-1/0,u=[],c=t&&t.pixelRatio||1;p(jp,function(c,h){if(c.group===e){var f=c.getRenderedCanvas(r(t)),d=c.getDom().getBoundingClientRect();o=n(d.left,o),a=n(d.top,a),s=i(d.right,s),l=i(d.bottom,l),u.push({dom:f,left:d.left,top:d.top})}});var h=(s*=c)-(o*=c),f=(l*=c)-(a*=c),d=Ou();d.width=h,d.height=f;var g=sn(d);return yp(u,function(t){var e=new $e({style:{x:t.left*c-o,y:t.top*c-a,image:t.dom}});g.add(e)}),g.refreshImmediately(),d.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},Ap.convertToPixel=_(aa,"convertToPixel"),Ap.convertFromPixel=_(aa,"convertFromPixel"),Ap.containPixel=function(t,e){var n;return t=yn(this._model,t),p(t,function(t,i){i.indexOf("Models")>=0&&p(t,function(t){var r=t.coordinateSystem;if(r&&r.containPoint)n|=!!r.containPoint(e);else if("seriesModels"===i){var o=this._chartsMap[t.__viewId];o&&o.containPoint&&(n|=o.containPoint(e,t))}},this)},this),!!n},Ap.getVisual=function(t,e){var n=(t=yn(this._model,t,{defaultMainType:"series"})).seriesModel.getData(),i=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?n.indexOfRawIndex(t.dataIndex):null;return null!=i?n.getItemVisual(i,e):n.getVisual(e)},Ap.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},Ap.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]};var Op={prepareAndUpdate:function(t){sa(this),Op.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,o=this._scheduler;if(e){o.restoreData(e,t),o.performSeriesTasks(e),r.create(e,n),o.performDataProcessorTasks(e,t),ua(this,e),r.update(e,n),ga(e),o.performVisualTasks(e,t),va(this,e,n,t);var a=e.get("backgroundColor")||"transparent";if(xu.canvasSupported)i.setBackgroundColor(a);else{var s=bt(a);a=Mt(s,"rgb"),0===s[3]&&(a="transparent")}_a(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api;if(e){var r=[];e.eachComponent(function(o,a){var s=n.getViewOfComponentModel(a);if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(a,e,i,t);l&&l.update&&r.push(s)}else r.push(s)});var o=z();e.eachSeries(function(r){var a=n._chartsMap[r.__viewId];if(a.updateTransform){var s=a.updateTransform(r,e,i,t);s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),ga(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),ya(n,e,0,t,o),_a(e,this._api)}},updateView:function(t){var e=this._model;e&&(Bo.markUpdateMethod(t,"updateView"),ga(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),va(this,this._model,this._api,t),_a(e,this._api))},updateVisual:function(t){Op.update.call(this,t)},updateLayout:function(t){Op.update.call(this,t)}};Ap.resize=function(t){this._zr.resize(t);var e=this._model;if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent;this[Tp]=!0,n&&sa(this),Op.update.call(this),this[Tp]=!1,ha.call(this,i),fa.call(this,i)}},Ap.showLoading=function(t,e){if(xp(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),Fp[t]){var n=Fp[t](this._api,e),i=this._zr;this._loadingFX=n,i.add(n)}},Ap.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},Ap.makeActionFromEvent=function(t){var e=s({},t);return e.type=Ep[t.type],e},Ap.dispatchAction=function(t,e){xp(e)||(e={silent:!!e}),Lp[t.type]&&this._model&&(this[Tp]?this._pendingActions.push(t):(ca.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&xu.browser.weChat&&this._throttledZrFlush(),ha.call(this,e.silent),fa.call(this,e.silent)))},Ap.appendData=function(t){var e=t.seriesIndex;this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},Ap.on=ia("on"),Ap.off=ia("off"),Ap.one=ia("one");var Pp=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];Ap._initEvents=function(){yp(Pp,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),r=e.target;if("globalout"===t)n={};else if(r&&null!=r.dataIndex){var o=r.dataModel||i.getSeriesByIndex(r.seriesIndex);n=o&&o.getDataParams(r.dataIndex,r.dataType)||{}}else r&&r.eventData&&(n=s({},r.eventData));n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),yp(Ep,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},Ap.isDisposed=function(){return this._disposed},Ap.clear=function(){this.setOption({series:[]},!0)},Ap.dispose=function(){if(!this._disposed){this._disposed=!0,xn(this.getDom(),Gp,"");var t=this._api,e=this._model;yp(this._componentsViews,function(n){n.dispose(e,t)}),yp(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete jp[this.id]}},f(oa,zu);var Lp={},Ep={},Np=[],Bp=[],Rp=[],zp=[],$p={},Fp={},jp={},Vp={},Wp=new Date-0,Hp=new Date-0,Gp="_echarts_instance_",Up={},qp=Ca;Pa(2e3,ip),Ia($d),Da(5e3,function(t){var e=z();t.eachSeries(function(t){var n=t.get("stack");if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),o={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t};if(!o.stackedDimension||!o.isStackedByIndex&&!o.stackedByDimension)return;i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(o)}}),e.each(po)}),Ea("default",function(t,e){l(e=e||{},{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var n=new If({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),i=new Pf({shape:{startAngle:-ap/2,endAngle:-ap/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),r=new If({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001});i.animateShape(!0).when(1e3,{endAngle:3*ap/2}).start("circularInOut"),i.animateShape(!0).when(1e3,{startAngle:3*ap/2}).delay(300).start("circularInOut");var o=new pc;return o.add(i),o.add(r),o.add(n),o.resize=function(){var e=t.getWidth()/2,o=t.getHeight()/2;i.setShape({cx:e,cy:o});var a=i.shape.r;r.setShape({x:e-a,y:o-a,width:2*a,height:2*a}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},o.resize(),o}),Aa({type:"highlight",event:"highlight",update:"highlight"},$),Aa({type:"downplay",event:"downplay",update:"downplay"},$),Ta("light",pp),Ta("dark",vp);var Xp={};$a.prototype={constructor:$a,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],r=[];for(Fa(t,{},i,"_oldKeyGetter",this),Fa(e,n,r,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(s=n[a=i[o]])?((u=s.length)?(1===u&&(n[a]=null),s=s.unshift()):n[a]=null,this._update&&this._update(s,o)):this._remove&&this._remove(o);for(var o=0;o<r.length;o++){var a=r[o];if(n.hasOwnProperty(a)){var s=n[a];if(null==s)continue;if(s.length)for(var l=0,u=s.length;l<u;l++)this._add&&this._add(s[l]);else this._add&&this._add(s)}}}};var Yp=z(["tooltip","label","itemName","itemId","seriesName"]),Zp=S,Kp="e\0\0",Jp={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},Qp="undefined"==typeof Uint32Array?Array:Uint32Array,tg="undefined"==typeof Uint16Array?Array:Uint16Array,eg=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],ng=["_extent","_approximateExtent","_rawExtent"],ig=function(t,e){t=t||["x","y"];for(var n={},i=[],r={},o=0;o<t.length;o++){var a=t[o];w(a)&&(a={name:a});var s=a.name;a.type=a.type||"float",a.coordDim||(a.coordDim=s,a.coordDimIndex=0),a.otherDims=a.otherDims||{},i.push(s),n[s]=a,a.index=o,a.createInvertedIndices&&(r[s]=[])}this.dimensions=i,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=ja(this),this._invertedIndicesMap=r,this._calculationInfo={}},rg=ig.prototype;rg.type="list",rg.hasItemOption=!0,rg.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},rg.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},rg.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},rg.mapDimension=function(t,e){var n=this._dimensionsSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return!0===e?(i||[]).slice():i&&i[e]},rg.initData=function(t,e,n){(Ir.isInstance(t)||d(t))&&(t=new go(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=Wd[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},rg.getProvider=function(){return this._rawData},rg.appendData=function(t){var e=this._rawData,n=this.count();e.appendData(t);var i=e.count();e.persistent||(i+=n),this._initDataFromProvider(n,i)},rg._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,i=this._chunkSize,r=this._rawData,o=this._storage,a=this.dimensions,s=a.length,l=this._dimensionInfos,u=this._nameList,c=this._idList,h=this._rawExtent,f=this._nameRepeatCount={},d=this._chunkCount,p=d-1,g=0;g<s;g++){h[k=a[g]]||(h[k]=[1/0,-1/0]);var v=l[k];0===v.otherDims.itemName&&(n=this._nameDimIdx=g),0===v.otherDims.itemId&&(this._idDimIdx=g);var m=Jp[v.type];o[k]||(o[k]=[]);var y=o[k][p];if(y&&y.length<i){for(var _=new m(Math.min(e-p*i,i)),x=0;x<y.length;x++)_[x]=y[x];o[k][p]=_}for(C=d*i;C<e;C+=i)o[k].push(new m(Math.min(e-C,i)));this._chunkCount=o[k].length}for(var b=new Array(s),w=t;w<e;w++){b=r.getItem(w,b);for(var S=Math.floor(w/i),M=w%i,C=0;C<s;C++){var k=a[C],T=o[k][S],I=this._dimValueGetter(b,k,w,C);T[M]=I;var D=h[k];I<D[0]&&(D[0]=I),I>D[1]&&(D[1]=I)}if(!r.pure){var A=u[w];if(b&&null==A)if(null!=b.name)u[w]=A=b.name;else if(null!=n){var O=a[n],P=o[O][S];if(P){A=P[M];var L=l[O].ordinalMeta;L&&L.categories.length&&(A=L.categories[A])}}var E=null==b?null:b.id;null==E&&null!=A&&(f[A]=f[A]||0,E=A,f[A]>0&&(E+="__ec__"+f[A]),f[A]++),null!=E&&(c[w]=E)}}!r.persistent&&r.clean&&r.clean(),this._rawCount=this._count=e,this._extent={},qa(this)}},rg.count=function(){return this._count},rg.getIndices=function(){var t=this._indices;if(t){var e=t.constructor,n=this._count;if(e===Array)for(i=new e(n),r=0;r<n;r++)i[r]=t[r];else i=new e(t.buffer,0,n)}else for(var i=new(e=Ha(this))(this.count()),r=0;r<i.length;r++)i[r]=r;return i},rg.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._storage;if(!n[t])return NaN;e=this.getRawIndex(e);var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[t][i][r]},rg.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._storage[t];if(!n)return NaN;var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize;return n[i][r]},rg._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize;return this._storage[t][n][i]},rg.getValues=function(t,e){var n=[];x(t)||(e=t,t=this.dimensions);for(var i=0,r=t.length;i<r;i++)n.push(this.get(t[i],e));return n},rg.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1;return!0},rg.getDataExtent=function(t){t=this.getDimension(t);var e=[1/0,-1/0];if(!this._storage[t])return e;var n,i=this.count();if(!this._indices)return this._rawExtent[t].slice();if(n=this._extent[t])return n.slice();for(var r=(n=e)[0],o=n[1],a=0;a<i;a++){var s=this._getFast(t,this.getRawIndex(a));s<r&&(r=s),s>o&&(o=s)}return n=[r,o],this._extent[t]=n,n},rg.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},rg.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},rg.getCalculationInfo=function(t){return this._calculationInfo[t]},rg.setCalculationInfo=function(t,e){Zp(t)?s(this._calculationInfo,t):this._calculationInfo[t]=e},rg.getSum=function(t){var e=0;if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},rg.getMedian=function(t){var e=[];this.each(t,function(t,n){isNaN(t)||e.push(t)});var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count();return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},rg.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},rg.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e;return-1},rg.indexOfRawIndex=function(t){if(!this._indices)return t;if(t>=this._rawCount||t<0)return-1;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},rg.indicesOfNearest=function(t,e,n){var i=[];if(!this._storage[t])return i;null==n&&(n=1/0);for(var r=Number.MAX_VALUE,o=-1,a=0,s=this.count();a<s;a++){var l=e-this.get(t,a),u=Math.abs(l);l<=n&&u<=r&&((u<r||l>=0&&o<0)&&(r=u,o=l,i.length=0),i.push(a))}return i},rg.getRawIndex=Ya,rg.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t));for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n];e.push(this.get(i,t))}return e},rg.getName=function(t){var e=this.getRawIndex(t);return this._nameList[e]||Xa(this,this._nameDimIdx,e)||""},rg.getId=function(t){return Ka(this,this.getRawIndex(t))},rg.each=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;for(var r=(t=g(Ja(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(r){case 0:e.call(n,o);break;case 1:e.call(n,this.get(t[0],o),o);break;case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o);break;default:for(var a=0,s=[];a<r;a++)s[a]=this.get(t[a],o);s[a]=o,e.apply(n,s)}}},rg.filterSelf=function(t,e,n,i){if(this._count){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this,t=g(Ja(t),this.getDimension,this);for(var r=this.count(),o=new(Ha(this))(r),a=[],s=t.length,l=0,u=t[0],c=0;c<r;c++){var h,f=this.getRawIndex(c);if(0===s)h=e.call(n,c);else if(1===s){var d=this._getFast(u,f);h=e.call(n,d,c)}else{for(var p=0;p<s;p++)a[p]=this._getFast(u,f);a[p]=c,h=e.apply(n,a)}h&&(o[l++]=f)}return l<r&&(this._indices=o),this._count=l,this._extent={},this.getRawIndex=this._indices?Za:Ya,this}},rg.selectRange=function(t){if(this._count){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);var i=e.length;if(i){var r=this.count(),o=new(Ha(this))(r),a=0,s=e[0],l=t[s][0],u=t[s][1],c=!1;if(!this._indices){var h=0;if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((b=p[v])>=l&&b<=u||isNaN(b))&&(o[a++]=h),h++;c=!0}else if(2===i){f=this._storage[s];var m=this._storage[e[1]],y=t[e[1]][0],_=t[e[1]][1];for(d=0;d<this._chunkCount;d++){p=f[d];var x=m[d];for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var b=p[v],w=x[v];(b>=l&&b<=u||isNaN(b))&&(w>=y&&w<=_||isNaN(w))&&(o[a++]=h),h++}}c=!0}}if(!c)if(1===i)for(v=0;v<r;v++)M=this.getRawIndex(v),((b=this._getFast(s,M))>=l&&b<=u||isNaN(b))&&(o[a++]=M);else for(v=0;v<r;v++){var S=!0,M=this.getRawIndex(v);for(d=0;d<i;d++){var C=e[d];((b=this._getFast(n,M))<t[C][0]||b>t[C][1])&&(S=!1)}S&&(o[a++]=this.getRawIndex(v))}return a<r&&(this._indices=o),this._count=a,this._extent={},this.getRawIndex=this._indices?Za:Ya,this}}},rg.mapArray=function(t,e,n,i){"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this;var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},rg.map=function(t,e,n,i){n=n||i||this;var r=Qa(this,t=g(Ja(t),this.getDimension,this));r._indices=this._indices,r.getRawIndex=r._indices?Za:Ya;for(var o=r._storage,a=[],s=this._chunkSize,l=t.length,u=this.count(),c=[],h=r._rawExtent,f=0;f<u;f++){for(var d=0;d<l;d++)c[d]=this.get(t[d],f);c[l]=f;var p=e&&e.apply(n,c);if(null!=p){"object"!=typeof p&&(a[0]=p,p=a);for(var v=this.getRawIndex(f),m=Math.floor(v/s),y=v%s,_=0;_<p.length;_++){var x=t[_],b=p[_],w=h[x],S=o[x];S&&(S[m][y]=b),b<w[0]&&(w[0]=b),b>w[1]&&(w[1]=b)}}}return r},rg.downSample=function(t,e,n,i){for(var r=Qa(this,[t]),o=r._storage,a=[],s=Math.floor(1/e),l=o[t],u=this.count(),c=this._chunkSize,h=r._rawExtent[t],f=new(Ha(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,a.length=s);for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),m=Math.floor(v/c),y=v%c;a[g]=l[m][y]}var _=n(a),x=this.getRawIndex(Math.min(p+i(a,_)||0,u-1)),b=x%c;l[Math.floor(x/c)][b]=_,_<h[0]&&(h[0]=_),_>h[1]&&(h[1]=_),f[d++]=x}return r._count=d,r._indices=f,r.getRawIndex=Za,r},rg.getItemModel=function(t){var e=this.hostModel;return new Ki(this.getRawDataItem(t),e,e&&e.ecModel)},rg.diff=function(t){var e=this;return new $a(t?t.getIndices():[],this.getIndices(),function(e){return Ka(t,e)},function(t){return Ka(e,t)})},rg.getVisual=function(t){var e=this._visual;return e&&e[t]},rg.setVisual=function(t,e){if(Zp(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n]);else this._visual=this._visual||{},this._visual[t]=e},rg.setLayout=function(t,e){if(Zp(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n]);else this._layout[t]=e},rg.getLayout=function(t){return this._layout[t]},rg.getItemLayout=function(t){return this._itemLayouts[t]},rg.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?s(this._itemLayouts[t]||{},e):e},rg.clearItemLayouts=function(){this._itemLayouts.length=0},rg.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e];return null!=r||n?r:this.getVisual(e)},rg.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual;if(this._itemVisuals[t]=i,Zp(e))for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o],r[o]=!0);else i[e]=n,r[e]=!0},rg.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}};var og=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType};rg.setItemGraphicEl=function(t,e){var n=this.hostModel;e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(og,e)),this._graphicEls[t]=e},rg.getItemGraphicEl=function(t){return this._graphicEls[t]},rg.eachItemGraphicEl=function(t,e){p(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},rg.cloneShallow=function(t){if(!t){var e=g(this.dimensions,this.getDimensionInfo,this);t=new ig(e,this.hostModel)}if(t._storage=this._storage,Ua(t,this),this._indices){var n=this._indices.constructor;t._indices=new n(this._indices)}else t._indices=null;return t.getRawIndex=t._indices?Za:Ya,t},rg.wrapMethod=function(t,e){var n=this[t];"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(O(arguments)))})},rg.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],rg.CHANGABLE_METHODS=["filterSelf","selectRange"];var ag=function(t,e){return e=e||{},ns(e.coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})};Yd.extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return ls(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});var sg=mi({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i+o),t.lineTo(n-r,i+o),t.closePath()}}),lg=mi({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,o=e.height/2;t.moveTo(n,i-o),t.lineTo(n+r,i),t.lineTo(n,i+o),t.lineTo(n-r,i),t.closePath()}}),ug=mi({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,o=Math.max(r,e.height),a=r/2,s=a*a/(o-a),l=i-o+a+s,u=Math.asin(s/a),c=Math.cos(u)*a,h=Math.sin(u),f=Math.cos(u),d=.6*a,p=.7*a;t.moveTo(n-c,l+s),t.arc(n,l,a,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+c-h*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-c+h*d,l+s+f*d,n-c,l+s),t.closePath()}}),cg=mi({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,o=e.y,a=i/3*2;t.moveTo(r,o),t.lineTo(r+a,o+n),t.lineTo(r,o+n/4*3),t.lineTo(r-a,o+n),t.lineTo(r,o),t.closePath()}}),hg={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var o=Math.min(n,i);r.x=t,r.y=e,r.width=o,r.height=o},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},fg={};p({line:Df,rect:If,roundRect:If,square:If,circle:_f,diamond:lg,pin:ug,arrow:cg,triangle:sg},function(t,e){fg[e]=new t});var dg=mi({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style;"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=fg[i];"none"!==e.symbolType&&(r||(r=fg[i="rect"]),hg[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}}),pg=ps.prototype,gg=ps.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};pg._createSymbol=function(t,e,n,i,r){this.removeAll();var o=fs(t,-1,-1,2,2,e.getItemVisual(n,"color"),r);o.attr({z2:100,culling:!0,scale:gs(i)}),o.drift=vs,this._symbolType=t,this.add(o)},pg.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},pg.getSymbolPath=function(){return this.childAt(0)},pg.getScale=function(){return this.childAt(0).scale},pg.highlight=function(){this.childAt(0).trigger("emphasis")},pg.downplay=function(){this.childAt(0).trigger("normal")},pg.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},pg.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":"pointer"},pg.updateData=function(t,e,n){this.silent=!1;var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=gg(t,e),a=i!==this._symbolType;if(a){var s=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(i,t,e,o,s)}else(l=this.childAt(0)).silent=!1,qi(l,{scale:gs(o)},r,e);if(this._updateCommon(t,e,o,n),a){var l=this.childAt(0),u=n&&n.fadeIn,c={scale:l.scale.slice()};u&&(c.style={opacity:l.style.opacity}),l.scale=[0,0],u&&(l.style.opacity=0),Xi(l,c,r,e)}this._seriesModel=r};var vg=["itemStyle"],mg=["emphasis","itemStyle"],yg=["label"],_g=["emphasis","label"];pg._updateCommon=function(t,e,n,i){var r=this.childAt(0),o=t.hostModel,a=t.getItemVisual(e,"color");"image"!==r.type&&r.useStyle({strokeNoScale:!0});var l=i&&i.itemStyle,u=i&&i.hoverItemStyle,c=i&&i.symbolRotate,h=i&&i.symbolOffset,f=i&&i.labelModel,d=i&&i.hoverLabelModel,p=i&&i.hoverAnimation,g=i&&i.cursorStyle;if(!i||t.hasItemOption){var v=i&&i.itemModel?i.itemModel:t.getItemModel(e);l=v.getModel(vg).getItemStyle(["color"]),u=v.getModel(mg).getItemStyle(),c=v.getShallow("symbolRotate"),h=v.getShallow("symbolOffset"),f=v.getModel(yg),d=v.getModel(_g),p=v.getShallow("hoverAnimation"),g=v.getShallow("cursor")}else u=s({},u);var m=r.style;r.attr("rotation",(c||0)*Math.PI/180||0),h&&r.attr("position",[ir(h[0],n[0]),ir(h[1],n[1])]),g&&r.attr("cursor",g),r.setColor(a,i&&i.symbolInnerColor),r.setStyle(l);var y=t.getItemVisual(e,"opacity");null!=y&&(m.opacity=y);var _=t.getItemVisual(e,"liftZ"),x=r.__z2Origin;null!=_?null==x&&(r.__z2Origin=r.z2,r.z2+=_):null!=x&&(r.z2=x,r.__z2Origin=null);var b=i&&i.useNameLabel;Ri(m,u,f,d,{labelFetcher:o,labelDataIndex:e,defaultText:function(e,n){return b?t.getName(e):ds(t,e)},isRectText:!0,autoColor:a}),r.off("mouseover").off("mouseout").off("emphasis").off("normal"),r.hoverStyle=u,Bi(r);var w=gs(n);if(p&&o.isAnimationEnabled()){var S=function(){if(!this.incremental){var t=w[1]/w[0];this.animateTo({scale:[Math.max(1.1*w[0],w[0]+3),Math.max(1.1*w[1],w[1]+3*t)]},400,"elasticOut")}},M=function(){this.incremental||this.animateTo({scale:w},400,"elasticOut")};r.on("mouseover",S).on("mouseout",M).on("emphasis",S).on("normal",M)}},pg.fadeOut=function(t,e){var n=this.childAt(0);this.silent=n.silent=!0,!(e&&e.keepLabel)&&(n.style.text=null),qi(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},h(ps,pc);var xg=ms.prototype;xg.updateData=function(t,e){e=_s(e);var n=this.group,i=t.hostModel,r=this._data,o=this._symbolCtor,a=xs(t);r||n.removeAll(),t.diff(r).add(function(i){var r=t.getItemLayout(i);if(ys(t,r,i,e)){var s=new o(t,i,a);s.attr("position",r),t.setItemGraphicEl(i,s),n.add(s)}}).update(function(s,l){var u=r.getItemGraphicEl(l),c=t.getItemLayout(s);ys(t,c,s,e)?(u?(u.updateData(t,s,a),qi(u,{position:c},i)):(u=new o(t,s)).attr("position",c),n.add(u),t.setItemGraphicEl(s,u)):n.remove(u)}).remove(function(t){var e=r.getItemGraphicEl(t);e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},xg.isPersistent=function(){return!0},xg.updateLayout=function(){var t=this._data;t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n);e.attr("position",i)})},xg.incrementalPrepareUpdate=function(t){this._seriesScope=xs(t),this._data=null,this.group.removeAll()},xg.incrementalUpdate=function(t,e,n){n=_s(n);for(var i=t.start;i<t.end;i++){var r=e.getItemLayout(i);if(ys(e,r,i,n)){var o=new this._symbolCtor(e,i,this._seriesScope);o.traverse(function(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}),o.attr("position",r),this.group.add(o),e.setItemGraphicEl(i,o)}}},xg.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()};var bg=function(t,e,n,i,r,o,a,s){for(var l=Ms(t,e),u=[],c=[],h=[],f=[],d=[],p=[],g=[],v=bs(r,e,a),m=bs(o,t,s),y=0;y<l.length;y++){var _=l[y],x=!0;switch(_.cmd){case"=":var b=t.getItemLayout(_.idx),w=e.getItemLayout(_.idx1);(isNaN(b[0])||isNaN(b[1]))&&(b=w.slice()),u.push(b),c.push(w),h.push(n[_.idx]),f.push(i[_.idx1]),g.push(e.getRawIndex(_.idx1));break;case"+":S=_.idx,u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0],S),e.get(v.dataDimsForPoint[1],S)])),c.push(e.getItemLayout(S).slice()),h.push(Ss(v,r,e,S)),f.push(i[S]),g.push(e.getRawIndex(S));break;case"-":var S=_.idx,M=t.getRawIndex(S);M!==S?(u.push(t.getItemLayout(S)),c.push(o.dataToPoint([t.get(m.dataDimsForPoint[0],S),t.get(m.dataDimsForPoint[1],S)])),h.push(n[S]),f.push(Ss(m,o,t,S)),g.push(M)):x=!1}x&&(d.push(_),p.push(p.length))}p.sort(function(t,e){return g[t]-g[e]});var C=[],k=[],T=[],I=[],D=[];for(y=0;y<p.length;y++)S=p[y],C[y]=u[S],k[y]=c[S],T[y]=h[S],I[y]=f[S],D[y]=d[S];return{current:C,next:k,stackedOnCurrent:T,stackedOnNext:I,status:D}},wg=Z,Sg=K,Mg=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},Cg=function(t,e){return t[0]=e[0],t[1]=e[1],t},kg=[],Tg=[],Ig=[],Dg=si.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:bf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,o=Ds(n,e.smoothConstraint);if(e.connectNulls){for(;r>0&&Cs(n[r-1]);r--);for(;i<r&&Cs(n[i]);i++);}for(;i<r;)i+=ks(t,n,i,r,r,1,o.min,o.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),Ag=si.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:bf(si.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,o=n.length,a=e.smoothMonotone,s=Ds(n,e.smoothConstraint),l=Ds(i,e.smoothConstraint);if(e.connectNulls){for(;o>0&&Cs(n[o-1]);o--);for(;r<o&&Cs(n[r]);r++);}for(;r<o;){var u=ks(t,n,r,o,o,1,s.min,s.max,e.smooth,a,e.connectNulls);ks(t,i,r+u-1,u,o,-1,l.min,l.max,e.stackedOnSmooth,a,e.connectNulls),r+=u+1,t.closePath()}}});Bo.extend({type:"line",init:function(){var t=new pc,e=new ms;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var i=t.coordinateSystem,r=this.group,o=t.getData(),a=t.getModel("lineStyle"),s=t.getModel("areaStyle"),u=o.mapArray(o.getItemLayout),c="polar"===i.type,h=this._coordSys,f=this._symbolDraw,d=this._polyline,p=this._polygon,g=this._lineGroup,v=t.get("animation"),m=!s.isEmpty(),y=s.get("origin"),_=Ls(i,o,bs(i,o,y)),x=t.get("showSymbol"),b=x&&!c&&$s(t,o,i),w=this._data;w&&w.eachItemGraphicEl(function(t,e){t.__temp&&(r.remove(t),w.setItemGraphicEl(e,null))}),x||f.remove(),r.add(g);var S=!c&&t.get("step");d&&h.type===i.type&&S===this._step?(m&&!p?p=this._newPolygon(u,_,i,v):p&&!m&&(g.remove(p),p=this._polygon=null),g.setClipPath(Bs(i,!1,!1,t)),x&&f.updateData(o,{isIgnore:b,clipShape:Bs(i,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),As(this._stackedOnPoints,_)&&As(this._points,u)||(v?this._updateAnimation(o,_,i,n,S,y):(S&&(u=Rs(u,i,S),_=Rs(_,i,S)),d.setShape({points:u}),p&&p.setShape({points:u,stackedOnPoints:_})))):(x&&f.updateData(o,{isIgnore:b,clipShape:Bs(i,!1,!0,t)}),S&&(u=Rs(u,i,S),_=Rs(_,i,S)),d=this._newPolyline(u,i,v),m&&(p=this._newPolygon(u,_,i,v)),g.setClipPath(Bs(i,!0,!1,t)));var M=zs(o,i)||o.getVisual("color");d.useStyle(l(a.getLineStyle(),{fill:"none",stroke:M,lineJoin:"bevel"}));var C=t.get("smooth");if(C=Os(t.get("smooth")),d.setShape({smooth:C,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),p){var k=o.getCalculationInfo("stackedOnSeries"),T=0;p.useStyle(l(s.getAreaStyle(),{fill:M,opacity:.7,lineJoin:"bevel"})),k&&(T=Os(k.get("smooth"))),p.setShape({smooth:C,stackedOnSmooth:T,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=i,this._stackedOnPoints=_,this._points=u,this._step=S,this._valueOrigin=y},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=vn(r,i);if(!(o instanceof Array)&&null!=o&&o>=0){var a=r.getItemGraphicEl(o);if(!a){var s=r.getItemLayout(o);if(!s)return;(a=new ps(r,o)).position=s,a.setZ(t.get("zlevel"),t.get("z")),a.ignore=isNaN(s[0])||isNaN(s[1]),a.__temp=!0,r.setItemGraphicEl(o,a),a.stopSymbolAnimation(!0),this.group.add(a)}a.highlight()}else Bo.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),o=vn(r,i);if(null!=o&&o>=0){var a=r.getItemGraphicEl(o);a&&(a.__temp?(r.setItemGraphicEl(o,null),this.group.remove(a)):a.downplay())}else Bo.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new Dg({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new Ag({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,o){var a=this._polyline,s=this._polygon,l=t.hostModel,u=bg(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,o),c=u.current,h=u.stackedOnCurrent,f=u.next,d=u.stackedOnNext;r&&(c=Rs(u.current,n,r),h=Rs(u.stackedOnCurrent,n,r),f=Rs(u.next,n,r),d=Rs(u.stackedOnNext,n,r)),a.shape.__points=u.current,a.shape.points=c,qi(a,{shape:{points:f}},l),s&&(s.setShape({points:c,stackedOnPoints:h}),qi(s,{shape:{points:f,stackedOnPoints:d}},l));for(var p=[],g=u.status,v=0;v<g.length;v++)if("="===g[v].cmd){var m=t.getItemGraphicEl(g[v].idx1);m&&p.push({el:m,ptIdx:v})}a.animators&&a.animators.length&&a.animators[0].during(function(){for(var t=0;t<p.length;t++)p[t].el.attr("position",a.shape.__points[p[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});var Og={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++);return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0;return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n]);return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},Pg=function(t,e){return Math.round(t.length/2)};js.prototype.parse=function(t){return t},js.prototype.getSetting=function(t){return this._setting[t]},js.prototype.contain=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},js.prototype.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},js.prototype.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},js.prototype.unionExtent=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},js.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},js.prototype.getExtent=function(){return this._extent.slice()},js.prototype.setExtent=function(t,e){var n=this._extent;isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},js.prototype.isBlank=function(){return this._isBlank},js.prototype.setBlank=function(t){this._isBlank=t},js.prototype.getLabel=null,Mn(js),In(js,{registerWhenExtend:!0}),Vs.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&g(n,Hs);return new Vs({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})};var Lg=Vs.prototype;Lg.getOrdinal=function(t){return Ws(this).get(t)},Lg.parseAndCollect=function(t){var e,n=this._needCollect;if("string"!=typeof t&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var i=Ws(this);return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e};var Eg=js.prototype,Ng=js.extend({type:"ordinal",init:function(t,e){t&&!x(t)||(t=new Vs({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),Eg.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return Eg.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(Eg.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++;return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:$,niceExtent:$});Ng.create=function(){return new Ng};var Bg=rr,Rg=rr,zg=js.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent;isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),zg.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=Us(t)},getTicks:function(){return Ys(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return"";var n=e&&e.precision;return null==n?n=or(t)||0:"auto"===n&&(n=this._intervalPrecision),t=Rg(t,n,!0),pr(t)},niceTicks:function(t,e,n){t=t||5;var i=this._extent,r=i[1]-i[0];if(isFinite(r)){r<0&&(r=-r,i.reverse());var o=Gs(i,t,e,n);this._intervalPrecision=o.intervalPrecision,this._interval=o.interval,this._niceExtent=o.niceTickExtent}},niceExtent:function(t){var e=this._extent;if(e[0]===e[1])if(0!==e[0]){var n=e[0];t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1;var i=e[1]-e[0];isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var r=this._interval;t.fixMin||(e[0]=Rg(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=Rg(Math.ceil(e[1]/r)*r))}});zg.create=function(){return new zg};var $g="__ec_stack_",Fg="undefined"!=typeof Float32Array?Float32Array:Array,jg={seriesType:"bar",plan:Jd(),reset:function(t){if(nl(t)&&il(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),o=e.mapDimension(r.dim),a=e.mapDimension(i.dim),s=r.isHorizontal(),l=s?0:1,u=el(Qs([t]),i,t).width;return u>.5||(u=.5),{progress:function(t,e){for(var c,h=new Fg(2*t.count),f=[],d=[],p=0;null!=(c=t.next());)d[l]=e.get(o,c),d[1-l]=e.get(a,c),f=n.dataToPoint(d,null,f),h[p++]=f[0],h[p++]=f[1];e.setLayout({largePoints:h,barWidth:u,valueAxisStart:rl(i,r,!1),valueAxisHorizontal:s})}}}}},Vg=zg.prototype,Wg=Math.ceil,Hg=Math.floor,Gg=function(t,e,n,i){for(;n<i;){var r=n+i>>>1;t[r][1]<e?n=r+1:i=r}return n},Ug=zg.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t);return _r(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent;if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date;e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval);var i=this._interval;t.fixMin||(e[0]=rr(Hg(e[0]/i)*i)),t.fixMax||(e[1]=rr(Wg(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10;var i=this._extent,r=i[1]-i[0],o=r/t;null!=e&&o<e&&(o=e),null!=n&&o>n&&(o=n);var a=qg.length,s=Gg(qg,o,0,a),l=qg[Math.min(s,a-1)],u=l[1];"year"===l[0]&&(u*=dr(r/u/t,!0));var c=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,h=[Math.round(Wg((i[0]-c)/u)*u+c),Math.round(Hg((i[1]-c)/u)*u+c)];Xs(h,i),this._stepLvl=l,this._interval=u,this._niceExtent=h},parse:function(t){return+cr(t)}});p(["contain","normalize"],function(t){Ug.prototype[t]=function(e){return Vg[t].call(this,this.parse(e))}});var qg=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]];Ug.create=function(t){return new Ug({useUTC:t.ecModel.get("useUTC")})};var Xg=js.prototype,Yg=zg.prototype,Zg=or,Kg=rr,Jg=Math.floor,Qg=Math.ceil,tv=Math.pow,ev=Math.log,nv=js.extend({type:"log",base:10,$constructor:function(){js.apply(this,arguments),this._originalScale=new zg},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent();return g(Yg.getTicks.call(this),function(i){var r=rr(tv(this.base,i));return r=i===e[0]&&t.__fixMin?ol(r,n[0]):r,i===e[1]&&t.__fixMax?ol(r,n[1]):r},this)},getLabel:Yg.getLabel,scale:function(t){return t=Xg.scale.call(this,t),tv(this.base,t)},setExtent:function(t,e){var n=this.base;t=ev(t)/ev(n),e=ev(e)/ev(n),Yg.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=Xg.getExtent.call(this);e[0]=tv(t,e[0]),e[1]=tv(t,e[1]);var n=this._originalScale,i=n.getExtent();return n.__fixMin&&(e[0]=ol(e[0],i[0])),n.__fixMax&&(e[1]=ol(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t);var e=this.base;t[0]=ev(t[0])/ev(e),t[1]=ev(t[1])/ev(e),Xg.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10;var e=this._extent,n=e[1]-e[0];if(!(n===1/0||n<=0)){var i=hr(n);for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10;var r=[rr(Qg(e[0]/i)*i),rr(Jg(e[1]/i)*i)];this._interval=i,this._niceExtent=r}},niceExtent:function(t){Yg.niceExtent.call(this,t);var e=this._originalScale;e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}});p(["contain","normalize"],function(t){nv.prototype[t]=function(e){return e=ev(e)/ev(this.base),Xg[t].call(this,e)}}),nv.create=function(){return new nv};var iv=function(t){this._axes={},this._dimList=[],this.name=t||""};iv.prototype={constructor:iv,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return g(this._dimList,gl,this)},getAxesByScale:function(t){return t=t.toLowerCase(),m(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var o=n[r],a=this._axes[o];i[o]=a[e](t[o])}return i}},vl.prototype={constructor:vl,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),o=i.getExtent(),a=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(r[0],r[1]),a),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},h(vl,iv);var rv=mn(),ov=[0,1],av=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};av.prototype={constructor:av,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return ar(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count()),nr(t,ov,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&Pl(n=n.slice(),i.count());var r=nr(t,n,ov,e);return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=yl(this,e),i=g(n.ticks,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),r=e.get("alignWithLabel");return Ll(this,i,n.tickCategoryInterval,r,t.clamp),i},getViewLabels:function(){return ml(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return Tl(this)}};var sv=function(t,e,n,i,r){av.call(this,t,e,n),this.type=i||"value",this.position=r||"bottom"};sv.prototype={constructor:sv,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},h(sv,av);var lv={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},uv={};uv.categoryAxis=o({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},lv),uv.valueAxis=o({boundaryGap:[0,0],splitNumber:5},lv),uv.timeAxis=l({scale:!0,min:"dataMin",max:"dataMax"},uv.valueAxis),uv.logAxis=l({scale:!0,logBase:10},uv.valueAxis);var cv=["value","category","time","log"],hv=function(t,e,n,i){p(cv,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,i){var a=this.layoutMode,s=a?Sr(e):{};o(e,i.getTheme().get(r+"Axis")),o(e,this.getDefaultOption()),e.type=n(t,e),a&&wr(e,s,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=Vs.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:a([{},uv[r+"Axis"],i],!0)})}),ud.registerSubTypeDefaulter(t+"Axis",_(n,t))},fv={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!T(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:$,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}},dv=ud.extend({type:"cartesian2dAxis",axis:null,init:function(){dv.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){dv.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){dv.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});o(dv.prototype,fv);var pv={offset:0};hv("x",dv,El,pv),hv("y",dv,El,pv),ud.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});var gv=Bl.prototype;gv.type="grid",gv.axisPointerEnabled=!0,gv.getRect=function(){return this._rect},gv.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),p(n.x,function(t){ll(t.scale,t.model)}),p(n.y,function(t){ll(t.scale,t.model)}),p(n.x,function(t){Rl(n,"y",t)}),p(n.y,function(t){Rl(n,"x",t)}),this.resize(this.model,e)},gv.resize=function(t,e,n){function i(){p(o,function(t){var e=t.isHorizontal(),n=e?[0,r.width]:[0,r.height],i=t.inverse?1:0;t.setExtent(n[i],n[1-i]),$l(t,e?r.x:r.y)})}var r=br(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=r;var o=this._axesList;i(),!n&&t.get("containLabel")&&(p(o,function(t){if(!t.model.get("axisLabel.inside")){var e=dl(t);if(e){var n=t.isHorizontal()?"height":"width",i=t.model.get("axisLabel.margin");r[n]-=e[n]+i,"top"===t.position?r.y+=e.height+i:"left"===t.position&&(r.x+=e.width+i)}}}),i())},gv.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},gv.getAxes=function(){return this._axesList.slice()},gv.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}S(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,r=this._coordsList;i<r.length;i++)if(r[i].getAxis("x").index===t||r[i].getAxis("y").index===e)return r[i]},gv.getCartesians=function(){return this._coordsList.slice()},gv.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},gv.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},gv._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,o=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],a=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],s=e.gridModel,l=this._coordsList;return r?c(l,n=r.coordinateSystem)<0&&(n=null):o&&a?n=this.getCartesian(o.componentIndex,a.componentIndex):o?i=this.getAxis("x",o.componentIndex):a?i=this.getAxis("y",a.componentIndex):s&&s.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},gv.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},gv._initCartesian=function(t,e,n){function i(n){return function(i,s){if(Nl(i,t,e)){var l=i.get("position");"x"===n?"top"!==l&&"bottom"!==l&&r[l="bottom"]&&(l="top"===l?"bottom":"top"):"left"!==l&&"right"!==l&&r[l="left"]&&(l="left"===l?"right":"left"),r[l]=!0;var u=new sv(n,ul(i),[0,0],i.get("type"),l),c="category"===u.type;u.onBand=c&&i.get("boundaryGap"),u.inverse=i.get("inverse"),i.axis=u,u.model=i,u.grid=this,u.index=s,this._axesList.push(u),o[n][s]=u,a[n]++}}}var r={left:!1,right:!1,top:!1,bottom:!1},o={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",i("x"),this),e.eachComponent("yAxis",i("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);this._axesMap=o,p(o.x,function(e,n){p(o.y,function(i,r){var o="x"+n+"y"+r,a=new vl(o);a.grid=this,a.model=t,this._coordsMap[o]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(i)},this)},this)},gv._updateScale=function(t,e){function n(t,e,n){p(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,ss(t,n))})}p(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(jl(i)){var r=Fl(i),o=r[0],a=r[1];if(!Nl(o,e,t)||!Nl(a,e,t))return;var s=this.getCartesian(o.componentIndex,a.componentIndex),l=i.getData(),u=s.getAxis("x"),c=s.getAxis("y");"list"===l.type&&(n(l,u),n(l,c))}},this)},gv.getTooltipAxes=function(t){var e=[],n=[];return p(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(r);c(e,r)<0&&e.push(r),c(n,o)<0&&n.push(o)}),{baseAxes:e,otherAxes:n}};var vv=["xAxis","yAxis"];Bl.create=function(t,e){var n=[];return t.eachComponent("grid",function(i,r){var o=new Bl(i,t,e);o.name="grid_"+r,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)}),t.eachSeries(function(t){if(jl(t)){var e=Fl(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},Bl.dimensions=Bl.prototype.dimensions=vl.prototype.dimensions,Yr.register("cartesian2d",Bl);var mv=Math.PI,yv=function(t,e){this.opt=e,this.axisModel=t,l(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new pc;var n=new pc({position:e.position.slice(),rotation:e.rotation});n.updateTransform(),this._transform=n.transform,this._dumbGroup=n};yv.prototype={constructor:yv,hasBuilder:function(t){return!!_v[t]},add:function(t){_v[t].call(this)},getGroup:function(){return this.group}};var _v={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],o=[n[1],0];i&&(Y(r,r,i),Y(o,o,i));var a=s({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new Df(wi({anid:"line",shape:{x1:r[0],y1:r[1],x2:o[0],y2:o[1]},style:a,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})));var l=e.get("axisLine.symbol"),u=e.get("axisLine.symbolSize"),c=e.get("axisLine.symbolOffset")||0;if("number"==typeof c&&(c=[c,c]),null!=l){"string"==typeof l&&(l=[l,l]),"string"!=typeof u&&"number"!=typeof u||(u=[u,u]);var h=u[0],f=u[1];p([{rotate:t.rotation+Math.PI/2,offset:c[0],r:0},{rotate:t.rotation-Math.PI/2,offset:c[1],r:Math.sqrt((r[0]-o[0])*(r[0]-o[0])+(r[1]-o[1])*(r[1]-o[1]))}],function(e,n){if("none"!==l[n]&&null!=l[n]){var i=fs(l[n],-h/2,-f/2,h,f,a.stroke,!0),o=e.r+e.offset,s=[r[0]+o*Math.cos(t.rotation),r[1]-o*Math.sin(t.rotation)];i.attr({rotation:e.rotate,position:s,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=Yl(this,t,e);Gl(t,Zl(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=I(t.axisName,e.get("name"));if(n){var i,r,o=e.get("nameLocation"),a=t.nameDirection,l=e.getModel("nameTextStyle"),u=e.get("nameGap")||0,c=this.axisModel.axis.getExtent(),h=c[0]>c[1]?-1:1,f=["start"===o?c[0]-h*u:"end"===o?c[1]+h*u:(c[0]+c[1])/2,Xl(o)?t.labelOffset+a*u:0],d=e.get("nameRotate");null!=d&&(d=d*mv/180),Xl(o)?i=xv(t.rotation,null!=d?d:t.rotation,a):(i=Wl(t,o,d||0,c),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(i.rotation)),!isFinite(r)&&(r=null)));var p=l.getFont(),g=e.get("nameTruncate",!0)||{},v=g.ellipsis,m=I(t.nameTruncateMaxWidth,g.maxWidth,r),y=null!=v&&null!=m?id(n,m,p,v,{minChar:2,placeholder:g.placeholder}):n,_=e.get("tooltip",!0),x=e.mainType,b={componentType:x,name:n,$vars:["name"]};b[x+"Index"]=e.componentIndex;var w=new yf({anid:"name",__fullText:n,__truncatedText:y,position:f,rotation:i.rotation,silent:Hl(e),z2:1,tooltip:_&&_.show?s({content:n,formatter:function(){return n},formatterParams:b},_):null});zi(w.style,l,{text:y,textFont:p,textFill:l.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(w.eventData=Vl(e),w.eventData.targetType="axisName",w.eventData.name=n),this._dumbGroup.add(w),w.updateTransform(),this.group.add(w),w.decomposeTransform()}}},xv=yv.innerTextLayout=function(t,e,n){var i,r,o=lr(e-t);return ur(o)?(r=n>0?"top":"bottom",i="center"):ur(o-mv)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=o>0&&o<mv?n>0?"right":"left":n>0?"left":"right"),{rotation:o,textAlign:i,textVerticalAlign:r}},bv=Na({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&Kl(t),bv.superApply(this,"render",arguments),nu(this,t,0,n,0,!0)},updateAxisPointer:function(t,e,n,i,r){nu(this,t,0,n,0,!1)},remove:function(t,e){var n=this._axisPointer;n&&n.remove(e),bv.superApply(this,"remove",arguments)},dispose:function(t,e){iu(this,e),bv.superApply(this,"dispose",arguments)}}),wv=[];bv.registerAxisPointerClass=function(t,e){wv[t]=e},bv.getAxisPointerClass=function(t){return t&&wv[t]};var Sv=["axisLine","axisTickLabel","axisName"],Mv=["splitArea","splitLine"],Cv=bv.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,i){this.group.removeAll();var r=this._axisGroup;if(this._axisGroup=new pc,this.group.add(this._axisGroup),t.get("show")){var o=t.getCoordSysModel(),a=ru(o,t),s=new yv(t,a);p(Sv,s.add,s),this._axisGroup.add(s.getGroup()),p(Mv,function(e){t.get(e+".show")&&this["_"+e](t,o)},this),Zi(r,this._axisGroup,t),Cv.superCall(this,"render",t,e,n,i)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitLine"),r=i.getModel("lineStyle"),o=r.get("color");o=x(o)?o:[o];for(var a=e.coordinateSystem.getRect(),s=n.isHorizontal(),u=0,c=n.getTicksCoords({tickModel:i}),h=[],f=[],d=r.getLineStyle(),p=0;p<c.length;p++){var g=n.toGlobalCoord(c[p].coord);s?(h[0]=g,h[1]=a.y,f[0]=g,f[1]=a.y+a.height):(h[0]=a.x,h[1]=g,f[0]=a.x+a.width,f[1]=g);var v=u++%o.length,m=c[p].tickValue;this._axisGroup.add(new Df(wi({anid:null!=m?"line_"+c[p].tickValue:null,shape:{x1:h[0],y1:h[1],x2:f[0],y2:f[1]},style:l({stroke:o[v]},d),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis;if(!n.scale.isBlank()){var i=t.getModel("splitArea"),r=i.getModel("areaStyle"),o=r.get("color"),a=e.coordinateSystem.getRect(),s=n.getTicksCoords({tickModel:i,clamp:!0});if(s.length){var u=o.length,c=this._splitAreaColors,h=z(),f=0;if(c)for(v=0;v<s.length;v++){var d=c.get(s[v].tickValue);if(null!=d){f=(d+(u-1)*v)%u;break}}var p=n.toGlobalCoord(s[0].coord),g=r.getAreaStyle();o=x(o)?o:[o];for(var v=1;v<s.length;v++){var m,y,_,b,w=n.toGlobalCoord(s[v].coord);n.isHorizontal()?(m=p,y=a.y,_=w-m,b=a.height,p=m+_):(m=a.x,y=p,_=a.width,p=y+(b=w-y));var S=s[v-1].tickValue;null!=S&&h.set(S,f),this._axisGroup.add(new If({anid:null!=S?"area_"+S:null,shape:{x:m,y:y,width:_,height:b},style:l({fill:o[f]},g),silent:!0})),f=(f+1)%u}this._splitAreaColors=h}}}});Cv.extend({type:"xAxis"}),Cv.extend({type:"yAxis"}),Na({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new If({shape:t.coordinateSystem.getRect(),style:l({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),Ia(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}),Pa(function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var o=t.getData(),a=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect");if(o.setVisual({legendSymbol:n||a,symbol:a,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s;return{dataEach:o.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n);e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var o=e.getItemModel(n),a=o.getShallow("symbol",!0),l=o.getShallow("symbolSize",!0),u=o.getShallow("symbolKeepAspect",!0);null!=a&&e.setItemVisual(n,"symbol",a),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}("line","circle","line")),Oa(function(t){return{seriesType:t,plan:Jd(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,i=t.pipelineContext.large;if(n){var r=g(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),o=r.length,a=e.getCalculationInfo("stackResultDimension");return as(e,r[0])&&(r[0]=a),as(e,r[1])&&(r[1]=a),o&&{progress:function(t,e){for(var a=t.end-t.start,s=i&&new Float32Array(a*o),l=t.start,u=0,c=[],h=[];l<t.end;l++){var f;if(1===o)d=e.get(r[0],l),f=!isNaN(d)&&n.dataToPoint(d,null,h);else{var d=c[0]=e.get(r[0],l),p=c[1]=e.get(r[1],l);f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(c,null,h)}i?(s[u++]=f?f[0]:NaN,s[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}i&&e.setLayout("symbolPoints",s)}}}}}}("line")),Da(kp.PROCESSOR.STATISTIC,function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,n){var i=t.getData(),r=t.get("sampling"),o=t.coordinateSystem;if("cartesian2d"===o.type&&r){var a,s=o.getBaseAxis(),l=o.getOtherAxis(s),u=s.getExtent(),c=u[1]-u[0],h=Math.round(i.count()/c);if(h>1)"string"==typeof r?a=Og[r]:"function"==typeof r&&(a=r),a&&t.setData(i.downSample(i.mapDimension(l.dim),1/h,a,Pg))}}}}("line")),Yd.extend({type:"series.__base_bar__",getInitialData:function(t,e){return ls(this.getSource(),this)},getMarkerPosition:function(t){var e=this.coordinateSystem;if(e){var n=e.dataToPoint(e.clampData(t)),i=this.getData(),r=i.getLayout("offset"),o=i.getLayout("size");return n[e.getBaseAxis().isHorizontal()?0:1]+=r+o/2,n}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}}).extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var t=this.get("progressiveThreshold"),e=this.get("largeThreshold");return e>t&&(t=e),t}});var kv=hh([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),Tv={getBarItemStyle:function(t){var e=kv(this,t);if(this.getBorderLineDash){var n=this.getBorderLineDash();n&&(e.lineDash=n)}return e}},Iv=["itemStyle","barBorderWidth"];s(Ki.prototype,Tv),Ra({type:"bar",render:function(t,e,n){this._updateDrawMode(t);var i=t.get("coordinateSystem");return"cartesian2d"!==i&&"polar"!==i||(this._isLargeDraw?this._renderLarge(t,e,n):this._renderNormal(t,e,n)),this.group},incrementalPrepareRender:function(t,e,n){this._clear(),this._updateDrawMode(t)},incrementalRender:function(t,e,n,i){this._incrementalRenderLarge(t,e)},_updateDrawMode:function(t){var e=t.pipelineContext.large;(null==this._isLargeDraw||e^this._isLargeDraw)&&(this._isLargeDraw=e,this._clear())},_renderNormal:function(t,e,n){var i,r=this.group,o=t.getData(),a=this._data,s=t.coordinateSystem,l=s.getBaseAxis();"cartesian2d"===s.type?i=l.isHorizontal():"polar"===s.type&&(i="angle"===l.dim);var u=t.isAnimationEnabled()?t:null;o.diff(a).add(function(e){if(o.hasValue(e)){var n=o.getItemModel(e),a=Av[s.type](o,e,n),l=Dv[s.type](o,e,n,a,i,u);o.setItemGraphicEl(e,l),r.add(l),uu(l,o,e,n,a,t,i,"polar"===s.type)}}).update(function(e,n){var l=a.getItemGraphicEl(n);if(o.hasValue(e)){var c=o.getItemModel(e),h=Av[s.type](o,e,c);l?qi(l,{shape:h},u,e):l=Dv[s.type](o,e,c,h,i,u,!0),o.setItemGraphicEl(e,l),r.add(l),uu(l,o,e,c,h,t,i,"polar"===s.type)}else r.remove(l)}).remove(function(t){var e=a.getItemGraphicEl(t);"cartesian2d"===s.type?e&&su(t,u,e):e&&lu(t,u,e)}).execute(),this._data=o},_renderLarge:function(t,e,n){this._clear(),hu(t,this.group)},_incrementalRenderLarge:function(t,e){hu(e,this.group,!0)},dispose:$,remove:function(t){this._clear(t)},_clear:function(t){var e=this.group,n=this._data;t&&t.get("animation")&&n&&!this._isLargeDraw?n.eachItemGraphicEl(function(e){"sector"===e.type?lu(e.dataIndex,t,e):su(e.dataIndex,t,e)}):e.removeAll(),this._data=null}});var Dv={cartesian2d:function(t,e,n,i,r,o,a){var l=new If({shape:s({},i)});if(o){var u=l.shape,c=r?"height":"width",h={};u[c]=0,h[c]=i[c],Vf[a?"updateProps":"initProps"](l,{shape:h},o,e)}return l},polar:function(t,e,n,i,r,o,a){var s=i.startAngle<i.endAngle,u=new wf({shape:l({clockwise:s},i)});if(o){var c=u.shape,h=r?"r":"endAngle",f={};c[h]=r?0:i.startAngle,f[h]=i[h],Vf[a?"updateProps":"initProps"](u,{shape:f},o,e)}return u}},Av={cartesian2d:function(t,e,n){var i=t.getItemLayout(e),r=cu(n,i),o=i.width>0?1:-1,a=i.height>0?1:-1;return{x:i.x+o*r/2,y:i.y+a*r/2,width:i.width-o*r,height:i.height-a*r}},polar:function(t,e,n){var i=t.getItemLayout(e);return{cx:i.cx,cy:i.cy,r0:i.r0,r:i.r,startAngle:i.startAngle,endAngle:i.endAngle}}},Ov=si.extend({type:"largeBar",shape:{points:[]},buildPath:function(t,e){for(var n=e.points,i=this.__startPoint,r=this.__valueIdx,o=0;o<n.length;o+=2)i[this.__valueIdx]=n[o+r],t.moveTo(i[0],i[1]),t.lineTo(n[o],n[o+1])}});Oa(_(function(t,e){var n=Js(t,e),i=Qs(n),r={};p(n,function(t){var e=t.getData(),n=t.coordinateSystem,o=n.getBaseAxis(),a=Zs(t),s=i[Ks(o)][a],l=s.offset,u=s.width,c=n.getOtherAxis(o),h=t.get("barMinHeight")||0;r[a]=r[a]||[],e.setLayout({offset:l,size:u});for(var f=e.mapDimension(c.dim),d=e.mapDimension(o.dim),p=as(e,f),g=c.isHorizontal(),v=rl(o,c,p),m=0,y=e.count();m<y;m++){var _=e.get(f,m),x=e.get(d,m);if(!isNaN(_)){var b,w,S,M,C=_>=0?"p":"n",k=v;if(p&&(r[a][x]||(r[a][x]={p:v,n:v}),k=r[a][x][C]),g)b=k,w=(T=n.dataToPoint([_,x]))[1]+l,S=T[0]-v,M=u,Math.abs(S)<h&&(S=(S<0?-1:1)*h),p&&(r[a][x][C]+=S);else{var T=n.dataToPoint([x,_]);b=T[0]+l,w=k,S=u,M=T[1]-v,Math.abs(M)<h&&(M=(M<=0?-1:1)*h),p&&(r[a][x][C]+=M)}e.setItemLayout(m,{x:b,y:w,width:S,height:M})}}},this)},"bar")),Oa(jg),Pa({seriesType:"bar",reset:function(t){t.getData().setVisual("legendSymbol","roundRect")}});var Pv=function(t,e,n){e=x(e)&&{coordDimensions:e}||s({},e);var i=t.getSource(),r=ag(i,e),o=new ig(r,t);return o.initData(i,n),o},Lv={updateSelectedMap:function(t){this._targetList=x(t)?t.slice():[],this._selectTargetMap=v(t||[],function(t,e){return t.set(e.name,e),t},z())},select:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);"single"===this.get("selectedMode")&&this._selectTargetMap.each(function(t){t.selected=!1}),n&&(n.selected=!0)},unSelect:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);n&&(n.selected=!1)},toggleSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);if(null!=n)return this[n.selected?"unSelect":"select"](t,e),n.selected},isSelected:function(t,e){var n=null!=e?this._targetList[e]:this._selectTargetMap.get(t);return n&&n.selected}},Ev=Ba({type:"series.pie",init:function(t){Ev.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this.updateSelectedMap(this._createSelectableList()),this._defaultLabelLine(t)},mergeOption:function(t){Ev.superCall(this,"mergeOption",t),this.updateSelectedMap(this._createSelectableList())},getInitialData:function(t,e){return Pv(this,["value"])},_createSelectableList:function(){for(var t=this.getRawData(),e=t.mapDimension("value"),n=[],i=0,r=t.count();i<r;i++)n.push({name:t.getName(i),value:t.get(e,i),selected:So(t,i,"selected")});return n},getDataParams:function(t){var e=this.getData(),n=Ev.superCall(this,"getDataParams",t),i=[];return e.each(e.mapDimension("value"),function(t){i.push(t)}),n.percent=sr(i,t,e.hostModel.get("percentPrecision")),n.$vars.push("percent"),n},_defaultLabelLine:function(t){un(t,"labelLine",["show"]);var e=t.labelLine,n=t.emphasis.labelLine;e.show=e.show&&t.label.show,n.show=n.show&&t.emphasis.label.show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,hoverOffset:10,avoidLabelOverlap:!0,percentPrecision:2,stillShowZeroSum:!0,label:{rotate:!1,show:!0,position:"outer"},labelLine:{show:!0,length:15,length2:15,smooth:!1,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},animationType:"expansion",animationEasing:"cubicOut"}});f(Ev,Lv);var Nv=gu.prototype;Nv.updateData=function(t,e,n){function i(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r+a.get("hoverOffset")}},300,"elasticOut")}function r(){o.stopAnimation(!0),o.animateTo({shape:{r:c.r}},300,"elasticOut")}var o=this.childAt(0),a=t.hostModel,u=t.getItemModel(e),c=t.getItemLayout(e),h=s({},c);h.label=null,n?(o.setShape(h),"scale"===a.getShallow("animationType")?(o.shape.r=c.r0,Xi(o,{shape:{r:c.r}},a,e)):(o.shape.endAngle=c.startAngle,qi(o,{shape:{endAngle:c.endAngle}},a,e))):qi(o,{shape:h},a,e);var f=t.getItemVisual(e,"color");o.useStyle(l({lineJoin:"bevel",fill:f},u.getModel("itemStyle").getItemStyle())),o.hoverStyle=u.getModel("emphasis.itemStyle").getItemStyle();var d=u.getShallow("cursor");d&&o.attr("cursor",d),pu(this,t.getItemLayout(e),a.isSelected(null,e),a.get("selectedOffset"),a.get("animation")),o.off("mouseover").off("mouseout").off("emphasis").off("normal"),u.get("hoverAnimation")&&a.isAnimationEnabled()&&o.on("mouseover",i).on("mouseout",r).on("emphasis",i).on("normal",r),this._updateLabel(t,e),Bi(this)},Nv._updateLabel=function(t,e){var n=this.childAt(1),i=this.childAt(2),r=t.hostModel,o=t.getItemModel(e),a=t.getItemLayout(e).label,s=t.getItemVisual(e,"color");qi(n,{shape:{points:a.linePoints||[[a.x,a.y],[a.x,a.y],[a.x,a.y]]}},r,e),qi(i,{style:{x:a.x,y:a.y}},r,e),i.attr({rotation:a.rotation,origin:[a.x,a.y],z2:10});var l=o.getModel("label"),u=o.getModel("emphasis.label"),c=o.getModel("labelLine"),h=o.getModel("emphasis.labelLine");s=t.getItemVisual(e,"color");Ri(i.style,i.hoverStyle={},l,u,{labelFetcher:t.hostModel,labelDataIndex:e,defaultText:t.getName(e),autoColor:s,useInsideStyle:!!a.inside},{textAlign:a.textAlign,textVerticalAlign:a.verticalAlign,opacity:t.getItemVisual(e,"opacity")}),i.ignore=i.normalIgnore=!l.get("show"),i.hoverIgnore=!u.get("show"),n.ignore=n.normalIgnore=!c.get("show"),n.hoverIgnore=!h.get("show"),n.setStyle({stroke:s,opacity:t.getItemVisual(e,"opacity")}),n.setStyle(c.getModel("lineStyle").getLineStyle()),n.hoverStyle=h.getModel("lineStyle").getLineStyle();var f=c.get("smooth");f&&!0===f&&(f=.4),n.setShape({smooth:f})},h(gu,pc),Bo.extend({type:"pie",init:function(){var t=new pc;this._sectorGroup=t},render:function(t,e,n,i){if(!i||i.from!==this.uid){var r=t.getData(),o=this._data,a=this.group,s=e.get("animation"),l=!o,u=t.get("animationType"),c=_(du,this.uid,t,s,n),h=t.get("selectedMode");if(r.diff(o).add(function(t){var e=new gu(r,t);l&&"scale"!==u&&e.eachChild(function(t){t.stopAnimation(!0)}),h&&e.on("click",c),r.setItemGraphicEl(t,e),a.add(e)}).update(function(t,e){var n=o.getItemGraphicEl(e);n.updateData(r,t),n.off("click"),h&&n.on("click",c),a.add(n),r.setItemGraphicEl(t,n)}).remove(function(t){var e=o.getItemGraphicEl(t);a.remove(e)}).execute(),s&&l&&r.count()>0&&"scale"!==u){var f=r.getItemLayout(0),d=Math.max(n.getWidth(),n.getHeight())/2,p=y(a.removeClipPath,a);a.setClipPath(this._createClipPath(f.cx,f.cy,d,f.startAngle,f.clockwise,p,t))}this._data=r}},dispose:function(){},_createClipPath:function(t,e,n,i,r,o,a){var s=new wf({shape:{cx:t,cy:e,r0:0,r:n,startAngle:i,endAngle:i,clockwise:r}});return Xi(s,{shape:{endAngle:i+(r?1:-1)*Math.PI*2}},a,o),s},containPoint:function(t,e){var n=e.getData().getItemLayout(0);if(n){var i=t[0]-n.cx,r=t[1]-n.cy,o=Math.sqrt(i*i+r*r);return o<=n.r&&o>=n.r0}}});var Bv=function(t,e,n,i){var r,o,a=t.getData(),s=[],l=!1;a.each(function(n){var i,u,c,h,f=a.getItemLayout(n),d=a.getItemModel(n),p=d.getModel("label"),g=p.get("position")||d.get("emphasis.label.position"),v=d.getModel("labelLine"),m=v.get("length"),y=v.get("length2"),_=(f.startAngle+f.endAngle)/2,x=Math.cos(_),b=Math.sin(_);r=f.cx,o=f.cy;var w="inside"===g||"inner"===g;if("center"===g)i=f.cx,u=f.cy,h="center";else{var S=(w?(f.r+f.r0)/2*x:f.r*x)+r,M=(w?(f.r+f.r0)/2*b:f.r*b)+o;if(i=S+3*x,u=M+3*b,!w){var C=S+x*(m+e-f.r),k=M+b*(m+e-f.r),T=C+(x<0?-1:1)*y,I=k;i=T+(x<0?-5:5),u=I,c=[[S,M],[C,k],[T,I]]}h=w?"center":x>0?"left":"right"}var D=p.getFont(),A=p.get("rotate")?x<0?-_+Math.PI:-_:0,O=ie(t.getFormattedLabel(n,"normal")||a.getName(n),D,h,"top");l=!!A,f.label={x:i,y:u,position:g,height:O.height,len:m,len2:y,linePoints:c,textAlign:h,verticalAlign:"middle",rotation:A,inside:w},w||s.push(f.label)}),!l&&t.get("avoidLabelOverlap")&&mu(s,r,o,e,n,i)},Rv=2*Math.PI,zv=Math.PI/180;!function(t,e){p(e,function(e){e.update="updateView",Aa(e,function(n,i){var r={};return i.eachComponent({mainType:"series",subType:t,query:n},function(t){t[e.method]&&t[e.method](n.name,n.dataIndex);var i=t.getData();i.each(function(e){var n=i.getName(e);r[n]=t.isSelected(n)||!1})}),{name:n.name,selected:r}})})}("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),Pa(function(t){return{getTargetSeries:function(e){var n={},i=z();return e.eachSeriesByType(t,function(t){t.__paletteScope=n,i.set(t.uid,t)}),i},reset:function(t,e){var n=t.getRawData(),i={},r=t.getData();r.each(function(t){var e=r.getRawIndex(t);i[e]=t}),n.each(function(e){var o=i[e],a=null!=o&&r.getItemVisual(o,"color",!0);if(a)n.setItemVisual(e,"color",a);else{var s=n.getItemModel(e).get("itemStyle.color")||t.getColorFromPalette(n.getName(e)||e+"",t.__paletteScope,n.count());n.setItemVisual(e,"color",s),null!=o&&r.setItemVisual(o,"color",s)}})}}}("pie")),Oa(_(function(t,e,n,i){e.eachSeriesByType(t,function(t){var e=t.getData(),i=e.mapDimension("value"),r=t.get("center"),o=t.get("radius");x(o)||(o=[0,o]),x(r)||(r=[r,r]);var a=n.getWidth(),s=n.getHeight(),l=Math.min(a,s),u=ir(r[0],a),c=ir(r[1],s),h=ir(o[0],l/2),f=ir(o[1],l/2),d=-t.get("startAngle")*zv,p=t.get("minAngle")*zv,g=0;e.each(i,function(t){!isNaN(t)&&g++});var v=e.getSum(i),m=Math.PI/(v||g)*2,y=t.get("clockwise"),_=t.get("roseType"),b=t.get("stillShowZeroSum"),w=e.getDataExtent(i);w[0]=0;var S=Rv,M=0,C=d,k=y?1:-1;if(e.each(i,function(t,n){var i;if(isNaN(t))e.setItemLayout(n,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:y,cx:u,cy:c,r0:h,r:_?NaN:f});else{(i="area"!==_?0===v&&b?m:t*m:Rv/g)<p?(i=p,S-=p):M+=t;var r=C+k*i;e.setItemLayout(n,{angle:i,startAngle:C,endAngle:r,clockwise:y,cx:u,cy:c,r0:h,r:_?nr(t,w,[h,f]):f}),C=r}}),S<Rv&&g)if(S<=.001){var T=Rv/g;e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n);i.angle=T,i.startAngle=d+k*n*T,i.endAngle=d+k*(n+1)*T}})}else m=S/M,C=d,e.each(i,function(t,n){if(!isNaN(t)){var i=e.getItemLayout(n),r=i.angle===p?p:t*m;i.startAngle=C,i.endAngle=C+k*r,C+=k*r}});Bv(t,f,a,s)})},"pie")),Da(function(t){return{seriesType:t,reset:function(t,e){var n=e.findComponents({mainType:"legend"});if(n&&n.length){var i=t.getData();i.filterSelf(function(t){for(var e=i.getName(t),r=0;r<n.length;r++)if(!n[r].isSelected(e))return!1;return!0})}}}}("pie")),t.version="4.1.0",t.dependencies=wp,t.PRIORITY=kp,t.init=function(t,e,n){var i=ka(t);if(i)return i;var r=new oa(t,e,n);return r.id="ec_"+Wp++,jp[r.id]=r,xn(t,Gp,r.id),Ma(r),r},t.connect=function(t){if(x(t)){var e=t;t=null,yp(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+Hp++,yp(e,function(e){e.group=t})}return Vp[t]=!0,t},t.disConnect=Ca,t.disconnect=qp,t.dispose=function(t){"string"==typeof t?t=jp[t]:t instanceof oa||(t=ka(t)),t instanceof oa&&!t.isDisposed()&&t.dispose()},t.getInstanceByDom=ka,t.getInstanceById=function(t){return jp[t]},t.registerTheme=Ta,t.registerPreprocessor=Ia,t.registerProcessor=Da,t.registerPostUpdate=function(t){Rp.push(t)},t.registerAction=Aa,t.registerCoordinateSystem=function(t,e){Yr.register(t,e)},t.getCoordinateSystemDimensions=function(t){var e=Yr.get(t);if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},t.registerLayout=Oa,t.registerVisual=Pa,t.registerLoading=Ea,t.extendComponentModel=function(t){return ud.extend(t)},t.extendComponentView=Na,t.extendSeriesModel=Ba,t.extendChartView=Ra,t.setCanvasCreator=function(t){i("createCanvas",t)},t.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),Up[t]={geoJson:e,specialAreas:n}},t.getMap=function(t){return Up[t]},t.dataTool=Xp})},d219:function(t,e,n){"use strict";n.r(e);var i=n("d5b7"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},d5b7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-drawer",props:{visible:{type:Boolean,default:!1},mode:String,mask:{type:[Boolean,String],default:!0}},data:function(){return{visibleSync:!1,showDrawer:!1,rightMode:!1,catchtouchmove:!1}},watch:{visible:function(t){var e=this;setTimeout(function(){e.showDrawer=t},100),t?this.visibleSync=t:setTimeout(function(){e.visibleSync=t},300)}},computed:{showMask:function(){return"true"===String(this.mask)}},created:function(){var t=this;this.visibleSync=this.visible,setTimeout(function(){t.showDrawer=t.visible},100),this.rightMode="right"===this.mode},methods:{close:function(){var t=this;this.showDrawer=!1,setTimeout(function(){t.visibleSync=!1,t.$emit("close")},300)}}};e.default=i},d734:function(t,e,n){},da92:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canvasId?n("canvas",{staticClass:"ec-canvas",attrs:{id:t.canvasId,canvasId:t.canvasId,eventid:"53499e7e-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd,error:t.error}}):t._e()},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},de83:function(t,e,n){},e0fa:function(t,e,n){"use strict";var i=n("f280"),r=n.n(i);r.a},e56c:function(t,e,n){"use strict";var i=n("ec79"),r=n.n(i);r.a},e5e7:function(t,e,n){"use strict";var i=n("5b0d"),r=n.n(i);r.a},e6d6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-list"};e.default=i},eb82:function(t,e,n){},ec79:function(t,e,n){},f280:function(t,e,n){},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,i,r){if(i!==r&&void 0!==i)if(null==i||null==r||typeof i!==typeof r)e[n]=i;else if(Array.isArray(i)&&Array.isArray(r))if(i.length===r.length)for(var o=0,a=i.length;o<a;++o)t(e,n+"["+o+"]",i[o],r[o]);else e[n]=i;else if("object"===typeof i&&"object"===typeof r){var s=Object.keys(i),l=Object.keys(r);if(s.length!==l.length)e[n]=i;else{var u=Object.create(null);for(o=0,a=s.length;o<a;++o)u[s[o]]=!0,u[l[o]]=!0;if(Object.keys(u).length!==s.length)e[n]=i;else for(o=0,a=s.length;o<a;++o){var c=s[o];t(e,n+"."+c,i[c],r[c])}}}else i!==r&&(e[n]=i)}function i(e,n){for(var i=Object.keys(e),r={},o=0,a=i.length;o<a;++o){for(var s=i[o],l=s.split("."),u=n[l[0]],c=1,h=l.length;c<h&&void 0!==u;++c)u=u[l[c]];t(r,s,e[s],u)}return r}function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function h(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function d(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var m=v("key,ref,slot,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),M=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/([^-])([A-Z])/g,k=b(function(t){return t.replace(C,"$1-$2").replace(C,"$1-$2").toLowerCase()});function T(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function I(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function D(t,e){for(var n in e)t[n]=e[n];return t}function A(t){for(var e={},n=0;n<t.length;n++)t[n]&&D(e,t[n]);return e}function O(t,e,n){}var P=function(t,e,n){return!1},L=function(t){return t};function E(t,e){var i=u(t),r=u(e);if(!i||!r)return!i&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function N(t,e){for(var n=0;n<t.length;n++)if(E(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R="data-server-rendered",z=["component","directive","filter"],$=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:O,parsePlatformTagName:L,mustUseProp:P,_lifecycleHooks:$},j=Object.freeze({});function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var H=/[^\w.$]/;function G(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var U=O;function q(t,e,n){if(F.errorHandler)F.errorHandler.call(null,t,e,n);else{if(!Z||"undefined"===typeof console)throw t;console.error(t)}}var X,Y="__proto__"in{},Z="undefined"!==typeof window,K=["mpvue-runtime"].join(),J=(K&&/msie|trident/.test(K),K&&K.indexOf("msie 9.0"),K&&K.indexOf("edge/")>0),Q=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)),tt=(K&&/chrome\/\d+/.test(K),{}.watch);if(Z)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===X&&(X=!Z&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),X},it=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ot,at="undefined"!==typeof Symbol&&rt(Symbol)&&"undefined"!==typeof Reflect&&rt(Reflect.ownKeys),st=function(){var t,e=[],i=!1;function r(){i=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&rt(Promise)){var o=Promise.resolve(),a=function(t){console.error(t)};t=function(){o.then(r).catch(a),Q&&setTimeout(O)}}else t=function(){setTimeout(r,0)};return function(r,o){var a;if(e.push(function(){if(r)try{r.call(o)}catch(n){q(n,o,"nextTick")}else a&&a(o)}),i||(i=!0,t()),!r&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();ot="undefined"!==typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var lt=0,ut=function(){this.id=lt++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){y(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ct=[];function ht(t){ut.target&&ct.push(ut.target),ut.target=t}function ft(){ut.target=ct.pop()}var dt=Array.prototype,pt=Object.create(dt);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=dt[t];W(pt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var gt=Object.getOwnPropertyNames(pt),vt={shouldConvert:!0},mt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=Y?yt:_t;e(t,pt,gt),this.observeArray(t)}else this.walk(t)};function yt(t,e,n){t.__proto__=e}function _t(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];W(t,o,e[o])}}function xt(t,e){var n;if(u(t))return x(t,"__ob__")&&t.__ob__ instanceof mt?n=t.__ob__:vt.shouldConvert&&!nt()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new mt(t)),e&&n&&n.vmCount++,n}function bt(t,e,n,i,r){var o=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set,u=!r&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(o.depend(),u&&u.dep.depend(),Array.isArray(e)&&Mt(e)),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||(l?l.call(t,e):n=e,u=!r&&xt(e),o.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(x(t,e))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(bt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function St(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}mt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)bt(t,e[n],t[e[n]])},mt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Ct=F.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,i,r,o=Object.keys(e),a=0;a<o.length;a++)n=o[a],i=t[n],r=e[n],x(t,n)?h(i)&&h(r)&&kt(i,r):wt(t,n,r);return t}function Tt(t,e,n){return n?t||e?function(){var i="function"===typeof e?e.call(n):e,r="function"===typeof t?t.call(n):void 0;return i?kt(i,r):r}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function It(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Dt(t,e){var n=Object.create(t||null);return e?D(n,e):n}Ct.data=function(t,e,n){return n?Tt(t,e,n):e&&"function"!==typeof e?t:Tt.call(this,t,e)},$.forEach(function(t){Ct[t]=It}),z.forEach(function(t){Ct[t+"s"]=Dt}),Ct.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var i in D(n,t),e){var r=n[i],o=e[i];r&&!Array.isArray(r)&&(r=[r]),n[i]=r?r.concat(o):Array.isArray(o)?o:[o]}return n},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return D(n,t),D(n,e),n},Ct.provide=Tt;var At=function(t,e){return void 0===e?t:e};function Ot(t){var e=t.props;if(e){var n,i,r,o={};if(Array.isArray(e)){n=e.length;while(n--)i=e[n],"string"===typeof i&&(r=S(i),o[r]={type:null})}else if(h(e))for(var a in e)i=e[a],r=S(a),o[r]=h(i)?i:{type:i};t.props=o}}function Pt(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},i=0;i<e.length;i++)n[e[i]]=e[i]}function Lt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Et(t,e,n){"function"===typeof e&&(e=e.options),Ot(e),Pt(e),Lt(e);var i=e.extends;if(i&&(t=Et(t,i,n)),e.mixins)for(var r=0,o=e.mixins.length;r<o;r++)t=Et(t,e.mixins[r],n);var a,s={};for(a in t)l(a);for(a in e)x(t,a)||l(a);function l(i){var r=Ct[i]||At;s[i]=r(t[i],e[i],n,i)}return s}function Nt(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var o=S(n);if(x(r,o))return r[o];var a=M(o);if(x(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Bt(t,e,n,i){var r=e[t],o=!x(n,t),a=n[t];if($t(Boolean,r.type)&&(o&&!x(r,"default")?a=!1:$t(String,r.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Rt(i,r,t);var s=vt.shouldConvert;vt.shouldConvert=!0,xt(a),vt.shouldConvert=s}return a}function Rt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==zt(e.type)?i.call(t):i}}function zt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function $t(t,e){if(!Array.isArray(e))return zt(e)===zt(t);for(var n=0,i=e.length;n<i;n++)if(zt(e[n])===zt(t))return!0;return!1}var Ft=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},jt={child:{}};jt.child.get=function(){return this.componentInstance},Object.defineProperties(Ft.prototype,jt);var Vt=function(t){void 0===t&&(t="");var e=new Ft;return e.text=t,e.isComment=!0,e};function Wt(t){return new Ft(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Ft(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Gt(t){for(var e=t.length,n=new Array(e),i=0;i<e;i++)n[i]=Ht(t[i]);return n}var Ut,qt=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function Xt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var i=n.slice(),r=0;r<i.length;r++)i[r].apply(null,t)}return e.fns=t,e}function Yt(t,e,n,i,o){var a,s,l,u;for(a in t)s=t[a],l=e[a],u=qt(a),r(s)||(r(l)?(r(s.fns)&&(s=t[a]=Xt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==l&&(l.fns=s,t[a]=l));for(a in e)r(t[a])&&(u=qt(a),i(u.name,e[a],u.capture))}function Zt(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,l=t.props;if(o(s)||o(l))for(var u in i){var c=k(u);Kt(a,l,u,c,!0)||Kt(a,s,u,c,!1)}return a}}function Kt(t,e,n,i,r){if(o(e)){if(x(e,n))return t[n]=e[n],r||delete e[n],!0;if(x(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function Jt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Qt(t){return l(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return o(t)&&o(t.text)&&s(t.isComment)}function ee(t,e){var n,i,s,u=[];for(n=0;n<t.length;n++)i=t[n],r(i)||"boolean"===typeof i||(s=u[u.length-1],Array.isArray(i)?u.push.apply(u,ee(i,(e||"")+"_"+n)):l(i)?te(s)?s.text+=String(i):""!==i&&u.push(Wt(i)):te(i)&&te(s)?u[u.length-1]=Wt(s.text+i.text):(a(t._isVList)&&o(i.tag)&&r(i.key)&&o(e)&&(i.key="__vlist"+e+"_"+n+"__"),u.push(i)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function ie(t,e,n,i,r){var o=Vt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function re(t,e,n){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var i=t.contexts=[n],s=!0,l=function(){for(var t=0,e=i.length;t<e;t++)i[t].$forceUpdate()},c=B(function(n){t.resolved=ne(n,e),s||l()}),h=B(function(e){o(t.errorComp)&&(t.error=!0,l())}),f=t(c,h);return u(f)&&("function"===typeof f.then?r(t.resolved)&&f.then(c,h):o(f.component)&&"function"===typeof f.component.then&&(f.component.then(c,h),o(f.error)&&(t.errorComp=ne(f.error,e)),o(f.loading)&&(t.loadingComp=ne(f.loading,e),0===f.delay?t.loading=!0:setTimeout(function(){r(t.resolved)&&r(t.error)&&(t.loading=!0,l())},f.delay||200)),o(f.timeout)&&setTimeout(function(){r(t.resolved)&&h(null)},f.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function oe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&o(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Ut.$once(t,e):Ut.$on(t,e)}function le(t,e){Ut.$off(t,e)}function ue(t,e,n){Ut=t,Yt(e,n||{},se,le,t)}function ce(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this,r=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)i.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this,i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return i}var a,s=i._events[t];if(!s)return i;if(1===arguments.length)return i._events[t]=null,i;var l=s.length;while(l--)if(a=s[l],a===e||a.fn===e){s.splice(l,1);break}return i},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?I(i):i;for(var r=I(arguments,1),o=0,a=i.length;o<a;o++)try{i[o].apply(e,r)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function he(t,e){var n={};if(!t)return n;for(var i=[],r=0,o=t.length;r<o;r++){var a=t[r];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)i.push(a);else{var s=a.data.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children):l.push(a)}}return i.every(fe)||(n.default=i),n}function fe(t){return t.isComment||" "===t.text}function de(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?de(t[n],e):e[t[n].key]=t[n].fn;return e}var pe=null;function ge(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ve(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var i=n.$el,r=n._vnode,o=pe;pe=n,n._vnode=t,r?n.$el=n.__patch__(r,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),pe=o,i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function me(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=Vt),we(t,"beforeMount"),i=function(){t._update(t._render(),n)},t._watcher=new Be(t,i,O),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function ye(t,e,n,i,r){var o=!!(r||t.$options._renderChildren||i.data.scopedSlots||t.$scopedSlots!==j);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=r,t.$attrs=i.data&&i.data.attrs,t.$listeners=n,e&&t.$options.props){vt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],l=0;l<s.length;l++){var u=s[l];a[u]=Bt(u,t.$options.props,e,t)}vt.shouldConvert=!0,t.$options.propsData=e}if(n){var c=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,c)}o&&(t.$slots=he(r,i.context),t.$forceUpdate())}function _e(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xe(t,e){if(e){if(t._directInactive=!1,_e(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xe(t.$children[n]);we(t,"activated")}}function be(t,e){if((!e||(t._directInactive=!0,!_e(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"deactivated")}}function we(t,e){var i=t.$options[e];if(i)for(var r=0,o=i.length;r<o;r++)try{i[r].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Se=[],Me=[],Ce={},ke=!1,Te=!1,Ie=0;function De(){Ie=Se.length=Me.length=0,Ce={},ke=Te=!1}function Ae(){var t,e;for(Te=!0,Se.sort(function(t,e){return t.id-e.id}),Ie=0;Ie<Se.length;Ie++)t=Se[Ie],e=t.id,Ce[e]=null,t.run();var n=Me.slice(),i=Se.slice();De(),Le(n),Oe(i),it&&F.devtools&&it.emit("flush")}function Oe(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&we(i,"updated")}}function Pe(t){t._inactive=!1,Me.push(t)}function Le(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xe(t[e],!0)}function Ee(t){var e=t.id;if(null==Ce[e]){if(Ce[e]=!0,Te){var n=Se.length-1;while(n>Ie&&Se[n].id>t.id)n--;Se.splice(n+1,0,t)}else Se.push(t);ke||(ke=!0,st(Ae))}}var Ne=0,Be=function(t,e,n,i){this.vm=t,t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ne,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ot,this.newDepIds=new ot,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Be.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ze(t),ft(),this.cleanupDeps()}return t},Be.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Be.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Be.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ee(this)},Be.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Be.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Be.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Be.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Re=new ot;function ze(t){Re.clear(),$e(t,Re)}function $e(t,e){var n,i,r=Array.isArray(t);if((r||u(t))&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)$e(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)$e(t[i[n]],e)}}}var Fe={enumerable:!0,configurable:!0,get:O,set:O};function je(t,e,n){Fe.get=function(){return this[e][n]},Fe.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Fe)}function Ve(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Ze(t,e.methods),e.data?He(t):xt(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ke(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;vt.shouldConvert=o;var a=function(o){r.push(o);var a=Bt(o,e,n,t);bt(i,o,a),o in t||je(t,"_props",o)};for(var s in e)a(s);vt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?Ge(e,t):e||{},h(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];i&&x(i,o)||V(o)||je(t,"_data",o)}xt(e,!0)}function Ge(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Ue={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var i in e){var r=e[i],o="function"===typeof r?r:r.get;n[i]=new Be(t,o,O,Ue),i in t||Xe(t,i,r)}}function Xe(t,e,n){"function"===typeof n?(Fe.get=Ye(e),Fe.set=O):(Fe.get=n.get?!1!==n.cache?Ye(e):n.get:O,Fe.set=n.set?n.set:O),Object.defineProperty(t,e,Fe)}function Ye(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Ze(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?O:T(e[n],t)}function Ke(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)Je(t,n,i[r]);else Je(t,n,i)}}function Je(t,e,n,i){return h(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function Qe(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=St,t.prototype.$watch=function(t,e,n){var i=this;if(h(e))return Je(i,t,e,n);n=n||{},n.user=!0;var r=new Be(i,t,e,n);return n.immediate&&e.call(i,r.value),function(){r.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(vt.shouldConvert=!1,Object.keys(e).forEach(function(n){bt(t,n,e[n])}),vt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),i=at?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r],a=t[o],s=e;while(s){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,i,r){var a={},s=t.options.props;if(o(s))for(var l in s)a[l]=Bt(l,s,e||{});else o(n.attrs)&&on(a,n.attrs),o(n.props)&&on(a,n.props);var u=Object.create(i),c=function(t,e,n,i){return gn(u,t,e,n,i,!0)},h=t.options.render.call(null,c,{data:n,props:a,children:r,parent:i,listeners:n.on||{},injections:nn(t.options.inject,i),slots:function(){return he(r,i)}});return h instanceof Ft&&(h.functionalContext=i,h.functionalOptions=t.options,n.slot&&((h.data||(h.data={})).slot=n.slot)),h}function on(t,e){for(var n in e)t[S(n)]=e[n]}var an={init:function(t,e,n,i){if(!t.componentInstance||t.componentInstance._isDestroyed){var r=t.componentInstance=un(t,pe,n,i);r.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var o=t;an.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;ye(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Pe(n):xe(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?be(e,!0):e.$destroy())}},sn=Object.keys(an);function ln(t,e,n,i,s){if(!r(t)){var l=n.$options._base;if(u(t)&&(t=l.extend(t)),"function"===typeof t){var c;if(r(t.cid)&&(c=t,t=re(c,l,n),void 0===t))return ie(c,e,n,i,s);e=e||{},Ln(t),o(e.model)&&fn(t.options,e);var h=Zt(e,t,s);if(a(t.options.functional))return rn(t,h,e,n,i);var f=e.on;if(a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cn(e);var p=t.options.name||s,g=new Ft("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:f,tag:s,children:i},c);return g}}}function un(t,e,n,i){var r=t.componentOptions,a={_isComponent:!0,parent:e,propsData:r.propsData,_componentTag:r.tag,_parentVnode:t,_parentListeners:r.listeners,_renderChildren:r.children,_parentElm:n||null,_refElm:i||null},s=t.data.inlineTemplate;return o(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new r.Ctor(a)}function cn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],i=t.hook[n],r=an[n];t.hook[n]=i?hn(r,i):r}}function hn(t,e){return function(n,i,r,o){t(n,i,r,o),e(n,i,r,o)}}function fn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var r=e.on||(e.on={});o(r[i])?r[i]=[e.model.callback].concat(r[i]):r[i]=e.model.callback}var dn=1,pn=2;function gn(t,e,n,i,r,o){return(Array.isArray(n)||l(n))&&(r=i,i=n,n=void 0),a(o)&&(r=pn),vn(t,e,n,i,r)}function vn(t,e,n,i,r){if(o(n)&&o(n.__ob__))return Vt();if(o(n)&&o(n.is)&&(e=n.is),!e)return Vt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),r===pn?i=Qt(i):r===dn&&(i=Jt(i)),"string"===typeof e)?(s=F.getTagNamespace(e),a=F.isReservedTag(e)?new Ft(F.parsePlatformTagName(e),n,i,void 0,void 0,t):o(l=Nt(t.$options,"components",e))?ln(l,n,t,i,e):new Ft(e,n,i,void 0,void 0,t)):a=ln(e,n,t,i);return o(a)?(s&&mn(a,s),a):Vt()}function mn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&o(t.children))for(var n=0,i=t.children.length;n<i;n++){var a=t.children[n];o(a.tag)&&r(a.ns)&&mn(a,e)}}function yn(t,e){var n,i,r,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),i=0,r=a.length;i<r;i++)s=a[i],n[i]=e(t[s],s,i);return o(n)&&(n._isVList=!0),n}function _n(t,e,n,i){var r=this.$scopedSlots[t];if(r)return n=n||{},i&&(n=D(D({},i),n)),r(n)||e;var o=this.$slots[t];return o||e}function xn(t){return Nt(this.$options,"filters",t,!0)||L}function bn(t,e,n){var i=F.keyCodes[e]||n;return Array.isArray(i)?-1===i.indexOf(t):i!==t}function wn(t,e,n,i,r){if(n)if(u(n)){var o;Array.isArray(n)&&(n=A(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in o)&&(o[a]=n[a],r)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Sn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Gt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),Cn(n,"__static__"+t,!1),n)}function Mn(t,e,n){return Cn(t,"__once__"+e+(n?"_"+n:""),!0),t}function Cn(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&kn(t[i],e+"_"+i,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Tn(t,e){if(e)if(h(e)){var n=t.on=t.on?D({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(o,r):o}}else;return t}function In(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=he(t.$options._renderChildren,n),t.$scopedSlots=j,t._c=function(e,n,i,r){return gn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return gn(t,e,n,i,r,!0)};var i=e&&e.data;bt(t,"$attrs",i&&i.attrs,null,!0),bt(t,"$listeners",i&&i.on,null,!0)}function Dn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,i=e.$options,r=i.render,o=i.staticRenderFns,a=i._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=Gt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||j,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Ft||(t=Vt()),t.parent=a,t},t.prototype._o=Mn,t.prototype._n=g,t.prototype._s=p,t.prototype._l=yn,t.prototype._t=_n,t.prototype._q=E,t.prototype._i=N,t.prototype._m=Sn,t.prototype._f=xn,t.prototype._k=bn,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Vt,t.prototype._u=de,t.prototype._g=Tn}var An=0;function On(t){t.prototype._init=function(t){var e=this;e._uid=An++,e._isVue=!0,t&&t._isComponent?Pn(e,t):e.$options=Et(Ln(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ge(e),ae(e),In(e),we(e,"beforeCreate"),en(e),Ve(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Pn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Ln(t){var e=t.options;if(t.super){var n=Ln(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=En(t);r&&D(t.extendOptions,r),e=t.options=Et(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function En(t){var e,n=t.options,i=t.extendOptions,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=Nn(n[o],i[o],r[o]));return e}function Nn(t,e,n){if(Array.isArray(t)){var i=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var r=0;r<t.length;r++)(e.indexOf(t[r])>=0||n.indexOf(t[r])<0)&&i.push(t[r]);return i}return t}function Bn(t){this._init(t)}function Rn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=I(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function zn(t){t.mixin=function(t){return this.options=Et(this.options,t),this}}function $n(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Et(n.options,t),a["super"]=n,a.options.props&&Fn(a),a.options.computed&&jn(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,z.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=D({},a.options),r[i]=a,a}}function Fn(t){var e=t.options.props;for(var n in e)je(t.prototype,"_props",n)}function jn(t){var e=t.options.computed;for(var n in e)Xe(t.prototype,n,e[n])}function Vn(t){z.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&h(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}On(Bn),Qe(Bn),ce(Bn),ve(Bn),Dn(Bn);var Wn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function Gn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function Un(t,e,n){for(var i in t){var r=t[i];if(r){var o=Hn(r.componentOptions);o&&!n(o)&&(r!==e&&qn(r),t[i]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Xn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Un(this.cache,this._vnode,function(e){return Gn(t,e)})},exclude:function(t){Un(this.cache,this._vnode,function(e){return!Gn(t,e)})}},render:function(){var t=oe(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!Gn(this.include,n)||this.exclude&&Gn(this.exclude,n)))return t;var i=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[i]?t.componentInstance=this.cache[i].componentInstance:this.cache[i]=t,t.data.keepAlive=!0}return t}},Yn={KeepAlive:Xn};function Zn(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:U,extend:D,mergeOptions:Et,defineReactive:bt},t.set=wt,t.delete=St,t.nextTick=st,t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,D(t.options.components,Yn),Rn(t),zn(t),$n(t),Vn(t)}Zn(Bn),Object.defineProperty(Bn.prototype,"$isServer",{get:nt}),Object.defineProperty(Bn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Bn.version="2.4.1",Bn.mpvueVersion="1.0.12";var Kn=v("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Jn=v("style,class");v("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),v("embed,img,image,input,link,meta",!0);function Qn(){}function ti(){}function ei(){}function ni(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var ii={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ri={};function oi(t,e){return ri}function ai(t,e){return ri}function si(t){return ri}function li(t){return ri}function ui(t,e,n){}function ci(t,e){}function hi(t,e){}function fi(t){return ri}function di(t){return ri}function pi(t){return"div"}function gi(t,e){return ri}function vi(t,e,n){return ri}var mi=Object.freeze({createElement:oi,createElementNS:ai,createTextNode:si,createComment:li,insertBefore:ui,removeChild:ci,appendChild:hi,parentNode:fi,nextSibling:di,tagName:pi,setTextContent:gi,setAttribute:vi}),yi={create:function(t,e){_i(e)},update:function(t,e){t.data.ref!==e.data.ref&&(_i(t,!0),_i(e))},destroy:function(t){_i(t,!0)}};function _i(t,e){var n=t.data.ref;if(n){var i=t.context,r=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?y(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(r)<0&&o[n].push(r):o[n]=[r]:o[n]=r}}var xi=new Ft("",{},[]),bi=["create","activate","update","remove","destroy"];function wi(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&Si(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&r(e.asyncFactory.error))}function Si(t,e){if("input"!==t.tag)return!0;var n,i=o(n=t.data)&&o(n=n.attrs)&&n.type,r=o(n=e.data)&&o(n=n.attrs)&&n.type;return i===r}function Mi(t,e,n){var i,r,a={};for(i=e;i<=n;++i)r=t[i].key,o(r)&&(a[r]=i);return a}function Ci(t){var e,n,i={},s=t.modules,u=t.nodeOps;for(e=0;e<bi.length;++e)for(i[bi[e]]=[],n=0;n<s.length;++n)o(s[n][bi[e]])&&i[bi[e]].push(s[n][bi[e]]);function c(t){return new Ft(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function d(t,e,n,i,r){if(t.isRootInsert=!r,!p(t,e,n,i)){var s=t.data,l=t.children,c=t.tag;o(c)?(t.elm=t.ns?u.createElementNS(t.ns,c):u.createElement(c,t),w(t),_(t,l,e),o(s)&&b(t,e),y(n,t.elm,i)):a(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function p(t,e,n,i){var r=t.data;if(o(r)){var s=o(t.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(t,!1,n,i),o(t.componentInstance))return g(t,e),a(s)&&m(t,e,n,i),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,x(t)?(b(t,e),w(t)):(_i(t),e.push(t))}function m(t,e,n,r){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<i.activate.length;++a)i.activate[a](xi,s);e.push(s);break}y(n,t.elm,r)}function y(t,e,n){o(t)&&(o(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function _(t,e,n){if(Array.isArray(e))for(var i=0;i<e.length;++i)d(e[i],n,t.elm,null,!0);else l(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function x(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function b(t,n){for(var r=0;r<i.create.length;++r)i.create[r](xi,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(xi,t),o(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;o(e=pe)&&e!==t.context&&o(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function S(t,e,n,i,r,o){for(;i<=r;++i)d(n[i],o,t,e)}function M(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)M(t.children[n])}function C(t,e,n,i){for(;n<=i;++n){var r=e[n];o(r)&&(o(r.tag)?(k(r),M(r)):f(r.elm))}}function k(t,e){if(o(e)||o(t.data)){var n,r=i.remove.length+1;for(o(e)?e.listeners+=r:e=h(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&k(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function T(t,e,n,i,a){var s,l,c,h,f=0,p=0,g=e.length-1,v=e[0],m=e[g],y=n.length-1,_=n[0],x=n[y],b=!a;while(f<=g&&p<=y)r(v)?v=e[++f]:r(m)?m=e[--g]:wi(v,_)?(I(v,_,i),v=e[++f],_=n[++p]):wi(m,x)?(I(m,x,i),m=e[--g],x=n[--y]):wi(v,x)?(I(v,x,i),b&&u.insertBefore(t,v.elm,u.nextSibling(m.elm)),v=e[++f],x=n[--y]):wi(m,_)?(I(m,_,i),b&&u.insertBefore(t,m.elm,v.elm),m=e[--g],_=n[++p]):(r(s)&&(s=Mi(e,f,g)),l=o(_.key)?s[_.key]:null,r(l)?(d(_,i,t,v.elm),_=n[++p]):(c=e[l],wi(c,_)?(I(c,_,i),e[l]=void 0,b&&u.insertBefore(t,c.elm,v.elm),_=n[++p]):(d(_,i,t,v.elm),_=n[++p])));f>g?(h=r(n[y+1])?null:n[y+1].elm,S(t,h,n,p,y,i)):p>y&&C(t,e,f,g)}function I(t,e,n,s){if(t!==e){var l=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?O(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var c,h=e.data;o(h)&&o(c=h.hook)&&o(c=c.prepatch)&&c(t,e);var f=t.children,d=e.children;if(o(h)&&x(e)){for(c=0;c<i.update.length;++c)i.update[c](t,e);o(c=h.hook)&&o(c=c.update)&&c(t,e)}r(e.text)?o(f)&&o(d)?f!==d&&T(l,f,d,n,s):o(d)?(o(t.text)&&u.setTextContent(l,""),S(l,null,d,0,d.length-1,n)):o(f)?C(l,f,0,f.length-1):o(t.text)&&u.setTextContent(l,""):t.text!==e.text&&u.setTextContent(l,e.text),o(h)&&o(c=h.hook)&&o(c=c.postpatch)&&c(t,e)}}}function D(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var A=v("attrs,style,class,staticClass,staticStyle,key");function O(t,n,i){if(a(n.isComment)&&o(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var r=n.tag,s=n.data,l=n.children;if(o(s)&&(o(e=s.hook)&&o(e=e.init)&&e(n,!0),o(e=n.componentInstance)))return g(n,i),!0;if(o(r)){if(o(l))if(t.hasChildNodes()){for(var u=!0,c=t.firstChild,h=0;h<l.length;h++){if(!c||!O(c,l[h],i)){u=!1;break}c=c.nextSibling}if(!u||c)return!1}else _(n,l,i);if(o(s))for(var f in s)if(!A(f)){b(n,i);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,l,h){if(!r(e)){var f=!1,p=[];if(r(t))f=!0,d(e,p,l,h);else{var g=o(t.nodeType);if(!g&&wi(t,e))I(t,e,p,s);else{if(g){if(1===t.nodeType&&t.hasAttribute(R)&&(t.removeAttribute(R),n=!0),a(n)&&O(t,e,p))return D(e,p,!0),t;t=c(t)}var v=t.elm,m=u.parentNode(v);if(d(e,p,v._leaveCb?null:m,u.nextSibling(v)),o(e.parent)){var y=e.parent;while(y)y.elm=e.elm,y=y.parent;if(x(e))for(var _=0;_<i.create.length;++_)i.create[_](xi,e.parent)}o(m)?C(m,[t],0,0):o(t.tag)&&M(t)}}return D(e,p,f),e.elm}o(t)&&M(t)}}var ki=[yi],Ti=Ci({nodeOps:mi,modules:ki});function Ii(){Ti.apply(this,arguments),this.$updateDataToMP()}function Di(t,e,i){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)try{r=o[a].call(t,i)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Di(t,e,i)}),r}function Ai(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Oi(t,e,n){if(t){var i,r,o;if(Array.isArray(t)){i=t.length;while(i--)r=t[i],"string"===typeof r&&(o=S(r),e[o]={type:null})}else if(h(t))for(var a in t)r=t[a],o=S(a),e[o]=h(r)?r:{type:r};for(var s in e)if(e.hasOwnProperty(s)){var l=e[s];l.default&&(l.value=l.default);var u=l.observer;l.observer=function(t,e){n[o]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Pi(t){var e=t.$options.properties,n=t.$options.props,i={};return Oi(e,i,t),Oi(n,i,t),i}function Li(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(je(t,"_mpProps",n),e[n]=void 0)}),xt(e,!0)}function Ei(t,n){var i=this.$root;i.$mp||(i.$mp={});var r=i.$mp;if(r.status)return"app"===t?Di(this,"onLaunch",r.appOptions):Di(this,"onLoad",r.query),n();if(r.mpType=t,r.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return i.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),r.app=this,r.status="launch",this.globalData.appOptions=r.appOptions=t,Di(i,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),r.status="show",this.globalData.appOptions=r.appOptions=t,Di(i,"onShow",t)},onHide:function(){r.status="hide",Di(i,"onHide")},onError:function(t){Di(i,"onError",t)},onUniNViewMessage:function(t){Di(i,"onUniNViewMessage",t)}});else if("component"===t)Li(i),e.Component({properties:Pi(i),data:{$root:{}},methods:{handleProxy:function(t){return i.$handleProxyWithVue(t)}},created:function(){r.status="created",r.page=this},attached:function(){r.status="attached",Di(i,"attached")},ready:function(){r.status="ready",Di(i,"ready"),n(),i.$nextTick(function(){i._initDataToMP()})},moved:function(){Di(i,"moved")},detached:function(){r.status="detached",Di(i,"detached")}});else{var o=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return i.$handleProxyWithVue(t)},onLoad:function(t){i.__wxWebviewId__=this.__wxWebviewId__,r.page=this,r.query=t,r.status="load",Ai(o,i),i.$options&&"function"===typeof i.$options.data&&Object.assign(i.$data,i.$options.data()),Di(i,"onLoad",t)},onShow:function(){i.__wxWebviewId__=this.__wxWebviewId__,r.page=this,r.status="show",Di(i,"onShow"),i.$nextTick(function(){i._initDataToMP()})},onReady:function(){r.status="ready",Di(i,"onReady"),n()},onHide:function(){r.status="hide",Di(i,"onHide")},onUnload:function(){r.status="unload",Di(i,"onUnload"),r.page=null},onPullDownRefresh:function(){Di(i,"onPullDownRefresh")},onReachBottom:function(){Di(i,"onReachBottom")},onShareAppMessage:i.$options.onShareAppMessage?function(t){return Di(i,"onShareAppMessage",t)}:null,onPageScroll:function(t){Di(i,"onPageScroll",t)},onTabItemTap:function(t){Di(i,"onTabItemTap",t)}})}}function Ni(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Bi(t,e){void 0===e&&(e=[]);var n=t||{},i=n.$parent;return i?(e.unshift(ni(i)),i.$parent?Bi(i,e):e):e}function Ri(t){var e=Bi(t).join(","),n=e+(e?",":"")+ni(t),i=Object.assign(Ni(t),{$k:n,$kk:n+",",$p:e}),r="$root."+n,o={};return o[r]=i,o}function zi(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return zi(t,e)}),Object.assign(e,Ri(t))}function $i(t,e,n){var i,r,o,a=null,s=0;function l(){s=!1===n.leading?0:Date.now(),a=null,o=t.apply(i,r),a||(i=r=null)}return n||(n={}),function(u,c){var h=Date.now();s||!1!==n.leading||(s=h);var f=e-(h-s);return i=this,r=r?[u,Object.assign(r[1],c)]:[u,c],f<=0||f>e?(clearTimeout(a),a=null,s=h,o=t.apply(i,r),a||(i=r=null)):a||!1===n.trailing||(a=setTimeout(l,f)),o}}var Fi=$i(function(t,e){t(e)},50);function ji(t){var e=t.$root,n=e.$mp||{},i=n.mpType;void 0===i&&(i="");var r=n.page;if("app"!==i&&r&&"function"===typeof r.setData)return r}function Vi(){var t=ji(this);if(t){var e=JSON.parse(JSON.stringify(Ri(this)));Fi(t.setData.bind(t),i(e,t.data))}}function Wi(){var t=ji(this);if(t){var e=zi(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hi(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,i=0;i<n;i++){var r=t.$children[i],o=ni(r);if(o===e)return t=r,t}return t},t):t}function Gi(t,e,n){void 0===n&&(n=[]);var i=[];if(!t||!t.tag)return i;var r=t||{},o=r.data;void 0===o&&(o={});var a=r.children;void 0===a&&(a=[]);var s=r.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var r=s.$slots[t],o=Array.isArray(r)?r:[r];o.forEach(function(t){i=i.concat(Gi(t,e,n))})}):a.forEach(function(t){i=i.concat(Gi(t,e,n))});var l=o.attrs,u=o.on;return l&&u&&l["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?i.push(e):Array.isArray(e)&&(i=i.concat(e))}),i):i}function Ui(t){var e=t.type,n=t.timeStamp,i=t.touches,r=t.detail;void 0===r&&(r={});var o=t.target;void 0===o&&(o={});var a=t.currentTarget;void 0===a&&(a={});var s=r.x,l=r.y,u={mp:t,type:e,timeStamp:n,x:s,y:l,target:Object.assign({},o,r),detail:r,currentTarget:a,stopPropagation:O,preventDefault:O};return i&&i.length&&(Object.assign(u,i[0]),u.touches=i),u}function qi(t){var e=this.$root,n=t.type,i=t.target;void 0===i&&(i={});var r=t.currentTarget,o=r||i,a=o.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var l=a.eventid,u=Hi(e,s.split(","));if(u){var c=ii[n]||[n],h=Gi(u._vnode,l,c);if(h.length){var f=Ui(t);if(1===h.length){var d=h[0](f);return d}h.forEach(function(t){return t(f)})}}}return Bn.config.mustUseProp=Qn,Bn.config.isReservedTag=Kn,Bn.config.isReservedAttr=Jn,Bn.config.getTagNamespace=ti,Bn.config.isUnknownElement=ei,Bn.prototype.__patch__=Ii,Bn.prototype.$mount=function(t,e){var n=this,i=this.$options;if(i&&(i.render||i.mpType)){var r=i.mpType;return void 0===r&&(r="page"),this._initMP(r,function(){return me(n,void 0,void 0)})}return me(this,void 0,void 0)},Bn.prototype._initMP=Ei,Bn.prototype.$updateDataToMP=Vi,Bn.prototype._initDataToMP=Wi,Bn.prototype.$handleProxyWithVue=qi,Bn})}).call(this,n("c8ba"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0071":function(t,e,n){"use strict";n("de83");var s=a(n("b0ce")),i=a(n("e02f"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},5822:function(t,e,n){"use strict";n.r(e);var s=n("f1c0"),i=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);e["default"]=i.a},9660:function(t,e,n){},"9b87":function(t,e,n){"use strict";var s=n("9660"),i=n.n(s);i.a},b1ad:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[n("view",{staticClass:"topView",attrs:{eventid:"00cb397a-0"},on:{tap:function(e){t.getCount("正在获取统计数据")}}},[n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("阀组本周未检")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.bzwjcsl))])]),n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("当天火警")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.dthjs))])]),n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("已整改")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.dywjcsl))])])]),n("view",{staticClass:"middleView"},[n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-1"},on:{tap:function(e){t.openScan()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/scan.png"}}),n("text",{staticClass:"btnText"},[t._v("添加检查")])]),n("view",{staticClass:"vLine"}),n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-2"},on:{tap:function(e){t.openCharts()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/chart.png"}}),n("text",{staticClass:"btnText"},[t._v("数据统计")])])]),n("view",{staticClass:"hLine"})])},i=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i})},e02f:function(t,e,n){"use strict";n.r(e);var s=n("b1ad"),i=n("5822");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("9b87");var o=n("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);c.options.__file="main.vue",e["default"]=c.exports},f1c0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(n("59a9")),i=c(n("17f7")),a=c(n("3731")),o=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={computed:(0,o.mapState)(["forcedLogin","hasLogin","userInfo"]),data:function(){return{bzwjcsl:"正在读取...",dthjs:"正在读取...",dywjcsl:"正在读取..."}},methods:u({},(0,o.mapMutations)(["login"]),{openScan:function(){var e=this;t.scanCode({success:function(n){var s={userid:e.userInfo.userid,dwbh:n.result};a.default.requestLoading(i.default.scan,s,"正在加载",function(e){t.navigateTo({url:"../pointAdd/pointAdd?obj="+JSON.stringify(e)})},function(){t.showToast({icon:"none",title:"请求失败"})},function(){})}})},openCharts:function(){t.navigateTo({url:"../mpvue-echarts/chartList"})},getCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this,n={userid:e.userInfo.userid};a.default.requestLoading(i.default.getMainPageCount,n,t,function(t){console.log(""+JSON.stringify(t)),e.bzwjcsl=t.bzwjcsl,e.dthjs=t.dthjs,e.dywjcsl=t.dywjcsl},function(){e.bzwjcsl="获取失败，点击重新获取",e.dthjs="获取失败，点击重新获取",e.dywjcsl="获取失败，点击重新获取"},function(){})}}),onShow:function(){var e=this;this.login(s.default.getUsers()),this.hasLogin?this.getCount():t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(n){n.confirm&&(e.forcedLogin?t.reLaunch({url:"../login/login"}):t.navigateTo({url:"../login/login"}))}})}};e.default=l}).call(this,n("649d")["default"])}},[["0071","common/runtime","common/vendor"]]]);
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
__wxRoute = 'pages/user/accountEdit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/accountEdit.js';

define('pages/user/accountEdit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/accountEdit"],{"140e":function(t,e,n){"use strict";n.r(e);var r=n("abc5"),o=n("44eb");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("fee6");var u=n("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);i.options.__file="accountEdit.vue",e["default"]=i.exports},3626:function(t,e,n){"use strict";n("de83");var r=a(n("b0ce")),o=a(n("140e"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(o.default))},"44eb":function(t,e,n){"use strict";n.r(e);var r=n("d740"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},abc5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"center"},[t._m(0),n("view",{staticClass:"btnView"},[n("button",{staticClass:"btn",attrs:{type:"primary",eventid:"d573abf0-0"},on:{tap:t.bindLogout}},[t._v("退出登录")])],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"center-list"},[n("view",{staticClass:"center-list-item border-bottom"},[n("text",{staticClass:"list-icon"},[t._v("")]),n("text",{staticClass:"list-text"},[t._v("修改密码")]),n("text",{staticClass:"navigat-arrow"},[t._v("")])])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},b7db:function(t,e,n){},d740:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("59a9")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{}},computed:u({},(0,o.mapState)(["hasLogin","forcedLogin"])),methods:u({},(0,o.mapMutations)(["logout"]),{bindLogout:function(){var e=this;t.showModal({title:"提示",content:"确认要退出登录吗？",success:function(n){n.confirm?(e.logout(),r.default.removeUser(),e.forcedLogin&&t.reLaunch({url:"../login/login"})):n.cancel}})}})};e.default=c}).call(this,n("649d")["default"])},fee6:function(t,e,n){"use strict";var r=n("b7db"),o=n.n(r);o.a}},[["3626","common/runtime","common/vendor"]]]);
});
require('pages/user/accountEdit.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"1b29":function(t,e,a){"use strict";var n=a("dd7a"),s=a.n(n);s.a},"1c85":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("2f62");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){i(t,e,a[e])})}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={computed:s({},(0,n.mapState)(["hasLogin","forcedLogin","userInfo"])),data:function(){return{userid:"",avatarUrl:"../../static/img/head.png",uerInfo:{}}},onLoad:function(){this.userid=this.userInfo.userid,console.log(""+JSON.stringify(this.userInfo))},methods:s({},(0,n.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},jumpAccountEdit:function(){t.navigateTo({url:"./accountEdit"})}})};e.default=r}).call(this,a("649d")["default"])},"44ec":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"center"},[a("view",{staticClass:"logo",attrs:{"hover-class":t.logo-t.hover}},[a("image",{staticClass:"logo-img",attrs:{src:t.avatarUrl}}),a("view",{staticClass:"logo-title"},[t.hasLogin?a("view",{staticClass:"infoView"},[a("text",{staticClass:"uer-name"},[t._v("你好，"+t._s(t.userInfo.fullname))]),a("text",{staticClass:"uer-code"},[t._v("工号："+t._s(t.userInfo.usercode))])]):t._e(),t.hasLogin?t._e():a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"240234ba-0"},on:{tap:t.bindLogin}},[t._v("点击登录")])],1)]),a("view",{staticClass:"userinfo"},[a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-1"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/setting.png",mode:"widthFix"}}),t._m(0)]),a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-2"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wdkc.png",mode:"widthFix"}}),t._m(1)]),a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-3"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wdsc.png",mode:"widthFix"}}),t._m(2)]),a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-4"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wdpc.png",mode:"widthFix"}}),t._m(3)]),a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-5"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wdks.png",mode:"widthFix"}}),t._m(4)]),a("view",{staticClass:"dangerView",attrs:{eventid:"240234ba-6"},on:{tap:function(e){t.jumpAccountEdit()}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wdsx.png",mode:"widthFix"}}),t._m(5)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("设置")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("我的课程")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("我的收藏")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("我的评测")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("我的考试")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("我的私信")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"7b67":function(t,e,a){"use strict";a.r(e);var n=a("1c85"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},a857:function(t,e,a){"use strict";a.r(e);var n=a("44ec"),s=a("7b67");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("1b29");var r=a("2877"),c=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);c.options.__file="user.vue",e["default"]=c.exports},dd7a:function(t,e,a){},ed3d:function(t,e,a){"use strict";a("de83");var n=i(a("b0ce")),s=i(a("a857"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))}},[["ed3d","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/pointCheck/pointCheck';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointCheck/pointCheck.js';

define('pages/pointCheck/pointCheck.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(t,e,s){"use strict";s.r(e);var a=s("0ad6"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},"0ad6":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("6cfe"));function i(t){return t&&t.__esModule?t:{default:t}}var n={components:{uniDrawer:a.default},data:function(){return{showDrawer:!1}},onLoad:function(){var t={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",t);var e={name:"本周未检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",e);var s={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",s),this.saveTabInfo("消防泵",s)},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{jumpListPage:function(e){this.saveTabInfo("currentLx",e),t.navigateTo({url:"../pointList/uni-tabs"})},saveTabInfo:function(e,s){t.setStorage({key:e,data:s,success:function(){console.log("保存成功")}})}}};e.default=n}).call(this,s("649d")["default"])},"2dc8":function(t,e,s){},"9e7a":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"part2"},[t._m(0),s("view",{staticClass:"topView_pc",attrs:{eventid:"10bbdf1a-0"},on:{tap:function(e){t.getCount("正在获取统计数据")}}},[t._m(1),t._m(2),t._m(3)]),t._m(4),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-1"},on:{tap:function(e){t.jumpListPage("所有记录")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),t._m(5)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-2"},on:{tap:function(e){t.jumpListPage("消火栓")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xhs.png",mode:"widthFix"}}),t._m(6)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-3"},on:{tap:function(e){t.jumpListPage("阀组")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_fz.png",mode:"widthFix"}}),t._m(7)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-4"},on:{tap:function(e){t.jumpListPage("高位水箱")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_sx.png",mode:"widthFix"}}),t._m(8)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-5"},on:{tap:function(e){t.jumpListPage("消防泵")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xfb.png",mode:"widthFix"}}),t._m(9)]),s("view",{staticClass:"dangerView"})]),t._m(10),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-6"},on:{tap:function(e){t.jumpListPage("隐患上报")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsb.png",mode:"widthFix"}}),t._m(11)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-7"},on:{tap:function(e){t.jumpListPage("隐患审批")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsp.png",mode:"widthFix"}}),t._m(12)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-8"},on:{tap:function(e){t.jumpListPage("已整改隐患")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/ygyh.png",mode:"widthFix"}}),t._m(13)])]),t._m(14),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-9"},on:{tap:function(e){t.jumpListPage("事故快报")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sgkb.png",mode:"widthFix"}}),t._m(15)]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),t._m(16),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-10"},on:{tap:function(e){t.jumpListPage("培训资料")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxzl.png",mode:"widthFix"}}),t._m(17)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-11"},on:{tap:function(e){t.jumpListPage("在线考试")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zxks.png",mode:"widthFix"}}),t._m(18)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-12"},on:{tap:function(e){t.jumpListPage("培训计划")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxjh.png",mode:"widthFix"}}),t._m(19)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-13"},on:{tap:function(e){t.jumpListPage("培训课程")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxkc.png",mode:"widthFix"}}),t._m(20)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-14"},on:{tap:function(e){t.jumpListPage("自我测试")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zwcs.png",mode:"widthFix"}}),t._m(21)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-15"},on:{tap:function(e){t.jumpListPage("统一考试")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/tyks.png",mode:"widthFix"}}),t._m(22)])]),t._m(23),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-16"},on:{tap:function(e){t.jumpListPage("法规清单")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/fgqd.png",mode:"widthFix"}}),t._m(24)]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),t._m(25),s("view",{staticClass:"userinfo"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-17"},on:{tap:function(e){t.jumpListPage("三废排放")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sfpf.png",mode:"widthFix"}}),t._m(26)]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-18"},on:{tap:function(e){t.jumpListPage("监测记录")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jcjl.png",mode:"widthFix"}}),t._m(27)]),s("view",{staticClass:"dangerView"})])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("数据统计")]),s("text",{staticClass:"titleSubText_pc"},[t._v("查看更多")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("隐患总数")]),s("text",{staticClass:"topTextNum"},[t._v("1005")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("事故总数")]),s("text",{staticClass:"topTextNum"},[t._v("600")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("检查次数")]),s("text",{staticClass:"topTextNum"},[t._v("2000")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("检查管理")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("所有记录")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("消火栓")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("阀组")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("高位水箱")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("消防泵")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("隐患排查")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("隐患上报")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("隐患审批")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("已整改隐患")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("事故管理")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("事故快报")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("安全培训")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训资料")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("在线考试")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训计划")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训课程")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("自我测试")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("统一考试")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("法律法规")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("法规清单")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("环保管理")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("三废排放")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("监测记录")])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},a36f:function(t,e,s){"use strict";var a=s("2dc8"),i=s.n(a);i.a},ab69:function(t,e,s){"use strict";s.r(e);var a=s("9e7a"),i=s("0927");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("a36f");var c=s("2877"),r=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="pointCheck.vue",e["default"]=r.exports},be2a:function(t,e,s){"use strict";s("de83");var a=n(s("b0ce")),i=n(s("ab69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["be2a","common/runtime","common/vendor"]]]);
});
require('pages/pointCheck/pointCheck.js');
__wxRoute = 'pages/pointList/pointList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointList/pointList.js';

define('pages/pointList/pointList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointList/pointList"],{"0319":function(t,e,a){},"0d0f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"baseView",attrs:{eventid:"58792338-12"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.moveHandle(e)}}},[a("view",{staticClass:"tabView"},t._l(t.tabBars,function(e,i){return a("view",{key:i,staticClass:"tabItemView",style:{color:i==t.tabIndex?"#2D68AA":"#898989"},attrs:{eventid:"58792338-0-"+i},on:{tap:function(e){t.changeTab(i)}}},[t._v(t._s(e.name))])})),a("view",{staticClass:"rowLine"}),a("scroll-view",{staticClass:"scrollView",attrs:{"scroll-y":"true",eventid:"58792338-11"},on:{scroll:t.isScrolling}},[a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-1"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-0-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-2"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-1-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-3"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-2-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-4"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-3-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-5"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-4-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-6"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-5-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-7"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-6-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-8"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-7-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-9"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-8-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-10"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-9-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("uni-drawer",{attrs:{visible:t.showDrawer,mpcomid:"58792338-10"}},[a("view",{staticStyle:{padding:"30rpx"}},[a("view",{staticClass:"uni-title"},[t._v("抽屉式导航")])])])],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"44ed":function(t,e,a){"use strict";a("de83");var i=n(a("b0ce")),s=n(a("de09"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},8370:function(t,e,a){"use strict";a.r(e);var i=a("a88b"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},a88b:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("6cfe")),s=(r(a("59a9")),r(a("17f7"))),n=r(a("3731"));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniDrawer:i.default},data:function(){return{userid:"",pageRows:15,lx:"点位检查",refreshing:!1,refreshText:"下拉可以刷新",tabIndex:0,tabType:0,newsitems:[],showDrawer:!1,tabBars:[{name:"待整改",id:"/mobile/dzglb.do"},{name:"已完成",id:"/mobile/ywclb.do"},{name:"未检查",id:"/mobile/wjclb.do"}]}},onLoad:function(e){console.log("新建pointList");var a=this;a.lx=e.lx,t.setNavigationBarTitle({title:a.lx}),t.getStorage({key:"userInfo",success:function(e){console.log(""+JSON.stringify(e.data.userid)),a.userid=e.data.userid,a.newsitems=a.randomfn(),t.getStorage({key:a.lx,success:function(t){a.tabBars.push(t.data)},complete:function(){a.getTabCounts()}})}})},onUnload:function(){console.log("销毁pointList")},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{isScrolling:function(t){console.log("正在滚动....")},randomfn:function(){for(var t=[],e=0,a=this.tabBars.length;e<a;e++){var i={loadingText:"加载更多...",data:[],pageNum:1};t.push(i)}return t},changeTab:function(t){console.log("Tab页切换"+t),this.tabIndex=t},getTabCounts:function(){var e=this;n.default.requestLoading(s.default.getTabCounts,{lx:e.lx,userid:e.userid},"正在加载",function(t){console.log("Tab页数量："+JSON.stringify(t));for(var a=0;a<e.tabBars.length;a++){var i=e.tabBars[a];"待整改"==i.name?i.name="待整改("+t.dzgsl+")":"已完成"==i.name?i.name="已完成("+t.ywcsl+")":"未检查"==i.name?i.name="未检查("+t.wjcsl+")":"当月未检查"==i.name?i.name="当月未检查("+t.dywjcsl+")":"本周未检查"==i.name?i.name="本周未检查("+t.bzwjcsl+")":"当天未检查"==i.name&&(i.name="当天未检查("+t.dtwjcsl+")")}},function(){t.showToast({icon:"none",title:"请求失败"})},function(){})},swiperChange:function(t){this.tabIndex=t.detail.current},moveHandle:function(t){}}};e.default=o}).call(this,a("649d")["default"])},d1dd:function(t,e,a){"use strict";var i=a("0319"),s=a.n(i);s.a},de09:function(t,e,a){"use strict";a.r(e);var i=a("0d0f"),s=a("8370");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("d1dd");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);o.options.__file="pointList.vue",e["default"]=o.exports}},[["44ed","common/runtime","common/vendor"]]]);
});
require('pages/pointList/pointList.js');
__wxRoute = 'pages/pointDetail/pointDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointDetail/pointDetail.js';

define('pages/pointDetail/pointDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointDetail/pointDetail"],{"1f55":function(t,e,i){},"39fd":function(t,e,i){"use strict";i.r(e);var n=i("ed6e"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"77a6":function(t,e,i){"use strict";var n=i("1f55"),o=i.n(n);o.a},9513:function(t,e,i){"use strict";i("de83");var n=s(i("b0ce")),o=s(i("d353"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},d353:function(t,e,i){"use strict";i.r(e);var n=i("f9d1"),o=i("39fd");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("77a6");var l=i("2877"),a=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a.options.__file="pointDetail.vue",e["default"]=a.exports},ed6e:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("7c03")),o=r(i("ba08")),s=r(i("4b9c")),l=r(i("17f7")),a=r(i("3731")),c=r(i("59a9")),u=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}var d={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:n.default,uniListItem:s.default,uniIcon:o.default},data:function(){return{needGetItemOnShow:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj)},onNavigationBarButtonTap:function(){var e=this;t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var i=0;i<e.obj.sublist.length;i++){var n=e.obj.sublist[i];n["jcjl"]="正常",n["jcwtms"]="",n["zgfs"]=""}else t.cancel}})},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(""+JSON.stringify(this.sublistItem)),this.obj.sublist[this.sublistIndex]=this.sublistItem),this.needGetItemOnShow=!1},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(t,e){},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},submit:function(){var e=this,i=c.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),a.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(e){t.showToast({icon:"none",title:"新建检查成功",duration:2e3,complete:function(){t.navigateBack({delta:1})}})},function(){t.showToast({icon:"none",title:"新建检查失败"})},function(){})}}};e.default=d}).call(this,i("649d")["default"])},f9d1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"21b694de-6"}},[i("uni-list-item",{attrs:{title:"点位编号",subnote:t.obj.dwbh,"show-arrow":"false","show-badge":"true",mpcomid:"21b694de-0"}}),i("uni-list-item",{attrs:{title:"检查人",subnote:t.obj.zrrmc,"show-arrow":"false",mpcomid:"21b694de-1"}}),i("picker",{attrs:{mode:"date",value:t.obj.jcrq,eventid:"21b694de-0"},on:{change:t.bindDateChange}},[i("uni-list-item",{attrs:{title:"检查日期",subnote:t.obj.jcrq,mpcomid:"21b694de-2"}})],1),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.obj.zrbm,"show-arrow":"false",mpcomid:"21b694de-3"}}),i("uni-list-item",{attrs:{title:"楼层",subnote:t.obj.lc,"show-arrow":"false",mpcomid:"21b694de-4"}}),i("uni-list-item",{attrs:{title:"位置",subnote:t.obj.wz,"show-arrow":"false",mpcomid:"21b694de-5"}})],1)],1),i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("检查信息")]),i("text",{staticClass:"cellTitle"},[t._v("正常-")]),i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#24BE41",mpcomid:"21b694de-7"}}),i("text",{staticClass:"cellTitle"},[t._v("未检-")]),i("uni-icon",{attrs:{type:"info-filled",size:"22",color:"#FFDE52",mpcomid:"21b694de-8"}}),i("text",{staticClass:"cellTitle"},[t._v("异常-")]),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#C11E1E",mpcomid:"21b694de-9"}})],1),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"21b694de-11"}},t._l(t.obj.sublist,function(e,n){return i("uni-list-item",{key:n,attrs:{title:e.jcbz,note:e.jcwtms,"show-extra-icon":"true","extra-icon":t.getIcon(e),eventid:"21b694de-1-"+n,mpcomid:"21b694de-10-"+n},on:{click:function(i){t.jumpEdit(e,n)}}})}))],1),i("view",{staticClass:"btn-row"})])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["9513","common/runtime","common/vendor"]]]);
});
require('pages/pointDetail/pointDetail.js');
__wxRoute = 'pages/pointAdd/pointAdd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointAdd.js';

define('pages/pointAdd/pointAdd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointAdd"],{"13cb":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-6"}},[i("uni-list-item",{attrs:{title:"点位编号",subnote:t.obj.dwbh,"show-arrow":"false","show-badge":"true",mpcomid:"7be27b0c-0"}}),i("uni-list-item",{attrs:{title:"检查人",subnote:t.obj.zrrmc,"show-arrow":"false",mpcomid:"7be27b0c-1"}}),i("picker",{attrs:{mode:"date",value:t.obj.jcrq,eventid:"7be27b0c-0"},on:{change:t.bindDateChange}},[i("uni-list-item",{attrs:{title:"检查日期",subnote:t.obj.jcrq,mpcomid:"7be27b0c-2"}})],1),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.obj.zrbm,"show-arrow":"false",mpcomid:"7be27b0c-3"}}),i("uni-list-item",{attrs:{title:"楼层",subnote:t.obj.lc,"show-arrow":"false",mpcomid:"7be27b0c-4"}}),i("uni-list-item",{attrs:{title:"位置",subnote:t.obj.wz,"show-arrow":"false",mpcomid:"7be27b0c-5"}})],1)],1),i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("检查信息")]),i("text",{staticClass:"cellTitle"},[t._v("正常-")]),i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#24BE41",mpcomid:"7be27b0c-7"}}),i("text",{staticClass:"cellTitle"},[t._v("未检-")]),i("uni-icon",{attrs:{type:"info-filled",size:"22",color:"#FFDE52",mpcomid:"7be27b0c-8"}}),i("text",{staticClass:"cellTitle"},[t._v("异常-")]),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#C11E1E",mpcomid:"7be27b0c-9"}})],1),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-11"}},t._l(t.obj.sublist,function(e,s){return i("uni-list-item",{key:s,attrs:{title:e.jcbz,note:e.jcwtms,"show-extra-icon":"true","show-arrow":t.editable,"extra-icon":t.getIcon(e),eventid:"7be27b0c-1-"+s,mpcomid:"7be27b0c-10-"+s},on:{click:function(i){t.jumpEdit(e,s)}}})}))],1),i("view",{staticClass:"btnView"},[t.showSave?i("button",{staticClass:"saveBtn",attrs:{eventid:"7be27b0c-2"},on:{tap:t.saveClick}},[t._v("保存")]):t._e(),t.showClose?i("button",{staticClass:"closeBtn",attrs:{eventid:"7be27b0c-3"},on:{tap:t.closeClick}},[t._v("关单")]):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o})},"16c2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("7c03")),o=r(i("ba08")),n=r(i("4b9c")),l=r(i("17f7")),c=r(i("3731")),a=r(i("59a9")),u=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}var b={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:s.default,uniListItem:n.default,uniIcon:o.default},data:function(){return{needGetItemOnShow:!1,showClose:!1,showSave:!1,editable:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj),this.checkShowClose()},onNavigationBarButtonTap:function(){var e=this;0!=e.editable?t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var i=0;i<e.obj.sublist.length;i++){var s=e.obj.sublist[i];s["jcjl"]="正常",s["jcwtms"]="",s["zgfs"]=""}else t.cancel}}):t.showToast({icon:"none",title:"已关单 无法编辑",duration:1e3})},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(""+JSON.stringify(this.sublistItem)),this.obj.sublist[this.sublistIndex]=this.sublistItem),this.needGetItemOnShow=!1},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(e,i){0!=this.editable&&(this.needGetItemOnShow=!0,t.navigateTo({url:"./pointCheckInfo?item="+JSON.stringify(e)+"&index="+i}))},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},saveClick:function(){var e=this,i=a.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),c.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(i){t.showToast({icon:"none",title:"保存成功",duration:1e3}),e.obj.id=i.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},closeClick:function(){var e=this,i=a.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),i["status"]="2",c.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(i){t.showToast({icon:"none",title:"关单成功",duration:1e3}),e.obj.status=i.status,e.obj.id=i.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"关单失败"})},function(){})},checkShowClose:function(){"1"==this.obj.status&&null!=this.obj.id&&""!=this.obj.id?this.showClose=!0:this.showClose=!1,"2"==this.obj.status?(this.showSave=!1,this.editable=!1):(this.showSave=!0,this.editable=!0)}}};e.default=b}).call(this,i("649d")["default"])},"7d51":function(t,e,i){"use strict";i("de83");var s=n(i("b0ce")),o=n(i("e51e"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},"7f6f":function(t,e,i){"use strict";var s=i("c07b"),o=i.n(s);o.a},bafa:function(t,e,i){"use strict";i.r(e);var s=i("16c2"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=o.a},c07b:function(t,e,i){},e51e:function(t,e,i){"use strict";i.r(e);var s=i("13cb"),o=i("bafa");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("7f6f");var l=i("2877"),c=Object(l["a"])(o["default"],s["a"],s["b"],!1,null,null,null);c.options.__file="pointAdd.vue",e["default"]=c.exports}},[["7d51","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointAdd.js');
__wxRoute = 'pages/pointAdd/pointCheckInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pointAdd/pointCheckInfo.js';

define('pages/pointAdd/pointCheckInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointCheckInfo"],{"2bc3":function(t,e,i){"use strict";i.r(e);var n=i("b75c"),s=i("e7d1");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("9e98");var c=i("2877"),r=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,null,null);r.options.__file="pointCheckInfo.vue",e["default"]=r.exports},3571:function(t,e,i){},"9e98":function(t,e,i){"use strict";var n=i("3571"),s=i.n(n);s.a},b330:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(i("7c03")),s=c(i("4b9c")),a=i("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){l(t,e,i[e])})}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={computed:(0,a.mapState)(["inputPageText","key"]),components:{uniList:n.default,uniListItem:s.default},data:function(){return{needGetInputOnShow:!1,typeArray:["正常","未检","异常"],rectifyTypes:["发起整改","查看整改"],item:"",itemIndex:0}},onLoad:function(t){this.item=JSON.parse(t.item),this.itemIndex=JSON.parse(t.index)},onShow:function(){1==this.needGetInputOnShow&&(this.item[this.key]=this.inputPageText,this.needGetInputOnShow=!1)},methods:r({},(0,a.mapMutations)(["setSublistItem"]),{bindTypeChange:function(t){this.item.jcjl=this.typeArray[t.detail.value],"正常"==this.item.jcjl&&(this.item.zgfs="")},bindRectifyChange:function(t){this.item.zgfs=this.rectifyTypes[t.detail.value]},jumpInput:function(e){this.needGetInputOnShow=!0,t.navigateTo({url:"../common/inputPage?text="+e+"&key=jcwtms&placeholder=请输入问题描述"})},saveItem:function(){var e={item:this.item,index:this.itemIndex};this.setSublistItem(e),t.navigateBack({delta:1})}})};e.default=u}).call(this,i("649d")["default"])},b75c:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v(t._s(t.item.jcbz))])]),i("view",{staticClass:"cellInfoView"},[i("picker",{attrs:{value:t.index,range:t.typeArray,eventid:"4bd08622-0"},on:{change:t.bindTypeChange}},[i("view",{staticClass:"cellView"},[i("view",{staticClass:"cellSubView"},[i("text",{staticClass:"leftText"},[t._v("检查结论")]),i("view",{staticClass:"rightText"},[t._v(t._s(t.item.jcjl))])]),i("image",{staticClass:"arrow",attrs:{src:"../../static/img/rightArrow.png"}})])]),i("view",{staticClass:"line"}),i("view",{staticClass:"cellView",attrs:{eventid:"4bd08622-1"},on:{click:function(e){t.jumpInput(t.item.jcwtms)}}},[i("view",{staticClass:"cellSubView"},[i("text",{staticClass:"leftText"},[t._v("问题描述")]),i("view",{staticClass:"rightText"},[t._v(t._s(t.item.jcwtms))])]),i("image",{staticClass:"arrow",attrs:{src:"../../static/img/rightArrow.png"}})]),i("view",{staticClass:"line"}),"异常"==t.item.jcjl?i("picker",{attrs:{value:t.index,range:t.rectifyTypes,eventid:"4bd08622-2"},on:{change:t.bindRectifyChange}},[i("view",{staticClass:"cellView"},[i("view",{staticClass:"cellSubView"},[i("text",{staticClass:"leftText"},[t._v("整改方式")]),i("view",{staticClass:"rightText"},[t._v(t._s(t.item.zgfs))])]),i("image",{staticClass:"arrow",attrs:{src:"../../static/img/rightArrow.png"}})])]):t._e(),i("view",{staticClass:"line"})],1),i("view",{staticClass:"btn-row"},[i("button",{staticClass:"primary",attrs:{type:"primary",eventid:"4bd08622-3"},on:{tap:t.saveItem}},[t._v("确定")])],1)])},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},c479:function(t,e,i){"use strict";i("de83");var n=a(i("b0ce")),s=a(i("2bc3"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},e7d1:function(t,e,i){"use strict";i.r(e);var n=i("b330"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}},[["c479","common/runtime","common/vendor"]]]);
});
require('pages/pointAdd/pointCheckInfo.js');
__wxRoute = 'pages/mpvue-echarts/chartList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/chartList.js';

define('pages/mpvue-echarts/chartList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/chartList"],{"001f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"part2"},[t._m(0),i("view",{staticClass:"userinfo"},[i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-0"},on:{tap:function(e){t.onClick("device")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(1)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-1"},on:{tap:function(e){t.onClick("event")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(2)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-2"},on:{tap:function(e){t.onClick("valve")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pointLineDraw.png",mode:"widthFix"}}),t._m(3)])]),t._m(4),i("view",{staticClass:"userinfo"},[i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-3"},on:{tap:function(e){t.onClick("device")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(5)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-4"},on:{tap:function(e){t.onClick("event")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/cloumDraw.png",mode:"widthFix"}}),t._m(6)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-5"},on:{tap:function(e){t.onClick("valve")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(7)])]),t._m(8),i("view",{staticClass:"userinfo"},[i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-6"},on:{tap:function(e){t.onClick("device")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(9)]),i("view",{staticClass:"dangerView"}),i("view",{staticClass:"dangerView"})]),t._m(10),i("view",{staticClass:"userinfo"},[i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-7"},on:{tap:function(e){t.onClick("device")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(11)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-8"},on:{tap:function(e){t.onClick("event")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/cloumDraw.png",mode:"widthFix"}}),t._m(12)]),i("view",{staticClass:"dangerView"})]),t._m(13),i("view",{staticClass:"userinfo"},[i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-9"},on:{tap:function(e){t.onClick("device")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(14)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-10"},on:{tap:function(e){t.onClick("event")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pieDraw.png",mode:"widthFix"}}),t._m(15)]),i("view",{staticClass:"dangerView",attrs:{eventid:"47b16668-11"},on:{tap:function(e){t.onClick("event")}}},[i("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pointLineDraw.png",mode:"widthFix"}}),t._m(16)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"titleView_pc"},[i("text",{staticClass:"titleText_pc"},[t._v("消防统计")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("报警设备类型")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("报警事件类型")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("阀组压力")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"titleView_pc"},[i("text",{staticClass:"titleText_pc"},[t._v("隐患统计")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("隐患分类")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("隐患提出")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("隐患状态")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"titleView_pc"},[i("text",{staticClass:"titleText_pc"},[t._v("检查统计")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("检查类型")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"titleView_pc"},[i("text",{staticClass:"titleText_pc"},[t._v("变更统计")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("变更状态")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("变更数量")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"titleView_pc"},[i("text",{staticClass:"titleText_pc"},[t._v("安全培训")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("考试分数分布")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("培训资料分类")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"subView"},[i("text",{staticClass:"dangerText"},[t._v("每周考试次数")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"21f7":function(t,e,i){},"424e":function(t,e,i){"use strict";var a=i("21f7"),s=i.n(a);s.a},7911:function(t,e,i){"use strict";i.r(e);var a=i("001f"),s=i("8555");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("424e");var c=i("2877"),r=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="chartList.vue",e["default"]=r.exports},8555:function(t,e,i){"use strict";i.r(e);var a=i("b8b9"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},b8b9:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("7c03")),s=n(i("4b9c"));function n(t){return t&&t.__esModule?t:{default:t}}var c={components:{uniList:a.default,uniListItem:s.default},methods:{onClick:function(e){"device"==e?t.navigateTo({url:"./deviceChart"}):"event"==e?t.navigateTo({url:"./eventChart"}):"valve"==e?t.navigateTo({url:"./valveChart"}):t.navigateTo({url:"./mpvue-echarts"})}}};e.default=c}).call(this,i("649d")["default"])},fdcf:function(t,e,i){"use strict";i("de83");var a=n(i("b0ce")),s=n(i("7911"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))}},[["fdcf","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/chartList.js');
__wxRoute = 'pages/mpvue-echarts/deviceChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/deviceChart.js';

define('pages/mpvue-echarts/deviceChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/deviceChart"],{"0bd4":function(e,t,i){"use strict";i.r(t);var a=i("d3d4"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"2d8c":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"container"},[i("view",{staticClass:"canvasView"},[i("view",{staticClass:"canvas-bar"},[i("view",{staticClass:"title"},[e._v(e._s(e.title))])]),i("mpvue-echarts",{ref:"pieChart",attrs:{echarts:e.echarts,onInit:e.pieInit,canvasId:"pie",mpcomid:"00eed4f4-0"}})],1),i("hj-dragabledrawer",{attrs:{options:e.options,mpcomid:"00eed4f4-1"}},[i("view",{staticClass:"fliterView"},[i("text",{staticClass:"fliterText"},[e._v("事件类型")]),i("view",{staticClass:"pickerView"},[i("picker",{attrs:{value:e.lx,range:e.events,eventid:"00eed4f4-0"},on:{change:e.eventChange}},[i("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.lx?"请选择事件类型":e.lx))])])],1),i("text",{staticClass:"fliterText"},[e._v("开始日期")]),i("view",{staticClass:"pickerView"},[i("picker",{attrs:{mode:"date",value:e.beginDate,eventid:"00eed4f4-1"},on:{change:e.beginDateChange}},[i("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.beginDate?"请选择开始日期":e.beginDate))])])],1),i("text",{staticClass:"fliterText"},[e._v("结束日期")]),i("view",{staticClass:"pickerView"},[i("picker",{attrs:{mode:"date",value:e.endDate,eventid:"00eed4f4-2"},on:{change:e.endDateChange}},[i("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.endDate?"请选择结束日期":e.endDate))])])],1),i("view",{staticClass:"btnView",attrs:{eventid:"00eed4f4-3"},on:{tap:e.searchClick}},[e._v("确定")])])])],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"44a4":function(e,t,i){"use strict";i("de83");var a=s(i("b0ce")),n=s(i("57e5"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},"57e5":function(e,t,i){"use strict";i.r(t);var a=i("2d8c"),n=i("0bd4");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("fbd0");var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);o.options.__file="deviceChart.vue",t["default"]=o.exports},c414:function(e,t,i){},d3d4:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(i("cc99")),n=l(i("502f")),s=l(i("bd1a")),r=(l(i("59a9")),l(i("17f7"))),o=l(i("3731")),c=i("2f62");function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};a.get||a.set?Object.defineProperty(t,i,a):t[i]=e[i]}return t.default=e,t}var d={animation:!1,backgroundColor:"#FFFFFF",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},f={components:{mpvueEcharts:n.default,hjDragabledrawer:s.default},computed:(0,c.mapState)(["userInfo"]),data:function(){return{echarts:a,options:{visible:!1,rightMode:!0},lx:"",beginDate:"",endDate:"",title:"",deviceList:[],events:["火灾报警","消防故障","监控站监控信号"]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{pieInit:function(e,t,i){var n=a.init(e,null,{width:t,height:i});return e.setChart(n),n.setOption(d),n},getCountDate:function(){var t=this,i={lx:t.lx,ksrq:t.beginDate,jsrq:t.endDate,userid:t.userInfo.userid};o.default.requestLoading(r.default.alertDeviceCount,i,"正在查询统计数据",function(i){console.log("统计数据："+JSON.stringify(i)),t.title=i.title,t.beginDate=i.ksrq,t.endDate=i.jsrq,d.series[0].data=i.list.slice(0),t.$refs.pieChart.init(),t.options.visible=!1,0==i.list.length&&e.showToast({icon:"none",title:"暂无数据"})},function(){e.showToast({icon:"none",title:"查询失败"})},function(){})},eventChange:function(e){this.lx=this.events[e.target.value]},beginDateChange:function(e){this.beginDate=e.target.value},endDateChange:function(e){this.endDate=e.target.value},searchClick:function(e){this.getCountDate()}}};t.default=f}).call(this,i("649d")["default"])},fbd0:function(e,t,i){"use strict";var a=i("c414"),n=i.n(a);n.a}},[["44a4","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/deviceChart.js');
__wxRoute = 'pages/mpvue-echarts/eventChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/eventChart.js';

define('pages/mpvue-echarts/eventChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/eventChart"],{"15ae":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a("cc99")),n=u(a("502f")),s=u(a("bd1a")),r=(u(a("59a9")),u(a("17f7"))),o=u(a("3731")),c=a("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};i.get||i.set?Object.defineProperty(t,a,i):t[a]=e[a]}return t.default=e,t}var d={animation:!1,backgroundColor:"#FFFFFF",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},f={components:{mpvueEcharts:n.default,hjDragabledrawer:s.default},computed:(0,c.mapState)(["userInfo"]),data:function(){return{echarts:i,options:{visible:!1,rightMode:!0},beginDate:"",endDate:"",title:"",deviceList:[]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{pieInit:function(e,t,a){var n=i.init(e,null,{width:t,height:a});return e.setChart(n),n.setOption(d),n},getCountDate:function(){var t=this,a={ksrq:t.beginDate,jsrq:t.endDate,userid:t.userInfo.userid};o.default.requestLoading(r.default.alertEventCount,a,"正在查询统计数据",function(a){t.title=a.title,t.beginDate=a.ksrq,t.endDate=a.jsrq,d.series[0].data=a.list.slice(0),t.$refs.pieChart.init(),t.options.visible=!1,0==a.list.length&&e.showToast({icon:"none",title:"暂无数据"})},function(){e.showToast({icon:"none",title:"查询失败"})},function(){})},beginDateChange:function(e){this.beginDate=e.target.value},endDateChange:function(e){this.endDate=e.target.value},searchClick:function(e){this.getCountDate()}}};t.default=f}).call(this,a("649d")["default"])},"4aa3":function(e,t,a){"use strict";a("de83");var i=s(a("b0ce")),n=s(a("ad0d"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},"4f5d":function(e,t,a){"use strict";a.r(t);var i=a("15ae"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},"66f3":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"container"},[a("view",{staticClass:"canvasView"},[a("view",{staticClass:"canvas-bar"},[a("view",{staticClass:"title"},[e._v(e._s(e.title))])]),a("mpvue-echarts",{ref:"pieChart",attrs:{echarts:e.echarts,onInit:e.pieInit,canvasId:"pie",mpcomid:"7e389618-0"}})],1),a("hj-dragabledrawer",{attrs:{options:e.options,mpcomid:"7e389618-1"}},[a("view",{staticClass:"fliterView"},[a("text",{staticClass:"fliterText"},[e._v("开始日期")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{mode:"date",value:e.beginDate,eventid:"7e389618-0"},on:{change:e.beginDateChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.beginDate?"请选择开始日期":e.beginDate))])])],1),a("text",{staticClass:"fliterText"},[e._v("结束日期")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{mode:"date",value:e.endDate,eventid:"7e389618-1"},on:{change:e.endDateChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.endDate?"请选择结束日期":e.endDate))])])],1),a("view",{staticClass:"btnView",attrs:{eventid:"7e389618-2"},on:{tap:e.searchClick}},[e._v("确定")])])])],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},a4de:function(e,t,a){},ad0d:function(e,t,a){"use strict";a.r(t);var i=a("66f3"),n=a("4f5d");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("e843");var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);o.options.__file="eventChart.vue",t["default"]=o.exports},e843:function(e,t,a){"use strict";var i=a("a4de"),n=a.n(i);n.a}},[["4aa3","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/eventChart.js');
__wxRoute = 'pages/mpvue-echarts/valveChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/valveChart.js';

define('pages/mpvue-echarts/valveChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/valveChart"],{"32cb":function(e,t,a){"use strict";a.r(t);var i=a("3508"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},3508:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(a("cc99")),n=v(a("502f")),s=v(a("bd1a")),l=v(a("7c03")),c=v(a("ba08")),r=v(a("4b9c")),o=(v(a("59a9")),v(a("17f7"))),u=v(a("3731")),f=a("2f62");function v(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};i.get||i.set?Object.defineProperty(t,a,i):t[a]=e[a]}return t.default=e,t}var h={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!0,xAxis:[{type:"category",data:[]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"供水压力",type:"line",data:[],itemStyle:{normal:{label:{show:!0}}}}]},p={components:{mpvueEcharts:n.default,hjDragabledrawer:s.default,uniList:l.default,uniListItem:r.default,uniIcon:c.default},computed:(0,f.mapState)(["userInfo"]),data:function(){return{echarts:i,options:{visible:!1,rightMode:!0},beginDate:"",endDate:"",lx:"",lc:"",fz:"",title:"",xLine:[],lineData:[],floorDatas:["1号楼","1号楼1层","1号楼2层","1号楼2夹层","1号楼3层","1号楼4层","1号楼地下室","1号楼屋面","2号楼","2号楼1层","1号楼2夹层","2号楼2层","2号楼3层","2号楼4层","2号楼地下室","2号楼屋面","3号楼","3号楼1层","3号楼2层","3号楼3层","3号楼4夹层","3号楼4层","4号楼","5号楼","5号楼1层","5号楼2层","5号楼屋面","6号楼","6号楼1层","6号楼2层","7号楼","8号楼","9号楼","10号楼","11号楼","12号楼","12号楼1层","12号楼2层","12号楼屋面","14号楼","15号楼"],checkDatas:["供水压力","管网压力","膜片腔压力"],valveNumDatas:[]}},onLoad:function(){this.getCountDate()},onNavigationBarButtonTap:function(){1==this.options.visible?this.options.visible=!1:this.options.visible=!0},methods:{lineInit:function(e,t,a){var n=i.init(e,null,{width:t,height:200});return e.setChart(n),n.setOption(h),n},getCountDate:function(){var t=this,a={ksrq:t.beginDate,jsrq:t.endDate,userid:t.userInfo.userid,lx:t.lx,fz:t.fz};u.default.requestLoading(o.default.alertValveCount,a,"正在查询统计数据",function(a){t.title=a.title,t.beginDate=a.ksrq,t.endDate=a.jsrq,t.lx=a.lx,t.fz=a.fz,h.xAxis.data=a.xLine.slice(0),h.series[0].data=a.data.slice(0),t.xLine=a.xLine.slice(0),t.lineData=a.data.slice(0),t.$refs.lineChart.init(),t.options.visible=!1,0==a.xLine.length&&e.showToast({icon:"none",title:"暂无数据"})},function(){e.showToast({icon:"none",title:"查询失败"})},function(){})},checkChange:function(e){this.lx=this.checkDatas[e.target.value]},floorChange:function(t){var a=this;a.lc=a.floorDatas[t.target.value];var i={lc:a.lc,userid:a.userInfo.userid};u.default.requestLoading(o.default.getValveDataByFloor,i,"正在查询阀组信息",function(t){for(var i=[],n=0;n<t.data.length;n++){var s=t.data[n];i.push(s.id)}a.valveNumDatas=i,0==i.length&&e.showToast({icon:"none",title:"该楼层无阀组数据"})},function(){e.showToast({icon:"none",title:"查询失败"})},function(){})},valveChange:function(e){this.fz=this.valveNumDatas[e.target.value]},beginDateChange:function(e){this.beginDate=e.target.value},endDateChange:function(e){this.endDate=e.target.value},searchClick:function(e){this.getCountDate()}}};t.default=p}).call(this,a("649d")["default"])},"530f":function(e,t,a){"use strict";var i=a("95c6"),n=a.n(i);n.a},"694f":function(e,t,a){"use strict";a.r(t);var i=a("fda6"),n=a("32cb");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("530f");var l=a("2877"),c=Object(l["a"])(n["default"],i["a"],i["b"],!1,null,null,null);c.options.__file="valveChart.vue",t["default"]=c.exports},"95c6":function(e,t,a){},a021:function(e,t,a){"use strict";a("de83");var i=s(a("b0ce")),n=s(a("694f"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},fda6:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"baseView"},[a("view",{staticClass:"title"},[e._v(e._s(e.title))]),a("view",{staticClass:"canvasView"},[a("mpvue-echarts",{ref:"lineChart",attrs:{echarts:e.echarts,onInit:e.lineInit,canvasId:"line",mpcomid:"1b853e3c-0"}})],1),a("view",{staticClass:"cellInfoView"},[a("uni-list",{attrs:{mpcomid:"1b853e3c-2"}},e._l(e.xLine,function(t,i){return a("uni-list-item",{key:i,attrs:{title:t,subnote:e.lineData[i],"show-arrow":"false",mpcomid:"1b853e3c-1-"+i}})}))],1),a("hj-dragabledrawer",{attrs:{options:e.options,mpcomid:"1b853e3c-3"}},[a("view",{staticClass:"fliterView"},[a("text",{staticClass:"fliterText"},[e._v("检查内容")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{value:e.lx,range:e.checkDatas,eventid:"1b853e3c-0"},on:{change:e.checkChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.lx?"请选择检查内容":e.lx))])])],1),a("text",{staticClass:"fliterText"},[e._v("楼层")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{value:e.lc,range:e.floorDatas,eventid:"1b853e3c-1"},on:{change:e.floorChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.lc?"请选择楼层":e.lc))])])],1),a("text",{staticClass:"fliterText"},[e._v("阀组编号")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{value:e.fz,range:e.valveNumDatas,eventid:"1b853e3c-2"},on:{change:e.valveChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.fz?"请选择阀组编号":e.fz))])])],1),a("text",{staticClass:"fliterText"},[e._v("开始日期")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{mode:"date",value:e.beginDate,eventid:"1b853e3c-3"},on:{change:e.beginDateChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.beginDate?"请选择开始日期":e.beginDate))])])],1),a("text",{staticClass:"fliterText"},[e._v("结束日期")]),a("view",{staticClass:"pickerView"},[a("picker",{attrs:{mode:"date",value:e.endDate,eventid:"1b853e3c-4"},on:{change:e.endDateChange}},[a("view",{staticClass:"pickerItem"},[e._v(e._s(""==e.endDate?"请选择结束日期":e.endDate))])])],1),a("view",{staticClass:"btnView",attrs:{eventid:"1b853e3c-5"},on:{tap:e.searchClick}},[e._v("确定")])])])],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}},[["a021","common/runtime","common/vendor"]]]);
});
require('pages/mpvue-echarts/valveChart.js');
__wxRoute = 'pages/mpvue-echarts/mpvue-echarts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-echarts/mpvue-echarts.js';

define('pages/mpvue-echarts/mpvue-echarts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mpvue-echarts/mpvue-echarts"],{"0e19":function(t,e,a){},"27c5":function(t,e,a){"use strict";a("de83");var n=r(a("b0ce")),i=r(a("d3af"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"5bc7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("cc99")),i=r(a("502f"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};n.get||n.set?Object.defineProperty(e,a,n):e[a]=t[a]}return e.default=t,e}var u=[{value:55,name:"北京"},{value:38,name:"上海"},{value:20,name:"广州"}],c={animation:!1,backgroundColor:"#F8F8F8",color:["#37A2DA","#32C5E9","#67E0E3","#91F2DE","#FFDB5C","#FF9F7F"],series:[{label:{normal:{fontSize:14}},type:"pie",center:["50%","50%"],radius:[0,"60%"],data:[],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 2, 2, 0.3)"}}}]},o={animation:!1,color:["#37A2DA","#9FE6B8"],grid:{x:35,x2:10,y:30,y2:25},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",splitArea:{show:!0}}],series:[{name:"蒸发量",type:"line",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"line",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]},l={data:function(){return{echarts:n,updateStatus:!1}},onLoad:function(){c.series[0].data=u.slice(0)},methods:{goBrowser:function(){plus.runtime.openURL("https://github.com/F-loat/mpvue-echarts")},updatePie:function(){this.updateStatus||(c.series[0].data.push({value:20,name:"武汉"}),c.series[0].data.push({value:10,name:"杭州"}),this.$refs.pieChart.init(),this.updateStatus=!0)},pieInit:function(t,e,a){var i=n.init(t,null,{width:e,height:a});return t.setChart(i),i.setOption(c),i},lineInit:function(t,e,a){var i=n.init(t,null,{width:e,height:a});return t.setChart(i),i.setOption(o),i}},components:{mpvueEcharts:i.default}};e.default=l},ab0f:function(t,e,a){"use strict";var n=a("0e19"),i=a.n(n);i.a},c48d:function(t,e,a){"use strict";a.r(e);var n=a("5bc7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},d3af:function(t,e,a){"use strict";a.r(e);var n=a("d500"),i=a("c48d");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("ab0f");var s=a("2877"),u=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);u.options.__file="mpvue-echarts.vue",e["default"]=u.exports},d500:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container"},[a("view",{staticClass:"canvasView"},[a("view",{staticClass:"canvas-bar"},[a("view",{staticClass:"title"},[t._v("饼图示例")]),a("button",{staticClass:"update-btn",attrs:{type:"primary",size:"mini",eventid:"18e9acfc-0"},on:{click:t.updatePie}},[t._v("修改饼状图数据")])],1),a("mpvue-echarts",{ref:"pieChart",attrs:{echarts:t.echarts,onInit:t.pieInit,canvasId:"pie",mpcomid:"18e9acfc-0"}})],1),a("view",{staticClass:"canvasView"},[a("view",{staticClass:"title"},[t._v("折线图示例")]),a("mpvue-echarts",{ref:"lineChart",attrs:{echarts:t.echarts,onInit:t.lineInit,canvasId:"line",mpcomid:"18e9acfc-1"}})],1)])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["27c5","common/runtime","common/vendor"]]]);
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

