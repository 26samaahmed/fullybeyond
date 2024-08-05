<script>
	import NavBar from './NavBar.svelte';
  import sunset from '$lib/Assets/Landing/sunset.png';
  import hills from '$lib/Assets/Landing/hills_background.png';
  import grass from '$lib/Assets/Landing/layered_green.png';
  import side_leaves from '$lib/Assets/Landing/side_leaves.png';
  import light_waves from '$lib/Assets/Landing/light_waves.png';
  import dark_waves from '$lib/Assets/Landing/dark_waves.png';
	import lilly_pad from '$lib/Assets/Landing/lilly_pad.png';

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<!--<NavBar />-->
	<div class="relative">
		<img src={sunset} alt="Sunset" class="w-3/4 block ml-auto mr-auto mt-24 top-0 left-0 z-0" />
		<div id="center-introduction" class="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#FFE8C5] top-44">
			<span class="sm:text-sm md:text-lg lg:text-5xl z-10 font-extrabold">
					FullyBeyond: Across the Pond
			</span>
			<span class="sm:text-sm md:text-lg lg:text-3xl z-10 font-black mt-4">
					CSUF's First Designathon
			</span>
			<span class="sm:text-sm md:text-lg lg:text-3xl z-10 font-black mt-4">
					November 9th - 10th
			</span>
			<button class="absolute text-xl transform -translate-x-1/2 bg-[#FFE8C5] border-4 border-[#E0A246] rounded-3xl w-48 h-14 top-52 font-light">Apply Now!</button>
		</div>

		<img src={hills} alt="Hills" class="w-full block ml-auto mr-auto left-0 absolute z-10 top-24" />
		<img src={grass} alt="Grass" class="w-full block ml-auto mr-auto bottom-[-155px] left-0 absolute z-10" />
		<img src={side_leaves} alt="Side Leaves" class="block w-2/5 ml-auto mr-auto top-0 right-0 absolute z-30" />
		
		<img src={dark_waves} alt="Dark Waves" class="w-full block absolute left-0 z-10 bottom-0" />
		<img src={light_waves} alt="Light Waves" class="w-full block absolute left-0 z-10 bottom-0" />

		<div class="absolute bg-[#78BFCE] left-0 w-full h-full z-10">
			<div class="absolute bg-[#78BFCE] left-0 w-full h-full z-0">
					<div class="flex justify-center space-x-20 mt-20">
							<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
									<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-20 absolute top-3 text-center bg-opacity-20 font-extrabold">DATE</p>
									<span class="text-[#000000] text-3xl font-extrabold absolute">NOV. 9 - NOV.10</span>
									<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 left-1/2 transform -translate-x-1/2" />
							</div>
							<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
									<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">DURATION</p>
									<span class="text-[#000000] text-3xl font-extrabold absolute">24 HOURS</span>
									<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 left-1/2 transform -translate-x-1/2" />
							</div>
							<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
									<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">LOCATION</p>
									<span class="text-[#000000] text-3xl font-extrabold absolute">VIRTUAL</span>
									<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 left-1/2 transform -translate-x-1/2" />
							</div>
					</div>
			</div>
		</div>
	
	</div>

</main>

<style>
  main {
		font-family: "M PLUS Rounded 1c", sans-serif;
    /* Ensure the main tag takes the full height of the component */
    height: 100%;
    width: 100%;
  }

	#center-introduction {
		-webkit-text-stroke: 1.7px rgb(169, 82, 113);
	}

</style>
