<template>
    <div>
        <div v-if="tipo == 'avanzado'">
            <h1>eres administrador avanzado</h1>
        </div>
        <div v-else-if="tipo == 'simple'">
            <h1>eres administrador simple</h1>
        </div>
        <div v-else>
            <h1>la ruta no existe</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Administracion',
        props: ['tipo'],
    }
</script>

<style scoped>

</style>