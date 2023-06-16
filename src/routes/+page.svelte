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
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astralta | Custom-trained AI</title>
    <meta name="description" content="Astralta lets you train your own GPT AI models on your life, business and ideas so that it gives you custom replies tailored to your needs">
    <meta name="keywords" content="AI-Chatbot, Personalised AI">
</svelte:head>

<!-- Debugger -->
<!-- sm:text-green-400 md:text-blue-600 lg:text-yellow-300 xl:text-red-500 -->

<!-- Full Debugger -->
<!-- <p class="sm:text-green-400 md:text-blue-600 lg:text-yellow-300 xl:text-red-500">
	tester
</p> -->


<!-- Divide the website betweens elling the vacation and showcasing the features -->
<!-- Just So much power.  -->
<!-- Power runs through our veins -->
	<!-- Astralta Frontier is built on top of 
	the latest disruptive technologies.
	The same power behind ChatGPT is now at your fingertips to play
	That's just to name a few. 

	Learn more about the tech behind. -->


<!-- Neural Fusion - just a cool name for something -->
<!-- Set it once, get it everytime -->
<!-- Unlike chatgpt where you'd need to set it all up every time. Astralta is ready to go when you are -->



<!-- Hero page  -->
<HeroSection/>

<!-- Introduction -->
<Introduction/>

<!-- Experience Engine  -->
<ExperienceEngine/>

<!-- Features  -->
<!-- <Features/> -->




<!--Who needs a break?-->
<!-- <section class="min-h-screen justify-center items-center flex">
	<div>
		<Heading class="justify-center">
			Who needs a break?
		</Heading>
	</div>
	
	
</section> -->


<!-- Ways to save with Astralta
<section class="min-h-screen justify-center items-center flex">
	<div>
		<Heading class="justify-center">
			Ways to save with Astralta
		</Heading>
	</div>
	
</section> -->

<!-- Service Based Businesses -->
<ServiceBased/>

<!-- Students -->
<Students/>

<!-- Pricing -->
<!-- <Pricing/> -->




<!-- Your Stoires. Your Business. Your AI -->
<YourAi/>
<!-- Fun just like you --> 
<!-- Learn more about Astralta and privacy -->

<!-- Smarter plans -->


<!-- Yes, it does that -->


<!-- Quick outro -->
<Outro/>

<!-- Footer  -->
<Footer/>