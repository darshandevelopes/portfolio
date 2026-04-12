import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

const Skills = React.lazy(() => import('./components/Skills'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <React.Suspense fallback={<div className="h-64 flex items-center justify-center text-text-muted">Loading...</div>}>
          <Skills />
          <About />
          <Contact />
        </React.Suspense>
      </main>
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
