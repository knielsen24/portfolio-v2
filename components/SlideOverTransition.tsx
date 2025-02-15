import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = { children?: React.ReactNode };

const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function SlideOverTransition({ children }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={{ scale: 2 }}
      initial="hidden"
      variants={squareVariants}
      className="square">
      {children}
    </motion.div>
  );
}
