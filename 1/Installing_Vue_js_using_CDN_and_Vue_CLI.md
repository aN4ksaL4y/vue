**Installing Vue.js using CDN and Vue CLI**

There are several ways to install Vue.js, but we'll focus on two popular methods: using a Content Delivery Network (CDN) and using the official Vue CLI.

**Method 1: Installing Vue.js using CDN**

You can install Vue.js using a CDN, which provides a lightweight and easy-to-use way to include the framework in your project. Here's an example:

1. Open your terminal or command prompt.
2. Run the following command to create a new HTML file:
```bash
mkdir my-vue-app
cd my-vue-app
touch index.html
```
3. Add the following script tag to your `index.html` file, linking to Vue.js from a CDN:
```html
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
```
4. Create a new JavaScript file (e.g., `main.js`) and add the following code to get started with Vue.js:
```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!'
  }
}).$mount('#app');
```
5. Save both files and open your project in a web browser.

**Method 2: Installing Vue.js using Vue CLI**

The Vue CLI is an official tool for creating new Vue.js projects. It provides a more structured approach to setting up your project and can help you get started faster. Here's how to install Vue.js using the 
Vue CLI:

1. Open your terminal or command prompt.
2. Run the following command to install the Vue CLI globally:
```bash
npm install -g @vue/cli
```
3. Create a new project directory (e.g., `my-vue-app`) and navigate into it:
```bash
mkdir my-vue-app
cd my-vue-app
```
4. Run the following command to create a new Vue.js project using the Vue CLI:
```bash
vue create .
```
5. Follow the prompts to set up your project, choosing options for things like the framework version, project structure, and features.
6. Once the installation is complete, navigate into your project directory:
```bash
cd .
```
7. You can now start developing your Vue.js application by running `npm run serve` in the terminal.

**Tips and Variations**

* Use the `--template` flag to create a new project with a specific template (e.g., `vue create my-vue-app --template simple`).
* Use the `--manifest` flag to specify a custom manifest file for your project.
* Run `npm run build` to build your project for production.