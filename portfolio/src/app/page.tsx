import About from './_components/profile/About';
import Archiving from './_components/profile/Archiving';
import Description from './_components/profile/Description';
import Keyword from './_components/profile/Keyword';
import ProjectSlide from './_components/profile/ProjectSlide';
import Title from './_components/profile/Title';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <Keyword />
      <Title />
      <Description />
      <About />
      <Archiving />
      <h3 className="text-3xl text-primary font-black my-8">구현 프로젝트</h3>
      <ProjectSlide />
    </main>
  );
}
