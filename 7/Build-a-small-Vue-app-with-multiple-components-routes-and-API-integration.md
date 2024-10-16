Here is a step-by-step guide to building a small Vue app with multiple components, routes, and API integration:

**Step 1: Create a new Vue project**

To start, create a new Vue project using the Vue CLI:
```bash
vue create my-vue-app
```
This will create a new directory called `my-vue-app` with a basic Vue project structure.

**Step 2: Create multiple components**

Create several new components to represent different parts of your app. For example, you might create a `Header.vue` component, a `Footer.vue` component, and a `Home.vue` component.

**Header.vue**
```html
<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>
```
**Footer.vue**
```html
<template>
  <footer>
    <p>&copy; 2023 My Vue App</p>
  </footer>
</template>
```
**Home.vue**
```html
<template>
  <div>
    <h1>Welcome to My Vue App!</h1>
    <p>This is the home page.</p>
  </div>
</template>
```
**Step 3: Create routes**

Create a new file called `router.js` to define the routes for your app:
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
```
**Step 4: Create API integration**

Create a new file called `api.js` to define the API endpoints for your app:
```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.example.com'
})

export default api
```
**Step 5: Integrate API with components**

Modify the `Home.vue` component to fetch data from the API:
```html
<template>
  <div>
    <h1>Welcome to My Vue App!</h1>
    <p>This is the home page.</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    api.get('/items')
     .then(response => {
        this.items = response.data
      })
     .catch(error => {
        console.error(error)
      })
  }
}
</script>
```
**Step 6: Run the app**

Run the app using the following command:
```bash
npm run serve
```
This will start the development server and make the app available at `http://localhost:8080`.
