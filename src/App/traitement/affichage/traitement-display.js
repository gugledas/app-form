import codePostal from "./codePostal.vue";
import defaultRender from "./defaultRender.vue";
import select from "./select.vue";
import recapitulatif from "./recapitulatif.vue";
import userlogin from "./userlogin.vue";
import file from "./file.vue";

export default {
  getTemplatesFiles(type) {
    var template = defaultRender;
    switch (type) {
      case "codepostal":
        template = codePostal;
        break;
      case "select":
        template = select;
        break;
      case "checkbox":
        template = select;
        break;
      case "radio":
        template = select;
        break;
      case "recapitulatif":
        template = recapitulatif;
        break;
      case "userlogin":
        template = userlogin;
        break;
      case "file":
        template = file;
        break;
    }
    return template;
  },
};
