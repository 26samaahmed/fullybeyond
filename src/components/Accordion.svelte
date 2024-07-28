<script>
    export let open = false;
      import { slide } from 'svelte/transition';
      const handleClick = () => open = !open
  </script>
  
  <button on:click={handleClick} class="accordion">
      <div class="header">
        <div class="text" 
            style="border-bottom-left-radius: {open ? '0' : '2rem'}; border-bottom-right-radius: {open ? '0' : '2rem'};">
              <slot name="head"></slot>	
          </div>
      </div>
      
      {#if open}
      <div class="details" transition:slide>
          <slot name="details">
          </slot>
      </div>
      {/if}
  </button>
  
  <style>
    * {
        text-align: left;
    }

    button.accordion {
        margin: 1rem 0;
        border-radius: 2rem;
        background-color: '#FFF3E5';
        /* border: solid black 0.05rem; */
        width: 60rem;
    }
      
    div.header {
        display:flex;
        width:100%;
        
    }
    
    div.header .text {
        flex: 1;
        padding: 1rem;
        background-color: #FFF3E5;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        transition: border-radius 0.3s ease;
    }

    
    div.details {
        background-color: #8ECDB0;
        padding: 1rem;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
  </style>
  