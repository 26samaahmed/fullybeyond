<!-- Sponsors.svelte -->

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>

<script>
    import sponsorRocks from '../lib/Assets/Sponsors/sponsor_rocks.svg';
    import sponsorTitle from '../lib/Assets/Sponsors/sponsor_title.png';
</script>

<div class="h-400 gradient-background">
    <div class='flex justify-center items-center mb-8'>
        <img src={sponsorTitle} alt="Sponsors" loading="lazy"/>
    </div>
      
    <div class='flex justify-center items-center mt-10 pb-20'>
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#FFFFFF]">Coming Soon!</h1>
    </div>
    <!--
    <div class='flex justify-center items-center'>
        <img src={sponsorRocks} alt="Sponsors" loading="lazy"/>
    </div>
    -->
</div>

<style>
    .gradient-background {
        background: linear-gradient(to bottom, #FEB350, #97D2DD);
    }
</style>
