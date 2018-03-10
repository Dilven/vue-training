<template>
    <ol>
        <li :key="product.id" v-for="(product, index) in products">{{ product.name }}
            <v-btn color="error" @click="removeItem(index)">Usun</v-btn> 
        </li>
    </ol>
</template>

<script>

    export default {
        name: 'ProductsList',
        props: {
            products: {
                type: Array,
            }
        },
        methods: {

            removeItem(index) {
                
                this.$emit('onRemoveItem', index)
            }
        }
    }
</script>