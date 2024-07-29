<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import logo from '$lib/Assets/Landing/logo.png';
  import instagram from '$lib/Assets/Landing/instagram.png';
  import tiktok from '$lib/Assets/Landing/tiktok.png';
  import linkedin from '$lib/Assets/Landing/linkedin.png';
  import sunset from '$lib/Assets/Landing/sunset.png';
  import hills from '$lib/Assets/Landing/hills_background.png';
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
    <img src={tiktok} alt="TikTok" class="social-media"/>
    <img src={instagram} alt="Instagram" class="social-media"/>
    <img src={linkedin} alt="LinkedIn" class="social-media"/>
  </ul>

  <div id="landing-center">
    <img src={sunset} alt="Sunset" id="sunset"/>
    <img src={hills} alt="Hills" id="hills"/>
  </div>

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
    text-align: center;
    padding: 10px;
    font-size: 20px;
  }

  li {
    display: inline;
    margin: 25px;
  }

  #nav-logo, .social-media {
    width: 30px;
  }

  .divider {
    border: 1px solid rgb(217, 217, 217);
  }

  #fullybeyond-text {
    font-weight: 800;
  }

  #landing-center {
    position: relative;
    top: 0;
    left: 0;
  }

  #sunset {
    width: 70%;
    margin-top: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
    left: 0;
  }

  #hills {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
    left: 0;
  }
</style>