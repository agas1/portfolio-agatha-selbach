import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, AlertCircle, Lightbulb, Scale, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useDecisionMode } from '@/app/contexts/DecisionModeContext';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  devMode: {
    problem: string;
    decision: string;
    tradeoff: string;
    result: string;
  };
}

function DevModeOverlay({ project, t }: { project: Project; t: (key: string) => string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
    >
      <div className="space-y-3 sm:space-y-4 text-sm">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-red-400 font-medium text-xs uppercase tracking-wider">{t('projects.devMode.problem')}</span>
            <p className="text-gray-300 mt-1 text-xs sm:text-sm">{project.devMode.problem}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-yellow-400 font-medium text-xs uppercase tracking-wider">{t('projects.devMode.decision')}</span>
            <p className="text-gray-300 mt-1 text-xs sm:text-sm">{project.devMode.decision}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Scale className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-orange-400 font-medium text-xs uppercase tracking-wider">{t('projects.devMode.tradeoff')}</span>
            <p className="text-gray-300 mt-1 text-xs sm:text-sm">{project.devMode.tradeoff}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-green-400 font-medium text-xs uppercase tracking-wider">{t('projects.devMode.result')}</span>
            <p className="text-green-300 mt-1 font-medium text-xs sm:text-sm">{project.devMode.result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const { isDevMode } = useDecisionMode();

  const projects: Project[] = [
    {
      id: 'iagente',
      title: t('projects.iagente.title'),
      description: t('projects.iagente.description'),
      image: '/img/iagente.png',
      tags: ['React', 'Node.js', 'AI/NLP'],
      github: 'https://github.com',
      demo: 'https://iagente.com.br',
      devMode: {
        problem: t('projects.iagente.problem'),
        decision: t('projects.iagente.decision'),
        tradeoff: t('projects.iagente.tradeoff'),
        result: t('projects.iagente.result'),
      },
    },
    {
      id: 'homefinder',
      title: t('projects.homefinder.title'),
      description: t('projects.homefinder.description'),
      image: '/img/homefinder.png',
      tags: ['Next.js', 'Elasticsearch'],
      github: 'https://github.com',
      demo: 'https://example.com',
      devMode: {
        problem: t('projects.homefinder.problem'),
        decision: t('projects.homefinder.decision'),
        tradeoff: t('projects.homefinder.tradeoff'),
        result: t('projects.homefinder.result'),
      },
    },
    {
      id: 'organo',
      title: t('projects.organo.title'),
      description: t('projects.organo.description'),
      image: '/img/organo.png',
      tags: ['React', 'DnD'],
      github: 'https://github.com',
      demo: 'https://example.com',
      devMode: {
        problem: t('projects.organo.problem'),
        decision: t('projects.organo.decision'),
        tradeoff: t('projects.organo.tradeoff'),
        result: t('projects.organo.result'),
      },
    },
    {
      id: 'meteora',
      title: t('projects.meteora.title'),
      description: t('projects.meteora.description'),
      image: '/img/meteora.png',
      tags: ['React', 'ML'],
      github: 'https://github.com',
      demo: 'https://example.com',
      devMode: {
        problem: t('projects.meteora.problem'),
        decision: t('projects.meteora.decision'),
        tradeoff: t('projects.meteora.tradeoff'),
        result: t('projects.meteora.result'),
      },
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            {t('projects.title')}
          </motion.span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('projects.heading1')}
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('projects.heading2')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Dev Mode Indicator */}
        <AnimatePresence>
          {isDevMode && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-center mb-8"
            >
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Developer Mode Active
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 sm:gap-6 lg:h-[700px]">
          {/* Large card - left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-5 lg:row-span-2 group relative h-[400px] sm:h-[450px] lg:h-auto"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-3xl opacity-0 ${isDevMode ? 'opacity-30' : 'group-hover:opacity-50'} blur transition-all duration-500`} />
            <div className="relative h-full rounded-3xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              {/* User Mode Content */}
              <AnimatePresence mode="wait">
                {!isDevMode ? (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
                  >
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {projects[0].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{projects[0].title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2 text-sm sm:text-base">{projects[0].description}</p>
                    <div className="flex gap-3">
                      <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={projects[0].demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <DevModeOverlay key="dev" project={projects[0]} t={t} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Top right card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 lg:col-span-7 lg:row-span-1 group relative h-[300px] sm:h-[320px] lg:h-auto"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 ${isDevMode ? 'opacity-30' : 'group-hover:opacity-50'} blur transition-all duration-500`} />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
              </div>

              <AnimatePresence mode="wait">
                {!isDevMode ? (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center"
                  >
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {projects[1].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{projects[1].title}</h3>
                    <p className="text-gray-400 text-sm mb-4 max-w-md">{projects[1].description}</p>
                    <div className="flex gap-3">
                      <a href={projects[1].github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={projects[1].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        {t('projects.viewProject')} <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <DevModeOverlay key="dev" project={projects[1]} t={t} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom right - two smaller cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 lg:col-span-4 lg:row-span-1 group relative h-[280px] sm:h-[300px] lg:h-auto"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 ${isDevMode ? 'opacity-30' : 'group-hover:opacity-50'} blur transition-all duration-500`} />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
              </div>

              <AnimatePresence mode="wait">
                {!isDevMode ? (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                  >
                    <div className="flex gap-2 mb-2 flex-wrap">
                      {projects[2].tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{projects[2].title}</h3>
                    <a href={projects[2].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors">
                      {t('projects.viewProject')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </motion.div>
                ) : (
                  <DevModeOverlay key="dev" project={projects[2]} t={t} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 lg:col-span-3 lg:row-span-1 group relative h-[280px] sm:h-[300px] lg:h-auto"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 ${isDevMode ? 'opacity-30' : 'group-hover:opacity-50'} blur transition-all duration-500`} />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
              </div>

              <AnimatePresence mode="wait">
                {!isDevMode ? (
                  <motion.div
                    key="user"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
                  >
                    <div className="flex gap-1 mb-2 flex-wrap">
                      {projects[3].tags.slice(0, 1).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{projects[3].title}</h3>
                    <a href={projects[3].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors">
                      {t('projects.viewProject')} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </motion.div>
                ) : (
                  <DevModeOverlay key="dev" project={projects[3]} t={t} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
