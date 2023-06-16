<script>
    import {  Heading, P, A, Mark, Secondary, Button, Span, Card} from 'flowbite-svelte'
</script>

<!-- Pricing  -->
<section class=" justify-center items-center flex mb-48">
	<div class="flex items-center flex-col">
		<div>
			<h1 class="text-6xl text-center text-true-white justify-center mt-10 mb-20 xl:mt-20 font-bold xl:mb-20">
				Which package is right for you?
			</h1>	
		</div>
		<div class="flex-row min-w-screen flex min-w-screen">
			<div class="w-1/3 mx-8">
				<Card padding="xl">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">One</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">19</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul class="my-7 space-y-4">
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
						</li>
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
						</li>
						<li class="flex space-x-2">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<Button class="w-full">Choose plan</Button>
				  </Card>
			</div>
			<div class="w-1/3 mx-8">
				<Card padding="xl">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Beyond</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">49</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul class="my-7 space-y-4">
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
						</li>
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
						</li>
						<li class="flex space-x-2">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<Button class="w-full">Choose plan</Button>
				  </Card>
			</div>
			<div class="w-1/3 mx-8">
				<Card padding="xl">
					<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Infinity</h5>
					<div class="flex items-baseline text-gray-900 dark:text-white">
						<span class="text-3xl font-semibold">$</span>
						<span class="text-5xl font-extrabold tracking-tight">195</span>
						<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
					</div>
					<!-- List -->
					<ul class="my-7 space-y-4">
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
						</li>
						<li class="flex space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
						</li>
						<li class="flex space-x-2">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">API Access</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
						</li>
						<li class="flex space-x-2 line-through decoration-gray-500">
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary-600 dark:text-primary-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
						</li>
					</ul>
					<Button class="w-full">Choose plan</Button>
				  </Card>
			</div>

		</div>
	</div>
</section>