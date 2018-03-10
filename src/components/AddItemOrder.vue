<template>
    <form @submit.prevent="onAddItemOrder()">
        <select class="select" v-model="selected">
            <option :value="product.id" :key="product.id" v-for="product in products">{{ product.name }}</option>
        </select>
        <v-btn color="succes" @click="onAddItemOrder()"> Dodaj do zamówienia</v-btn>
    </form>
</template>

<script>
    export default {
        name: 'AddItemOrder',
        method: {
            onAddItemOrder() {
                console.log('AddItemOrder');
            }
        }
    }
</script>