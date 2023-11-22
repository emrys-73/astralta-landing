<script>
    import { animate } from "../../stores";
</script>

<div class="w-full h-full flex justify-center items-center flex-col">
    <div class="w-full h-3/4 flex justify-center items-center flex-col">
        <span class="font-extrabold text-5xl tracking-wider">
            Support
        </span>

        <span class="text-xl leading-6 font-extralight bg-black p-4 bg-opacity-20 backdrop-blur-md rounded-xl pb-8">
            We're here to guide you through each and every step.
        </span>

        <div class="flex flex-row gap-3">
            <a href="mailto:montoya@astralta.com">
                <button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
                    Ask us anything
                </button>
            </a>
    
            <a href="https://calendly.com/adrian_cal/astralta">
                <button class="{$animate} bg-transparent backdrop-blur-md px-6 hover:px-8 py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
                    Book a call
                </button>
            </a>
        </div>

    </div>
</div>