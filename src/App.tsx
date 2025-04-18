import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseContent from './components/CourseContent';
import TargetAudience from './components/TargetAudience';
import Instructor from './components/Instructor';
import CourseStructure from './components/CourseStructure';
import RegistrationForm from './components/RegistrationForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header scrolled={scrolled} />
        <main>
          <Hero />
          <CourseContent />
          <TargetAudience />
          <Instructor />
          <CourseStructure />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;