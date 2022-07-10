<template>
<div class="bg-secondary py-5">
    <div class="container">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" v-if="!usuarioAutenticado">
            <li class="nav-item" @click="onClick(true)">
                <a class="nav-link" :class="{active : mostrarLogin}">Login</a>
            </li>
            <li class="nav-item" @click="onClick(false)" >
                <a class="nav-link" :class="{active : !mostrarLogin}">Registro</a>
            </li>
        </ul>
        <div class="usuario-autenticado" v-if="usuarioAutenticado">
            <SesionEstudio v-if="!mostrarLogin"/>
        </div>
        <div class="hola" v-if="!usuarioAutenticado">
        <LoginApp v-if="mostrarLogin"/>
        <RegisterForm v-if="!mostrarLogin"/>
        </div>
    </div>
</div>


</template>

<script>
import LoginApp from './LoginApp.vue'
import RegisterForm from './RegisterForm.vue'
import SesionEstudio from './SesionEstudio.vue'

export default {
    components: {
        LoginApp,
        RegisterForm,
        SesionEstudio
    },
    data(){
        return {
            mostrarLogin: true,
            usuarioAutenticado: false
        }
    },
    methods: {
        onClick(mostrar){
            this.mostrarLogin = mostrar;
        }
    }
}
</script>

<style>

</style>