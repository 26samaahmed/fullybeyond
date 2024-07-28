<script>
    import Accordion from "./Accordion.svelte";
    import dirt from "../lib/Assets/FAQ/dirt_background.png"
    import leftTree from "../lib/Assets/FAQ/left_tree.png"
    import rightTree from "../lib/Assets/FAQ/right_tree.png"
    import grassBkgrnd from "../lib/Assets/FAQ/grass_background.png"
    import rightSmallFrog from "../lib/Assets/FAQ/right_mini_frog.png"

    import bee from "../lib/Assets/FAQ/bee.png"
    import ladybug from "../lib/Assets/FAQ/ladybug.png"
    import butterfly1 from "../lib/Assets/FAQ/butterfly1.png"
    import butterfly2 from "../lib/Assets/FAQ/butterfly2.png"
    import butterfly3 from "../lib/Assets/FAQ/butterfly3.png"
    import bushLeft from "../lib/Assets/FAQ/bush_left.png"
    import bushRight from "../lib/Assets/FAQ/bush_right.png"

    import leftSmallFrog from "../lib/Assets/FAQ/left_mini_frog.png"
    import fullyFrog from "../lib/Assets/FAQ/fully_the_frog_no_backpack.png"
    import flyFrog from "../lib/Assets/FAQ/fully_the_frog_fly.png"
</script>

<svelte:head>
  <title>FullyBeyond</title>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet">
</svelte:head>

<div class="FAQSection">
    <img class="absolute left-0 z-1 leftTree" src={leftTree} alt="leftTree"/>
    <img class="absolute right-0 z-1 rightTree" src={rightTree} alt="rightTree"/>
    <img class="dirt" src={dirt} alt="dirt background"/>
    <img class="absolute grass" src={grassBkgrnd} alt="grass background"/>
    <img class="absolute bushLeft left-0" src={bushLeft} alt="bushLeft"/>
    <img class="absolute bushRight right-0" src={bushRight} alt="bushRight"/>

    <div class="questionSection mt-64">
        <img class="absolute rightFrog" src={rightSmallFrog} alt="right frog"/>
        <img class="absolute bee opacity-50" src={bee} alt="bee"/>
        <img class="absolute ladybug opacity-50" src={ladybug} alt="ladybug"/>
        <img class="absolute butterfly1 opacity-50" src={butterfly1} alt="butterfly1"/>
        <img class="absolute butterfly2 opacity-50" src={butterfly2} alt="butterfly2"/>
        <img class="absolute butterfly3 opacity-50" src={butterfly3} alt="butterfly3"/>
        <!-- <img class="absolute flyFrog" src={flyFrog} alt="fly frog"/> -->
        <!-- <img class="absolute leftSmallFrog" src={leftSmallFrog} alt="left frog"/> -->
        <!-- <img class="absolute fullyFrog" src={fullyFrog} alt="fully right frog"/> -->

        <h1 class="font-extrabold">FAQ</h1>
        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>

        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>

        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>

        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>

        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>

        <Accordion>
            <span class="text-3xl font-bold" slot="head">What is a designathon?</span>
            <div slot="details">
                <p class="font-bold">
                    It's a fun design competition.
                </p>
            </div>
        </Accordion>
    </div>
    
</div>

<style lang="postcss">
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        color: #B5F7DD;
        font-weight: 900;
        /* -webkit-text-stroke: 0.1rem; */
        /* -webkit-text-stroke-color: #1C8B82; */
        text-shadow:
            -4px -4px 0 #1C8B82,
            0   -4px 0 #1C8B82,
            4px -4px 0 #1C8B82,
            4px  0   0 #1C8B82,
            4px  4px 0 #1C8B82,
            0    4px 0 #1C8B82,
            -4px  4px 0 #1C8B82,
            -4px  0   0 #1C8B82;
    }

    div.FAQSection {
        display: flex;
        flex-direction: column;
        width: 120rem;
        height: 100rem;
        top: 15rem;
        position: relative; 
        background-color: #C2FAE9;
    }

    div.questionSection {
        width: 120rem;
        align-items: center;
        /* justify-content: center; */
        display: flex;
        flex-direction: column;
        z-index: 1;
    }

    img.leftTree, img.rightTree {
        height: 110rem;
        top: -20rem;
        z-index: 1;
    }

    img.dirt {
        position: absolute;
        width: 100%;
        /* bottom: -1rem; */
        bottom: -2rem;
        z-index: 1;
    }

    img.grass {
        z-index: 0;
        width: 120rem;
        height: 100rem;
    }

    img.rightFrog {
        top: 27rem;
        left: 75rem;
    }

    img.bushLeft, img.bushRight {
        width: 40rem;
        z-index: 0;
        bottom: 2rem;
    }

    img.ladybug {
        top: 40rem;
        left: 15rem;
    }

    img.bee {
        right: 10rem;
        top: 50rem;
    }

    img.butterfly1 {
        left: 40rem;
        top: 10rem;
        width: 8rem;
    }

    img.butterfly2 {
        left: 32rem;
        top: 10rem;
        width: 8rem;
    }

    img.butterfly3 {
        left: 36rem;
        top: 15rem;
        width: 8rem;
    }

</style>