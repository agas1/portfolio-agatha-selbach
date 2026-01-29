import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { DecisionModeProvider } from '@/app/contexts/DecisionModeContext';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider>
        <DecisionModeProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
        </DecisionModeProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}