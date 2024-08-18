<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';

	let navBar = [
		{ name: "Home", link: "/" },
		{ name: "Event", link: "#event" },
		{ name: "About", link: "#about" },
		{ name: "FAQ", link: "#faq" }
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

	function scrollIntoView({ target }) {
      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({
        behavior: 'smooth'
      });
  }
	
</script>

<main>
		<nav class="container px-6 py-3 mt-3 mx-auto md:flex md:justify-center md:items-center md:bg-[#FFF2DF] md:rounded-3xl md:border-[#B75D77] md:border-2">
			<div class="flex items-center justify-between">
				<div class="flex flex-row">

					<!-- Hamburger Menu -->
					<button on:click={toggleMenu} class="flex md:hidden lg:hidden">
						<button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</button>
					</button>

					<a href="/" class="text-2xl font-bold md:text-3xl px-5">
						<img src={logo} alt="Fully Beyond" class="w-9 md:w-7" />
					</a>
					<h1 class="font-extrabold text-3xl sm:text-4xl md:text-xl md:mr-6">Fully Beyond</h1>


					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded lg:mr-12"></div>

					<!--Show the nav bar items here but hide them on mobile since they show when I click on the burger menu-->
					<div class="hidden md:flex md:items-center md:space-x-6 px-3">
						{#each navBar as item}
							<a href={item.link} on:click|preventDefault={scrollIntoView}  class="font-medium text-xl md:text-lg hover:text-gray-400">{item.name}</a>
						{/each}
					</div>

					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded lg:ml-12"></div>

					<div class="hidden md:flex items-center space-x-4 px-4">
						{#each socialMedia as item}
							<a href={item.link} target="_blank">
								<img src={item.icon} alt={item.name} class="w-8 md:w-7" />
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class={showMenu ? "block" : "hidden"}> <!--If show menu is false then keep it hidden. If show menu is true then show it.-->
				<div class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}">
					<div class="flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
						{#each navBar as item}
							<a href={item.link} on:click|preventDefault={scrollIntoView}  class="text-lg font-medium text-gray-800 hover:text-gray-400">{item.name}</a>
						{/each}
					</div>
				</div>
		</nav>
</main>

