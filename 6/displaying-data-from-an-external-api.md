Let's dive into displaying data from an external API.

**Displaying Data from an External API**

Once you've fetched data from an external API, you'll want to display it in your Vue application. Here are the general steps to follow:

1. **Create a component to display the data**: Create a new Vue component that will be responsible for displaying the data from the API.
2. **Use the `axios` or `fetch` API to fetch the data**: Use the `axios` or `fetch` API to fetch the data from the external API.
3. **Store the data in the component's state**: Store the data in the component's state using the `data` function.
4. **Use a template to display the data**: Use a template to display the data in the component.
5. **Use Vue's reactivity to update the display**: Use Vue's reactivity to update the display when the data changes.

**Example**

Here's an example of how you might display data from an external API in a Vue component:
```html
<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get('https://api.example.com/users')
     .then(response => {
        this.users = response.data
      })
     .catch(error => {
        console.error(error)
      })
  }
}
</script>
```
In this example, we create a Vue component that displays a list of users. We use the `axios` API to fetch the data from an external API, and store the data in the component's state using the `data` function. We then use a template to display the data in the component.

**Using Vue's `v-for` Directive**

In the example above, we use Vue's `v-for` directive to loop over the `users` array and display each user's name. The `v-for` directive is a powerful tool for rendering lists of data in Vue.

**Using Vue's `v-if` Directive**

You can also use Vue's `v-if` directive to conditionally render elements based on the data. For example:
```html
<template>
  <div>
    <h1>Users</h1>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <p v-else>No users found.</p>
  </div>
</template>
```
In this example, we use the `v-if` directive to conditionally render the list of users. If the `users` array is empty, we render a message indicating that no users were found.

That's it for displaying data from an external API! Do you have any questions or would you like to move on to the next topic?