<template>
  <transition v-show="validationField" name="fade">
    <b-row>
      <b-col cols="12" class="text-left"
        ><p class="page-label">{{ field.label }}</p></b-col
      >
      <ValidationProvider
        v-slot="v"
        :rules="field.require"
        class="col-12 p-0"
        :name="field.name"
      >
        <b-form-checkbox-group
          v-model="selected"
          :name="field.name"
          @change="changeValue"
        >
          <b-col cols="12" v-for="(item, i) in field.options" :key="i">
            <div class="input-list">
              <b-col
                sm="11"
                class="input-list__label d-flex align-items-start flex-column"
              >
                <label class="m-0 w-100" :for="`checkbox-a${field.name}${i}`">{{
                  item.text
                }}</label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-checkbox
                  :id="`checkbox-a${field.name}${i}`"
                  size="lg"
                  :value="item.value"
                ></b-form-checkbox>
              </b-col>
            </div>
          </b-col>
        </b-form-checkbox-group>
        <div class="text-danger">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
    </b-row>
  </transition>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import Validation from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
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
      selected: [],
    };
  },
  mounted() {
    this.retrieveValue();
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate"]),
    validationField() {
      if (this.field.states.length) {
        var status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status !== undefined) return status;
      }
      return true;
    },
  },
  methods: {
    retrieveValue() {
      var type_data = typeof this.field.value;
      if (
        type_data === "object" &&
        this.field.value &&
        this.field.value.length !== undefined
      ) {
        this.selected = this.field.value;
      } else if (this.field.value) {
        this.selected.push(this.field.value);
      }
    },
    changeValue(val) {
      this.field.value = val;
    },
  },
};
</script>

<style lang="scss"></style>
