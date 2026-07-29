<script lang="ts">
    import CfpImg from '../assets/whycfpimage.png';
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

<section bind:this={sectionEl} class="w-full bg-white py-16 px-6 md:px-20 lg:text-start text-center">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <!-- LEFT: Image with decorative shapes -->
        <div
            class="relative w-full md:w-1/2 flex-shrink-0 py-10 pr-10 transition-all duration-3000 ease-out "
            style="
                opacity: {visible ? 1 : 0};
                transform: {visible ? 'translateX(0)' : 'translateX(80px)'};
            "
        >
            <!-- Decorative outline square — top right -->
            <div class="absolute top-2 right-0 w-[45%] h-[45%] border border-gray-300 rounded-3xl z-0 bg-transparent"></div>

            <!-- Decorative outline square — bottom right -->
            <div class="absolute bottom-2 right-4 w-[45%] h-[45%] border border-gray-300 rounded-3xl z-0 bg-transparent"></div>

            <!-- Navy blue rectangle — far left middle -->
            <div class="absolute -left-4 rounded-bl-[20px] top-[35%] w-15 h-30 bg-[#1a3a8f] z-10"></div>

            <!-- Main image -->
            <div class="relative z-20 ml-8 rounded-2xl overflow-hidden">
                <img src={CfpImg} alt="CFP Financial Planners" class="w-full h-full object-cover" />
            </div>
        </div>

        <!-- RIGHT: Text content -->
        <div
            class="w-full md:w-1/2 flex flex-col gap-5 transition-all duration-3000 ease-out"
            style="
                opacity: {visible ? 1 : 0};
                transform: {visible ? 'translateX(0)' : 'translateX(80px)'};
            "
        >
            <p class="text-[#1a3a8f] text-xs font-semibold tracking-[0.15em] uppercase">
                Why CFP®?
            </p>

            <h2 class="text-[#1a3a8f] text-3xl md:text-4xl font-extrabold leading-tight">
                The Global Symbol of Excellence in Financial Planning
            </h2>

            <p class="text-gray-700 text-base leading-loose">
                The <strong>CERTIFIED FINANCIAL PLANNER™</strong> credential is
                the most desired and respected global certification for
                those seeking to demonstrate their commitment to
                competent and ethical financial planning practice
            </p>

            <div>
                <a href="#" class="inline-block border border-[#1a3a8f] text-[#1a3a8f] text-sm font-medium px-6 py-3 rounded-bl-[15px] rounded-tr-[15px] hover:bg-[#1a3a8f] hover:text-white transition-colors duration-200">
                    Learn more about CFP®
                </a>
            </div>
        </div>

    </div>
</section>