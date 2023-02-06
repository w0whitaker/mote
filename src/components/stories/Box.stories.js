import MoteBox from '../Box.vue';
import Titans from './titans.js';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
	title: 'Box',
	component: MoteBox,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { MoteBox },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: `
		<mote-box v-bind="args" :message="ohai">
			<template v-slot:content>
				<div v-if="args.content" v-html="args.content" />
			</template>
		</mote-box>`,
});

export const EqualPadding = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
EqualPadding.args = {
	content: `${Titans.template}`,
};
