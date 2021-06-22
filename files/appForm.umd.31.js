((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[31],{

/***/ "331f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4acd20fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormCheckbox.vue?vue&type=template&id=73d13404&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"p-2"},[_c('b-col',{attrs:{"sm":"12"}},[_c('compositeHeaderField',{attrs:{"field":_vm.fields}})],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"value"}},[_c('b-form-select',{attrs:{"multiple":"","options":_vm.fields.options,"placeholder":"choose default value"},on:{"input":_vm.ArrayValue},model:{value:(_vm.arrayValue),callback:function ($$v) {_vm.arrayValue=$$v},expression:"arrayValue"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('label',[_vm._v("Options")]),_c('b-form',{staticClass:"border p-3",on:{"submit":_vm.onPush,"reset":_vm.onReset}},[_c('b-form-group',{attrs:{"id":"option-label","label":"Option label","label-for":"input-option-label"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"id":"option-label","placeholder":"Enter label","required":""},on:{"input":_vm.automaticValue},model:{value:(_vm.inputOptions.text),callback:function ($$v) {_vm.$set(_vm.inputOptions, "text", $$v)},expression:"inputOptions.text"}}),_c('b-form-input',{attrs:{"id":"option-val","placeholder":"Enter value of option","required":"","readonly":_vm.readonlyValue},on:{"dblclick":_vm.toogleReadOnlyValue},model:{value:(_vm.inputOptions.value),callback:function ($$v) {_vm.$set(_vm.inputOptions, "value", $$v)},expression:"inputOptions.value"}})],1)],1),_c('b-form-group',{attrs:{"label":"Cout €"}},[_c('b-form-input',{attrs:{"placeholder":"Enter label","type":"number"},model:{value:(_vm.inputOptions.cout),callback:function ($$v) {_vm.$set(_vm.inputOptions, "cout", $$v)},expression:"inputOptions.cout"}})],1),_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","size":"sm"}},[_vm._v(" Push ")]),_c('b-button',{attrs:{"type":"reset","variant":"danger","size":"sm"}},[_vm._v(" Reset ")])],1)],1),(_vm.fields.options.length)?_c('b-col',[(true)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-option",modifiers:{"accordion-option":true}}],attrs:{"block":"","variant":"dark"}},[_vm._v("See options")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',{staticClass:"p-2"},[_c('option-table',{attrs:{"options":_vm.fields.options}})],1)],1)],1):undefined],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.fields}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormCheckbox.vue?vue&type=template&id=73d13404&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

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

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// EXTERNAL MODULE: ./src/App/EditsFields/ValidationFields.vue + 10 modules
var ValidationFields = __webpack_require__("0931");

// EXTERNAL MODULE: ./src/App/OptionTable.vue + 4 modules
var OptionTable = __webpack_require__("f1de");

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
    OptionTable: OptionTable["a" /* default */],
    compositeHeaderField: function compositeHeaderField() {
      return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "d3ee"));
    }
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/formulaire/FormCheckbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormCheckboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormCheckbox = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.31.js.map