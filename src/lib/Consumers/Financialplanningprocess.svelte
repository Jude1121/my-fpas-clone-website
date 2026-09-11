<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/consumers/
	import FinancialPlanningWheel from '$lib/assets/consumers/financial-planning-process-wheel.png';

	type Section = {
		number: number;
		heading: string;
		paragraphs: string[];
	};

	const sections: Section[] = [
		{
			number: 1,
			heading: 'Establish and define the relationship with the client.',
			paragraphs: [
				"The financial planning professional informs the client about the financial planning process, the services the financial planning professional offers, and the financial planning professional's competencies and experience.",
				"The financial planning professional and the client mutually determine whether the services offered by the financial planning professional, together with the professional's competencies and experience, support the financial planning professional providing the services requested or likely to be required by the client. The financial planning professional determines if there are any conflict(s) of interest and discloses them to the client.",
				'The financial planning professional and the client mutually agree on the services to be provided during the financial planning engagement. The financial planning professional sets out in writing the agreed scope of the financial planning engagement before providing any services to the client, including details about: the responsibilities of each party (including third parties); the terms of the financial planning engagement; and compensation and conflict(s) of interest of the financial planning professional. The written scope of the financial planning engagement is signed by both parties, or accepted in writing by the client, and includes a process for either party to terminate the financial planning engagement.'
			]
		},
		{
			number: 2,
			heading: "Collect the client's information.",
			paragraphs: [
				"The financial planning professional and the client identify and confirm the client's stated personal goals. The financial planning professional confirms with the client that the likely effort needed to support the client in achieving those goals falls within the scope of the financial planning engagement.",
				'The financial planning professional collects sufficient quantitative information about the client, and documents from the client relevant to the scope of the financial planning engagement, before making and/or implementing any financial planning recommendations.',
				"The financial planning professional collects sufficient qualitative information about the client relevant to the scope of the financial planning engagement to understand how the client's values, attitudes, expectations and financial experiences / literacy might impact financial planning recommendations or the client's financial decision-making."
			]
		},
		{
			number: 3,
			heading: "Analyze and assess the client's financial status.",
			paragraphs: [
				"The financial planning professional assesses how the client's current financial situation supports the client's ability to achieve financial objectives and stated personal goals, and identifies additional financial resources needed by the client, if any."
			]
		},
		{
			number: 4,
			heading: 'Develop the financial planning recommendations and present them to the client.',
			paragraphs: [
				"The financial planning professional considers one or more strategies relevant to the client's current situation that could reasonably meet the client's objectives, needs and priorities; develops the financial planning recommendations based on the selected strategies to reasonably meet the client's confirmed objectives, needs and priorities; and presents the financial planning recommendations and the supporting rationale in a way that allows the client to make an informed decision.",
				"The financial planning professional assesses the opportunities, and identifies constraints and risks presented by the client's financial situation and current course(s) of action, that may impact the client's ability to achieve a financial objective and stated personal goal. This includes assessing the client's ability, willingness or likelihood to respond to unexpected personal and financial events.",
				"The financial planning professional and client consider one or more strategies relevant to the client's current situation that could reasonably meet the client's financial objectives and stated personal goals.",
				'The financial planning professional identifies any financial objective that is not feasible or any short, mid or long-term stated personal goal(s) that does not appear to be realistic and discusses with the client how the stated personal goal(s) may need to be modified or abandoned.',
				"The financial planning professional develops financial planning recommendations to reasonably meet the client's financial objectives and stated personal goals, taking into account the client's current situation, course(s) of action and selected strategies.",
				"The financial planning professional presents the financial planning recommendations, and supporting rationales, in a way that allows the client to make an informed decision on whether the strategies will support achieving the client's financial objectives and stated personal goals.",
				"The financial planning professional discusses with the client the information, factors and assumptions that have been used to develop the financial planning recommendations and how the information, factors and assumptions could impact the client's ability to reach financial objectives and stated personal goals.",
				'The financial planning professional incorporates feedback from the client by mutually agreeing with the client on the type and scale of modifications to the financial planning recommendations, which could include the financial planning professional revising or re-prioritizing the client\'s financial objectives or stated personal goals, or revising the scope of the financial planning engagement.',
				"The financial planning professional informs the client that future changes in personal conditions or economic, political, or regulatory environments may affect financial planning recommendations, and gains the client's support to review the client's situation and financial planning recommendations on an ongoing basis, and to modify recommendations as required."
			]
		},
		{
			number: 5,
			heading: 'Implementing and Financial planning recommendations.',
			paragraphs: [
				'The financial planning professional and the client mutually agree on the financial planning recommendations and their prioritization, and on implementation responsibilities that are consistent with the scope of the financial planning engagement, which includes the financial planning professional\'s ability to implement, or direct the implementation of, the financial planning recommendations.',
				'The financial planning professional identifies and presents appropriate products or services to implement the financial planning recommendations.'
			]
		},
		{
			number: 6,
			heading: "Review the client's situation.",
			paragraphs: [
				"The financial planning professional and client mutually define and agree on terms for the future review and evaluation of the client's situation, including financial objectives and stated personal goals, personal risk profile, lifestyle and other relevant factors, and the client's progress toward achieving stated personal goals.",
				"The financial planning professional and the client mutually agree on whether, when and how to update the financial planning recommendations, based on changes in the client's situation, financial objectives or stated personal goals, or in the economic, political or regulatory environment."
			]
		}
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-5xl">
		<h1 class="text-2xl md:text-3xl font-extrabold text-[#0b2f6b] mb-6">Financial Planning Process:</h1>

		<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify mb-10">
			FPSB's Financial Planning Process is a collaborative, iterative approach that financial
			planning professionals use to consider all aspects of a client's financial situation when
			formulating financial planning strategies and making recommendations.
		</p>

		<h2 class="text-center text-base md:text-xl font-extrabold text-[#0b2f6b] mb-10">
			The Financial Planning Process Consists Of The Following Six Elements:
		</h2>

		<!-- Wheel diagram -->
		<div class="flex justify-center mb-16">
			<img
				src={FinancialPlanningWheel}
				alt="Financial Planning Process wheel diagram: Establish, Collect, Analyze, Develop, Implement, Review"
				class="w-full max-w-lg h-auto"
			/>
		</div>

		<!-- Numbered sections with connecting dashed line -->
		<div class="relative pl-8 max-w-xl mx-auto">
			<div class="absolute left-0 top-1 bottom-1 border-l border-dashed border-gray-300"></div>

			<div class="flex flex-col gap-10">
				{#each sections as section (section.number)}
					<div>
						<h3 class="text-lg font-extrabold text-[#0b2f6b] mb-3">
							{section.number}. {section.heading}
						</h3>
						<div class="flex flex-col gap-4">
							{#each section.paragraphs as paragraph (paragraph)}
								<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify">{paragraph}</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>