<template>
    <div>

        <h2>Bienvenidx estimadx {{user.username}}!</h2>
        <div class="sesion-listado-container">

            <h4 class="list-title">Sesiones realizadas</h4>
            <div class="card">
                <table class="table tabla-sesiones" aria-describedby="tabla-sesiones">
                <thead>
                    <tr>
                        <th id="id_sesion">ID</th>
                        <th id="fecha_sesion">FECHA</th>
                        <th id="puntaje_sesion">PUNTAJE</th>
                        <th id="tiempo_sesion">TIEMPO (minutos)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="list-row-hover" v-for="session in sessions" :key="session.id">
                        <th :id="session.id">{{session.id}}</th>
                        <td>{{session.date}}</td>
                        <td>{{session.score}}</td>
                        <td>{{session.duration}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        <!--GRAFICO CHARTJS-->
        <div class="grafico card mt-3">
            <canvas id="myChart"></canvas>
        </div>
        <!--GRAFICO CHARTJS-->

    </div>
</template>

<script>
import Chart from 'chart.js/auto';
import axios from 'axios';

export default {

    props: {
        currentUser: Object,
    },

    data() {
        return {
            user: this.currentUser,
            graficoSesiones: null,
            sessions: []
        }
    },
    async mounted() {
        const ctx = document.getElementById('myChart');
        const labels = [];

        const respuesta1 = await axios.get(`http://localhost:3000/api/sessions/${this.user.userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.user.token
          },
        });

        const respuesta2 = await respuesta1.data.sessions
        this.sessions = respuesta2;
        console.log(respuesta2)
        respuesta2.forEach(sesionActual => {
            labels.push('Sesion '.concat(sesionActual.id))
        });

        const data = {
            labels: labels,
            datasets: [{
                label: 'Rendimiento (puntajes)',
                backgroundColor: 'rgb(30,144,255)',
                borderColor: 'rgb(30,144,255)',
                data: respuesta2.map(sesionActual => sesionActual.score)
            },
            {
                label: 'Tiempo (minutos)',
                backgroundColor: 'rgb(255, 51, 51)',
                borderColor: 'rgb(255, 51, 51)',
                data: respuesta2.map(sesionActual => sesionActual.duration)
            }]
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true
            }
        };

        console.log(this.sessions);

        this.graficoSesiones = new Chart(ctx, config);
    }
}
</script>

<style scoped>
</style>