((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[19],{

/***/ "2b44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56ba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "56ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9353":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57337f11-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/UploadImage.vue?vue&type=template&id=6ce3215e&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('FilePond',{ref:"pond",attrs:{"name":"file__upload","label-idle":"Ajouter une image ici...","allow-multiple":false,"accepted-file-types":"image/jpeg, image/png","server":_vm.server,"files":_vm.myFiles},on:{"processfile":_vm.handleFileProcess,"updatefiles":_vm.updatefiles}}),_c('ul',{staticClass:"m-0 p-2 bg-light m-2"},[(_vm.hasImg)?_c('b-row',{staticClass:"row mb-3",attrs:{"align-h":"center","align-v":"center"}},[_c('b-col',{attrs:{"sm":"10"}},[_c('img',{attrs:{"src":_vm.baseURl + _vm.field.img,"width:":"40px","height":"40px"}})]),_c('b-col',{attrs:{"sm":"2"}},[_c('b-button',{attrs:{"size":"sm","variant":"outline-danger"},on:{"click":_vm.deleteFile}},[_c('b-icon',{attrs:{"icon":"trash"}})],1)],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/UploadImage.vue?vue&type=template&id=6ce3215e&lang=html&

// EXTERNAL MODULE: ./node_modules/vue-filepond/dist/vue-filepond.js
var vue_filepond = __webpack_require__("1501");
var vue_filepond_default = /*#__PURE__*/__webpack_require__.n(vue_filepond);

// EXTERNAL MODULE: ./node_modules/filepond/dist/filepond.min.css
var filepond_min = __webpack_require__("4ed3");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/UploadImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var UploadImagevue_type_script_lang_js_ = ({
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
        url: config["a" /* default */].baseURl + "/filesmanager/files",
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
    hasImg: function hasImg() {
      if (this.field.img) {
        if (this.field.img.length > 4) return true;
      }

      return false;
    },
    baseURl: function baseURl() {
      return config["a" /* default */].baseURl;
    },
    myFilesPreview: function myFilesPreview() {
      var myFilesPreview = [];

      if (this.field.img && this.field.img.length) {
        for (var f in this.field.img) {
          var file = this.field.img[f];
          myFilesPreview.push({
            source: config["a" /* default */].baseURl + file.url,
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
      console.log("ime", response);
      this.field.img = response.url;
    },
    retriveFiles: function retriveFiles() {
      this.myFilesPreview = [];

      if (this.field.img && this.field.img.length) {
        for (var f in this.field.img) {
          var file = this.field.img[f];
          this.myFilesPreview.push({
            source: config["a" /* default */].baseURl + file.url,
            options: {
              type: "local"
            },
            filename: file.filename
          });
        }
      } else {
        this.field.img = [];
      }
    },
    setEmptyValue: function setEmptyValue() {
      this.field.img = "";
    },
    handleFilePondInit: function handleFilePondInit() {
      console.log("FilePond has initialized"); // FilePond instance methods are available on `this.$refs.pond`
    },
    deleteFile: function deleteFile() {
      this.field.img = "";
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
// CONCATENATED MODULE: ./src/App/EditsFields/UploadImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_UploadImagevue_type_script_lang_js_ = (UploadImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/EditsFields/UploadImage.vue?vue&type=style&index=0&lang=scss&
var UploadImagevue_type_style_index_0_lang_scss_ = __webpack_require__("2b44");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/EditsFields/UploadImage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  EditsFields_UploadImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UploadImage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.common.19.js.map