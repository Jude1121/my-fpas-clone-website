<!-- src/lib/components/WhyFirmsValueCFP.svelte -->
<script>
  const video = {
    videoId: 'arDkkC0Iju0',
    title: 'Why Firms Value CFP Certification'
  };

  const checklistItems = [
    { id: 'community', text: 'International Community' },
    { id: 'practitioners', text: '160,000+ Elite Practitioners' },
    { id: 'standards', text: 'Rigorous Global Standards' },
    { id: 'clients', text: "Place Client's Interest First" }
  ];
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-6xl">

    <!-- Heading -->
    <h2 class="text-center text-2xl md:text-3xl font-extrabold font-dmsans text-blue-900 mb-12">
      Why Firms Value CFP Certification
    </h2>

    <div class="flex flex-col md:flex-row md:flex-nowrap items-center gap-10 md:gap-16">

      <!-- Left: video embed -->
      <div class="relative w-full md:flex-1 md:min-w-0 max-w-xl aspect-video bg-black overflow-hidden shrink-0">
        <iframe
          src="https://www.youtube.com/embed/{video.videoId}"
          title={video.title}
          class="absolute inset-0 w-full h-full"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Right: checklist, vertically centered beside the video -->
      <ul class="flex flex-col justify-center gap-6 w-full md:w-[320px] shrink-0">
        {#each checklistItems as item, i (item.id)}
          <li class="flex gap-3 items-center">
            <span class="shrink-0 flex items-center justify-center w-6 h-6 rounded bg-lime-100 border border-lime-400">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 3.5" stroke="#65a30d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <p class="text-sm md:text-base {i === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}">
              {item.text}
            </p>
          </li>
        {/each}
      </ul>

    </div>
  </div>
</section>