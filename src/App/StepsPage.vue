<template>
  <div>
    <b-container class="bv-example-row" fluid="lg">
      <div class="d-inline-flex mx-4 p-3">
        <b-form-group label="steps Id" label-for="name-input">
          <b-form-input
            id="name-input"
            v-model="stepsId"
            type="number"
            min="1"
            :max="datasBd.length"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <b-row class="">
        <transition name="fade">
          <b-col class="full-block shadow" cols="12" lg="10" v-if="demo">
            <!-- stepsIndex: {{ this.$store.state.stepsIndex }}--selected:
            {{ fields.selected }} -->
            <pages :level="this.$store.state.stepsIndex"></pages>
          </b-col>
        </transition>

        <b-col class="">
          <div>
            <b-button
              variant="light"
              class="shadow-sm"
              v-b-modal.modal-prevent-closing
              >configuration</b-button
            >
            <b-button class="m-4" size="sm" @click="newPage">New page</b-button>
            <b-button
              class="m-4"
              variant="success"
              size="sm"
              @click="saveToLocal"
              >Save</b-button
            >
            <b-button
              class="m-4"
              variant="danger"
              size="sm"
              @click="clearStorage"
              > clear storage </b-button
            >
            <b-button class="m-4" variant="info" size="sm" @click="preview"
              >Preview</b-button
            >
            <b-button class="m-4" size="sm" variant="light" @click="resetValue"
              >Reset value</b-button
            >
            <b-modal
              id="modal-prevent-closing"
              ref="modal"
              title="Create your form page"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              hide-footer
            >
              <form ref="form" @submit="handleSubmit" @reset="resetModal">
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
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button size="sm" variant="light" class="shadow-sm"
                  >Generate JSON</b-button
                ><b-button type="reset" class="mx-3" variant="danger" size="sm"
                  >Reset</b-button
                >
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

    <b-row class="m-0"
      ><b-col cols="4"
        ><b-card class="mt-3" header="Form Data Result">
          <pre class="m-0"></pre>
          <p>allStepsDatas</p>
          <pre>{{ allStepsDatas }}</pre>
        </b-card></b-col
      ><b-col cols="4"
        ><b-card class="mt-3" header="Form all steps">
          <pre class="m-0"></pre>
          <p>formDatas:.</p>
          <pre>{{ formDatas }}</pre>
        </b-card></b-col
      >
      <b-col cols="4"
        ><b-card class="mt-3" header="Form all steps">
          <pre class="m-0"></pre>
          <p>fields:.</p>
          <pre>{{ fields }}</pre>
        </b-card></b-col
      >
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import utilities from "./Utilities";
import { mapState, mapGetters } from "vuex";

import pages from "./pages.vue";
export default {
  components: { pages },
  props: {},
  data: () => {
    return {
      datasBd: [],
      stepsId: 1,
      demo: false,
      title: "",
    };
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    this.loadStepsDatas();
  },
  computed: {
    ...mapState([
      "year",
      "month",
      "day",
      "formDatas",
      "allStepsDatas",
      "fields",
    ]),
    ...mapGetters(["alla"]),
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
        return JSON.parse(so[this.stepsId - 1].forms);
      } else return [];
    },
  },
  methods: {
    datasBdOrLocalStorage() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      console.log("loaaaa", recap);
      if (this.stepsDatas.length) {
        this.$store.state.allStepsDatas = this.stepsDatas;
        this.$store.state.formDatas =
          this.allStepsDatas[this.$store.state.stepsIndex];
        this.$store.state.fields = this.$store.state.formDatas.fields[0];
      } else if (recap != null && recap.length) {
        this.$store.state.allStepsDatas = recap;
        this.$store.state.formDatas =
          this.allStepsDatas[this.$store.state.stepsIndex];
        this.$store.state.fields = this.$store.state.formDatas.fields[0];
      }
    },
    saveToLocal() {
      var self = this;
      localStorage.setItem("allo", JSON.stringify(this.allStepsDatas));
      var forms = JSON.stringify(this.allStepsDatas);
      var id = this.stepsId;
      //var local = localStorage.getItem("allo");
      //console.log("local", local);
      utilities.saveSteps({ forms, id }).then((reponse) => {
        console.log("savesteps: ", reponse);
        axios
          .post(
            "http://lesroisdelareno.kksa" + "/query-ajax/insert-update",
            reponse
          )
          .then(function (response) {
            console.log("post response ", response);
            self.loadStepsDatas();
          })
          .catch(function (error) {
            console.log(error);
            self.loadStepsDatas();
          });
      });
    },
    loadStepsDatas() {
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
    suivant() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      var base = this.$store.state.stepsIndex;
      if (recap.length >= 1 && base < recap.length - 1) {
        console.log("local0", recap.length);
        this.$store.state.stepsIndex++;
        this.$store.state.formDatas =
          this.allStepsDatas[this.$store.state.stepsIndex];
        this.$store.state.fields = this.$store.state.formDatas.fields[0];
      }
      console.log("base", this.currentSteps.length);
    },
    preview() {
      this.demo = !this.demo;
      console.log("prev", this.demo);
    },
    newPage() {
      this.demo = false;
      this.$store.dispatch("newPage");
    },
    resetValue() {
      this.fields.selected = "";
      this.fields.value = [];
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
      //this.$store.dispatch("addSetpsDatas", this.formDatas);
      // Push the name to submitted names
      //this.submittedTitle.push(this.formDatas.info.title);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.full-block {
  height: auto;
}
</style>
