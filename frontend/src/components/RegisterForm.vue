<template>
  <div class="mask d-flex align-items-center h-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card form-container" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Crea tu cuenta</h2>

              <form @submit.prevent="onSubmit">

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="user.name" />
                  <label class="form-label" for="form3Example1cg">Tu Nombre</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3cg" class="form-control form-control-lg" v-model="user.username" />
                  <label class="form-label" for="form3Example3cg">Tu nombre de usuario</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="user.password" />
                  <label class="form-label" for="form3Example4cg">Contraseña</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repite tu contraseña</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="boton-primario">Registrarme</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data(){
    return {
      user: {
        name: null,
        username:null,
        password: null,
      }
    }
  },
  mounted(){

  },
  methods: {
    
    async onSubmit(){
      const url = 'http://localhost:3000/api/users/';
      await axios.post(url, this.user).then(res => console.log(res.data));
    }

  }

}
</script>

<style>
</style>