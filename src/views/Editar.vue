<template>
  
  <div>
    <div class="form">
     
    <h2 class="center">Editar cuento</h2>
   
    
    <form v-on:submit.prevent class="form-editar">
    <label>
      Pon el nuevo titulo de tu cuento
      <input type="text" v-model="nuevoObj.titulo" placeholder="Ingrese un titulo" required/>
    </label>
     <label>
      Cambia el animal de tu historia
      <input type="text" v-model="nuevoObj.personaje2"  placeholder="Tu animal favorito" name="personaje2" />
    </label>
    <label>
      Cambia el nombre de tu personaje
      <input type="text" v-model="nuevoObj.nombre"  placeholder="Ingrese su nombre" name="nombre" />
    </label>
    <label>
      Cambia la comida favorita de tu personaje
      <input type="text" v-model="nuevoObj.comida"  placeholder="Tu comida favorita" name="comida" />
    </label> 
    <label>
      Cambia el lugar de tu historia
      <input type="text" v-model="nuevoObj.lugar"  placeholder="Tu lugar favorito" name="lugar" />
    </label>
   
    <div class="center">
    <button type="button" @click="editar(nuevoObj)" class="guardar" value="Guardar">Guardar </button>
    </div>

    </form>
    <div v-if="editado === true">
      <div v-if="hayErrores" class="classerror">
        <ul>
          <li v-bind:key="error" v-for="error in errores">{{error}}</li>
        </ul>
      </div>
    </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'Editar',
  data:function(){
    return {
      nuevoObj:{titulo:this.$route.params.titulo,
                nombre: this.$route.params.nombre,
                personaje2: this.$route.params.personaje2,
                lugar: this.$route.params.lugar,
                comida: this.$route.params.comida,
                fecha:this.$route.params.fecha

        },
    arr:[],
    errores:[],
    editado: false,
}
    },     
 mounted: function(){
        this.ed();
      },
      computed : {
        hayErrores: function(){
            return this.errores.length; 
        }
    },

  methods:{
    ed:function(){
      console.log(this.$route.params.titulo)

}, editar:function(){

  this.editado = true; 
    this.errores=[] 

    if (!this.nuevoObj.titulo) {
        this.errores.push('Ponle titulo a tu historia :(');
    }
    if(this.nuevoObj.titulo && this.nuevoObj.titulo.length < 3) {
      this.errores.push('Es un titulo muy corto, ingresa algo más.');
                     
    }

    if (!this.nuevoObj.nombre) {
        this.errores.push('Debes ingresar un nombre para tu personaje');
    }
    if(this.nuevoObj.nombre && this.nuevoObj.nombre.length < 3) {
      this.errores.push('Es un nombre muy corto para tu personaje.');
                     
    }
    
    if (!this.nuevoObj.comida) {
      this.errores.push('Debes ingresar una comida.');
    }
    if(this.nuevoObj.comida && this.nuevoObj.comida.length < 3) {
      this.errores.push('Debes ingresar una comida con más caracteres.');
    }
    if (!this.nuevoObj.lugar) {
      this.errores.push('Tu historia tiene que transcurrir en un lugar.');
    }
    if(this.nuevoObj.lugar && this.nuevoObj.lugar.length < 3) {
      this.errores.push('Es muy corto el nombre del lugar.');
    }
    if (!this.nuevoObj.personaje2) {
      this.errores.push('Debes ingresar un animal');
                   
    }
    if(this.nuevoObj.personaje2 && this.nuevoObj.personaje2.length < 3) {
      this.errores.push('Debes ingresar un animal con más caracteres.');
                     
    }

    if(this.errores.length == 0){
        this.local= JSON.parse(localStorage.getItem ("dato"))

  for (var i=0; i < this.local.length; i++){
  
        if (this.local[i].fecha == this.nuevoObj.fecha ) {

            this.local.splice(i, 1);
            
          }

        }

    this.local.push(this.nuevoObj);
        localStorage.setItem("dato", JSON.stringify(this.local))
  
    this.$router.push('/cuentos');

    }

}

  },

}
</script>
