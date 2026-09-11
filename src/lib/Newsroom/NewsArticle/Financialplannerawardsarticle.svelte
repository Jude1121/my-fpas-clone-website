<script>
	/**
	 * Media Release article: "FPAS Financial Planner Awards 2026:
	 * Understanding the Qualifying Criteria"
	 *
	 * Same hero + overlapping white card shell as MediaReleaseArticle.svelte,
	 * but the body supports richer content: subheadings, bullet lists,
	 * inline images, and bold/highlighted lines — since this article has
	 * all of those.
	 *
	 * `body` block shapes:
	 *   { type: 'paragraph', text: '...' }              plain paragraph
	 *   { type: 'html', text: '...<strong>...</strong>' } paragraph with inline bold
	 *   { type: 'heading', text: '...' }                 bold subheading
	 *   { type: 'bullets', items: ['...', '...'] }        bullet list
	 *   { type: 'image', src: '...', alt: '...' }         full-width inline image
	 */
	let {
		eyebrow = 'MEDIA RELEASE',
		title = 'FPAS Financial Planner Awards 2026: Understanding the Qualifying Criteria',
		date = '1 July 2026',
		heroImage = '/src/lib/assets/media-release/bg-image.svg',
		thumbnail = '/src/lib/assets/media-release/news/financial-planner-awards-2026.png',
		thumbnailAlt = 'Financial Planner Awards Singapore 2026 - Understanding the Qualifying Criteria',
		body = [
			{
				type: 'heading',
				text: 'A Better Understanding of the FPAS Annual Financial Planner Awards 2026 Qualifying Criteria'
			},
			{
				type: 'paragraph',
				text: 'Singapore, 01 July 2026 – The Financial Planning Association of Singapore (FPAS) is pleased to provide greater clarity on the qualifying criteria for the FPAS Annual Financial Planner Awards 2026, reaffirming its commitment to recognising financial planning professionals who exemplify excellence, professionalism, and meaningful contributions to the profession.'
			},
			{
				type: 'paragraph',
				text: 'The awards are designed to recognise Certified Financial Planner (CFP®) professionals who have demonstrated outstanding achievements in serving clients while advancing the financial planning profession. Recognising that CFP® professionals contribute to the profession and society in diverse ways, the awards feature two distinct qualifying routes.'
			},
			{
				type: 'image',
				src: '/src/lib/assets/media-release/news/financial-planner-awards-2026-registration-open.png',
				alt: 'Financial Planner Awards Singapore 2026 - Registration Now Open'
			},
			{ type: 'heading', text: '1. Professional Excellence Route' },
			{
				type: 'paragraph',
				text: 'The Professional Excellence Route recognises CFP® professionals whose contributions have strengthened the financial planning profession through initiatives that benefit the industry, organisations, society, and the wider community.'
			},
			{ type: 'paragraph', text: 'This route honours members who have made significant contributions in areas such as:' },
			{
				type: 'bullets',
				items: [
					'Social and public financial literacy initiatives;',
					'Development of the financial planning industry;',
					'Organisational and company-level professional development;',
					'Community engagement and volunteerism; and',
					'Other initiatives that strengthen the standards, reputation, and future of the financial planning profession.'
				]
			},
			{ type: 'paragraph', text: '(Please refer to Annex A of the application form for detailed assessment criteria)' },
			{
				type: 'paragraph',
				text: 'Through this route, FPAS recognises that professional excellence is also reflected in the willingness of CFP® professionals to mentor others, share knowledge, promote financial literacy, support industry development, and contribute meaningfully to the wider community.'
			},
			{ type: 'heading', text: '2. Professional Achievement Route' },
			{
				type: 'paragraph',
				text: 'The Professional Achievement Route recognises CFP® professionals who have consistently delivered high-quality financial planning advice and services to their clients.'
			},
			{ type: 'paragraph', text: 'Qualifying members are assessed based on their consistent delivery of quality financial planning services through:' },
			{
				type: 'bullets',
				items: [
					'Strong professional production records in First Year Commission (FYC), First Year Premium (FYP), or Earned Income; and',
					'Achievement of a Balanced Scorecard (BSC) Grade A, reflecting high standards of professionalism, compliance, and client-centric advisory practices.'
				]
			},
			{
				type: 'paragraph',
				text: 'This route acknowledges CFP® professionals who have demonstrated excellence in serving clients while upholding the highest ethical and professional standards expected of the CFP® certification.'
			},
			{ type: 'heading', text: 'Applications Now Open for FPAS Annual Financial Planner Awards 2026' },
			{
				type: 'html',
				text: 'In celebration of the return of the Financial Planner Awards with the CFP® professionals across the industry, FPAS is pleased to offer an <strong>Early Bird pricing with S$188 off from the application fee for applications submitted on or before 17 July 2026</strong>.'
			},
			{
				type: 'paragraph',
				text: 'CFP® professionals are encouraged to take advantage of this limited-time offer and submit their applications early.'
			},
			{
				type: 'paragraph',
				text: 'The FPAS Annual Financial Planner Awards provide a prestigious platform for CFP® professionals to gain industry recognition for their professional achievements, exemplary client service, and meaningful contributions to the advancement of the financial planning profession.'
			},
			{ type: 'html', text: '<strong>Early Bird Pricing:</strong> S$188 off from the application fee' },
			{ type: 'html', text: '<strong>Early Bird Closing Date:</strong> 17 July 2026' },
			{ type: 'paragraph', text: '(Final deadline submission: 23 August 2026)' },
			{
				type: 'paragraph',
				text: 'Interested applicants are strongly encouraged to submit their applications before the early bird closing date to enjoy the special rate.'
			},
			{
				type: 'image',
				src: '/src/lib/assets/media-release/news/financial-planner-awards-2026-details-poster.png',
				alt: 'Financial Planner Awards Singapore 2026 - full event details'
			},
			{ type: 'heading', text: 'Recognising Excellence in All Dimensions' },
			{
				type: 'paragraph',
				text: 'The FPAS Annual Financial Planner Awards celebrate excellence in all its dimensions.'
			},
			{
				type: 'paragraph',
				text: 'While the Professional Excellence Route honours leadership and contributions that create a lasting impact on society, the profession, organisations, and the community, the Professional Achievement Route recognises outstanding client service, consistent professional performance, and the delivery of quality financial planning advice.'
			},
			{
				type: 'paragraph',
				text: "By recognising excellence through these two qualifying routes, FPAS aims to encourage CFP® professionals to pursue the highest standards of competence, ethics, and service, while actively contributing to the continued advancement of Singapore's financial planning profession."
			},
			{
				type: 'html',
				text: "<strong>Hurry, sign up today and be recognised among Singapore's leading CFP® professionals for your excellence, professionalism, and impact on the profession and society.</strong>"
			}
		],
		contact = {
			heading: 'For media enquiries, please contact:',
			org: 'Financial Planning Association of Singapore (FPAS)',
			email: 'enquiry@fpas.org.sg',
			phone: '(65) 6209 2611'
		}
	} = $props();
</script>

<article class="bg-slate-50">
	<!-- Hero photo banner -->
	<div class="relative">
		<div
			class="h-[280px] w-full bg-cover bg-center md:h-[420px]"
			style="background-image: url({heroImage});"
		></div>

		<!-- Overlapping white card: title, date, image, and full body copy -->
		<div class="relative mx-auto max-w-6xl px-6">
			<div
				class="relative -mt-40 max-w-4xl rounded-tr-3xl bg-white p-8 shadow-xl md:-mt-64 md:p-10"
			>
				<p class="mb-2 text-sm font-bold tracking-wide text-blue-900">{eyebrow}</p>

				<h1 class="mb-2 text-2xl font-bold leading-snug text-blue-900 md:text-3xl">
					{title}
				</h1>

				<p class="mb-6 text-sm text-slate-500">{date}</p>

				<div class="mb-8 flex justify-center">
					<img
						src={thumbnail}
						alt={thumbnailAlt}
						class="w-full max-w-sm rounded-md object-contain"
						loading="lazy"
					/>
				</div>

				<div class="space-y-5 text-slate-700">
					{#each body as block}
						{#if block.type === 'paragraph'}
							<p class="leading-relaxed">{block.text}</p>
						{:else if block.type === 'html'}
							<p class="leading-relaxed">{@html block.text}</p>
						{:else if block.type === 'heading'}
							<p class="pt-2 font-bold leading-relaxed text-slate-900">{block.text}</p>
						{:else if block.type === 'bullets'}
							<ul class="ml-5 list-disc space-y-2">
								{#each block.items as item}
									<li class="leading-relaxed">{item}</li>
								{/each}
							</ul>
						{:else if block.type === 'image'}
							<img
								src={block.src}
								alt={block.alt}
								class="w-full rounded-md"
								loading="lazy"
							/>
						{/if}
					{/each}
				</div>

				{#if contact}
					<div class="mt-8 space-y-1 text-slate-700">
						<p class="font-bold">{contact.heading}</p>
						<p class="pt-3">{contact.org}</p>
						<p>
							Email: <a href="mailto:{contact.email}" class="text-blue-700 hover:underline">{contact.email}</a>
						</p>
						<p>Telephone: {contact.phone}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class="h-16"></div>
</article>