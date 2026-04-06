<script lang="ts">
	import { onMount } from 'svelte';
	import 'lenis/dist/lenis.css';
	import YieldCurvesChart from './YieldCurvesChart.svelte';
	import { beforeNavigate } from '$app/navigation';

	const IMG = {
		layer01: '/morgan_stanley/paralax_1_1.avif',
		layer02: '/morgan_stanley/paralax_1_3_ms.avif',
		layer03: '/morgan_stanley/paralax_1_2.avif',
		portfolioBg: '/morgan_stanley/branch_2.avif',
		/** Footer parallax: base → city → foreground (trees / peaks). */
		footer01: '/morgan_stanley/paralax_2_1.avif',
		footer02: '/morgan_stanley/paralax_2_3.avif',
		footer03: '/morgan_stanley/paralax_2_2.avif'
	} as const;

	const SOCIAL = {
		linkedin: 'https://www.linkedin.com/in/hayden-constas-39a129228/'
	} as const;

	const CONTACT = {
		email: 'hjconstas@gmail.com',
		phoneDisplay: '(708)-830-0299',
		/** E.164 for tel: links */
		phoneTel: '+17088300299'
	} as const;

	/** Posting: PWM — Client Service Associate — Salt Lake City (professional). */
	const posting = {
		role: 'Private Wealth Management Client Service Associate',
		division: 'Private Wealth Management (PWM)',
		office: 'Salt Lake City, UT'
	} as const;

	type ReqMedia =
		| { src: string; alt: string; fit?: 'contain'; kind?: 'image' | 'video' }
		| { kind: 'yieldCurves'; alt: string };

	type ReqCard = {
		eyebrow: string;
		title: string;
		/** Exact-ish wording from the posting, in quotes. */
		quote: string;
		copy: string;
		media: ReqMedia;
	};

	/** One card per posting requirement — knowledge, skills, and how this role shows up day to day. */
	const requirementCards: ReqCard[] = [
		{
			eyebrow: 'Role 01',
			title: 'Client-first relationships',
			quote:
				'"Through regular interactions with clients, individuals in this role build trusted relationships. Leading with a client first mindset."',
			copy:
				'I learned to build strong client relationships by starting an engineering firm where we prototyped people’s ideas. That meant explaining complex concepts to non-technical clients, listening first, and making sure their vision was clearly understood. The picture was from a prototype in progress.',
			media: {
				src: '/images/smiling_with_board.webp',
				alt: 'Collaboration and clear client-facing communication'
			}
		},
		{
			eyebrow: 'Role 02',
			title: 'Detail, docs, and prioritization',
			quote:
				'"Detail orientated with superior organizational skills and ability to prioritize."',
			copy:
				'Engineering habits carry over big time: checklists, version control, and a low tolerance for ambiguous handoffs. When multiple requests compete for time, I rank by impact and deadlines.',
			media: { src: '/images/circuits.webp', alt: 'Precision and organized execution' }
		},
		{
			eyebrow: 'Role 03',
			title: 'Financial products literacy',
			quote:
				'"Knowledge of financial services products, including but not limited to equities, bonds, options, mutual funds, annuities, insurance, and managed accounts."',
			copy:
				"I'm not coming from a brokerage path but I bring strong quantitative instincts, learn quickly, and respect compliance. I love to learn and have dived into fields from biology to physics. I'm excited to do it again.",
			media: {
				kind: 'yieldCurves',
				alt: 'Illustrative yield, borrow, and dividend curves across tenors — quantitative lens on markets'
			}
		},
		{
			eyebrow: 'Role 04',
			title: 'Addepar & platform learning',
			quote: '"Experience with or knowledge of Addepar."',
			copy:
				'I have not used Addepar yet, but I am extremely familiar with the SaaS world and will learn fast. I helped build an internal chatbot on data at CoorsTek (Called Clay), which is using similar tech under the hood.',
			media: {
				src: '/images/red_clay_branded2.png',
				alt: 'Learning new tools through repetition and clear workflows',
			}
		},
		{
			eyebrow: 'Role 05',
			title: 'Microsoft Office & clerical work at scale',
			quote:
				'"Advanced Microsoft Office skills (Word, Excel, Outlook and PowerPoint)." Enter profile information or pre-fill account documentation on client accounts and/or documents in a clerical capacity.',
			copy:
				'I live in spreadsheets for analysis, Word and PowerPoint for crisp narratives. I care about the small things which is why I build an automatic documentation tool for software teams shown in the video.',
			media: {
				src: '/video/code_changing.mp4',
				alt: 'Learning new tools through repetition and clear workflows',
				kind: 'video'
			}
		},
		{
			eyebrow: 'Role 06',
			title: 'Writing, phones, and calendar logistics',
			quote:
				'"Exceptional writing, interpersonal and client service skills." Answering inbound phone calls or making outbound calls with updates on service requests. Managing the calendar including coordinating meetings or events with logistics.',
			copy:
				"It's not my first rodeo in 'sales'. I write for busy readers with short context and clear next steps. Here I am helping run an entrepreneurship workshop.",
			media: {
				src: '/images/me_crop.gif',
				alt: 'Coordinated execution behind the scenes'
			}
		},
		{
			eyebrow: 'Role 07',
			title: 'Fast pace, adaptability, teamwork',
			quote:
				'"Ability to work in a fast-paced, evolving environment." "Adaptable and ability to multitask." "Team player with the ability to collaborate with others."',
			copy:
				"I've learned to adapt quickly, juggle priorities, and make things smoother for the team instead of adding chaos. Here's my team working late at the engineering company.",
			media: {
				src: '/images/pg_working.jpg',
				alt: 'Team working late at the engineering company'
			}
		}
	];

	const technicalCards: ReqCard[] = [
		{
			eyebrow: 'Preferred · Education',
			title: 'College degree',
			quote: '"High School Diploma/Equivalency" · "College degree preferred."',
			copy:
				'I hold a B.E. in Electrical Engineering from Colorado School of Mines (completed in three years). That is more than the minimum—and it is training in disciplined thinking, not entitlement. I am ready to pair it with PWM-specific onboarding and licensing steps the firm requires.',
			media: { src: '/images/graduation_pic.webp', alt: 'Colorado School of Mines — B.E. Electrical Engineering' }
		},
		{
			eyebrow: 'Preferred · Experience',
			title: 'Industry experience',
			quote: '"Two or more years of industry experience preferred."',
			copy:
				'My professional experience has been in engineering-heavy software, industrial R&D integrations, and startups—not yet on a PWM service desk. The through-line is regulated-adjacent work, stakeholder communication, and getting the small details right the first time. I am motivated to translate that into PWM operations quickly.',
			media: {
				src: '/images/smiling_with_board.webp',
				alt: 'Professional experience in technical and client-facing roles'
			}
		},
		{
			eyebrow: 'Knowledge · Digital',
			title: 'Digital tools & education',
			quote:
				'"Educating or enrolling clients in digital tools (e.g. MSOnline, eSign, eAuthorization)."',
			copy:
				'I enjoy turning “click here, then here” into confidence: short walkthroughs, screenshots when appropriate, and a confirmation that the client completed the right step. My background in software makes me patient with UX friction and good at translating jargon into plain language.',
			media: {
				src: '/images/Ngspice_logo.webp',
				alt: 'Translating technical steps for non-specialists',
				fit: 'contain'
			}
		}
	];

	const testimonials = [
		{
			quote:
				'Wealth clients remember how you made them feel on the hard days: heard, informed, and taken seriously. I want to be that steady voice on the line and in the inbox.',
			attribution: '— Service mindset'
		},
		{
			quote:
				'The best associates make advisors faster: prep done, follow-ups logged, paperwork clean, and surprises flagged early.',
			attribution: '— How I support a team'
		},
		{
			quote:
				'PWM is where technical fluency meets hospitality. That intersection is where I want to grow.',
			attribution: '— Why PWM'
		}
	];

	const rampItems: { n: string; title: string; body: string }[] = [
		{
			n: '01',
			title: 'PWM product & policy fluency',
			body: 'Building day-over-day comfort with accounts, money movement norms, client disclosures, and how the Salt Lake office runs service—so I can answer confidently within guardrails.'
		},
		{
			n: '02',
			title: 'Addepar and the digital stack',
			body: 'Reps on the workflows advisors actually use: account maintenance, document tracking, and the client digital touchpoints named in the posting.'
		},
		{
			n: '03',
			title: 'Rhythm with your FA / PWA teams',
			body: 'Early shadowing to learn each team’s client service model—calendar norms, escalation paths, and what “great” looks like for your book of business.'
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
	<title>Hayden Constas | Morgan Stanley — PWM Client Service Associate</title>
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
			<a class="logo" href="https://haydenconstas.com">Hayden Constas</a>
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
			<p class="hero-pretitle">Application For Morgan Stanley</p>
			<h1>
				<span class="h1-line">Hayden Constas</span>
			</h1>
			<p class="hero-role">
				{posting.role} · {posting.division}
				<span class="hero-role-sep">·</span>
				{posting.office}
			</p>
		</div>
	</section>

	<section id="overview" class="section about">
		<div class="padding-global">
			<p class="eyebrow">Overview</p>
			<div class="word-blur-block about-copy">
				<p data-word-blur>
					Thank you for taking the time to review my application. I’m Hayden, an electrical engineer who has spent the last few years building software, wrangling data, and working alongside clients.
				</p>
				<p data-word-blur>
					Private Wealth Management is a new vertical for my résumé, but I'm used to exceptional service, competing priorities, and learning tools fast. I built this page to show how my experience fits the role. I would love the chance to talk in an interview.
				</p>
			</div>
		</div>
	</section>
	<section class="job-desc-banner" aria-label="Official Morgan Stanley job posting text">
		<div class="padding-global">
			<details class="job-desc-details">
				<summary class="job-desc-summary">
					<span class="job-desc-summary-text">
						<span class="eyebrow job-desc-eyebrow">Job description</span>
						<span class="job-desc-headline">Private Wealth Management — Client Service Associate</span>
						<span class="job-desc-meta-line">Salt Lake City, Utah, United States of America</span>
					</span>
					<span class="job-desc-chevron" aria-hidden="true">▾</span>
				</summary>
				<div class="job-desc-panel">
		

					<h2 class="job-desc-h">Position summary</h2>
					<p class="job-desc-p">
						Client Service Associates provide exceptional service to our clients and support Financial Advisor(s)
						(FAs) / Private Wealth Advisor(s) (PWAs) / teams on a daily basis. Through regular interactions with
						clients, individuals in this role build trusted relationships. Leading with a client first mindset, a
						successful candidate for this role will have strong interpersonal skills and will be able to assist
						clients with their everyday needs.
					</p>

					<h2 class="job-desc-h">Client support</h2>
					<ul class="job-desc-list">
						<li>
							Service coverage for a FA/PWA/team: support cultivating and enhancing new and existing client
							relationships.
						</li>
						<li>Execute money movement transactions at the request of the client and/or FA/PWA/team.</li>
						<li>
							Answer general non-investment related questions concerning client accounts, including relaying stock
							positions and providing account balances (e.g., funds due and margin debit).
						</li>
						<li>
							Enter profile information or pre-fill account documentation on client accounts and/or documents in
							a clerical capacity at the direction of the client and/or FA/PWA/team.
						</li>
						<li>
							Educate or enroll clients in digital tools (e.g. MSOnline, eSign, eAuthorization).
						</li>
						<li>
							Onboard and maintain client accounts, including collecting client information and required
							documentation in a clerical capacity at the direction of the client and/or FA/PWA/team.
						</li>
						<li>
							Provide existing clients with details around their account information (e.g., investment objectives,
							risk tolerance).
						</li>
						<li>
							Accept or enter unsolicited orders and/or enter solicited orders in a clerical capacity at the
							direction of the FA/PWA/team.
						</li>
						<li>Support marketing strategy (e.g., website maintenance).</li>
						<li>Assist teams in delivering against their business plan and client service model.</li>
						<li>Stay current on policies, procedures, and new platforms.</li>
						<li>
							Participate in firm initiatives (e.g., training or education programs), special projects, and other
							duties directed by local management.
						</li>
					</ul>

					<h2 class="job-desc-h">Administrative support</h2>
					<ul class="job-desc-list">
						<li>
							Answer inbound phone calls or make outbound calls with updates on service requests; schedule follow-up
							calls with FAs / PWAs / teams as needed.
						</li>
						<li>
							Manage the calendar: coordinate meetings or events with logistics such as material prep (e.g.,
							maintaining agendas, sending calendar invites with Zoom credentials).
						</li>
						<li>Maintain travel itineraries; prepare expense reports and manage reimbursement.</li>
						<li>General in-office support: copying, filing, scanning documentation.</li>
						<li>Prepare and submit expense reports for processing at the direction of the FA/PWA.</li>
					</ul>

					<h2 class="job-desc-h">Education, experience, knowledge, and skills</h2>
					<ul class="job-desc-list">
						<li>
							<strong>Education and experience:</strong> High school diploma/equivalency required; college degree
							preferred; two or more years of industry experience preferred.
						</li>
						<li>
							Knowledge of financial services products, including but not limited to equities, bonds, options,
							mutual funds, annuities, insurance, and managed accounts.
						</li>
						<li>Experience with or knowledge of Addepar.</li>
						<li>Detail orientated with superior organizational skills and ability to prioritize.</li>
						<li>Advanced Microsoft Office skills (Word, Excel, Outlook and PowerPoint).</li>
						<li>Exceptional writing, interpersonal and client service skills.</li>
						<li>Strong time management skills.</li>
						<li>Team player with the ability to collaborate with others.</li>
						<li>Ability to work in a fast-paced, evolving environment.</li>
						<li>Adaptable and ability to multitask.</li>
						<li>Goal oriented, self-motivated and results driven.</li>
					</ul>

					<h2 class="job-desc-h">What you can expect from Morgan Stanley</h2>
					<p class="job-desc-p job-desc-p--last">
						At Morgan Stanley, we raise, manage and allocate capital for our clients – helping them reach their
						goals. Our values – putting clients first, doing the right thing, leading with exceptional ideas,
						committing to diversity and inclusion, and giving back – guide how we support clients, communities, and
						more than 80,000 employees worldwide. The Firm is committed to equal employment opportunity and building
						a diverse workforce.
					</p>
				</div>
			</details>
		</div>
	</section>

	<section id="requirements" class="section portfolio has-bg-parallax looking-for">

		<div class="padding-global relative z-1">
			<p class="eyebrow">Why Me</p>
			<p class="section-lead word-blur-block">
				<span data-word-blur
					>The below section is to show off why I'm a great fit for the role.</span
				>
			</p>
			<div class="ms-signal-grid">
				{#each requirementCards as card, i}
					<article class="ms-signal-card" class:ms-signal-card--reverse={i % 2 === 1}>
						<div class="ms-signal-copy">
							<p class="ms-signal-eyebrow">{card.eyebrow}</p>
							<h2 class="ms-signal-title">{card.title}</h2>
							<blockquote class="ms-signal-quote">{card.quote}</blockquote>
							<p class="ms-signal-body">{card.copy}</p>
						</div>
						<div
							class="ms-signal-media"
							class:ms-signal-media--contain={'fit' in card.media && card.media.fit === 'contain'}
						>
							{#if card.media.kind === 'video'}
								<video
									src={card.media.src}
									class="ms-signal-media-asset"
									aria-label={card.media.alt}
									muted
									loop
									playsinline
									autoplay
									preload="metadata"
									width="960"
									height="720"
								></video>
							{:else if card.media.kind === 'yieldCurves'}
								<YieldCurvesChart alt={card.media.alt} />
							{:else}
								<img
									class="ms-signal-media-asset"
									src={card.media.src}
									alt={card.media.alt}
									loading="lazy"
									decoding="async"
									width="960"
									height="720"
								/>
							{/if}
						</div>
					</article>
				{/each}
			</div>
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
			<h2 class="footer-parallax_heading">Let's talk if you’ve made it this far</h2>
			<div class="footer-parallax_actions">
				<a
					class="footer-social-btn footer-contact-btn"
					href="mailto:{CONTACT.email}"
				>
					<svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill="currentColor"
							d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
						/>
					</svg>
					<span>{CONTACT.email}</span>
				</a>
				<a class="footer-social-btn footer-contact-btn" href="tel:{CONTACT.phoneTel}">
					<svg class="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill="currentColor"
							d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.25 1.12.38 2.33.58 3.57.58.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.58 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
						/>
					</svg>
					<span>{CONTACT.phoneDisplay}</span>
				</a>
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
		--page-bg: #ffffff;
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
		opacity: 0;
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

	.job-desc-banner {
		position: relative;
		z-index: 15;
		padding: calc(4.5rem + 0.35rem) 0 1rem;
		background: var(--page-bg);
		border-bottom: 1px solid rgba(36, 72, 191, 0.1);
	}

	.job-desc-details {
		border-radius: 1rem;
		border: 1px solid rgba(36, 72, 191, 0.14);
		background: linear-gradient(
			165deg,
			rgba(255, 255, 255, 0.97) 0%,
			rgba(255, 255, 255, 0.94) 100%
		);
		box-shadow: 0 12px 40px rgba(36, 72, 191, 0.08);
		overflow: hidden;
	}

	.job-desc-summary {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem 1.25rem;
		align-items: start;
		padding: 1.15rem 1.25rem;
		cursor: pointer;
		list-style: none;
		font: inherit;
		color: var(--brand);
		transition: background 0.2s ease;
	}

	.job-desc-summary::-webkit-details-marker {
		display: none;
	}

	.job-desc-summary:hover {
		background: rgba(36, 72, 191, 0.04);
	}

	.job-desc-eyebrow {
		margin: 0 0 0.5rem;
	}

	.job-desc-headline {
		display: block;
		font-family: 'Cormorant Garamond', serif;
		font-weight: 600;
		font-size: clamp(1.15rem, 2.5vw, 1.45rem);
		line-height: 1.28;
		margin: 0 0 0.35rem;
	}

	.job-desc-meta-line {
		display: block;
		font-size: 0.9rem;
		font-weight: 500;
		opacity: 0.78;
	}

	.job-desc-chevron {
		font-size: 0.85rem;
		opacity: 0.5;
		line-height: 1.7;
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.job-desc-details[open] .job-desc-chevron {
		transform: rotate(-180deg);
	}

	.job-desc-panel {
		padding: 0 1.25rem 1.35rem;
		border-top: 1px solid rgba(36, 72, 191, 0.1);
	}

	.job-desc-facts {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.85rem;
		margin: 1.1rem 0 1.5rem;
		padding: 0;
		font-size: 0.9rem;
	}

	@media (min-width: 640px) {
		.job-desc-facts {
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem 1.5rem;
		}
	}

	.job-desc-facts dt {
		font-weight: 600;
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		opacity: 0.65;
		margin: 0 0 0.2rem;
	}

	.job-desc-facts dd {
		margin: 0;
		line-height: 1.45;
		color: var(--body);
	}

	.job-desc-h {
		font-family: 'Cormorant Garamond', serif;
		font-weight: 600;
		font-size: 1.2rem;
		color: var(--brand);
		margin: 1.35rem 0 0.6rem;
	}

	.job-desc-h:first-of-type {
		margin-top: 0;
	}

	.job-desc-p {
		margin: 0 0 0.85rem;
		font-size: 0.98rem;
		line-height: 1.65;
		max-width: 52rem;
	}

	.job-desc-p--last {
		margin-bottom: 0;
	}

	.job-desc-list {
		margin: 0 0 0.85rem;
		padding-left: 1.15rem;
		max-width: 52rem;
		font-size: 0.98rem;
		line-height: 1.6;
	}

	.job-desc-list li {
		margin: 0.35rem 0;
	}

	.job-desc-list--tight li {
		margin: 0.28rem 0;
	}

	.job-desc-list strong {
		font-weight: 600;
		color: var(--brand);
	}

	.hero {
		position: relative;
		/* Taller than one viewport so the scene breathes; tweak % if you want more/less. */
		min-height: 112vh;
		min-height: 112svh;
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
		/* Nudge the stack down slightly vs. bottom edge (tweak % if you need more/less). */
		transform: translate(-50%, 10%);
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
		background: linear-gradient(to top, #ffffff, transparent);
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
		font-size: 0.88rem;
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
		font-size: clamp(3rem, 9vw, 5rem);
		line-height: 1.02;
		color: var(--hero-text);
		max-width: 20ch;
		pointer-events: none;
		text-shadow: 0 1px 2rem rgba(17, 28, 78, 0.35);
	}

	.hero-role {
		margin: 0.75rem 0 0;
		max-width: 32rem;
		font-size: 1.15rem;
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

	.ms-signal-grid {
		display: flex;
		flex-direction: column;
		gap: clamp(2rem, 5vw, 2.75rem);
		margin-top: 2rem;
	}

	.ms-signal-card {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(260px, 1.05fr);
		gap: 1.5rem 1.75rem;
		align-items: stretch;
		padding: clamp(1.25rem, 3vw, 1.65rem);
		border-radius: 1.25rem;
		border: 1px solid rgba(36, 72, 191, 0.14);
		background:
			linear-gradient(165deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.88) 100%),
			linear-gradient(90deg, rgba(36, 72, 191, 0.06), transparent 55%);
		box-shadow:
			0 20px 50px rgba(36, 72, 191, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.8);
	}

	.ms-signal-card--reverse {
		grid-template-columns: minmax(260px, 1.05fr) minmax(0, 1fr);
	}

	.ms-signal-card--reverse .ms-signal-copy {
		order: 2;
	}

	.ms-signal-card--reverse .ms-signal-media {
		order: 1;
	}

	.ms-signal-copy {
		padding: 0.35rem 0;
		min-width: 0;
	}

	.ms-signal-eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--brand);
		opacity: 0.75;
	}

	.ms-signal-title {
		margin: 0 0 0.85rem;
		font-family: 'Cormorant Garamond', serif;
		font-weight: 600;
		font-size: clamp(1.45rem, 3.2vw, 2.15rem);
		line-height: 1.12;
		color: var(--brand);
		letter-spacing: -0.02em;
	}

	.ms-signal-quote {
		margin: 0 0 1rem;
		padding: 0 0 0 1rem;
		border-left: 3px solid var(--brand);
		font-size: 0.98rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.65;
		color: rgba(36, 72, 191, 0.88);
	}

	.ms-signal-body {
		margin: 0;
		font-size: 1.02rem;
		line-height: 1.68;
		color: var(--body);
	}

	.ms-signal-media {
		position: relative;
		display: flex;
		align-items: stretch;
		min-height: min(320px, 52vw);
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid rgba(36, 72, 191, 0.12);
		background: rgba(36, 72, 191, 0.04);
		box-shadow: 0 12px 36px rgba(36, 72, 191, 0.12);
	}

	/* Single class so Svelte scoped CSS always binds; covers both img + video */
	.ms-signal-media-asset {
		display: block;
		flex: 1 1 auto;
		align-self: stretch;
		width: 100%;
		min-height: min(320px, 52vw);
		height: 100%;
		min-width: 0;
		object-fit: cover;
		object-position: center;
	}

	.ms-signal-media--contain .ms-signal-media-asset {
		object-fit: contain;
		padding: 1rem;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 0.65);
	}

	@media (max-width: 800px) {
		.ms-signal-card,
		.ms-signal-card--reverse {
			grid-template-columns: 1fr;
		}

		.ms-signal-card--reverse .ms-signal-copy,
		.ms-signal-card--reverse .ms-signal-media {
			order: unset;
		}

		.ms-signal-media {
			min-height: 240px;
		}

		.ms-signal-media-asset {
			min-height: 240px;
		}
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
		background: rgba(255, 255, 255, 0.92);
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
		background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0.65) 35%, transparent 100%);
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

	/* Contact info reads better without all-caps */
	.footer-contact-btn {
		text-transform: none;
		letter-spacing: 0.04em;
		font-weight: 600;
		font-size: 0.8rem;
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
