<template>
    <form @submit.prevent="AddItemOrder()">
        <select class="select" v-model="selected">
            <option :value="product.id" :key="product.id" v-for="product in products">{{ product.name }}</option>
        </select>
        <v-btn color="succes" @click="AddItemOrder()"> Dodaj do zamówienia</v-btn>
    </form>
</template> 

<script>
    export default {
        name: 'AddItemOrder',
        data() {
            return {
                selected:"",
            }
        },
        props: {
            products: {
                type: Array,
            }
        },
        methods: {

            AddItemOrder() {
                this.$emit('onAddItemOrder', this.selected)
            }
            
        }
    }
</script>