import Skill from '@/app/_components/skill/Skill';

export default function Skills() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-2xl md:text-4xl text-center font-medium">
        사용할 수 있는 <strong className="text-primary font-black">기술 스택</strong>입니다.
      </h2>
      <p className="mt-2 text-center text-xs px-5 md:px-0 md:text-sm">
        기술 스택을 <strong>클릭</strong>하시면, 사용한 프로젝트를 확인할 수 있습니다.
      </p>
      <Skill />
    </main>
  );
}
