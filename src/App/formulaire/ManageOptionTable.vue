<template>
  <b-col sm="12">
    <b-card no-body border-0 class="mb-4">
      <b-card-body>
        <b-row>
          <!-- form option -->
          <b-col cols="12">
            <h5 class="mb-3">Gerer les valeurs</h5>
            <b-form @submit="onPush" @reset="onReset">
              <b-form-group
                id="option-label"
                label="Option label"
                label-for="input-option-label"
              >
                <b-input-group>
                  <b-form-input
                    v-model="inputOptions.text"
                    id="option-label"
                    placeholder="Entrer le label"
                    required
                    @input="automaticValue"
                  ></b-form-input>
                  <b-form-input
                    v-model="inputOptions.value"
                    id="option-val"
                    placeholder="Enter value of option"
                    required
                    :readonly="readonlyValue"
                    @dblclick="toogleReadOnlyValue"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Coût €">
                <b-form-input
                  v-model="inputOptions.cout"
                  placeholder="Entrer le coût"
                  type="number"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Description" v-if="desc">
                <b-form-input
                  v-model="inputOptions.description"
                  placeholder="Entrer la description"
                  type="text"
                ></b-form-input>
              </b-form-group>
              <slot name="groupfields" :input_options="inputOptions"></slot>

              <b-button type="submit" variant="primary" size="sm" class="mr-2">
                Ajouter
              </b-button>
              <b-button type="reset" variant="danger" size="sm">
                Re-initialiser
              </b-button>
            </b-form>
            <div class="bg-light p-1"></div>
            <!--  -->
          </b-col>
          <b-col v-if="field.options.length" sm="12">
            <b-card no-body class="mb-1" v-if="true">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-option variant="info">
                  Voir les valeurs
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-option"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body class="p-2">
                  <option-table :field="field" :desc="desc"></option-table>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
import { snakeCase } from "snake-case";
import OptionTable from "./OptionTable.vue";
export default {
  name: "ManageOptionTable",
  components: {
    OptionTable,
  },
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      readonlyValue: true,
      readonly: true,
      //Object of type checkbox
      inputOptions: {
        text: "",
        value: "",
      },
    };
  },
  computed: {
    desc() {
      if (this.field.type === "radiodesc") {
        return true;
      } else return false;
    },
  },
  methods: {
    toogleReadOnlyValue() {
      if (this.readonlyValue) this.readonlyValue = false;
      else this.readonlyValue = true;
    },
    automaticValue() {
      if (this.readonlyValue && this.inputOptions.text.length <= 50) {
        this.inputOptions.value = snakeCase(this.inputOptions.text);
      }
    },

    input() {
      if (this.readonly && this.field.name.length <= 32) {
        this.field.name = snakeCase(this.field.label);
      }
    },
    toogleReadOnly() {
      if (this.readonly) this.readonly = false;
      else this.readonly = true;
    },
    //
    deleteOption(index) {
      var all = this.field.options;
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
        }
      }
    },
    //logic for field options
    onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions(event) {
      var info = {};
      for (let i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }
      this.field.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
        value: "",
      };
    },
    onReset(event) {
      event.preventDefault;

      // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
