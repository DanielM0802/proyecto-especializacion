<template>
<div class="bg-secondary py-5">
    <div class="container">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" @click="onClick(true)">
            <a class="nav-link active">Login</a>
        </li>
        <li class="nav-item" @click="onClick(false)">
            <a class="nav-link">Registro</a>
        </li>
        </ul>
        <LoginApp v-if="mostrarLogin"/>
        <RegisterForm v-if="!mostrarLogin"/>
    </div>
</div>


</template>

<script>
import LoginApp from './LoginApp.vue'
import RegisterForm from './RegisterForm.vue'

export default {
    components: {
        LoginApp,
        RegisterForm
    },
    data(){
        return {
            mostrarLogin: true
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