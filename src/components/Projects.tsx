import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ecommerce website',
    description: 'A futuristic brain-computer interface for direct neural communication.',
    tech: ['HTML', 'Css', 'php', ],
    image: '/src/images/e-com.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Hostel Management Software',
    description: 'Interactive visualization of quantum computing principles and algorithms.',
    tech: ['python', 'TKinter ', 'D3.js', 'GLSL'],
    image: 'src/imges/Screenshot 2025-05-10 104252.png',
    link: '#',
  },
  {
    id: 3,
    title: 'IGRIS AI',
    description: 'An advanced AI chatbot powered by machine learning, featuring natural language processing and real-time responses for enhanced user interaction.',
    tech: ['React + Vite', 'Node.js', 'Natural Language Processing', 'API Integration'],
    image: 'src/imges/Screenshot 2025-05-10 104521.png',
    link: '#',
  },
  
];

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-space-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Exploring the frontiers of technology through innovative digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="overflow-hidden rounded-xl glass-panel group"
            >
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-neon-blue/20 z-10 group-hover:opacity-0 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent z-10" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs py-1 px-2 rounded-full bg-space-blue text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-neon-blue hover:text-neon-teal transition-colors duration-300"
                >
                  <span className="mr-1">View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(67, 97, 238, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-neon-blue text-neon-blue hover:bg-neon-blue/10 py-2 px-6 rounded-full font-medium"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;