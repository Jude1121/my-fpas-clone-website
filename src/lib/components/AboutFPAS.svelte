<script>
    import FPassBg from '../assets/financial image.png';

    import { onMount } from 'svelte';

    let isMobile = $state(false);
    let animated = $state(false);

    function checkMobile() {
        isMobile = window.innerWidth < 768;
    }

    onMount(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);

        requestAnimationFrame(() => {
            setTimeout(() => {
                animated = true;
            }, 100);
        });

        return () => window.removeEventListener('resize', checkMobile);
    });
</script>

<section
    class="relative w-full min-h-[400px] flex items-center overflow-hidden pb-0 transition-all duration-1500 ease-out"
    style="
        background-image: url({FPassBg});
        background-size: cover;
        background-position: {isMobile ? '78% center' : 'center'};
        transform: {animated ? 'translateX(0)' : 'translateX(100%)'};
        opacity: {animated ? 1 : 0};
    "
>
    <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/40 md:from-white/85 md:via-white/50 md:to-transparent z-0"></div>

    <div class="relative z-10 flex flex-col justify-center px-5 sm:px-12 md:px-20 py-16 max-w-full md:max-w-[1000px] text-center lg:text-start">

        <p class="text-[#1a3a8f] text-[12px] font-bold tracking-[0.18em] uppercase mb-4">
            Established on 1<sup>st</sup> December 1998
        </p>

        <h1 class="text-[#1a3a8f] text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-6">
            The Financial Planning Association <br/>
            of Singapore (FPAS)
        </h1>

        <p class="text-gray-800 text-base md:text-lg leading-relaxed mb-8 max-w-full md:max-w-[480px]">
            is a non-profit professional association dedicated to developing
            and promoting an industry providing unbiased financial advice to
            the Singaporean public.
        </p>

        <div class="flex flex-col md:flex-row flex-wrap gap-4 w-full md:w-fit">
            <button class="bg-[#3d4db7] hover:bg-[#2e3d9e] text-white text-base font-semibold px-7 py-3 rounded transition-colors duration-200 w-full md:w-auto">
                Find me a planner
            </button>
            <button class="border-2 border-gray-400 hover:border-gray-700 text-gray-800 text-base font-semibold px-7 py-3 rounded bg-white/60 hover:bg-white/80 transition-colors duration-200 w-full md:w-auto">
                Sign up for an account
            </button>
        </div>

    </div>
</section>

