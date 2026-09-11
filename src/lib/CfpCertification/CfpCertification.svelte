<!-- src/lib/components/WhyCFPSection.svelte -->
<script>
  import { resolve } from '$app/paths';
  import cfpLogo from '$lib/assets/cfp/cfp-logo.svg';
</script>

<section class="relative w-full bg-white px-6 py-16 md:px-16 lg:px-20 overflow-hidden">
  <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    <!-- Left: text content -->
    <div>
      <p class="text-xs md:text-sm font-bold tracking-widest text-blue-900 mb-4">
        WHY CFP
      </p>

      <h2 class="text-3xl md:text-4xl font-extrabold font-dmsans text-blue-900 leading-snug mb-6">
        The Global Symbol of Excellence
        <br />
        in Financial Planning
      </h2>

      <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-5 text-justify">
        The <span class="font-bold text-slate-800">CERTIFIED FINANCIAL PLANNER™</span> credential
        is the most desired and respected global certification for those seeking to demonstrate
        their commitment to competent and ethical financial planning practice.
      </p>

      <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-8 text-justify">
        <span class="font-bold text-slate-800">CERTIFIED FINANCIAL PLANNER™</span> professionals
        meet initial and ongoing education, experience and professional development requirements,
        pass a rigorous exam that assesses competency, and adhere to a code of ethics, pledging to
        provide financial planning in the interests of clients and with the highest ethical and
        professional standards.
      </p>

      <a 
        href={resolve('/cfp/pathway')}
        class="inline-block bg-blue-900 text-white text-xs md:text-sm font-extrabold tracking-wide px-6 py-4 rounded hover:bg-blue-800 transition-colors"
      >
        VIEW CFP® CERTIFICATION PATHWAY
      </a>
    </div>

    <!-- Right: CFP logo with decorative shapes -->
    <div class="relative flex flex-col items-center justify-center py-10">

     

      <!-- CFP logo -->
      <img
        src={cfpLogo}
        alt="CFP Certification - Certified Financial Planner"
        class="relative z-10 w-100 md:w-150 mb-4"
      />

     
    </div>

  </div>
</section>