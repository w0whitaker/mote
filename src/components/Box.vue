<template>
	<div class="mote-box">
		<h2>{{ message }}</h2>
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	name: 'mote-box',
	props: {
		message: String,
	},
};
</script>

<style>
.mote-box {
	padding: var(--space-l);
}
.mote-box ul {
	margin: 0;
	padding: 0;
}
</style>
