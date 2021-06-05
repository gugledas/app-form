((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[9],{

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

/***/ "a76e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ basic; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ BootStrap; });

// UNUSED EXPORTS: ButtonSave, ButtonDelete

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d67b4404-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonSave.vue?vue&type=template&id=29246a2e&scoped=true&lang=html&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d67b4404-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!../wbuutilities/src/Buttons/ButtonDelete.vue?vue&type=template&id=0b82f270&scoped=true&lang=html&
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

/***/ "d2d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d67b4404-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/AddEditForm.vue?vue&type=template&id=2a72a790&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"modal",attrs:{"id":"add-edit-form","title":"Create your form page","hide-footer":""},on:{"ok":_vm.handleOk}},[_c('h1',[_vm._v("kksa8888")]),_c('form',{ref:"form",on:{"submit":_vm.handleSubmit}},[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"name","label-for":"name-input"}},[_c('b-form-input',{attrs:{"required":""},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],1),_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"Description","label-for":"description-input"}},[_c('b-form-textarea',{attrs:{"required":""},model:{value:(_vm.form.description),callback:function ($$v) {_vm.$set(_vm.form, "description", $$v)},expression:"form.description"}})],1)],1)],1),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v("Ajouter")])],1)])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/AddEditForm.vue?vue&type=template&id=2a72a790&scoped=true&lang=html&

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

/* harmony default export */ var AddEditFormvue_type_script_lang_js_ = ({
  name: "AddEditForm",
  props: {//
  },
  components: {//
  },
  data: function data() {
    return {
      form: {
        forms: [],
        description: "",
        name: ""
      }
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {//
  },
  methods: {
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
  "2a72a790",
  null
  
)

/* harmony default export */ var AddEditForm = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=appForm.umd.9.js.map