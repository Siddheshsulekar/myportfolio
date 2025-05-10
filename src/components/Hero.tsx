import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-space-gradient overflow-hidden">
      <div className="scene-container interactive">
        <spline-viewer url="https://prod.spline.design/6MBa9V36Uyoek0Mm/scene.splinecode"></spline-viewer>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <div className="max-w-4xl text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">Futuristic</span> Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-white/80 mb-8 max-w-xl mx-auto"
          >
            Creating innovative digital experiences at the intersection of design and technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(67, 97, 238, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-blue text-white py-3 px-8 rounded-full font-medium"
            >
              Explore Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white/90 py-3 px-8 rounded-full font-medium hover:bg-white/10"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ArrowDownIcon className="w-10 h-10 text-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;