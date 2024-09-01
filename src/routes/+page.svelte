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
    <div id="home" class="bg-gradient-to-t from-[#FF9C5F] to-[#FFFFFF]">
      <Landing/>
    </div>

    <div id="about" class="bg-[#78BFCE]">
      <About/>
    </div>
  </div>

  <div class="relative bg-gradient-to-t from-[#EEE0E7] to-[#78BFCE] pb-52 pt-24" id="event"> 
    <EventDetails/>
  </div>
  
  <div class="relative w-full h-[70px] overflow-hidden -mt-[50px]"> 
    <img src={waves} alt="Wave" class="absolute top-0 left-0 w-full h-full z-10 object-cover" />
  </div>
  
  <div class="relative z-20 bg-gradient-to-t from-[#FFB44E] to-[#A95271] pt-16 -mt-[2px] pb-28">
    <Awards />
  </div>

  <Sponsors />
  <Team />
  <div id="faq">
    <FAQ/>
  </div>
  <Footer/>
</main>

<style>
  main {
    font-family: "M PLUS Rounded 1c", sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
  }

</style>