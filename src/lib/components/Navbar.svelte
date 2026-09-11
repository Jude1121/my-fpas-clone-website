<script lang="ts">
  import fpasLogo from '../assets/fpas-logo.png';
  import { resolve } from '$app/paths';
  let isOpen = $state(false);
  const menu = [
    'About Us',
    'CFP® Certification',
    'Consumers',
    'Financial Planner Awards',
    'Events',
    'Newsroom',
    'FPAS Resources',
    'Contact Us'

  ];
  const aboutLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Founding Charter Members', href: '/about/founding-charter-member' },
    { label: 'Special Advisors & Advisory Members', href: '/about/advisory' },
    { label: 'Executive Council', href: '/about/executive-council' },
    { label: 'FPAS Team', href: '/about/fpas-team' },
    { label: 'FPAS Boards', href: '/about/fpas-boards' },
    { label: 'Corporate Members', href: '/about/corporate-partners' },
    { label: 'Constitution', href: '/about/constitution' },
    { label: 'FPAS Privacy Policy', href: '/about/privacy-policy' },
  ];
  const cfpLinks = [
    { label: 'CFP Certification', href: '/cfp' },
    { label: 'The Public', href: '/cfp/the-public' },
    { label: 'Practitioners', href: '/cfp/practitioners' },
    { label: 'Firms', href: '/cfp/firms' },
    { label: 'Pathway to CFP', href: '/cfp/pathway' },
    { label: 'Certification Process', href: '/cfp/certification-process' },
    { label: 'CFP Certification Renewal', href: '/cfp/renewal' },
    { label: 'CFP Cross-Border Practice', href: '/cfp/cross-border-practice' },
    { label: 'IBF Accreditation', href: '/cfp/ibf-accreditation' },
    { label: 'Frequently Asked Questions', href: '/documents/faq.pdf', external: true },
  ];
  const consumersLinks = [
    { label: 'Consumers', href: '/consumers' },
    { label: 'Find me a Planner', href: '/consumers/find-a-planner' },
  ];

  const newsroomLinks = [
    { label: 'Media Release', href: '/newsroom/media-release' },
    { label: 'Publications', href: '/newsroom/publication' },
  ];
  const dropdownMap: Record<string, { label: string; href: string; external?: boolean }[]> = {
    'About Us': aboutLinks,
    'CFP® Certification': cfpLinks,
    'Consumers': consumersLinks,
    'Newsroom': newsroomLinks,
  };
  // Top-level menu items that are direct links (no dropdown) rather than plain text.
  const simpleLinkMap: Record<string, { href: string; external?: boolean }> = {
    'Financial Planner Awards': { href: 'https://www.fpa.sg/', external: true },
    'Events': { href: '/events' },
    'Contact Us': { href: '/contact' },
    'FPAS Resources': { href: '/resources' },

  };
  const desktopOpenMap: Record<string, boolean> = $state({
    'About Us': false,
    'CFP® Certification': false,
    'Consumers': false,
    'Newsroom': false,
  });
  const mobileOpenMap: Record<string, boolean> = $state({
    'About Us': false,
    'CFP® Certification': false,
    'Consumers': false,
    'Newsroom': false,
  });
  function setDesktopOpen(item: string, val: boolean) {
    desktopOpenMap[item] = val;
  }
  function toggleMobile(item: string) {
    mobileOpenMap[item] = !mobileOpenMap[item];
  }
</script>
<nav class="w-full shadow-sm ">
  <div class="bg-[#002f86] flex items-center lg:px-20 px-3 py-3">
    <div class="hidden md:block bg-white px-4 py-2 rounded-r-[30px] absolute left-[80px] top-[6px] z-10">
      <a href={resolve('/')}>
        <img src={fpasLogo} alt="FPAS Logo" class="h-[110px] w-auto object-contain" />
      </a>
    </div>
    <div class="ml-auto">
      <button class="text-white text-[16px] md:text-[18px] rounded pl-4 pr-4 pb-2 pt-2 hover:bg-white hover:text-[#002f86] font-medium">
        Login
      </button>
    </div>
  </div>
  <div class="bg-white border-b border-gray-200">
    <!-- Mobile hamburger header -->
    <div class="md:hidden flex items-center justify-between px-4 py-3">
      <button
        onclick={() => { isOpen = !isOpen; }}
        aria-label="Toggle menu"
        class="flex flex-col justify-center gap-[5px] p-1"
      >
        <span class="block w-[22px] h-[2px] bg-[#333] transition-all duration-300 {isOpen ? 'rotate-45 translate-y-[7px]' : ''}"></span>
        <span class="block w-[22px] h-[2px] bg-[#333] transition-all duration-300 {isOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-[22px] h-[2px] bg-[#333] transition-all duration-300 {isOpen ? '-rotate-45 -translate-y-[7px]' : ''}"></span>
      </button>
      <a href={resolve('/')}>
        <img src={fpasLogo} alt="FPAS Logo" class="h-[48px] w-auto object-contain" />
      </a>
    </div>
    <!-- Mobile dropdown -->
    <div class="md:hidden overflow-hidden transition-all duration-300 ease-in-out {isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}">
      <div class="border-t border-gray-200">
        <ul class="flex flex-col text-[18px] text-[#1d1d1d]">
          {#each menu as item (item)}
            {#if dropdownMap[item]}
              <li class="border-b border-gray-100">
                <button
                  onclick={() => toggleMobile(item)}
                  class="w-full flex items-center justify-between px-5 py-[14px] text-[18px] text-[#1d1d1d] hover:text-[#002f86] hover:bg-gray-50 transition-colors"
                >
                  <span>{item}</span>
                  <svg
                    class="w-4 h-4 transition-transform duration-300 {mobileOpenMap[item] ? 'rotate-180' : ''}"
                    fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div class="overflow-hidden transition-all duration-300 ease-in-out {mobileOpenMap[item] ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}">
                  <ul class="bg-gray-50 border-t border-gray-100">
                    {#each dropdownMap[item] as link (link.label)}
                      <li class="border-b border-gray-100 last:border-none">
                        <a 
                          href={link.external ? link.href : resolve(link.href as any)}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          class="block w-full text-left px-8 py-[12px] text-[17px] text-[#444] hover:text-[#002f86] hover:bg-blue-50 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </div>
              </li>
            {:else if simpleLinkMap[item]}
              <li class="border-b border-gray-100 last:border-none">
                <a
                  href={simpleLinkMap[item].external ? simpleLinkMap[item].href : resolve(simpleLinkMap[item].href as any)}
                  target={simpleLinkMap[item].external ? '_blank' : undefined}
                  rel={simpleLinkMap[item].external ? 'noopener noreferrer' : undefined}
                  class="block px-5 py-[14px] text-[18px] text-[#1d1d1d] hover:text-[#002f86] hover:bg-gray-50 transition-colors"
                >
                  {item}
                </a>
              </li>
            {:else}
              <li class="px-5 py-[14px] border-b border-gray-100 last:border-none cursor-pointer hover:text-[#002f86] hover:bg-gray-50 transition-colors">
                {item}
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    </div>
    <!-- Desktop menu -->
    <div class="hidden md:block max-w-7xl mx-auto pl-[200px] pr-10">
      <ul class="flex items-center gap-6 lg:gap-8 text-[16px] lg:text-[18px] text-[#1d1d1d] py-5 whitespace-nowrap">
        {#each menu as item (item)}
          <li class="relative">
            {#if dropdownMap[item]}
              <button
                onmouseenter={() => setDesktopOpen(item, true)}
                onmouseleave={() => setDesktopOpen(item, false)}
                class="cursor-pointer hover:text-[#002f86] transition-colors bg-transparent border-none p-0 text-[16px] lg:text-[18px] text-[#1d1d1d] font-normal"
              >
                {item}
              </button>
              {#if desktopOpenMap[item]}
                <div
                  role="menu"
                  tabindex="-1"
                  aria-label="{item} menu"
                  onmouseenter={() => setDesktopOpen(item, true)}
                  onmouseleave={() => setDesktopOpen(item, false)}
                  class="absolute top-full left-0 mt-0 w-fit bg-white border border-gray-200 shadow-xl z-50"
                >
                  {#each dropdownMap[item] as link (link.label)}
                    <a 
      
                      role="menuitem"
                      href={link.external ? link.href : resolve(link.href as any)}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      class="w-full text-left px-5 py-[14px] text-[17px] text-[#1d1d1d] border-b border-gray-100 last:border-none hover:bg-gray-100 hover:text-[#002f86] transition-colors block"
                    >
                      {link.label}
                    </a>
                  {/each}
                </div>
              {/if}
            {:else if simpleLinkMap[item]}
              <a
                href={simpleLinkMap[item].external ? simpleLinkMap[item].href : resolve(simpleLinkMap[item].href as any)}
                target={simpleLinkMap[item].external ? '_blank' : undefined}
                rel={simpleLinkMap[item].external ? 'noopener noreferrer' : undefined}
                class="cursor-pointer hover:text-[#002f86] transition-colors"
              >
                {item}
              </a>
            {:else}
              <span class="cursor-pointer hover:text-[#002f86] transition-colors">{item}</span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>