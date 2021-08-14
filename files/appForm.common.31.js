((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[31],{

/***/ "d2d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16091a90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/AddEditForm.vue?vue&type=template&id=7f068a3c&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"modal",attrs:{"id":"add-edit-form","title":"Creer un nouveau formulaire","hide-footer":""},on:{"ok":_vm.handleOk}},[_c('form',{ref:"form",on:{"submit":_vm.handleSubmit}},[_c('b-row',{staticClass:"p-3"},[_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"name","label-for":"name-input"}},[_c('b-form-input',{attrs:{"required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"Description","label-for":"description-input"}},[_c('b-form-textarea',{attrs:{"required":""},model:{value:(_vm.form.description),callback:function ($$v) {_vm.$set(_vm.form, "description", $$v)},expression:"form.description"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('b-form-group',{attrs:{"label":"image","label-for":"description-input"}},[_c('UploadImage',{attrs:{"field":_vm.form}})],1)],1)],1),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v(" Ajouter ")])],1)])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/AddEditForm.vue?vue&type=template&id=7f068a3c&scoped=true&lang=html&

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

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/AddEditForm.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import { mapState } from "vuex";
//
//import manageImages from "../EditsFields/manage-images.vue";

/* harmony default export */ var AddEditFormvue_type_script_lang_js_ = ({
  name: "AddEditForm",
  props: {//
  },
  components: {
    UploadImage: function UploadImage() {
      return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "9353"));
    }
  },
  data: function data() {
    return {
      form: {
        forms: [],
        description: "",
        name: "",
        img: {}
      }
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {},
  methods: {
    ev_manage_images_img: function ev_manage_images_img(data, form) {
      console.log("file", data);

      if (data.url) {
        form.img = data.url;
      }
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault();
      config["a" /* default */].prepareDatasToSave(this.form).then(function (val) {
        config["a" /* default */].saveForm(val).then(function () {
          _this.$nextTick(function () {
            _this.$bvModal.hide("add-edit-form");

            window.location.reload();
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/AddEditForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_AddEditFormvue_type_script_lang_js_ = (AddEditFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/AddEditForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_AddEditFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7f068a3c",
  null
  
)

/* harmony default export */ var AddEditForm = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.common.31.js.map