import { GITHUB_URL, CONTACT_EMAIL } from '../config/site';

export function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page__grid">
        <div className="contact-page__left">
          <div className="contact-page__avatar-wrap">
            <div className="contact-page__avatar" aria-hidden>
              <span className="material-symbols-outlined contact-page__avatar-icon">person</span>
            </div>
            <div className="contact-page__note label-caps">Transition: page-to-page fade.</div>
          </div>
          <div>
            <h1 className="display-hero contact-page__title metallic-gradient-text">Say hello.</h1>
            <p className="body-lg contact-page__intro">
              Open for select creative collaborations and consulting opportunities for high-end professional
              identities.
            </p>
          </div>
        </div>

        <div className="contact-page__right">
          <a className="contact-page__github" href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
            <div className="contact-page__github-head">
              <div>
                <span className="label-caps contact-page__github-eyebrow">Engineering / source</span>
                <h2 className="headline-md contact-page__github-title">GitHub</h2>
              </div>
              <span className="material-symbols-outlined contact-page__github-icon" aria-hidden>
                code
              </span>
            </div>
            <div className="nav-item contact-page__github-handle">
              View profile
              <span className="material-symbols-outlined" aria-hidden>
                arrow_outward
              </span>
            </div>
          </a>

          <div className="contact-page__secondary">
            <div className="contact-page__field">
              <span className="label-caps contact-page__field-label">Email</span>
              <a className="headline-md contact-page__field-value" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="contact-page__field">
              <span className="label-caps contact-page__field-label">Socials</span>
              <div className="contact-page__social-row nav-item">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Behance</a>
              </div>
            </div>
          </div>

          <button type="button" className="btn-outline-gold nav-item contact-page__cta">
            Inquiry form
            <span className="material-symbols-outlined" aria-hidden>
              send
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
