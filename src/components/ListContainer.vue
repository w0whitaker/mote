<script setup>
import { defineProps, ref, provide } from 'vue';
import ListItem from './ListItem.vue';
const props = defineProps({
  kind: {
    type: String,
    default: 'unordered',
    validator(value) {
      return ['unordered', 'ordered', 'definition'].includes(value);
    },
  },
  items: {
    type: Array,
    default: () => [],
  },
});
// Create ref for kind
const kind = ref(props.kind);
// Provide kind to children
provide('kind', kind);
// Create ref for items
const items = ref(props.items);
// Provide items to children
provide('items', items);
</script>
<template>
  <slot v-if="kind === 'unordered'" name="list-parent">
    <ul role="list">
      <ListItem>
        <template #list-item></template>
      </ListItem>
    </ul>
  </slot>
  <slot v-if="kind === 'ordered'" name="list-parent">
    <ol>
      <ListItem>
        <template #list-item></template>
      </ListItem>
    </ol>
  </slot>
  <slot v-if="kind === 'definition'" name="list-parent">
    <dl>
      <ListItem>
        <template #list-item></template>
      </ListItem>
    </dl>
  </slot>
</template>
