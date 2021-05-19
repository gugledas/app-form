<template>
  <div>
    <b-container class="bv-example-row" fluid="lg">
      <b-row class="">
        <b-col class="full-block shadow" cols="12" lg="10">
          <pages></pages>
        </b-col>
        <b-col class="small">
          <div>
            <b-button
              variant="light"
              class="shadow-sm"
              v-b-modal.modal-prevent-closing
              >configuration</b-button
            >
            <b-button class="m-4" size="sm" @click="newPage">New page</b-button>

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
                      :state="titleState"
                    >
                      <b-form-input
                        id="name-input"
                        v-model="formDatas.info.title"
                        :state="titleState"
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
    <b-row
      ><b-col cols="12"
        ><b-card class="mt-3" header="Form Data Result">
          datas:
          <pre class="m-0">{{ $store.state.allStepsDatas }}</pre>
          <p>
            La date stockée dans Vuex est le {{ day }}-{{ month }}-{{ year }}.
          </p>
        </b-card></b-col
      ></b-row
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      title: "",
      titleState: null,
      headerState: null,
      headerTitle: "",
      submittedTitle: [],
      submittedHeaderTitle: [],
    };
  },
  computed: {
    ...mapState(["year", "month", "day", "formDatas"]),
  },
  methods: {
    newPage() {
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
  height: 96vh;
}
</style>
