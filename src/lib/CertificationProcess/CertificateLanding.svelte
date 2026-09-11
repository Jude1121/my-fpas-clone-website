<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/pathway/
	import HeroBg from '$lib/assets/cp/certification-process-hero.svg';
</script>

<section class="relative w-full overflow-hidden h-[220px] sm:h-[260px] md:h-[280px] lg:h-[320px]">
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
	<div class="relative h-full flex items-center px-4 sm:px-6 md:px-16 justify-center 5lg:justify-center lg:pr-180">
		<div class="max-w-xs sm:max-w-sm md:max-w-md">
			<h1 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 mb-2 md:mb-4 ">
				Certification Process
			</h1>
			<p class="text-xs sm:text-sm md:text-base text-[#1a1a1a] leading-relaxed">
				Competence. Credibility. Confidence. The path to CFP<sup class="text-[0.6em]">®</sup>
				certification is a rigorous but rewarding process that gives you the knowledge and skills
				you need for a fulfilling career.
			</p>
		</div>
	</div>
</section>