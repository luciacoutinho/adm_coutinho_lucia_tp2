import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
     theme:{ 
          themes:{
           light:{
            /*primary: '#e30b33',
            secondary: '#17d909',*/

      primary: '#ff5722',
      secondary: '#9c27b0',
      accent: '#4caf50',
      error: '#f44336',
      warning: '#ffc107',
      info: '#2196f3',
      success: '#00bcd4'
      
           },
          
        },
    }
});
