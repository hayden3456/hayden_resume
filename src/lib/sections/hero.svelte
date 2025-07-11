<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let modal: { visible: Writable<boolean> } = getContext('modal');
	let showCoorsTekButton = false;
	let showShieldAIButton = false;

	async function checkUserLocation() {
		try {
			const response = await fetch('http://ip-api.com/json/');
			const data = await response.json();
			
			// Check if user is in Colorado or Illinois
			if (data.countryCode === 'US' && (data.region === 'CO')) {
				showCoorsTekButton = true;
			}
			
			// Check if user is in Texas
			if (data.countryCode === 'US' && (data.region === 'TX' || data.region === 'IL' || data.region === 'PA')) {
				showShieldAIButton = true;
			}
		} catch (error) {
			console.error('Error fetching location:', error);
			// Fallback: show buttons if geolocation fails (for development/testing)
			showCoorsTekButton = true;
			showShieldAIButton = true;
		}
	}

	onMount(() => {
		checkUserLocation();
	});
</script>

<div
	class="relative flex h-[100vh] w-full flex-col justify-end overflow-hidden bg-[#fcedd1]
"
>
	<div class="darken-edges absolute z-50 h-[100vh] w-full"></div>
	<div
		class="parallax absolute bottom-0 left-0 right-0 z-0 h-full overflow-hidden bg-[#fcedd1] bg-[url('/images/stars.webp')] bg-no-repeat pl-24 opacity-15 bg-blend-multiply [--parallax-speed:8]"
	></div>
	<div
		class="parallax absolute bottom-0 left-0 right-0 z-10 h-full overflow-hidden rounded-tl-full bg-[#fae4c9] bg-[url('/images/moun1.jpg')] bg-cover bg-top pl-24 opacity-15 bg-blend-multiply [--parallax-speed:6]"
	></div>
	<div
		class="parallax absolute bottom-0 left-12 right-0 z-20 h-[60vh] rounded-tl-full bg-[#f8d8c1] [--parallax-speed:4]"
	></div>
	<div
		class="parallax bg-coverbg-center absolute bottom-0 left-24 right-0 z-30 h-[45vh] rounded-tl-full bg-[#f7c6b1] bg-[url('/images/moun2.jpg')] bg-cover opacity-70 bg-blend-multiply [--parallax-speed:2|]"
	></div>
	<div
		class="parallax absolute left-0 right-0 top-[15vh] z-50 mx-auto w-fit px-4 text-left text-2xl [--parallax-speed:2] md:bottom-1/2 md:px-6 [@media_((min-height:600px)_and_(min-width:640px))]:text-4xl [@media_((min-height:800px)_and_(min-width:768px))]:text-5xl"
	>

		<p
			class="font-['Roboto_Mono'] font-medium leading-none tracking-tight text-slate-600 drop-shadow"
		>
			<span class="font-normal text-slate-500/15"></span>&nbsp;&nbsp;&nbsp;&nbsp;Nice to meet you, my name's <span
				class="text-slate-700">Hayden</span
			>
			<span
				class="cursor active font-['Roboto_Mono'] text-slate-500/30"
				id="cursor-1">&#x2590;</span
			>
		</p>

		<div class="mt-16 flex items-center gap-4">
			<button
				class="flex items-center gap-1 rounded-full bg-slate-700 py-2 pl-6 pr-5 text-sm font-bold tracking-widest text-slate-300 shadow-lg shadow-slate-700/10 transition-all duration-500 ease-in-out hover:brightness-125"
				onclick={() => modal.visible.set(true)}
				>CONTACT ME
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
				>
			</button>

		</div>
	</div>
	<div
		class="relative z-40 h-[40vh] w-full min-w-[100vh] bg-cover bg-top md:mt-44 xl:h-[50vh]"
	></div>
	<a href="#work" aria-label="Scroll Down">
	<div
		class="absolute bottom-12 left-0 right-0 z-50 mx-auto h-16 w-16 animate-bounce rounded-full bg-slate-900/20 p-4 text-slate-200 md:h-20 md:w-20"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-arrow-down"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg
		>
	</div>
</a>
</div>

<style lang="postcss">
	.darken-edges {
		background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1) 100%);
		pointer-events: none;
	}
</style>
