<template>
  <b-row class="p-2">
    <b-col cols="7">
      <b-form-group
        label="label :"
        label-for="label-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          v-model="fields.label"
          id="label-input"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
    <b-col sm="3">
      <b-form-group label="require?" label-for="require-input">
        <b-form-checkbox
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
    <!-- form option -->
    <b-col cols="12">
      <label>Options</label>
      <b-form @submit="onPush" @reset="onReset" class="border p-3">
        <b-form-group label="isActive?" label-for="require-input">
          <b-form-checkbox
            id="require-input"
            :value="true"
            :unchecked-value="false"
            required
            v-model="inputOptions.isActive"
          ></b-form-checkbox>
        </b-form-group>

        <b-form-group
          id="option-label"
          label="label"
          label-for="input-option-label"
        >
          <b-form-input
            v-model="inputOptions.label"
            id="option-label"
            placeholder="Enter label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="option-img" label="img" label-for="input-option-img">
          <b-form-file
            id="option-img"
            placeholder="Choisir une image"
          ></b-form-file>
        </b-form-group>
        <b-form-group
          id="desc-img"
          label="description"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="inputOptions.description"
            id="desc-imge"
            placeholder="1 Côté"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="option-val"
          label="value"
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
        <!-- al -->
        <b-form-group label="isActive?" label-for="require-input">
          <b-form-checkbox
            :id="`require-input${i}`"
            :value="true"
            :unchecked-value="false"
            required
            v-model="item.isActive"
          ></b-form-checkbox>
        </b-form-group>

        <b-form-group
          :id="`option-label${i}`"
          label="label"
          label-for="input-option-label"
        >
          <b-form-input
            v-model="item.label"
            :id="`option-label${i}`"
            placeholder="Enter label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :id="`option-img${i}`"
          label="img"
          label-for="input-option-img"
        >
          <b-form-file
            :id="`option-img${i}`"
            placeholder="Choisir une image"
          ></b-form-file>
        </b-form-group>
        <b-form-group
          :id="`desc-img${i}`"
          label="description"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="item.description"
            :id="`desc-img${i}`"
            placeholder="1 Côté"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :id="`option-val${i}`"
          label="value"
          label-for="input-option-val"
        >
          <b-form-input
            v-model="item.value"
            :id="`option-val${i}`"
            placeholder="Enter value of option"
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
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ inputOptions }}</pre>
      </b-card>
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
        img: "",
        description: "",
        isActive: false,
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
