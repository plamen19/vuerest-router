<template>
       <div id="app" class="container">

              <br>

              <router-link to="/vuerest-router">Inicio</router-link> | 
              <router-link to="/agregar">Agregar nuevo</router-link>

              <router-view />

       </div>
</template>

<script>

export default {

       name: "App",

       components: {},

};
</script>
