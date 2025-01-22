import About from './_components/profile/about';
import Archiving from './_components/profile/Archiving';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl">
        안녕하세요. 프론트엔드 개발자 <strong>장현지</strong>입니다.
      </h2>
      <p className="mt-2 text-center text-sm">
        <strong>누군가의 일상이 더 편리해지는 순간을 설계</strong>하는 프론트엔드 개발자, <strong>장현지</strong>입니다.
        <br />
        프론트엔드의 매력은 사용자와 만나는 접점을 설계하는 데 있다고 믿으며, 더욱 편리하고 직관적인 UI/UX를 구현하기
        위해 끊임없이 고민합니다.
      </p>
      <About />
      <Archiving />
    </main>
  );
}
