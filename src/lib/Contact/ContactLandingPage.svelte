<script>
	import contactBg from '$lib/assets/contact/contact-bg.svg';

	/**
	 * "Contact Us" hero banner.
	 * White panel on the left fading into a full-bleed photo on the right.
	 */
	let {
		heading = 'Contact Us',
		description = "We're here to help and answer any question you might have. We look forward hearing from you.",
		bgImage = contactBg
	} = $props();
</script>

<section
	class="relative overflow-hidden bg-cover bg-right bg-no-repeat"
	style="background-image: url({bgImage});"
>
	<!-- Gradient overlay: solid white on the left fading into the photo on the right -->
	<div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

	<div class="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
		<div class="max-w-md">
			<h1 class="mb-4 text-3xl font-extrabold text-blue-900 md:text-4xl">
				{heading}
			</h1>

			<p class="text-lg leading-relaxed text-slate-700">
				{description}
			</p>
		</div>
	</div>
</section>