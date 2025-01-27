import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import BlurText from "./BlurText";
import TextAnimation from "./TextAnimation";
import { IconType } from "react-icons";
import TextBlurAnimation from "./TextBlurAnimation";

interface SocialLinks {
  icon: IconType;
  href:string;
}

const socialMediaLinks: SocialLinks[] = [
  {
    icon: FaGithub,
    href: "https://github.com/ManNjoro",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/eli-john-gachago-306a23238/",
  },
  {
    icon: MdMail,
    href: "mailto:elijohnmwoho@gmail.com",
  },
]

export default function About() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative"
    >
      <div className="text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
            <BlurText
            text='React Native Developer'
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-purple-400"
            />
          <TextBlurAnimation className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Machine Learning Engineer & Data Scientist

          </TextBlurAnimation>
          <TextAnimation className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting intelligent mobile experiences and building data-driven
            solutions at the intersection of mobile development and artificial
            intelligence.
          </TextAnimation>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {socialMediaLinks.map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
