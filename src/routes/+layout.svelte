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
	import { animate, darkMenu } from '../stores';
	import { onMount } from 'svelte';

	onMount(() => {
	
	})


	const menu = [
		{
			"name": "Studio",
			"url": "/#studio"
		},
		{
			"name": "Studio Pro",
			"url": "/studio-pro"
		},
		{
			"name": "Infinity",
			"url": "/infinity"
		},
		{
			"name": "Custom GPTs",
			"url": "/gpts"
		},
		{
			"name": "Partnership",
			"url": "/partnership"
		},
		{
			"name": "Training",
			"url": "/training"
		},
		{
			"name": "Support",
			"url": "/support"
		},
	]


</script>

<!-- App Shell -->
<AppShell class="bg-white dark:bg-black text-black dark:text-white relative text-sm">
	
		<!-- App Bar -->
		<div class="{$animate} w-full absolute top-0 bg-black bg-opacity-70 text-blac backdrop-blur-md h-12 flex justify-end items-center z-10">
			<div class="hover:cursor-pointer md:hidden">
				<a href="/" class="absolute top-2 left-6">
					<div class="{$animate} my-2 md:mx-2 lg:mx-6 xl:mx-8 opacity-80 hover:opacity-100 w-6">
						<img src="/logo/plain_white.png" alt="logo" class="">
					</div>
				</a>
				<details class="dropdown dropdown-end">
					<summary class="btn bg-transparent border-none hover:bg-transparent">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 transition-all ease-in-out duration-300">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							  </svg>
							  
						</span>
					</summary>
					<ul class="menu dropdown-content z-[1] bg-black backdrop-blur-md bg-opacity-80 rounded-xl w-52 py-4">
					  <!-- svelte-ignore a11y-missing-attribute -->
					  {#each menu as m}
					  <a href={m.url} class="{$animate} py-2 flex justify-start items-center px-2 text-center hover:text-lg opacity-80 hover:opacity-100">
						<li>
							{m.name}
						</li>
					</a>
					  {/each}
					</ul>
				  </details>
			</div>

			<div class="w-full h-full relative justify-center items-center hidden md:flex">
				<a href="/">
					<div class="{$animate} my-2 md:mx-2 lg:mx-6 xl:mx-8 opacity-80 hover:opacity-100 w-6">
						<img src="/logo/plain_white.png" alt="logo" class="">
					</div>
				</a>
				{#each menu as m}
				<a href={m.url} >
					<div class=" {$animate} py-2 md:px-2 lg:px-6 xl:px-8 text-xs opacity-70 hover:opacity-100 font-sans font-light">
						{m.name}
					</div>
				</a>
				{/each}
			</div>
		</div>

	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="pageFooter">
		<div class="w-full h-20 bg-black text-white flex justify-center items-center flex-row gap-4">
			<div>
				<img src="/logo/plain_white.png" alt="logo" class="w-6">
			</div>
			<div>
				Copyright © 2023 Astralta Inc. All rights reserved.
			</div>
		</div>
	</svelte:fragment>

</AppShell>
