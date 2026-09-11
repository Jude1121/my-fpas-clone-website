<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { events as allEvents } from '$lib/data/events';

	type CalendarEvent = {
		title: string;
		date: Date;
	};

	// Derived from the shared event list — always matches EventsCalendarList.svelte and UpcomingEvents.svelte.
	const events: CalendarEvent[] = allEvents.map((e) => ({ title: e.title, date: e.date }));

	const weekdayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const hourLabels = Array.from({ length: 24 }, (_, h) => {
		if (h === 0) return '12 AM';
		if (h === 12) return '12 PM';
		return h < 12 ? `${h} AM` : `${h - 12} PM`;
	});

	type ViewMode = 'month' | 'week' | 'day' | 'list';
	let view = $state<ViewMode>('month');

	// The reference date currently on screen — defaults to today so the calendar always opens on the real current month.
	let viewDate = $state(new Date());

	const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
	let monthLabel = $derived(monthFormatter.format(viewDate));

	const fullDateFormatter = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	let dayLabel = $derived(fullDateFormatter.format(viewDate));

	function isSameDay(a: Date, b: Date): boolean {
		return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
	}

	function eventsOn(date: Date): CalendarEvent[] {
		return events.filter((e) => isSameDay(e.date, date));
	}

	// Builds a 6-week (42-day) grid starting on the Sunday on/before the 1st of the viewed month.
	let calendarDays = $derived.by(() => {
		const year = viewDate.getFullYear();
		const month = viewDate.getMonth();
		const firstOfMonth = new Date(year, month, 1);
		const startOffset = firstOfMonth.getDay(); // 0 = Sunday
		const gridStart = new Date(year, month, 1 - startOffset);

		const today = new Date();

		return Array.from({ length: 42 }, (_, i) => {
			const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
			return {
				date,
				dayNumber: date.getDate(),
				isCurrentMonth: date.getMonth() === month,
				isWeekend: date.getDay() === 0 || date.getDay() === 6,
				isToday: isSameDay(date, today),
				events: eventsOn(date)
			};
		});
	});

	// Builds the 7-day range (Sunday–Saturday) containing viewDate, for the Week view.
	const weekDayShortFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });

	let weekDays = $derived.by(() => {
		const startOffset = viewDate.getDay(); // 0 = Sunday
		const weekStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - startOffset);
		const today = new Date();

		return Array.from({ length: 7 }, (_, i) => {
			const date = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + i);
			return {
				date,
				label: weekdayLabels[i],
				shortDate: weekDayShortFormatter.format(date),
				isWeekend: i === 0 || i === 6,
				isToday: isSameDay(date, today),
				events: eventsOn(date)
			};
		});
	});

	let weekRangeLabel = $derived.by(() => {
		const days = weekDays;
		const start = days[0].date;
		const end = days[6].date;
		const startLabel = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(start);
		const endLabel = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(end);
		return `${startLabel} - ${endLabel}, ${end.getFullYear()}`;
	});

	// Events for the single day shown in Day view.
	let dayEvents = $derived(eventsOn(viewDate));
	let isViewingToday = $derived(isSameDay(viewDate, new Date()));

	// Live current-time indicator: only meaningful when the displayed day/week includes today.
	let now = $state(new Date());
	$effect(() => {
		const interval = setInterval(() => (now = new Date()), 60_000);
		return () => clearInterval(interval);
	});

	const HOUR_ROW_HEIGHT = 56; // px, must match the row heights used below

	let currentTimeTop = $derived((now.getHours() + now.getMinutes() / 60) * HOUR_ROW_HEIGHT);
	let todayColumnIndex = $derived(weekDays.findIndex((d) => d.isToday));

	function goToPrevMonth() {
		if (view === 'day') {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1);
		} else if (view === 'week') {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 7);
		} else {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
		}
	}

	function goToNextMonth() {
		if (view === 'day') {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() + 1);
		} else if (view === 'week') {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() + 7);
		} else {
			viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
		}
	}

	function goToToday() {
		viewDate = new Date();
	}

	// "List" isn't a mode rendered on this page — it navigates back to the events list page instead.
	function selectView(mode: ViewMode) {
		if (mode === 'list') {
			goto(resolve('/events'));
			return;
		}
		view = mode;
	}
</script>

<section class="w-full bg-white px-4 sm:px-6 md:px-10 py-6 sm:py-8">
	<div class="mx-auto max-w-6xl">
		<!-- Header: navigation, title, view switcher -->
		<div class="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between sm:flex-wrap">
			<!-- Previous / Today / Next segmented control -->
			<div class="flex rounded-md overflow-hidden border border-[#3a3a8f]">
				<button
					onclick={goToPrevMonth}
					class="bg-[#3a3a8f] text-white text-sm sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#2f2f75] transition-colors"
				>
					Previous
				</button>
				<button
					onclick={goToToday}
					class="bg-white text-[#1a1a1a] text-sm sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 border-x border-[#3a3a8f] hover:bg-gray-50 transition-colors"
				>
					Today
				</button>
				<button
					onclick={goToNextMonth}
					class="bg-[#3a3a8f] text-white text-sm sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#2f2f75] transition-colors"
				>
					Next
				</button>
			</div>

			<h1 class="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center">
				{#if view === 'week'}
					{weekRangeLabel}
				{:else if view === 'day'}
					{dayLabel}
				{:else}
					{monthLabel}
				{/if}
			</h1>

			<!-- Month / Week / Day / List segmented control -->
			<div class="flex rounded-md overflow-hidden border border-[#3a3a8f]">
				{#each ['month', 'week', 'day', 'list'] as mode (mode)}
					<button
						onclick={() => selectView(mode as ViewMode)}
						class="text-sm sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 capitalize transition-colors
							{view === mode ? 'bg-[#3a3a8f] text-white' : 'bg-white text-[#1a1a1a] hover:bg-gray-50'}
							{mode !== 'month' ? 'border-l border-[#3a3a8f]' : ''}"
					>
						{mode}
					</button>
				{/each}
			</div>
		</div>

		{#if view === 'month'}
			<!-- Weekday header row -->
			<div class="grid grid-cols-7 border-t border-l border-gray-200">
				{#each weekdayLabels as label (label)}
					<div class="border-r border-b border-gray-200 py-2 px-0.5 text-center text-lg sm:text-sm font-bold text-[#1a1a1a] truncate">
						{label}
					</div>
				{/each}
			</div>

			<!-- Month grid -->
			<div class="grid grid-cols-7 border-l border-gray-200">
				{#each calendarDays as day (day.date.toISOString())}
					<div
						class="relative border-r border-b border-gray-200 min-h-[70px] sm:min-h-[110px] p-1 sm:p-2 {day.isToday
							? 'bg-green-50'
							: ''}"
					>
						{#if day.events.length > 0}
							<span
								class="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#8a1c2e] text-white text-[9px] sm:text-sm font-bold flex items-center justify-center"
							>
								{day.events.length}
							</span>
						{/if}

						<p
							class="text-right text-lg sm:text-lg pr-0.5 sm:pr-1 {!day.isCurrentMonth
								? 'text-gray-300'
								: day.isWeekend
									? 'text-red-400'
									: 'text-gray-800'}"
						>
							{day.dayNumber}
						</p>

						<div class="flex flex-col gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
							{#each day.events as event (event.title)}
								<span
									class="block text-xs sm:text-xs text-[#0b2f6b] border border-[#0b2f6b]/30 rounded px-1 sm:px-1.5 py-0.5 truncate"
									title={event.title}
								>
									{event.title}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{:else if view === 'week'}
			<div class="overflow-x-auto">
				<div class="min-w-[900px]">
					<!-- Day header row (label column + 7 days) -->
					<div class="grid grid-cols-[60px_repeat(7,1fr)] border-t border-l border-gray-200">
						<div class="border-r border-b border-gray-200"></div>
						{#each weekDays as day (day.date.toISOString())}
							<div
								class="border-r border-b border-gray-200 py-2 text-center {day.isToday
									? 'bg-green-50'
									: ''}"
							>
								<p
									class="text-sm font-bold {day.isToday
										? 'text-green-700'
										: day.isWeekend
											? 'text-red-400'
											: 'text-[#1a1a1a]'}"
								>
									{day.label}
								</p>
								<p
									class="text-lg {day.isToday
										? 'text-green-700'
										: day.isWeekend
											? 'text-red-400'
											: 'text-gray-500'}"
								>
									{day.shortDate}
								</p>
							</div>
						{/each}
					</div>

					<!-- All-day events row -->
					<div class="grid grid-cols-[60px_repeat(7,1fr)] border-l border-gray-200">
						<div class="border-r border-b border-gray-200"></div>
						{#each weekDays as day (day.date.toISOString() + '-events')}
							<div class="border-r border-b border-gray-200 p-1 {day.isToday ? 'bg-green-50' : ''}">
								{#each day.events as event (event.title)}
									<span
										class="block text-xs text-[#0b2f6b] border border-red-300 rounded px-1.5 py-0.5 truncate"
										title={event.title}
									>
										{event.title}
									</span>
								{/each}
							</div>
						{/each}
					</div>

					<!-- 24-hour time grid -->
					<div class="relative grid grid-cols-[60px_repeat(7,1fr)] border-l border-gray-200">
						<!-- Hour labels column -->
						<div class="border-r border-gray-200">
							{#each hourLabels as label (label)}
								<div
									class="border-b border-dashed border-gray-200 px-2 pt-1 text-xs font-bold text-[#1a1a1a]"
									style={`height: ${HOUR_ROW_HEIGHT}px;`}
								>
									{label}
								</div>
							{/each}
						</div>

						<!-- Day columns -->
						{#each weekDays as day, colIndex (day.date.toISOString() + '-col')}
							<div class="relative border-r border-gray-200 {day.isToday ? 'bg-green-50/40' : 'bg-gray-50/40'}">
								{#each hourLabels as label (label)}
									<div
										class="border-b border-dashed border-gray-200"
										style={`height: ${HOUR_ROW_HEIGHT}px;`}
									></div>
								{/each}

								<!-- Current time indicator, only on today's column -->
								{#if colIndex === todayColumnIndex}
									<div
										class="absolute left-0 right-0 border-t-2 border-red-500 pointer-events-none"
										style={`top: ${currentTimeTop}px;`}
									></div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if view === 'day'}
			<div>
				<!-- All-day events row -->
				<div class="grid grid-cols-[100px_1fr] border-t border-l border-r border-gray-200">
					<div class="border-b border-gray-200"></div>
					<div class="border-b border-gray-200 p-1.5">
						{#each dayEvents as event (event.title)}
							<span
								class="block text-sm text-[#0b2f6b] border border-red-300 rounded px-3 py-1.5"
								title={event.title}
							>
								{event.title}
							</span>
						{/each}
					</div>
				</div>

				<!-- 24-hour single-day grid -->
				<div class="relative grid grid-cols-[100px_1fr] border-l border-r border-gray-200">
					<!-- Hour labels column -->
					<div class="border-r border-gray-200">
						{#each hourLabels as label (label)}
							<div
								class="border-b border-dashed border-gray-200 px-2 pt-1 text-xs font-bold text-[#1a1a1a]"
								style={`height: ${HOUR_ROW_HEIGHT}px;`}
							>
								{label}
							</div>
						{/each}
					</div>

					<!-- Single day column -->
					<div class="relative {isViewingToday ? 'bg-green-50/40' : 'bg-gray-50/40'}">
						{#each hourLabels as label (label)}
							<div
								class="border-b border-dashed border-gray-200"
								style={`height: ${HOUR_ROW_HEIGHT}px;`}
							></div>
						{/each}

						<!-- Current time indicator, only when viewing today -->
						{#if isViewingToday}
							<div
								class="absolute left-0 right-0 border-t-2 border-red-500 pointer-events-none"
								style={`top: ${currentTimeTop}px;`}
							></div>
						{/if}
					</div>
				</div>
			</div>
		{:else}
			<div class="border border-gray-200 rounded-md py-20 text-center text-sm text-[#4a4a4a] capitalize">
				{view} view not implemented yet — showing Month view's data model only.
			</div>
		{/if}
	</div>
</section>