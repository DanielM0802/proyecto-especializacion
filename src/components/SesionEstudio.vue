<template>
  <h1>{{sesion.username}}</h1>
</template>

<script>
export default {
    data(){
        return{
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
    }
}
</script>

<style>

</style>