// config.js
/**
  * 小程序后端接口配置文件
  */
var host = "http://222.223.19.166:10012/boeb9"  //域名要在小程序的管理平台配置好，如果出现调用时报错，无效的域名，可在微信开发工具左边点项目-》配置信息-》看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新

var config = {

  // 下面的地址配合 Server 工作
  host,
  // 登录
  login: `${host}/mobile/system/login.do`,
  
  // 点位检查扫码接口
  scan: `${host}/mobile/dwsm.do`,
  
  // 扫码新增检查
  UpdatePoint: `${host}/mobile/updateJcjl.do`,
  
  // 获取Tab页上的数量
  getTabCounts: `${host}/mobile/getTabCount.do`,
  
  // 获取检查详情
  getPointDetail: `${host}/mobile/getJcjl.do`,
  
  // 首页统计
  getMainPageCount: `${host}/mobile/getSytj.do`,
};
//对外把对象config返回
module.exports = config