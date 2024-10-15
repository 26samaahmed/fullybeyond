<!-- Team.svelte -->
<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    import TeamMember from './TeamMember.svelte';

    let team = [
      { name: 'Kristen Portillo', role: 'Director', image: '/Assets/Team/kristen.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Sama Ahmed', role: 'Web Dev Lead', image: '/Assets/Team/sama.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'A.J. Galliguez', role: 'Marketing Lead', image: '/Assets/Team/AJ.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Ryan Avancena', role: 'Web Dev Officer', image: '/Assets/Team/ryan.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Lori Cha', role: 'Web Dev & Marketing Officer', image: '/Assets/Team/lori.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Richard Hoang', role: 'Design & Marketing Officer', image: '/Assets/Team/richard.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Yulie Ledesma', role: 'Marketing Officer', image: '/Assets/Team/yulie.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Tyler Lui', role: 'Web Dev Officer', image: '/Assets/Team/tyler.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Elzie Mazuca', role: 'Design Officer', image: '/Assets/Team/elzie.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Tanisha Naik', role: 'Marketing Officer', image: '/Assets/Team/tanisha.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Oyinkansola Olayinka ', role: 'Web Dev & Marketing Officer', image: '/Assets/Team/ola.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'},
      { name: 'Jeffrey Rivera', role: 'Marketing Officer', image: '/Assets/Team/jeffrey.webp', leafImageLeft: '/Assets/Team/left_leaf.png', leafImageRight: '/Assets/Team/right_leaf.png'}
    ];
</script>

<div class="h-400 gradient-background pb-28">
  <div class="team text-center font-black text-5xl md:text-7xl lg:text-8xl mb-8 pt-24">
    <h1> MEET OUR TEAM</h1>
  </div>
  <div class="team-grid ">
      {#each team as member}
        <div class = "team-member">
        <TeamMember name={member.name} role={member.role} image={member.image} leaf_image_left={member.leafImageLeft} leaf_image_right={member.leafImageRight} />
        </div>
      {/each}
  </div>
</div>
  
<style>
    .gradient-background {
        background: linear-gradient(to bottom, #97D2DD, #C2FAE9);
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      padding: 2px;
      margin-left: auto;
      margin-right: auto;
      width: 95%;

      @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      padding: 2px;
      margin-left: auto;
      margin-right: auto;
      width: 95%;
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
        padding: 5px;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
      }
    }
    .team {
      color: #556A2C;
      text-shadow: -3px -3px 0 #3A4622, 3px -3px 0 #3A4622, -3px 3px 0 #3A4622, 3px 3px 0 #3A4622;
      font-weight: 900;
      }
    .team-member {
      max-width: 300px;
      text-align: center
    }
</style>
  