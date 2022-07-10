<template>
  <div class="mask d-flex align-items-center h-100 py-5" v-if="acciones.mostrarLoginForm">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card form-container" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Inicia sesión</h2>
              <form>
                <div class="form-outline mb-4">
                  <input type="text" id="username" name="username" class="form-control form-control-lg" v-model="username" required/>
                  <label class="form-label" for="username" >Nombre de usuario</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Contraseña</label>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="boton-primario" @click="login('mostrarSesionEstudio', username)">Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <SesionEstudio v-if="acciones.mostrarSesionEstudio" :currentUser="currentUser"/>
  </div>
</template>

<script>
import axios from 'axios';
import SesionEstudio from './SesionEstudio.vue';

export default {
  name: 'LoginApp',
  components: {
    SesionEstudio
  },
  data() {
    return {
      acciones: {
        mostrarLoginForm: true,
        mostrarSesionEstudio: false
      },
      username: null,
      currentUser: null,
      users: [],
      ultimaAccion: 'mostrarLoginForm',
    }
  },
  methods: {
    login(accion, username) {      
      for (let index = 0; index < this.users.length; index++) {
        
        if (this.users[index].username === username) {
          console.log('funciona');
          this.acciones[this.ultimaAccion] = false;
          this.acciones[accion] = true ;
          this.ultimaAccion = accion;
          this.currentUser = this.users[index];

          break;
        }
        
      }
    }
  },
  async mounted() {
    await axios.get(`https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/`).then((respuesta) => {
      this.users = respuesta.data;
    })
  }
}
</script>

<style scoped>

</style>