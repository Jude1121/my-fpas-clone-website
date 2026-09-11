<script lang="ts">
	// Swap this to match your actual filename in src/assets/event/
	import HeroBg from '../assets/events/events-hero.svg';
</script>

<section class="relative w-full overflow-hidden" style="height: 190px;">
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
		style="background: linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.4) 26%, rgba(255,255,255,0) 38%);"
	></div>

	<!-- Content -->
	<div class="relative h-full flex items-center px-6 md:px-16 justify-center lg:pr-200">
		<h1 class="text-2xl md:text-3xl font-extrabold text-[#0b1f6b]">Events</h1>
	</div>
</section>