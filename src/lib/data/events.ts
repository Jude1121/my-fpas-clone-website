// src/lib/data/events.ts
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

export type EventItem = {
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
	/** External or internal URL used by cards that link out (e.g. UpcomingEvents). Defaults to '/events' if omitted. */
	link?: string;
};

const CYCLE3_BADGE_COLOR = '#8a1c2e';
const CYCLE4_BADGE_COLOR = '#7b1fa2';

// Single source of truth for every event on the site.
// EventsCalendarList.svelte, Calendar.svelte, and UpcomingEvents.svelte
// all read from this array — edit dates/details here only.
export const events: EventItem[] = [
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
		category: 'Foundations in Financial Planning',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M1-2026'
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
		category: 'Risk Management and Insurance Planning',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M2-2026'
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
		category: 'Tax Planning and Estate Planning',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M3-2026'
	},
	{
		poster: PosterModule4,
		badgeLabels: ['M4'],
		badgeColor: CYCLE3_BADGE_COLOR,
		posterLabel: 'Cycle 3 Examination',
		posterModule: 'Module 4',
		date: new Date(2026, 7, 31),
		time: '2:00 PM',
		location: 'LIFELONG LEARNING INSTITUTE',
		title: 'Cycle 3 Examination - Module 4',
		category: 'Investment Planning',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M4-2026'
	},
	{
		poster: PosterModule5,
		badgeLabels: ['M5'],
		badgeColor: CYCLE3_BADGE_COLOR,
		posterLabel: 'Cycle 3 Examination',
		posterModule: 'Module 5',
		date: new Date(2026, 8, 2),
		time: '2:00 PM',
		location: 'LIFELONG LEARNING INSTITUTE',
		title: 'Cycle 3 Examination - Module 5',
		category: 'Retirement Planning',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M5-2026'
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
		category: 'Financial Plan Construction and Professional Responsibilities',
		link: 'https://www.fpas.org.sg/events-single/Cycle-3-Examination-M6-2026'
	},
	{
		poster: PosterWillTrust,
		posterLabel: 'Sharing Session',
		posterModule: 'Will & Trust Planning',
		date: new Date(2026, 8, 11),
		time: '10:00 AM',
		title: 'Will & Trust Planning Sharing Session with Mr Anthony Xu',
		category:
			'Conducted in Mandarin Chinese, this session explores Wills, Trusts and key estate planning considerations, including what happens without a Will, the challenges of setting up a Trust, and who may benefit from Trust planning.',
		link: '/events'
	},
	{
		poster: PosterResultsRelease,
		posterLabel: 'Cycle 3 Examination',
		posterModule: 'Result Release',
		date: new Date(2026, 8, 18),
		time: '12:00 PM',
		title: 'Cycle 3 Examination - Module 1 to 5 Results Release',
		category: 'Module 1 to 5 Results Release',
		link: '/events'
	},
	{
		poster: PosterPenguinSecurities,
		posterLabel: 'Sharing Session',
		posterModule: 'FPAS x Penguin Securities',
		date: new Date(2026, 6, 22),
		time: '3:00 PM',
		title: 'FPAS x Penguin Securities Knowledge Sharing Session',
		category:
			"Discover what's driving Japan's market resurgence at this FPAS x Penguin Securities Knowledge Sharing Session featuring Daiwa Asset Management (Singapore) Ltd. Gain expert insights into Japan's investment outlook and the opportunities shaping today's evolving market landscape.",
		link: '/events'
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
			'Discover how Wills and Trusts work together to protect your assets and preserve your legacy. In this informative session, Mr Patrick Chang from SimplyWills will share practical insights into the role of Wills and Trusts in estate planning, helping participants better understand how to safeguard their wealth and provide for future generations. Conducted in Mandarin Chinese.',
		link: '/events'
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
		category: 'Module 6 Results Release',
		link: '/events'
	},
	{
		poster: PosterFinancialPlannerAwards,
		posterLabel: 'FPAS',
		posterModule: 'Financial Planner Awards',
		date: new Date(2026, 9, 6),
		time: '12:00 PM',
		title: 'Financial Planner Awards Singapore 2026',
		category:
			"The Financial Planner Awards Singapore are back. Returning in 2026, this prestigious awards programme recognises outstanding CFP professionals who have demonstrated excellence, professionalism, and leadership within the financial planning profession. Join us as we celebrate and honour the achievements of Singapore's leading financial planning professionals on 6 October 2026.",
		link: '/events'
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
		category: 'Module 6 Results Release',
		link: '/events'
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
		category: 'Retirement Planning',
		link: '/events'
	},
	{
		poster: PosterCycle4Module6,
		badgeLabels: ['M6'],
		badgeColor: CYCLE4_BADGE_COLOR,
		posterLabel: 'Cycle 4 Examination',
		posterModule: 'Module 6',
		date: new Date(2026, 10, 27),
		time: '2:00 PM',
		title: 'Cycle 4 Examination - Module 6',
		category: 'Financial Plan Construction and Professional Responsibilities',
		link: '/events'
	},
	{
		poster: PosterCycle4Module6ResultsRelease,
		badgeLabels: ['M6'],
		badgeColor: CYCLE4_BADGE_COLOR,
		posterLabel: 'Cycle 4 Examination',
		posterModule: 'Results Release',
		date: new Date(2026, 11, 11),
		time: '12:00 PM',
		title: 'Cycle 4 Examination - Module 6 Results Release',
		category: 'Module 6 Results Release',
		link: '/events'
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
		category: 'Module 1 to 5 Results Release',
		link: '/events'
	}
];