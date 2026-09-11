<!-- src/lib/components/AdvisoryCouncilBanner.svelte -->
<script>
  import bgImage from '$lib/assets/about-us-bg.svg';
</script>

<section
  class="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
  style="background-image: url({bgImage});"
>
  <!-- white-to-transparent gradient overlay for text readability -->
  <div class="absolute inset-0 bg-gradient-to-r from-white via-white/85 md:via-white/60 to-transparent"></div>


  <div class="relative z-10 min-h-[170px] md:min-h-[390px] flex items-center px-6 py-8 md:px-16 lg:px-20">
    <div>
      <p class="text-xs md:text-sm font-bold tracking-widest text-blue-900 mb-2">
        ABOUT US
      </p>

      <h1 class="text-2xl md:text-3xl font-extrabold text-blue-900">
        Executive Council
      </h1>
    </div>
  </div>
</section>