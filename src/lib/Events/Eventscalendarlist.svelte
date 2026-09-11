<script lang="ts">
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { events } from '$lib/data/events';

	// The month currently on screen — defaults to today's month so the page always opens on "now".
	const today = new Date();
	let viewDate = $state(new Date(today.getFullYear(), today.getMonth(), 1));
	// Direction of the last navigation, used to pick which way the slide animates.
	let direction = $state<'next' | 'prev'>('next');

	const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	}).format;

	let monthLabel = $derived(monthFormatter.format(viewDate));

	let visibleEvents = $derived(
		events
			.filter(
				(e) => e.date.getFullYear() === viewDate.getFullYear() && e.date.getMonth() === viewDate.getMonth()
			)
			.sort((a, b) => b.date.getTime() - a.date.getTime())
	);

	function goToPrevMonth() {
		direction = 'prev';
		viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
	}

	function goToNextMonth() {
		direction = 'next';
		viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
	}

	function goToCurrentMonth() {
		const today = new Date();
		direction = today.getTime() > viewDate.getTime() ? 'next' : 'prev';
		viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
	}

	function slideParams() {
		const x = direction === 'next' ? 40 : -40;
		return { x, duration: 250 };
	}
</script>

{#snippet dotsIcon(color: string)}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 20" class="w-2 h-6" style={`color: ${color};`} fill="currentColor">
		<circle cx="3" cy="3" r="2" />
		<circle cx="3" cy="10" r="2" />
		<circle cx="3" cy="17" r="2" />
	</svg>
{/snippet}

<section class="w-full bg-[#f5f6fa] px-4 sm:px-6 md:px-10 py-6 sm:py-10">
	<div class="mx-auto max-w-6xl">
		<!-- Month navigation header -->
		<div class="flex flex-col gap-4 mb-6 sm:mb-10 md:flex-row md:items-center md:justify-between">
			<div class="order-2 flex items-center gap-2 md:order-1">
				<button
					onclick={goToPrevMonth}
					aria-label="Previous month"
					class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded bg-white text-[#1a1a1a] text-lg hover:bg-gray-50"
				>
					←
				</button>
				<button
					onclick={goToNextMonth}
					aria-label="Next month"
					class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded bg-white text-[#1a1a1a] text-lg hover:bg-gray-50"
				>
					→
				</button>
				<button
					onclick={goToCurrentMonth}
					class="border border-gray-300 rounded bg-white px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-[#1a1a1a] hover:bg-gray-50"
				>
					Current Month
				</button>
			</div>

			{#key monthLabel}
				<h1
					in:fly={slideParams()}
					class="order-1 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b2f6b] md:order-2"
				>
					{monthLabel}
				</h1>
			{/key}
			
			<a 
				href={resolve('/events/calendar')}
				class="order-3 border border-gray-300 rounded bg-white px-4 py-2.5 text-center text-sm sm:text-base text-[#1a1a1a] hover:bg-gray-50 inline-block"
			>
				Calendar View
			</a>
		</div>

		<!-- Event cards -->
		{#key monthLabel}
			<div in:fly={slideParams()} class="flex flex-col gap-4 sm:gap-6">
				{#if visibleEvents.length === 0}
					<div class="bg-white rounded-md shadow-sm px-6 py-12 sm:px-8 sm:py-16 text-center text-base text-[#4a4a4a]">
						No events scheduled for {monthLabel}.
					</div>
				{:else}
					{#each visibleEvents as event (event.title + event.date.toISOString())}
						<div class="bg-white rounded-md shadow-sm px-4 py-6 sm:px-10 sm:py-10">
							<div class="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-8">
								<!-- Poster thumbnail with stacked badges and dots menu -->
								<div class="relative shrink-0">

									<img
										src={event.poster}
										alt={`${event.posterLabel} ${event.posterModule} poster`}
										class="w-108 h-48 sm:w-36 sm:h-60 md:w-110 md:h-64 object-fill rounded-sm"
									/>

								</div>

								<!-- Event details -->
								<div class="flex-1 min-w-0 pt-1 text-center sm:text-left">
									<p class="text-sm sm:text-base font-bold text-[#0b2f6b] font-dmsans">
										{dateFormatter(event.date).toUpperCase()}, {event.time}
									</p>
									{#if event.location}
										<p class="text-sm sm:text-base font-bold text-[#4a4a4a] mb-3 font-dmsans">{event.location}</p>
									{/if}
									<h2 class="text-xl sm:text-2xl font-extrabold text-[#0b2f6b] mb-2 font-dmsans">{event.title}</h2>
									<p class="text-sm sm:text-base text-[#1a1a1a] font-dmsans">{event.category}</p>
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		{/key}
	</div>
</section>