import HomeExperience from './HomeExperience'
import Icon from '../components/Icon'
import { profile } from '../data/profile'
import styles from './home.module.css'

export default function Home() {
  return (
    <HomeExperience>
      <div className={`site-shell ${styles.content}`}>
        <section className="content-section" id="services" aria-labelledby="services-title">
          <h2 id="services-title" data-fade>What I can help with.</h2>
          <div className={styles.serviceList}>
            <article data-fade>
              <h3>Business systems &amp; automation</h3>
              <p>Lark / Feishu and CRM integration. Automate repetitive work, expense reimbursements and commission calculations.</p>
            </article>
            <article data-fade data-delay="70">
              <h3>Websites &amp; web apps</h3>
              <p>UI / UX design, full-stack development, deployment and ongoing maintenance.</p>
            </article>
            <article data-fade data-delay="140">
              <h3>iOS apps</h3>
              <p>App planning, development and ongoing support.</p>
            </article>
          </div>
        </section>
        <section className="content-section" id="approach" aria-labelledby="approach-title">
          <div className="section-intro" data-fade>
            <h2 id="approach-title">From the first chat<br />to the day-to-day<span className="pink-period">.</span></h2>
            <p>A defined project or an ongoing partnership. We can work out what makes sense for you.</p>
          </div>
          <ol className={styles.process}>
            <li data-fade><h3>Understand &amp; plan</h3><p>We look at your current process, what gets in the way, and what a useful solution would look like. Then I design the approach around your needs and budget.</p></li>
            <li data-fade data-delay="70"><h3>Build &amp; deliver</h3><p>I develop the solution, test how it works, and help you get it into use.</p></li>
            <li data-fade data-delay="140"><h3>Maintain &amp; improve</h3><p>After delivery, I can help with monitoring, maintenance, and changes as your business grows.</p></li>
          </ol>
        </section>
        <section className="philosophy content-section" aria-labelledby="philosophy-title">
          <div className="philosophy-profile" data-fade>
            <h2 id="philosophy-title">How I think.</h2>
            <div className="profile-details">
              <p className="profile-role">{profile.role}</p>
              <p className="profile-location">{profile.location}</p>
              <p className="certification">AWS Certified Solutions Architect – Associate</p>
              <nav className="profile-links" aria-label="Connect with James">
                <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="arrow" /></a>
                <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrow" /></a>
              </nav>
            </div>
          </div>
          <blockquote data-fade data-delay="70">Humans are great, but we make mistakes. If something else can do the job more reliably, <span>why not use it?</span></blockquote>
        </section>
        <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.handle}</span><span>A little curiosity. A lot of possibility. <span className="footer-star" aria-hidden="true"><Icon name="asterisk" /></span></span></footer>
      </div>
    </HomeExperience>
  )
}
