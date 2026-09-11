<script>
	import heroBg from '$lib/assets/resources/hero-bg.png';

	/**
	 * "FPAS Resources" hero banner.
	 * Light gray background photo (hand holding a yellow lightbulb) on the right,
	 * bold two-line title on the left.
	 */
	let {
		titleLine1 = 'FPAS',
		titleLine2 = 'Resources',
		bgImage = heroBg
	} = $props();
</script>

<section
	class="relative overflow-hidden bg-slate-100 bg-cover bg-right bg-no-repeat"
	style="background-image: url({bgImage});"
>
	<div class="relative mx-auto max-w-7xl px-6 py-16 md:py-40">
		<h1 class="text-3xl font-extrabold leading-tight text-blue-900 md:text-4xl">
			{titleLine1}<br />
			{titleLine2}
		</h1>
	</div>
</section>