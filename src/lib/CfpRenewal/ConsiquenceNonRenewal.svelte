<script lang="ts">
	type FeeRow = {
		cert: string;
		certSup?: string;
		lapsed12: string;
		lapsed5: string;
		lapsedOver5: string;
	};

	const feeRows: FeeRow[] = [
		{
			cert: 'AFP®, AWPᶜᴹ',
			lapsed12: 'S$239.80*',
			lapsed5: 'S$370.60*',
			lapsedOver5: 'S$501.40*'
		},
		{
			cert: 'CFP®',
			lapsed12: 'S$359.70*',
			lapsed5: 'S$610.40*',
			lapsedOver5: 'S$861.10*'
		}
	];

	type NoteItem = { text: string };

	const noteItems: NoteItem[] = [
		{
			text: 'For those former CFP certificants who have not reinstated their CFP certifications within 3 years after certification expiration, they will have to email support@fpas.org.sg on their appeal for certification renewal.'
		},
		{
			text: 'FPAS certification team shall reply within 5 working days upon submission of the completed Reinstatement Application Form and payment receipt. The outcome of the application will be informed through email.'
		}
	];
</script>

{#snippet noteIcon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		class="w-4 h-4 shrink-0 text-black mt-0.5"
		fill="none"
	>
		<path
			d="M4 4h9v9l-9 3V4z"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-linejoin="round"
		/>
	</svg>
{/snippet}

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-5xl text-sm text-black leading-relaxed">
		<!-- Consequences of Non-renewal -->
		<h2 class="text-sm font-bold text-[#1a1a1a] mb-2">Consequences of Non-renewal</h2>
		<p class="mb-6">
			CFP certificants who miss the certification deadline, will not be listed at the
			<a href="#" class="text-black underline hover:no-underline">CFP directory at FPAS website</a>
			→ Consumer → Find Me a Planner webpage upon expiration of said certification. If the
			certification is not renewed, the certification expires and any right to use the marks will
			terminate upon expiration of said certification. Reinstatement fees will be imposed in the
			event CFP certificants apply for renewal after the deadline.
		</p>

		<!-- Current Reinstatement Policies -->
		<h2 class="text-sm font-bold text-[#1a1a1a] mb-2">Current Reinstatement Policies</h2>
		<p class="mb-2">
			CFP certificants who miss the renewal deadline can still apply for renewal online, log-in
			their FPAS account and paying a reinstatement fee with completed information and signed the
			Certification Agreement online. The reinstatement fees vary depending on the lapsed period of
			their certification.
		</p>
		<p class="mb-4">a) Reinstatement fees with 9% GST on and after 01 Jan 2024</p>

		<!-- Fee table -->
		<div class="border border-black mb-3">
			<table class="w-full border-collapse text-sm">
				<thead>
					<tr>
						<th class="font-bold text-center px-4 py-3 border border-black">Certifications</th>
						<th class="font-bold text-center px-4 py-3 border border-black">
							Lapsed ≤12 months
						</th>
						<th class="font-bold text-center px-4 py-3 border border-black">
							Lapsed ≤ 5 years
						</th>
						<th class="font-bold text-center px-4 py-3 border border-black">
							Lapsed &gt; 5 years
						</th>
					</tr>
				</thead>
				<tbody>
					{#each feeRows as row (row.cert)}
						<tr>
							<td class="text-center px-4 py-3 border border-black">{row.cert}</td>
							<td class="text-center px-4 py-3 border border-black">{row.lapsed12}</td>
							<td class="text-center px-4 py-3 border border-black">{row.lapsed5}</td>
							<td class="text-center px-4 py-3 border border-black">{row.lapsedOver5}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="font-bold mb-4">Note: *All fees are inclusive of Admin fee and GST.</p>

		<ul class="flex flex-col gap-3 mb-10">
			{#each noteItems as item (item.text)}
				<li class="flex items-start gap-2">
					{@render noteIcon()}
					<span>{item.text}</span>
				</li>
			{/each}
		</ul>

		<!-- Section B -->
		<h2 class="text-base font-bold text-[#1a1a1a] mb-4">
			B. Guidelines on Continuing Professional Development (CPD) Requirements
		</h2>

		<h3 class="text-sm font-bold text-[#1a1a1a] mb-1">Preamble</h3>
		<p class="mb-4">
			Continuing Professional Development (CPD) is a form of recertification and is required for
			CFP certificants to renew their CFP certifications and continue using the CFP marks. CFP
			certificants must meet the renewal standard of minimum 30 training hours biennial (6 out of
			30 training hours must be in respect of Ethics; or Rules and Regulations, or both, as the
			case may be). Courses in Ethics and Rules & Regulations must be accredited by Institute of
			Banking and Finance (IBF) to be counted toward Core CPD hours. They are required to submit
			their CPD hours through IBF portal by 31 December yearly to ensure that his certification
			status will be renewed automatically.
		</p>

		<h3 class="text-sm font-bold text-[#1a1a1a] mb-1">Objectives</h3>
		<p class="mb-4">
			To keep abreast of developments in the financial advisory industry and update their skills
			and knowledge in relation to the type of financial advisory services they provide.
		</p>

		<h3 class="text-sm font-bold text-[#1a1a1a] mb-1">CPD Requirements</h3>
		<p class="mb-10">
			All IBF-certified individuals are expected to achieve a minimum of 15 Continuing Professional
			Development ("CPD") hours annually. Details on eligible CPD activities can be found here:
			<a href="#" class="text-black underline hover:no-underline">IBF Certification Terms and Conditions</a>
		</p>

		<!-- Section C -->
		<h2 class="text-base font-bold text-[#1a1a1a] mb-4">C. Updates and Changes</h2>

		<p class="mb-4">
			CFP certificants should observe and follow the current renewal policies and procedures set
			out in the CFP® Certification Renewal Application Form in use.
		</p>

		<p class="mb-1">FPAS will review and update the re-certification requirements and policies as and when needed.</p>
		<p>
			Therefore, CFP certificants are advised to closely observe the latest announcements on FPAS
			website, and pay specific attention to notices sent to them by FPAS.
		</p>
	</div>
</section>