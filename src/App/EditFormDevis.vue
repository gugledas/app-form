<template>
  <div>
    <b-row align-h="center">
      <b-col class="" cols="12" lg="12" v-if="formDatas && formDatas.info">
        <div>
          <title-bar
            :conf="{ col: true, text: 'Configuration du formulaire' }"
            :id="id"
          ></title-bar>
          <nav-line :taille="id"></nav-line>
          <!-- loarder -->
          <loaderIcon :busy="isComplete"></loaderIcon>
          <!-- Gestion d'une etape -->
          <FormStep v-if="!isComplete"></FormStep>
        </div>
      </b-col>
      <b-col class="" cols="12" lg="2" v-if="$store.state.mode">
        <div class="block-button">
          <b-button
            variant="light"
            squared
            class="shadow-md d-block w-100"
            v-b-modal.modal-prevent-closing
          >
            Configuration
          </b-button>

          <b-button
            squared
            variant="light"
            @click="clearFormDatas"
            class="shadow-md d-block w-100"
          >
            Ajouter une etape
          </b-button>
          <b-button
            squared
            variant="light"
            v-b-modal.re-order-stepes
            class="shadow-md d-block w-100"
          >
            Re-ordonner les etapes
          </b-button>
          <b-button
            squared
            variant="secondary"
            @click="resetValue"
            class="shadow-md d-block w-100"
          >
            Reset value
          </b-button>
          <b-button
            squared
            variant="success"
            @click="saveToLocal"
            class="shadow-md d-block w-100"
          >
            Enregistrer
          </b-button>
          <b-button
            squared
            variant="dark"
            @click="exportJson"
            class="shadow-md d-block w-100"
          >
            Export to json
          </b-button>

          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Edition du formulaire"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            hide-footer
          >
            <form
              ref="form"
              @submit="handleSubmit"
              @reset="resetModal"
              v-if="formDatas && formDatas.info"
            >
              <b-row>
                <b-col cols="8">
                  <b-form-group label="name" label-for="name-input">
                    <b-form-input
                      id="db-input"
                      v-model="form.name"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group label="Id" label-for="description-input">
                    <b-form-input
                      id="desc-input-id"
                      v-model="form.id"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="8">
                  <b-form-group
                    label="Description"
                    label-for="description-input"
                  >
                    <b-form-textarea
                      id="desc-input"
                      v-model="form.description"
                      required
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group label="image" label-for="description-input">
                    <UploadImage :field="form"></UploadImage>
                  </b-form-group>
                </b-col>
              </b-row>

              <hr class="my-3" />
              <b-row align-h="end">
                <div class="mr-3">
                  <b-button class="mr-2"> export </b-button>
                  <b-button type="submit" variant="primary" class="mr-2">
                    Mise à jour
                  </b-button>
                </div>
              </b-row>
            </form>
          </b-modal>
        </div>
      </b-col>
    </b-row>

    <!-- -->
    <reOrderStepes />
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import config from "./config/config.js";
//import utilities from "./Utilities";
import NavLine from "./NavLine.vue";
import { mapState, mapGetters } from "vuex";

import FormStep from "./FormStep.vue";
import reOrderStepes from "./ConfigsForms/reOrderStepes.vue";
import loaderIcon from "./components/loaderIcon.vue";
export default {
  components: {
    FormStep,
    NavLine,
    reOrderStepes,
    TitleBar,
    loaderIcon,
    UploadImage: () => import("./EditsFields/UploadImage.vue"),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {
      datasBd: [],
      stepsId: 1,
      demo: true,
      title: "",
      datasBase: {
        description: "",
        id: null,
        forms: "",
        name: "",
      },
      busy: false,
    };
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    this.$store.dispatch("setFormId", this.id);
    this.$store.dispatch("loadFormsDatas");
    this.busy = true;
    /**
     * Cette function charge progressivement les données.
     */
    this.$store.dispatch("loadStepsDatas", { formId: this.id }).then(() => {
      this.busy = false;
    });
  },
  computed: {
    ...mapState([
      "stepsIndex",
      "allStepsDatas",
      "fields",
      "price",
      "mode",
      "priceAide",
      "items",
      "form",
    ]),
    ...mapGetters(["formDatas"]),
    currentSteps() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      //console.log("lo", recap);
      if (recap != null && recap.length) {
        return recap[this.stepsIndex];
      } else return this.formDatas;
    },
    stepsDatas() {
      var so = this.datasBd;
      if (this.datasBd.length) {
        console.log("object io", so[this.stepsId - 1]);
        return so[this.stepsId - 1];
      } else return "vide";
    },
    /**
     * La fonction qui charge les données(loadStepsDatas) le fait de maniere progressive, ainsi il faut verifier s'il ya deja les données.
     * s'il ya deja des champs à afficher,enleve le loading, ou si on a rien trouvé (busy est revenu à false;)
     */
    isComplete() {
      if ((this.formDatas && this.formDatas.fields.length) || !this.busy) {
        return false;
      } else return true;
    },
  },
  methods: {
    deleteSteps(datas) {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);
      console.log("de", datas);
      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
    },
    datasBdOrLocalStorage() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      console.log("loaaaa", recap);
      if (this.stepsDatas != "vide") {
        this.datasBase = this.stepsDatas;
        console.log("aaa", this.datasBase);
        var rep = JSON.parse(this.datasBase.forms);
        this.$store.state.allStepsDatas = rep;
        this.$store.state.formDatas = this.allStepsDatas[this.stepsIndex];
      } else if (recap != null && recap.length) {
        console.log("appppaaa", recap);
        this.$store.state.allStepsDatas = recap;
        this.$store.state.formDatas = this.allStepsDatas[this.stepsIndex];
      } else if (this.stepsDatas == "vide") {
        alert(
          "Désolé nous n'avons pas pue accéder à la BD  et vous n'avez aucune données dans votre localStorage"
        );
      }
    },
    saveToLocal() {
      this.busy = true;
      config.prepareDatasToSave(this.form).then((val) => {
        config
          .saveForm(val, this.mode)
          .then(() => {
            this.busy = false;
          })
          .catch(() => {
            this.busy = false;
          });
      });
    },
    exportJson() {
      var nameFile = window
        .prompt("Veuillez renseigner le nom du fichier", "test")
        .toLowerCase();
      // Console.log("name", nameFile + ".json");
      const data = JSON.stringify(this.form);
      const blob = new Blob([data], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = nameFile + ".json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    },

    clearFormDatas() {
      var all = {
        info: {
          headerTitle: "",
          title: "",
          name: "",
        },
        fields: [],
      };
      this.form.forms.push(all);
      this.$store.state.stepsIndex = this.form.forms.length - 1;

      //this.$store.dispatch("resetFormDatas");
    },
    resetValue() {
      var TypeString = [
        "radio",
        "text",
        "select",
        "number",
        "radiodesc",
        "codepostal",
      ];
      var TypeArray = ["checkbox"];
      for (const i in this.formDatas.fields) {
        const field = this.formDatas.fields[i];
        if (TypeString.includes(field.type)) {
          field.value = null;
        } else if (TypeArray.includes(field.type)) {
          field.value = [];
        } else if (field.type === "userlogin") {
          field.value = null;
        }
      }
    },
    resetModal() {
      //   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit(event) {
      event.preventDefault();
      // Exit when the form isn't valid
      this.demo = true;
      this.saveToLocal();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style lang="scss">
.form-title {
  letter-spacing: 2px;
  margin-left: 10px;
  font-weight: 600;
}
.block-button {
  display: block;
  button {
    margin: 5px;
  }
}
</style>
