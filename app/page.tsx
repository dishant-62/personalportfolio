"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { profile, projects, skillGroups } from "@/lib/content";

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>;
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const items = [{ label: "LinkedIn", url: profile.linkedin, icon: <Linkedin size={15} /> }, { label: "GitHub", url: profile.github, icon: <Github size={15} /> }];
  return <div className={`social-links ${compact ? "compact" : ""}`}>{items.map((item) => item.url ? <a key={item.label} href={item.url} target="_blank" rel="noreferrer">{item.icon}{item.label}<ArrowUpRight size={13} /></a> : <span key={item.label} className="social-pending" title={`Add your ${item.label} URL in lib/content.ts`}>{item.icon}{item.label}<span className="pending-dot" /></span>)}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("dishant-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("dishant-theme", nextTheme);
  };
  const closeMenu = () => setMenuOpen(false);

  return <main>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#top" aria-label="Dishant Rathi, home"><span className="wordmark-monogram">DR</span><span>DISHANT RATHI</span></a>
      <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
        {["About", "Experience", "Work", "Beyond", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <SocialLinks compact />
      </nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} aria-pressed={theme === "dark"} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>{theme === "light" ? <Moon size={17} /> : <Sun size={17} />}</button>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker"><span className="live-dot" /> TECHNICAL ASSOCIATE <span className="eyebrow-separator">/</span> GSK, BENGALURU</p>
        <h1>Building the<br /><span className="serif-italic">systems</span> behind<br />what’s next.</h1>
        <p className="hero-intro">I’m Dishant Rathi — a data and AI engineer shaping cloud platforms at GSK, and building a point of view that reaches beyond the stack.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={15} /></a></div>
        <div className="hero-meta"><span>BENGALURU, INDIA</span><span>FROM JAIPUR, WITH RANGE</span></div>
      </div>
      <div className="hero-visual" aria-label="Abstract data flow from engineering toward real-world impact">
        <div className="visual-topline"><span>FIELD NOTES — 01</span><span>DATA / AI / SYSTEMS</span></div>
        <svg className="system-art" viewBox="0 0 600 545" role="img" aria-label="A network of data lines connecting a central platform to real-world outcomes">
          <defs><linearGradient id="lineGradient" x1="0" x2="1"><stop offset="0" stopColor="#b9b6aa" stopOpacity=".12"/><stop offset=".53" stopColor="#426a5c" stopOpacity=".7"/><stop offset="1" stopColor="#c6a56a" stopOpacity=".2"/></linearGradient><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".9" fill="#a9aa9d" opacity=".35"/></pattern></defs>
          <rect width="600" height="545" fill="url(#grid)" opacity=".55"/>
          <g fill="none" stroke="url(#lineGradient)" strokeWidth="1.1"><path d="M30 94H158Q188 94 188 124V213Q188 244 219 244H328"/><path d="M65 171H134Q163 171 163 200V285Q163 315 193 315H326"/><path d="M35 399H134Q165 399 165 368V344Q165 315 195 315H326"/><path d="M31 463H151Q183 463 183 431V392Q183 362 213 362H326"/><path d="M328 244H398Q424 244 424 218V144Q424 113 456 113H555"/><path d="M328 276H465Q494 276 494 246V209Q494 180 522 180H570"/><path d="M328 315H447Q477 315 477 344V381Q477 411 507 411H566"/><path d="M328 362H400Q431 362 431 392V443Q431 472 462 472H565"/></g>
          <g fill="#f4f3ec" stroke="#628171" strokeWidth="1.5"><circle cx="328" cy="244" r="4"/><circle cx="328" cy="276" r="4"/><circle cx="328" cy="315" r="4"/><circle cx="328" cy="362" r="4"/></g>
          <g fill="#627e70"><circle cx="188" cy="124" r="3"/><circle cx="163" cy="200" r="3"/><circle cx="165" cy="368" r="3"/><circle cx="183" cy="431" r="3"/></g>
          <circle cx="328" cy="303" r="79" fill="#e9e8df" stroke="#d5d3c9"/><circle cx="328" cy="303" r="62" fill="#f7f6f0" stroke="#d2d2c7"/><circle cx="328" cy="303" r="48" fill="none" stroke="#426a5c" strokeWidth=".8" strokeDasharray="2 5"/>
          <text x="328" y="294" textAnchor="middle" className="art-small">CONNECT</text><text x="328" y="317" textAnchor="middle" className="art-core">DATA → IMPACT</text>
          <g className="diagram-label"><text x="32" y="77">01 — INGEST</text><text x="35" y="153">02 — TRANSFORM</text><text x="35" y="443">03 — ORCHESTRATE</text><text x="453" y="91">SYSTEMS</text><text x="480" y="165">PEOPLE</text><text x="467" y="448">POSSIBILITY</text></g>
          <circle className="orbit orbit-one" cx="328" cy="303" r="103"/><circle className="orbit orbit-two" cx="328" cy="303" r="116"/>
        </svg>
        <div className="visual-caption"><span>ENGINEERING WITH THE END IN MIND</span><span>FIG. 01</span></div>
      </div>
      <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>

    <section className="intro-band" id="about"><div className="band-index">01 / THE THROUGH LINE</div><p>From <span className="serif-italic">electronics</span> to data platforms. From campus sponsorships to cloud systems. I’ve always been drawn to the work that connects <span className="highlight">big ideas with what actually gets built.</span></p><a href="#beyond" aria-label="Read my story"><ArrowDownRight size={19} /></a></section>

    <section className="story section-wrap">
      <SectionHeading eyebrow="A LITTLE CONTEXT" title="A route with range." note="The thread through it all: make the complex useful, and bring people along." />
      <div className="story-grid">
        <div className="story-body"><p className="lead-copy">I studied Electronics & Communication Engineering at NIT Jaipur. College became as much a lesson in bringing people together as it was in engineering.</p><p>As Marketing Secretary and Advisor, I helped raise approximately ₹25 lakh in sponsorships in a year, including major event initiatives like the Red Bull Off The Roof Tour featuring Mithoon. In my fourth year, I secured an offer from GSK.</p><p>Since August 2024, I’ve been growing into data engineering and AI across GSK’s EDAP and CMC platform teams. The work keeps widening my view: strong engineering matters most when it makes something work better for the people who rely on it.</p><p>Outside work, I’m curious about the products, media and business ideas that start with an everyday friction and ask: what would it take to build this well?</p><a className="inline-link" href="#experience">A closer look at my work <ArrowRight size={15} /></a></div>
        <aside className="story-aside"><div className="aside-label">A FEW CONSTANTS</div><div className="constant"><span>01</span><p>Start with the real-world context.</p></div><div className="constant"><span>02</span><p>Build with care and technical depth.</p></div><div className="constant"><span>03</span><p>Leave room for a bigger idea.</p></div><div className="aside-foot">ECE → DATA → WHAT’S NEXT</div></aside>
      </div>
    </section>

    <section className="education section-wrap" aria-labelledby="education-title"><div className="education-header"><p className="eyebrow">THE FOUNDATION</p><h2 id="education-title">Built on curiosity.<br/><span className="serif-italic">Grounded in fundamentals.</span></h2></div><div className="education-items"><div className="education-item"><span>ENGINEERING</span><div><h3>B.Tech · Electronics & Communication Engineering</h3><p>National Institute of Technology, Jaipur</p></div><strong>8.17 <small>CGPA</small></strong></div><div className="education-item"><span>SCHOOL</span><div><h3>Jawahar Navodaya Vidyalaya</h3><p>Class XII <b>93.6%</b><i>·</i> Class X <b>93%</b></p></div><strong>JNV</strong></div></div></section>

    <section className="experience section-wrap" id="experience">
      <SectionHeading eyebrow="02 / IN PRACTICE" title="Building inside a big system." note="GSK · Bengaluru, India" />
      <div className="experience-panel"><div className="experience-date"><span>26 AUGUST</span><span>2024 — NOW</span><div className="date-line" /></div><div className="experience-main"><div className="exp-title-row"><div><p className="eyebrow">GSK</p><h3>Technical Associate</h3></div><span className="current-badge"><span className="live-dot" /> CURRENT ROLE</span></div><p className="exp-summary">Working across EDAP and CMC platform teams, with a focus on data engineering, AI and cloud platforms.</p><div className="exp-domains"><span>DATA ENGINEERING</span><span>AI</span><span>AZURE</span><span>DATA PLATFORMS</span><span>EDAP</span><span>CMC</span></div><div className="experience-detail"><div><span className="detail-label">RECOGNITION</span><p>3 Bronze Awards <span>·</span> 1 Ahead Together Award</p></div><div><span className="detail-label">SELECTED CONTRIBUTION</span><p className="placeholder-text">[ADD PROJECT, YOUR ROLE & VERIFIED IMPACT]</p></div></div></div></div>
      <div className="experience-footnote"><span>Good work deserves the credit.</span><span>Project details intentionally left open for verified specifics.</span></div>
    </section>

    <section className="skills section-wrap" id="skills"><SectionHeading eyebrow="03 / THE TOOLKIT" title="A practical foundation." note="Grouped around the work, not arranged as a keyword cloud." /><div className="skills-layout"><div className="skills-note"><p>The stack is only useful when it serves the system. These are the areas I work with or am building toward in my current practice.</p><span>CONFIRM THE FINAL SKILL INVENTORY BEFORE PUBLISHING.</span></div><div className="skills-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-group-meta"><span>0{index + 1}</span><h3>{group.label}</h3></div><div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

    <section className="work-section" id="work"><div className="work-inner section-wrap"><SectionHeading eyebrow="04 / IDEAS IN MOTION" title="Problems worth building for." note="Early ideas, clearly labelled. The specifics belong to you." /><div className="projects">{projects.map((project) => <article className="project" key={project.number}><div className="project-topline"><span>{project.number} / {project.type}</span><span className="project-stage"><span />{project.stage}</span></div><div className="project-intro"><div><h3>{project.name}</h3><p>{project.summary}</p></div><span className="project-arrow"><ArrowUpRight size={19} /></span></div><div className="project-specs"><div><span>THE PROBLEM</span><p>{project.challenge}</p></div><div><span>THE APPROACH</span><p>{project.approach}</p></div><div><span>ARCHITECTURE</span><p>{project.architecture}</p></div><div><span>MY ROLE</span><p>{project.role}</p></div><div><span>OUTCOME</span><p>{project.outcome}</p></div></div><div className="project-footer"><span>SPECIFICATION PLACEHOLDER — READY FOR YOUR DETAILS</span><span>{profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a> : "GitHub / DEMO — ADD WHEN READY"}</span></div></article>)}</div><div className="future-project"><span className="future-plus">+</span><div><p className="eyebrow">ROOM TO GROW</p><h3>More work, as it takes shape.</h3><p>Space reserved for future projects and experiments.</p></div><span className="future-label">[ADD FUTURE PROJECT]</span></div></div></section>

    <section className="proof section-wrap"><SectionHeading eyebrow="05 / PROOF OF RANGE" title="Impact takes different forms." note="A few moments that shaped how I work." /><div className="proof-grid"><div className="proof-feature"><div className="proof-topline"><span>GSK / RECOGNITION</span><span>01 — 02</span></div><div className="award-mark">G<span>✳</span></div><div className="proof-feature-bottom"><div><span className="proof-number">03</span><p>Bronze Awards</p></div><div className="proof-divider"/><div><span className="proof-number proof-word">1</span><p>Ahead Together Award</p></div></div><span className="proof-foot">RECOGNITION EARNED AT GSK</span></div><div className="proof-stat"><span className="proof-index">03 / COLLEGE LEADERSHIP</span><strong>~₹25<span className="stat-unit">L</span></strong><p>Sponsorships raised in one year as College Marketing Secretary / Advisor.</p><span className="stat-annotation">INR · APPROXIMATE</span></div><div className="proof-activity"><span className="proof-index">04 / SPORT</span><div className="activity-line"><span className="activity-icon">A</span><div><strong>National level</strong><p>Athletics · U-14</p></div></div><div className="activity-line"><span className="activity-icon">H</span><div><strong>Regional level</strong><p>Handball</p></div></div><div className="activity-bottom">THE DISCIPLINE TRAVELS WITH ME.</div></div><div className="proof-offer"><span className="proof-index">05 / EARLY MOMENTUM</span><p>Offer in hand<br />before <span className="serif-italic">graduation.</span></p><div className="offer-footer"><span>GSK</span><span>SECURED IN FOURTH YEAR</span></div></div></div></section>

    <section className="beyond section-wrap" id="beyond"><SectionHeading eyebrow="06 / OUTSIDE THE JOB TITLE" title="More than the workday." note="A few ways I think, make, and spend time beyond the platform." /><div className="beyond-grid"><div className="beyond-lead"><span className="eyebrow">BUSINESS INSTINCT × BUILDER ENERGY</span><p>I like ideas with an audience, a point of view, and a reason to exist.</p><a href="#work" className="inline-link">See what I’m exploring <ArrowRight size={15} /></a></div><div className="beyond-list"><div><span>01</span><div><h3>Leadership & sponsorship</h3><p>Campus marketing, partnerships, and events — including the Red Bull Off The Roof Tour featuring Mithoon.</p></div><ArrowUpRight size={15}/></div><div><span>02</span><div><h3>Content & community</h3><p>Exploring a Bangalore-first media brand, from city culture to the unexpectedly local.</p></div><ArrowUpRight size={15}/></div><div><span>03</span><div><h3>Ideas with a business model</h3><p>Interested in the path from a useful product to a sustainable, well-run business.</p></div><ArrowUpRight size={15}/></div><div><span>04</span><div><h3>Life beyond screens</h3><p>Guitar, swimming, strength training, cooking, travel, reading, good series, cafés, food and new cultures.</p></div><ArrowUpRight size={15}/></div></div></div></section>

    <section className="now"><div className="now-inner"><div className="now-label"><span className="live-dot"/> RIGHT NOW <span>07 / THE PRESENT</span></div><div className="now-copy"><h2>Learning fast.<br/><span className="serif-italic">Building with intent.</span></h2><p>Deepening my practice in data engineering, AI engineering, Databricks, Spark and Azure — while shaping product ideas and preparing for what’s next.</p></div><div className="now-tags"><span>DATA ENGINEERING</span><span>AI ENGINEERING</span><span>DATABRICKS / SPARK</span><span>AZURE</span><span>PRODUCT BUILDING</span><span>CAREER GROWTH</span></div></div></section>

    <footer className="contact section-wrap" id="contact"><div className="contact-top"><p className="eyebrow">08 / START A CONVERSATION</p><span>BENGALURU · INDIA</span></div><div className="contact-main"><h2>Have an interesting<br/><span className="serif-italic">problem to solve?</span></h2><p>I’m interested in high-impact work across data engineering and AI. Let’s compare notes on what you’re building.</p></div><div className="contact-links"><div className="contact-primary">{profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={17}/></a> : <span className="contact-placeholder">[ADD YOUR PUBLIC EMAIL]</span>}<small>EMAIL</small></div><div className="contact-social"><SocialLinks/><div className="resume-link">{profile.resume ? <a href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={14}/></a> : <span>Resume PDF <i>[ADD FILE]</i></span>}</div></div></div><div className="footer-bottom"><a className="wordmark" href="#top"><span className="wordmark-monogram">DR</span><span>DISHANT RATHI</span></a><span>ENGINEERING, WITH THE END IN MIND.</span><span>© {new Date().getFullYear()} DISHANT RATHI</span><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={13}/></a></div></footer>
  </main>;
}
