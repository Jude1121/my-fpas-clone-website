<!-- src/lib/components/articles/FinancialPlannerAwardsSaveTheDate.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import heroBgDefault from '$lib/assets/media-release/bg-image.svg';
	import saveTheDateThumb from '$lib/assets/media-release/news/financial-planner-awards-save-the-date.png';

	/**
	 * Media Release article: "Financial Planner Awards 2026 Singapore"
	 * (Save the Date announcement)
	 *
	 * `body` block shapes:
	 *   { type: 'paragraph', text: '...' }                plain paragraph
	 *   { type: 'html', text: '...<a>...</a>' }            paragraph with inline link/bold
	 *   { type: 'heading', text: '...' }                   bold subheading
	 *   { type: 'quote', text: '...', attribution: '...' }  pull-quote with attribution
	 *
	 * NOTE: image props default to imported asset variables, not raw
	 * '/src/lib/...' strings, so they resolve correctly once built and
	 * deployed under a base path (e.g. /app).
	 */
	let {
		eyebrow = 'MEDIA RELEASE',
		title = 'Financial Planner Awards 2026 Singapore',
		date = '15 June 2026',
		heroImage = heroBgDefault,
		thumbnail = saveTheDateThumb,
		thumbnailAlt = 'Financial Planner Awards Singapore 2026 - Save the Date, 6 October 2026, Mandarin Oriental Singapore',
		body = [
			{
				type: 'heading',
				text: 'FPAS Announces the Return of the Financial Planner Awards Singapore 2026'
			},
			{
				type: 'paragraph',
				text: 'The Financial Planning Association of Singapore (FPAS) is pleased to announce the return of the Financial Planner Awards Singapore in 2026, reaffirming its commitment to recognising excellence and professionalism within the financial planning profession.'
			},
			{
				type: 'paragraph',
				text: 'The Financial Planner Awards Singapore serves as a platform to honour outstanding CERTIFIED FINANCIAL PLANNER™ (CFP®) professionals who have demonstrated excellence in professional practice, client service, leadership, ethics, and contribution to the financial planning profession.'
			},
			{
				type: 'paragraph',
				text: "As Singapore's leading professional body for financial planning, FPAS established the awards to recognise CFP professionals who exemplify the highest standards of competence, integrity, and commitment to advancing the profession. The awards serve not only to celebrate individual achievements but also to elevate the standing of professional financial planning in Singapore, while inspiring continued excellence across the industry."
			},
			{
				type: 'paragraph',
				text: "The return of the awards reflects FPAS' ongoing efforts to promote professional standards and recognise the important role financial planners play in helping individuals and families achieve their financial goals."
			},
			{
				type: 'quote',
				text: 'By celebrating outstanding CFP professionals, we hope to inspire continued excellence and strengthen public trust in professional financial planning.',
				attribution: 'FPAS Awards 2026 Chairperson and Honorary Secretary of FPAS, Neo Ley Lee'
			},
			{
				type: 'paragraph',
				text: 'Award recipients will be recognised at the Financial Planner Awards Singapore 2026 Gala Evening, where members of the financial planning community, industry leaders, and distinguished guests will come together to celebrate excellence within the profession.'
			},
			{
				type: 'paragraph',
				text: 'Applications are now open to eligible CFP members.'
			},
			{
				type: 'paragraph',
				text: 'Members and interested parties are encouraged to visit the Financial Planner Awards Singapore 2026 event page for information on award categories, eligibility requirements, application procedures, event details, and key dates.'
			},
			{
				type: 'html',
				text: 'Read more <a href="https://fpas.org.sg/media-release-single/6a44e12ecad1504a2404ad01" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-700 underline hover:text-blue-900">HERE</a> to understand the Qualifying Criteria for this year\'s FPAS Financial Planner Awards 2026.'
			},
			{
				type: 'paragraph',
				text: "FPAS looks forward to welcoming applications and celebrating the achievements of Singapore's leading financial planning professionals."
			},
			{
				type: 'heading',
				text: 'About the Financial Planning Association of Singapore (FPAS)'
			},
			{
				type: 'paragraph',
				text: 'The Financial Planning Association of Singapore (FPAS) is a non-profit professional association dedicated to advancing the financial planning profession and promoting the value of financial planning to the public. As the exclusive licensing and professional body for CFP certification in Singapore, FPAS is committed to upholding professional standards, ethics, and excellence among financial planning practitioners.'
			}
		],
		contact = {
			heading: 'For more information about the Financial Planner Awards Singapore 2026, please refer to the event page or contact FPAS at:',
			email: 'enquiry@fpas.org.sg'
		}
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
				class="relative mt-0 max-w-none rounded-none bg-white p-5 shadow-none sm:-mt-24 sm:max-w-4xl sm:rounded-tr-3xl sm:rounded-bl-3xl sm:p-8 sm:shadow-xl md:-mt-64 md:-ml-10 md:p-10"
			>
				<p class="mb-2 text-xs font-bold tracking-wide text-blue-900 sm:text-sm">{eyebrow}</p>

				<h1 class="mb-2 text-lg font-bold leading-snug text-blue-900 sm:text-2xl md:text-3xl">
					{title}
				</h1>

				<p class="mb-4 text-xs text-slate-500 sm:mb-6 sm:text-sm">{date}</p>

				<div class="mb-6 flex justify-center sm:mb-8">
					<img
						src={thumbnail}
						alt={thumbnailAlt}
						class="w-full max-w-full rounded-md object-contain sm:max-w-lg md:max-w-xl"
						loading="lazy"
					/>
				</div>

				<div class="space-y-4 text-sm text-slate-700 sm:space-y-5 sm:text-base">
					{#each body as block, i (i)}
						{#if block.type === 'paragraph'}
							<p class="leading-relaxed">{block.text}</p>
						{:else if block.type === 'html'}
							<p class="leading-relaxed">{@html block.text}</p>
						{:else if block.type === 'heading'}
							<p class="pt-2 font-bold leading-relaxed text-slate-900">{block.text}</p>
						{:else if block.type === 'quote'}
							<blockquote class="border-l-4 border-blue-800 py-1 pl-4 italic leading-relaxed text-slate-700 sm:pl-5">
								<p>&ldquo;{block.text}&rdquo;</p>
								{#if block.attribution}
									<footer class="mt-2 text-xs not-italic text-slate-500 sm:text-sm">
										— {block.attribution}
									</footer>
								{/if}
							</blockquote>
						{/if}
					{/each}
				</div>

				{#if contact}
					<div class="mt-8 space-y-1 text-sm text-slate-700 sm:text-base">
						<p class="leading-relaxed">
							{contact.heading}
							{' '}
							<a href="mailto:{contact.email}" class="text-blue-700 hover:underline">{contact.email}</a>.
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class="h-10 sm:h-16"></div>
</article>