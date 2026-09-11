<script lang="ts">
	type FormatItem = {
		text: string;
		bold?: boolean;
		href?: string;
	};

	const formatItems: FormatItem[] = [
		{ text: 'Exams can be conducted through E-Assessment or written format.' },
		{
			text: 'Module 1 to Module 5 are 3.0 hour Multiple Choice Examinations. Please refer to the Examination Schedule for the format applicable to the corresponding examination cycle.'
		},
		{ text: 'Module 6 is a 3.5 hour written examination.' },
		{ text: 'Exam Policies', bold: true, href: '#' },
		{ text: 'The passing score is determined by proprietary formula and is not a fixed benchmark.' }
	];

	type SubBullet = { text: string; href?: string };
	type Bullet = { text: string; href?: string; sub?: SubBullet[] };

	const linkedinHeadlines: Bullet[] = [
		{ text: 'CERTIFIED FINANCIAL PLANNER® professional. Simplifying complex financial matters to help clients.' },
		{ text: 'CERTIFIED FINANCIAL PLANNER® professional, Tax Planning at ABC Financial Institution.' },
		{ text: 'John Lee, CFP® | Tax Planning, ABC Financial Institution | 6123 4567' }
	];

	const twitterProfiles: Bullet[] = [
		{
			text: 'John Lee, CFP® @sampletwitteruser',
			sub: [{ text: 'CERTIFIED FINANCIAL PLANNER® professional. Simplifying complex financial matters to help clients.' }]
		},
		{
			text: 'John Lee, CFP® @sampletwitteruser',
			sub: [{ text: 'Financial Planner, Tax Planning at ABC Financial Institution.' }]
		},
		{ text: 'John Lee, CFP® lives in Singapore and provides personalized financial planning for all stages of life.' }
	];

	const emailSignatures: Bullet[] = [
		{
			text: 'John Lee, CFP®',
			sub: [
				{ text: 'Financial Planner' },
				{ text: 'john.lee@examplefinancialorg.sg' },
				{ text: 'Helping clients achieve their financial goals' }
			]
		},
		{
			text: 'John Lee',
			sub: [
				{ text: 'Certified Financial Planner® professional' },
				{ text: 'john.lee@examplefinancialorg.sg' },
				{ text: '6123 4567' }
			]
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-4xl">
		<!-- Eligibility -->
		<h2 class="text-xl font-extrabold text-[#0b2f6b] mb-2">Eligibility</h2>
		<p class="text-sm text-[#4a4a4a] mb-8">
			GCE "A" Level Certificate or Diploma or minimum 3 years of relevant working experiences.
		</p>

		<!-- Examination Format -->
		<h2 class="text-xl font-extrabold text-[#0b2f6b] mb-3">Examination Format</h2>
		<ol class="flex flex-col gap-2 mb-10">
			{#each formatItems as item, i (item.text)}
				<li class="text-base">
					<span class="text-[#0b2f6b]">{i + 1}. </span>
					{#if item.href}
						<a
							href={item.href}
							class="{item.bold ? 'font-bold' : ''} text-[#0b2f6b] underline hover:no-underline"
						>
							{item.text}
						</a>
					{:else}
						<span class="text-[#0b2f6b]">{item.text}</span>
					{/if}
				</li>
			{/each}
		</ol>

		<!-- CFP Mark Usage -->
		<h2 class="text-xl font-extrabold text-[#0b2f6b] underline mb-4">CFP Mark Usage</h2>

		<p class="text-base text-[#1a1a1a] leading-relaxed mb-4">
			As a CFP® practitioner, you've met a high standard of certification. To showcase your
			certification, FPAS encourages you to use the CFP Mark extensively. By doing so, you can get
			the word out, build your reputation, and set yourself apart from other financial planners.
			The marks should be used correctly to maintain the integrity of your CFP designation.
		</p>

		<p class="text-base text-[#1a1a1a] leading-relaxed mb-4">
			For more information on how to use CFP Marks in a proper manner, please refer to the
			<br />
			<a href="#" class="text-[#0b2f6b] underline hover:no-underline">CFP Marks Use Guide.</a>
		</p>

		<p class="text-base text-[#1a1a1a] leading-relaxed mb-8">
			Compliance with your organization's communications style guide and electronic media policies
			is also your responsibility. Please keep these in mind when setting up your profile.
		</p>

		<!-- Sample LinkedIn -->
		<h3 class="text-base font-bold text-[#1a1a1a] mb-2">Sample LinkedIn profile headlines.</h3>
		<ul class="list-disc pl-5 flex flex-col gap-1 mb-6">
			{#each linkedinHeadlines as item (item.text)}
				<li class="text-sm text-[#1a1a1a]">{item.text}</li>
			{/each}
		</ul>

		<!-- Sample Twitter -->
		<h3 class="text-base font-bold text-[#1a1a1a] mb-2">Sample Twitter profiles.</h3>
		<ul class="list-disc pl-5 flex flex-col gap-1 mb-6">
			{#each twitterProfiles as item (item.text + (item.sub?.[0]?.text ?? ''))}
				<li class="text-base text-[#1a1a1a]">
					{item.text}
					{#if item.sub}
						<ul class="list-[circle] pl-5 mt-1 flex flex-col gap-1">
							{#each item.sub as sub (sub.text)}
								<li class="text-base text-[#1a1a1a]">{sub.text}</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>

		<!-- Sample email signatures -->
		<h3 class="text-base font-bold text-[#1a1a1a] mb-2">Sample email signatures</h3>
		<ul class="list-disc pl-5 flex flex-col gap-1">
			{#each emailSignatures as item (item.text)}
				<li class="text-base text-[#1a1a1a]">
					{item.text}
					{#if item.sub}
						<ul class="list-[circle] pl-5 mt-1 flex flex-col gap-1">
							{#each item.sub as sub (sub.text)}
								<li class="text-base text-[#1a1a1a]">{sub.text}</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>