import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { DecisionToggle } from '@/app/components/DecisionToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#')}
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold tracking-tight z-50"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Agatha
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Selbach
            </span>
          </motion.button>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            {/* Controls */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-800">
              {/* Decision Mode Toggle */}
              <DecisionToggle />

              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <Globe className="w-4 h-4" />
                </motion.button>

                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute right-0 mt-2 w-20 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'pt' | 'es');
                          setShowLangMenu(false);
                        }}
                        className={`w-full px-3 py-2 text-xs text-center hover:bg-gray-800 transition-colors ${
                          language === lang.code
                            ? 'text-purple-400 font-medium bg-purple-500/10'
                            : 'text-gray-400'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative ml-2 px-5 py-2.5 rounded-lg overflow-hidden"
              >
                {/* Button gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-sm font-medium text-white">
                  {t('nav.talkToMe')}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden z-50">
            {/* Decision Mode Toggle - Mobile */}
            <DecisionToggle />

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-800">
                <p className="px-4 text-xs text-gray-500 uppercase tracking-wider mb-3">
                  Language
                </p>
                <div className="flex gap-2 px-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'en' | 'pt' | 'es');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
                        language === lang.code
                          ? 'text-purple-400 font-medium bg-purple-500/20 border border-purple-500/50'
                          : 'text-gray-400 bg-gray-800/50 border border-gray-700/50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                {t('nav.talkToMe')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
