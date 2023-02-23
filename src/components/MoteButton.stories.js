import MoteButton from './MoteButton.vue';

export default {
  title: 'MoteButton',
  component: MoteButton,
  decorators: [
    () => ({ template: '<div style="margin: 3em;"><story /></div>' }),
  ],
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    use: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'outline', 'disabled', 'subtle'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { MoteButton },
  setup() {
    return { args };
  },
  template: '<MoteButton v-bind="args"',
});

export const Primary = Template.bind({});
Primary.args = {
  use: 'primary',
  size: 'medium',
};
export const Secondary = Template.bind({});
Secondary.args = {
  use: 'secondary',
};
export const Success = Template.bind({});
Success.args = {
  use: 'success',
};
export const Danger = Template.bind({});
Danger.args = {
  use: 'danger',
};
export const Warning = Template.bind({});
Warning.args = {
  use: 'warning',
};
