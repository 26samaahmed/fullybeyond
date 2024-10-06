<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    import Accordion from './Accordion.svelte'; // Assuming you have an Accordion component


    let faqs = [
        { id: 1, question: "What is a designathon?", 
            answer: `A designathon is an intensive event where participants work solo or in teams to design, develop, and present innovative solutions 
            to specific challenges within a set timeframe.`},
        
        { id: 2, question: "How do I participate?", 
            answer: `Visit our registration google form <a href="https://acmcsuf.com/fullybeyond-application" target="_blank" style="text-decoration: underline">here</a> and follow the 
            instructions on the form.` },

        { id: 3, question: "How do I join the FullyBeyond Discord?", 
            answer: ` Once you have been accepted into FullyBeyond after registering yourself 
            as a participant, you will be sent an email with the Discord link.` },

        { id: 4, question: "Do I need a team to participate?", 
            answer: ` Your team can have a minimum of 1 member (yes, you can participate solo!) 
            to a maximum of 4 members. If you don't have a team, don't worry! You can find others like you 
            looking for a team to work with on our discord!` },

        { id: 5, question: "What resources are available for participants?",
            answer: `We created a Participant Guide handbook <a href="/Assets/FAQ/Participant_Guide.pdf" target="_blank" style="text-decoration: underline">here</a> for those who are completely new to Designathons and need a push in the right direction.`
        },
        
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

<main>
    <div class="faq-container">
        <img class="hidden md:block absolute left-0 top-0 h-1/2 sm:h-1/2 lg:h-3/4 z-10" src="/Assets/FAQ/left_tree.webp" alt="Left Tree"/>
        <img class="hidden md:block absolute right-0 top-0 h-1/2 lg:h-3/4 z-10" src="/Assets/FAQ/right_tree.webp" alt="Right Tree"/>
        <img class="absolute top-0 left-0 h-full z-0" src="/Assets/FAQ/grass.webp" alt="background"/>
        <div class="content mt-[10vh] sm:mt-[40vh] z-30">
            <h1>FAQ</h1>
            <div class="accordion-container">
                {#each accordions as { id, question, answer, open }}
                    <Accordion
                        open={open} 
                        on:toggle={() => handleToggle(id)}
                    >
                        <span class="question" slot="head">{question}</span>
                        <div slot="details">
                            <p class="answer">{@html answer}</p>
                        </div>
                    </Accordion>
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
        /* background: linear-gradient(to bottom, #959A25, #01641C); */
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
        /* margin-top: 20%; */
        /* margin-top: 50vh; */
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
    }

    .question {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .answer {
        font-size: 1.25rem;
        font-weight: normal;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
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