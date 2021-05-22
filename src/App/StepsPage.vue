<template>
  <div>
    <b-container class="bv-example-row" fluid="lg">
      <b-row class="">
        <b-col class="full-block shadow" cols="12" lg="10" v-if="demo">
          <!-- ste: {{ this.$store.state.stepsIndex }}--{{ demo }} -->
          <pages :level="this.$store.state.stepsIndex"></pages>
        </b-col>
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
              >clear storage</b-button
            >
            <b-button class="m-4" variant="info" size="sm" @click="prev"
              >Preview</b-button
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

    <!-- <b-row class="m-0"
      ><b-col cols="6"
        ><b-card class="mt-3" header="Form Data Result">
          datas:
          <pre class="m-0"></pre>
          <p>La date stockée dans Vuex est le pre.</p>
          <pre>{{ currentSteps }}</pre>
        </b-card></b-col
      ><b-col cols="6"
        ><b-card class="mt-3" header="Form all steps">
          datas:
          <pre class="m-0"></pre>
          <p>La date stockée dans Vuex est le pre.</p>
          <pre>{{ fields }}</pre>
        </b-card></b-col
      >
    </b-row> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import pages from "./pages.vue";
export default {
  components: { pages },
  props: {},
  data: () => {
    return {
      formDatasa: {
        info: {
          headerTitle: "",
          title: "",
          name: "step1",
        },
        fields: [],
      },
      demo: false,
      title: "",
    };
  },
  mounted() {
    var local = localStorage.getItem("allo");
    var recap = JSON.parse(local);
    console.log("loaaaa", recap);
    if (recap != null && recap.length) {
      this.$store.state.formDatas = this.currentSteps;
      this.$store.state.fields = this.currentSteps.fields[0];
    }
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
      console.log("loaaaa", recap);
      if (recap != null && recap.length) {
        return recap[this.$store.state.stepsIndex];
      } else return this.formDatas;
    },
  },
  methods: {
    saveToLocal() {
      localStorage.setItem("allo", JSON.stringify(this.allStepsDatas));
      var local = localStorage.getItem("allo");
      console.log("local", local);
    },
    clearStorage() {
      localStorage.clear();
    },
    back() {
      this.$store.state.stepsIndex--;
      this.$store.state.formDatas = this.currentSteps;
      this.$store.state.fields = this.currentSteps.fields[0];
      console.log("back");
    },
    suivant() {
      var local = localStorage.getItem("allo");
      var recap = JSON.parse(local);
      var base = this.$store.state.stepsIndex;
      if (recap.length >= 1 && base < recap.length - 1) {
        console.log("local0", recap.length);
        this.$store.state.stepsIndex++;
        this.$store.state.formDatas = this.currentSteps;
        this.$store.state.fields = this.currentSteps.fields[0];
      }
      console.log("base", this.currentSteps.length);
    },
    prev() {
      this.demo = !this.demo;
      console.log("prev", this.demo);
    },
    newPage() {
      this.demo = false;
      this.$store.dispatch("newPage");
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
.full-block {
  height: auto;
}
</style>
