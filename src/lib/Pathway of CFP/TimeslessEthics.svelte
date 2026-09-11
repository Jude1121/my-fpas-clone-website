<script lang="ts">
	// Swap these to match your actual filenames in src/lib/assets/pathway/
	import ImgTimeliness from '$lib/assets/pathway/timeliness-of-experience.svg';
	import ImgEthics from '$lib/assets/pathway/ethics-and-images.svg';
</script>

<section class="w-full bg-white px-6 md:px-10 py-10">
	<div class="mx-auto max-w-6xl flex flex-col gap-20 md:gap-24">
		<!-- Row 1: Timeliness of Experience (text left, image right) -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
			<div>
				<h2 class="text-xl md:text-2xl font-extrabold text-[#0b3a6f] mb-5">
					Timeliness of Experience
				</h2>
				<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify mb-5">
					Qualifying work experience can be earned prior to, concurrent with, or subsequent to
					your education and examination requirements. Experience earned more than 5 years prior
					to the certification examination, however, will not be accepted. When the experience is
					earned subsequent to the examination, you must complete the requirement within five
					years of the date of the successful completion of the examination.
				</p>
				<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify">
					(Note: candidates who qualify through the challenge status must have three years
					experience earned prior to writing the Certification Examination ie Module 6 of the
					CFP® Programme).
				</p>
			</div>

			<div class="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
				<!-- Decorative accents -->
				<div class="absolute -top-4 left-6 w-10 h-10 border border-gray-300 rounded-sm"></div>
				<div class="absolute -top-4 right-10 w-8 h-8 bg-gray-300/70 rounded-sm"></div>
				<div
					class="absolute -bottom-5 left-10 w-28 h-14 border border-[#c7d84a] rounded-sm"
				></div>

				<img
					src={ImgTimeliness}
					alt="Professional checking his phone"
					class="relative w-full rounded-tr-3xl rounded-bl-3xl object-cover shadow-sm"
				/>
			</div>
		</div>

		<!-- Row 2: Ethics and Images (image left, text right) -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
			<div class="relative w-full max-w-md mx-auto md:mr-0 order-2 md:order-1">
				<!-- Decorative accents -->
				<div class="absolute -top-4 left-6 w-10 h-10 border border-gray-300 rounded-sm"></div>
				<div class="absolute -top-4 right-10 w-8 h-8 bg-gray-300/70 rounded-sm"></div>
				<div
					class="absolute -bottom-5 left-10 w-28 h-14 border border-[#c7d84a] rounded-sm"
				></div>

				<img
					src={ImgEthics}
					alt="Hands signing a document"
					class="relative w-full rounded-tr-3xl rounded-bl-3xl object-cover shadow-sm"
				/>
			</div>

			<div class="order-1 md:order-2">
				<h2 class="text-xl md:text-2xl font-extrabold text-[#0b3a6f] mb-5">
					Ethics and Images
				</h2>
				<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify mb-5">
					Once the education, examination, and work experience requirements are satisfied, the
					CFP® candidate may download the Initial CFP® Application Form from FPAS website, which
					includes an ethics statement form and his/her license application with a bill for the
					initial license fee. Prior to certification, the CFP® candidate will be required to
					disclose past or pending litigation or agency proceedings and to acknowledge the right of
					FPAS to enforce its Professional Standards and Code of Ethics through due process
					described.
				</p>
				<p class="text-sm text-[#4a4a4a] leading-relaxed text-justify">
					Once certified, CFP® certificants must fulfil a biennial continuing education requirement
					of 30 hours to stay up-to-date on planning strategies and financial trends affecting
					their clients. In addition, the FPAS monitors compliance with its Professional Standards
					and Code of Ethics by requiring an annual disclosure statement and by investigating
					consumer complaints and certificants' periodic disclosures of investigations or legal
					proceedings.
				</p>
			</div>
			
		</div>
	</div>
	<div class="mt-20 ml-20 mr-20 text-[#4a4a4a] text-sm text-start">
		<p>FPAS Code of Ethics is compulsory and must be completed by a licensed AFP®, AWPCM and CFP® certificant.
Code of Ethics Workshop - Financial Advisers Act and Securities Act (FAA and SA) - 3 hours session and 3 in-house CPD credited within same calendar year from the AFP® certification approval date.</p>
	</div>
</section>