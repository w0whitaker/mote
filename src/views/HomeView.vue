<script setup>
import SiteHeader from '../components/SiteHeader.vue';
</script>

<template>
	<SiteHeader />
	<div class="m-container">
		<main>
			<section>
				<h2>Typography</h2>
				<div class="m-card">
					<h3>Hierarchy</h3>
					<ul role="list">
						<li class="m-heading--title">Title (h1)</li>
						<li>Article (h2)</li>
						<li>Section (h3)</li>
						<li>Subsection (h4)</li>
						<li>Subsection of a subsection (h5)</li>
						<li>Subsection of a subsection of a subsection (h6)</li>
						<li>Body text</li>
						<li>Link</li>
						<li>Emphasized text</li>
						<li>De-emphasized text</li>
					</ul>
				</div>
			</section>
		</main>
	</div>
</template>
