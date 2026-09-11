<!-- src/lib/components/ExecutiveCouncil.svelte -->
<script>
  import { resolve } from '$app/paths';
  import benFok from '$lib/assets/exco/ben-fok.png';
  import lisaLee from '$lib/assets/exco/lisa-lee.png';
  import neoLeyLee from '$lib/assets/exco/neo-ley-lee.jpg';
  import simBoonWah from '$lib/assets/exco/sim-boon-wah.png';
  import roselineFong from '$lib/assets/exco/roseline-fong.png';
  import jensenWee from '$lib/assets/exco/jensen-wee.png';
  import ngJianDa from '$lib/assets/exco/ng-jian-da.png';
  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Constitution', href: '/about/constitution' },
    { label: 'Founding Charter Members', href: '/about/founding-charter-member' },
    { label: 'Special Advisors & Advisory Members', href: '/about/advisory' },
    { label: 'Executive Council', href: '/about/executive-council' },
    { label: 'FPAS Team', href: '/about/fpas-team' },
    { label: 'FPAS Boards', href: '/about/fpas-boards' },
    { label: 'PDPA Privacy Policy', href: '/about/privacy-policy' },
    { label: 'Corporate Members', href: '/about/corporate-partners' },
  ];
  const currentPath = '/about/executive-council';
  const excoMembers = [
    { photo: benFok, name: 'Dr Ben Fok, CFP®', role: 'President' },
    { photo: lisaLee, name: 'Ms. Lisa Lee, CFP®', role: 'Vice President' },
    { photo: neoLeyLee, name: 'Ms. Neo Ley Lee, CFP®', role: 'Honorary Secretary' },
    { photo: simBoonWah, name: 'Mr. Sim Boon Wah, CFP®', role: 'Honorary Treasurer' },
    { photo: roselineFong, name: 'Ms. Roseline Fong, CFP®', role: 'Immediate Past President' },
    { photo: jensenWee, name: 'Mr. Jensen Wee, CFP®', role: 'EXCO Member' },
    { photo: ngJianDa, name: 'Mr. Ng Jian Da, CFP®', role: 'EXCO Member' },
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

    <!-- Right: executive council grid -->
    <div>
      <h2 class="text-base font-bold uppercase tracking-wide text-blue-900 mb-8">
        Executive Council (2025-2027)
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {#each excoMembers as member (member.name)}
          <div class="flex flex-col items-start">
            <div>
              <img
                src={member.photo}
                alt={member.name}
                class="w-full aspect-auto object-fill "
              />
            </div>
            <p class="text-sm font-bold text-slate-900 leading-snug">{member.name}</p>
            <p class="text-sm text-slate-600">{member.role}</p>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>