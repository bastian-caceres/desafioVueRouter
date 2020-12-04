<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">    
    <router-link tag="div" class="navbar-brand" to="/">Navbar</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">Inicio <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'SobreMi'}">SobreMi</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Contacto'}">Contacto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Post', params: {nombre: '1'}}">Ultimo Post</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

</style>
