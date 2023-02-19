<script></script>
<template>
  <div class="mote-stack">
    <slot name="elements" />
  </div>
</template>
<style>
.mote-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.mote-stack > * + * {
  margin-block-start: var(--space-m);
}
</style>
