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
	<NavBar />
	<div id="landing-center">
		<img src={sunset} alt="Sunset" id="sunset" />
		<h2 id="center-title">FullyBeyond: Across the Pond</h2>
		<h3 id="description1">CSUF's First Designathon</h3>
		<h3 id="description2">November 9th - 10th</h3>
		<button id="apply-now">Apply Now!</button>
		<button id="sponsor-us">Sponsor Us!</button>
		<img src={hills} alt="Hills" id="hills" />
    <img src={grass} alt="Grass" id="grass" />
    <img src={side_leaves} alt="Side Leaves" id="side-leaves" />


    <div id="lower-gradient-waves">
		<!--
      <img src={dark_waves} alt="Dark Waves" id="dark-waves" />
      <img src={light_waves} alt="Light Waves" id="light-waves" />
    </div>
		-->
	</div>
</main>

<style>
  main {
		font-family: "M PLUS Rounded 1c", sans-serif;
    /* Ensure the main tag takes the full height of the component */
    height: 100%;
    width: 100%;
  }
	
	
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

	#landing-center {
		position: relative;
	}

	#sunset {
		width: 70%;
		margin-top: 50px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		top: 0;
		left: 0;
		z-index: 0;
	}

	#center-title, #description1, #description2 {
		position: absolute;
		top: 16%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 40px;
		color: rgb(255, 232, 197);
		z-index: 1;
		font-weight: 900;
		-webkit-text-stroke: 2px rgb(169, 82, 113);
	}

	#description1 {
		top: 23%;
		font-size: 28px;
		-webkit-text-stroke: 1.8px rgb(169, 82, 113);
	}

	#description2 {
		top: 28%;
		font-size: 28px;
		-webkit-text-stroke: 1.8px rgb(169, 82, 113);
	}

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

	#hills {
		width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
		top: 110px;
		left: 0;
		position: absolute;
		z-index: 1;
	}

	#grass {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    bottom: -200px;
    left: 0;
    position: absolute;
    z-index: 2;
  }

  #side-leaves {
    width: 32%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 3;
  }


  #lower-gradient-waves {
    background-color: rgb(120, 191, 206);
    position: absolute;
    bottom: -340px;
    left: 0;
    width: 100%;
    height: 35%;
    z-index: 4;
  }

/*
  #dark-waves {
    width: 100%;
    display: block;
    bottom: 301px;
    left: 0;
    position: absolute;
    z-index: 5;
  }


  #light-waves {
    width: 100%;
    display: block;
    bottom: 290px;
    left: 0;
    position: absolute;
    z-index: 6;
  }
	  */
  

</style>
