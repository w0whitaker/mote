<template>
  <div :class="wrapperClasses">
    <button :class="buttonClasses">
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
const wrapperClasses = computed(() => ({
  '[ mote-button ]': true,
  [`[ ${use.value} ]`]: true,
  [`[ mote-button--${variant.value || 'solid'} ]`]: true,
}));
const buttonClasses = computed(() => ({
  [`[ mote-button--${size.value || 'medium'} ]`]: true,
  [`${
    size.value === 'small'
      ? '[ thin-border ]'
      : size.value === 'medium'
      ? '[ medium-border ]'
      : '[ thick-border ]'
  }`]: true,
  [`${variant.value === 'outline' ? '[ bg-light ]' : '[ bg-dark ]'}`]: true,
  [`${
    use.value === 'primary' || use.value === 'secondary' ? '' : '[ fg-dark ]'
  }`]: true,
}));
</script>
