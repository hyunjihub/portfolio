import BYBL from '@/app/_components/project/BYBL';
import Image from 'next/image';
import Link from 'next/link';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function BYBLDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-3xl md:text-4xl text-primary font-black">별별스토어 (BYBL)</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        소품샵 통합 온라인 스토어는 여러 소품샵의 상품을 하나의 플랫폼에서 보여주고, 소비자들이 간편하게 다양한 소품을
        구매할 수 있도록 돕는 웹 서비스.
      </p>
      <div className="flex gap-2 md:gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://byblstore.vercel.app/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://github.com/hyunjihub/BYBLSTORE'}
        >
          Github 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://tall-bestseller-c51.notion.site/13b242ce400e8100872cdbbd74b0f695?pvs=4'}
        >
          Notion 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
      </div>

      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2024년 11월 18일 ~ 2024년 12월 12일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">개인 프로젝트</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="mt-2 flex gap-2">
        {['nextjs', 'typescript', 'tailwind', 'zustand', 'axios', 'reacthookform', 'firebase', 'vercel', 'figma'].map(
          (tech, key) => {
            return (
              <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
            );
          }
        )}
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <BYBL />
      <p className="mt-6 font-bold text-primary">프로젝트로 배운점</p>
      <p className="max-w-[400px] md:max-w-[760px] lg:max-w-[800px] px-3 mt-2 text-sm md:text-base text-darkgray mb-24">
        1. <strong>Typescript</strong>를 활용하여 Firebase와 같은 외부 데이터베이스에서 데이터를 쿼리할 때, 반환 타입을
        명확히 정의함으로써 데이터 구조 변경에 의한 오류를 예방할 수 있었습니다. 또한 <strong>interface</strong>와{' '}
        <strong>extends</strong>를 활용하여 중복 코드를 줄이고, 공통 속성을 상속받는 방식으로 코드의 재사용성을 높이는
        방식에 대해 알 수 있었습니다.
        <br />
        2. Firebase를 활용한 데이터 설계 과정에서 프론트엔드 개발뿐만 아니라 <strong>백엔드 지식</strong>도 함께 학습할
        수 있었습니다. NoSQL 데이터베이스에서는 관계형 데이터베이스와 달리 JOIN 연산을 지원하지 않기 때문에,{' '}
        <strong>데이터를 어떻게 중복 없이 저장할지</strong>에 대해 고민했습니다. 사용자 정보를 여러 주문에 참조 시
        사용자의 데이터를 매번 복사해서 저장하는 대신, 사용자 ID를 통해 간접적으로 참조하는 방식으로 중복을
        최소화했습니다.
        <br />
        3. 이전 프로젝트에서 학습한 <strong>장바구니 기능을 심화</strong>하여 더 다양한 장바구니 기능을 구현하고,
        사용자의 경험을 향상시킬 수 있는 방식을 생각하였습니다.{' '}
        <strong>비회원/회원 장바구니 저장 위치, 로그인 시 장바구니 DB 저장, 선택/전체 상품 주문</strong> 등 여러
        장바구니 기능에 대해 학습할 수 있었습니다.
      </p>
    </main>
  );
}
