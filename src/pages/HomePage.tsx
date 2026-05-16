import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__grid">
        <div className="home-page__hero">
          <h1 className="visually-hidden">Tony</h1>
          <p className="label-caps home-page__eyebrow">Multidisciplinary Design Practice</p>
          <div className="editorial-line home-page__rule" />
          <div className="home-page__split">
            <p className="body-lg home-page__lead">
              Crafting digital experiences that balance architectural precision with cinematic atmosphere.
              Specializing in high-end luxury interfaces and technical artistry.
            </p>
            <div className="home-page__cta-wrap">
              <Link to="/works" className="btn-outline-gold nav-item">
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <aside className="home-page__note" aria-label="Design note">
        <div className="home-page__note-inner">
          <span className="material-symbols-outlined home-page__note-icon" aria-hidden>
            info
          </span>
          <div>
            <p className="label-caps home-page__note-title">System note</p>
            <p className="body-md home-page__note-body">
              Transition: fade in/out between routes. No scroll-driven motion effects.
            </p>
          </div>
        </div>
      </aside>

      <div className="home-page__coords label-caps" aria-hidden>
        <p>
          <span className="home-page__coord-line" /> LAT 40.7128° N
        </p>
        <p>
          <span className="home-page__coord-line" /> LON 74.0060° W
        </p>
      </div>
    </div>
  );
}
