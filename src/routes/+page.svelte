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
<HeroSection/>


<h1 class=" text-true-white text-3xl text-center font-bold mb-12 pt-14 md:pt-16 lg:pt-24">
	Join Waitlist
</h1>

<form action="?/join" method="POST" class="flex flex-col items-center space-y-2 w-full px-6 pb-20">
	<div class="form-control w-full max-w-md py-2">
		<label for="name" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Name
			</span>
		</label>
		<input type="text" name="name" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none" placeholder="Name" />
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="email" class="label font-medium py-2 hidden">
			<span class="label-text">
				Email
			</span>
		</label>
		<input type="email" name="email" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="Email"/>
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="info" class="label font-medium py-2 hidden">
			<span class="label-text">
				Email
			</span>
		</label>
		<!-- <h2 class="text-true-white text-xl text-center font-semibold">
			Tell us more about you
		</h2>
		<p class="text-true-white opacity-60 text-center py-4">
			What do you plan using Astralta for?
		</p> -->
		<input type="text" name="info" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="What will you use Astralta for?"/>
	</div>
	<!-- <div class="form-control w-full max-w-md py-2">
		<label for="password" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Password
			</span>
		</label>
		<input type="password" name="password" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none" placeholder="Password" />
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="passwordConfirm" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Confirm Password
			</span>
		</label>
			<input type="password" name="passwordConfirm" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="Confirm Password"/>
		
	</div> -->


	<!-- <a href="https://astralta.com">
		<div class="text-system-cyan hover:bg-true-white hover:bg-opacity-5 hover:cursor-pointer rounded-xl p-2 hover:backdrop-blur-md">
			Back to astralta.com
		</div>
	</a> -->


	<div class="flex-none h-8">

	</div>



	<div class="w-full max-w-md pt-2">
		<!-- <button type="submit" class="btn btn-primary w-full">Register</button> -->
		<button class="btn bg-true-black w-full bg-opacity-10 backdrop-blur-md text-xl hover:bg-opacity-20 hover:bg-gray-500 rounded-full text-true-white font-semibold btn-md border-none normal-case drop-shadow-2xl " type="submit">
			<div class="px-1.5 font-regular">
				Join now
			</div>
		</button>
	</div>
</form>




<UserQualification/>

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
<!-- <Outro/> -->


<!-- Creators -->
<Creators/>


<h1 class=" text-true-white text-3xl text-center font-bold mb-12">
	Join Waitlist
</h1>

<form action="?/join" method="POST" class="flex flex-col items-center space-y-2 w-full px-6 pb-20">
	<div class="form-control w-full max-w-md py-2">
		<label for="name" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Name
			</span>
		</label>
		<input type="text" name="name" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none" placeholder="Name" />
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="email" class="label font-medium py-2 hidden">
			<span class="label-text">
				Email
			</span>
		</label>
		<input type="email" name="email" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="Email"/>
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="info" class="label font-medium py-2 hidden">
			<span class="label-text">
				Email
			</span>
		</label>
		<!-- <h2 class="text-true-white text-xl text-center font-semibold">
			Tell us more about you
		</h2>
		<p class="text-true-white opacity-60 text-center py-4">
			What do you plan using Astralta for?
		</p> -->
		<input type="text" name="info" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="What will you use Astralta for?"/>
	</div>
	<!-- <div class="form-control w-full max-w-md py-2">
		<label for="password" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Password
			</span>
		</label>
		<input type="password" name="password" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none" placeholder="Password" />
	</div>
	<div class="form-control w-full max-w-md py-2">
		<label for="passwordConfirm" class="label font-medium py-2 hidden">
			<span class="label-text text-transparent">
				Confirm Password
			</span>
		</label>
			<input type="password" name="passwordConfirm" class="apple-input rounded-full bg-black bg-opacity-40 w-full max-w-md font-semibold force-opaque p-3 text-lg focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque focus:border-none"  placeholder="Confirm Password"/>
		
	</div> -->


	<!-- <a href="https://astralta.com">
		<div class="text-system-cyan hover:bg-true-white hover:bg-opacity-5 hover:cursor-pointer rounded-xl p-2 hover:backdrop-blur-md">
			Back to astralta.com
		</div>
	</a> -->


	<div class="flex-none h-8">

	</div>



	<div class="w-full max-w-md pt-2">
		<!-- <button type="submit" class="btn btn-primary w-full">Register</button> -->
		<button class="btn bg-true-black w-full bg-opacity-10 backdrop-blur-md text-xl hover:bg-opacity-20 hover:bg-gray-500 rounded-full text-true-white font-semibold btn-md border-none normal-case drop-shadow-2xl " type="submit">
			<div class="px-1.5 font-regular">
				Join now
			</div>
		</button>
	</div>
</form>

<!-- Footer  -->
<Footer/>