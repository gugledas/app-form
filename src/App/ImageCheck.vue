<template>
  <div>
    <div class="choice-button">
      <div
        class="choice-button__img"
        :class="
          isActive ? 'choice-button__img--active' : 'choice-button__img--normal'
        "
      >
        <img :srcset="urlImage" />
      </div>
      <div class="ChoiceButton_label">
        <span>{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "1 côté",
      //required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
      //required: true,
    },
    urlImage: {
      type: String,
      //required: true,
      default:
        "https://prod-taro-front.lamaisonsaintgobain.fr/bb68b9e967198ccdb2b293acb4db5f3e.svg",
    },
  },
  data: () => {
    return { formValues: {} };
  },
};
</script>

<style lang="scss">
@import "../../node_modules/@braid/vue-formulate/themes/snow/snow.scss";
$border_color: #49a0a2;
.choice-button {
  max-width: 150px;
  //background: rgb(163, 163, 228);
  margin: 10px;
  vertical-align: center;

  &__img {
    width: 100%;
    height: 170px;
    margin-bottom: 30px;

    &--normal {
      //background: rgb(49, 208, 208);
      transition: ease-in-out 0.2s;
      &:hover {
        background: rgba(174, 172, 169, 0.659);
        opacity: 0.5;
      }
    }
    &--active {
      border-radius: 25px;
      border: 3px solid $border_color;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 157px;
        left: 63px;
        height: 27px;
        width: 27px;
        border-radius: 50%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 12px;
        background-color: #49a0a2;
        //background-image: url(4d2d279….svg);
      }
    }
  }
}
</style>
