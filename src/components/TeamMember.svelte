<!-- TeamMember.svelte-->
<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    export let name;
    export let role;
    export let image;
    export let leaf_image_left;
    export let leaf_image_right;
</script>

<div class="text-center p-2.5 m-2">
    <div class="relative inline-block">
        <img class="porfile_image border-black rounded-full outline-none w-30 md:w-48 lg:w-52 h-30 md:h-48 lg:h-52 z-10 top-0 left-0 transform relative" src={image} alt={name} loading="lazy"/>
        <img class="absolute w-32 h-32 z-0 bottom-0 left-0 transform -translate-x-8 translate-y-2" src={leaf_image_left} alt="leaf left" loading="lazy"/>
        <img class="absolute w-32 h-32 z-0 bottom-0 right-0 transform translate-x-8 translate-y-2" src={leaf_image_right} alt="leaf right" loading="lazy"/>
    </div>
    <h3 class="mt-2 text-lg md:2xl lg:4xl font-semibold">{name}</h3>
    <p class="text-lg md:2xl lg:4xl text-black-500">{role}</p>
</div>

<style>
    .porfile_image {
      border-width: 15px;
      
      @media (min-width: 640px) {
        border-width: 17px;
      }

      @media (min-width: 1024px) {
        border-width: 20px;
      }
    }
</style>
