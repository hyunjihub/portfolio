import About from './_components/profile/About';
import Archiving from './_components/profile/Archiving';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="mt-32 md:mt-24  flex gap-3">
        <p className="px-3 py-1 border border-primary bg-primary rounded-2xl text-sm text-white">꾸준한</p>
        <p className="px-3 py-1 border border-primary rounded-2xl text-sm text-primary">계속 성장하는</p>
        <p className="px-3 py-1 border border-primary rounded-2xl text-sm text-primary">작은 디테일까지</p>
        <p className="px-3 py-1 border border-primary bg-primary rounded-2xl text-sm text-white">문제 해결자</p>
        <p className="px-3 py-1 border border-primary rounded-2xl text-sm text-primary">사용자 경험</p>
      </div>
      <h2 className="mt-5 text-3xl md:text-4xl font-medium text-center">
        안녕하세요. 프론트엔드 개발자 <strong className="text-primary font-black">장현지</strong>입니다.
      </h2>
      <p className="mt-2 p-4 md:px-10 text-center text-sm">
        <strong>누군가의 일상이 더 편리해지는 순간을 설계</strong>하는 프론트엔드 개발자, <strong>장현지</strong>입니다.
        <br />
        프론트엔드의 매력은 사용자와 만나는 접점을 설계하는 데 있다고 믿으며, 더욱 편리하고 직관적인 UI/UX를 구현하기
        위해 끊임없이 고민합니다.
      </p>
      <p className="text-sm text-gray-300">Updated. 2024.10.12</p>

      <About />
      <Archiving />
    </main>
  );
}
