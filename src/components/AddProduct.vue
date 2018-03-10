<template>
    <form @submit.prevent="addItem()">
        <v-btn color="success" @click="addItem()">Dodaj</v-btn>
        <input v-model="item" name="product" v-validate="'required|min:3'" placeholder="Dodaj produkt"/>
        <p>{{item}}</p>
        <div v-show="errors.has('product')">
            {{ errors.first('product') }}
        </div>
    </form>
</template>

<script>

    export default {
        name: AddProduct,
        data() {
            return {
                item: "",
            }
        },

        methods: {

            addItem() {
                console.log('AddProduct');
            }
        }
    }
</script>