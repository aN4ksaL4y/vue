Let's build a small multi-page application using Vue Router.

**Project Requirements**

For this example, we'll build a simple e-commerce application with the following pages:

1. Home page
2. Products page
3. Product details page
4. Cart page
5. Checkout page

We'll use Vue Router to navigate between these pages.

**Project Structure**

Here's the project structure we'll use:
```bash
project/
public/
index.html
src/
main.js
router.js
views/
Home.vue
Products.vue
ProductDetails.vue
Cart.vue
Checkout.vue
components/
Header.vue
Footer.vue
store/
index.js
package.json
```
**Router Configuration**

In the `router.js` file, we'll define the routes for our application:
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import ProductDetails from './views/ProductDetails.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```
**Home Page**

In the `Home.vue` file, we'll create a simple home page with a link to the products page:
```html
<template>
  <div>
    <h1>Welcome to our e-commerce application!</h1>
    <router-link to="/products">View Products</router-link>
  </div>
</template>
```
**Products Page**

In the `Products.vue` file, we'll create a simple products page with a list of products:
```html
<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
      ]
    }
  }
}
</script>
```
**Product Details Page**

In the `ProductDetails.vue` file, we'll create a simple product details page:
```html
<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <router-link to="/cart">Add to Cart</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    // fetch product data from API or database
    this.product = {
      id: this.id,
      name: 'Product 1',
      description: 'This is a product'
    }
  }
}
</script>
```
**Cart Page**

In the `Cart.vue` file, we'll create a simple cart page:
```html
<template>
  <div>
    <h1>Cart</h1>
    <ul>
      <li v-for="product in cart" :key="product.id">
        {{ product.name }} ({{ product.quantity }})
      </li>
    </ul>
    <router-link to="/checkout">Checkout</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        { id: 1, name: 'Product 1', quantity: 2 },
        { id: 2, name: 'Product 2', quantity: 1 }
      ]
    }
  }
}
</script>
```
**Checkout Page**

In the `Checkout.vue` file, we'll create a simple checkout page:
```html
<template>
  <div>
    <h1>Checkout</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Checkout">
    </form>
  </div>
</template>
```
That's it! We've built a small e-commerce application using Vue Router.

You can run the application by running `npm run serve` and navigating to `http://localhost:8080` in your browser.

You can navigate between the different pages using the links provided.

Note that this is a very basic example and you may want to add more features to your application, such as user authentication, payment processing, and inventory management.

Also, you can use Vuex to manage the state of your application, and to share data between components.