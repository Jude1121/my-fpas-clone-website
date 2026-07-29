<script lang="ts">
  // No props needed — static section
</script>

<div class="w-full md:px-16 lg:px-24 lg:pt-10 pt-7">
  <section class="relative overflow-hidden bg-[#EEEAE3] py-16 sm:py-20 md:py-24 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center rounded-sm">

    <!-- Diagonal overlay -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background: linear-gradient(
          172deg,
          #ffffff 0%,
          #ffffff 30%,
          transparent 30%
        );
      "
    ></div>

    <!-- ── Decorative squares — LEFT ──────────────────────────────────── -->
    <div class="absolute left-0 lg:top-[58%] top-[64%] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bg-[#1a3a8f] rounded-tl-[10px] rounded-br-[10px] sm:rounded-tl-[15px] sm:rounded-br-[15px] -translate-y-1/2"></div>
    <div class="absolute left-[65px] sm:left-[85px] md:left-[110px] top-[75%] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-[#b0b4bc] rounded-tr-[10px] rounded-bl-[10px] sm:rounded-tr-[15px] sm:rounded-bl-[15px] -translate-y-1/2 opacity-80"></div>

    <!-- ── Decorative squares — RIGHT ─────────────────────────────────── -->
    <div class="absolute right-[60px] sm:right-[80px] md:right-[100px] lg:top-[20%] top-[30%] w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-[#1a3a8f] rounded-tl-[10px] rounded-br-[10px] sm:rounded-tl-[15px] sm:rounded-br-[15px]"></div>
    <div class="absolute right-[3px] sm:right-[4px] md:right-[5px] lg:top-[20%] w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-[#b0b4bc] rounded-tr-[10px] rounded-bl-[10px] sm:rounded-tr-[15px] sm:rounded-bl-[15px] opacity-80"></div>
    <div class="absolute right-[6px] sm:right-[8px] md:right-[10px] md:top-[calc(20%+60px)] top-[calc(43%+60px)] sm:top-[calc(20%+75px)] md:top-[calc(20%+95px)] w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-[#b0b4bc] rounded-tr-[10px] rounded-bl-[10px] sm:rounded-tr-[15px] sm:rounded-bl-[15px] opacity-60"></div>

    <!-- ── Centre content ─────────────────────────────────────────────── -->
    <div class="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-6 text-center">
      <p class="text-[#1e2d6e] text-xl mt-30 lg:mt-0 sm:text-2xl md:text-3xl italic font-medium tracking-wide">
        Global excellence in financial planning
      </p>

      <a
        href="#"
        class="bg-[#1e2d6e] hover:bg-[#ffffff] border-[#1e2d6e] border-[1px] hover:text-[#1e2d6e] text-white text-sm font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-bl-[15px] rounded-tr-[15px] transition-colors duration-200"
      >
        Contact Us
      </a>
    </div>

  </section>
</div>