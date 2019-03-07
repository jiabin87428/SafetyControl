// config.js
/**
  * 小程序后端接口配置文件
  * http://222.223.19.166:10012/ehsq，外网
  * http://10.57.167.214:8080/ehsq，内网
  */
var host = "http://192.168.1.100:8080/boeb9"  //域名要在小程序的管理平台配置好，如果出现调用时报错，无效的域名，可在微信开发工具左边点项目-》配置信息-》看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新

 
var config = {

	// 下面的地址配合 Server 工作
	host,
	// 登录
	login: '/mobile/system/login.do',

	// 点位检查扫码接口
	scan: '/mobile/dwsm.do',

	// 扫码新增检查
	UpdatePoint: '/mobile/updateJcjl.do',

	// 获取Tab页上的数量
	getTabCounts: '/mobile/getTabCount.do',

	// 获取检查详情
	getPointDetail: '/mobile/getJcjl.do',

	// 首页统计
	getMainPageCount: '/mobile/getSytj.do',
	
	// 报警设备类型统计
	alertDeviceCount: '/mobile/bjsblx.do',

	// 报警事件类型统计
	alertEventCount: '/mobile/bjsjlx.do',

	// 阀组压力统计
	alertValveCount: '/mobile/ylfz.do',
	// 阀组压力统计 - 根据楼层获取阀组编号
	getValveDataByFloor: '/mobile/getfz.do',
	
	// 上传图片
	uploadImage: '/uploadImg',
	
	// 加载图片
	loadImage: '/mobile/loadYhzp.do?fileid=',
	
	// 删除图片
	deleteImage: '/mobile/delZp.do',
	
	// ------隐患相关-------
	// 添加/修改隐患
	editDanger: '/mobile/updateYhzg.do',
	//获取隐患审批数据
	getYhzgListByType:'/mobile/getYhzgListByType.do',
	//获取隐患整改数目
	getYhzgTabCounts:'/mobile/getYhzgTabCounts.do',
	//获取隐患整改详情信息
	getYhzgDetail:'/mobile/getYhzgDetail.do',
	//隐患整改审批
	updateYhzgFlow:'/mobile/updateYhzgFlow.do',
};
//对外把对象config返回
module.exports = config