<script> 
  import EventDetails from "../components/EventDetails.svelte"
  import Awards from "../components/Awards.svelte"
  import waves from '../lib/Assets/Awards/waves.png';

</script>
<svelte:head>
  <title >FullyBeyond</title>

</svelte:head>

<main>  
  <div class="relative bg-gradient-to-t from-[#EEE0E7] to-[#78BFCE] pb-52"> 
    <EventDetails />
  </div>
  
  <div class="relative w-full h-[70px] overflow-hidden -mt-[50px]"> 
    <img src={waves} alt="Wave" class="absolute top-0 left-0 w-full h-full z-10 object-cover" />
  </div>
  
  <div class="relative z-20 bg-gradient-to-t from-[#FFB44E] to-[#A95271] pt-16">
    <Awards />
  </div>

</main>