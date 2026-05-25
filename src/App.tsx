import { useEffect } from 'react'
import BackgroundScene from './components/BackgroundScene'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Skills, Experience, Projects, Certifications, Contact } from './components/Sections'
import { CERTIFICATIONS } from './utils/data'

export default function App() {
  const hasCerts = CERTIFICATIONS.length > 0
  // Total sections = hero + about + skills + exp + projects + (certs?) + contact
  const totalSections = hasCerts ? 7 : 6

  // Scroll dot active state
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const dots = document.querySelectorAll('.scroll-dot')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Array.from(sections).indexOf(entry.target as HTMLElement)
          dots.forEach(d => d.classList.remove('active'))
          dots[idx]?.classList.add('active')
        }
      })
    }, { threshold: 0.45 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Chapter tag reveal
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.2 })
    document.querySelectorAll('.chapter-tag').forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (i: number) =>
    document.querySelectorAll('section')[i]?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* Three.js background — z-index 0, pointerEvents none */}
      <BackgroundScene />

      {/* Nav — z-index 100 */}
      <Nav />

      {/* Scroll dots */}
      <div className="scroll-indicator">
        {Array.from({ length: totalSections }, (_, i) => (
          <div
            key={i}
            className={`scroll-dot${i === 0 ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

      {/* All page content — z-index 1, above canvas */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {hasCerts && <Certifications />}
        <Contact />
      </main>

      <footer>
        <span>© 2025 Nalli Shalem</span>
        <span>Full-Stack Developer · India</span>
        <span>+91 9958264114</span>
      </footer>
    </>
  )
}
