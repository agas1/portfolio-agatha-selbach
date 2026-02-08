import { motion } from 'motion/react';
import { Code2, Database, Cloud, Palette, Zap, Users, Coffee, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: Code2,
      title: t('about.frontend'),
      description: t('about.frontendDesc'),
      gradient: 'from-cyan-500 to-blue-500',
      shadowColor: 'shadow-cyan-500/25',
    },
    {
      icon: Database,
      title: t('about.backend'),
      description: t('about.backendDesc'),
      gradient: 'from-emerald-500 to-teal-500',
      shadowColor: 'shadow-emerald-500/25',
    },
    {
      icon: Cloud,
      title: t('about.devops'),
      description: t('about.devopsDesc'),
      gradient: 'from-orange-500 to-amber-500',
      shadowColor: 'shadow-orange-500/25',
    },
    {
      icon: Palette,
      title: t('about.uiux'),
      description: t('about.uiuxDesc'),
      gradient: 'from-pink-500 to-rose-500',
      shadowColor: 'shadow-pink-500/25',
    },
  ];

  const stats = [
    { icon: Zap, value: '50+', labelKey: 'about.projectsDelivered', gradient: 'from-yellow-500 to-orange-500' },
    { icon: Users, value: '30+', labelKey: 'about.happyClients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Coffee, value: '5+', labelKey: 'about.yearsExperience', gradient: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '99%', labelKey: 'about.satisfactionRate', gradient: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section id="about" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background effects - optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            {t('about.title')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('about.heading1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('about.heading2')}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-4 sm:p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-3 sm:mb-4`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise cards - Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />

              {/* Card content */}
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-transparent transition-all">
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey section with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />

          <div className="relative rounded-2xl sm:rounded-3xl bg-gray-900/80 backdrop-blur-xl border border-gray-800 overflow-hidden">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

            <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      {t('about.journeyTitle')}
                    </span>
                  </h3>
                  <div className="space-y-4 sm:space-y-6 text-gray-400 leading-relaxed">
                    <p className="text-base sm:text-lg">
                      {t('about.journeyText1')}
                    </p>
                    <p className="text-base sm:text-lg">
                      {t('about.journeyText2')}
                    </p>
                  </div>
                </div>

                {/* Tech stack visual */}
                <div className="relative">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {['React', 'Node.js', 'TypeScript', 'Figma', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Next.js'].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -4 }}
                        className="px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl text-center text-xs sm:text-sm text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
