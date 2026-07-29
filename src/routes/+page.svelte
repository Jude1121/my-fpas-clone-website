<script>
  import Navbar from '../lib/components/Navbar.svelte';
  import HeroSlider from '../lib/components/HeroSlider.svelte';
  import AboutFPAS from '$lib/components/AboutFPAS.svelte';
  import WhyCfp from '$lib/components/WhyCfp.svelte';
  import CfpDirectory from '$lib/components/CfpDirectory.svelte';
  import MeetTheTeam from '$lib/components/MeetTheTeam.svelte';
  import UpcomingEvents from '$lib/components/UpcomingEvents.svelte';
  import LatestNews from '$lib/components/LatestNews.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Informative from '$lib/components/Informative.svelte';
</script>
<main>
    <div>
        <Navbar />
    </div>
    <div>
        <HeroSlider />
    </div>
    <div class="lg:pl-20 lg:pr-20">
      <AboutFPAS />
    </div>
    <div class="lg:pl-20 lg:pr-20">
      <Informative/>
    </div>
    <div>
      <WhyCfp/>
    </div>
    <div>
      <CfpDirectory/>
    </div>
    <div>
      <MeetTheTeam/>
    </div>
    <div class="lg:pl-30 lg:pr-30">
      <UpcomingEvents/>
    </div>
    <div class="lg:pl-30 lg:pr-30 lg:pt-15 pt-10">
    <LatestNews/>
    </div>
    <div>
      <Contact/>
    </div>
    <div>
      <Footer/>
    </div>
</main>



