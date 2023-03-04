<template>
  <component :is="renderComponent"></component>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import MoteListUnordered from './MoteListUnordered.vue';
import MoteListOrdered from './MoteListOrdered.vue';
import MoteListDescription from './MoteListDescription.vue';
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
const items = ref(props.items);
const kind = ref(props.kind);
const theme = ref(props.theme);
const decoration = ref(props.decoration);

const renderComponent = computed(() => {
  return kind.value === 'unordered'
    ? MoteListUnordered
    : kind.value === 'ordered'
    ? MoteListOrdered
    : MoteListDescription;
});
const listClasses = computed(() => ({
  [`[ mote-list ]`]: true,
  [`[ mote-list--${theme.value || 'bordered'} ]`]: true,
  [`[ flow ]`]: false,
}));

const itemClasses = computed(() => ({
  [`[ pb-s pt-s ]`]: true,
  [`[ inline-block full-width ]`]: true,
}));

const termClasses = computed(() => ({
  [`[ p-start-xs p-end-xs pl-s ]`]: true,
}));

provide('items', items.value);
provide('listClasses', listClasses);
provide('itemClasses', itemClasses);
provide('termClasses', termClasses);
provide('decoration', decoration.value);
</script>
