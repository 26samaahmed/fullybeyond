<script>
    import { createEventDispatcher } from 'svelte';
    import { slide } from 'svelte/transition';

    export let open = false;
    const dispatch = createEventDispatcher();

    const handleClick = () => {
        dispatch('toggle');
    }

</script>

<button on:click={handleClick} class="accordion w-full h-full shadow-md mt-5">
    <div class="header h-full w-full flex">
        <div class="text w-full p-4 flex items-center justify-between" style="border-bottom-left-radius: {open ? '0' : '1.5rem'}; border-bottom-right-radius: {open ? '0' : '1.5rem'};">
            <slot name="head"></slot>
        <!-- SVG icon with conditional rendering optimized -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d={open ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
        </svg>
          
        </div>
    </div>

    {#if open}
    <div class="details" transition:slide={{ duration: 50 }}>
        <slot name="details"></slot>
    </div>
    {/if}
</button>

<style>
    * {
        text-align: left;
    }

    button.accordion {
        /* margin: 1.5rem; */
        border-radius: 1.5rem;
        background-color: '#FFF3E5';
    }
    
    div.header .text {
        /* flex: 1; */
        font-size: 0.5vw;
        padding: 1rem;
        background-color: #FFF3E5;
        border-radius: 1.5rem;
        transition: border-radius 0.3s ease;
    }

    div.details {
        background-color: #8ECDB0;
        align-items: center;
        padding: 1rem;
        word-spacing: 0.5vw;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }

    @supports (-webkit-touch-callout: none) {
    /* Disable or simplify transitions only for Safari */
    .details {
        transition: none !important; /* Disable transition for Safari */
        }
    }

</style>
