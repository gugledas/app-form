<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="choice-section min-height">
        <ValidationProvider
          v-slot="v"
          :rules="field.require"
          class="col-12 p-0"
          :name="field.name"
        >
          <b-row>
            <b-col
              cols="12"
              class="text-left"
              v-if="!field.label_hidden === true"
            >
              <p class="page-label">{{ field.label }}</p>
            </b-col>
            <b-col cols="12" v-for="(item, i) in field.options" :key="i">
              <div class="input-list">
                <b-col
                  sm="11"
                  class="input-list__label d-flex align-items-start flex-column"
                >
                  <label class="m-0 w-100" :for="`input-horizni-${i}`">{{
                    item.text
                  }}</label>
                  <small class="input-list__description">{{
                    item.description
                  }}</small>
                </b-col>
                <b-col class="input-list__input">
                  <b-form-radio
                    name="some-radios"
                    v-model="field.value"
                    size="lg"
                    :id="`input-horizni-${i}`"
                    :value="item.value"
                  ></b-form-radio>
                </b-col>
              </div>
            </b-col>
          </b-row>
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
      </div>
      <!--
      <b-row>
        <b-col cols="12" class="text-left"
          ><p class="page-label">{{ formDatas.fields[id].label }}</p></b-col
        >
        <b-col
          cols="12"
          v-for="(item, i) in formDatas.fields[id].options"
          :key="i"
        >
          <div class="input-list">
            <b-col
              sm="11"
              class="input-list__label d-flex align-items-start flex-column"
            >
              <label class="m-0 w-100" :for="`input-horizni-${i}`">{{
                item.text
              }}</label>
              <small class="input-list__description">{{
                item.description
              }}</small>
            </b-col>
            <b-col class="input-list__input">
              <b-form-radio
                name="some-radios"
                v-model="formDatas.fields[id].value"
                size="lg"
                :id="`input-horizni-${i}`"
                :value="item.value"
              ></b-form-radio>
            </b-col>
          </div>
        </b-col>
      </b-row>
    -->
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
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
      value: 1,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
    ...mapState(["formDatasValidate", "mode"]),
    validationField() {
      var status = true;
      if (this.field.states.length) {
        status = Validation.computedValidation(
          this.formDatas,
          this.field,
          this.formDatasValidate
        );
        if (status === undefined) status = false;
        this.setStatus(status);
        return status;
      } else {
        this.setStatus(status);
        return status;
      }
    },
  },
  methods: {
    setStatus(status) {
      this.$set(this.field, "status", status);
    },
  },
};
</script>

<style lang="scss"></style>
