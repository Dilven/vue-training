<template>
    <div> 
        <add-product @onAddProduct="handleAddProduct"></add-product>
        <products-list :products="products" @onRemoveItem="handleRemoveItem"></products-list>
        <add-item-order :products="products" @onAddItemOrder="handleAddItemOrder"> </add-item-order>
        <order-list :orderItems="orderItems" ></order-list>
    </div>
</template>
<script>
import _ from 'lodash';

import ProductsList from '../components/ProductsList.vue';
import OrderList from '../components/OrderList.vue';
import AddItemOrder from '../components/AddItemOrder';
import AddProduct from  '../components/AddProduct.vue';

export default {
    name: 'Products',
    components: {
        ProductsList,
        OrderList,
        AddItemOrder,
        AddProduct
    },
    data() {
        return {
            products: [{
                id: 0,
                name: 'Coffee'
            }, {
                id: 1,  
                name: 'Pizza'
            }],
            item: "",
            selected: "",
            orderItems: [],
        }
    },

    methods: {

        handleAddProduct(product) {
            this.products.push(product);
        },

        handleRemoveItem(index) {
            this.products.splice(index, 1)
        },
        
        handleAddItemOrder(selected) {

            const item = _.find(this.products, ['id', selected])
            this.orderItems.push(item)
        }
    } 
}
</script>
<style>
    .select {
        border: 1px solid black;
        padding: 10px;
    }

</style>