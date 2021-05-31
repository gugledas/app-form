<template>
  <Listesfomes :items="items"></Listesfomes>
</template>

<script>
import Listesfomes from "./App/Listesfomes.vue";
import axios from "axios";
export default {
  name: "App",
  data: function () {
    return {
      items: [],
    };
  },
  mounted() {
    this.loadStepsDatas();
  },
  components: { Listesfomes },
  computed: {},
  methods: {
    loadStepsDatas() {
      //this.datasBdOrLocalStorage();
      //var self = this;
      var datas = "select * from `appformmanager_fomrs`";
      axios
        .post("http://lesroisdelareno.kksa" + "/query-ajax/select", datas)
        .then((reponse) => {
          console.log("get loadStepsDatas: ", reponse);
          this.items = reponse.data;
        })
        .catch((error) => {
          console.log("get error ", error);
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  .choice {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 0 auto;
    min-height: 500px;
    align-items: center;
    justify-content: center;
  }
}
</style>
