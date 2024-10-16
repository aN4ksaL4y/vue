**Creating a Vuex Store**

First, we need to create a new file for our Vuex store. Let's call it `store.js`. In this file, we'll define our Vuex store and its state, mutations, actions, and getters.
```javascript
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },
  actions: {
    login({ commit }, user) {
      commit('SET_USER', user)
    },
    logout({ commit }) {
      commit('CLEAR_USER')
    }
  },
  getters: {
    user: state => state.user
  }
})

export default store
```
In this example, we define a Vuex store with a single state property `user`, which will hold the current user object. We also define two mutations: `SET_USER` and `CLEAR_USER`, which update the `user` state. Additionally, we define two actions: `login` and `logout`, which commit the respective mutations. Finally, we define a getter `user` that returns the current user state.

**Using the Vuex Store in Our Application**

Next, we need to use our Vuex store in our Vue application. We can do this by importing the store and using it in our components.

Let's create a new file called `main.js` and import our Vuex store:
```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```
Now, we can use our Vuex store in our components. For example, let's create a new component called `Login.vue` that uses the `login` action to set the current user:
```html
<!-- Login.vue -->
<template>
  <div>
    <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username">
        <input v-model="password" type="password" placeholder="Password">
        <button type="submit">Login</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const user = { username: this.username, password: this.password }
      this.$store.dispatch('login', user)
    }
  }
}
</script>
```
In this example, we define a `login` method that dispatches the `login` action with the user object.

**Accessing the User State**

Finally, we can access the user state in our components using the Vuex getter. For example, let's create a new component called `UserProfile.vue` that displays the current user's username:
```html
<!-- UserProfile.vue -->
<template>
  <div>
    <h1>{{ user.username }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
</script>
```
In this example, we define a computed property `user` that returns the current user state using the Vuex getter.
