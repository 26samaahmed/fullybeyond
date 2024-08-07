<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';
	export let navBar = [
		{ name: "Home", link: "/" },
		{ name: "Event", link: "/event" },
		{ name: "About", link: "/about" },
		{ name: "FAQ", link: "/faq" }
	];
</script>

<main>
  <ul id="nav-bar">
    <img id="nav-logo" src={logo} alt="FullyBeyond" />
    <li id="fullybeyond-text">FullyBeyond</li>
    <li class="divider"></li>
    {#each navBar as { name, link }}
		<li><a href={link}>{name}</a></li>
		{/each}
    <li class="divider"></li>
    <img src={tiktok} alt="TikTok" class="social-media" />
    <img src={instagram} alt="Instagram" class="social-media" />
    <img src={linkedin} alt="LinkedIn" class="social-media" />
  </ul>
</main>

<style>
  	ul {
		border-radius: 80px;
		background-color: rgb(255, 242, 223);
		border: solid 3px rgb(183, 93, 119);
		list-style-type: none;
		width: 65%;
		margin: 0 auto;
		text-align: center;
		padding: 10px;
		font-size: 20px;
	}

	li {
		display: inline;
		margin: 25px;
	}

	#nav-logo,
	.social-media {
		width: 30px;
	}

	.divider {
		border: 1px solid rgb(217, 217, 217);
	}

	#fullybeyond-text {
		font-weight: 800;
	}
</style>