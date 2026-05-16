import { useRef } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ShellLayout.css';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/contact', label: 'Contact Me' },
  { to: '/works', label: 'Works' },
] as const;

export function ShellLayout() {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="page-shell">
      <div className="scanlines" aria-hidden />
      <div className="crt-vignette-global" aria-hidden />

      <header className="site-header">
        <Link
          to="/"
          className={location.pathname === '/' ? 'site-logo display-hero' : 'site-logo'}
        >
          TONY
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `site-nav__link nav-item${isActive ? ' site-nav__link--active' : ''}`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={{ enter: 360, exit: 280 }}
          classNames="fade"
        >
          <div ref={nodeRef} className="main-content">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>

      <footer className="site-footer">
        <span className="nav-item site-footer__brand">TONY</span>
        <span className="label-caps site-footer__copy">© 2026 TONY. ALL RIGHTS RESERVED.</span>
        <div className="site-footer__socials">
          <a href="#" className="label-caps site-footer__social">
            Instagram
          </a>
          <a href="#" className="label-caps site-footer__social">
            LinkedIn
          </a>
          <a href="#" className="label-caps site-footer__social">
            Behance
          </a>
        </div>
      </footer>
    </div>
  );
}
