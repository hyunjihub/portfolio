'use client';

import Image from 'next/image';
import Link from 'next/link';
import brand from '/public/project/oliveyoung/brand.gif';
import header from '/public/project/oliveyoung/header.gif';
import hot from '/public/project/oliveyoung/hot.gif';
import mainSlide from '/public/project/oliveyoung/mainSlide.gif';
import more from '/public/project/more.svg';
import recommend from '/public/project/oliveyoung/recommend.gif';
import top10 from '/public/project/oliveyoung/top10.gif';
import { useState } from 'react';
import velog from '/public/link/velog.svg';

export default function OliveYoung() {
  const [openIndexes, setOpenIndexes] = useState(Array(6).fill(false));

  const handleToggle = (index: number) => {
    setOpenIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <ul className="mt-2 text-center">
      <li className="mt-3">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(0)}
        >
          Header 구현
          <div className="flex gap-10 items-center">
            <div className="hidden md:flex gap-3">
              <Link
                href={
                  'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-%ED%97%A4%EB%8D%94%ED%8E%B8-'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
            </div>
            <Image className={`${openIndexes[0] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[0] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={header} alt="header" width={0} height={0} />
            화면 렌더링 시 일정 시간 동안 오늘드림으로 설정된 주소가 표시되며, 이후 hover하면 해당 주소가 나타납니다.
            <br />
            관심 매장을 hover할 경우, 관심으로 설정된 지점의 행사 공지가 표시됩니다.
            <br />
            최근 본 상품을 클릭할 경우, react-js-pagination으로 구현된 상품 페이지네이션이 표시됩니다.
            <br />
            검색창을 클릭할 경우, 최근 검색어와 실시간 검색어가 표시됩니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          메인 슬라이드
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-%EB%A9%94%EC%9D%B8-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%ED%8E%B8-'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[1] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[1] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={mainSlide} alt="mainSlide" width={0} height={0} />
            react-slick을 통해 Main Carousel을 구현하였으며 Carousel 좌측에 카테고리를 배치했습니다.
            <br />
            next와 prev 버튼을 custom 하여 동작시켰으며, pause/play 버튼을 통해 autoplay 설정을 자유롭게 변경할 수
            있습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          주목 / 추천 상품
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-Custom-Slider-%ED%8E%B8-'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
              <Image className={`${openIndexes[2] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[2] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={recommend} alt="recommend" width={0} height={0} />
            다른 상품 추천 버튼을 통해 주목과 추천 Slider를 개별로 전환시킬 수 있습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          인기 행사 / 올리브영 단독
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-Custom-Slider-%ED%8E%B8-'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
              <Image className={`${openIndexes[2] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[3] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={hot} alt="hot" width={0} height={0} />
            next와 prev 버튼을 custom 하여 동작시켰으며, drag를 이용해 전환시킬 수 있습니다. <br /> paging을 custom 하여
            원하는 slide로 이동 가능하도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          주목 브랜드
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-Custom-Slider-%ED%8E%B8-'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[4] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[4] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={brand} alt="brand" width={0} height={0} />
            next와 prev 버튼을 custom 하여 동작시켰으며, drag를 이용해 전환시킬 수 있습니다. <br /> paging을 custom 하여
            브랜드 이름 클릭 시 원하는 slide로 이동 가능하도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(5)}
        >
          조회 급상승, 인기템
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%98%81-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0-%EC%A4%91%EC%B2%A9-Slide-%ED%8E%B8-'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[5] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[5] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={top10} alt="top10" width={0} height={0} />
            1위부터 10까지의 상품을 클릭 없이 자동으로 확인할 수 있습니다.
            <br /> 일정 시간 이후 자동으로 다음 순위를 표시하며, 5위/10위 이후 다음 slide로 자동 전환되도록
            설계하였습니다.
          </div>
        )}
      </li>
    </ul>
  );
}
