<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import NavBar from './NavBar.svelte';
  import sunset from '$lib/Assets/Landing/sunset.webp';
  import hills from '$lib/Assets/Landing/hills_background.svg';
  import grass from '$lib/Assets/Landing/layered_green.svg';
  import side_leaves from '$lib/Assets/Landing/side_leaves.svg';
  import light_waves from '$lib/Assets/Landing/light_waves.png';
  import dark_waves from '$lib/Assets/Landing/dark_waves.png';
	import lotus_on_lilly_pad from '$lib/Assets/Landing/lotus_on_lilly_pad.svg';
	import lotus_on_lilly_pad2 from '$lib/Assets/Landing/lotus_on_lilly_pad2.svg';
	import lilly_pad from '$lib/Assets/Landing/lilly_pad.svg';
	import opposite_lilly_pad from '$lib/Assets/Landing/opposite_lilly_pad.svg';
	import sponsor_package from '$lib/Assets/Landing/SponsorPackage.pdf';

	let containers = [
		{
			title: "DATE",
			description: "NOV. 9 - NOV. 10",
			image: lilly_pad
		},
		{
			title: "DURATION",
			description: "24 HOURS",
			image: opposite_lilly_pad
		},
		{
			title: "LOCATION",
			description: "VIRTUAL",
			image: lilly_pad
		}
	];
	
</script>

<main>
	<NavBar />
	<div class="relative">
		<img src={sunset} alt="Sunset" loading="lazy" class="max-w-screen mt-12 mb-48 max-w-full sm:mt-8 md:w-3/4 md:block md:mx-auto md:mt-12 lg:mt-16 md:left-0 md:z-0" />
		<img src={hills} alt="Hills" loading="lazy" class="hidden md:w-full md:block md:ml-auto md:mr-auto md:left-0 md:absolute md:z-10 md:top-28" />
		<img src={grass} alt="Grass" loading="lazy" class="hidden max-w-full top-64 object-cover sm:top-3/4 md:top-2/3 md:w-full md:block md:ml-auto md:mr-auto md:bottom-0 md:left-0 absolute z-10" />
		<img src={side_leaves} alt="Side Leaves" loading="lazy" class="hidden md:block md:w-1/3 md:ml-auto md:mr-auto md:top-24 md:right-0 md:absolute z-30" />
    <div id="center-introduction" class="absolute w-full flex flex-col items-center top-12 sm:top-28 md:top-28 lg:top-40">
        <span class="text-3xl w-72 text-[#FFE8C5] sm:w-full sm:text-3xl md:text-3xl lg:text-5xl z-10 font-extrabold text-center">
            FullyBeyond: Across the Pond
        </span>
        <span class="text-xl text-[#FFE8C5] sm:text-2xl md:text-2xl lg:text-3xl z-10 font-black mt-4 text-center">
            CSUF's First Designathon
        </span>
        <span class="text-xl text-[#FFE8C5] sm:text-2xl md:text-2xl lg:text-3xl  z-10 font-black mt-4 text-center">
            November 9th - 10th
        </span>

				<div class="flex flex-col sm:flex-row justify-center sm:space-x-20 md:space-x-14 mt-16 sm:mt-12 z-20">
					<button class="text-xl md:text-base mb-2 bg-[#FFE8C5] text-[#A95271] border-2 border-[#E0A246] rounded-3xl w-48 md:w-36 h-14 font-light sm:mb-0 hover:text-white hover:bg-[#A95271] transition-all duration-700 ease-in-out">Apply Now!</button>
					<button class="text-xl md:text-base bg-[#FFE8C5] text-[#A95271] border-2 border-[#E0A246] rounded-3xl w-48 md:w-36 h-14 font-light hover:text-white hover:bg-[#A95271] transition-all duration-700 ease-in-out"><a href={sponsor_package} target="_blank">Sponsor Us!</a></button>
				</div>
				
    </div>


		<div class="absolute bg-[#78BFCE] top-64 sm:top-96 md:top-full left-0 w-full z-10">
			<div class="absolute w-full grid items-center">
				<img src={dark_waves} alt="Dark Waves" loading="lazy" class="max-w-screen block absolute left-0 z-10" />
				<img src={light_waves} alt="Light Waves" loading="lazy" class="max-w-screen block absolute left-0 z-10" />
				<img src={lotus_on_lilly_pad2} alt="Lotus on Lilly Pad" loading="lazy" class="hidden md:block md:w-28 lg:w-36 absolute md:z-20 md:bottom-0 md:left-3" />
				<img src={lotus_on_lilly_pad} alt="Lotus on Lilly Pad" loading="lazy" class="hidden md:block md:w-28 lg:w-36 absolute md:z-20 md:bottom-0 md:right-56 lg:right-64" />
			</div>

			<div class="flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-x-10 lg-space-x-20 md:space-y-0 mt-44 sm:mt-20 m-4">

				{#each containers as containers}
					<div class="border-dashed border-8 border-[#89CAD8] w-72 md:w-80 lg:w-80 h-52 relative flex items-center justify-center">
						<p class="bg-[#CDF6FF] text-sm md:text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">{containers.title}</p>
						<span class="text-[#000000] text-3xl sm:text-xl lg:text-3xl font-extrabold absolute">{containers.description}</span>
						<img src={containers.image} alt="Lilly Pad" loading="lazy" class="absolute w-40 bottom-3 sm:w-28 md:w-40" />
					</div>
				{/each}

			</div>
		
		</div>
	</div>
</main>

<style>

	#center-introduction {
    -webkit-text-stroke: 1.5px rgb(169, 82, 113);
}

#center-introduction button:hover {
    -webkit-text-stroke: 1.2px rgb(255, 255, 255);
    color: white !important;
}



</style>
