<script lang="ts">
	import bgimage from '../assets/about/about.svg';
</script>

<section class="relative w-full overflow-hidden bg-white">
	<!-- Background photo -->
	<div class="relative min-h-[420px] w-full sm:min-h-[480px] lg:min-h-[520px]">
		<img
			src={bgimage}
			alt="Team reviewing financial documents together"
			class="absolute inset-0 h-full w-full object-cover object-right"
		/>

		<!-- White gradient fade from the left so the copy stays readable -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent sm:from-white sm:via-white/80 sm:to-transparent"
			style="background-image: linear-gradient(to right, white 0%, white 28%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0) 62%);"
		></div>

		<!-- Content -->
		<div class="relative z-10 flex h-full min-h-[420px] items-center sm:min-h-[480px] lg:min-h-[520px]">
			<div class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
				<div class="max-w-md">
					<p class="text-xs font-bold tracking-wide text-blue-900 sm:text-sm">
						ESTABLISHED ON 1ST DECEMBER 1998
					</p>

					<h1 class="mt-2 text-3xl font-extrabold leading-tight text-blue-900 sm:text-4xl lg:text-[2.5rem]">
						Founding Charter Member
					</h1>

					<p class="mt-4 text-center text-sm leading-relaxed text-slate-500 sm:text-base">
						Since its inception on 1st December 1998, FPAS had received support
						from many esteemed financial institutions in Singapore. Thus, we would
						like to continue to recognize the following founding Charter Members
						who had play a vital role in the first year of the formation of FPAS in
						1998.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>