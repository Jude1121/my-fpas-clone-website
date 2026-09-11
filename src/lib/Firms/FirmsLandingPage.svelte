<!-- src/lib/components/FirmsSection.svelte -->
<script>
  import firmsImage from '$lib/assets/cfp/firms.svg';

  const leftColumn = [
    {
      id: 'complaints',
      percent: '59%',
      description: 'of firms reported that employing CFP professionals led to fewer client complaints.',
      icon: 'badge'
    },
    {
      id: 'satisfaction',
      percent: '69%',
      description: 'of firms reported that CFP professionals have a higher rate of growth of assets under management.',
      icon: 'smile'
    },
    {
      id: 'grow',
      percent: '79%',
      description: 'of firms plan to grow the number of CFP professionals.',
      icon: 'clock'
    }
  ];

  const rightColumn = [
    {
      id: 'risk',
      percent: '69%',
      description: 'of firms reported that employing CFP professionals lowered corporate risk.',
      icon: 'trending'
    },
    {
      id: 'retention',
      percent: '76%',
      description: 'of firms found that employing CFP professionals led to increased client retention.',
      icon: 'dollar'
    },
    {
      id: 'clientsat',
      percent: '84%',
      description: 'of firms said employing CFP professionals had a positive impact on client satisfaction within the firm.',
      icon: 'dollar'
    }
  ];
</script>

{#snippet icon(type)}
  {#if type === 'badge'}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
    </svg>
  {:else if type === 'dollar'}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v20M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.5 2.2 3 5 3.5 5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5" />
    </svg>
  {:else if type === 'smile'}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  {:else if type === 'trending'}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
    </svg>
  {:else if type === 'clock'}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  {/if}
{/snippet}

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_380px] items-start gap-12">

    <!-- Left: text + stats -->
    <div>
      <p class="text-xs md:text-sm font-bold tracking-widest text-blue-900 mb-4">
        FIRMS
      </p>

      <h2 class="text-2xl md:text-3xl font-extrabold font-dmsans text-blue-900 leading-snug mb-6">
        More Revenue, Fewer
        <br />
        Complaints, Satisfied Clients
      </h2>

      <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-10">
        FPSB's international study conducted with 92 financial services firms in 12 territories
        representing over 120,000 financial advisors showed why the majority of firms plan to grow
        their number of <span class="font-bold text-slate-700">CERTIFIED FINANCIAL PLANNER</span>
        professionals
      </p>

      <!-- stats grid: two columns -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-10">
        <div class="flex flex-col gap-8">
          {#each leftColumn as stat (stat.id)}
            <div class="flex gap-4">
              <span class="shrink-0 text-lime-500 mt-1">
                {@render icon(stat.icon)}
              </span>
              <div>
                <p class="text-2xl md:text-3xl font-extrabold text-blue-900 mb-1">{stat.percent}</p>
                <p class="text-sm text-slate-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          {/each}
        </div>

        <div class="flex flex-col gap-8">
          {#each rightColumn as stat (stat.id)}
            <div class="flex gap-4">
              <span class="shrink-0 text-lime-500 mt-1">
                {@render icon(stat.icon)}
              </span>
              <div>
                <p class="text-2xl md:text-3xl font-extrabold text-blue-900 mb-1">{stat.percent}</p>
                <p class="text-sm text-slate-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <a
        href="#"
        class=" rounded-bl-xl rounded-tr-xl inline-block bg-blue-900 text-white text-xs md:text-sm font-bold tracking-wide px-6 py-4 hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
      >
        VIEW THE INFOGRAPHIC
      </a>
    </div>

    <!-- Right: image with decorative shapes -->
    <div class="relative flex justify-center lg:justify-end">

      <!-- gray outline box (behind, top right) -->
      <div class="absolute -top-4 right-0 w-24 h-20 border border-gray-300 -z-10 hidden sm:block"></div>

      <!-- navy filled rectangle (left side, mid height) -->
      <div class="absolute top-1/2 -left-4 -translate-y-1/2 w-6 h-16 bg-blue-900 -z-10 hidden sm:block"></div>

      <!-- lime green outline box (behind, right side) -->
      <div class="absolute bottom-6 -right-8 w-24 h-28 border-2 border-lime-400 -z-10 hidden sm:block"></div>

      <!-- main image -->
      <img
        src={firmsImage}
        alt="Team collaborating around a table, representing financial services firms"
        class="relative z-10 w-full max-w-sm rounded-tr-2xl object-cover"
      />
    </div>

  </div>
</section>