<script>
    import FAQ from '../components/FAQ.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main class="w-screen">
    <FAQ/>
    <Footer/>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        flex-direction: column;
    }
</style>
