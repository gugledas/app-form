<template lang="html">
  <div class="block-header">
    <div class="config">
      <b-dropdown id="dropdown-1" text="Dashbord" class="m-md-2" right>
        <b-dropdown-item>
          <router-link to="/gestion-fields"> Gestion des Champs </router-link>
        </b-dropdown-item>
      </b-dropdown>
      <b-button
        class="config-btn"
        @click="settingform"
        v-if="$store.state.mode"
        v-b-tooltip.hover.v-dark
        title="Setting"
      >
        <b-icon icon="gear" class="setting-icon"></b-icon>
      </b-button>
    </div>
    <div class="content">
      <h1>{{ pageInfo.title }}</h1>
      <p
        v-html="pageInfo.description"
        v-if="pageInfo.description && pageInfo.description !== ''"
      ></p>

      <div
        class="link"
        @click="showHideVideo"
        v-if="pageInfo.video && pageInfo.video !== ''"
      >
        <span href="#" class="button-link">
          <span> Comment sa marche ? </span>
          <b-icon
            :icon="pageInfo.showVideo ? 'arrow-up' : 'arrow-down'"
            class="ml-2 setting-icon"
          ></b-icon>
        </span>
      </div>
    </div>
    <SettingForm></SettingForm>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SettingForm from "./ConfigsForms/SettingForm.vue";

export default {
  name: "ListesfomesHeader",
  data() {
    return {
      fields: [
        {
          label: "Identifiant",
          key: "id",
        },
        {
          label: "Type de travaux",
          key: "name",
        },
        {
          label: "Que souhaitez vous faire",
          key: "action",
          thClass: ["th-action"],
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("loadPageInfo");
  },
  components: {
    SettingForm,
  },
  computed: {
    ...mapState(["pageInfo"]),
  },
  methods: {
    settingform() {
      this.$bvModal.show("setting-form");
    },
    showHideVideo() {
      this.$store.state.pageInfo.showVideo =
        !this.$store.state.pageInfo.showVideo;
    },
  },
};
</script>
