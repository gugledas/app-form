<template>
  <b-row>
    <b-col cols="12" class="text-left"
      ><p class="page-label">{{ field.label }}</p></b-col
    ><ValidationProvider v-slot="v" :rules="field.require" class="col-12 p-0">
      <b-col cols="12" v-for="(item, i) in field.options" :key="i">
        <div class="input-list">
          <b-col sm="11" class="input-list__label">
            <label class="m-0">{{ item.text }}</label>
          </b-col>
          <b-col class="input-list__input">
            <b-form-radio
              name="some-radios"
              v-model="field.value"
              size="lg"
              :id="`input-radio-a${i}`"
              :value="item.value"
            ></b-form-radio>
          </b-col>
        </div>
      </b-col>
      <div class="text-danger">
        <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
          {{ error }}
        </small>
      </div>
    </ValidationProvider>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
//
import { ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
//
// No message specified.
extend("email", email);

// Override the default message.
extend("required", {
  ...required,
  message: "Ce champs est requis",
});

export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    ValidationProvider,
  },
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
  },
  methods: {},
};
</script>

<style lang="scss"></style>
