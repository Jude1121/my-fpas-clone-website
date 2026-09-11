<script lang="ts">
	// Swap these to match your actual filenames in src/lib/assets/pathway/ (or wherever these live)
	import IbfAccreditationImg from '$lib/assets/ibf-accreditation.png';
	import CfpTerritoryMapImg from '$lib/assets/CFP  Territory.jpeg';

	type SubItem = {
		label: string;
		text?: string;
		roman?: string[];
		checks?: string[];
		href?: string;
		linkText?: string;
		hrefTail?: string;
	};
	type Step = { number: number; heading: string; intro?: string; items: SubItem[] };

	const steps: Step[] = [
		{
			number: 1,
			heading: 'Exemption application to FPAS',
			intro:
				"CFP® Professionals of FPSB (26) affiliates who wish to obtain the CFP® Certification credential in Singapore, is require fulfilling the following requirements:",
			items: [
				{
					label: 'a.',
					text: 'Payment of a non-refundable Admin fee for the application, regardless of the outcome of the application.',
					roman: [
						'S$54.00 (admin fee inclusive of 8% GST on and after 01 Jan 2023)',
						'S$54.50 (admin fee inclusive of 9% GST on and after 01 Jan 2024)'
					]
				},
				{
					label: 'b.',
					linkText: 'Exemption Application Form',
					href: '#',
					hrefTail:
						' with the supporting documents to FPAS Certification at support@fpas.org.sg. The supporting documents include:',
					checks: [
						'Highest academic certificate and transcript',
						'CFP Letter of Good Standing from your home territory',
						'CFP® certificate awarded by home territory'
					]
				},
				{
					label: 'c.',
					text: 'FPAS shall reply within 5 working days upon submission of the above and payment receipt. The outcome of the application will be informed through email.'
				}
			]
		},
		{
			number: 2,
			heading: 'Approval Application',
			items: [
				{
					label: 'a.',
					text: 'Upon successful application, you are required to present the original supporting documents for site verification, within 2 months from the approval date.'
				},
				{
					label: 'b.',
					text: 'Payment of exemption fee is as follow',
					roman: [
						'S$194.40 (exemption fee inclusive of 8% GST on and after 01 Jan 2023) per module',
						'S$196.20 (exemption fee inclusive of 9% GST on and after 01 Jan 2024) per module'
					]
				},
				{
					label: 'c.',
					text: 'Letter of Exemptions will be issued once the citing of the documents and payment have been received.'
				}
			]
		},
		{
			number: 3,
			heading: 'Registration with FPAS approved Education Providers',
			items: [
				{
					label: '',
					text: 'CFP® Professionals of FPSB (26) affiliates are required to show the Letter of Exemptions to FPAS approved Education Providers upon registration within 12 months from date of issuance.'
				}
			]
		}
	];
</script>

<!-- Section 1: CFP Cross-Border Practice (text) -->
<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-4xl text-sm text-[#0b2f6b] leading-relaxed">
		<h1 class="text-2xl md:text-3xl font-extrabold text-[#0b2f6b] mb-6">CFP Cross-Border Practice</h1>

		<h2 class="text-base font-bold text-[#0b2f6b] mb-6">
			How to apply CFP® Certification credential in Singapore?
		</h2>

		<div class="flex flex-col gap-8 pl-4">
			{#each steps as step (step.number)}
				<div>
					<h3 class="font-bold text-[#0b2f6b] mb-3">{step.number}. {step.heading}</h3>

					{#if step.intro}
						<p class="mb-3 pl-4 text-black">{step.intro}</p>
					{/if}

					<div class="flex flex-col gap-4 pl-6">
						{#each step.items as item (item.label + (item.text ?? item.linkText ?? ''))}
							<div class="text-black">
								<p>
									{#if item.label}<span>{item.label} </span>{/if}
									{#if item.text}{item.text}{/if}
									{#if item.linkText}
										<a href={item.href} class="text-black underline hover:no-underline">
											{item.linkText}
										</a>{item.hrefTail}
									{/if}
								</p>

								{#if item.roman}
									<ul class="flex flex-col gap-1 mt-2 pl-8">
										{#each item.roman as line, i (line)}
											<li>
												{['i', 'ii', 'iii', 'iv'][i]}. {line}
											</li>
										{/each}
									</ul>
								{/if}

								{#if item.checks}
									<ul class="flex flex-col gap-1 mt-2 pl-8">
										{#each item.checks as line (line)}
											<li>✓ {line}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<p class="mt-10">
			Please feel free to contact our Certification team at
			<a href="mailto:support@fpas.org.sg" class="text-[#0b2f6b] underline hover:no-underline">
				support@fpas.org.sg
			</a>
			or (65) 6829 7166 should you require further assistance.
		</p>
	</div>
</section>

<!-- Section 2: IBF Accreditation infographic + CFP Professionals by Territory map -->
<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl flex flex-col gap-10">
		<img
			src={IbfAccreditationImg}
			alt="IBF Accreditation levels for AFP, AWP, and CFP certifications"
			class="w-full h-auto"
		/>

		<img
			src={CfpTerritoryMapImg}
			alt="Map showing the number of CFP professionals by territory worldwide"
			class="w-full h-auto"
		/>
	</div>
</section>