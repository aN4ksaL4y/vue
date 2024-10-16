Let's discuss handling loading states and errors when working with external APIs in Vue.

**Handling Loading States**

When fetching data from an external API, it's common to display a loading indicator to let the user know that the data is being fetched. Here are a few ways to handle loading states in Vue:

1. **Use a loading indicator**: You can use a loading indicator such as a spinner or a progress bar to let the user know that the data is being fetched.
2. **Use a placeholder**: You can use a placeholder to display a temporary message or a skeleton screen while the data is being fetched.
3. **Use a loading state variable**: You can use a loading state variable to track whether the data is being fetched or not.

Here's an example of how you might handle loading states in Vue:
```html
<template>
  <div>
    <h1>Users</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      loading: true
    }
  },
  mounted() {
    axios.get('https://api.example.com/users')
    .then(response => {
        this.users = response.data
        this.loading = false
      })
    .catch(error => {
        console.error(error)
      })
  }
}
</script>
```
In this example, we use a `loading` state variable to track whether the data is being fetched or not. We display a loading indicator while the data is being fetched, and then display the data once it's available.

**Handling Errors**

When fetching data from an external API, it's common to encounter errors such as network errors or API errors. Here are a few ways to handle errors in Vue:

1. **Use a try-catch block**: You can use a try-catch block to catch any errors that occur when fetching data.
2. **Use an error state variable**: You can use an error state variable to track whether an error has occurred or not.
3. **Display an error message**: You can display an error message to let the user know that an error has occurred.

Here's an example of how you might handle errors in Vue:
```html
<template>
  <div>
    <h1>Users</h1>
    <div v-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      error: null
    }
  },
  mounted() {
    axios.get('https://api.example.com/users')
    .then(response => {
        this.users = response.data
      })
    .catch(error => {
        this.error = error
      })
  }
}
</script>
```
In this example, we use an `error` state variable to track whether an error has occurred or not. We display an error message if an error occurs, and then display the data if it's available.

That's it for handling loading states and errors! Do you have any questions or would you like to move on to the next topic?