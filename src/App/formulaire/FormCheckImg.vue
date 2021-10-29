<template>
  <b-row class="p-2">
    <b-col sm="12">
      <compositeHeaderField :field="field"></compositeHeaderField>
    </b-col>
    <ManageOptionTable :field="field">
      <template v-slot:groupfields="slotProps">
        <div>
          <b-form-group label="isActive?">
            <b-form-checkbox
              :value="true"
              :unchecked-value="false"
              required
              v-model="slotProps.input_options.isActive"
            ></b-form-checkbox>
          </b-form-group>
          <manageImages
            @ev_manage_images_img="
              ev_manage_images_img($event, slotProps.input_options)
            "
          ></manageImages>
          <pre>input_options ::{{ slotProps.input_options }}</pre>
        </div>
      </template>
    </ManageOptionTable>
    <ConfigAvancer :field="field"></ConfigAvancer>
  </b-row>
</template>

<script>
import ConfigAvancer from "../EditsFields/configAvancer.vue";
import ManageOptionTable from "./ManageOptionTable.vue";
import compositeHeaderField from "../EditsFields/compositeHeaderField.vue";
import manageImages from "../EditsFields/manage-images.vue";
export default {
  props: {
    field: {
      type: Object,
      require: true,
    },
  },
  components: {
    ConfigAvancer,
    ManageOptionTable,
    compositeHeaderField,
    manageImages,
  },
  data() {
    return {
      value: 1,
      inputOptions: {
        text: "",
        value: "",
        img: "",
        description: "",
        isActive: false,
      },
    };
  },
  methods: {
    ev_manage_images_img(data, inputOptions) {
      if (data.url) {
        inputOptions.img = data.url;
      }
    },
  },
};
</script>
