<script>
	/**
	 * Latest Publications list.
	 * Same layout/behaviour as NewsList — image thumbnail on the left,
	 * title + excerpt + Read More on the right.
	 * Point `image` at files in assets/media-release/publication,
	 * or leave it `null` to show the "No image available" placeholder.
	 */
	let {
		heading = 'LATEST PUBLICATIONS',
		items = [
			{
				id: 1,
				image: '/src/lib/assets/media-release/publication/financial-awareness-day-2026.png',
				title: 'Financial Awareness Day 2026',
				excerpt:
					'Financial Awareness Day is a reminder to understand our financial choices, prepare for the future, and make informed decisions for ourselves and our families. At FPAS, we believe financial planning empowers individuals to build greater financial resilience and take ownership of their financial future. sg',
				href: '/newsroom/publication/financial-awareness-day'
			},
			{
				id: 2,
				image: '/src/lib/assets/media-release/news/no-image.jpg',
				title: 'A 2-part special talk conducted by Fortis Wills Pte Ltd and FPAS',
				excerpt:
					'About 20 participants came together for a dynamic afternoon of learning, diving into estate planning essentials and real-world risk scenarios — gaining actionable insights to serve clients with greater confidence and professionalism.',
				href: '/newsroom/publication/special-talk'
			},
			{
				id: 3,
				image: '/src/lib/assets/media-release/publication/celebrating-financial-planners-worldwide.png',
				title: 'Celebrating Financial Planners Worldwide at the FPAS World Financial Planning Day 2025',
				excerpt: 'Written by FPAS Member Ling Hue Chye CFP®',
				href: '#'
			},
			{
				id: 4,
				image: '/src/lib/assets/media-release/publication/financial-planning-magazine-may-2024.png',
				title: 'Financial Planning Magazine - May 2024',
				excerpt: 'Financial Planning Magazine - May 2024',
				href: '#'
			},
			{
				id: 5,
				image: '/src/lib/assets/media-release/publication/financial-planning-magazine-dec-2023.png',
				title: 'Financial Planning Magazine - December 2023',
				excerpt: 'Financial Planning Magazine - December 2023',
				href: '#'
			},
			{
				id: 6,
				image: '/src/lib/assets/media-release/publication/knowledge-alone-is-not-power.png',
				title: 'Financial Planning: Knowledge alone is NOT power',
				excerpt: 'by Benjamin Ang, Founding Editor, Money Playschool',
				href: '#'
			},
			{
				id: 7,
				image: '/src/lib/assets/media-release/publication/foundational-pillars-of-personal-finance.jpg',
				title: 'Foundational Pillars of Personal Finance',
				excerpt: 'by Eliss Chen, CFP®',
				href: '#'
			},
			{
				id: 8,
				image: '/src/lib/assets/media-release/publication/goal-based-investing-approach.jpg',
				title: 'Goal-based investing approach: is it a post-pandemic new norm?',
				excerpt: 'by Ron Miura, CFP®',
				href: '#'
			},
			{
				id: 9,
				image: '/src/lib/assets/media-release/publication/fathers-day-gift.jpg',
				title: "Father's Day Gift",
				excerpt: 'by Joanna Leng, CFP®',
				href: '#'
			},
			{
				id: 10,
				image: '/src/lib/assets/media-release/publication/book-review-changing-world-order.jpg',
				title: 'Book Review - Principles for Dealing with the Changing World Order',
				excerpt: 'by John Sim, CFP®',
				href: '#'
			}
		],
		currentPage = 1,
		totalPages = 1,
		onPageChange = (page) => {}
	} = $props();
</script>

<section class="mx-auto max-w-6xl px-6 py-10">
	<h2 class="mb-8 text-lg font-bold tracking-wide text-slate-900">{heading}</h2>

	<div class="flex flex-col">
		{#each items as item (item.id)}
			<article class="grid grid-cols-1 gap-6 border-b border-slate-100 py-8 first:pt-0 last:border-b-0 md:grid-cols-[280px_1fr]">
				<!-- Thumbnail -->
				<div class="order-1">
					{#if item.image}
						<div class="relative overflow-hidden rounded-md" class:ring-2={item.border === 'red'} class:ring-red-600={item.border === 'red'}>
							<img
								src={item.image}
								alt={item.title}
								class="aspect-[280/171] w-full object-cover"
								loading="lazy"
							/>
						</div>
					{:else}
						<div class="flex aspect-[280/171] w-full flex-col items-center justify-center gap-3 rounded-md bg-slate-100 text-slate-400">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								class="h-12 w-12"
								aria-hidden="true"
							>
								<path
									d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16M14 14l1.586-1.586a2 2 0 0 1 2.828 0L20 14M6 4h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
							</svg>
							<span class="text-center text-sm font-semibold uppercase tracking-wide text-slate-400">
								No image<br />available
							</span>
						</div>
					{/if}
				</div>

				<!-- Text content -->
				<div class="order-2 flex flex-col">
					<h3 class="mb-3 text-xl font-bold leading-snug">
						<a href={item.href} class="text-blue-900 hover:underline">
							{#if item.emoji}<span class="mr-1">{item.emoji}</span>{/if}{item.title}
						</a>
					</h3>

					<p class="mb-6 leading-relaxed text-slate-500">
						{item.excerpt}<span class="text-slate-400">&hellip;</span>
					</p>

					<div class="mt-auto flex lg:justify-end justify-center">
						<a
							href={item.href}
							class="rounded-md border border-blue-800 px-6 py-2.5 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-800 hover:text-white "
						>
							Read More
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<!-- Pagination -->
	{#if totalPages > 1}
		<nav aria-label="Pagination" class="mt-8 flex items-center justify-center gap-2 text-sm">
			<button
				type="button"
				disabled={currentPage === 1}
				onclick={() => onPageChange(currentPage - 1)}
				class="px-2 py-1 text-slate-400 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:text-slate-700"
			>
				&laquo; Previous
			</button>

			{#each Array(totalPages) as _, i (i)}
				{@const page = i + 1}
				<button
					type="button"
					onclick={() => onPageChange(page)}
					class="h-8 w-8 rounded {page === currentPage
						? 'bg-blue-700 text-white'
						: 'text-slate-500 hover:bg-slate-100'}"
				>
					{page}
				</button>
			{/each}

			<button
				type="button"
				disabled={currentPage === totalPages}
				onclick={() => onPageChange(currentPage + 1)}
				class="px-2 py-1 text-slate-400 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:text-slate-700"
			>
				Next &raquo;
			</button>
		</nav>
	{/if}
</section>