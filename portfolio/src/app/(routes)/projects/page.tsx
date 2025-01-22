import { IProject } from '@/app/data/types';
import ProjectItem from '@/app/_components/project/ProjectItem';
import projects from '@/app/data/project.json';

export default function Projects() {
  const typedProjects: IProject[] = projects.projects;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-4xl">
        지금까지 진행한 모든 <strong>프로젝트</strong>입니다.
      </h2>
      <p className="mt-2 text-center text-sm">
        프로젝트를 <strong>클릭</strong>하시면, 프로젝트에 대한 자세한 내용을 확인하실 수 있습니다.
        <br />
        <strong>프로젝트 완료 날짜</strong>를 기준으로 표시됩니다.
      </p>
      <section className="mt-10 mb-24 grid grid-cols-2 gap-5">
        {typedProjects.map((project, key) => {
          return <ProjectItem project={project} key={key} />;
        })}
      </section>
    </main>
  );
}
