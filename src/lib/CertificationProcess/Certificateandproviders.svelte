<script lang="ts">
	// Swap this to match your actual filename in src/lib/assets/cp/
	import DisclaimerImage from '$lib/assets/cp/disclaimer.png';

	type Provider = {
		name: string;
		address: string[];
		phone: string;
		email: string;
		website: string;
		websiteHref: string;
	};

	const providers: Provider[] = [
		{
			name: 'CyberQuote Pte Ltd',
			address: ['#10-00, Level 10 Grand Building,', '17 Phillip Street, Singapore 048695'],
			phone: '6011 8922',
			email: 'support@cyberquote.com.sg',
			website: 'https://cyberquote.com',
			websiteHref: 'https://cyberquote.com'
		},
		{
			name: 'Financial Perspectives Pte Ltd',
			address: ['77 High Street #03-08', 'Singapore 179433'],
			phone: '8111 7890',
			email: 'enquiries@fp-edu.com',
			website: 'www.fp-edu.com',
			websiteHref: 'https://www.fp-edu.com'
		},
		{
			name: 'Finerty Academy Pte Ltd',
			address: ['International Plaza, 10 Anson Road, #16-12,', 'Singapore 079903'],
			phone: '9697 9201',
			email: 'contact@finerty.com.sg',
			website: 'www.finerty.com.sg',
			websiteHref: 'https://www.finerty.com.sg'
		},
		{
			name: 'TMC Academy Pte Ltd',
			address: ['Paya Lebar Campus, 805 Geylang Road,', 'Singapore 389683'],
			phone: '8023 3870',
			email: 'info@tmc.edu.sg',
			website: 'www.tmc.edu.sg',
			websiteHref: 'https://www.tmc.edu.sg'
		}
	];

	const programs: string[] = [
		'Associate Financial Planner™; or AFP®',
		'Associate Wealth Planner, or AWPᶜᴹ',
		'Certified Financial Planner™ or CFP®'
	];
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl">
		<!-- CERTIFICATE -->
		<h2 class="text-2xl font-extrabold text-[#1A226D] font-dmsans  mb-4">CERTIFICATE</h2>

		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-4">
			Congratulations! Now that you've passed the modules required for AFP®, AWP<sup
				class="text-[0.6em]">CM</sup
			>, or CFP® certification, it's time to communicate your expertise and advance your career
			using your newly issued designation.
		</p>

		<h3 class="text-sm font-bold text-[#1A226D] mb-2">How to apply for your certification?</h3>
		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-4">
			Please log-in to your <a href="#" class="font-bold text-[#1A226D]">FPAS account</a> to apply.
			Upon successful application of your AFP®, AWP<sup class="text-[0.6em]">CM</sup>, or CFP®
			certification, FPAS will issue the physical certificate of your respective certification.
		</p>

		<h3 class="text-sm font-bold text-[#1A226D] mb-2">Collection of physical certificates</h3>
		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-3">
			Hardcopy certificates will be issued upon request.
		</p>
		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-3">
			Please email to <span class="font-bold text-[#1a1a1a]">enquiry@fpas.org.sg</span> to make an
			appointment <span class="underline">at least 2 working days in advance</span>. Collection will
			be available from Monday to Friday, except public holidays and eve of public holidays. Time
			slots available for collection are (10am-12pm) and (2pm-4pm) at our office.
		</p>
		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-10">
			Collection is strictly by appointment only. Please make sure to receive acknowledgement from
			FPAS for the collection before turning up for the appointment.
		</p>

		<!-- FPAS APPROVED EDUCATION PROVIDERS -->
		<h2 class="text-2xl font-extrabold text-[#1A226D] font-dmsans mb-4">FPAS APPROVED EDUCATION PROVIDERS</h2>

		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-4">
			The education providers listed below have registered a financial planning curriculum that
			satisfies the FPAS education requirement. FPAS does not endorse one program over another.
			Programs can also differ in their delivery methodologies with some having classroom-based
			instructions and others offering online courses.
		</p>

		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-4">
			Education providers oversee their respective administrations and charging policies. Should
			you have enquiries regarding education providers, you may
			<a href="#" class="font-bold text-[#1A226D]">contact FPAS.</a>
		</p>

		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-3">
			Our education providers are approved to conduct the following programs:
		</p>

		<ol class="flex flex-col gap-2 mb-4">
			{#each programs as program, i (program)}
				<li class="text-sm text-[#1A226D]">{i + 1}. {program}</li>
			{/each}
		</ol>

		<p class="text-sm text-[#4a4a4a] leading-relaxed mb-8">
			Following are the approved education providers:
		</p>

		<!-- Providers table -->
		<div class="overflow-x-auto mb-10">
			<table class="w-full border-collapse">
				<thead>
					<tr>
						{#each providers as provider (provider.name)}
							<th
								class="bg-[#dbe8f7] text-left align-top text-sm font-bold text-[#1A226D] px-4 py-4 border border-gray-200"
							>
								{provider.name}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					<tr>
						{#each providers as provider (provider.name)}
							<td class="align-top text-sm text-[#4a4a4a] px-4 py-4 border border-gray-200">
								{#each provider.address as line (line)}
									<div>{line}</div>
								{/each}
							</td>
						{/each}
					</tr>
					<tr>
						{#each providers as provider (provider.name)}
							<td class="align-top text-sm text-[#4a4a4a] px-4 py-4 border border-gray-200">
								{provider.phone}
							</td>
						{/each}
					</tr>
					<tr>
						{#each providers as provider (provider.name)}
							<td class="align-top text-sm px-4 py-4 border border-gray-200">
								<a href={`mailto:${provider.email}`} class="text-[#1A226D] hover:underline">
									{provider.email}
								</a>
							</td>
						{/each}
					</tr>
					<tr>
						{#each providers as provider (provider.name)}
							<td class="align-top text-sm px-4 py-4 border border-gray-200">
								<a
									href={provider.websiteHref}
									target="_blank"
									rel="noopener noreferrer"
									class="text-[#1A226D] hover:underline"
								>
									{provider.website}
								</a>
							</td>
						{/each}
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Disclaimer -->
		<img
			src={DisclaimerImage}
			alt="CFP and AFP certification marks disclaimer"
			class="w-full h-auto"
		/>
	</div>
</section>