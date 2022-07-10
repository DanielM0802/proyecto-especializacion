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
                    <tr class="list-row-hover" v-for="session in user.sessions" :key="session.id">
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


export default {

    props: {
        currentUser: Object,
    },

    data() {
        return {
            user: this.currentUser,
            graficoSesiones: null,
        }
    },
    async mounted() {
        const ctx = document.getElementById('myChart');
        const labels = [];
       
        this.user.sessions.forEach(sesionActual => {
            labels.push('Sesion '.concat(sesionActual.id))
        });

        const data = {
            labels: labels,
            datasets: [{
                label: 'Rendimiento (puntajes)',
                backgroundColor: 'rgb(30,144,255)',
                borderColor: 'rgb(30,144,255)',
                data: this.user.sessions.map(sesionActual => sesionActual.score)
            },
            {
                label: 'Tiempo (minutos)',
                backgroundColor: 'rgb(255, 51, 51)',
                borderColor: 'rgb(255, 51, 51)',
                data: this.user.sessions.map(sesionActual => sesionActual.duration)
            }]
        };
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true
            }
        };

        this.graficoSesiones = new Chart(ctx, config);
    }
}
</script>

<style scoped>
.grafico {
    width: 1000px;
    height: 530px;
}
</style>