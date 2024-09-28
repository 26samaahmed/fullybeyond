<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    import { writable } from 'svelte/store';
    // import Accordion from './Accordion.svelte'; // Assuming you have an Accordion component


    let faqs = [
        { id: 1, question: "What is a designathon?", 
            answer: `A designathon is an intensive event where participants work solo or in teams to design, develop, and present innovative solutions 
            to specific challenges within a set timeframe.`},
        
        { id: 2, question: "How do I participate?", 
            answer: `Visit our registration google form at [link] and follow the 
            instructions on the form.` },

        { id: 3, question: "How do I join the FullyBeyond Discord?", 
            answer: ` Once you have been accepted into FullyBeyond after registering yourself 
            as a participant, you will be sent an email with the Discord link.` },

        { id: 4, question: "Do I need a team to participate?", 
            answer: ` Your team can have a minimum of 1 member (yes, you can participate solo!) 
            to a maximum of 4 members. If you don't have a team, don't worry! You can find others like you 
            looking for a team to work with on our discord!` },

        { id: 5, question: "What resources are available for participants?", 
            answer: `We created a Participant Guide handbook [link] for those who are 
            completely new to Designathons and need a push in the right direction.` },
        
        { id: 6, question: "Where is the event?", 
            answer: "Fullybeyond is a virtual event held on Discord!" },

        { id: 7, question: "What are the prompts?",
            answer: "Details of the prompts will be released on Discord at 11 AM on November 9th."
        },

        { id: 8, question: "How are submissions evaluated?", 
            answer: `Your submissions are evaluated based on how well you visually present 
            and verbally explain the concept of your solution, user research, and your design process.`
        }
    ];

     // Store to manage open accordion state
    const openAccordionId = writable(null);

    const handleToggle = (id) => {
        openAccordionId.update(currentId => currentId === id ? null : id);
    }
</script>

<main>
    <div class="faq-container">
        <img class="hidden md:block absolute left-0 top-0 h-1/2 sm:h-1/2 lg:h-3/4 z-10" src="/Assets/FAQ/left_tree.webp" alt="Left Tree"/>
        <img class="hidden md:block absolute right-0 top-0 h-1/2 lg:h-3/4 z-10" src="/Assets/FAQ/right_tree.webp" alt="Right Tree"/>
        <img class="absolute top-0 left-0 h-full z-0" src="/Assets/FAQ/grass.webp" alt="background"/>
        <div class="content mt-[10vh] sm:mt-[40vh] z-30">
            <h1>FAQ</h1>
            <div class="accordion-container">
                {#each faqs as { id, question, answer, open }}
                    <div class='questionBox'>
                        <div class='questionHead'>
                            <span class="question">{question}</span>
                        </div>
                        <div class="details">
                            <p class="answer">{answer}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <img class="relative w-screen z-10 bottom-0 pt-32" src="/Assets/FAQ/dirt.webp" alt="floor"/>
    </div>
</main>

<style>
    main {
        font-family: "M PLUS Rounded 1c", sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .faq-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #C2FAE9;
        background-size: cover;
        background-position: center;
    }

    .absolute {
        object-fit: cover;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        max-width: 1200px;
        padding: 0 2rem;
    }

    h1 {
        font-size: 6rem;
        font-weight: 900;
        color: #B5F7DD;
        letter-spacing: 0.5rem;
        text-align: center;
        text-shadow:
            -0.3vw -0.3vw 0 #1C8B82,
            0   -0.3vw 0 #1C8B82,
            0.3vw -0.3vw 0 #1C8B82,
            0.3vw  0   0 #1C8B82,
            0.3vw 0.3vw 0 #1C8B82,
            0    0.3vw 0 #1C8B82,
            -0.3vw  0.3vw 0 #1C8B82,
            -0.3vw  0   0 #1C8B82;
        margin-bottom: 2rem;
    }

    .accordion-container {
        width: 100%;
        max-width: 1200px;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .question {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .questionHead {
        width: 100%;
        background-color: white;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        padding: 1rem;
    }

    .questionBox {
        margin-bottom: 2rem;
        width: 100%;
        background-color: #8ECDB0;
        padding-bottom: 1rem;
        border-radius: 2rem;
    }

    .answer {
        font-size: 1.25rem;
        font-weight: normal;
    }

    .details {
        padding: 1rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 4rem;
            letter-spacing: 0.25rem;
        }

        .question {
            font-size: 1.25rem;
        }

        .answer {
            font-size: 1rem;
        }
    }
</style>