<script lang="ts">
    import DirectoryImg from '../assets/cfpdirectory.png';
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

        <!-- LEFT: Text content -->
        <div
            class="w-full md:w-1/2 flex flex-col gap-5 transition-all duration-3000 ease-out"
            style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(-80px)'};"
        >

            <p class="text-[#1a3a8f]  text-xs font-semibold tracking-[0.15em] uppercase">
                CFP Directory
            </p>

            <h2 class="text-[#1a3a8f] text-3xl md:text-4xl font-extrabold leading-tight">
                Top-notch Certified<br>Financial Planners
            </h2>

            <p class="text-gray-700 text-base leading-loose">
                Search for over 5000 Certified Financial Planner on
                our directory.
            </p>

            <div>
                <a href="#" class="inline-block border border-[#1a3a8f] text-[#1a3a8f] text-sm font-medium px-6 py-3 rounded hover:bg-[#1a3a8f] rounded-bl-[15px] rounded-tr-[15px] hover:text-white transition-colors duration-200">
                    See CFP Directory
                </a>
            </div>

        </div>

        <!-- RIGHT: Image with decorative shapes -->
        <div
            class="relative w-full md:w-1/2 flex-shrink-0 py-10 pl-10 transition-all duration-3000 ease-out delay-300"
            style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(-80px)'};"
        >

            <!-- Decorative outline square — top left -->
            <div class="absolute top-2 left-0 w-[45%] h-[45%] border border-gray-400 rounded-tl-[20px] z-0 bg-transparent"></div>

            <!-- Decorative outline square — bottom left -->
            <div class="absolute bottom-2 left-4 w-[45%] h-[45%] border border-gray-400 rounded-br-[20px] z-0 bg-transparent"></div>

            <!-- Navy blue rectangle — far right middle -->
            <div class="absolute -right-4 top-[35%] rounded-tr-[15px] w-15 h-24 bg-[#1a3a8f] z-10"></div>

            <!-- Main image -->
            <div class="relative z-20 mr-8 rounded-2xl overflow-hidden">
                <img src={DirectoryImg} alt="CFP Directory" class="w-full h-full object-cover" />
            </div>

        </div>

    </div>
    
</section>