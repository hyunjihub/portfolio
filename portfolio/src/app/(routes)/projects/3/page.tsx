import Image from 'next/image';
import Link from 'next/link';
import OliveYoung from '@/app/_components/project/OliveYoung';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function OliveYoungDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-4xl text-primary font-black">올리브영 클론코딩</h2>
      <p className="mt-2 text-center text-sm">
        올리브영 클론코딩 프로젝트는 인기 있는 드러그 스토어인 올리브영의 UI을 모방하여 학습하고, 사용자 경험을 학습하는
        프로젝트입니다.
      </p>
      <div className="flex gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-sm mt-6 flex gap-2 hover:underline"
          href={'https://hyunjihub.github.io/Oliveyoung_Clone/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-sm mt-6 flex gap-2 hover:underline"
          href={'https://github.com/hyunjihub/Oliveyoung_Clone'}
        >
          Github 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
      </div>

      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2024년 06월 08일 ~ 2024년 06월 13일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">개인 프로젝트</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="mt-2 flex gap-2">
        {['react', 'javascript', 'tailwind'].map((tech, key) => {
          return (
            <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
          );
        })}
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <OliveYoung />
    </main>
  );
}
