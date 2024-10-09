**User Inputs**

In Vue, we can handle user inputs using the `v-model` directive, which we've already covered earlier. However, let's explore some additional features that allow us to customize how user input is handled:

*   **`v-model.trim()`**: This modifier removes whitespace from the input value.
*   **`v-model.lowercase()`**: This modifier converts the input value to lowercase.
*   **`v-model.upercase()`**: This modifier converts the input value to uppercase.

Here's an example:
```html
<input v-model.trim="username" placeholder="Enter your name">
```
In this example, the `trim()` modifier is used to remove whitespace from the input value.

**Events**

To handle events in Vue, we can use the `v-on` directive. This allows us to listen for events on an element and respond accordingly.

Here's an example:
```html
<button v-on:click="handleClick">Click me!</button>
```
In this example, when the button is clicked, our `handleClick()` function will be called.

We can also use event modifiers to customize how events are handled. For example:

*   **`v-on:click.prevent`**: Prevents the default behavior of the click event.
*   **`v-on:click.stop`**: Stops the propagation of the click event.
*   **`v-on:click.self`**: Only calls the event handler on the element itself, not its children.

Here's an example:
```html
<button v-on:click.prevent="handleClick">Click me!</button>
```
In this example, when the button is clicked, our `handleClick()` function will be called, but the default behavior of the click event will be prevented.

**Event Listeners**

We can also use native event listeners to handle events in Vue. This allows us to listen for events on an element and respond accordingly without using the `v-on` directive.

Here's an example:
```html
<template>
  <div @click="handleClick">Click me!</div>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      console.log('Clicked!');
    }
  }
}
</script>
```
In this example, when the element is clicked, our `handleClick()` function will be called with an event object as a parameter.

**Event Arguments**

When using native event listeners or the `v-on` directive, we can access event arguments to get more information about the event that occurred.

Here's an example:
```html
<template>
  <div @click="handleClick($event)">Click me!</div>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      console.log('Clicked!', event); // access event arguments
    }
  }
}
</script>
```
In this example, when the element is clicked, our `handleClick()` function will be called with an event object as a parameter.