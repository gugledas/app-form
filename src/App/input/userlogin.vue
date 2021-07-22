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
      </form>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { ValidationProvider } from "vee-validate";
import "../EditsFields/vee-validate-custom.js";
//import { drupalFormFields } from "drupal-vuejs";
import testrenjsx from "../testrenjsx.vue";
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
    };
  },
  mounted() {
    this.initValue();
    this.setRefs();
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
  },
};
</script>
<style lang="scss">
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
