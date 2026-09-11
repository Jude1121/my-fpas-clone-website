function slugify(str) {
	return str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');
}

// `image` filenames match exactly what's in src/lib/assets/planners.
// `fullBio`, `companyDetails`, and `certification` power PlannerProfile.svelte.
// NOTE: every planner besides Yang Yang below has PLACEHOLDER/sample data
// for company + certification info (clearly fabricated so the layout has
// something real-looking to render) — swap these for each planner's actual
// details before shipping.
const rawPlanners = [
	{
		name: 'Yang Yang',
		image: 'yang-yang.png',
		bio: 'Specialized in financial planning for new immigrants from China',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Estate Planning', 'Financial Advisory Representative', 'Insurance Agent (Life)'],
		lastUpdate: '25-08-2026',
		fullBio:
			'As 1st generation immigrant from China, I am specialized in Financial planning services for new immigrants from Great China, including wealth management, heath insurance planning, retirement planning and investment advisory.',
		companyDetails: {
			jobTitle: 'Executive Senior Financial Consultant',
			companyName: 'Great Eastern Financial Advisers',
			officeAddress: '1 Gateway Drive #18-F Westgate Tower Singapore 608531'
		},
		certification: {
			cfpLicenceNo: '1885',
			masRnfNumber: 'YY-300336330',
			obtained: '25 Aug 2020',
			expiry: '24 Aug 2029'
		}
	},
	{
		name: 'ALISON LEE MEI XUAN',
		image: 'alison-lee-mei-xuan.png',
		bio: '',
		industry: 'Insurance',
		experience: '16-20 years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)', 'Estate Planning'],
		lastUpdate: '24-08-2026',
		fullBio:
			'Alison has spent over 16 years helping individuals and families in Singapore build comprehensive protection plans, with a focus on life and general insurance coupled with estate planning strategies.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2041',
			masRnfNumber: 'AL-300118842',
			obtained: '12 Mar 2016',
			expiry: '11 Mar 2025'
		}
	},
	{
		name: 'Steve Chan',
		image: 'steve-chan.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative',
			'Estate Planning',
			'Tax Specialist'
		],
		lastUpdate: '22-08-2026',
		fullBio:
			'Steve brings a multi-disciplinary approach to financial planning, combining insurance, tax, and estate planning expertise to help clients build resilient, well-structured financial plans.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'Prudential Assurance Company Singapore',
			officeAddress: '7 Straits View Marina One East Tower Singapore 018936'
		},
		certification: {
			cfpLicenceNo: '1793',
			masRnfNumber: 'SC-300229517',
			obtained: '03 Jul 2013',
			expiry: '02 Jul 2022'
		}
	},
	{
		name: 'Cason Goh',
		image: 'cason-goh.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '19-08-2026',
		fullBio:
			'With over 16 years in financial advisory, Cason focuses on holistic financial planning that adapts as clients move through different life stages.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '1204',
			masRnfNumber: 'CG-300094471',
			obtained: '19 Sep 2009',
			expiry: '18 Sep 2018'
		}
	},
	{
		name: 'Ong Ting Yong',
		image: 'ong-ting-yong.png',
		bio: '',
		industry: 'Insurance',
		experience: '4-7 years',
		specialisation: ['Financial Advisory Representative', 'Insurance Agent (Life)'],
		lastUpdate: '18-08-2026',
		fullBio:
			'Ting Yong works closely with young professionals and new families to build their first protection and savings plans, keeping things simple and jargon-free.',
		companyDetails: {
			jobTitle: 'Financial Services Consultant',
			companyName: 'Great Eastern Life Assurance',
			officeAddress: '1 Pickering Street #09-01 Great Eastern Centre Singapore 048659'
		},
		certification: {
			cfpLicenceNo: '2588',
			masRnfNumber: 'OT-300402219',
			obtained: '14 Feb 2021',
			expiry: '13 Feb 2030'
		}
	},
	{
		name: 'WONG CHAM FATT',
		image: 'wong-cham-fatt.png',
		bio: 'More than 15 years Finance and Accounting Profession with in depth full spectrum Finance and Business knowledge',
		industry: 'Others',
		experience: '16+ years',
		specialisation: ['Others', 'Management', 'Finance'],
		lastUpdate: '15-08-2026',
		fullBio:
			'More than 15 years in the Finance and Accounting profession, with in-depth, full-spectrum finance and business knowledge spanning corporate finance, management, and personal financial planning.',
		companyDetails: {
			jobTitle: 'Finance & Business Consultant',
			companyName: 'WCF Consultancy',
			officeAddress: '80 Robinson Road #12-02 Singapore 068898'
		},
		certification: {
			cfpLicenceNo: '1099',
			masRnfNumber: 'WC-300071163',
			obtained: '02 May 2008',
			expiry: '01 May 2017'
		}
	},
	{
		name: 'Jeanette Ang',
		image: 'jeanette-ang.png',
		bio: 'Jeanette understands that while financial planning is important, she recognises that not everyone is ready for it. She works with individuals, families, and business owners who are ready to review, refine, and strengthen their financial portfolios with intention.\n\nHer advisory style is calm, logical, and highly intentional - guiding clients in protection insurance planning, education funding, retirement preparation, and business continuity with confidence and clarity.',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: ['Insurance Agent (Life)', 'Financial Advisory Representative', 'Finance', 'Estate Planning'],
		lastUpdate: '13-08-2026',
		fullBio:
			'Jeanette understands that while financial planning is important, she recognises that not everyone is ready for it. She works with individuals, families, and business owners who are ready to review, refine, and strengthen their financial portfolios with intention.\n\nHer advisory style is calm, logical, and highly intentional - guiding clients in protection insurance planning, education funding, retirement preparation, and business continuity with confidence and clarity.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'Providend Ltd',
			officeAddress: '10 Anson Road #37-15 International Plaza Singapore 079903'
		},
		certification: {
			cfpLicenceNo: '2701',
			masRnfNumber: 'JA-300418825',
			obtained: '30 Nov 2021',
			expiry: '29 Nov 2030'
		}
	},
	{
		name: 'Chia Hee Chye',
		image: 'chia-hee-chye.png',
		bio: 'I constantly strive to improve myself to be an advisor who can value add to the clients I help.\n\nI believe in establishing and maintaining long term relationships with people who like to work with me, to help them achieve their goals or plans in life.',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)'],
		lastUpdate: '08-08-2026',
		fullBio:
			'I constantly strive to improve myself to be an advisor who can value add to the clients I help.\n\nI believe in establishing and maintaining long term relationships with people who like to work with me, to help them achieve their goals or plans in life.',
		companyDetails: {
			jobTitle: 'Senior Insurance Advisor',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1157',
			masRnfNumber: 'CH-300082904',
			obtained: '11 Jan 2009',
			expiry: '10 Jan 2018'
		}
	},
	{
		name: 'Mei Ling Ng',
		image: 'mei-ling-ng.jpg',
		bio: '',
		industry: 'Insurance',
		experience: '12-15 years',
		specialisation: ['Insurance Agent (General)', 'Insurance Agent (Life)'],
		lastUpdate: '07-08-2026',
		fullBio:
			'Mei Ling has spent over a decade helping clients navigate both life and general insurance needs, with an emphasis on practical, easy-to-understand coverage plans.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'Manulife Singapore',
			officeAddress: '8 Cross Street #16-01 Manulife Tower Singapore 048424'
		},
		certification: {
			cfpLicenceNo: '1622',
			masRnfNumber: 'MN-300195560',
			obtained: '20 Jun 2012',
			expiry: '19 Jun 2021'
		}
	},
	{
		name: 'Karen Tang, CFP®',
		image: 'karen-tang.png',
		bio: 'Karen specialises in comprehensive wealth planning, covering investments, protection, retirement, and legacy planning. She leverages an award winning Fintech wealth planning platform to model future cash flow, net worth, and "what-if" scenarios with a high degree of accuracy. This enables clients to make confident, well-informed decisions and stay on track towards their financial goals with greater clarity and certainty.',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '06-08-2026',
		fullBio:
			'Karen specialises in comprehensive wealth planning, covering investments, protection, retirement, and legacy planning. She leverages an award winning Fintech wealth planning platform to model future cash flow, net worth, and "what-if" scenarios with a high degree of accuracy. This enables clients to make confident, well-informed decisions and stay on track towards their financial goals with greater clarity and certainty.',
		companyDetails: {
			jobTitle: 'Wealth Planning Manager',
			companyName: 'Havend Pte Ltd',
			officeAddress: '10 Hoe Chiang Road #14-06 Keppel Towers Singapore 089315'
		},
		certification: {
			cfpLicenceNo: '1745',
			masRnfNumber: 'KT-300211348',
			obtained: '08 Oct 2013',
			expiry: '07 Oct 2022'
		}
	},
	{
		name: 'Chng Pia Kim',
		image: 'chng-pia-kim.png',
		bio: '',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)', 'Estate Planning'],
		lastUpdate: '04-08-2026',
		fullBio:
			'Pia Kim has built her practice over 16 years around long-term client relationships, helping families protect their assets and plan their legacies.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1088',
			masRnfNumber: 'CP-300068217',
			obtained: '15 Apr 2008',
			expiry: '14 Apr 2017'
		}
	},
	{
		name: 'Lim Liang Wei, Marv',
		image: 'lim-liang-wei-marv.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16-20 years',
		specialisation: ['Financial Advisory Representative', 'Finance', 'Estate Planning', 'Insurance Agent (Life)'],
		lastUpdate: '27-07-2026',
		fullBio:
			'Marv has close to two decades of experience guiding clients through the full spectrum of financial planning — from protection and savings to estate and legacy planning.',
		companyDetails: {
			jobTitle: 'Associate Financial Services Director',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1032',
			masRnfNumber: 'LL-300054982',
			obtained: '21 Feb 2007',
			expiry: '20 Feb 2016'
		}
	},
	{
		name: 'Sim Geok Kheng Chloe',
		image: 'sim-geok-kheng-chloe.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: ['Others'],
		lastUpdate: '23-07-2026',
		fullBio:
			'Chloe takes a broad, needs-based approach to financial planning, working across a wide range of client situations and financial goals.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'Financial Alliance',
			officeAddress: '10 Ubi Crescent #06-95 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1668',
			masRnfNumber: 'SG-300203471',
			obtained: '05 Sep 2012',
			expiry: '04 Sep 2021'
		}
	},
	{
		name: 'Lai Jiahui Joanne',
		image: 'lai-jiahui-joanne.png',
		bio: '',
		industry: 'Others',
		experience: '12-15 years',
		specialisation: ['Management'],
		lastUpdate: '23-07-2026',
		fullBio:
			'Joanne draws on her management background to help clients organise and prioritise their financial goals with a structured, practical approach.',
		companyDetails: {
			jobTitle: 'Client Management Consultant',
			companyName: 'JLC Management Consultancy',
			officeAddress: '30 Cecil Street #19-08 Prudential Tower Singapore 049712'
		},
		certification: {
			cfpLicenceNo: '1591',
			masRnfNumber: 'LJ-300187629',
			obtained: '17 Nov 2011',
			expiry: '16 Nov 2020'
		}
	},
	{
		name: "Quinn Huang Qiao'E",
		image: 'quinn-huang-qiaoe.png',
		bio: "Quinn Huang is a Financial Consultant with finexis advisory, with over 10 years of experience helping professional women in Singapore build financial clarity and lasting wealth.\n\nHer approach is shaped by personal experience growing up without financial security taught her early how much a good plan matters. Today, she works with professional women, working mothers, and single women, helping each build a financial plan suited to their life, free of jargon and judgment.",
		industry: '',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative', 'Insurance Agent (Life)', 'Finance', 'Estate Planning', 'Education'],
		lastUpdate: '20-07-2026',
		fullBio:
			"Quinn Huang is a Financial Consultant with finexis advisory, with over 10 years of experience helping professional women in Singapore build financial clarity and lasting wealth.\n\nHer approach is shaped by personal experience growing up without financial security taught her early how much a good plan matters. Today, she works with professional women, working mothers, and single women, helping each build a financial plan suited to their life, free of jargon and judgment.",
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'finexis advisory',
			officeAddress: '2 Havelock Road #10-01 Havelock II Singapore 059763'
		},
		certification: {
			cfpLicenceNo: '2312',
			masRnfNumber: 'QH-300349916',
			obtained: '09 Jan 2018',
			expiry: '08 Jan 2027'
		}
	},
	{
		name: 'Ron Miura 三浦　龍太郎',
		image: 'ron-miura.png',
		bio: '',
		industry: 'Others',
		experience: '12-15 years',
		specialisation: ['Financial Advisory Representative', 'Estate Planning', 'Education', 'Others'],
		lastUpdate: '15-07-2026',
		fullBio:
			'Ron works closely with Japanese expatriates and their families in Singapore, helping bridge cross-border financial planning needs with local expertise.',
		companyDetails: {
			jobTitle: 'Financial Services Consultant',
			companyName: 'Sun Life Financial Advisors',
			officeAddress: '9 Battery Road #20-01 MYP Centre Singapore 049910'
		},
		certification: {
			cfpLicenceNo: '1834',
			masRnfNumber: 'RM-300241785',
			obtained: '26 Aug 2014',
			expiry: '25 Aug 2023'
		}
	},
	{
		name: 'Jenelle Andelica Ong',
		image: 'jenelle-andelica-ong.png',
		bio: "You dont need to have it all figured out.\n\nWith over a decade of experience, I specialise in helping clients align their financial plans with lifes evolving chapters — from protecting your family and building wealth, to growing a business, planning for retirement, and leaving a legacy.\n\nMy mission is to simplify financial planning so you can focus on what truly matters.",
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '13-07-2026',
		fullBio:
			"You dont need to have it all figured out.\n\nWith over a decade of experience, I specialise in helping clients align their financial plans with lifes evolving chapters — from protecting your family and building wealth, to growing a business, planning for retirement, and leaving a legacy.\n\nMy mission is to simplify financial planning so you can focus on what truly matters.",
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'Providend Ltd',
			officeAddress: '10 Anson Road #37-15 International Plaza Singapore 079903'
		},
		certification: {
			cfpLicenceNo: '2277',
			masRnfNumber: 'JO-300338204',
			obtained: '02 Apr 2017',
			expiry: '01 Apr 2026'
		}
	},
	{
		name: 'Chew Qian Yi Angela',
		image: 'chew-qian-yi-angela.png',
		bio: 'Wealth should give you freedom and peace of mind, not worry or sleepless nights. The most meaningful part of my work is helping clients build the confidence to enjoy all that life has to offer, care for the people they love, and make decisions with clarity instead of fear.',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '05-07-2026',
		fullBio:
			'Wealth should give you freedom and peace of mind, not worry or sleepless nights. The most meaningful part of my work is helping clients build the confidence to enjoy all that life has to offer, care for the people they love, and make decisions with clarity instead of fear.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'GYC Financial Advisory',
			officeAddress: '3 Killiney Road #07-08 Winsland House I Singapore 239519'
		},
		certification: {
			cfpLicenceNo: '2534',
			masRnfNumber: 'CQ-300394106',
			obtained: '19 Jul 2020',
			expiry: '18 Jul 2029'
		}
	},
	{
		name: 'Neo Zhi Yuan',
		image: 'neo-zhi-yuan.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '02-07-2026',
		fullBio:
			'Zhi Yuan works with young families and first-time investors, focusing on building simple, sustainable financial plans from the ground up.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2189',
			masRnfNumber: 'NZ-300321658',
			obtained: '11 Dec 2016',
			expiry: '10 Dec 2025'
		}
	},
	{
		name: 'Chee Xiu Bin',
		image: 'chee-xiu-bin.png',
		bio: 'XIU BIN is an experienced Financial Planner who specialises in helping low to middle income individuals and families declutter and discover their assets and cash flow since 2014. With a keen eye for investment, XIU BIN has helped his investors safely tide through crisis such as the US-China trade war in 2018, Covid-19, Russia-Ukraine conflict, and more. Using his proprietary PRO system, XIU BIN always delivers a holistic financial planning roadmap and excellent experience for his clients.',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: ['Financial Advisory Representative', 'Finance'],
		lastUpdate: '02-07-2026',
		fullBio:
			'XIU BIN is an experienced Financial Planner who specialises in helping low to middle income individuals and families declutter and discover their assets and cash flow since 2014. With a keen eye for investment, XIU BIN has helped his investors safely tide through crisis such as the US-China trade war in 2018, Covid-19, Russia-Ukraine conflict, and more. Using his proprietary PRO system, XIU BIN always delivers a holistic financial planning roadmap and excellent experience for his clients.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'Financial Alliance',
			officeAddress: '10 Ubi Crescent #06-95 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1912',
			masRnfNumber: 'CX-300264873',
			obtained: '04 Mar 2015',
			expiry: '03 Mar 2024'
		}
	},
	{
		name: 'David Wu',
		image: 'david-wu.png',
		bio: '',
		industry: '',
		experience: '',
		specialisation: [],
		lastUpdate: '01-07-2026',
		fullBio:
			'David brings a client-first approach to financial planning, helping individuals navigate their financial journey with clarity and confidence.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2612',
			masRnfNumber: 'DW-300407745',
			obtained: '01 Jul 2021',
			expiry: '30 Jun 2030'
		}
	},
	{
		name: 'Lee Kee Hoon Kelly',
		image: 'lee-kee-hoon-kelly.png',
		bio: '',
		industry: 'Banking',
		experience: '16+ years',
		specialisation: ['Banking'],
		lastUpdate: '26-06-2026',
		fullBio:
			'With over 16 years in banking and wealth management, Kelly helps clients integrate their banking relationships with broader financial planning goals.',
		companyDetails: {
			jobTitle: 'Senior Relationship Manager',
			companyName: 'DBS Private Bank',
			officeAddress: '12 Marina Boulevard #44-01 DBS Asia Central Singapore 018982'
		},
		certification: {
			cfpLicenceNo: '1147',
			masRnfNumber: 'LK-300079215',
			obtained: '19 Oct 2008',
			expiry: '18 Oct 2017'
		}
	},
	{
		name: 'TOH RUI HANG',
		image: 'toh-rui-hang.png',
		bio: '',
		industry: 'Insurance',
		experience: '12-15 years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative'
		],
		lastUpdate: '25-06-2026',
		fullBio:
			'Rui Hang combines life, general insurance, and financial advisory expertise to build well-rounded protection and planning strategies for his clients.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'Great Eastern Life Assurance',
			officeAddress: '1 Pickering Street #09-01 Great Eastern Centre Singapore 048659'
		},
		certification: {
			cfpLicenceNo: '1729',
			masRnfNumber: 'TR-300208856',
			obtained: '14 Aug 2013',
			expiry: '13 Aug 2022'
		}
	},
	{
		name: 'Lisa Eu',
		image: 'lisa-eu.png',
		bio: '| Values-based advisory, Cross-border wealth management, Investment strategies, Estate planning, Insurance, Business planning |\n\nI specialize in helping women, families, and business owners build strategies that align their financial goals with their life aspirations. My approach is deeply personal and globally informed, shaped by my unique journey living and working overseas. I do what I advise.',
		industry: 'Others',
		experience: '12-15 years',
		specialisation: [
			'Finance',
			'Estate Planning',
			'Financial Advisory Representative',
			'Insurance Agent (Life)',
			'Insurance Agent (General)'
		],
		lastUpdate: '22-06-2026',
		fullBio:
			'| Values-based advisory, Cross-border wealth management, Investment strategies, Estate planning, Insurance, Business planning |\n\nI specialize in helping women, families, and business owners build strategies that align their financial goals with their life aspirations. My approach is deeply personal and globally informed, shaped by my unique journey living and working overseas. I do what I advise.',
		companyDetails: {
			jobTitle: 'Wealth Advisory Director',
			companyName: 'Havend Pte Ltd',
			officeAddress: '10 Hoe Chiang Road #14-06 Keppel Towers Singapore 089315'
		},
		certification: {
			cfpLicenceNo: '1503',
			masRnfNumber: 'LE-300171298',
			obtained: '28 Apr 2011',
			expiry: '27 Apr 2020'
		}
	},
	{
		name: 'Ho Chin Tao (Josh), CFP®, ChFC®/S, AEPP®',
		image: 'ho-chin-tao.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '0-3 years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Estate Planning',
			'Financial Advisory Representative'
		],
		lastUpdate: '17-06-2026',
		fullBio:
			'Josh is an early-career financial consultant focused on building strong foundations for clients through insurance protection, estate planning, and holistic financial advisory.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2789',
			masRnfNumber: 'HC-300429134',
			obtained: '10 Jun 2023',
			expiry: '09 Jun 2032'
		}
	},
	{
		name: 'Justin Tan',
		image: 'justin-tan.jpg',
		bio: '',
		industry: 'Securities',
		experience: '16+ years',
		specialisation: ['Management'],
		lastUpdate: '16-06-2026',
		fullBio:
			'Justin brings over 16 years of experience in securities and financial management, helping clients build well-managed, diversified portfolios.',
		companyDetails: {
			jobTitle: 'Senior Investment Manager',
			companyName: 'UOB Kay Hian',
			officeAddress: '8 Anthony Road #01-01 UOB Kay Hian Building Singapore 229957'
		},
		certification: {
			cfpLicenceNo: '1176',
			masRnfNumber: 'JT-300088652',
			obtained: '07 Jul 2009',
			expiry: '06 Jul 2018'
		}
	},
	{
		name: 'Peter Tan 陈明麒',
		image: 'peter-tan.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '06-06-2026',
		fullBio:
			'Peter works with individuals and families across Singapore, helping them build practical financial advisory plans suited to their life stage and goals.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2098',
			masRnfNumber: 'PT-300298471',
			obtained: '15 May 2015',
			expiry: '14 May 2024'
		}
	},
	{
		name: 'YEO TZE HERN',
		image: 'yeo-tze-hern.png',
		bio: 'Senior Financial Services Consultant',
		industry: 'Insurance',
		experience: '4-7 years',
		specialisation: ['Insurance Agent (Life)', 'Estate Planning'],
		lastUpdate: '06-06-2026',
		fullBio:
			'Tze Hern is a Senior Financial Services Consultant focused on life insurance and estate planning, helping clients build strong, lasting protection strategies.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Consultant',
			companyName: 'Great Eastern Life Assurance',
			officeAddress: '1 Pickering Street #09-01 Great Eastern Centre Singapore 048659'
		},
		certification: {
			cfpLicenceNo: '2456',
			masRnfNumber: 'YT-300378913',
			obtained: '23 Sep 2019',
			expiry: '22 Sep 2028'
		}
	},
	{
		name: 'Willson Tan',
		image: 'willson-tan.png',
		bio: "Strong Believer in Financial Planning which involves Identifying and developing Client's customized portfolio solutions.\n\nFinancial Services Consultant, AIA since July 2015.\n\nMillion Dollar Round Table (MDRT Qualifying Member) - 6 / 10 Qualifying Member",
		industry: 'Insurance',
		experience: '4-7 years',
		specialisation: ['Insurance Agent (Life)'],
		lastUpdate: '05-06-2026',
		fullBio:
			"Strong Believer in Financial Planning which involves Identifying and developing Client's customized portfolio solutions.\n\nFinancial Services Consultant, AIA since July 2015.\n\nMillion Dollar Round Table (MDRT Qualifying Member) - 6 / 10 Qualifying Member",
		companyDetails: {
			jobTitle: 'Financial Services Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2298',
			masRnfNumber: 'WT-300333064',
			obtained: '20 Jul 2015',
			expiry: '19 Jul 2024'
		}
	},
	{
		name: 'Steven Zheng Xiaowei',
		image: 'steven-zheng-xiaowei.png',
		bio: '',
		industry: 'Banking',
		experience: '4-7 years',
		specialisation: ['Banking', 'Compliance', 'Financial Advisory Representative'],
		lastUpdate: '04-06-2026',
		fullBio:
			'Steven combines banking, compliance, and financial advisory expertise to help clients navigate regulatory-sensitive financial planning with confidence.',
		companyDetails: {
			jobTitle: 'Relationship Manager',
			companyName: 'OCBC Bank',
			officeAddress: '65 Chulia Street OCBC Centre Singapore 049513'
		},
		certification: {
			cfpLicenceNo: '2373',
			masRnfNumber: 'SZ-300361852',
			obtained: '02 Feb 2019',
			expiry: '01 Feb 2028'
		}
	},
	{
		name: 'Leslie Sun',
		image: 'leslie-sun.png',
		bio: '',
		industry: '',
		experience: '12-15 years',
		specialisation: [],
		lastUpdate: '03-06-2026',
		fullBio:
			'Leslie brings over a decade of experience in financial planning, helping clients build clear, actionable strategies for their financial future.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1834',
			masRnfNumber: 'LS-300241192',
			obtained: '11 Aug 2014',
			expiry: '10 Aug 2023'
		}
	},
	{
		name: 'Eunice Ong',
		image: 'eunice-ong.png',
		bio: '',
		industry: 'Insurance',
		experience: '4-7 years',
		specialisation: [
			'Finance',
			'Education',
			'Insurance Agent (Life)',
			'Financial Advisory Representative',
			'Estate Planning'
		],
		lastUpdate: '02-06-2026',
		fullBio:
			'Eunice combines expertise in finance, education, and insurance to help clients build well-rounded financial plans covering protection, education funding, and estate planning.',
		companyDetails: {
			jobTitle: 'Financial Services Consultant',
			companyName: 'Great Eastern Life Assurance',
			officeAddress: '1 Pickering Street #09-01 Great Eastern Centre Singapore 048659'
		},
		certification: {
			cfpLicenceNo: '2401',
			masRnfNumber: 'EO-300368274',
			obtained: '17 Jun 2019',
			expiry: '16 Jun 2028'
		}
	},
	{
		name: 'Sam Tan Wei Sheng',
		image: 'sam-tan-wei-sheng.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative', 'Management', 'Estate Planning'],
		lastUpdate: '01-06-2026',
		fullBio:
			'Sam works with individuals and families to build structured financial plans, drawing on his management background to help clients organise and prioritise their goals.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2178',
			masRnfNumber: 'ST-300318827',
			obtained: '29 Nov 2016',
			expiry: '28 Nov 2025'
		}
	},
	{
		name: 'Teoh Zhi Hau',
		image: 'teoh-zhi-hau.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '29-05-2026',
		fullBio:
			'Zhi Hau focuses on helping young professionals build their first structured financial plans, with an emphasis on clear, jargon-free advice.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2467',
			masRnfNumber: 'TZ-300380516',
			obtained: '05 Oct 2019',
			expiry: '04 Oct 2028'
		}
	},
	{
		name: 'Cassie Lee Aik Ling',
		image: 'cassie-lee-aik-ling.png',
		bio: 'Vision : Maintaining MDRT Accolade and Value Add to My Clients in Their Financial Roadmaps\n\nMission : I am committed to empower and guide my clients to help them achieve their financial goals.\n\nTagline : Assisting The Right Clients At The Right Time Using The Right Financial Tool To Reach Their Financial Goals.',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)', 'Finance', 'Estate Planning'],
		lastUpdate: '22-05-2026',
		fullBio:
			'Vision : Maintaining MDRT Accolade and Value Add to My Clients in Their Financial Roadmaps\n\nMission : I am committed to empower and guide my clients to help them achieve their financial goals.\n\nTagline : Assisting The Right Clients At The Right Time Using The Right Financial Tool To Reach Their Financial Goals.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1268',
			masRnfNumber: 'CL-300102938',
			obtained: '14 Nov 2009',
			expiry: '13 Nov 2018'
		}
	},
	{
		name: 'Stanley Soo, CFP®',
		image: 'stanley-soo.png',
		bio: "A trusted and go-to financial adviser for my clients for the past 10 years. I have been working in the financial services industry since I graduated from my Bachelor's Degree programme. Having various experiences from front-office to middle-office positions within this space has enriched me with valuable insights when I speak with my clients & associates.",
		industry: '',
		experience: '',
		specialisation: [],
		lastUpdate: '',
		fullBio:
			"A trusted and go-to financial adviser for my clients for the past 10 years. I have been working in the financial services industry since I graduated from my Bachelor's Degree programme. Having various experiences from front-office to middle-office positions within this space has enriched me with valuable insights when I speak with my clients & associates.",
		companyDetails: {
			jobTitle: 'Financial Adviser',
			companyName: 'Providend Ltd',
			officeAddress: '10 Anson Road #37-15 International Plaza Singapore 079903'
		},
		certification: {
			cfpLicenceNo: '2213',
			masRnfNumber: 'SS-300327409',
			obtained: '19 Feb 2017',
			expiry: '18 Feb 2026'
		}
	},
	{
		name: 'Yvonne Lim Zhiwen',
		image: 'yvonne-lim-zhiwen.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '18-05-2026',
		fullBio:
			'Yvonne works with individuals and families to build structured financial plans that adapt as their needs evolve over time.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2044',
			masRnfNumber: 'YL-300292765',
			obtained: '11 Apr 2015',
			expiry: '10 Apr 2024'
		}
	},
	{
		name: 'Daniel Tan YN',
		image: 'daniel-tan-yn.png',
		bio: 'Daniel has a wealth of knowledge and experience dating back to 1997. His advice is sought after by Professionals, Senior Executives and Entrepreneurs. He specializes in legacy creation for distinguished individuals and business succession.',
		industry: 'Financial Advisory',
		experience: '20+ years',
		specialisation: [
			'Investment Planning',
			'Estate Planning',
			'Retirement Planning',
			'Keyperson Insurance',
			'Management',
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative',
			'Education'
		],
		lastUpdate: '16-05-2026',
		fullBio:
			'Daniel has a wealth of knowledge and experience dating back to 1997. His advice is sought after by Professionals, Senior Executives and Entrepreneurs. He specializes in legacy creation for distinguished individuals and business succession.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '842',
			masRnfNumber: 'DT-300031856',
			obtained: '09 Mar 1998',
			expiry: '08 Mar 2007'
		}
	},
	{
		name: 'Michele Tay',
		image: 'michele-tay.png',
		bio: 'I am in this career because I enjoy working with people in helping them create awareness of financial planning gaps and how to make informed decisions in terms of their available options. Most of my clients work with me to have their portfolio customised and every future discussion we have is to look at how we can enhanced it further.',
		industry: 'Financial Advisory',
		experience: '20+ years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative',
			'Estate Planning',
			'Education',
			'Finance',
			'Others'
		],
		lastUpdate: '16-05-2026',
		fullBio:
			'I am in this career because I enjoy working with people in helping them create awareness of financial planning gaps and how to make informed decisions in terms of their available options. Most of my clients work with me to have their portfolio customised and every future discussion we have is to look at how we can enhanced it further.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'Financial Alliance',
			officeAddress: '10 Ubi Crescent #06-95 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '855',
			masRnfNumber: 'MT-300034219',
			obtained: '22 Apr 1998',
			expiry: '21 Apr 2007'
		}
	},
	{
		name: 'Fong Mei Leng',
		image: 'fong-mei-leng.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '16-05-2026',
		fullBio:
			'Mei Leng works with young professionals and new families to help them build their first financial plans with clarity and confidence.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2489',
			masRnfNumber: 'FM-300384108',
			obtained: '28 Oct 2019',
			expiry: '27 Oct 2028'
		}
	},
	{
		name: 'Leo Chee Meng',
		image: 'leo-chee-meng.png',
		bio: "Today you do what others won't, so Tomorrow you can accomplish what other can't.",
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)', 'Financial Advisory Representative'],
		lastUpdate: '02-05-2026',
		fullBio:
			"Today you do what others won't, so Tomorrow you can accomplish what other can't.",
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1218',
			masRnfNumber: 'LC-300097652',
			obtained: '06 Oct 2009',
			expiry: '05 Oct 2018'
		}
	},
	{
		name: 'Valerie Ng',
		image: 'valerie-ng.png',
		bio: 'I am a qualified and licensed financial planning professional with more than 25 years of working experience in the banking, insurance, stockbroking and IFA sectors.  I specialize in providing high quality face-to-face financial planning advice to individuals, families, trustees and businesses.  I am passionate about helping clients achieve their financial independence and help ensure their wealth lasts for generations.',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: [
			'Financial Advisory Representative',
			'Estate Planning',
			'Education',
			'Insurance Agent (Life)',
			'Insurance Agent (General)'
		],
		lastUpdate: '23-04-2026',
		fullBio:
			'I am a qualified and licensed financial planning professional with more than 25 years of working experience in the banking, insurance, stockbroking and IFA sectors.  I specialize in providing high quality face-to-face financial planning advice to individuals, families, trustees and businesses.  I am passionate about helping clients achieve their financial independence and help ensure their wealth lasts for generations.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '701',
			masRnfNumber: 'VN-300019427',
			obtained: '15 Jun 1999',
			expiry: '14 Jun 2008'
		}
	},
	{
		name: 'Yong Qi Long',
		image: 'yong-qi-long.png',
		bio: 'Helping busy working professionals to Achieve Financial Freedom & Peace of Mind',
		industry: 'Insurance',
		experience: '4-7 years',
		specialisation: ['Insurance Agent (Life)', 'Estate Planning'],
		lastUpdate: '22-04-2026',
		fullBio:
			'Helping busy working professionals to Achieve Financial Freedom & Peace of Mind',
		companyDetails: {
			jobTitle: 'Financial Services Consultant',
			companyName: 'Great Eastern Life Assurance',
			officeAddress: '1 Pickering Street #09-01 Great Eastern Centre Singapore 048659'
		},
		certification: {
			cfpLicenceNo: '2455',
			masRnfNumber: 'YQ-300377892',
			obtained: '19 Sep 2019',
			expiry: '18 Sep 2028'
		}
	},
	{
		name: 'Cassandra Wee',
		image: 'cassandra-wee.png',
		bio: 'A highly qualified and experienced professional who takes pride in striving for excellence. A leader with the capability to take a vision and turn it into reality by effectively navigating organizational complexity and learning quickly.',
		industry: 'Others',
		experience: '12-15 years',
		specialisation: ['Management'],
		lastUpdate: '22-04-2026',
		fullBio:
			'A highly qualified and experienced professional who takes pride in striving for excellence. A leader with the capability to take a vision and turn it into reality by effectively navigating organizational complexity and learning quickly.',
		companyDetails: {
			jobTitle: 'Management Consultant',
			companyName: 'JLC Management Consultancy',
			officeAddress: '30 Cecil Street #19-08 Prudential Tower Singapore 049712'
		},
		certification: {
			cfpLicenceNo: '2179',
			masRnfNumber: 'CW-300319214',
			obtained: '02 Dec 2016',
			expiry: '01 Dec 2025'
		}
	},
	{
		name: 'Jacqueline Lum Yin Ling',
		image: 'jacqueline-lum-yin-ling.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: ['Estate Planning', 'Insurance Agent (Life)'],
		lastUpdate: '21-04-2026',
		fullBio:
			'Jacqueline brings over 16 years of experience helping clients build estate plans and life insurance protection strategies suited to their family needs.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'Financial Alliance',
			officeAddress: '10 Ubi Crescent #06-95 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1256',
			masRnfNumber: 'JL-300101427',
			obtained: '01 Nov 2009',
			expiry: '31 Oct 2018'
		}
	},
	{
		name: 'PHILIP CHAN',
		image: 'philip-chan.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '15-04-2026',
		fullBio:
			'Philip has over 16 years of experience helping clients build comprehensive financial advisory plans suited to their long-term goals.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1189',
			masRnfNumber: 'PC-300091023',
			obtained: '17 Aug 2009',
			expiry: '16 Aug 2018'
		}
	},
	{
		name: 'Sheron Tan Si Rong',
		image: 'sheron-tan-si-rong.png',
		bio: '',
		industry: 'Insurance',
		experience: '12-15 years',
		specialisation: ['Insurance Agent (Life)', 'Estate Planning'],
		lastUpdate: '14-04-2026',
		fullBio:
			'Sheron has spent over a decade helping clients build life insurance protection and estate planning strategies tailored to their family situations.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1723',
			masRnfNumber: 'ST-300207134',
			obtained: '09 Aug 2013',
			expiry: '08 Aug 2022'
		}
	},
	{
		name: 'Kenneth Walter De Souza',
		image: 'kenneth-walter-de-souza.png',
		bio: 'Experienced Estate Planner helping HNW and UHNW with their Wealth Distribution Planning focusing on Family Harmony and Wealth Preservation',
		industry: 'Insurance',
		experience: '8-11 years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Estate Planning'
		],
		lastUpdate: '14-04-2026',
		fullBio:
			'Experienced Estate Planner helping HNW and UHNW with their Wealth Distribution Planning focusing on Family Harmony and Wealth Preservation',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2156',
			masRnfNumber: 'KD-300315482',
			obtained: '19 Oct 2016',
			expiry: '18 Oct 2025'
		}
	},
	{
		name: 'Tan Huimin',
		image: 'tan-huimin.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: [],
		lastUpdate: '10-04-2026',
		fullBio:
			'Huimin works with individuals and families to build practical, well-rounded financial advisory plans.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2145',
			masRnfNumber: 'TH-300312876',
			obtained: '02 Oct 2016',
			expiry: '01 Oct 2025'
		}
	},
	{
		name: 'Chew Bee Hong Shirlly',
		image: 'chew-bee-hong-shirlly.png',
		bio: '',
		industry: 'Insurance',
		experience: '8-11 years',
		specialisation: ['Insurance Agent (Life)', 'Insurance Agent (General)'],
		lastUpdate: '09-04-2026',
		fullBio:
			'Shirlly has spent close to a decade helping clients build well-rounded life and general insurance protection plans.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2098',
			masRnfNumber: 'CB-300298012',
			obtained: '13 May 2015',
			expiry: '12 May 2024'
		}
	},
	{
		name: 'Lee Rong Tzuu, CFP®, ChFC®/S, AEPP®, CLU®/S',
		image: 'lee-rong-tzuu.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16-20 years',
		specialisation: ['Financial Advisory Representative', 'Estate Planning'],
		lastUpdate: '08-04-2026',
		fullBio:
			'Rong Tzuu brings close to two decades of experience helping clients build comprehensive financial advisory plans with a strong focus on estate planning.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1201',
			masRnfNumber: 'LR-300093548',
			obtained: '14 Sep 2009',
			expiry: '13 Sep 2018'
		}
	},
	{
		name: 'Siew Wei Ong',
		image: 'siew-wei-ong.png',
		bio: 'Financial planner with 15+ years of experience in risk management and investments. Helping families protect what matters, grow what lasts.',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative',
			'Education',
			'Estate Planning'
		],
		lastUpdate: '08-04-2026',
		fullBio:
			'Financial planner with 15+ years of experience in risk management and investments. Helping families protect what matters, grow what lasts.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1198',
			masRnfNumber: 'SO-300092817',
			obtained: '10 Sep 2009',
			expiry: '09 Sep 2018'
		}
	},
	{
		name: 'Seah Kah Yi William',
		image: 'seah-kah-yi-william.png',
		bio: 'As a teacher turned Financial Consultant, I help make your dreams a reality, to live your life on your terms.',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '07-04-2026',
		fullBio:
			'As a teacher turned Financial Consultant, I help make your dreams a reality, to live your life on your terms.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2167',
			masRnfNumber: 'SW-300316734',
			obtained: '24 Oct 2016',
			expiry: '23 Oct 2025'
		}
	},
	{
		name: 'Suan Pek',
		image: 'suan-pek.png',
		bio: 'Graduated from the National University of Singapore with Second Upper Honors in Sociology, I joined the Banking and Finance Industry in 2006 - mainly involving in segment marketing, investment related trainings, and conceptualizing of business strategies for the High Net Worth platform. In 2009, I decided to move on from middle to front office; joining Great Eastern Life under the mentorship of Colin Ong Lian Jin; Senior Executive Director, founder of Advisors Clique. I am currently with Great Eastern Financial Advisers - a segment of advisors within the OCBC group structure serving the Mass Affluent and High Net Worth customers in Singapore. Areas of proficiency includes Risk Planning, Retirement Planning and Estate Planning.',
		industry: 'Insurance',
		experience: '8-11 years',
		specialisation: ['Others'],
		lastUpdate: '30-03-2026',
		fullBio:
			'Graduated from the National University of Singapore with Second Upper Honors in Sociology, I joined the Banking and Finance Industry in 2006 - mainly involving in segment marketing, investment related trainings, and conceptualizing of business strategies for the High Net Worth platform. In 2009, I decided to move on from middle to front office; joining Great Eastern Life under the mentorship of Colin Ong Lian Jin; Senior Executive Director, founder of Advisors Clique. I am currently with Great Eastern Financial Advisers - a segment of advisors within the OCBC group structure serving the Mass Affluent and High Net Worth customers in Singapore. Areas of proficiency includes Risk Planning, Retirement Planning and Estate Planning.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'Great Eastern Financial Advisers',
			officeAddress: '1 Gateway Drive #18-F Westgate Tower Singapore 608531'
		},
		certification: {
			cfpLicenceNo: '2189',
			masRnfNumber: 'SP-300321974',
			obtained: '13 Dec 2016',
			expiry: '12 Dec 2025'
		}
	},
	{
		name: 'Lim May Yen',
		image: 'lim-may-yen.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '8-11 years',
		specialisation: ['Financial Advisory Representative', 'Insurance Agent (Life)', 'Insurance Agent (General)'],
		lastUpdate: '28-03-2026',
		fullBio:
			'May Yen works with clients across financial advisory and insurance needs, helping them build well-rounded, adaptable financial plans.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2134',
			masRnfNumber: 'LM-300310652',
			obtained: '15 Sep 2016',
			expiry: '14 Sep 2025'
		}
	},
	{
		name: 'Ming Thim Chow',
		image: 'ming-thim-chow.png',
		bio: '',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Insurance Agent (Life)'],
		lastUpdate: '26-03-2026',
		fullBio:
			'Ming Thim has over 16 years of experience helping clients build life insurance protection plans suited to their long-term needs.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1152',
			masRnfNumber: 'MC-300081239',
			obtained: '05 Jan 2009',
			expiry: '04 Jan 2018'
		}
	},
	{
		name: 'Joseph Kwok',
		image: 'joseph-kwok.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: ['Management', 'Investment Planning', 'Others', 'Banking'],
		lastUpdate: '23-03-2026',
		fullBio:
			'Joseph brings over 16 years of experience across management, investment planning, and banking, helping clients build well-rounded financial strategies.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '1176',
			masRnfNumber: 'JK-300088471',
			obtained: '02 Jul 2009',
			expiry: '01 Jul 2018'
		}
	},
	{
		name: 'Huiwen Huang',
		image: 'huiwen-huang.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: ['Financial Advisory Representative'],
		lastUpdate: '19-03-2026',
		fullBio:
			'Huiwen works with young professionals and new families to help them build their first structured financial plans.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2412',
			masRnfNumber: 'HH-300370185',
			obtained: '25 Jun 2019',
			expiry: '24 Jun 2028'
		}
	},
	{
		name: 'Dicky Ong',
		image: 'dicky-ong.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: [
			'Risk Management',
			'Investment Planning',
			'Retirement Planning',
			'Corporate General Insurance',
			'Financial Advisory Representative'
		],
		lastUpdate: '16-03-2026',
		fullBio:
			'Dicky has over 16 years of experience across risk management, investment, and retirement planning, helping clients build comprehensive financial strategies.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1176',
			masRnfNumber: 'DO-300088652',
			obtained: '07 Jul 2009',
			expiry: '06 Jul 2018'
		}
	},
	{
		name: 'Michael Davidson',
		image: 'michael-davidson.png',
		bio: '',
		industry: '',
		experience: '',
		specialisation: [],
		lastUpdate: '10-03-2026',
		fullBio:
			'Michael brings a client-first approach to financial planning, helping individuals navigate their financial journey with clarity and confidence.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2078',
			masRnfNumber: 'MD-300295417',
			obtained: '01 Sep 2015',
			expiry: '31 Aug 2024'
		}
	},
	{
		name: 'Tan Kim Huat',
		image: 'tan-kim-huat.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '16+ years',
		specialisation: [
			'Financial Advisory Representative',
			'Estate Planning',
			'Management'
		],
		lastUpdate: '28-02-2026',
		fullBio:
			'Kim Huat has over 16 years of experience helping clients build comprehensive financial advisory plans with a strong focus on estate planning and management.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '1156',
			masRnfNumber: 'TK-300082147',
			obtained: '12 Jan 2009',
			expiry: '11 Jan 2018'
		}
	},
	{
		name: 'Yee Shen Hao',
		image: 'yee-shen-hao.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '4-7 years',
		specialisation: [
			'Finance',
			'Education',
			'Corporate Services',
			'Estate Planning',
			'Financial Advisory Representative'
		],
		lastUpdate: '21-02-2026',
		fullBio:
			'Shen Hao works with clients across finance, education, and corporate services needs, helping them build well-rounded financial advisory plans.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '2401',
			masRnfNumber: 'YS-300368107',
			obtained: '18 Jun 2019',
			expiry: '17 Jun 2028'
		}
	},
	{
		name: 'Lee Chung Ann',
		image: 'lee-chung-ann.png',
		bio: 'Senior Wealth Planning Specialist with over 25 years of advisory experience since 1998, specialising in retirement planning, wealth preservation, and legacy transfer for high-net-worth individuals.\n\nTrusted for strategic, results-driven financial solutions that safeguard and grow multi-generational wealth. Fluent in English and Mandarin. MDRT (2026).',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Estate Planning', 'Insurance Agent (Life)', 'Financial Advisory Representative'],
		lastUpdate: '21-02-2026',
		fullBio:
			'Senior Wealth Planning Specialist with over 25 years of advisory experience since 1998, specialising in retirement planning, wealth preservation, and legacy transfer for high-net-worth individuals.\n\nTrusted for strategic, results-driven financial solutions that safeguard and grow multi-generational wealth. Fluent in English and Mandarin. MDRT (2026).',
		companyDetails: {
			jobTitle: 'Senior Wealth Planning Specialist',
			companyName: 'Great Eastern Financial Advisers',
			officeAddress: '1 Gateway Drive #18-F Westgate Tower Singapore 608531'
		},
		certification: {
			cfpLicenceNo: '412',
			masRnfNumber: 'LC-300003821',
			obtained: '02 Jun 1998',
			expiry: '01 Jun 2007'
		}
	},
	{
		name: 'Yu Sheng Damien Tan',
		image: 'yu-sheng-damien-tan.png',
		bio: '',
		industry: 'Insurance',
		experience: '12-15 years',
		specialisation: [
			'Insurance Agent (Life)',
			'Insurance Agent (General)',
			'Financial Advisory Representative',
			'Estate Planning'
		],
		lastUpdate: '15-02-2026',
		fullBio:
			'Damien has spent over a decade helping clients build well-rounded life and general insurance protection plans alongside estate planning strategies.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '1745',
			masRnfNumber: 'YD-300211058',
			obtained: '06 Oct 2013',
			expiry: '05 Oct 2022'
		}
	},
	{
		name: 'Lim Jui Seck',
		image: 'lim-jui-seck.png',
		bio: 'Mr Lim Jui Seck has been in the Financial Planning Services for more than 20 years. He was qualified as a Certified Financial Planner (CFP) with the Financial Planning Association of Singapore (FPAS) since May 2004. He had been offering a One-Stop Financial Planning Service for more than 15 years, covering Insurance Planning, both Life & General, Investment Planning, Retirement Planning and Estate Planning. Since 2015 he focused only on Estate Planning Services, advising and helping clients to do their Estate Plans. These cover a range of legal documents, depending on the situation and needs of his clients, could include Wills, Lasting Power of Attorney (LPA), Trusts, Special Need Trust, CPF Nomination, Insurance Nomination and Advance Medical Directive (AMD). He knows the importance and urgency for every adult to do their Estate Planning and is convicted that more people and families will be benefited through public Educational Talks on these topics. Hence, he has volunteered to conduct such talks on pro bono basis, to both commercial and non-profit organizations, including Community Clubs in Singapore since late 2017. During the Covid-19 pandemic in 2020, he conducted webinars on Estate Planning topics for the People\'s Association and an insurance company. He also written a book on "Estate Planning and You" which is published in Oct 2020 and is available in all Kinokuniya and Popular bookstores in Singapore.',
		industry: 'Others',
		experience: '16+ years',
		specialisation: ['Estate Planning'],
		lastUpdate: '12-02-2026',
		fullBio:
			'Mr Lim Jui Seck has been in the Financial Planning Services for more than 20 years. He was qualified as a Certified Financial Planner (CFP) with the Financial Planning Association of Singapore (FPAS) since May 2004. He had been offering a One-Stop Financial Planning Service for more than 15 years, covering Insurance Planning, both Life & General, Investment Planning, Retirement Planning and Estate Planning. Since 2015 he focused only on Estate Planning Services, advising and helping clients to do their Estate Plans. These cover a range of legal documents, depending on the situation and needs of his clients, could include Wills, Lasting Power of Attorney (LPA), Trusts, Special Need Trust, CPF Nomination, Insurance Nomination and Advance Medical Directive (AMD). He knows the importance and urgency for every adult to do their Estate Planning and is convicted that more people and families will be benefited through public Educational Talks on these topics. Hence, he has volunteered to conduct such talks on pro bono basis, to both commercial and non-profit organizations, including Community Clubs in Singapore since late 2017. During the Covid-19 pandemic in 2020, he conducted webinars on Estate Planning topics for the People\'s Association and an insurance company. He also written a book on "Estate Planning and You" which is published in Oct 2020 and is available in all Kinokuniya and Popular bookstores in Singapore.',
		companyDetails: {
			jobTitle: 'Estate Planning Consultant',
			companyName: 'Independent Estate Planning Practice',
			officeAddress: '30 Cecil Street #19-08 Prudential Tower Singapore 049712'
		},
		certification: {
			cfpLicenceNo: '198',
			masRnfNumber: 'LJ-300004215',
			obtained: '11 May 2004',
			expiry: '10 May 2013'
		}
	},
	{
		name: 'Chan Hwee Ling',
		image: 'chan-hwee-ling.png',
		bio: 'By placing my clients needs at the center of what I do, I ensure all that is important to them stays protected.',
		industry: 'Insurance',
		experience: '8-11 years',
		specialisation: ['Estate Planning'],
		lastUpdate: '11-02-2026',
		fullBio:
			'By placing my clients needs at the center of what I do, I ensure all that is important to them stays protected.',
		companyDetails: {
			jobTitle: 'Senior Insurance Consultant',
			companyName: 'AIA Singapore',
			officeAddress: '1 Robinson Road AIA Tower Singapore 048542'
		},
		certification: {
			cfpLicenceNo: '2178',
			masRnfNumber: 'CH-300318741',
			obtained: '28 Nov 2016',
			expiry: '27 Nov 2025'
		}
	},
	{
		name: 'Shamsul Hadi Jangarodin',
		image: 'shamsul-hadi-jangarodin.png',
		bio: 'Empowering individuals and families to achieve financial peace of mind through tailored solutions rooted in Islamic finance principles. Specializing in legacy planning, I provide expert guidance to help you secure your wealth, fulfil your financial obligations, and create a lasting impact for future generations. Lets work together to ensure your financial goals align with your values and aspirations.',
		industry: 'Others',
		experience: '8-11 years',
		specialisation: ['Estate Planning', 'Management', 'Corporate Services', 'Others'],
		lastUpdate: '11-02-2026',
		fullBio:
			'Empowering individuals and families to achieve financial peace of mind through tailored solutions rooted in Islamic finance principles. Specializing in legacy planning, I provide expert guidance to help you secure your wealth, fulfil your financial obligations, and create a lasting impact for future generations. Lets work together to ensure your financial goals align with your values and aspirations.',
		companyDetails: {
			jobTitle: 'Financial Consultant',
			companyName: 'JLC Management Consultancy',
			officeAddress: '30 Cecil Street #19-08 Prudential Tower Singapore 049712'
		},
		certification: {
			cfpLicenceNo: '2145',
			masRnfNumber: 'SH-300312478',
			obtained: '29 Sep 2016',
			expiry: '28 Sep 2025'
		}
	},
	{
		name: 'Abe Kwok Jin Wei',
		image: 'abe-kwok-jin-wei.png',
		bio: 'Currently employed as Head of Wealth Management in a national bank in Macau. I have more than 15 years of wealth management experience. From a private banker in Macau to a Ultra High Net Worth client financial advisor in Singapore, assisting clients to reaching their personal financial goal is my profession which I am very proud of.',
		industry: 'Banking',
		experience: '12-15 years',
		specialisation: ['Management', 'Insurance Agent (Life)', 'Insurance Agent (General)', 'Banking'],
		lastUpdate: '10-02-2026',
		fullBio:
			'Currently employed as Head of Wealth Management in a national bank in Macau. I have more than 15 years of wealth management experience. From a private banker in Macau to a Ultra High Net Worth client financial advisor in Singapore, assisting clients to reaching their personal financial goal is my profession which I am very proud of.',
		companyDetails: {
			jobTitle: 'Head of Wealth Management',
			companyName: 'DBS Private Bank',
			officeAddress: '12 Marina Boulevard #44-01 DBS Asia Central Singapore 018982'
		},
		certification: {
			cfpLicenceNo: '1698',
			masRnfNumber: 'AK-300207658',
			obtained: '02 Aug 2013',
			expiry: '01 Aug 2022'
		}
	},
	{
		name: 'JOANNA KOH HL',
		image: 'joanna-koh-hl.png',
		bio: '',
		industry: 'Financial Advisory',
		experience: '12-15 years',
		specialisation: [
			'Risk Management',
			'Investment Planning',
			'Estate Planning',
			'Retirement Planning',
			'Financial Advisory Representative'
		],
		lastUpdate: '05-02-2026',
		fullBio:
			'Joanna has over a decade of experience across risk management, investment, and retirement planning, helping clients build comprehensive financial strategies.',
		companyDetails: {
			jobTitle: 'Senior Financial Consultant',
			companyName: 'PIAS (Professional Investment Advisory Services)',
			officeAddress: '10 Ubi Crescent #05-05 Ubi Techpark Singapore 408564'
		},
		certification: {
			cfpLicenceNo: '1712',
			masRnfNumber: 'JK-300205734',
			obtained: '24 Jul 2013',
			expiry: '23 Jul 2022'
		}
	},
	{
		name: 'Nicholas Tay',
		image: 'nicholas-tay.png',
		bio: 'For the last 23 years, Nicholas has been instrumental to many of his financial consultants in achieving extraordinary success in the financial services industry. Motivated to achieve financial inde',
		industry: 'Insurance',
		experience: '16+ years',
		specialisation: ['Management', 'Employee benefit'],
		lastUpdate: '04-02-2026',
		fullBio:
			'For the last 23 years, Nicholas has been instrumental to many of his financial consultants in achieving extraordinary success in the financial services industry. Motivated to achieve financial independence for himself and his team, he brings deep leadership and management expertise to every client relationship.',
		companyDetails: {
			jobTitle: 'Senior Financial Services Director',
			companyName: 'IPP Financial Advisers',
			officeAddress: '78 Shenton Way #22-01 Singapore 079120'
		},
		certification: {
			cfpLicenceNo: '378',
			masRnfNumber: 'NT-300002891',
			obtained: '19 Feb 2003',
			expiry: '18 Feb 2012'
		}
	},
	{
		name: 'Eliss Chen',
		image: 'eliss-chen.png',
		bio: '',
		industry: 'Others',
		experience: '16+ years',
		specialisation: ['Estate Planning'],
		lastUpdate: '03-02-2026',
		fullBio:
			'Eliss has over 16 years of experience helping clients build comprehensive estate planning strategies suited to their family situations.',
		companyDetails: {
			jobTitle: 'Estate Planning Consultant',
			companyName: 'JLC Management Consultancy',
			officeAddress: '30 Cecil Street #19-08 Prudential Tower Singapore 049712'
		},
		certification: {
			cfpLicenceNo: '1189',
			masRnfNumber: 'EC-300091456',
			obtained: '20 Aug 2009',
			expiry: '19 Aug 2018'
		}
	}
];

export const planners = rawPlanners.map((p) => ({ ...p, slug: slugify(p.name) }));