export default function Hero() {
  return (
    <section id="hero">
      <div className="chapter-tag">Chapter 00 — Genesis</div>

      <div className="hero-layout">

        {/* ══════════════════════════
            LEFT — Name + tags
        ══════════════════════════ */}
        <div className="hero-center">

          <p className="hero-eyebrow">// Full-Stack Developer · India</p>

          <h1 className="hero-name" data-text="NALLI">
            <span className="line1">NALLI</span>
            <span className="line2">SHALEM</span>
          </h1>

          <p className="hero-sub">
            Vue &nbsp;&middot;&nbsp; <span>React &nbsp;&middot;&nbsp;</span> Angular &nbsp;&middot;&nbsp;
            <span>Node.js</span> &nbsp;&middot;&nbsp; MongoDB &nbsp;&middot;&nbsp; <span>AI</span>
          </p>

          {/* ── Availability tag ── */}
          <div className="hero-available">
            <span className="hero-available-dot" />
            Looking for Full-Time &nbsp;/&nbsp; Remote &nbsp;/&nbsp; Freelance — Anywhere
          </div>

          {/* ── Bottom row: Apple Music + Resume button ── */}
          <div className="hero-bottom-row">

            {/* Apple Music Now Playing
                ✏️ Change href to your Apple Music song link
                ✏️ Change song name text below             */}
            <a
              href="https://music.apple.com/song/montero/1560735414"
              target="_blank"
              rel="noreferrer"
              className="hero-nowplaying"
            >
              {/* Apple Music logo */}
              <svg
                className="hero-nowplaying-applelogo"
                viewBox="0 0 361 361"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="361" height="361" rx="80" fill="#fc3c44"/>
                <path
                  d="M255 178.5v-78l-110 20v88.3c-4-1.8-8.5-2.8-13.3-2.8-17 0-30.7 12.1-30.7 27s13.7 27 30.7 27 30.7-12.1 30.7-27V152l84-15.3v63.6c-4-1.8-8.5-2.8-13.3-2.8-17 0-30.7 12.1-30.7 27s13.7 27 30.7 27 30.6-12.1 30.6-27V178.5z"
                  fill="white"
                />
              </svg>

              <div className="hero-nowplaying-text">
                <span className="hero-nowplaying-label">NOW PLAYING</span>
                {/* ✏️ Your song — Artist */}
                <span className="hero-nowplaying-song">Montero — Lil Nas X</span>
              </div>

              {/* Animated equaliser bars */}
              <div className="hero-nowplaying-bars">
                <span /><span /><span /><span />
              </div>
            </a>

            {/* Resume download button
                ✏️ Put your resume PDF in /public/resume.pdf */}
            <a
              href="/resume.pdf"
              download="Nalli_Shalem_Resume.pdf"
              className="hero-resume-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>

          </div>

        </div>

        {/* ══════════════════════════
            RIGHT — Profile photo
        ══════════════════════════ */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">

            {/* Red corner brackets */}
            <div className="hero-photo-corner tl" />
            <div className="hero-photo-corner tr" />
            <div className="hero-photo-corner bl" />
            <div className="hero-photo-corner br" />

            {/* Animated scan line */}
            <div className="hero-photo-scan" />

            {/* ✏️ Put your photo in /public/profile.jpg */}
            <img
              src="/profile.png"
              alt="Nalli Shalem"
              className="hero-photo-img"
            />

            {/* Dark gradient overlay */}
            <div className="hero-photo-overlay" />

          </div>
          <div className="hero-photo-label">NALLI_SHALEM.exe</div>
        </div>

      </div>

      {/* Vertical contact text — bottom right */}
      <div className="hero-corner-text">shalemn3@gmail.com · /shalemnalli</div>

      {/* Scroll indicator — bottom centre */}
      <div className="hero-scroll">
        <div className="scroll-label">Scroll to begin</div>
        <div className="scroll-arrow" />
      </div>

    </section>
  )
}