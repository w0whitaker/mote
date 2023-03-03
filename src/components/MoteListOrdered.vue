<template>
  <div>
    <!-- Ordered lists-->
    <ol v-if="decoration" :class="listClasses">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target" :class="itemClasses">{{
          item.term
        }}</a>
        <span v-else-if="item.term" :class="itemClasses">{{ item.term }}</span>
        <span v-else :class="itemClasses">{{ item }}</span>
      </li>
    </ol>
    <ol v-else role="list" :class="listClasses">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target" :class="itemClasses">{{
          item.term
        }}</a>
        <span v-else-if="item.term" :class="itemClasses">{{ item.term }}</span>
        <span v-else :class="itemClasses">{{ item }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import './mote-list.css';
const items = inject('items');
const listClasses = inject('listClasses');
const itemClasses = inject('itemClasses');
const decoration = inject('decoration');
</script>
