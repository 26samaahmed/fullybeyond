<script>
    import arrowUp from "../lib/Assets/Footer/arrow.png";
    import emailLogo from "../lib/Assets/Footer/email_logo.png";
    import instagramLogo from "../lib/Assets/Footer/instagram_logo.png";
    import linkedinLogo from "../lib/Assets/Footer/linkedin_logo.png";
    import tiktokLogo from "../lib/Assets/Footer/tiktok_logo.png";
    import water from "../lib/Assets/Footer/water.png"
    import leftLilypad from "../lib/Assets/Footer/left_lilly_pad.png";
    import rightLilypad from "../lib/Assets/Footer/right_lilly_pad.png";
    import frog from "../lib/Assets/Footer/frog_with_backpack.png";

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<svelte:head>
  <title>FullyBeyond</title>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <div class="Footer">
        <div class="textSection">
            <!-- <img class="relative bottom-0 z-30 opacity-40" src={leftLilypad} alt="left lilypad"/> -->
            <h1>LEAP INTO OUR WORLD</h1>
            <p>Join us here:</p>

            <div class="social-media">
                <a href="https://www.instagram.com/fullybeyond/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram logo" loading="lazy">
                </a>
                <a href="mailto:fullybeyond2024@gmail.com">
                    <img src={emailLogo} alt="Email logo" loading="lazy">
                </a>
                <a href="https://www.linkedin.com/company/fullybeyond" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn logo" loading="lazy">
                </a>
                <a href="https://www.tiktok.com/fullybeyond" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokLogo} alt="TikTok logo" loading="lazy">
                </a>
            </div>

            <div class='mt-24'>
                <p>Need a lift back up?</p>
                <button on:click={scrollToTop}>
                    <img src={arrowUp} alt="Arrow up" loading="lazy" />
                </button>
                <p>Back to Top</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .Footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('../lib/Assets/Footer/water.png');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        padding: 16px;
        color: white;
        text-align: center;
    }

    .textSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        max-width: 1000px;
    }

    h1 {
        font-size: 5rem;
        font-weight: 600;
        word-spacing: 0.5vw;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: 0.1vw;
        margin: 1rem 0;
    }

    .social-media {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    .social-media img {
        width: 5rem;
        height: 5rem;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    button img {
        width: 5rem;
        height: 5rem;
    }


    @media (max-width: 580px) {
        h1 {
            margin-top: 10vh;
            font-size: 5rem;
            font-weight: 799;
        }

        .social-media {
            flex-direction: column;
            margin-bottom: 8vh;
        }

        .social-media img {
            width: 6rem;
            height: 6rem;
        }

        p {
            font-size: 1.5rem;
        }

        button img {
            width: 4rem;
            height: 4rem;
        }
    }
</style>
