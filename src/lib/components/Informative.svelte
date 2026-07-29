<script lang="ts">
    import fpimg    from '../assets/fpimg.png';
    import consumer from '../assets/consumersIcon.png';
    import AboutCFP from '../assets/AboutCFP.png';
    import AboutFPAS from '../assets/AboutFPAS.png';
    import { onMount } from 'svelte';

    let sectionEl: HTMLElement | null = $state(null);
    let visible = $state(false);

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionEl) observer.observe(sectionEl);

        return () => observer.disconnect();
    });
</script>

<div
    bind:this={sectionEl}
    class="w-full px-3 sm:px-0 transition-all duration-2000 ease-out"
    style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(60px)'};"
>
    <section class="w-full bg-[#f0f2f5] py-10 px-4 sm:px-6 md:px-16 rounded-tl-[80px] rounded-br-[80px] mt-0 mb-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-6 md:gap-y-0 divide-y sm:divide-y-0 md:divide-x divide-gray-300">

            <!-- Financial Planner -->
            <div class="flex flex-col items-center text-center px-4 sm:px-6 gap-3 pt-6 first:pt-0 sm:pt-0">
                <img src={fpimg} alt="Financial Planner" class="w-20 h-20 object-contain" style="mix-blend-mode: multiply;" />
                <h3 class="text-gray-800 text-lg font-semibold mt-1">Financial Planner</h3>
                <div class="flex flex-col gap-1 mt-1">
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">Pathway to CFP®</a>
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">Examination Schedule</a>
                </div>
            </div>

            <!-- Consumer -->
            <div class="flex flex-col items-center text-center px-4 sm:px-6 gap-3 pt-6 sm:pt-0">
                <img src={consumer} alt="Consumer" class="w-20 h-20 object-contain" style="mix-blend-mode: multiply;" />
                <h3 class="text-gray-800 text-lg font-semibold mt-1">Consumer</h3>
                <div class="flex flex-col gap-1 mt-1">
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">What is Financial Planning</a>
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">CFP Directory</a>
                </div>
            </div>

            <!-- About CFP® -->
            <div class="flex flex-col items-center text-center px-4 sm:px-6 gap-3 pt-6 sm:pt-0">
                <img src={AboutCFP} alt="About CFP" class="w-20 h-20 object-contain" style="mix-blend-mode: multiply;" />
                <h3 class="text-gray-800 text-lg font-semibold mt-1">About CFP®</h3>
                <div class="flex flex-col gap-1 mt-1">
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">Why CFP®</a>
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">Value of CFP®</a>
                </div>
            </div>

            <!-- About FPAS -->
            <div class="flex flex-col items-center text-center px-4 sm:px-6 gap-3 pt-6 sm:pt-0">
                <img src={AboutFPAS} alt="About FPAS" class="w-20 h-20 object-contain" style="mix-blend-mode: multiply;" />
                <h3 class="text-gray-800 text-lg font-semibold mt-1">About FPAS</h3>
                <div class="flex flex-col gap-1 mt-1">
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">About FPAS</a>
                    <a href="#" class="text-[#3d4db7] text-sm hover:underline">Contact Us</a>
                </div>
            </div>

        </div>
    </section>
</div>