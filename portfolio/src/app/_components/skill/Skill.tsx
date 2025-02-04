'use client';

import Backend from '@/app/_components/skill/Backend';
import Devops from '@/app/_components/skill/Devops';
import Frontend from '@/app/_components/skill/Frontend';
import Language from '@/app/_components/skill/Language';
import { motion } from 'framer-motion';
import skill from '@/app/data/skill.json';

export default function Skill() {
  return (
    <motion.section
      className="w-[730px] mt-10 mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mb-4 w-full flex items-center justify-between">
        <Language tech={skill.language} />
        <Devops tech={skill.devops} />
        <Backend tech={skill.backend} />
      </div>

      <Frontend tech={skill.frontend} />
    </motion.section>
  );
}
