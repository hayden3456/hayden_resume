<script lang="ts">
	const SOCIAL = {
		linkedin: 'https://www.linkedin.com/in/hayden-constas-39a129228/'
	} as const;

	const CONTACT = {
		email: 'hjconstas@gmail.com',
		phoneDisplay: '(708)-830-0299',
		phoneTel: '+17088300299'
	} as const;

	const posting = {
		role: 'Electrical Technician',
		company: 'Doppelmayr USA, Inc.',
		office: 'Salt Lake City, UT',
		requisitionId: '1124'
	} as const;

	const landingUrl = 'https://haydenconstas.com/Doppelmayr';
	const ogImage = 'https://haydenconstas.com/images/website_ss.webp';

	type ReqCard = {
		eyebrow: string;
		title: string;
		quote: string;
		copy: string;
		image: { src: string; alt: string; contain?: boolean };
	};

	const requirementCards: ReqCard[] = [
		{
			eyebrow: 'Build · wire · standards',
			title: 'Panel assembly, schematics, UL / NEC mindset',
			quote:
				'"Physical assembly of panels… wiring… electrical schematics… following UL508A or NEC standards."',
			copy:
				'My B.E. in Electrical Engineering trained me to read schematics and prints carefully and to treat codes and safety practices as non-negotiable. I have wired and debugged boards and prototypes where mistakes are expensive—I carry that same discipline into industrial control work.',
			image: { src: '/images/circuits.webp', alt: 'Precision wiring and circuit work' }
		},
		{
			eyebrow: 'Documentation',
			title: 'Drawings, BOMs, red-lines, QC feedback',
			quote:
				'"Engineering and manufacturing documents including parts lists, assembly instructions and wiring schematics." "Keep red-lines… turn in to engineering."',
			copy:
				'I am comfortable moving between BOMs, assembly notes, and diagrams, and I write changes down clearly so engineering gets accurate feedback. When QC asks for rework, I treat it as tightening the loop—not taking it personally.',
			image: { src: '/images/smiling_with_board.webp', alt: 'Hands-on review of hardware documentation' }
		},
		{
			eyebrow: 'Field · install · safety',
			title: 'Conduit, gear on site, towers, safety circuits',
			quote:
				'"Install electrical equipment… conduit… circuit breaker panels… control panels." "Climb towers and install electrical safety circuits." "Follow… safety standards."',
			copy:
				'I want my work to show up reliably in the field: pulling and terminating to the drawing, respecting lockout and harness protocols, and communicating clearly when site conditions differ from the plan. I am motivated by infrastructure people actually ride on.',
			image: { src: '/images/pg_working.jpg', alt: 'Team collaboration on technical work' }
		},
		{
			eyebrow: 'Travel · schedule · conditions',
			title: 'Road time, mountain environments, peak season',
			quote:
				'"Willing to travel 30–50%… mostly in the Fall." "Extreme weather… mountainous terrain." "Field season shift is typically 6 days a week 10 hours a day."',
			copy:
				'I understand this role is built around installs and seasons, not a pure shop routine. I am willing to take on heavy travel and longer field weeks when that is what the project needs, and I am at home in rugged outdoor conditions from years around Colorado’s mountains.',
			image: { src: '/images/moun2.webp', alt: 'Mountain terrain — familiar environment' }
		},
		{
			eyebrow: 'Hands-on craft',
			title: 'Tools, dexterity, neat workmanship',
			quote:
				'"Mount electrical components… breakers, transformers, relays, contactors, terminals…" "Proficiency using hand and power tools… Good hand dexterity and strength."',
			copy:
				'I have spent serious time at the bench: torque discipline, cable routing that stays serviceable, and layouts that inspectors and the next tech can understand. I take pride in workmanship that looks as good as it tests.',
			image: { src: '/images/me_crop.gif', alt: 'Hands-on technical work' }
		},
		{
			eyebrow: 'Team · independence',
			title: 'Self-directed work that still fits the crew',
			quote:
				'"Ability to work independently with limited supervision." "Ability to work well with others." "High motivation… multi-task."',
			copy:
				'I have worked in startups and client projects where nobody hands you a perfect checklist—you prioritize, execute, and loop in the team early when risk shows up. I like earning trust on the ground with consistent quality and clear communication.',
			image: { src: '/images/graduation_pic.webp', alt: 'Colorado School of Mines — B.E. Electrical Engineering' }
		}
	];

	const coverLetterParagraphs = [
		'Dear Doppelmayr USA hiring team,',
		'I am applying for the Electrical Technician role (Requisition ID 1124) in Salt Lake City. What draws me to Doppelmayr is the blend of serious electrical craft with ropeway systems that millions of people trust on ski hills and in cities—I want to contribute to work that has to be right the first time.',
		'I bring a B.E. in Electrical Engineering from Colorado School of Mines, strong schematic literacy, careful documentation habits, and real hunger for both shop builds and field installs. I would welcome the chance to learn Doppelmayr’s standards inside and out and grow with your team.',
		'Thank you for considering my application.',
		'Sincerely,',
		'Hayden Constas'
	];
</script>

<svelte:head>
	<title>Hayden Constas | Doppelmayr USA — Electrical Technician</title>
	<meta
		name="description"
		content="Hayden Constas — application for Electrical Technician at Doppelmayr USA, Salt Lake City. Requirements, fit, and cover letter."
	/>
	<link rel="canonical" href={landingUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={landingUrl} />
	<meta property="og:title" content="Hayden Constas | Doppelmayr USA — Electrical Technician" />
	<meta
		property="og:description"
		content="Application for Electrical Technician at Doppelmayr USA, Salt Lake City — requirements fit and cover letter."
	/>
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hayden Constas | Doppelmayr USA — Electrical Technician" />
	<meta
		name="twitter:description"
		content="Application for Electrical Technician at Doppelmayr USA, Salt Lake City."
	/>
	<meta name="twitter:image" content={ogImage} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;1,8..60,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="doppel-page">
	<header class="top-bar">
		<div class="wrap top-bar-inner">
			<a class="name-mark" href="https://haydenconstas.com">Hayden Constas</a>
			<nav class="top-nav" aria-label="On this page">
				<a href="#cover-letter">Cover letter</a>
				<a href="#fit">Why I fit</a>
				<a href="#posting">Job posting</a>
				<a href="#contact">Contact</a>
			</nav>
		</div>
	</header>

	<section class="hero" aria-label="Introduction">
		<div class="hero-bg" aria-hidden="true"></div>
		<div class="hero-overlay" aria-hidden="true"></div>
		<div class="wrap hero-inner">
			<div class="hero-brand">
				<img
					class="hero-logo"
					src="/doppelmayr/logo.svg"
					width="320"
					height="159"
					alt="Doppelmayr"
					decoding="async"
				/>
			</div>
			<p class="hero-kicker">Application — {posting.company}</p>
			<h1 class="hero-title">Hayden Constas</h1>
			<p class="hero-role">
				{posting.role}
				<span class="dot">·</span>
				{posting.office}
			</p>
			<p class="hero-req">Requisition ID {posting.requisitionId}</p>
		</div>
	</section>

	<section class="band">
		<div class="wrap prose-block">
			<p class="eyebrow">Overview</p>
			<p>
				Below is a concise map from your posting to my background, plus the full job text for reference. I
				built this page so reviewers can see how an electrical engineer who has also shipped software and
				client projects translates into panel builds, field installs, and the travel rhythm this role
				requires.
			</p>
		</div>
	</section>

	<section id="cover-letter" class="band band--muted">
		<div class="wrap cover-grid">
			<div class="cover-letter">
				<p class="eyebrow">Cover letter</p>
				{#each coverLetterParagraphs as line}
					<p class:cover-signature={line.startsWith('Hayden')}>{line}</p>
				{/each}
			</div>
			<div class="qr-card">
				<p class="eyebrow">This page online</p>
				<img
					class="qr-img"
					src="/doppelmayr/landing-qr.png"
					width="280"
					height="280"
					alt="QR code linking to haydenconstas.com/Doppelmayr"
					decoding="async"
				/>
				<p class="qr-url"><a href={landingUrl}>{landingUrl}</a></p>
				<p class="qr-hint">Scan for this letter and requirement breakdown — ideal from a phone or printed PDF.</p>
			</div>
		</div>
	</section>

	<section id="fit" class="band">
		<div class="wrap">
			<p class="eyebrow">Posting → my experience</p>
			<h2 class="section-title">Where your requirements meet what I bring</h2>
			<p class="section-lead">
				Paraphrased language from the Electrical Technician posting is quoted below; my notes describe how I
				would show up in the role.
			</p>
			<div class="cards">
				{#each requirementCards as card}
					<article class="card">
						<div class="card-copy">
							<p class="card-eyebrow">{card.eyebrow}</p>
							<h3 class="card-title">{card.title}</h3>
							<blockquote class="card-quote">{card.quote}</blockquote>
							<p class="card-body">{card.copy}</p>
						</div>
						<div class="card-media" class:card-media--contain={card.image.contain}>
							<img src={card.image.src} alt={card.image.alt} loading="lazy" decoding="async" />
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="posting" class="band band--muted">
		<div class="wrap">
			<details class="job-details">
				<summary>
					<span class="job-summary-main">
						<span class="eyebrow">Full job description</span>
						<span class="job-summary-title">{posting.role}</span>
						<span class="job-summary-meta">{posting.office} · Requisition {posting.requisitionId}</span>
					</span>
					<span class="chev" aria-hidden="true">▾</span>
				</summary>
				<div class="job-panel">
					<p class="job-intro">
						With innovative ropeways, the Doppelmayr teams ensure world records, eye-catching highlights and
						enthusiasm among customers and passengers. We develop mobility solutions for the future and
						high-performance material handling systems for use all over the world.
					</p>
					<p class="job-intro">
						We’re seeking a detail-oriented Electrical Technician to contribute their expertise to building
						advanced electrical control panels and wiring ski lift systems throughout the U.S. The technician is
						responsible for the physical assembly of the panels or sub-assemblies using drawings or work
						instructions, wiring the panels or assemblies using electrical schematics, and following UL508A or
						NEC standards.
					</p>

					<h3>Your key responsibilities</h3>
					<ul>
						<li>Build assemblies following work instructions and best practices.</li>
						<li>Wire various control panel products in preparation for test and final inspection.</li>
						<li>
							Read, understand, and utilize various engineering and manufacturing documents including parts lists,
							assembly instructions and wiring schematics.
						</li>
						<li>Perform re-work of wiring and assembly at request and guidance of QC technicians.</li>
						<li>Maintain a safe, organized and efficient work area</li>
						<li>
							Mount electrical components including: circuit breakers, transformers, relays, contactors,
							terminals, input/output devices and or all related industrial control devices.
						</li>
						<li>Keep red-lines of any changes required during production and turn in to engineering on completion of the project.</li>
						<li>Travel to job sites as required.</li>
						<li>
							Install electrical equipment including: underground PVC, EMT, other conduits, circuit breaker panels,
							lighting, heaters, outlets, and control panels based on Doppelmayr standards and NEC.
						</li>
						<li>Pull, route, and terminate wires/cables according to electrical schematics.</li>
						<li>Climb towers and install electrical safety circuits.</li>
						<li>Follow and maintain Doppelmayr safety standards.</li>
					</ul>

					<h3>Your profile</h3>
					<ul>
						<li>Vocational training and / or experience as an Electrician, Technician, or related field (preferred).</li>
						<li>Must be willing to travel 30-50% of the year. Most travel will be in the Fall.</li>
						<li>Must be able to work in extreme weather conditions (mountainous terrain).</li>
						<li>Experience reading and interpreting electrical schematics / diagrams.</li>
						<li>Proficiency using hand and power tools in a safe manner (preferred).</li>
						<li>Good hand dexterity and strength.</li>
						<li>High motivation level and ability to multi-task.</li>
						<li>Ability to work independently with limited supervision.</li>
						<li>Ability to work well with others.</li>
						<li>Strong attention to detail and organization.</li>
						<li>Work on the road for long periods of time.</li>
						<li>Field season shift is typically 6 days a week 10 hours a day.</li>
						<li>Housing and per diem available depending on work location.</li>
					</ul>

					<h3>Your benefits</h3>
					<ul>
						<li>401(k), including company match</li>
						<li>Health, dental, vision, and life insurance</li>
						<li>Health savings account</li>
						<li>Employee assistance program</li>
						<li>Paid time off</li>
					</ul>
				</div>
			</details>
		</div>
	</section>

	<footer id="contact" class="footer">
		<div class="wrap footer-inner">
			<h2 class="footer-title">Let’s talk</h2>
			<div class="footer-actions">
				<a class="btn" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
				<a class="btn" href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
				<a class="btn btn--ghost" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
			</div>
			<p class="footer-back"><a href="/">← Full portfolio & résumé</a></p>
		</div>
	</footer>
</div>

<style>
	.doppel-page {
		--brand: #004c93;
		--brand-soft: rgba(0, 76, 147, 0.08);
		--text: #1a2f45;
		--muted: #4a6278;
		--surface: #ffffff;
		--surface2: #f3f6fa;
		font-family: 'DM Sans', system-ui, sans-serif;
		background: var(--surface);
		color: var(--muted);
		min-height: 100vh;
		line-height: 1.55;
	}

	.wrap {
		width: 100%;
		max-width: 72rem;
		margin-inline: auto;
		padding-inline: clamp(1.25rem, 4vw, 2.5rem);
	}

	.top-bar {
		position: sticky;
		top: 0;
		z-index: 40;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--brand-soft);
	}

	.top-bar-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 0.85rem;
	}

	.name-mark {
		font-family: 'Source Serif 4', Georgia, serif;
		font-weight: 600;
		font-size: 1.15rem;
		color: var(--brand);
		text-decoration: none;
		border-radius: 0.25rem;
	}

	.name-mark:focus-visible {
		outline: 2px solid var(--brand);
		outline-offset: 3px;
	}

	.top-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem 1.25rem;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.top-nav a {
		color: var(--text);
		text-decoration: none;
		opacity: 0.85;
	}

	.top-nav a:hover {
		opacity: 1;
		color: var(--brand);
	}

	.top-nav a:focus-visible {
		opacity: 1;
		color: var(--brand);
		outline: 2px solid var(--brand);
		outline-offset: 3px;
		border-radius: 0.25rem;
	}

	.hero {
		position: relative;
		min-height: min(78vh, 52rem);
		display: flex;
		align-items: flex-end;
		padding-block: 4rem 3.5rem;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(120deg, rgba(0, 76, 147, 0.85) 0%, rgba(0, 46, 92, 0.72) 42%, rgba(26, 47, 69, 0.55) 100%),
			url('/images/moun2.webp') center/cover no-repeat;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(255, 255, 255, 0.95) 0%, transparent 38%);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
	}

	.hero-brand {
		margin-bottom: 1.25rem;
	}

	.hero-logo {
		display: block;
		max-width: min(18rem, 72vw);
		height: auto;
		filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.15));
	}

	.hero-kicker {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--brand);
		margin: 0 0 0.35rem;
	}

	.hero-title {
		font-family: 'Source Serif 4', Georgia, serif;
		font-weight: 600;
		font-size: clamp(2.25rem, 6vw, 3.75rem);
		line-height: 1.1;
		color: var(--text);
		margin: 0 0 0.5rem;
	}

	.hero-role {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--text);
		margin: 0;
	}

	.hero-role .dot {
		opacity: 0.45;
		padding: 0 0.35rem;
	}

	.hero-req {
		margin: 0.5rem 0 0;
		font-size: 0.9rem;
		color: var(--muted);
	}

	.band {
		padding-block: 3.25rem;
	}

	.band--muted {
		background: var(--surface2);
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--brand);
		margin: 0 0 0.75rem;
	}

	.prose-block p:last-child {
		margin-bottom: 0;
	}

	.prose-block {
		max-width: 48rem;
		font-size: 1.05rem;
		color: var(--text);
	}

	.cover-grid {
		display: grid;
		grid-template-columns: 1fr minmax(14rem, auto);
		gap: 2.5rem;
		align-items: start;
	}

	@media (max-width: 768px) {
		.cover-grid {
			grid-template-columns: 1fr;
		}
	}

	.cover-letter {
		max-width: 40rem;
		font-size: 1.05rem;
		color: var(--text);
	}

	.cover-letter p {
		margin: 0 0 0.85rem;
	}

	.cover-signature {
		font-family: 'Source Serif 4', Georgia, serif;
		font-weight: 600;
		margin-top: 1.25rem !important;
	}

	.qr-card {
		background: var(--surface);
		border: 1px solid var(--brand-soft);
		border-radius: 1rem;
		padding: 1.25rem 1.5rem;
		box-shadow: 0 12px 36px rgba(0, 76, 147, 0.06);
		text-align: center;
		max-width: 20rem;
	}

	.qr-img {
		display: block;
		margin: 0.5rem auto 0.75rem;
		width: 100%;
		max-width: 280px;
		height: auto;
		border-radius: 0.35rem;
	}

	.qr-url {
		font-size: 0.8rem;
		word-break: break-all;
		margin: 0 0 0.5rem;
	}

	.qr-url a {
		color: var(--brand);
		font-weight: 600;
		border-radius: 0.25rem;
	}

	.qr-url a:focus-visible {
		outline: 2px solid var(--brand);
		outline-offset: 3px;
	}

	.qr-hint {
		font-size: 0.82rem;
		color: var(--muted);
		margin: 0;
		line-height: 1.45;
	}

	.section-title {
		font-family: 'Source Serif 4', Georgia, serif;
		font-size: clamp(1.65rem, 3.5vw, 2.25rem);
		font-weight: 600;
		color: var(--text);
		margin: 0 0 0.65rem;
		line-height: 1.2;
	}

	.section-lead {
		max-width: 44rem;
		margin: 0 0 2.25rem;
		font-size: 1.02rem;
		color: var(--muted);
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
		padding: 2rem;
		background: var(--surface2);
		border-radius: 1rem;
		border: 1px solid var(--brand-soft);
	}

	@media (max-width: 860px) {
		.card {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 861px) {
		.card:nth-child(even) .card-copy {
			order: 2;
		}

		.card:nth-child(even) .card-media {
			order: 1;
		}
	}

	.card-eyebrow {
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--brand);
		margin: 0 0 0.35rem;
	}

	.card-title {
		font-family: 'Source Serif 4', Georgia, serif;
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--text);
		margin: 0 0 0.65rem;
		line-height: 1.25;
	}

	.card-quote {
		margin: 0 0 0.85rem;
		padding-left: 1rem;
		border-left: 3px solid var(--brand);
		font-size: 0.92rem;
		font-style: italic;
		color: var(--muted);
		line-height: 1.5;
	}

	.card-body {
		margin: 0;
		font-size: 0.98rem;
		color: var(--text);
	}

	.card-media {
		border-radius: 0.65rem;
		overflow: hidden;
		background: #0d2137;
		min-height: 14rem;
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
	}

	.card-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.card-media--contain img {
		object-fit: contain;
		background: #fff;
	}

	.job-details {
		border-radius: 1rem;
		border: 1px solid var(--brand-soft);
		background: var(--surface);
		overflow: hidden;
		box-shadow: 0 12px 40px rgba(0, 76, 147, 0.06);
	}

	.job-details summary {
		list-style: none;
		cursor: pointer;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1rem;
		align-items: start;
		padding: 1.35rem 1.5rem;
	}

	.job-details summary::-webkit-details-marker {
		display: none;
	}

	.job-summary-main {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.job-summary-title {
		font-family: 'Source Serif 4', Georgia, serif;
		font-weight: 600;
		font-size: 1.25rem;
		color: var(--text);
	}

	.job-summary-meta {
		font-size: 0.9rem;
		color: var(--muted);
	}

	.chev {
		font-size: 1rem;
		color: var(--brand);
		line-height: 1;
	}

	.job-details[open] .chev {
		transform: rotate(180deg);
		display: inline-block;
	}

	.job-panel {
		padding: 0 1.5rem 1.75rem;
		border-top: 1px solid var(--brand-soft);
		font-size: 0.95rem;
		color: var(--text);
	}

	.job-panel h3 {
		font-size: 1.05rem;
		margin: 1.5rem 0 0.65rem;
		color: var(--brand);
		font-weight: 700;
	}

	.job-panel ul {
		margin: 0;
		padding-left: 1.2rem;
	}

	.job-panel li {
		margin-bottom: 0.35rem;
	}

	.job-intro {
		margin: 1rem 0 0;
		color: var(--muted);
		line-height: 1.55;
	}

	.footer {
		background: linear-gradient(165deg, #023a6e 0%, var(--brand) 55%, #003057 100%);
		color: rgba(255, 255, 255, 0.88);
		padding-block: 3.5rem 4rem;
	}

	.footer-title {
		font-family: 'Source Serif 4', Georgia, serif;
		font-size: 1.85rem;
		font-weight: 600;
		margin: 0 0 1.25rem;
		color: #fff;
	}

	.footer-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.55rem 1.15rem;
		border-radius: 999px;
		background: #fff;
		color: var(--brand);
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
	}

	.btn:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 3px;
	}

	.btn--ghost {
		background: transparent;
		color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.55);
	}

	.btn--ghost:focus-visible {
		outline-color: rgba(255, 255, 255, 0.95);
	}

	.footer-back a {
		color: rgba(255, 255, 255, 0.75);
		font-size: 0.9rem;
		border-radius: 0.25rem;
	}

	.footer-back a:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.85);
		outline-offset: 3px;
	}
</style>
