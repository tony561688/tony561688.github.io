const disciplines = [
  {
    id: '01',
    title: 'Art Direction',
    body: 'Defining visual languages that resonate with elite audiences through restraint and precision.',
    gridSpan: 8 as const,
  },
  {
    id: '02',
    title: 'UI / UX',
    body: 'Architecture for the sophisticated web.',
    gridSpan: 4 as const,
  },
  {
    id: '03',
    title: 'Motion',
    body: 'Fluidity in stillness.',
    gridSpan: 4 as const,
  },
  {
    id: '04',
    title: 'Photography',
    body: 'Capturing the cinematic reality of luxury products.',
    gridSpan: 8 as const,
  },
] as const;

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div className="about-page__hero-main">
          <h1 className="display-hero about-page__headline gold-gradient-text">HELLO WORLD</h1>
        </div>
        <aside className="about-page__sticky-note">
          <p className="label-caps about-page__sticky-label">Internal note</p>
          <p className="body-md about-page__sticky-body">Transition: page-to-page fade.</p>
        </aside>
      </section>

      <section className="about-page__profile">
        <div className="about-page__avatar-slot">
          <span className="label-caps about-page__avatar-label">Avatar placeholder</span>
        </div>
        <div className="about-page__bio">
          <p className="label-caps about-page__bio-label">Biography / philosophy</p>
          <p className="body-lg about-page__bio-lead">
            Based at the intersection of high-fashion aesthetics and technical precision—focused on digital
            experiences that command attention through structure, typography, and light.
          </p>
          <div className="editorial-line about-page__bio-rule" />
          <p className="body-md about-page__bio-secondary">
            Work is defined by the absence of noise: grids, type, and contrast create environments that feel as
            tangible as physical architecture.
          </p>
        </div>
      </section>

      <section className="about-page__bento">
        <h2 className="headline-md about-page__bento-title">Curated disciplines</h2>
        <div className="about-page__bento-grid">
          {disciplines.map((d) => (
            <article
              key={d.id}
              className={`about-page__bento-card about-page__bento-card--span-${d.gridSpan}`}
            >
              <span className="label-caps about-page__bento-id">
                {d.id}. {d.title}
              </span>
              <p className="body-md about-page__bento-body">{d.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
