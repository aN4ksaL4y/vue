<template>
    <div>
        <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @delete="deleteTodo"
            @toggle="toggleTodo"
            @edit="editTodo"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue';

export default {
    components: { TodoItem },
    computed: {
        ...mapGetters(['todos']),
    },
    methods: {
        deleteTodo(id) {
            this.$store.dispatch('deleteTodo', id);
        },
        toggleTodo(id) {
            this.$store.dispatch('toggleTodo', id);
        },
        editTodo({ id, newTodo }) {
            this.$store.dispatch('editTodo', { id, newTodo });
        },
    },
};
</script>
