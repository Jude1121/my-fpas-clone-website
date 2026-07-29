<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import news1Image from '../assets/news1.png';
  import news2Image from '../assets/SD-img1.png';
  import news3Image from '../assets/news3.png';
  import { onMount } from 'svelte';

  interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    imageSrc: string;
    imageAlt: string;
    hasIcon: boolean;
  }

  const news: NewsItem[] = $state([
    {
      id: 'news-1',
      title: 'FPAS x BestOfMe MOU Signing',
      excerpt: 'FPAS partners with BestOfMe to strengthen leadership development and elevate professional growth for FPAS memb...',
      date: '6 April 2026',
      imageSrc: news1Image,
      link: 'https://www.fpas.org.sg/media-release-single/69d364117098ffe7e5f54180',
      imageAlt: 'FPAS x BestOfMe MOU Signing event photo',
      hasIcon: true,
    },
    {
      id: 'news-2',
      title: 'Notice on Revision of CFP® Modules Examina...',
      excerpt: 'The Financial Planning Association of Singapore (FPAS) will implement revised examination fees for CFP® Module...',
      date: '2 April 2026',
      imageSrc: news2Image,
      link: 'https://www.fpas.org.sg/media-release-single/69cdd1ac7098ffe7e5f5412e',
      imageAlt: 'New Exam Fee Notice document',
      hasIcon: false,
    },
    {
      id: 'news-3',
      title: 'FPAS x ISCA MOU Signing',
      excerpt: 'On 29 January, FPAS and ISCA Academy signed an MOU, formalised by FPAS CEO Galen Woo and ISCA CEO Mr Quek Mu L...',
      date: '29 January 2026',
      imageSrc: news3Image,
      link: 'https://www.fpas.org.sg/media-release-single/69807915f2468b5c2d89b0bf',
      imageAlt: 'FPAS x ISCA MOU Signing event photo',
      hasIcon: true,
    },
  ]);

  let hoveredCard = $state<string | null>(null);

  let sectionEl: HTMLElement | null = $state(null);
  let visible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionEl) observer.observe(sectionEl);

    return () => observer.disconnect();
  });
</script>

<section
  bind:this={sectionEl}
  class="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-25 py-10 transition-all duration-1000 ease-out "
  style="opacity: {visible ? 1 : 1}; transform: {visible ? 'translateX(0)' : 'translateX(100px)'};"
>

  <!-- Header -->
  <div class="flex sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-8 ">
    <h1 class="text-2xl sm:text-2xl font-extrabold tracking-wide text-[#1e2d6e] uppercase">Latest News</h1>
    <a href={resolveRoute('/news')} class="flex items-center gap-2 text-xs sm:text-sm font-normal tracking-widest text-[#1e2d6e] uppercase hover:text-[#2d6a8f] transition-colors">
      See All News
      <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>

  <!-- News Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
    {#each news as item (item.id)}
      <article
        class="relative rounded-bl-[40px] rounded-tr-[40px] pb-3 bg-white border border-gray-100 overflow-hidden drop-shadow-2xl flex flex-col transition-all duration-300 cursor-pointer"
        class:shadow-xl={hoveredCard === item.id}
        class:-translate-y-1={hoveredCard === item.id}
        style="box-shadow: 0 4px 24px rgba(45,106,143,0.07);"
        onmouseenter={() => (hoveredCard = item.id)}
        onmouseleave={() => (hoveredCard = null)}
        aria-label={item.title}
      >

        <!-- Full-width image header -->
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          class="w-full object-cover block"
          style="aspect-ratio: 15/9;"
          loading="lazy"
          decoding="async"
        />

        <!-- Content -->
        <div class="flex flex-col flex-1 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 sm:pb-5 gap-2">

          <!-- Title with optional megaphone icon -->
          <h3 class="lg:pt-5 text-[18px] sm:text-[21px] md:text-[25px] font-medium text-[#1a3a8f] leading-snug">
            {#if item.hasIcon}
              <span aria-hidden="true">📣 </span>
            {/if}
            {item.title}
          </h3>

          <!-- Excerpt -->
          <p class="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed flex-1">
            {item.excerpt}
          </p>

          <!-- Date -->
          <p class="text-[12px] sm:text-[13px] text-gray-400 mt-2">
            {item.date}
          </p>

        </div>

      </article>
    {/each}
  </div>

</section>