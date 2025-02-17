'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Skill } from '@/app/data/types';
import arrow from '/public/link/arrow.svg';
import { motion } from 'framer-motion';
import project from '@/app/data/project.json';

interface ProjectModalProps {
  tech: Skill;
  onClose: () => void;
}

export default function ProjectModal({ tech, onClose }: ProjectModalProps) {
  const selectedProject = project.projects.filter((p) => tech.projects.includes(p.projectId));

  const handleClickArticle = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={onClose}>
      <motion.article
        className="absolute top-[30%] left-[4%] md:left-[33%] bg-white w-[360px] md:w-[600px] p-[32px] rounded-lg border b-black m-0 m-auto z-50 flex flex-col items-center justify-center"
        onClick={handleClickArticle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">{tech.name} 프로젝트</h2>
        <ul className="w-full my-10 flex flex-col gap-3">
          {selectedProject.length === 0 ? (
            <p className="text-gray-400 text-center">해당 언어로 사용한 프로젝트가 존재하지 않습니다.</p>
          ) : (
            selectedProject.map((p, index) => {
              return (
                <li className="w-full flex items-center justify-between" key={index}>
                  {p.name}
                  <Link
                    className="flex items-center gap-3 hover:underline"
                    href={`/projects/${p.projectId}`}
                    role="button"
                  >
                    자세히보기
                    <Image src={arrow} alt="arrow" width={7} height={7} />
                  </Link>
                </li>
              );
            })
          )}
        </ul>
        <button className="text-white text-sm bg-blue-500 rounded-lg px-16 py-2" onClick={onClose}>
          닫기
        </button>
      </motion.article>
    </div>
  );
}
