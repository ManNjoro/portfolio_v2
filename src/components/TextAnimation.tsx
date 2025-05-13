import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const TextAnimation = ({ children, className }: Props) => {
    const textElement = typeof children === 'string' ? children : String(children);

    const words: string[] = textElement.split(' ');

    return (
        <motion.h2
            className={className}
            initial={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animate={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            transition={{ duration: 1 }}
        >
            {words.map((word: string, index: number) => (
                <span key={index} className="inline-block">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: index * 0.3,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 100,
                            damping: 25,
                        }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 && <>&nbsp;</>}
                </span>
            ))}
        </motion.h2>
    );
};

export default TextAnimation;
