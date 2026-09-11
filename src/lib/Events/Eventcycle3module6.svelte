<!-- src/lib/components/EventCycle3Module6.svelte -->
<script>
	import eventImage from '../assets/events/cycle3-module6-results-release.png';

	let name = $state('');
	let email = $state('');
	let countryCode = $state('+65');
	let contactNumber = $state('');

	function handleRegister(e) {
		e.preventDefault();
		// wire up to your actual registration logic
	}
</script>

<div class="min-h-screen bg-gray-100 font-sans text-slate-800">

	<!-- Header -->
	<header class="bg-white px-6 sm:px-12 pt-10">
		<div class="flex flex-wrap items-start justify-between gap-6">
			<div>
				<h1 class="text-2xl sm:text-3xl font-bold text-blue-900 leading-tight">
					Cycle 3 Examination - Module 6 Results Release
				</h1>
				<p class="mt-2 text-sm font-semibold tracking-wide text-blue-900">
					2 OCTOBER 2026, 12:00 PM - 11:59 PM
				</p>
			</div>
			<span class="shrink-0 rounded-full bg-[#a83e3e] px-10 py-4 text-base font-bold tracking-wide text-white">
				CYCLE 3
			</span>
		</div>
		<hr class="mt-8 border-t-2 border-[#7a2e2e]" />
	</header>

	<!-- Maroon band -->
	<div class="h-24 bg-[#a83e3e]"></div>

	<!-- Content -->
	<div class="max-w-5xl mx-auto -mt-16 sm:-mt-[70px] px-6 sm:px-12 pb-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 items-start">

		<!-- Event image card -->
		<div class="bg-white rounded-2xl p-8 sm:p-12 flex items-center justify-center min-h-[220px]">
			<img
				src={eventImage}
				alt="Cycle 3 Examination - Module 6 Result Release"
				class="max-w-full h-auto max-h-80 object-contain"
			/>
		</div>

		<!-- Register card -->
		<div class="bg-white rounded-2xl p-8">
			<h2 class="text-lg font-bold text-blue-900 mb-5">Register for event</h2>

			<form class="flex flex-col gap-4" onsubmit={handleRegister}>
				<div>
					<label for="name" class="block text-sm font-medium text-slate-800 mb-1.5">
						Name
					</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						placeholder="Name"
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium text-slate-800 mb-1.5">
						Email
					</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="Email Address"
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label for="contact" class="block text-sm font-medium text-slate-800 mb-1.5">
						Contact
					</label>
					<div class="flex gap-2.5">
						<div class="flex items-center gap-1.5 rounded-lg border border-gray-300 px-2.5 shrink-0">
							<span class="text-lg">🇸🇬</span>
							<select
								bind:value={countryCode}
								aria-label="Country code"
								class="border-none bg-transparent text-sm text-gray-700 py-2.5 focus:outline-none"
							>
								<option value="+65">+65</option>
								<option value="+60">+60</option>
								<option value="+1">+1</option>
								<option value="+44">+44</option>
							</select>
						</div>
						<input
							id="contact"
							type="tel"
							bind:value={contactNumber}
							placeholder="Contact Number"
							class="flex-1 rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
					</div>
				</div>

				<button
					type="submit"
					class="mt-1 w-full rounded-lg bg-[#4a55a4] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3d4788]"
				>
					Register
				</button>
			</form>
		</div>

	</div>
</div>