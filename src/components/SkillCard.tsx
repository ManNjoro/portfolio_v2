import React from "react";
import { motion } from "framer-motion";
export const SkillCard = ({ skill, logo }: { skill: string }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="text-center p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
    >
      <span className="font-medium text-slate-200">{skill}</span>
    </motion.div>
  );
};
