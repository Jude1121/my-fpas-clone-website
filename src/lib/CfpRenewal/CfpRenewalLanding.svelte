<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/pathway/
	import HeroBg from '$lib/assets/cp/certification-process-hero.svg';
</script>

<section class="relative w-full overflow-hidden" style="height: 280px;">
	<!-- Background image -->
	<img
		src={HeroBg}
		alt=""
		class="absolute inset-0 w-full h-full object-cover"
		aria-hidden="true"
	/>

	<!-- Fade-to-white overlay so the text stays readable on the left -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 65%);"
	></div>

	<!-- Content -->
	<div class="relative h-full flex items-center px-6 md:px-16 justify-center mr-160">
		<div class="max-w-lg">
			<h1 class="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4 ">
				CFP Certification Renewal 
			</h1>
            <h1 class="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4 ">
				Policy and Guidelines on CPD Requirements
			</h1>

		</div>
	</div>
</section>