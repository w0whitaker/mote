<template>
  <template v-if="kind === 'description'">
    <!-- Description lists -->
    <dl :class="listClasses">
      <div v-for="{ term, description } in items" :key="term" class="pt-s">
        <!-- Description lists can have more than on term for each description; this checks if that is true. -->
        <template v-if="Array.isArray(term) && decoration"
          ><!-- 'decoration' here might be better as a class -->
          <dt v-for="el in term" :key="el.id" class="pl-xs">
            <a v-if="isLink" href="{{ el.target }}">{{ el.term }}:</a>
            <span v-else>{{ el.term }}</span>
          </dt>
        </template>
        <template v-else-if="Array.isArray(term)">
          <dt v-for="el in term" :key="el.id" class="pl-xs">
            <a v-if="isLink" href="{{ el.target }}">
              {{ el.term }}
            </a>
            <span v-else>{{ el }}</span>
          </dt>
        </template>
        <!-- If 'term' is not an array, just print the term -->
        <template v-else-if="decoration">
          <dt class="pl-xs">{{ term }}:</dt>
        </template>
        <template v-else
          ><dt class="pl-xs">{{ term }}</dt></template
        >
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
  </template>
  <template v-else-if="kind === 'ordered'">
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
  </template>
  <!-- Unordered lists -->
  <template v-else>
    <ul v-if="decoration" :class="listClasses">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target" :class="itemClasses">{{
          item.term
        }}</a>
        <span v-else-if="item.term" :class="itemClasses">{{ item.term }}</span>
        <span v-else :class="itemClasses">{{ item }}</span>
      </li>
    </ul>
    <ul v-else role="list" :class="listClasses">
      <li v-for="item of items" :key="item">
        <a v-if="item.isLink" :href="item.target" :class="itemClasses">{{
          item.term
        }}</a>
        <span v-else-if="item.term" :class="itemClasses">{{ item.term }}</span>
        <span v-else :class="itemClasses">{{ item }}</span>
      </li>
    </ul>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue';
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
  theme: {
    type: String,
    default: 'unstyled',
    validator(value) {
      return ['unstyled', 'bordered', 'divided', 'block'].includes(value);
    },
  },
});
const kind = ref(props.kind);
const theme = ref(props.theme);
const listClasses = computed(() => ({
  [`[ mote-list ]`]: true,
  [`[ mote-list--${theme.value || 'bordered'} ]`]: true,
  [`[ flow ]`]: false,
}));

const itemClasses = computed(() => ({
  [`[ inline-block ]`]: true,
  [`[ ml-m ]`]: true,
  [`[ pb-s ]`]: true,
  [`[ pt-s ]`]: true,
}));

const descClasses = computed(() => ({
  [`[ inline-block ]`]: true,
  [`[ ml-xs ]`]: true,
}));
</script>
