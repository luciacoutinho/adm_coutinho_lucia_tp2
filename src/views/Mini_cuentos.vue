<template>
  <div class="container">

    
      <div v-if="i=='1'" class="left">
          <h2>Uga la tortuga</h2>

<div>
        <p>¡Caramba, todo me sale mal!, se lamentaba constantemente Uga, la tortuga. Y no era para menos: siempre llegaba tarde, era la última en terminar sus tareas, casi nunca ganaba premios por su rapidez y, para colmo era una dormilona. ¡Esto tiene que cambiar!, se propuso un buen día, harta de que sus compañeros del bosque le recriminaran por su poco esfuerzo. Y optó por no hacer nada, ni siquiera tareas&nbsp;tan sencillas como amontonar las hojitas secas caídas de los árboles en&nbsp;otoño o quitar las piedrecitas del camino a la charca.</p><p>– “¿Para qué preocuparme en hacerlo si luego mis compañeros lo terminarán más rápido? Mejor me dedico a jugar y a descansar”.</p><p>– “No es una gran idea”, dijo una hormiguita. “Lo que verdaderamente cuenta no es hacer el trabajo en tiempo récord, lo importante es hacerlo lo mejor que sepas, pues siempre te quedarás con la satisfacción de haberlo conseguido.&nbsp;No todos los trabajos necesitan de obreros rápidos.&nbsp;Hay labores que requieren más tiempo y esfuerzo. Si no lo intentas, nunca sabrás lo que eres capaz de hacer y siempre te quedarás con la duda de qué hubiera sucedido si lo hubieras intentado alguna vez. Es mejor intentarlo y no conseguirlo, que no hacerlo y vivir siempre con la espina clavada. La constancia y la perseverancia&nbsp;son buenas aliadas para conseguir lo que nos proponemos, por eso te aconsejo que lo intentes. Podrías sorprenderte de lo que eres capaz”.</p><span class="ezoic-autoinsert-video ezoic-longest_content"></span><p>– “¡Hormiguita, tienes razón! Esas palabras son lo que necesitaba: alguien que me ayudara a comprender el valor del esfuerzo, prometo que lo intentaré.»</p><p>Así, Uga, la tortuga, empezó a esforzarse en sus quehaceres. Se sentía feliz consigo misma pues cada día lograba lo que se proponía, aunque fuera poco, ya que era consciente de que había hecho todo lo posible por conseguirlo.</p><p>– “He encontrado mi felicidad: lo que importa no es marcarse metas grandes e imposibles, sino&nbsp;acabar todas las pequeñas tareas que contribuyen a objetivos mayores”.</p>


</div>

        

        </div>  

        <div v-else-if="i=='2'" class="left"> 
          <h2>El elefante fotógrafo</h2>

          <div>
          <div><p>Había una vez un elefante que quería ser fotógrafo. Sus amigos se reían cada vez que le oían decir aquello:</p>
<p>- Qué tontería - decían unos- ¡no hay cámaras de fotos para elefantes!</p>

<p>- Qué pérdida de tiempo -decían los otros-<strong> si aquí no hay nada que fotografíar</strong>...</p>
<p>Pero el elefante seguía con su ilusión, y poco a poco fue reuniendo trastos y aparatos con los que fabricar una gran cámara de fotos. Tuvo que hacerlo prácticamente todo: desde un botón que se pulsara con la trompa,<strong> hasta un objetivo del tamaño del ojo de un elefante</strong>, y finalmente un montón de hierros para poder colgarse la cámara sobre la cabeza.</p>
<p>Así que una vez acabada, pudo hacer sus primeras fotos, pero su cámara para elefantes era tan grandota y extraña que paracecía una gran y ridícula máscara, y muchos se reían tanto al verle aparecer,<strong> que el elefante comenzó a pensar en abandonar su sueño</strong>.. Para más desgracia, parecían tener razón los que decían que no había nada que fotografiar en aquel lugar...</p>
<p>Pero no fue así.<strong> Resultó que la pinta del elefante con su cámara era tan divertida</strong>, que nadie podía dejar de reir al verle, y usando un montón de buen humor, el elefante consiguió divertidísimas e increíbles fotos de todos los animales, siempre alegres y contentos, ¡incluso del malhumorado rino!; de esta forma se convirtió en el fotógrafo oficial de la sabana, y de todas partes acudían los animales para sacarse una sonriente foto para el pasaporte al zoo.</p>
</div>

        </div>
      </div>

        <div v-else class="left">
          <h2>El papel y la tinta</h2>

          <div>
           <p>Había una hoja de papel sobre una mesa, junto a otras hojas iguales a ella, cuando una pluma, bañada en negrísima tinta, la manchó completa y la llenó de palabras.</p><p>– “¿No podrías haberme ahorrado esta humillación?”, dijo enojada la hoja de papel a la tinta. “Tu negro infernal me ha arruinado para siempre”. </p><p>– “No te he ensuciado”, repuso la tinta. “Te he vestido de palabras. Desde ahora ya no eres una hoja de papel sino un mensaje. Custodias el pensamiento del hombre. Te has convertido en algo precioso”.</p><p>En ese momento, alguien que estaba ordenando el despacho, vio aquellas hojas esparcidas y las juntó para arrojarlas al fuego. Sin embargo, reparó en la hoja “sucia” de tinta y la devolvió a su lugar porque llevaba, bien visible, el mensaje de la palabra. Luego, arrojó el resto al fuego.</p>

        
        </div>
      </div>         

        <button @click="$router.go(-1)" class="btn-color">Volver</button>
        
  </div>
</template>

<script>
export default {
  name: 'Mini_cuentos',
  data:function(){
    return {
        i:"",
        e:""
  }
 
},

mounted: function(){
        this.recuperarHistoria();

      }, 
      
  methods:{
        recuperarHistoria: function(){
                    
        this.i = this.$route.params.id;

        },

         
    }
}
</script>

<style>

.left h2 {
  margin: 50px 0;
}



.v-application ul, .v-application ol {
  padding:0;
}

button.btn-color {
    background-color: #66A4BC;
    color: white;
    border: none;
    width: 250px;
    padding: 15px 25px;
    margin: 50px auto;
    text-align: center;
    display: block;
}

button.btn-color:hover {
    background-color: #66a4bcab;

}

</style>