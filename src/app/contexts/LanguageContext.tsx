import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.talkToMe': 'Talk to Me',

    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.role': 'Full Stack Developer',
    'hero.description': 'I transform ideas into incredible digital experiences. Specialized in creating modern, scalable, and user-centered web applications.',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact',

    // About
    'about.title': 'About Me',
    'about.heading1': 'Transforming ideas into',
    'about.heading2': 'digital experiences',
    'about.subtitle': 'Technology and innovation enthusiast developer, with 5+ years of experience creating digital solutions that make a difference.',
    'about.projectsDelivered': 'Projects Delivered',
    'about.happyClients': 'Happy Clients',
    'about.yearsExperience': 'Years of Experience',
    'about.satisfactionRate': 'Satisfaction Rate',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.devops': 'DevOps',
    'about.uiux': 'UI/UX',
    'about.frontendDesc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.backendDesc': 'Node.js, PostgreSQL, MongoDB',
    'about.devopsDesc': 'Docker, AWS, CI/CD, Git',
    'about.uiuxDesc': 'Design Systems, Accessibility, Performance',
    'about.journeyTitle': 'My Journey',
    'about.journeyText1': "I started my programming journey at 18 and since then I've been specializing in full stack development. My passion is creating applications that not only work perfectly, but also provide memorable experiences to users.",
    'about.journeyText2': 'I work with agile methodologies, code review, automated testing and always seek best development practices. I believe that good code is one that is clean, scalable and easy to maintain.',

    // Skills
    'skills.title': 'Skills',
    'skills.heading1': 'Technologies &',
    'skills.heading2': 'Tools',
    'skills.subtitle': 'Technologies and tools I master to create complete solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps & Tools',
    'skills.alsoWorkWith': 'I also work with:',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.heading1': 'Featured',
    'projects.heading2': 'Projects',
    'projects.subtitle': 'Some of the projects I recently developed',
    'projects.ecommerce.title': 'E-commerce Platform',
    'projects.ecommerce.description': 'Complete e-commerce platform with admin panel, shopping cart, integrated payment and review system.',
    'projects.dashboard.title': 'Analytics Dashboard',
    'projects.dashboard.description': 'Interactive dashboard for real-time data analysis with dynamic charts, advanced filters and report export.',
    'projects.social.title': 'Social Media App',
    'projects.social.description': 'Social network with post feed, likes and comments system, real-time chat and push notifications.',
    'projects.task.title': 'Task Management Tool',
    'projects.task.description': 'Kanban-style task management tool with drag-and-drop, team collaboration and cloud sync.',
    'projects.viewMore': 'View More Projects on GitHub',

    // Contact
    'contact.title': "Let's Talk",
    'contact.heading1': "Let's work",
    'contact.heading2': 'together?',
    'contact.subtitle': "I'm always open to new projects and opportunities. Get in touch!",
    'contact.infoTitle': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.available': 'Available for projects',
    'contact.availableTitle': 'Available for Freelance',
    'contact.availableText': "I'm accepting freelance projects and consulting. If you have an idea or project in mind, I'd love to talk about how I can help!",
    'contact.formTitle': 'Send a Message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.successMessage': 'Message sent successfully! (Demo)',
    'contact.modalTitle': 'Message Sent!',
    'contact.modalMessage': 'Thank you for getting in touch! I will respond to your message within 48 hours.',
    'contact.modalClose': 'Got it!',
    'contact.sending': 'Sending...',
    'contact.errorMessage': 'There was an error sending your message. Please try again or contact me directly via email.',

    // Footer
    'footer.role': 'Full Stack Developer',
    'footer.madeWith': 'Made with',
    'footer.andCode': 'and lots of code',
    'footer.by': 'by',
  },
  pt: {
    // Navbar
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.talkToMe': 'Fale Comigo',

    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedora Full Stack',
    'hero.description': 'Transformo ideias em experiências digitais incríveis. Especializada em criar aplicações web modernas, escaláveis e centradas no usuário.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contact': 'Contato',

    // About
    'about.title': 'Sobre Mim',
    'about.heading1': 'Transformando ideias em',
    'about.heading2': 'experiências digitais',
    'about.subtitle': 'Desenvolvedora apaixonada por tecnologia e inovação, com 5+ anos de experiência criando soluções digitais que fazem a diferença.',
    'about.projectsDelivered': 'Projetos Entregues',
    'about.happyClients': 'Clientes Satisfeitos',
    'about.yearsExperience': 'Anos de Experiência',
    'about.satisfactionRate': 'Taxa de Satisfação',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.devops': 'DevOps',
    'about.uiux': 'UI/UX',
    'about.frontendDesc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.backendDesc': 'Node.js, PostgreSQL, MongoDB',
    'about.devopsDesc': 'Docker, AWS, CI/CD, Git',
    'about.uiuxDesc': 'Design Systems, Acessibilidade, Performance',
    'about.journeyTitle': 'Minha Jornada',
    'about.journeyText1': 'Comecei minha jornada na programação aos 18 anos e desde então venho me especializando em desenvolvimento full stack. Minha paixão é criar aplicações que não apenas funcionam perfeitamente, mas também proporcionam experiências memoráveis aos usuários.',
    'about.journeyText2': 'Trabalho com metodologias ágeis, code review, testes automatizados e sempre busco as melhores práticas de desenvolvimento. Acredito que bom código é aquele que é limpo, escalável e fácil de manter.',

    // Skills
    'skills.title': 'Habilidades',
    'skills.heading1': 'Tecnologias &',
    'skills.heading2': 'Ferramentas',
    'skills.subtitle': 'Tecnologias e ferramentas que domino para criar soluções completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps & Ferramentas',
    'skills.alsoWorkWith': 'Também trabalho com:',

    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.heading1': 'Projetos em',
    'projects.heading2': 'Destaque',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi recentemente',
    'projects.ecommerce.title': 'Plataforma E-commerce',
    'projects.ecommerce.description': 'Plataforma completa de e-commerce com painel administrativo, carrinho de compras, pagamento integrado e sistema de avaliações.',
    'projects.dashboard.title': 'Dashboard Analytics',
    'projects.dashboard.description': 'Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos, filtros avançados e exportação de relatórios.',
    'projects.social.title': 'App de Rede Social',
    'projects.social.description': 'Rede social com feed de posts, sistema de likes e comentários, chat em tempo real e notificações push.',
    'projects.task.title': 'Ferramenta de Gerenciamento',
    'projects.task.description': 'Ferramenta de gerenciamento de tarefas estilo Kanban com drag-and-drop, colaboração em equipe e sincronização em nuvem.',
    'projects.viewMore': 'Ver Mais Projetos no GitHub',

    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.heading1': 'Vamos trabalhar',
    'contact.heading2': 'juntos?',
    'contact.subtitle': 'Estou sempre aberta a novos projetos e oportunidades. Entre em contato!',
    'contact.infoTitle': 'Informações de Contato',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.available': 'Disponível para projetos',
    'contact.availableTitle': 'Disponível para Freelance',
    'contact.availableText': 'Estou aceitando projetos freelance e consultorias. Se você tem uma ideia ou projeto em mente, adoraria conversar sobre como posso ajudar!',
    'contact.formTitle': 'Envie uma Mensagem',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.emailPlaceholder': 'seu@email.com',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto...',
    'contact.send': 'Enviar Mensagem',
    'contact.successMessage': 'Mensagem enviada com sucesso! (Demo)',
    'contact.modalTitle': 'Mensagem Enviada!',
    'contact.modalMessage': 'Obrigada por entrar em contato! Responderei sua mensagem em até 48 horas.',
    'contact.modalClose': 'Entendi!',
    'contact.sending': 'Enviando...',
    'contact.errorMessage': 'Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente por email.',

    // Footer
    'footer.role': 'Desenvolvedora Full Stack',
    'footer.madeWith': 'Feito com',
    'footer.andCode': 'e muito código',
    'footer.by': 'por',
  },
  es: {
    // Navbar
    'nav.about': 'Acerca',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.talkToMe': 'Háblame',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrolladora Full Stack',
    'hero.description': 'Transformo ideas en experiencias digitales increíbles. Especializada en crear aplicaciones web modernas, escalables y centradas en el usuario.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contacto',

    // About
    'about.title': 'Sobre Mí',
    'about.heading1': 'Transformando ideas en',
    'about.heading2': 'experiencias digitales',
    'about.subtitle': 'Desarrolladora apasionada por la tecnología y la innovación, con más de 5 años de experiencia creando soluciones digitales que marcan la diferencia.',
    'about.projectsDelivered': 'Proyectos Entregados',
    'about.happyClients': 'Clientes Satisfechos',
    'about.yearsExperience': 'Años de Experiencia',
    'about.satisfactionRate': 'Tasa de Satisfacción',
    'about.frontend': 'Frontend',
    'about.backend': 'Backend',
    'about.devops': 'DevOps',
    'about.uiux': 'UI/UX',
    'about.frontendDesc': 'React, TypeScript, Next.js, Tailwind CSS',
    'about.backendDesc': 'Node.js, PostgreSQL, MongoDB',
    'about.devopsDesc': 'Docker, AWS, CI/CD, Git',
    'about.uiuxDesc': 'Design Systems, Accesibilidad, Rendimiento',
    'about.journeyTitle': 'Mi Viaje',
    'about.journeyText1': 'Comencé mi viaje en la programación a los 18 años y desde entonces me he estado especializando en desarrollo full stack. Mi pasión es crear aplicaciones que no solo funcionan perfectamente, sino que también brindan experiencias memorables a los usuarios.',
    'about.journeyText2': 'Trabajo con metodologías ágiles, revisión de código, pruebas automatizadas y siempre busco las mejores prácticas de desarrollo. Creo que el buen código es aquel que es limpio, escalable y fácil de mantener.',

    // Skills
    'skills.title': 'Habilidades',
    'skills.heading1': 'Tecnologías y',
    'skills.heading2': 'Herramientas',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones completas',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devopsTools': 'DevOps y Herramientas',
    'skills.alsoWorkWith': 'También trabajo con:',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.heading1': 'Proyectos',
    'projects.heading2': 'Destacados',
    'projects.subtitle': 'Algunos de los proyectos que desarrollé recientemente',
    'projects.ecommerce.title': 'Plataforma E-commerce',
    'projects.ecommerce.description': 'Plataforma completa de comercio electrónico con panel de administración, carrito de compras, pago integrado y sistema de reseñas.',
    'projects.dashboard.title': 'Dashboard de Analíticas',
    'projects.dashboard.description': 'Dashboard interactivo para análisis de datos en tiempo real con gráficos dinámicos, filtros avanzados y exportación de informes.',
    'projects.social.title': 'App de Red Social',
    'projects.social.description': 'Red social con feed de publicaciones, sistema de likes y comentarios, chat en tiempo real y notificaciones push.',
    'projects.task.title': 'Herramienta de Gestión',
    'projects.task.description': 'Herramienta de gestión de tareas estilo Kanban con arrastrar y soltar, colaboración en equipo y sincronización en la nube.',
    'projects.viewMore': 'Ver Más Proyectos en GitHub',

    // Contact
    'contact.title': 'Hablemos',
    'contact.heading1': '¿Trabajamos',
    'contact.heading2': 'juntos?',
    'contact.subtitle': '¡Siempre estoy abierta a nuevos proyectos y oportunidades. Ponte en contacto!',
    'contact.infoTitle': 'Información de Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.available': 'Disponible para proyectos',
    'contact.availableTitle': 'Disponible para Freelance',
    'contact.availableText': 'Estoy aceptando proyectos freelance y consultorías. Si tienes una idea o proyecto en mente, ¡me encantaría hablar sobre cómo puedo ayudar!',
    'contact.formTitle': 'Enviar un Mensaje',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.successMessage': '¡Mensaje enviado con éxito! (Demo)',
    'contact.modalTitle': '¡Mensaje Enviado!',
    'contact.modalMessage': '¡Gracias por ponerte en contacto! Responderé tu mensaje en un máximo de 48 horas.',
    'contact.modalClose': '¡Entendido!',
    'contact.sending': 'Enviando...',
    'contact.errorMessage': 'Hubo un error al enviar tu mensaje. Inténtalo de nuevo o contáctame directamente por email.',

    // Footer
    'footer.role': 'Desarrolladora Full Stack',
    'footer.madeWith': 'Hecho con',
    'footer.andCode': 'y mucho código',
    'footer.by': 'por',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
