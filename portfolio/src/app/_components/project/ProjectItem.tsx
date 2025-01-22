import { PROJECT_IMG, TECH_STACK } from '@/app/data/constant';

import { IProject } from '@/app/data/types';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '/public/project/arrow.svg';
import github from '/public/link/github.svg';
import link from '/public/project/link.svg';

interface ProjectItemProps {
  project: IProject;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="w-[420px] h-[440px] p-7 rounded-lg border" title={`${project.name} 상세보기`}>
      <Link
        className="inline-block relative w-[360px] h-[170px] overflow-hidden"
        href={`/projects/${project.projectId}`}
      >
        <Image
          className="object-cover object-top transform transition-transform duration-300 hover:scale-110"
          src={PROJECT_IMG[project.name as keyof typeof PROJECT_IMG]}
          alt={project.name}
          fill
        />
      </Link>
      <Link className="mt-3 text-primary text-3xl font-black tracking-tighter" href={`/projects/${project.projectId}`}>
        {project.name}
      </Link>
      <div className="flex justify-between">
        <p className="mt-1 text-darkgray text-sm tracking-tighter">{project.concept}</p>
        <div className="flex items-center gap-3">
          {project.page && (
            <Link href={project.page} title={`${project.name} 바로가기`}>
              <Image src={link} alt="page" width={20} height={12} />
            </Link>
          )}
          <Link href={project.github} title="github 바로가기">
            <Image src={github} alt="github" width={24} height={24} />
          </Link>
        </div>
      </div>
      <hr className="my-3 h-[1px] border-none bg-primary" />
      <p className="text-sm text-gray-400 font-light tracking-tighter">
        {project.date}{' '}
        {project.isTeamProject ? `(팀 프로젝트${project.role ? `, ${project.role}` : ''})` : '(개인 프로젝트)'}
      </p>

      <p className="mt-2 text-sm text-darkgray leading-tight">{project.description}</p>
      <div className="mt-4 flex justify-between">
        <div className="flex gap-1.5">
          {project.tech.map((tech, key) => {
            return (
              <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={20} height={20} key={key} />
            );
          })}
        </div>
        <Link className="flex items-center gap-2 text-primary" href={`/projects/${project.projectId}`}>
          more
          <Image src={arrow} alt="link" width={7} height={12} />
        </Link>
      </div>
    </article>
  );
}
