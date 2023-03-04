<template>
  <div>
    <ul v-if="decoration" :class="listClasses">
      <li v-for="item of items" :key="item">
        <MoteListItem :list-item="item" />
      </li>
    </ul>
    <ul v-else role="list" :class="listClasses">
      <li v-for="item of items" :key="item">
        <MoteListItem :list-item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import MoteListItem from './MoteListItem.vue';
import './mote-list.css';

const items = inject('items');
const listClasses = inject('listClasses');
const decoration = inject('decoration');
</script>
