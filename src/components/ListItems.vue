<script setup>
import ListItem from './ListItem.vue';
// Create array of items
const items = ['yoshi', 'gordon', 'jasper'];
</script>
<template>
  <ListItem v-for="item in items" :key="item">
    <template #item>
      {{ item }}
    </template>
  </ListItem>
</template>
