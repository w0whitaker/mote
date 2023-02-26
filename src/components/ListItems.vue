<script setup>
import ListItem from './ListItem.vue';
</script>
<template>
  <slot name="list-items">
    <ListItem></ListItem>
  </slot>
</template>
