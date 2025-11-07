import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import shopyverseImage from 'figma:asset/9fe5802b2e87d0a1e9a3bb9a8a17baec83f53a3c.png';
import eventyImage from 'figma:asset/a7873e0d844a8e97dcac29945bd9c0ed9256b163.png';
import stikomImage from 'figma:asset/3e91919c908ba15bb7c9a34f7ebb8107d7b84fd5.png';
import festivalJeuImage from '../assets/festivalJeu.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsPageProps {
  language: 'en' | 'fr';
  onNavigateToHome: () => void;
}

export function ProjectsPage({ language, onNavigateToHome }: ProjectsPageProps) {
  const [filter, setFilter] = useState<string>('all');

  const translations = {
    en: {
      title: 'My Projects',
      back: 'Back to Home',
      all: 'All',
      viewGithub: 'View on GitHub',
      comingSoon: 'Coming Soon',
      footer: '© 2025 Lucas VIGNAU – Built with passion 💙',
    },
    fr: {
      title: 'Mes Réalisations',
      back: 'Retour à l\'Accueil',
      all: 'Tous',
      viewGithub: 'Voir sur GitHub',
      comingSoon: 'Bientôt Disponible',
      footer: '© 2025 Lucas VIGNAU – Créé avec passion 💙',
    },
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'Shopyverse E-Commerce Platform',
      titleFr: 'Plateforme E-Commerce Shopyverse',
      description: 'Complete e-commerce CMS platform with advanced DevOps infrastructure and microservices architecture',
      descriptionFr: 'Plateforme CMS e-commerce complète avec infrastructure DevOps avancée et architecture microservices',
      image: shopyverseImage,
      tags: ['React', 'Node.js', 'Docker', 'Kubernetes'],
      techCategory: 'React',
      github: 'https://github.com/AlexisChartier/shopyverse-infra',
    },
    {
      id: 2,
      title: 'Eventy - Event Discovery App',
      titleFr: 'Eventy - Application de Découverte d\'Événements',
      description: 'Mobile application for discovering and booking events, built with React Native and Spring Boot',
      descriptionFr: 'Application mobile pour découvrir et réserver des événements, développée avec React Native et Spring Boot',
      image: eventyImage,
      tags: ['React Native', 'Spring Boot', 'Java'],
      techCategory: 'React',
      github: 'https://github.com/Mattheo4427/Eventy',
    },
    {
      id: 3,
      title: 'Board Game Marketplace - Frontend',
      titleFr: 'Festival du Jeu de Montpellier - Frontend',
      description: 'Platform to buy and sell board games for Montpellier Game Festival - React frontend',
      descriptionFr: 'Plateforme pour acheter et vendre des jeux de société pour le Festival du Jeu de Montpellier - Frontend React',
      image: festivalJeuImage,
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      techCategory: 'React',
      github: 'https://github.com/vignaulucas/front_depot_vente_awi',
    },
    {
      id: 4,
      title: 'Board Game Marketplace - API',
      titleFr: 'Festival du Jeu de Montpellier - API',
      description: 'Backend API for the board game marketplace of Montpellier Game Festival',
      descriptionFr: 'API backend pour le marché de jeux de société du Festival du Jeu de Montpellier',
      image: festivalJeuImage,
      tags: ['Node.js', 'Express', 'MongoDB'],
      techCategory: 'Node.js',
      github: 'https://github.com/vignaulucas/api_depot_vente_awi',
    },
    {
      id: 5,
      title: 'Stikom ML Models',
      titleFr: 'Modèles ML Stikom',
      description: 'Machine learning models for soil composition prediction using Python and advanced ML algorithms',
      descriptionFr: 'Modèles d\'apprentissage automatique pour la prédiction de la composition des sols avec Python et algorithmes ML avancés',
      image: stikomImage,
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
      techCategory: 'Python',
      github: 'https://github.com/vignaulucas/stikomModels',
    },
  ];

  const techCategories = ['all', 'React', 'Node.js', 'Python'];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.techCategory === filter);

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

        <h1 className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-8">
          {t.title}
        </h1>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-3">
          {techCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-card border border-border hover:border-primary'
              }`}
            >
              {category === 'all' ? t.all : category}
            </motion.button>
          ))}
        </div>
      </motion.header>

      {/* Projects Grid */}
      <motion.section
        layout
        className="container mx-auto px-6 pb-24"
      >
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              }}
              className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-foreground">
                  {language === 'fr' ? project.titleFr : project.title}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'fr' ? project.descriptionFr : project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg w-full justify-center"
                  >
                    <Github className="w-4 h-4" />
                    {t.viewGithub}
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg w-full justify-center cursor-not-allowed">
                    <Github className="w-4 h-4" />
                    {t.comingSoon}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-border py-8"
        id="contact"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <motion.a
              href="https://www.linkedin.com/in/lucas-vignau-41b1a32b3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/vignaulucas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:vignaulucas@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Email"
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