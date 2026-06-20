import React, { useState, useEffect, useRef } from "react";

/* Image base path — works under Vite (base: '/portfolio/') and at any deploy root. */
const BASE = import.meta.env.BASE_URL;
const asset = (p) => BASE + p;

const UPWORK = "https://www.upwork.com/freelancers/~019bfcdb4c3cae2292";
const GITHUB = "https://github.com/x3daniking";
const EMAIL = "malikadnan655@gmail.com";
const PHONE = "+92 304 5733047";

/* When embedded in an iframe (preview tooling), IntersectionObserver is often
   suppressed, so reveal everything immediately. On the real deployed top-level
   site this is false and the scroll-reveal animation runs normally. */
const IN_IFRAME = (() => {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
})();

/* ----------------------------------------------------------------- */
/* Scroll-reveal wrapper                                             */
/* ----------------------------------------------------------------- */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (IN_IFRAME) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						setShown(true);
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return (
		<Tag
			ref={ref}
			className={IN_IFRAME ? className : `reveal ${shown ? "in" : ""} ${className}`}
			style={IN_IFRAME ? undefined : { transitionDelay: `${delay}ms` }}>
			{children}
		</Tag>
	);
}

/* ----------------------------------------------------------------- */
/* Nav                                                               */
/* ----------------------------------------------------------------- */
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 28);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const close = () => setOpen(false);
	return (
		<nav className={`nav ${scrolled ? "scrolled" : ""}`}>
			<div className="nav-inner">
				<a
					href="#top"
					className="brand"
					onClick={close}>
					<img
						src={asset("images/adnan.png")}
						alt="Muhammad Adnan"
						className="brand-avatar"
					/>
					Muhammad Adnan
				</a>
				<button
					className="nav-toggle"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className={`nav-links ${open ? "open" : ""}`}>
					<a
						className="link"
						href="#work"
						onClick={close}>
						Work
					</a>
					<a
						className="link"
						href="#stack"
						onClick={close}>
						Stack
					</a>
					<a
						className="link"
						href="#about"
						onClick={close}>
						About
					</a>
					<a
						className="link"
						href="#contact"
						onClick={close}>
						Contact
					</a>
					<a
						className="btn btn-primary nav-cta"
						href={UPWORK}
						target="_blank"
						rel="noreferrer"
						onClick={close}>
						Hire on Upwork
					</a>
				</div>
			</div>
		</nav>
	);
}

/* ----------------------------------------------------------------- */
/* Hero                                                              */
/* ----------------------------------------------------------------- */
function Hero() {
	return (
		<header
			className="hero"
			id="top">
			<div className="hero-ring r1"></div>
			<div className="hero-ring r2"></div>
			<div className="hero-glow"></div>
			<div className="container hero-inner">
				<Reveal>
					<div className="hero-kicker">
						<span className="dash"></span>
						FULL-STACK DEVELOPER
					</div>
				</Reveal>
				<Reveal delay={80}>
					<h1>
						Muhammad
						<br />
						Adnan
					</h1>
				</Reveal>
				<Reveal delay={160}>
					<p className="intro">
						From interface to infrastructure — I design, build, and ship complete{" "}
						<b>web &amp; mobile products</b>: polished frontends, scalable backends, real-time systems, AI
						integrations, and the cloud they run on.
					</p>
				</Reveal>
				<Reveal delay={240}>
					<div className="hero-actions">
						<a
							className="btn btn-primary"
							href="#work">
							View my work
						</a>
						<a
							className="btn btn-ghost"
							href={UPWORK}
							target="_blank"
							rel="noreferrer">
							Upwork profile ↗
						</a>
					</div>
				</Reveal>
				<Reveal delay={320}>
					<div className="hero-meta">
						<a
							href={UPWORK}
							target="_blank"
							rel="noreferrer">
							↗ Upwork
						</a>
						<a
							href={GITHUB}
							target="_blank"
							rel="noreferrer">
							github.com/x3daniking
						</a>
						<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
						<span>Islamabad, PK</span>
					</div>
				</Reveal>
			</div>
		</header>
	);
}

/* ----------------------------------------------------------------- */
/* About                                                             */
/* ----------------------------------------------------------------- */
function About() {
	return (
		<section
			className="section-pad"
			id="about">
			<div className="container">
				<div className="about-grid">
					<div className="about-copy">
						<Reveal>
							<p className="eyebrow">// Profile</p>
						</Reveal>
						<Reveal delay={60}>
							<h2 className="h2">Engineer who owns the whole product.</h2>
						</Reveal>
						<Reveal delay={120}>
							<p>
								I'm a full-stack developer with 3+ years building scalable web applications,
								microservices, and cross-platform mobile apps. I work comfortably from the pixel to the
								production cluster — MEAN/MERN frontends, Node &amp; NestJS backends, AI-powered
								features, and AWS infrastructure.
							</p>
						</Reveal>
						<Reveal delay={180}>
							<p>
								That means one person who can take an idea from design to a deployed, scalable product —
								no handoffs, no gaps.
							</p>
						</Reveal>
					</div>
					<Reveal delay={120}>
						<div className="stat-grid">
							<div className="stat">
								<div className="num">3+</div>
								<div className="lbl">Years of production experience</div>
							</div>
							<div className="stat">
								<div className="num">5</div>
								<div className="lbl">Flagship products shipped</div>
							</div>
							<div className="stat dark">
								<div className="num">Frontend → Cloud</div>
								<div className="lbl">Full ownership of the stack</div>
							</div>
							<div className="stat">
								<div
									className="num"
									style={{ fontSize: 38, lineHeight: 1.05 }}>
									iOS + Android
								</div>
								<div className="lbl">Cross-platform mobile</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Capabilities                                                      */
/* ----------------------------------------------------------------- */
const CAPS = [
	{
		i: "01",
		t: "Frontend Engineering",
		d: "React, Next.js, Angular & Vue — responsive, accessible interfaces with clean state management.",
	},
	{
		i: "02",
		t: "Backend & APIs",
		d: "Node.js, NestJS, Express & GraphQL. RESTful APIs, microservices, secure auth & payments.",
	},
	{
		i: "03",
		t: "Cloud & DevOps",
		d: "AWS (EC2, Lambda, S3, CloudFront), Docker, NGINX clustering & auto-scaling deployments.",
	},
	{
		i: "04",
		t: "AI & Machine Learning",
		d: "RAG-based systems, vector databases, and OpenAI / Gemini integrations baked into products.",
	},
	{
		i: "05",
		t: "Real-Time Systems",
		d: "WebSockets, Socket.io, Kafka & RabbitMQ — live streaming and high-concurrency messaging.",
	},
	{
		i: "06",
		t: "Databases & Data",
		d: "MySQL, PostgreSQL, MongoDB, Redis, Solr & Elasticsearch — modelled for scale and speed.",
		dark: true,
	},
];
function Capabilities() {
	return (
		<section
			className="section-pad"
			id="services"
			style={{ paddingTop: 0 }}>
			<div className="container">
				<Reveal>
					<p className="eyebrow">// Capabilities</p>
				</Reveal>
				<Reveal delay={60}>
					<h2 className="h2">What I build for clients</h2>
				</Reveal>
				<Reveal delay={120}>
					<p
						className="lead"
						style={{ marginBottom: 44 }}>
						One developer covering every layer — so your product ships faster, stays consistent, and scales
						cleanly.
					</p>
				</Reveal>
				<div className="cap-grid">
					{CAPS.map((c, i) => (
						<Reveal
							key={c.i}
							delay={i * 60}>
							<div className={`cap ${c.dark ? "dark" : ""}`}>
								<div className="idx">{c.i}</div>
								<h3>{c.t}</h3>
								<p>{c.d}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Tech stack                                                        */
/* ----------------------------------------------------------------- */
const STACK = [
	{
		cat: "FRONTEND",
		items: ["React.js", "Next.js", "Angular", "Vue.js", "Tailwind", "Material UI", "Redux Toolkit", "Flutter"],
	},
	{
		cat: "BACKEND",
		items: ["Node.js", "NestJS", "Express", "Python", "GraphQL", "WebSockets", "Socket.io", "Microservices"],
	},
	{
		cat: "AI & DATA",
		items: [
			"RAG Systems",
			"Qdrant / FAISS",
			"OpenAI · Gemini",
			"MySQL",
			"MongoDB",
			"Redis",
			"Kafka · RabbitMQ",
			"Elasticsearch",
		],
	},
	{
		cat: "CLOUD & OPS",
		items: ["AWS EC2 · Lambda", "S3 · CloudFront", "Docker", "Kubernetes", "NGINX", "Auto Scaling", "Git · CI"],
	},
];
function TechStack() {
	return (
		<section
			className="section-pad stack-section"
			id="stack">
			<div className="container">
				<Reveal>
					<p className="eyebrow">// Technology</p>
				</Reveal>
				<Reveal delay={60}>
					<h2
						className="h2"
						style={{ marginBottom: 40 }}>
						The toolkit
					</h2>
				</Reveal>
				{STACK.map((row, i) => (
					<Reveal
						key={row.cat}
						delay={i * 70}>
						<div className="stack-row">
							<div className="stack-cat">{row.cat}</div>
							<div className="chips">
								{row.items.map((it) => (
									<span
										className="chip"
										key={it}>
										{it}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Projects (web)                                                    */
/* ----------------------------------------------------------------- */
const PROJECTS = [
	{
		img: "images/datadrivenjobs.png",
		url: "dev.datadrivenjobs.com",
		role: "ROLE · PRODUCT LEAD",
		name: "DataDrivenJobs",
		desc: "A data-driven recruitment platform that connects companies with job seekers and intelligently matches the two.",
		bullets: [
			["RAG-powered matching", " auto-qualifies résumés against job requirements — less manual screening."],
			["Scales with demand", " — Auto Scaling Groups + Apache keep it fast under spiky traffic."],
			["Secure by design", " — AWS WAF with ML-based threat detection protects sensitive data."],
		],
		tags: ["Core PHP", "MySQL", "AWS Lambda", "CloudFront", "RAG"],
	},
	{
		img: "images/codeindustries.png",
		url: "code.industries",
		role: "ROLE · DESIGN & BUILD",
		name: "Code.Industries",
		desc: "The full web presence for an AI automation studio — a fast, modern marketing site engineered to win leads.",
		bullets: [
			["Conversion-first layout", " — clear value prop and a “Book a Meeting” CTA that drives inbound."],
			["Polished, on-brand UI", " — responsive across devices with crisp typography and motion."],
			["Fast & SEO-ready", " — built for performance so the brand looks credible from first paint."],
		],
		tags: ["Next.js", "React", "Responsive UI", "Tailwind"],
		reverse: true,
	},
	{
		img: "images/taliagonzalez.png",
		url: "taliagonzalez.net",
		role: "ROLE · DESIGN & BUILD",
		name: "Talia Gonzalez",
		desc: "An editorial portfolio for a professional screenwriter — a brand-led site that turns visitors into enquiries.",
		bullets: [
			["Distinct editorial identity", " — serif typography and cinematic imagery matched to her voice."],
			["Built to convert", " — clear “View My Work” and “Contact Me” paths to capture leads."],
			["Fully responsive", " — looks sharp from desktop to phone with a polished, professional feel."],
		],
		tags: ["Web", "Editorial UI", "Responsive", "SEO"],
	},
];

function Project({ p }) {
	return (
		<div className={`project ${p.reverse ? "reverse" : ""}`}>
			<Reveal className="project-visual">
				<div className="browser">
					<div className="browser-bar">
						<span className="dot r"></span>
						<span className="dot y"></span>
						<span className="dot g"></span>
						<span className="browser-url">{p.url}</span>
					</div>
					<img
						src={asset(p.img)}
						alt={`${p.name} screenshot`}
					/>
				</div>
			</Reveal>
			<Reveal delay={100}>
				<div>
					<span className="tag-pill">{p.role}</span>
					<h3>{p.name}</h3>
					<p className="desc">{p.desc}</p>
					<div className="bullets">
						{p.bullets.map((b, i) => (
							<div
								className="bullet"
								key={i}>
								<span className="sq"></span>
								<span className="txt">
									<b>{b[0]}</b>
									{b[1]}
								</span>
							</div>
						))}
					</div>
					<div className="tags">
						{p.tags.map((t) => (
							<span
								className="tag"
								key={t}>
								{t}
							</span>
						))}
					</div>
				</div>
			</Reveal>
		</div>
	);
}

function Work() {
	return (
		<section
			className="section-pad"
			id="work">
			<div className="container">
				<Reveal>
					<p className="eyebrow">// Selected work</p>
				</Reveal>
				<Reveal delay={60}>
					<h2
						className="h2"
						style={{ marginBottom: 12 }}>
						Products I've shipped
					</h2>
				</Reveal>
				<Reveal delay={120}>
					<p
						className="lead"
						style={{ marginBottom: 44 }}>
						A selection of web platforms and brand sites — built end to end and live in production.
					</p>
				</Reveal>
				{PROJECTS.map((p) => (
					<Project
						key={p.name}
						p={p}
					/>
				))}
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Mobile apps                                                       */
/* ----------------------------------------------------------------- */
function Mobile() {
	return (
		<section className="section-pad mobile-section">
			<div className="mobile-glow"></div>
			<div className="container">
				<Reveal>
					<p className="eyebrow">// Mobile · iOS + Android</p>
				</Reveal>
				<Reveal delay={60}>
					<h2
						className="h2"
						style={{ marginBottom: 12 }}>
						Cross-platform apps
					</h2>
				</Reveal>
				<Reveal delay={120}>
					<p
						className="lead"
						style={{ color: "#aebcd6", marginBottom: 44 }}>
						Built once in Flutter / NestJS, shipped to both the App Store and Play Store.
					</p>
				</Reveal>
				<div className="mobile-grid">
					<Reveal>
						<div className="app-card">
							<span className="app-badge">AI MEAL PLANNING</span>
							<h3>Coming Right App</h3>
							<p className="desc">
								A personalized nutrition app that uses Gemini AI to recommend meals around each user's
								preferences and dietary needs.
							</p>
							<div className="bullets">
								<div className="bullet">
									<span className="sq"></span>
									<span className="txt">Gemini-AI meal suggestions &amp; nutritional analysis</span>
								</div>
								<div className="bullet">
									<span className="sq"></span>
									<span className="txt">Scalable MongoDB schema for complex preferences</span>
								</div>
								<div className="bullet">
									<span className="sq"></span>
									<span className="txt">Node.js backend on AWS EC2 &amp; S3</span>
								</div>
							</div>
							<div className="tags">
								{["Flutter", "Node.js", "MongoDB", "Gemini AI", "AWS"].map((t) => (
									<span
										className="tag"
										key={t}>
										{t}
									</span>
								))}
							</div>
						</div>
					</Reveal>
					<Reveal delay={120}>
						<div className="app-card with-phone">
							<div>
								<span className="app-badge">LIVE VIDEO COMMERCE</span>
								<h3>Meydan</h3>
								<p className="desc">
									A streaming-based e-commerce platform — sell products live to thousands of
									concurrent viewers.
								</p>
								<div className="bullets">
									<div className="bullet">
										<span className="sq"></span>
										<span className="txt">Low-latency live streaming via Agora SDK</span>
									</div>
									<div className="bullet">
										<span className="sq"></span>
										<span className="txt">Real-time interactions with Socket.io</span>
									</div>
									<div className="bullet">
										<span className="sq"></span>
										<span className="txt">Secure payments via MyFatoorah</span>
									</div>
								</div>
								<div className="tags">
									{["NestJS", "Agora", "Socket.io"].map((t) => (
										<span
											className="tag"
											key={t}>
											{t}
										</span>
									))}
								</div>
							</div>
							<div className="phone">
								<div className="phone-screen">
									<img
										src={asset("images/meydan.png")}
										alt="Meydan app"
									/>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Why me                                                            */
/* ----------------------------------------------------------------- */
const WHY = [
	{
		n: "01",
		t: "One developer, the whole stack",
		d: "From UI to database to deployment — no coordination overhead, no gaps between specialists.",
	},
	{
		n: "02",
		t: "Built to scale",
		d: "Production systems serving thousands of concurrent users — clustering, caching and auto-scaling done right.",
	},
	{
		n: "03",
		t: "AI-native delivery",
		d: "Modern RAG and LLM integrations (OpenAI, Gemini) built into real products, not bolted on.",
	},
	{
		n: "04",
		t: "Clear communication",
		d: "Professional English, agile workflow, and regular updates so you always know where things stand.",
		dark: true,
	},
];
function WhyMe() {
	return (
		<section
			className="section-pad"
			id="why">
			<div className="container">
				<Reveal>
					<p className="eyebrow">// Why work with me</p>
				</Reveal>
				<Reveal delay={60}>
					<h2
						className="h2"
						style={{ marginBottom: 40 }}>
						What you get
					</h2>
				</Reveal>
				<div className="why-grid">
					{WHY.map((w, i) => (
						<Reveal
							key={w.n}
							delay={i * 70}>
							<div className={`why ${w.dark ? "dark" : ""}`}>
								<div className="n">{w.n}</div>
								<div>
									<h3>{w.t}</h3>
									<p>{w.d}</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Contact                                                           */
/* ----------------------------------------------------------------- */
function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
	const onSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Project enquiry from ${form.name || "a client"}`);
		const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`);
		window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
	};
	return (
		<section
			className="section-pad contact-section"
			id="contact">
			<div className="contact-glow"></div>
			<div className="container">
				<div className="contact-grid">
					<div>
						<Reveal>
							<p className="eyebrow">// Let's work together</p>
						</Reveal>
						<Reveal delay={60}>
							<h2>Let's build it.</h2>
						</Reveal>
						<Reveal delay={120}>
							<p className="lead">
								Have a product in mind — web, mobile, AI, or all three? I'll take it from idea to a
								deployed, scalable reality.
							</p>
						</Reveal>
						<Reveal delay={180}>
							<div className="contact-links">
								<a
									className="contact-link"
									href={UPWORK}
									target="_blank"
									rel="noreferrer">
									<span className="k">UPWORK</span>
									<span className="v">Hire me on Upwork ↗</span>
								</a>
								<a
									className="contact-link"
									href={GITHUB}
									target="_blank"
									rel="noreferrer">
									<span className="k">GITHUB</span>
									<span className="v">github.com/x3daniking</span>
								</a>
								<a
									className="contact-link"
									href={`mailto:${EMAIL}`}>
									<span className="k">EMAIL</span>
									<span className="v">{EMAIL}</span>
								</a>
								<div className="contact-link">
									<span className="k">PHONE · LOCATION</span>
									<span className="v">{PHONE} · Islamabad, PK</span>
								</div>
							</div>
						</Reveal>
					</div>
					<Reveal delay={140}>
						<form
							className="form"
							onSubmit={onSubmit}>
							<div className="field">
								<label htmlFor="name">YOUR NAME</label>
								<input
									id="name"
									name="name"
									value={form.name}
									onChange={onChange}
									placeholder="Jane Doe"
									required
								/>
							</div>
							<div className="field">
								<label htmlFor="email">YOUR EMAIL</label>
								<input
									id="email"
									name="email"
									type="email"
									value={form.email}
									onChange={onChange}
									placeholder="jane@company.com"
								/>
							</div>
							<div className="field">
								<label htmlFor="message">PROJECT DETAILS</label>
								<textarea
									id="message"
									name="message"
									value={form.message}
									onChange={onChange}
									placeholder="Tell me about what you'd like to build…"
									required></textarea>
							</div>
							<button
								className="btn btn-primary"
								type="submit">
								Send message →
							</button>
						</form>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------------- */
/* Footer                                                            */
/* ----------------------------------------------------------------- */
function Footer() {
	return (
		<footer className="footer">
			<div className="container footer-inner">
				<span>© {new Date().getFullYear()} MUHAMMAD ADNAN — FULL-STACK DEVELOPER</span>
				<span>
					<a
						href={UPWORK}
						target="_blank"
						rel="noreferrer">
						UPWORK
					</a>
					{"  ·  "}
					<a
						href={GITHUB}
						target="_blank"
						rel="noreferrer">
						GITHUB
					</a>
					{"  ·  "}
					<a href={`mailto:${EMAIL}`}>EMAIL</a>
				</span>
			</div>
		</footer>
	);
}

/* ----------------------------------------------------------------- */
/* App                                                               */
/* ----------------------------------------------------------------- */
export default function App() {
	return (
		<>
			<Nav />
			<Hero />
			<About />
			<Capabilities />
			<TechStack />
			<Work />
			<Mobile />
			<WhyMe />
			<Contact />
			<Footer />
		</>
	);
}
