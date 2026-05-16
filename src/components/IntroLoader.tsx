import { useEffect, useState } from 'react';
import './IntroLoader.css';

type IntroLoaderProps = {
  onComplete: () => void;
  minMs?: number;
};

export function IntroLoader({ onComplete, minMs = 2200 }: IntroLoaderProps) {
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const t = window.setTimeout(() => setPhase('out'), minMs);
    return () => window.clearTimeout(t);
  }, [minMs]);

  useEffect(() => {
    if (phase !== 'out') return;
    const t = window.setTimeout(onComplete, 520);
    return () => window.clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <div className={`intro-loader intro-loader--${phase}`} role="status" aria-live="polite">
      <div className="intro-loader__ambience" aria-hidden />
      <main className="intro-loader__main">
        <div className="intro-loader__crt">
          <div className="intro-loader__scanlines" aria-hidden />
          <div className="intro-loader__vignette" aria-hidden />
          <div className="intro-loader__static" aria-hidden />
          <div className="intro-loader__curve" aria-hidden />
          <div className="intro-loader__content">
            <div className="intro-loader__brand">
              <h1 className="display-hero intro-loader__title">TONY</h1>
              <div className="intro-loader__rule" />
            </div>
            <div className="intro-loader__status">
              <span className="label-caps intro-loader__warming">WARMING UP...</span>
              <div className="intro-loader__bar-track">
                <div className="intro-loader__bar-fill" />
              </div>
            </div>
            <div className="intro-loader__meta label-caps" aria-hidden>
              <p>SIGNAL: STABLE</p>
              <p>RESOLUTION: 4K LUXE</p>
              <p>MODEL: T_2024_A_V1</p>
            </div>
          </div>
          <div className="intro-loader__knobs" aria-hidden>
            <span />
            <span />
          </div>
          <span className="intro-loader__hifi label-caps" aria-hidden>
            HIGH FIDELITY
          </span>
        </div>
        <p className="label-caps intro-loader__copyright">© 2026 TONY. ALL RIGHTS RESERVED.</p>
      </main>
    </div>
  );
}
