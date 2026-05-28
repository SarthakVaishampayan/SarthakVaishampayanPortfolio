import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Insights from './components/Insights';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import FloatingOrbs from './components/FloatingOrbs';

function App() {
  return (
    <div className="relative antialiased selection:bg-mint selection:text-black font-sans text-gray-300 min-h-screen">
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <FloatingOrbs />
      <Navbar />

      <div className="relative w-full overflow-hidden">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Insights />
        <Contact />
      </div>
    </div>
  );
}

export default App;
