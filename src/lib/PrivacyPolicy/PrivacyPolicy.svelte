<!-- src/lib/components/FpasPrivacyPolicy.svelte -->
<script>
  import fpasLogo from '$lib/assets/fpas-logo-card.png';


  const privacyPolicyUrl = '/documents/FPAS-Revised-Constitution-1-Jan-2025.pdf';
</script>

<section class="w-full bg-white px-6 py-12 md:px-16 lg:px-20">
  <div class="mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-5 items-start lg:pl-20">

    <!-- Left: policy text -->
    <div>
      <h2 class="text-3xl font-extrabold text-blue-900 mb-8">
        FPAS Privacy Policy
      </h2>

      <div class="space-y-5  text-md text-slate-900 leading-relaxed text-justify">
        <p>
          The information contained in this web site is for general information purposes only. The information is provided by Financial Planning Association of Singapore and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
        </p>

        <p>
          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this web site.
        </p>

        <p>
          Through this web site you are able to link to other 3rd party web sites which are not under the control of Financial Planning Association of Singapore. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them, nor does it constitute our approval for you to copy or reference information on these other 3rd party web sites.
        </p>

        <p>
          Every effort is made to keep the website up and running smoothly. However, Financial Planning Association of Singapore takes no responsibility for, and will not be liable for, the web site being temporarily unavailable due to technical issues beyond our control.
        </p>

        <p>
         
            Click here to access FPAS Privacy Policy.
          
        </p>

        <p>
          <a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer" class="text-blue-800 hover:text-blue-600 underline">
            FPAS Privacy Policy (7th March 2024)
          </a>
        </p>
      </div>
    </div>

    <!-- Right: logo card with decorative shapes -->
    <div class="flex justify-center pt-4">
      <div class="relative w-96 sm:w-[28rem]">
        <!-- decorative gray block, top-left -->
        <div class="absolute -top-6 -left-6 w-14 h-14 bg-gray-200 -z-10"></div>
        <!-- decorative navy block, bottom-right -->
        <div class="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-900 -z-10"></div>

        <div class="relative  p-8 bg-white">
          <img
            src={fpasLogo}
            alt="FPAS - Financial Planning Association of Singapore"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>

  </div>
</section>