<template>
  <div :class="classes">
    <button>
      {{ label }}
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import './mote-button.css';
const props = defineProps({
  label: {
    type: String,
    default: 'button',
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
  variant: {
    type: String,
    default: 'standard',
    validator(value) {
      return ['solid', 'outline', 'disabled', 'subtle'].includes(value);
    },
  },
  use: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'success', 'danger', 'warning'].includes(
        value
      );
    },
  },
});

const variant = ref(props.variant);
const use = ref(props.use);
const size = ref(props.size);
const classes = computed(() => ({
  '[ mote-button ]': true,
  [`[ mote-button--${use.value || 'primary'} ]`]: true,
  [`[ mote-button--${size.value || 'medium'} ]`]: true,
  [`[ mote-button--${variant.value || 'solid'} ]`]: true,
}));
</script>
