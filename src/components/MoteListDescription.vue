<template>
  <div>
    <!-- Description lists -->
    <dl :class="listClasses">
      <div v-for="{ term, description } in items" :key="term" class="pt-s">
        <!-- Description lists can have more than on term for each description; this checks if that is true. -->
        <template v-if="Array.isArray(term) && decoration">
          <dt v-for="el in term" :key="el.id" :class="termClasses">
            <MoteListItem :list-item="el" />
          </dt>
        </template>
        <template v-else-if="Array.isArray(term)">
          <dt v-for="el in term" :key="el.id" :class="termClasses">
            <MoteListItem :list-item="el" />
          </dt>
        </template>
        <!-- If 'term' is not an array, just print the term -->
        <template v-else-if="decoration">
          <dt :class="termClasses">
            <MoteListItem :list-item="term" />
          </dt>
        </template>
        <template v-else>
          <dt :class="termClasses">
            <MoteListItem :list-item="term" />
          </dt>
        </template>
        <!-- There can also be multiple descriptions per term, so again, check for an array. -->
        <template v-if="Array.isArray(description) && decoration">
          <dd v-for="el in description" :key="el.id" :class="itemClasses">
            <MoteListItem :list-item="el" />
          </dd>
        </template>
        <template v-else-if="Array.isArray(description)">
          <dd v-for="el in description" :key="el.id" :class="itemClasses">
            <MoteListItem :list-item="el" />
          </dd>
        </template>
        <template v-else-if="decoration">
          <dd :class="itemClasses">
            <MoteListItem :list-item="description" />
          </dd>
        </template>
        <template v-else>
          <dd :class="itemClasses">
            <MoteListItem :list-item="description" />
          </dd>
        </template>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import './mote-list.css';
import MoteListItem from './MoteListItem.vue';

const items = inject('items');
const listClasses = inject('listClasses');
const itemClasses = inject('itemClasses');
const termClasses = inject('termClasses');
const decoration = inject('decoration');
</script>
