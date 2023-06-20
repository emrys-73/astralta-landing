<script>
    import Footer from "$lib/components/Footer.svelte";
	import { Helper, Label, Input } from "flowbite-svelte";
</script>

<section class="items-center flex-col flex">
	<div class="min-w-full relative">
		<img src="landscape_sunset.png" alt="landscape" class="min-w-full sm:h-screen object-cover h-[600px] filter brightness-90">	
		<div class="absolute inset-0 flex items-center justify-center">
			<h1 class="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center font-semibold drop-shadow-xl">
				Join the waitlist
			</h1>
		</div>
		<div class="absolute inset-0 flex items-center justify-center mt-20 sm:mt-20 md:mt-28 lg:mt-24 xl:mt-28">
			<p class="text-true-white text-center justify-center text-md sm:text-lg font-semibold drop-shadow-xl subtitle">
				<span>Be</span>
				<span>the</span>
				<span>first</span>
				<span>to</span>
                <span>build</span>
                <span>the</span>
                <span>future.</span>
				<!-- No Code. All Power. -->
			</p>
		</div>
		<div class="absolute inset-6 flex items-center justify-center mt-48 sm:mt-56 md:mt-56 lg:mt-48 xl:mt-64">
            <Label class="block space-y-2 min-w-[400px] pt-8 xl:min-w-[600px]">
              <!-- <span>Your email</span> -->
              <input type="text" placeholder="Your E-Mail" class="input input-ghost w-full text-true-black hover:text-true-white active:text-true-white focus:text-true-white" />
              <!-- <Helper class="text-sm">We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Privacy Policy</a>.</Helper> -->
            </Label>
          </div>
          
              
	</div>
</section>

<Footer/>