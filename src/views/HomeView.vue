<template>
  <div id="app">
    <Navbar/>
    <router-view />
    <Register/>
    <Home/>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/layouts/Navbar.vue'
import Register from '../components/layouts/login/Register.vue'
import Home from'../components/pages/Home.vue'
  export default {
  name: "App",
  components: {
    Navbar,
    Register,
    Home,
  },
  };
</script>
