'use client';

import { IProject } from '@/app/data/types';
import ProjectItem from '@/app/_components/project/ProjectItem';
import { motion } from 'framer-motion';
import projects from '@/app/data/project.json';

export default function Project() {
  const typedProjects: IProject[] = projects.projects;

  return (
    <motion.section
      className="mt-10 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {typedProjects.map((project, key) => {
        return <ProjectItem project={project} key={key} />;
      })}
    </motion.section>
  );
}
