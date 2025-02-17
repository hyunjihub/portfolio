'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_IMG } from '@/app/data/constant';
import { motion } from 'framer-motion';
import projects from '@/app/data/project.json';

export default function ProjectSlide() {
  return (
    <motion.section
      className="w-full flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-3xl text-primary font-black my-8">구현 프로젝트 🤔</h3>
      <article className="w-full flex justify-center items-center mb-24">
        <div className="flex w-fit overflow-hidden group">
          <div className="flex pr-6 gap-6 animate-infiniteSlide group-hover">
            {[...projects.projects, ...projects.projects].map((p, index) => (
              <Link
                href={`/projects/${p.projectId}`}
                className="relative w-[400px] h-[180px] flex-shrink-0 group"
                key={index}
              >
                <Image
                  src={PROJECT_IMG[p.name as keyof typeof PROJECT_IMG]}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{p.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </motion.section>
  );
}
