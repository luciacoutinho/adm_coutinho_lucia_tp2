<template>
<div id="cuento-personalizado">
    <form v-on:submit.prevent novalidate>
      <h3> ¿Querés crear tu propio mini cuento?</h3>
      <p>Armá tu mini historia en base a una de nuestras plantillas</p>
            <div class="form-group mx-auto d-flex gap-2 botones-choice center">
            <input type="radio" v-model="vue.exp" :value="true" id="vamos">
            <label class="radio-inline bg-1 clickeable text-center text-center" for="vamos">
             ¡Vamos!
            </label>

            <input type="radio" v-model="vue.exp" :value="false" id="no">
            <label class="radio-inline bg-2 clickeable text-center" for="no">
             No
            </label>


           </div>

      
        <div v-if="vue.exp == true" class="animate__animated animate__fadeIn formulario-cuento">
         <div class="center">
        
          <div class="titulo">
          <label>Nombre del cuento:</label></div>
          <div class="titulo">
          <input type="text" v-model.trim="cuento_data.titulo" placeholder="Titulo" required/></div>
          </div>

          <div class="parrafo-cuento">
          <p>
            Había una vez un <input type="text" v-model="cuento_data.personaje2"  placeholder="Tu animal favorito" name="personaje2" /> llamado
            <input type="text" v-model="cuento_data.nombre"  placeholder="Ingrese su nombre" name="nombre" /> que iba paseando por el bosque, cuando de repente le agarró hambre. Tenía ganas de comer                         <input type="text" v-model="cuento_data.comida"  placeholder="Ingrese una comida" name="comida" />, asi que pasó por
             
            <input type="text" v-model="cuento_data.lugar"  placeholder="Su restaurante favorito" name="lugar" />y luego con la panza llena siguió su camino
          </p>
          </div>
          <div class="center">
            <button type="button" @click="guardar(cuento_data)" class="guardar" value="Crear cuento">Crear Cuento</button>
          </div>
        </div>
        <div v-else-if="vue.exp == false" >
          <p>Que lastima! Podés regresar cuando quieras para continuar con tu historia</p>
        </div>

    </form>

    <div v-if="enviado === true">
      <div v-if="hayErrores" class="classerror">
        <ul>
          <li v-bind:key="error" v-for="error in errores">{{error}}</li>
        </ul>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'Cuento_interactivo',
data:function(){
    return {
      cuento_data:{
        titulo:"",
        nombre:"",
        personaje2: "",
        lugar:"",
        comida:"",
        fecha:""
        },
    arr:[],
		errores:[],
    enviado: false,
    vue: {
                exp: null
            }
    }

  }, 
  computed : {
        hayErrores: function(){
            return this.errores.length; 
        }
    },  
 methods:{
  guardar:function(cuento_data){
    this.enviado = true; 
    this.errores=[] 

    if (!this.cuento_data.titulo) {
        this.errores.push('Ingresá un titulo para tu historia');
    }
    if(this.cuento_data.titulo && this.cuento_data.titulo.length < 4) {
      this.errores.push('Debes ingresar un titulo más largo');
                     
    }

    if (!this.cuento_data.nombre) {
        this.errores.push('Debes ingresar un nombre a tu personaje');
    }
    if(this.cuento_data.nombre && this.cuento_data.nombre.length < 4) {
      this.errores.push('Es un nombre muy corto para tu personaje.');
                     
    }
    if (!this.cuento_data.personaje2) {
      this.errores.push('Debes ingresar un animal');
                   
    }
    if(this.cuento_data.personaje2 && this.cuento_data.personaje2.length < 4) {
      this.errores.push('Debes ingresar un nombre de animal mas largo');
                     
    }
    if (!this.cuento_data.comida) {
      this.errores.push('Debes ingresar una bebida');
    }
    if(this.cuento_data.comida && this.cuento_data.comida.length < 4) {
      this.errores.push('Debes ingresar una comida de más de 4 caracteres');
    }
    if (!this.cuento_data.lugar) {
      this.errores.push('Debes ingresar un restaurante.');
    }
    if(this.cuento_data.lugar && this.cuento_data.lugar.length < 4) {
      this.errores.push('Es muy corto el nombre del restaurante.');
    }

cuento_data = Object.assign({}, cuento_data, { fecha: new Date().getTime() })

    if(this.errores.length == 0){

    if(!localStorage.dato){
      this.arr=[]
    }else{
      this.arr=JSON.parse(localStorage.getItem("dato"))
      }


  this.arr.push(cuento_data)
  localStorage.setItem("dato",JSON.stringify(this.arr))

  this.$router.push('/cuentos');

}
}
},
}
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


* {
    font-family: 'Poppins', sans-serif;
    line-height: 20px;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}

body {
    padding: 0%;
    margin: 0%;
    background-color: #ffffff;
    color: #2c4556;
}

ul li, ol li {
    list-style-type: none;
    margin: 10px;
 }

a {
    text-decoration: none;
    color: black;
}
p em {
    font-style: normal;
    
}

h2 {
    font-size: 2.2em;
    font-weight: 800!important;
   
    line-height: 40px;
    text-align: left;
    color: #66A4BC;
    text-transform: none
}

.light{
 font-weight: 400!important;
 color: #2c4556 !important;
 text-transform: none !important;
}

.font-small{
 font-size: 1.7rem;
}

h3 {
    /* margin: 40px 20px; */
    font-weight: 600!important;
    text-transform: uppercase;
    font-size: 1.4em;
    line-height: 30px;
    text-align: left;
    color: #5687a8;
} 

h4 {
    text-transform: none;    
    font-size: 1.125em;
    line-height: 40px;
}
#cuento-personalizado p {
    margin: 20px;
    font-size: 1em;
    line-height: 26px;
    text-align: center;
    width: 100%;
}



img {
    margin: auto;
    display: grid;
}


/* animacion */

.fade-enter {
    opacity: 0;
  }
  
  .fade-enter-active {
    transition: opacity 0.3s ease;
  
  }
  
  .fade-leave-active {
    transition: opacity 0.3s ease;
    opacity: 0;
}

/* Bibliotica interactiva */



#cuento-personalizado h3 {
    margin-top: 100px;
    text-align: center;
}


#cuento-personalizado img {
    margin: 20px auto;
}

button{
	background:DodgerBlue;
	color:white; 
	border:none;
	width:250px;
	padding:10px; 
	margin:20px; 
}
input {
  display: block;
}

.ver{ 
	padding:30px;
}

.form div{
	padding:15px;
}

label, input[type="text"], input[type="number"], textarea,select{
	display:inline-block;
	margin:5px; 
	color:black;
	text-align: left; 
}

label{
	color:white;
	padding-top:10px;
}

textarea{
	resize:none;
}

input[type="text"]{color:grey} input[type="submit"]{
	background:DodgerBlue;
	color:white; 
	border:none;
	padding:10px;  
	display: inline-block; 
	margin:20px auto ;
}

.ver{ 
	padding:30px;
}

select{
	margin:10px 20px;
}

.classerror{
	background: #E5B14A;
	color:white;
	width: 800px; 
	margin:auto;
	box-sizing:border-box;
	border-radius: 5px;
}

.classerror li{
	color:white;
	border:none;
	padding:10px;
}

.enviado{
	border:solid 1px green; 
	background:#43a047; 
	border-radius:5px;
	width: 800px;
	color:white; 
	font-weight: bold;
	text-align: center;
	margin:auto; 
	box-sizing:border-box;
}

:focus{
	outline:white 1px solid;
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

.formulario-cuento label{
 color: #2c4556;
 padding-top: 50px;

}

.titulo label{
 color: #783412
}

.titulo input{

  border-bottom: 1px solid #783412;
  text-align: center;
  border-radius: 0 !important;
}

.titulo input::placeholder{
 text-align: center;
}

.parrafo-cuento{
 padding: 10px 160px
}

.parrafo-cuento input{

  border-bottom: 1px solid #783412;
  text-align: center;
  border-radius: 0 !important;
}

</style>
