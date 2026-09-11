<script lang="ts">
	import ImgWomanReading from '$lib/assets/boards/certification-board.svg';
	import ImgManPhone from '$lib/assets/boards/marketing-board.svg';
	import ImgTwoWomen from '$lib/assets/boards/standards-board.svg';
	import ImgMeetingOverhead from '$lib/assets/boards/finance-board.svg';
	import ImgHandsDocuments from '$lib/assets/consumers/hands-with-documents.svg';
	import ImgHandsTyping from '$lib/assets/consumers/hands-typing.svg';

	type Row = {
		image: string;
		alt: string;
		imageSide: 'left' | 'right';
		title: string;
		paragraphs?: string[];
		checklist?: string[];
		boldLead?: string;
	};

	const rows: Row[] = [
		{
			image: ImgWomanReading,
			alt: 'Woman reviewing financial documents',
			imageSide: 'right',
			title: 'What You Should Know About Financial Planning',
			paragraphs: [
				'You may have come across the term BOLD_LEAD recently and wondered what it means. You may have decided to start your own financial plan but you\'re not sure how. Or you may feel it\'s time you went to a financial planner for some professional advice. Whatever your situation, the following information can help you decide what\'s right for you.'
			],
			boldLead: '"financial planning"'
		},
		{
			image: ImgManPhone,
			alt: 'Man on a phone call in an office',
			imageSide: 'left',
			title: 'What is Financial Planning?',
			paragraphs: [
				'Financial planning is the process of meeting your life goals through the proper management of your finances. It is a process that consists of specific steps that help you ascertain your financial condition objectively.',
				'The financial planning process consists of six steps that help you take a big picture, look at where you are financially. Using these six steps, you can work out where you are now, what you may need in the future and what you must do to reach your goals.',
				'The process involves gathering relevant information, setting life goals, examining your current financial status and coming up with a strategy or plan on how you can meet your current situation and future plans.'
			]
		},
		{
			image: ImgTwoWomen,
			alt: 'Two colleagues reviewing a financial plan together',
			imageSide: 'right',
			title: 'The Benefits of Financial Planning',
			paragraphs: [
				'Financial planning should provide direction and meaning to all your financial decisions. By viewing each financial decision as part of a whole, you can consider its short and long term effects on your life goals. You can therefore adapt more easily to life changes and feel more secure that your goals are on track.'
			]
		},
		{
			image: ImgMeetingOverhead,
			alt: 'Overhead view of a team meeting around a table',
			imageSide: 'left',
			title: 'Can You Do Your Own Financial Planning?',
			paragraphs: [
				'Some personal finance software packages, magazines or self-help books can help you do your own financial planning. However, you may decide to seek help from a professional financial planner if:'
			],
			checklist: [
				"You need expertise you don't possess in certain areas of your finances. For example, a planner can help you evaluate the level of risk in your investment portfolio or adjust your retirement plan due to changing family circumstances.",
				'You want to get a professional opinion about the financial plan you developed for yourself.',
				"You don't feel you have the time to spare to do your own financial planning.",
				'You have an immediate need or unexpected life event such as a birth, inheritance or major illness.',
				'You feel that a professional adviser could help you improve on how you are currently managing your finances.',
				"You know that you need to improve your current financial situation but don't know where to start."
			]
		},
		{
			image: ImgHandsDocuments,
			alt: 'Hands exchanging financial documents',
			imageSide: 'right',
			title: 'What Is A Financial Planner?',
			paragraphs: [
				'A financial planner is someone who uses the financial planning process to help you figure out how to meet your life goals. The planner can take a "big picture" view of your financial situation and make financial planning recommendations that are right for you. The planner can look at all of your needs including budgeting and saving, taxes, investments, insurance and retirement planning. Or, the planner may work with you on a single financial issue but within the context of your overall situation. This big picture approach to your financial goals sets the planner apart from other financial advisers, who may have been trained to focus on a particular area of your financial life.'
			]
		},
		{
			image: ImgHandsTyping,
			alt: 'Hands typing on a laptop and pointing at documents',
			imageSide: 'left',
			title: "Be Sure You're Getting Financial Planning Advice",
			paragraphs: [
				'The government does not regulate financial planners as financial planners; instead, it regulates planners by the services they provide. For example, a planner who also provides securities transactions or advice is regulated as a stockbroker or investment adviser. As a result, the term "financial planner" may be used inaccurately. To be sure that you are getting financial planning advice, ask if the adviser follows the six elements of the financial planning process described below.'
			]
		}
	];
</script>

{#snippet decorativeAccents()}
	<div class="absolute -top-4 left-6 w-10 h-10 border border-gray-300 rounded-sm"></div>
	<div class="absolute -top-4 right-10 w-8 h-8 bg-[#0b2f6b] rounded-sm"></div>
	<div class="absolute -bottom-5 left-10 w-28 h-14 border border-[#c7d84a] rounded-sm"></div>
{/snippet}

{#snippet checkIcon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		class="w-5 h-5 shrink-0 text-[#8fc73e] mt-0.5"
		fill="none"
	>
		<rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.8" />
		<path
			d="M7 12.5l3 3 7-7.5"
			stroke="currentColor"
			stroke-width="1.8"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl flex flex-col gap-20 md:gap-24">
		{#each rows as row (row.title)}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<!-- Text block -->
				<div class="order-2 {row.imageSide === 'left' ? 'md:order-2' : 'md:order-1'}">
					<h2 class="text-2xl font-extrabold text-[#0b2f6b] mb-5 leading-snug">
						{row.title}
					</h2>

					{#if row.paragraphs}
						{#each row.paragraphs as paragraph, i (paragraph)}
							{#if row.boldLead && i === 0}
								<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify {row.checklist ? 'mb-4' : ''}">
									You may have come across the term <span class="font-bold text-[#1a1a1a]">{row.boldLead}</span>
									recently and wondered what it means. You may have decided to start your own financial
									plan but you're not sure how. Or you may feel it's time you went to a financial
									planner for some professional advice. Whatever your situation, the following
									information can help you decide what's right for you.
								</p>
							{:else}
								<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify {i < row.paragraphs.length - 1 ? 'mb-4' : ''} {row.checklist ? 'mb-4' : ''}">
									{paragraph}
								</p>
							{/if}
						{/each}
					{/if}

					{#if row.checklist}
						<ul class="flex flex-col gap-3">
							{#each row.checklist as item (item)}
								<li class="flex items-start gap-3">
									{@render checkIcon()}
									<span class="text-sm text-[#4a4a4a] leading-relaxed">{item}</span>
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<!-- Image block -->
				<div
					class="relative w-full max-w-md mx-auto order-1 {row.imageSide === 'left'
						? 'md:order-1 md:mr-0'
						: 'md:order-2 md:ml-auto'}"
				>
					{@render decorativeAccents()}
					<img src={row.image} alt={row.alt} class="relative w-full rounded-sm object-cover shadow-sm" />
				</div>
			</div>
		{/each}
	</div>
</section>