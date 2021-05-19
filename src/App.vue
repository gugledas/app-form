<template>
  <div id="app">
    <steps-page></steps-page>
    <!-- <div class="choice">
      <div v-for="(img, i) in imageCheck" :key="i" @click="getImage(i)">
        <imageCheck :isActive="img.isActive" :description="img.description" />
      </div>
    </div> -->
  </div>
</template>

<script>
import StepsPage from "./App/StepsPage.vue";
//import ImageCheck from "./App/ImageCheck";
export default {
  name: "App",
  components: { StepsPage },
  data: () => {
    return {
      imageCheck: [
        { isActive: false, description: "1 côté" },
        { isActive: false, description: "2 côté" },
        { isActive: false, description: "3 côté" },
        { isActive: false, description: "4 côté" },
      ],
    };
  },
  computed: {},
  methods: {
    getImage(il) {
      for (var i = 0; i < this.imageCheck.length; i++) {
        if (i == il) {
          this.imageCheck[i].isActive = !this.imageCheck[i].isActive;
        } else {
          this.imageCheck[i].isActive = false;
        }
      }
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
