<script>
	import {AccordionItem, Accordion, Button, Heading} from 'flowbite-svelte'
	const items = Array(3);

	const open_all = () => items.forEach((_,i)=> items[i] = true)
	const close_all= () => items.forEach((_,i)=> items[i] = false)
</script>


<section class="flex-col flex">
	<div class="min-w-full relative">
		<img src="student.png" alt="landscape" class="min-w-full filter brightness-90  sm:h-screen object-cover h-[600px]">	
		<div class="absolute inset-0 flex items-center justify-end xl:mr-48 lg:mr-24 md:mr-14 sm:mr-12 mr-8">
			<h1 class="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-right font-semibold">
				Can you explain
				 that 
				 again?
                <br>
                ... and again?
				<br>
				<br>
				yes!
			</h1>
		</div>
		
	</div>
	<div>
		<h1 class="text-4xl pl-10 pr-10 md:text-5xl xl:text-6xl text-center text-true-white justify-center mt-20 font-bold">
			Explore Astralta for students
		</h1>	
	</div>
	<div class="pl-10 pr-10 sm:pl-18 sm:pr-18 md:pl-32 md:pr-32 xl:pl-40 xl:pr-40 mt-28 mb-28">
		<div class="flex flex-row mb-4 mt-4">
			<button on:click={open_all}> 
				<p class="text-link-blue hover:text-blue-700 hover:cursor-pointer pr-4 pl-4">
					Show all
				</p>
			</button>
			<button on:click={close_all}>
				<p class="text-subtitle-gray hover:text-blue-700 hover:cursor-pointer">
					Hide all
				</p>
			</button>
			
		</div>
		
		<Accordion multiple >
		<AccordionItem bind:open={items[0]} class="hover:bg-subtitle-gray">
			<span slot="header" class="text-true-white">Explain until it's all crystal clear</span>
			<p class="mb-2 text-base-gray">Let Astralta explain the topic you trained it with as long as you need it. Just keep asking questions and you'll always get a response. </p>
			<!-- <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> -->
		</AccordionItem>
		<AccordionItem bind:open={items[1]} class="hover:bg-subtitle-gray">
			<div slot="header" class="text-true-white">Active Recall & Spaced Repetition Support</div>
			<!-- <p class="mb-2 text-gray-500 dark:text-gray-400">Ask Astralta for questions about your topic and get specific questions that will be relevant
				for you and precisely the topic you are dealing with so you nail every exam.
			</p> -->
			<p class="mb-2 text-base-gray">Unlike ChatGPT where you'd have general limited information, with Astralta you can 
				ask for questions about your specific topic and rely on relevant material for you to study exactly what 
				matters for your exams, everytime.
			</p>
		</AccordionItem>
		<AccordionItem bind:open={items[2]} class="hover:bg-subtitle-gray">
			<div slot="header" class="text-true-white">Summarise anything</div>
			<p class="text-base-gray">Simplify and summarise the information you trained Astralta with for it to be easier to understand and more enjoyable to play around with.</p>
		</AccordionItem>
		</Accordion>
	</div>
	<!-- <div class="mb-14">
		<a href="/">
			<p class=" text-center justify-center text-lg sm:text-lg md:text-lg lg:text-lg xl:text-xl font-light hover:no-underline hover:underline-offset-4 text-link-blue hover:text-blue-700">
				Learn more about student pricing
			</p>
		</a>
	</div> -->
	
</section>