import { motion } from 'motion/react';
import { Download, Code, Zap, Cloud, Boxes, Github, Linkedin, Mail } from 'lucide-react';
import { TechIcon } from './TechIcon';
import profileImage from 'figma:asset/7838df85c072f0a934bcbac0bdeaf00d8b0d2e65.png';
import shopyverseImage from 'figma:asset/9fe5802b2e87d0a1e9a3bb9a8a17baec83f53a3c.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cvEn from '../assets/CV_vignau_lucas_2025_en.pdf';
import cvFr from '../assets/CV_vignau_lucas_2025_fr.pdf'; 

interface HomePageProps {
  language: 'en' | 'fr';
  onNavigateToProjects: () => void;
}

export function HomePage({ language, onNavigateToProjects }: HomePageProps) {
  const translations = {
    en: {
      greeting: "Hi, I'm Lucas VIGNAU",
      role: "Software Engineer — Polytech Montpellier Graduate",
      seeking: "Seeking a Full-Stack Software Engineer position starting November 2026",
      downloadCV: "Download CV",
      latestProject: "Latest Project",
      projectTitle: "Shopify E-Commerce Platform",
      projectDesc: "Complete e-commerce solution built with modern technologies",
      viewProject: "View Project",
      seeAllProjects: "See All Projects",
      specialties: "Specialties",
      fullStack: "Full-Stack Development",
      agile: "Agile & DevOps Practices",
      cloud: "Cloud & API Design",
      architecture: "Software Architecture & Testing",
      skills: "My Technical Skills",
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      tools: "Tools",
      footer: '© 2025 Lucas VIGNAU – Built with passion 💙',
    },
    fr: {
      greeting: "Bonjour, je suis Lucas VIGNAU",
      role: "Ingénieur diplômé de Polytech Montpellier en informatique et gestion",
      seeking: "À la recherche d’un poste d’ingénieur logiciel Full-Stack dès novembre 2026",
      downloadCV: "Télécharger CV",
      latestProject: "Dernier Projet",
      projectTitle: "Plateforme E-Commerce Shopify",
      projectDesc: "Solution e-commerce complète construite avec des technologies modernes",
      viewProject: "Voir le Projet",
      seeAllProjects: "Voir Tous les Projets",
      specialties: "Spécialités",
      fullStack: "Développement Full-Stack",
      agile: "Pratiques Agile & DevOps",
      cloud: "Cloud & Conception d'API",
      architecture: "Architecture Logicielle & Tests",
      skills: "Mes Compétences Techniques",
      languages: "Langages",
      frameworks: "Frameworks",
      databases: "Bases de Données",
      tools: "Outils",
      footer: '© 2025 Lucas VIGNAU – Créé avec passion 💙',
    },
  };

  const t = translations[language];

  const technologies = {
    languages: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C' },
      { name: 'HTML/CSS' },
    ],
    frameworks: [
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Node.js' },
      { name: 'Express' },
    ],
    databases: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
    ],
    tools: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'VS Code' },
      { name: 'IntelliJ' },
      { name: 'Figma' },
      { name: 'Postman' },
    ],
  };

  const cvHref = language === 'fr' ? cvFr : cvEn;
  const cvDownloadName = language === 'fr'
  ? 'CV_Lucas_VIGNAU_FR.pdf'
  : 'CV_Lucas_VIGNAU_EN.pdf';

  return (
    <div className="container mx-auto px-6 pt-24 pb-24 md:pt-28 md:pb-24 space-y-24 relative z-10">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center min-h-0 md:min-h-[65vh]"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              {t.greeting}
            </h1>
            <h2 className="text-foreground mt-4">
              {t.role}
            </h2>
            <p className="text-muted-foreground mt-4">
              {t.seeking}
            </p>
          </motion.div>

          <motion.a
            href={cvHref}
            download={cvDownloadName}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transition-all"
          >
            <Download className="w-5 h-5" />
            {t.downloadCV}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img
              src={profileImage}
              alt="Lucas VIGNAU"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/50"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Latest Project Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.latestProject}
        </h2>

        <motion.div
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
          className="bg-card border border-border rounded-lg overflow-hidden transition-all"
        >
          <div className="aspect-video relative">
            <ImageWithFallback
              src={shopyverseImage}
              alt="Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-foreground">{t.projectTitle}</h3>
            <p className="text-muted-foreground">{t.projectDesc}</p>
            <div className="flex gap-4">
              <motion.button
                onClick={onNavigateToProjects}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                <Github className="w-4 h-4" />
                {t.seeAllProjects}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Specialties Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.specialties}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: t.fullStack, color: 'from-blue-500 to-blue-600' },
            { icon: Zap, title: t.agile, color: 'from-cyan-500 to-cyan-600' },
            { icon: Cloud, title: t.cloud, color: 'from-purple-500 to-purple-600' },
            { icon: Boxes, title: t.architecture, color: 'from-pink-500 to-pink-600' },
          ].map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)' }}
              className="bg-card border border-border rounded-lg p-6 text-center space-y-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className={`inline-block p-4 rounded-full bg-gradient-to-br ${specialty.color}`}
              >
                <specialty.icon className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-foreground">{specialty.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {t.skills}
        </h2>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-foreground mb-6 text-center">
                {t[category as keyof typeof t] as string}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {items.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    }}
                    className="bg-card border border-border rounded-lg p-4 text-center space-y-2 cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <TechIcon name={tech.name} className="w-12 h-12" />
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}