<template>
    <div>
        <input v-model="username" placeholder="Username here">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ index }} {{ item }}
            </li>
            <button v-on:click="addItem">Add Item</button>
        </ul>


    </div>
</template>
<script>
    export default {
        data (){
            return {
                username:'',
                items: ['item', 'item', 'item']
            }
        },
        methods:{
            addItem(){
                this.items.push(this.username);
            }
        }
    }
</script>