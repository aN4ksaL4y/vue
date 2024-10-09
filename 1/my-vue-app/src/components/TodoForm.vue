<template>
  <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new task" required />
      <select v-model="selectedCategory">
          <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
          </option>
      </select>
      <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
      return {
          newTodo: '',
          selectedCategory: 'Work',
      };
  },
  computed: {
      ...mapGetters(['categories']),
  },
  methods: {
      addTodo() {
          const todo = {
              id: Date.now(),
              text: this.newTodo,
              category: this.selectedCategory,
              completed: false,
          };
          this.$store.dispatch('addTodo', todo);
          this.newTodo = '';
      },
  },
};
</script>
