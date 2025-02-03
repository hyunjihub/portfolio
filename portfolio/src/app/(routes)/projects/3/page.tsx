import Image from 'next/image';
import Link from 'next/link';
import OliveYoung from '@/app/_components/project/OliveYoung';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function OliveYoungDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-3xl md:text-4xl text-primary font-black">올리브영 클론코딩</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        올리브영 클론코딩 프로젝트는 인기 있는 드러그 스토어인 올리브영의 UI을 모방하여 학습하고, 사용자 경험을 학습하는
        프로젝트입니다.
      </p>
      <div className="flex gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://hyunjihub.github.io/Oliveyoung_Clone/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
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
      <p className="mt-6 font-bold text-primary">프로젝트로 배운점</p>
      <p className="max-w-[400px] md:max-w-[760px] lg:max-w-[800px] px-3 mt-2 text-sm md:text-base text-darkgray mb-24">
        1. <strong>TailwindCSS</strong>를 활용하여 유틸리티 클래스 기반의 스타일링을 구현하였습니다. 이를 통해 빠르게
        스타일을 적용하고 일관성 있는 디자인을 유지하였습니다.
        <br />
        2. <strong>React-slick</strong> 라이브러리를 이용하여 8가지 종류의 <strong>Custom Slider</strong>를
        구현하였습니다. autoplay, play/pause, 중첩 Slider 등 다양한 기능의 UI를 Slider를 이용해 모두 구현하였습니다.{' '}
        <strong>사용자 인터랙션</strong>을 위해 다양한 Slider를 구현하는 방법을 학습했습니다.
        <br />
        3. <strong>react-js-pagination</strong> 라이브러리를 이용하여 <strong>페이지네이션</strong>을 구현하였습니다.
        이를 통해 많은 제품 목록을 사용자에게 효과적으로 제공하고, 사용자 경험을 향상시켰습니다. <br />
        4. 클론코딩을 통해 <strong>실제 서비스의 UI/UX를</strong> 학습함으로써, 실무에 적용 가능한 사용자 경험 최적화
        방법을 학습하였습니다. 이를 통해 실제 서비스와 유사한 수준의 사용자 인터페이스를 구현하는 능력을 향상시켰으며,
        실무에서의 적용 가능성을 높였습니다.
      </p>
    </main>
  );
}
