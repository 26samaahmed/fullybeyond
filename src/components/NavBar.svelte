<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';

	let navBar = [
		{ name: "Home", link: "/" },
		{ name: "Event", link: "/event" },
		{ name: "About", link: "/about" },
		{ name: "FAQ", link: "/faq" }
	];

	let socialMedia = [
		{ name: "Instagram", link: "https://www.instagram.com/fullybeyond/" , icon: instagram},
		{ name: "Tiktok", link: "https://www.tiktok.com/fullybeyond", icon: tiktok },
		{ name: "Linkedin", link: "https://www.linkedin.com/company/fullybeyond", icon: linkedin }
	];

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}
	
</script>

<main>
		<nav class="container px-6 py-3 w-2/3 mx-auto md:flex md:justify-between md:items-center bg-[#FFF2DF] rounded-3xl border-[#B75D77] border-2">
			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<a href="/" class="text-2xl font-bold md:text-3xl px-5">
						<img src={logo} alt="Fully Beyond" class="w-8" />
					</a>
					<h1 class="font-extrabold md:text-2xl px-3">Fully Beyond</h1>
					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded mr-16"></div>

					<!--Show the nav bar items here but hide them on mobile since they show when I click on the burger menu-->
					<div class="hidden md:flex md:items-center md:space-x-10 px-3">
						{#each navBar as item}
						<a href={item.link} class="font-medium text-xl hover:text-gray-400">{item.name}</a>
						{/each}
					</div>

					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded ml-16"></div>

					<div class="hidden md:flex items-center space-x-4 px-3">
						{#each socialMedia as item}
						<a href={item.link} target="_blank">
							<img src={item.icon} alt={item.name} class="w-8" />
						</a>
						{/each}
					</div>
				</div>

				<!-- Mobile menu button -->
				<button on:click={toggleMenu} class="flex md:hidden">
					<button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</button>
				</button>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class={showMenu ? "block" : "hidden"}> <!--If show menu is false then keep it hidden. If show menu is true then show it.-->
				<div class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}">
					<div class="flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
						{#each navBar as item}
						<a href={item.link} class="text-lg font-medium text-gray-800 hover:text-gray-400">{item.name}</a>
						{/each}
					</div>

					<div class="flex items-center space-x-4 ">
						{#each socialMedia as item}
						<a href={item.link} target="_blank" class="text-gray-800 hover:text-gray-400">
							<img src={item.icon} alt={item.name} class="w-6" />
						</a>
						{/each}
					</div>
				</div>
		</nav>
</main>

