(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/diyHost"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














var _service = _interopRequireDefault(__webpack_require__(/*! ../../service.js */ "F:\\HBuilderProjects\\SafetyControl\\service.js"));
var _mInput = _interopRequireDefault(__webpack_require__(/*! ../../components/m-input.vue */ "F:\\HBuilderProjects\\SafetyControl\\components\\m-input.vue"));
var _config = _interopRequireDefault(__webpack_require__(/*! ../../util/config.js */ "F:\\HBuilderProjects\\SafetyControl\\util\\config.js"));
var _request = _interopRequireDefault(__webpack_require__(/*! ../../util/request.js */ "F:\\HBuilderProjects\\SafetyControl\\util\\request.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

{
  components: {
    mInput: _mInput.default },

  data: function data() {
    return {
      host: '' };

  },
  onLoad: function onLoad() {
    this.host = _config.default.host;
  },
  methods: {
    testConnect: function testConnect() {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '请确认地址输入正确\n' + that.host,
        success: function success(res) {
          if (res.confirm) {
            // console.log('用户点击确定');
            _config.default.host = that.host;
            uni.setStorage({
              key: "LOCAL_URL",
              data: that.host,
              success: function success() {
                console.log('自定义域缓存成功');
                uni.navigateBack({
                  delta: 1 });

              } });

          } else if (res.cancel) {
            // console.log('用户点击取消');
          }
        } });


      //                 request.requestLoading(that.host, {}, "正在测试连接", function(res){
      // 					config.host = that.host;
      // 					uni.setStorage({
      // 							key: "LOCAL_URL",
      // 							data: that.host,
      // 							success: function () {
      // 									console.log('自定义域缓存成功');
      // 							}
      // 					});
      // 					uni.showToast({
      // 					    title: '连接成功',
      // 						duration: 1000,
      // 						complete() {
      // 							uni.navigateBack({
      // 							    delta: 1
      // 							});
      // 						}
      // 					});
      // 				}, function(){
      // 					uni.showToast({
      // 						icon: 'none',
      // 					    title: '连接失败'
      // 					});
      // 				}, function(){
      // 					uni.showToast({
      // 						icon: 'none',
      // 					    title: '连接失败'
      // 					});
      // 				});
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=template&id=cf32fcfc&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue?vue&type=template&id=cf32fcfc& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "content" }, [
    _c("view", { staticClass: "input-group" }, [
      _c(
        "view",
        { staticClass: "input-row border" },
        [
          _c("text", { staticClass: "title" }, [_vm._v("域名：")]),
          _c("m-input", {
            attrs: {
              type: "text",
              focus: "",
              clearable: "",
              placeholder: "请输入域名",
              eventid: "062a0f3b-0",
              mpcomid: "062a0f3b-0"
            },
            model: {
              value: _vm.host,
              callback: function($$v) {
                _vm.host = $$v
              },
              expression: "host"
            }
          })
        ],
        1
      )
    ]),
    _c(
      "view",
      { staticClass: "btn-row" },
      [
        _c(
          "button",
          {
            staticClass: "primary",
            attrs: { type: "primary", eventid: "062a0f3b-1" },
            on: { tap: _vm.testConnect }
          },
          [_vm._v("确认地址")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2Flogin%2FdiyHost\"}":
/*!************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/main.js?{"page":"pages%2Flogin%2FdiyHost"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\HBuilderProjects\\SafetyControl\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _diyHost = _interopRequireDefault(__webpack_require__(/*! ./pages/login/diyHost.vue */ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_diyHost.default));

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue":
/*!*****************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diyHost.vue?vue&type=template&id=cf32fcfc& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=template&id=cf32fcfc&");
/* harmony import */ var _diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diyHost.vue?vue&type=script&lang=js& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./diyHost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=template&id=cf32fcfc&":
/*!************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/login/diyHost.vue?vue&type=template&id=cf32fcfc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./diyHost.vue?vue&type=template&id=cf32fcfc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\login\\diyHost.vue?vue&type=template&id=cf32fcfc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_diyHost_vue_vue_type_template_id_cf32fcfc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2Flogin%2FdiyHost\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/diyHost.js.map