import Image from 'next/image';
import Link from 'next/link';
import Shop from '@/app/_components/project/Shop';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function BYBLDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-4xl text-primary font-black">REACT_SHOP</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        소품샵 통합 온라인 스토어는 여러 소품샵의 상품을 하나의 플랫폼에서 보여주고, 소비자들이 간편하게 다양한 소품을
        구매할 수 있도록 돕는 웹 서비스.
      </p>
      <div className="flex gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://react-shop-seven-sigma.vercel.app/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://github.com/hyunjihub/react_shop'}
        >
          Github 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
      </div>

      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2024년 10월 22일 ~ 2024년 11월 05일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">개인 프로젝트</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="mt-2 flex gap-2">
        {['react', 'typescript', 'tailwind', 'recoil', 'axios', 'reactrouter', 'vercel', 'vite'].map((tech, key) => {
          return (
            <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
          );
        })}
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <Shop />
      <p className="mt-6 font-bold text-primary">프로젝트로 배운점</p>
      <p className="max-w-[400px] md:max-w-[760px] lg:max-w-[800px] px-3 mt-2 text-sm md:text-base text-darkgray mb-24">
        1. <strong>Typescript</strong>를 활용하여 타입 안정성을 보장하면서 프로젝트를 진행할 수 있게 되었습니다. 특히
        API 응답을 받을 때 타입을 정의해두어 데이터 구조로 인한 오류를 방지할 수 있어 JavaScript보다 안전한 개발이
        가능함을 알게 되었습니다.
        <br />
        2. <strong>장바구니</strong> 기능을 직접 구현하면서, 커머스 서비스에서 필수적인 장바구니 시스템의 동작 방식과
        이를 효과적으로 설계하는 방법을 깊이 이해할 수 있었습니다. 상품을 장바구니에 추가하고 삭제하는 기본적인 기능뿐만
        아니라, 수량 변경, 중복 추가 방지, 데이터 저장 방식에 대한 고민을 통해 보다 안정적이고 효율적인 장바구니 구현
        방법을 배울 수 있었습니다.
        <br />
        3. <strong>TailwindCSS</strong>를 사용하여 <strong>테마</strong>와 <strong>반응형 디자인</strong>을
        구현함으로써, 다양한 화면 크기에서 일관된 사용자 경험을 제공할 수 있었습니다. 이를 통해 각 화면 크기에 맞춰
        레이아웃을 자동으로 조정할 수 있었고, 사용자가 어떤 디바이스에서든 최적화된 UI를 경험할 수 있었습니다. 또한,
        TailwindCSS의 유틸리티 클래스들을 활용하여 스타일을 빠르게 적용하고, 필요에 따라 커스터마이징을 할 수 있어 개발
        속도가 크게 향상되었습니다. 이 과정에서 반응형 디자인의 중요성을 다시 한 번 실감할 수 있었습니다.
      </p>
    </main>
  );
}
