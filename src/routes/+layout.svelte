<script lang="ts">
	import '../app.postcss';
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

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-transparent dark:bg-transparent" class=" glass-effect">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					<div class="flex">
						<img src="logo.png" alt="logo" class="max-w-[30px] mr-2">
						ASTRALTA
					</div>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <LightSwitch /> -->
				<!-- <a href="/">
					<button class=" bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full text-xs">
						Log In
					</button>
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<!-- Footer depreciated because of fixed position -->
	<!-- <svelte:fragment slot="pageFooter"><Footer/></svelte:fragment> -->
</AppShell>
