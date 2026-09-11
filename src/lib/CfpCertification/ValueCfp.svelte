<!-- src/lib/components/ValueOfCFPCertification.svelte -->
<script>
  import { resolve } from '$app/paths';

  import publicImg from '$lib/assets/cfp/the-public.svg';
  import practitionersImg from '$lib/assets/cfp/practitioners.svg';
  import firmsImg from '$lib/assets/cfp/firms.svg';

  const cards = [
    {
      image: publicImg,
      title: 'The Public',
      description: [
        { text: 'Consumers rely on the ', bold: false },
        { text: 'CERTIFIED FINANCIAL PLANNER', bold: true },
        { text: ' marks to help them identify competent, ethical financial planners who have committed to placing their clients\u2019 interests first.', bold: false }
      ],
      href: '/cfp/the-public'
    },
    {
      image: practitionersImg,
      title: 'Practitioners',
      description: [
        { text: 'Financial planners and financial advisers value ', bold: false },
        { text: 'CERTIFIED FINANCIAL PLANNER', bold: true },
        { text: ' certification, with many saying they were able to increase both their compensation and client base within 12 months of becoming certified with the CFP® marks.', bold: false }
      ],
      href: '/cfp/practitioners'
    },
    {
      image: firmsImg,
      title: 'Firms',
      description: [
        { text: 'Financial services firms value ', bold: false },
        { text: 'CERTIFIED FINANCIAL PLANNER', bold: true },
        { text: ' professionals for their contributions to productivity and profitability, as well as for lowering firms\u2019 compliance risks and increasing client satisfaction.', bold: false }
      ],
      href: '/cfp/firms'
    }
  ];
</script>

<section class="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-6xl">

    <!-- Heading -->
    <h2 class="text-center text-base sm:text-lg md:text-xl font-bold uppercase font-dmsans text-blue-900 tracking-wide mb-4 sm:mb-6 px-2">
      Value of CFP Certification
    </h2>

    <!-- Intro paragraph -->
    <p class="text-center text-sm md:text-base text-slate-500 leading-relaxed max-w-5xl mx-auto mb-10 sm:mb-16 px-2">
      By completing internationally recognized initial and ongoing CFP® certification requirements, a CERTIFIED FINANCIAL PLANNER professional demonstrates to clients and potential clients a commitment to professionalism and that she or he has met rigorous competency, ethics and professional practice standards to provide comprehensive financial planning services. CFP® Certification benefits a variety of individuals and groups, including:
    </p>

    <!-- 3-column cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-8">
      {#each cards as card (card.title)}
        <div class="flex flex-col items-center text-center md:items-start md:text-left">

          <!-- image with decorative frame shapes -->
          <div class="relative w-full max-w-[260px] sm:max-w-[280px] mb-6 sm:mb-8">
            <!-- gray outline box (behind, top) - hidden on very small screens to reduce clutter -->
            <div class="hidden sm:block absolute top-0 left-8 w-32 h-24 border border-gray-300 -z-10"></div>
            <!-- lime green outline box (behind, bottom right of image) -->
            <div class="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 border-2 border-lime-400 -z-10"></div>
            <!-- navy filled square accent -->
            <div class="absolute bottom-6 -left-3 sm:bottom-8 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-900 -z-10"></div>

            <!-- main image with notched corner -->
            <img
              src={card.image}
              alt={card.title}
              class="relative z-10 w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
              style="clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%);"
            />
          </div>

          <!-- title -->
          <h3 class="text-lg md:text-xl font-bold text-blue-900 mb-3">
            {card.title}
          </h3>

          <!-- description -->
          <p class="text-sm text-slate-700 leading-relaxed mb-6 max-w-sm">
            {#each card.description as part}
              {#if part.bold}<span class="font-bold">{part.text}</span>{:else}{part.text}{/if}
            {/each}
          </p>

          <!-- CTA -->
          <a
            href={resolve(card.href)}
            class="inline-block bg-blue-900 text-white text-xs font-bold tracking-wide px-6 py-3  hover:bg-white hover:text-blue-800 shadow-md transition-colors rounded-bl-lg  rounded-tr-lg "
          >
            LEARN MORE
          </a>
        </div>
      {/each}
    </div>

  </div>
</section>