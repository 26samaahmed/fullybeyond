<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<main class="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 pt-12">
    <img class="w-24 sm:w-30 lg:w-36 py-5 pt-40" src="/Assets/About/lotus.webp" alt="lotus-flower"/>

    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#6BD1A9] stroke-5 ">About US</h1>
    
    <div class="flex flex-wrap flex-col  md:flex-row p-4 sm:p-5 md:p-8 w-full gap-4">
        <div class="w-full md:w-full lg:w-3/5 h-auto rounded-3xl p-5 m-0 mt-3 md:m-5 max-w-screen-2xl">
            <p class="text-[var(--main-text-color)] text-base md:text-lg lg:text-xl xl:text-2xl py-4 font-normal text-left">
                ACM (Association for Computing Machinery) is a global organization <b>offering opportunities</b> for aspiring computing professionals,
                innovators, and designers to <b>advance their knowledge and skills</b> in technology and creative problem-solving. As the largest
                student organization at CSUF, with over 2,300 members, our chapter has a strong history of organizing successful hackathons
                that foster <b>collaboration, innovative thinking, and technical growth.</b>
            <br><br>
                This year, we are excited to introduce <b>FullyBeyond</b>, our first-ever designathon, which extends our ongoing initiative to bring
                together participants from diverse backgrounds and tackle real- world challenges, encouraging <b>creativity, collaboration, and personal growth.</b>
                <b>FullyBeyond</b> marks the beginning of a new chapter in our efforts to cultivate the next generation of leaders at CSUF.
            </p>
        </div>        


        <div class =  "flex justify-center items-center w-full  lg:w-1/4 h-auto p-5 m-0 md:m-5">
            <img class="acm-logo w-full h-auto"  src="/Assets/About/acmlogo.webp" alt="acm-logo">
        </div>
    </div>



    <img class="w-24 sm:w-30 lg:w-36 py-5" src="/Assets/About/lotus.webp" alt="lotus-flower"/>
    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-[#6BD1A9] stroke-5 py-6">What Can We Look Forward To?</h1>
    

    <div class="p-4 sm:p-6 md:p-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mx-auto max-w-7xl">
            <div class="bg-[#B5E8FF] border-4 border-white font-bold rounded-2xl w-full h-[410px] flex flex-col justify-center items-center hover:scale-105  transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain  p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="/Assets/FAQ/fully_the_frog_fly.svg" alt="fully_the_frog_fly">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Challenge and Climb with </span>fellow designers</p>
            </div>
            <div class="bg-[#B5E8FF] border-4 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center  hover:scale-105 transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="/Assets/EventDetails/fully_once_the_frog.svg" alt="fully_once_the_frog">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Clash for top prizes from our </span>sponsors</p>
            </div>
            <div class="bg-[#B5E8FF] border-4 font-bold border-white rounded-2xl w-full h-[410px] flex flex-col justify-center items-center  hover:scale-105 transform hover:bg-[#9DCCE4] hover:border-[#83B0CC] transition-transform duration-300">
                <img class="w-full h-3/4 object-contain p-4 sm:p-5 lg:max-h-52 xl:max-h-none max-h-208px" src="/Assets/EventDetails/funna.svg" alt="funna">
                <p class="m-0 text-[#114674]  text-xl sm:text-2xl px-2.5 text-center"><span>Get industry feedback from</span> mentors</p>
            </div>
        </div>
    </div>
    
    
</main>

<style>
    :root {
        --main-text-color: #294105;
    } 
  
    .stroke-5 {
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #1C8B82;
    }
    

</style>
