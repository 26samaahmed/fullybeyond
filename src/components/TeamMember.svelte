<!-- TeamMember.svelte-->
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
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
        <img class="profile-image rounded-full w-52 h-52 z-10 top-0 left-0 transform relative" src={image} alt={name} />
        <img class="absolute w-32 h-32 z-0 bottom-0 left-0 transform -translate-x-8 translate-y-2" src={leaf_image_left} alt="leaf left" />
        <img class="absolute w-32 h-32 z-0 bottom-0 right-0 transform translate-x-8 translate-y-2" src={leaf_image_right} alt="leaf right" />
    </div>
    <h3 class="mt-2 text-lg font-semibold">{name}</h3>
    <p class="text-sm text-gray-500">{role}</p>
</div>

<style>
    .profile-image {
      border-width: 20px; /* Adjust border width */
      border-color: black; /* Border color */
      border-style: solid; /* Border style */
    }
    * {
      font-family: "M PLUS Rounded 1c", sans-serif;
    }
</style>
