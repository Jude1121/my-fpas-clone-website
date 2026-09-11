<!-- src/lib/components/VisionObjectives.svelte -->
<script>
  const objectives = [
    {
      number: 1,
      text: 'Educate and inform the public of the need for objective professional advice in making secure financial decisions'
    },
    {
      number: 2,
      text: 'Ensure sufficient professional and ethical standards to maintain the confidence and trust of existing and prospective customers'
    },
    {
      number: 3,
      text: 'To provide members with education, training and information to enhance their provision of objective professional financial advice'
    },
    {
      number: 4,
      text: 'Develop and maintain high ethical standards for members'
    },
    {
      number: 5,
      text: 'Represent the industry and its members to ensure an operating environment which is conducive to providing high quality financial advice'
    }
  ];

  const leftColumn = objectives.slice(0, 3);
  const rightColumn = objectives.slice(3);
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-24">
  <div class="mx-auto max-w-6xl">

    <!-- Vision and Objectives heading -->
    <h2 class="text-center text-lg md:text-xl font-extrabold uppercase text-blue-900 tracking-wide mb-8">
      Vision and Objectives
    </h2>

    <!-- Vision statement -->
    <p class="text-center text-lg md:text-xl font-bold text-blue-900 leading-relaxed max-w-4xl mx-auto mb-14">
      The FPAS vision is to ensure that all Singaporeans have access to responsible and appropriate
      financial planning advice by raising the professional standards of the industry through education
      and a shared code of ethics
    </p>

    <!-- Objectives grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-24">
      <!-- Left column -->
      <div class="flex flex-col gap-8">
        {#each leftColumn as item (item.number)}
          <div class="flex gap-5 items-start">
            <span class="text-4xl md:text-5xl font-light text-stone-400 leading-none shrink-0">
              {item.number}
            </span>
            <p class="text-sm md:text-base text-slate-800 leading-relaxed pt-1">
              {item.text}
            </p>
          </div>
        {/each}
      </div>

      <!-- Right column -->
      <div class="flex flex-col gap-8">
        {#each rightColumn as item (item.number)}
          <div class="flex gap-5 items-start">
            <span class="text-4xl md:text-5xl font-light text-stone-400 leading-none shrink-0">
              {item.number}
            </span>
            <p class="text-sm md:text-base text-slate-800 leading-relaxed pt-1">
              {item.text}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Fairness and Transparency section -->
    <div>
      <h3 class="text-2xl md:text-3xl font-extrabold text-blue-900 mb-5">
        Fairness and Transparency by FPAS
      </h3>

      <p class="text-sm md:text-base text-slate-800 leading-relaxed max-w-5xl">
        FPAS provides for transparent and non-discriminatory access to all applicants for certification,
        exam candidates, certified CFP professionals and others seeking information about CFP certification
        and information about certified professionals.
      </p>
    </div>

  </div>
</section>