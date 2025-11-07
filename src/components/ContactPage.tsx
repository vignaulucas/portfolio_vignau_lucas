import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';
import cvEn from '/Users/vignaulucas/Downloads/portfolio_vignau/src/assets/CV_vignau_lucas _english.pdf';
import cvFr from '/Users/vignaulucas/Downloads/portfolio_vignau/src/assets/CV_vignau_lucas 2025.pdf'; 

interface ContactPageProps {
  language: 'en' | 'fr';
  onNavigateToHome: () => void;
}

export function ContactPage({ language, onNavigateToHome }: ContactPageProps) {
  const translations = {
    en: {
      title: 'Contact Me',
      back: 'Back to Home',
      subtitle: 'Currently seeking a junior full-stack developer position or a pre-employment internship starting March 2026',
      getInTouch: 'Get in Touch',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Montpellier, France',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      downloadCV: 'Download CV',
      education: 'Education',
      educationTitle: 'Engineering Degree in Computer Science and Management',
      educationSchool: 'Polytech Montpellier – School of Engineering',
      educationPeriod: '2022 – 2026',
      educationDescription: 'Engineering degree equivalent to Master (M.Eng)',
      languages: 'Languages',
      languagesFr: 'French (Native)',
      languagesEn: 'English (Upper-Intermediate)',
      languagesEs: 'Spanish (Intermediate)',
      skills: 'Technical Skills',
      availability: 'Availability',
      availabilityText: 'Available from March 2026',
      footer: '© 2025 Lucas VIGNAU – Built with passion 💙',
    },
    fr: {
      title: 'Me Contacter',
      back: 'Retour à l\'Accueil',
      subtitle: 'Recherche actuellement un poste de développeur full stack junior ou un stage de pré-embauche à partir de mars 2026',
      getInTouch: 'Entrer en Contact',
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      locationValue: 'Montpellier, France',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      portfolio: 'Portfolio',
      downloadCV: 'Télécharger CV',
      education: 'Formation',
      educationTitle: 'Diplôme d\'Ingénieur en Informatique et Management',
      educationSchool: 'Polytech Montpellier – École d\'Ingénieurs',
      educationPeriod: '2022 – 2026',
      educationDescription: 'Diplôme d\'ingénieur équivalent Master (M.Eng)',
      languages: 'Langues',
      languagesFr: 'Français (Natif)',
      languagesEn: 'Anglais (Intermédiaire supérieur)',
      languagesEs: 'Espagnol (Intermédiaire)',
      skills: 'Compétences Techniques',
      availability: 'Disponibilité',
      availabilityText: 'Disponible à partir de mars 2026',
      footer: '© 2025 Lucas VIGNAU – Créé avec passion 💙',
    },
  };

  const cvHref = language === 'fr' ? cvFr : cvEn;
  const cvDownloadName = language === 'fr'
  ? 'CV_Lucas_VIGNAU_FR.pdf'
  : 'CV_Lucas_VIGNAU_EN.pdf';

  const t = translations[language];

  const contactInfo = [
    {
      icon: Mail,
      label: t.email,
      value: 'vignaulucas@gmail.com',
      link: 'mailto:vignaulucas@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: t.phone,
      value: '+33 6 17 88 03 08',
      link: 'tel:+33617880308',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: t.location,
      value: t.locationValue,
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: t.linkedin,
      value: 'Lucas Vignau',
      link: 'https://www.linkedin.com/in/lucas-vignau-41b1a32b3',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: t.github,
      value: 'vignaulucas',
      link: 'https://github.com/vignaulucas',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  const skillCategories = [
    {
      title: language === 'en' ? 'Languages' : 'Langages',
      skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML5/CSS3'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Angular', 'React', 'Node.js', 'Express', 'Spring Boot'],
    },
    {
      title: language === 'en' ? 'Databases' : 'Bases de données',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: language === 'en' ? 'Tools' : 'Outils',
      skills: ['GitLab', 'GitHub', 'VS Code', 'AWS CloudWatch', 'Jenkins', 'Docker', 'Confluence'],
    },
    {
      title: 'Tests & Quality',
      skills: ['JTest', 'Selenium', 'SonarQube'],
    },
  ];

  return (
    <div className="min-h-screen relative z-10">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 pt-24 pb-12"
      >
        <motion.button
          onClick={onNavigateToHome}
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.back}
        </motion.button>

        <h1 className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
          {t.title}
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 pb-24"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {t.getInTouch}
              </h2>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}
                    className="bg-card border border-border rounded-lg p-4 transition-all"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-full bg-gradient-to-br ${info.color}`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${info.color}`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={cvHref}
                download={cvDownloadName}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition-all"
              >
                <Download className="w-5 h-5" />
                {t.downloadCV}
              </motion.a>
            </motion.div>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {t.education}
              </h3>
              <div className="space-y-2">
                <p className="text-foreground">{t.educationTitle}</p>
                <p className="text-sm text-primary">{t.educationSchool}</p>
                <p className="text-sm text-muted-foreground">{t.educationPeriod}</p>
                <p className="text-sm text-muted-foreground italic">{t.educationDescription}</p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {t.languages}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t.languagesFr}</li>
                <li>• {t.languagesEn}</li>
                <li>• {t.languagesEs}</li>
              </ul>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white"
            >
              <h3 className="mb-2">{t.availability}</h3>
              <p>{t.availabilityText}</p>
            </motion.div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            {t.skills}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.2)' }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="border-t border-border py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <motion.a
              href="https://www.linkedin.com/in/lucas-vignau-41b1a32b3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/vignaulucas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:vignaulucas@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
          <p className="text-muted-foreground">{t.footer}</p>
        </div>
      </motion.footer>
    </div>
  );
}