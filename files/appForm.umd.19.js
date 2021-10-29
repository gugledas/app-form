((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[19],{

/***/ "65db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/files.vue.vue?vue&type=template&id=b7f196bc&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('FilePond',{ref:"pond",attrs:{"name":"file__upload","label-idle":"Ajouter des photos, videos, PDF ici ...","allow-multiple":true,"accepted-file-types":"image/jpeg, image/png","server":_vm.server,"files":_vm.myFiles},on:{"processfile":_vm.handleFileProcess,"updatefiles":_vm.updatefiles}}),_c('ul',{staticClass:"m-0 p-2 bg-light m-2"},_vm._l((_vm.myFilesPreview),function(file,i){return _c('li',{key:i,staticClass:"row mb-3"},[_c('b-col',{attrs:{"sm":"10"}},[_vm._v(" "+_vm._s(file.filename)+" ")]),_c('b-col',{attrs:{"sm":"2"}},[_c('b-button',{attrs:{"size":"sm","variant":"outline-danger"},on:{"click":_vm.deleteFile}},[_c('b-icon',{attrs:{"icon":"trash"}})],1)],1)],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/files.vue.vue?vue&type=template&id=b7f196bc&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/vue-filepond/dist/vue-filepond.js
var vue_filepond = __webpack_require__("1501");
var vue_filepond_default = /*#__PURE__*/__webpack_require__.n(vue_filepond);

// EXTERNAL MODULE: ./node_modules/filepond/dist/filepond.min.css
var filepond_min = __webpack_require__("4ed3");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/files.vue.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Import image preview and file type validation plugins

 // Import image preview and file type validation plugins
//import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
//import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// Import the plugin code
// import FilePondPluginFileEncode from "filepond-plugin-file-encode";

 // Create component

var FilePond = vue_filepond_default()();
/* harmony default export */ var files_vuevue_type_script_lang_js_ = ({
  name: "files.vue",
  props: {
    field: {
      type: Object,
      require: true
    }
  },
  components: {
    FilePond: FilePond
  },
  data: function data() {
    var _this = this;

    return {
      myFiles: [],
      server: {
        url: config["a" /* default */].BaseUrl() + "/filesmanager/files",
        process: {
          onload: function onload(res) {
            // select the right value in the response here and return
            //console.log("onload : ", JSON.parse(res));
            _this.addImages(JSON.parse(res));

            return res;
          }
        }
      }
    };
  },
  mounted: function mounted() {//this.retriveFiles();
  },
  watch: {//
  },
  computed: {
    myFilesPreview: function myFilesPreview() {
      var myFilesPreview = [];

      if (this.field.value && this.field.value.length) {
        for (var f in this.field.value) {
          var file = this.field.value[f];
          myFilesPreview.push({
            source: config["a" /* default */].BaseUrl() + file.url,
            options: {
              type: "local"
            },
            filename: file.filename
          });
        }
      } else {
        this.setEmptyValue();
      }

      return myFilesPreview;
    }
  },
  methods: {
    addImages: function addImages(response) {
      this.field.value.push(response);
    },
    retriveFiles: function retriveFiles() {
      this.myFilesPreview = [];

      if (this.field.value && this.field.value.length) {
        for (var f in this.field.value) {
          var file = this.field.value[f];
          this.myFilesPreview.push({
            source: config["a" /* default */].BaseUrl() + file.url,
            options: {
              type: "local"
            },
            filename: file.filename
          });
        }
      } else {
        this.field.value = [];
      }
    },
    setEmptyValue: function setEmptyValue() {
      this.field.value = [];
    },
    handleFilePondInit: function handleFilePondInit() {
      console.log("FilePond has initialized"); // FilePond instance methods are available on `this.$refs.pond`
    },
    deleteFile: function deleteFile(id) {
      this.field.value.splice(id, 1);
    },
    progressfiles: function progressfiles(data) {
      console.log("progressfiles : ", data);
    },
    handleFileProcess: function handleFileProcess(error, file) {
      console.log("handleFileProcess ", error, file);
    },
    handleFilesProcess: function handleFilesProcess(data) {
      console.log("handleFilesProcess ", data);
    },
    updatefiles: function updatefiles(data) {
      console.log("updatefiles ", data);
    },
    load: function load(data) {
      console.log("load ", data);
    },
    processfileprogress: function processfileprogress(file) {
      console.log("processfileprogress ", file);
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/files.vue.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_files_vuevue_type_script_lang_js_ = (files_vuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/EditsFields/files.vue.vue?vue&type=style&index=0&lang=scss&
var files_vuevue_type_style_index_0_lang_scss_ = __webpack_require__("7273");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/EditsFields/files.vue.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EditsFields_files_vuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var files_vue = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "68e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7273":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68e7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_files_vue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.19.js.map