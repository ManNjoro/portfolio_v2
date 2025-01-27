import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const TextBlurAnimation = ({ children, className }: Props) => {
  const textElement = typeof children === "string" ? children : String(children); // The text you want to animate

  // Split the text into an array of words
  const words: string[] = textElement.split(" ");

  const [blurred, setBlurred] = useState(true); // To control when to remove the blur
  const [animationComplete, setAnimationComplete] = useState(false); // To track when all text has appeared

  // Trigger blur removal after the text is fully displayed
  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        setBlurred(false); // Remove the blur after text animation is complete
      }, 500); // Wait for 500ms to let the text appear completely
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
            filter: "blur(3px)", // Start with a blur
          }}
          animate={{
            opacity: 1,
            filter: blurred ? "blur(3px)" : "blur(0px)", // Blur will be removed gradually
          }}
          transition={{
            delay: index * 0.3, // Delay each word by 0.3s
            duration: 0.5, // Duration of the animation
            type: "spring",
            stiffness: 100,
            damping: 25,
            onComplete: () => {
              if (index === words.length - 1) {
                setAnimationComplete(true); // Set flag when last word animation is done
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
