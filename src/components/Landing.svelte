<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';
</script>

<main>
  <ul id="nav-bar">
    <img id="nav-logo" src={logo} alt="FullyBeyond" />
    <li>FullyBeyond</li>
    <li class="divider"></li>
    <li>Home</li>
    <li>Event</li>
    <li>About</li>
    <li>FAQ</li>
    <li class="divider"></li>
    <img src={tiktok} alt="TikTok" />
    <img src={instagram} alt="Instagram" />
    <img src={linkedin} alt="LinkedIn" />
  </ul>
</main>

<style>
  ul {
    border-radius: 80px;
    background-color: rgb(255, 242, 223);
    border: solid 3px rgb(183, 93, 119);
    font-family: "Inter", sans-serif;
    list-style-type: none;
    width: 65%;
    margin: 0 auto;
  }

  li {
    display: inline;
    padding: 20px;
  }

  #nav-logo {
    width: 30px;
    height: 30px;
  }

  .divider {
    border-left: thick solid rgb(217, 217, 217);
    height: 10px;
  }
</style>