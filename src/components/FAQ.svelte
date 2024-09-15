<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
    import { writable } from 'svelte/store';
    import Accordion from './Accordion.svelte'; // Assuming you have an Accordion component

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

    // Store to manage open accordion state
    const openAccordionId = writable(null);

    const handleToggle = (id) => {
        openAccordionId.update(currentId => currentId === id ? null : id);
    }
</script>

<main>
    <div class="faq-container">
        <div class="content z-30">
            <h1>FAQ</h1>

            <div class="accordion-container">
                {#each faqs as { id, question, answer }}
                    <Accordion
                        open={$openAccordionId === id}
                        on:toggle={() => handleToggle(id)}
                    >
                        <span class="question" slot="head">{question}</span>
                        <div slot="details">
                            <p class="answer">{answer}</p>
                        </div>
                    </Accordion>
                {/each}
            </div>
        </div>
    </div>
</main>


<style>
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
        color: #1C8B82;
        letter-spacing: 0.5rem;
        text-align: center;
        margin-bottom: 0.5rem;
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
            font-size: 4.5rem;
            letter-spacing: 0.25rem;
        }

        .question {
            font-size: 1rem;
        }

        .answer {
            font-size: 1rem;
        }
    }
</style>
