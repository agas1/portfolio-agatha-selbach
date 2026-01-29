import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Typing animation component
  const TypedText = ({ text, color, delay }: { text: string; color: string; delay: number }) => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        className={`${color} font-mono`}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + index * 0.03 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Optimized gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating tech badges - hidden on mobile, positioned away from text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden lg:block absolute top-[25%] left-[8%] xl:left-[12%] px-6 py-3 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/40 rounded-xl text-cyan-300 font-bold text-xl shadow-2xl shadow-cyan-500/20"
      >
        React
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="hidden lg:block absolute top-[20%] right-[8%] xl:right-[12%] px-5 py-2.5 bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/30 rounded-lg text-emerald-300/80 font-semibold text-base shadow-xl shadow-emerald-500/10 opacity-85"
      >
        Node.js
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="hidden lg:block absolute bottom-[30%] left-[6%] xl:left-[10%] px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 rounded-xl text-blue-300 font-bold text-xl shadow-2xl shadow-blue-500/20"
      >
        TypeScript
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
        className="hidden lg:block absolute bottom-[22%] right-[6%] xl:right-[10%] px-4 py-2 bg-gray-500/15 backdrop-blur-sm border border-gray-400/30 rounded-lg text-gray-300/70 font-semibold text-sm shadow-lg shadow-gray-500/10 opacity-75"
      >
        Next.js
      </motion.div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10 text-center">
        {/* Floating dots above the name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex gap-3 justify-center mb-6"
        >
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
          <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
          <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
        </motion.div>

        {/* Name - H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Agatha
          </span>{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Selbach
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light mb-8 sm:mb-10"
        >
          Full Stack Developer
        </motion.h2>

        {/* Code typing animation - no background box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-xs sm:text-base lg:text-lg">
            <div className="mb-2">
              <TypedText text='skills: ["React", "Node", "TypeScript"]' color="text-amber-400" delay={0.8} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <TypedText text='passion: "Creating amazing experiences"' color="text-pink-400" delay={2.2} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 3.5, duration: 1, repeat: Infinity }}
                className="w-2 h-5 bg-purple-500 inline-block"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4 sm:px-0"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm sm:text-base font-medium rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('hero.viewProjects')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 text-white text-sm sm:text-base font-medium rounded-xl hover:bg-white/5 hover:border-purple-500/50 transition-all backdrop-blur-sm"
          >
            {t('hero.contact')}
          </button>
        </motion.div>

        {/* Social links - centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:agathaselbach26@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group relative p-4 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 text-gray-400 hover:text-white bg-gray-900/50 backdrop-blur-sm"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-purple-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
