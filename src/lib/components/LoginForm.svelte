<!-- src/lib/components/LoginPage.svelte -->
<script>
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import fpasLogo from '../assets/fpas-logo.png';

	const HELP_CENTER_URL = 'https://drive.google.com/file/d/16hVso1tHp4Oe41wQjxfOwKs3NDV109Cq/view';

	let email = $state('');
	let password = $state('');

	function handleLogin() {
		// wire up to your actual auth logic
	}

	function handleContactClick() {
		goto(resolve('/contact'));
	}
</script>

<!-- Thin black bar across the very top of the page -->
<div class="w-full h-[3px] bg-black"></div>

<div class="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 py-12 relative">

	<!-- Logo -->
	<div class="mb-8">
		<a href={resolve('/')}><img src={fpasLogo} alt="FPAS - Financial Planning Association of Singapore" class="h-24 sm:h-38 w-auto object-contain" /></a>
	</div>

	<!-- Login card -->
	<div class="w-full max-w-md border border-gray-200 rounded-md px-6 sm:px-8 py-8">
		<h1 class="text-center text-lg text-slate-800 mb-6">
			Login to your account
		</h1>

		<form class="flex flex-col gap-5" onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
			<div>
				<label for="email" class="block text-sm font-medium text-black mb-1.5">
					Email
				</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					placeholder="Email"
					class="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-black mb-1.5">
					Password
				</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					placeholder="Password"
					class="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>
			</div>

			<div class="flex items-center justify-between text-sm mt-1">
				<a 
					href={HELP_CENTER_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1.5 text-blue-600 hover:underline"
				>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<circle cx="12" cy="17" r="0.5" fill="currentColor" />
					</svg>
					Help Center
				</a>
				<a href={resolve('/')} class="text-blue-600 hover:underline">
					Forgot Password
				</a>
			</div>

			<button
				type="submit"
				class="w-full bg-[#4a55a4] text-white font-medium rounded-md py-3 mt-1 hover:bg-[#3d4788] transition-colors"
			>
				Login
			</button>
		</form>

		<!-- Social login -->
		<div class="flex items-center justify-center gap-4 mt-6">
			<button
				type="button"
				aria-label="Sign in with Google"
				class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
			>
				<svg width="18" height="18" viewBox="0 0 24 24">
					<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
					<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
					<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
					<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
				</svg>
			</button>
			<button
				type="button"
				aria-label="Sign in with LinkedIn"
				class="w-10 h-10 rounded-md bg-[#0A66C2] flex items-center justify-center hover:bg-[#004182] transition-colors"
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="white">
					<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Back to home -->
	<p class="mt-6 text-sm text-slate-700">
		Back to <a href={resolve('/home')} class="text-blue-600 hover:underline">Home</a>
	</p>

	<!-- Floating chat/notification widget button (bottom-left) -->
	<button
		type="button"
		aria-label="Contact us"
		onclick={handleContactClick}
		class="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-[#4a55a4] text-white flex items-center justify-center shadow-lg hover:bg-[#3d4788] transition-colors"
	>
		<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
			<rect x="2.5" y="5" width="19" height="14" rx="2" />
			<path d="M2.5 6.5l9.5 6.5 9.5-6.5" />
		</svg>
		<span class="absolute top-2 right-2.5 w-1.5 h-1.5 bg-white rounded-full"></span>
	</button>

</div>