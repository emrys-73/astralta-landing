<script>
    import { animate } from "../../stores";
</script>

<div class="w-full h-full flex flex-col justify-center items-center my-10">
    <div class="flex flex-col justify-center items-center md:mt-6 z-20">
        <span class="font-extralight text-3xl md:text-4xl lg:text-5xl tracking-wider">
            Studio <span class="font-bold">PRO</span>
        </span>
        <span class="text-md lg:text-lg leading-7 font-extralight rounded-xl py-1 w-full text-center">
            Beyond creation. 
        </span>
        <div class="my-4">
            <!-- <a href="mailto:montoya@astralta.com" class="py-4"> -->
                <div class="{$animate} bg-transparent px-6 hover:px-10 font-bold altashadow py-2 rounded-full ">
                    Invite only
                </div>
            <!-- </a>  -->
        </div>
    </div>
    <div class=" md:-mt-20 lg:-mt-32 z-10">
        <img src="/media/iphone_mock_3.png" alt="" class="sm:hidden">
        <img src="/media/ipad_mock_3.png" alt="" class="hidden sm:flex lg:hidden">
        <img src="/media/mac_mock_3.png" alt="" class="hidden lg:flex">
    </div>

</div>
