<!-- src/lib/components/ThePublicSection.svelte -->
<script>
  import { resolve } from '$app/paths';
  import publicImage from '$lib/assets/cfp/the-public.svg';

  const checklistItems = [
    'Those who work with a CERTIFIED FINANCIAL PLANNER professional feel more strongly confident about their financial situation than those managing their own finances or working with a different type of financial adviser.',
    'Consumers who have a written, comprehensive plan are nearly three times more likely to feel strongly confident about achieving their life goals.'
  ];
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    <!-- Left: text content -->
    <div>
      <p class="text-xs md:text-sm font-bold  tracking-widest text-blue-900 mb-4">
        THE PUBLIC
      </p>

      <h2 class="text-2xl md:text-3xl font-extrabold font-dmsans text-blue-900 leading-snug mb-6">
        Satisfied, Confident,
        <br />
        Knowledgeable and Successful
        <br />
        at Sticking to Strategies
      </h2>

      <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
        <span class="font-bold text-slate-700">CERTIFIED FINANCIAL PLANNER™</span> professionals
        are trusted financial professionals who work with individuals and families to review all
        aspects of their financial affairs and recommend practical, easy-to-understand solutions
        for every life stage. FPSB's research with more than 19,000 consumers worldwide showed:
      </p>

      <!-- checklist -->
      <ul class="space-y-6 mb-8">
        {#each checklistItems as item}
          <li class="flex gap-4 items-start">
            <span class="shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full border-2 border-lime-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-lime-500" />
              </svg>
            </span>
            <p class="text-sm md:text-base text-slate-700 leading-relaxed">
              {item}
            </p>
          </li>
        {/each}
      </ul>

      <a 
        href={resolve('/consumers/infographic')}
        class="bg-blue-900 text-white text-sm md:text-sm font-bold px-6 py-3 rounded-bl-xl rounded-tr-xl hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
      >
        VIEW THE INFOGRAPHIC
      </a>
    </div>

    <!-- Right: image with decorative shapes -->
    <div class="relative flex justify-center md:justify-end">

      <!-- gray outline box (behind, top right) -->
      <div class="absolute -top-4 right-4 w-24 h-20 border border-gray-300 -z-10 hidden sm:block"></div>

      <!-- navy filled rectangle (left side, mid height) -->
      <div class="absolute top-1/2 -left-4 -translate-y-1/2 w-6 h-16 bg-blue-900 -z-10 hidden sm:block"></div>

      <!-- lime green outline box (behind, bottom right) -->
      <div class="absolute bottom-4 -right-8 w-24 h-28 border-2 border-lime-400 -z-10 hidden sm:block"></div>

      <!-- main image -->
      <img
        src={publicImage}
        alt="CERTIFIED FINANCIAL PLANNER professional working with a client"
        class="relative z-10 w-full max-w-md rounded-tl-2xl rounded-br-2xl object-cover"
      />
    </div>

  </div>
</section>