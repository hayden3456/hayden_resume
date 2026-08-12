<script lang="ts">
	const CONTACT = {
		email: 'hjconstas@gmail.com',
		phoneDisplay: '(708)-830-0299'
	} as const;

	const posting = {
		role: 'Associate — Software Engineering',
		division: 'Goldman Sachs Asset Management · Asset & Wealth Management',
		office: 'Salt Lake City, Utah'
	} as const;

	const landingUrl = 'https://haydenconstas.com/GoldmanSachs';
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
			eyebrow: 'Required · Education',
			title: 'Technical degree & disciplined engineering',
			quote:
				'"Bachelor\'s or advanced degree in Computer Science, Engineering, Mathematics, Physics, or a related technical field."',
			copy:
				'I earned a B.E. in Electrical Engineering from Colorado School of Mines (completed in three years). That training is quantitative and systems-oriented—the same habits that translate into careful software design, performance awareness, and respect for correctness under constraints.',
			image: { src: '/images/graduation_pic.webp', alt: 'Colorado School of Mines — B.E. Electrical Engineering' }
		},
		{
			eyebrow: 'Required · SDLC',
			title: 'Production software & modern languages',
			quote:
				'"Proficiency in at least one programming language (Java, Scala, Python, etc.) and proven experience in production software development life cycle (SDLC)." ',
			copy:
				'Python has been my primary language for shipping internal tools and integrations in production settings—including data-connected applications—alongside disciplined versioning, reviews, and iterative delivery. I am motivated to deepen JVM ecosystem fluency (including Spring, noted as a nice-to-have) inside GSAM’s stack.',
			image: { src: '/images/red_clay_branded2.png', alt: 'Production software and internal tooling', contain: true }
		},
		{
			eyebrow: 'Required · Data stores',
			title: 'SQL & NoSQL familiarity',
			quote: '"Familiarity with both SQL and NoSQL databases."',
			copy:
				'I am comfortable reasoning about relational schemas, queries, and indexing trade-offs, and I have worked with document-style storage patterns where flexible schemas fit the problem. I treat data boundaries as first-class design concerns—not an afterthought.',
			image: { src: '/images/circuits.webp', alt: 'Structured systems and data pathways' }
		},
		{
			eyebrow: 'Required · DevOps',
			title: 'Containers, CI/CD, automation',
			quote:
				'"Understanding of DevOps principles, including containerization, CI/CD workflows, and infrastructure automation."',
			copy:
				'I think in terms of repeatable builds, automated checks, observable deployments, and infrastructure that teams can evolve safely. That mindset pairs naturally with migrating legacy tooling toward cloud-native patterns while keeping reliability and compliance in view.',
			image: { src: '/images/pg_working.jpg', alt: 'Collaborative engineering delivery' }
		},
		{
			eyebrow: 'Required · Data platforms',
			title: 'Modeling, ETL & governance instincts',
			quote:
				'"Familiarity with data modeling, ETL pipelines, and data governance concepts."',
			copy:
				'At CoorsTek I contributed to internal data-connected tooling (including an internal assistant called Clay), where trustworthy retrieval and clear lineage matter as much as model novelty. I enjoy tightening the pipeline from messy inputs to decisions stakeholders can defend.',
			image: { src: '/images/smiling_with_board.webp', alt: 'Translating data work into stakeholder-ready outcomes' }
		},
		{
			eyebrow: 'Required · Collaboration',
			title: 'Communication across expertise levels',
			quote:
				'"Excellent communication skills with the ability to explain technical concepts to audiences with varying levels of expertise."',
			copy:
				'I’ve run an engineering-services-style practice where clients rarely spoke “engineering.” The recurring skill is translating constraints and trade-offs without jargon-lock—whether the counterpart is a trader, researcher, or portfolio-facing teammate.',
			image: { src: '/images/me_crop.gif', alt: 'Clear communication in technical contexts' }
		},
		{
			eyebrow: 'Required · Mindset',
			title: 'Fast learning & ownership',
			quote: '"The ability to learn quickly and work independently."',
			copy:
				'My résumé hops disciplines—from hardware instincts to shipped software—because I learn stacks by building and asking precise questions early. Independence for me doesn’t mean isolation; it means progressing with judgment and escalating risks before they become outages.',
			image: { src: '/images/Ngspice_logo.webp', alt: 'Deep work with simulation and analytical tools', contain: true }
		},
		{
			eyebrow: 'Fit · Role responsibilities',
			title: 'Trading platform engineering & modernization',
			quote:
				'"Build, maintain and improve upon existing software to run our trading platform." "Aid in the migration from legacy software tools to a modern technology stack."',
			copy:
				'This job sits exactly where I want to contribute: durable libraries and infrastructure that unlock researchers and portfolio managers, standardize patterns across teams, and make iteration safer in a regulated environment. The Salt Lake City posting is especially appealing—I’m targeting Utah intentionally.',
			image: { src: '/images/moun2.webp', alt: 'Salt Lake region — intentional career geography' }
		},
		{
			eyebrow: 'Good-to-have',
			title: 'Cloud & Spring experience',
			quote: '"Experience with Cloud platforms (AWS/GCP)." "Experience with the Spring Framework."',
			copy:
				'I have touched cloud-oriented workflows and APIs in shipping systems and want to consolidate that into GSAM’s preferred patterns. Where Spring is the backbone for services and integrations, I’m eager to ramp quickly with mentorship from engineers who live it daily.',
			image: { src: '/images/code_changing.mp4', alt: 'Evolving systems toward modern stacks' }
		}
	];

	const coverLetterParagraphs = [
		'Dear Goldman Sachs Asset Management hiring team,',
		"I’m applying for the Associate, Software Engineering role (Salt Lake City) within Asset & Wealth Management. What excites me most is your mission: a unified, high-performance environment for portfolio managers and quantitative researchers—from factor research through production—in a secure, compliant, cloud-native setting.",
		'My background is electrical engineering turned shipping software: production SDLC habits, data-connected tooling, DevOps-minded reliability, and collaboration with stakeholders who need both speed and correctness.',
		'I would love the opportunity to help build and modernize the shared infrastructure behind Fixed Income trading—partnering with strategists, portfolio managers, and traders on automation that compounds—and to grow inside GSAM’s engineering culture.',
		'Thank you for considering my application.',
		'Sincerely,',
		'Hayden Constas'
	];

	function isVideoSrc(src: string): boolean {
		return /\.(mp4|webm|ogg)$/i.test(src);
	}
</script>

<svelte:head>
	<title>Hayden Constas | Goldman Sachs Asset Management — Associate Software Engineering</title>
	<meta
		name="description"
		content="Hayden Constas — application for Associate Software Engineering at Goldman Sachs Asset Management, Salt Lake City. Requirements fit and cover letter."
	/>
	<link rel="canonical" href={landingUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={landingUrl} />
	<meta property="og:title" content="Hayden Constas | GSAM — Associate Software Engineering" />
	<meta
		property="og:description"
		content="Application for Associate Software Engineering (AMD Public — Salt Lake City) — requirements fit and cover letter."
	/>
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hayden Constas | GSAM — Associate Software Engineering" />
	<meta name="twitter:description" content="Application for Associate Software Engineering at Goldman Sachs Asset Management, Salt Lake City." />
	<meta name="twitter:image" content={ogImage} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;1,8..60,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="gs-page">
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
					src="/goldman_sachs/logo.svg"
					width="320"
					height="141"
					alt="Goldman Sachs"
					decoding="async"
				/>
			</div>
			<p class="hero-kicker">Application — {posting.division}</p>
			<h1 class="hero-title">Hayden Constas</h1>
			<p class="hero-role">
				{posting.role}
				<span class="dot">·</span>
				{posting.office}
			</p>
		</div>
	</section>

	<section class="band">
		<div class="wrap prose-block">
			<p class="eyebrow">Overview</p>
			<p>
				This page maps Goldman Sachs Asset Management’s Associate Software Engineering posting to my background:
				platform engineering instincts, production SDLC experience, data tooling, and collaboration with stakeholders
				who depend on resilient systems. Full posting text is included below for convenience.
			</p>
		</div>
	</section>

	<section id="cover-letter" class="band band--muted">
		<div class="wrap cover-grid">
			<div class="cover-letter">
				<p class="eyebrow">Cover letter</p>
				{#each coverLetterParagraphs as line, i (i)}
					<p class:cover-signature={line.startsWith('Hayden')}>{line}</p>
				{/each}
			</div>
			<div class="qr-card">
				<p class="eyebrow">This page online</p>
				<img
					class="qr-img"
					src="/goldman_sachs/landing-qr.png"
					width="280"
					height="280"
					alt="QR code linking to haydenconstas.com/GoldmanSachs"
					decoding="async"
				/>
				<p class="qr-url"><a href={landingUrl}>{landingUrl}</a></p>
				<p class="qr-hint">Scan for this letter and requirement breakdown — handy from a phone or printed PDF.</p>
			</div>
		</div>
	</section>

	<section id="fit" class="band">
		<div class="wrap">
			<p class="eyebrow">Posting → my experience</p>
			<h2 class="section-title">Requirements and why they match</h2>
			<p class="section-lead">
				Quoted lines paraphrase the official listing; my notes describe how I would contribute on the Fixed Income
				platform engineering team in Salt Lake City.
			</p>
			<div class="cards">
				{#each requirementCards as card (card.title)}
					<article class="card">
						<div class="card-copy">
							<p class="card-eyebrow">{card.eyebrow}</p>
							<h3 class="card-title">{card.title}</h3>
							<blockquote class="card-quote">{card.quote}</blockquote>
							<p class="card-body">{card.copy}</p>
						</div>
						<div class="card-media" class:card-media--contain={card.image.contain}>
							{#if isVideoSrc(card.image.src)}
								<video
									src={card.image.src}
									class="card-video"
									aria-label={card.image.alt}
									muted
									loop
									playsinline
									autoplay
									preload="metadata"
								></video>
							{:else}
								<img src={card.image.src} alt={card.image.alt} loading="lazy" decoding="async" />
							{/if}
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
						<span class="job-summary-meta">{posting.office} · Asset & Wealth Management</span>
					</span>
					<span class="chev" aria-hidden="true">▾</span>
				</summary>
				<div class="job-panel">
					<p class="job-intro">
						<strong>Corporate title:</strong> Associate · <strong>Office:</strong> Salt Lake City ·
						<strong>Job function:</strong> Software Engineering · <strong>Division:</strong> Asset & Wealth Management
						(AMD Public posting).
					</p>

					<h3>About Asset & Wealth Management</h3>
					<p class="job-intro">
						Bringing together traditional and alternative investments, we provide clients around the world with a
						dedicated partnership and focus on long-term performance. As the firm’s primary investment area, we provide
						investment and advisory services for pension plans, sovereign wealth funds, insurers, endowments,
						foundations, financial advisors and individuals—for which we oversee more than $2 trillion in assets under
						supervision.
					</p>

					<h3>The team</h3>
					<p class="job-intro">
						Our mission is to empower portfolio managers and quantitative researchers by delivering a unified,
						high-performance environment that supports every stage of the investment lifecycle—from factor research to
						model development, backtesting, and production deployment. Team members design and implement shared
						infrastructure, libraries, and tooling that powers Fixed Income trading in a secure, compliant,
						cloud-native environment.
					</p>

					<h3>Your impact as a Software Engineer</h3>
					<p class="job-intro">
						Software engineers build scalable systems, robust frameworks, and high-quality software in close
						collaboration with quantitative researchers and portfolio managers—enabling capabilities across asset
						management with modern, resilient, data-driven systems.
					</p>

					<h3>Who we look for</h3>
					<p class="job-intro">
						People passionate about engineering, motivated by complex problems, and inspired by systems that scale—
						comfortable with modern data platforms, cloud technologies, and DevOps practices.
					</p>

					<h3>Responsibilities</h3>
					<ul>
						<li>Build, maintain and improve upon existing software to run our trading platform.</li>
						<li>Aid in the migration from legacy software tools to a modern technology stack.</li>
						<li>
							Partner with strategists, portfolio managers and traders to deliver tools that enable automation and
							improve operational efficiency.
						</li>
						<li>
							Implement DevOps best practices including CI/CD, infrastructure as code, observability, and automated
							testing for reliability and scalability.
						</li>
						<li>Participate in code reviews, design discussions, and technical architecture decisions.</li>
						<li>
							Contribute to the technical direction of engineering projects—maintainability, security, and performance.
						</li>
					</ul>

					<h3>Required qualifications</h3>
					<ul>
						<li>
							Bachelor’s or advanced degree in Computer Science, Engineering, Mathematics, Physics, or a related
							technical field.
						</li>
						<li>
							Proficiency in at least one programming language (Java, Scala, Python, etc.) and proven production SDLC
							experience.
						</li>
						<li>Familiarity with both SQL and NoSQL databases.</li>
						<li>
							Understanding of DevOps principles, including containerization, CI/CD workflows, and infrastructure
							automation.
						</li>
						<li>Familiarity with data modeling, ETL pipelines, and data governance concepts.</li>
						<li>Excellent communication skills; explain technical concepts to varied audiences.</li>
						<li>The ability to learn quickly and work independently.</li>
					</ul>

					<h3>Good-to-haves</h3>
					<ul>
						<li>Experience with cloud platforms (AWS/GCP).</li>
						<li>Experience with the Spring Framework.</li>
					</ul>
				</div>
			</details>
		</div>
	</section>

	<footer id="contact" class="footer">
		<div class="wrap footer-inner">
			<h2 class="footer-title">Let’s talk</h2>
			<div class="footer-actions">
				<a class="btn" href="mailto:hjconstas@gmail.com">{CONTACT.email}</a>
				<a class="btn" href="tel:+17088300299">{CONTACT.phoneDisplay}</a>
				<a
					class="btn btn--ghost"
					href="https://www.linkedin.com/in/hayden-constas-39a129228/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
			</div>
			<p class="footer-back"><a href="/">← Full portfolio & résumé</a></p>
		</div>
	</footer>
</div>

<style>
	.gs-page {
		--brand: #0c2340;
		--brand-soft: rgba(12, 35, 64, 0.09);
		--text: #141c26;
		--muted: #4a5568;
		--surface: #ffffff;
		--surface2: #f4f6f9;
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
		background: rgba(255, 255, 255, 0.94);
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
			linear-gradient(120deg, rgba(12, 35, 64, 0.88) 0%, rgba(20, 28, 38, 0.72) 45%, rgba(40, 55, 72, 0.5) 100%),
			url('/images/circuits.webp') center/cover no-repeat;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(255, 255, 255, 0.96) 0%, transparent 38%);
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
		max-width: min(17rem, 78vw);
		height: auto;
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.12));
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
		box-shadow: 0 12px 36px rgba(12, 35, 64, 0.06);
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
		background: #0f172a;
		min-height: 14rem;
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
	}

	.card-media img,
	.card-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		min-height: 14rem;
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
		box-shadow: 0 12px 40px rgba(12, 35, 64, 0.06);
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
		background: linear-gradient(165deg, #081626 0%, var(--brand) 52%, #061018 100%);
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
