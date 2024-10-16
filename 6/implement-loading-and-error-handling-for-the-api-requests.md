Let's implement loading and error handling for the API requests in our GitHub Users app.

**Loading State**

To implement loading state, we'll add a `loading` variable to our component's data and update it when the API request is in progress. We'll also add a loading indicator to our template to display while the data is being fetched.
```html
<template>
  <div>
    <h1>GitHub Users</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <ul v-else>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.login }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      loading: false
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.login.includes(this.searchQuery))
    }
  },
  mounted() {
    this.loading = true
    axios.get('https://api.github.com/users')
    .then(response => {
        this.users = response.data
        this.loading = false
      })
    .catch(error => {
        this.error = error
        this.loading = false
      })
  }
}
</script>
```
In this code, we've added a `loading` variable to our component's data and set it to `true` when the API request is initiated. We've also added a `loading` indicator to our template that displays while the data is being fetched.

**Error Handling**

To implement error handling, we'll add an `error` variable to our component's data and update it when an error occurs during the API request. We'll also add an error message to our template to display when an error occurs.
```html
<template>
  <div>
    <h1>GitHub Users</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
    </div>
    <ul v-else>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.login }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      loading: false,
      error: null
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.login.includes(this.searchQuery))
    }
  },
  mounted() {
    this.loading = true
    axios.get('https://api.github.com/users')
    .then(response => {
        this.users = response.data
        this.loading = false
      })
    .catch(error => {
        this.error = error
        this.loading = false
      })
  }
}
</script>
```
In this code, we've added an `error` variable to our component's data and updated it when an error occurs during the API request. We've also added an error message to our template that displays when an error occurs.

**Retry Button**

To add a retry button, we'll add a `retry` method to our component that restarts the API request when clicked.
```html
<template>
  <div>
    <h1>GitHub Users</h1>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
      <button @click="retry">Retry</button>
    </div>
    <ul v-else>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.login }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      loading: false,
      error: null
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.login.includes(this.searchQuery))
    }
  },
  mounted() {
    this.loading = true
    axios.get('https://api.github.com/users')
    .then(response => {
        this.users = response.data
        this.loading = false
      })
    .catch(error => {
        this.error = error
        this.loading = false
      })
  },
  methods: {
    retry() {
      this.loading = true
      this.error = null
      axios.get('https://api.github.com/users')
      .then(response => {
          this.users = response.data
          this.loading = false
        })
      .catch(error => { this.error = error
        this.loading = false
      })
    }
  }
}
</script>
```
In this code, we've added a `retry` method to our component that restarts the API request when clicked.