<script>
	import Footer from '$lib/components/Footer.svelte';
	import {  Heading, P, A, Mark, Card, Secondary, Button, Span, Alert } from 'flowbite-svelte'
	import ExperienceEngine from '$lib/components/ExperienceEngine.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Features from '$lib/components/Features.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import YourAi from '$lib/components/YourAI.svelte';
	import ServiceBased from '$lib/components/ServiceBased.svelte';
	import Introduction from '$lib/components/Introduction.svelte';
	import Students from '$lib/components/Students.svelte';
	import Outro from '$lib/components/Outro.svelte';
	import UserQualification from '$lib/components/UserQualification.svelte';
	import Creators from '$lib/components/Creators.svelte';
	import { animate } from '../stores';
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astralta | Make your own AI</title>
    <meta name="description" content="Astralta lets you train an AI ChatBot
	with your own information. It delivers expert-level 
	tailored answers unlike any other Bot providing you 
	and your clients with the ultimate custom AI experience.">
    <meta name="keywords" content="AI-Chatbot, Personalised AI, ChatGPT">
</svelte:head>

<!-- Full Debugger -->
<!-- <p class="sm:text-green-400 md:text-blue-600 lg:text-yellow-300 xl:text-red-500">
	tester
</p> -->



<!-- Neural Fusion - just a cool name for something -->
<!-- Set it once, get it everytime -->
<!-- Unlike chatgpt where you'd need to set it all up every time. Astralta is ready to go when you are -->



<!-- Hero page  -->
<div id="infinity" class="w-full h-screen bg-[url('/bgs/forest_house_couple.png')] bg-image flex flex-col justify-center items-center font-sans z-0">
	<div class="w-full md:w-3/4 px-6 md:px-0 h-full flex justify-start items-center">
		<div class=" lg:w-1/2 h-80 flex flex-col gap-6 md:px-4 py-24">
			<span class="font-extrabold text-5xl tracking-wider">
				Infinity is
				<br class="hidden xl:flex">
				just the beginning
			</span>
			<span class="text-xl leading-6 font-extralight bg-black p-4 bg-opacity-20 backdrop-blur-md rounded-xl">
				At Astralta, we provide <b>ultra-tailored AI solutions </b> and <b>on-demand intelligence</b> for your 
				
				<b>unique challenge</b> with power, safety and privacy in mind.
			</span>
			<div class="flex flex-row gap-3 w-full justify-start">
				<a href="https://calendly.com/adrian_cal/astralta">
					<button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Book a call
					</button>
				</a>
				<a href="/infinity">
					<button class="{$animate} bg-transparent backdrop-blur-md px-6 hover:px-8 py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Learn more
					</button>
				</a>
			</div>
		</div>
		
	
	</div>
</div>

<!-- Studio  -->
<div id="studio" class="w-full h-screen bg-[url('/bgs/blonde.png')] bg-image flex flex-col justify-center items-center z-0">
	<div class="w-full md:w-3/4 px-6 md:px-0 h-full flex justify-start items-center">
		<div class=" lg:w-1/2 h-80 flex flex-col gap-6 md:px-4 py-24">
			<div class="flex flex-row gap-2 items-center">
				<div class="w-8">
					<img src="/logo/plain_white.png" alt="">
				</div>
				<span class="font-thin text-4xl tracking-wider">
					Studio
				</span>
			</div>
			<span class="text-xl leading-6 font-extralight  rounded-xl">
				World’s most <b>intuitive AI creation</b> platform
			</span>
			<div class="flex flex-row gap-3 w-full justify-start">
				<a href="https://app.astralta.com/waitlist">
					<button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Start for free
					</button>
				</a>
				<!-- <a href="/studio">
					<button class="{$animate} bg-transparent backdrop-blur-md px-6 hover:px-8 py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Learn more
					</button>
				</a> -->
			</div>
		</div>
		
	
	</div>
</div>

<!-- Studio Pro  -->
<div id="studio-pro" class="w-full h-screen bg-[url('/bgs/model.png')] bg-image flex flex-col justify-center items-center z-0">
	<div class="w-full md:w-3/4 px-6 md:px-0 h-full flex justify-start items-center">
		<div class=" lg:w-1/2 h-80 flex flex-col gap-6 md:px-4 py-24">
			<div class="flex flex-row gap-2 items-center">
				<div class="w-8">
					<img src="/logo/plain_white.png" alt="">
				</div>
				<span class="font-thin text-4xl tracking-wider">
					Studio <span class="font-bold">PRO</span>
				</span>
			</div>
			<span class="text-xl leading-6 font-extralight  rounded-xl">
				Greatest level of customisation ever. <br class="sm:hidden">  <b>Insanely pro</b>
			</span>
			<div class="flex flex-row gap-3 w-full justify-start">
				<a href="/studio-pro">
					<button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Learn more
					</button>
				</a>
				<div class="bg-transparent backdrop-blur-md px-6 py-2 rounded-full bg-opacity-90">
					Coming soon
				</div>

			</div>
		</div>
		
	
	</div>
</div>

<!-- Custom GPTs  -->
<div id="gpts" class="w-full h-screen bg-[url('/bgs/sunset.png')] bg-image flex flex-col justify-center items-center z-0">
	<div class="w-full md:w-3/4 px-6 md:px-0 h-full flex justify-start items-center">
		<div class=" lg:w-1/2 h-80 flex flex-col gap-6 md:px-4 py-24">
			<div class="flex flex-row gap-2 items-center">
				<div class="w-8">
					<img src="/logo/plain_white.png" alt="">
				</div>
				<span class="font-thin text-4xl tracking-wider">
					<span class="font-bold">GPTs</span>
				</span>
			</div>
			<span class="text-xl leading-6 font-extralight  rounded-xl">
				A collection of our favourite AI assistants
			</span>
			<div class="flex flex-row gap-3 w-full justify-start">
				<a href="/gpts">
					<button class="{$animate} bg-[#0B84FF] px-6 hover:px-8 font-bold py-2 rounded-full bg-opacity-90 hover:bg-opacity-100">
						Explore the collection
					</button>
				</a>

			</div>
		</div>
		
	
	</div>
</div>