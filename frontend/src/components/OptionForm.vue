<template>
<div class="fondo py-5">
    <div class="container">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" v-if="mostrarAcciones">
            <li class="nav-item" @click="onClick(true)">
                <a class="nav-link option-btn" :class="{'boton-primario' : mostrarLogin}">Login</a>
            </li>
            <li class="nav-item" @click="onClick(false)" >
                <a class="nav-link option-btn" :class="{'boton-primario' : !mostrarLogin}">Registro</a>
            </li>
        </ul>
        <div class="usuario-autenticado" v-if="usuarioAutenticado">
            <SesionEstudio v-if="!mostrarLogin"/>
        </div>
        <div class="hola" v-if="!usuarioAutenticado">
        <LoginApp v-if="mostrarLogin" v-on:mostrar_acciones="toggleAcciones"/>
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
            usuarioAutenticado: false,
            mostrarAcciones: true
        }
    },
    methods: {
        onClick(mostrar){
            this.mostrarLogin = mostrar;
        },
        toggleAcciones(estado){
            this.mostrarAcciones = estado;
        }
    }
}
</script>

<style>
    :root{
        --primary : #1E293B;
        --secondary: rgb(15 23 42/1);
        --btnColor : rgb(137,25,248);
        --textColor : rgb(229 229 229/1);
    }
    body{
        color: var(--textColor)!important;
        font-family: Josefin sans,Noto sans,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial !important;
    }
    .fondo{
        background-color: var(--primary);
    }
    .form-container{
        background-color: var(--secondary)!important;
    }
    .boton-primario{
        background-color: var(--btnColor)!important;
        color: var(--textColor)!important;
        border-radius: 5px;
        padding: 10px 20px;
        display: block;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 700;
        letter-spacing: 1.2px;
        background-image: linear-gradient(60deg,var(--theme-ui-colors-primary,rgb(137,25,248)),var(--theme-ui-colors-pink,rgb(230,74,145)))!important;
    }
    .option-btn{
        text-transform: uppercase;
        letter-spacing: 1.25px;
        color: var(--textColor)!important;
    }
</style>