<!-- src/lib/components/AdvisoryCouncilBanner.svelte -->
<script>
  import bgImage from '$lib/assets/about-us-bg.svg';
</script>

<section
  class="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
  style="background-image: url({bgImage});"
>
  <!-- white-to-transparent gradient overlay for text readability -->
  <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/85 md:via-white/60 to-transparent"></div>

  <div class="relative z-10 flex min-h-[140px] items-center px-4 py-6 xs:min-h-[160px] sm:min-h-[220px] sm:px-8 sm:py-8 md:min-h-[390px] md:px-16 lg:px-2 lg:justify-center lg:pr-250 lg:pb-30">
    <div>
      <p class="mb-1.5 text-[11px] font-bold tracking-widest text-blue-900 sm:mb-2 sm:text-xs md:text-sm">
        ABOUT US
      </p>

      <h1 class="text-xl font-extrabold leading-tight text-blue-900 sm:text-2xl md:text-3xl">
        Corporate Partners
      </h1>
    </div>
  </div>
</section>