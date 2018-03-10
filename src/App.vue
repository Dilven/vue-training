<template>
    <v-app id="app">
        <v-container>
          <img src="./assets/logo.png">
          <Products />
        </v-container>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Products from './pages/Products.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Products,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
