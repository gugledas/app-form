<template>
  <div>
    <b-container class="bv-example-row bg-light p-5" fluid="lg">
      <div>
        <h5 class="titre mb-3 shadow-sm p-2">
          Traitement
          <span class="form-title">{{ traitementFormItems.id }}</span>
        </h5>
      </div>
      <b-row align-h="center">
        <b-col class="" cols="12">
          <list-table></list-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import axios from "axios";
import config from "../config/config.js";
//import utilities from "./Utilities";
//import NavLine from "./NavLine.vue";
import { mapState, mapGetters } from "vuex";
import ListTable from "./ListTable.vue";
//import pages from "./pages.vue";
//import pages from "./pages2.vue";
export default {
  components: { ListTable },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => {
    return {};
  },
  watch: {
    stepsId() {
      this.datasBdOrLocalStorage();
    },
  },
  mounted() {
    this.$store.dispatch("setTraitId", this.id);
  },
  computed: {
    ...mapState(["traitementId"]),
    ...mapGetters(["traitementFormItems"]),
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

    saveToLocal() {
      //var self = this;
      //var datas = this.form;
      config.prepareDatasToSave(this.form).then((val) => {
        config.saveForm(val).then(() => {
          //
        });
      });
      /*
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
      /**/
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
.block-button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  button {
    margin: 5px;
  }
}
</style>
