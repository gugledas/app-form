<template lang="html">
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField && (!uid || (uid && mode))" name="fade">
      <form
        ref="form_userlogin"
        @submit.stop.prevent="handleSubmit"
        class="form-userlogin choice-section min-height"
      >
        <ul class="d-flex p-0 mx-0 select-tab">
          <li
            @click="select_tab('register')"
            class="item"
            :class="[current_tab === 'register' ? 'active' : '']"
          >
            Creer un compte
          </li>
          <li
            @click="select_tab('login')"
            class="item"
            :class="[current_tab !== 'register' ? 'active' : '']"
          >
            Se connecter
          </li>
        </ul>
        <ValidationProvider
          v-slot="v"
          rules="required"
          class="d-block"
          name="Nom"
          ref="userlogin_name"
        >
          <div class="login-form">
            <label class="label d-flex align-items-center">
              <span>{{ field.label }}</span>
            </label>
          </div>
          <b-form-group :label="nomDisplay">
            <b-form-input
              v-model="userlogin.name.value"
              type="text"
              @input="input($event, 'name')"
            ></b-form-input>
          </b-form-group>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
        <!-- -->
        <b-form-group label="Prenom" v-if="current_tab === 'register'">
          <b-form-input
            v-model="userlogin.prenom.value"
            type="text"
            @input="input($event, 'prenom')"
          ></b-form-input>
        </b-form-group>
        <!-- -->
        <ValidationProvider
          v-slot="v"
          rules="required"
          class="d-block"
          name="Telephone"
          ref="userlogin_tel"
          v-if="current_tab === 'register'"
        >
          <b-form-group label="Telephone">
            <b-form-input
              v-model="userlogin.telephone.value"
              type="text"
              @input="input($event, 'telephone')"
            ></b-form-input>
          </b-form-group>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
        <!-- -->
        <ValidationProvider
          v-slot="v"
          rules="required|email"
          class="d-block"
          name="Email"
          ref="userlogin_email"
          v-if="current_tab === 'register'"
        >
          <b-form-group label="Email">
            <b-form-input
              v-model="userlogin.email.value"
              type="email"
              @input="input($event, 'email')"
            ></b-form-input>
          </b-form-group>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="v"
          rules="required"
          class="d-block"
          name="Password"
          ref="userlogin_password"
          v-if="current_tab === 'login'"
        >
          <b-form-group label="Mot de passe">
            <b-form-input
              v-model="userlogin.password.value"
              type="password"
              @input="input($event, 'password')"
            ></b-form-input>
          </b-form-group>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
        <b-row class="rs-login" v-if="current_tab === 'register'">
          <b-col
            cols="12"
            md="6"
            :class="mediaBtn ? '' : 'bg-light'"
            class="p-4 rs-login__btn rs-login__btn--face"
            @click="initFacebookLogin"
          >
            <b-icon icon="facebook " class="mr-3"> </b-icon>Créer avec
            facebook</b-col
          >
          <b-col
            cols="12"
            md="6"
            :class="mediaBtn ? '' : 'bg-light'"
            class="p-4 rs-login__btn rs-login__btn--google"
            @click="initGoogleLogin"
            ><b-icon icon="google" class="mr-3"></b-icon> Créer avec
            Google</b-col
          >
        </b-row>
        <b-row class="rs-login" v-if="current_tab === 'login'">
          <b-col
            cols="12"
            md="6"
            :class="mediaBtn ? '' : 'bg-light'"
            class="p-4 rs-login__btn rs-login__btn--face"
            @click="initFacebookLogin"
          >
            <b-icon icon="facebook " class="mr-3"> </b-icon>login via
            facebook</b-col
          >
          <b-col
            cols="12"
            md="6"
            class="p-4 rs-login__btn rs-login__btn--google"
            :class="mediaBtn ? '' : 'bg-light'"
            @click="initGoogleLogin"
            ><b-icon icon="google" class="mr-3"></b-icon>login via Google</b-col
          >
        </b-row>
      </form>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { ValidationProvider } from "vee-validate";
import "../EditsFields/vee-validate-custom.js";
import { loginfacebook, logingoogle } from "drupal-vuejs";

//import { drupalFormFields } from "drupal-vuejs";
import testrenjsx from "../testrenjsx.vue";
//import facebook from "drupal-vuejs/src/App/rx/facebook";
export default {
  name: "userloginV2",
  props: {
    field: {
      type: Object,
      require: true,
      validator: function (val) {
        return val.states !== undefined && val.states !== undefined
          ? true
          : false;
      },
    },
  },
  components: {
    ValidationProvider,
  },
  data() {
    return {
      tabIndex: 0,
      current_tab: "register",
      fieldsRegisterRender: [],
      modelsFields: {},
      testrenjsx: testrenjsx,
      mediaBtn: true,
      userFacebook: "",
      userGoogle: "",
    };
  },
  mounted() {
    // this.initValue();
    // this.setRefs();
    loginfacebook.appId = "215214177170922";
    loginfacebook.clien_id =
      "666466407349-oanmp950m4pp4arec1fcp8okvj6so4cj.apps.googleusercontent.com";
    this.loadScript();
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["userlogin", "mode"]),
    ...mapGetters(["uid"]),

    validationField() {
      return true;
    },
    nomDisplay() {
      if (this.current_tab === "register") {
        return "Nom";
      } else {
        return "Login ou email";
      }
    },
  },
  methods: {
    loadScript() {
      //var self = this
      this.$nextTick(() => {
        this.mediaBtn = false;
        loginfacebook.chargement();
        logingoogle.loadGapi();
        this.mediaBtn = true;
      });
    },
    final_click_h2() {
      alert("final_click_h2");
    },
    /*
    async getFiledRegisterUser() {
      const drupalFormField = new drupalFormFields("user", "user", this);
      this.fieldsRegisterRender = await drupalFormField.format();
      console.log("fieldsRegisterRender : ", this.fieldsRegisterRender);
      this.modelsFields = drupalFormField.modelsFields;
    },
    /**/
    handleOk(event) {
      event.preventDefault();
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      this.isOpen = !this.isOpen;
      // Push the name to submitted names
      this.$emit("input_to_add", this.fields);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    setRefs() {
      this.$nextTick(() => {
        //alert("Dd");
        this.userlogin.name.ref = this.$refs.userlogin_name;
        this.userlogin.telephone.ref = this.$refs.userlogin_tel;
        this.userlogin.email.ref = this.$refs.userlogin_email;
        this.userlogin.password.ref = this.$refs.userlogin_password;
      });
    },
    input(value, field) {
      this.field.value[field].value = value;
    },
    initValue() {
      if (!this.field.value) {
        this.$set(this.field, "value", {
          name: { value: "", label: "Nom" },
          prenom: { value: "", label: "Prenom" },
          telephone: { value: "", label: "Telephone" },
          email: { value: "", label: "Email" },
          password: { value: "", label: "Password" },
        });
      } else if (this.field.value.name) {
        this.userlogin.name.value = this.field.value.name.value;
        this.userlogin.prenom.value = this.field.value.prenom.value;
        this.userlogin.telephone.value = this.field.value.telephone.value;
        this.userlogin.email.value = this.field.value.email.value;
        this.userlogin.password.value = this.field.value.password.value;
      }
    },
    select_tab(val) {
      var self = this;
      this.current_tab = val;
      this.userlogin.tabIndex = val;
      self.setRefs();
    },
    /* facebook login methods */
    getFacebookLoginStatus() {
      loginfacebook.getUserStatus();
    },
    facebookStatusCallback(reponse) {
      console.log("status", reponse);
      console.log(
        reponse.status == "connected"
          ? "je suis connecté avec facebook"
          : "Pas connecté avec facebook"
      );
    },
    initFacebookLogin() {
      loginfacebook.openPopup();
    },
    /* google login methods */

    initGoogleLogin() {
      logingoogle.initLogin();
    },
  },
};
</script>
<style lang="scss">
@use "@stephane888/wbu-atomique/scss/defaut/model/custom_bp.scss" as *;

.rs-login {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  &__btn {
    cursor: pointer;
    text-align: center;
    margin: 5px 1px;
    color: white;
    transition: ease 0.2s;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-min("MD") {
      max-width: 220px;
    }
    &--face {
      background: #007bff;
    }
    &--google {
      background: #ff5353;
    }
  }
}

.form-userlogin legend {
  border: none;
}

.login-form {
  margin-bottom: 5rem;
}

.select-tab {
  list-style: none;
  margin-bottom: 5rem;

  .item {
    padding: 1rem 2rem;
    cursor: pointer;
    width: 50%;
    border-bottom: 1px solid #cce;
    text-align: center;
    background: rgb(240 248 255);
    &.active {
      border-bottom: 0px solid #cce;
      background: #007bff;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
