<script setup>
import SiteHeader from '../components/SiteHeader.vue';
import MoteBox from '../components/MoteBox.vue';
import Titans from '../components/stories/titans.js';
</script>

<template>
	<SiteHeader />
	<div class="m-container">
		<main>
			<MoteBox class="small-pad constrained">
				<template v-slot:content>
					<div v-html="Titans.template" class="show-me small-pad"></div>
				</template>
			</MoteBox>
		</main>
	</div>
</template>
