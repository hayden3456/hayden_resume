<script lang="ts">
	import { onMount } from 'svelte';

	// Chrome will silently stall a muted autoplay video that starts offscreen, so drive
	// playback from an observer instead.
	function playInView(node: HTMLVideoElement) {
		node.muted = true;
		let primed = false;
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						// Some servers never hand over the first frame off the autoplay path alone;
						// an explicit load() kicks the fetch before we ask it to play.
						if (!primed) {
							primed = true;
							node.load();
						}
						node.play().catch(() => {});
					} else {
						node.pause();
					}
				}
			},
			{ rootMargin: '300px 0px', threshold: 0.01 }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}

	// The RegPermit embed needs a desktop-sized viewport to lay out; on a phone the frame
	// breaks, so swap it for a pointer to the real site. null until we've measured, so the
	// server-rendered markup doesn't commit to either branch and flip on hydration.
	let isPhone = $state<boolean | null>(null);

	onMount(() => {
		const query = window.matchMedia('(max-width: 768px), (pointer: coarse) and (max-width: 950px)');
		isPhone = query.matches;
		const onChange = (event: MediaQueryListEvent) => (isPhone = event.matches);
		query.addEventListener('change', onChange);

		const gsapScript = document.createElement('script');
		gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
		gsapScript.onload = () => {
			const scrollTriggerScript = document.createElement('script');
			scrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.js';
			scrollTriggerScript.onload = () => {
				const gsap = (window as any).gsap;
				gsap.registerPlugin((window as any).ScrollTrigger);

				gsap.to('progress', {
					value: 100,
					ease: 'none',
					scrollTrigger: { scrub: 0.3 }
				});
			};
			document.body.appendChild(scrollTriggerScript);
		};
		document.body.appendChild(gsapScript);

		return () => query.removeEventListener('change', onChange);
	});
</script>

<svelte:head>
	<title>Hayden Constas | CoorsTek — AI Deployment Engineer</title>
	<meta
		name="description"
		content="Hayden Constas — application for AI Deployment Engineer at CoorsTek, Golden CO (R-113714), from a former CoorsTek integration specialist who helped deploy Clay."
	/>
	<link rel="canonical" href="https://haydenconstas.com/coorstek" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://haydenconstas.com/coorstek" />
	<meta property="og:title" content="Hayden Constas | CoorsTek — AI Deployment Engineer" />
	<meta
		property="og:description"
		content="Application for AI Deployment Engineer at CoorsTek, Golden CO — how I meet the posting."
	/>
	<meta property="og:image" content="https://haydenconstas.com/images/website_ss.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hayden Constas | CoorsTek — AI Deployment Engineer" />
	<meta name="twitter:image" content="https://haydenconstas.com/images/website_ss.webp" />
</svelte:head>

<progress max="100" value="0"></progress>

<div>
	<!-- 1. Hero -->
	<section class="hero-section hero-banner">
		<div class="hero-bg" aria-hidden="true"></div>
		<div class="hero-fade" aria-hidden="true"></div>
		<div class="hero-inner">
			<h1>AI Deployment Engineer</h1>
		</div>
	</section>

	<!-- 2. Job Description Card -->
	<section class="job-description-section">
		<details class="job-card">
			<summary class="job-summary">
				<div class="job-header">
					<h2>Job Description</h2>
				</div>
				<span class="expand-pill">
					<span class="expand-label"></span>
					<span class="chev" aria-hidden="true">▾</span>
				</span>
			</summary>

			<div class="job-body">
				<div class="job-overview">
					<p>
						"The AI Deployment Engineer will support CoorsTek's AI and automation strategy by
						building, deploying, and scaling practical AI-enabled solutions. This is a hands-on,
						developer-first role for someone with strong software development skills and experience
						delivering real applications, products, automations, or production solutions."
					</p>
				</div>

				<div class="job-section">
					<h3>Responsibilities</h3>
					<ul>
						<li>
							Design, build, configure, test, deploy, and support solutions using approved
							enterprise AI, automation, application platforms, custom code, APIs, scripts, and
							integrations.
						</li>
						<li>
							Develop prototypes, pilots, and production-ready solutions using approved enterprise
							patterns.
						</li>
						<li>
							Partner with business groups, functional teams, and plant sites to translate use cases
							into scalable, working solutions.
						</li>
						<li>
							Support CoorsTek's citizen development approach by helping business-led builders work
							within approved patterns.
						</li>
						<li>
							Help move solutions from prototype to governed production, including testing,
							ownership, and handoff.
						</li>
						<li>
							Define reusable deployment patterns, templates, and support practices repeatable
							across sites.
						</li>
						<li>Develop lightweight business cases and value measures for deployments.</li>
						<li>Create and maintain documentation, knowledge assets, and handoff materials.</li>
						<li>
							Stay current on emerging AI tools and translate them into practical recommendations.
						</li>
						<li>Refactor, harden, and scale prototypes into production-ready applications.</li>
					</ul>
				</div>

				<div class="job-section">
					<h3>Requirements</h3>
					<ul>
						<li>
							Bachelor's degree in IT, Computer Science, Engineering, Data Analytics, Business, or a
							related field.
						</li>
						<li>
							3+ years in IT, automation, business systems, manufacturing technology, analytics,
							software delivery, or AI enablement.
						</li>
						<li>
							3–5 years hands-on software development, shipping working code into business or
							operational environments.
						</li>
						<li>
							Strong practical development with Python and/or TypeScript across front-end,
							service-tier, API, automation, and integration work.
						</li>
						<li>
							Disciplined practices: Git, branching, pull requests, code review, testing,
							deployment, documentation, production support.
						</li>
						<li>
							Preferred: AI-assisted development tools, Azure-hosted applications, Databricks,
							manufacturing systems, HMI/SCADA, PLC-adjacent workflows.
						</li>
						<li>Experience working directly with business stakeholders on process improvement.</li>
						<li>Preferred: cross-functional work in a multi-site or global environment.</li>
						<li>ITAR regulated — must be a US Citizen or Lawful Permanent Resident.</li>
						<li>Approximately 40% travel, domestic and international.</li>
					</ul>
				</div>
			</div>
		</details>
	</section>

	<!-- 3. Already did this here -->
	<section class="qualification-section">
		<div class="text-content">
			<h2>AI Deployment at CoorsTek</h2>
			<p>
				"Design, build, configure, test, deploy, and support solutions using approved enterprise AI,
				automation, application platforms, custom code, APIs, scripts, and integrations."
			</p>
			<p class="personal-text">
				From Aug 2025 to Feb 2026 I was on the implementation team for Clay, the Moveworks assistant
				rolled out to CoorsTek worldwide. I'd be starting this job knowing CoorsTek systems already.
			</p>
		</div>
		<div class="media media--contain media--tall">
			<img
				src="/coorstek/clay.webp"
				alt="Clay, the CoorsTek AI assistant, walking an employee through a VPN issue"
			/>
		</div>
	</section>

	<!-- 4. Python / TypeScript -->
	<section class="qualification-section-stacked">
		<div class="text-content">
			<h2>Python & TypeScript</h2>
			<p>
				"Strong practical development experience using Python and/or TypeScript, including
				front-end, service-tier, API, automation, scripting, and integration work."
			</p>
			<p class="personal-text">
				I founded <a href="https://regpermit.com" target="_blank" rel="noopener noreferrer"
					>RegPermit</a
				>, an AI air permitting assistant. Python scripts are used in the ingestion of the
				regulations off EPA and state agency sites; TypeScript runs the app and its agent harnesses. {isPhone
					? 'The live tool is at RegPermit.com.'
					: 'Below is a clickable example of the tool.'}
			</p>
		</div>
		<div class="embed">
			{#if isPhone}
				<div class="embed-fallback">
					<p class="embed-fallback-lead">View on a computer for the interactive demo.</p>
					<p class="embed-fallback-sub">
						Or visit <a href="https://regpermit.com" target="_blank" rel="noopener noreferrer"
							>RegPermit.com</a
						> for more info.
					</p>
				</div>
			{:else if isPhone === false}
				<iframe src="https://regpermit.com/embed" title="RegPermit interactive demo" loading="lazy"
				></iframe>
			{/if}
		</div>
	</section>

	<!-- 5. Shipping into real environments -->
	<section class="qualification-section">
		<div class="text-content">
			<h2>Production Software</h2>
			<p>
				"3-5 years of hands-on software development experience, with demonstrated experience
				shipping working code into business or operational environments."
			</p>
			<p class="personal-text">
				I've built client apps at Protogenesis, learned SaaS implementation at CoorsTek, and
				military security satellite GIS at CACI. On the right is an automatic code
				<a href="https://docforge.net/" target="_blank" rel="noopener noreferrer"
					>documentation tool</a
				> I made.
			</p>
		</div>
		<div class="media media--video">
			<a
				class="media-link"
				href="https://docforge.net/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open DocForge at docforge.net"
			>
				<video
					src="/coorstek/docforge.mp4"
					poster="/coorstek/poster-docforge.webp"
					aria-label="DocForge generating and updating documentation"
					muted
					loop
					playsinline
					autoplay
					preload="auto"
					use:playInView
				></video>
			</a>
		</div>
	</section>

	<!-- 6. Git / CI-CD -->
	<section class="qualification-section-reverse">
		<div class="text-content">
			<h2>Development Practices</h2>
			<p>
				"Experience working with disciplined software development practices, including Git,
				branching, pull requests, code review, testing, deployment, documentation, and production
				support."
			</p>
			<p class="personal-text">
				I ran full-stack CI/CD on SAFFIRE at CACI. I've also broken enough of my own work to respect
				version control.
			</p>
		</div>
		<div class="media media--contain">
			<img
				src="/images/cicd.webp"
				alt="Plan, build, test, release, deploy, operate, monitor cycle"
			/>
		</div>
	</section>

	<!-- 7. Stakeholders & citizen development -->
	<section class="qualification-section">
		<div class="text-content">
			<h2>Citizen Development</h2>
			<p>
				"Support CoorsTek's citizen development approach by helping business-led builders work
				within approved patterns and by promoting viable solutions into supportable enterprise
				models."
			</p>
			<p class="personal-text">
				I mentored the student engineers at my own firm and ran entrepreneurship workshops at Mines.
				Meeting someone at whatever they already built is the whole skill.
			</p>
		</div>
		<div class="media media--contain media--photo">
			<img src="/images/me_crop.gif" alt="Running a workshop with a team" />
		</div>
	</section>

	<!-- 8. Plant floor -->
	<section class="qualification-section-reverse">
		<div class="text-content">
			<h2>Manufacturing Systems</h2>
			<p>
				"Experience with... manufacturing systems, HMI/SCADA, PLC-adjacent workflows, or plant
				automation environments preferred."
			</p>
			<p class="personal-text">
				I have an electrical engineering degree, so I understand the principles at play. Combined
				with my embedded code experience, I'm confident in my ability to master PLC automation.
			</p>
		</div>
		<div class="media">
			<div
				class="board-visual"
				role="img"
				aria-label="A power supply board I designed in Eagle, shown over its PCB layout"
			></div>
		</div>
	</section>

	<!-- 9. AI tooling / Azure / Databricks -->
	<section class="qualification-section">
		<div class="text-content">
			<h2>AI Tooling & Cloud</h2>
			<p>
				"Experience with AI-assisted development tools, Azure-hosted applications, Databricks...
				Stay current on emerging AI tools and deployment patterns."
			</p>
			<p class="personal-text">
				For a gut health monitor I deployed a HIPAA-compliant system on AWS, so containerized
				services and the cloud practices that come with holding health data are familiar ground.
				Azure I want to go deeper on but the core principles transfer.
			</p>
		</div>
		<div class="media media--contain media--mid">
			<img
				src="/coorstek/gut-monitor.webp"
				alt="The gut health monitor sensor mounted on a toilet seat"
			/>
		</div>
	</section>

	<!-- 10. Prototype to production -->
	<section class="qualification-section-reverse">
		<div class="text-content">
			<h2>Prototype To Production</h2>
			<p>
				"Refactor, harden, and scale prototypes, internally built tools, and business-led solutions
				into production-ready applications that can be supported within enterprise standards."
			</p>
			<p class="personal-text">
				To the left is the first network test for DockVPN, an easy-to-set-up private business VPN. I
				start with scrappy prototypes and take them through to something that holds together at
				scale. The project site is <a
					href="https://dockvpn.com"
					target="_blank"
					rel="noopener noreferrer">dockvpn.com</a
				>.
			</p>
		</div>
		<div class="media media--contain media--mid">
			<img src="/coorstek/test-rig.webp" alt="Self-built network and VPN test rig" />
		</div>
	</section>

	<!-- 11. ITAR, travel, Golden -->
	<section class="qualification-section">
		<div class="text-content">
			<h2>ITAR, Travel & Location</h2>
			<p>
				"We are an ITAR Regulated Company... This role requires approximately 40% travel both
				domestic/international."
			</p>
			<p class="personal-text">
				US citizen, no sponsorship needed. I'm excited to travel onsite to plant visits, where the
				real requirements show up.
			</p>
		</div>
		<div class="media media--contain media--mid">
			<img
				src="/coorstek/graduation.webp"
				alt="Colorado School of Mines, B.E. Electrical Engineering"
			/>
		</div>
	</section>

	<!-- 12. Conclusion -->
	<section class="hero-section">
		<div style="margin-top: 2rem; text-align: center;">
			<a href="/" class="back-button">← Back to Main Page</a>
		</div>
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
		background: linear-gradient(to right, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f1f5f9);
		background-attachment: fixed;
	}

	progress::-moz-progress-bar {
		background: linear-gradient(to right, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f1f5f9);
		background-attachment: fixed;
	}

	:global(body) {
		background: linear-gradient(
			to bottom,
			#fcedd1 0%,
			#fae4c9 22%,
			#f8d8c1 44%,
			#f7c6b1 66%,
			#f2b9a8 86%,
			#1e293b 94%,
			#334155 100%
		);
	}

	section {
		min-height: auto;
		padding: 3.25rem 5vw;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}

	.hero-section {
		text-align: center;
		justify-content: center;
		flex-direction: column;
	}

	/* Banner: the Clayworks HQ build in downtown Golden, fading into the page gradient. */
	.hero-banner {
		position: relative;
		overflow: hidden;
		padding: 0;
		min-height: 86vh;
		/* column flex, so the vertical axis is justify-content */
		justify-content: flex-end;
		align-items: stretch;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background: url('/coorstek/hero.webp') center 62% / cover no-repeat;
	}

	.hero-fade {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(252, 237, 209, 0) 0%,
			rgba(252, 237, 209, 0.14) 46%,
			rgba(252, 237, 209, 0.8) 63%,
			rgba(252, 237, 209, 0.97) 74%,
			#fcedd1 85%
		);
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		width: 100%;
		padding: 0 5vw 2.5vh;
	}

	.qualification-section,
	.qualification-section-reverse {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.qualification-section-reverse .text-content {
		order: 2;
		padding-left: 2rem;
		padding-right: 0;
	}

	.text-content {
		padding-right: 2rem;
	}

	/* Full-width variant: the visual runs under the copy instead of beside it,
	   for embeds that need the whole row to be usable. */
	.qualification-section-stacked {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-content: center;
	}

	/* Hold the copy to the same measure it gets as a grid column in the two-up
	   sections — (row - gap) / 2 less its padding — and centre that block. */
	.qualification-section-stacked .text-content {
		width: 100%;
		max-width: calc(45vw - 3.5rem);
		margin: 0 auto;
		padding-right: 0;
	}

	/* Hold the 16/9 box on the wrapper so the slot keeps its size while we're still
	   deciding, on mount, whether this viewport gets the iframe or the fallback. */
	.embed {
		width: 100%;
		max-width: 1120px;
		margin: 0 auto;
		aspect-ratio: 16 / 9;
	}

	.embed iframe {
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 12px;
		background: #fff;
	}

	.embed-fallback {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		height: 100%;
		padding: 1.75rem 1.25rem;
		text-align: center;
		border: 1px solid #e2ddd6;
		border-radius: 12px;
		background: #fff;
	}

	.embed-fallback-lead {
		margin: 0;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 1.05rem;
		font-weight: 600;
		color: #2f2f2f;
	}

	.embed-fallback-sub {
		margin: 0;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.95rem;
		line-height: 1.5;
		color: #55504a;
	}

	.embed-fallback a {
		color: #8b4513;
		font-weight: 600;
	}

	.media {
		border-radius: 12px;
		overflow: hidden;
	}

	.media-link {
		display: block;
		border-radius: 12px;
	}

	.media-link:focus-visible {
		outline: 2px solid #8b4513;
		outline-offset: 4px;
	}

	.media img,
	.media video {
		display: block;
		width: 100%;
		height: 340px;
		object-fit: cover;
		object-position: center 22%;
		border: 0;
		border-radius: 12px;
	}

	.media--contain img {
		object-fit: contain;
	}

	/* Layered board visual — same assets as #board on the homepage: the photographed
	   board floats over its Eagle layout. */
	.board-visual {
		height: 340px;
		border-radius: 12px;
		background-image: url('/images/board.webp'), url('/images/board_design.webp');
		background-repeat: no-repeat, no-repeat;
		background-position: center, center;
		background-size:
			auto 92%,
			cover;
	}

	/* Between the default strip and --tall: gives a near-square subject more room
	   without growing the row enough to crowd the next section. */
	.media--mid img {
		height: 420px;
	}

	.media--tall img {
		height: 520px;
	}

	.media--photo img {
		height: 440px;
	}

	/* Show the whole frame rather than cropping it to the row height */
	.media--video video {
		height: 440px;
		object-fit: contain;
	}

	h1 {
		font-size: max(20px, min(68px, 6.4vw));
		font-family: 'Inter', system-ui, sans-serif;
		font-weight: 700;
		letter-spacing: -0.025em;
		line-height: 1.08;
		color: #1e293b;
		margin-bottom: 1.25rem;
	}

	h2 {
		font-size: max(16px, min(42px, 4.2vw));
		font-family: 'Inter', system-ui, sans-serif;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.15;
		color: #1e293b;
		margin-bottom: 1.25rem;
	}

	/* Quoted straight from the posting */
	p {
		margin: 0;
		font-size: max(8px, min(17px, 1.7vw));
		font-family: 'Roboto Mono', ui-monospace, monospace;
		line-height: 1.55;
		color: #475569;
		font-weight: 400;
		letter-spacing: 0;
	}

	.personal-text {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: max(9px, min(20px, 1.95vw));
		font-weight: 450;
		line-height: 1.55;
		color: #1e293b;
		margin-top: 1.25rem;
	}

	.personal-text a {
		color: #8b4513;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
		font-weight: 600;
		transition: opacity 0.2s ease;
	}

	.personal-text a:hover {
		opacity: 0.75;
	}

	/* Darker text over the light part of the gradient */
	section:nth-child(-n + 12) h2,
	section:nth-child(-n + 12) p {
		color: #475569;
	}

	/* Lighter text over the dark tail of the gradient */
	section:nth-child(13) h2,
	section:nth-child(13) p {
		color: #e2e8f0;
	}

	.job-description-section {
		padding: 1.25rem 5vw;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: auto;
	}

	.job-card {
		background: linear-gradient(135deg, #f5f5dc 0%, #f0e68c 50%, #daa520 100%);
		border: 2px solid #8b4513;
		border-radius: 15px;
		padding: 1.15rem 1.75rem 1.35rem;
		max-width: 900px;
		width: 100%;
		box-shadow:
			0 10px 30px rgba(139, 69, 19, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.4),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
		position: relative;
		font-family: 'Inter', system-ui, sans-serif;
		color: #2f2f2f;
		line-height: 1.6;
	}

	.job-card[open] {
		padding: 1.75rem 2.5rem 2.5rem;
	}

	.job-card:hover {
		box-shadow:
			0 14px 38px rgba(139, 69, 19, 0.38),
			inset 0 1px 0 rgba(255, 255, 255, 0.4),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);
	}

	.job-summary {
		list-style: none;
		cursor: pointer;
		display: block;
	}

	.job-summary::-webkit-details-marker {
		display: none;
	}

	.job-summary:focus-visible {
		outline: 2px solid #8b4513;
		outline-offset: 6px;
		border-radius: 8px;
	}

	.job-header {
		text-align: center;
		padding-bottom: 0.85rem;
	}

	/* The obvious "this opens" affordance */
	.expand-pill {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		margin: 0 auto;
		width: fit-content;
		padding: 0.5rem 1.25rem;
		border: 2px solid #8b4513;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.55);
		font-family: 'Inter', system-ui, sans-serif;
		font-weight: 700;
		font-size: 0.82rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		color: #8b4513;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
	}

	.job-summary:hover .expand-pill {
		background: rgba(255, 255, 255, 0.85);
		transform: translateY(-1px);
	}

	.expand-label::after {
		content: 'Read the full posting';
	}

	.job-card[open] .expand-label::after {
		content: 'Hide the full posting';
	}

	.expand-pill .chev {
		font-size: 0.95rem;
		line-height: 1;
		transition: transform 0.25s ease;
	}

	.job-card[open] .expand-pill .chev {
		transform: rotate(180deg);
	}

	.job-body {
		margin-top: 1.75rem;
		padding-top: 1.75rem;
		border-top: 2px solid #8b4513;
	}

	.job-header h2 {
		font-family: 'Inter', system-ui, sans-serif;
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #8b4513;
		margin: 0 0 0.15rem 0;
	}

	.job-overview {
		margin-bottom: 2rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		border-left: 4px solid #8b4513;
	}

	.job-overview p {
		font-size: 1rem;
		line-height: 1.6;
		margin: 0;
		font-family: 'Inter', system-ui, sans-serif;
		color: #2f2f2f;
		letter-spacing: normal;
	}

	.job-section {
		margin-bottom: 2rem;
	}

	.job-section:last-child {
		margin-bottom: 0;
	}

	.job-section h3 {
		font-family: 'Inter', system-ui, sans-serif;
		font-weight: 700;
		font-size: 0.95rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #8b4513;
		margin: 0 0 1rem 0;
		border-bottom: 1px solid #daa520;
		padding-bottom: 0.5rem;
	}

	.job-section ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.job-section li {
		position: relative;
		padding: 0.4rem 0 0.4rem 1.5rem;
		font-size: 0.95rem;
		line-height: 1.55;
		font-family: 'Inter', system-ui, sans-serif;
		color: #2f2f2f;
	}

	.job-section li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #8b4513;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.back-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: #6b7280;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		section {
			padding: 2rem 1rem;
			min-height: auto;
		}

		.hero-banner {
			min-height: 68vh;
			padding: 0;
		}

		.hero-inner {
			padding: 0 1.25rem 3rem;
		}

		.qualification-section,
		.qualification-section-reverse {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.text-content,
		.qualification-section-reverse .text-content {
			padding-right: 0;
			padding-left: 0;
			order: 1;
		}

		.qualification-section-stacked .text-content {
			max-width: none;
		}

		/* .text-content is forced to order 1 above, so the visual slots need an explicit
		   order too — otherwise they default to 0 and jump above the heading. */
		.media,
		.embed {
			order: 2;
		}

		.media img,
		.media video {
			height: 260px;
		}

		/* The fallback card is copy, not a 16/9 frame — let it size to its text. */
		.embed {
			aspect-ratio: auto;
		}

		.embed iframe {
			min-height: 340px;
		}

		.embed-fallback-lead {
			font-size: 1.05rem !important;
		}

		.embed-fallback-sub {
			font-size: 0.95rem !important;
		}

		.board-visual {
			height: 260px;
		}

		.media--mid img {
			height: 320px;
		}

		.media--tall img {
			height: 400px;
		}

		.media--photo img {
			height: 320px;
		}

		.media--video video {
			height: 260px;
		}

		h1 {
			font-size: 2.5rem !important;
			line-height: 1.1;
			margin-bottom: 1rem;
		}

		h2 {
			font-size: 2rem !important;
			line-height: 1.2;
			margin-bottom: 1rem;
		}

		p {
			font-size: 1rem !important;
			line-height: 1.5;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		.personal-text {
			font-size: 1.1rem !important;
			line-height: 1.4;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		.job-description-section {
			padding: 1rem;
		}

		.job-card {
			padding: 1rem 1.25rem 1.15rem;
			margin: 0;
			border-radius: 10px;
		}

		.job-card[open] {
			padding: 1.25rem 1.25rem 1.5rem;
		}

		.job-header h2 {
			font-size: 0.72rem;
		}

		.job-overview p {
			font-size: 1rem;
			line-height: 1.5;
		}

		.job-section h3 {
			font-size: 1.3rem;
			line-height: 1.3;
		}

		.job-section li {
			font-size: 0.95rem;
			padding: 0.4rem 0 0.4rem 1.2rem;
			line-height: 1.4;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}

		progress {
			height: 10px;
		}
	}

	@media (max-width: 480px) {
		section {
			padding: 1.5rem 0.75rem;
		}

		h1 {
			font-size: 2rem !important;
		}

		h2 {
			font-size: 1.7rem !important;
		}

		.personal-text {
			font-size: 1rem !important;
		}

		.job-header h2 {
			font-size: 0.68rem;
		}

		.expand-pill {
			font-size: 0.72rem;
			padding: 0.45rem 1rem;
		}
	}
</style>
