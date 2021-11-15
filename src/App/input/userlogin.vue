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
            Creer un compte ...
          </li>
          <li
            @click="select_tab('login')"
            class="item"
            :class="[current_tab !== 'register' ? 'active' : '']"
          >
            Se connecter
          </li>
        </ul>

        <b-row class="rs-login">
          <b-col cols="12" md="12">
            <loginGoogle
              idHtml="app-form-login"
              class="mb-3"
              @ev_logingoogle="ev_logingoogle"
              :returnUidInfo="true"
            ></loginGoogle>
          </b-col>
          <b-col
            cols="12"
            md="12"
            :class="mediaBtn ? '' : 'bg-light'"
            class="p-3 rs-login__btn rs-login__btn--face border"
            @click="initFacebookLogin"
          >
            <b-icon icon="facebook " class="mr-3"> </b-icon> Se connecter avec
            facebook
          </b-col>
        </b-row>

        <div class="text-center sepation-login">
          <strong class="sepation-login-text">Ou</strong>
        </div>

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
      </form>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { ValidationProvider } from "vee-validate";
import "../EditsFields/vee-validate-custom.js";
import { loginfacebook, loginGoogle } from "drupal-vuejs";
import config from "../config/config.js";

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
    loginGoogle,
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
    this.TryToLoginWithFacebook();
    loginfacebook.appId = 889256191665205;
    this.loadScript();
    setTimeout(() => {
      this.setRefs();
    }, 800);
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
        this.mediaBtn = true;
      });
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook() {
      document.addEventListener(
        "wbu-fb-status-change",
        () => {
          this.isBusy = true;
          config
            .post("/login-rx-vuejs/facebook-check", loginfacebook.user)
            .then((resp) => {
              if (
                resp.reponse &&
                resp.reponse.config.url !== resp.reponse.request.responseURL
              ) {
                //on connecte l'utilisateur:
                this.$store.dispatch("getCurrentUser").then(() => {
                  //save form
                  setTimeout(() => {
                    this.$store.dispatch("saveDatasUser");
                  }, 600);
                });
              }
              // il faut s'assurer que les données sont ok.
              else if (resp.data) {
                if (resp.data.createuser) {
                  this.stepe = "final-fb-register";
                }
              }
            });
        },
        false
      );
    },

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
      this.current_tab = val;
      this.userlogin.tabIndex = val;
      this.setRefs();
    },
    /* facebook login methods */
    getFacebookLoginStatus() {
      loginfacebook.getUserStatus();
    },
    initFacebookLogin() {
      loginfacebook.openPopup();
    },
    ev_logingoogle(user) {
      this.$store.dispatch("setCurrentUser", user);
    },
  },
};
</script>
<style lang="scss">
@use "@stephane888/wbu-atomique/scss/defaut/model/custom_bp.scss" as *;

.sepation-login {
  margin-top: 4rem;
  margin-bottom: 2rem;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    bottom: auto;
    left: 0;
    right: 0;
    border: none;
    border-bottom: 1px solid #ccc;
  }
  &-text {
    display: inline-block;
    padding: 0 1rem;
    background: #fff;
    position: relative;
    z-index: 2;
  }
}
.rs-login {
  font-size: 14px;
  .buttton-google-aouth {
    * {
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
      color: #4c4c4c;
    }
  }
  &__btn {
    cursor: pointer;
    text-align: center;
    margin: 5px 1px;
    transition: ease 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    font-size: inherit;
    @include media-min("MD") {
      max-width: 300px;
    }
    &:hover {
      border-color: #d2e3fc;
      background: rgba(66, 133, 244, 0.04);
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
