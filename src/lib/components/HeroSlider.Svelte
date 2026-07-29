<script lang="ts">
	import { onMount } from 'svelte';
	import img1 from '../assets/SD-img1.png';
	import img2 from '../assets/SD-img2.png';
	import img3 from '../assets/SD-img3.png';
	import img4 from '../assets/SD-img4.png';

	let currentSlide = $state(0);
	let interval: ReturnType<typeof setInterval>;
	let isDesktop = $state(false);
	let animated = $state(false);

	const slides = [
		{ image: img1, link: 'https://www.fpas.org.sg/media-release-single/69cdd1ac7098ffe7e5f5412e' },
		{ image: img2, link: 'https://www.fpas.org.sg/' },
		{ image: img3, link: 'https://fpas.org.sg/media-release-single/688b1a67b3fd562396f0675c' },
		{ image: img4, link: 'https://m.youtube.com/watch?v=RttlZhT9DEc&ra=m' }
	];

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(nextSlide, 6000);
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		resetInterval();
	}

	function goToSlide(index: number) {
		currentSlide = index;
		resetInterval();
	}

	function openLink(url: string) {
		window.open(url, '_blank', 'noreferrer');
	}

	function checkDesktop() {
		isDesktop = window.innerWidth >= 1024;
	}

	onMount(() => {
		checkDesktop();
		window.addEventListener('resize', checkDesktop);
		interval = setInterval(nextSlide, 8000);

		// Trigger slide-in animation on next frame
		requestAnimationFrame(() => {
			setTimeout(() => {
				animated = true;
			}, 100);
		});

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', checkDesktop);
		};
	});
</script>

<div
	class="relative w-[95%] h-[200px] sm:h-[350px] md:h-[550px] mx-auto overflow-hidden rounded-2xl transition-all duration-1500 ease-out"
	style="
		transform: {animated ? 'translateX(0)' : 'translateX(-100%)'};
		opacity: {animated ? 1 : 0};
	"
>

	<!-- SLIDES -->
	{#each slides as slide, index}
		<div
			class="absolute inset-0 transition-opacity duration-700 ease-in-out"
			style:opacity={index === currentSlide ? 1 : 0}
			style:z-index={index === currentSlide ? 10 : 0}
		>
			<button
				class="w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer block"
				onclick={() => openLink(slide.link)}
			>
				<img
					src={slide.image}
					alt="slide {index + 1}"
					class="w-full h-full object-cover"
				/>
			</button>
		</div>
	{/each}

	<!-- LEFT BUTTON -->
	{#if isDesktop}
		<button
			onclick={prevSlide}
			class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black w-10 h-10 rounded-full text-xl font-bold z-20"
		>
			❮
		</button>
	{/if}

	<!-- RIGHT BUTTON -->
	{#if isDesktop}
		<button
			onclick={nextSlide}
			class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black w-10 h-10 rounded-full text-xl font-bold z-20"
		>
			❯
		</button>
	{/if}

	<!-- DOTS -->
	<div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
		{#each slides as _, index}
			<button
				onclick={() => goToSlide(index)}
				class="w-4 h-4 rounded-full border-2 transition-all duration-300
					{index === currentSlide
						? 'bg-indigo-900 border-indigo-900'
						: 'bg-white/50 border-indigo-900'}"
			></button>
		{/each}
	</div>

</div>