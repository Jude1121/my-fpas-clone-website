<script lang="ts">
	// Swap these to match your actual filenames in src/lib/assets/cp/
	import SampleAfp from '$lib/assets/cp/sample-afp-certificate.png';
	import SampleAwp from '$lib/assets/cp/sample-awp-certificate.png';
	import SampleCfp from '$lib/assets/cp/sample-cfp-certificate.png';

	type Cert = {
		image: string;
		alt: string;
		mark: string;
		markSup?: string;
		title: string;
		titleSup?: string;
		modules: string[];
	};

	const certs: Cert[] = [
		{
			image: SampleAfp,
			alt: 'Sample AFP Associate Financial Planner certificate',
			mark: 'AFP',
			markSup: '®',
			title: 'Associate Financial Planner',
			titleSup: 'TM',
			modules: ['Module 1: Foundations in Financial Planning']
		},
		{
			image: SampleAwp,
			alt: 'Sample AWP Associate Wealth Planner certificate',
			mark: 'AWP',
			markSup: 'CM',
			title: 'Associate Wealth Planner',
			modules: [
				'Module 1: Foundations in Financial Planning',
				'Module 4: Investment Planning',
				'Module 5: Retirement Planning'
			]
		},
		{
			image: SampleCfp,
			alt: 'Sample CFP Certified Financial Planner certificate',
			mark: 'CFP',
			markSup: '®',
			title: 'Certified Financial Planner',
			titleSup: 'TM',
			modules: [
				'Module 1: Foundations in Financial Planning',
				'Module 2: Risk Management and Insurance Planning',
				'Module 3: Tax Planning & Estate Planning',
				'Module 4: Investment Planning',
				'Module 5: Retirement Planning',
				'Module 6: Financial Plan Construction and Professional Responsibilities'
			]
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
		{#each certs as cert (cert.mark)}
			<div>
				<div class="bg-[#ebebeb] rounded-2xl p-6 flex items-center justify-center">
					<img src={cert.image} alt={cert.alt} class="w-full rounded-sm shadow-sm border border-gray-300" />
				</div>

				<h3 class="mt-6 text-2xl font-extrabold text-[#1A226D]">
					{cert.mark}<sup class="text-sm align-super">{cert.markSup}</sup>
				</h3>

				<p class="mt-2 text-base font-bold text-[#4a4a4a] uppercase">
					{cert.title}{#if cert.titleSup}<sup class="text-xs align-super">{cert.titleSup}</sup>{/if}
				</p>

				<ul class="mt-3 flex flex-col gap-2">
					{#each cert.modules as module (module)}
						<li class="text-sm text-[#616E7C]">{module}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>