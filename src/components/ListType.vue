<script setup>
import ListItems from './ListItems.vue';
import { defineProps, ref, provide, computed } from 'vue';
const props = defineProps({
  // The kind prop is used to determine the type of list
  kind: {
    type: String,
    default: 'unordered',
    validator(value) {
      return ['unordered', 'ordered', 'definition'].includes(value);
    },
  },
  // The items prop is used to populate the list
  items: {
    type: Object,
    default: () => ({}),
    validator(value) {
      return typeof value === 'object';
    },
  },
});
const kind = ref(props.kind);
// Provide the kind to the ListItems component
provide('kind', kind);
// Provide the items to the ListItems component
provide('items', props.items);
// Define the list tag based on the kind prop
const listTag = computed(() => {
  switch (kind.value) {
    case 'unordered':
      return 'ul';
    case 'ordered':
      return 'ol';
    case 'definition':
      return 'dl';
    default:
      return 'ul';
  }
});
</script>
<template>
  <listTag>
    <ListItems />
  </listTag>
</template>
