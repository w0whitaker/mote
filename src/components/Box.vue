<template>
	<div class="mote-box">
		<slot name="content"></slot>
	</div>
</template>

<script>
export default {
	name: 'mote-box',
};
</script>

<style>
.mote-box {
	padding: var(--space-l);
	background-color: hotpink;
}
.mote-box ul {
	margin: 0;
	padding: 0;;
	background-color: pink;
}
</style>
