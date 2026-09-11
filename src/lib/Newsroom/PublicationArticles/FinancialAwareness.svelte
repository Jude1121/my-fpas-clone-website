<script>
	/**
	 * Publication detail page — plain text article layout.
	 * `body` is an array of blocks so paragraphs, checklists, and the
	 * bold intro line can each be styled correctly and reordered easily.
	 * Block shapes:
	 *   { type: 'paragraph', text: '...' }
	 *   { type: 'bold', text: '...' }
	 *   { type: 'checklist', items: ['...', '...'] }
	 */
	let {
		eyebrow = 'PUBLICATION',
		title = 'Financial Awareness Day 2026',
		subtitle = 'Financial Awareness Day 2026',
		body = [
			{
				type: 'paragraph',
				text: 'Today, as we mark Financial Awareness Day, let us take a moment to reflect on our financial well-being.'
			},
			{
				type: 'paragraph',
				text: "Financial awareness is more than knowing how to save or invest. It is about understanding our financial choices, preparing for life's uncertainties and making informed decisions for ourselves and our families."
			},
			{
				type: 'paragraph',
				text: "As Singapore's demographics evolve—with longer lives, an ageing population and changing family structures—financial planning and financial literacy have never been more important."
			},
			{ type: 'bold', text: 'Take five minutes today to ask yourself:' },
			{
				type: 'checklist',
				items: [
					'Do I know what comes in—and where it goes?',
					'Could I cover three to six months of expenses if something unexpected happens?',
					'Does my financial protection still reflect my needs and the people who depend on me?',
					'Are my savings and investments connected to clear life goals?'
				]
			},
			{
				type: 'paragraph',
				text: 'You do not have to address everything today. Start with one honest check and one practical next step.'
			},
			{
				type: 'paragraph',
				text: 'At the Financial Planning Association of Singapore (FPAS), we believe financial planning empowers individuals to take greater ownership of their financial future.'
			},
			{
				type: 'paragraph',
				text: 'Financial awareness today builds financial resilience for tomorrow.'
			},
			{
				type: 'paragraph',
				text: "Let's make informed choices, plan ahead and build a financially healthier Singapore together."
			},
			{
				type: 'paragraph',
				text: 'Start your CFP® journey today — or connect with a CFP® professional to plan your financial future with confidence.'
			}
		],
		hashtags = [
			'#FinancialAwarenessDay',
			'#FPAS',
			'#FinancialPlanning',
			'#FinancialLiteracy',
			'#FinancialResilience',
			'#CFPProfessional',
			'#Singapore'
		]
	} = $props();
</script>

<article class="mx-auto max-w-4xl px-6 py-10">
	<p class="mb-2 text-sm font-bold tracking-wide text-blue-900">{eyebrow}</p>

	<h1 class="mb-8 text-3xl font-bold leading-snug text-blue-900 md:text-4xl">
		{title}
	</h1>

	<div class="pl-6 text-slate-800">
		<p class="mb-6 font-bold underline underline-offset-2">{subtitle}</p>

		<div class="space-y-6">
			{#each body as block}
				{#if block.type === 'paragraph'}
					<p class="leading-relaxed">{block.text}</p>
				{:else if block.type === 'bold'}
					<p class="font-bold leading-relaxed">{block.text}</p>
				{:else if block.type === 'checklist'}
					<ul class="space-y-3">
						{#each block.items as item}
							<li class="leading-relaxed">
								<span class="mr-1">&check;</span>{item}
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>

		{#if hashtags.length}
			<p class="mt-8">
				{#each hashtags as tag, i}
					<a href="#" class="text-blue-700 hover:underline">{tag}</a>{i < hashtags.length - 1 ? ' ' : ''}
				{/each}
			</p>
		{/if}
	</div>
</article>