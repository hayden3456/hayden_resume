<script>
	import { onMount } from 'svelte';

	const rolePoints = [
		'Build responsive UI for large analytics datasets.',
		'Work with product, design, analysts, and backend engineers.',
		'Help with code review, architecture, and testing.',
		'Implement interactive visualization and real-time behavior.',
		'Use AI coding tools daily, but review the output carefully.'
	];

	const qualifications = [
		{
			title: 'React and TypeScript UI Work',
			quote:
				'"Proficiency building modern web applications with JavaScript/TypeScript, React, HTML5, and CSS3."',
			text: 'This is a direct fit. I already build modern web UI and I am comfortable working in React and TypeScript codebases, including component-driven frontend work with modern styling systems.',
			badge: 'React + TS + UI',
			detail: 'Modern frontend work, component systems, and production web UI.'
		},
		{
			title: 'AI-Assisted Product Work',
			quote:
				'"Familiarity with AI/ML-powered product features and integrating UI experiences with AI services."',
			text: 'I use AI tools as part of how I build. I have worked on products that send user requests to LLM backends, execute multi-step actions, and update the interface as the system progresses.',
			badge: 'LLM product features',
			detail: 'Model-backed UI, iterative workflows, and practical AI integration.'
		},
		{
			title: 'Data-Rich Interfaces',
			quote:
				'"Build responsive, high-performance user interfaces that help customers explore and understand complex enterprise-scale datasets."',
			text: 'I am comfortable building UI around dense information. I have built interfaces for stepping through large datasets, choosing visible fields, previewing records, capturing notes, and managing workflow state.',
			badge: 'Data-heavy UI',
			detail: 'Large tables, filtered views, stateful workflows, and operator-focused screens.'
		},
		{
			title: 'Visualization and Interaction',
			quote:
				'"Implement interactive data visualizations while optimizing for large datasets and real-time updates."',
			text: 'This role is not just static UI. It is interaction design around analytics. My background in tools, dashboards, and workflow UIs fits that well because I like making technical information easier to read and act on.',
			badge: 'Interaction focused',
			detail: 'I tend to simplify dense workflows into something usable.'
		},
		{
			title: 'Performance and Front-End Discipline',
			quote:
				'"Optimize front-end performance, rendering efficiency, lazy loading, and smooth handling of complex state in data-intensive applications."',
			text: 'I do not think about UI as just visuals. I think about rendering cost, state complexity, and what happens when data gets large. Adobe Analytics is exactly the kind of product where that matters.',
			badge: 'Performance minded',
			detail:
				'Rendering, state, and responsiveness matter more when the product is analytics-heavy.'
		},
		{
			title: 'AI Coding Tools in Daily Use',
			quote:
				'"Consistent experience applying AI-powered coding aids like GitHub Copilot, Cursor, or Claude to boost coding, debugging, refactoring, and learning."',
			text: 'This is already normal for me. I use AI coding tools to move faster, but I do not outsource judgment to them. That matches the job description closely.',
			badge: 'Cursor / Claude / Copilot',
			detail: 'Use AI for speed. Keep engineering judgment for the final result.'
		},
		{
			title: 'Collaboration and Design Handoff',
			quote:
				'"Translate business requirements, wireframes, and prototypes into polished, intuitive features."',
			text: 'I work well across technical and non-technical contexts. That matters for this role because the work sits between product, design, data, and engineering. I am comfortable taking rough direction and turning it into working UI.',
			badge: 'Product + design + eng',
			detail: 'Clear handoff, iteration, and communication are part of the job.'
		}
	];

	onMount(() => {
		const gsapScript = document.createElement('script');
		gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
		gsapScript.onload = () => {
			const scrollTriggerScript = document.createElement('script');
			scrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.js';
			scrollTriggerScript.onload = () => {
				const gsap = window.gsap;
				gsap.registerPlugin(window.ScrollTrigger);

				gsap.to('progress', {
					value: 100,
					ease: 'none',
					scrollTrigger: { scrub: 0.3 }
				});
			};
			document.body.appendChild(scrollTriggerScript);
		};
		document.body.appendChild(gsapScript);
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Adobe | Hayden Constance</title>
</svelte:head>

<progress max="100" value="0"></progress>

<div class="container">
	<section class="hero-section">
		<div class="adobe-mark">A</div>
		<h1>Software Development Engineer</h1>
		<p class="hero-description">
			Adobe is looking for a UI engineer for Adobe Analytics. The strongest match here is modern web
			UI, AI-assisted product work, data-heavy interfaces, and collaboration across design and
			engineering.
		</p>
	</section>

	<section class="job-description-section">
		<div class="job-card">
			<div class="job-header">
				<div>
					<div class="job-label">Adobe</div>
					<h2>Why I fit this job</h2>
				</div>
				<div class="job-id">R166264</div>
			</div>

			<div class="job-overview">
				<p>
					This job is much closer to my frontend and product-engineering work. It asks for React,
					TypeScript, AI-assisted workflows, UI for large datasets, and strong cross-functional
					collaboration.
				</p>
			</div>

			<div class="job-section">
				<h3>What Adobe wants</h3>
				<ul>
					{#each rolePoints as point}
						<li>{point}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	{#each qualifications as item, index}
		<section class={index % 2 === 0 ? 'qualification-section' : 'qualification-section-reverse'}>
			<div class="text-content">
				<h2>{item.title}</h2>
				<p>{item.quote}</p>
				<p class="personal-text">{item.text}</p>
			</div>

			<div class="adobe-card">
				<div class="adobe-card-badge">{item.badge}</div>
				<p class="adobe-card-detail">{item.detail}</p>
			</div>
		</section>
	{/each}

	<section class="hero-section closing-section">
		<h2>Why this Adobe role fits</h2>
		<p class="hero-description">
			Adobe Analytics is a good fit because the work is UI-heavy, data-heavy, and product-facing.
			That is more aligned with how I like to build than a purely backend role.
		</p>
		<p class="hero-description closing-text">
			I would be useful here because the role maps well to how I already work.
		</p>
	</section>
</div>

<style>
	progress {
		position: fixed;
		top: 0;
		left: 0;
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 15px;
		border: none;
		background: transparent;
		z-index: 1000;
	}

	progress::-webkit-progress-bar {
		background: transparent;
	}

	progress::-webkit-progress-value {
		background: linear-gradient(to right, #991b1b, #dc2626, #ef4444, #f87171, #fecaca, #fee2e2);
		background-attachment: fixed;
	}

	progress::-moz-progress-bar {
		background: linear-gradient(to right, #991b1b, #dc2626, #ef4444, #f87171, #fecaca, #fee2e2);
		background-attachment: fixed;
	}

	:global(body) {
		background: linear-gradient(to bottom, #fff1eb, #ffe3db, #ffd1c7, #fec2b8, #2b0d0d, #120808);
		font-family: 'Inter', 'Segoe UI', sans-serif;
	}

	.container {
		background: linear-gradient(to bottom, #fff1eb, #ffe3db, #ffd1c7, #fec2b8, #2b0d0d, #120808);
		position: relative;
	}

	section {
		min-height: 100vh;
		padding: 5vw;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.hero-section {
		text-align: center;
		justify-content: center;
		flex-direction: column;
	}

	.job-description-section {
		justify-content: center;
	}

	.qualification-section,
	.qualification-section-reverse {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.qualification-section-reverse .text-content {
		order: 2;
		padding-left: 2rem;
		padding-right: 0;
	}

	.qualification-section-reverse .adobe-card {
		order: 1;
	}

	.text-content {
		padding-right: 2rem;
	}

	.adobe-mark {
		width: 120px;
		height: 120px;
		border-radius: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;
		font-size: 4rem;
		font-weight: 800;
		color: #ffffff;
		background: linear-gradient(135deg, #dc2626, #991b1b);
		box-shadow: 0 20px 60px rgba(153, 27, 27, 0.25);
	}

	.adobe-card {
		background: rgba(255, 255, 255, 0.14);
		border: 2px solid rgba(255, 255, 255, 0.24);
		border-radius: 16px;
		min-height: 320px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
		backdrop-filter: blur(10px);
	}

	.adobe-card-badge {
		display: inline-block;
		align-self: flex-start;
		margin-bottom: 1rem;
		padding: 0.45rem 0.8rem;
		border-radius: 999px;
		background: #991b1b;
		color: #fff5f5;
		font-size: 0.85rem;
		font-family: 'Courier New', monospace;
		letter-spacing: 0.04em;
	}

	.adobe-card-detail {
		font-size: max(10px, min(26px, 2.3vw));
		font-family: 'Permanent Marker', cursive;
		line-height: 1.25;
		color: #7f1d1d;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
	}

	.job-card {
		width: min(100%, 1000px);
		background: rgba(255, 255, 255, 0.2);
		border: 2px solid rgba(255, 255, 255, 0.25);
		border-radius: 24px;
		padding: 2rem;
		backdrop-filter: blur(14px);
		box-shadow: 0 25px 80px rgba(127, 29, 29, 0.12);
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.job-label {
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-size: 0.85rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #991b1b;
		margin-bottom: 0.5rem;
	}

	.job-id {
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-size: 0.9rem;
		color: #7f1d1d;
	}

	.job-overview {
		margin-bottom: 1.5rem;
	}

	.job-section h3 {
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-size: 1.6rem;
		font-weight: 700;
		color: #7f1d1d;
		margin: 0 0 0.8rem 0;
	}

	.job-section ul {
		margin: 0;
		padding-left: 1.3rem;
	}

	.job-section li {
		margin-bottom: 0.7rem;
		font-size: 1rem;
		line-height: 1.5;
		color: #7f1d1d;
		font-family: 'Inter', 'Segoe UI', sans-serif;
	}

	h1 {
		font-size: max(20px, min(88px, 9vw));
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-weight: 800;
		line-height: 1.1;
		color: #7f1d1d;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
		margin-bottom: 1.5rem;
		max-width: 900px;
	}

	h2 {
		font-size: max(16px, min(56px, 5.5vw));
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-weight: 750;
		line-height: 1.2;
		color: #7f1d1d;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
		margin-bottom: 1.2rem;
	}

	p {
		margin: 0;
		font-size: max(8px, min(20px, 2vw));
		font-family: 'Inter', 'Segoe UI', sans-serif;
		line-height: 1.45;
		color: #7f1d1d;
		font-weight: 400;
		letter-spacing: 0.01em;
	}

	.hero-description {
		font-size: max(7px, min(18px, 1.6vw));
		max-width: 840px;
		margin: 0 auto;
	}

	.personal-text {
		font-family: 'Inter', 'Segoe UI', sans-serif;
		font-size: max(9px, min(24px, 2.3vw));
		font-weight: 600;
		line-height: 1.35;
		color: #7f1d1d;
		margin-top: 1rem;
	}

	.closing-section h2,
	.closing-section p {
		color: #ffffff;
		text-shadow: none;
	}

	.closing-text {
		margin-top: 1rem;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		section {
			padding: 2rem 1rem;
			min-height: auto;
		}

		.qualification-section,
		.qualification-section-reverse {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.text-content {
			padding-right: 0;
			padding-left: 0;
			order: 1;
		}

		.adobe-card {
			min-height: 220px;
			order: 2;
			padding: 1.5rem;
		}

		.job-header {
			flex-direction: column;
		}

		h1 {
			font-size: 2.4rem !important;
			margin-bottom: 1rem;
		}

		h2 {
			font-size: 2rem !important;
			margin-bottom: 1rem;
		}

		p {
			font-size: 1rem !important;
		}

		.hero-description,
		.personal-text,
		.adobe-card-detail {
			font-size: 1rem !important;
		}
	}
</style>
