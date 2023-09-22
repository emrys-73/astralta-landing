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
<!-- <HeroSection/> -->
<div class="w-full h-full flex flex-col justify-center items-center">
	<!-- Hero Section for Astralta Pro -->
	<div class="w-full h-full bg-[url('/cheering_model_darker.png')] bg-image flex justify-center items-center">

		<!-- Change to 32 if using title -->
		<div class="pt-40 px-4 flex flex-col gap-2">
			<!-- Title -->
			<!-- <div class="opacity-70">
				Astralta Pro
			</div> -->
			<!-- Headline -->
			<div class="text-3xl md:text-4xl font-bold drop-shadow-lg">
				Create ground-breaking AI Tools without code
			</div>
			<!-- Subheader -->
			<div class=" md:text-left">
				World's smartest AI builder + tool gallery
			</div>

			<!-- Call to Action -->
			<div class="flex flex-row gap-3 my-4 items-center">
				<div>
					<a href="/login">
						<button class="{$animate} bg-system-blue rounded-full px-4 py-1 hover:bg-[#0a8dff]">
							Start for free
						</button>
					</a>
				</div>
				<div class="flex justify-center items-center">
					<div class="text-[#198CFF] hover:border-b-2 border-[#198CFF] hover:cursor-pointer">
						Learn More
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#198CFF" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					  </svg>
				</div>
				  
			</div>
		</div>
	</div>

	<!-- Major Headline -->
	<div class="w-full lg:w-4/6 lg:py-20 h-screen px-4 py-0 justify-center flex">
		<div class="text-3xl md:text-4xl font-bold text-left">
			Astralta brings you the greatest level of customisation to an AI ChatBot, ever.
		</div>
	</div>
	
	<!-- Hero section for Astralta -->


</div>
