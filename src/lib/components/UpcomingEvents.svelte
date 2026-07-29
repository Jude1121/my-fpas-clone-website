<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import m2Image from '../assets/m2.png';
  import m3Image from '../assets/m3.png';
  import m4Image from '../assets/m4.png';
  import { onMount } from 'svelte';

  interface CalendarEvent {
    id: string;
    day: number;
    month: string;
    examTitle: string;
    examCycle: string;
    link: string;
    imageSrc: string;
    imageAlt: string;
  }

  const events: CalendarEvent[] = $state([
    {
      id: 'M2',
      day: 22,
      month: 'MAY',
      examTitle: 'Module 2 Exam',
      examCycle: 'Cycle 2 Module 2',
      link: 'https://www.fpas.org.sg/events-single/Cycle-2-Examination-M2-2026',
      imageSrc: m2Image,
      imageAlt: 'Module 2 – Risk Management and Insurance Planning',
    },
    {
      id: 'M3',
      day: 29,
      month: 'MAY',
      examTitle: 'Module 3 Exam',
      examCycle: 'Cycle 2 Module 3',
      link: 'https://www.fpas.org.sg/events-single/Cycle-2-Examination-M3-2026',
      imageSrc: m3Image,
      imageAlt: 'Module 3 – Tax Planning and Estate Planning',
    },
    {
      id: 'M4',
      day: 3,
      month: 'JUNE',
      examTitle: 'Module 4 Exam',
      examCycle: 'Cycle 2 Module 4',
      link: 'https://www.fpas.org.sg/events-single/Cycle-2-Examination-M4-2026',
      imageSrc: m4Image,
      imageAlt: 'Module 4 – Investment Planning',
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
  class="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-25 py-10 font-inter transition-all duration-1000 ease-out"
  style="opacity: {visible ? 1 : 1}; transform: {visible ? 'translateX(0)' : 'translateX(-100px)'};"
>

  <!-- Header -->
  <div class="flex sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-8">
    <h1 class="text-2xl font-black tracking-wide text-[#1e2d6e] uppercase">Upcoming Events</h1>
    <a href={resolveRoute('/events')} class="flex items-center gap-2 text-xs sm:text-sm font-normal tracking-widest text-[#1e2d6e] uppercase hover:text-[#2d6a8f] transition-colors">
      See All Events
      <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>

  <!-- Cards Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
    {#each events as event (event.id)}
      <article
        class="rounded-bl-[40px] rounded-tr-[40px] pb-10 sm:pb-14 md:pb-20 bg-white border border-gray-100 overflow-hidden drop-shadow-2xl flex flex-col transition-all duration-300 cursor-pointer"
        class:shadow-xl={hoveredCard === event.id}
        class:-translate-y-1={hoveredCard === event.id}
        onmouseenter={() => (hoveredCard = event.id)}
        onmouseleave={() => (hoveredCard = null)}
        aria-label={event.examTitle}
      >

        <!-- Card image -->
        <img
          src={event.imageSrc}
          alt={event.imageAlt}
          class="w-full h-full object-cover block"
          style="aspect-ratio: 6/3;"
          loading="lazy"
          decoding="async"
        />

        <!-- Divider -->
        <div class="mx-4 border-t border-gray-100" role="separator"></div>

        <!-- Bottom: date badge + exam label -->
        <div class="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5">
          <div
            class="flex-shrink-0 w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[62px] md:h-[62px] rounded-bl-[10px] rounded-tr-[10px] bg-gray-100 flex flex-col items-center justify-center shadow-inner"
            aria-label="{event.day} {event.month}"
          >
            <span class="text-[20px] sm:text-[23px] md:text-[25px] font-extrabold text-[#1a3a8f] leading-none">
              {event.day}
            </span>
            <span class="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-[2px]">
              {event.month}
            </span>
          </div>
          <div class="pl-2 sm:pl-4 md:pl-5">
            <p class="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#1a3a8f]">
              {event.examTitle}
            </p>
            <p class="text-[13px] sm:text-[15px] md:text-[18px] text-gray-400 mt-[6px]">
              {event.examCycle}
            </p>
          </div>
        </div>

      </article>
    {/each}
  </div>

</section>