<!-- src/lib/components/FpasBoards.svelte -->
<script>
  import certificationBoard from '$lib/assets/boards/certification-board.svg';
  import marketingBoard from '$lib/assets/boards/marketing-board.svg';
  import standardsBoard from '$lib/assets/boards/standards-board.svg';
  import financeBoard from '$lib/assets/boards/finance-board.svg';
  import membershipBoard from '$lib/assets/boards/membership-board.png';
  import ethicsBoard from '$lib/assets/boards/ethics-board.png';
  import editorialBoard from '$lib/assets/boards/editorial-board.png';

  const boards = [
    {
      photo: certificationBoard,
      title: 'Certification Board',
      description: `The Certification Board committee members are all CFP® certificants and will focus on the CFP® Certification Standards as well as on curriculum and examination matters relating to Body of Knowledge for the CFP® Certification Programme i.e. Module 1 to M6, the alignment of Job Analysis through FPSB, review and implementation of new study guides for the CFP® certification programme.

They will also review and make changes to the examination questions, including relevance to the syllabus for the CFP® Certification Programme.`,
      imagePosition: 'left',
      imageWidth: 'w-80 sm:w-106'
    },
    {
      photo: marketingBoard,
      title: 'Marketing & Communication Board',
      description: `The Marketing & Communication board committee members are instrumental in ensuring the biennial issuance of the Financial Planning Magazine. They are also instrumental in ensuring a professional image for FPAS through establishing appropriate publicity and branding for FPAS and our membership in the industry and profession.`,
      imagePosition: 'right',
      imageWidth: 'w-80 sm:w-106'
    },
    {
      photo: standardsBoard,
      title: 'Standards Board',
      description: `The Standards Board committee members will help FPAS establish guidance on parameters relevant for financial planners to drive FPAS to become a thought leader in the financial planning area. These parameters will include the various personal financial ratios, amount of emergency funds for various age group, Singapore inflation rate, average costs of education in Singapore and key overseas locations like Australia, UK, USA etc.`,
      imagePosition: 'left',
      imageWidth: 'w-80 sm:w-106'
    },
    {
      photo: financeBoard,
      title: 'Finance Board',
      description: `The Finance Board committee members are instrumental in ensuring the financial compliance and deference. They are qualified accounting professionals.`,
      imagePosition: 'right',
      imageWidth: 'w-80 sm:w-106'
    },
    {
      photo: membershipBoard,
      title: 'Membership and Public Education Board',
      description: `The Membership Board committee members are instrumental in ensuring the membership events and CPD development programs are current and timely. They come from a wide spectrum of professionals in the financial industry and include senior corporate officers from the banks, fund and wealth managers, directors of insurance companies, risk managers and successful financial planning professionals.`,
      imagePosition: 'left',
      imageWidth: 'w-96 sm:w-[36rem]'
    },
    {
      photo: ethicsBoard,
      title: 'Ethics Board',
      description: `The Ethics Board committee members are instrumental in ensuring the strict adherence of the Code of Ethics stipulated in our Practitioner's Manual. They help ensure the highest level of compliance of our profession.`,
      imagePosition: 'right',
      imageWidth: 'w-96 sm:w-[36rem]'
    },
    {
      photo: editorialBoard,
      title: 'Editorial Board',
      description: `<strong>The Editorial Board</strong> plays a key role in the development and publication of FPAS's biannual <em>Financial Planning Magazine</em>. The committee is responsible for curating relevant content, contributing write-ups, and overseeing editorial quality to ensure the magazine reflects thought leadership and professionalism. The Board works closely with industry contributors and subject matter experts to produce insightful articles that educate, inform, and engage FPAS members and the wider financial planning community.`,
      imagePosition: 'left',
      isHtml: true,
      imageWidth: 'w-96 sm:w-[36rem]'
    },
  ];
</script>

<section class="w-full bg-white px-6 py-12 md:px-16 lg:px-20">
  <div class="mx-auto max-w-6xl flex flex-col gap-16">
    {#each boards as board (board.title)}
      <div
        class="flex flex-col md:items-center gap-10 md:gap-16
          {board.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}"
      >
        <!-- Text -->
        <div class="md:w-1/2 md:shrink-0">
          <h3 class="text-md font-bold text-blue-900 mb-3">{board.title}</h3>
          {#if board.isHtml}
            <p class="text-md text-slate-600 leading-relaxed">
              {@html board.description}
            </p>
          {:else}
            <p class="text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {board.description}
            </p>
          {/if}
        </div>

        <!-- Image with decorative layered shapes -->
        <div class="flex-1 flex {board.imagePosition === 'left' ? 'justify-start' : 'justify-end'}">
          <div class="relative {board.imageWidth ?? 'w-72 sm:w-80'}">

            {#if board.imagePosition === 'right'}
              <div class="absolute top-1/3 -right-5 w-8 h-20 bg-blue-900 -z-10"></div>
              <div class="absolute bottom-5 -left-6 w-10 h-10 bg-gray-100 -z-10"></div>
              <div class="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-lime-400 rounded-tl-lg -z-10"></div>
            {:else}
              <div class="absolute top-1/3 -left-5 w-8 h-20 bg-blue-900 -z-10"></div>
              <div class="absolute bottom-5 -right-6 w-10 h-10 bg-gray-100 -z-10"></div>
              <div class="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-lime-400 rounded-tr-lg -z-10"></div>
            {/if}

            <img
              src={board.photo}
              alt={board.title}
              class="relative w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>