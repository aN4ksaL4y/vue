<template>
    <div>
        <h1>To-Do List</h1>
        <todo-form />
        <todo-list />
    </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';

export default {
    components: {
        TodoForm,
        TodoList,
    },
};
</script>
