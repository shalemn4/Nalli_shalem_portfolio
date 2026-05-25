import { useEffect } from 'react'
import { SKILLS, EXPERIENCE, PROJECTS, CERTIFICATIONS, PERSONAL } from '../utils/data'

// ── Observer helper ──────────────────────────────────────────────
function useReveal(sectionId: string) {
  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return
    const els = section.querySelectorAll('.reveal, .timeline-item, .chapter-tag, .cert-card')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [sectionId])
}

// ── Badge color map ───────────────────────────────────────────────
const BADGE_COLORS: Record<string, string> = {
  GCP:       '#4285F4',
  AWS:       '#FF9900',
  META:      '#0081FB',
  UDEMY:     '#A435F0',
  COURSERA:  '#0056D2',
  MICROSOFT: '#00A4EF',
  CUSTOM:    '#cc1a1a',
}

const CODE_LINES = [
  "const dev = new Nalli();", "import React from 'react';",
  "app.use(express.json());", "mongoose.connect(URI);",
  "git commit -m 'shipped'", "docker build -t app .",
  "const [s, set] = useState();", "router.get('/api', auth);",
  "npm run dev", "SELECT * FROM users;",
  "res.json({ ok: true });", "openai.chat.complete({",
  "model: 'gpt-4',", "jwt.sign(payload, secret);",
  "socket.emit('msg', data);", "useThree() → WebGL",
  "TypeScript compiling...", "vite build --prod",
]

// ═══════════════════════════════════════════════════════
//  ABOUT
// ═══════════════════════════════════════════════════════
export function About() {
  useReveal('about')
  return (
    <section id="about">
      <div className="chapter-tag">Chapter 01 — Origin Story</div>
      <div className="about-visual reveal">
        <div className="about-frame">
          <div className="about-grid" />
          <div className="about-code-bg">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i}>{CODE_LINES[i % CODE_LINES.length]}</div>
            ))}
          </div>
          <div className="about-frame-inner" />
        </div>
        <div className="about-tag">FULL STACK</div>
      </div>
      <div className="about-content">
        <h2 className="reveal">The<br />Developer's <em>Saga</em></h2>
        <p className="reveal reveal-delay-1">
          A frontend-first full-stack developer crafting sleek user experiences and scalable SaaS products — wielding React, Vue, Node.js, and MongoDB like a shinobi masters every technique.
        </p>
        <p className="reveal reveal-delay-2">
          Hands-on with Docker, CI/CD, and Generative AI through Google Cloud GenAI
          and OpenAI. Currently expanding mastery into AWS and cloud architecture.
        </p>
        <div className="about-stats reveal reveal-delay-3">
          {[['3+','Years Active'],['15+','Skills Mastered'],['7+','Major Projects']].map(([n,l]) => (
            <div key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
//  SKILLS
// ═══════════════════════════════════════════════════════
export function Skills() {
  useReveal('skills')
  return (
    <section id="skills">
      <div className="chapter-tag">Chapter 02 — The Arsenal</div>
      <div className="skills-header reveal">
        <h2>TECH<br /><span>STACK</span></h2>
      </div>
      <div className="glow-line" />
      <div className="skills-grid reveal reveal-delay-1">
        {SKILLS.map(skill => (
          <div key={skill.name} className="skill-card">
            <div className="skill-card-name">{skill.name}</div>
            <div className="skill-card-tags">
              {skill.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
//  EXPERIENCE
// ═══════════════════════════════════════════════════════
export function Experience() {
  useReveal('experience')
  return (
    <section id="experience">
      <div className="chapter-tag">Chapter 03 — The Journey</div>
      <div className="exp-header">
        <h2 className="reveal">WAR<br />RECORDS</h2>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-meta">{exp.period} · {exp.location}</div>
            <div className="timeline-title">{exp.company}</div>
            <div className="timeline-role">{exp.role}</div>
            <ul className="timeline-bullets">
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
//  PROJECTS  — "Built in Fire"
//  Arrow ↗ links to project.link if set
// ═══════════════════════════════════════════════════════
export function Projects() {
  useReveal('projects')
  return (
    <section id="projects">
      <div className="chapter-tag">Chapter 04 — Legendary Works</div>
      <div className="proj-header reveal">
        <h2>BUILT<br /><em>IN FIRE LATEST</em></h2>
      </div>
      <div className="projects-list reveal reveal-delay-1">
        {PROJECTS.map(proj => (
          <div key={proj.num} className="project-item">
            <div className="project-num">{proj.num}</div>
            <div className="project-content">
              <div className="project-title">{proj.title}</div>
              <div className="project-tech">
                {proj.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <p className="project-desc">{proj.desc}</p>
            </div>
            {/* Arrow only shows if link is set */}
            {proj.link ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="project-arrow"
                title="View project"
              >
                ↗
              </a>
            ) : (
              <div className="project-arrow project-arrow--disabled">↗</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
//  CERTIFICATIONS
// ═══════════════════════════════════════════════════════
export function Certifications() {
  useReveal('certifications')
  if (CERTIFICATIONS.length === 0) return null
  return (
    <section id="certifications">
      <div className="chapter-tag">Chapter 05 — Proof of Power</div>
      <div className="cert-header reveal">
        <h2>CERTIFIED<br /><em>OPERATOR</em></h2>
      </div>
      <div className="glow-line" />
      <div className="cert-grid">
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            className="cert-card reveal"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Badge pill */}
            <div
              className="cert-badge"
              style={{ background: BADGE_COLORS[cert.badge] ?? BADGE_COLORS.CUSTOM }}
            >
              {cert.badge}
            </div>
            <div className="cert-body">
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer} · {cert.year}</div>
            </div>
            {/* Verify button — only if URL is set */}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="cert-verify"
              >
                <span>VERIFY</span> ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
//  CONTACT
// ═══════════════════════════════════════════════════════
export function Contact() {
  useReveal('contact')
  return (
    <section id="contact">
      <div className="chapter-tag">Chapter 06 — The Call</div>
      <div className="contact-bg-text">CONNECT</div>
      <p className="contact-eyebrow reveal">// Open for collaboration</p>
      <h2 className="contact-title reveal reveal-delay-1">
        LET&apos;S<br /><span>BUILD</span>
      </h2>
      <div className="contact-links reveal reveal-delay-2">
        <a href={`mailto:${PERSONAL.email}`} className="contact-link"><span>✉ Email</span></a>
        <a href={`https://linkedin.com/in${PERSONAL.linkedin}`} target="_blank" rel="noreferrer" className="contact-link"><span>in LinkedIn</span></a>
        <a href={`https://github.com${PERSONAL.github}`} target="_blank" rel="noreferrer" className="contact-link"><span>⌥ GitHub</span></a>
      </div>
      <a href={`mailto:${PERSONAL.email}`} className="contact-email reveal reveal-delay-3">
        {PERSONAL.email}
      </a>
    </section>
  )
}
