<!-- src/lib/components/CorporatePartners.svelte -->
<script>
  import { resolve } from '$app/paths';

  import dbs from '$lib/assets/partners/dbs.svg';
  import penguinSecurities from '$lib/assets/partners/penguin-securities.png';
  import phillipCapital from '$lib/assets/partners/phillip-capital.png';
  import suss from '$lib/assets/partners/suss.svg';
  import ngeeAnnPolytechnic from '$lib/assets/partners/ngee-ann-polytechnic.jpg';
  import fortisWills from '$lib/assets/partners/fortis-wills.png';
  import fpam from '$lib/assets/partners/fpam.png';
  import simplyWills from '$lib/assets/partners/simply-wills.png';
  import goalsMapper from '$lib/assets/partners/goals-mapper.png';
  import nanyangPolytechnic from '$lib/assets/partners/nanyang-polytechnic.png';
  import isca from '$lib/assets/partners/isca.png';
  import bestOfMe from '$lib/assets/partners/best-of-me.png';

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Constitution', href: '/about/constitution' },
    { label: 'Founding Charter Members', href: '/about/founding-charter-member' },
    { label: 'Special Advisors & Advisory Members', href: '/about/advisory' },
    { label: 'Executive Council', href: '/about/executive-council' },
    { label: 'FPAS Team', href: '/about/fpas-team' },
    { label: 'FPAS Boards', href: '/about/fpas-boards' },
    { label: 'PDPA Privacy Policy', href: '/about/privacy-policy' },
    { label: 'Corporate Partners', href: '/about/corporate-partners' },
  ];

  const currentPath = '/about/corporate-partners';

  const engagementItems = [
    'Participate in FPAS Tea Time Talks.',
    'Preferred rates for practitioners for CPD-related courses.',
    'Preferred rates for practitioners for major events and talks organized by FPAS.',
    'Preferred rates for practitioners for the exam and registration fees.',
    'Five copies of FPAS Magazine for each issue.',
    'One Full Page ROP advertisement for FPAS Magazine for each issue.',
    "Five tickets to FPAS Members' Networking Night.",
  ];

  const partnerLogos = [
    { logo: dbs, name: 'DBS' },
    { logo: penguinSecurities, name: 'Penguin Securities' },
    { logo: phillipCapital, name: 'PhillipCapital', size: 'max-h-24' },
    { logo: suss, name: 'Singapore University of Social Sciences' },
    { logo: ngeeAnnPolytechnic, name: 'Ngee Ann Polytechnic' },
    { logo: fortisWills, name: 'Fortis Wills' },
    { logo: fpam, name: 'FPAM', size: 'max-h-24' },
    { logo: simplyWills, name: 'Simply Wills', size: 'max-h-24' },
    { logo: goalsMapper, name: 'GoalsMapper' },
    { logo: nanyangPolytechnic, name: 'Nanyang Polytechnic' },
    { logo: isca, name: 'Institute of Singapore Chartered Accountants' },
    { logo: bestOfMe, name: 'BestOfMe' },
  ];
</script>

<section class="w-full bg-white px-6 py-12 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">

    <!-- Left: sidebar navigation -->
    <nav class="border-t border-gray-200">
      <ul>
        {#each navLinks as link (link.href)}
          <li class="border-b border-dashed border-gray-300">
            <a 
              href={resolve(link.href)}
              class="block py-3 text-sm
                {link.href === currentPath
                  ? 'font-bold text-slate-900'
                  : 'text-blue-800 hover:text-blue-600'}
                transition-colors"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- Right: corporate partners content -->
    <div>
      <h2 class="text-lg font-bold text-blue-900 mb-8">
        CORPORATE PARTNERS
      </h2>

      <p class="text-md text-slate-700 leading-relaxed mb-6">
        FPAS Corporate Partnership allows your company to gain exposure to industry leaders, access to our platform of certified financial planners, while also providing savings on FPAS's well-known and respected education and certification programs such as the AFP<sup>®</sup>, AWP<sup>CM</sup> and CFP<sup>®</sup> programs.
      </p>

      <p class="text-md text-slate-700 leading-relaxed mb-8">
        Please contact <span class="font-bold">Corporate Partnership</span> at (65) 6209 2611 or email <span class="font-bold">enquiry@fpas.org.sg</span> for information.
      </p>

      <p class="text-md font-bold text-slate-900 mb-4">
        FPAS Corporate Partnership engagement include:
      </p>

      <ul class="mb-12 space-y-6">
        {#each engagementItems as item (item)}
          <li class="text-md text-slate-700 leading-relaxed pl-4 relative">
            <span class="absolute left-0">»</span>
            {item}
          </li>
        {/each}
      </ul>

      <h3 class="text-sm font-bold text-blue-900 mb-6">
        FPAS CORPORATE PARTNERS:
      </h3>

      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-x-5 gap-y-8 items-center">
        {#each partnerLogos as partner (partner.name)}
          <img
            src={partner.logo}
            alt={partner.name}
            class="{partner.size ?? 'max-h-14'} w-auto object-contain"
          />
        {/each}
      </div>
    </div>

  </div>
</section>