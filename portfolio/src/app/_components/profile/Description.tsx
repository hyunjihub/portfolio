'use client';

import { motion } from 'framer-motion';

export default function Description() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1 }}
      className="flex flex-col items-center"
    >
      <p className="mt-2 p-4 md:px-10 text-center text-sm">
        <strong>누군가의 일상이 더 편리해지는 순간을 설계</strong>하는 프론트엔드 개발자, <strong>장현지</strong>입니다.
        <br />
        프론트엔드의 매력은 사용자와 만나는 접점을 설계하는 데 있다고 믿으며, 더욱 편리하고 직관적인 UI/UX를 구현하기
        위해 끊임없이 고민합니다.
      </p>
      <p className="text-sm text-gray-300">Updated. 2024.10.12</p>
    </motion.div>
  );
}
