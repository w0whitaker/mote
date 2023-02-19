<script setup>
import { inject, ref } from 'vue';
const kind = ref(inject('kind'));
</script>
<template>
  <template v-if="kind.value === 'definition'">
    <dt><slot name="term" /></dt>
    <dd><slot name="definition" /></dd>
  </template>
  <template v-else>
    <li>
      <slot name="list-item" />
    </li>
  </template>
</template>
