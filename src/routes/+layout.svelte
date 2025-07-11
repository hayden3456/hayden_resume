<script lang="ts">
	import '../app.css';
	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import ContactModal from '$lib/contact-modal.svelte';
	import { fade } from 'svelte/transition';
	import { focus, preventDefault, self, trapFocus } from '$lib/util';
	import { browser } from '$app/environment';
	import GitHub from '$lib/icons/git-hub.svelte';
	import LinkedIn from '$lib/icons/linked-in.svelte';

	var modal = setContext('modal', {
		visible: writable(false)
	});

	let { visible } = modal;

	function handleClickClose(event: PointerEvent) {
		if ((event as PointerEvent)?.pointerId === -1) return;

		toggleModal();
	}

	function handleEscapeClose(event: KeyboardEvent) {
		console.log(event);
		if (event.key !== 'Escape') return;

		toggleModal();
	}

	function toggleModal() {
		visible.set(!$visible);
	}

	let unsubscribe = visible.subscribe((value) => {
		if (!browser) return;

		if (value) {
			document.body.classList.add('overflow-hidden');
			return;
		}

		document.body.classList.remove('overflow-hidden');
	});

	onDestroy(unsubscribe);
</script>

<nav class="absolute left-0 right-0 z-50 mx-auto max-w-7xl p-4 md:p-6">
	<ul class="flex items-end justify-between text-slate-700">
		<li>
			<a href="/" class="-ml-2 block p-2 text-sm font-bold tracking-tight">Hayden Constas</a>
		</li>
		<li class="flex-1"></li>
		<li>
			<a href="https://www.linkedin.com/in/hayden-constas-39a129228/" class="-mr-1 block h-10 w-10 p-1">
				<LinkedIn />
			</a>
		</li>
	</ul>
</nav>
<main>
	<slot />
</main>
<footer
	class="left-0 -mt-2 w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-900 py-24"
>
	<div class="relative mx-auto max-w-7xl px-4 md:px-6">
		<a href="#top" class="mb-2 block text-base font-bold tracking-tight text-slate-400">
			Hayden Constas</a
		>
		<ul
			class="flex justify-between border-t border-slate-800 pt-16 text-sm text-slate-500 sm:gap-32"
		>
			<li class="hidden flex-1 sm:block"></li>
			<li>
				<ol class="flex flex-col gap-2 font-medium leading-loose tracking-tight">
					<li><button onclick={toggleModal}>Contact Me</button></li>
					<!-- <li><a href="#skills">SKILLS</a></li> -->
					<li><a href="/#work">Work</a></li>
					<li><a href="/#projects">Projects</a></li>
					<li><a href="/#education">Education</a></li>
				</ol>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/hayden-constas-39a129228/" class="-mr-1 block h-10 w-10 p-1">
					<LinkedIn />
				</a>
			</li>
		</ul>
	</div>
</footer>

{#if $visible}
	<button
		transition:fade
		class="fixed top-0 z-[100] flex h-full w-full cursor-default items-center justify-center bg-white/70 sm:bg-white/50 sm:backdrop-blur"
		onclick={preventDefault(self(handleClickClose))}
		onkeydown={handleEscapeClose}
		use:focus
		use:trapFocus
	>
		<ContactModal close={toggleModal} />
	</button>
{/if}

<style lang="postcss">
	:global(.tooltip) {
		visibility: hidden;
		position: absolute;
	}

	:global(.tech-icon:hover .tooltip) {
		visibility: visible;
		z-index: 100;
	}
</style>
