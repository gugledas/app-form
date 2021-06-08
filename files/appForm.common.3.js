((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[3],{

/***/ "0931":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/ValidationFields.vue?vue&type=template&id=55567695&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],attrs:{"block":"","variant":"info"}},[_vm._v(" Configuration avancée ")])],1),_c('b-collapse',{attrs:{"id":"accordion-1","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-form-group',{attrs:{"label":"Selectionner les elments de validation"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var ariaDescribedby = ref.ariaDescribedby;
return [_c('b-form-checkbox-group',{attrs:{"options":_vm.options,"aria-describedby":ariaDescribedby},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})]}}])})],1)],1)],1),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],attrs:{"block":"","variant":"info"}},[_vm._v(" Condition d'affichage ")])],1),_c('b-collapse',{attrs:{"id":"accordion-2","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('div',{staticClass:"mb-3"},[_c('b-button',{attrs:{"variant":"outline-primary","size":"sm"},on:{"click":_vm.addCondition}},[_vm._v(" + Ajouter une condition ")])],1),_vm._l((_vm.field.states),function(condition,i){return _c('div',{key:i,staticClass:"border pt-3 pl-0 pr-0 mb-3 bg-light"},[_c('div',{staticClass:"d-flex w-100 align-items-center"},[_c('div',{staticClass:"svg-content px-2"},[_c('b-button',{staticClass:"m-0 p-0",attrs:{"variant":"transparent"}},[_c('b-icon',{attrs:{"icon":"arrows-move"}})],1)],1),_c('div',{staticClass:"content-action"},[_c('b-form-group',{attrs:{"label":"Action","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.optionsAction,"size":"sm"},model:{value:(condition.action),callback:function ($$v) {_vm.$set(condition, "action", $$v)},expression:"condition.action"}})],1),_c('b-form-group',{attrs:{"label":"si le champs","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listeChamps,"size":"sm"},model:{value:(condition.name),callback:function ($$v) {_vm.$set(condition, "name", $$v)},expression:"condition.name"}})],1),_c('b-form-group',{attrs:{"label":"est","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listsOperators,"size":"sm"},model:{value:(condition.operator),callback:function ($$v) {_vm.$set(condition, "operator", $$v)},expression:"condition.operator"}})],1),(condition.operator === 'egal')?_c('b-form-group',{attrs:{"label":"Valeur","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listsOptionsCondition(condition),"size":"sm"},model:{value:(condition.value),callback:function ($$v) {_vm.$set(condition, "value", $$v)},expression:"condition.value"}})],1):_vm._e()],1),_c('div',{staticClass:"svg-content"},[_c('b-button',{staticClass:"m-0 p-0",attrs:{"variant":"transparent"},on:{"click":function($event){return _vm.deleteState(i)}}},[_c('b-icon',{staticClass:"px-2",attrs:{"icon":"trash","variant":"danger"}})],1)],1)])])})],2)],1)],1),_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":true}}],attrs:{"block":"","variant":"info"}},[_vm._v(" Mecanisme de calcul du prix ")])],1),_c('b-collapse',{attrs:{"id":"accordion-3","accordion":"my-accordion","role":"tabpanel","visible":""}},[_c('b-card-body',[_c('PriceFields',{attrs:{"field":_vm.field}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/ValidationFields.vue?vue&type=template&id=55567695&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/App/config/validation.js
var validation = __webpack_require__("e412");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/Price/PriceFields.vue?vue&type=template&id=1a39cad4&scoped=true&lang=html&
var PriceFieldsvue_type_template_id_1a39cad4_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.field.prix)?_c('div',[_c('b-form-group',{attrs:{"label":"Action","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.optionsAction,"size":"sm"},model:{value:(_vm.field.prix.action),callback:function ($$v) {_vm.$set(_vm.field.prix, "action", $$v)},expression:"field.prix.action"}})],1),_c('b-form-group',{staticClass:"mb-3",attrs:{"label":"Coût","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-input',{attrs:{"required":"","type":"number"},model:{value:(_vm.field.prix.cout),callback:function ($$v) {_vm.$set(_vm.field.prix, "cout", $$v)},expression:"field.prix.cout"}})],1),(_vm.field.prix.action === 'prix_utilisables')?_c('div',[_c('div',{staticClass:"mb-3"},[_c('b-button',{attrs:{"variant":"outline-primary","size":"sm"},on:{"click":_vm.addCondition}},[_vm._v(" + Ajouter une condition ")])],1),_vm._l((_vm.field.prix.components),function(component,i){return _c('div',{key:i,staticClass:"border p-2"},[_c('b-form-group',{attrs:{"label":"si l'etape ","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listeDesEtapes,"size":"sm"},model:{value:(component.state_name),callback:function ($$v) {_vm.$set(component, "state_name", $$v)},expression:"component.state_name"}})],1),(component.state_name !== '')?_c('b-form-group',{attrs:{"label":"si champs ","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":_vm.listeDesChamps(component),"size":"sm"},model:{value:(component.name),callback:function ($$v) {_vm.$set(component, "name", $$v)},expression:"component.name"}})],1):_vm._e(),(component.name !== '')?_c('b-form-group',{attrs:{"label":"si options ","label-for":"input-lazy","label-size":"sm","label-cols":"4"}},[_c('b-form-select',{attrs:{"options":component.options,"size":"sm"},model:{value:(component.value),callback:function ($$v) {_vm.$set(component, "value", $$v)},expression:"component.value"}})],1):_vm._e()],1)})],2):_vm._e()],1):_vm._e()])}
var PriceFieldsvue_type_template_id_1a39cad4_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/Price/PriceFields.vue?vue&type=template&id=1a39cad4&scoped=true&lang=html&

// CONCATENATED MODULE: ./src/App/config/price.js
/* harmony default export */ var price = ({
  price: function price() {
    return {
      action: "",
      //prix_utilisables| prix_referentiels
      cout: 0,
      // valeur decimal;
      // Contient les champs permettant de faire la multiplication des couts
      // self, represente le champs lui meme.
      // le type de champs, doit etre de type 'prix_referentiels'
      components: []
    };
  },
  optionsAction: function optionsAction() {
    return [{
      text: "prix_utilisables",
      value: "prix_utilisables"
    }, {
      text: "prix_referentiels",
      value: "prix_referentiels"
    }];
  }
});
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/Price/PriceFields.vue?vue&type=script&lang=js&

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



/* harmony default export */ var PriceFieldsvue_type_script_lang_js_ = ({
  name: "PriceFields",
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
      optionsAction: price.optionsAction()
    };
  },
  mounted: function mounted() {
    this.addAttributPrix();
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas", "form"])), {}, {
    listeDesEtapes: function listeDesEtapes() {
      var etapes = [];
      validation["b" /* validationRessource */].listesEtapes(this.form, this.formDatas, etapes);
      return etapes;
    }
  }),
  methods: {
    /**
     * On ajoute l'attribut prix si cela n'est pas definit.
     */
    addAttributPrix: function addAttributPrix() {
      if (this.field && !this.field.prix) {
        this.$set(this.field, "prix", price.price());
      }
    },

    /**
     * On ajoute une condition de choix;
     */
    addCondition: function addCondition() {
      this.field.prix.components.push({
        state_name: "",
        name: "",
        value: ""
      });
    },

    /**
     * Liste des champs;
     */
    listeDesChamps: function listeDesChamps(component) {
      var fields = [];
      var ValidationInst = new validation["a" /* ValidationInstance */]();
      ValidationInst.listeDesChamps(component, this.form, fields);
      component.options = ValidationInst.StepeValidationOptions;
      return fields;
    }
  }
});
// CONCATENATED MODULE: ./src/App/Price/PriceFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var Price_PriceFieldsvue_type_script_lang_js_ = (PriceFieldsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/Price/PriceFields.vue





/* normalize component */

var PriceFields_component = Object(componentNormalizer["a" /* default */])(
  Price_PriceFieldsvue_type_script_lang_js_,
  PriceFieldsvue_type_template_id_1a39cad4_scoped_true_lang_html_render,
  PriceFieldsvue_type_template_id_1a39cad4_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "1a39cad4",
  null
  
)

/* harmony default export */ var PriceFields = (PriceFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/ValidationFields.vue?vue&type=script&lang=js&







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
//
//
//



/* harmony default export */ var ValidationFieldsvue_type_script_lang_js_ = ({
  name: "ValidationFields",
  props: {
    field: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.require !== undefined && val.states !== undefined ? true : false;
      }
    }
  },
  components: {
    PriceFields: PriceFields
  },
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
      optionsAction: validation["b" /* validationRessource */].Action()
    };
  },
  mounted: function mounted() {
    this.retriveRules();
  },
  watch: {
    selected: function selected() {
      this.field.require = this.selected.join("|");
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    listeChamps: function listeChamps() {
      var typeValide = ["text", "number", "radio", "checkbox", "select"];
      var fields = [];

      if (this.formDatas && this.formDatas.fields.length > 1) {
        for (var i in this.formDatas.fields) {
          var field = this.formDatas.fields[i];

          if (field.name !== this.field.name && typeValide.includes(field.type)) {
            fields.push({
              text: field.label,
              value: field.name
            });
          }
        }
      }

      return fields;
    }
  }),
  methods: {
    retriveRules: function retriveRules() {
      if (this.field.require) this.selected = this.field.require.split("|");
    },
    addCondition: function addCondition() {
      this.field.states.push(validation["b" /* validationRessource */].conditions());
    },
    deleteState: function deleteState(i) {
      console.log("i : ", i);
      this.field.states.splice(i, 1);
    },
    listsOptionsCondition: function listsOptionsCondition(condition) {
      if (this.formDatas && this.formDatas.fields.length > 1) {
        for (var i in this.formDatas.fields) {
          var field = this.formDatas.fields[i];

          if (field.name === condition.name) {
            return field.options;
          }
        }
      } else {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/ValidationFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_ValidationFieldsvue_type_script_lang_js_ = (ValidationFieldsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/EditsFields/ValidationFields.vue?vue&type=style&index=0&id=55567695&lang=scss&scoped=true&
var ValidationFieldsvue_type_style_index_0_id_55567695_lang_scss_scoped_true_ = __webpack_require__("c602");

// CONCATENATED MODULE: ./src/App/EditsFields/ValidationFields.vue






/* normalize component */

var ValidationFields_component = Object(componentNormalizer["a" /* default */])(
  EditsFields_ValidationFieldsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "55567695",
  null
  
)

/* harmony default export */ var ValidationFields = __webpack_exports__["a"] = (ValidationFields_component.exports);

/***/ }),

/***/ "2c10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);





var Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  saveSteps: function saveSteps(datas) {
    return new Promise(function (resolv) {
      //console.log("fdate : ", datas);
      var forms = "";

      if (datas.forms) {
        forms = JSON.stringify(datas.forms);
      }

      var result = [];

      if (datas != "") {
        //edition de la table contents
        var table1 = {
          table: "appformmanager_fomrs",
          fields: {
            forms: forms,
            description: datas.description,
            name: datas.name
          },
          action: "update"
        };

        if (datas.id) {
          table1.where = [{
            column: "id",
            value: datas.id
          }];
        }

        result.push(table1);
      }

      resolv(result);
    });
  },
  field: function field() {
    return {
      type: "",
      title: "",
      label: "",
      name: "",
      value: null,
      imgUrl: "",
      require: "",
      options: [],
      states: []
    };
  },
  resetField: function resetField(field) {
    var defaultField = this.field();

    for (var i in field) {
      field[i] = defaultField[i];
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Utilities);

/***/ }),

/***/ "3734":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54f5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLine_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3db8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b1ee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepsPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "54f5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6416":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/long-arrow-alt-left-solid.d9d4427b.svg";

/***/ }),

/***/ "910d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/manage-images.vue?vue&type=template&id=310d4989&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" "+_vm._s(_vm.img_url)+" "),(_vm.img_url_format)?_c('div',{staticStyle:{"width":"100px"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"img_url_format"}})]):_vm._e(),(!_vm.img_url_format)?_c('UploadImages',{staticClass:"mb-3",attrs:{"max":_vm.max,"uploadMsg":"Selectionner l'image"},on:{"change":_vm.handleImages}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/manage-images.vue?vue&type=template&id=310d4989&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ../wbuutilities/index.js + 12 modules
var wbuutilities = __webpack_require__("a76e");

// EXTERNAL MODULE: ./node_modules/vue-upload-drop-images/dist/vue-upload-drop-images.vue + 10 modules
var vue_upload_drop_images = __webpack_require__("3cfa");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/manage-images.vue?vue&type=script&lang=js&

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



/* harmony default export */ var manage_imagesvue_type_script_lang_js_ = ({
  name: "manage-images",
  props: {
    max: {
      type: Number,
      default: 10
    },
    url: {
      type: String,
      default: "/filesmanager/post"
    },
    img_url: {
      type: String
    }
  },
  components: {
    UploadImages: vue_upload_drop_images["a" /* default */]
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {
    console.log("img_url : ", this.img_url);
  },
  watch: {//
  },
  computed: {
    img_url_format: function img_url_format() {
      if (this.img_url && this.img_url !== undefined) return config["a" /* default */].baseURl + this.img_url;
      return null;
    }
  },
  methods: {
    handleImages: function handleImages(files) {
      var _this = this;

      for (var i in files) {
        wbuutilities["a" /* AjaxBasic */].postFile(config["a" /* default */].baseURl + this.url, files[i]).then(function (resolv) {
          _this.$emit("ev_manage_images_img", resolv);
        }).catch(function (error) {
          console.log("Error : ", error);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/manage-images.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_manage_imagesvue_type_script_lang_js_ = (manage_imagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/EditsFields/manage-images.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EditsFields_manage_imagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "310d4989",
  null
  
)

/* harmony default export */ var manage_images = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "a76e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ basic; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ BootStrap; });

// UNUSED EXPORTS: ButtonSave, ButtonDelete

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-success","size":"sm"},on:{"click":_vm.onSubmit}},[_c('span',[_vm._v(_vm._s(_vm.texte))]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
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
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonSavevue_type_script_lang_js_ = ({
  name: "ButtonSave",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Enregistrer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonSavevue_type_script_lang_js_ = (ButtonSavevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonSave.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonSavevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "29246a2e",
  null
  
)

/* harmony default export */ var ButtonSave = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-button',{attrs:{"variant":"outline-danger","size":"sm"},on:{"click":_vm.DeleteFile}},[_c('span',[_vm._v(" "+_vm._s(_vm.texte)+" ")]),(_vm.running)?_c('b-icon',{staticClass:"ml-2",attrs:{"icon":"arrow-clockwise","animation":"spin-pulse"}}):_vm._e()],1)],1)}
var ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
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
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var ButtonDeletevue_type_script_lang_js_ = ({
  name: "ButtonDelete",
  props: {
    running: {
      type: Boolean,
      required: true
    },
    texte: {
      type: String,
      default: "Supprimer"
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
    DeleteFile: function DeleteFile() {
      this.$emit("ev-click");
    }
  }
});
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=script&lang=js&
 /* harmony default export */ var Buttons_ButtonDeletevue_type_script_lang_js_ = (ButtonDeletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ../wbuutilities/src/Buttons/ButtonDelete.vue





/* normalize component */

var ButtonDelete_component = Object(componentNormalizer["a" /* default */])(
  Buttons_ButtonDeletevue_type_script_lang_js_,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_render,
  ButtonDeletevue_type_template_id_0b82f270_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "0b82f270",
  null
  
)

/* harmony default export */ var ButtonDelete = (ButtonDelete_component.exports);
// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("c26d");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("a9ce");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("9a6c");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("7973");

// EXTERNAL MODULE: ../wbuutilities/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("47d8");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ../wbuutilities/src/Ajax/basic.js






/**
 * Permet d'effectuer les requetes
 * pour modifier ou definir les paramettres par defaut de l'instance, {AjaxBasic}.axiosInstance.defaults.timeout = 30000;
 */

var InstAxios = axios_default.a.create({
  timeout: 5000
});
var basicRequest = {
  axiosInstance: InstAxios,
  post: function post(url, datas, configs) {
    return new Promise(function (resolv, reject) {
      InstAxios.post(url, datas, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack
        });
      });
    });
  },
  get: function get(url, configs) {
    return new Promise(function (resolv, reject) {
      InstAxios.get(url, configs).then(function (reponse) {
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        reject({
          status: false,
          error: error.response,
          code: error.code,
          stack: error.stack
        });
      });
    });
  },

  /**
   * @param file " fichier à uploaded"
   */
  postFile: function postFile(url, file) {
    var _this = this;

    var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return new Promise(function (resolv, reject) {
      _this.getBase64(file).then(function (fileEncode) {
        var headers = new Headers();
        console.log("headers : ", headers);
        var fileCompose = file.name.split(".");
        var myInit = {
          method: "POST",
          headers: headers,
          //mode: "cors",
          body: JSON.stringify({
            upload: fileEncode.base64,
            filename: fileCompose[0],
            ext: fileCompose[1],
            id: id
          }),
          cache: "default"
        };
        fetch(url, myInit).then(function (response) {
          response.json().then(function (json) {
            resolv(json);
          }).catch(function (error) {
            reject(error);
          });
        });
      });
    });
  },
  getBase64: function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file); //reader.onload = () => resolve(reader.result);

      reader.onloadend = function () {
        var fileArray = reader.result.split(",");
        resolve({
          src: reader.result,
          base64: fileArray[1]
        });
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }
};
/* harmony default export */ var basic = (basicRequest);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ../wbuutilities/node_modules/bootstrap-vue/esm/components/toast/helpers/bv-toast.js + 45 modules
var bv_toast = __webpack_require__("0ae9");

// CONCATENATED MODULE: ../wbuutilities/src/Toasts/BootStrap.js






external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(bv_toast["a" /* BVToastPlugin */]);
var vm = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a(); //console.log("Module Vue :  ", vm, "\n $bvToast : ", vm.$bvToast);

var AjaxToastBootStrap = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, basic), {}, {
  //$bvModal: vm.$bvModal,
  $bvToast: vm.$bvToast,
  notification: function notification(ajaxTitle) {
    var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    this.$bvToast.toast(" ", {
      title: ajaxTitle,
      variant: variant,
      solid: true,
      toaster: "b-toaster-top-right"
    });
  },
  post: function post(url, datas, configs) {
    var _this = this;

    var showNotification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return new Promise(function (resolv, reject) {
      basic.post(url, datas, configs).then(function (reponse) {
        if (showNotification) {
          _this.notification("success");
        }

        resolv(reponse);
      }).catch(function (error) {
        //console.log("error : ", error);
        _this.notification(_this.GetErrorTitle(error), "warning");

        reject(error);
      });
    });
  },
  get: function get(url, configs) {
    var _this2 = this;

    var showNotification = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return new Promise(function (resolv, reject) {
      basic.post(url, configs).then(function (reponse) {
        if (showNotification) {
          _this2.notification("success");
        }

        resolv(reponse);
      }).catch(function (error) {
        //console.log("error : ", error);
        _this2.notification(_this2.GetErrorTitle(error), "warning");

        reject(error);
      });
    });
  },
  GetErrorTitle: function GetErrorTitle(error) {
    var title; //

    if (error.code) {
      switch (error.code) {
        case "ECONNABORTED":
          var temps = this.axiosInstance.defaults.timeout / 1000 + "s";
          title = "Impossible de joindre l'hote distant, temps impartie epuisé. (" + temps + ")";
          break;

        default:
          title = "Une erreur s'est produite";
      }
    } //
    else if (error.error && error.error.statusText) {
        title = decodeURI(error.error.statusText);
      }

    return title;
  }
});
/**
 * Intercept la reponse ajax pour declenche le toast adapter.
 */

/*
 pas adapter pour gerer les messages d'erreurs.
(function() {
  AjaxToastBootStrap.axiosInstance.interceptors.response.use(
    function(response) {
      console.log("interceptor success");
      AjaxToastBootStrap.notification("success");
      return response;
    },
    function(error) {
      console.log("interceptor error");
      AjaxToastBootStrap.notification("Error", "warning");
      return error;
    }
  );
})();
/**/


/* harmony default export */ var BootStrap = (AjaxToastBootStrap);
// CONCATENATED MODULE: ../wbuutilities/index.js
//import Vue from "vue";


/*
const HelloWorldSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("button-save", ButtonSave);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
/**/





/***/ }),

/***/ "b1ee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c602":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationFields_vue_vue_type_style_index_0_id_55567695_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea56");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationFields_vue_vue_type_style_index_0_id_55567695_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ValidationFields_vue_vue_type_style_index_0_id_55567695_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ca0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/StepsPage.vue?vue&type=template&id=0a50d1a7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-container',{staticClass:"bv-example-row bg-light p-5",attrs:{"fluid":"lg"}},[_c('div',[_c('h5',{staticClass:"titre mb-3 shadow-sm p-2"},[_vm._v(" Gestion du formulaire: "),_c('span',{staticClass:"form-title"},[_vm._v(_vm._s(_vm.form.name))])])]),_c('b-row',{attrs:{"align-h":"center"}},[_c('transition',{attrs:{"name":"fade"}},[(_vm.formDatas && _vm.formDatas.info)?_c('b-col',{attrs:{"cols":"12","lg":"9"}},[_c('nav-line'),_c('pages',{attrs:{"level":_vm.stepsIndex}})],1):_vm._e()],1),(_vm.$store.state.mode)?_c('b-col',{attrs:{"cols":"12","lg":"3"}},[_c('div',{staticClass:"block-button"},[_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":true}}],staticClass:"shadow-sm",attrs:{"variant":"light","squared":""}},[_vm._v(" Configuration ")]),_c('b-button',{attrs:{"squared":"","variant":"info","size":"sm"},on:{"click":_vm.clearFormDatas}},[_c('b-icon',{staticClass:"mr-2",staticStyle:{"font-size":"2.5rem"},attrs:{"icon":"plus"}}),_vm._v(" Add new Steps ")],1),_c('b-button',{attrs:{"squared":"","size":"sm","variant":"dark"},on:{"click":_vm.resetValue}},[_vm._v(" Reset value ")]),_c('b-button',{attrs:{"squared":"","variant":"success","size":"sm"},on:{"click":_vm.saveToLocal}},[_vm._v(" Save ")]),_c('b-modal',{ref:"modal",attrs:{"id":"modal-prevent-closing","title":"Edition du formulaire","hide-footer":""},on:{"show":_vm.resetModal,"hidden":_vm.resetModal,"ok":_vm.handleOk}},[(_vm.formDatas && _vm.formDatas.info)?_c('form',{ref:"form",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal}},[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"name","label-for":"name-input"}},[_c('b-form-input',{attrs:{"id":"db-input","required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"Id","label-for":"description-input"}},[_c('b-form-input',{attrs:{"id":"desc-input-id"},model:{value:(_vm.form.id),callback:function ($$v) {_vm.$set(_vm.form, "id", $$v)},expression:"form.id"}})],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"Description","label-for":"description-input"}},[_c('b-form-textarea',{attrs:{"id":"desc-input","required":""},model:{value:(_vm.form.description),callback:function ($$v) {_vm.$set(_vm.form, "description", $$v)},expression:"form.description"}})],1)],1)],1),_c('hr',{staticClass:"my-3"}),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2"},[_vm._v("export")]),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v("Mise à jour")])],1)])],1):_vm._e()])],1)]):_vm._e()],1)],1),(this.$store.state.mode)?_c('b-row',{staticClass:"m-0"},[_c('b-col',{attrs:{"cols":"4"}},[_c('b-card',{staticClass:"mt-3 text-left d-none-0",attrs:{"header":"Price"}},[_c('pre',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.price))])])],1),_c('b-col',{attrs:{"cols":"4"}},[_c('b-card',{staticClass:"mt-3 text-left",attrs:{"header":"formDatas:"}},[_c('pre',{staticClass:"text-left"},[_vm._v(_vm._s(_vm.formDatas))])])],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/StepsPage.vue?vue&type=template&id=0a50d1a7&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/NavLine.vue?vue&type=template&id=005ba49a&
var NavLinevue_type_template_id_005ba49a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-line"},_vm._l((_vm.idLevel),function(item,i){return _c('div',{key:i,staticClass:"w-100"},[_c('b-button',{staticClass:"nav-line__nav",class:i == _vm.stepsIndex ? 'nav-line__nav--dark' : '',attrs:{"title":'Etape ' + i,"variant":"info","id":'tooltip-1' + i},on:{"click":function($event){return _vm.loadSteps(i)}}}),_c('b-tooltip',{attrs:{"target":'tooltip-1' + i,"triggers":"hover","variant":"info"}},[_c('b',[_vm._v("etape "+_vm._s(i))]),_vm._v(" "),_c('br'),_c('div',[_vm._v(_vm._s(_vm.form.forms[i].info.title))])])],1)}),0)}
var NavLinevue_type_template_id_005ba49a_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/NavLine.vue?vue&type=template&id=005ba49a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/NavLine.vue?vue&type=script&lang=js&


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

/* harmony default export */ var NavLinevue_type_script_lang_js_ = ({
  props: {},
  components: {},
  data: function data() {
    return {
      value: 1
    };
  },
  watch: {},
  mounted: function mounted() {
    var step = localStorage.getItem("step");
    console.log("object,", step);

    if (step !== null && step.length) {
      this.$store.state.stepsIndex = Number(step);
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["stepsIndex"])), Object(vuex_esm["b" /* mapGetters */])(["form"])), {}, {
    idLevel: function idLevel() {
      var id = [];

      if (this.form.forms.length) {
        for (var i in this.form.forms) {
          id.push(i);
        }
      }

      return id;
    }
  }),
  methods: {
    loadSteps: function loadSteps(i) {
      this.$store.state.stepsIndex = i;
      console.log("object,", i);
      localStorage.setItem("step", i);
    }
  }
});
// CONCATENATED MODULE: ./src/App/NavLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_NavLinevue_type_script_lang_js_ = (NavLinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/NavLine.vue?vue&type=style&index=0&lang=scss&
var NavLinevue_type_style_index_0_lang_scss_ = __webpack_require__("3734");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/NavLine.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_NavLinevue_type_script_lang_js_,
  NavLinevue_type_template_id_005ba49a_render,
  NavLinevue_type_template_id_005ba49a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavLine = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/pages.vue?vue&type=template&id=36cb75b2&
var pagesvue_type_template_id_36cb75b2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"element-center full-block shadow"},[_c('div',{staticClass:"choice-section text-right"},[_c('b-row',{attrs:{"align-h":"end"}},[_c('b-col',[_c('p',{staticClass:"button-travaux"},[_vm._v(_vm._s(_vm.formDatas.info.headerTitle))])])],1),(_vm.mode)?_c('b-button-group',{staticClass:"boutton-absolute"},[_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{"hover":true,"v-info":true}}],attrs:{"variant":"outline-info","size":"sm","title":"Ajouter un champs"},on:{"click":_vm.addFormField}},[_c('b-icon',{staticStyle:{"font-size":"1.5rem"},attrs:{"icon":"plus"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{"hover":true,"v-success":true}}],attrs:{"variant":"outline-success","size":"sm","title":"Editer le formulaire"},on:{"click":_vm.configSteps}},[_c('b-icon',{attrs:{"icon":"pencil"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{"hover":true,"v-danger":true}}],attrs:{"variant":"outline-danger","size":"sm","title":"Suprimer le formulaire"},on:{"click":_vm.deleteSteps}},[_c('b-icon',{attrs:{"icon":"trash"}})],1)],1):_vm._e()],1),_c('ValidationObserver',{staticClass:"center-container",scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-row',{staticClass:"block-container",attrs:{"align-h":"center"}},[(_vm.level > 0)?_c('b-col',{staticClass:"text-left",attrs:{"cols":"12"}},[_c('div',{staticClass:"backButton",on:{"click":_vm.back}},[_c('img',{attrs:{"src":__webpack_require__("6416"),"alt":""}})])]):_vm._e(),_vm._l((_vm.formDatas.fields),function(field,i){return _c('div',{key:i,staticClass:"col-12 p-0 mb-5"},[_c('display-fields',{attrs:{"type":field.type,"id":i}})],1)}),_c('b-col',{staticClass:"form-nav-bouton",attrs:{"cols":"12"}},[_c('button',{staticClass:"next-bouton",class:_vm.stepsState && !v.invalid
              ? 'next-bouton--active'
              : 'next-bouton--disable',on:{"click":_vm.suivant}},[_vm._v(" Suivant ")])])],2),_c('getStatusValidation',{attrs:{"validation-observer":v}})]}}])}),(_vm.mode)?_c('div',[_c('add-form-field',{ref:"formField",attrs:{"isOpen":_vm.modalFormFieldIsOpen,"nouveau":true}}),_c('StepConfiguration',{ref:"StepConfiguration"})],1):_vm._e(),_c('pre',[_vm._v("    stepsIndexs :\n    "+_vm._s(_vm.stepsIndexs)+"\n  ")])],1)}
var pagesvue_type_template_id_36cb75b2_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/pages.vue?vue&type=template&id=36cb75b2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/displayFields.vue?vue&type=template&id=7abb70af&
var displayFieldsvue_type_template_id_7abb70af_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"choice-section min-height"},[_c('div',[_c('form',{ref:"form",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleSubmit($event)}}},[(_vm.type == 'codepostal')?_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{staticClass:"autocomplete"},[_c('autocomplete',{attrs:{"value":_vm.formDatas.fields[_vm.id]}})],1)],1):_vm._e(),(_vm.type == 'checkboximg')?_c('ImageCheck',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'text' || _vm.type == 'number')?_c('label-row',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'numberup')?_c('label-up',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'increment')?_c('b-row',{attrs:{"align-h":"center"}},[_c('increment-number',{attrs:{"id":_vm.id}})],1):_vm._e(),(_vm.type == 'markuptitle')?_c('markup-title',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'markupimage')?_c('markup-image',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'radio')?_c('radio',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'input')?_c('InputText',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'select')?_c('select-display',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'checkbox')?_c('checkbox',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'radiodesc')?_c('radio-desc',{attrs:{"id":_vm.id}}):_vm._e(),(_vm.type == 'file')?_c('files',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e()],1),(this.$store.state.mode)?_c('div',{staticClass:"boutton-absolute d-flex"},[_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{"hover":true,"v-success":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-success","title":"Editer ce champs"},on:{"click":_vm.editFormField}},[_c('b-icon',{attrs:{"icon":"pencil","font-scale":"1"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{"hover":true,"v-danger":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-danger","title":"Supprimer ce champs"},on:{"click":_vm.deleteField}},[_c('b-icon',{attrs:{"icon":"trash","font-scale":"1"}})],1)],1):_vm._e()]),_c('add-form-field',{ref:"editFormField",attrs:{"isOpen":_vm.isOpen,"fields":_vm.fields,"nouveau":false}})],1)}
var displayFieldsvue_type_template_id_7abb70af_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/displayFields.vue?vue&type=template&id=7abb70af&

// EXTERNAL MODULE: ./src/App/AddFormField.vue + 44 modules
var AddFormField = __webpack_require__("cfb1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/displayFields.vue?vue&type=script&lang=js&








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
//
//
//
//
//



/* harmony default export */ var displayFieldsvue_type_script_lang_js_ = ({
  components: {
    ImageCheck: function ImageCheck() {
      return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "820b"));
    },
    IncrementNumber: function IncrementNumber() {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "09b3"));
    },
    AddFormField: AddFormField["default"],
    InputText: function InputText() {
      return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "cbcf"));
    },
    autocomplete: function autocomplete() {
      return Promise.all(/* import() */[__webpack_require__.e(8), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "c5fb"));
    },
    Radio: function Radio() {
      return __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "8bfb"));
    },
    RadioDesc: function RadioDesc() {
      return __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "795e"));
    },
    Checkbox: function Checkbox() {
      return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "7f81"));
    },
    LabelRow: function LabelRow() {
      return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "ab64"));
    },
    SelectDisplay: function SelectDisplay() {
      return __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "1d25"));
    },
    MarkupTitle: function MarkupTitle() {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "725b"));
    },
    MarkupImage: function MarkupImage() {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "1c8e"));
    },
    files: function files() {
      return Promise.all(/* import() */[__webpack_require__.e(15), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "65db"));
    },
    LabelUp: function LabelUp() {
      return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "cc4c"));
    }
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      isOpen: false,
      typeFieldSelected: null,
      option: {},
      fields: Utilities["a" /* default */].field(),
      //datas to check form validity
      labelState: null
    };
  },
  watch: {},
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])),
  methods: {
    getImage: function getImage(il) {
      var le = this.formDatas.fields[this.id].options;
      console.log("le", le);

      for (var i = 0; i < le.length; i++) {
        if (i == il) {
          le[i].isActive = !le[i].isActive;
          this.formDatas.fields[this.id].value = le[i].value;
        } else {
          le[i].isActive = false;
        }
      }
    },
    editFormField: function editFormField() {
      this.$refs.editFormField.openAddFormFieldPopUp();
      this.fields = this.formDatas.fields[this.id];
    },
    deleteField: function deleteField() {
      var all = this.formDatas.fields;

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === this.id) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      } //this.fields = this.formDatas.fields[this.id];

    },
    resetModal: function resetModal() {//this.type = null;
    },
    handleOk: function handleOk(event) {
      event.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault();
      this.isOpen = !this.isOpen; // Push the name to submitted names

      this.$emit("input_to_add", this.fields); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/displayFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_displayFieldsvue_type_script_lang_js_ = (displayFieldsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/displayFields.vue





/* normalize component */

var displayFields_component = Object(componentNormalizer["a" /* default */])(
  App_displayFieldsvue_type_script_lang_js_,
  displayFieldsvue_type_template_id_7abb70af_render,
  displayFieldsvue_type_template_id_7abb70af_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var displayFields = (displayFields_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/getStatusValidation.vue?vue&type=template&id=d99bc1b4&scoped=true&lang=html&
var getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"object":_vm.validationObserverField}},[_c('pre',{staticClass:"text-left d-none"},[_vm._v(_vm._s(_vm.formDatasValidate))])])}
var getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue?vue&type=template&id=d99bc1b4&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/getStatusValidation.vue?vue&type=script&lang=js&

//
//
//
//
//
//

/* harmony default export */ var getStatusValidationvue_type_script_lang_js_ = ({
  name: "getStatusValidation",
  props: {
    validationObserver: {
      type: Object,
      required: true
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["formDatasValidate"])), {}, {
    validationObserverField: function validationObserverField() {
      if (this.validationObserver.fields) {
        this.setFormDatasValidate();
        return this.validationObserver.fields;
      } else {
        return {};
      }
    }
  }),
  methods: {
    setFormDatasValidate: function setFormDatasValidate() {
      this.$store.dispatch("setFormDatasValidate", this.validationObserver.fields);
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_getStatusValidationvue_type_script_lang_js_ = (getStatusValidationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue





/* normalize component */

var getStatusValidation_component = Object(componentNormalizer["a" /* default */])(
  EditsFields_getStatusValidationvue_type_script_lang_js_,
  getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_render,
  getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "d99bc1b4",
  null
  
)

/* harmony default export */ var getStatusValidation = (getStatusValidation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/pages.vue?vue&type=script&lang=js&








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




/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  components: {
    DisplayFields: displayFields,
    ValidationObserver: vee_validate_esm["a" /* ValidationObserver */],
    getStatusValidation: getStatusValidation,
    AddFormField: function AddFormField() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "cfb1"));
    },
    StepConfiguration: function StepConfiguration() {
      return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "e248"));
    }
  },
  props: {
    level: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      modalFormFieldIsOpen: false,
      //nombres de champs à afficher
      inputDatas: [],
      selected: "",
      options: [{
        text: "chamblie",
        value: "a"
      }, {
        text: "callakala",
        value: "b"
      }],
      imageCheck: [{
        isActive: false,
        description: "1 côté"
      }, {
        isActive: false,
        description: "2 côté"
      }, {
        isActive: false,
        description: "3 côté"
      }, {
        isActive: false,
        description: "4 côté"
      }]
    };
  },
  mounted: function mounted() {//
  },
  watch: {
    fields: function fields() {
      console.log("changement");
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["mode", "stepsIndex", "stepsIndexs"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas", "form"])), {}, {
    stepsState: function stepsState() {
      var state = null;

      if (this.$store.getters.form.forms.length - 1 > this.level) {
        state = true;
      }

      console.log(" StepsState : ");
      return state;
    },
    taille: function taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    }
  }),
  methods: {
    suivant: function suivant() {
      if (this.stepsState) {
        this.$store.dispatch("stepsIndex", this.stepsIndex);
      }
    },
    back: function back() {
      this.$store.dispatch("stepsBack"); //this.$store.state.stepsIndex--;
    },
    deleteSteps: function deleteSteps() {
      var all = this.$store.getters.form.forms;
      var r = all.indexOf(this.formDatas);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
          this.$store.state.stepsIndex = this.form.forms.length - 1;
        }
      } //this.$store.dispatch("deleteStepsInAllSteps");

    },
    addFormField: function addFormField() {
      this.$refs.formField.openAddFormFieldPopUp();
    },
    configSteps: function configSteps() {
      this.$refs.StepConfiguration.openPopUp();
    },
    getImage: function getImage(il) {
      for (var i = 0; i < this.imageCheck.length; i++) {
        if (i == il) {
          this.imageCheck[i].isActive = !this.imageCheck[i].isActive;
        } else {
          this.imageCheck[i].isActive = false;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/pages.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/pages.vue?vue&type=style&index=0&lang=scss&
var pagesvue_type_style_index_0_lang_scss_ = __webpack_require__("dee4");

// CONCATENATED MODULE: ./src/App/pages.vue






/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  App_pagesvue_type_script_lang_js_,
  pagesvue_type_template_id_36cb75b2_render,
  pagesvue_type_template_id_36cb75b2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pages = (pages_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/StepsPage.vue?vue&type=script&lang=js&


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




 //import pages from "./pages2.vue";

/* harmony default export */ var StepsPagevue_type_script_lang_js_ = ({
  components: {
    pages: pages,
    NavLine: NavLine
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      datasBd: [],
      stepsId: 1,
      demo: true,
      title: "",
      datasBase: {
        description: "",
        id: null,
        forms: "",
        name: ""
      }
    };
  },
  watch: {
    stepsId: function stepsId() {
      this.datasBdOrLocalStorage();
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("setFormId", this.id);
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["stepsIndex", "allStepsDatas", "fields", "price"])), Object(vuex_esm["b" /* mapGetters */])(["form", "formDatas"])), {}, {
    currentSteps: function currentSteps() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local); //console.log("lo", recap);

      if (recap != null && recap.length) {
        return recap[this.$store.state.stepsIndex];
      } else return this.formDatas;
    },
    stepsDatas: function stepsDatas() {
      var so = this.datasBd;

      if (this.datasBd.length) {
        console.log("object io", so[this.stepsId - 1]);
        return so[this.stepsId - 1];
      } else return "vide";
    }
  }),
  methods: {
    deleteSteps: function deleteSteps(datas) {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);
      console.log("de", datas);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
    },
    datasBdOrLocalStorage: function datasBdOrLocalStorage() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      console.log("loaaaa", recap);

      if (this.stepsDatas != "vide") {
        this.datasBase = this.stepsDatas;
        console.log("aaa", this.datasBase);
        var rep = JSON.parse(this.datasBase.forms);
        this.$store.state.allStepsDatas = rep;
        this.$store.state.formDatas = this.allStepsDatas[this.$store.state.stepsIndex]; // this.$store.state.fields = this.$store.state.formDatas.fields[0];
      } else if (recap != null && recap.length) {
        console.log("appppaaa", recap);
        this.$store.state.allStepsDatas = recap;
        this.$store.state.formDatas = this.allStepsDatas[this.$store.state.stepsIndex]; //this.$store.state.fields = this.$store.state.formDatas.fields[0];
      } else if (this.stepsDatas == "vide") {
        alert("Désolé nous n'avons pas pue accéder à la BD  et vous n'avez aucune données dans votre localStorage");
      }
    },
    saveToLocal: function saveToLocal() {
      var self = this;
      var datas = this.form;
      Utilities["a" /* default */].saveSteps(datas).then(function (reponse) {
        var forms = JSON.stringify(reponse[0].fields);
        localStorage.setItem("allo", JSON.stringify(forms));
        console.log("savesteps: ", reponse);
        axios_default.a.post("http://lesroisdelareno.kksa" + "/query-ajax/insert-update", reponse).then(function (response) {
          console.log("post response ", response);
          self.$store.dispatch("setFormId", self.id);
        }).catch(function (error) {
          console.log(error);
        });
      });
    },

    /**
     * @depreciated
     */
    loadStepsDatas: function loadStepsDatas() {
      //this.datasBdOrLocalStorage();
      var self = this;
      var datas = "select * from `appformmanager_fomrs`";
      axios_default.a.post("http://lesroisdelareno.kksa" + "/query-ajax/select", datas).then(function (reponse) {
        console.log("get reponse: ", reponse);

        if (reponse.data) {
          self.datasBd = reponse.data;
          console.log("gee: ", self.datasBd);
          self.datasBdOrLocalStorage();
        }
      }).catch(function (error) {
        console.log("get error ", error);
      });
    },
    back: function back() {
      this.$store.state.stepsIndex--; // this.$store.state.formDatas = this.currentSteps;
      // this.$store.state.fields = this.currentSteps.fields[0];
      //

      this.$store.state.formDatas = this.allStepsDatas[this.$store.state.stepsIndex];
      this.$store.state.fields = this.$store.state.formDatas.fields[0];
      console.log("back");
    },
    suivant: function suivant() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      var base = this.$store.state.stepsIndex;

      if (recap.length >= 1 && base < recap.length - 1) {
        console.log("local0", recap.length);
        this.$store.state.stepsIndex++;
        this.$store.state.formDatas = this.allStepsDatas[this.$store.state.stepsIndex];
        this.$store.state.fields = this.$store.state.formDatas.fields[0];
      }

      console.log("base", this.currentSteps.length);
    },
    preview: function preview() {
      this.demo = !this.demo;
      console.log("prev", this.demo);
    },
    clearFormDatas: function clearFormDatas() {
      var all = {
        info: {
          headerTitle: "",
          title: "",
          name: ""
        },
        fields: []
      };
      this.form.forms.push(all);
      this.$store.state.stepsIndex = this.form.forms.length - 1; //this.$store.dispatch("resetFormDatas");
    },
    resetValue: function resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
    },
    resetModal: function resetModal() {//   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault(); // Exit when the form isn't valid

      this.demo = true;
      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/StepsPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_StepsPagevue_type_script_lang_js_ = (StepsPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/StepsPage.vue?vue&type=style&index=0&lang=scss&
var StepsPagevue_type_style_index_0_lang_scss_ = __webpack_require__("3db8");

// CONCATENATED MODULE: ./src/App/StepsPage.vue






/* normalize component */

var StepsPage_component = Object(componentNormalizer["a" /* default */])(
  App_StepsPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StepsPage = __webpack_exports__["default"] = (StepsPage_component.exports);

/***/ }),

/***/ "cfb1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/AddFormField.vue?vue&type=template&id=a6d649f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{ref:"addForm",attrs:{"size":"lg","id":"modal-addForm","title":"Ajouter des champs dans la page","hide-footer":""},on:{"ok":_vm.handleOk},model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},[_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-row',[_c('b-col',{attrs:{"cols":"7"}},[_c('b-form-group',{attrs:{"label":"Sélectionner un type","label-for":"type-input","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.typeOptions,"id":"type-input","required":""},model:{value:(_vm.fields.type),callback:function ($$v) {_vm.$set(_vm.fields, "type", $$v)},expression:"fields.type"}})],1)],1)],1),_c('div',[_c('input-option-form',{attrs:{"type":_vm.fields.type,"fields":_vm.fields}})],1),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v(_vm._s(_vm.nameButtonOk))])],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/AddFormField.vue?vue&type=template&id=a6d649f0&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/inputOptionForm.vue?vue&type=template&id=7ad1cf5a&
var inputOptionFormvue_type_template_id_7ad1cf5a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('hr'),(_vm.type == 'checkbox')?_c('form-checkbox',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'text' || _vm.type == 'number')?_c('InputText',{attrs:{"field":_vm.fields}}):_vm._e(),(_vm.type == 'file')?_c('InputFiles',{attrs:{"field":_vm.fields}}):_vm._e(),(_vm.type == 'select')?_c('form-select',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'radiodesc')?_c('form-radio-desc',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'radio')?_c('form-radio',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'codepostal')?_c('form-autocomplete',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'increment')?_c('form-spinner',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'markuptitle' || _vm.type == 'markupimage')?_c('form-markup',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'checkboximg')?_c('form-check-img',{attrs:{"fields":_vm.fields}}):_vm._e(),(_vm.type == 'numberup')?_c('form-number-up',{attrs:{"fields":_vm.fields}}):_vm._e(),_vm._v(" fields: "),_c('pre',[_vm._v(_vm._s(_vm.fields)+"--"+_vm._s(_vm.optionsToPush))])],1)}
var inputOptionFormvue_type_template_id_7ad1cf5a_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/inputOptionForm.vue?vue&type=template&id=7ad1cf5a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormCheckbox.vue?vue&type=template&id=45870b2b&
var FormCheckboxvue_type_template_id_45870b2b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"value"}},[_c('b-form-select',{attrs:{"multiple":"","options":_vm.fields.options,"placeholder":"choose default value"},on:{"input":_vm.ArrayValue},model:{value:(_vm.arrayValue),callback:function ($$v) {_vm.arrayValue=$$v},expression:"arrayValue"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"option-label","label":"Option label","label-for":"input-option-label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"option-label","placeholder":"Enter label","required":""},on:{"input":_vm.automaticValue},model:{value:(_vm.inputOptions.text),callback:function ($$v) {_vm.$set(_vm.inputOptions, "text", $$v)},expression:"inputOptions.text"}}),_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1)],1),_c('b-form-group',{attrs:{"label":"Cout"}},[_c('b-form-input',{attrs:{"placeholder":"Enter label","type":"number"},model:{value:(_vm.inputOptions.cout),callback:function ($$v) {_vm.$set(_vm.inputOptions, "cout", $$v)},expression:"inputOptions.cout"}})],1),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v(" Push ")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v(" Reset ")])],1)],1),(_vm.fields.options.length)?_c('b-col',[(true)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-option",modifiers:{"accordion-option":true}}],attrs:{"block":"","variant":"dark"}},[_vm._v("See options")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',{staticClass:"p-2"},[_c('option-table',{attrs:{"options":_vm.fields.options}})],1)],1)],1):undefined],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var FormCheckboxvue_type_template_id_45870b2b_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormCheckbox.vue?vue&type=template&id=45870b2b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// EXTERNAL MODULE: ./src/App/EditsFields/ValidationFields.vue + 10 modules
var ValidationFields = __webpack_require__("0931");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/OptionTable.vue?vue&type=template&id=16901244&scoped=true&lang=html&
var OptionTablevue_type_template_id_16901244_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-table',{attrs:{"items":_vm.options,"fields":_vm.fields,"responsive":"","head-variant":"light","outlined":true},scopedSlots:_vm._u([{key:"cell(action)",fn:function(row){return [(!row.detailsShowing)?_c('b-button',{attrs:{"size":"sm","variant":"outline-primary"},on:{"click":row.toggleDetails}},[_vm._v(" Edit ")]):_vm._e()]}},{key:"row-details",fn:function(row){return [_c('b-form',{staticClass:"px-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"label":"label"}},[_c('b-form-input',{attrs:{"placeholder":"Enter label","required":""},on:{"input":function($event){return _vm.automaticValue(row)}},model:{value:(row.item.text),callback:function ($$v) {_vm.$set(row.item, "text", $$v)},expression:"row.item.text"}})],1),_c('b-form-group',{attrs:{"label":"Option value"}},[_c('b-form-input',{attrs:{"placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(row.item.value),callback:function ($$v) {_vm.$set(row.item, "value", $$v)},expression:"row.item.value"}})],1),(_vm.desc)?_c('b-form-group',{attrs:{"label":"Description"}},[_c('b-form-input',{attrs:{"placeholder":"Enter value of option","required":""},model:{value:(row.item.description),callback:function ($$v) {_vm.$set(row.item, "description", $$v)},expression:"row.item.description"}})],1):_vm._e(),_c('b-form-group',{attrs:{"label":"cout (€)"}},[_c('b-form-input',{attrs:{"type":"number"},model:{value:(row.item.cout),callback:function ($$v) {_vm.$set(row.item, "cout", $$v)},expression:"row.item.cout"}})],1),_c('b-button',{staticClass:"mx-2",attrs:{"type":"reset","variant":"dark","size":"sm"}},[_vm._v(" Reset ")]),_c('b-button',{attrs:{"variant":"danger","size":"sm"},on:{"click":function($event){return _vm.deleteOption(row.index)}}},[_vm._v(" delete ")]),_c('b-button',{staticClass:"mx-2",attrs:{"type":"submit","variant":"primary","size":"sm"},on:{"click":function($event){row.item.value.length ? _vm.allo(row) : ''}}},[_vm._v(" ok ")])],1)]}}])})],1)}
var OptionTablevue_type_template_id_16901244_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/OptionTable.vue?vue&type=template&id=16901244&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/OptionTable.vue?vue&type=script&lang=js&

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

/* harmony default export */ var OptionTablevue_type_script_lang_js_ = ({
  name: "OptionsTable",
  props: {
    desc: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {},
  data: function data() {
    return {
      fieldSimple: [{
        label: "label",
        key: "text"
      }, {
        label: "value",
        key: "value"
      }, {
        label: "",
        key: "action"
      }],
      fieldDesc: [{
        label: "label",
        key: "text"
      }, {
        label: "value",
        key: "value"
      }, {
        label: "desc",
        key: "description"
      }, {
        label: "",
        key: "action"
      }],
      readonlyValue: true
    };
  },
  mounted: function mounted() {},
  watch: {},
  computed: {
    fields: function fields() {
      if (this.desc) {
        return this.fieldDesc;
      } else return this.fieldSimple;
    }
  },
  methods: {
    toogleReadOnlyValue: function toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;else this.readonlyValue = true;
    },
    automaticValue: function automaticValue(row) {
      if (this.readonlyValue && this.options[row.index].text.length <= 50) {
        this.options[row.index].value = Object(dist_es2015["a" /* snakeCase */])(this.options[row.index].text);
      }
    },
    ArrayValue: function ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    onPush: function onPush(event) {
      event.preventDefault();
    },
    onReset: function onReset(event) {
      event.preventDefault;
    },
    allo: function allo(row) {
      this.options[row.index]._showDetails = false;
    },
    deleteOption: function deleteOption(index) {
      var all = this.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/OptionTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_OptionTablevue_type_script_lang_js_ = (OptionTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/OptionTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_OptionTablevue_type_script_lang_js_,
  OptionTablevue_type_template_id_16901244_scoped_true_lang_html_render,
  OptionTablevue_type_template_id_16901244_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "16901244",
  null
  
)

/* harmony default export */ var OptionTable = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormCheckbox.vue?vue&type=script&lang=js&


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



/* harmony default export */ var FormCheckboxvue_type_script_lang_js_ = ({
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    OptionTable: OptionTable
  },
  data: function data() {
    return {
      value: 1,
      arrayValue: [],
      readonly: true,
      readonlyValue: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: "",
        cout: 0
      }
    };
  },
  watch: {},
  methods: {
    automaticValue: function automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = Object(dist_es2015["a" /* snakeCase */])(this.inputOptions.text);
      }
    },
    ArrayValue: function ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnlyValue: function toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;else this.readonlyValue = true;
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: ""
      };
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault; // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormCheckbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormCheckboxvue_type_script_lang_js_ = (FormCheckboxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormCheckbox.vue





/* normalize component */

var FormCheckbox_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormCheckboxvue_type_script_lang_js_,
  FormCheckboxvue_type_template_id_45870b2b_render,
  FormCheckboxvue_type_template_id_45870b2b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormCheckbox = (FormCheckbox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormRadioDesc.vue?vue&type=template&id=10bce1d3&
var FormRadioDescvue_type_template_id_10bce1d3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"cols":"7"}},[_c('b-form-group',{attrs:{"label":"value"}},[_c('b-form-select',{attrs:{"options":_vm.fields.options,"placeholder":"choose default value"},model:{value:(_vm.fields.value),callback:function ($$v) {_vm.$set(_vm.fields, "value", $$v)},expression:"fields.value"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"option-label","label":"Option label","label-for":"input-option-label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"option-label","placeholder":"Enter label","required":""},on:{"input":_vm.automaticValue},model:{value:(_vm.inputOptions.text),callback:function ($$v) {_vm.$set(_vm.inputOptions, "text", $$v)},expression:"inputOptions.text"}}),_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1)],1),_c('b-col',{attrs:{"cols":"7"}},[_c('b-form-group',{attrs:{"label":"Description"}},[_c('b-form-textarea',{attrs:{"placeholder":"enter description of option"},model:{value:(_vm.inputOptions.description),callback:function ($$v) {_vm.$set(_vm.inputOptions, "description", $$v)},expression:"inputOptions.description"}})],1)],1),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v("Push")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v("Reset")])],1),_c('div',{staticClass:"bg-light p-1"})],1),(_vm.fields.options.length)?_c('b-col',[(true)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-option",modifiers:{"accordion-option":true}}],attrs:{"block":"","variant":"dark"}},[_vm._v("See options")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',{staticClass:"p-2"},[_c('option-table',{attrs:{"desc":true,"options":_vm.fields.options}})],1)],1)],1):undefined],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var FormRadioDescvue_type_template_id_10bce1d3_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormRadioDesc.vue?vue&type=template&id=10bce1d3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormRadioDesc.vue?vue&type=script&lang=js&


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



/* harmony default export */ var FormRadioDescvue_type_script_lang_js_ = ({
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    OptionTable: OptionTable
  },
  data: function data() {
    return {
      value: 1,
      arrayValue: [],
      readonlyValue: true,
      readonly: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: ""
      }
    };
  },
  watch: {},
  methods: {
    toogleReadOnlyValue: function toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;else this.readonlyValue = true;
    },
    automaticValue: function automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = Object(dist_es2015["a" /* snakeCase */])(this.inputOptions.text);
      }
    },
    ArrayValue: function ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    //
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: ""
      };
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault; // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormRadioDesc.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormRadioDescvue_type_script_lang_js_ = (FormRadioDescvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormRadioDesc.vue





/* normalize component */

var FormRadioDesc_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormRadioDescvue_type_script_lang_js_,
  FormRadioDescvue_type_template_id_10bce1d3_render,
  FormRadioDescvue_type_template_id_10bce1d3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormRadioDesc = (FormRadioDesc_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormSelect.vue?vue&type=template&id=2d0c1538&
var FormSelectvue_type_template_id_2d0c1538_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"value"}},[_c('b-form-select',{attrs:{"multiple":"","options":_vm.fields.options,"placeholder":"choose default value"},on:{"input":_vm.ArrayValue},model:{value:(_vm.arrayValue),callback:function ($$v) {_vm.arrayValue=$$v},expression:"arrayValue"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"option-label","label":"Option label","label-for":"input-option-label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"option-label","placeholder":"Enter label","required":""},on:{"input":_vm.automaticValue},model:{value:(_vm.inputOptions.text),callback:function ($$v) {_vm.$set(_vm.inputOptions, "text", $$v)},expression:"inputOptions.text"}}),_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1)],1),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v("Push")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v("Reset")])],1)],1),(_vm.fields.options.length)?_c('b-col',[(true)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-option",modifiers:{"accordion-option":true}}],attrs:{"block":"","variant":"dark"}},[_vm._v("See options")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',{staticClass:"p-2"},[_c('option-table',{attrs:{"options":_vm.fields.options}})],1)],1)],1):undefined],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var FormSelectvue_type_template_id_2d0c1538_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormSelect.vue?vue&type=template&id=2d0c1538&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormSelect.vue?vue&type=script&lang=js&


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



/* harmony default export */ var FormSelectvue_type_script_lang_js_ = ({
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    OptionTable: OptionTable
  },
  data: function data() {
    return {
      value: 1,
      arrayValue: [],
      readonly: true,
      readonlyValue: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: ""
      }
    };
  },
  watch: {},
  methods: {
    automaticValue: function automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = Object(dist_es2015["a" /* snakeCase */])(this.inputOptions.text);
      }
    },
    ArrayValue: function ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnlyValue: function toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;else this.readonlyValue = true;
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: ""
      };
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault; // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormSelectvue_type_script_lang_js_ = (FormSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormSelect.vue





/* normalize component */

var FormSelect_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormSelectvue_type_script_lang_js_,
  FormSelectvue_type_template_id_2d0c1538_render,
  FormSelectvue_type_template_id_2d0c1538_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormSelect = (FormSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormRadio.vue?vue&type=template&id=3780c452&
var FormRadiovue_type_template_id_3780c452_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"cols":"7"}},[_c('b-form-group',{attrs:{"label":"value"}},[_c('b-form-select',{attrs:{"options":_vm.fields.options,"placeholder":"choose default value"},model:{value:(_vm.fields.value),callback:function ($$v) {_vm.$set(_vm.fields, "value", $$v)},expression:"fields.value"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"option-label","label":"Option label","label-for":"input-option-label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"option-label","placeholder":"Enter label","required":""},on:{"input":_vm.automaticValue},model:{value:(_vm.inputOptions.text),callback:function ($$v) {_vm.$set(_vm.inputOptions, "text", $$v)},expression:"inputOptions.text"}}),_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1)],1),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v("Push")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v("Reset")])],1),_c('div',{staticClass:"bg-light p-1"})],1),(_vm.fields.options.length)?_c('b-col',[(true)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-option",modifiers:{"accordion-option":true}}],attrs:{"block":"","variant":"dark"}},[_vm._v("See options")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',{staticClass:"p-2"},[_c('option-table',{attrs:{"options":_vm.fields.options}})],1)],1)],1):undefined],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var FormRadiovue_type_template_id_3780c452_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormRadio.vue?vue&type=template&id=3780c452&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormRadio.vue?vue&type=script&lang=js&


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



/* harmony default export */ var FormRadiovue_type_script_lang_js_ = ({
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    OptionTable: OptionTable
  },
  data: function data() {
    return {
      value: 1,
      arrayValue: [],
      readonlyValue: true,
      readonly: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: ""
      }
    };
  },
  watch: {},
  methods: {
    toogleReadOnlyValue: function toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;else this.readonlyValue = true;
    },
    automaticValue: function automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = Object(dist_es2015["a" /* snakeCase */])(this.inputOptions.text);
      }
    },
    ArrayValue: function ArrayValue() {
      if (this.arrayValue.length) {
        this.fields.value = this.arrayValue;
      } else {
        this.fields.value = [];
      }
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    //
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: ""
      };
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault; // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormRadiovue_type_script_lang_js_ = (FormRadiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormRadio.vue





/* normalize component */

var FormRadio_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormRadiovue_type_script_lang_js_,
  FormRadiovue_type_template_id_3780c452_render,
  FormRadiovue_type_template_id_3780c452_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormRadio = (FormRadio_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormCheckImg.vue?vue&type=template&id=75479f3c&
var FormCheckImgvue_type_template_id_75479f3c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"label":"isActive?"}},[_c('b-form-checkbox',{attrs:{"value":true,"unchecked-value":false,"required":""},model:{value:(_vm.inputOptions.isActive),callback:function ($$v) {_vm.$set(_vm.inputOptions, "isActive", $$v)},expression:"inputOptions.isActive"}})],1),_c('b-form-group',{attrs:{"label":"label","label-for":"input-option-label"}},[_c('b-form-input',{attrs:{"placeholder":"Enter label","required":""},model:{value:(_vm.inputOptions.label),callback:function ($$v) {_vm.$set(_vm.inputOptions, "label", $$v)},expression:"inputOptions.label"}})],1),_c('b-form-group',{attrs:{"id":"option-val","label":"value","label-for":"input-option-val"}},[_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":""},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1),_c('manageImages',{on:{"ev_manage_images_img":function($event){return _vm.ev_manage_images_img($event, _vm.inputOptions)}}}),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v(" Push ")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v(" Reset ")])],1),_c('hr'),_vm._l((_vm.fields.options),function(item,i){return _c('b-form',{key:i,staticClass:"border p-3 mb-3 bg-light",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"label":"isActive?","label-for":"require-input"}},[_c('b-form-checkbox',{attrs:{"id":("require-input" + i),"value":true,"unchecked-value":false,"required":""},model:{value:(item.isActive),callback:function ($$v) {_vm.$set(item, "isActive", $$v)},expression:"item.isActive"}})],1),_c('b-form-group',{attrs:{"id":("option-label" + i),"label":"label","label-for":"input-option-label"}},[_c('b-form-input',{attrs:{"id":("option-label" + i),"placeholder":"Enter label","required":""},model:{value:(item.label),callback:function ($$v) {_vm.$set(item, "label", $$v)},expression:"item.label"}})],1),_c('b-form-group',{attrs:{"id":("desc-img" + i),"label":"description","label-for":"input-option-val"}},[_c('b-form-input',{attrs:{"id":("desc-img" + i),"placeholder":"1 Côté","required":""},model:{value:(item.description),callback:function ($$v) {_vm.$set(item, "description", $$v)},expression:"item.description"}})],1),_c('b-form-group',{attrs:{"id":("option-val" + i),"label":"value","label-for":"input-option-val"}},[_c('b-form-input',{attrs:{"id":("option-val" + i),"placeholder":"Enter value of option","required":""},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}})],1),_c('manageImages',{attrs:{"img_url":item.img},on:{"ev_manage_images_img":function($event){return _vm.ev_manage_images_img($event, item)}}}),_c('b-button',{attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v("Push")]),_c('b-button',{staticClass:"mx-2",attrs:{"type":"reset","variant":"dark","size":"sm"}},[_vm._v(" Reset ")]),_c('b-button',{attrs:{"variant":"danger","size":"sm"},on:{"click":function($event){return _vm.deleteOption(i)}}},[_vm._v("delete")])],1)}),_c('b-card',{staticClass:"mt-3",attrs:{"header":"Form Data Result"}},[_c('pre',{staticClass:"m-0"},[_vm._v(_vm._s(_vm.inputOptions))])])],2),_c('b-col',{attrs:{"sm":"12"}},[_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)],1)}
var FormCheckImgvue_type_template_id_75479f3c_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormCheckImg.vue?vue&type=template&id=75479f3c&

// EXTERNAL MODULE: ./src/App/EditsFields/manage-images.vue + 4 modules
var manage_images = __webpack_require__("910d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormCheckImg.vue?vue&type=script&lang=js&


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
//
//
//
//
//


 //import OptionTable from "../OptionTable.vue";

/* harmony default export */ var FormCheckImgvue_type_script_lang_js_ = ({
  props: {
    fields: {
      type: Object,
      require: true
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    manageImages: manage_images["a" /* default */] //OptionTable,

  },
  data: function data() {
    return {
      value: 1,
      //Object of type checkbox
      inputOptions: {
        label: "",
        value: "",
        img: "",
        description: "",
        isActive: false
      },
      readonly: true
    };
  },
  watch: {},
  methods: {
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        label: "",
        value: ""
      };
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault; // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    ev_manage_images_img: function ev_manage_images_img(data, inputOptions) {
      if (data.url) {
        inputOptions.img = data.url;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormCheckImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormCheckImgvue_type_script_lang_js_ = (FormCheckImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormCheckImg.vue





/* normalize component */

var FormCheckImg_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormCheckImgvue_type_script_lang_js_,
  FormCheckImgvue_type_template_id_75479f3c_render,
  FormCheckImgvue_type_template_id_75479f3c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormCheckImg = (FormCheckImg_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"203ace7c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormNumberUp.vue?vue&type=template&id=777f013d&scoped=true&lang=html&
var FormNumberUpvue_type_template_id_777f013d_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"mb-3"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"label-up","required":""},on:{"input":_vm.input},model:{value:(_vm.fields.label),callback:function ($$v) {_vm.$set(_vm.fields, "label", $$v)},expression:"fields.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.fields.name),callback:function ($$v) {_vm.$set(_vm.fields, "name", $$v)},expression:"fields.name"}})],1)],1)],1),_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Valeur par defaut"}},[_c('b-form-input',{attrs:{"type":"number"},model:{value:(_vm.fields.value),callback:function ($$v) {_vm.$set(_vm.fields, "value", $$v)},expression:"fields.value"}})],1)],1),_c('b-col',{attrs:{"sm":"6"}},[_c('b-form-group',{attrs:{"label":" suffixe"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"suffixe"},model:{value:(_vm.fields.suffixe),callback:function ($$v) {_vm.$set(_vm.fields, "suffixe", $$v)},expression:"fields.suffixe"}})],1)],1)],1)],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var FormNumberUpvue_type_template_id_777f013d_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormNumberUp.vue?vue&type=template&id=777f013d&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormNumberUp.vue?vue&type=script&lang=js&


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


/* harmony default export */ var FormNumberUpvue_type_script_lang_js_ = ({
  name: "FormMarkup",
  props: {
    fields: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */]
  },
  data: function data() {
    return {
      readonly: true,
      value: "",
      prefixe: "",
      suffixe: ""
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {},
  methods: {
    inputValue: function inputValue() {
      if (this.value.length) {
        return this.fields.value = Number(this.value);
      }
    },
    input: function input() {
      if (this.readonly && this.fields.name.length <= 32) {
        this.fields.name = Object(dist_es2015["a" /* snakeCase */])(this.fields.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormNumberUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormNumberUpvue_type_script_lang_js_ = (FormNumberUpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/formulaire/FormNumberUp.vue





/* normalize component */

var FormNumberUp_component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormNumberUpvue_type_script_lang_js_,
  FormNumberUpvue_type_template_id_777f013d_scoped_true_lang_html_render,
  FormNumberUpvue_type_template_id_777f013d_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "777f013d",
  null
  
)

/* harmony default export */ var FormNumberUp = (FormNumberUp_component.exports);
// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/inputOptionForm.vue?vue&type=script&lang=js&







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

 //import FormInput from "./formulaire/FormInput.vue";







/* harmony default export */ var inputOptionFormvue_type_script_lang_js_ = ({
  components: {
    FormCheckbox: FormCheckbox,
    //FormInput,
    FormSelect: FormSelect,
    FormRadioDesc: FormRadioDesc,
    FormRadio: FormRadio,
    FormCheckImg: FormCheckImg,
    FormNumberUp: FormNumberUp,
    InputText: function InputText() {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "4790"));
    },
    InputFiles: function InputFiles() {
      return __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "15e7"));
    },
    FormSpinner: function FormSpinner() {
      return __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "6174"));
    },
    FormAutocomplete: function FormAutocomplete() {
      return __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "47e7"));
    },
    FormMarkup: function FormMarkup() {
      return __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "3b12"));
    }
  },
  props: {
    type: {
      type: String,
      default: null
    },
    genre: {
      type: String,
      default: ""
    },
    fields: {
      type: Object,
      default: function _default() {
        return Utilities["a" /* default */].field();
      }
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    type: function type() {
      this.fields.type = this.type;
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    optionsToPush: function optionsToPush() {
      var base = this.type;

      if (base == "checkbox") {
        return this.inputOptions;
      } else return {};
    }
  }),
  methods: {
    deleteOption: function deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
        }
      }
    },
    //logic for fields options
    onPush: function onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions: function pushOptions(event) {
      var info = {};

      for (var i in this.optionsToPush) {
        info[i] = this.optionsToPush[i];
      }

      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
    },
    onReset: function onReset(event) {
      var _this = this;

      event.preventDefault;

      for (var i in this.optionsToPush) {
        this.optionsToPush[i] = "";
        console.log("iss", this.optionsToPush[i]);
      } // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;
      // Trick to reset/clear native browser form validation state


      this.show = false;
      this.$nextTick(function () {
        _this.show = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/inputOptionForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_inputOptionFormvue_type_script_lang_js_ = (inputOptionFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/inputOptionForm.vue





/* normalize component */

var inputOptionForm_component = Object(componentNormalizer["a" /* default */])(
  App_inputOptionFormvue_type_script_lang_js_,
  inputOptionFormvue_type_template_id_7ad1cf5a_render,
  inputOptionFormvue_type_template_id_7ad1cf5a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var inputOptionForm = (inputOptionForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/AddFormField.vue?vue&type=script&lang=js&


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



/* harmony default export */ var AddFormFieldvue_type_script_lang_js_ = ({
  components: {
    inputOptionForm: inputOptionForm
  },
  props: {
    nouveau: {
      type: Boolean,
      require: true,
      default: true
    },
    fields: {
      type: Object,
      default: function _default() {
        return Utilities["a" /* default */].field();
      }
    },

    /**/
    genre: {
      type: String,
      default: ""
    }
  },
  data: function data() {
    return {
      isOpen: false,
      typeFieldSelected: null,
      type: null,
      //datas to check form validity
      labelState: null,
      typeOptions: [{
        value: null,
        text: "Please select an option"
      }, {
        value: "radio",
        text: "Radio"
      }, {
        value: "text",
        text: "text"
      }, {
        value: "select",
        text: "Select"
      }, {
        value: "number",
        text: "Number"
      }, {
        value: "checkbox",
        text: "Checkbox"
      }, {
        value: "increment",
        text: "Spin Button"
      }, {
        value: "markuptitle",
        text: "Markup Title"
      }, {
        value: "markupimage",
        text: "Markup Image"
      }, {
        value: "checkboximg",
        text: "Checkbox Image"
      }, {
        value: "codepostal",
        text: "Code Postal input"
      }, {
        value: "radiodesc",
        text: "Radio with Description"
      }, {
        value: "numberup",
        text: "Number label up"
      }, {
        value: "file",
        text: "Ajout de fichiers"
      }]
    };
  },
  watch: {},
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    nameButtonOk: function nameButtonOk() {
      return this.nouveau ? "Ajouter" : "Mettre à jour";
    }
  }),
  methods: {
    optionAddToFields: function optionAddToFields() {
      //this.$store.dispatch("addFields", this.fields);
      var proto = function proto(hauteur) {
        Object(classCallCheck["a" /* default */])(this, proto);

        this.hauteur = hauteur;
      };

      var protoD = new proto(this.fields);
      var sh = {};

      for (var i in protoD.hauteur) {
        sh[i] = protoD.hauteur[i];
      }

      this.formDatas.fields.push(sh);
      Utilities["a" /* default */].resetField(this.fields);
    },
    //
    openAddFormFieldPopUp: function openAddFormFieldPopUp() {
      this.isOpen = !this.isOpen;
    },
    resetModal: function resetModal() {
      this.type = null;
    },
    handleOk: function handleOk(event) {
      // Prevent modal from closing
      event.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault(); // Exit when the form isn't valid

      this.isOpen = !this.isOpen;

      if (this.nouveau) {
        this.optionAddToFields();
      } // Push the name to submitted names


      this.$emit("input_to_add", this.fields); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/AddFormField.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_AddFormFieldvue_type_script_lang_js_ = (AddFormFieldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/AddFormField.vue





/* normalize component */

var AddFormField_component = Object(componentNormalizer["a" /* default */])(
  App_AddFormFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddFormField = __webpack_exports__["default"] = (AddFormField_component.exports);

/***/ }),

/***/ "dcff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dee4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pages_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e412":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationInstance; });
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4ec");
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bee2");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);





var validationRessource = {
  conditions: function conditions() {
    return {
      action: "",
      name: "",
      operator: "",
      value: "",
      state_name: ""
    };
  },
  listsOperators: function listsOperators() {
    return [{
      text: "Validé",
      value: "validated"
    }, {
      text: "non vide",
      value: "not_empty"
    }, {
      text: " vide",
      value: "empty"
    }, {
      text: "la valeur du champs est egal à",
      value: "egal"
    }];
  },
  Action: function Action() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ce champs";
    return [{
      text: val + " est visible",
      value: "visible"
    }, {
      text: val + " est caché",
      value: "hidden"
    }];
  },

  /**
   * Retourne false, pour desactiver.
   */
  computedValidation: function computedValidation(formDatas, currentField, formDatasValidate) {
    for (var i in formDatas.fields) {
      var field = formDatas.fields[i];

      if (field.name !== currentField.name) {
        for (var j in currentField.states) {
          var state = currentField.states[j]; // si le champs n'est pas definit on retourne false;

          if (formDatasValidate[state.name] === undefined) return false;

          if (field.name === state.name) {
            // visible
            if (state.action === "visible") {
              if (field.value === "" && state.operator === "not_empty") return false;else if (field.value !== "" && state.operator === "empty") return false;else if (state.operator === "validated" && formDatasValidate[field.name]) return formDatasValidate[field.name].valid;else if (state.operator === "egal") {
                if (field.value) {
                  return field.value.includes(state.value) ? true : false;
                } else {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  },

  /**
   * Retourne la liste des etapes.
   */
  listesEtapes: function listesEtapes(form, formDatas) {
    var etapes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (form && form.forms.length > 1) {
      console.log("listesEtapes ");

      for (var i in form.forms) {
        var currentForm = form.forms[i];

        if (currentForm.info.name !== "") {
          etapes.push({
            text: "(" + i + ") " + currentForm.info.title,
            value: currentForm.info.name
          });
        }
      }
    }
  },
  getFormStateByName: function getFormStateByName(state_name, forms) {
    for (var i in forms) {
      var form = forms[i];

      if (form.info.name === state_name) {
        return form;
      }
    }
  }
};

var ValidationInstance = /*#__PURE__*/function () {
  function ValidationInstance() {
    Object(_siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ValidationInstance);

    //
    this.StepeValidationOptions = [];
  } //Retourne les etapes sous forme de listes.


  Object(_siteweb_AppVuejs_app_form_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ValidationInstance, [{
    key: "listeDesChamps",
    value: function listeDesChamps(condition, form) {
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (condition.state_name && condition.state_name !== "") {
        var currentForm = validationRessource.getFormStateByName(condition.state_name, form.forms);

        if (currentForm !== undefined) {
          console.log("listeDesChamps ", currentForm);

          for (var i in currentForm.fields) {
            var field = currentForm.fields[i];

            if (condition.name == field.name && field.options.length) {
              this.StepeValidationOptions = field.options;
            }

            fields.push({
              text: field.label,
              value: field.name
            });
          }
        }
      }
    }
  }]);

  return ValidationInstance;
}();
/**/




/***/ }),

/***/ "ea56":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f158":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wbuutilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a76e");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2c10");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("104d");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);






vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__[/* BVToastPlugin */ "a"]);
var vm = new vue__WEBPACK_IMPORTED_MODULE_5___default.a(); //console.log("Module Vue :  ", vm, "\n $bvToast : ", vm.$bvToast);

wbuutilities__WEBPACK_IMPORTED_MODULE_2__[/* AjaxToastBootStrap */ "b"].$bvToast = vm.$bvToast;
/* harmony default export */ __webpack_exports__["a"] = ({
  baseURl: window.location.host.includes("localhost") ? "http://lesroisdelareno.kksa" : window.location.host,

  /**
   * Permet d'ajouter et d'editer un formulaire.
   */
  saveForm: function saveForm(datas) {
    return wbuutilities__WEBPACK_IMPORTED_MODULE_2__[/* AjaxToastBootStrap */ "b"].post(this.baseURl + "/query-ajax/insert-update", datas, {});
  },
  prepareDatasToSave: function prepareDatasToSave(datas) {
    return _Utilities_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].saveSteps(datas);
  }
});

/***/ })

}]);
//# sourceMappingURL=appForm.common.3.js.map