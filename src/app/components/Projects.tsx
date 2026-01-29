import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t('projects.dashboard.title'),
      description: t('projects.dashboard.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['Next.js', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t('projects.social.title'),
      description: t('projects.social.description'),
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['React', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: t('projects.task.title'),
      description: t('projects.task.description'),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tags: ['Vue.js', 'Python'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background effects - optimized */}
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
            <div className="relative h-full rounded-3xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-2 mb-4">
                  {projects[0].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{projects[0].title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{projects[0].description}</p>
                <div className="flex gap-3">
                  <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={projects[0].demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="flex gap-2 mb-3">
                  {projects[1].tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{projects[1].title}</h3>
                <p className="text-gray-400 text-sm mb-4 max-w-md">{projects[1].description}</p>
                <div className="flex gap-3">
                  <a href={projects[1].github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={projects[1].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    Ver projeto <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-2 mb-2">
                  {projects[2].tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{projects[2].title}</h3>
                <a href={projects[2].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors">
                  Ver projeto <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 lg:col-span-3 lg:row-span-1 group relative h-[280px] sm:h-[300px] lg:h-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
            <div className="relative h-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden group-hover:border-transparent transition-all">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex gap-1 mb-2">
                  {projects[3].tags.slice(0, 1).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{projects[3].title}</h3>
                <a href={projects[3].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors">
                  Ver <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
