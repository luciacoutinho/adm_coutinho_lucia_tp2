<template>
  
<div class="container">
<div class="form">
    <h3> ¡Contactanos!</h3>
		<p> Escribinos para obtener mas cuentos de nuestro catalogo por mail </p>
    <form v-on:submit.prevent>

    <label>Nombre*</label>
      <input type="text" v-model="form_data.nombre" placeholder="Nombre"/>

      <label>Apellido*</label>
      <input type="text" v-model="form_data.apellido" placeholder="Apellido"/>

    
    <label> Telefono</label>
    <input v-model="form_data.telefono" type="number" placeholder="15-0000-0000">

    <label>Email*</label>
    <input type="text" v-model="form_data.email" placeholder="usuario@mail.com"/>

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
    </div>

  </div>
  </div>
  
</template>

<script>
export default {
  name: 'Form',
data:function(){
    return {
      form_data:{
        nombre:null,
        apellido:null,
        selected:[],
        telefono:null,
        email:null,
        fecha:""
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

    if (!this.nombre) {
      console.log(!this.nombre)
      this.error.push('Debe ingresar un nombre'); 
      }

    if(this.nombre && this.nombre.length < 2) {
      this.error.push('El nombre debe tener más de 2 caracteres.');   
    }

    if (!this.apellido) {
      console.log(!this.apellido)
      this.error.push('Debe ingresar un apellido.');	 
    }
	
    if(this.apellido && this.apellido.length < 2) {
      this.error.push('El apellido debe tener mas de 2 caracteres.');
    }

    if (!this.email) {
      console.log(!this.email)
      this.error.push('Debe ingresar un mail.');
    }

    if(this.email && this.email.length < 8) {
      this.error.push('Ingrese un email valido');
    }

    

    form_data = Object.assign({}, form_data, { fecha: new Date().getTime() })

    if(this.error.length == 0){

        if(!localStorage.dato){
          this.user=[]
        }else{
          this.user=JSON.parse(localStorage.getItem("dato"))
        }

      this.user.push(form_data)
      localStorage.setItem("dato",JSON.stringify(this.user))
    }



}
},

}
</script>

