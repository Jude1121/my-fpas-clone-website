<script>
	import { resolvePlannerImage } from '$lib/utils/planner-images.js';

	let { planner, onClose } = $props();

	// ---------------------------------------------------------------
	// Contact form state
	// ---------------------------------------------------------------
	let name = $state('');
	let email = $state('');
	let countryCode = $state('+65');
	let contact = $state('');
	let message = $state('');
	let submitted = $state(false);

	const countryCodes = [
		{ code: '+65', flag: '🇸🇬' },
		{ code: '+60', flag: '🇲🇾' },
		{ code: '+62', flag: '🇮🇩' },
		{ code: '+63', flag: '🇵🇭' },
		{ code: '+66', flag: '🇹🇭' },
		{ code: '+86', flag: '🇨🇳' },
		{ code: '+852', flag: '🇭🇰' },
		{ code: '+1', flag: '🇺🇸' },
		{ code: '+44', flag: '🇬🇧' }
	];

	function handleSubmit(event) {
		event.preventDefault();
		// Wire this up to your actual send-message endpoint, e.g.
		// await fetch('/api/planner-contact', { method: 'POST', body: JSON.stringify({...}) })
		submitted = true;
	}

	function handleBackdropKeydown(event) {
		if (event.key === 'Escape') onClose();
	}
</script>

<svelte:window onkeydown={handleBackdropKeydown} />

<!-- Backdrop -->
<div
	class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8"
	onclick={onClose}
	role="presentation"
>
	<!-- Panel -->
	<div
		class="relative w-full max-w-5xl rounded-lg bg-white shadow-xl"
		onclick={(e) => e.stopPropagation()}
		role="dialog"
		aria-modal="true"
		aria-label={`${planner.name} profile`}
	>
		<!-- Close button -->
		<button
			onclick={onClose}
			aria-label="Close"
			class="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<div class="max-h-[90vh] overflow-y-auto p-6 sm:p-10">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
				<!-- Left: profile details -->
				<div class="lg:col-span-2">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						{#if resolvePlannerImage(planner.image)}
							<img
								src={resolvePlannerImage(planner.image)}
								alt={planner.name}
								class="h-32 w-32 flex-shrink-0 rounded-md object-cover "
							/>
						{:else}
							<div
								class="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-md bg-gray-200 text-2xl font-medium text-gray-500"
							>
								{planner.name.charAt(0)}
							</div>
						{/if}

						<div>
							<h1 class="text-2xl font-semibold text-gray-900">{planner.name}</h1>
							<div class="mt-1 flex items-center gap-1.5 text-sm font-medium text-gray-800">
								<span class="text-blue-900">✻</span>
								<span>CFP<sup>®</sup></span>
							</div>
							{#if planner.bio}
								<p class="mt-2 text-sm text-gray-700">{planner.bio.split('\n\n')[0]}</p>
							{/if}
						</div>
					</div>

					<div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-4">
						<div>
							<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
								Last Profile Update
							</div>
							<div class="mt-0.5 text-gray-800">{planner.lastUpdate}</div>
						</div>
						<div>
							<div class="text-xs font-medium uppercase tracking-wide text-gray-400">Industry</div>
							<div class="mt-0.5 text-gray-800">{planner.industry || '—'}</div>
						</div>
						<div>
							<div class="text-xs font-medium uppercase tracking-wide text-gray-400">Experience</div>
							<div class="mt-0.5 text-gray-800">{planner.experience || '—'}</div>
						</div>
						<div class="col-span-2 sm:col-span-1">
							<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
								Specialisation
							</div>
							<div class="mt-1 flex flex-wrap gap-1">
								{#each planner.specialisation as tag, i (tag + i)}
									<span class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{tag}</span>
								{/each}
							</div>
						</div>
					</div>

					{#if planner.fullBio}
						<div class="mt-8 space-y-3 text-sm leading-relaxed text-gray-700">
							{#each planner.fullBio.split('\n\n') as paragraph}
								<p>{paragraph}</p>
							{/each}
						</div>
					{/if}

					<hr class="my-8 border-gray-200" />

					<!-- Company Details -->
					<div>
						<h2 class="text-base font-semibold text-blue-800">Company Details</h2>
						<div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2">
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">Job Title</div>
								<div class="mt-0.5 text-gray-800">{planner.companyDetails?.jobTitle || '—'}</div>
							</div>
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									Company Name
								</div>
								<div class="mt-0.5 text-gray-800">{planner.companyDetails?.companyName || '—'}</div>
							</div>
							<div class="sm:col-span-2">
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									Office Address
								</div>
								<div class="mt-0.5 text-gray-800">
									{planner.companyDetails?.officeAddress || '—'}
								</div>
							</div>
						</div>
					</div>

					<hr class="my-8 border-gray-200" />

					<!-- Certification Information -->
					<div>
						<h2 class="text-base font-semibold text-blue-800">Certification Information</h2>
						<div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2">
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									CFP Licence No.
								</div>
								<div class="mt-0.5 text-gray-800">{planner.certification?.cfpLicenceNo || '—'}</div>
							</div>
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									MAS RNF Number
								</div>
								<div class="mt-0.5 text-gray-800">{planner.certification?.masRnfNumber || '—'}</div>
							</div>
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									Certification Obtained
								</div>
								<div class="mt-0.5 text-gray-800">{planner.certification?.obtained || '—'}</div>
							</div>
							<div>
								<div class="text-xs font-medium uppercase tracking-wide text-gray-400">
									Certification Expiry
								</div>
								<div class="mt-0.5 text-gray-800">{planner.certification?.expiry || '—'}</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right: contact card -->
				<div class="lg:col-span-1">
					<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
						<h2 class="text-base font-semibold text-gray-900">Get in touch with {planner.name}</h2>
						<p class="mt-1 text-sm text-gray-500">
							Fill out your info below and we'll get you connected
						</p>

						{#if submitted}
							<div class="mt-6 rounded-md bg-green-50 p-4 text-sm text-green-700">
								Thanks! Your message has been sent — {planner.name} will be in touch soon.
							</div>
						{:else}
							<form class="mt-6 space-y-4" onsubmit={handleSubmit}>
								<div>
									<label for="pp-name" class="block text-sm font-medium text-gray-800">Name</label>
									<input
										id="pp-name"
										type="text"
										bind:value={name}
										placeholder="Name"
										required
										class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
									/>
								</div>

								<div>
									<label for="pp-email" class="block text-sm font-medium text-gray-800">Email</label>
									<input
										id="pp-email"
										type="email"
										bind:value={email}
										placeholder="Email Address"
										required
										class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
									/>
								</div>

								<div>
									<label for="pp-phone" class="block text-sm font-medium text-gray-800">Contact</label>
									<div class="mt-1 flex overflow-hidden rounded-md border border-gray-300 bg-white">
										<select
											bind:value={countryCode}
											aria-label="Country code"
											class="flex-shrink-0 border-r border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 focus:outline-none"
										>
											{#each countryCodes as c}
												<option value={c.code}>{c.flag} {c.code}</option>
											{/each}
										</select>
										<input
											id="pp-phone"
											type="tel"
											bind:value={contact}
											placeholder="Contact"
											required
											class="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
										/>
									</div>
								</div>

								<div>
									<label for="pp-message" class="block text-sm font-medium text-gray-800">Message</label>
									<textarea
										id="pp-message"
										bind:value={message}
										placeholder="Message"
										rows="4"
										required
										class="mt-1 w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
									></textarea>
								</div>

								<button
									type="submit"
									class="w-full rounded-md bg-[#3a4a9e] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#303f8a]"
								>
									Send Message
								</button>
							</form>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
