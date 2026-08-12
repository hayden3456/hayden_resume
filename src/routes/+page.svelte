<script>
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Work from '$lib/sections/work.svelte';
	import Project from '$lib/sections/projects.svelte';
	import Education from '$lib/sections/education.svelte';
</script>

<svelte:head>
	<title>Hayden Constas | Software and Electrical Engineer</title>
	<meta
		name="description"
		content="Explore Hayden Constas's engineering portfolio, resume, and project work across embedded systems, automation, full-stack development, and applied AI."
	/>
	<meta
		name="keywords"
		content="Hayden Constas, software engineer, electrical engineer, embedded systems, firmware engineer, full-stack developer, automation engineer, AI engineer, portfolio, resume"
	/>
	<link rel="canonical" href="https://haydenconstas.com/" />
	<meta property="og:title" content="Hayden Constas | Software and Electrical Engineer" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Portfolio and resume of Hayden Constas, focused on embedded systems, web software, automation, and applied AI."
	/>
	<meta property="og:url" content="https://haydenconstas.com/" />
	<meta property="og:image" content="https://haydenconstas.com/images/website_ss.webp" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:alt" content="Screenshot of Hayden Constas's website" />
	<meta property="og:site_name" content="Hayden Constas" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hayden Constas | Software and Electrical Engineer" />
	<meta
		name="twitter:description"
		content="Portfolio and resume of Hayden Constas, focused on embedded systems, web software, automation, and applied AI."
	/>
	<meta name="twitter:image" content="https://haydenconstas.com/images/website_ss.webp" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Hayden Constas",
			"url": "https://haydenconstas.com/",
			"image": "https://haydenconstas.com/images/website_ss.webp",
			"jobTitle": "Software and Electrical Engineer",
			"description": "Software and electrical engineer focused on embedded systems, automation, full-stack development, and applied AI.",
			"sameAs": ["https://www.linkedin.com/in/hayden-constas-39a129228/"]
		}
	</script>
</svelte:head>

<Hero />
<div class="relative z-50 h-4 w-full bg-slate-700"></div>
<About />
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
