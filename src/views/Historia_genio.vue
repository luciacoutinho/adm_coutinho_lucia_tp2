
<template>
  <main>
   <div class="container">

    <div class="mx-auto mt-5">

     <div class="row">
      <div class="col-6">
       <div class="pt-3 pb-4 ">
        <h2 class="text-main pt-5">La historia del genio</h2>
        <p class="descripcion-inicio pt-3">
        En esta historia
         sobre un genio de la botella, podrás elegir las desiciones que tomarás hasta llegar al final de
         la
         aventura
        </p>

       </div>



       <p class="text-color fs-3">¿Comenzamos?</p>


       <ComponentChoiceVue :historia="historia" />

       <div v-if="historia.condicional" class="my-5 ">
        <div class="form-group nombre-personaje">
         <p :class="textoColor">¿Cómo querés que se llame tu personaje?</p>
         <label for="nombre">Ingresá su nombre</label>
         <input type="text" v-model="historia.nombre" name="nombre" id="nombre" />
        </div>
        <div v-if="historia.nombre" class="pt-3">
         <p>Que lindo nombre <span class="color"> {{historia.nombre}}</span>!</p>
        </div>

       </div>

      </div>
      <!--    <div class="col-6">
       <img src="img/chica_leyendo.png" alt="" class="img-fluid">
      </div>-->
     </div>



     <div v-if="historia.nombre" class="my-5">

      <div class="row px-5">
       <div class="col-md-6">
        <img src="../assets/botella-mar-01.jpg" alt="Botella en el mar" class="img fluid rounded-circle">
       </div>

       <div class="col-md-6">
        <p>Es otoño y hace frío. {{historia.nombre}} está paseando por una playa desierta cuando de repente ve en la
         orilla una
         botella
         vieja, de extraño aspecto, que las olas arrastraron hasta la playa</p>
        <p>La recoge y la observa con detenimiento. Es de color dorado, oscuro, y está cerrada con un tapón de
         corcho.
         Parece llena de humo. {{historia.nombre}} mira bien la botella y logra ver algo entre el humo... Pero no es
         algo, sino
         alguien. ¡Un
         hombre
         diminuto!</p>
        <p>¿Será tal vez un genio...?</p>


        <button  class="btn btn-color my-2" type="submit"
         @click="historia.continuar=true">Continuar</button>
       </div>
      </div>

     </div>


     <div v-if="historia.continuar">

      <div class="row px-5">
       <div class="col-md-6">
        <img src="../assets/genio.jpg" alt="Genio" class="img-fluid rounded-circle">
       </div>

       <div class="col-md-6">

        <p>
         ¡Efectivamente es un genio!
        </p>
        <p>Si, uno de esos que cuando los dejás en libertad, te concede un deseo. El que quieras.</p>


        <button  class="btn btn-color my-2" type="submit"
         @click="historia.continuar2=true">Continuar</button>


       </div>



       <div v-if="historia.continuar2">

        <div class="row justify-content-around">
         <div class="col-md-6">
          <div class="p-5">
           <p>
            {{historia.nombre}} está a punto de sacar el tapón de corcho cuando recuerda algo más... Existen genios
            buenos y genios malos.
            Se pregunta cómo será el genio de esta botella. Claro que solo hay una manera de averiguarlo: abrir la
            botella.
           </p>

          </div>



          <div id="continua2">
           <div class="form-group mx-auto d-flex gap-2 botones-choice">
            <input type="radio" v-model="historia.condicional2" :value="true" id="abrirbotella">
            <label class="radio-inline bg-1 clickeable text-center text-center" for="abrirbotella">
             Abrir la botella y dejar al genio en
             libertad
            </label>

            <input type="radio" v-model="historia.condicional2" :value="false" id="tirarbotella">
            <label class="radio-inline bg-2 clickeable text-center" for="tirarbotella">
             Tirar la botella de nuevo al mar
            </label>


           </div>
          </div>
         </div>
         <div class="col-md-5">
          <img src="../assets/dos_genios.jpg" alt="Genio bueno y genio malo" class="img-fluid">
         </div>


        </div>



        <div v-if="historia.condicional2 == false">
         <div class="row justify-content-center my-5">
          <div class="col-6">
           <div class="py-5 bg-color">

            <p>{{historia.nombre}} decide no abrir la botella. Quien sabe si el genio sería bueno o malo. La tira de
             nuevo al mar lo más
             lejos que puede. Será problema de alguien más a partir de ahora...</p>

            <ComponenteFin/>

           </div>
          </div>
         </div>



        </div>

        <div v-if="historia.condicional2">

         <div class="p-5">
          <p>{{historia.nombre}} decide destapar la botella y liberar al genio. Reune todas tus fuerzas y tira del
           tapón.</p>
          <p>De la botella sale una nube de humo amarillo y el genio aparece frente a {{historia.nombre}}. Mide cerca de
           2 metros y es
           de
           contextura muy grande. Sonrie. Debe tratarse de un genio bueno (¡Fiu!)</p>

          <p>- Gracias por liberarme de la botella - dice con voz ostentosa - Tus deseos son ordenes para mi</p>
          <p>- Wow. Cualquier deseo? - Pregunta {{historia.nombre}}</p>
          <p>- Claro - responde el genio</p>
          <p>- Pero.. ¿Qué podría desear?</p>
          <p>- Pensá en algo que te guste- Sugiere el genio</p>

          <p>Algo que le guste? Le encanta la pizza...¿No sería genial que todo lo que coma tenga gusto a pizza?</p>
          <p>También le gusta nadar... Podría desear que todavía fuera verano para poder lanzarse al agua y nadar todo
           el día</p>

         </div>


         <div class="row justify-content-center pb-5">
          <div class="col-12">
           <div class="text-main fs-4 fw-bold my-2 text-center">¿Que elegís entonces? </div>
          </div>
          <div class="col-10 text-center">
           <div class="form-group gap-2 botones-choice text-center">
            <input type="radio" name="decision" v-model="historia.decision" :value="true" id="pizza">
            <label class="radio-inline bg-1 clickeable text-center text-center" for="pizza">
             Que todo tenga gusto a pizza
            </label>

            <input type="radio" name="decision" v-model="historia.decision" :value="false" id="verano">
            <label class="radio-inline bg-2 clickeable text-center" for="verano">
             Que sea verano para nadar todo el día
            </label>

           </div>
          </div>
         </div>

         <div v-if="historia.decision">
          <div class="row p-5 justify-content-around">
           <div class="col-4">
            <img src="../assets/pizza.jpg" alt="Porcion de Pizza" class="img-fluid rounded-circle">
           </div>
           <div class="col-5">
            <p>
             -Genio - le dice- deseo que todo lo que coma durante esta semana tenga gusto a pizza
            </p>
            <p>Casi antes de haber terminado la frase {{historia.nombre}} se encuentra en una silla de un restaurante.
             Pide una hamburguesa
             con papas fritas, ¡y sabe a pizza!. A continuación pide una gaseosa, que también sabe a pizza. Al salir se
             comprás un helado en el camino. ¡Puaj! ¡Helado de pizza!</p>
            <p>{{historia.nombre}} empieza a pensar que se equivocó con su desición...</p>

            <p>Se siente un poco mal y se encamina a su casa... <br> -Adivina que vamos a comer esta noche! Pizza!- Le
             dice su familia. Se le revuelve el estomago. Y todavía faltan 7 días más...</p>


            <ComponenteFin/>


           </div>
          </div>

         </div>

         <div v-if="historia.decision == false">

          <div class="row p-5 justify-content-around">
           <div class="col-5">
            <img src="../assets/nadar.jpg" alt="Chica nadando" class="img-fluid">
           </div>

           <div class="col-5">
            <ComponenteElecciones/>

            <p>-Deseo ir a nadar- dice {{historia.nombre}}</p>
            <p>Al siguiente momento se encuentra con que hace calor y tiene puesto el traje de baño.
             Se
             tira al agua y
             empieza a nadar. La está pasando tan bien que no se da cuenta de que se adentró mucho y cuando mira
             atrás comprende que no va a poder regresar a la playa.</p>
             <button class="btn btn-color my-2" type="submit" @click="historia.continuar3=true">Continuar</button>

           </div>

          </div>
         </div>

        </div>

        <div v-if="historia.continuar3">

         <div class="row p-5 justify-content-around align-items-center">
          <div class="col-6">
           <p>-Ayudame, genio! - grita {{historia.nombre}}. El genio parece preocupado</p>
           <p>-Me gustaría ayudarte, pero no sé nadar, lo siento!</p>
           <p>-Y qué hago ahora?</p>
           <p>-Bueno, podría convertirte en un pez o tirarte un salvavidas. <br>Tiene que pensar deprisa ¿Qué decidis?
           </p>




           <div class="form-group gap-2 botones-choice text-center d-flex">
            <input type="radio" name="decision" v-model="historia.decision2" :value="true" id="pez">
            <label class="radio-inline bg-1 clickeable text-center text-center" for="pez">
             Convertirse en pez
            </label>

            <input type="radio" name="decision" v-model="historia.decision2" :value="false" id="salvavidas">
            <label class="radio-inline bg-2 clickeable text-center" for="salvavidas">
             Que el genio le arroje un salvavidas
            </label>

           </div>
          </div>

          <div class="col-5 text-right">
           <img src="../assets/genio_pensando.jpg" alt="genio pensando" class="img-fluid">
          </div>

         </div>

         <div v-if="historia.decision2">
          <div class="row align-items-center">

           <div class="col-6">
            <p class="text-main">{{historia.nombre}} se convierte en un pequeño pez.</p>
            <p>
             Wow! Es todo tan diferente desde esta perspectiva.
             De repente todo se empieza a volver oscuro...
             Cuando se da vuelta ve que es a causa de la sombra de un pez gigante.
             Intenta escapar, pero es mucho más rápido y grande que {{historia.nombre}}.

             {{historia.nombre}} es devorad@ por un pez gigante.
            </p>

            <ComponenteFin/>

           </div>

           <div class="col-5">
            <img src="../assets/pez_muerto.jpg" alt="Pez muerto" class="img-fluid">
           </div>

          </div>


         </div>

         <div v-if="historia.decision2 == false" class="row p-5">


          <div class="col-7 p-5">
           <ComponenteElecciones/>

            <p>{{historia.nombre}} casi pierde el aliento. -¡Genio, por favor, tirame un salvavidas!</p>
            <p>Escucha un silbido y de repente está sobre un gran salvavidas de goma. Suspira con
             alivio y se
             dispone
             a descansar</p>
            <button class="btn btn-color my-2" type="submit"
             @click="historia.continuar4=true">Continuar</button>
          </div>
          <div class="col-4">
           <img src="../assets/salvavidas.jpg" alt="" class="img-fluid rounded-circle">
          </div>

         </div>

        </div>

        <div v-if="historia.continuar4">

         <div class="p-5">

          <img src="../assets/mar_noche.webp" alt="" class="img-fluid border-rounded py-4">

          <p>Cuando {{historia.nombre}} abre los ojos es de noche y está flotando en el medio del mar. No se ve nada
           alrededor, solo
           oscuridad. En el medio de la desesperación,
           grita pidiendo ayuda</p>
          <p>-Genio, por favor, ayudame!- Exclama {{historia.nombre}}</p>
          <p>-Solo puedo concederte un último deseo más... - Dice el genio - Puedo devolverte a la playa donde me
           encontraste, o puedo darte la habilidad de volar para que regreses por tu cuenta...</p>
         </div>

         <div class="form-group gap-2 botones-choice text-center d-flex mx-auto text-center justify-content-center">
          <input type="radio" name="decision" v-model="historia.decision3" :value="true" id="playa">
          <label class="radio-inline bg-1 clickeable text-center text-center" for="playa">
           Volver a la playa
          </label>

          <input type="radio" name="decision" v-model="historia.decision3" :value="false" id="volar">
          <label class="radio-inline bg-2 clickeable text-center" for="volar">
           Poder volar
          </label>


         </div>

        </div>

        <div v-if="historia.decision3 == false">

         <div class="row p-5">

          <div class="col-6">
           <img src="../assets/playa.png" alt="Playa" class="img-fluid">
          </div>

          <div class="col-6">
           <p>De repente {{historia.nombre}} se empieza a elevar en el aire y deja atrás el salvavidas. Desde la altura
            se puede ver todo!
           </p>
           <p>Visualiza la playa y se dirige hacia ella.</p>
           <p>Después de un rato volando {{historia.nombre}} se encuentra de nuevo en la playa donde todo comenzó. El
            genio desapareció, y
            no
            escucha más que el tranquilo murmullo de las olas</p>
           <p>Ya es hora de volver a casa...</p>
           <p>Concocer a un genio fue algo increible!</p>
           <ComponenteFin/>



          </div>
         </div>
        </div>


        <div v-if="historia.decision3">
         <div class="row p-5">

          <div class="col-6">
           <img src="../assets/playa.png" alt="Playa" class="img-fluid">
          </div>

          <div class="col-6">

           <p>Sin más, {{historia.nombre}} se encuentra de nuevo en la playa donde todo comenzó. El genio desapareció, y
            no se
            escucha más que el tranquilo murmullo de las olas</p>
           <p>Ya es hora de volver a casa...</p>
           <p>Concocer a un genio fue algo increible!</p>
           <ComponenteFin/>



          </div>

         </div>
        </div>
       </div>
      </div>


     </div>
    </div>

   </div>
 </main>
</template>

<script>
  import ComponentChoiceVue from '@/components/ComponentChoice.vue';
  import ComponenteElecciones from '@/components/ComponenteElecciones.vue';
  import ComponenteFin from '@/components/ComponenteFin.vue'
export default {
    components: {
      ComponentChoiceVue,
      ComponenteElecciones,
      ComponenteFin
    },
    data(){
        return {
          nombreweb: "Elige tu propia aventura",
          historia: {
          nombre: "",
          continuar: false,
          continuar2: false,
          condicional2: null,
          decision: null,
          continuar3: false,
          continuar4: false,
          },
            textoColor: "color fs-4 fw-bold",
            }
  }
}
</script>

<style>
.nombre-personaje label{
color: #232323 !important
}

.nombre-personaje input{
border: 1px solid gray
}

.container button{
 margin: 50px 0 !important;
}


.text-main {
 font-weight: 800;
 /* color:#365875; */
 color: #66A4BC;
 font-size: 40px;

}

.text-color {
 color: #365875;
}

.btn-color-outline,
.btn-color:hover {
 border: #66A4BC 1px solid !important;
 color: #66A4BC !important;
 background-color: transparent !important;
 padding: 15px 25px !important;
 border-radius: 25px;
 font-size: 20px;
 transition: all .3s;
}

.btn-color-outline:hover,
.btn-color {
 border: #66A4BC 1px solid !important;
 background-color: #66A4BC !important;
 color: #fff !important;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px;
 transition: all .3s;
}

.descripcion-inicio {
 font-size: 20px;
}


.clickeable {
 cursor: pointer;
}


.botones-choice input[type="radio"] {
 opacity: 0;
 position: fixed;
 width: 0;
}

.botones-choice .bg-1 {
 border: #E5B14A 1px solid;
 color: #E5B14A;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px;
 transition: all .3s;
}

.botones-choice .bg-1:hover {
 box-shadow: 0 20px 39px 0 #e5b14a8f;
 background-color: #f9be49;
 color: white;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px
}

.botones-choice input[type="radio"]:checked+.bg-1 {
 box-shadow: 0 20px 39px 0 #e5b14a8f;
 background-color: #f9be49;
 color: white;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px
}

.botones-choice .bg-2 {
 border: #BB511B 1px solid;
 color: #BB511B;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px;
 transition: all .3s;
}

.botones-choice .bg-2:hover {
 box-shadow: 0 20px 39px 0 #78341283;
 background-color: #783412;
 color: white;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px
}

.botones-choice input[type="radio"]:checked+.bg-2 {
 box-shadow: 0 20px 39px 0 #78341283;
 background-color: #783412;
 color: white;
 padding: 15px 25px;
 border-radius: 25px;
 font-size: 20px
}

.fin {
 font-size: 50px;
 font-weight: 900;
 color: #66A4BC;
 text-align: center;
}

.bg-color {
 background-color: #f9be494a;
 padding: 40px;
 border-radius: 30px;
}



.navbar {
 background-color: #E5B14A;
 color: white !important;
 font-weight: 700;
 padding: 10px
}

.navbar a {
 color: white !important;

}

.color {
 color: #66A4BC;
 font-weight: 800;
}

.interesante {
 color: #66A4BC;
 font-weight: 300;
}

#nombre {
 border: #66A4BC 1px solid;
 border-radius: 25px;
}

#nombre:focus,
#nombre:active {
 border: #66A4BC 1px solid !important;
 border-radius: 25px;
 box-shadow: 0 10px 19px 0 #66a4bc5d;
}

.border-rounded {
 border-radius: 50px;
}

.img-fluid{
 max-width: 100%;
}

.v-application p{
 line-height: 1.3;
}
</style>