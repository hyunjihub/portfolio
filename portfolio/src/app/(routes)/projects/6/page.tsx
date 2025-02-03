import DutchiePay from '@/app/_components/project/DutchiePay';
import Image from 'next/image';
import Link from 'next/link';
import { TECH_STACK } from '@/app/data/constant';
import arrow from '/public/link/arrow.svg';

export default function DutchiePayDetail() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="mt-24 text-3xl md:text-4xl text-primary font-black">더취페이 (DutchiePay)</h2>
      <p className="mt-2 text-center px-3 text-xs md:text-sm">
        더치페이 + 자취 = 더취페이
        <br />
        자취생들을 타겟으로한 공동구매 및 커뮤니티 서비스
      </p>
      <div className="flex gap-2 md:gap-5">
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://www.dutchie-pay.site/'}
        >
          페이지 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={'https://github.com/DutchiePay/DutchiePay-Front'}
        >
          Github 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
        <Link
          className="px-2 py-1 border border-darkgray text-xs md:text-sm mt-6 flex gap-2 hover:underline"
          href={
            'https://tall-bestseller-c51.notion.site/87d15c34420646658edd0ec474e88163?v=07b99635e5874ae0ae18c54f584cc112&pvs=74'
          }
        >
          Notion 바로가기
          <Image src={arrow} alt="link" width={8} height={8} />
        </Link>
      </div>

      <p className="mt-6 font-bold text-primary">프로젝트 기간</p>
      <p className="mt-2 text-sm text-darkgray">2024년 07월 01일 ~ 2025년 01월 19일</p>
      <p className="mt-6 font-bold text-primary">프로젝트 유형</p>
      <p className="mt-2 text-sm text-darkgray">팀 프로젝트 (Backend 3명, Frontend 2명)</p>
      <p className="mt-6 font-bold text-primary">기술 스택 및 사용 환경</p>
      <div className="max-w-[380px] md:max-w-[760px] mt-2 flex flex-wrap justify-center gap-2 px-2">
        {[
          'nextjs',
          'javascript',
          'tailwind',
          'redux',
          'axios',
          'reacthookform',
          's3',
          'route53',
          'eslint',
          'storybook',
          'jest',
          'vercel',
          'figma',
        ].map((tech, key) => {
          return (
            <Image src={TECH_STACK[tech as keyof typeof TECH_STACK]} alt={tech} width={28} height={28} key={key} />
          );
        })}
      </div>
      <p className="mt-6 font-bold text-primary">직접 구현한 기능</p>
      <DutchiePay />
      <p className="mt-6 font-bold text-primary">프로젝트로 배운점</p>
      <p className="max-w-[400px] md:max-w-[760px] lg:max-w-[800px] px-3 mt-2 text-sm md:text-base text-darkgray mb-24">
        1. 프로젝트 <strong>PM</strong>으로서 회의를 주도하고, 주기적인 피드백을 통해 팀 분위기를 환기시키며 규칙을
        보완하는 과정에서 중요한 교훈을 얻었습니다. 특히, 팀 규칙을 설정하고 참여율이 저조한 팀원들을 개별적으로
        관리함으로써 더 나은 협업 환경을 만들 수 있었습니다. 또한, 프로젝트 진행 상황을 체크하고 역할을 분담하여 각
        팀원이 책임감을 가지고 업무에 집중할 수 있도록 지원했습니다. 이를 통해 팀 프로젝트에서 가장 중요한 것은{' '}
        <strong>원활한 소통과 협업</strong>이며, 각 팀원이 역할을 명확히 인지하고 적극적으로 참여하는 것이 성공적인
        결과로 이어진다는 점을 깨달았습니다.
        <br />
        2. 기능을 구현하면서 단순히 프로젝트로서 진행하는 것이 아니라, <strong>실제 서비스를 운영한다</strong>는
        책임감을 가지고 진행했습니다. 이를 통해 <strong>보안, 성능, 사용자 경험</strong> 등을 최우선으로 고려하며 최선의
        방법을 협의하고 적용할 수 있었습니다. 예를 들어, 소셜 로그인 시 유저 정보를 postMessage로 주고받을 때와
        개인정보를 storage에 저장할 때 암호화하여 유출을 방지했습니다. 또한, 브라우저 탭 간 sessionStorage 데이터를
        공유하기 위해 Broadcast Channel을 사용하여 같은 브라우저 내에서 재로그인없이 사이트를 이용할 수 있도록
        하였습니다.
        <br />
        3. <strong>WYSIWYG Editor</strong>를 이용하여 이전 프로젝트보다 더욱 편리하고 다양한 기능이 포함된 커뮤니티를
        구현하였습니다. 또한, 이미지 영역을 별도로 분리하여 게시글 내 이미지를 쉽게 관리하도록 하여 사용자가 커뮤니티를
        보다 쉽게 구현할 수 있는 UI/UX를 구현하고자 노력했습니다.
        <br />
        4. <strong>Lighthouse</strong>를 활용하여 성능을 측정하고, <strong>Dynamic 및 Lazy Loading</strong> 기법을
        적용하여 초기 렌더링 성능을 최적화하려고 했습니다. 이를 통해 단순히 기능이 동작하는 것에 그치지 않고, 기능의
        성능을 지속적으로 모니터링하고 개선하는 것이 <strong>유지보수</strong>의 중요한 부분임을 깨닫게 되었습니다. 성능
        최적화를 통해 사용자 경험을 개선하고, 실제 서비스 환경에서 안정적인 운영을 위한 기반을 다질 수 있었습니다.
      </p>
    </main>
  );
}
