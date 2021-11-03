<template>
  <b-row class="p-2">
    <b-col cols="7">
      <b-form-group
        label="title :"
        label-for="title-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          id="title-input"
          required
          v-model="fields.title"
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col cols="7">
      <b-form-group
        label="label :"
        label-for="label-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          id="label-input"
          required
          v-model="fields.label"
        ></b-form-input>
      </b-form-group>
    </b-col>

    <b-col sm="3">
      <b-form-group label="require?" label-for="require-input">
        <b-form-checkbox
          id="require-input"
          :value="true"
          :unchecked-value="false"
          required
          v-model="fields.require"
        ></b-form-checkbox>
      </b-form-group>
    </b-col>

    <b-col cols="7">
      <b-form-group
        label="name"
        label-for="name-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          id="name-input"
          required
          v-model="fields.name"
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="12">
      <label>Options</label>
      <b-form @submit="onPush" @reset="onReset" class="border p-3">
        <b-form-group
          id="option-label"
          label="Option label"
          label-for="input-option-label"
        >
          <b-form-input
            v-model="inputOptions.label"
            id="option-label"
            placeholder="Entrer le label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="option-val"
          label="Option value"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="inputOptions.value"
            id="option-val"
            placeholder="Enter value of option"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" size="sm" class="mr-2"
          >Push</b-button
        >
        <b-button type="reset" variant="danger" size="sm">Reset</b-button>
      </b-form>
      <b-form
        @submit="onPush"
        @reset="onReset"
        class="border p-3"
        v-for="(item, i) in fields.options"
        :key="i"
      >
        <b-form-group
          id="option-label"
          label="Option label"
          label-for="input-option-label"
        >
          <b-form-input
            v-model="item.label"
            :id="`option-label${i}`"
            placeholder="Entrer le label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="option-val"
          label="Option value"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="item.value"
            :id="`option-value${i}`"
            placeholder="Enter la valeur de l'option"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" size="sm">Push</b-button>
        <b-button type="reset" variant="dark" size="sm" class="mx-2"
          >Reset</b-button
        >
        <b-button variant="danger" size="sm" @click="deleteOption(i)"
          >delete</b-button
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    fields: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      value: 1,
      //Object of type checkbox
      inputOptions: {
        label: "",
        value: "",
      },
    };
  },
  watch: {},
  methods: {
    deleteOption(index) {
      var all = this.fields.options;

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
        }
      }
    },
    //logic for fields options
    onPush(event) {
      event.preventDefault();
      this.pushOptions(event);
    },
    pushOptions(event) {
      var info = {};
      for (let i in this.inputOptions) {
        info[i] = this.inputOptions[i];
      }
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        label: "",
        value: "",
      };
    },
    onReset(event) {
      event.preventDefault;

      // Reset our form values
      // this.optionsToPush.label = "";
      // this.optionsToPush.value = null;

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss"></style>
