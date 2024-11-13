<script lang="ts">
	import Window from '$lib/window.svelte';
	let { close }: { close: () => void } = $props();
</script>

<div class="relative px-6 sm:px-8">
	<Window style="dark" {close}>
		<div class="grid max-w-md gap-4 px-2 pb-4 text-left sm:px-4">
			<h3 class="mb-2 text-3xl font-bold tracking-tight text-slate-300">
				Contact Information
			</h3>
			<div class="text-slate-400 font-large">
				<p>Name: Kayly Sefcik</p>
				<p>Email: kayly.sefcik [at] gmail.com</p>
				<p>Phone Number: (72[zero]) 369-7394</p>
			</div>
			<div class="flex flex-col gap-3 mt-4">
				<button
					type="button"
					class="w-full rounded-full bg-slate-300 p-2 font-bold tracking-widest text-slate-700 transition-all duration-500 ease-in-out hover:brightness-105"
					onclick={close}
				>
					CLOSE
				</button>
			</div>
		</div>
	</Window>
</div>
