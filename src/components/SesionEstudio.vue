<template>
    <div>

        <h2>Bienvenidx estimadx {{sesion.username}}!</h2>
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
                    <tr class="list-row-hover" v-for="session in sesion.sessions" :key="session.id">
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
    data() {
        return {
            graficoSesiones: null,
            sesion : 
                {
                id: 1,
                username: "zmorrott0",
                sessions: [
                    {
                        id: 1,
                        date: "02/11/2021",
                        score: 3.9,
                        duration: 60
                    },
                    {
                        id: 2,
                        date: "09/14/2021",
                        score: 1.6,
                        duration: 13
                    },
                    {
                        id: 3,
                        date: "10/19/2021",
                        score: 4.1,
                        duration: 47
                    },
                    {
                        id: 4,
                        date: "03/10/2021",
                        score: 1.2,
                        duration: 32
                    },
                    {
                        id: 5,
                        date: "02/06/2022",
                        score: 1.5,
                        duration: 56
                    },
                    {
                        id: 6,
                        date: "04/18/2021",
                        score: 1.2,
                        duration: 55
                    },
                    {
                        id: 7,
                        date: "12/14/2021",
                        score: 1.2,
                        duration: 42
                    },
                    {
                        id: 8,
                        date: "09/26/2021",
                        score: 4.3,
                        duration: 32
                    },
                    {
                        id: 9,
                        date: "02/01/2021",
                        score: 3.5,
                        duration: 17
                    },
                    {
                        id: 10,
                        date: "08/07/2021",
                        score: 2.9,
                        duration: 55
                    }
                ]
                },
        }
    },
    async mounted() {
        const ctx = document.getElementById('myChart');
        const labels = [];
       
        this.sesion.sessions.forEach(sesionActual => {
            labels.push('Sesion '.concat(sesionActual.id))
        });

        const data = {
            labels: labels,
            datasets: [{
                label: 'Rendimiento (puntajes)',
                backgroundColor: 'rgb(30,144,255)',
                borderColor: 'rgb(30,144,255)',
                data: this.sesion.sessions.map(sesionActual => sesionActual.score)
            },
            {
                label: 'Tiempo (minutos)',
                backgroundColor: 'rgb(255, 51, 51)',
                borderColor: 'rgb(255, 51, 51)',
                data: this.sesion.sessions.map(sesionActual => sesionActual.duration)
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