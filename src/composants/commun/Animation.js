import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Animation({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default Animation;
