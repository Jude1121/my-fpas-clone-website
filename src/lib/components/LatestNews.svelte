<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import { news } from '$lib/data/news';
  import { onMount } from 'svelte';

  const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  // Always the 3 most recent items from the shared news list —
  // stays in sync with NewsList.svelte automatically.
  let latestNews = $derived(
    [...news]
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 3)
  );

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

  // News hrefs can be: an internal route ('/newsroom/...'), an external
  // URL ('https://...'), or a placeholder ('#') for articles not yet linked.
  // Only real internal routes should go through resolveRoute().
  function newsHref(href: string): string {
    if (href === '#' || href.startsWith('http')) return href;
    return resolveRoute(href as any);
  }
</script>

<section
  bind:this={sectionEl}
  class="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-25 py-10 transition-all duration-1000 ease-out "
  style="opacity: {visible ? 1 : 1}; transform: {visible ? 'translateX(0)' : 'translateX(100px)'};"
>

  <!-- Header -->
  <div class="flex sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-8 ">
    <h1 class="text-2xl sm:text-2xl font-extrabold tracking-wide text-[#1e2d6e] uppercase">Latest News</h1>
    <a href={resolveRoute('/newsroom/media-release')} class="flex items-center gap-2 text-xs sm:text-sm font-normal tracking-widest text-[#1e2d6e] uppercase hover:text-[#2d6a8f] transition-colors">
      See All News
      <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>

  <!-- News Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
    {#each latestNews as item (item.id)}
      <a 
        href={newsHref(item.href)}
        target={item.href?.startsWith('http') ? '_blank' : undefined}
        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        class="relative rounded-bl-[40px] rounded-tr-[40px] pb-3 bg-white border border-gray-100 overflow-hidden drop-shadow-2xl flex flex-col transition-all duration-300 cursor-pointer"
        class:shadow-xl={hoveredCard === item.id}
        class:-translate-y-1={hoveredCard === item.id}
        style="box-shadow: 0 4px 24px rgba(45,106,143,0.07);"
        onmouseenter={() => (hoveredCard = item.id)}
        onmouseleave={() => (hoveredCard = null)}
        aria-label={item.title}
      >

        <!-- Full-width image header -->
        {#if item.image}
          <img
            src={item.image}
            alt={item.title}
            class="w-full object-cover block"
            style="aspect-ratio: 15/9;"
            loading="lazy"
            decoding="async"
          />
        {:else}
          <div
            class="w-full flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400"
            style="aspect-ratio: 15/9;"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-10 w-10" aria-hidden="true">
              <path
                d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16M14 14l1.586-1.586a2 2 0 0 1 2.828 0L20 14M6 4h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" stroke="none" />
            </svg>
            <span class="text-xs font-semibold uppercase tracking-wide text-slate-400">No image available</span>
          </div>
        {/if}

        <!-- Content -->
        <div class="flex flex-col flex-1 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 sm:pb-5 gap-2">

          <!-- Title with optional megaphone icon -->
          <h3 class="lg:pt-5 text-[18px] sm:text-[21px] md:text-[25px] font-medium text-[#1a3a8f] leading-snug">
            {#if item.emoji}
              <span aria-hidden="true">{item.emoji} </span>
            {/if}
            {item.title}
          </h3>

          <!-- Excerpt -->
          <p class="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed flex-1">
            {item.excerpt}
          </p>

          <!-- Date -->
          <p class="text-[12px] sm:text-[13px] text-gray-400 mt-2">
            {dateFormatter.format(item.date)}
          </p>

        </div>

      </a>
    {/each}
  </div>

</section>