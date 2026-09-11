<script>
	/**
	 * Latest News list.
	 * Each item's `image` should point to an SVG/image in your
	 * assets/media-release/news folder, or be left `null` to show
	 * the "No image available" placeholder.
	 */
	let {
		heading = 'LATEST NEWS',
		items = [
			{
				id: 1,
				image: '/src/lib/assets/media-release/news/asia-trusted-awards-2026.png',
				title: 'FPAS President Dr Ben Fok Appointed Judge for the 11th Asia Trusted Life Agents & Advisers Awards 2026',
				excerpt:
					"FPAS is proud to announce that President Dr Ben Fok has been appointed as a judge for the 11th Asia Trusted Life Agents & Advisers Awards 2026, reflecting the Association's continued commitment to promoting excellence and professionalism in financial planning across the region.",
				href: '/newsroom/media-release/asia-trusted-awards'
			},
			{
				id: 2,
				image: '/src/lib/assets/media-release/news/financial-planner-awards-2026.png',
				title: 'FPAS Financial Planner Awards 2026: Understanding the Qualifying Criteria',
				excerpt:
					'As the FPAS Annual Financial Planner Awards return in 2026, FPAS has introduced greater clarity on the qualifying criteria to help eligible CFP® professionals better understand the two award pathways. Applications are now open, with an Early Bird discount available for submissions received by 17 July 2026.',
				href: '/newsroom/media-release/financial-planner-award'
			},
			{
				id: 3,
				image: '/src/lib/assets/media-release/news/financial-planner-awards-save-the-date.png',
				title: 'Financial Planner Awards 2026 Singapore',
				excerpt:
					'The Financial Planning Association of Singapore (FPAS) is pleased to announce the return of the Financial Planner Awards Singapore in 2026. The prestigious awards program recognises CFP professionals who have demonstrated excellence, professionalism, and leadership in advancing the financial planning profession in Singapore.',
				href: '#'
			},
			{
				id: 4,
				image: '/src/lib/assets/media-release/news/no-image.jpg',
				title: 'FPAS Invites Public Participation in Global AI and Financial Planning Survey',
				excerpt:
					'FPAS and the Financial Planning Standards Board Ltd. (FPSB) invite financial professionals and members of the public to participate in the 2026 Global AI and Financial Planning Survey. Share your views on how artificial intelligence is shaping the future of financial planning and contribute to important global industry research.',
				href: '#'
			},
			{
				id: 5,
				image: '/src/lib/assets/media-release/news/legacy-planning-series.png',
				title: 'FPAS and SimplyWills Successfully Conclude First Session of 2026 Legacy Planning Series',
				excerpt:
					'FPAS, in collaboration with SimplyWills, successfully concluded the first session of the 2026 Legacy Planning Series with a Mandarin Wills Talk held on 15 May 2026. The session provided participants with practical insights into Wills, intestacy laws, and the importance of early legacy planning.',
				href: '#'
			},
			{
				id: 6,
				image: '/src/lib/assets/media-release/news/no-image.jpg',
				title: 'FPAS and Fortis Wills Highlight Growing Importance of Legacy & Digital Asset Planning',
				excerpt:
					'The Financial Planning Association of Singapore (FPAS), in collaboration with Fortis Wills, successfully concluded "Legacy, Estate Planning and You," a seminar exploring legacy planning, estate distribution, and the growing relevance of digital assets in today\'s financial landscape.',
				href: '#'
			},
			{
				id: 7,
				image: '/src/lib/assets/media-release/news/bestofme-mou-signing.png',
				emoji: '📣',
				title: 'FPAS x BestOfMe MOU Signing',
				excerpt:
					'FPAS partners with BestOfMe to strengthen leadership development and elevate professional growth for FPAS members.',
				href: '#'
			},
			{
				id: 8,
				image: '/src/lib/assets/media-release/news/exam-fee-notice.png',
				title: 'Notice on Revision of CFP® Modules Examination Fees (Effective from Cycle 3, 2026)',
				excerpt:
					'The Financial Planning Association of Singapore (FPAS) will implement revised examination fees for CFP® Modules, effective 1 July 2026 (Cycle 3, 2026).',
				href: '#'
			},
			{
				id: 9,
				image: '/src/lib/assets/media-release/news/fpas-isca-mou-signing.png',
				emoji: '📣',
				title: 'FPAS x ISCA MOU Signing',
				excerpt:
					'On 29 January, FPAS and ISCA Academy signed an MOU, formalised by FPAS CEO Galen Woo and ISCA CEO Mr Quek Mu Lim, to expand professional development opportunities for our members.',
				href: '#'
			},
			{
				id: 10,
				image: '/src/lib/assets/media-release/news/annoucement.png',
				border: 'red',
				title: 'ANNOUNCEMENT Regarding Cancellation of Cycle 1 Examinations',
				excerpt:
					'Important update on the cancellation of the CFP® Examination – Cycle 1 (Feb-Mar 2026). Further details will be communicated in due course.',
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
							class="rounded-md border border-blue-800 px-6 py-2.5 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-800 hover:text-white"
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