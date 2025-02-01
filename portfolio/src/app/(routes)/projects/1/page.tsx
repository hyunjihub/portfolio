import Brave from '@/app/_components/project/Brave';
import Image from 'next/image';
import Link from 'next/link';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';
import menutree from '/public/project/brave/menutree.jpg';

export default function BraveDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-4xl text-primary font-black">용감한 원정대</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        무서운 벌레를 대신 잡아줄 사람이 없을 때! 전화공포증이 심해 전화를 하기 겁날 때! 무서워서 환불하지 못하고 있을
        때!
        <br />
        일상에는 누군가에게는 사소할 수 있지만, 누군가에게는 어려운 문제들이 많습니다.
        <br /> 용감한 원정대는 그런 분들을 위해 내 근처 이웃에게 부탁할 수 있는 방법을 제시합니다.
        <br />
        간편하게 게시글을 올림으로써 누군가에게 원정대가 되어줄 수도 있고, 누군가에게 원정을 요청할 수도 있습니다.
      </p>
      <Link
        className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
        href={'https://github.com/hyunjihub/BravePeople-Frontend'}
      >
        Github 바로가기
        <Image src={arrow} alt="link" width={8} height={8} />
      </Link>
      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2023년 12월 21일 ~ 2024년 03월 03일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">팀프로젝트 (Backend 3명, Frontend 2명)</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="mt-2 flex gap-2">
        {['react', 'javascript', 'styled', 'redux', 'reactrouter', 'axios', 'postman', 'notion', 'slack'].map(
          (tech, key) => {
            return (
              <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
            );
          }
        )}
      </div>
      <p className="mt-6 font-bold text-primary">메뉴 구조도</p>
      <div className="relative w-[370px] md:w-[760px] lg:w-[1020px] h-[200px] md:h-[450px]">
        <Image className="object-contain lg:object-cover" src={menutree} alt="menutree" fill />
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <Brave />
    </main>
  );
}
