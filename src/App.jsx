import React, { lazy, Suspense } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ParticleNetwork from './components/ParticleNetwork';
import BackToTop from './components/BackToTop';

// Lazy-loaded sections for faster initial load
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Insights = lazy(() => import('./components/Insights'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

const SectionFallback = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-[3px] border-mint/20 border-t-mint rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="relative antialiased selection:bg-mint selection:text-black font-sans text-gray-300 min-h-screen">
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <ParticleNetwork />
      <BackToTop />
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Insights />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
