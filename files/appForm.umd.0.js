((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[0],{

/***/ "d3ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6bacc4e8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/compositeHeaderField.vue?vue&type=template&id=366ceb9e&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"required":""},on:{"input":_vm.input},model:{value:(_vm.field.label),callback:function ($$v) {_vm.$set(_vm.field, "label", $$v)},expression:"field.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.field.name),callback:function ($$v) {_vm.$set(_vm.field, "name", $$v)},expression:"field.name"}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/compositeHeaderField.vue?vue&type=template&id=366ceb9e&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/compositeHeaderField.vue?vue&type=script&lang=js&

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

/* harmony default export */ var compositeHeaderFieldvue_type_script_lang_js_ = ({
  name: "compositeHeaderField",
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  components: {//
  },
  data: function data() {
    return {
      readonly: true
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    input: function input() {
      if (this.readonly && this.field.name.length <= 32) {
        this.field.name = Object(dist_es2015["a" /* snakeCase */])(this.field.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/compositeHeaderField.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_compositeHeaderFieldvue_type_script_lang_js_ = (compositeHeaderFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/EditsFields/compositeHeaderField.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EditsFields_compositeHeaderFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "366ceb9e",
  null
  
)

/* harmony default export */ var compositeHeaderField = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.0.js.map