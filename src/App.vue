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
import Products from './components/Products.vue';
import ProductsList from './components/ProductsList.vue';
import OrderList from './components/OrderList.vue';
import AddItemOrder from './components/AddItemOrder';
import AddProduct from  './components/AddProduct.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Products,
    ProductsList,
    OrderList,
    AddItemOrder,
    AddProduct
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
