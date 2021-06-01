<template>
  <div>
    <b-col class="choice-section">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <!-- fields value: {{ formDatas.fields[id].value }}-- fields selected:{{
          formDatas.fields[id].selected
        }} -->
        <!-- affiche sur le cas du type codepostal -->
        <b-row align-h="center" v-if="type == 'codepostal'">
          <b-col class="autocomplete">
            <autocomplete :value="formDatas.fields[id]"></autocomplete>
          </b-col>
        </b-row>
        <!-- affiche pour le cas du type checkbox image -->
        <b-row align-h="center" class="m-0" v-if="type == 'checkboximg'">
          <div
            v-for="(img, i) in formDatas.fields[id].options"
            :key="i"
            @click="getImage(i)"
          >
            <imageCheck
              :description="img.description"
              :isActive="img.isActive"
            />
          </div>
        </b-row>

        <!-- affiche sur le cas du type number -->
        <b-row align-h="center" v-if="type == 'number'">
          <label-row :options="formDatas.fields[id].options"></label-row>
        </b-row>

        <!-- affiche sur le cas du type markup label up -->
        <b-row align-h="center" v-if="type == 'markupnumberrow'"
          ><number-markup
            :options="formDatas.fields[id].options"
          ></number-markup
        ></b-row>

        <!-- affiche sur le cas du type markup label up -->
        <b-row align-h="center" v-if="type == 'markupnumber'"
          ><number-markup
            type="up"
            :options="formDatas.fields[id].options"
          ></number-markup
        ></b-row>
        <!-- affiche sur le cas du type increment number -->
        <b-row align-h="center" v-if="type == 'increment'">
          <increment-number :id="id"></increment-number>
        </b-row>

        <!-- affiche pour le cas du type radio -->
        <b-row v-if="type == 'radio'">
          <b-col
            cols="12"
            v-for="(item, i) in formDatas.fields[id].options"
            :key="i"
          >
            <div class="input-list">
              <b-col sm="11" class="input-list__label">
                <label class="m-0">{{ item.label }}</label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-radio
                  name="some-radios"
                  v-model="formDatas.fields[id].value"
                  size="lg"
                  :id="`input-radio-a${i}`"
                  :value="item.value"
                ></b-form-radio>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- affiche pour le cas du type input -->
        <b-row v-if="type == 'input'">
          <InputText :field="formDatas.fields[id]"></InputText>
        </b-row>

        <!-- affiche pour le cas du type select -->
        <b-row v-if="type == 'select'">
          <b-col cols="12">
            <div class="row-input">
              <div class="row-input__row">
                <b-col sm="6">
                  <label class="label">{{ formDatas.fields[id].name }} </label>
                </b-col>
                <b-col sm="6" class="input-field">
                  <b-form-select
                    v-model="formDatas.fields[id].value"
                    class="input-field__input"
                    :options="formDatas.fields[id].options"
                  ></b-form-select>
                </b-col>
              </div>
            </div>
          </b-col>
        </b-row>

        <!-- affiche pour le cas du type checkbox -->
        <b-row v-if="type == 'checkbox'">
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
                <label class="m-0">{{ item.label }}</label>
              </b-col>
              <b-col class="input-list__input">
                <b-form-checkbox
                  name="some-radios"
                  v-model="formDatas.fields[id].selected"
                  size="lg"
                  :value="item.value"
                ></b-form-checkbox>
              </b-col>
            </div>
          </b-col>
        </b-row>

        <!-- affiche pour le cas du type radio with description -->
        <b-row v-if="type == 'radiodesc'">
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
                <label class="m-0">{{ item.label }}</label>
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
      </form>

      <b-row align-h="center" v-if="this.$store.state.mode">
        <b-col sm="2" class="my-3"
          ><b-button
            class="mx-3"
            variant="success"
            size="sm"
            @click="editFormField"
            >edit</b-button
          ></b-col
        ><b-col sm="2" class="my-3"
          ><b-button
            class="mx-3"
            variant="danger"
            size="sm"
            @click="deleteField"
            >delete</b-button
          ></b-col
        >
      </b-row>
    </b-col>

    <add-form-field
      :isOpen="isOpen"
      ref="editFormField"
      :fields="fields"
    ></add-form-field>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LabelRow from "./input/LabelRow.vue";
import NumberMarkup from "./NumberMarkup.vue";
import AddFormField from "./AddFormField.vue";
import autocomplete from "./Autocomplete";
export default {
  components: {
    ImageCheck: () => import("./ImageCheck.vue"),
    IncrementNumber: () => import("./IncrementNumber.vue"),
    NumberMarkup,
    LabelRow,
    autocomplete,
    AddFormField,
    InputText: () => import("./DisplaysFields/InputText.vue"),
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => {
    return {
      isOpen: false,
      typeFieldSelected: null,
      option: {},
      fields: {
        type: "",
        title: "",
        label: "",
        name: "",
        value: null,
        selected: [],
        imgUrl: "",
        require: true,
        options: [],
      },
      //datas to check form validity
      labelState: null,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["formDatas"]),
  },
  methods: {
    getImage(il) {
      var le = this.formDatas.fields[this.id].options;
      console.log("le", le);
      for (var i = 0; i < le.length; i++) {
        if (i == il) {
          le[i].isActive = !le[i].isActive;
          this.formDatas.fields[this.id].value = le[i].value;
        } else {
          le[i].isActive = false;
        }
      }
    },
    editFormField() {
      this.$refs.editFormField.openAddFormFieldPopUp();
      this.fields = this.formDatas.fields[this.id];
    },
    deleteField() {
      var all = this.formDatas.fields;
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === this.id) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
      //this.fields = this.formDatas.fields[this.id];
    },
    resetModal() {
      //this.type = null;
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
  },
};
</script>
<style lang="scss">
.row-input {
  margin-bottom: 1rem;
  &__row {
    display: flex;
    align-items: center;
  }
}
</style>
