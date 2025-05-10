import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, BrainCircuit, Blocks, PenTool, 
  Database, LineChart, Laptop, Sparkles 
} from 'lucide-react';

type Skill = {
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
};

const skillCategories = [
  {
    title: "Development",
    skills: [
      { 
        icon: <Code />, 
        name: "Frontend Development", 
        level: 90,
        color: "neon-blue" 
      },
      { 
        icon: <Database />, 
        name: "Backend Systems", 
        level: 85,
        color: "neon-purple" 
      },
      { 
        icon: <Blocks />, 
        name: "3D & WebGL", 
        level: 75,
        color: "neon-teal" 
      },
    ]
  },
  {
    title: "Design",
    skills: [
      { 
        icon: <PenTool />, 
        name: "UI/UX Design", 
        level: 80,
        color: "neon-pink" 
      },
      { 
        icon: <Laptop />, 
        name: "Interaction Design", 
        level: 85,
        color: "neon-green" 
      },
      { 
        icon: <Sparkles />, 
        name: "Motion Design", 
        level: 70,
        color: "neon-blue" 
      },
    ]
  },
  {
    title: "Other",
    skills: [
      { 
        icon: <BrainCircuit />, 
        name: "AI & Machine Learning", 
        level: 65,
        color: "neon-purple" 
      },
      { 
        icon: <LineChart />, 
        name: "Data Visualization", 
        level: 75,
        color: "neon-teal" 
      },
    ]
  }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center mb-2">
        <div className={`text-${skill.color} mr-2`}>{skill.icon}</div>
        <span className="font-medium">{skill.name}</span>
        <span className="ml-auto text-white/60">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-space-gray rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-full bg-${skill.color} rounded-full`}
          style={{
            background: `var(--tw-gradient-stops, linear-gradient(90deg, ${getColorValue(skill.color)} 0%, ${getColorValue(skill.color)}99 100%))`,
          }}
        />
      </div>
    </motion.div>
  );
};

// Helper function to get color values
function getColorValue(colorName: string): string {
  const colors: Record<string, string> = {
    'neon-blue': '#4361ee',
    'neon-purple': '#7209b7',
    'neon-pink': '#f72585',
    'neon-teal': '#4cc9f0',
    'neon-green': '#06d6a0',
  };
  
  return colors[colorName] || colors['neon-blue'];
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-space-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A diverse skillset for creating cutting-edge digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-panel p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient">{category.title}</h3>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating 3D geometric shapes as background elements */}
        <motion.div
          style={{ y }}
          className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-neon-blue/5 border border-neon-blue/20 filter blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute -left-20 top-40 w-60 h-60 rounded-full bg-neon-purple/5 border border-neon-purple/20 filter blur-lg"
        />
      </div>
    </div>
  );
};

export default Skills;