import Project from '@/app/_components/project/Project';

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-2xl md:text-4xl text-center font-medium">
        지금까지 진행한 모든 <strong className="font-bold text-primary">프로젝트</strong>입니다.
      </h2>
      <p className="mt-2 text-center text-xs md:text-sm">
        프로젝트를 <strong>클릭</strong>하시면, 프로젝트에 대한 자세한 내용을 확인하실 수 있습니다.
        <br />
        <strong>프로젝트 완료 날짜</strong>를 기준으로 표시됩니다.
      </p>
      <Project />
    </main>
  );
}
