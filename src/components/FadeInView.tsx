import { motion } from "framer-motion";
import { ReactNode } from "react";
export const FadeInView = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
