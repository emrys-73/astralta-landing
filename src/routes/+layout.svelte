<script lang="ts">
	// import '../app.postcss';
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import { GradientButton } from 'flowbite-svelte';
	import { animate } from '../stores';
	import { onMount } from 'svelte';

	onMount(() => {
		
	})

</script>

<!-- App Shell -->
<AppShell class="bg-white dark:bg-black text-black dark:text-white relative text-sm">
	
		<!-- App Bar -->
		<div class="{$animate} w-full absolute top-0 bg-transparent hover:bg-white hover:bg-opacity-5 backdrop-blur-md h-12 flex justify-center items-center px-2">
			<div class="md:w-4/6 w-full h-full relative justify-center flex items-center">
				<!-- Logo -->
				<div class=" items-center dark:flex justify-center absolute left-2 hidden">
					<a href="/">
						<img src="/logo/astralta_logo_light.png" alt="logo" class="w-8 h-8">
					</a>
				</div>
				<div class=" items-center flex justify-center absolute left-2 dark:hidden">
					<img src="/logo/astralta_logo_gray.png" alt="logo" class="w-8 h-8">

				</div>

				<!-- Menu -->
				<div>
					<!-- <LightSwitch/> -->
				</div>

				<!-- Call To Action -->
				<div class=" items-center justify-center absolute right-2 text-white">
					<button class="bg-system-blue rounded-full px-4 py-1">
						Log In
					</button>
				</div>
					
			

			</div>
		</div>

	<!-- Page Route Content -->
	<slot />

</AppShell>
