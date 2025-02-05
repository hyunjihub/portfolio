'use client';

import { motion } from 'framer-motion';

export default function Title() {
  return (
    <motion.h2
      className="mt-5 text-3xl md:text-4xl font-medium text-center"
      initial={{ letterSpacing: '-0.5em', opacity: 0 }}
      animate={{ letterSpacing: '0em', opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] }}
    >
      안녕하세요. 프론트엔드 개발자 <strong className="text-primary font-black">장현지</strong>입니다.
    </motion.h2>
  );
}
