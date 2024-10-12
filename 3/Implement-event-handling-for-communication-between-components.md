Here's an example of implementing event handling for communication between components:

```html
<!-- ParentComponent.vue -->
<template>
  <div>
    <ChildComponent @child-event="handleChildEvent" />
    <ButtonComponent color="primary" size="large" :text="'Click me!' @click="handleButtonClick" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: { ChildComponent, ButtonComponent },
  methods: {
    handleChildEvent(event) {
      console.log('Received child event:', event);
      // Perform some action based on the received event
      this.state = 'child event handled';
    },
    handleButtonClick() {
      console.log('Button clicked!');
      // Perform some action when the button is clicked
      this.state = 'button clicked';
    }
  },
  data: {
    state: ''
  }
}
</script>
```

```html
<!-- ChildComponent.vue -->
<template>
  <div>
    <input v-model="inputValue" @input="handleInputChange" />
    <button @click="handleButtonClick">Send event</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInputChange(event) {
      console.log('Received input value:', event.target.value);
      // Send the received input value as an event to the parent component
      this.$emit('child-event', event.target.value);
    },
    handleButtonClick() {
      console.log('Button clicked!');
      // Send a child event to the parent component
      this.$emit('my-event', 'Hello from child!');
    }
  }
}
</script>
```

```html
<!-- ButtonComponent.vue -->
<template>
  <button :style="styles" @click="$emit('click', args)">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    color: String,
    size: String,
    disabled: Boolean,
    text: String
  },
  data() {
    return {
      styles: {
        backgroundColor: this.getBackgroundColor(),
        color: this.getColor(),
        padding: this.getSizePadding()
      }
    }
  },
  methods: {
    getBackgroundColor() {
      switch (this.color) {
        case 'primary':
          return '#007bff';
        case 'secondary':
          return '#6c757d';
        default:
          return '';
      }
    },
    getColor() {
      if (this.disabled) {
        return '#ccc';
      } else {
        return this.getBackgroundColor();
      }
    },
    getSizePadding() {
      switch (this.size) {
        case 'small':
          return '8px';
        case 'medium':
          return '';
        case 'large':
          return '16px';
        default:
          return '';
      }
    }
  },
  methods: {
    handleButtonClick(event) {
      console.log('Button clicked!');
      // Perform some action when the button is clicked
      event.target.click();
    }
  }
}
</script>

<style scoped>
button {
  font-size: 14px;
  transition: all 0.2s ease-in-out;
}

button:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

In this example:

*   We create a `ParentComponent` that has two child components: `ChildComponent` and `ButtonComponent`.
*   The `ChildComponent` emits an event called `child-event` when the input value changes.
*   The `ButtonComponent` emits an event called `click` when it is clicked.
*   The `ParentComponent` receives these events using its `handleChildEvent` and `handleButtonClick` methods.
*   We also demonstrate how to create a simple button with event handling in the `ButtonComponent`.

Here's an example of how to use this code:

```html
<!-- App.vue -->
<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './ParentComponent.vue';
import ChildComponent from './ChildComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: { ParentComponent, ChildComponent, ButtonComponent }
}
</script>
```

In this example:

*   We import the `ParentComponent`, `ChildComponent`, and `ButtonComponent` in the `App` component.
*   We use them in the `App` template to demonstrate their event handling capabilities.