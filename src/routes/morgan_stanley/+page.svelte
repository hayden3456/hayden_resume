<script lang="ts">
	import { onMount } from 'svelte';
	import 'lenis/dist/lenis.css';

	const IMG = {
		layer01: '/morgan_stanley/paralax_1_1.avif',
		layer02: '/morgan_stanley/paralax_1_3.avif',
		layer03: '/morgan_stanley/paralax_1_2.avif',
		portfolioBg: '/morgan_stanley/branch_2.avif',
		/** Footer parallax: base → city → foreground (trees / peaks). */
		footer01: '/morgan_stanley/paralax_2_1.avif',
		footer02: '/morgan_stanley/paralax_2_3.avif',
		footer03: '/morgan_stanley/paralax_2_2.avif'
	} as const;

	const SOCIAL = {
		linkedin: 'https://www.linkedin.com/in/hayden-constas-39a129228/',
		/** Set to your X profile URL to show the X button instead of GitHub. */
		x: '',
		github: 'https://github.com/haydenconstas'
	} as const;

	/** Posting: IED — Quantitative Trading Assistant — Salt Lake City (professional). */
	const posting = {
		role: 'Quantitative Trading Assistant',
		division: 'Institutional Equity Division (IED)',
		office: 'Salt Lake City, UT'
	} as const;

	const responsibilityFit: { ask: string; answer: string }[] = [
		{
			ask: 'Oversee real-time model calibration and market parameter maintenance.',
			answer:
				'At CACI I worked on satellite software where traceability, disciplined checklists, and CI-minded rigor matter before anything ships. That habit of keeping parameters and builds in a known-good state maps cleanly to supporting calibration workflows where consistency is non-negotiable.'
		},
		{
			ask: 'Monitor market data (vol surfaces, dividends, borrow curves, yield curves) and resolve fit errors promptly.',
			answer:
				'My strength is live data systems: validate inputs, catch bad fits fast, and narrow whether the issue is data, model assumptions, or plumbing. SAFFIRE-adjacent GIS work and integration debugging at CoorsTek trained me to treat anomalies as tickets with a tight feedback loop.'
		},
		{
			ask: 'Troubleshoot exchange-related quote issues and ensure smooth trading operations.',
			answer:
				'Tie-outs across vendors, APIs, and internal tools are a recurring theme in my integrations work—when two systems disagree, I chase the delta methodically and communicate what broke, why, and what we need from the other side.'
		},
		{
			ask: 'Validate new-name fits and manage corporate actions and basket compositions.',
			answer:
				'Delivering MVPs at Protogenesis meant new clients, new datasets, and shifting scope weekly. I am used to validating new configurations, documenting edge cases, and keeping a coherent “system picture” when the underlying pieces change.'
		},
		{
			ask: 'Collaborate with traders, strats, and support teams to address live requests quickly and accurately.',
			answer:
				'I have shipped alongside engineers, operators, and stakeholders in defense tech, industrial integration, and startups. I default to crisp updates, explicit assumptions, and escalation when I need a decision—not silent scrambling.'
		}
	];

	const lookingForFit: { ask: string; answer: string }[] = [
		{
			ask: 'Exceptional attention to detail and ability to work under pressure.',
			answer:
				'EE labs, embedded bring-up, and client deadlines all reward zero-tolerance for sloppy work. I am calmest when the plan is explicit: reproduce, measure, fix, re-verify.'
		},
		{
			ask: 'Strong technical aptitude with model calibration frameworks and script-driven workflows.',
			answer:
				'I work primarily in Python for automation, tooling, and data-heavy workflows, with C/C++ comfort from embedded and systems-style projects. I treat scripting as the spine of repeatable desk work.'
		},
		{
			ask: 'Critical thinking to diagnose, escalate, and resolve complex issues.',
			answer:
				'My debugging style is hypothesis-driven: isolate variables, shrink the repro, and only then change state. That is the same instinct the posting describes for live issues on a trading floor.'
		},
		{
			ask: 'Excellent communication and collaboration skills across multiple teams.',
			answer:
				'From mentoring engineers at Protogenesis to integrating SaaS across teams at CoorsTek, I write and speak with enough context that the next person can act without an archaeology session.'
		},
		{
			ask: 'Familiarity with equity derivatives concepts (vol surfaces, dividends, borrow curves, forward pricing, yield curves).',
			answer:
				'I will be direct: my deepest classroom and project strength is engineering mathematics and systems—not years on a derivatives desk. I have studied core pricing and risk intuition (options, forwards, implied vol framing) and I am hungry to deepen market microstructure and surface dynamics with practitioners.'
		},
		{
			ask: 'Prior experience in a front-office or quant-adjacent support role within equities or derivatives.',
			answer:
				'I have not held a titled front-office support role at a bank. My adjacent experience is real-time software, data validation, and operational integrations where mistakes are expensive and latency matters—closest cultural cousin to the rhythm you are hiring for.'
		},
		{
			ask: 'Exposure to structured products, equity derivatives, or options market-making environments.',
			answer:
				'Limited professional exposure there today; strongest parallel is high-stakes environments (defense-adjacent software, industrial systems) where controls and precision dominate. I am explicit about the gap and motivated to close it fast.'
		}
	];

	const technicalFit: { title: string; bullets: string[] }[] = [
		{
			title: 'Mathematics',
			bullets: [
				'Linear algebra, optimization, differential equations, probability, and numerical methods through a rigorous EE program at Colorado School of Mines (B.E., completed in three years).',
				'Comfort translating engineered models into code and sanity checks—less “black box,” more “does this behave at the limit?”'
			]
		},
		{
			title: 'Quantitative finance',
			bullets: [
				'Coursework and self-study around option pricing intuition, simulation thinking, and how assumptions show up in outputs—ready to align vocabulary and depth with IED’s actual stack.',
				'I learn fastest shoulder-to-shoulder with people who live the market; I bring the engineering discipline to make that apprenticeship productive.'
			]
		},
		{
			title: 'Programming — Python',
			bullets: [
				'Python for test automation, data processing/visualization, tooling, and full-stack backends in side projects and client work.',
				'I am happy living in notebooks or repos when the goal is reproducible calibration and fast iteration, not one-off clicks.'
			]
		}
	];

	const testimonials = [
		{
			quote:
				'Live systems reward people who treat “probably fine” as a bug. I default to evidence: logs, plots, and a written theory of what changed.',
			attribution: '— How I troubleshoot'
		},
		{
			quote:
				'The best support engineers shorten the path from symptom to root cause. I want traders and strats to see me as someone who closes loops, not opens new mysteries.',
			attribution: '— How I collaborate'
		},
		{
			quote:
				'I like roles where the floor is high for correctness and the ceiling is high for learning. IED sits in that intersection.',
			attribution: '— Why this team'
		}
	];

	const rampItems: { n: string; title: string; body: string }[] = [
		{
			n: '01',
			title: 'Equity derivatives fluency',
			body: 'Deepening daily literacy on surfaces, borrow, corporate actions, and how they interact in production systems—not just textbook summaries.'
		},
		{
			n: '02',
			title: 'Market-hours tempo',
			body: 'Translating my real-time software instincts into the faster cadence of a trading desk: tighter handoffs, cleaner runbooks, ruthless prioritization.'
		},
		{
			n: '03',
			title: 'Your tools and conventions',
			body: 'I learn internal frameworks fastest by pairing early: shadowing, reading incident notes, and contributing small fixes that earn context.'
		}
	];

	const essays = [
		{ href: '/', label: 'Full portfolio & résumé context', sub: 'haydenconstas.com' },
		{
			href: 'https://www.linkedin.com/in/hayden-constas-39a129228/',
			label: 'LinkedIn',
			sub: 'Experience & projects'
		},
		{ href: '/#education', label: 'Education', sub: 'Colorado School of Mines — B.E. Electrical Engineering' }
	];

	let heroEl = $state<HTMLElement | undefined>(undefined);
	let reducedMotion = $state(false);
	let navIsAtTop = $state(true);
	let testimonialIndex = $state(0);
	let quoteBlur = $state(false);
	let openPhilosophy = $state<number | null>(null);

	/** Keeps autoplay and manual quote navigation in sync. */
	const quoteTick = { i: 0 };

	let testimonialTimer: ReturnType<typeof setInterval> | undefined;

	function splitWordsIntoSpans(root: HTMLElement) {
		root.querySelectorAll<HTMLElement>('[data-word-blur]').forEach((block) => {
			if (block.dataset.wordsSplit === '1') return;
			block.dataset.wordsSplit = '1';
			const text = block.textContent ?? '';
			block.textContent = '';
			text.split(/(\s+)/).forEach((part) => {
				if (!part) return;
				if (/^\s+$/.test(part)) {
					block.append(document.createTextNode(part));
					return;
				}
				const span = document.createElement('span');
				span.className = 'word';
				span.textContent = part;
				block.append(span);
			});
		});
	}

	function setNavState(scrollY: number) {
		navIsAtTop = scrollY < 100;
	}

	onMount(() => {
		const allCleanups: (() => void)[] = [];
		let cancelled = false;

		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const hero = heroEl;

		const pageRoot = document.querySelector<HTMLElement>('.ms-page');
		if (pageRoot) splitWordsIntoSpans(pageRoot);

		testimonialTimer = setInterval(() => {
			quoteBlur = true;
			setTimeout(() => {
				quoteTick.i = (quoteTick.i + 1) % testimonials.length;
				testimonialIndex = quoteTick.i;
				quoteBlur = false;
			}, 420);
		}, 6400);
		allCleanups.push(() => clearInterval(testimonialTimer));

		void (async () => {
			const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
				import('gsap'),
				import('gsap/ScrollTrigger'),
				import('lenis')
			]);

			gsap.registerPlugin(ScrollTrigger);

			const cleanups: (() => void)[] = [];
			let lenisInstance: InstanceType<typeof Lenis> | null = null;

			if (!reducedMotion) {
				lenisInstance = new Lenis({
					lerp: 0.085,
					smoothWheel: true
				});
				lenisInstance.on('scroll', ScrollTrigger.update);
				const rafLenis = (time: number) => {
					lenisInstance?.raf(time * 1000);
				};
				gsap.ticker.add(rafLenis);
				gsap.ticker.lagSmoothing(0);

				cleanups.push(() => {
					gsap.ticker.remove(rafLenis);
					lenisInstance?.destroy();
					lenisInstance = null;
				});
			}

			const scrollSource = () =>
				lenisInstance
					? lenisInstance.scroll
					: window.scrollY || document.documentElement.scrollTop;

			setNavState(scrollSource());
			const onScrollNav = () => setNavState(scrollSource());
			if (lenisInstance) lenisInstance.on('scroll', onScrollNav);
			else window.addEventListener('scroll', onScrollNav, { passive: true });
			cleanups.push(() => {
				window.removeEventListener('scroll', onScrollNav);
			});

			if (hero) {
				const layer01 = hero.querySelector<HTMLElement>('.hero-layer._01');
				const layer02 = hero.querySelector<HTMLElement>('.hero-layer._02');
				if (!reducedMotion && layer01 && layer02) {
					const endDistance = () => hero.offsetHeight * 0.56;
					gsap
						.timeline({
							scrollTrigger: {
								trigger: hero,
								start: 'top top',
								end: () => '+=' + endDistance(),
								scrub: true
							}
						})
						.fromTo(layer01, { yPercent: -20 }, { yPercent: 0, ease: 'none' }, 0)
						.fromTo(layer02, { yPercent: 0 }, { yPercent: 10, ease: 'none' }, 0);
				} else {
					if (layer01) gsap.set(layer01, { yPercent: 0 });
					if (layer02) gsap.set(layer02, { yPercent: 0 });
				}
			}

			const footerEl =
				pageRoot?.querySelector<HTMLElement>('.footer-parallax') ??
				document.querySelector<HTMLElement>('.footer-parallax');
			if (footerEl) {
				const fl1 = footerEl.querySelector<HTMLElement>('.footer-layer._01');
				const fl2 = footerEl.querySelector<HTMLElement>('.footer-layer._02');
				if (!reducedMotion && fl1 && fl2) {
					gsap
						.timeline({
							scrollTrigger: {
								trigger: footerEl,
								start: 'top bottom',
								end: 'bottom top',
								scrub: true
							}
						})
						.fromTo(fl1, { yPercent: -18 }, { yPercent: 8, ease: 'none' }, 0)
						.fromTo(fl2, { yPercent: -5 }, { yPercent: 14, ease: 'none' }, 0);
				} else {
					if (fl1) gsap.set(fl1, { yPercent: 0 });
					if (fl2) gsap.set(fl2, { yPercent: 0 });
				}
			}

			if (!reducedMotion) {
				gsap.fromTo(
					'.portfolio_bg',
					{ yPercent: 0 },
					{
						yPercent: 8,
						ease: 'none',
						scrollTrigger: {
							trigger: '.has-bg-parallax',
							start: 'top bottom',
							end: 'bottom top',
							scrub: true
						}
					}
				);
			}

			document.querySelectorAll<HTMLElement>('.word-blur-block').forEach((section) => {
				const words = section.querySelectorAll<HTMLElement>('.word');
				if (!words.length) return;
				if (reducedMotion) {
					gsap.set(words, { opacity: 1, filter: 'blur(0px)' });
					return;
				}
				gsap.fromTo(
					words,
					{ opacity: 0, filter: 'blur(1rem)' },
					{
						opacity: 1,
						filter: 'blur(0px)',
						stagger: 0.02,
						ease: 'power4.out',
						scrollTrigger: {
							trigger: section,
							start: 'top 85%',
							end: 'top 40%',
							scrub: true
						}
					}
				);
			});

			const refresh = () => ScrollTrigger.refresh();
			window.addEventListener('resize', refresh);
			cleanups.push(() => window.removeEventListener('resize', refresh));
			requestAnimationFrame(refresh);

			cleanups.push(() => ScrollTrigger.getAll().forEach((t) => t.kill()));

			if (cancelled) {
				cleanups.forEach((fn) => fn());
				return;
			}
			allCleanups.push(...cleanups);
		})();

		return () => {
			cancelled = true;
			allCleanups.forEach((fn) => fn());
		};
	});

	function prevQuote() {
		quoteTick.i = (quoteTick.i - 1 + testimonials.length) % testimonials.length;
		testimonialIndex = quoteTick.i;
	}

	function nextQuote() {
		quoteTick.i = (quoteTick.i + 1) % testimonials.length;
		testimonialIndex = quoteTick.i;
	}

	function toggleRamp(i: number) {
		openPhilosophy = openPhilosophy === i ? null : i;
	}
</script>

<svelte:head>
	<title>Hayden Constas | Morgan Stanley — IED Quantitative Trading Assistant</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="ms-page">
	<header class="site-header" class:is-at-top={navIsAtTop}>
		<div class="padding-global header-inner">
			<a class="logo" href="#overview">Hayden Constas</a>
			<nav class="header-nav" aria-label="Primary">
				<a href="#overview">Overview</a>
				<a href="#responsibilities">Responsibilities</a>
				<a href="#looking-for">What they want</a>
				<a href="#technical">Technical</a>
				<a href="#experience">Experience</a>
				<a class="nav-cta" href="#cta">Next step</a>
			</nav>
		</div>
	</header>

	<section bind:this={heroEl} class="hero" aria-label="Hero">
		<div class="hero-layers">
			<div class="hero-layer _01" aria-hidden="true">
				<img src={IMG.layer01} alt="" width="1920" height="1080" decoding="async" fetchpriority="high" />
			</div>
			<div class="hero-layer _02" aria-hidden="true">
				<img src={IMG.layer02} alt="" width="1920" height="1080" decoding="async" />
			</div>
			<div class="hero-layer _03" aria-hidden="true">
				<img src={IMG.layer03} alt="" width="1920" height="1080" decoding="async" />
			</div>
			<div class="hero-layers_overlay" aria-hidden="true"></div>
		</div>
		<div class="padding-global hero-heading">
			<p class="hero-pretitle">Prepared for Morgan Stanley</p>
			<h1>
				<span class="h1-line">Hayden Constas</span>
			</h1>
			<p class="hero-role">
				{posting.role} · {posting.division}
				<span class="hero-role-sep">·</span>
				{posting.office}
			</p>
			<p class="hero-tagline">Precision, live systems, and a disciplined path from signal to root cause.</p>
		</div>
	</section>

	<section id="overview" class="section about">
		<div class="padding-global">
			<p class="eyebrow">Overview</p>
			<div class="word-blur-block about-copy">
				<p data-word-blur>
					I am a Colorado School of Mines electrical engineering graduate (B.E., finished in three years) who
					spends most of my professional energy in software: integrations, automation, and data-intensive
					workflows. This page is a concise map from Morgan Stanley’s posting for a Quantitative Trading Assistant
					in IED to the problems I have actually solved.
				</p>
				<p data-word-blur>
					I am candid about gaps—especially sell-side derivatives seat time—because the right team match is
					built on clarity. What I bring on day one is engineering rigor, Python-heavy tooling comfort, and a
					habit of staying correct under pressure while learning fast beside practitioners.
				</p>
			</div>
		</div>
	</section>

	<section id="responsibilities" class="section portfolio has-bg-parallax">
		<div class="portfolio_bg_wrap" aria-hidden="true">
			<img class="portfolio_bg" src={IMG.portfolioBg} alt="" width="1920" height="1080" />
		</div>
		<div class="padding-global relative z-1">
			<p class="eyebrow">Key responsibilities</p>
			<p class="section-lead word-blur-block">
				<span data-word-blur
					>Each item below quotes the role’s core ownership. Underneath is how my trajectory transfers—not a
					claim that I have already done the identical job, but a straight answer to “why this is a fit.”</span
				>
			</p>
			<ul class="fit-list">
				{#each responsibilityFit as row, i}
					<li class="fit-item">
						<span class="fit-index">{String(i + 1).padStart(2, '0')}</span>
						<div class="fit-body">
							<p class="fit-ask"><span class="fit-kicker">Posting</span>{row.ask}</p>
							<div class="fit-answer word-blur-block">
								<p data-word-blur>{row.answer}</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="looking-for" class="section looking-for">
		<div class="padding-global">
			<p class="eyebrow">What they’re looking for</p>
			<p class="section-lead word-blur-block">
				<span data-word-blur
					>The posting’s softer requirements matter as much as the bullet points. Here is my direct read on each
					line—no inflation.</span
				>
			</p>
			<ul class="fit-list">
				{#each lookingForFit as row, i}
					<li class="fit-item">
						<span class="fit-index">{String(i + 1).padStart(2, '0')}</span>
						<div class="fit-body">
							<p class="fit-ask"><span class="fit-kicker">Posting</span>{row.ask}</p>
							<div class="fit-answer word-blur-block">
								<p data-word-blur>{row.answer}</p>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="technical" class="section technical">
		<div class="padding-global">
			<p class="eyebrow">Preferred technical background</p>
			<p class="section-lead word-blur-block">
				<span data-word-blur
					>Grouped the way the job lists it: mathematics, quantitative finance intuition, and Python. I keep
					each section grounded in what I can demonstrate today.</span
				>
			</p>
			<div class="tech-columns">
				{#each technicalFit as block}
					<div class="tech-block">
						<h3 class="tech-title">{block.title}</h3>
						<ul class="tech-bullets">
							{#each block.bullets as line}
								<li>{line}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="section testimonials">
		<div class="padding-global">
			<p class="eyebrow">Operating principles</p>
			<div class="quote-shell">
				<blockquote class="quote-block" class:is-blurring={quoteBlur}>
					<p>{testimonials[testimonialIndex].quote}</p>
					<footer>{testimonials[testimonialIndex].attribution}</footer>
				</blockquote>
				<div class="quote-controls">
					<button type="button" class="quote-btn" onclick={prevQuote} aria-label="Previous quote">←</button>
					<button type="button" class="quote-btn" onclick={nextQuote} aria-label="Next quote">→</button>
				</div>
			</div>
		</div>
	</section>

	<section id="experience" class="section team">
		<div class="padding-global team-grid">
			<div class="team-visual">
				<img src={IMG.layer02} alt="" width="800" height="1000" />
			</div>
			<div class="team-copy word-blur-block">
				<p class="eyebrow">Evidence from my path</p>
				<h2 class="team-name">Hayden Constas</h2>
				<p data-word-blur>
					<strong>CoorsTek — Systems Analyst Integrations Specialist.</strong>
					Tied together SaaS and in-house systems; built automation around internal data; debugged production-style workflows when vendors and operators saw different truth.
				</p>
				<p data-word-blur>
					<strong>CACI — Software Development Intern (SAFFIRE).</strong>
					Satellite GIS insights for DoD partners: collaborative software delivery where testing, traceability, and teamwork are baseline expectations.
				</p>
				<p data-word-blur>
					<strong>Protogenesis — Co-Founder.</strong>
					Client MVPs with fuzzy requirements turned into shippable systems; mentored engineers; lived in full-stack JavaScript/TypeScript and pragmatic Python where it sped delivery.
				</p>
				<p data-word-blur>
					<strong>Upstream Vee — Co-Proprietor.</strong>
					Pipeline monitoring product work with Chevron-facing pressure: design iteration, bench validation, and translating field constraints into engineering decisions.
				</p>
			</div>
		</div>
	</section>

	<section id="ramp" class="section philosophies">
		<div class="padding-global">
			<p class="eyebrow">What I would ramp first</p>
			<ul class="philosophy-list">
				{#each rampItems as ph, i}
					<li class="philosophy-item" class:is-open={openPhilosophy === i}>
						<button
							type="button"
							class="philosophy-trigger"
							onclick={() => toggleRamp(i)}
							aria-expanded={openPhilosophy === i}
						>
							<span class="ph-n">{ph.n}</span>
							<span class="ph-title">{ph.title}</span>
							<span class="ph-icon" aria-hidden="true">{openPhilosophy === i ? '−' : '+'}</span>
						</button>
						<div class="philosophy-panel">
							<p>{ph.body}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="links" class="section essays">
		<div class="padding-global">
			<p class="eyebrow">Links</p>
			<ul class="essay-list">
				{#each essays as e}
					<li>
						<span class="essay-date">{e.sub}</span>
						<a class="essay-title" href={e.href}>{e.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<footer id="cta" class="footer-parallax" aria-label="Closing">
		<div class="footer-parallax-layers" aria-hidden="true">
			<div class="footer-layer _01">
				<img src={IMG.footer01} alt="" width="1920" height="1080" decoding="async" />
			</div>
			<div class="footer-layer _02">
				<img src={IMG.footer02} alt="" width="1920" height="1080" decoding="async" />
			</div>
			<div class="footer-layer _03">
				<img src={IMG.footer03} alt="" width="1920" height="1080" decoding="async" />
			</div>
			<div class="footer-parallax_topfade"></div>
		</div>
		<div class="footer-parallax_content padding-global">
			<h2 class="footer-parallax_heading">Say hello if you’ve made it this far</h2>
			<div class="footer-parallax_actions">
				{#if SOCIAL.x}
					<a class="footer-social-btn" href={SOCIAL.x} target="_blank" rel="noopener noreferrer">
						<svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill="currentColor"
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
						<span>Hayden on X</span>
					</a>
				{:else}
					<a class="footer-social-btn" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
						<svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill="currentColor"
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
						<span>Hayden on GitHub</span>
					</a>
				{/if}
				<a
					class="footer-social-btn"
					href={SOCIAL.linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill="currentColor"
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					<span>Hayden on LinkedIn</span>
				</a>
			</div>
			<p class="footer-parallax_sub">
				<a href="/">← Full portfolio &amp; résumé</a>
			</p>
		</div>
	</footer>
</div>

<style>
	:global(html.lenis, html.lenis body) {
		height: auto;
	}

	.ms-page {
		--page-bg: #f6f5ff;
		--brand: #2448bf;
		--body: rgba(36, 72, 191, 0.7);
		--hero-text: #f6f5ff;
		font-family: Inter, system-ui, sans-serif;
		background: var(--page-bg);
		color: var(--body);
		min-height: 100vh;
	}

	.padding-global {
		width: 100%;
		max-width: 72rem;
		margin-inline: auto;
		padding-inline: clamp(1.25rem, 4vw, 3rem);
	}

	.site-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		padding-block: 1rem;
		transition:
			background 0.45s ease,
			color 0.45s ease,
			box-shadow 0.45s ease;
	}

	.site-header.is-at-top {
		background: transparent;
		color: var(--hero-text);
		box-shadow: none;
	}

	.site-header:not(.is-at-top) {
		background: var(--page-bg);
		color: var(--brand);
		box-shadow: 0 1px 0 rgba(36, 72, 191, 0.08);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 90rem;
	}

	.logo {
		font-family: 'Cormorant Garamond', serif;
		font-weight: 600;
		font-size: 1.25rem;
		letter-spacing: 0.02em;
		text-decoration: none;
		color: inherit;
	}

	.header-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
		align-items: center;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.header-nav a {
		color: inherit;
		text-decoration: none;
		opacity: 0.92;
	}

	.header-nav a:hover {
		opacity: 1;
	}

	.site-header:not(.is-at-top) .nav-cta {
		background: var(--brand);
		color: var(--page-bg);
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		opacity: 1;
	}

	.site-header.is-at-top .nav-cta {
		border: 1px solid rgba(246, 245, 255, 0.45);
		padding: 0.4rem 0.9rem;
		border-radius: 999px;
		opacity: 1;
	}

	.hero {
		position: relative;
		min-height: 100vh;
		min-height: 100svh;
		overflow: hidden;
	}

	.hero-layers {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.hero-layer {
		position: absolute;
		inset: 0;
		pointer-events: none;
		will-change: transform;
	}

	.hero-layer img {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 100%;
		min-width: 100%;
		height: 120%;
		object-fit: cover;
		transform: translateX(-50%);
	}

	.hero-layer._01 {
		z-index: 1;
	}
	.hero-layer._02 {
		z-index: 2;
	}
	.hero-layer._03 {
		z-index: 3;
	}

	.hero-layers_overlay {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: min(45vh, 28rem);
		z-index: 4;
		background: linear-gradient(to top, #f6f5ff, transparent);
		pointer-events: none;
	}

	.hero-heading {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		z-index: 5;
		padding-top: clamp(5.5rem, 12vw, 7rem);
		pointer-events: none;
		max-width: 90rem;
	}

	.hero-pretitle {
		margin: 0 0 0.35rem;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: rgba(246, 245, 255, 0.88);
		text-shadow: 0 1px 1.5rem rgba(17, 28, 78, 0.35);
	}

	.hero-heading h1 {
		margin: 0;
		font-family: 'Cormorant Garamond', serif;
		font-weight: 500;
		font-size: clamp(2.5rem, 7vw, 4rem);
		line-height: 1.02;
		color: var(--hero-text);
		max-width: 20ch;
		pointer-events: none;
		text-shadow: 0 1px 2rem rgba(17, 28, 78, 0.35);
	}

	.hero-role {
		margin: 0.75rem 0 0;
		max-width: 26rem;
		font-size: 0.95rem;
		font-weight: 500;
		line-height: 1.45;
		color: rgba(246, 245, 255, 0.95);
		text-shadow: 0 1px 1.25rem rgba(17, 28, 78, 0.35);
	}

	.hero-role-sep {
		opacity: 0.5;
		padding-inline: 0.2em;
	}

	.hero-tagline {
		margin: 1rem 0 0;
		max-width: 22rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(246, 245, 255, 0.82);
		text-shadow: 0 1px 1rem rgba(17, 28, 78, 0.3);
	}

	.h1-line {
		display: block;
	}

	.section {
		position: relative;
		padding-block: clamp(3.5rem, 8vw, 6rem);
	}

	.eyebrow {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--brand);
		opacity: 0.85;
		margin: 0 0 1rem;
	}

	.about-copy {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 42rem;
	}

	.about-copy p,
	.section-lead {
		font-size: 1.125rem;
		line-height: 1.65;
		margin: 0;
	}

	:global(.word-blur-block .word) {
		display: inline-block;
		will-change: filter, opacity;
	}

	.has-bg-parallax {
		overflow: hidden;
	}

	.has-bg-parallax .relative.z-1 {
		position: relative;
		z-index: 1;
	}

	.fit-list {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.fit-item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem 1.25rem;
		align-items: start;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(36, 72, 191, 0.12);
	}

	.fit-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.fit-index {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--brand);
		opacity: 0.35;
		line-height: 1;
		padding-top: 0.15rem;
	}

	.fit-body {
		min-width: 0;
	}

	.fit-kicker {
		display: block;
		font-family: Inter, system-ui, sans-serif;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--brand);
		opacity: 0.65;
		margin-bottom: 0.35rem;
	}

	.fit-ask {
		margin: 0 0 0.75rem;
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.45;
		color: var(--brand);
	}

	.fit-answer {
		margin: 0;
	}

	.fit-answer p {
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.65;
	}

	.tech-columns {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-top: 2rem;
	}

	@media (min-width: 900px) {
		.tech-columns {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.75rem;
		}
	}

	.tech-block {
		padding: 1.35rem 1.25rem;
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.65);
		border: 1px solid rgba(36, 72, 191, 0.1);
		box-shadow: 0 8px 28px rgba(36, 72, 191, 0.05);
	}

	.tech-title {
		margin: 0 0 1rem;
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--brand);
	}

	.tech-bullets {
		margin: 0;
		padding-left: 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.tech-bullets li {
		font-size: 0.98rem;
		line-height: 1.6;
	}

	.portfolio_bg_wrap {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	.portfolio_bg {
		position: absolute;
		left: 50%;
		top: -8%;
		width: 115%;
		max-width: none;
		height: auto;
		min-height: 118%;
		object-fit: cover;
		transform: translateX(-50%);
		opacity: 0.22;
		filter: saturate(1.05);
		will-change: transform;
	}

	.section-lead {
		max-width: 40rem;
		margin-bottom: 2.5rem;
	}

	.quote-shell {
		max-width: 40rem;
		margin-top: 2rem;
	}

	.quote-block {
		margin: 0;
		transition:
			opacity 0.45s ease,
			filter 0.45s ease;
	}

	.quote-block.is-blurring {
		opacity: 0.2;
		filter: blur(0.5rem);
	}

	.quote-block p {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(1.5rem, 3vw, 2rem);
		line-height: 1.35;
		color: var(--brand);
		margin: 0 0 1rem;
	}

	.quote-block footer {
		font-size: 0.95rem;
		color: var(--body);
	}

	.quote-controls {
		display: flex;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.quote-btn {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 999px;
		border: 1px solid rgba(36, 72, 191, 0.2);
		background: rgba(246, 245, 255, 0.9);
		color: var(--brand);
		cursor: pointer;
		font-size: 1rem;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
	}

	.quote-btn:hover {
		background: #fff;
		transform: translateY(-1px);
	}

	.team-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: center;
	}

	@media (min-width: 768px) {
		.team-grid {
			grid-template-columns: 1fr 1.1fr;
			gap: 3rem;
		}
	}

	.team-visual {
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid rgba(36, 72, 191, 0.1);
		box-shadow: 0 24px 60px rgba(36, 72, 191, 0.12);
	}

	.team-visual img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.team-name {
		font-family: 'Cormorant Garamond', serif;
		font-weight: 500;
		font-size: clamp(2rem, 4vw, 2.75rem);
		color: var(--brand);
		margin: 0.25rem 0 1rem;
	}

	.team-copy p {
		font-size: 1.05rem;
		line-height: 1.65;
		margin: 0 0 1rem;
	}

	.philosophy-list {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		max-width: 48rem;
		border-top: 1px solid rgba(36, 72, 191, 0.12);
	}

	.philosophy-item {
		border-bottom: 1px solid rgba(36, 72, 191, 0.12);
	}

	.philosophy-trigger {
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1rem;
		align-items: center;
		padding: 1.25rem 0;
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		text-align: left;
		color: var(--brand);
		transition: transform 0.3s ease;
	}

	.philosophy-trigger:hover {
		transform: translateX(4px);
	}

	.ph-n {
		font-size: 0.8rem;
		font-weight: 600;
		opacity: 0.45;
	}

	.ph-title {
		font-size: 1.15rem;
		font-weight: 600;
	}

	.ph-icon {
		font-size: 1.25rem;
		opacity: 0.55;
	}

	.philosophy-panel {
		clip-path: inset(0 0 100% 0);
		transition: clip-path 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.philosophy-item.is-open .philosophy-panel {
		clip-path: inset(0 0 0 0);
	}

	.philosophy-panel p {
		margin: 0;
		padding-bottom: 1.25rem;
		max-width: 42rem;
		line-height: 1.65;
		font-size: 1rem;
	}

	.essay-list {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		max-width: 36rem;
	}

	.essay-list li {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(36, 72, 191, 0.1);
		transition: opacity 0.25s ease;
	}

	.essay-list li:hover {
		opacity: 0.85;
	}

	.essay-date {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--brand);
		opacity: 0.55;
	}

	.essay-title {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--brand);
		text-decoration: none;
	}

	.essay-title:hover {
		text-decoration: underline;
	}

	.footer-parallax {
		position: relative;
		min-height: min(100vh, 52rem);
		min-height: min(100svh, 52rem);
		margin-top: 0;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer-parallax-layers {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.footer-layer {
		position: absolute;
		inset: 0;
		will-change: transform;
	}

	.footer-layer img {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 100%;
		min-width: 100%;
		height: 118%;
		object-fit: cover;
		transform: translateX(-50%);
	}

	.footer-layer._01 {
		z-index: 1;
	}
	.footer-layer._02 {
		z-index: 2;
	}
	.footer-layer._03 {
		z-index: 3;
	}

	.footer-parallax_topfade {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: min(42vh, 24rem);
		z-index: 4;
		background: linear-gradient(to bottom, #f6f5ff 0%, rgba(246, 245, 255, 0.65) 35%, transparent 100%);
		pointer-events: none;
	}

	.footer-parallax_content {
		position: relative;
		z-index: 5;
		width: 100%;
		max-width: 90rem;
		margin-inline: auto;
		padding-block: clamp(4rem, 12vw, 7rem);
		text-align: center;
		pointer-events: none;
	}

	.footer-parallax_content a {
		pointer-events: auto;
	}

	.footer-parallax_heading {
		margin: 0 auto;
		max-width: 20ch;
		font-family: 'Cormorant Garamond', serif;
		font-weight: 500;
		font-size: clamp(2rem, 5vw, 3.35rem);
		line-height: 1.12;
		color: #fff;
		text-shadow:
			0 1px 2rem rgba(17, 28, 78, 0.45),
			0 0 1px rgba(0, 0, 0, 0.2);
	}

	.footer-parallax_actions {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.footer-social-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.75rem 1.35rem;
		border-radius: 0.5rem;
		background: #fff;
		color: var(--brand);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		box-shadow: 0 12px 40px rgba(36, 72, 191, 0.18);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.footer-social-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 16px 48px rgba(36, 72, 191, 0.22);
	}

	.footer-social-icon {
		width: 1.15rem;
		height: 1.15rem;
		flex-shrink: 0;
	}

	.footer-parallax_sub {
		margin: 2.5rem 0 0;
		font-size: 0.95rem;
	}

	.footer-parallax_sub a {
		color: rgba(255, 255, 255, 0.92);
		font-weight: 600;
		text-decoration: none;
		text-shadow: 0 1px 1rem rgba(17, 28, 78, 0.35);
	}

	.footer-parallax_sub a:hover {
		text-decoration: underline;
	}
</style>
