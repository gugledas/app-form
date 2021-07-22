<template>
  <div class="block">
    <b-button variant="danger" class="mb-2">
      {{ displayStatus }}
    </b-button>
    <div class="date">{{ getDateDisplay }}</div>
    <div class="infos-user" v-if="infosUser">
      <component v-bind:is="infosUser" class="infos-user"></component>
    </div>
    <div class="d-flex align-items-center">
      <h3 class="titre">{{ formName }}</h3>
      <div class="d-flex">
        <span class="action mb-2" @click="getValideStepe"> Voir </span>
        <span class="action" @click="formTraiter" v-if="$store.state.mode">
          Traiter
        </span>
      </div>
    </div>
    <b-row class="d-flex liste-fields" align-h="center">
      <b-col md="4" v-for="(field, i) in itemFields" :key="i">
        <component
          v-bind:is="getTemplatesFiles(field.type)"
          :field="field"
          :diplayLabel="true"
          class="content-field"
        ></component>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import config from "../../config/config";
import traitementDisplay from "./traitement-display.js";
export default {
  name: "block",
  props: {
    item: {
      type: Object,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    traitementFormItems: {
      type: Array,
      required: true,
    },
    dataId: {
      type: [String, Number],
    },
  },

  computed: {
    displayStatus() {
      var text = "";
      switch (this.item.status) {
        case "1":
          text = config.messages.statusDevis1;
          break;
        case "0":
          text = config.messages.statusDevis0;
          break;
        case "2":
          text = config.messages.statusDevis2;
          break;
      }
      return text;
    },
    getDateDisplay() {
      return config.getMysqlDateToFrench(this.item.created);
    },
    formName() {
      return this.form.name;
    },
    itemFields() {
      const fields = [];
      for (const i in this.item) {
        if (this.item[i].type) fields.push(this.item[i]);
      }
      return fields;
    },
    infosUser() {
      if (this.item.user && this.item.user.uid) {
        var uid = this.item.user.uid[0].value;
        var name = this.item.user.name[0].value;
        return {
          props: {
            uid: uid,
          },
          render(createElement) {
            return createElement(
              "a",
              {
                props: {
                  uid: uid,
                },
                attrs: {
                  href: "/user/" + uid,
                  target: "blank",
                },
              },
              [name]
            );
          },
        };
      }
      /**/
      return null;
    },
  },
  methods: {
    getTemplatesFiles(type) {
      return traitementDisplay.getTemplatesFiles(type);
    },
    getValideStepe() {
      this.$emit("get-valide-stepe", this.dataId);
      this.$emit("get-info-user", this.item);
    },
    formTraiter() {
      this.$emit("form-traiter", this.item);
    },
  },
};
</script>
