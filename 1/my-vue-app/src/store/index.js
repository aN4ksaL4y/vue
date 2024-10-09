import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        categories: ['Work', 'Personal', 'Urgent'],
    },
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        TOGGLE_TODO(state, id) {
            const todo = state.todos.find(todo => todo.id === id);
            todo.completed = !todo.completed;
        },
        EDIT_TODO(state, { id, newTodo }) {
            const todo = state.todos.find(todo => todo.id === id);
            Object.assign(todo, newTodo);
        },
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo);
        },
        deleteTodo({ commit }, id) {
            commit('DELETE_TODO', id);
        },
        toggleTodo({ commit }, id) {
            commit('TOGGLE_TODO', id);
        },
        editTodo({ commit }, payload) {
            commit('EDIT_TODO', payload);
        },
    },
    getters: {
        todos: state => state.todos,
        categories: state => state.categories,
    },
});
