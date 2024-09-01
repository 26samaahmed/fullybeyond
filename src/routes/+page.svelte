<script>  
  import Landing from '../components/Landing.svelte';
  import About  from "../components/About.svelte";
  import EventDetails from "../components/EventDetails.svelte"
  import Awards from "../components/Awards.svelte"
  import waves from '../lib/Assets/Awards/waves.png';
  import Team from '../components/Team.svelte';
  import Sponsors from '../components/Sponsors.svelte';
  import FAQ from '../components/FAQ.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<main>
  <div class="flex flex-col space-y-96 sm:space-y-48 md:space-y-0">
    <Landing/>
    <About class="#about"/>
  </div>
  <div class="relative bg-gradient-to-t from-[#EEE0E7] to-[#78BFCE] pb-52"> 
    <EventDetails class="#event"/>
  </div>
  
  <div class="relative w-full h-[70px] overflow-hidden -mt-[50px]"> 
    <img src={waves} alt="Wave" class="absolute top-0 left-0 w-full h-full z-10 object-cover" />
  </div>
  
  <div class="relative z-20 bg-gradient-to-t from-[#FFB44E] to-[#A95271] pt-16 -mt-[2px]">
    <Awards />
  </div>

  <Sponsors />
  <Team />
  <FAQ/>
  <Footer/>
</main>
