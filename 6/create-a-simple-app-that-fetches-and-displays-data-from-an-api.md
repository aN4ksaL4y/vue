Let's create a simple app that fetches and displays data from the GitHub API.

**GitHub API**

The GitHub API provides a wealth of information about GitHub users, repositories, and more. For this example, we'll use the API to fetch a list of GitHub users.

**Creating the App**

First, let's create a new Vue app using the Vue CLI:
```bash
vue create github-users
```
Next, let's install the `axios` library, which we'll use to make requests to the GitHub API:
```bash
npm install axios
```
**Fetching GitHub Users**

Now, let's create a new file called `GitHubUsers.vue` and add the following code:
```html
<template>
  <div>
    <h1>GitHub Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
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
      users: []
    }
  },
  mounted() {
    axios.get('https://api.github.com/users')
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
In this code, we're using the `axios` library to make a GET request to the GitHub API to fetch a list of users. We're then storing the response data in the `users` array and displaying it in the template.

**Displaying the App**

Finally, let's add the `GitHubUsers` component to our app's main template:
```html
<template>
  <div>
    <GitHubUsers />
  </div>
</template>

<script>
import GitHubUsers from './GitHubUsers.vue'

export default {
  components: { GitHubUsers }
}
</script>
```
Now, when we run the app, we should see a list of GitHub users displayed on the page.

**Adding Search Functionality**

Let's add a search input to our app that allows users to search for specific GitHub users:
```html
<template>
  <div>
    <h1>GitHub Users</h1>
    <input type="search" v-model="searchQuery" placeholder="Search for a user...">
    <ul>
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
      searchQuery: ''
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => user.login.includes(this.searchQuery))
    }
  },
  mounted() {
    axios.get('https://api.github.com/users')
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
In this code, we're adding a search input that updates the `searchQuery` variable. We're then using a computed property called `filteredUsers` to filter the list of users based on the search query. Finally, we're displaying the filtered list of users in the template.

That's it! We've created a simple app that fetches and displays data from the GitHub API.