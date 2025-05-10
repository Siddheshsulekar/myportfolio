import React from 'react';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-space-black flex flex-col items-center justify-center z-50"
    >
      <motion.div
        animate={{ 
          rotate: 360,
          transition: { 
            duration: 2, 
            ease: "linear",
            repeat: Infinity 
          } 
        }}
      >
        <Loader className="w-12 h-12 text-neon-blue" />
      </motion.div>
      
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-0.5 bg-neon-gradient mt-8 rounded-full"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-sm font-mono text-white/70"
      >
        Initializing portfolio experience...
      </motion.p>
    </motion.div>
  );
};