<script lang="ts">
	// Swap this import path to match wherever your SVG actually lives, e.g.:
	// import CfpLogo from '$lib/assets/cfp-certification-logo.svg';
	import CfpLogo from '$lib/assets/pathway/cfp-logo.svg';
</script>

<section class="w-full bg-white py-10 px-6 md:px-10">
	<div class="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
		<!-- Left: copy -->
		<div class="max-w-xl">
			<p class="text-xs font-bold tracking-widest text-[#0b3a6f] uppercase mb-2">
				Pathway to CFP
			</p>

			<h1 class="text-3xl md:text-4xl font-extrabold text-[#0b3a6f] leading-tight mb-4">
				The CFP<sup class="text-base align-super">®</sup> Certification Requirements
			</h1>

			<p class="text-sm md:text-base text-[#4a4a4a] leading-relaxed">
				In order to be certified, a CFP<sup class="text-[0.6em]">®</sup> candidate must meet all four
				requirements of the certification process described below, while an
				AFP<sup class="text-[0.6em]">®</sup> candidate must meet the education, examination and the ethics
				requirements:
			</p>
		</div>

		<!-- Right: logo + tagline -->
		<div class="flex flex-col items-center text-center shrink-0">
			<img src={CfpLogo} alt="CFP Certification logo" class="w-40 md:w-120 h-auto" />

		</div>
	</div>
</section>