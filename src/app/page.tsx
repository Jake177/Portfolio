import ParticlePlayground from '../components/ParticlePlayground'
import Icon from '../components/Icon'
import { profile } from '../data/profile'

function Arrow() {
  return <span aria-hidden="true"><Icon name="arrow" /></span>
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#main" aria-label={`${profile.handle}, home`}>
          {profile.handle}<span className="brand-star" aria-hidden="true"><Icon name="asterisk" /></span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="header-contact" href={`mailto:${profile.email}`}>
          Email me <Arrow />
        </a>
      </header>

      <main id="main">
        <section className="opening" aria-labelledby="hero-title">
          <div className="opening-intro">
            <h1 id="hero-title">I solve business problems<br />with software.</h1>
          </div>

          <div className="opening-grid">
            <section className="services" id="services" aria-labelledby="services-title">
              <h2 id="services-title" className="services-title">What I can help with</h2>
              <div className="service-row">
                <h3>Business systems &amp; automation</h3>
                <p>Lark / Feishu and CRM integration. Automate repetitive work, expense reimbursements and commission calculations.</p>
              </div>
              <div className="service-row">
                <h3>Websites &amp; web apps</h3>
                <p>UI / UX design, full-stack development, deployment and ongoing maintenance.</p>
              </div>
              <div className="service-row">
                <h3>iOS apps</h3>
                <p>App planning, development and ongoing support.</p>
              </div>
            </section>

            <aside className="profile-column" aria-label="About James">
              <ParticlePlayground />
              <div className="profile-details">
                <p className="profile-role">{profile.role}</p>
                <p className="profile-location">{profile.location}</p>
                <p className="certification">AWS Certified Solutions Architect – Associate</p>
                <nav className="profile-links" aria-label="Connect with James">
                  <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
                  <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
                </nav>
              </div>
            </aside>
          </div>

        </section>

        <section className="collaboration content-section" id="approach" aria-labelledby="collaboration-title">
          <div className="section-intro">
            <h2 id="collaboration-title">From the first chat<br />to the day-to-day<span className="pink-period">.</span></h2>
            <p>A defined project or an ongoing partnership. We can work out what makes sense for you.</p>
          </div>
          <ol className="process-list">
            <li><h3>Understand &amp; plan</h3><p>We look at your current process, what gets in the way, and what a useful solution would look like. Then I design the approach around your needs and budget.</p></li>
            <li><h3>Build &amp; deliver</h3><p>I develop the solution, test how it works, and help you get it into use.</p></li>
            <li><h3>Maintain &amp; improve</h3><p>After delivery, I can help with monitoring, maintenance, and changes as your business grows.</p></li>
          </ol>
        </section>

        <section className="philosophy content-section" aria-labelledby="philosophy-title">
          <h2 id="philosophy-title">How I think.</h2>
          <blockquote>Humans are great, but we make mistakes. If something else can do the job more reliably, <span>why not use it?</span></blockquote>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">What are you<br />working on<span className="pink-period">?</span></h2>
            <p>Tell me about the idea, the process, or the thing that takes too much time.</p>
          </div>
          <div className="contact-details">
            <a className="hello-button" href={`mailto:${profile.email}`}>Email me <Arrow /></a>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>Project work &amp; ongoing collaboration.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.handle}</span><span>A little curiosity. A lot of possibility. <span className="footer-star" aria-hidden="true"><Icon name="asterisk" /></span></span></footer>
    </div>
  )
}
