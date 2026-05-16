const projects = [
  { title: 'Aura Systems', tag: 'Brand identity / Web design' },
  { title: 'Nocturnal Lab', tag: 'Creative direction / 3D art' },
  { title: 'Vortex Collective', tag: 'Motion design / Interaction' },
  { title: 'Primal Echoes', tag: 'Experimental UI / Sonic design' },
] as const;

export function WorksPage() {
  return (
    <div className="works-page">
      <header className="works-page__header">
        <div>
          <span className="label-caps works-page__eyebrow">Portfolio</span>
          <h1 className="display-hero works-page__title">Selected works.</h1>
        </div>
        <p className="body-lg works-page__dek">
          A curation of digital experiences crafted with precision and editorial discipline.
        </p>
      </header>

      <div className="works-page__grid">
        {projects.map((p) => (
          <article key={p.title} className="works-page__card">
            <div className="works-page__thumb">
              <span className="label-caps works-page__thumb-label">Thumbnail placeholder</span>
            </div>
            <div className="works-page__card-foot">
              <div>
                <h3 className="headline-md works-page__card-title">{p.title}</h3>
                <p className="label-caps works-page__card-tag">{p.tag}</p>
              </div>
              <span className="material-symbols-outlined works-page__arrow" aria-hidden>
                north_east
              </span>
            </div>
          </article>
        ))}
      </div>

      <section className="works-page__instruction">
        <div>
          <h4 className="label-caps works-page__instruction-title">System instruction</h4>
          <p className="body-lg works-page__instruction-body">
            Transition: page-to-page fade. High-fidelity visual persistence during navigation events.
          </p>
        </div>
        <button type="button" className="btn-outline-gold nav-item">
          View archive
        </button>
      </section>
    </div>
  );
}
