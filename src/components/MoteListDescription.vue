<template>
  <div>
    <!-- Description lists -->
    <dl :class="listClasses">
      <div v-for="{ term, description } in items" :key="term" class="pt-s">
        <!-- Description lists can have more than on term for each description; this checks if that is true. -->
        <template v-if="Array.isArray(term) && decoration">
          <dt v-for="el in term" :key="el.id" :class="termClasses">
            <a v-if="el.isLink" href="{{ el.target }}">{{ el }}:</a>
            <span v-else>{{ el }}</span>
          </dt>
        </template>
        <template v-else-if="Array.isArray(term)">
          <dt v-for="el in term" :key="el.id" :class="termClasses">
            <a v-if="el.isLink" href="{{ el.target }}">{{ el }}</a>
            <span v-else>{{ el }}</span>
          </dt>
        </template>
        <!-- If 'term' is not an array, just print the term -->
        <template v-else-if="decoration">
          <dt :class="termClasses">{{ term }}:</dt>
        </template>
        <template v-else>
          <dt :class="termClasses">{{ term }}</dt>
        </template>
        <!-- There can also be multiple descriptions per term, so again, check for an array. -->
        <template v-if="Array.isArray(description) && decoration">
          <dd v-for="el in description" :key="el.id" :class="itemClasses">
            {{ el }}
          </dd>
        </template>
        <template v-else-if="Array.isArray(description)">
          <dd v-for="el in description" :key="el.id" :class="itemClasses">
            {{ el }}
          </dd>
        </template>
        <template v-else-if="decoration">
          <dd :class="itemClasses">{{ description }}</dd>
        </template>
        <template v-else>
          <dd :class="itemClasses">{{ description }}</dd>
        </template>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import './mote-list.css';
const items = inject('items');
const listClasses = inject('listClasses');
const itemClasses = inject('itemClasses');
const termClasses = inject('termClasses');
const decoration = inject('decoration');
</script>
