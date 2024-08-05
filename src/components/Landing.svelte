<script>
	import NavBar from './NavBar.svelte';
  import sunset from '$lib/Assets/Landing/sunset.png';
  import hills from '$lib/Assets/Landing/hills_background.png';
  import grass from '$lib/Assets/Landing/layered_green.png';
  import side_leaves from '$lib/Assets/Landing/side_leaves.png';
  import light_waves from '$lib/Assets/Landing/light_waves.png';
  import dark_waves from '$lib/Assets/Landing/dark_waves.png';

</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<!--<NavBar />-->
	<div class="relative">
		<img src={sunset} alt="Sunset" class="w-3/4 block ml-auto mr-auto mt-32 top-0 left-0 z-0" />
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
	</div>

	<img src={hills} alt="Hills" class="w-full block ml-auto mr-auto left-0 absolute z-10 top-28"/>
	<img src={grass} alt="Grass" class="w-full block ml-auto mr-auto bottom-[-155px] left-0 absolute z-10" />
	<img src={side_leaves} alt="Side Leaves" class="block w-2/5 ml-auto mr-auto top-0 right-0 absolute z-30" />
	
	<img src={dark_waves} alt="Dark Waves" class="w-full block absolute left-0 z-10 bottom-0" />
	<img src={light_waves} alt="Light Waves" class="w-full block absolute left-0 z-10 bottom-0" />
	<div class="absolute bg-[#78BFCE] left-0 w-full bottom=[-700px] h-full z-20"></div>

	</div>

		<!--
		<button id="apply-now">Apply Now!</button>
		<button id="sponsor-us">Sponsor Us!</button>
		-->
</main>

<style>
  main {
		font-family: "M PLUS Rounded 1c", sans-serif;
    /* Ensure the main tag takes the full height of the component */
    height: 100%;
    width: 100%;
  }

	#center-introduction {
		-webkit-text-stroke: 2px rgb(169, 82, 113);
	}

/*
	button {
		position: absolute;
		top: 35%;
		transform: translate(-50%, -50%);
		background-color: rgb(255, 232, 197);
		color: rgb(169, 82, 113);
		border: 4px rgb(224, 162, 70) solid;
		border-radius: 25px;
		padding: 10px 30px;
		font-size: 20px;
		font-weight: 400;
		cursor: pointer;
		z-index: 1;
		margin: 25px;
	}

	#apply-now {
		left: 40%;
	}

	#sponsor-us {
		right: 28%;
	}

*/

</style>
