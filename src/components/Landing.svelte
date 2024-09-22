<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import NavBar from './NavBar.svelte';

	let containers = [
		{
			title: "DATE",
			description: "NOV. 9 - NOV. 10",
			image: '/Assets/Landing/lilly_pad.webp'
		},
		{
			title: "DURATION",
			description: "24 HOURS",
			image: '/Assets/Landing/opposite_lilly_pad.webp'
		},
		{
			title: "LOCATION",
			description: "VIRTUAL",
			image: '/Assets/Landing/lilly_pad.webp'
		}
	];
	
</script>

<main>
	<NavBar />
	<div class="relative">
			<!-- Use a wrapper with absolute positioning for layered images -->
			<div class="relative">
					<img src='/Assets/Landing/sunset.webp' alt="Sunset" class="max-w-screen mt-12 mb-48 max-w-full sm:mt-8 md:w-3/4 md:mx-auto md:mt-12 lg:mt-16" />
					<img src='/Assets/Landing/hills_background.webp' alt="Hills" class="hidden md:block md:w-full md:absolute md:z-10 md:top-28" />
					<img src="/Assets/Landing/layered_green.svg" alt="Grass" class="hidden md:block md:w-full md:absolute md:z-10 md:top-2/3" />
					<img src='/Assets/Landing/side_leaves.webp' alt="Side Leaves" class="hidden md:block md:w-1/3 md:absolute md:z-30 md:top-24 md:right-0" />
			</div>
			<div id="center-introduction" class="absolute w-full flex flex-col items-center top-12 sm:top-28 md:top-28 lg:top-44 z-20">
					<span class="text-3xl w-72 text-[#FFE8C5] sm:w-full sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center">
							FullyBeyond: Across the Pond
					</span>
					<span class="text-xl text-[#FFE8C5] sm:text-2xl md:text-2xl lg:text-2xl font-black mt-4 text-center">
							CSUF's First Designathon
					</span>
					<span class="text-xl text-[#FFE8C5] sm:text-2xl md:text-2xl lg:text-2xl font-black mt-4 text-center">
							November 9th - 10th
					</span>
					<div class="flex flex-col sm:flex-row justify-center sm:space-x-20 md:space-x-14 mt-16 sm:mt-12">
							<button class="text-xl md:text-base mb-2 bg-[#FFE8C5] text-[#A95271] border-2 border-[#E0A246] rounded-3xl w-48 md:w-36 h-14 font-light hover:text-white hover:bg-[#A95271] transition-all duration-700 ease-in-out z-20">Apply Now!</button>
							<button class="text-xl md:text-base bg-[#FFE8C5] text-[#A95271] border-2 border-[#E0A246] rounded-3xl w-48 md:w-36 h-14 font-light hover:text-white hover:bg-[#A95271] transition-all duration-700 ease-in-out z-20"><a href='/Assets/Landing/SponsorPackage.pdf' target="_blank">Sponsor Us!</a></button>
					</div>
			</div>
			<div class="absolute bg-[#78BFCE] top-64 sm:top-96 md:top-full left-0 w-full z-10">
					<div class="absolute w-full grid items-center">
							<img src='/Assets/Landing/dark_waves.png' alt="Dark Waves" class="max-w-screen block absolute left-0 z-10" />
							<img src='/Assets/Landing/light_waves.png' alt="Light Waves" class="max-w-screen block absolute left-0 z-10" />
							<img src='/Assets/Landing/lotus_on_lilly_pad2.webp' alt="Lotus on Lilly Pad" class="hidden md:block md:w-28 lg:w-36 absolute md:z-20 md:bottom-0 md:left-3" />
							<img src='/Assets/Landing/lotus_on_lilly_pad.webp' alt="Lotus on Lilly Pad" class="hidden md:block md:w-28 lg:w-36 absolute md:z-20 md:bottom-0 md:right-56 lg:right-64" />
					</div>
					<div class="flex flex-col md:flex-row lg:flex-row items-center justify-center space-y-8 md:space-x-10 lg:space-x-20 md:space-y-0 mt-44 sm:mt-20 m-4 p-10">
							{#each containers as container}
									<div class="border-dashed border-8 border-[#89CAD8] w-72 md:w-80 lg:w-80 h-52 relative flex items-center justify-center">
											<p class="bg-[#CDF6FF] text-sm md:text-m p-2 rounded-md w-24 absolute top-3 text-center bg-opacity-20 font-extrabold">{container.title}</p>
											<span class="text-[#000000] text-3xl sm:text-xl lg:text-3xl font-extrabold absolute">{container.description}</span>
											<img src={container.image} alt="Lilly Pad" class="absolute w-40 bottom-3 sm:w-28 md:w-40" />
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
