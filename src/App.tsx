import { useCallback, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { IntroLoader } from './components/IntroLoader';
import { ShellLayout } from './layout/ShellLayout';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import './pages/pages.css';

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const handleIntroComplete = useCallback(() => setIntroVisible(false), []);

  return (
    <>
      {introVisible && <IntroLoader onComplete={handleIntroComplete} />}
      <div
        className="app-root"
        style={{
          opacity: introVisible ? 0 : 1,
          pointerEvents: introVisible ? 'none' : 'auto',
          transition: 'opacity 0.45s ease',
        }}
      >
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
          <Routes>
            <Route element={<ShellLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
