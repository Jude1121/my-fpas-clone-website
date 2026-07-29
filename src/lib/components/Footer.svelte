<script lang="ts">
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7726!2d103.8921!3d1.3181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17e1f78c35c1%3A0x9a9e5c2d0e0a0e0a!2sPaya%20Lebar%20Square!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg';

  const socialLinks = [
    { name: 'Facebook',  url: 'https://www.facebook.com/FPAS.ORG.SG/' },
    { name: 'Instagram', url: 'https://www.instagram.com/fpas.sg/' },
    { name: 'LinkedIn',  url: 'https://www.linkedin.com/company/fpas-financial-planning-association-singapore/?originalSubdomain=sg' },
    { name: 'Twitter',   url: 'https://x.com/fpas_official' },
    { name: 'YouTube',   url: 'https://www.youtube.com/channel/UC8UPxMisIWVWDc0_HyRsEaQ' },
  ];

  function openExternal(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
</script>

<!-- ── SVG Snippets ────────────────────────────────────────────────────── -->
{#snippet FacebookIcon()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M24 12.073C24 5.404 18.628 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094
      10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697
      1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956
      1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
{/snippet}

{#snippet InstagramIcon()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919
      4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069
      4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204
      0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849
      0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919
      1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072
      2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014
      3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24
      12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618
      6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014
      15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0
      000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0
      100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
{/snippet}

{#snippet LinkedInIcon()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853
      0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
      1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
      7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063
      2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0
      .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24
      23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
{/snippet}

{#snippet TwitterIcon()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0
      002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0
      00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0
      00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0
      01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0
      01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0
      01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0
      007.557 2.209c9.053 0 13.998-7.496 13.998-13.985
      0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
{/snippet}

{#snippet YouTubeIcon()}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12
      3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502
      6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0
      002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0
      9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24
      12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
{/snippet}

<!-- ── Footer ─────────────────────────────────────────────────────────── -->
<footer class="bg-[#0d2f5c] text-white">

  <div class="max-w-7xl mx-auto px-6 py-10">
    <div class="flex flex-col lg:flex-row gap-8 items-start">

      <!-- Google Map -->
      <div class="flex-shrink-0 w-full lg:w-[360px]">
        <iframe
          src={mapSrc}
          width="360"
          height="220"
          style="border:0; display:block;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="FPAS Location - Paya Lebar Square"
          class="w-full lg:w-[360px] h-[220px]"
        ></iframe>
      </div>

      <!-- Organisation Info -->
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-lg leading-snug mb-4">
          Financial Planning Association of<br />Singapore
        </h2>
        <p class="text-sm mb-1 font-semibold">60 Paya Lebar Road,</p>
        <p class="text-sm mb-1 font-semibold">#13-37 Paya Lebar Square</p>
        <p class="text-sm mb-5">Singapore 409051</p>
        <p class="text-sm mb-1">Operating Hours: 9:30 AM to 5:00 PM</p>
        <p class="text-sm mb-5">(Closed on Saturday, Sunday and Public Holidays)</p>
        <p class="text-sm mb-1">UEN: S99SS0008L</p>
        <p class="text-sm">GST Registration No.: M90005984L</p>
      </div>

      <!-- Contact Details -->
      <div class="flex-shrink-0 min-w-[260px]">
        <h3 class="font-bold text-base mb-4">Contact Details</h3>

        <div class="flex items-start justify-between gap-8 mb-2">
          <div>
            <p class="text-sm">General Enquiries</p>
            <!-- mailto: is always safe, no SvelteKit routing involved -->
            <p class="text-sm">
              <a href="mailto:enquiry@fpas.org.sg" class="hover:underline">
                enquiry@fpas.org.sg
              </a>
            </p>
          </div>
          <p class="text-sm whitespace-nowrap">(65) 6209 2611</p>
        </div>

        <!-- Social Icons: buttons instead of <a href> to avoid SvelteKit href warning -->
        <div class="flex items-center gap-3 mt-5">
          {#each socialLinks as { name, url } (name)}
            <button
              type="button"
              onclick={() => openExternal(url)}
              aria-label={name}
              class="text-white hover:text-blue-300 transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0"
            >
              {#if name === 'Facebook'}
                {@render FacebookIcon()}
              {:else if name === 'Instagram'}
                {@render InstagramIcon()}
              {:else if name === 'LinkedIn'}
                {@render LinkedInIcon()}
              {:else if name === 'Twitter'}
                {@render TwitterIcon()}
              {:else if name === 'YouTube'}
                {@render YouTubeIcon()}
              {/if}
            </button>
          {/each}
        </div>
      </div>

    </div>
  </div>

  <!-- Bottom bar — internal SvelteKit routes, no warning -->
  <div class="border-t border-[#1a4a80]">
    <div class="max-w-7xl mx-auto px-6 py-4 text-center">
      <p class="text-sm">
        <a href="#" class="hover:underline">PDPA Policy</a>
        <span class="mx-2">|</span>
        <a href="#" class="hover:underline">Terms of Use</a>
        <span class="mx-2">|</span>
        Copyright &copy; 2026 Financial Planning Association of Singapore. All Rights Reserved.
      </p>
    </div>
  </div>

</footer>