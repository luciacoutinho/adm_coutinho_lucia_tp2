<template>
  <div>
  <div id="cuentos_creados">
   <div class="center"><h2>Cuentos guardados</h2></div>
    
   <div class="d-flex justify-content-center mx-5">
 <div class="lista" v-for="item in local" :key="item.fecha">
      <h3>{{item.titulo}} </h3>
      <p>Había una vez un {{item.personaje2}} llamado {{item.nombre}} que iba paseando por el bosque, cuando de repente le agarró hambre. Tenía ganas de comer {{item.comida}}, asi que pasó por {{item.lugar}} y luego con la panza llena siguió su camino</p>
      

      <div class="center inline-flex align-items-center">
      <router-link :to="'/editar/' + item.titulo + '/' + item.fecha "  class="editar"> Editar </router-link>
      <button class="borrar" @click="borrar(item)">Borrar</button>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >

      <v-card>
        <v-card-title>
          <span class="text-h5">{{item.titulo}}</span>
        </v-card-title>
        <v-card-text>
          <p>
            Cuenta  una antigua historia que una vez un {{item.nombre}}  iba cargado con un {{item.comida}}. Caminaba a paso ligero porque necesitaba estar antes del mediodía en {{item.lugar}}. Tenía que vender su carga al mejor postor, y si se daba prisa y cerraba un buen trato, estaría de vuelta antes del anochecer. Anduvo durante un par de horas y llegó un momento en que se sintió agotado.
          </p>
          <p>
            Como hacía calor y todavía le quedaba un buen trecho por recorrer, decidió pararse a descansar. Se quitó el abrigo, dejó el saco {{item.comida}} en el suelo y se tumbó. Pronto le venció el sueño y sus ronquidos llamaron la atención de un {{item.personaje2}} que andaba por allí.
            El animal, fisgón por naturaleza, sintió curiosidad por ver qué llevaba el {{item.nombre}} en el saco. Dio unos cuantos brincos y se plantó a su lado, procurando no hacer ruido. Con mucho sigilo, tiró de la cuerda que lo ataba y metió la mano.
          </p>
          <p>
            ¡Qué suerte! ¡El saco estaba llenito de {{item.comida}}! A ese {{item.personaje2}} en particular le encantaban. Agarro un buen puñado y sin ni siquiera detenerse a cerrar la gran bolsa de cuero, subió alto para poder comérselas una a una.
            Estaba a punto de dar cuenta del rico manjar cuando de repente, se le cayó de las manos y rebotando  fue a parar al suelo.
            ¡Qué rabia le dio! ¡Con lo que le gustaban, no podía permitir que una se desperdiciara tontamente! Gruñendo, descendió a toda velocidad para recuperarla.
          </p>
          <p>
            Por las prisas, el atolondrado {{item.personaje2}} se enredó las patas en espiral e  inició una caída que le pareció eterna. Intentó agarrarse como pudo, pero el tortazo fue inevitable. No sólo se dio un buen golpe, sino que toda la {{item.comida}} que llevaba en el puño se desparramó por la hierba y desaparecieron de su vista.
            Miró a su alrededor, pero el dueño del saco había retomado su camino y ya no estaba.
          </p>
          <p>
            ¿Sabéis lo que pensó el {{item.personaje2}}? Pues que no había merecido la pena arriesgarse por una {{item.comida}}. Se dio cuenta de que, por culpa de esa torpeza, ahora tenía más hambre y encima, se había ganado un buen chichón.
            Moraleja: A veces tenemos cosas seguras pero, por querer tener más, lo arriesgamos todo y nos quedamos sin nada. Ten siempre en cuenta, como dice el famoso refrán, que la avaricia rompe el saco.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
      </div>
        
</div>
  </div>

      <p  id="no_cuentos">{{sin_datos}}</p>
      <div class="btn-crear">
      <router-link :to="'/cuento_interactivo'">Crea un cuento nuevo</router-link></div>

  </div>
  </div>
</template>

<script>
export default {
  name: 'Cuentos',
  data:function(){
      return {
        local:[],
        sin_datos: ""
      }
  },


      
mounted:function(){
    this.ver_local(); 
  },

  
  methods:{
    ver_local:function(){
      
    if(localStorage.dato){
    this.local=JSON.parse(localStorage.getItem("dato")) 
       
      
    }
    if(this.local.length == 0){
      this.sin_datos ="No tienes ningun cuento creado :("
    }
  
    },
    borrar:function(item){
              
      this.local= JSON.parse(localStorage.getItem ("dato"))

  for (var i=0; i < this.local.length; i++){
  
      if (this.local[i].fecha == item.fecha ) {
          var rta=confirm("¿Quieres borrar el cuento '" + this.local[i].titulo + "'?")
            if (rta==true){
              this.local.splice(i, 1);
            }
          
            
          }
      }
  

    localStorage.setItem("dato", JSON.stringify(this.local))

    this.ver_local(); 
    }
}
}
</script>

<style>

/* Bibliotica interactiva */


#cuentos_creados h2 {
    margin: 40px;
    text-align: center !important;

}

#cuentos_creados p {
    width: 80%;
    margin: auto;
    text-align: center;
}

#cuentos_creados h3 {
    margin: 20px;
    display: inline-block;
    text-align: center;
}

#cuentos_creados label {
    background-color: DodgerBlue;
    color: #ffffff;
    width: 150px;
    padding: 10px;
    box-sizing:border-box;
	border-radius: 5px;
}

.inline-flex {
  display: inline-flex;
}

.row {
  margin: 0;
}

#cuentos_creados button, #cuentos_creados a {
	background: #66A4BC;
	color:white; 
	border:none;
	width:auto;
	padding:10px; 
	margin:20px 10px; 
  border-radius: 10px !important;
  font-size: 1em;
}

#cuentos_creados button:hover, #cuentos_creados a:hover {
	background: #66a4bcc4;
}

.d-flex{
 align-items: flex-start !important;
     flex-wrap: wrap;
}

.justify-content-center{
 justify-content: center;
}

.mx-5{
 margin-left: 40px;
 margin-right: 40px;
}
.lista {
    background-color: #ffffff;
    border-radius: 15px;
    width: 30%;
    /* border-style: solid;
    border-color: aliceblue; */
    margin: 25px;
    padding: 50px;
    text-align: left !important;
    box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%); ;

}

.lista p{
 margin: 0 !important;
 text-align: left !important;
}

.lista h3{
 margin: 0 !important;
 text-align: left !important;
}

#no_cuentos{
	color:#ee1511;
  font-weight: 800;
	width: 800px; 
  padding: 20px;
	margin:10px auto!important;
	box-sizing:border-box;
	border-radius: 5px;
}

.btn-crear{
 margin: 10px auto 80px auto!important;
 text-align: center;
}

.v-btn {
  text-transform: none;
  font-weight: 400;

}

.v-btn:not(.v-btn--round).v-size--default {
  height: 38px;
}

.align-items-center{
 align-items: center !important;
}


</style>
