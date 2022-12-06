<template>
  <div class="minicuentos">
      <ul class="minicuentos d-flex align-items-stretch justify-content-center">

        <li v-for="item in mini_cuentos" :key="item.id" class="nuestras-mini_cuentos">
          <h4>{{item.titulo}}</h4>
          <p>{{item.sinopsis}}</p>
          <router-link :to="'/mini_cuentos/' + item.id " > Leer Cuento </router-link>

        </li>
        
      </ul> 
      
  </div>
</template>

<script>
export default {
  name: 'Minicuentos',
  data:function(){
    return{

    mini_cuentos:[
            {id:1, titulo: "Uga la tortuga", sinopsis: "¡Caramba, todo me sale mal!, se lamentaba constantemente Uga, la tortuga."},
            {id:2, titulo: "El elefante fotógrafo", sinopsis: "Había una vez un elefante que quería ser fotógrafo. Sus amigos se reían cada vez que le oían decir aquello."},
            {id:3, titulo: "El papel y la tinta", sinopsis: "Había una hoja de papel sobre una mesa cuando una pluma, bañada en negrísima tinta, la manchó completa y la llenó de palabras."}
            ]
  }
},
  }



</script>

<style>

.nuestras-mini_cuentos {
  display: inline-block;
  width: 25%;
  /* margin: 0 30px; */
}

.minicuentos {
  padding: 20px 0 100px;
  text-align: center;
}

.minicuentos a{
 color: #f9be49 !important;
 transition: all ease .3s;
}

.minicuentos a:hover{
 color: #b88b2f !important;
}

.d-flex.align-items-stretch{
 align-items: stretch !important;
}

</style>