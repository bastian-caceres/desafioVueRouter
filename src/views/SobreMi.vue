<template>
  <div>

    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>Sobre mí</h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
                <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'SobreMi',
}
</script>

<style scoped>
header{
    background-image:url('../assets/img/about-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 40vh;
}
</style>