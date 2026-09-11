<script>
	import { planners } from '$lib/data/planners.js';
	import { resolvePlannerImage } from '$lib/utils/planner-images.js';
	import PlannerProfile from './PlannerProfile.svelte';

	// ---------------------------------------------------------------
	// State
	// ---------------------------------------------------------------
	let searchQuery = $state('');
	let selectedYears = $state('');
	let selectedIndustry = $state('');
	let selectedSpecialisation = $state('');
	let currentPage = $state(1);
	let selectedPlanner = $state(null);

	const perPage = 10;

	const yearOptions = ['4-7 years', '8-11 years', '12-15 years', '16-20 years', '16+ years'];
	const industryOptions = ['Financial Advisory', 'Insurance', 'Others'];
	const specialisationOptions = [
		'Financial Advisory Representative',
		'Insurance Agent (Life)',
		'Insurance Agent (General)',
		'Estate Planning',
		'Finance',
		'Management',
		'Tax Specialist',
		'Education',
		'Others'
	];

	// ---------------------------------------------------------------
	// Derived
	// ---------------------------------------------------------------
	let filteredPlanners = $derived(
		planners.filter((p) => {
			const matchesSearch =
				searchQuery.trim() === '' || p.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
			const matchesYears = selectedYears === '' || p.experience === selectedYears;
			const matchesIndustry = selectedIndustry === '' || p.industry === selectedIndustry;
			const matchesSpecialisation =
				selectedSpecialisation === '' || p.specialisation.includes(selectedSpecialisation);
			return matchesSearch && matchesYears && matchesIndustry && matchesSpecialisation;
		})
	);

	let totalPages = $derived(Math.max(1, Math.ceil(filteredPlanners.length / perPage)));

	let paginatedPlanners = $derived(
		filteredPlanners.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	function goToPage(page) {
		if (page < 1 || page > totalPages) return;
		currentPage = page;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	function handleFind() {
		currentPage = 1;
	}

	function openProfile(planner) {
		selectedPlanner = planner;
	}

	function closeProfile() {
		selectedPlanner = null;
	}

	// ---------------------------------------------------------------
	// Sliding-window ("carousel") pagination.
	//
	// Always shows page 1 and the last page, plus a window of pages
	// around the current page (currentPage - delta .. currentPage + delta),
	// with "..." filling any gaps.
	//
	// e.g. totalPages = 12, currentPage = 5, delta = 2:
	//   1  ...  3  4  [5]  6  7  ...  12
	//
	// This means as you move forward the window slides with you — when
	// you land on page 5 you'll already see 6 and 7 (and beyond) ready
	// to click, instead of being stuck looking at a static 1-5 block.
	// ---------------------------------------------------------------
	const delta = 2;

	let pageNumbers = $derived.by(() => {
		const pages = [];

		if (totalPages <= 1) {
			return [1];
		}

		const windowStart = Math.max(2, currentPage - delta);
		const windowEnd = Math.min(totalPages - 1, currentPage + delta);

		// Always start with page 1
		pages.push(1);

		// Left ellipsis if there's a gap between page 1 and the window
		if (windowStart > 2) {
			pages.push('...');
		}

		for (let i = windowStart; i <= windowEnd; i++) {
			pages.push(i);
		}

		// Right ellipsis if there's a gap between the window and the last page
		if (windowEnd < totalPages - 1) {
			pages.push('...');
		}

		// Always end with the last page (if more than one page total)
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	});
</script>

<div class="min-h-screen bg-white">
	<!-- Breadcrumb -->
	<div class="bg-gray-200">
		<div class="mx-auto max-w-7xl px-4 py-3 text-sm sm:px-6 lg:px-8">
			<nav class="flex flex-wrap items-center gap-1.5 text-gray-600 sm:gap-2">
				<a href="/" class="text-blue-700 hover:underline">Home</a>
				<span class="text-gray-400">&gt;</span>
				<a href="/consumers" class="text-blue-700 hover:underline">Consumers</a>
				<span class="text-gray-400">&gt;</span>
				<span class="text-gray-600">Find me a Planner</span>
			</nav>
		</div>
	</div>

	<!-- Hero / Search -->
	<div class="bg-[#0b3d91] pb-10 pt-8 sm:pb-16 sm:pt-14">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
				Find the perfect planner for you
			</h1>

			<div class="mx-auto mt-6 max-w-3xl rounded-lg bg-white p-4 shadow-lg sm:mt-8 sm:p-5">
				<div class="flex flex-col gap-3 sm:flex-row">
					<div class="relative flex-1">
						<svg
							class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							type="text"
							bind:value={searchQuery}
							placeholder="Search name or location"
							class="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
					<button
						onclick={handleFind}
						class="w-full rounded-md bg-[#f4c430] px-6 py-2.5 text-sm font-semibold text-gray-900 transition hover:brightness-95 sm:w-auto"
					>
						Find Planner
					</button>
				</div>

				<div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
					<div class="relative">
						<select
							bind:value={selectedYears}
							class="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						>
							<option value="">Select years</option>
							{#each yearOptions as y}
								<option value={y}>{y}</option>
							{/each}
						</select>
						<svg
							class="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>

					<div class="relative">
						<select
							bind:value={selectedIndustry}
							class="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						>
							<option value="">Select industry</option>
							{#each industryOptions as i}
								<option value={i}>{i}</option>
							{/each}
						</select>
						<svg
							class="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>

					<div class="relative">
						<select
							bind:value={selectedSpecialisation}
							class="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						>
							<option value="">Select specialisation</option>
							{#each specialisationOptions as s}
								<option value={s}>{s}</option>
							{/each}
						</select>
						<svg
							class="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Planner list -->
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
		{#if paginatedPlanners.length === 0}
			<p class="py-16 text-center text-gray-500">No planners match your filters.</p>
		{:else}
			<ul class="divide-y divide-gray-200">
				{#each paginatedPlanners as planner (planner.name)}
					<li class="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-6">
						<!-- Photo -->
						<div class="flex w-full flex-shrink-0 flex-col items-center justify-center gap-2 sm:w-auto sm:block sm:justify-start">
							{#if resolvePlannerImage(planner.image)}
								<img
									src={resolvePlannerImage(planner.image)}
									alt={planner.name}
									class="h-16 w-16 rounded-full object-cover sm:h-24 sm:w-24"
									loading="lazy"
								/>
							{:else}
								<div
									class="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-500 sm:h-24 sm:w-24"
								>
									{planner.name.charAt(0)}
								</div>
							{/if}

							<!-- Name shown below photo on mobile only -->
							<div class="text-center sm:hidden">
								<button
									onclick={() => openProfile(planner)}
									class="text-sm font-medium text-blue-900 hover:underline"
								>
									{planner.name}
								</button>
								<div class="mt-1 flex items-center justify-center gap-1.5 text-xs font-medium text-gray-800">
									<span class="text-blue-900">✻</span>
									<span>CFP<sup>®</sup></span>
								</div>
							</div>
						</div>

						<!-- Main content -->
						<div class="min-w-0 flex-1">
							<button
								onclick={() => openProfile(planner)}
								class="hidden text-sm font-extralight text-blue-900 hover:underline sm:inline-block"
							>
								{planner.name}
							</button>

							<div class="mt-1 hidden items-center gap-1.5 text-sm font-medium text-gray-800 sm:flex">
								<span class="text-blue-900">✻</span>
								<span>CFP<sup>®</sup></span>
							</div>

							{#if planner.bio}
								<div class="mt-2 space-y-2 text-sm text-gray-700">
									{#each planner.bio.split('\n\n') as paragraph}
										<p>{paragraph}</p>
									{/each}
								</div>
							{/if}

							<div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-4 sm:gap-x-6">
								<div>
									<div class="text-xs font-medium uppercase tracking-wide text-gray-400">Industry</div>
									<div class="mt-0.5 text-gray-800">{planner.industry || '—'}</div>
								</div>
								<div>
									<div class="text-xs font-medium uppercase tracking-wide text-gray-400">Experience</div>
									<div class="mt-0.5 text-gray-800">{planner.experience}</div>
								</div>
								<div class="col-span-2 sm:col-span-1">
									<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
										Specialisation
									</div>
									<div class="mt-1 flex flex-wrap gap-1">
										{#each planner.specialisation as tag, i (tag + i)}
											<span class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{tag}</span>
										{/each}
									</div>
								</div>
								<div>
									<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
										Last Profile Update
									</div>
									<div class="mt-0.5 text-gray-800">{planner.lastUpdate}</div>
								</div>
							</div>
						</div>

						<!-- View profile button -->
						<div class="flex flex-shrink-0 justify-center sm:block sm:pt-1">
							<button
								onclick={() => openProfile(planner)}
								class="whitespace-nowrap rounded-md bg-[#0b3d91] px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#0a3378]"
							>
								View Profile
							</button>
						</div>
					</li>
				{/each}
			</ul>

			<!-- Pagination (sliding-window carousel) -->
			<nav
				class="mt-8 flex items-center justify-center gap-1 text-sm"
				aria-label="Pagination"
			>
				<button
					onclick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}
					class="flex-shrink-0 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3"
					aria-label="Previous page"
				>
					<span class="sm:hidden">«</span>
					<span class="hidden sm:inline">« Previous</span>
				</button>

				<div class="flex max-w-[60vw] items-center gap-1 overflow-x-auto sm:max-w-none">
					{#each pageNumbers as p, i (i + '-' + p)}
						{#if p === '...'}
							<span class="px-1.5 text-gray-400 sm:px-2">…</span>
						{:else}
							<button
								onclick={() => goToPage(p)}
								class={`flex-shrink-0 rounded px-2.5 py-1.5 transition sm:px-3 ${
									currentPage === p
										? 'bg-blue-600 text-white'
										: 'text-gray-600 hover:bg-gray-100'
								}`}
							>
								{p}
							</button>
						{/if}
					{/each}
				</div>

				<button
					onclick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					class="flex-shrink-0 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:px-3"
					aria-label="Next page"
				>
					<span class="sm:hidden">»</span>
					<span class="hidden sm:inline">Next »</span>
				</button>
			</nav>
		{/if}
	</div>
</div>

{#if selectedPlanner}
	<PlannerProfile planner={selectedPlanner} onClose={closeProfile} />
{/if}