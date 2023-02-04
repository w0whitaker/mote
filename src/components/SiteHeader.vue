<script></script>

<template>
	<header>
		<div class="m-container">
			<div class="flex-container">
				<h1>mote</h1>
				<img src="./icons/mote.svg" alt="the logo" />
			</div>
			<p>which is funny because it's visually pretty big.</p>
		</div>
	</header>
</template>

<style scoped>
header {
	background-color: black;
	color: white;
}

img {
	max-height: var(--step-5);
}

.flex-container {
	display: flex;
	align-items: center;
}
</style>
