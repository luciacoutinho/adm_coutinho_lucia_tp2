<template>
  <div>
    <section id="home">
    <h2>¡Elige tu propia aventura! <br><span class="light font-small">Historias en donde vos sos el protagonista</span></h2>
    <div>
      <img src="../assets/chica_leyendo_libros.png" alt="Chica leyendo libros">
    </div>
  </section>
  <section id="sobre-nosotros">
    <div>
        <img src="../assets/libros.png" alt="Niño leyendo sobre un banco">
    </div>
    <div class="textito">
        <h3>¿Qué es "Elige tu propia aventura"?</h3>
          <p>
            Este sitio web brinda una versión online de los libros de "Elige tu propia aventura", en los que el lector puede elegir entre multiples finales posible segun las decisiones que tome a lo largo de la historia. 
            Tenemos disponible una historia de prueba ("El genio de la botella") a modo de demostración. Podés encontrar más historias en los libros físicos en tu librería mas cercana!
            
          </p>
    </div>
</section>
<section id="servicios">
<div class="textito">
<h3>¿Que podés hacer en la página?</h3>
    <p>
        Además de poder disfrutar de nuestra historia interactiva demo, podrás crear tus propios mini cuentos junto con tus niños y guardarlos en tu librería. Buscamos llegar a un público infantil para contribuir al desarrollo y fomentar la creatividad de los más pequeños.  
    </p>
</div>
<div>
    <img src="../assets/nino_leyendo.png" alt="Chico con pegatinas sorprendido">
  </div>
</section>
<section id="catalogo-mini-cuentos">
    <h3 class="center">Nuestros mini cuentos <br>para compartir con los más pequeños:</h3>
     <Minicuentos/> 
  </section>
  <section>
    <div class="form textito">
    <h3> ¡Contactanos!</h3>
		<p> ¿Quieres recibir un cuento a la semana de nuestro cátalogo? <br> Completa el formulario y ¡Comienza la aventura! </p>
    <form v-on:submit.prevent>
<div class="d-flex">
     <div>
    <label>Nombre*</label>
      <input type="text" v-model="form_data.nombreUser" placeholder="Nombre"/></div>

      <div>
      <label>Apellido*</label>
      <input type="text" v-model="form_data.apellido" placeholder="Apellido"/></div>
      </div>
    
      <div class="d-flex">
      <div>
    <label> Telefono</label>
    <input v-model="form_data.telefono" type="number" placeholder="15-0000-0000"></div>

    <div>
    <label>Email*</label>
    <input type="text" v-model="form_data.email" placeholder="usuario@mail.com"/></div></div>

    <div class="center">
    <button type="submit" @click="guardar(form_data)" value="enviar">Enviar</button>
    </div>

    </form>
            <div v-if="enviar === true">
                <div v-if="hayError" class="classerror">
                    <ul>
                        <li v-bind:key="x" v-for="x in error">{{x}}</li>
                    </ul>
                </div>
                    <div v-else class="enviar">
                        <span>Enviado con éxito, pronto te llegará un mail</span>
                    </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
import Minicuentos from '../components/Minicuentos.vue'

export default {
  name: 'Home',
  components: {
    Minicuentos
  },
  data:function(){
    return {
      form_data:{
        nombreUser:null,
        apellido:null,
        telefono:null,
        email:null
        },
      user:[],
      error:[],
      enviar: false
    }

  }, 
  computed : {
    hayError: function(){
      return this.error.length; 
    }
  },
  methods:{
  guardar:function(form_data){

    this.enviar = true; 
    this.error=[] 

    if (!this.form_data.nombreUser) {
      console.log(!this.form_data.nombreUser)
      this.error.push('El nombre es obligatorio.'); 
      }

    if(this.form_data.nombreUser && this.form_data.nombreUser.length < 3) {
      this.error.push('Debe tener mas de 3 caracteres.');   
    }

    if (!this.form_data.apellido) {
      console.log(!this.form_data.apellido)
      this.error.push('El apellido es obligatorio.');	 
    }
	
    if(this.form_data.apellido && this.form_data.apellido.length < 3) {
      this.error.push('Debe tener mas de 3 caracteres.');
    }

    if (!this.form_data.email) {
      console.log(!this.form_data.email)
      this.error.push('El email es obligatorio.');
    }

    if(this.form_data.email && this.form_data.email.length < 8) {
      this.error.push('Debe ser un email real.');
    }

    

    if(this.error.length == 0){

        if(!localStorage.info){
          this.user=[]
        }else{
          this.user=JSON.parse(localStorage.getItem("info"))
        }

      this.user.push(form_data)
      localStorage.setItem("info",JSON.stringify(this.user))
    }



}
},
}
</script>

<style>
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
}

.contenedor {
	margin:auto; 
}

header{
 background-color: #E5B14A !important;
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

h1 {
  
    width: 150px;
    height: 50px;
    margin-left: 50px;
}

h2 {
    font-size: 1.8em;
    font-weight: 800!important; 
    text-align: left;
}

#home h2 {
  margin: 15% 0 0 60px;
}

h3 {
    /* margin: 40px 20px; */
    font-weight: 600!important;
    text-transform: uppercase;
    font-size: 1.4em;
    line-height: 30px;
    text-align: left;
} 

#titulo-minicuentos {
  margin: 40px 100px;
}

h4 {
    text-transform: none;
    
    font-size: 1.125em;
    line-height: 40px;
    color:#365875;
}


img {
    margin: auto;
    display: grid;
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
	background:#ee1511;
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



#home h2 {
    display: inline-block;
    width: 35%;
    vertical-align: top;
    margin: 250px 0 0 100px;
}

#home div {
    display: inline-block;
    width: 55%;
}



/* Sobre-nosotros y servicios */

#sobre-nosotros {
    margin-bottom: 40px;
}

#sobre-nosotros div, #servicios div {
    display: inline-block;
    width: 45%;
    vertical-align: top;
}



.textito{
 margin-top: 90px
}
.textito h3, #catalogo-mini-cuentos h3{
 padding-bottom: 30px;
 text-transform: none !important;
 font-size: 2.2rem;
 line-height: 2.5rem;
 
}

.textito p{
 font-size: 1.2rem;
 line-height: 1.4rem;
 
}

#servicios {
    margin: 30px 100px;
}

#servicios .textito{
 margin-top: 40px
}

#catalogo-mini-cuentos{
 margin-top: 90px;
 margin-right: 100px;
 margin-left: 100px;
}


#mis-cuentos ul li {
    display: inline-block;
}

.nuestras-mini_cuentos{
 box-shadow: 0 10px 29px 0 rgb(68 88 144 / 10%);
 padding: 30px;
 border-radius: 30px;
}



/* Contacto */


.center{
 margin: auto;
 text-align: center;
 justify-content: center;
}

.center button{
 margin: 20px auto;
 background-color: #66A4BC;
 color: #fff;
 transition: all .3s ease-in-out;
 border-radius: 20px !important;
}

.center button:hover{
 background-color: #365875;

}



.form{
 background-color: #f7f7f7 ;
 color: #365875;
 padding-top: 80px;
}

form{
 margin: auto;
}

.form p {
    /* width: 30%; */
    margin: 0 auto;
    text-align: center;
    /* padding: 0 350px */
}

.form h3 {
    text-align: center;
    margin: auto;
}

.form .d-flex{
 display: flex;
 justify-content: center;
}
.form label {
    display: block;
    text-align: left;
    width: 250px;
    color: #365875;
}

.form input {
    width: 350px;

}

.form input[type="submit"] {
    display: block;
}

.enviar{
 text-align: center;
}

input[type="submit"], button {
    box-sizing:border-box;
	border-radius: 5px!important;
}

input, select, textarea {
    background-color: #fff!important;
    padding: 10px 15px;
    border-radius: 28px;
}

footer{
 /* margin: auto; */
 background-color: #E5B14A;
 text-align: center;
}

.form-editar label{
 width: auto;
 text-align: center;

}

.form-editar{
 margin: 10px 100px
}

.column{
 flex-direction: column !important;
}



</style>
