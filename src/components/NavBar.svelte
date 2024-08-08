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
		<nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center bg-[#FFF2DF] rounded-3xl border-[#B75D77] border-2">
			<div class="flex items-center justify-between">
				<div>
					<a href="/" class="text-2xl font-bold text-gray-800 md:text-3xl">
						<img src={logo} alt="Fully Beyond" class="w-6" />
					</a>
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