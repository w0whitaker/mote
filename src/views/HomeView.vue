<script setup>
import SiteHeader from '../components/SiteHeader.vue';
import MoteStack from '../components/MoteStack.vue';
import MoteBox from '../components/MoteBox.vue';
import Paragraph from '../content/paragraph.js';
</script>

<template>
	<SiteHeader />
	<div class="m-container">
		<main>
			<article>
				<MoteStack>
					<template v-slot:elements>
						<h2>Boxes</h2>
						<MoteStack>
							<template v-slot:elements>
								<!-- small padding -->
								<section>
									<MoteBox>
										<template v-slot:content>
											<MoteBox class="invert small-pad">
												<template v-slot:content>
													<header>
														<h3>small</h3>
													</header>
												</template>
											</MoteBox>
											<MoteBox class="small-pad">
												<template v-slot:content>
													<p v-html="Paragraph.template"></p>
												</template>
											</MoteBox>
										</template>
									</MoteBox>
								</section>
								<!-- medium padding -->
								<section>
									<MoteBox>
										<template v-slot:content>
											<MoteBox class="invert medium-pad">
												<template v-slot:content>
													<header>
														<h3>medium</h3>
													</header>
												</template>
											</MoteBox>
											<MoteBox class="small-pad">
												<template v-slot:content>
													<p v-html="Paragraph.template"></p>
												</template>
											</MoteBox>
										</template>
									</MoteBox>
								</section>
								<!-- large padding -->
								<section>
									<MoteBox>
										<template v-slot:content>
											<MoteBox class="invert large-pad">
												<template v-slot:content>
													<header>
														<h3>large</h3>
													</header>
												</template>
											</MoteBox>
											<MoteBox class="large-pad">
												<template v-slot:content>
													<p v-html="Paragraph.template"></p>
												</template>
											</MoteBox>
										</template>
									</MoteBox>
								</section>
								<!-- jumbo padding -->
								<section>
									<MoteBox>
										<template v-slot:content>
											<MoteBox class="invert jumbo-pad">
												<template v-slot:content>
													<header>
														<h3>jumbo</h3>
													</header>
												</template>
											</MoteBox>
											<MoteBox class="jumbo-pad">
												<template v-slot:content>
													<p v-html="Paragraph.template"></p>
												</template>
											</MoteBox>
										</template>
									</MoteBox>
								</section>
							</template>
						</MoteStack>
					</template>
				</MoteStack>
			</article>
		</main>
	</div>
</template>
