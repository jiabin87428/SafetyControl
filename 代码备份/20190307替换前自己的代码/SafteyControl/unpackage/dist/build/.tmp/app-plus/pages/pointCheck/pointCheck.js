(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(t,a,s){"use strict";s.r(a);var e=s("0ad6"),i=s.n(e);for(var n in e)"default"!==n&&function(t){s.d(a,t,function(){return e[t]})}(n);a["default"]=i.a},"0ad6":function(t,a,s){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(s("6cfe")),i=s("2f62");function n(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{},e=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(a){r(t,a,s[a])})}return t}function r(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}var d={computed:c({},(0,i.mapState)(["hasLogin","forcedLogin","userType","userInfo"])),components:{uniDrawer:e.default},data:function(){return{navBtnMuen:[],currentTemplate:0}},onLoad:function(){var t={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",t);var a={name:"本周未检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",a);var s={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",s),this.saveTabInfo("消防泵",s),this.setCurrentTemp()},onNavigationBarButtonTap:function(){var a=this;t.showActionSheet({itemList:a.navBtnMuen,success:function(s){console.log("选中了第"+(s.tapIndex+1)+"个按钮"),t.showLoading({title:"正在切换主题..."}),setTimeout(function(){t.hideLoading(),a.currentTemplate=s.tapIndex,a.setCurrentTemp()},1e3)},fail:function(t){console.log(t.errMsg)}})},methods:{setCurrentTemp:function(){this.navBtnMuen=["默认主题","安全标准化主题","ISO45001主题"],this.navBtnMuen[this.currentTemplate]+="[当前]"},jumpListPage:function(a){this.saveTabInfo("currentLx",a),t.navigateTo({url:"../pointList/uni-tabs"})},jumpPage:function(a){""!=a?t.navigateTo({url:a}):t.showToast({icon:"none",title:"敬请期待～"})},saveTabInfo:function(a,s){t.setStorage({key:a,data:s,success:function(){console.log("保存成功")}})}}};a.default=d}).call(this,s("649d")["default"])},"2dc8":function(t,a,s){},a36f:function(t,a,s){"use strict";var e=s("2dc8"),i=s.n(e);i.a},ab69:function(t,a,s){"use strict";s.r(a);var e=s("cedb"),i=s("0927");for(var n in i)"default"!==n&&function(t){s.d(a,t,function(){return i[t]})}(n);s("a36f");var c=s("2877"),r=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},be2a:function(t,a,s){"use strict";s("de83");var e=n(s("b0ce")),i=n(s("ab69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},cedb:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"part2"},[1!=t.userType?s("swiper",{staticClass:"banner-box",attrs:{"indicator-dots":"",autoplay:"","indicator-active-color":"#169bd5",circular:"",interval:5e3,duration:300,"indicator-color":"rgba(0,0,0,.3)"}},[s("swiper-item",{attrs:{mpcomid:"10bbdf1a-0"}},[s("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])],1):t._e(),1==t.userType?s("view",{staticClass:"topView_pc",attrs:{eventid:"10bbdf1a-0"},on:{tap:function(a){t.jumpPage("../statistics/statistics")}}},[t._m(0),t._m(1),t._m(2),s("image",{staticClass:"arrow",attrs:{src:"../../static/img/rightArrow_white.png",mode:"aspectFit"}})]):t._e(),0==t.currentTemplate?s("block",[s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("检查管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-1"},on:{tap:function(a){t.jumpListPage("所有记录")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("所有记录")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-2"},on:{tap:function(a){t.jumpListPage("消火栓")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xhs.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("消火栓")])])]),1==t.userType?s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-3"},on:{tap:function(a){t.jumpListPage("阀组")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_fz.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("阀组")])])]):t._e(),1==t.userType?s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-4"},on:{tap:function(a){t.jumpListPage("高位水箱")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_sx.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("高位水箱")])])]):t._e(),1==t.userType?s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-5"},on:{tap:function(a){t.jumpListPage("消防泵")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xfb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("消防泵")])])]):t._e(),s("view",{staticClass:"dangerView"})]),1==t.userType?s("block",[s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("隐患排查")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-6"},on:{tap:function(a){t.jumpPage("../danger/addDanger")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("隐患上报")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-7"},on:{tap:function(a){t.jumpPage("../danger/dangerList")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsp.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("隐患审批")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("事故管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-8"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sgkb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("事故快报")])])]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("作业管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-9"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zyfxpg.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("作业风险评估")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-10"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zysp.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("作业审批")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("安全培训")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-11"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxzl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训资料")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-12"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zxks.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("在线考试")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-13"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxjh.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训计划")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-14"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxkc.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("培训课程")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-15"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zwcs.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("自我测试")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-16"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/tyks.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("统一考试")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("法律法规")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-17"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/fgqd.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("法规清单")])])]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("环保管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-18"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sfpf.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("三废排放")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-19"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jcjl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("监测记录")])])]),s("view",{staticClass:"dangerView"})])]):t._e()],1):t._e(),1==t.currentTemplate?s("block",[s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("目标职责")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-20"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/mb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("目标")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-21"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jghzz.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("机构和职责")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-22"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/qycy.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("全员参与")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-23"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/aqtr.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("安全投入")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-24"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/aqwh.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("安全文化")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("制度化管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-25"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/fgqd.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("法律法规")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-26"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/gzzd.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("规章制度")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-27"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/czlc.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("操作流程")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("教育培训")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-28"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jypx.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("教育培训")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-29"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/rypx.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("人员培训")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("现场管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-30"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("设备设施")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-31"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zyaq.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("作业安全")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-32"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zyjk.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("职业健康")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("安全风险管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-33"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/aqfxgl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("安全风险管理")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-34"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zdwxy.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("重大危险源")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-35"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhpc.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("隐患排查")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-36"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/ycyj.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("预测预警")])])]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("应急管理")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-37"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yjzb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("应急准备")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-38"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yjcz.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("应急处置")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-39"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yjpg.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("应急评估")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("事故查处")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-40"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sgkb.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("报告")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-41"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zxks.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("调查和处理")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("持续改进")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-42"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jxpd.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("绩效评定")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-43"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jcjl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("持续改进")])])]),s("view",{staticClass:"dangerView"})])]):t._e(),2==t.currentTemplate?s("block",[s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("组织环境")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-44"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/txgl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("体系管理")])])]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("领导作用与工作人员参与")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-45"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/cn.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("承诺")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-46"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jghzz.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("组织职责")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("策划")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-47"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wxy.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("危险源")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-48"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/flfg.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("法律法规")])])]),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("支持")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-49"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/nl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("能力")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-50"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/ys.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("意识")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-51"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/gt.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("沟通")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("运行")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-52"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/wxy.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("危险源")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-53"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/bg.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("变更")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-54"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/cg.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("采购")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-55"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/ycyj.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("应急响应")])])]),s("view",{staticClass:"dangerView"}),s("view",{staticClass:"dangerView"})]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("绩效评定")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-56"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jxpd.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("绩效评价")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-57"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yjcz.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("内部审核")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-58"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/ygyh.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("管理评审")])])])]),s("view",{staticClass:"titleView_pc"},[s("text",{staticClass:"titleText_pc"},[t._v("改进")])]),s("view",{staticClass:"menuBlockView"},[s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-59"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxzl.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("总则")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-60"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zysp.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("纠正措施")])])]),s("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-61"},on:{tap:function(a){t.jumpPage("")}}},[s("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/cxgj.png",mode:"widthFix"}}),s("view",{staticClass:"subView"},[s("text",{staticClass:"dangerText"},[t._v("持续改进")])])])])]):t._e()],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("隐患总数")]),s("text",{staticClass:"topTextNum"},[t._v("1005")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("事故总数")]),s("text",{staticClass:"topTextNum"},[t._v("600")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"topItemView"},[s("text",{staticClass:"topTextTitle"},[t._v("检查次数")]),s("text",{staticClass:"topTextNum"},[t._v("2000")])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})}},[["be2a","common/runtime","common/vendor"]]]);