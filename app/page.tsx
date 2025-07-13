
'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../lib/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
