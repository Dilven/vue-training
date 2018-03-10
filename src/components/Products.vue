<template>
    <div> 
        <form @submit.prevent="addItem()">
            <v-btn color="success" @click="addItem()">Dodaj</v-btn>
            <input v-model="item" name="product" v-validate="'required|min:3'" placeholder="Dodaj produkt"/>
            <p>{{item}}</p>
            <div v-show="errors.has('product')">
                {{ errors.first('product') }}
            </div>
        </form>
        <ol>
            <li :key="product.id" v-for="(product, index) in products">{{product.id}} {{ product.name }}
                <v-btn color="error" @click="removeItem(index)">Usun</v-btn> 
            </li>
        </ol>
        <form @submit.prevent="onAddItemOrder()">
            <select class="select" v-model="selected">
                <option :value="product.id" :key="product.id" v-for="product in products">{{ product.name }}</option>
            </select>
            <v-btn color="succes" @click="onAddItemOrder()"> Dodaj do zamówienia</v-btn>
        </form>
        <ul>
            <li :key="orderItem.id" v-for="orderItem in orderItems">{{orderItem.name}}</li>
            <p v-if="!orderItems.length">No products!</p>
        </ul>
    </div>
</template>
<script>
import _ from 'lodash';

export default {
    name: 'Products',
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

        addItem() {

            this.$validator.validateAll().then(result => {
                if (!result) {
                return;
            }
            this.item = "";
            this.$validator.reset();
            });
        },
        
        removeItem(index) {
            this.products.splice(index, 1)
        },
        
        onAddItemOrder() {

            const item = _.find(this.products, ['id', this.selected])
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