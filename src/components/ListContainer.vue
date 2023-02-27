<script setup>
import { defineProps, ref, provide, computed } from 'vue';
import ListItem from './ListItem.vue';
const props = defineProps({
  kind: {
    type: String,
    default: 'unordered',
    validator(value) {
      return ['unordered', 'ordered', 'description'].includes(value);
    },
  },
  items: {
    type: Array,
    default: () => [],
  },
});
// Create ref for kind
const kind = ref(props.kind);
// Provide kind to children
provide('kind', kind);
// Create ref for items
const items = ref(props.items);
// Provide items to children
provide('items', items);
</script>
<template>
  <template v-if="kind === 'unordered'">
    <ul role="list">
      <ListItem v-for="item of items" :key="item">
        <template #list-item>
          <li>
            <a v-if="isLink" :href="item.target"
              ><span>{{ item.term }}</span
              ><span>{{ isLink }}</span></a
            >
            <span v-else-if="Object.hasOwn(item, 'term')">{{ item.term }}</span>
            <span v-else>{{ item }}</span>
          </li>
        </template>
      </ListItem>
    </ul>
  </template>
  <template v-else-if="kind === 'ordered'">
    <ol>
      <ListItem v-for="item of items" :key="item">
        <template #list-item>
          <li>
            <span>{{ item }}</span>
          </li>
        </template>
      </ListItem>
    </ol>
  </template>
  <template v-else-if="kind === 'description'">
    <dl>
      <ListItem v-for="{ term, description } in items" :key="term">
        <template #list-item>
          <div v-if="Array.isArray(term)">
            <dt v-for="el in term" :key="el.id">
              <a v-if="el.link" :href="el.target"
                ><span>{{ el }}</span></a
              >
              <span v-else>{{ el }}</span>
            </dt>
          </div>
          <div v-else>
            <dt>{{ term }}</dt>
          </div>
          <div v-if="Array.isArray(description)">
            <dd v-for="el in description" :key="el.id">
              {{ el }}
            </dd>
          </div>
          <div v-else>
            <dd>{{ description }}</dd>
          </div>
        </template>
      </ListItem>
    </dl>
  </template>
  <template v-else>
    <p>Invalid list kind.</p>
  </template>
</template>
