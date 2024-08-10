<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

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

<main>
	<NavBar />
	<div class="relative">
		<img src={sunset} alt="Sunset" class="scale-150 object-cover mt-36 mb-48 max-w-full md:scale-100 md:w-3/4 md:block md:mx-auto md:mt-16 md:top-0 md:left-0 md:z-0 sm:mt-52" />
		<img src={hills} alt="Hills" class="hidden md:w-full md:block md:ml-auto md:mr-auto md:left-0 md:absolute md:z-10 md:top-28" />
		<!--<img src={grass} alt="Grass" class="hidden max-w-full top-64 object-cover sm:top-3/4 md:scale-100 md:w-full md:block md:ml-auto md:mr-auto md:left-0 absolute z-10" />-->
		<img src={side_leaves} alt="Side Leaves" class="hidden md:block md:w-1/3 md:ml-auto md:mr-auto md:top-24 md:right-0 md:absolute z-30" />
		
	
    <div id="center-introduction" class="absolute w-full flex flex-col items-center text-[#FFE8C5] top-0 md:top-24">
        <span class="text-4xl w-80 sm:w-full sm:text-4xl md:text-2xl lg:text-5xl z-10 font-extrabold text-center">
            FullyBeyond: Across the Pond
        </span>
        <span class="text-2xl md:text-lg lg:text-3xl z-10 font-black mt-4 text-center">
            CSUF's First Designathon
        </span>
        <span class="text-2xl md:text-lg lg:text-3xl z-10 font-black mt-4 text-center">
            November 9th - 10th
        </span>

				<div class="flex flex-col sm:flex-row justify-center sm:space-x-20 mt-10 z-20">
					<button class="text-xl mb-2 bg-[#FFE8C5] border-4 border-[#E0A246] rounded-3xl w-48 h-14 font-light sm:mb-0">Apply Now!</button>
					<button class="text-xl bg-[#FFE8C5] border-4 border-[#E0A246] rounded-3xl w-48 h-14 font-light">Sponsor Us!</button>
				</div>

    </div>


		<div class="absolute bg-[#78BFCE] top-80 sm:top-3/4 left-0 w-full h-lvh z-10">
			<div class="absolute w-full grid items-center">
				<img src={dark_waves} alt="Dark Waves" class="scale-150 w-full block absolute left-0 z-10" />
				<img src={light_waves} alt="Light Waves" class="scale-150 w-full block absolute left-0 z-10" />
				<img src={lotus_on_lilly_pad2} alt="Lotus on Lilly Pad" class="hidden md:w-56 absolute md:z-20 md:bottom-0 md:left-24" />
				<img src={lotus_on_lilly_pad} alt="Lotus on Lilly Pad" class="hidden md:w-56 absolute md:z-20 md:bottom-0 md:right-96" />
			</div>

			<div class="flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-x-10 lg-space-x-20 md:space-y-0 mt-20 m-4">
				<div class="border-dashed border-8 border-[#89CAD8] w-72 md:w-80 lg:w-80 h-52 relative flex items-center justify-center">
						<p class="bg-[#CDF6FF] text-sm md:text-m p-2 rounded-md w-20 absolute top-3 text-center bg-opacity-20 font-extrabold">DATE</p>
						<span class="text-[#000000] text-3xl sm:text-xl lg:text-3xl font-extrabold absolute">NOV. 9 - NOV.10</span>
						<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 sm:w-28 md:w-40" />
				</div>
		
				<div class="border-dashed border-8 border-[#89CAD8] w-72 md:w-80 lg:w-80 h-52 relative flex items-center justify-center">
						<p class="bg-[#CDF6FF] text-sm md:text-m p-2 rounded-md w-20 absolute top-3 text-center bg-opacity-20 font-extrabold">DURATION</p>
						<span class="text-[#000000] text-3xl sm:text-xl lg:text-3xl font-extrabold absolute">24 HOURS</span>
						<img src={opposite_lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 sm:w-28 md:w-40" />
				</div>
		
				<div class="border-dashed border-8 border-[#89CAD8] w-72 md:w-80 lg:w-80 h-52 relative flex items-center justify-center">
						<p class="bg-[#CDF6FF] text-sm md:text-m p-2 rounded-md w-20 absolute top-3 text-center bg-opacity-20 font-extrabold">LOCATION</p>
						<span class="text-[#000000] text-3xl sm:text-xl lg:text-3xl font-extrabold absolute">VIRTUAL</span>
						<img src={lilly_pad} alt="Lilly Pad" class="absolute w-40 bottom-3 sm:w-28 md:w-40" />
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
