import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Download } from 'lucide-react';


const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Siddheshsulekar", label: "GitHub" },
   
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/siddhesh-sulekar-368336306/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "https://www.instagram.com/siddheshsulekar529/", label: "instagram" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-space-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Innovative developer and designer pushing the boundaries of digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <img 
                  src="../images/sidd2.png" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent opacity-70" />
                </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px -10px rgba(67, 97, 238, 0.7)" }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-space-gray hover:bg-neon-blue/20 text-white/80 hover:text-white transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Hi, I'm <span className="text-neon-blue">Siddhesh Sulekar</span>
            </h3>
            
            <div className="space-y-4 text-white/80 mb-8">
              <p>
                I'm a creative technologist specializing in building next-generation digital experiences. 
                With expertise in front-end development, 3D graphics, and UI/UX design, I push the boundaries 
                of what's possible on the web.
              </p>
              <p>
                My mission is to blend cutting-edge technology with stunning visuals to create immersive, 
                innovative digital products that leave a lasting impression. I'm particularly passionate about 
                3D experiences, WebGL, and interactive storytelling.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, experimenting with generative art, 
                or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-sm text-white/60 mb-1">Location</h4>
                <p>ganesh park ,phulewadi,kolhapur,maharashtra</p>
              </div>
              <div>
                <h4 className="text-sm text-white/60 mb-1">Experience</h4>
                <p>3+ Years</p>
              </div>
              <div>
                <h4 className="text-sm text-white/60 mb-1">Education</h4>
                <p>B-Tech Computer Science</p>
              </div>
              <div>
                <h4 className="text-sm text-white/60 mb-1">Specialization</h4>
                <p>Creative Technology</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(67, 97, 238, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-neon-gradient py-3 px-6 rounded-full font-medium text-white"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 -left-20 w-40 h-40 bg-neon-blue/30 rounded-full filter blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity: useTransform(opacity, o => o * 0.7) }}
        className="absolute bottom-1/4 -right-20 w-60 h-60 bg-neon-purple/20 rounded-full filter blur-3xl"
      />
    </div>
  );
};

export default About;