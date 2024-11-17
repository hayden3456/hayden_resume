<script>
	import Window from '$lib/window.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Ikiagi from '$lib/sections/ikiagi.svelte';
	import Skills from '$lib/sections/skills.svelte';
	import { activateOnScroll, focus, preventDefault, self, trapFocus } from '$lib/util';
	import Work from '$lib/sections/work.svelte';
	import Project from '$lib/sections/projects.svelte';
	import Education from '$lib/sections/education.svelte';
	import ContactModal from '$lib/contact-modal.svelte';

	let showIkiagi = true;

	onMount(() => {
		// Check the viewport width and set `showIkiagi` to false if on mobile
		const updateShowIkiagi = () => {
			showIkiagi = window.innerWidth > 768; // Adjust breakpoint as needed
		};

		updateShowIkiagi();
		window.addEventListener('resize', updateShowIkiagi);

		// Cleanup the event listener
		return () => window.removeEventListener('resize', updateShowIkiagi);

		activateOnScroll('.cursor');
	});
</script>

<Hero />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
{#if showIkiagi}
	<Ikiagi />
	<div class="relative z-50 h-4 w-full bg-slate-800"></div>
{/if}
<Work />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<Project />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<Education />

<style lang="postcss">
	:global(.cursor) {
		opacity: 0;
	}

	:global(.cursor.active) {
		animation: blink 1s linear infinite;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		49% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes parallax {
		to {
			transform: translateY(calc(var(--parallax-speed) * -200px));
		}
	}

	:global(.parallax) {
		animation: parallax linear;
		animation-timeline: scroll();
	}

	:global(form.dirty input:invalid, form.dirty textarea:invalid) {
		@apply border border-red-500;
	}
</style>
