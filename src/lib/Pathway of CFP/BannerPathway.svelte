<script lang="ts">
	// Swap these to match your actual filenames in src/lib/assets/pathway/icon/
	import IconPractice from '$lib/assets/pathway/icon/practice-standards.svg';
	import IconCompetency from '$lib/assets/pathway/icon/competency-profile.svg';
	import IconEthics from '$lib/assets/pathway/icon/code-of-ethics.svg';

	type LinkPart = {
		text: string;
		href?: string;
	};

	type Column = {
		icon: string;
		alt: string;
		parts: LinkPart[];
	};

	const columns: Column[] = [
		{
			icon: IconPractice,
			alt: 'Practice standards icon',
			parts: [
				{ text: 'Engaging in practice described in ' },
				{ text: "FPAS's Financial Planning Practice Standards", href: '#' }
			]
		},
		{
			icon: IconCompetency,
			alt: 'Competency profile icon',
			parts: [
				{ text: 'Applying the abilities, skills and knowledge described in FPAS\'s Financial Planner Competency Profile' }
			]
		},
		{
			icon: IconEthics,
			alt: 'Code of ethics icon',
			parts: [
				{ text: 'Adhering to ethical principles described in ' },
				{
					text: "FPAS's Financial Planner Code of Ethics and Professional Responsibility",
					href: '#'
				}
			]
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="relative mx-auto max-w-6xl flex items-center" style="height: 700px;">
		<!-- Skewed background shape -->
		<div
			class="absolute left-0 right-0 bg-[#ece7dd]"
			style="clip-path: polygon(0% 24%, 100% 0%, 100% 76%, 0% 100%); top: 15%; bottom: 15%;"
		></div>

		<!-- Content (kept unskewed, padded to sit inside the shape) -->
		<div class="relative w-full px-8 md:px-16 py-14 md:py-16">
			<h2 class="text-center text-lg md:text-xl font-extrabold text-[#0b3a6f] leading-snug mb-10">
				AN INDIVIDUAL DEMONSTRATES RELEVANT<br />
				WORK EXPERIENCE WORKING WITH CLIENTS WHILE
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
				{#each columns as column (column.alt)}
					<div class="flex flex-col items-center text-center">
						<img src={column.icon} alt={column.alt} class="w-16 h-16 mb-4" />
						<p class="text-sm text-[#1a1a1a] leading-relaxed max-w-[280px]">
							{#each column.parts as part (part.text)}
								{#if part.href}
									<a 
										href={part.href}
										class="text-[#0b3a6f] italic underline underline-offset-2 hover:text-[#072a52]"
									>
										{part.text}
									</a>
								{:else}
									{part.text}
								{/if}
							{/each}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>