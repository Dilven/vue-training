<template>
    <ul>
        <li :key="orderItem.id" v-for="orderItem in orderItems">{{orderItem.name}}</li>
        <p v-if="!orderItems.length">No products!</p>
    </ul>
</template>

<script>

export default {
    name: 'OrderList',
    props: {
        orderItems: {
            type: Array,
        }
    }
}

</script>