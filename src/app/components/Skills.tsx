import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t('skills.frontend'),
      color: 'purple',
      gradient: 'from-purple-500 to-purple-400',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Figma', level: 85 },
      ],
    },
    {
      category: t('skills.backend'),
      color: 'purple',
      gradient: 'from-purple-400 to-purple-300',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      category: t('skills.devopsTools'),
      color: 'purple',
      gradient: 'from-purple-500 to-purple-400',
      skills: [
        { name: 'Docker / K8s', level: 85 },
        { name: 'AWS / GCP', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Git / GitHub', level: 95 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', color: 'from-emerald-400 to-emerald-600' },
    { name: 'PostgreSQL', color: 'from-blue-400 to-indigo-600' },
    { name: 'MongoDB', color: 'from-green-400 to-green-600' },
    { name: 'Redis', color: 'from-red-400 to-red-600' },
    { name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' },
    { name: 'Figma', color: 'from-purple-400 to-pink-600' },
    { name: 'GraphQL', color: 'from-pink-400 to-pink-600' },
  ];

  return (
    <section id="skills" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects - optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-[1400px] mx-auto px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            {t('skills.title')}
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('skills.heading1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('skills.heading2')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500`} />

              <div className="relative h-full p-8 rounded-2xl bg-gray-950/80 backdrop-blur-sm border border-gray-800 group-hover:border-transparent transition-all">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`} />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
            {t('skills.alsoWorkWith')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-300`} />

                <div className="relative px-5 py-3 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-transparent transition-all">
                  <span className={`font-medium bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
