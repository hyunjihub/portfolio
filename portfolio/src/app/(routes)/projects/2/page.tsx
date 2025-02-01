import Bomnaemmm from '@/app/_components/project/Bomnaemmm';
import IA from '/public/project/bomnaemmm/IA.png';
import Image from 'next/image';
import Link from 'next/link';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function BomnaeDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-4xl text-primary font-black">봄내음 (Bomnae-mmm)</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        봄내음은 춘천을 의미하는 ‘봄내’와 맛있는 음식을 먹을 때 자주 사용하는 감탄사 ‘음~’을 합친 이름으로
        <br /> 춘천의 맛집, 카페, 놀거리 정보를 제공해주는 웹 사이트입니다.
      </p>
      <div className="flex gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://bomnae-mmm.web.app/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://github.com/hyunjihub/bomnae_mmm'}
        >
          Github 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={
            'https://tall-bestseller-c51.notion.site/d613c25daa274ac4901d204ef09eae34?v=8c1d18231dab4bc39329ab9a81da72a2&pvs=4'
          }
        >
          Notion 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
      </div>

      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2024년 04월 12일 ~ 2024년 05월 24일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">개인 프로젝트</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="mt-2 flex gap-2">
        {['react', 'javascript', 'styled', 'redux', 'reactrouter', 'firebase', 'express', 'figma'].map((tech, key) => {
          return (
            <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
          );
        })}
      </div>
      <p className="mt-6 font-bold text-primary">메뉴 구조도</p>
      <div className="relative w-[370px] md:w-[760px] lg:w-[1020px] h-[200px] md:h-[450px]">
        <Image className="object-contain lg:object-cover" src={IA} alt="menutree" fill />
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <Bomnaemmm />
      <p className="mt-6 font-bold text-primary">프로젝트로 배운점</p>
      <p className="max-w-[400px] md:max-w-[760px] lg:max-w-[800px] px-3 mt-2 text-sm md:text-base text-darkgray mb-24">
        1. <strong>Firestore</strong>의 쿼리 기능을 활용한 필터링 기능으로 사용자가 실시간으로 데이터를 필터링할 수 있는
        편의성에 대해 인지하게 되었습니다. 또한, <strong>멀티 필터</strong>의 추가로 보다 사용자가 편리하게 접근할 수
        있는 방법에 대해 고민하게 되었습니다.
        <br />
        2. 네이버 API 호출 시 발생하는 <strong>CORS</strong> 에러를 Firebase의{' '}
        <strong>Cloud Functions와 express</strong>를 통해 효과적으로 해결하여 사용자가 원활하게 서비스를 이용할 수
        있도록 했습니다.
        <br />
        3. <strong>Figma</strong>를 통해 UI/UX를 설계함으로써 일관성있고 통일된 UI를 구현하는 방법에 대해
        알게되었습니다. 또한, <strong>미디어 쿼리</strong>를 활용한 <strong>반응형 디자인</strong>으로 설계 시,
        레이아웃을 어떻게 설계하는 것이 효과적일지 인지하게 되었습니다.
        <br />
        4. 실제 유저로 <strong>사용성 테스트</strong>를 진행함으로써 개발자가 놓칠 수 있는 직관적인 UI에 대해 학습할 수
        있었습니다. 또한, 어려운 기능들을 여러 개 추가하는 것보다 간단한 기능들에 대해 다양한 경우를 체크해 디테일을
        높이는 것이 사용자에게 더욱 긍정적인 사이트 경험을 제공할 수 있음을 느낄 수 있었습니다.
      </p>
    </main>
  );
}
