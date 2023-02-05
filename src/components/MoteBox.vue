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
	<div class="mote-box">
		<slot name="content" />
	</div>
</template>
<style>
.mote-box {
	--color-light: hsl(0, 0%, 80%);
	--color-dark: hsl(0, 0%, 20%);
	color: var(--color-dark);
	background-color: var(--color-light);
	outline: 0.125rem solid transparent;
	outline-offset: -0.125rem;
}

.mote-box.invert {
	filter: invert(100%);
}

.small-pad {
	padding: var(--space-s);
}

.medium-pad {
	padding: var(--space-m);
}

.large-pad {
	padding: var(--space-l);
}

.jumbo-pad {
	padding: var(--space-2xl);
}
</style>
