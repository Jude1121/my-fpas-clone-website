<!-- src/lib/components/AboutUsBanner.svelte -->
<script>
  import bgImage from '$lib/assets/about-us-bg.svg';
</script>

<div class="w-full bg-white px-4 py-10 md:px-8 md:py-14">
  <section
    class="relative mx-auto max-w-7xl overflow-hidden rounded-md bg-cover bg-center"
    style="background-image: url({bgImage});"
  >
    <!-- green corner accent (bottom left of text card) -->
    <div class="absolute bottom-0 left-72 hidden md:block">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M0 60 V0 H60 L0 60 Z" class="fill-lime-400" />
      </svg>
    </div>

    <div class="relative z-10 flex items-center min-h-[420px] px-6 py-10 md:py-16">
      <!-- frosted glass text card -->
      <div class="max-w-xl bg-white/70 backdrop-blur-sm rounded-tr-2xl p-6 md:p-10 justify-ce\
      nter">
        <p class="text-xs font-bold tracking-widest text-blue-900 mb-2">
          ABOUT US
        </p>

        <h2 class="text-2xl md:text-3xl font-extrabold font-dmsans text-blue-900 leading-snug mb-4">
          The Financial Planning<br />
          Association of Singapore (FPAS)
        </h2>

        <p class="text-sm md:text-base text-slate-800 leading-relaxed">
          is a non-profit professional association dedicated to developing
          and promoting an industry providing unbiased financial advice to
          the Singaporean.
        </p>
      </div>
    </div>
  </section>
</div>