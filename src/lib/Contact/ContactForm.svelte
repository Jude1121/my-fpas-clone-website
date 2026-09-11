<script>
	/**
	 * "Send us a message" contact section: form on the left,
	 * embedded map + address details on the right.
	 *
	 * Flags are rendered as real image icons via flagcdn.com
	 * (https://flagcdn.com/{w40}/{iso-2-letter-code}.png) — no local
	 * flag assets or emoji needed, and it renders consistently on
	 * every OS/browser, unlike emoji flags on Windows.
	 *
	 * NOTE: flagcdn.com only serves a fixed set of preset widths
	 * (20, 40, 80, 160, 320, 640, 1280, 2560). Requesting any other
	 * width (e.g. 24) 404s and renders nothing — always use one of
	 * the presets below.
	 */
	let {
		heading = 'Send us a message',
		departments = [
			'General Enquiries',
			'Membership',
			'CFP® Certification',
			'Events & Awards',
			'Media & Press'
		],
		mapEmbedSrc = 'https://www.google.com/maps?q=Paya+Lebar+Square,+60+Paya+Lebar+Rd,+Singapore&output=embed',
		orgName = 'Financial Planning Association of Singapore',
		addressLines = ['60 Paya Lebar Road,', '#13-37 Paya Lebar Square', 'Singapore 409051'],
		hours = 'Operating Hours: 9:30 AM to 5:00 PM',
		hoursNote = '(Closed on Saturday, Sunday and Public Holidays)',
		enquiryLabel = 'General Enquiries',
		enquiryEmail = 'enquiry@fpas.org.sg',
		phoneDisplay = '(65) 6209 2611',
		countries = [
			{ code: 'AF', dialCode: '+93', name: 'Afghanistan' },
			{ code: 'AL', dialCode: '+355', name: 'Albania' },
			{ code: 'DZ', dialCode: '+213', name: 'Algeria' },
			{ code: 'AS', dialCode: '+1', name: 'American Samoa' },
			{ code: 'AD', dialCode: '+376', name: 'Andorra' },
			{ code: 'AO', dialCode: '+244', name: 'Angola' },
			{ code: 'AI', dialCode: '+1', name: 'Anguilla' },
			{ code: 'AG', dialCode: '+1', name: 'Antigua and Barbuda' },
			{ code: 'AR', dialCode: '+54', name: 'Argentina' },
			{ code: 'AM', dialCode: '+374', name: 'Armenia' },
			{ code: 'AW', dialCode: '+297', name: 'Aruba' },
			{ code: 'AU', dialCode: '+61', name: 'Australia' },
			{ code: 'AT', dialCode: '+43', name: 'Austria' },
			{ code: 'AZ', dialCode: '+994', name: 'Azerbaijan' },
			{ code: 'BS', dialCode: '+1', name: 'Bahamas' },
			{ code: 'BH', dialCode: '+973', name: 'Bahrain' },
			{ code: 'BD', dialCode: '+880', name: 'Bangladesh' },
			{ code: 'BB', dialCode: '+1', name: 'Barbados' },
			{ code: 'BY', dialCode: '+375', name: 'Belarus' },
			{ code: 'BE', dialCode: '+32', name: 'Belgium' },
			{ code: 'BZ', dialCode: '+501', name: 'Belize' },
			{ code: 'BJ', dialCode: '+229', name: 'Benin' },
			{ code: 'BM', dialCode: '+1', name: 'Bermuda' },
			{ code: 'BT', dialCode: '+975', name: 'Bhutan' },
			{ code: 'BO', dialCode: '+591', name: 'Bolivia' },
			{ code: 'BA', dialCode: '+387', name: 'Bosnia and Herzegovina' },
			{ code: 'BW', dialCode: '+267', name: 'Botswana' },
			{ code: 'BR', dialCode: '+55', name: 'Brazil' },
			{ code: 'BN', dialCode: '+673', name: 'Brunei' },
			{ code: 'BG', dialCode: '+359', name: 'Bulgaria' },
			{ code: 'BF', dialCode: '+226', name: 'Burkina Faso' },
			{ code: 'BI', dialCode: '+257', name: 'Burundi' },
			{ code: 'KH', dialCode: '+855', name: 'Cambodia' },
			{ code: 'CM', dialCode: '+237', name: 'Cameroon' },
			{ code: 'CA', dialCode: '+1', name: 'Canada' },
			{ code: 'CV', dialCode: '+238', name: 'Cape Verde' },
			{ code: 'KY', dialCode: '+1', name: 'Cayman Islands' },
			{ code: 'CF', dialCode: '+236', name: 'Central African Republic' },
			{ code: 'TD', dialCode: '+235', name: 'Chad' },
			{ code: 'CL', dialCode: '+56', name: 'Chile' },
			{ code: 'CN', dialCode: '+86', name: 'China' },
			{ code: 'CO', dialCode: '+57', name: 'Colombia' },
			{ code: 'KM', dialCode: '+269', name: 'Comoros' },
			{ code: 'CG', dialCode: '+242', name: 'Congo' },
			{ code: 'CD', dialCode: '+243', name: 'Congo (DRC)' },
			{ code: 'CK', dialCode: '+682', name: 'Cook Islands' },
			{ code: 'CR', dialCode: '+506', name: 'Costa Rica' },
			{ code: 'HR', dialCode: '+385', name: 'Croatia' },
			{ code: 'CU', dialCode: '+53', name: 'Cuba' },
			{ code: 'CY', dialCode: '+357', name: 'Cyprus' },
			{ code: 'CZ', dialCode: '+420', name: 'Czech Republic' },
			{ code: 'DK', dialCode: '+45', name: 'Denmark' },
			{ code: 'DJ', dialCode: '+253', name: 'Djibouti' },
			{ code: 'DM', dialCode: '+1', name: 'Dominica' },
			{ code: 'DO', dialCode: '+1', name: 'Dominican Republic' },
			{ code: 'EC', dialCode: '+593', name: 'Ecuador' },
			{ code: 'EG', dialCode: '+20', name: 'Egypt' },
			{ code: 'SV', dialCode: '+503', name: 'El Salvador' },
			{ code: 'GQ', dialCode: '+240', name: 'Equatorial Guinea' },
			{ code: 'ER', dialCode: '+291', name: 'Eritrea' },
			{ code: 'EE', dialCode: '+372', name: 'Estonia' },
			{ code: 'SZ', dialCode: '+268', name: 'Eswatini' },
			{ code: 'ET', dialCode: '+251', name: 'Ethiopia' },
			{ code: 'FJ', dialCode: '+679', name: 'Fiji' },
			{ code: 'FI', dialCode: '+358', name: 'Finland' },
			{ code: 'FR', dialCode: '+33', name: 'France' },
			{ code: 'GA', dialCode: '+241', name: 'Gabon' },
			{ code: 'GM', dialCode: '+220', name: 'Gambia' },
			{ code: 'GE', dialCode: '+995', name: 'Georgia' },
			{ code: 'DE', dialCode: '+49', name: 'Germany' },
			{ code: 'GH', dialCode: '+233', name: 'Ghana' },
			{ code: 'GI', dialCode: '+350', name: 'Gibraltar' },
			{ code: 'GR', dialCode: '+30', name: 'Greece' },
			{ code: 'GL', dialCode: '+299', name: 'Greenland' },
			{ code: 'GD', dialCode: '+1', name: 'Grenada' },
			{ code: 'GU', dialCode: '+1', name: 'Guam' },
			{ code: 'GT', dialCode: '+502', name: 'Guatemala' },
			{ code: 'GN', dialCode: '+224', name: 'Guinea' },
			{ code: 'GW', dialCode: '+245', name: 'Guinea-Bissau' },
			{ code: 'GY', dialCode: '+592', name: 'Guyana' },
			{ code: 'HT', dialCode: '+509', name: 'Haiti' },
			{ code: 'HN', dialCode: '+504', name: 'Honduras' },
			{ code: 'HK', dialCode: '+852', name: 'Hong Kong' },
			{ code: 'HU', dialCode: '+36', name: 'Hungary' },
			{ code: 'IS', dialCode: '+354', name: 'Iceland' },
			{ code: 'IN', dialCode: '+91', name: 'India' },
			{ code: 'ID', dialCode: '+62', name: 'Indonesia' },
			{ code: 'IR', dialCode: '+98', name: 'Iran' },
			{ code: 'IQ', dialCode: '+964', name: 'Iraq' },
			{ code: 'IE', dialCode: '+353', name: 'Ireland' },
			{ code: 'IL', dialCode: '+972', name: 'Israel' },
			{ code: 'IT', dialCode: '+39', name: 'Italy' },
			{ code: 'JM', dialCode: '+1', name: 'Jamaica' },
			{ code: 'JP', dialCode: '+81', name: 'Japan' },
			{ code: 'JO', dialCode: '+962', name: 'Jordan' },
			{ code: 'KZ', dialCode: '+7', name: 'Kazakhstan' },
			{ code: 'KE', dialCode: '+254', name: 'Kenya' },
			{ code: 'KI', dialCode: '+686', name: 'Kiribati' },
			{ code: 'KW', dialCode: '+965', name: 'Kuwait' },
			{ code: 'KG', dialCode: '+996', name: 'Kyrgyzstan' },
			{ code: 'LA', dialCode: '+856', name: 'Laos' },
			{ code: 'LV', dialCode: '+371', name: 'Latvia' },
			{ code: 'LB', dialCode: '+961', name: 'Lebanon' },
			{ code: 'LS', dialCode: '+266', name: 'Lesotho' },
			{ code: 'LR', dialCode: '+231', name: 'Liberia' },
			{ code: 'LY', dialCode: '+218', name: 'Libya' },
			{ code: 'LI', dialCode: '+423', name: 'Liechtenstein' },
			{ code: 'LT', dialCode: '+370', name: 'Lithuania' },
			{ code: 'LU', dialCode: '+352', name: 'Luxembourg' },
			{ code: 'MO', dialCode: '+853', name: 'Macau' },
			{ code: 'MG', dialCode: '+261', name: 'Madagascar' },
			{ code: 'MW', dialCode: '+265', name: 'Malawi' },
			{ code: 'MY', dialCode: '+60', name: 'Malaysia' },
			{ code: 'MV', dialCode: '+960', name: 'Maldives' },
			{ code: 'ML', dialCode: '+223', name: 'Mali' },
			{ code: 'MT', dialCode: '+356', name: 'Malta' },
			{ code: 'MH', dialCode: '+692', name: 'Marshall Islands' },
			{ code: 'MR', dialCode: '+222', name: 'Mauritania' },
			{ code: 'MU', dialCode: '+230', name: 'Mauritius' },
			{ code: 'MX', dialCode: '+52', name: 'Mexico' },
			{ code: 'FM', dialCode: '+691', name: 'Micronesia' },
			{ code: 'MD', dialCode: '+373', name: 'Moldova' },
			{ code: 'MC', dialCode: '+377', name: 'Monaco' },
			{ code: 'MN', dialCode: '+976', name: 'Mongolia' },
			{ code: 'ME', dialCode: '+382', name: 'Montenegro' },
			{ code: 'MA', dialCode: '+212', name: 'Morocco' },
			{ code: 'MZ', dialCode: '+258', name: 'Mozambique' },
			{ code: 'MM', dialCode: '+95', name: 'Myanmar' },
			{ code: 'NA', dialCode: '+264', name: 'Namibia' },
			{ code: 'NR', dialCode: '+674', name: 'Nauru' },
			{ code: 'NP', dialCode: '+977', name: 'Nepal' },
			{ code: 'NL', dialCode: '+31', name: 'Netherlands' },
			{ code: 'NZ', dialCode: '+64', name: 'New Zealand' },
			{ code: 'NI', dialCode: '+505', name: 'Nicaragua' },
			{ code: 'NE', dialCode: '+227', name: 'Niger' },
			{ code: 'NG', dialCode: '+234', name: 'Nigeria' },
			{ code: 'NU', dialCode: '+683', name: 'Niue' },
			{ code: 'KP', dialCode: '+850', name: 'North Korea' },
			{ code: 'MK', dialCode: '+389', name: 'North Macedonia' },
			{ code: 'NO', dialCode: '+47', name: 'Norway' },
			{ code: 'OM', dialCode: '+968', name: 'Oman' },
			{ code: 'PK', dialCode: '+92', name: 'Pakistan' },
			{ code: 'PW', dialCode: '+680', name: 'Palau' },
			{ code: 'PS', dialCode: '+970', name: 'Palestine' },
			{ code: 'PA', dialCode: '+507', name: 'Panama' },
			{ code: 'PG', dialCode: '+675', name: 'Papua New Guinea' },
			{ code: 'PY', dialCode: '+595', name: 'Paraguay' },
			{ code: 'PE', dialCode: '+51', name: 'Peru' },
			{ code: 'PH', dialCode: '+63', name: 'Philippines' },
			{ code: 'PL', dialCode: '+48', name: 'Poland' },
			{ code: 'PT', dialCode: '+351', name: 'Portugal' },
			{ code: 'PR', dialCode: '+1', name: 'Puerto Rico' },
			{ code: 'QA', dialCode: '+974', name: 'Qatar' },
			{ code: 'RO', dialCode: '+40', name: 'Romania' },
			{ code: 'RU', dialCode: '+7', name: 'Russia' },
			{ code: 'RW', dialCode: '+250', name: 'Rwanda' },
			{ code: 'WS', dialCode: '+685', name: 'Samoa' },
			{ code: 'SM', dialCode: '+378', name: 'San Marino' },
			{ code: 'SA', dialCode: '+966', name: 'Saudi Arabia' },
			{ code: 'SN', dialCode: '+221', name: 'Senegal' },
			{ code: 'RS', dialCode: '+381', name: 'Serbia' },
			{ code: 'SC', dialCode: '+248', name: 'Seychelles' },
			{ code: 'SL', dialCode: '+232', name: 'Sierra Leone' },
			{ code: 'SG', dialCode: '+65', name: 'Singapore' },
			{ code: 'SK', dialCode: '+421', name: 'Slovakia' },
			{ code: 'SI', dialCode: '+386', name: 'Slovenia' },
			{ code: 'SB', dialCode: '+677', name: 'Solomon Islands' },
			{ code: 'SO', dialCode: '+252', name: 'Somalia' },
			{ code: 'ZA', dialCode: '+27', name: 'South Africa' },
			{ code: 'KR', dialCode: '+82', name: 'South Korea' },
			{ code: 'SS', dialCode: '+211', name: 'South Sudan' },
			{ code: 'ES', dialCode: '+34', name: 'Spain' },
			{ code: 'LK', dialCode: '+94', name: 'Sri Lanka' },
			{ code: 'KN', dialCode: '+1', name: 'St Kitts and Nevis' },
			{ code: 'LC', dialCode: '+1', name: 'St Lucia' },
			{ code: 'VC', dialCode: '+1', name: 'St Vincent and the Grenadines' },
			{ code: 'SD', dialCode: '+249', name: 'Sudan' },
			{ code: 'SR', dialCode: '+597', name: 'Suriname' },
			{ code: 'SE', dialCode: '+46', name: 'Sweden' },
			{ code: 'CH', dialCode: '+41', name: 'Switzerland' },
			{ code: 'SY', dialCode: '+963', name: 'Syria' },
			{ code: 'TW', dialCode: '+886', name: 'Taiwan' },
			{ code: 'TJ', dialCode: '+992', name: 'Tajikistan' },
			{ code: 'TZ', dialCode: '+255', name: 'Tanzania' },
			{ code: 'TH', dialCode: '+66', name: 'Thailand' },
			{ code: 'TL', dialCode: '+670', name: 'Timor-Leste' },
			{ code: 'TG', dialCode: '+228', name: 'Togo' },
			{ code: 'TO', dialCode: '+676', name: 'Tonga' },
			{ code: 'TT', dialCode: '+1', name: 'Trinidad and Tobago' },
			{ code: 'TN', dialCode: '+216', name: 'Tunisia' },
			{ code: 'TR', dialCode: '+90', name: 'Turkey' },
			{ code: 'TM', dialCode: '+993', name: 'Turkmenistan' },
			{ code: 'TV', dialCode: '+688', name: 'Tuvalu' },
			{ code: 'UG', dialCode: '+256', name: 'Uganda' },
			{ code: 'UA', dialCode: '+380', name: 'Ukraine' },
			{ code: 'AE', dialCode: '+971', name: 'United Arab Emirates' },
			{ code: 'GB', dialCode: '+44', name: 'United Kingdom' },
			{ code: 'US', dialCode: '+1', name: 'United States' },
			{ code: 'UY', dialCode: '+598', name: 'Uruguay' },
			{ code: 'UZ', dialCode: '+998', name: 'Uzbekistan' },
			{ code: 'VU', dialCode: '+678', name: 'Vanuatu' },
			{ code: 'VA', dialCode: '+379', name: 'Vatican City' },
			{ code: 'VE', dialCode: '+58', name: 'Venezuela' },
			{ code: 'VN', dialCode: '+84', name: 'Vietnam' },
			{ code: 'YE', dialCode: '+967', name: 'Yemen' },
			{ code: 'ZM', dialCode: '+260', name: 'Zambia' },
			{ code: 'ZW', dialCode: '+263', name: 'Zimbabwe' }
		],
		defaultCountryCode = 'SG'
	} = $props();

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let subject = $state('');
	let department = $state('');
	let message = $state('');

	let selectedCountry = $state(
		countries.find((c) => c.code === defaultCountryCode) ?? countries[0]
	);
	let countryMenuOpen = $state(false);
	let countrySearch = $state('');
	let searchInputEl = $state(null);

	let filteredCountries = $derived(
		countrySearch.trim()
			? countries.filter((c) => {
					const q = countrySearch.trim().toLowerCase();
					return (
						c.name.toLowerCase().includes(q) ||
						c.dialCode.includes(q) ||
						c.code.toLowerCase().includes(q)
					);
				})
			: countries
	);

	// flagcdn only serves fixed preset widths: 20, 40, 80, 160, 320, 640, 1280, 2560.
	function flagUrl(code, width = 40) {
		return `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;
	}

	function handleFlagError(e) {
		// Hide gracefully instead of showing a broken-image icon if the CDN
		// request ever fails (offline, blocked network, etc).
		e.currentTarget.style.visibility = 'hidden';
	}

	function selectCountry(country) {
		selectedCountry = country;
		countryMenuOpen = false;
		countrySearch = '';
	}

	function openCountryMenu() {
		countryMenuOpen = true;
		countrySearch = '';
		// focus the search box once it's mounted
		queueMicrotask(() => searchInputEl?.focus());
	}

	function closeCountryMenu() {
		countryMenuOpen = false;
		countrySearch = '';
	}

	function handleCountryKeydown(e) {
		if (e.key === 'Escape') closeCountryMenu();
	}

	function handleSearchKeydown(e) {
		if (e.key === 'Escape') {
			closeCountryMenu();
		} else if (e.key === 'Enter' && filteredCountries.length > 0) {
			e.preventDefault();
			selectCountry(filteredCountries[0]);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		// Wire this up to your form-handling endpoint / API call.
		console.log({ name, email, phone, subject, department, message });
	}
</script>

<section class="mx-auto max-w-6xl px-6 py-12">
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
		<!-- Form -->
		<div>
			<h2 class="mb-8 text-3xl font-extrabold text-blue-900 md:text-4xl font-dmsans">{heading}</h2>

			<form class="space-y-5" onsubmit={handleSubmit}>
				<div>
					<label for="contact-name" class="mb-1 block text-sm text-slate-800">Name</label>
					<input
						id="contact-name"
						type="text"
						placeholder="Name"
						bind:value={name}
						class="w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
					/>
				</div>

				<div>
					<label for="contact-email" class="mb-1 block text-sm text-slate-800">Email Address</label>
					<input
						id="contact-email"
						type="email"
						placeholder="Email Address"
						bind:value={email}
						class="w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
					/>
				</div>

				<div>
					<label for="contact-phone" class="mb-1 block text-sm text-slate-800">Phone</label>
					<div class="relative">
						<div
							class="flex items-center rounded-md border border-slate-300 focus-within:border-blue-600"
						>
							<div class="relative">
								<button
									type="button"
									aria-haspopup="listbox"
									aria-expanded={countryMenuOpen}
									aria-label="Select country code, currently {selectedCountry.name} {selectedCountry.dialCode}"
									onclick={() => (countryMenuOpen ? closeCountryMenu() : openCountryMenu())}
									onkeydown={handleCountryKeydown}
									class="flex items-center gap-1.5 border-r border-slate-300 px-3 py-2.5"
								>
									<img
										src={flagUrl(selectedCountry.code)}
										alt=""
										width="20"
										height="14"
										onerror={handleFlagError}
										class="h-3.5 w-5 rounded-sm bg-slate-100 object-cover"
									/>
									<svg viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-slate-400">
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>

								{#if countryMenuOpen}
									<div
										class="absolute left-0 top-full z-10 mt-1 w-64 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg"
									>
										<div class="border-b border-slate-200 p-2">
											<input
												bind:this={searchInputEl}
												bind:value={countrySearch}
												onkeydown={handleSearchKeydown}
												type="text"
												placeholder="Search Country"
												aria-label="Search country"
												class="w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
											/>
										</div>

										<ul role="listbox" class="max-h-56 overflow-y-auto py-1">
											{#each filteredCountries as country (country.code + country.dialCode)}
												<li>
													<button
														type="button"
														role="option"
														aria-selected={country.code === selectedCountry.code}
														onclick={() => selectCountry(country)}
														class="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50 {country.code === selectedCountry.code ? 'bg-slate-50' : ''}"
													>
														<img
															src={flagUrl(country.code)}
															alt=""
															width="20"
															height="14"
															onerror={handleFlagError}
															class="h-3.5 w-5 rounded-sm bg-slate-100 object-cover"
														/>
														<span class="flex-1 text-slate-800">{country.name}</span>
														<span class="text-slate-400">{country.dialCode}</span>
													</button>
												</li>
											{:else}
												<li class="px-3 py-2 text-sm text-slate-400">No countries found</li>
											{/each}
										</ul>
									</div>
								{/if}
							</div>

							<span class="border-r border-slate-300 px-2 py-2.5 text-slate-700">
								{selectedCountry.dialCode}
							</span>

							<input
								id="contact-phone"
								type="tel"
								placeholder="Phone"
								bind:value={phone}
								class="w-full rounded-r-md px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none"
							/>
						</div>

						{#if countryMenuOpen}
							<button
								type="button"
								class="fixed inset-0 z-0 cursor-default"
								aria-label="Close country menu"
								onclick={closeCountryMenu}
							></button>
						{/if}
					</div>
				</div>

				<div>
					<label for="contact-subject" class="mb-1 block text-sm text-slate-800">Subject</label>
					<input
						id="contact-subject"
						type="text"
						placeholder="Subject"
						bind:value={subject}
						class="w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
					/>
				</div>

				<div>
					<label for="contact-department" class="mb-1 block text-sm text-slate-800">Department</label>
					<div class="relative">
						<select
							id="contact-department"
							bind:value={department}
							class="w-full appearance-none rounded-md border border-slate-300 px-4 py-2.5 pr-16 text-slate-800 focus:border-blue-600 focus:outline-none"
						>
							<option value="" disabled selected hidden></option>
							{#each departments as dept}
								<option value={dept}>{dept}</option>
							{/each}
						</select>
						<div class="pointer-events-none absolute inset-y-0 right-3 flex items-center gap-2 text-slate-400">
							{#if department}
								<button
									type="button"
									class="pointer-events-auto"
									onclick={() => (department = '')}
									aria-label="Clear department"
								>
									&times;
								</button>
							{/if}
							<svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
								<path
									fill-rule="evenodd"
									d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div>
					<label for="contact-message" class="mb-1 block text-sm text-slate-800">Message</label>
					<textarea
						id="contact-message"
						rows="4"
						placeholder="Write your message here"
						bind:value={message}
						class="w-full resize-none rounded-md border border-slate-300 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full rounded-md bg-blue-900 py-3 font-medium text-white transition-colors hover:bg-blue-800"
				>
					Send Message
				</button>
			</form>
		</div>

		<!-- Map + address -->
		<div>
			<div class="mb-6 overflow-hidden rounded-md border border-slate-200">
				<iframe
					title="{orgName} location"
					src={mapEmbedSrc}
					class="h-[300px] w-full"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<h3 class="mb-3 text-xl font-bold text-blue-900">{orgName}</h3>

			<address class="mb-6 not-italic leading-relaxed text-slate-700">
				{#each addressLines as line}
					{line}<br />
				{/each}
			</address>

			<p class="text-slate-700">{hours}</p>
			<p class="mb-4 text-slate-700">{hoursNote}</p>

			<div class="flex items-start justify-between gap-4">
				<div>
					<p class="font-bold text-slate-900">{enquiryLabel}</p>
					<a href="mailto:{enquiryEmail}" class="text-blue-700 hover:underline">{enquiryEmail}</a>
				</div>
				<p class="text-slate-700">{phoneDisplay}</p>
			</div>
		</div>
	</div>
</section> 