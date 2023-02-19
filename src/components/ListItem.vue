<script setup>
import { inject } from 'vue';
const items = inject('items');
</script>
<template>
  <li v-for="item in items" :key="item">{{ item }}</li>
</template>
