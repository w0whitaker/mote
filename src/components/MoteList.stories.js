import MoteList from './MoteList.vue';

export default {
  title: 'MoteList',
  component: MoteList,
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    kind: {
      table: {
        disable: true,
      },
    },
    items: {
      table: {
        disable: true,
      },
    },
    decoration: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  components: { MoteList },
  setup() {
    return { args };
  },
  template: '<MoteList v-bind="args" />',
});

export const Unordered = Template.bind({});
Unordered.args = {
  kind: 'unordered',
  items: ['gloomy', 'Brooklyn', 'brownstone'],
};

export const UnorderedWithLinks = Template.bind({});
UnorderedWithLinks.args = {
  kind: 'unordered',
  items: [
    'gloomy',
    { term: 'brooklyn', isLink: true, target: '#' },
    { term: 'brownstone', isLink: true, target: '#' },
  ],
};

export const Ordered = Template.bind({});
Ordered.args = {
  kind: 'ordered',
  items: ['minimalist', 'micro', 'cabin', 'dwell'],
};

export const Description = Template.bind({});
Description.args = {
  kind: 'description',
  items: [
    {
      term: 'button',
      description: 'a button is a clickable element that performs an action',
    },
    {
      term: 'list',
      description: 'a list is a collection of items',
    },
    {
      term: ['card', 'banner', 'input'],
      description: 'other components one you might find',
    },
  ],
};
