<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';
</script>

<main>
  <ul id="nav-bar">
    <img id="nav-logo" src={logo} alt="FullyBeyond" />
    <li id="fullybeyond-text">FullyBeyond</li>
    <li class="divider"></li>
    <li>Home</li>
    <li>Event</li>
    <li>About</li>
    <li>FAQ</li>
    <li class="divider"></li>
    <img src={tiktok} alt="TikTok" class="social-media" />
    <img src={instagram} alt="Instagram" class="social-media" />
    <img src={linkedin} alt="LinkedIn" class="social-media" />
  </ul>
</main>