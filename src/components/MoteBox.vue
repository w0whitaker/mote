<script setup>
// Import dependencies from Vue
import { defineProps, ref, computed } from 'vue';
// Define props
const props = defineProps({
  padding: {
    type: String,
    default: 'standard',
    validator(value) {
      return ['scant', 'narrow', 'standard', 'wide', 'jumbo'].includes(value);
    },
  },
});
// Create ref for padding
const padding = ref(props.padding);
// Computed property for class name
const className = computed(() => `mote-box--${padding.value}`);
</script>
<template>
  <div :class="['mote-box', className]">
    <slot name="content" />
  </div>
</template>
<style>
.mote-box {
  --color-light: hsl(0, 0%, 80%);
  --color-dark: hsl(0, 0%, 20%);
  color: var(--color-dark);
  background-color: var(--light);
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;
  border: 1px solid var(--primary);
}

.mote-box.invert {
  filter: invert(100%);
}

.mote-box--scant {
  padding: var(--space-3xs);
}

.mote-box--narrow {
  padding: var(--space-s);
}

.mote-box--standard {
  padding: var(--space-m);
}

.mote-box--wide {
  padding: var(--space-l);
}

.mote-box--jumbo {
  padding: var(--space-2xl);
}
</style>
