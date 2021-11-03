((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[13],{

/***/ "27b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "666b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationEtapes_vue_vue_type_style_index_0_id_b82d4284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationEtapes_vue_vue_type_style_index_0_id_b82d4284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationEtapes_vue_vue_type_style_index_0_id_b82d4284_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b9f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/ValidationEtapes.vue?vue&type=template&id=b82d4284&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],attrs:{"block":"","variant":"info"}},[_vm._v(" Condition d'affichage ")])],1),_c('b-collapse',{attrs:{"id":"accordion-2","accordion":"my-accordion","role":"tabpanel","visible":""}},[_c('b-card-body',[_c('div',{staticClass:"mb-3"},[_c('b-button',{attrs:{"variant":"outline-primary","size":"sm"},on:{"click":_vm.addCondition}},[_vm._v(" + Ajouter une condition ")])],1),_vm._l((_vm.formDatas.states),function(condition,i){return _c('div',{key:i,staticClass:"border pt-3 pl-0 pr-0 mb-3 bg-light"},[_c('div',{staticClass:"d-flex w-100 align-items-center"},[_c('div',{staticClass:"svg-content px-2"},[_c('b-button',{staticClass:"m-0 p-0",attrs:{"variant":"transparent"}},[_c('b-icon',{attrs:{"icon":"arrows-move"}})],1)],1),_c('div',{staticClass:"content-action"},[_c('b-form-group',{attrs:{"label":"Action","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.optionsAction,"size":"sm"},model:{value:(condition.action),callback:function ($$v) {_vm.$set(condition, "action", $$v)},expression:"condition.action"}})],1),_c('b-form-group',{attrs:{"label":"si l'etape ","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listeDesEtapes,"size":"sm"},model:{value:(condition.state_name),callback:function ($$v) {_vm.$set(condition, "state_name", $$v)},expression:"condition.state_name"}})],1),_c('b-form-group',{attrs:{"label":"si le champs ","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listeDesChamps(condition),"size":"sm"},model:{value:(condition.name),callback:function ($$v) {_vm.$set(condition, "name", $$v)},expression:"condition.name"}})],1),_c('b-form-group',{attrs:{"label":"est","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listsOperators,"size":"sm"},model:{value:(condition.operator),callback:function ($$v) {_vm.$set(condition, "operator", $$v)},expression:"condition.operator"}})],1),(
                  condition.operator == 'egal' &&
                  (!condition.options || condition.options.length === 0)
                )?_c('b-form-group',{attrs:{"label":"valeur","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-input',{attrs:{"required":""},model:{value:(condition.value),callback:function ($$v) {_vm.$set(condition, "value", $$v)},expression:"condition.value"}})],1):_vm._e(),(
                  condition.operator == 'egal' &&
                  condition.options &&
                  condition.options.length > 0
                )?_c('b-form-group',{attrs:{"label":"valeur","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":condition.options,"size":"sm"},model:{value:(condition.value),callback:function ($$v) {_vm.$set(condition, "value", $$v)},expression:"condition.value"}})],1):_vm._e()],1),_c('div',{staticClass:"svg-content"},[_c('b-button',{staticClass:"m-0 p-0",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.deleteState(i)}}},[_c('b-icon',{staticClass:"px-2",attrs:{"icon":"trash","variant":"danger"}})],1)],1)])])})],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue?vue&type=template&id=b82d4284&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./src/App/config/validation.js
var validation = __webpack_require__("e412");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/ValidationEtapes.vue?vue&type=script&lang=js&




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


/* harmony default export */ var ValidationEtapesvue_type_script_lang_js_ = ({
  name: "ValidationFields",
  data: function data() {
    return {
      options: [{
        text: "Le champs est requis",
        value: "required"
      }, {
        text: "Le champ ne peut contenir que des caractères alphabétiques.",
        value: "alpha"
      }, {
        text: "Le champ doit être un email valide.",
        value: "email"
      }, {
        text: "Le champ doit être une valeur numerique",
        value: "numeric"
      }],
      selected: [],
      listsOperators: validation["b" /* validationRessource */].listsOperators(),
      optionsAction: validation["b" /* validationRessource */].Action("Cette etape"),
      form_validation_options: []
    };
  },
  watch: {
    selected: function selected() {
      this.formDatas.require = this.selected.join("|");
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), Object(vuex_esm["c" /* mapState */])(["form"])), {}, {
    listeDesEtapes: function listeDesEtapes() {
      var etapes = [];
      validation["b" /* validationRessource */].listesEtapes(this.form, this.formDatas, etapes);
      return etapes;
    }
  }),
  methods: {
    addCondition: function addCondition() {
      if (!this.formDatas.states) {
        //this.formDatas.states = []
        this.$set(this.formDatas, "states", []);
      }

      this.formDatas.states.push(validation["b" /* validationRessource */].conditions());
    },
    deleteState: function deleteState(i) {
      this.formDatas.states.splice(i, 1);
    },
    listeDesChamps: function listeDesChamps(condition) {
      var fields = [];

      if (condition.state_name && condition.state_name !== "") {
        var form = validation["b" /* validationRessource */].getFormStateByName(condition.state_name, this.form.forms);

        if (form !== undefined) {
          for (var i in form.fields) {
            var field = form.fields[i];

            if (condition.name == field.name && field.options.length) {
              //this.put_form_validation_options(field.options);
              condition.options = field.options;
            }

            fields.push({
              text: field.label,
              value: field.name
            });
          }
        }
      }

      return fields;
    },
    put_form_validation_options: function put_form_validation_options(options) {
      this.form_validation_options = options;
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_ValidationEtapesvue_type_script_lang_js_ = (ValidationEtapesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue?vue&type=style&index=0&id=b82d4284&lang=scss&scoped=true&
var ValidationEtapesvue_type_style_index_0_id_b82d4284_lang_scss_scoped_true_ = __webpack_require__("666b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_ValidationEtapesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b82d4284",
  null
  
)

/* harmony default export */ var ValidationEtapes = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "e248":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/StepConfiguration.vue?vue&type=template&id=4c5361d0&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"size":"lg","id":_vm.idModal,"title":"Configuration de l'etape","hide-footer":""},on:{"ok":_vm.handleOk},model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},[_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-form-group',{attrs:{"label":"Titre","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"required":""},on:{"input":_vm.input},model:{value:(_vm.formDatas.info.title),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "title", $$v)},expression:"formDatas.info.title"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly,"state":_vm.state_name},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.formDatas.info.name),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "name", $$v)},expression:"formDatas.info.name"}})],1)],1),_c('b-form-group',{attrs:{"label":"Titre texte d'aide","invalid-feedback":"the header title is required"}},[_c('b-form-input',{model:{value:(_vm.formDatas.info.headerTitle),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "headerTitle", $$v)},expression:"formDatas.info.headerTitle"}})],1),_c('b-form-group',{attrs:{"label":"Texte d'aide","invalid-feedback":"the header title is required"}},[_c('b-form-input',{model:{value:(_vm.formDatas.info.description),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "description", $$v)},expression:"formDatas.info.description"}})],1),_c('ValidationEtapes',{attrs:{"currentFormDatas":_vm.formDatas}}),_c('hr'),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{attrs:{"type":"submit","variant":"outline-info","size":"sm"}},[_c('b-icon',{attrs:{"icon":"plus"}}),_vm._v(" Mettre à jour ")],1)],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue?vue&type=template&id=4c5361d0&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// EXTERNAL MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue + 4 modules
var ValidationEtapes = __webpack_require__("b9f1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/StepConfiguration.vue?vue&type=script&lang=js&




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
//
//
//
//
//
//
//
//
//



/* harmony default export */ var StepConfigurationvue_type_script_lang_js_ = ({
  name: "StepConfiguration",
  props: {
    idModal: {
      type: String,
      default: "step-configuration"
    }
  },
  components: {
    ValidationEtapes: ValidationEtapes["a" /* default */]
  },
  data: function data() {
    return {
      isOpen: false,
      readonly: true,
      state_name: true
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["mode", "form"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    ListNameforms: function ListNameforms() {
      var lists = [];

      for (var i in this.form.forms) {
        lists.push(this.form.forms[i].info.name);
      }

      return lists;
    }
  }),
  methods: {
    openPopUp: function openPopUp() {
      this.isOpen = !this.isOpen;
    },
    handleOk: function handleOk(event) {
      // Prevent modal from closing
      event.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault(); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide(_this.idModal);
      });
    },
    resetModal: function resetModal() {//this.type = null;
    },
    input: function input() {
      if (this.readonly && this.formDatas.info.name.length <= 32) {
        var valName = Object(dist_es2015["a" /* snakeCase */])(this.formDatas.info.title);

        if (this.ListNameforms.includes(valName)) {
          this.state_name = false;
        } else {
          this.state_name = true;
        }

        this.formDatas.info.name = valName;
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_StepConfigurationvue_type_script_lang_js_ = (StepConfigurationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_StepConfigurationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4c5361d0",
  null
  
)

/* harmony default export */ var StepConfiguration = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.13.js.map