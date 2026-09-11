<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/cp/
	import HeroBg from '$lib/assets/cp/certification-process-hero.svg';
</script>

<section class="relative w-full overflow-hidden h-32 sm:h-44 md:h-[230px]">
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
		style="background: linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 22%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 55%);"
	></div>

	<!-- Content -->
	<div class="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-16 md:justify-center md:mr-180">
		<h1 class="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0b2f6b]">IBF Accreditation</h1>
	</div>
</section>