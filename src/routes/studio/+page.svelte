<script>
    import { animate } from "../../stores";
    import { loadStripe } from '@stripe/stripe-js'
    import { Elements } from 'svelte-stripe'
    import { onMount } from 'svelte'
    import { PUBLIC_STRIPE_KEY } from '$env/static/public'
 
    let stripe = null

    // onMount(async () => {
    //     stripe = await loadStripe(PUBLIC_STRIPE_KEY)
    // })

</script>


<div class="w-full h-full flex justify-center items-center flex-col">
    <div class="w-full h-full flex justify-center items-center flex-col py-40">
        <div class="flex flex-row gap-3 justify-center items-center ">
            <img src="/logo/plain_white.png" alt="" class="w-12">
            <span class="font-extralight text-5xl tracking-wider">
                Studio
            </span>
        </div>

        <span class="text-lg leading-7 font-extralight rounded-xl py-1 w-full px-12 xl:w-1/2 text-center">
            Full AI customisation for everyone
        </span>

        <a href="https://buy.stripe.com/14k4jN6MN8Qx9SE8wC" class="py-4">
                <button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
                    Start today
                </button>
            </a> 

        
    </div>
    <div class="w-full justify-center items-center flex">
        <div class="w-3/4">
            <img src="/ai_mockup.png" alt="mockup" >
         
        </div>
       

    </div>
</div>

   <!-- <a href="mailto:montoya@astralta.com">
                <button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
                    Tell us about your challenge
                </button>
            </a> -->
<!--     
            <a href="https://calendly.com/adrian_cal/astralta">
                <button class="{$animate} bg-transparent backdrop-blur-md px-6 hover:px-8 py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
                    Coming soon
                </button>
            </a> -->