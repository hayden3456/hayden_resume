<script lang="ts">
	import { onMount } from 'svelte';
	import RcViewer from '$lib/rc-viewer.svelte';
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

	let jobPostingExpanded = $state(true);

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

	/** Core requirements and “relevant technical experience,” in posting order. Media remapped to best fit each bullet. */
	const coreSignals: SignalCard[] = [
		{
			eyebrow: 'Core · 01',
			title: 'Testing, git, and shipping reliable software',
			quote:
				'Strong software engineering fundamentals (debugging, testing, reliability, version control).',
			copy:
				'At CACI I worked on CI/CD for satellite software—automated testing and traceability before anything ships. At CoorsTek I integrated SaaS and internal tools where reliability matters day to day. The dock rig is a recent side project: I needed repeatable device access while iterating on network behavior—same instinct: isolate, test, fix, repeat.',
			media: {
				type: 'image',
				src: '/images/dock_vpn_test_rig.webp',
				alt: 'Bench test rig with dock and cabling for device connectivity testing'
			}
		},
		{
			eyebrow: 'Core · 02',
			title: 'Sensors and vehicles in real systems',
			quote: 'Experience integrating sensors/devices in real-world systems.',
			copy:
				'RC and aerospace projects wired together airframes, servos, radios, and payloads under real constraints. This clip is from a competition where we dropped an autonomous glider from a carrier plane—integration work under time pressure, not a lab-only exercise.',
			media: { type: 'video', src: '/video/glider.mp4' }
		},
		{
			eyebrow: 'Core · 03',
			title: 'Bench bring-up and wiring',
			quote:
				'Comfort working close to hardware: bring-up, wiring, and iterative troubleshooting.',
			copy:
				'I spend real time at the bench: probes, harnesses, power, and iteration until the hardware tells the truth. That loop—measure, adjust, re-test—is where I learn fastest.',
			media: {
				type: 'image',
				src: '/images/circuits.webp',
				alt: 'Hands-on bench work with circuits and test gear'
			}
		},
		{
			eyebrow: 'Core · 04',
			title: 'From vague brief to something shippable',
			quote: 'Ability to take ambiguous requirements and ship maintainable systems.',
			copy:
				'At Protogenesis we built MVPs for clients: fuzzy goals at first, then specs, handoffs, and manufacturer coordination. Holding a prototype we shipped, I learned to freeze scope enough to deliver while staying flexible on the path.',
			media: {
				type: 'image',
				src: '/images/smiling_with_board.webp',
				alt: 'Prototype device from client engineering work'
			}
		}
	];

	const technicalSignals: SignalCard[] = [
		{
			eyebrow: 'Technical · 01',
			title: 'Boards, power, and embedded-style bring-up',
			quote:
				'Embedded/edge platforms: Raspberry Pi, NVIDIA Jetson, Arduino (or similar).',
			copy:
				'Formal EE training plus hands-on PCB work. The board shown is a power-supply design from a PCB class (Eagle)—layout, bring-up, and debug. I’m eager to go deeper on Pi/Jetson-class platforms in production settings.',
			media: { type: 'board' }
		},
		{
			eyebrow: 'Technical · 02',
			title: 'Interfaces and circuit-level reasoning',
			quote:
				'Protocols and interfaces: RS-485, CAN, Modbus, UART/I2C/SPI, GPIO.',
			copy:
				'Labs and projects pushed UART/I2C/SPI and GPIO-level thinking; ngspice was part of validating circuit behavior before hardware. I’m upfront that I want more miles on industrial buses (CAN, Modbus, RS-485) in production—happy to ramp fast with mentorship.',
			media: {
				type: 'image',
				src: '/images/Ngspice_logo.webp',
				alt: 'ngspice — circuit simulation',
				fit: 'contain'
			}
		},
		{
			eyebrow: 'Technical · 03',
			title: 'Linux-facing integration work',
			quote:
				'Linux-based device development: system services, supervision, logging, performance profiling.',
			copy:
				'My software roles touched services, integrations, and production troubleshooting—not kernel work yet, but I’m comfortable on the command line, chasing logs, and narrowing failures across components. The Mines foundation (B.E. EE, three years) is the base I build from.',
			media: {
				type: 'image',
				src: '/images/graduation_pic.webp',
				alt: 'Graduation — Colorado School of Mines, B.E. Electrical Engineering'
			}
		},
		{
			eyebrow: 'Technical · 04',
			title: 'Vision, vehicles, and spatial reasoning',
			quote:
				'Sensor/vision data processing: filtering, calibration, synchronization, map generation.',
			copy:
				'Years building and flying drones made calibration and tuning intuitive: IMUs, cameras, and fixing “why is this drifting?” under pressure. The 3D viewer is one of my aircraft—tight coupling between sensing, mechanics, and software.',
			media: { type: 'viewer' }
		}
	];
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Tractable | Hayden Constas</title>
</svelte:head>

<style>
	/*
	 * Tractable page — color scheme
	 * --tractable-text #183449 | --tractable-muted #587086 | --tractable-accent #3955ff
	 * Surfaces: --tractable-surface, --tractable-border, page gradient #fbfdff → #e5edf6
	 */
	:global(body) {
		--tractable-bg: #f4f7fb;
		--tractable-surface: rgba(255, 255, 255, 0.82);
		--tractable-border: rgba(25, 52, 73, 0.12);
		--tractable-text: #183449;
		--tractable-muted: #587086;
		--tractable-accent: #3955ff;
		--tractable-shadow: 0 24px 60px rgba(24, 52, 73, 0.12);
		--tractable-quote: #3146b0;
		/* Aliases — existing selectors use these names */
		--teal-accent: var(--tractable-accent);
		--panel: rgba(255, 255, 255, 0.78);
		--panel-strong: rgba(255, 255, 255, 0.92);
		--border: var(--tractable-border);
		--text-main: var(--tractable-text);
		--text-dim: var(--tractable-muted);
		--mallory-stack: 'Mallory', 'Aptos', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
		background:
			radial-gradient(circle at top left, rgba(57, 85, 255, 0.1), transparent 28%),
			linear-gradient(180deg, #fbfdff 0%, #eef3f9 48%, #e5edf6 100%);
		color: var(--text-main);
		font-family: 'Segoe UI', system-ui, sans-serif;
	}

	progress.scroll-progress {
		position: fixed;
		inset: 0 0 auto 0;
		appearance: none;
		-webkit-appearance: none;
		width: 100%;
		height: 4px;
		border: none;
		background: transparent;
		color: var(--tractable-accent);
		accent-color: var(--tractable-accent);
		z-index: 1000;
	}

	progress.scroll-progress::-webkit-progress-bar {
		background: rgba(24, 52, 73, 0.08);
	}

	progress.scroll-progress::-webkit-progress-value {
		background: linear-gradient(90deg, #183449 0%, var(--tractable-accent) 100%);
		border-radius: 0 2px 2px 0;
	}

	progress.scroll-progress::-moz-progress-bar {
		background: linear-gradient(90deg, #183449 0%, var(--tractable-accent) 100%);
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
		border: 1px solid rgba(25, 52, 73, 0.1);
		border-radius: 999px;
		box-shadow:
			0 0 0 3rem rgba(57, 85, 255, 0.04),
			0 0 0 6rem rgba(57, 85, 255, 0.03);
	}

	.page-shell::after {
		right: -4rem;
		bottom: 12rem;
		width: 22rem;
		height: 22rem;
		background: radial-gradient(circle, rgba(57, 85, 255, 0.14) 0%, transparent 70%);
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
		border: 1px solid var(--tractable-border);
		border-radius: 999px;
		background: var(--tractable-surface);
		color: var(--text-main);
		cursor: pointer;
		box-shadow: var(--tractable-shadow);
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
	}

	.hero-scroll:hover {
		background: rgba(255, 255, 255, 0.95);
		border-color: rgba(57, 85, 255, 0.35);
		transform: translateX(-50%) translateY(2px);
	}

	.hero-scroll:focus-visible {
		outline: 2px solid var(--tractable-accent);
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
		background: rgba(25, 52, 73, 0.22);
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
		color: var(--tractable-accent);
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
		background: var(--tractable-accent);
		color: #ffffff;
		border: 1px solid transparent;
	}

	.secondary {
		background: transparent;
		color: var(--text-main);
		border: 1px solid var(--tractable-border);
	}

	.cta:hover {
		transform: translateY(-1px);
		box-shadow: 0 12px 28px rgba(57, 85, 255, 0.28);
	}

	.secondary:hover {
		transform: translateY(-1px);
		background: rgba(57, 85, 255, 0.06);
	}

	.hero-meta {
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1.5rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.78)),
			linear-gradient(135deg, rgba(57, 85, 255, 0.08), rgba(133, 182, 255, 0.04));
		box-shadow: var(--tractable-shadow);
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
		border: 1px solid var(--tractable-border);
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75)),
			radial-gradient(circle at 30% 35%, rgba(57, 85, 255, 0.2), transparent 38%);
		overflow: hidden;
	}

	.logo-thumb::before,
	.logo-thumb::after {
		content: '';
		position: absolute;
		inset: auto;
		background: var(--tractable-text);
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
		box-shadow: 0 0.92rem 0 var(--tractable-accent);
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
		border: 1px solid var(--tractable-border);
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
			linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.78)),
			linear-gradient(90deg, rgba(57, 85, 255, 0.06), transparent 40%);
		box-shadow: var(--tractable-shadow);
	}

	.grid-frame::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		background-image:
			linear-gradient(rgba(25, 52, 73, 0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(25, 52, 73, 0.06) 1px, transparent 1px);
		background-size: 44px 44px;
		mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.85), transparent);
		pointer-events: none;
	}

	.grid-frame.job-posting-frame {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 1.25rem;
	}

	.job-posting-toggle {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
		margin: 0;
		padding: 0.65rem 0.85rem;
		border: 1px solid var(--tractable-border);
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.72);
		color: var(--text-main);
		font: 600 0.82rem/1.2 var(--mallory-stack);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-align: left;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease;
	}

	.job-posting-toggle:hover {
		background: rgba(57, 85, 255, 0.08);
		border-color: rgba(57, 85, 255, 0.28);
	}

	.job-posting-toggle:focus-visible {
		outline: 2px solid var(--tractable-accent);
		outline-offset: 2px;
	}

	.job-posting-toggle svg {
		flex-shrink: 0;
		width: 1.15rem;
		height: 1.15rem;
		opacity: 0.85;
		transition: transform 0.25s ease;
	}

	.job-posting-toggle[aria-expanded='true'] svg {
		transform: rotate(180deg);
	}

	.job-posting-panel {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-rows: 1fr;
		transition: grid-template-rows 0.35s ease;
	}

	.job-posting-panel.is-collapsed {
		grid-template-rows: 0fr;
	}

	.job-posting-panel-inner {
		min-height: 0;
		overflow: hidden;
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
		border: 1px solid var(--tractable-border);
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
		border: 1px solid var(--tractable-border);
		background: rgba(255, 255, 255, 0.65);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-main);
	}

	.signal-section-title {
		margin: 0 0 0.25rem;
		font: 700 0.82rem/1.2 var(--mallory-stack);
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--tractable-accent);
	}

	.signal-grid {
		display: grid;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.signal-grid + .signal-grid {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--tractable-border);
	}

	.job-posting-prose {
		position: relative;
		z-index: 1;
		font: 400 0.98rem/1.65 var(--mallory-stack);
		color: var(--text-dim);
	}

	.job-posting-prose h3 {
		margin: 1.35rem 0 0.5rem;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--text-main);
		letter-spacing: -0.02em;
	}

	.job-posting-prose h3:first-child {
		margin-top: 0;
	}

	.job-posting-prose ul {
		margin: 0.35rem 0 0;
		padding-left: 1.2rem;
	}

	.job-posting-prose li {
		margin-top: 0.45rem;
	}

	.job-posting-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
		margin-bottom: 1rem;
		font-size: 0.88rem;
		color: var(--text-dim);
	}

	.job-posting-meta span {
		white-space: nowrap;
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
		color: var(--text-dim);
	}

	.signal-card {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(300px, 1.08fr);
		gap: 1.5rem;
		align-items: stretch;
		padding: 1.5rem;
		border-radius: 1.5rem;
		border: 1px solid var(--tractable-border);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.82)),
			linear-gradient(90deg, rgba(57, 85, 255, 0.06), transparent 45%);
		box-shadow: var(--tractable-shadow);
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
		border-left: 2px solid var(--tractable-accent);
		font-size: 0.96rem;
		font-style: normal;
		line-height: 1.7;
		color: var(--tractable-quote);
	}

	.signal-media {
		min-height: 380px;
		height: 100%;
		align-self: stretch;
		display: grid;
		grid-template: minmax(0, 1fr) / minmax(0, 1fr);
		border-radius: 1.15rem;
		overflow: hidden;
		border: 1px solid var(--tractable-border);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(244, 247, 251, 0.9)),
			radial-gradient(circle at center, rgba(57, 85, 255, 0.08), transparent 60%);
		box-shadow: inset 0 0 0 1px rgba(25, 52, 73, 0.06);
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
		background-image: url('/images/board.webp'), url('/images/board_design.webp');
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
		color: var(--text-dim);
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
					<div class="kicker">Tractable · Application</div>
					<h1>Embedded Systems Engineer</h1>
					<p class="tagline">Salt Lake City · On-site · Hardware</p>
					<p class="intro">
						Application for the LUMA scanner stack: device-side software, sensor and camera integration,
						and reliable capture pipelines. Below is how my background lines up with what you’re
						looking for—same order as the posting—with examples from projects I’ve already shipped or
						debugged hands-on.
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

		<section class="grid-frame job-posting-frame">
			<button
				type="button"
				class="job-posting-toggle"
				aria-expanded={jobPostingExpanded}
				aria-controls="job-posting-panel"
				onclick={() => (jobPostingExpanded = !jobPostingExpanded)}
			>
				<span>Role summary (from posting)</span>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			<div
				id="job-posting-panel"
				class="job-posting-panel"
				class:is-collapsed={!jobPostingExpanded}
			>
				<div class="job-posting-panel-inner">
					<article class="job-posting-prose">
						<p><strong>Tractable</strong> — Embedded Systems Engineer · Hardware · Salt Lake City · Full
							time · On-site</p>
						<div class="job-posting-meta">
							<span><strong>Role:</strong> Own device-side software for LUMA, a drive-through vehicle
								inspection scanner (multi-camera capture, illumination, multiple sensor modalities).</span>
						</div>
						<h3>Why Tractable</h3>
						<p>
							World-class AI research with products that matter when people need them most—collaborative
							teams and work that has real impact.
						</p>
						<h3>What you’ll do</h3>
						<ul>
							<li>Camera control: triggering, timing, health, recovery.</li>
							<li>Sensor control: presence/distance/measurement, calibration, faults.</li>
							<li>New scanner capabilities and signal pipelines (e.g. laser triangulation → tread-depth maps, stereo depth, filtering, transforms).</li>
							<li>Prototype quickly, then harden for production reliability.</li>
							<li>Integration and deployments: bring-up, lab/on-vehicle validation, debug, ship fixes.</li>
						</ul>
						<h3>What we’re looking for</h3>
						<p><strong>Core:</strong> strong software fundamentals; sensor/device integration in real systems; hands-on bring-up and troubleshooting; ambiguous requirements → maintainable systems.</p>
						<p><strong>Technical:</strong> embedded/edge (Pi, Jetson, Arduino-class); buses and interfaces (RS-485, CAN, Modbus, UART/I2C/SPI, GPIO); Linux on devices (services, supervision, logging, profiling); sensor/vision processing (filtering, calibration, sync, maps).</p>
						<p><strong>Hands-on electronics:</strong> safe sensor hookups; soldering, crimping, datasheets and diagrams.</p>
						<h3>Nice to have</h3>
						<ul>
							<li>CV / depth (stereo, structured light, LiDAR, triangulation).</li>
							<li>Multi-device sync (timestamps, triggers, drift).</li>
							<li>Production deployments: monitoring, OTA, failure analysis.</li>
							<li>Python + C/C++ (Rust/Go) in mixed systems.</li>
							<li>Camera APIs and capture pipelines.</li>
						</ul>
						<h3>Success</h3>
						<ul>
							<li>Camera and sensor stacks run reliably with telemetry and graceful recovery.</li>
							<li>Capabilities move prototype → validated → production.</li>
							<li>Faster bring-up via better tooling and standards.</li>
						</ul>
						<p>
							Tractable is committed to a diverse, inclusive workplace. Equal opportunity without
							discrimination.
						</p>
					</article>
				</div>
			</div>
		</section>

		<section class="signal-grid">
			<div class="section-kicker">How I match</div>
			<p class="intro" style="margin: 1rem 0 0;">
				In the same order as <strong>What we’re looking for</strong> in the posting: four core requirements,
				then four technical areas.
			</p>

			<h2 class="signal-section-title">Core requirements</h2>

			{#each coreSignals as signal, i}
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
						{:else if signal.media.type === 'video'}
							<video src={signal.media.src} autoplay muted loop playsinline></video>
						{:else if signal.media.type === 'placeholder'}
							<div class="placeholder-label">{signal.media.label}</div>
						{:else if signal.media.type === 'board'}
							<div
								class="projects-board-visual"
								role="img"
								aria-label="Eagle PCB power supply board — photo and layout"
							></div>
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

		<section class="signal-grid">
			<h2 class="signal-section-title">Relevant technical experience</h2>

			{#each technicalSignals as signal, i}
				<article class:reverse={(coreSignals.length + i) % 2 === 1} class="signal-card">
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
						{:else if signal.media.type === 'video'}
							<video src={signal.media.src} autoplay muted loop playsinline></video>
						{:else if signal.media.type === 'placeholder'}
							<div class="placeholder-label">{signal.media.label}</div>
						{:else if signal.media.type === 'board'}
							<div
								class="projects-board-visual"
								role="img"
								aria-label="Eagle PCB power supply board — photo and layout"
							></div>
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
			<div class="section-kicker">Next step</div>
			<h2>Let’s talk LUMA and embedded</h2>
			<p>
				Thank you for considering this application. I would welcome a conversation about how I can help
				harden camera and sensor stacks, integrate new modalities, and shorten bring-up time on real
				hardware.
			</p>
			<div class="hero-actions" style="justify-content: center;">
				<a class="cta" href="/">More projects on my main site</a>
			</div>
		</section>
	</div>
</div>
