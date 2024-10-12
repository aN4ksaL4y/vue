Here's an example of building a reusable button component in Vue that can be customized by passing props:

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
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
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
  mounted() {
    this.$on('click', () => {
      console.log('Button clicked!');
    });
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

*   The `ButtonComponent` is a reusable component that can be customized by passing props.
*   It has several default props (`color`, `size`, `disabled`) and one required prop (`text`).
*   The styles of the button are determined by these props using methods (`getBackgroundColor`, `getColor`, `getSizePadding`).
*   When the button is clicked, it emits a `click` event with no arguments.

Here's an example of how to use this component:

```html
<!-- App.vue -->
<template>
  <div>
    <ButtonComponent color="primary" size="large" :text="'Click me!'"></ButtonComponent>
    <ButtonComponent color="secondary" size="small" :text="'Secondary button'"></ButtonComponent>
    <ButtonComponent color="danger" size="medium" disabled :text="'Disabled button'"></ButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: { ButtonComponent }
}
</script>
```

In this example:

*   We import the `ButtonComponent` in the `App` component.
*   We use it several times with different props to demonstrate its customizability.