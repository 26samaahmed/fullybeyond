<!-- Sponsors.svelte -->

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>

<script>
    import sponsorRocks from '../lib/Assets/Sponsors/sponsor_rocks.png';
    import sponsorTitle from '../lib/Assets/Sponsors/sponsor_title.png';
</script>

<div class="h-400 gradient-background">
    <div class='flex justify-center items-center mb-8'>
        <img src={sponsorTitle} alt="Sponsors"/>
    </div>
      
    <div class='flex justify-center items-center'>
        <img src={sponsorRocks} alt="Sponsors"/>
    </div>
</div>

<style>
    .gradient-background {
        background: linear-gradient(to bottom, #FEB350, #97D2DD);
    }
    * {
        font-family: "M PLUS Rounded 1c", sans-serif;
        }
</style>
