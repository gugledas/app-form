<template>
  <div :class="!validationField && mode ? 'mb-5' : ''">
    <transition v-if="validationField" name="fade">
      <div class="row-content choice-section min-height">
        <b-col sm="6 p-0">
          <label class="label">{{ field.label }} </label>
        </b-col>
        <ValidationProvider
          v-slot="v"
          :rules="field.require"
          class="d-block"
          :name="field.name"
        >
          <b-row class="w-100">
            <b-col
              sm="6"
              v-for="(img, i) in field.options"
              :key="i"
              @click="getImage(i)"
            >
              <div class="choice-button">
                <div
                  class="choice-button__img"
                  :class="
                    img.isActive
                      ? 'choice-button__img--active'
                      : 'choice-button__img--normal'
                  "
                >
                  <img :srcset="baseUrl + img.img" />
                </div>
                <div class="ChoiceButton_label mb-2">
                  <span>{{ img.text }}</span>
                </div>
                <div class="ChoiceButton_label mb-2">
                  <span>{{ img.description }}</span>
                </div>
              </div>
            </b-col>
          </b-row>
          <!--error-->
          <div class="text-danger">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { ValidationProvider } from "vee-validate";
import { validationRessource as Validation } from "../config/validation.js";
import "../EditsFields/vee-validate-custom.js";
import config from "../config/config.js";
export default {
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
  data: () => {
    return { formValues: {}, baseUrl: config.baseURl };
  },
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
    getImage(il) {
      var le = this.field.options;
      console.log("le", il);
      for (var i = 0; i < le.length; i++) {
        if (i == il) {
          le[i].isActive = !le[i].isActive;
          if (le[i].isActive) this.field.value = le[i].value;
          else this.field.value = "";
        } else {
          le[i].isActive = false;
        }
      }
      /**/
    },
  },
};
</script>

<style lang="scss">
$border_color: #3687c6;
.choice-button {
  max-width: 150px;
  //background: rgb(163, 163, 228);
  margin: 10px;
  text-align: center;
  &__img {
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 22px;
    }

    &--normal {
      transition: ease-in-out 0.2s;
      &:hover {
        background: rgba(174, 172, 169, 0.659);
        opacity: 0.5;
      }
    }
    &--active {
      border-radius: 25px;
      border: 3px solid $border_color;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 133px;
        left: 63px;
        color: white;
        height: 27px;
        width: 27px;
        border-radius: 50%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 12px;
        background-color: $border_color;
        background-image: url("../../../public/check-solid.svg");
      }
    }
  }
}
</style>
