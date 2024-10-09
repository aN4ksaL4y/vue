<template>
    <div :class="{ completed: todo.completed }">
        <span>{{ todo.text }} - {{ todo.category }}</span>
        <button @click="deleteTodo">Delete</button>
        <button @click="toggleTodo">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
        <button @click="editTodo">Edit</button>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        deleteTodo() {
            this.$emit('delete', this.todo.id);
        },
        toggleTodo() {
            this.$emit('toggle', this.todo.id);
        },
        editTodo() {
            const newText = prompt('Edit task:', this.todo.text);
            if (newText) {
                this.$emit('edit', { id: this.todo.id, newTodo: { text: newText } });
            }
        },
    },
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
