<script lang="ts">
	type Block = {
		heading: string;
		body: string;
	};

	const blocks: Block[] = [
		{
			heading: 'The Associate Financial Planner of AFP®',
			body: 'The Associate Financial Planner or AFP® will be competent to recommend general financial planning strategies and to advise on the appropriate selection and use of various financial products for individuals, e.g. insurance, unit trusts, and a broad range of securities and banking products.'
		},
		{
			heading: 'The AFP®Certification Requirements',
			body: 'The Associate Financial Planner or AFP® will be competent to recommend general financial planning strategies and to advise on the appropriate selection and use of various financial products for individuals, e.g. insurance, unit trusts, and a broad range of securities and banking products.'
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl">
		<h1 class="text-center text-2xl md:text-3xl font-extrabold text-[#1a1a8f] mb-12">
			Cross-Border Marks Use Policy
		</h1>

		<div class="flex flex-col">
			{#each blocks as block (block.heading)}
				<div class="mb-6">
					<p class="text-sm font-bold text-[#1a1a1a] mb-2">
						{block.heading}
					</p>
					<hr class="border-t border-gray-300 mb-3" />
					<p class="text-sm text-[#6b6b6b] leading-relaxed">
						{block.body}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>