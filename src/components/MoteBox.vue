<script>
export default {
	data() {
		return {
			color: 'black',
		};
	},
};
</script>
<template>
	<div class="mote-box" :style="{ color }">
		<slot name="content" />
	</div>
</template>
<style>
.mote-box {
	border: 1px solid hotpink;
}

.small-pad {
	padding: var(--space-s);
}
</style>
