<template>
  <template v-if="kind === 'description'">
    <!-- Description lists -->
    <dl>
      <div v-for="{ term, description } in items" :key="term">
        <!-- Description lists can have more than on term for each description; this checks if that is true. -->
        <template v-if="Array.isArray(term) && decoration"
          ><!-- 'decoration' here might be better as a class -->
          <dt v-for="el in term" :key="el.id">
            <a v-if="isLink" href="{{ el.target }}">{{ el.term }}:</a>
            <span v-else>{{ el.term }}</span>
          </dt>
        </template>
        <template v-else-if="Array.isArray(term)">
          <dt v-for="el in term" :key="el.id">
            <a v-if="isLink" href="{{ el.target }}">
              {{ el.term }}
            </a>
            <span v-else>{{ el }}</span>
          </dt>
        </template>
        <!-- If 'term' is not an array, just print the term -->
        <template v-else-if="decoration">
          <dt>{{ term }}:</dt>
        </template>
        <template v-else
          ><dt>{{ term }}</dt></template
        >
        <!-- There can also be multiple descriptions per term, so again, check for an array. -->
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
    <!-- Ordered lists-->
    <ol v-if="decoration">
      <li v-for="item of items" :key="item">
        {{ item }}
      </li>
    </ol>
    <ol v-else role="list">
      <li v-for="item of items" :key="item">
        {{ item }}
      </li>
    </ol>
  </template>
  <template v-else>
    <!-- Unordered lists -->
    <ul v-if="decoration">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target">{{ item.term }}</a>
        <span v-else-if="item.term">{{ item.term }}</span>
        <span v-else>{{ item }}</span>
      </li>
    </ul>
    <ul v-else role="list">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target">{{ item.term }}</a>
        <span v-else-if="item.term">{{ item.term }}</span>
        <span v-else>{{ item }}</span>
      </li>
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
