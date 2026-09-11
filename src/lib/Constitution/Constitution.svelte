<!-- src/lib/components/Constitution.svelte -->
<script>
  import fpasLogo from '$lib/assets/fpas-logo.png';

  const constitutionPdfUrl = '/documents/FPAS-Revised-Constitution-1-Jan-2025.pdf';
</script>

<section class="w-full bg-white px-6 py-16 md:px-16 lg:px-20">
  <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    <!-- Left: title + link -->
    <div>
      <h2 class="text-3xl font-extrabold text-blue-900 mb-8">
        CONSTITUTION
      </h2>

      <p class="text-md">
        <a 
          href={constitutionPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-800 hover:text-blue-600 underline" 
        >
          Click here to read the FPAS-Revised-Constitution-as-at 1st January 2025 (PDF file format)
        </a>
      </p>
    </div>

    <!-- Right: logo with decorative shapes -->
    <div class="flex justify-center md:justify-end">
      <div class="relative w-56 sm:w-64">
        <!-- decorative gray block, left -->
        <div class="absolute top-1/2 -translate-y-1/2 -left-6 w-10 h-10 bg-gray-300 -z-10"></div>
        <!-- decorative thin outline bracket, top-right -->
        <div class="absolute -top-6 -right-2 w-16 h-24 border-t border-r border-gray-300 -z-10"></div>

        <img
          src={fpasLogo}
          alt="FPAS - Financial Planning Association of Singapore"
          class="relative w-full h-auto object-contain"
        />
      </div>
    </div>

  </div>
</section>