import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { useSprings, animated, easings } from '@react-spring/web';

interface Props {
    children: ReactNode;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: React.CSSProperties;
    animationTo?: React.CSSProperties[];
    onAnimationComplete?: () => void;
  
}

const BlurText = ({
children,
delay = 200,
className = '',
animateBy = 'words', // 'words' or 'letters'
direction = 'top', // 'top' or 'bottom'
threshold = 0.1,
rootMargin = '0px',
animationFrom,
animationTo,
onAnimationComplete,
}: Props) => {
const textString = typeof children === 'string' ? children : String(children);
const elements = animateBy === 'words' ? textString.split(' ') : textString.split('');
const [inView, setInView] = useState(false);
const ref = useRef<HTMLParagraphElement|null>(null);
const animatedCount = useRef(0);

// Default animations based on direction
const defaultFrom: React.CSSProperties = 
direction === 'top'
? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
: { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };


const defaultTo: React.CSSProperties[] = [
  {
    filter: 'blur(5px)',
    opacity: 0.5,
    transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
  },
  { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
];

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (ref.current)
        observer.unobserve(ref.current);
      }
    },
    { threshold, rootMargin }
  );
  if (ref.current)
  observer.observe(ref.current);

  return () => observer.disconnect();
}, [threshold, rootMargin]);

const springs = useSprings(
    elements.length,
    (i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of (animationTo || defaultTo)) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing: easings.easeOutCubic },
    })
  );

return (
  <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
    {springs.map((props, index) => (
      <animated.span
        key={index}
        style={props as React.CSSProperties}
        className="inline-block transition-transform will-change-[transform,filter,opacity]"
      >
        {elements[index] === ' ' ? ' ' : elements[index]}
        {animateBy === 'words' && index < elements.length - 1 && ' '}
      </animated.span>
    ))}
  </p>
);

};

export default BlurText;