<!-- src/lib/components/FoundingCharterBanner.svelte -->
<script>
  import bgImage from '$lib/assets/founding-charter-bg.svg';
</script>

<section
  class="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
  style="background-image: url({bgImage});"
>
  <!-- white-to-transparent gradient overlay for text readability -->
  <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 md:via-white/70 to-transparent"></div>

  <div class="relative z-10 min-h-[420px] md:min-h-[480px] flex items-center px-6 py-14 md:px-16 lg:px-20">
    <div class="max-w-xl">
      <p class="text-xs md:text-sm font-bold tracking-widest text-blue-900 mb-4">
        ESTABLISHED ON 1ST DECEMBER 1998
      </p>

      <h2 class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
        Founding Charter Member
      </h2>

      <p class="text-sm md:text-base text-slate-700 leading-relaxed">
        Since its inception on 1st December 1998, FPAS had received support
        from many esteemed financial institutions in Singapore. Thus, we would
        like to continue to recognize the following founding Charter Members
        who had play a vital role in the first year of the formation of FPAS in
        1998.
      </p>
    </div>
  </div>
</section>