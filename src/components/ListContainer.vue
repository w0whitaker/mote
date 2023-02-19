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
  <template v-if="kind === 'unordered'">
    <ul v-for="item of items" :key="item" role="list">
      <li>{{ item }}</li>
    </ul>
  </template>
  <template v-else-if="kind === 'ordered'">
    <ol v-for="item of items" :key="item">
      <li>{{ item }}</li>
    </ol>
  </template>
  <template v-else-if="kind === 'definition'">
    <dl>
      <template v-for="item of items" :key="item">
        <dt>{{ item.term }}</dt>
        <dd>{{ item.definition }}</dd>
      </template>
    </dl>
  </template>
  <template v-else>
    <p>Invalid list kind.</p>
  </template>
</template>
