import MoteButton from './MoteButton.vue';

export default {
  title: 'MoteButton',
  component: MoteButton,
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
  template: '<MoteButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  use: 'primary',
  size: 'medium',
  label: 'button',
  variant: 'solid',
};
export const Secondary = Template.bind({});
Secondary.args = {
  use: 'secondary',
  size: 'medium',
  label: 'button',
  variant: 'solid',
};
export const Success = Template.bind({});
Success.args = {
  use: 'success',
  size: 'medium',
  label: 'button',
  variant: 'solid',
};
export const Danger = Template.bind({});
Danger.args = {
  use: 'danger',
  size: 'medium',
  label: 'button',
  variant: 'solid',
};
export const Warning = Template.bind({});
Warning.args = {
  use: 'warning',
  size: 'medium',
  label: 'button',
  variant: 'solid',
};
