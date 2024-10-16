**What is Client-Side Routing?**

Client-side routing is a technique where the client (usually a web browser) handles the routing of an application, rather than the server. This means that the browser is responsible for rendering the correct view or page based on the URL, without requiring a full page reload.

**What is Vue Router?**

Vue Router is the official router for Vue.js, a popular JavaScript framework for building web applications. It allows you to map URLs to specific components or views in your application, making it easy to manage client-side routing.

**Setting up Vue Router**

To set up Vue Router, you'll need to follow these steps:

1. **Install Vue Router**: Run the following command in your terminal:
```
npm install vue-router
```
2. **Create a new Vue Router instance**: In your main JavaScript file (usually `main.js`), create a new instance of Vue Router:
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // routes will go here
})
```
3. **Define routes**: Define the routes for your application. A route is an object that maps a URL to a specific component or view:
```javascript
const routes = [
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
```
4. **Register routes with Vue Router**: Register the routes with the Vue Router instance:
```javascript
router.addRoutes(routes)
```
5. **Use the router in your Vue app**: Use the router in your Vue app by adding the `router-view` component to your template:
```html
<template>
  <div id="app">
    <router-view />
  </div>
</template>
```
**Example Use Case:**

Here's an example of how you might use Vue Router to navigate between two routes:

```javascript
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

```html
<!-- Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>
```

```html
<!-- About.vue -->
<template>
  <div>
    <h1>About</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
```

In this example, we define two routes, one for the Home component and one for the About component. We then use the `router-link` component to navigate between the two routes.

**Common Issues:**

* Make sure you've installed Vue Router correctly and imported it in your main JavaScript file.
* Ensure that you've defined your routes correctly and registered them with the Vue Router instance.
* Use the `router-view` component in your template to render the current route.