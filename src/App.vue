<template>
  <div>
    <div id="nav">
      <NavBar/>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
/* navbar */
#nav a {
  font-weight: bold;
  color: #f0f3f7;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* tranciciones */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
