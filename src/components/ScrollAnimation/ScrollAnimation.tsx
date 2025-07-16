import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import type { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
}

const ScrollAnimation = ({ children, delay = 0 }: ScrollAnimationProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;