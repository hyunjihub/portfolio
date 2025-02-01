import Backend from '@/app/_components/skill/Backend';
import Devops from '@/app/_components/skill/Devops';
import Frontend from '@/app/_components/skill/Frontend';
import Language from '@/app/_components/skill/Language';
import skill from '@/app/data/skill.json';

export default function Skills() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl">
        사용할 수 있는 <strong>기술 스택</strong>입니다.
      </h2>
      <p className="mt-2 text-center text-sm">
        기술 스택을 <strong>클릭</strong>하시면, 해당 기술 스택을 사용한 프로젝트를 확인할 수 있습니다.
      </p>
      <section className="w-[730px] mt-10 mb-24">
        <div className="mb-4 w-full flex items-center justify-between">
          <Language tech={skill.language} />
          <Devops tech={skill.devops} />
          <Backend tech={skill.backend} />
        </div>

        <Frontend tech={skill.frontend} />
      </section>
    </main>
  );
}
