<script lang="ts">
	type Item = { text: string };

	const areasLeft: Item[] = [
		{ text: 'Account' },
		{ text: 'Banking/Trust' },
		{ text: 'Estate Planning' },
		{ text: 'Financial Planning' },
		{ text: 'Law' }
	];

	const areasRight: Item[] = [
		{ text: 'Insurance Planning' },
		{ text: 'Portfolio Management' },
		{ text: 'Retirement/Pension Planning' },
		{ text: 'Securities/Managed Funds' },
		{ text: 'Taxation' }
	];

	const notes: string[] = [
		'All levels of supervision are acceptable if the chain of supervision eventually leads back to the planner.',
		'Must be directly responsible for information that is provided to the planner/client and have reasonable liability for the client.',
		'Credit for teaching is limited to the instruction of the CFP® educational curriculum in a FPAS Registered Program. Teaching finance-related classes (for college credit) full-time at any non-FPAS Registered Program university is given two years worth of experience credit, but the third year of experience must be personal-financial planning experience or teaching the CFP® educational curriculum courses full-time at a FPAS Registered Program.',
		'"Client" denotes a person who engages a practitioner and for whom professional services are rendered. Pro-bono experience is accepted as long as (1) there is a client and (2) you are acting as a financial planning professional who is capable and qualified to offer objective, integrated, and comprehensive financial advice to or for the benefit of individuals to help them achieve their financial objectives using the financial planning process.'
	];
</script>

{#snippet checkIcon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		class="w-5 h-5 shrink-0 text-[#8fc73e]"
		fill="none"
	>
		<rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.8" />
		<path
			d="M7 12.5l3 3 7-7.5"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-4xl">
		<h2 class="text-xl md:text-2xl font-extrabold text-[#0b3a6f] mb-6">
			This experience may be gained in the following areas:
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 mb-16">
			<ul class="flex flex-col gap-3">
				{#each areasLeft as item (item.text)}
					<li class="flex items-center gap-3">
						{@render checkIcon()}
						<span class="text-sm text-[#1a1a1a]">{item.text}</span>
					</li>
				{/each}
			</ul>
			<ul class="flex flex-col gap-3">
				{#each areasRight as item (item.text)}
					<li class="flex items-center gap-3">
						{@render checkIcon()}
						<span class="text-sm text-[#1a1a1a]">{item.text}</span>
					</li>
				{/each}
			</ul>
		</div>

		<h3 class="text-center text-lg md:text-xl font-extrabold text-[#0b3a6f] leading-relaxed mb-8">
			FPAS RESERVE THE RIGHT TO CONDUCT INTERVIEW(S) TO DETERMINE THE SUITABILITY OF EXPERIENCE
			DISCLOSED. DECISION MADE THEREAFTER BY FPAS IS FINAL.
		</h3>

		<ul class="flex flex-col gap-6">
			{#each notes as note (note)}
				<li class="flex items-start gap-3">
					<span class="mt-0.5">{@render checkIcon()}</span>
					<p class="text-sm text-[#1a1a1a] leading-relaxed">{note}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>