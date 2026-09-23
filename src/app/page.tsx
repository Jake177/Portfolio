import ParticlePlayground from '../components/ParticlePlayground'
import { profile } from '../data/profile'

function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label={`${profile.name}, home`}>
          james<span className="brand-star" aria-hidden="true">✳</span>
        </a>
        <p className="header-note">A LITTLE CORNER OF THE INTERNET</p>
        <a className="header-contact" href={`mailto:${profile.email}`}>
          LET’S TALK <Arrow />
        </a>
      </header>

      <main id="main">
        <div className="section-label"><span>01 / HELLO, WORLD</span><span>BASED IN MELBOURNE, AU</span></div>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Hey, I’m<br /><span className="name-line">James<span className="pink-period">.</span></span></h1>
            <p className="hero-statement">I build useful software<br className="desktop-break" /> with AI.</p>
            <p className="hero-bio">{profile.role} at<br /><strong>{profile.company}.</strong></p>
            <nav className="hero-links" aria-label="Connect with James">
              <a className="hello-button" href={`mailto:${profile.email}`}>Say hello <Arrow /></a>
              <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
            </nav>
          </div>
          <div className="hero-art">
            <div className="art-caption"><span className="caption-line" /><span>A WORK IN PLAY.</span><span aria-hidden="true">↙</span></div>
            <ParticlePlayground />
            <div className="art-note"><span aria-hidden="true">✳</span> A human behind the keyboard. Always.</div>
          </div>
        </section>

        <aside className="about-strip" aria-label="A little about me">
          <div className="strip-title"><span className="eyebrow">THE SHORT VERSION</span><p>Curious mind.<br />Builder at heart.</p></div>
          <div className="strip-detail"><span className="eyebrow">HOW I BUILD</span><p>I turn ideas into working<br className="desktop-break" /> software with Codex.</p></div>
          <div className="strip-detail"><span className="eyebrow">WHERE I AM</span><p>{profile.location}<br /><span className="muted">Usually making something.</span></p></div>
        </aside>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>A little curiosity. A lot of possibility. <span className="footer-star" aria-hidden="true">✳</span></span></footer>
    </div>
  )
}
