<script>
	/**
	 * Publication article: "A 2-part special talk conducted by
	 * Fortis Wills Pte Ltd and FPAS"
	 * Subtitle is bold, not underlined; body copy is flush-left
	 * with the title (no indent).
	 */
	let {
		eyebrow = 'PUBLICATION',
		title = 'A 2-part special talk conducted by Fortis Wills Pte Ltd and FPAS',
		subtitle = 'Strengthening Advisory Practice Through Estate Planning & Risk Awareness',
		paragraphs = [
			'About 20 participants huddled together for an afternoon of learning at Lifelong Learning Institute on 30 October 2025. Mr Patrick Tan, founder and CEO of Fortis Law Corporation and a Trust and Estate Practitioner (TEP) cautioned financial advisers against online will writing templates. Knowledge in different branches of law is in fact required, spanning real estate, life insurance and CPF amongst others.',
			'Participants were dished several statistics including health-adjusted life expectancy and the importance of LPA (Lasting Power of Attorney) and ACP (Advanced Care Planning) as one typically suffers declining health in the last eight to ten years before demise.',
			"Mr Galen Woo, CEO of FPAS and an accredited mediator by Singapore Mediation Centre (SMC) took over the baton and shared on various degrees of errors that financial planners can potentially be embroiled in. These progresses from 'mistake' to 'negligence' and 'misrepresentation', the last of which can potentially cost one's license under the Financial Advisers Act. Accusations of 'fraud' escalates the complaint into a criminal one. Galen shared that complaints generally falls under four categories namely life insurance, collective investment schemes, general insurance, and estate planning.- Galen emphasised that professional indemnity insurance (PII) coverage is based on the scope of work as defined by the financial planner's principal. As such, there may be situation where estate planning and referrals will not be covered, and financial planners need to tread carefully."
		]
	} = $props();
</script>

<article class="mx-auto max-w-4xl px-6 py-10">
	<p class="mb-2 text-sm font-bold tracking-wide text-blue-900">{eyebrow}</p>

	<h1 class="mb-6 text-3xl font-bold leading-snug text-blue-900 md:text-4xl">
		{title}
	</h1>

	<p class="mb-6 font-bold text-slate-800">{subtitle}</p>

	<div class="space-y-6 text-slate-800">
		{#each paragraphs as paragraph}
			<p class="leading-relaxed">{paragraph}</p>
		{/each}
	</div>
</article>