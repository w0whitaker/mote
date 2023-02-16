<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    default: 'standard',
    validator(value) {
      return ['standard', 'outlined', 'disabled', 'clear'].includes(value);
    },
  },
});
const variant = ref(props.variant);
class ButtonStyle {
  constructor({ backgroundColor, color, outline, outlineOffset }) {
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.outline = outline;
    this.outlineOffset = outlineOffset;
  }
}
const styleObject = computed(() => {
  switch (variant.value) {
    case 'standard':
      return new ButtonStyle({
        backgroundColor: 'var(--secondary)',
        color: 'var(--dark)',
        outline: 'none',
        outlineOffset: '0',
      });
    case 'outlined':
      return new ButtonStyle({
        backgroundColor: 'var(--light)',
        color: 'var(--dark)',
        outline: '0.125rem solid var(--primary)',
        outlineOffset: '-0.125rem',
      });
    case 'disabled':
      return new ButtonStyle({
        backgroundColor: 'var(--dark)',
        color: 'var(--light)',
        outline: 'none',
        outlineOffset: '0',
      });
    case 'clear':
      return new ButtonStyle({
        backgroundColor: 'transparent',
        color: 'var(--dark)',
        outline: 'initial',
        outlineOffset: '0',
      });
    default:
      return new ButtonStyle({
        backgroundColor: 'hotpink',
        color: 'yellowgreen',
        outline: '0.125rem solid pink',
        outlineOffset: '-0.125rem',
      });
  }
});
</script>
<template>
  <button class="mote-button" :style="styleObject">
    {{ variant }}
  </button>
</template>
<style scoped>
button {
  padding: var(--space-2xs) var(--space-xl);
  font-size: var(--step-1);
  font-variant-caps: all-small-caps;
  border: none;
  border-radius: 5px;
}
.mote-button--default {
  background-color: white;
  color: black;
}

.mote-button--outlined {
  background-color: white;
  color: black;
  outline: 0.125rem solid black;
  outline-offset: -0.125rem;
}

.mote-button--clear {
  background-color: transparent;
  color: black;
}
</style>
