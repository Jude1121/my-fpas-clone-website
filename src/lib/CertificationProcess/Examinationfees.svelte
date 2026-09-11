<script lang="ts">
	type Fee = {
		module: string;
		price: string;
	};

	const currentFees: Fee[] = [
		{ module: 'Module 1', price: '$327' },
		{ module: 'Module 2', price: '$196.20' },
		{ module: 'Module 3', price: '$196.20' },
		{ module: 'Module 4', price: '$196.20' },
		{ module: 'Module 5', price: '$196.20' },
		{ module: 'Module 6', price: '$305.20' }
	];

	const newFees: Fee[] = [
		{ module: 'Module 1', price: '$381.50' },
		{ module: 'Module 2', price: '$272.50' },
		{ module: 'Module 3', price: '$272.50' },
		{ module: 'Module 4', price: '$272.50' },
		{ module: 'Module 5', price: '$272.50' },
		{ module: 'Module 6', price: '$381.50' }
	];

	type Schedule = {
		year: string;
		href: string;
	};

	const schedules: Schedule[] = [
		{ year: '2026', href: '#' },
		{ year: '2027', href: '#' }
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-5xl">
		<!-- Current fees -->
		<h2 class="text-center text-xl md:text-2xl font-extrabold text-[#0b2f6b] mb-6">
			Current Examination Fees
		</h2>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
			{#each currentFees as fee (fee.module)}
				<div class="bg-[#e9e9e9] rounded-2xl px-4 py-6 flex flex-col items-center text-center">
					<span class="text-sm text-[#1a1a1a] mb-2">{fee.module}</span>
					<span class="text-lg font-bold text-[#0b2f6b]">{fee.price}</span>
				</div>
			{/each}
		</div>

		<!-- New fees -->
		<h2 class="text-center text-xl md:text-2xl font-extrabold text-[#0b2f6b] mb-6">
			Examination Fees from 1st July 2026
		</h2>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-3">
			{#each newFees as fee (fee.module)}
				<div class="bg-[#0b2f6b] rounded-2xl px-4 py-6 flex flex-col items-center text-center">
					<span class="text-sm text-white/90 mb-2">{fee.module}</span>
					<span class="text-lg font-bold text-white">{fee.price}</span>
				</div>
			{/each}
		</div>

		<p class="text-center text-xs text-[#1a1a1a] mb-14">Note: Exam fees with 9% GST</p>

		<!-- Schedules -->
		<div class="flex flex-col gap-10">
			{#each schedules as schedule (schedule.year)}
				<div class="text-center">
					<h3 class="text-lg md:text-xl font-extrabold text-[#0b2f6b] mb-2">
						Examinations Schedule {schedule.year}
					</h3>
					<p class="text-sm">
						<a href={schedule.href} class="text-[#8a1c2e] hover:underline">Click here</a>
						<span class="text-[#1a1a1a]"> to access the examination schedule for the Year </span>
						<a href={schedule.href} class="text-[#0b2f6b] hover:underline">{schedule.year}</a>
						<span class="text-[#1a1a1a]">.</span>
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>