<script lang="ts">
	// Swap these to match your actual filenames in src/lib/assets/pathway/
	import ImgTop from '$lib/assets/pathway/pathway-1.svg';
	import ImgMiddle from '$lib/assets/pathway/pathway-2.svg';
	import ImgBottom from '$lib/assets/pathway/pathway-3.svg';

	type NavItem = {
		label: string;
		active?: boolean;
	};

	const navItems: NavItem[] = [
		{ label: 'Why CFP' },
		{ label: 'Value of CFP Certification' },
		{ label: 'Pathway to CFP®', active: true },
		{ label: 'Financial Planner Code of Ethics and Professional Responsibility' },
		{ label: 'Examinations Process' },
		{ label: 'IBF Accreditation' }
	];

	type Section = {
		heading: string;
		paragraphs: string[];
	};

	const sections: Section[] = [
		{
			heading: 'Education',
			paragraphs: [
				'Before applying for the Certification Examination(s), a candidate must complete academic coverage of the financial planning curricula including: foundations in financial planning (AFP® course), risk management and insurance planning, tax planning and estate planning, investment planning, retirement planning, and financial plan construction and professional responsibilities.',
				'Completion of the academic requirement is available through three educational paths, namely self-study or distance learning, part-time course, or full-time course.'
			]
		},
		{
			heading: 'Examination',
			paragraphs: [
				"Upon successful completion of the academic requirement, the candidate is eligible to apply for the Certification Examination(s). The Certification Examination is designed to assess the candidate's ability to apply his/her financial planning education to financial planning situations in an integrated format, thereby protecting the public by assuring that he/she is at the appropriate level of competency required for practice."
			]
		},
		{
			heading: 'Experience',
			paragraphs: [
				'This centers on work which involves personal financial planning-related experience. It is designed to provide the public with the assurance that the candidate understands the counseling nature of personal financial planning. The requirement is three years, performed before or after the successful completion of the Certification Examination.'
			]
		},
		{
			heading: 'Ethics',
			paragraphs: [
				"The ethics requirement is the final step on your path to CFP® certification. It indicates you've agreed to adhere to high ethical and professional standards for the practice of financial planning, and to act as a fiduciary when providing financial advice to your client, always putting their best interests first."
			]
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[240px_1fr_220px] gap-8 lg:gap-12">
		<!-- Left: sidebar nav -->
		<nav class="flex flex-col">
			{#each navItems as item (item.label)}
				<a
					href="#"
					class="py-3 border-b border-dashed border-gray-300 text-sm leading-snug transition-colors
						{item.active
						? 'font-bold text-[#1a1a1a]'
						: 'text-[#0b3a6f] hover:text-[#072a52]'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Middle: main content -->
		<div class="min-w-0">
			<p class="text-lg font-bold tracking-wide text-[#0b3a6f] uppercase mb-6">
				Pathway to CFP<sup class="text-[0.6em]">®</sup>
			</p>

			<div class="flex flex-col gap-8">
				{#each sections as section (section.heading)}
					<div>
						<h2 class="text-xl font-bold text-[#0b3a6f] mb-3 font-dmsans">{section.heading}</h2>
						{#each section.paragraphs as paragraph, i (paragraph)}
							<p
								class="text-sm leading-relaxed text-[#4a4a4a] {i > 0 ? 'mt-3' : ''}"
							>
								{paragraph}
							</p>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<!-- Right: staggered image collage -->
		<div class="relative hidden md:block h-[520px]">
			<img
				src={ImgTop}
				alt="Colleagues reviewing financial documents"
				class="absolute top-0 right-0 w-[95%] rounded-sm shadow-sm object-cover"
			/>
			<img
				src={ImgMiddle}
				alt="Financial planner on a phone call"
				class="absolute top-[190px] left-0 w-[85%] rounded-sm shadow-sm object-cover"
			/>
			<img
				src={ImgBottom}
				alt="Advisor consulting with a client"
				class="absolute -bottom-10 right-15 w-[95%] rounded-sm shadow-sm object-cover"
			/>
		</div>
	</div>
</section>