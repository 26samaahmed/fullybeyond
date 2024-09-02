<script>
    import lotus from "../lib/Assets/About/lotus.png";
    import fully_the_frog_fly from  "../lib/Assets/FAQ/fully_the_frog_fly.png";
    import funna from "../lib/Assets/EventDetails/funna.png";
    import fully_once_the_frog from "../lib/Assets/EventDetails/fully_once_the_frog.png";
    import acmlogo from "../lib/Assets/About/acmlogo.svg"
</script>

<main class="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
    <img class="w-24 sm:w-30 lg:w-36 py-5 pt-40" src="{lotus}" alt="lotus-flower" loading="lazy"/>

    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#6BD1A9] stroke-5 ">About US</h1>
    
    <div class="flex flex-wrap flex-col  md:flex-row p-4 sm:p-5 md:p-8 w-full gap-4">
        <div class="bg-[#F5ECDE] w-full md:w-full lg:w-3/5 h-auto rounded-3xl p-5 m-0 mt-3 md:m-5 max-w-screen-2xl">
            <h2 class="text-[#959A25] text-2xl sm:text-3xl lg:text-4xl font-bold">What is FullyBeyond?</h2>
            <p class="text-[#294105] text-base md:text-lg lg:text-xl xl:text-2xl py-4 font-normal text-left">
                FullyBeyond is the CSUF Designathon 2024 theme, inviting you to leapfrog conventional design thinking and explore the unexplored. 
                Here, we'll delve deep into the vibrant world of inclusivity and diversity as the cornerstones of our design process.
            </p>

            <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-[#294105] font-normal text-left">
                Just like a lush rainforest teems with life, design flourishes when it embraces a variety of perspectives. 
                We believe in empathy, equity, and celebrating differences. By going Fully Beyond, we can unlock the power of
                design to shape a future that reflects the richness of our ever-evolving society.
            </p>
        </div>


        <div class =  "flex justify-center items-center w-full  lg:w-1/4 h-auto p-5 m-0 md:m-5">
            <img class="acm-logo w-full h-auto"  src="{acmlogo}" alt="acm-logo" loading="lazy">
        </div>
    </div>



    <img class="w-24 sm:w-30 lg:w-36 py-5 " src="{lotus}" alt="lotus-flower" loading="lazy"/>
    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#6BD1A9] stroke-5 py-6">What Can We Look Forward To?</h1>
    

    <div class="p-4 sm:p-6 md:p-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mx-auto max-w-7xl">
            <div class="bg-[#B5E8FF] border-4 border-white font-bold rounded-2xl w-full h-[410px] flex flex-col justify-center items-center hover:scale-105  transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain  p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="{fully_the_frog_fly}" alt="" loading="lazy">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Challenge and Climb with </span>fellow designers</p>
            </div>
            <div class="bg-[#B5E8FF] border-4 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center  hover:scale-105 transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="{fully_once_the_frog}" alt="" loading="lazy">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Clash for top prices from our </span>sponsors</p>
            </div>
            <div class="bg-[#B5E8FF] border-4 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center  hover:scale-105 transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="{funna}" alt="" loading="lazy">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Get industry feedbacks from</span> mentors</p>
            </div>
        </div>
    </div>
    
    
</main>

<style>
   :global(body) {
        font-family: "M PLUS Rounded 1c", sans-serif;
    }

    
    .stroke-5 {
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #1C8B82;
    }
    
</style>
