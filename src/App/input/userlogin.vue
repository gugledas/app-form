<template lang="html">
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <form
        ref="form_userlogin"
        @submit.stop.prevent="handleSubmit"
        class="form-userlogin choice-section min-height"
      >
        <ValidationProvider
          v-slot="v"
          rules="required"
          class="d-block"
          name="Nom"
          ref="userlogin_name"
        >
          <b-form-group label="Nom">
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
        <b-form-group label="Prenom">
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
        <!-- -->
      </form>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import "../EditsFields/vee-validate-custom.js";
export default {
  name: "userlogin",
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
      //
    };
  },
  mounted() {
    this.setRefs();
    this.initValue();
  },
  watch: {
    //
  },
  computed: {
    ...mapState(["userlogin", "mode"]),
    MajRefs() {
      if (this.userlogin) {
        this.setRefs();
        return true;
      }
      return false;
    },
  },
  methods: {
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
      this.userlogin.name.ref = this.$refs.userlogin_name;
      this.userlogin.telephone.ref = this.$refs.userlogin_tel;
      this.userlogin.email.ref = this.$refs.userlogin_email;
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
        });
      } else if (this.field.value.name) {
        this.userlogin.name.value = this.field.value.name.value;
        this.userlogin.prenom.value = this.field.value.prenom.value;
        this.userlogin.telephone.value = this.field.value.telephone.value;
        this.userlogin.email.value = this.field.value.email.value;
      }
    },
  },
};
</script>
<style lang="scss">
.form-userlogin legend {
  border: none;
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
