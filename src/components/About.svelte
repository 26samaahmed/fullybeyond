<script>
    import lotus from "../lib/Assets/About/lotus.png";
    import leaves2 from "../lib/Assets/Expectations/leaves2.png";
    import lilly_pad from "../lib/Assets/Expectations/lilly_pad.png";
    import fully_the_frog_fly from  "../lib/Assets/FAQ/fully_the_frog_fly.png";
    import right_mini_frog  from "../lib/Assets/FAQ/right_mini_frog.png";
    import funna from "../lib/Assets/EventDetails/funna.png";
    import fully_once_the_frog from "../lib/Assets/EventDetails/fully_once_the_frog.png";
    import left_mini_frog from "../lib/Assets/FAQ/left_mini_frog.png";
    import acmlogo from "../lib/Assets/About/acmlogo.svg"
</script>

<main class="flex flex-col items-center justify-center text-center p-2.5">
    <img class="w-36 py-5" src="{lotus}" alt="lotus-flower"/>

    <h1 class="text-7xl font-black uppercase text-[#6BD1A9] stroke-5">About US</h1>
    
    <div class="flex flex-wrap font-bold justify-center p-5 w-full gap-2.5">
        <div class="bg-[#F5ECDE] w-2/5 h-4/5 rounded-3xl p-5 m-5">
            <h2 class="text-[#959A25] text-2xl">What is FullyBeyond?</h2>
            <p class="text-[#294105]  text-1xl py-6">
                Fully Beyond is the CSUF Designathon 2024 theme, inviting you to leapfrog conventional design thinking and explore the unexplored. 
                Here, we'll delve deep into the vibrant world of inclusivity and diversity as the cornerstones of our design process.
            </p>

            <p class="text-[#294105]">
                Just like a lush rainforest teems with life, design flourishes when it embraces a variety of perspectives. 
                We believe in empathy, equity, and celebrating differences. By going Fully Beyond, we can unlock the power of
                design to shape a future that reflects the richness of our ever-evolving society.
            </p>
        </div>
        <div class =  "flex justify-center items-center w-1/4 h-1/4 p-5 m-5">
            <img class="acm-logo w-full h-auto"  src="{acmlogo}" alt="acm-logo">
        </div>
    </div>

    <img class="w-36 py-5" src="{lotus}" alt="lotus-flower"/> 
    <h1 class="text-6xl font-black uppercase text-[#6BD1A9] stroke-5 py-6">What Can We Look Forward To?</h1>
    

    <div class="p-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto max-w-7xl">
            <div class="bg-[#B5E8FF] border-2 border-white font-bold rounded-2xl w-full h-[410px] flex flex-col justify-center items-center">
                <img class="w-full h-3/4 object-contain p-5" src="{fully_the_frog_fly}" alt="">
                <p class="m-0 text-[#114674] text-2xl px-2.5 text-center"><span>Challenge and Climb with </span>fellow designers</p>
            </div>
            <div class="bg-[#B5E8FF] border-2 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center">
                <img class="w-full h-3/4 object-contain p-5" src="{fully_once_the_frog}" alt="">
                <p class="m-0 text-[#114674] text-2xl px-2.5 text-center"><span>Clash for top prices from our </span>sponsors</p>
            </div>
            <div class="bg-[#B5E8FF] border-2 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center">
                <img class="w-full h-3/4 object-contain p-5" src="{funna}" alt="">
                <p class="m-0 text-[#114674] text-2xl px-2.5 text-center"><span>Get industry feedbacks from</span> mentors</p>
            </div>
        </div>
    </div>
    
    
</main>

<style>
   :global(body) {
        background-color: #89CAD8;
        font-family: "M PLUS Rounded 1c", sans-serif;
    }

    
    .stroke-5 {
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #1C8B82;
    }


    
    
</style>
