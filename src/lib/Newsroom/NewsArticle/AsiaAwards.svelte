<script>
	import heroBgDefault from '$lib/assets/media-release/bg-image.svg';
	import asiaTrustedAwardsThumb from '$lib/assets/media-release/news/asia-trusted-awards-2026.png';

	/**
	 * Media Release article page.
	 * - `heroImage`: the wide photo banner at the top (assets/media-release/hero-bg.png)
	 * - `thumbnail`: the centered announcement image inside the white card (assets/media-release/*.png)
	 * - `paragraphs`: array of strings, one per paragraph of body copy
	 */
	let {
		eyebrow = 'MEDIA RELEASE',
		title = 'FPAS President Dr Ben Fok Appointed Judge for the 11th Asia Trusted Life Agents & Advisers Awards 2026',
		date = '7 July 2026',
		heroImage = heroBgDefault,
		thumbnail = asiaTrustedAwardsThumb,
		thumbnailAlt = '11th Asia Trusted Life Agents & Advisers Awards 2026 judges',
		paragraphs = [
			"The Financial Planning Association of Singapore (FPAS) is pleased to announce that its President, Dr Ben Fok, has been appointed to the panel of judges for the 11th Asia Trusted Life Agents & Advisers Awards 2026.",
			"As a supporting organisation of the Awards, FPAS is proud to contribute to one of Asia's leading platforms for recognising the best life insurance agents and financial advisers across the Asia-Pacific region.",
			"This participation reflects the confidence placed in FPAS's leadership and reinforces the Association's commitment to raising professional standards within the financial planning profession.",
			"Through its continued involvement in industry initiatives, FPAS remains dedicated to promoting ethics, excellence, and professional competence, while strengthening public trust in financial advice and supporting the advancement of the profession in Singapore and across the region."
		]
	} = $props();
</script>

<article class="bg-slate-50">
	<!-- Hero photo banner -->
	<div class="relative">
		<div
			class="h-[130px] w-full bg-cover bg-center sm:h-[220px] md:h-[420px]"
			style="background-image: url({heroImage});"
		></div>

		<!-- Card: flush/full-bleed under the hero on mobile, overlapping rounded card from sm/md up -->
		<div class="relative mx-auto max-w-6xl px-0 sm:px-6">
			<div
				class="relative mt-0 max-w-none rounded-none bg-white p-6 shadow-none sm:-mt-24 sm:max-w-4xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:p-8 sm:shadow-xl md:-mt-64 md:p-10 md:-ml-10"
			>
				<p class="mb-2 text-xs font-bold tracking-wide text-blue-900 sm:text-sm">{eyebrow}</p>

				<h1 class="mb-2 text-xl font-bold leading-snug text-blue-900 sm:text-2xl md:text-3xl">
					{title}
				</h1>

				<p class="mb-4 text-xs text-slate-500 sm:mb-6 sm:text-sm">{date}</p>

				<div class="mb-6 flex justify-center sm:mb-8">
					<img
						src={thumbnail}
						alt={thumbnailAlt}
						class="w-full max-w-[240px] rounded-md object-contain sm:max-w-xs md:max-w-sm"
						loading="lazy"
					/>
				</div>

				<div class="space-y-4 text-sm text-slate-700 sm:space-y-5 sm:text-base">
					{#each paragraphs as paragraph}
						<p class="leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- spacer so the page doesn't end abruptly right under the card -->
	<div class="h-10 sm:h-16"></div>
</article>