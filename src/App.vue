<template>
 <v-app>
    <v-navigation-drawer
      v-model="drawer"
        app>

      <v-list tag="ul">

        <li v-for="item in items"
          :key="item.titulo"> 
          <v-list-item 
            :to="item.path">
          <v-list-item-action>
            <v-icon>mdi-{{item.icono }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </li>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar class="color" app>
     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Elige tu propia aventura</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        
      
        
          <router-view></router-view>
        

      </v-container>
    </v-main> 

<v-footer      
      height="auto"
      padding="100px 0"
      >
      <v-card
        class="flex"
        flat
        tile>
        <v-card-title class="accent column">
         <v-spacer></v-spacer>
         <v-toolbar-title>Elige tu propia aventura</v-toolbar-title>
<!--   
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon>
            <v-icon size="36px">{{ icon }}</v-icon>
          </v-btn> -->
          
        </v-card-title>
      </v-card>
    </v-footer>

  </v-app>


</template>

<script>

export default {
  name: 'App',
  data: () => ({
     icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram'
    ],
 items:[
        {
         titulo: 'Home',
         icono: 'home',
         path:'/'
       },
       {
         titulo: 'Historia del Genio',
         icono:'dice-3',
         path:'/historia_genio'
       },
         {
         titulo: 'Crea tu cuento',
         icono:'book-open-page-variant',
         path:'/cuento_interactivo'
       },
       {
         titulo: 'Tus cuentos',
         icono:'view-list',
         path:'/cuentos'
       },
         
        ],
    drawer: null,

  }),
   
};
</script>
<style scoped>

.theme--light.v-list{
  padding: 0
}

.v-application .primary {
  background: #fff!important;
}

.color{
 background-color: #E5B14A;
}

button {
  background: #fff;
  color: #E5B14A!important;
}



.v-toolbar__title{
 color: #fff;
 font-weight: 800;
}

.v-application .accent {
  background-color: #E5B14A !important;
  border-color: #E5B14A !important;
  padding: 10px 0;
}

.container {
  padding: 0;
}

.v-footer {
  padding:0;
}


</style>