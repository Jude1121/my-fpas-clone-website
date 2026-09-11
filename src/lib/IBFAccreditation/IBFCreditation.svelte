<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/pathway/
	import IbfAccreditationDiagram from '$lib/assets/ibf/ibf-accreditation-certification-diagram.png';

	type NavItem = { label: string; active?: boolean };

	const navItems: NavItem[] = [
		{ label: 'Why CFP' },
		{ label: 'Value Of CFP Certification' },
		{ label: 'Pathway to CFP®' },
		{ label: 'Financial Planner Code of Ethics and Professional Responsibility' },
		{ label: 'Examinations Process' },
		{ label: 'IBF Accreditation', active: true }
	];

	type StandardTier = { title: string; note: string; noteLink?: boolean };

	const standardTiers: StandardTier[] = [
		{ title: 'IBF Qualified', note: '(for new entrants)' },
		{ title: 'IBF Advanced', note: '(for senior practitioners and specialists)', noteLink: true },
		{ title: 'IBF Fellows', note: '(for industry veterans)' }
	];

	type Level = {
		number: number;
		title: string;
		intro: string[];
		markLabel: string;
		markColor: string;
		applicationLabel: string;
		applicationBody: string;
		applicationNote?: string;
		criteriaIntro: string;
		criteriaBullets?: string[];
		footnote: string;
	};

	const levels: Level[] = [
		{
			number: 1,
			title: 'IBF Qualified – Level 1',
			intro: [
				'An IBF-certified practitioner is one who epitomizes the values of professional excellence, integrity and a strong commitment to industry development.',
				'A practitioner with an IBF Qualified (IBFQ) certification status is one that is equipped with broad-based capabilities and foundation competencies to be ready to undertake new roles. Associate Financial PlannerTM, AFP® practitioner who successfully completes an IBF Level 1 CPD Training Programme will be eligible to apply the IBFQ certification.',
				'The certified practitioner is entitled to use the qualification title "IBFQ" and the following certification mark:'
			],
			markLabel: 'IBFQ',
			markColor: '#9a9a9a',
			applicationLabel: 'Application:',
			applicationBody: 'For new entrants with less than 3 years of financial services industry experience',
			criteriaIntro: '75% of Technical Skill Competencies (TSCs) within job role, including:',
			criteriaBullets: ['Industry Rules & Regulations', 'Product Knowledge'],
			footnote:
				'*TSCs for Product Knowledge and Rules & Regulations can be attained through either regulatory exams or training courses'
		},
		{
			number: 2,
			title: 'IBF Advanced – Level 2',
			intro: [
				'An IBF-certified practitioner is one who epitomizes the values of professional excellence, integrity and a strong commitment to industry development.',
				'A practitioner with an IBFA certification status is an experienced practitioner and has acquired applied knowledge and complex analytical skills for specialists or supervisory functions.',
				'Associate Wealth Planner, AWPᶜᴹ who successfully completes an IBF Level 2 CPD Training Programme will be eligible to apply the IBF Advance (IBFA) certification.',
				'The certified practitioner is entitled to use the qualification title "IBFA" and the following certification mark:'
			],
			markLabel: 'IBFA',
			markColor: '#8fc73e',
			applicationLabel: 'Application:',
			applicationBody: 'For practitioners with 3 to 15 years of relevant experience in selected industry segment.',
			applicationNote: 'Application should be made within 5 years from the completion of the IBF-STS accredited programme.',
			criteriaIntro: '75% of Technical Skill Competencies (TSCs) within job role',
			footnote:
				'*TSCs for Product Knowledge and Rules & Regulations can be attained through either regulatory exams or training courses'
		},
		{
			number: 3,
			title: 'IBF Advanced – Level 3',
			intro: [
				'An individual who has demonstrated applied knowledge and advanced analytical skills for specialist or supervisory functions and with more than 7 years of experience in selected industry segment.',
				'Certified Financial PlannerTM, CFP® who successfully completes an IBF Level 3 CPD Training Programme will be eligible to apply the IBF Advance (IBFA) certification.',
				'The certified practitioner is entitled to use the qualification title "IBFA" and the following certification mark:'
			],
			markLabel: 'IBFA',
			markColor: '#8fc73e',
			applicationLabel: 'Application:',
			applicationBody: 'For practitioners with more than 7 years of relevant experience in selected industry segment.',
			criteriaIntro: '75% of Technical Skill Competencies (TSCs) within job role',
			footnote:
				'*TSCs for Product Knowledge and Rules & Regulations can be attained through either regulatory exams or training courses'
		}
	];
</script>

{#snippet certMark(color: string)}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24" class="h-4 w-auto">
		<path d="M2 20 L14 4 L18 4 L6 20 Z" fill={color} />
		<path d="M14 20 L26 4 L30 4 L18 20 Z" fill={color} />
		<path d="M26 20 L38 4 L40 4 L28 20 Z" fill={color} />
	</svg>
{/snippet}

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 lg:gap-14">
		<!-- Sidebar -->
		<nav class="flex flex-col">
			{#each navItems as item (item.label)}
				<a
					href="#"
					class="py-3 border-b border-dashed border-gray-300 text-sm leading-snug transition-colors
						{item.active ? 'font-bold text-[#1a1a1a]' : 'text-[#0b3a6f] hover:text-[#072a52]'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Main content -->
		<div class="min-w-0 text-sm text-[#0b3a6f] leading-relaxed">
			<h1 class="text-xl font-extrabold text-[#1a1a1a] mb-4">
				About the Institute of Banking and Finance Singapore (IBF)
			</h1>

			<p class="mb-4 text-justify">
				The Institute of Banking and Finance Singapore (IBF) was established in 1974 as a
				not-for-profit industry association to foster and develop the professional competencies
				of the financial sector. IBF represents the interests of close to 200-member financial
				institutions covering banks, insurance companies, securities brokerages and asset
				management firms.
			</p>
			<p class="mb-4 text-justify">
				In partnership with the financial industry and training providers, IBF is dedicated to
				empowering practitioners with capabilities to support the growth of the Asian financial
				industry and to promote the Asian standard of excellence for practitioners in finance.
			</p>
			<p class="mb-8 text-justify">
				Working hand-in-hand with the individual practitioner and the industry, IBF aims to
				elevate individual competency whilst raising industry standards.
			</p>

			<h2 class="text-lg font-extrabold text-[#0b3a6f] mb-4">About the IBF Standards</h2>

			<p class="mb-4 text-justify">
				The IBF Standards represents a set of competency standards developed by the industry, for
				the industry. It provides a practice-oriented development roadmap for financial sector
				practitioners to attain the necessary training to excel in their respective job roles.
			</p>
			<p class="mb-8 text-justify">
				Covering 13 industry segments spanning more than 50 specializations, the IBF Standards
				offers a comprehensive suite of accredited training and assessment programmes to guide a
				financial sector practitioner from licensing examinations on through to professional
				certification across 3-levels:
			</p>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
				{#each standardTiers as tier (tier.title)}
					<div>
						<p class="font-bold text-[#1a1a1a]">{tier.title}</p>
						<p class={tier.noteLink ? 'text-[#0b3a8f] underline' : 'text-[#1a1a1a]'}>{tier.note}</p>
					</div>
				{/each}
			</div>

			<!-- Accreditation diagram -->
			<img
				src={IbfAccreditationDiagram}
				alt="IBF Accreditation and Certification diagram showing AFP, AWP, and CFP pathways to IBF Qualified and IBF Advanced status"
				class="w-full h-auto mb-6"
			/>

			<p class="mb-10">
				You may wish to refer to the
				<a href="#" class="text-[#0b3a8f] underline hover:no-underline">IBF</a>
				webpage for more information
			</p>

			<h2 class="text-lg font-extrabold text-[#0b3a6f] mb-6">IBF Certification</h2>

			<div class="flex flex-col gap-10">
				{#each levels as level (level.number)}
					<div>
						<h3 class="text-base font-bold text-[#0b3a6f] mb-2">
							{level.number}. {level.title}
						</h3>

						{#each level.intro as line, i (line)}
							<p class="{i < level.intro.length - 1 ? 'mb-1' : 'mb-3'} text-black">{line}</p>
						{/each}

						<div class="flex items-center gap-2 mb-4">
							{@render certMark(level.markColor)}
						</div>

						<p class="font-bold underline mb-1">{level.applicationLabel}</p>
						<p class="mb-1">
							For <span class="font-bold">{level.applicationBody.replace('For ', '')}</span>
						</p>
						{#if level.applicationNote}
							<p class="mb-3">{level.applicationNote}</p>
						{:else}
							<div class="mb-3"></div>
						{/if}

						<p class="font-bold underline mb-1">Criteria:</p>
						<p class="mb-1">
							<span class="font-bold underline">75%</span>
							{level.criteriaIntro.replace('75% ', '')}
						</p>

						{#if level.criteriaBullets}
							<ul class="list-disc pl-5 flex flex-col gap-0.5 mb-2">
								{#each level.criteriaBullets as bullet (bullet)}
									<li>{bullet}</li>
								{/each}
							</ul>
						{/if}

						<p class="italic text-xs">{level.footnote}</p>
					</div>
				{/each}
			</div>

			<p class="my-8">
				Please <a href="#" class="text-[#0b3a8f] underline hover:no-underline">click here</a> to find
				out more about IBF certification and its benefits
			</p>

			<h2 class="text-lg font-extrabold text-[#0b3a6f] mb-3">
				Continuing Professional Development (CPD) Obligations
			</h2>
			<p>
				All IBF-certified individuals are expected to achieve a minimum of 15 Continuing
				Professional Development ("CPD") hours annually. Details on eligible CPD activities can be
				found here:
				<a href="#" class="text-[#0b3a8f] underline hover:no-underline">
					IBF Certification Terms and Conditions
				</a>
			</p>
		</div>
	</div>
</section>