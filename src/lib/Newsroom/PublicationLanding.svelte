<script>
	// Adjust these imports to match your actual SVG filenames in assets/media-release
	import bgImage from '$lib/assets/media-release/bg-image.svg';

	// Breadcrumb data — pass in as a prop if you want this dynamic per page
	let {
		breadcrumbs = [
			{ label: 'Home', href: '/' },
			{ label: 'Newsroom', href: '/' },
			{ label: 'Publication', href: null } // current page, no link
		]
	} = $props();
</script>

<!-- Breadcrumb bar -->
<nav aria-label="Breadcrumb" class="bg-gray-200 px-6 py-3">
	<ol class="mx-auto flex max-w-7xl items-center gap-2 text-sm">
		{#each breadcrumbs as crumb, i (crumb.label)}
			<li class="flex items-center gap-2">
				{#if crumb.href}
					<a href={crumb.href} class="text-blue-700 hover:underline">{crumb.label}</a>
				{:else}
					<span class="text-slate-600">{crumb.label}</span>
				{/if}
				{#if i < breadcrumbs.length - 1}
					<span class="text-slate-400">&gt;</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<!-- Hero section -->
<section
	class="relative overflow-hidden bg-cover bg-right bg-no-repeat"
	style="background-image: url({bgImage});"
>
	<!-- Gradient overlay: solid white on the left fading into the photo on the right -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"
	></div>

	<div class="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
		<div class="max-w-xl">
			<p class="mb-3 text-sm font-bold tracking-wide text-blue-900">NEWSROOM</p>

			<h1 class="mb-6 text-4xl font-extrabold text-blue-900 md:text-5xl">
				FPAS Publications
			</h1>

			<p class="text-lg leading-relaxed text-slate-700">
				We work to bring you one step closer to a future full of potential. Below are updated stories of that journey and our vision of a better tomorrow.
			</p>
		</div>
	</div>
</section>