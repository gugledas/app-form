<template>
  <div>
    <div>
      <div class="number-markup__input">
        <label class="label">je suis le label up</label>
        <div class="input-field">
          <b-form-input
            v-model="value"
            type="number"
            placeholder=""
            class="input-field__input"
            min="1"
            max="100"
          ></b-form-input
          ><span class="input-field__unit">cm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss">
.number-markup__input {
  display: flex;
  justify-content: center;
  flex-flow: wrap column;
  .label {
    font-size: 1.1rem;
  }
  .input-field {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 42px;
    &__input {
      width: 131px;
      height: 50px;
      padding: 0 0 0 4em;
    }
    &__unit {
      margin: 0 8px;
    }
  }
}
</style>
