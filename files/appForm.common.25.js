((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[25],{

/***/ "b6d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5530");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7bb1");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4c93");


 // No message specified.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("email", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* email */ "b"]); // Override the default message.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("required", Object(_siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* required */ "d"]), {}, {
  message: "Ce champs est requis"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("alpha", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* alpha */ "a"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("alpha", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* numeric */ "c"]); //export default extend;

/***/ }),

/***/ "fd80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4acd20fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/Autocomplete.vue?vue&type=template&id=c468df42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:!_vm.validationField && _vm.mode ? 'mb-5' : ''},[(_vm.validationField)?_c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"choice-section min-height"},[_c('ValidationProvider',{staticClass:"col-12 p-0",attrs:{"rules":_vm.field.require,"name":_vm.field.name},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"autocomplete"},[_c('multiselect',{attrs:{"options":_vm.options,"custom-label":_vm.nameWithLang,"placeholder":"","label":"text","track-by":"text","show-no-results":false,"showLabels":false,"loading":_vm.isLoading},on:{"search-change":_vm.asyncFind},model:{value:(_vm.field.value),callback:function ($$v) {_vm.$set(_vm.field, "value", $$v)},expression:"field.value"}},[_c('template',{slot:"noResult"},[_c('span',{staticClass:"option__titl d-none"},[_vm._v(" Aucun contenu ")])]),_c('template',{slot:"placeholder"},[_c('span',{staticClass:"option__title"},[_vm._v(" Code postal ou nom de la vialle ")])]),_c('template',{slot:"noOptions"},[_c('span',{staticClass:"option__title"},[_vm._v("aea")])])],2),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)],1)]}}],null,false,3850428983)})],1)]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue?vue&type=template&id=c468df42&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./src/App/config/validation.js
var validation = __webpack_require__("e412");

// EXTERNAL MODULE: ./src/App/EditsFields/vee-validate-custom.js
var vee_validate_custom = __webpack_require__("b6d1");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// EXTERNAL MODULE: ../drupal-vuejs/index.js + 6 modules
var drupal_vuejs = __webpack_require__("e674");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/Autocomplete.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Autocompletevue_type_script_lang_js_ = ({
  props: {
    field: {
      type: Object,
      require: true
    }
  },
  components: {
    Multiselect: vue_multiselect_min_default.a,
    ValidationProvider: vee_validate_esm["b" /* ValidationProvider */]
  },
  data: function data() {
    return {
      isLoading: false,
      options: []
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), Object(vuex_esm["c" /* mapState */])(["formDatasValidate", "mode"])), {}, {
    validationField: function validationField() {
      if (this.field.states && this.field.states.length) {
        var status = validation["b" /* validationRessource */].computedValidation(this.formDatas, this.field, this.formDatasValidate);
        if (status !== undefined) return status;
      }

      return true;
    }
  }),
  methods: {
    nameWithLang: function nameWithLang(_ref) {
      var text = _ref.text;
      //return `${text} — [${value}]`;
      return "".concat(text);
    },
    asyncFind: function asyncFind(search) {
      var _this = this;

      console.log("search : ", search);

      if (search.length > 2) {
        var terms = new drupal_vuejs["b" /* termsTaxo */]("departements");
        console.log("find");
        this.isLoading = true;
        terms.getSearch(search).then(function () {
          _this.options = terms.getOptions();
          _this.isLoading = false;
          console.log("this.options : ", _this.options);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_Autocompletevue_type_script_lang_js_ = (Autocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&
var vue_multiselect_minvue_type_style_index_0_lang_css_ = __webpack_require__("60bc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_Autocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.common.25.js.map