<!-- src/lib/components/EstablishedSection.svelte -->
<script>
  import heroImage from '$lib/assets/established-hero.svg';
  import CFPTerritory from '$lib/assets/CFP  Territory.jpeg'
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto grid max-w-7xl grid-cols-1 items-center justify-items-center gap-12 md:gap-20 md:grid-cols-2 text-center md:text-left">

    <!-- Left: text content -->
    <div class="flex flex-col items-center md:items-start">
      <h2 class="text-xl md:text-2xl font-bold uppercase text-blue-800 tracking-wide mb-6">
        Established on 1st December 1998
      </h2>

      <p class="text-sm md:text-base text-slate-700 leading-relaxed mb-5">
        FPAS is part of a global assembly of financial planning bodies,
        and a licensee of the Financial Planning Standards Board Ltd., a
        US-based non-profit organisation launched in October 2004 to
        set standards for and oversee the international CFP®
        certification program. FPSB currently has 26 members, including
        Certified Financial Planner Board of Standards (CFP® Board),
        and the number of CFP professionals reached a global high of
        188,104 at year-end 2019.
      </p>

      <p class="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
        After Australia and Japan, FPAS was the third member to join the
        federation of CFP® certification bodies in the Asian region and
        the tenth member of FPSB internationally.
      </p>

      <button class="bg-blue-900 text-white text-sm md:text-base font-medium px-6 py-3 rounded-bl-xl rounded-tr-xl hover:bg-blue-800 transition-colors">
        Meet the Team
      </button>
    </div>

    <!-- main image -->
    <img
      src={heroImage}
      alt="Two colleagues reviewing documents together"
      class="relative z-10 w-full max-w-md mx-auto"
    />

  </div>

  <!-- CFP Territory image: centered, full width -->
  <div class="w-full flex justify-center mt-16">
    <img
      src={CFPTerritory}
      alt="CFP Territory"
      class="w-full max-w-none"
    />
  </div>
</section>