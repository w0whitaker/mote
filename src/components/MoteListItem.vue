<template>
  <div :class="itemClasses">
    <a v-if="item.isLink" :href="item.target">{{ item.term }}</a>
    <span v-else-if="item.term">{{ item.term }}</span>
    <span v-else>{{ item }}</span>
  </div>
</template>
<script setup>
import { inject, ref } from 'vue';
import './mote-list.css';

const props = defineProps({
  listItem: {
    type: [String, Object],
    default: '',
  },
});

const item = ref(props.listItem);

const itemClasses = inject('itemClasses');
</script>
