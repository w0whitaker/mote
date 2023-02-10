<script>
export default {
  props: {
    variant: String,
  },
  data() {
    return {
      className: `mote-button--${this.variant}`,
    };
  },
};
</script>
<template>
  <button :class="className">button</button>
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
