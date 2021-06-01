<template>
  <div class="spin-block">
    <b-form-spinbutton
      id="demo-sb"
      v-model="formDatas.fields[id].value"
      class="spin-button"
      min="1"
      max="20"
      style="width: 10rem"
      placeholder="--"
      wrap
    >
      <template slot="decrement" hasFocus="false"
        ><div class="decrement">
          <span class="moins">-</span>
        </div></template
      >
      <template slot="increment" hasFocus="false"
        ><div class="decrement">
          <span class="moins">+</span>
        </div></template
      >
    </b-form-spinbutton>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapGetters(["formDatas"]),
  },
};
</script>

<style lang="scss">
.spin-block {
  .form-control.focus {
    box-shadow: none !important;
    border: 0 !important;
  }
  .spin-button {
    border: 0;
    height: auto;
    &:focus {
      box-shadow: none;
    }

    #demo-sb {
      border-left: 10px solid;
      background: white;
      font-weight: bold;
      bdi {
        font-size: 20px;
        color: black;
      }
    }
    .border-left {
      border-left: 0 !important;
    }
    .border-right {
      border-right: 0 !important;
    }

    .decrement {
      margin: 8px 0;
      cursor: pointer;
      user-select: none;
      color: #49a0a2;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 4px 10px #f7f4f4;
      border: 1px solid #f4f3f3;
      .moins {
        width: 22px;
        height: 22px;
        border: 2px solid #49a0a2;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Ubuntu;
      }
    }
  }
}
</style>
