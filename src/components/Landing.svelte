<script>
	import NavBar from './NavBar.svelte';
  import sunset from '$lib/Assets/Landing/sunset.png';
  import hills from '$lib/Assets/Landing/hills_background.png';
  import grass from '$lib/Assets/Landing/layered_green.png';
  import side_leaves from '$lib/Assets/Landing/side_leaves.png';
  import light_waves from '$lib/Assets/Landing/light_waves.png';
  import dark_waves from '$lib/Assets/Landing/dark_waves.png';
	import lotus_on_lilly_pad from '$lib/Assets/Landing/lotus_on_lilly_pad.png';
	import lotus_on_lilly_pad2 from '$lib/Assets/Landing/lotus_on_lilly_pad2.png';
	import lilly_pad from '$lib/Assets/Landing/lilly_pad.png';
	import opposite_lilly_pad from '$lib/Assets/Landing/opposite_lilly_pad.png';

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<NavBar />
	<div class="relative">
    <img src={sunset} alt="Sunset" class="w-3/4 block mx-auto mt-24 top-0 left-0 z-0" />
    
    <div id="center-introduction" class="absolute w-full flex flex-col items-center text-[#FFE8C5] top-44">
        <span class="sm:text-sm md:text-lg lg:text-5xl z-10 font-extrabold text-center">
            FullyBeyond: Across the Pond
        </span>
        <span class="sm:text-sm md:text-lg lg:text-3xl z-10 font-black mt-4 text-center">
            CSUF's First Designathon
        </span>
        <span class="sm:text-sm md:text-lg lg:text-3xl z-10 font-black mt-4 text-center">
            November 9th - 10th
        </span>
				<div class="flex justify-center space-x-20 mt-10 z-20">
					<button class="text-xl bg-[#FFE8C5] border-4 border-[#E0A246] rounded-3xl w-48 h-14 font-light">Apply Now!</button>
					<button class="text-xl bg-[#FFE8C5] border-4 border-[#E0A246] rounded-3xl w-48 h-14 font-light">Sponsor Us!</button>
				</div>
    </div>

		<img src={hills} alt="Hills" class="w-full block ml-auto mr-auto left-0 absolute z-10 top-28" />
		<img src={grass} alt="Grass" class="w-full block ml-auto mr-auto bottom-[-155px] left-0 absolute z-10" />
		<img src={side_leaves} alt="Side Leaves" class="block w-1/3 ml-auto mr-auto top-24 right-0 absolute z-30" />


		<div class="absolute bg-[#78BFCE] left-0 w-full h-full z-10">
			<div class="absolute w-full grid items-center">
				<img src={dark_waves} alt="Dark Waves" class="w-full block absolute left-0 z-10" />
				<img src={light_waves} alt="Light Waves" class="w-full block absolute left-0 z-10" />
				<img src={lotus_on_lilly_pad2} alt="Lotus on Lilly Pad" class="w-56 absolute z-20 bottom-0 left-24" />
				<img src={lotus_on_lilly_pad} alt="Lotus on Lilly Pad" class="w-56 absolute z-20 bottom-0 right-96" />
			</div>

			<div class="flex justify-center space-x-20 mt-20">
					<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
							<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-20 absolute top-3 text-center bg-opacity-20 font-extrabold">DATE</p>
							<span class="text-[#000000] text-3xl font-extrabold absolute">NOV. 9 - NOV.10</span>
							<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3" />
					</div>

					<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
							<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">DURATION</p>
							<span class="text-[#000000] text-3xl font-extrabold absolute">24 HOURS</span>
							<img src={opposite_lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3" />
					</div>

					<div class="border-dashed border-8 border-[#89CAD8] w-80 h-52 relative flex items-center justify-center">
							<p class="bg-[#CDF6FF] text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">LOCATION</p>
							<span class="text-[#000000] text-3xl font-extrabold absolute">VIRTUAL</span>
							<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3" />
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
