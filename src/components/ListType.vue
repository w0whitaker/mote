<script setup>
import ListItems from './ListItems.vue';
import { defineProps, ref, computed, provide } from 'vue';
const props = defineProps({
  kind: {
    type: String,
    default: 'unordered',
    validator(value) {
      return ['unordered', 'ordered', 'definition'].includes(value);
    },
  },
});
const kind = ref(props.kind);
// If kind is unordered, unordered will be true
const unordered = computed(() => kind.value === 'unordered');
// If kind is ordered, ordered will be true
const ordered = computed(() => kind.value === 'ordered');
// If kind is definition, definition will be true
const definition = computed(() => kind.value === 'definition');
// Provide the kind to the ListItems component
provide('kind', kind);
</script>
<template>
  <ul v-if="unordered" role="list">
    <ListItems />
  </ul>
  <ol v-if="ordered">
    <ListItems />
  </ol>
  <dl v-if="definition" role="list">
    <ListItems />
  </dl>
</template>
