<template>
	<button type="button" :class="classes" @click="onClick" :style="style">
		{{ label }}
	</button>
</template>

<script>
export default {
	name: 'mote-button',

	props: {
		label: {
			type: String,
			required: true,
		},
		primary: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			validator: function (value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
		backgroundColor: {
			type: String,
		},
	},
};
</script>
