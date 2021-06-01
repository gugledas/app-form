<template>
  <b-row class="p-2">
    <b-col cols="7">
      <b-form-group label="label">
        <b-form-input required v-model="fields.label"></b-form-input>
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
    <b-col cols="6">
      <b-form-group label="name">
        <b-form-input required v-model="fields.name"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="6">
      <b-form-group label="value">
        <b-form-input
          v-model="fields.value"
          type="number"
          placeholder="Enter value"
          min="1"
          max="300"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="7">
      <b-form-group label="Input unit">
        <b-form-input
          v-model="fields.unit"
          placeholder="Enter unit of option"
          required
        ></b-form-input>
      </b-form-group>
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
        text: "",
        value: "",
      },
    };
  },
  watch: {},
  methods: {
    deleteOption(index) {
      var all = this.fields.options;
      console.log("i", all, index);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === index) {
          all.splice(i, 1);
          console.log("iii");
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
      console.log("object", info);
      this.fields.options.push(info);
      this.onReset(event);
      this.inputOptions = {
        text: "",
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
