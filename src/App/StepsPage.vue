<template>
  <div>
    <b-container class="bv-example-row bg-light p-5" fluid="lg">
      <div>
        <h5 class="titre mb-3 shadow-sm p-2">
          Edition du formulaire: <span class="form-title">{{ form.name }}</span>
        </h5>
      </div>
      <b-row align-h="center">
        <transition name="fade">
          <b-col class="" cols="12" lg="9" v-if="formDatas && formDatas.info">
            <nav-line></nav-line>
            <pages :level="stepsIndex"></pages>
          </b-col>
        </transition>

        <b-col class="" v-if="$store.state.mode">
          <div>
            <b-button
              variant="light"
              class="shadow-sm"
              v-b-modal.modal-prevent-closing
            >
              Configuration
            </b-button>

            <b-button
              class="m-4"
              variant="info"
              size="sm"
              @click="clearFormDatas"
            >
              Add new Steps
            </b-button>
            <b-button
              class="m-4"
              variant="success"
              size="sm"
              @click="saveToLocal"
            >
              Save
            </b-button>
            <b-button
              class="m-4"
              variant="danger"
              size="sm"
              @click="clearStorage"
            >
              clear storage
            </b-button>

            <b-button class="m-4" size="sm" variant="light" @click="resetValue">
              Reset value
            </b-button>
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="Create your form page"
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
                    <b-form-group
                      label="Header title"
                      label-for="header-title-input"
                      invalid-feedback="the header title is required"
                    >
                      <b-form-input
                        id="header-title-input"
                        v-model="formDatas.info.headerTitle"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="8">
                    <b-form-group
                      label="Title"
                      label-for="name-input"
                      invalid-feedback="title is required"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="formDatas.info.title"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="8">
                    <hr />
                    <label for="">datas for datasBase</label>
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
                </b-row>
                <b-button size="sm" variant="light" class="shadow-sm">
                  Generate JSON
                </b-button>
                <b-button type="reset" class="mx-3" variant="danger" size="sm">
                  Reset
                </b-button>
                <hr class="my-3" />
                <b-row align-h="end">
                  <div class="mr-3">
                    <b-button type="submit" class="mr-2">cancel</b-button>
                    <b-button type="submit" variant="primary" class="mr-2"
                      >ok</b-button
                    >
                  </div></b-row
                >
              </form>
            </b-modal>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-row class="m-0" v-if="this.$store.state.mode">
      <b-col cols="4">
        <b-card class="mt-3 text-left d-none-0" header="Price">
          <pre class="text-left">{{ price }}</pre>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card class="mt-3 text-left" header="formDatas:">
          <pre class="text-left">{{ formDatas }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import utilities from "./Utilities";
import NavLine from "./NavLine.vue";
import { mapState, mapGetters } from "vuex";

import pages from "./pages.vue";
//import pages from "./pages2.vue";
export default {
  components: { pages, NavLine },
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
    };
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    this.$store.dispatch("setFormId", this.id);
  },
  computed: {
    ...mapState(["stepsIndex", "allStepsDatas", "fields", "price"]),
    ...mapGetters(["form", "formDatas"]),
    currentSteps() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      //console.log("lo", recap);
      if (recap != null && recap.length) {
        return recap[this.$store.state.stepsIndex];
      } else return this.formDatas;
    },
    stepsDatas() {
      var so = this.datasBd;
      if (this.datasBd.length) {
        console.log("object io", so[this.stepsId - 1]);
        return so[this.stepsId - 1];
      } else return "vide";
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
        this.$store.state.formDatas =
          this.allStepsDatas[this.$store.state.stepsIndex];
        // this.$store.state.fields = this.$store.state.formDatas.fields[0];
      } else if (recap != null && recap.length) {
        console.log("appppaaa", recap);
        this.$store.state.allStepsDatas = recap;
        this.$store.state.formDatas =
          this.allStepsDatas[this.$store.state.stepsIndex];
        //this.$store.state.fields = this.$store.state.formDatas.fields[0];
      } else if (this.stepsDatas == "vide") {
        alert(
          "Désolé nous n'avons pas pue accéder à la BD  et vous n'avez aucune données dans votre localStorage"
        );
      }
    },
    saveToLocal() {
      var self = this;
      var datas = this.form;
      utilities.saveSteps(datas).then((reponse) => {
        var forms = JSON.stringify(reponse[0].fields);
        localStorage.setItem("allo", JSON.stringify(forms));
        console.log("savesteps: ", reponse);

        axios
          .post(
            "http://lesroisdelareno.kksa" + "/query-ajax/insert-update",
            reponse
          )
          .then(function (response) {
            console.log("post response ", response);
            self.$store.dispatch("setFormId", self.id);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    },
    /**
     * @depreciated
     */
    loadStepsDatas() {
      //this.datasBdOrLocalStorage();
      var self = this;
      var datas = "select * from `appformmanager_fomrs`";
      axios
        .post("http://lesroisdelareno.kksa" + "/query-ajax/select", datas)
        .then(function (reponse) {
          console.log("get reponse: ", reponse);
          if (reponse.data) {
            self.datasBd = reponse.data;
            console.log("gee: ", self.datasBd);
            self.datasBdOrLocalStorage();
          }
        })
        .catch(function (error) {
          console.log("get error ", error);
        });
    },
    clearStorage() {
      localStorage.clear();
    },
    back() {
      this.$store.state.stepsIndex--;
      // this.$store.state.formDatas = this.currentSteps;
      // this.$store.state.fields = this.currentSteps.fields[0];
      //
      this.$store.state.formDatas =
        this.allStepsDatas[this.$store.state.stepsIndex];
      this.$store.state.fields = this.$store.state.formDatas.fields[0];
      console.log("back");
    },

    preview() {
      this.demo = !this.demo;
      console.log("prev", this.demo);
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
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
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

      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
<style lang="scss">
.form-title {
  font-size: 1.05rem;
  letter-spacing: 2px;
  margin-left: 10px;
  font-weight: 600;
}
</style>
