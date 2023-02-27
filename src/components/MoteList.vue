<template>
  <template v-if="kind === 'description'">
    <dl>
      <div v-for="{ term, description } in items" :key="term">
        <template v-if="Array.isArray(term) && decoration">
          <dt v-for="el in term" :key="el.id">{{ el }}:</dt>
        </template>
        <template v-else-if="Array.isArray(term)">
          <dt v-for="el in term" :key="el.id">{{ el }}</dt>
        </template>
        <template v-else-if="decoration">
          <dt>{{ term }}:</dt>
        </template>
        <template v-else
          ><dt>{{ term }}</dt></template
        >
        <template v-if="Array.isArray(description) && decoration">
          <dd v-for="el in description" :key="el.id">- {{ el }}</dd>
        </template>
        <template v-else-if="Array.isArray(description)">
          <dd v-for="el in description" :key="el.id">{{ el }}</dd>
        </template>
        <template v-else-if="decoration">
          <dd>- {{ description }}</dd>
        </template>
        <template v-else>
          <dd>{{ description }}</dd>
        </template>
      </div>
    </dl>
  </template>
  <template v-else-if="kind === 'ordered'">
    <ol v-if="props.decoration">
      <li v-for="item of items" :key="item">{{ item }}</li>
    </ol>
    <ol v-else role="list">
      <li v-for="item of items" :key="item">{{ item }}</li>
    </ol>
  </template>
  <template v-else>
    <ul v-if="props.decoration">
      <li v-for="item of items" :key="item">{{ item }}</li>
    </ul>
    <ul v-else role="list">
      <li v-for="item of items" :key="item">{{ item }}</li>
    </ul>
  </template>
</template>

<script setup>
import { ref } from 'vue';
import './mote-list.css';
const props = defineProps({
  kind: {
    type: String,
    default: 'unordered',
    validator(value) {
      return ['unordered', 'ordered', 'description'].includes(value);
    },
  },
  decoration: {
    type: Boolean,
  },
  items: {
    type: Array,
    default: () => [],
  },
});
const kind = ref(props.kind);
</script>
