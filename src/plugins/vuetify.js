import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#BEA28C",
          secondary: "#E8B499",
          accent: "#95CBCC",
          error: "#ffeb3b",
          warning: "#ffc107",
          info: "#ff5722",
          success: "#795548",
          background: "#E7D8A9",
        },
      },
    },
  });