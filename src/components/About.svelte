<script>
    import lotus from "../lib/Assets/About/lotus.png"
    import leaves2 from "../lib/Assets/Expectations/leaves2.png"
    import lilly_pad from "../lib/Assets/Expectations/lilly_pad.png"
</script>

<main>
    <img class= "lotus-img" src="{lotus}" alt="lotus-flower"/> 
    <h1 class="abt">About US</h1>
    <div class="first-section">
        <div class=" card what-container">
            <h2 class="abt-fully"> What is FullyBeyond?</h2>
            <p class="abt-fully-p">
                Fully Beyond is the CSUF Designathon 2024 theme, inviting you to leapfrog conventional design thinking and explore the unexplored. 
                Here, we'll delve deep into the vibrant world of inclusivity and diversity as the cornerstones of our design process.
                
            </p>
            <p class="abt-fully-p">
                Just like a lush rainforest teems with life, design flourishes when it embraces a variety of perspectives. 
                We believe in empathy, equity, and celebrating differences. By going Fully Beyond, we can unlock the power of
                 design to shape a future that reflects the richness of our ever-evolving society.
            </p>
        </div>
        <div class=" card other-container">
           <h1>place-holder</h1>
           <p> this is a place-holder</p>
        </div>
    </div>

    

    <img class= "lotus-img" src="{lotus}" alt="lotus-flower"/> 
    <h1 class="abt">What Can We Look Forward To?</h1>

    <!-- <img class="lily-pad"   src="{lilly_pad}" alt="lilly-pad-img">
    <img class="leaves"   src="{leaves2}" alt="leaves-img"> -->

    <div class="container">
        <img class="lily-pad"   src="{lilly_pad}" alt="lilly-pad-img">
        <img class="leaves"   src="{leaves2}" alt="leaves-img">
        <div class="video-section">
            <p>place-holder</p>
        </div>
    </div>
  

    <!-- 3 colummn grid template -->
     <div class="expectation-wrapper">
        <div class="column-card">
            <img src="" alt="">
            <p><span>challenge and climb with </span>fellow designers</p>
        </div>
        <div class="column-card">
            <img src="" alt="">

            <p> <span>clash for top prices from our </span>sponsors</p>

        </div>
        <div class="column-card">
            <img src="" alt="">
            <p> <span>get industry feedbacks from</span> mentors</p>
        </div>
     </div>
    
</main>

<style>
     :global(body) {
        background-color: #89CAD8;
        font-weight: 900;
        font-family: "M PLUS Rounded 1c", sans-serif;
    }

    main {
        display: flex;
        flex-direction: column; 
        align-items: center;    
        justify-content: center; 
        text-align: center;     
        padding: 10px;  
    }

    .abt {
        color: #6BD1A9;
        font-size: 7rem;
        font-weight: 900;
        text-transform: uppercase;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color:#1C8B82 ;
    }

    .abt-fully {
        color: #959A25;
    }

    .abt-fully-p {
        color: #294105;
    }
    /* h1 {
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #6ED5A6;   
    } */
    
   
    .lotus-img {
      width: 80px;
    }

    .container {
        position: relative; 
    }

    .lily-pad {
        /* position: absolute; */
        bottom: 10px;
        right: 16px;
    }   
   
    .leaves{
        /* position: absolute; */
        top: 10px;
        right: 16px;

    }
    .first-section {
        display: flex;
        justify-content: center;
        padding: 20px;
        width:100%;
        gap: 10px;
    }

    .what-container {
        background-color: #F5ECDE;
        width: 25%;
        height: 80%;
        border-radius: 40px;
        padding: 20px;
        margin: 20px;
        /* top right bottom left  */


    }

    .other-container {
        background-color: white;
        border-radius: 40px;
        width: 25%;
        height: 25%;
        padding: 20px;
        margin: 20px;
    }

    .video-section {
        background-color: white;
        /* top left right bottom */
        border: 5px solid #6ED5A6;
        padding: 10rem;
        border-radius: 40px;
        height: 100px;
        width: 100px;
    }
    .expectation-wrapper {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 10px; 
        padding: 30px;
        /* width: 30%; */
        height: 300px;
       
    }



    .column-card {
        background-color: white;
        border: 3px solid #6ED5A6;
        border-radius: 10px;
    }
    .column-card p {
        margin: 0;
        color: #4E7411;
        -webkit-text-stroke-width: 0.8px;
        -webkit-text-stroke-color:#6ED5A6;
    }

    span {
        color: white;
        -webkit-text-stroke-width: 0.8px;
        -webkit-text-stroke-color:#6ED5A6;
        padding: 5px;
    }
   


    
    
  /* for phomne */
 @media (max-width: 768px) {
    .abt {
        font-size:2rem; 
    }
  .expectation-wrapper {
    grid-template-columns: 1fr; 
  }
  .lotus-img {
      width: 30px;
    }

    .lily-pad {
        display: none;
    }   
   
    .leaves {
        display: none;
    }

    
    .first-section {
    flex-direction: column;
    align-items: center; 
  }

  .card {
    width: 80%;
  }

  .video-section {
    padding: 5rem;
    height: 50px;
    width: 50px;
  }
}
/* for tablets  */
@media (min-width: 769px) and (max-width: 1024px) {
  .expectation-wrapper {
    grid-template-columns: repeat(2, 1fr); 
  }
}
</style>