<script lang="ts">
    import MeetTeamImg from '../assets/MeettheTeam.png';
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
            class="relative w-full md:w-1/2 flex-shrink-0 py-10 pr-10 transition-all duration-3000 ease-out"
            style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(80px)'};"
        >

            <!-- Decorative gray filled rectangle — top left -->
            <div class="absolute top-[15%] lg:-left-5 lg:top[8%] lg:w-30 w-15 left-5 lg:h-60 h-28 rounded-tl-[20px] bg-gray-300 rounded-sm z-0"></div>

            <!-- Decorative outline square — top right -->
            <div class="absolute top-2 right-2 w-[40%] h-[40%] border border-gray-300 rounded-3xl z-0 bg-transparent"></div>

            <!-- Decorative gray filled rectangle — bottom left (smaller) -->
            <div class="absolute bottom-[10%] left-0 w-10 h-20 bg-gray-200 rounded-sm z-0"></div>

            <!-- Decorative outline square — bottom left -->
            <div class="absolute bottom-2 left-6 w-[35%] h-[30%] border border-gray-300 rounded-3xl z-0 bg-transparent"></div>

            <!-- Main image -->
            <div class="relative z-20 ml-14 rounded-2xl overflow-hidden">
                <img src={MeetTeamImg} alt="Meet the Team" class="w-full h-full object-cover" />
            </div>

        </div>

        <!-- RIGHT: Text content -->
        <div
            class="w-full md:w-1/2 flex flex-col gap-5 transition-all duration-3000 ease-out delay-300"
            style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(80px)'};"
        >

            <p class="text-[#1a3a8f] text-xs font-semibold tracking-[0.15em] uppercase">
                Meet the Team
            </p>

            <h2 class="text-[#1a3a8f] text-3xl md:text-4xl font-extrabold leading-tight">
                Develop and maintain high ethical standards for members
            </h2>

            <p class="text-gray-700 text-base leading-loose">
                The FPAS vision is to ensure that all Singaporeans have
                access to responsible and appropriate financial planning
                advice by raising the professional standards of the
                industry through education and a shared code of ethics.
            </p>

            <div>
                <a href="#" class="inline-block border border-[#1a3a8f] text-[#1a3a8f] text-sm font-medium px-6 py-3 rounded hover:bg-[#1a3a8f] rounded-bl-[15px] rounded-tr-[15px] hover:text-white transition-colors duration-200">
                    Meet the Team
                </a>
            </div>

        </div>

    </div>
</section>