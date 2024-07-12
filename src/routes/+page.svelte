<script>
  import FrogFly from "$lib/Assets/FAQ/fully_the_frog_fly.png"
</script>

<svelte:head>
  <title>FullyBeyond</title>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
</svelte:head>


<main>
<div class="FAQPage">
  <div class="FAQSection">
    <h1>FAQ</h1>
    <div class="questionBox">
      <div class="questionSection">
        <p><b>What is a designathon?</b></p>
      </div>
      <div class="questionAnswer">
        <p>A fun design competition.</p>
      </div>
    </div>

    <img src={FrogFly} alt="frog eating fly">
    <div class="questionBox">
      <div class="questionSection">
        <p><b>What is a designathon?</b></p>
      </div>
      <div class="questionAnswer">
        <p>A fun design competition.</p>
      </div>
    </div>

    <div class="questionBox">
      <div class="questionSection">
        <p><b>What is a designathon?</b></p>
      </div>
      <div class="questionAnswer">
        <p>A fun design competition.</p>
      </div>
    </div>
  </div>
</div>
</main>

<style>
  div {
    overflow: hidden;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100vw;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }

  img {
    width: 20%
  }

  .FAQSection {
    display: flex;
    flex-direction: column;
    width: 60vw;
  }

  .questionBox {
    display: flex;
    flex-direction: column;
    background-color: #8ECDB0;
    border-radius: 30px;
    margin-bottom: 2vh;
  }

  .questionSection {
    position: relative;
    color: black;
    font-size: 32px;
    background-color: white;
    padding: 1vw;
  }

  .questionAnswer {
    font-size: 24px;
    padding: 1vw;
    color: black;
  }
</style>