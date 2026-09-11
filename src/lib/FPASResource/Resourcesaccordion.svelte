<script>
	import { SvelteSet } from 'svelte/reactivity';

	/**
	 * FPAS Resources accordion list.
	 * Each item: title (click to expand/collapse), description paragraph(s),
	 * a centered "CLICK ME" button/link, and a divider below.
	 *
	 * Closed by default (chevron points down). Clicking a title expands it
	 * (chevron flips to point up) and reveals the paragraphs + button.
	 */
	let {
		items = [
			{
				id: 1,
				title: 'FPAS Code of Ethics and Professionalism Guidelines',
				paragraphs: [
					"This Code of Ethic and Professionalism outlines the ethical standards and professional behaviour expected of all individuals affiliated with the Financial Planning Association of Singapore (FPAS), including board members, employees, volunteers, trainers, students, and certified members. The Code supports FPAS's mission to uphold the integrity and professionalism of the financial planning industry in Singapore."
				],
				href: '#'
			},
			{
				id: 2,
				title: 'FPAS Conflict-of-Interest Policy CFP® Members',
				paragraphs: [
					'This policy outlines the standards of conduct expected of CFP® professionals affiliated with FPAS to ensure transparency, integrity, and regulatory compliance, particularly with the Financial Advisers Act (FAA), the Securities and Futures Act (SFA), and MAS Notices and Guidelines.'
				],
				href: '#'
			},
			{
				id: 3,
				title: 'FPAS CFP® Marks Use Guide',
				paragraphs: [
					'The FPSB CFP® Marks Use Guide outlines the proper use of the CFP®, CERTIFIED FINANCIAL PLANNER® certification marks.',
					'CFP® professionals should refer to this guide for guidelines on displaying the marks in business and marketing materials to ensure compliance and maintain the integrity of the designation.'
				],
				href: '#'
			}
		]
	} = $props();

	// Track open/closed state per item id. Starts empty (all closed),
	// matching the reference's default collapsed state.
	// SvelteSet (from svelte/reactivity) is used instead of the built-in Set
	// so mutating it (.add/.delete) is properly tracked by Svelte's reactivity.
	let openIds = new SvelteSet();

	function toggle(id) {
		if (openIds.has(id)) {
			openIds.delete(id);
		} else {
			openIds.add(id);
		}
	}
</script>

<div class="mx-auto max-w-6xl px-6 py-20">
	{#each items as item (item.id)}
		{@const isOpen = openIds.has(item.id)}
		<div class="border-b border-slate-200">
			<button
				type="button"
				onclick={() => toggle(item.id)}
				aria-expanded={isOpen}
				class="flex w-full items-center justify-between gap-4 py-6 text-left"
			>
				<h3 class="text-lg font-bold md:text-xl {isOpen ? 'text-blue-900' : 'text-slate-900'}">
					{item.title}
				</h3>
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			{#if isOpen}
				<div class="pb-8">
					<div class="space-y-4 text-slate-700">
						{#each item.paragraphs as paragraph, i (i)}
							<p class="leading-relaxed">{paragraph}</p>
						{/each}
					</div>

					<div class="mt-8 flex justify-center">
						<a
							href={item.href}
							class="rounded-md bg-blue-900 px-8 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-blue-800"
						>
							CLICK ME
						</a>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>