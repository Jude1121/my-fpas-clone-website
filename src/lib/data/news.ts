// src/lib/data/news.ts

export type NewsItem = {
	id: string;
	image: string | null;
	title: string;
	excerpt: string;
	href: string;
	date: Date;
	emoji?: string;
	border?: 'red';
};

// Import every image used below. Vite bundles these and rewrites the
// URLs correctly (including the /app base path) at build time.
import asiaTrustedAwards2026 from '$lib/assets/media-release/news/asia-trusted-awards-2026.png';
import financialPlannerAwards2026 from '$lib/assets/media-release/news/financial-planner-awards-2026.png';
import financialPlannerAwardsSaveTheDate from '$lib/assets/media-release/news/financial-planner-awards-save-the-date.png';
import noImage from '$lib/assets/media-release/news/no-image.jpg';
import legacyPlanningSeries from '$lib/assets/media-release/news/legacy-planning-series.png';
import bestOfMeMouSigning from '$lib/assets/media-release/news/bestofme-mou-signing.png';
import examFeeNotice from '$lib/assets/media-release/news/exam-fee-notice.png';
import fpasIscaMouSigning from '$lib/assets/media-release/news/fpas-isca-mou-signing.png';
import announcement from '$lib/assets/media-release/news/annoucement.png';

// Single source of truth for every news item on the site.
// NewsList.svelte and LatestNews.svelte both read from this array —
// edit content/dates here only.
export const news: NewsItem[] = [
	{
		id: 'asia-trusted-awards-2026',
		image: asiaTrustedAwards2026,
		title: 'FPAS President Dr Ben Fok Appointed Judge for the 11th Asia Trusted Life Agents & Advisers Awards 2026',
		excerpt:
			"FPAS is proud to announce that President Dr Ben Fok has been appointed as a judge for the 11th Asia Trusted Life Agents & Advisers Awards 2026, reflecting the Association's continued commitment to promoting excellence and professionalism in financial planning across the region.",
		href: '/newsroom/media-release/asia-trusted-awards',
		date: new Date(2026, 3, 25) // 25 April 2026
	},
	{
		id: 'financial-planner-awards-2026-criteria',
		image: financialPlannerAwards2026,
		title: 'FPAS Financial Planner Awards 2026: Understanding the Qualifying Criteria',
		excerpt:
			'As the FPAS Annual Financial Planner Awards return in 2026, FPAS has introduced greater clarity on the qualifying criteria to help eligible CFP® professionals better understand the two award pathways. Applications are now open, with an Early Bird discount available for submissions received by 17 July 2026.',
		href: '/newsroom/media-release/financial-planner-award',
		date: new Date(2026, 3, 20) // 20 April 2026
	},
	{
		id: 'financial-planner-awards-save-the-date',
		image: financialPlannerAwardsSaveTheDate,
		title: 'Financial Planner Awards 2026 Singapore',
		excerpt:
			'The Financial Planning Association of Singapore (FPAS) is pleased to announce the return of the Financial Planner Awards Singapore in 2026. The prestigious awards program recognises CFP professionals who have demonstrated excellence, professionalism, and leadership in advancing the financial planning profession in Singapore.',
		href: '/newsroom/media-release/fp-award-sg',
		date: new Date(2026, 3, 18) // 18 April 2026
	},
	{
		id: 'ai-financial-planning-survey',
		image: noImage,
		title: 'FPAS Invites Public Participation in Global AI and Financial Planning Survey',
		excerpt:
			'FPAS and the Financial Planning Standards Board Ltd. (FPSB) invite financial professionals and members of the public to participate in the 2026 Global AI and Financial Planning Survey. Share your views on how artificial intelligence is shaping the future of financial planning and contribute to important global industry research.',
		href: '#',
		date: new Date(2026, 3, 14) // 14 April 2026
	},
	{
		id: 'legacy-planning-series-session-1',
		image: legacyPlanningSeries,
		title: 'FPAS and SimplyWills Successfully Conclude First Session of 2026 Legacy Planning Series',
		excerpt:
			'FPAS, in collaboration with SimplyWills, successfully concluded the first session of the 2026 Legacy Planning Series with a Mandarin Wills Talk held on 15 May 2026. The session provided participants with practical insights into Wills, intestacy laws, and the importance of early legacy planning.',
		href: '#',
		date: new Date(2026, 3, 10) // 10 April 2026
	},
	{
		id: 'fortis-wills-legacy-seminar',
		image: noImage,
		title: 'FPAS and Fortis Wills Highlight Growing Importance of Legacy & Digital Asset Planning',
		excerpt:
			'The Financial Planning Association of Singapore (FPAS), in collaboration with Fortis Wills, successfully concluded "Legacy, Estate Planning and You," a seminar exploring legacy planning, estate distribution, and the growing relevance of digital assets in today\'s financial landscape.',
		href: '#',
		date: new Date(2026, 3, 8) // 8 April 2026
	},
	{
		id: 'bestofme-mou-signing',
		image: bestOfMeMouSigning,
		emoji: '📣',
		title: 'FPAS x BestOfMe MOU Signing',
		excerpt:
			'FPAS partners with BestOfMe to strengthen leadership development and elevate professional growth for FPAS members.',
		href: 'https://www.fpas.org.sg/media-release-single/69d364117098ffe7e5f54180',
		date: new Date(2026, 3, 6) // 6 April 2026
	},
	{
		id: 'exam-fee-notice',
		image: examFeeNotice,
		title: 'Notice on Revision of CFP® Modules Examination Fees (Effective from Cycle 3, 2026)',
		excerpt:
			'The Financial Planning Association of Singapore (FPAS) will implement revised examination fees for CFP® Modules, effective 1 July 2026 (Cycle 3, 2026).',
		href: 'https://www.fpas.org.sg/media-release-single/69cdd1ac7098ffe7e5f5412e',
		date: new Date(2026, 3, 2) // 2 April 2026
	},
	{
		id: 'fpas-isca-mou-signing',
		image: fpasIscaMouSigning,
		emoji: '📣',
		title: 'FPAS x ISCA MOU Signing',
		excerpt:
			'On 29 January, FPAS and ISCA Academy signed an MOU, formalised by FPAS CEO Galen Woo and ISCA CEO Mr Quek Mu Lim, to expand professional development opportunities for our members.',
		href: 'https://www.fpas.org.sg/media-release-single/69807915f2468b5c2d89b0bf',
		date: new Date(2026, 0, 29) // 29 January 2026
	},
	{
		id: 'cycle1-exam-cancellation-announcement',
		image: announcement,
		border: 'red',
		title: 'ANNOUNCEMENT Regarding Cancellation of Cycle 1 Examinations',
		excerpt:
			'Important update on the cancellation of the CFP® Examination – Cycle 1 (Feb-Mar 2026). Further details will be communicated in due course.',
		href: '#',
		date: new Date(2026, 0, 15) // 15 January 2026
	}
];