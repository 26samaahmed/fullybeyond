<!-- Team.svelte -->
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import TeamMember from './TeamMember.svelte';
    import leafLeft from '../lib/Assets/Team/left_leaf.png';
    import leafRight from '../lib/Assets/Team/right_leaf.png';
    import blankpfp from '../lib/Assets/Team/pfp.png';
    import ajpfp from '../lib/Assets/Team/AJ.jpeg';
    import yuliepf from '../lib/Assets/Team/yulie.jpeg';
    import jefferypf from '../lib/Assets/Team/jeffrey.jpeg';
    import kristenpf from '../lib/Assets/Team/kristen.jpg';
    import tanishapf from '../lib/Assets/Team/Tanisha.png';
    import samapf from '../lib/Assets/Team/sama.jpg';
    import loripf from '../lib/Assets/Team/lori.jpg';

    let team = [
      { name: 'Yulie Ledesma', role: 'Marketing Officer', image: yuliepf, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'A.J.', role: 'Marketing Lead', image: ajpfp, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'Jeffrey Rivera', role: 'Marketing Officer', image: jefferypf, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'Kristen Portillo', role: 'Director', image: kristenpf, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'Tanishaa Naik', role: 'Marketing Officer', image: tanishapf, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'Sama Ahmed', role: 'Web Dev Lead', image: samapf, leafImageLeft: leafLeft, leafImageRight: leafRight},
      { name: 'Lori Cha', role: 'Web Dev & Marketing Officer', image: loripf, leafImageLeft: leafLeft, leafImageRight: leafRight},
    ];
</script>

<div class="h-400 gradient-background">
  <div class="team text-center font-black text-8xl mb-8">
    <h1> MEET OUR TEAM</h1>
  </div>
  <div class="team-grid">
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
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
      padding: 5px;
      margin-left: 100px;
      margin-right: 100px;
    }
    .team {
      color: #556A2C;
      font-size: 8rem;
      text-shadow: -3px -3px 0 #3A4622, 3px -3px 0 #3A4622, -3px 3px 0 #3A4622, 3px 3px 0 #3A4622;
      font-weight: 900;
      font-family: "M PLUS Rounded 1c", sans-serif;
    }
    .team-member {
      max-width: 500px;
      text-align: center
    }
    * {
      font-family: "M PLUS Rounded 1c", sans-serif;
    }
</style>
  