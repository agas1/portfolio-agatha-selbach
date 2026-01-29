import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', gradient: 'from-purple-400 to-purple-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', gradient: 'from-purple-400 to-purple-500' },
    { icon: Mail, href: 'mailto:agathaselbach26@gmail.com', label: 'Email', gradient: 'from-purple-400 to-purple-500' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background gradient - optimized */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-[60px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-12 py-16 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo and info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Agatha
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Selbach
              </span>
            </h3>
            <p className="text-gray-500">{t('footer.role')}</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="group relative p-3 rounded-xl"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />
                <div className="relative p-2 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-transparent transition-all">
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-center text-sm text-gray-500"
        >
          <p>© 2026 Agatha Selbach. All rights reserved.</p>
          <p className="flex items-center gap-2">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-purple-500 animate-pulse" /> {t('footer.andCode')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
