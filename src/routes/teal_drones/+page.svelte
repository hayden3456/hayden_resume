<script lang="ts">
	import { onMount } from 'svelte';
	import RcViewer from '$lib/rc-viewer.svelte';
	import TealJobPosting from './teal-job-posting.svelte';

	onMount(() => {
		const gsapScript = document.createElement('script');
		gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
		gsapScript.onload = () => {
			const scrollTriggerScript = document.createElement('script');
			scrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.js';
			scrollTriggerScript.onload = () => {
				const typedWindow = window as Window & { gsap?: any; ScrollTrigger?: any };
				const gsap = typedWindow.gsap;
				if (!gsap || !typedWindow.ScrollTrigger) return;
				gsap.registerPlugin(typedWindow.ScrollTrigger);
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

	function scrollHeroDown() {
		// Roughly a few scroll-wheel notches; scales a bit with viewport height
		const delta = Math.max(280, Math.round(window.innerHeight * 0.28));
		window.scrollBy({ top: delta, behavior: 'smooth' });
	}

	/** Media for each signal — keep paths, embed URLs, and placeholder copy next to the card text. */
	type SignalMedia =
		| { type: 'image'; src: string; alt: string; fit?: 'contain' }
		| { type: 'video'; src: string }
		| { type: 'youtube'; src: string; title: string }
		| { type: 'placeholder'; label: string }
		| { type: 'viewer' }
		| { type: 'board' };

	type SignalCard = {
		eyebrow: string;
		title: string;
		quote: string;
		copy: string;
		media: SignalMedia;
	};

	const requirementSignals: SignalCard[] = [
		{
			eyebrow: 'Requirement 01',
			title: "Bachelor's Degree in Electrical Engineering",
			quote: '"Bachelor’s Degree in Electrical Engineering"',
			copy:
				'Graduated in only 3 years from Colorado School of Mines, May 2025.',
			media: {
				type: 'image',
				src: '/images/graduation_pic.JPEG',
				alt: 'Graduation — Colorado School of Mines, B.E. Electrical Engineering'
			}
		},
		{
			eyebrow: 'Requirement 02',
			title: 'Laboratory Test Equipment',
			quote: '"Proficiency in use of laboratory test equipment"',
			copy:
				`My projects repeatedly put me on the bench with boards, wiring, probes, and iterative hardware validation. That hands-on workflow is the part of engineering work I absolutely love!`,
			media: {
				type: 'image',
				src: '/images/circuits.jpg',
				alt: 'Bench validation work'
			}
		},
		{
			eyebrow: 'Requirement 03',
			title: 'Reports & Manufacturer Communication',
			quote:
				'"Excellent communication skills in writing reports and corresponding with manufacturers"',
			copy: `This picture is from an engineering firm I ran. I'm holding a prototype baby diaper monitor we made. We operated at the prototyping level for clients, and handed work and files off to manufacturers in other countries and other engineering teams.

Writing reports, specs, and clear vendor communication were part of the job.`,
			media: {
				type: 'image',
				src: '/images/smiling_with_board.jpg',
				alt: 'Holding a prototype diaper-monitor device from client prototyping work'
			}
		},
		{
			eyebrow: 'Requirement 04',
			title: 'Altium Designer Exposure',
			quote: '"Basic experience in Altium Designer"',
			copy:
				'My PCB background is strongest in Eagle. The power supply board here was done in Eagle for a PCB class. My skills are directly transferable to Altium Designer and if you would like to do a technical test, I would be happy to study up and blow your socks off.',
			media: { type: 'board' }
		},
		{
			eyebrow: 'Requirement 05',
			title: 'SPICE-Based Simulation',
			quote: '"Basic experience with a SPICE-based circuit simulator"',
			copy:
				'In university I learned ngspice and simulated various silicon layouts.',
			media: {
				type: 'image',
				src: '/images/Ngspice_logo.jpg',
				alt: 'ngspice — SPICE-based circuit simulation',
				fit: 'contain'
			}
		},
		{
			eyebrow: 'Requirement 06',
			title: 'Python Test Automation & Data Processing',
			quote:
				'"Experience using a programming language to automate testing, interface with test equipment, and process and visualize test results (Python is preferred)."',
			copy:
				`During my software engineering internship at CACI I worked on CI/CD pipelines for satellite systems. That role made clear why automated testing matters in mission-critical software. Results have to be reliable before anything moves forward.
				
				While not the same thing, pictured is a test rig I setup last week. I was designing my own mesh vpn system and because I was messing with network settings, I needed a way to communicate with devices when they lose wireless connection in testing. (Apologies for the horrible cable management)`,			
			media: {
				type: 'image',
				src: 'images/dock_vpn_test_rig.jpg',
				alt: 'Python-driven workflow and data pipeline diagram'
			}
		}
	];

	const fitSignals: SignalCard[] = [
		{
			eyebrow: 'Systems',
			title: 'Integrated Electrical Systems',
			quote:
				'"Teal\'s electrical engineers are responsible for their designs from conception to sustaining."',
			copy:
				'The aerospace projects I have worked on taught me how electrical decisions play out inside a full system. This video is from an rc plane competition where we had to drop an autonomous glider from a plane.',
			media: { type: 'video', src: '/video/glider.mp4' }
		},
		{
			eyebrow: 'Debug',
			title: 'Troubleshooting Real Hardware',
			quote:
				'"Troubleshoot issues uncovered in EVT, DVT, and reported by customers in the field."',
			copy:
				'I like debugging physical systems because the laws of physics are unforgiving. Years of building and rebuilding drones taught me to stay calm around failed tests and use them to drive the next experiment.',
			media: { type: 'viewer' }
		},
		{
			eyebrow: 'Field',
			title: 'Field-Test Mindset',
			quote:
				'"Must be able to walk, stand, and navigate large indoor and outdoor facilities" and support hardware where it is actually used.',
			copy:
				`I love the fact that you guys are working out of a warehouse. That's the kind of space where I can get my hands dirty and experiment. Here's a promo video I did at the Denver Federal Center for a construction company. I just wanted to brag because it was a fun project.`,
			media: {
				type: 'youtube',
				src: 'https://www.youtube.com/embed/_Bv3J1Hi4Hg?si=13LlolLr1PJK0lFN',
				title: 'Field testing video'
			}
		}
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Teal Drones | Hayden Constas</title>
</svelte:head>

<style>
	:global(body) {
		--teal-accent: #008ea9;
		--teal-accent-soft: rgba(0, 142, 169, 0.22);
		--panel: rgba(255, 255, 255, 0.05);
		--panel-strong: rgba(255, 255, 255, 0.08);
		--border: rgba(255, 255, 255, 0.16);
		--text-main: #ffffff;
		--text-dim: rgba(255, 255, 255, 0.72);
		--mallory-stack: 'Mallory', 'Aptos', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
		background:
			radial-gradient(circle at top left, rgba(0, 142, 169, 0.22), transparent 28%),
			radial-gradient(circle at 85% 20%, rgba(0, 142, 169, 0.12), transparent 24%),
			linear-gradient(180deg, #020608 0%, #050c0f 35%, #000000 100%);
		color: var(--text-main);
	}

	progress.scroll-progress {
		position: fixed;
		inset: 0 0 auto 0;
		appearance: none;
		-webkit-appearance: none;
		width: 100%;
		height: 6px;
		border: none;
		background: transparent;
		color: var(--teal-accent);
		accent-color: var(--teal-accent);
		z-index: 1000;
	}

	progress.scroll-progress::-webkit-progress-bar {
		background: rgba(255, 255, 255, 0.1);
	}

	progress.scroll-progress::-webkit-progress-value {
		background: linear-gradient(90deg, #005a6b 0%, var(--teal-accent) 55%, #4db4c9 100%);
		border-radius: 0 2px 2px 0;
	}

	progress.scroll-progress::-moz-progress-bar {
		background: linear-gradient(90deg, #005a6b 0%, var(--teal-accent) 55%, #4db4c9 100%);
	}

	.page-shell {
		position: relative;
		overflow: hidden;
	}

	.page-shell::before,
	.page-shell::after {
		content: '';
		position: fixed;
		inset: auto;
		pointer-events: none;
		z-index: 0;
	}

	.page-shell::before {
		top: 7rem;
		left: -8rem;
		width: 18rem;
		height: 18rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 999px;
		box-shadow:
			0 0 0 3rem rgba(255, 255, 255, 0.015),
			0 0 0 6rem rgba(0, 142, 169, 0.04);
	}

	.page-shell::after {
		right: -4rem;
		bottom: 12rem;
		width: 22rem;
		height: 22rem;
		background: radial-gradient(circle, rgba(0, 142, 169, 0.12) 0%, transparent 70%);
	}

	.page-content {
		/* Reserve space below the hero on first paint so the job posting block peeks in. */
		--job-posting-peek: clamp(4rem, 14svh, 9rem);
		position: relative;
		z-index: 1;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem 6rem;
	}

	.hero {
		position: relative;
		min-height: calc(100vh - var(--job-posting-peek));
		min-height: calc(100svh - var(--job-posting-peek));
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem 1.25rem 5.5rem;
		text-align: center;
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: min(100%, 42rem);
	}

	.hero-copy {
		text-align: center;
	}

	.hero-copy .kicker {
		justify-content: center;
	}

	.hero-scroll {
		position: absolute;
		left: 50%;
		bottom: 1.75rem;
		transform: translateX(-50%);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		padding: 0;
		border: 1px solid rgba(255, 255, 255, 0.22);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		color: var(--text-main);
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.hero-scroll:hover {
		background: rgba(0, 142, 169, 0.18);
		border-color: rgba(0, 142, 169, 0.45);
		transform: translateX(-50%) translateY(2px);
	}

	.hero-scroll:focus-visible {
		outline: 2px solid var(--teal-accent);
		outline-offset: 3px;
	}

	.hero-scroll svg {
		width: 1.25rem;
		height: 1.25rem;
		opacity: 0.9;
	}

	.hero-copy,
	.hero-meta,
	.signal-card,
	.brand-values {
		backdrop-filter: blur(10px);
	}

	.kicker,
	.section-kicker {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		font: 600 0.82rem/1 var(--mallory-stack);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.kicker::before,
	.section-kicker::before {
		content: '';
		width: 2.75rem;
		height: 1px;
		background: rgba(255, 255, 255, 0.4);
	}

	.hero-copy h1 {
		margin: 1.25rem auto 1rem;
		font-family: var(--mallory-stack);
		font-size: clamp(3.25rem, 8vw, 6.4rem);
		line-height: 0.92;
		letter-spacing: -0.05em;
		text-transform: uppercase;
		max-width: 14ch;
	}

	.hero-copy .tagline {
		margin: 0 0 1.5rem;
		font-family: var(--mallory-stack);
		font-size: clamp(1.05rem, 2vw, 1.3rem);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--teal-accent);
	}

	.hero-copy .intro {
		max-width: 62ch;
		margin: 0 auto;
		font: 400 1.04rem/1.8 var(--mallory-stack);
		color: var(--text-dim);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
	}

	.cta,
	.secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3rem;
		padding: 0.85rem 1.35rem;
		border-radius: 999px;
		font: 600 0.92rem/1 var(--mallory-stack);
		letter-spacing: 0.08em;
		text-decoration: none;
		text-transform: uppercase;
		transition:
			transform 0.2s ease,
			background-color 0.2s ease,
			border-color 0.2s ease;
	}

	.cta {
		background: var(--teal-accent);
		color: #ffffff;
		border: 1px solid transparent;
	}

	.secondary {
		background: transparent;
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.22);
	}

	.cta:hover,
	.secondary:hover {
		transform: translateY(-1px);
	}

	.hero-meta {
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
			radial-gradient(circle at top right, rgba(0, 142, 169, 0.22), transparent 45%);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
	}

	.logo-chip {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.logo-thumb {
		position: relative;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.16);
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
			radial-gradient(circle at 30% 35%, rgba(0, 142, 169, 0.4), transparent 38%);
		overflow: hidden;
	}

	.logo-thumb::before,
	.logo-thumb::after {
		content: '';
		position: absolute;
		inset: auto;
		background: #ffffff;
	}

	.logo-thumb::before {
		top: 0.9rem;
		left: 1.15rem;
		width: 0.44rem;
		height: 2.65rem;
		border-radius: 999px;
	}

	.logo-thumb::after {
		top: 1.18rem;
		left: 1.65rem;
		width: 1.6rem;
		height: 0.44rem;
		border-radius: 999px;
		box-shadow: 0 0.92rem 0 #008ea9;
	}

	.logo-chip strong,
	.logo-chip span,
	.stat strong,
	.stat span,
	.signal-card h2,
	.signal-card blockquote,
	.value-pill,
	.closer h2 {
		font-family: var(--mallory-stack);
	}

	.logo-chip strong {
		display: block;
		font-size: 1.2rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.logo-chip span {
		display: block;
		margin-top: 0.25rem;
		font-size: 0.86rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.hero-stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.stat {
		padding: 1rem;
		border-radius: 1rem;
		background: var(--panel);
		border: 1px solid rgba(255, 255, 255, 0.09);
	}

	.stat strong {
		display: block;
		font-size: 1.35rem;
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	.stat span {
		display: block;
		margin-top: 0.35rem;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.grid-frame {
		position: relative;
		margin-top: 2rem;
		padding: 2rem;
		border: 1px solid var(--border);
		border-radius: 1.75rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
			linear-gradient(90deg, rgba(0, 142, 169, 0.08), transparent 40%);
	}

	.grid-frame::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
		background-size: 44px 44px;
		mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent);
		pointer-events: none;
	}

	.signal-card p,
	.closer p {
		margin: 0;
		font: 400 1rem/1.8 var(--mallory-stack);
		color: var(--text-dim);
	}

	/* Preserve newlines in signal copy ({text} escapes HTML, so <br> won't work). */
	.signal-card p {
		white-space: pre-line;
	}

	.brand-values {
		margin-top: 1.25rem;
		padding: 1.25rem;
		border-radius: 1.25rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: var(--panel);
	}

	.values-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.value-pill {
		display: inline-flex;
		align-items: center;
		min-height: 2.6rem;
		padding: 0.65rem 0.95rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		background: rgba(255, 255, 255, 0.04);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #ffffff;
	}

	.signal-grid {
		display: grid;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.signal-media.placeholder-frame {
		display: grid;
		place-items: center;
		padding: 1rem;
		text-align: center;
	}

	.signal-media.placeholder-frame {
		border-style: dashed;
	}

	.placeholder-label {
		max-width: 18ch;
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 1.5;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.82);
	}

	.signal-card {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(300px, 1.08fr);
		gap: 1.5rem;
		align-items: stretch;
		padding: 1.5rem;
		border-radius: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
			linear-gradient(90deg, rgba(0, 142, 169, 0.08), transparent 45%);
	}

	.signal-card.reverse {
		grid-template-columns: minmax(300px, 1.08fr) minmax(0, 0.92fr);
	}

	.signal-card.reverse .signal-copy {
		order: 2;
	}

	.signal-card.reverse .signal-media {
		order: 1;
	}

	.signal-copy {
		padding: 0.5rem 0;
	}

	.signal-copy p {
		white-space: pre-line;
	}

	.signal-card h2 {
		margin: 0.9rem 0 0.9rem;
		font-size: clamp(1.6rem, 3.4vw, 2.6rem);
		line-height: 1;
		letter-spacing: -0.04em;
		text-transform: uppercase;
	}

	.signal-card blockquote {
		margin: 0 0 1rem;
		padding-left: 1rem;
		border-left: 2px solid var(--teal-accent);
		font-size: 0.96rem;
		font-style: normal;
		line-height: 1.7;
		color: #d8fbff;
	}

	.signal-media {
		min-height: 380px;
		height: 100%;
		align-self: stretch;
		display: grid;
		grid-template: minmax(0, 1fr) / minmax(0, 1fr);
		border-radius: 1.15rem;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
			radial-gradient(circle at center, rgba(0, 142, 169, 0.16), transparent 60%);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
	}

	.signal-media > :where(img, video, iframe) {
		display: block;
		width: 100%;
		height: 100%;
		min-width: 0;
		min-height: 0;
		object-fit: cover;
		border: 0;
	}

	.signal-media.media-contain-frame > img {
		object-fit: contain;
		object-position: center;
		padding: 1rem;
		box-sizing: border-box;
	}

	.signal-media.viewer-frame {
		display: flex;
		flex-direction: column;
		padding: 0;
		min-height: 460px;
	}

	.signal-media.viewer-frame > :global(.aircraft-viewer) {
		flex: 1 1 auto;
		min-height: 0;
		width: 100%;
		height: 100%;
	}

	.signal-media.placeholder-frame > .placeholder-label {
		align-self: center;
		justify-self: center;
	}

	/* Layered board visual — same assets as #board in projects.svelte; backgrounds scale down inside the frame */
	.signal-media.board-frame {
		padding: 0.65rem;
		background: linear-gradient(180deg, #0a1216 0%, #050a0c 100%);
		/* Taller than the default 380px strip; plain px avoids layout quirks from vh/min() */
		min-height: 460px;
	}

	.signal-media.board-frame .projects-board-visual {
		min-width: 0;
		min-height: 0;
		width: 100%;
		height: 100%;
		align-self: stretch;
		justify-self: stretch;
		background-image: url('/images/board.webp'), url('/images/board_design.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain, contain;
	}

	.closer {
		padding: 5rem 0 1rem;
		text-align: center;
	}

	.closer h2 {
		margin: 0 0 1rem;
		font-size: clamp(2.1rem, 5vw, 4rem);
		line-height: 0.98;
		letter-spacing: -0.05em;
		text-transform: uppercase;
	}

	.closer p {
		max-width: 54ch;
		margin: 0 auto;
	}

	@media (max-width: 980px) {
		.signal-card,
		.signal-card.reverse {
			grid-template-columns: 1fr;
		}

		.signal-card.reverse .signal-copy,
		.signal-card.reverse .signal-media {
			order: initial;
		}

		.hero {
			padding-top: 4.5rem;
		}

	}

	@media (max-width: 640px) {
		.page-content {
			padding-inline: 1rem;
		}

		.hero-meta,
		.signal-card,
		.brand-values,
		.grid-frame {
			padding: 1.1rem;
		}

		.hero-stats {
			grid-template-columns: 1fr;
		}

		.signal-media,
		.signal-media.viewer-frame {
			min-height: 250px;
		}

		.signal-media.board-frame {
			min-height: 300px;
		}

		.cta,
		.secondary {
			width: 100%;
		}
	}
</style>

<progress class="scroll-progress" max="100" value="0"></progress>

<div class="page-shell">
	<div class="page-content">
		<section class="hero">
			<div class="hero-inner">
				<div class="hero-copy">
					<div class="kicker">Teal Drones Application Page</div>
					<h1>Electrical Engineer Role at Teal Drones</h1>
					<p class="intro">
						I would be ecstatic to get the chance to prove myself in an in-person interview. Drones are what got me into engineering in middle school, have been a constant focus of mine.
					</p>
				</div>
			</div>
			<button
				type="button"
				class="hero-scroll"
				aria-label="Scroll down"
				onclick={scrollHeroDown}
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
		</section>

		<section class="grid-frame">
			<TealJobPosting />
		</section>

		<section class="signal-grid">
			<div class="section-kicker">Requirement Match</div>
			<p class="intro" style="margin: 1rem 0 0;">
				This section now mirrors the specific minimum requirements called out in Teal's posting so
				they are visible at a glance instead of being implied across the rest of the portfolio.
			</p>

			{#each requirementSignals as signal, i}
				<article class:reverse={i % 2 === 1} class="signal-card">
					<div class="signal-copy">
						<div class="section-kicker">{signal.eyebrow}</div>
						<h2>{signal.title}</h2>
						<blockquote>{signal.quote}</blockquote>
						<p>{signal.copy}</p>
					</div>

					<div
						class:viewer-frame={signal.media.type === 'viewer'}
						class:placeholder-frame={signal.media.type === 'placeholder'}
						class:board-frame={signal.media.type === 'board'}
						class:media-contain-frame={signal.media.type === 'image' &&
							signal.media.fit === 'contain'}
						class="signal-media"
					>
						{#if signal.media.type === 'image'}
							<img src={signal.media.src} alt={signal.media.alt} />
						{:else if signal.media.type === 'placeholder'}
							<div class="placeholder-label">{signal.media.label}</div>
						{:else if signal.media.type === 'board'}
							<div
								class="projects-board-visual"
								role="img"
								aria-label="Eagle PCB power supply board — photo and layout (same treatment as the Projects section)"
							></div>
						{/if}
					</div>
				</article>
			{/each}
		</section>

		<section class="signal-grid">
			{#each fitSignals as signal, i}
				<article class:reverse={i % 2 === 1} class="signal-card">
					<div class="signal-copy">
						<div class="section-kicker">{signal.eyebrow}</div>
						<h2>{signal.title}</h2>
						<blockquote>{signal.quote}</blockquote>
						<p>{signal.copy}</p>
					</div>

					<div
						class:viewer-frame={signal.media.type === 'viewer'}
						class:media-contain-frame={signal.media.type === 'image' &&
							signal.media.fit === 'contain'}
						class="signal-media"
					>
						{#if signal.media.type === 'image'}
							<img src={signal.media.src} alt={signal.media.alt} />
						{:else if signal.media.type === 'video'}
							<video src={signal.media.src} autoplay muted loop playsinline></video>
						{:else if signal.media.type === 'viewer'}
							<RcViewer fill />
						{:else if signal.media.type === 'youtube'}
							<iframe
								title={signal.media.title}
								src={signal.media.src}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						{/if}
					</div>
				</article>
			{/each}
		</section>

		<section class="closer">
			<div class="section-kicker"></div>
			<h2>I Want To Build Some Drone Tech!</h2>
			<p>
				Thank you for considering my application. I would be excited to contribute to Teal's
				electrical engineering team and keep growing under strong senior engineers while
				building hardware that matters in real operational environments.
			</p>
			<div class="hero-actions" style="justify-content: center;">
				<a class="cta" href="/">My main page if you want to see more projects</a>
			</div>
		</section>
	</div>
</div>
