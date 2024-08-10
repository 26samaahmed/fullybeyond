<script>
    import { onMount } from 'svelte';

    let arrowUp, emailLogo, instagramLogo, linkedinLogo, water;
    let leftLilypad, rightLilypad, frog;

    onMount(() => {
        arrowUp = "/lib/Assets/Footer/arrow.png";
        emailLogo = "/lib/Assets/Footer/email_logo.png";
        instagramLogo = "/lib/Assets/Footer/instagram_logo.png";
        linkedinLogo = "/lib/Assets/Footer/linkedin_logo.png";
        water = "/lib/Assets/Footer/water.png"
        leftLilypad = "/lib/Assets/Footer/left_lilly_pad.png";
        rightLilypad = "/lib/Assets/Footer/right_lilly_pad.png";
        frog = "/lib/Assets/Footer/frog_with_backpack.png";
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<svelte:head>
  <title>FullyBeyond</title>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>


<div class="Footer relative w-full h-80 mx-auto bg-cover">
    <img class="absolute lilypad top-1/4 right-0" src={frog} alt="frog"/>
    <img class="absolute leftPad top-6 left-6" src={leftLilypad} alt="left lilypad"/>
    
    
    <div class="textSection mt-48 relative flex flex-col items-center justify-center mx-auto
                text-4xl font-extrabold text-white">
        <h1>LEAP INTO OUR WORLD</h1>
        <p class="mt-10">join us here:</p>

        <div class="flex flex-row mx-auto mt-32">
            <img class="relative mx-10" src={instagramLogo} alt="ig logo">
            <img class="relative mx-10" src={emailLogo} alt="inbox logo">
            <img class="relative mx-10" src={linkedinLogo} alt="linkedIn logo">
        </div>

        <p class="mt-40 text-2xl">Need a lift back up?</p>
            <button on:click={scrollToTop} class="relative mt-20">
                <img src={arrowUp} alt="arrow up" />
            </button>
        <p class="mt-6">Back to Top</p>
    </div>
</div>

<style>
    .Footer {
        z-index: 30;
        height: 100vh;
        background-image: url('/lib/Assets/Footer/water.png');
        bottom: 2vh;
    }    

    h1 {
        font-size: 6rem;
        word-spacing: 0.5vw;
    }

    p {
        font-weight: 800;
        letter-spacing: 0.1vw;
    }

    img.lilypad {
        width: 25vw;    
    }

</style>