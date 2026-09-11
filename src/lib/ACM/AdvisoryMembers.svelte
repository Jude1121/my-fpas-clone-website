<!-- src/lib/components/AdvisoryCouncilMembers.svelte -->
<script>
  import { resolve } from '$app/paths';

  import euniceChua from '$lib/assets/advisors/eunice-chua.png';
  import kohHuiJian from '$lib/assets/advisors/koh-hui-jian.png';
  import nelsonNeo from '$lib/assets/advisors/nelson-neo.jpg';
  import dennisTan from '$lib/assets/advisors/dennis-tan.png';
  import neoPohLing from '$lib/assets/advisors/neo-poh-ling.png';
  import andyTan from '$lib/assets/advisors/andy-tan.png';

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Constitution', href: '/about/constitution' },
    { label: 'Founding Charter Members', href: '/about/founding-charter-member' },
    { label: 'Advisory Council Members', href: '/about/advisory' },
    { label: 'Executive Council', href: '/about/executive-council' },
    { label: 'FPAS Team', href: '/about/fpas-team' },
    { label: 'FPAS Boards', href: '/about/fpas-boards' },
    { label: 'PDPA Privacy Policy', href: '/about/pdpa-privacy-policy' },
    { label: 'Corporate Member', href: '/about/corporate-partners' },
  ];

  const currentPath = '/about/advisory';

  const advisors = [
    {
      photo: euniceChua,
      name: 'Eunice Chua',
      role: 'CEO',
      org: 'Financial Industry Disputes Resolution Centre (FIDReC)'
    },
    {
      photo: kohHuiJian,
      name: 'Koh Hui-Jian',
      role: 'CEO',
      org: 'Manulife Investment Management Singapore'
    },
    {
      photo: nelsonNeo,
      name: 'Nelson Neo',
      role: 'MD and Head of Retail Banking',
      org: 'DBS Bank'
    },
    {
      photo: dennisTan,
      name: 'Dennis Tan, CFP®',
      role: 'Regional CEO',
      org: 'Prudential Plc.'
    },
    {
      photo: neoPohLing,
      name: 'Neo Poh Ling',
      role: 'Head of Finance Program',
      org: 'Singapore University of Social Sciences (SUSS)'
    },
    {
      photo: andyTan,
      name: 'Andy Tan',
      role: 'Director',
      org: 'Credit Counselling Singapore'
    },
  ];
</script>

<section class="w-full bg-white px-6 py-12 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">

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

    <!-- Right: advisory council members grid -->
    <div>
      <h2 class="text-sm font-bold uppercase tracking-wide text-blue-900 mb-6">
        Advisory Council Members
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {#each advisors as advisor (advisor.name)}
          <div>
            <img
              src={advisor.photo}
              alt={advisor.name}
              class="w-full aspect-auto object-fill  "
            />
            <p class="text-sm font-bold text-slate-900">{advisor.name}</p>
            <p class="text-sm text-slate-700">{advisor.role}</p>
            <p class="text-sm text-slate-700">{advisor.org}</p>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>