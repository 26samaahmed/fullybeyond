<script>
    import { onMount } from 'svelte';
    import Accordion from './Accordion.svelte'; // Assuming you have an Accordion component

    let leftTree, rightTree, dirt, grassBkgrnd, bushLeft, bushRight, rightSmallFrog, ladybug, bushGroup, waterBkrnd;
    let frogFly, bushesDirtFrog; 

    onMount(() => {
        leftTree = '/lib/Assets/FAQ/left_tree.png';
        rightTree = '/lib/Assets/FAQ/right_tree.png';
        dirt = '/lib/Assets/FAQ/dirt_background.png';
        bushLeft = '/lib/Assets/FAQ/bush_left.png';
        bushRight = '/lib/Assets/FAQ/bush_right.png';
        rightSmallFrog = '/lib/Assets/FAQ/right_mini_frog.png';
        ladybug = '/lib/Assets/FAQ/ladybug.png';
        bushGroup = '/lib/Assets/FAQ/bush_group.png';
        grassBkgrnd = '/lib/Assets/FAQ/grass.png';
        frogFly = '/lib/Assets/FAQ/fully_the_frog_fly.png';
        bushesDirtFrog = '/lib/Assets/FAQ/floor.png';
    });

    let faqs = [
        { id: 1, question: "What is a designathon?", 
            answer: `A designathon is an intensive event where participants work solo or in teams to design, develop, and present innovative solutions 
            to specific challenges within a set timeframe. It's similar to a hackathon but focuses on the design process (UX and UI, product design, and creative problem-solving). 
            Participants can expect to collaborate, learn new skills, find friends, network, and receive mentorship from industry experts.`},
        
        { id: 2, question: "How do I participate?", 
            answer: `Visit our registration google form at [link] and follow the 
            instructions on the form. Registering is completely free as this is a free event. 
            You should receive a confirmation email upon submitting your information. Follow the 
            instructions on the email to complete your registration and prepare for FullyBeyond!` },

        { id: 3, question: "How do I join the FullyBeyond Discord?", 
            answer: ` Once you have been accepted into FullyBeyond after registering yourself 
            as a participant, you will be sent an email with the Discord link.` },

        { id: 4, question: "Do I need a team to participate?", 
            answer: ` Your team can have a minimum of 1 member (yes, you can participate solo!) 
            to a maximum of 4 members. If you don't have a team, don't worry! You can find others like you 
            looking for a team to work with on our discord! \nOnce you find your team, there will be a form in Discord 
            that 1 person on your team must fill in to officially register your team 
            before the start of the event.` },

        { id: 5, question: "What resources are available for participants?", 
            answer: `We created a Participant Guide handbook [link] for those who are 
            completely new to Designathons and need a push in the right direction. 
            If you have any questions, please drop any concerns or 
            questions under the #questions chat in the Discord channel.` },
        
        { id: 6, question: "Where is the event?", 
            answer: "Fullybeyond is a virtual event held on Discord!" },

        { id: 7, question: "What are the prompts?",
            answer: "Details of the prompts will be released on Discord at 11 AM on November 9th."
        },

        { id: 8, question: "How are submissions evaluated?", 
            answer: `Your submissions are evaluated based on how well you visually present 
            and verbally explain the concept of your solution, user research, and your design process. 
            More details will be presented on Discord.`
        }
    ];

    let accordions = faqs.map(faq => ({ ...faq, open: false }));

    const handleToggle = (id) => {
        const isCurrentlyOpen = accordions.find(a => a.id === id).open;

        // Update all accordions to ensure only one is open
        accordions = accordions.map(a => {
            if (a.id === id) {
                return { ...a, open: !isCurrentlyOpen };
            } else {
                return { ...a, open: false };
            }
        });
    }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="FAQSection relative h-full w-full mx-auto">
    <img class="absolute left-0 z-10 w-auto h-full object-cover top-0" src={leftTree} alt="leftTree"/>
    <img class="absolute right-0 z-10 w-auto h-full object-cover top-0" src={rightTree} alt="rightTree"/>
    <img class="absolute bottom-0 z-10 w-full" src={bushesDirtFrog} alt="frog eating fly"/>

    <div class="relative w-full h-full">
        <div class="textSection">
            <h1 class="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-center mb-8">FAQ</h1>

            <div class="relative questionSection z-20 
                w-1/2 flex flex-col
                items-center justify-center mx-auto">

                {#each accordions as { id, question, answer, open }}
                    <Accordion
                        open={open} 
                        on:toggle={() => handleToggle(id)}
                    >
                        <span class="text-2xl font-extrabold" slot="head">{question}</span>
                        <div slot="details">
                            <p class="text-2xl font-medium">{answer}</p>
                        </div>
                    </Accordion>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .FAQSection {
        position: relative;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        width: 100%;
        height: 220vh;
        background-color: #C2FAE9;
        background-image: url('/lib/Assets/FAQ/grass.png');
    }

    h1 {
        position: relative;
        z-index: 30;
        color: #B5F7DD;
        font-size: 10rem;
        letter-spacing: 0.5rem;
        text-shadow:
            -6px -6px 0 #1C8B82,
            0   -6px 0 #1C8B82,
            6px -6px 0 #1C8B82,
            6px  0   0 #1C8B82,
            6px  6px 0 #1C8B82,
            0    6px 0 #1C8B82,
            -6px  6px 0 #1C8B82,
            -6px  0   0 #1C8B82;
    }

    .questionSection {
        z-index: 20; 
    }

    .textSection {
        margin-top: 30vh;
        position: absolute;
        width: 100%;
    }
</style>
