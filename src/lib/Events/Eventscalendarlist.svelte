<script lang="ts">
	import { fly } from 'svelte/transition';
	import { resolve } from '$app/paths';

	// Swap these to match your actual filenames in src/assets/events/
	import PosterModule4 from '../assets/events/cycle3-module4.png';
	import PosterModule3 from '../assets/events/cycle3-module3.png';
	import PosterModule2 from '../assets/events/cycle3-module2.png';
	import PosterModule1 from '../assets/events/cycle3-module1.png';
	import PosterModule5 from '../assets/events/cycle3-module5.png';
	import PosterModule6 from '../assets/events/cycle3-module6.png';
	import PosterResultsRelease from '../assets/events/cycle3-results-release.png';
	import PosterWillTrust from '../assets/events/will-trust-sharing-session.png';
	import PosterPenguinSecurities from '../assets/events/fpas-penguin-securities-session.png';
	import PosterLegacyOfLove from '../assets/events/legacy-of-love-trust-planning.png';
	import PosterCycle2ResultsRelease from '../assets/events/cycle2-module6-results-release.png';
	import PosterFinancialPlannerAwards from '/src/lib/assets/media-release/news/financial-planner-awards-save-the-date.png';
	import PosterCycle3Module6ResultsRelease from '../assets/events/cycle3-module6-results-release.png';
	import PosterCycle4Module5 from '../assets/events/cycle4-module5.png';
	import PosterCycle4Module6 from '../assets/events/cycle4-module6.png';
	import PosterCycle4Module6ResultsRelease from '../assets/events/cycle4-module6-results-release.png';
	import PosterCycle4Module1to5ResultsRelease from '../assets/events/cycle4-module1to5-results-release.png';

	type EventItem = {
		poster: string;
		badgeLabels?: string[];
		badgeColor?: string;
		posterLabel: string;
		posterModule: string;
		date: Date;
		time: string;
		location?: string;
		title: string;
		category: string;
	};

	const CYCLE3_BADGE_COLOR = '#8a1c2e';
	const CYCLE4_BADGE_COLOR = '#7b1fa2';

	// Real dates drive the filtering below — update these (or wire to a real data source) as needed.
	const events: EventItem[] = [
		{
			poster: PosterModule4,
			badgeLabels: ['M4'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 4',
			date: new Date(2026, 7, 31), // months are 0-indexed: 7 = August
			time: '2:00 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 4',
			category: 'Investment Planning'
		},
		{
			poster: PosterModule3,
			badgeLabels: ['M3'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 3',
			date: new Date(2026, 7, 26),
			time: '2:00 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 3',
			category: 'Tax Planning and Estate Planning'
		},
		{
			poster: PosterModule2,
			badgeLabels: ['M2'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 2',
			date: new Date(2026, 7, 21),
			time: '2:00 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 2',
			category: 'Risk Management and Insurance Planning'
		},
		{
			poster: PosterModule1,
			badgeLabels: ['M1'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 1',
			date: new Date(2026, 7, 18),
			time: '2:00 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 1',
			category: 'Foundations in Financial Planning'
		},
		{
			poster: PosterModule5,
			badgeLabels: ['M5'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 5',
			date: new Date(2026, 8, 2), // September
			time: '2:00 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 5',
			category: 'Retirement Planning'
		},
		{
			poster: PosterModule6,
			badgeLabels: ['M6'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Module 6',
			date: new Date(2026, 8, 4),
			time: '1:30 PM',
			location: 'LIFELONG LEARNING INSTITUTE',
			title: 'Cycle 3 Examination - Module 6',
			category: 'Financial Plan Construction and Professional Responsibilities'
		},
		{
			poster: PosterWillTrust,
			posterLabel: 'Sharing Session',
			posterModule: 'Will & Trust Planning',
			date: new Date(2026, 8, 11),
			time: '10:00 AM',
			title: 'Will & Trust Planning Sharing Session with Mr Anthony Xu',
			category:
				'Conducted in Mandarin Chinese, this session explores Wills, Trusts and key estate planning considerations, including what happens without a Will, the challenges of setting up a Trust, and who may benefit from Trust planning.'
		},
		{
			poster: PosterResultsRelease,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Result Release',
			date: new Date(2026, 8, 18),
			time: '12:00 PM',
			title: 'Cycle 3 Examination - Module 1 to 5 Results Release',
			category: 'Module 1 to 5 Results Release'
		},
		{
			poster: PosterPenguinSecurities,
			posterLabel: 'Sharing Session',
			posterModule: 'FPAS x Penguin Securities',
			date: new Date(2026, 6, 22), // July
			time: '3:00 PM',
			title: 'FPAS x Penguin Securities Knowledge Sharing Session',
			category:
				"Discover what's driving Japan's market resurgence at this FPAS x Penguin Securities Knowledge Sharing Session featuring Daiwa Asset Management (Singapore) Ltd. Gain expert insights into Japan's investment outlook and the opportunities shaping today's evolving market landscape."
		},
		{
			poster: PosterLegacyOfLove,
			posterLabel: 'Sharing Session',
			posterModule: 'Legacy of Love',
			date: new Date(2026, 6, 10),
			time: '10:00 AM',
			location: 'FURAMA CITY CENTRE, LEVEL 2 HERITAGE ROOM',
			title: 'A Legacy of Love: Trust Planning Sharing Session (Mandarin Speaking)',
			category:
				'Discover how Wills and Trusts work together to protect your assets and preserve your legacy. In this informative session, Mr Patrick Chang from SimplyWills will share practical insights into the role of Wills and Trusts in estate planning, helping participants better understand how to safeguard their wealth and provide for future generations. Conducted in Mandarin Chinese.'
		},
		{
			poster: PosterCycle2ResultsRelease,
			badgeLabels: ['M6'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 2 Examination',
			posterModule: 'Result Release',
			date: new Date(2026, 6, 3),
			time: '12:00 PM',
			title: 'Cycle 2 Examination - Module 6 Results Release',
			category: 'Module 6 Results Release'
		},
		{
			poster: PosterFinancialPlannerAwards,
			posterLabel: 'FPAS',
			posterModule: 'Financial Planner Awards',
			date: new Date(2026, 9, 6), // October
			time: '12:00 PM',
			title: 'Financial Planner Awards Singapore 2026',
			category:
				"The Financial Planner Awards Singapore are back. Returning in 2026, this prestigious awards programme recognises outstanding CFP professionals who have demonstrated excellence, professionalism, and leadership within the financial planning profession. Join us as we celebrate and honour the achievements of Singapore's leading financial planning professionals on 6 October 2026."
		},
		{
			poster: PosterCycle3Module6ResultsRelease,
			badgeLabels: ['M6'],
			badgeColor: CYCLE3_BADGE_COLOR,
			posterLabel: 'Cycle 3 Examination',
			posterModule: 'Result Release',
			date: new Date(2026, 9, 2),
			time: '12:00 PM',
			title: 'Cycle 3 Examination - Module 6 Results Release',
			category: 'Module 6 Results Release'
		},
		{
			poster: PosterCycle4Module6,
			badgeLabels: ['M6'],
			badgeColor: CYCLE4_BADGE_COLOR,
			posterLabel: 'Cycle 4 Examination',
			posterModule: 'Module 6',
			date: new Date(2026, 10, 27), // November
			time: '2:00 PM',
			title: 'Cycle 4 Examination - Module 6',
			category: 'Financial Plan Construction and Professional Responsibilities'
		},
		{
			poster: PosterCycle4Module5,
			badgeLabels: ['M5'],
			badgeColor: CYCLE4_BADGE_COLOR,
			posterLabel: 'Cycle 4 Examination',
			posterModule: 'Module 5',
			date: new Date(2026, 10, 25),
			time: '2:00 PM',
			title: 'Cycle 4 Examination - Module 5',
			category: 'Retirement Planning'
		},
		{
			poster: PosterCycle4Module6ResultsRelease,
			badgeLabels: ['M6'],
			badgeColor: CYCLE4_BADGE_COLOR,
			posterLabel: 'Cycle 4 Examination',
			posterModule: 'Results Release',
			date: new Date(2026, 11, 11), // December
			time: '12:00 PM',
			title: 'Cycle 4 Examination - Module 6 Results Release',
			category: 'Module 6 Results Release'
		},
		{
			poster: PosterCycle4Module1to5ResultsRelease,
			badgeLabels: ['M1', 'M2', 'M3', 'M4', 'M5'],
			badgeColor: CYCLE4_BADGE_COLOR,
			posterLabel: 'Cycle 4 Examination',
			posterModule: 'Results Release',
			date: new Date(2026, 11, 11),
			time: '12:00 PM',
			title: 'Cycle 4 Examination - Module 1 to 5 Results Release',
			category: 'Module 1 to 5 Results Release'
		}
	];

	// The month currently on screen, starting at August 2026 so the sample events show up immediately.
	let viewDate = $state(new Date(2026, 7, 1));
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