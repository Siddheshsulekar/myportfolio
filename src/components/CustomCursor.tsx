import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  const variants = {
    default: {
      width: 36,
      height: 36,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
    },
    clicked: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(67, 97, 238, 0.2)',
      border: '1px solid rgba(67, 97, 238, 0.8)',
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(67, 97, 238, 0.2)',
      border: '2px solid rgba(67, 97, 238, 0.8)',
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor rounded-full mix-blend-difference"
        style={{ left: position.x, top: position.y }}
        animate={clicked ? 'clicked' : linkHovered ? 'link' : 'default'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="custom-cursor bg-white rounded-full w-3 h-3"
        style={{ left: position.x, top: position.y }}
        animate={{ 
          scale: clicked ? 0.5 : linkHovered ? 0.8 : 1,
          backgroundColor: linkHovered ? '#4361ee' : '#ffffff' 
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;