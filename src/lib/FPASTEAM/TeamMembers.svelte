<!-- src/lib/components/FpasTeam.svelte -->
<script>
  import { resolve } from '$app/paths';

  import galenWoo from '$lib/assets/team/galen-woo.jpg';
  import elizaPang from '$lib/assets/team/eliza-pang.png';
  import jocelynYong from '$lib/assets/team/jocelyn-yong.png';
  import faithCheong from '$lib/assets/team/faith-cheong.png';
  import sitiSarah from '$lib/assets/team/siti-sarah.png';

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Constitution', href: '/about/constitution' },
    { label: 'Founding Charter Members', href: '/about/founding-charter-member' },
    { label: 'Special Advisors & Advisory Members', href: '/about/advisory' },
    { label: 'Executive Council', href: '/about/executive-council' },
    { label: 'FPAS Team', href: '/about/fpas-team' },
    { label: 'FPAS Boards', href: '/about/fpas-boards' },
    { label: 'PDPA Privacy Policy', href: '/about/privacy-policy' },
    { label: 'Corporate Member', href: '/about/corporate-partners' },
  ];

  const currentPath = '/about/fpas-team';

  const teamMembers = [
    { photo: galenWoo, name: 'Galen Woo', role: 'Chief Executive Officer' },
    { photo: elizaPang, name: 'Eliza Pang', role: 'Governance & Operations Manager' },
    { photo: jocelynYong, name: 'Jocelyn Yong', role: 'Accounting Manager' },
    { photo: faithCheong, name: 'Faith Cheong', role: 'Certifications Manager' },
    { photo: sitiSarah, name: 'Siti Sarah', role: 'Marketing Executive' },
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

    <!-- Right: team content -->
    <div>
      <h2 class="text-2xl font-bold text-blue-900 underline decoration-2 underline-offset-4 mb-10">
        MEET THE TEAM
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {#each teamMembers as member (member.name)}
          <div class="flex flex-col items-start">
            <div>
              <img
                src={member.photo}
                alt={member.name}
                class="w-full aspect-auto object-fill"
              />
            </div>
            <p class="text-sm font-bold text-slate-900">{member.name}</p>
            <p class="text-sm text-slate-700 italic">{member.role}</p>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>