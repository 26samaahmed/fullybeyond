<script>
	let navBar = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "#about" },
		{ name: "Event", link: "#event" },
		{ name: "FAQ", link: "#faq" }
	];

	let socialMedia = [
		{ name: "Instagram", link: "https://www.instagram.com/fullybeyond/" , icon: '/Assets/Landing/instagram.webp'},
		{ name: "Tiktok", link: "https://www.tiktok.com/@fully_beyond?_t=8pMwFoxgwYc&_r=1", icon: '/Assets/Landing/tiktok.webp' },
		{ name: "Linkedin", link: "https://www.linkedin.com/company/fullybeyond", icon: '/Assets/Landing/linkedin.webp' }
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
		<nav class="container px-6 py-3 lg:w-fit lg:px-16 mt-3 mx-auto md:flex md:justify-center md:items-center md:bg-[#FFF2DF] md:rounded-3xl md:border-[#B75D77] md:border-2">
			<div class="flex items-center justify-between">
				<div class="flex flex-row">

					<!-- Hamburger Menu -->
					<button on:click={toggleMenu} class="flex md:hidden lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>


					<a href="/" class="text-2xl font-bold md:text-3xl px-5">
						<img src='/Assets/Landing/logo.webp' alt="Fully Beyond" class="w-9 md:w-7" loading="lazy"/>
					</a>
					<h1 class="font-extrabold text-3xl sm:text-4xl md:text-xl md:mr-6">FullyBeyond</h1>


					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded lg:mr-12"></div>

					<!--Show the nav bar items here but hide them on mobile since they show when I click on the burger menu-->
					<div class="hidden md:flex md:items-center md:space-x-6 px-3">
						{#each navBar as item}
							<a href={item.link} on:click|preventDefault={scrollIntoView}  class="font-medium text-xl md:text-lg hover:text-[#A95271] transition-all duration-100 ease-in-out">{item.name}</a>
						{/each}
					</div>

					<div class="hidden md:flex md:border-[#D9D9D9] md:border-solid md:border-2 md:h-7 md:rounded lg:ml-12"></div>

					<div class="hidden md:flex items-center space-x-4 px-4">
						{#each socialMedia as item}
							<a href={item.link} target="_blank">
								<img src={item.icon} alt={item.name} class="w-8 md:w-7" loading="lazy"/>
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
							<a href={item.link} on:click|preventDefault={scrollIntoView}  class="text-lg font-medium text-gray-800 hover:text-[#A95271] transition-all duration-100 ease-in-out">{item.name}</a>
						{/each}
					</div>
				</div>
		</nav>
</main>

