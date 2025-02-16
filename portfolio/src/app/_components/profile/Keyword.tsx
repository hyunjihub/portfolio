'use client';

import { motion } from 'framer-motion';

const keywords = ['꾸준한', '계속 성장하는', '작은 디테일까지', '문제 해결자', '사용자 경험'];

const keywordVariants = [
  { y: [-30, 0, -15, 0, -5, 0], duration: 0.8 },
  { y: [-25, 0, -10, 0, -3, 0], duration: 0.6 },
  { y: [-20, 0, -8, 0, -4, 0], duration: 0.7 },
  { y: [-35, 0, -20, 0, -6, 0], duration: 0.9 },
  { y: [-28, 0, -12, 0, -4, 0], duration: 0.75 },
];

export default function Keyword() {
  return (
    <div className="mt-32 md:mt-24 flex gap-1 md:gap-3">
      {keywords.map((text, index) => (
        <motion.p
          key={index}
          className={`px-2 md:px-3 py-1 border border-primary rounded-2xl text-xs md:text-sm ${
            index % 2 === 0 ? 'bg-primary text-white' : 'text-primary'
          }`}
          initial={{ y: keywordVariants[index].y[0], opacity: 0 }}
          animate={{
            y: keywordVariants[index].y,
            opacity: 1,
          }}
          transition={{
            duration: keywordVariants[index].duration,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}
