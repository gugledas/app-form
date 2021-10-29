<template>
  <div>
    <hr />
    <!-- if is type Checkbox -->
    <form-checkbox v-if="type == 'checkbox'" :field="field"></form-checkbox>
    <!-- if is type input -->

    <InputText
      :field="field"
      v-if="type == 'text' || type == 'number'"
    ></InputText>
    <InputFiles :field="field" v-if="type == 'file'"></InputFiles>
    <inputRecap :field="field" v-if="type == 'recapitulatif'"></inputRecap>
    <inputUserLogin :field="field" v-if="type == 'userlogin'"></inputUserLogin>
    <inputAideFinanciere
      :field="field"
      v-if="type == 'input-aide-financiere'"
    ></inputAideFinanciere>

    <!-- if is type select -->
    <form-select v-if="type == 'select'" :field="field"></form-select>

    <!-- if is type checbox with description -->
    <form-radio-desc
      v-if="type == 'radiodesc'"
      :field="field"
    ></form-radio-desc>

    <!-- if is type radios -->

    <form-radio v-if="type == 'radio'" :field="field"></form-radio>

    <!-- if is type codepostal -->

    <form-autocomplete
      v-if="type == 'codepostal'"
      :field="field"
    ></form-autocomplete>
    <!-- if is type increment -->

    <form-spinner v-if="type == 'increment'" :field="field"></form-spinner>

    <!-- if is type markup title && markup Image -->

    <form-markup
      v-if="type == 'markuptitle' || type == 'markupimage'"
      :field="field"
    ></form-markup>

    <!-- if is type checbox images -->

    <form-check-img v-if="type == 'checkboximg'" :field="field">
    </form-check-img>

    <!-- if is  Number label up  and Number label Inline-->

    <form-number-up v-if="type == 'numberup'" :field="field"></form-number-up>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormRadioDesc from "./formulaire/FormRadioDesc.vue";
import FormSelect from "./formulaire/FormSelect.vue";
import FormRadio from "./formulaire/FormRadio";
import FormCheckImg from "./formulaire/FormCheckImg.vue";
import FormNumberUp from "./formulaire/FormNumberUp.vue";
import Utilities from "./Utilities.js";
export default {
  components: {
    FormCheckbox: () => import("./formulaire/FormCheckbox.vue"),
    FormSelect,
    FormRadioDesc,
    FormRadio,
    FormCheckImg,
    FormNumberUp,
    InputText: () => import("./EditsFields/InputText.vue"),
    InputFiles: () => import("./EditsFields/InputFiles.vue"),
    FormSpinner: () => import("./formulaire/FormSpinner.vue"),
    FormAutocomplete: () => import("./formulaire/FormAutocomplete.vue"),
    FormMarkup: () => import("./formulaire/FormMarkup.vue"),
    inputRecap: () => import("./EditsFields/inputRecap.vue"),
    inputUserLogin: () => import("./EditsFields/inputUserLogin.vue"),
    inputAideFinanciere: () => import("./EditsFields/inputAideFinanciere.vue"),
  },
  props: {
    type: {
      type: String,
      default: null,
    },
    field: {
      type: Object,
      default: function () {
        return Utilities.field();
      },
    },
  },
  computed: {
    ...mapGetters(["formDatas"]),
  },
};
</script>
<style lang="scss">
legend {
  font-weight: 600;
}
.form-control,
.custom-select {
  font-weight: 300;
}
</style>
