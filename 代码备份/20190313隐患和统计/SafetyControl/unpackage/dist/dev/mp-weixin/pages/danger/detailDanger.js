(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/danger/detailDanger"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































































var _uniList = _interopRequireDefault(__webpack_require__(/*! @/components/list/uni-list/uni-list.vue */ "F:\\HBuilderProjects\\SafetyControl\\components\\list\\uni-list\\uni-list.vue"));
var _uniIcon = _interopRequireDefault(__webpack_require__(/*! @/components/list/uni-icon/uni-icon.vue */ "F:\\HBuilderProjects\\SafetyControl\\components\\list\\uni-icon\\uni-icon.vue"));
var _uniListItem = _interopRequireDefault(__webpack_require__(/*! @/components/list/uni-list-item/uni-list-item.vue */ "F:\\HBuilderProjects\\SafetyControl\\components\\list\\uni-list-item\\uni-list-item.vue"));
var _config = _interopRequireDefault(__webpack_require__(/*! ../../util/config.js */ "F:\\HBuilderProjects\\SafetyControl\\util\\config.js"));
var _request = _interopRequireDefault(__webpack_require__(/*! ../../util/request.js */ "F:\\HBuilderProjects\\SafetyControl\\util\\request.js"));
var _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ "F:\\HBuilderProjects\\SafetyControl\\service.js"));
var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =



{
  computed: (0, _vuex.mapState)(['sublistItem', 'sublistIndex', 'userInfo', 'inputPageText', 'key']),
  components: { uniList: _uniList.default, uniListItem: _uniListItem.default, uniIcon: _uniIcon.default },
  data: function data() {
    return {
      // 当页面OnShow的时候是否需要从state里去拿输入的内容
      needGetInputOnShow: false,
      // 上传照片相关
      imageViewHeight: 100,
      imageList: [],
      littleImageWidth: 0,

      // 页面参数
      dangerId: '', // 隐患id
      dangerLevel: '', // 隐患级别
      dangerType: '', // 隐患分类（隐患后果）
      dangerDesc: '', // 隐患描述
      dangerClause: '', // 对应条款
      dangerAdvise: '', // 整改建议
      dangerDept: '', //隐患责任部门
      //接口需要的参数
      checkDate: '', //检查日期
      // --------数据模板---------
      // 隐患级别
      dangerLevelData: ['一般隐患', '重大隐患'],
      // 隐患分类
      //dangerTypeData: ['自行输入分类','从分类库选择'],
      //隐患后果
      dangerTypeData: ['人员伤害', '财产损失', '其他'],
      // 隐患描述
      dangerDescData: ['从隐患库选择/检索', '自行输入问题', '从常用隐患库选择'],
      // 对应条款
      dangerClauseData: ['从隐患库选择/检索', '自行输入问题', '从法规库选择'],
      //隐患责任部门
      dangerDeptData: ['从隐患库选择/检索', '自行输入问题', '从部门库选择'],
      taskDefKey: '', //节点id
      instId: '',
      nodeName: '', //节点名称
      obj: null,
      styleFlag: {
        checkDate: false } };


  },
  onLoad: function onLoad(option) {
    console.log('加载页面...');
    var that = this;
    that.taskDefKey = JSON.parse(option.params).taskDefKey; //节点id
    that.instId = JSON.parse(option.params).instId;
    that.nodeName = JSON.parse(option.params).name;
    _request.default.requestLoadingNew(_config.default.getYhzgDetail, JSON.parse(option.params), "正在加载详情", function (res) {
      console.log('' + JSON.stringify(res));
      var yhzgObj = res.data;
      console.log(yhzgObj);
      //基础赋值				
      that.dangerId = yhzgObj.id;
      that.dangerLevel = yhzgObj.yhdj;
      that.dangerType = yhzgObj.yhhg;
      that.dangerDesc = yhzgObj.zgyj;
      that.dangerClause = yhzgObj.wfflfgjtk;
      that.dangerAdvise = yhzgObj.gsyqjjy;
      that.dangerDept = yhzgObj.zrbm;
      //that.imageList = yhzgObj.fj?yhzgObj.fj:yhzgObj.fj2?yhzgObj.fj2:yhzgObj.fj3;
      //节点判断
      console.log("当前节点：" + that.taskDefKey + "   节点名称：" + that.nodeName);

      if (that.yhzgObj.fj != "") {
        console.log('FJ:' + that.yhzgObj.fj);
        var imgList = JSON.parse(that.yhzgObj.fj);
        for (var i = 0; i < imgList.length; i++) {
          var imgObj = imgList[i];
          var imgUrl = _config.default.host + _config.default.loadImage + imgObj.fileId + "&userid=" + that.userInfo.userid;
          var imgItem = {
            fileid: imgObj.fileId,
            src: imgUrl,
            type: 2 };

          that.imageList.push(imgItem);
        }
      }
      //显示隐藏

      //提交控制


    }, function () {
      uni.showToast({
        icon: 'none',
        title: '请求失败' });

    }, function () {

    });

    this.littleImageWidth = (uni.getSystemInfoSync().windowWidth - 50) / 4;
    this.checkPeople = this.userInfo.fullname;
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {

  },
  onShow: function onShow() {
    if (this.needGetInputOnShow == true) {
      this.$data[this.key] = this.inputPageText;
      this.needGetInputOnShow = false;
      this.removeInputItem();
    }
  },
  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['removeInputItem']), {
    // 选择整改期限
    deadLineChange: function deadLineChange(e) {
      this.deadLine = e.target.value;
    },
    bindDateChange: function bindDateChange(e) {
      this.checkDate = e.target.value;
    },
    //审批历史
    historyClick: function historyClick() {
      uni.showToast({
        icon: 'none',
        title: '敬请期待！',
        duration: 1000 });

    },
    //查看流程图
    flowPicClick: function flowPicClick() {
      uni.showToast({
        icon: 'none',
        title: '敬请期待！',
        duration: 1000 });

    },
    //驳回
    backFlowClick: function backFlowClick() {
      uni.showToast({
        icon: 'none',
        title: '敬请期待！',
        duration: 1000 });

    },
    // 保存
    saveClick: function saveClick() {
      var that = this;
      var param = {
        refid: that.dangerId,
        id: that.dangerId,
        userid: that.userInfo.userid,
        taskDefKey: that.taskDefKey };

      //判断节点
      console.log(that.taskDefKey);
      var nodeId = that.taskDefKey;
      if (nodeId === "sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4" || nodeId === "sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE") {
        //发起隐患 发起人关闭
      } else if (nodeId === "sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C") {//整改人整改
        param.yhjb = that.dangerLevel;
        param.yhfl = that.dangerType;
        param.yhms = that.dangerDesc;
        param.dytk = that.dangerClause;
        param.zgjy = that.dangerAdvise;
        param.zgwcsj = that.checkDate; //整改完成时间
        param.jcr = that.checkPeople;
        param.zgqx = that.deadLine;
        param.zgqx = that.deadLine;

        /* yhzg.setZgwcrq(yhzgTemp.getZgwcrq());
                                    yhzg.setZlzj(yhzgTemp.getZlzj());
                                    yhzg.setZgr(yhzgTemp.getZgr());
                                    yhzg.setZgrName(yhzgTemp.getZgrName());
                                    yhzg.setTbrq(yhzgTemp.getTbrq());
                                    yhzg.setZgqk(yhzgTemp.getZgqk());
                                    yhzg.setFj2(yhzgTemp.getFj2()); */
      } else if (nodeId === "sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8") {//复核人复核
        /* yhzg.setYyfx2(yhzgTemp.getYyfx2());
        yhzg.setYzqk(yhzgTemp.getYzqk());
        yhzg.setFj3(yhzgTemp.getFj3());
        yhzg.setTbrq2(yhzgTemp.getTbrq2());
        yhzg.setYzr(yhzgTemp.getYzr());
        yhzg.setYzrName(yhzgTemp.getYzrName()); */
      } else if (nodeId === "sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205" || nodeId === "sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8") {//一级审批 二级审批
        /* yhzg.setZgqx(yhzgTemp.getZgqx());
        yhzg.setTbr(yhzgTemp.getTbr());
        yhzg.setTxrq(yhzgTemp.getTxrq());
        yhzg.setZgyj(yhzgTemp.getZgyj()); */
      }
      _request.default.requestLoadingNew(_config.default.updateYhzgFlow, param, '正在加载',
      function (res) {
        uni.showToast({
          icon: 'none',
          title: '保存成功',
          duration: 1000 });

        that.dangerId = res.id;
        uni.navigateTo({
          url: '../danger/detailList' });

      }, function () {
        uni.showToast({
          icon: 'none',
          title: '保存失败' });

      }, function () {

      });
    },
    jumpInput: function jumpInput(text, key) {var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '请输入描述';
      this.needGetInputOnShow = true;
      uni.navigateTo({
        url: '../common/inputPage?text=' + text + '&key=' + key + '&placeholder=' + placeholder + '' });

    },
    // 上传照片功能-添加照片
    addPhoto: function addPhoto() {
      var that = this;
      uni.chooseImage({
        count: 9, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], //从相册选择
        success: function success(res) {
          console.log(JSON.stringify(res.tempFilePaths));
          for (var i = 0; i < res.tempFilePaths.length; i++) {
            var imgObj = { //	type：1为新增需要上传，2为加载的，不需要上传
              fileid: '',
              src: res.tempFilePaths[i],
              type: 1 };

            that.imageList.push(imgObj);
          }
        } });

    },
    // 删除照片，需要分两种情况，如是从后台加载的，那需要调用删除接口，如果是直接本地读取还未上传的，不需要调删除接口
    deleteImage: function deleteImage(imgObj, index) {
      var that = this;
      if (imgObj.src.startsWith('http:')) {// 网络图片
        var obj = {
          item: that.item,
          index: that.itemIndex };

        that.setSublistItem(obj);

        var param = {
          from: 'jc',
          yyid: that.item.id,
          fileid: imgObj.fileid,
          userid: that.userInfo.userid };

        _request.default.requestLoading(_config.default.deleteImage, param, '正在删除图片',
        function (res) {
          console.log('删除成功：' + JSON.stringify(res));
          that.item.fj = res.fj;
          that.imageList.splice(index, 1);
        }, function () {
          uni.showToast({
            icon: 'none',
            title: '删除失败' });

        }, function () {

        });

      } else {// 刚选择好，还未上传，非网络图片
        that.imageList.splice(index, 1);
      }
    },
    // 浏览照片
    viewPhoto: function viewPhoto() {
      var that = this;
      var imgList = [];
      for (var i = 0; i < that.imageList.length; i++) {
        var item = that.imageList[i];
        imgList.push(item.src);
      }
      // 预览图片
      uni.previewImage({
        urls: imgList });

    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=template&id=16a477e8&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=template&id=16a477e8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "baseView" }, [
    _vm._m(0),
    _c(
      "view",
      { staticClass: "cellInfoView" },
      [
        _c("view", { staticClass: "imageBaseView" }, [
          _c("view", { staticClass: "cellSubViewRow" }, [
            _c("text", { staticClass: "leftTextRow" }, [_vm._v("隐患照片")]),
            _c("text", { staticClass: "rightTextRow" }, [
              _vm._v(_vm._s(_vm.imageList.length))
            ])
          ]),
          _c(
            "view",
            { staticClass: "imageView", attrs: { id: "imageView" } },
            [
              _vm._l(_vm.imageList, function(imgObj, idx) {
                return _c("block", { key: idx }, [
                  _c(
                    "view",
                    {
                      staticClass: "littleImageView",
                      style: {
                        width: _vm.littleImageWidth + "px",
                        height: _vm.littleImageWidth + "px"
                      }
                    },
                    [
                      _c("image", {
                        staticClass: "littleImage",
                        attrs: {
                          id: idx,
                          src: imgObj.src,
                          mode: "aspectFit",
                          eventid: "be86b3f6-0-" + idx
                        },
                        on: { click: _vm.viewPhoto }
                      }),
                      _c("image", {
                        staticClass: "littleImageDelete",
                        attrs: {
                          src: "../../static/img/delete.png",
                          id: idx,
                          mode: "aspectFit",
                          eventid: "be86b3f6-1-" + idx
                        },
                        on: {
                          click: function($event) {
                            _vm.deleteImage(imgObj, idx)
                          }
                        }
                      })
                    ]
                  )
                ])
              }),
              _c(
                "view",
                {
                  staticClass: "littleImageView",
                  style: {
                    width: _vm.littleImageWidth + "px",
                    height: _vm.littleImageWidth + "px"
                  },
                  attrs: { eventid: "be86b3f6-2" },
                  on: { click: _vm.addPhoto }
                },
                [
                  _c("image", {
                    staticClass: "littleImage",
                    attrs: { src: "../../static/img/addImage.png" }
                  })
                ]
              )
            ],
            2
          )
        ]),
        _c(
          "uni-list",
          { attrs: { mpcomid: "be86b3f6-6" } },
          [
            _c("uni-list-item", {
              attrs: {
                title: "责任部门",
                subnote: _vm.dangerDept,
                "show-arrow": "false",
                mpcomid: "be86b3f6-0"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "隐患级别",
                subnote: _vm.dangerLevel,
                "show-arrow": "false",
                mpcomid: "be86b3f6-1"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "隐患后果",
                subnote: _vm.dangerType,
                "show-arrow": "false",
                mpcomid: "be86b3f6-2"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "不合格因素",
                subnote: _vm.dangerDesc,
                "show-arrow": "false",
                mpcomid: "be86b3f6-3"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "对应条款",
                subnote: _vm.dangerClause,
                "show-arrow": "false",
                mpcomid: "be86b3f6-4"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "整改要求及建议",
                subnote: _vm.dangerAdvise,
                "show-arrow": "false",
                mpcomid: "be86b3f6-5"
              }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._m(1),
    _c(
      "view",
      { staticClass: "cellInfoView" },
      [
        _c(
          "uni-list",
          { attrs: { mpcomid: "be86b3f6-15" } },
          [
            _c(
              "picker",
              {
                attrs: {
                  mode: "date",
                  value: _vm.checkDate,
                  eventid: "be86b3f6-3"
                },
                on: { change: _vm.bindDateChange }
              },
              [
                _c("uni-list-item", {
                  attrs: {
                    title: "检查日期",
                    subnote: _vm.checkDate,
                    showSwitch: _vm.styleFlag.checkDate,
                    mpcomid: "be86b3f6-7"
                  }
                })
              ],
              1
            ),
            _c("uni-list-item", {
              attrs: {
                title: "整改意见",
                subnote: _vm.zgyj,
                "show-arrow": "false",
                showSwitch: _vm.styleFlag.zgyj,
                mpcomid: "be86b3f6-8"
              }
            }),
            _c(
              "picker",
              {
                attrs: { mode: "date", value: _vm.zgqx, eventid: "be86b3f6-4" },
                on: { change: _vm.bindDateChange }
              },
              [
                _c("uni-list-item", {
                  attrs: {
                    title: "整改期限",
                    subnote: _vm.zgqx,
                    showSwitch: _vm.styleFlag.zgqx,
                    mpcomid: "be86b3f6-9"
                  }
                })
              ],
              1
            ),
            _c("uni-list-item", {
              attrs: {
                title: "整改情况",
                subnote: _vm.zgqk,
                "show-arrow": "false",
                showSwitch: _vm.styleFlag.zgqk,
                mpcomid: "be86b3f6-10"
              }
            }),
            _c(
              "picker",
              {
                attrs: {
                  mode: "date",
                  value: _vm.zgwcrq,
                  showSwitch: _vm.styleFlag.zgwcrq,
                  eventid: "be86b3f6-5"
                },
                on: { change: _vm.bindDateChange }
              },
              [
                _c("uni-list-item", {
                  attrs: {
                    title: "整改完成日期",
                    subnote: _vm.zgwcrq,
                    showSwitch: _vm.styleFlag.zgwcrq,
                    mpcomid: "be86b3f6-11"
                  }
                })
              ],
              1
            ),
            _c("uni-list-item", {
              attrs: {
                title: "治理资金",
                subnote: _vm.zlzj,
                "show-arrow": "false",
                showSwitch: _vm.styleFlag.zlzj,
                mpcomid: "be86b3f6-12"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "原因分析",
                subnote: _vm.yyfx,
                "show-arrow": "false",
                showSwitch: _vm.styleFlag.yyfx,
                mpcomid: "be86b3f6-13"
              }
            }),
            _c("uni-list-item", {
              attrs: {
                title: "验证情况",
                subnote: _vm.yzqk,
                "show-arrow": "false",
                showSwitch: _vm.styleFlag.yzqk,
                mpcomid: "be86b3f6-14"
              }
            })
          ],
          1
        )
      ],
      1
    ),
    _c(
      "view",
      { staticClass: "btnView" },
      [
        _c(
          "button",
          {
            staticClass: "saveBtn",
            attrs: { eventid: "be86b3f6-6" },
            on: { tap: _vm.saveClick }
          },
          [_vm._v("同意")]
        ),
        _c(
          "button",
          {
            staticClass: "saveBtn",
            attrs: { eventid: "be86b3f6-7" },
            on: { tap: _vm.historyClick }
          },
          [_vm._v("审批历史")]
        ),
        _c(
          "button",
          {
            staticClass: "saveBtn",
            attrs: { eventid: "be86b3f6-8" },
            on: { tap: _vm.flowPicClick }
          },
          [_vm._v("流程图")]
        ),
        _c(
          "button",
          {
            staticClass: "saveBtn",
            attrs: { eventid: "be86b3f6-9" },
            on: { tap: _vm.backFlowClick }
          },
          [_vm._v("驳回")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cellTitleView" }, [
      _c("text", { staticClass: "cellTitle" }, [_vm._v("基础信息")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cellTitleView" }, [
      _c("text", { staticClass: "cellTitle" }, [_vm._v("审批信息")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2Fdanger%2FdetailDanger\"}":
/*!******************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/main.js?{"page":"pages%2Fdanger%2FdetailDanger"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\HBuilderProjects\\SafetyControl\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _detailDanger = _interopRequireDefault(__webpack_require__(/*! ./pages/danger/detailDanger.vue */ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_detailDanger.default));

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue":
/*!***********************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailDanger.vue?vue&type=template&id=16a477e8& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=template&id=16a477e8&");
/* harmony import */ var _detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailDanger.vue?vue&type=script&lang=js& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailDanger.vue?vue&type=style&index=0&lang=css& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./detailDanger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./detailDanger.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=template&id=16a477e8&":
/*!******************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/danger/detailDanger.vue?vue&type=template&id=16a477e8& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./detailDanger.vue?vue&type=template&id=16a477e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\danger\\detailDanger.vue?vue&type=template&id=16a477e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_detailDanger_vue_vue_type_template_id_16a477e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2Fdanger%2FdetailDanger\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/danger/detailDanger.js.map