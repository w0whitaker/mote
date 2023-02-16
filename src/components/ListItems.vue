<script setup>
import { inject, computed } from 'vue';
import ListItem from './ListItem.vue';
// Inject the kind from the ListType component
const kind = inject('kind');
// Inject the items from the ListType component
const items = inject('items');
// Parse the items object into an array
// If the kind is definition, the items object will be parsed into an array of objects
// If the kind is unordered or ordered, the items object will be parsed into an array of strings
const itemsArray = computed(() => {
  if (kind.value === 'definition') {
    return Object.entries(items);
  } else {
    return Object.values(items);
  }
});
</script>
<template>
  <ListItem v-for="item in itemsArray" :key="item">
    <template #item>
      <template v-if="kind === 'definition'">
        <dt>{{ item[0] }}</dt>
        <dd>{{ item[1] }}</dd>
      </template>
      <template v-else>
        <li>{{ item }}</li>
      </template>
    </template>
  </ListItem>
</template>
