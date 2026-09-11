<script lang="ts">
	import { resolve } from '$app/paths';
	import { events, type EventItem } from '$lib/data/events';
	import { onMount } from 'svelte';

	const monthShortFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

	// Picks the next 3 events from *today* onward, chronologically.
	// Falls back to the 3 most recently past events if nothing is upcoming,
	// so the homepage never renders an empty widget.
	function getUpcoming(all: EventItem[], count: number): EventItem[] {
		const now = new Date();
		const sorted = [...all].sort((a, b) => a.date.getTime() - b.date.getTime());
		const upcoming = sorted.filter((e) => e.date.getTime() >= now.getTime());

		if (upcoming.length >= count) return upcoming.slice(0, count);
		if (upcoming.length > 0) return upcoming; // fewer than `count` left — show what's there
		return sorted.slice(-count); // nothing upcoming — show the most recent past events instead
	}

	let upcomingEvents = $derived(getUpcoming(events, 3));

	let hoveredCard = $state<string | null>(null);

	let sectionEl: HTMLElement | null = $state(null);
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		if (sectionEl) observer.observe(sectionEl);

		return () => observer.disconnect();
	});

	// Event links may be: an internal route ('/events/...'), an external
	// URL ('https://...'), or missing (falls back to the events list page).
	// Only real internal routes should go through resolve().
	function eventHref(link: string | undefined | null): string {
		if (!link) return resolve('/events');
		if (link.startsWith('http')) return link;
		return resolve(link as any);
	}
</script>

<section
	bind:this={sectionEl}
	class="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-25 py-10 font-inter transition-all duration-1000 ease-out"
	style="opacity: {visible ? 1 : 1}; transform: {visible ? 'translateX(0)' : 'translateX(-100px)'};"
>

	<!-- Header -->
	<div class="flex sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-8">
		<h1 class="text-2xl font-black tracking-wide text-[#1e2d6e] uppercase">Upcoming Events</h1>
		<a href={resolve('/events')} class="flex items-center gap-2 text-xs sm:text-sm font-normal tracking-widest text-[#1e2d6e] uppercase hover:text-[#2d6a8f] transition-colors">
			See All Events
			<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
			</svg>
		</a>
	</div>

	<!-- Cards Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
		{#each upcomingEvents as event (event.title + event.date.toISOString())}
			<a 
				href={eventHref(event.link)}
				target={event.link?.startsWith('http') ? '_blank' : undefined}
				rel={event.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
				class="rounded-bl-[40px] rounded-tr-[40px] pb-10 sm:pb-14 md:pb-20 bg-white border border-gray-100 overflow-hidden drop-shadow-2xl flex flex-col transition-all duration-300 cursor-pointer"
				class:shadow-xl={hoveredCard === event.title}
				class:-translate-y-1={hoveredCard === event.title}
				onmouseenter={() => (hoveredCard = event.title)}
				onmouseleave={() => (hoveredCard = null)}
				aria-label={event.title}
			>

				<!-- Card image -->
				<img
					src={event.poster}
					alt={event.title}
					class="w-full h-full object-cover block"
					style="aspect-ratio: 6/3;"
					loading="lazy"
					decoding="async"
				/>

				<!-- Divider -->
				<div class="mx-4 border-t border-gray-100" role="separator"></div>

				<!-- Bottom: date badge + exam label -->
				<div class="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5">
					<div
						class="flex-shrink-0 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] rounded-bl-[10px] rounded-tr-[10px] bg-gray-100 flex flex-col items-center justify-center shadow-inner"
						aria-label="{event.date.getDate()} {monthShortFormatter.format(event.date)}"
					>
						<span class="text-[20px] sm:text-[23px] md:text-[25px] font-extrabold text-[#1a3a8f] leading-none">
							{event.date.getDate()}
						</span>
						<span class="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-[2px]">
							{monthShortFormatter.format(event.date)}
						</span>
					</div>
					<div class="pl-2 sm:pl-4 md:pl-5">
						<p class="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#1a3a8f]">
							{event.title}
						</p>
						<p class="text-[13px] sm:text-[15px] md:text-[18px] text-gray-400 mt-[6px]">
							{event.posterLabel} · {event.posterModule}
						</p>
					</div>
				</div>

			</a>
		{/each}
	</div>

</section>