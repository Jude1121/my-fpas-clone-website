<!-- src/lib/components/LifesBetterWithCFP.svelte -->
<script>
  const videos = [
    {
      videoId: '-Q7u0MPrzNQ',
      title: 'The Value of Financial Planning - Live Your Best Life'
    },
    {
      videoId: '24L1jwlHnf0',
      title: 'The Value of Financial Planning - FPSB Consumer Research'
    },
    {
      videoId: 'NiP0U_He3Xg',
      title: 'Introduction to Certified Financial Planner'
    }
  ];

  const checklistItems = [
    { id: 'honesty', normal: '', bold: 'Honesty and integrity', rest: '' },
    { id: 'interests', normal: 'Placing ', bold: "client's interests", rest: ' first' },
    { id: 'needs', normal: 'Understanding ', bold: "client's needs and goals", rest: '' },
    { id: 'explaining', normal: 'Explaining ', bold: 'financial matters', rest: ' in simple terms' }
  ];
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl">

    <!-- Heading -->
    <h2 class="text-center text-xl md:text-2xl font-extrabold text-blue-900 mb-12">
      Life's Better with a <span class="uppercase">CERTIFIED FINANCIAL PLANNER</span> Professional
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Left: video list -->
      <div class="flex flex-col divide-y divide-gray-200">
        {#each videos as video (video.videoId)}
          <div class="py-5 first:pt-0">
            <div class="relative w-full max-w-md aspect-video bg-black overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/{video.videoId}"
                title={video.title}
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/each}
      </div>

      <!-- Right: text content -->
      <div class="flex flex-col">
        <p class="text-sm md:text-base text-slate-700 leading-relaxed mb-5">
          When seeking objective, expert and trusted financial planning advice, consumers can
          look to the CFP certification marks &ndash; <span class="font-bold">CERTIFIED FINANCIAL PLANNER</span>
          professionals have agreed to adhere to a rigorous Code of Ethics and Professional
          Responsibility that requires them to place clients' interests ahead of their own.
          Moreover, FPSB's global consumer research showed that life's better with a
          <span class="font-bold">CERTIFIED FINANCIAL PLANNER</span> professional.
        </p>

        <p class="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
          Clients of CFP professionals tend to be more satisfied, more confident they will reach
          their financial and life goals, and feel they are better at sticking to their financial
          strategies. Consumers gave CFP professionals high marks on:
        </p>

        <!-- checklist -->
        <ul class="space-y-4 mb-8">
          {#each checklistItems as item (item.id)}
            <li class="flex gap-3 items-center">
              <span class="shrink-0 flex items-center justify-center w-6 h-6 rounded bg-lime-100 border border-lime-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7L5.5 10L11.5 3.5" stroke="#65a30d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <p class="text-sm md:text-base text-slate-800">
                {item.normal}<span class="font-bold">{item.bold}</span>{item.rest}
              </p>
            </li>
          {/each}
        </ul>

        <a 
          href="https://fpas.org.sg/assets/public2_LifesBetterwithCFP_infographic_2016_Members_Digital_FINAL.png"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-fit bg-blue-900 text-white text-xs md:text-sm font-bold tracking-wide px-6 py-4 hover:bg-white hover:text-blue-800 shadow-lg transition-colors rounded-bl-xl rounded-tr-xl"
        >
          VIEW THE INFOGRAPHIC
        </a>
      </div>

    </div>
  </div>
</section>