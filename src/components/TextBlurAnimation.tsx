import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const TextBlurAnimation = ({ children, className }: Props) => {
  const textElement = typeof children === "string" ? children : String(children);


  const words: string[] = textElement.split(" ");

  const [blurred, setBlurred] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Trigger blur removal after the text is fully displayed
  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        setBlurred(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  return (
    <motion.h2
      className={className}
      initial={{
        opacity: 0,
        transform: "translate3d(0,50px,0)",
      }}
      animate={{
        opacity: 1,
        transform: "translate3d(0,0,0)",
      }}
      transition={{
        duration: 1,
      }}
    >
      {/* Animate each word with a slight delay */}
      {words.map((word, index) => (
        <span key={index} className="inline-block">

        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(3px)",
          }}
          animate={{
            opacity: 1,
            filter: blurred ? "blur(3px)" : "blur(0px)",
          }}
          transition={{
            delay: index * 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 25,
            onComplete: () => {
              if (index === words.length - 1) {
                setAnimationComplete(true);
              }
            },
          }}
          className="inline-block"
          >
          {word}
        </motion.span>
        {index < words.length - 1 && <>&nbsp;</>}
          </span>
      ))}
    </motion.h2>
  );
};

export default TextBlurAnimation;
