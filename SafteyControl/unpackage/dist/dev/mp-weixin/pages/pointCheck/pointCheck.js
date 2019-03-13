(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/pointCheck/pointCheck"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































































































































































































































































































































































































































































































































































































var _uniDrawer = _interopRequireDefault(__webpack_require__(/*! @/components/drawer/uni-drawer.vue */ "F:\\HBuilderProjects\\SafetyControl\\components\\drawer\\uni-drawer.vue"));
var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =



{
  computed: _objectSpread({},
  (0, _vuex.mapState)(['hasLogin', 'forcedLogin', 'userType', 'userInfo'])),

  components: { uniDrawer: _uniDrawer.default },
  data: function data() {
    return {
      // 右上角的按钮菜单
      navBtnMuen: [],
      // 当前主题: 0、默认主题 1、安全标准化主题 2、ISO45001主题
      currentTemplate: 0 };

  },
  onLoad: function onLoad() {
    var hydrantTab = {
      name: '当月未检查',
      id: '/mobile/xhsdywjclb.do' };

    this.saveTabInfo('消火栓', hydrantTab);

    var valveTab = {
      name: '本周未检查',
      id: '/mobile/fzzwjclb.do' };

    this.saveTabInfo('阀组', valveTab);

    var waterTab = {
      name: '当天未检查',
      id: '/mobile/jtwjclb.do' };

    this.saveTabInfo('高位水箱', waterTab);
    this.saveTabInfo('消防泵', waterTab);

    this.setCurrentTemp();
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {
    var that = this;
    uni.showActionSheet({
      itemList: that.navBtnMuen,
      success: function success(res) {
        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
        uni.showLoading({
          title: '正在切换主题...' });

        setTimeout(function () {
          uni.hideLoading();
          that.currentTemplate = res.tapIndex;
          that.setCurrentTemp();
        }, 1000);
      },
      fail: function fail(res) {
        console.log(res.errMsg);
      } });

  },
  methods: {
    // 设定当前选择的主题
    setCurrentTemp: function setCurrentTemp() {
      this.navBtnMuen = ['默认主题', '安全标准化主题', 'ISO45001主题'];
      this.navBtnMuen[this.currentTemplate] += '[当前]';
    },
    jumpListPage: function jumpListPage(lx) {
      this.saveTabInfo('currentLx', lx); // 保存当前类型名称
      // 				uni.navigateTo({
      // 					url: '../pointList/pointList?lx=' + lx,
      // 				});
      uni.navigateTo({
        url: '../pointList/uni-tabs' });

    },
    jumpPage: function jumpPage(url) {
      if (url == '') {
        uni.showToast({
          icon: 'none',
          title: '敬请期待～' });

        return;
      } else {
        uni.navigateTo({
          url: url });

      }
    },
    saveTabInfo: function saveTabInfo(key, data) {
      uni.setStorage({
        key: key,
        data: data,
        success: function success() {
          console.log('保存成功');
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=template&id=7524488a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=template&id=7524488a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: "part2" },
    [
      _vm.userType != 1
        ? _c(
            "swiper",
            {
              staticClass: "banner-box",
              attrs: {
                "indicator-dots": "",
                autoplay: "",
                "indicator-active-color": "#169bd5",
                circular: "",
                interval: 5000,
                duration: 300,
                "indicator-color": "rgba(0,0,0,.3)"
              }
            },
            [
              _c("swiper-item", { attrs: { mpcomid: "251d8cf4-0" } }, [
                _c("image", {
                  staticClass: "banner-image",
                  attrs: {
                    src: "../../static/img/fgBG.png",
                    mode: "aspectFill",
                    "lazy-load": ""
                  }
                })
              ])
            ],
            1
          )
        : _vm._e(),
      _vm.userType == 1
        ? _c(
            "view",
            {
              staticClass: "topView_pc",
              attrs: { eventid: "251d8cf4-0" },
              on: {
                tap: function($event) {
                  _vm.jumpPage("../statistics/statistics")
                }
              }
            },
            [
              _vm._m(0),
              _vm._m(1),
              _vm._m(2),
              _c("image", {
                staticClass: "arrow",
                attrs: {
                  src: "../../static/img/rightArrow_white.png",
                  mode: "aspectFit"
                }
              })
            ]
          )
        : _vm._e(),
      _vm.currentTemplate == 0
        ? _c(
            "block",
            [
              _c("view", { staticClass: "titleView_pc" }, [
                _c("text", { staticClass: "titleText_pc" }, [
                  _vm._v("检查管理")
                ])
              ]),
              _c("view", { staticClass: "menuBlockView" }, [
                _c(
                  "view",
                  {
                    staticClass: "dangerView",
                    attrs: { eventid: "251d8cf4-1" },
                    on: {
                      tap: function($event) {
                        _vm.jumpListPage("所有记录")
                      }
                    }
                  },
                  [
                    _c("image", {
                      staticClass: "dangerIcon",
                      attrs: {
                        src: "../../static/img/point_all.png",
                        mode: "widthFix"
                      }
                    }),
                    _c("view", { staticClass: "subView" }, [
                      _c("text", { staticClass: "dangerText" }, [
                        _vm._v("所有记录")
                      ])
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: "dangerView",
                    attrs: { eventid: "251d8cf4-2" },
                    on: {
                      tap: function($event) {
                        _vm.jumpListPage("消火栓")
                      }
                    }
                  },
                  [
                    _c("image", {
                      staticClass: "dangerIcon",
                      attrs: {
                        src: "../../static/img/point_xhs.png",
                        mode: "widthFix"
                      }
                    }),
                    _c("view", { staticClass: "subView" }, [
                      _c("text", { staticClass: "dangerText" }, [
                        _vm._v("消火栓")
                      ])
                    ])
                  ]
                ),
                _vm.userType == 1
                  ? _c(
                      "view",
                      {
                        staticClass: "dangerView",
                        attrs: { eventid: "251d8cf4-3" },
                        on: {
                          tap: function($event) {
                            _vm.jumpListPage("阀组")
                          }
                        }
                      },
                      [
                        _c("image", {
                          staticClass: "dangerIcon",
                          attrs: {
                            src: "../../static/img/point_fz.png",
                            mode: "widthFix"
                          }
                        }),
                        _c("view", { staticClass: "subView" }, [
                          _c("text", { staticClass: "dangerText" }, [
                            _vm._v("阀组")
                          ])
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm.userType == 1
                  ? _c(
                      "view",
                      {
                        staticClass: "dangerView",
                        attrs: { eventid: "251d8cf4-4" },
                        on: {
                          tap: function($event) {
                            _vm.jumpListPage("高位水箱")
                          }
                        }
                      },
                      [
                        _c("image", {
                          staticClass: "dangerIcon",
                          attrs: {
                            src: "../../static/img/point_sx.png",
                            mode: "widthFix"
                          }
                        }),
                        _c("view", { staticClass: "subView" }, [
                          _c("text", { staticClass: "dangerText" }, [
                            _vm._v("高位水箱")
                          ])
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm.userType == 1
                  ? _c(
                      "view",
                      {
                        staticClass: "dangerView",
                        attrs: { eventid: "251d8cf4-5" },
                        on: {
                          tap: function($event) {
                            _vm.jumpListPage("消防泵")
                          }
                        }
                      },
                      [
                        _c("image", {
                          staticClass: "dangerIcon",
                          attrs: {
                            src: "../../static/img/point_xfb.png",
                            mode: "widthFix"
                          }
                        }),
                        _c("view", { staticClass: "subView" }, [
                          _c("text", { staticClass: "dangerText" }, [
                            _vm._v("消防泵")
                          ])
                        ])
                      ]
                    )
                  : _vm._e(),
                _c("view", { staticClass: "dangerView" })
              ]),
              _vm.userType == 1
                ? _c("block", [
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("隐患排查")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-6" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("../danger/addDanger")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/yhsb.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("隐患上报")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-7" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("../danger/dangerList")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/yhsp.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("隐患审批")
                            ])
                          ])
                        ]
                      ),
                      _c("view", { staticClass: "dangerView" })
                    ]),
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("事故管理")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-8" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/sgkb.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("事故快报")
                            ])
                          ])
                        ]
                      ),
                      _c("view", { staticClass: "dangerView" }),
                      _c("view", { staticClass: "dangerView" })
                    ]),
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("作业管理")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-9" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/zyfxpg.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("作业风险评估")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-10" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/zysp.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("作业审批")
                            ])
                          ])
                        ]
                      ),
                      _c("view", { staticClass: "dangerView" })
                    ]),
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("安全培训")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-11" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/pxzl.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("培训资料")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-12" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/zxks.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("在线考试")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-13" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/pxjh.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("培训计划")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-14" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/pxkc.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("培训课程")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-15" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/zwcs.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("自我测试")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-16" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/tyks.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("统一考试")
                            ])
                          ])
                        ]
                      )
                    ]),
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("法律法规")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-17" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/fgqd.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("法规清单")
                            ])
                          ])
                        ]
                      ),
                      _c("view", { staticClass: "dangerView" }),
                      _c("view", { staticClass: "dangerView" })
                    ]),
                    _c("view", { staticClass: "titleView_pc" }, [
                      _c("text", { staticClass: "titleText_pc" }, [
                        _vm._v("环保管理")
                      ])
                    ]),
                    _c("view", { staticClass: "menuBlockView" }, [
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-18" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/sfpf.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("三废排放")
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: "dangerView",
                          attrs: { eventid: "251d8cf4-19" },
                          on: {
                            tap: function($event) {
                              _vm.jumpPage("")
                            }
                          }
                        },
                        [
                          _c("image", {
                            staticClass: "dangerIcon",
                            attrs: {
                              src: "../../static/img/jcjl.png",
                              mode: "widthFix"
                            }
                          }),
                          _c("view", { staticClass: "subView" }, [
                            _c("text", { staticClass: "dangerText" }, [
                              _vm._v("监测记录")
                            ])
                          ])
                        ]
                      ),
                      _c("view", { staticClass: "dangerView" })
                    ])
                  ])
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm.currentTemplate == 1
        ? _c("block", [
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("目标职责")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-20" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/mb.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("目标")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-21" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jghzz.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("机构和职责")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-22" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/qycy.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("全员参与")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-23" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/aqtr.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("安全投入")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-24" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/aqwh.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("安全文化")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [
                _vm._v("制度化管理")
              ])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-25" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/fgqd.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("法律法规")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-26" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/gzzd.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("规章制度")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-27" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/czlc.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("操作流程")
                    ])
                  ])
                ]
              )
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("教育培训")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-28" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jypx.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("教育培训")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-29" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/rypx.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("人员培训")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("现场管理")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-30" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/point_all.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("设备设施")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-31" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/zyaq.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("作业安全")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-32" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/zyjk.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("职业健康")
                    ])
                  ])
                ]
              )
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [
                _vm._v("安全风险管理")
              ])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-33" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/aqfxgl.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("安全风险管理")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-34" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/zdwxy.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("重大危险源")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-35" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/yhpc.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("隐患排查")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-36" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/ycyj.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("预测预警")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" }),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("应急管理")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-37" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/yjzb.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("应急准备")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-38" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/yjcz.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("应急处置")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-39" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/yjpg.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("应急评估")
                    ])
                  ])
                ]
              )
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("事故查处")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-40" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/sgkb.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("报告")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-41" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/zxks.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("调查和处理")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("持续改进")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-42" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jxpd.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("绩效评定")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-43" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jcjl.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("持续改进")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ])
          ])
        : _vm._e(),
      _vm.currentTemplate == 2
        ? _c("block", [
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("组织环境")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-44" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/txgl.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("体系管理")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" }),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [
                _vm._v("领导作用与工作人员参与")
              ])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-45" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/cn.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("承诺")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-46" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jghzz.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("组织职责")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("策划")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-47" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/wxy.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("危险源")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-48" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/flfg.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("法律法规")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("支持")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-49" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/nl.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("能力")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-50" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/ys.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("意识")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-51" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/gt.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("沟通")])
                  ])
                ]
              )
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("运行")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-52" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/wxy.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("危险源")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-53" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/bg.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("变更")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-54" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: { src: "../../static/img/cg.png", mode: "widthFix" }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("采购")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-55" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/ycyj.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("应急响应")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "dangerView" }),
              _c("view", { staticClass: "dangerView" })
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("绩效评定")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-56" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/jxpd.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("绩效评价")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-57" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/yjcz.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("内部审核")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-58" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/ygyh.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("管理评审")
                    ])
                  ])
                ]
              )
            ]),
            _c("view", { staticClass: "titleView_pc" }, [
              _c("text", { staticClass: "titleText_pc" }, [_vm._v("改进")])
            ]),
            _c("view", { staticClass: "menuBlockView" }, [
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-59" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/pxzl.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [_vm._v("总则")])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-60" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/zysp.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("纠正措施")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: "dangerView",
                  attrs: { eventid: "251d8cf4-61" },
                  on: {
                    tap: function($event) {
                      _vm.jumpPage("")
                    }
                  }
                },
                [
                  _c("image", {
                    staticClass: "dangerIcon",
                    attrs: {
                      src: "../../static/img/cxgj.png",
                      mode: "widthFix"
                    }
                  }),
                  _c("view", { staticClass: "subView" }, [
                    _c("text", { staticClass: "dangerText" }, [
                      _vm._v("持续改进")
                    ])
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "topItemView" }, [
      _c("text", { staticClass: "topTextTitle" }, [_vm._v("隐患总数")]),
      _c("text", { staticClass: "topTextNum" }, [_vm._v("1005")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "topItemView" }, [
      _c("text", { staticClass: "topTextTitle" }, [_vm._v("事故总数")]),
      _c("text", { staticClass: "topTextNum" }, [_vm._v("600")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "topItemView" }, [
      _c("text", { staticClass: "topTextTitle" }, [_vm._v("检查次数")]),
      _c("text", { staticClass: "topTextNum" }, [_vm._v("2000")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2FpointCheck%2FpointCheck\"}":
/*!********************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/main.js?{"page":"pages%2FpointCheck%2FpointCheck"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\HBuilderProjects\\SafetyControl\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _pointCheck = _interopRequireDefault(__webpack_require__(/*! ./pages/pointCheck/pointCheck.vue */ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_pointCheck.default));

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue":
/*!*************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointCheck.vue?vue&type=template&id=7524488a& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=template&id=7524488a&");
/* harmony import */ var _pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointCheck.vue?vue&type=script&lang=js& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pointCheck.vue?vue&type=style&index=0&lang=css& */ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./pointCheck.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pointCheck.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=template&id=7524488a&":
/*!********************************************************************************************************!*\
  !*** F:/HBuilderProjects/SafetyControl/pages/pointCheck/pointCheck.vue?vue&type=template&id=7524488a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./pointCheck.vue?vue&type=template&id=7524488a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\HBuilderProjects\\SafetyControl\\pages\\pointCheck\\pointCheck.vue?vue&type=template&id=7524488a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_developmentProgram_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_pointCheck_vue_vue_type_template_id_7524488a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\HBuilderProjects\\SafetyControl\\main.js?{\"page\":\"pages%2FpointCheck%2FpointCheck\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pointCheck/pointCheck.js.map