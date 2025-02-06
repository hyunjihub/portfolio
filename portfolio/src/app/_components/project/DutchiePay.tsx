'use client';

import Image from 'next/image';
import Link from 'next/link';
import more from '/public/project/more.svg';
import { useState } from 'react';
import velog from '/public/link/velog.svg';

export default function DutchiePay() {
  const [openIndexes, setOpenIndexes] = useState(Array(17).fill(false));

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
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(0)}
        >
          이메일 로그인 및 소셜 로그인
          <div className="flex gap-10 items-center">
            <div className="hidden md:flex gap-3">
              <Link
                href={
                  'https://velog.io/@syub98774/%EC%86%8C%EC%85%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9D%84-%EA%B5%AC%ED%98%84%ED%96%88%EB%8A%94%EB%8D%B0-%EC%99%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%A4%EC%A7%88-%EB%AA%BB%ED%95%98%EB%8B%88'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
              <Link
                href={
                  'https://velog.io/@syub98774/%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%B4-%EA%B0%99%EA%B1%B0%EB%82%98-%EB%8B%A4%EB%A5%BC-%EB%95%8C-%EC%83%81%EA%B4%80%EC%97%86%EC%9D%B4-%ED%8C%9D%EC%97%85%EC%B0%BD-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%AC-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D-postMessage-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
            </div>
            <Image className={`${openIndexes[0] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[0] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            이메일과 소셜 로그인 시 유저 정보를 redux에 저장하여 상태를 전역적으로 관리하도록 구현했습니다.
            <br />
            loginType을 LocalStorage에 저장하여 최근 로그인 방식을 표시해 사용자가 다시 방문했을 때도 로그인 방식을
            기억할 수 있어 사용자 경험을 향상시켰습니다.
            <br />
            소셜 로그인 시 postMessage API를 활용해 서버로부터 암호화된 사용자 정보를 전달받고, 이를 복호화하여 Redux에
            저장함으로써 안전하게 사용자 데이터를 주고받을 수 있습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          자동 로그인 및 유저 정보 관리
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9E%90%EB%8F%99%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%84%A0%ED%83%9D-%EC%97%AC%EB%B6%80%EC%97%90-%EB%94%B0%EB%9D%BC-refresh-token%EC%9D%84-universal-cookie%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%84%B8%EC%85%98%EC%A7%80%EC%86%8D-%EC%BF%A0%ED%82%A4%EC%97%90-%EC%A0%80%EC%9E%A5%ED%96%88%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/sessionStorage%EC%97%90-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%ED%83%AD%EC%97%90%EC%84%9C%EB%8F%84-%EA%B3%B5%EC%9C%A0%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%B0%BE%EA%B8%B0'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%84%9C%EB%A1%9C-%EB%8B%A4%EB%A5%B8-%EB%8F%84%EB%A9%94%EC%9D%B8%EC%97%90%EC%84%9C%EB%8F%84-%EC%BF%A0%ED%82%A4%EB%A5%BC-%EA%B3%B5%EC%9C%A0%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D-%EC%84%A4%EC%A0%95%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            자동 로그인 방식으로 로그인할 경우, cookie를 지속 쿠키 방식으로 저장하여 사이트 최초 접근 시 relogin API를
            호출하여 로그인 과정 없이 사용자 정보를 서버로부터 받을 수 있도록 설계하였습니다.
            <br />
            sessionStorage에 저장된 사용자 정보를 Broadcast Channel API를 활용하여 브라우저 탭 간 데이터를 공유하도록
            설계하였으며, 로그인, 배송지 관련 이벤트 발생 시 변경된 데이터를 모든 탭에서 동기화할 수 있도록
            구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          비회원 접근제한
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%ED%9C%B4%EB%8C%80%ED%8F%B0-%EC%9D%B8%EC%A6%9D%EC%9D%84-%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%82%AC%EC%9A%A9%EC%9E%90%EB%A5%BC-%EB%8B%A4%EB%A5%B8-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%98%EA%B2%8C-layout%EC%97%90%EC%84%9C-%EC%A0%9C%ED%95%9C%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/redux%EC%97%90-%EC%83%81%ED%83%9C%EB%A5%BC-%EC%A0%80%EC%9E%A5%ED%95%B4-middleware%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%97%86%EC%9C%BC%EB%A9%B4-ProtectedRoute-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%ED%95%B4%EA%B2%B0'
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
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            소셜 로그인 회원가입 시 닉네임 등 추가 정보 설정 후에 사이트를 이용할 수 있도록 추가 정보 설정이 완료되지
            않은 사용자들을 항상 추가 정보 설정 페이지로 리다이렉트 되도록 설계하였습니다.
            <br />
            회원만 접근 가능한 일부 페이지를 Protected Route를 이용하여 비회원이 접근 시 로그인 페이지로 이동되도록
            하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          배송지 주소 관리
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%99%80-%EA%B4%80%EB%A0%A8%EB%90%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%A0%80%EC%9E%A5%ED%95%A0-%EB%95%8C%EB%8A%94-%EC%95%94%ED%98%B8%ED%99%94%EB%A5%BC-%ED%95%B4%EC%A4%84-%EA%B2%83'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%B4-%EA%B0%99%EA%B1%B0%EB%82%98-%EB%8B%A4%EB%A5%BC-%EB%95%8C-%EC%83%81%EA%B4%80%EC%97%86%EC%9D%B4-%ED%8C%9D%EC%97%85%EC%B0%BD-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%B0%9B%EC%95%84%EC%98%AC-%EC%88%98-%EC%9E%88%EB%8F%84%EB%A1%9D-postMessage-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/react-daum-postcode%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EC%A3%BC%EC%86%8C-%EA%B0%92-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0'
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
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            배송지를 최대 5개까지 저장할 수 있으며, 최초로 설정한 배송지를 기본 배송지로 설정하도록 구현했습니다. <br />
            배송지가 2개 이상 될 경우, 기본 배송지를 변경할 수 있으며 주문 시 배송지 정보에 기본 배송지를 default로
            set되도록 설계하였습니다.
            <br />
            배송지 데이터를 sessionStorage에 암호화하여 저장하여 sessionStorage에 배송지가 존재하지 않을 경우에만 API를
            호출하여 불필요한 API 호출을 방지했습니다.
            <br />
            배송지 수정, 삭제가 일어날 경우 배송지 API를 호출하여 변경된 배송지를 항상 유지하도록 설계하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          File, base64 이미지 S3 업로드
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link href={'https://velog.io/@syub98774/s3-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C'}>
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EB%B6%99%EC%97%AC%EB%84%A3%EA%B8%B0%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80base64%EA%B0%80-%EB%84%88%EB%AC%B4-%EA%B8%B8%EC%96%B4%EC%84%9C-File%EB%A1%9C-%EB%B3%80%ED%99%98%EC%9D%84-%ED%95%A0-%ED%95%84%EC%9A%94%EA%B0%80-%EC%9E%88%EB%8B%A4'
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
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            Presigned URL을 이용하여 이미지를 안전하게 S3에 업로드하도록 구현했습니다. <br />
            base64 형식으로 삽입된 이미지를 File 객체로 변환하여 S3에 업로드할 수 있도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(5)}
        >
          상품 리스트, 상세페이지
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/headernav%EB%A5%BC-%EC%83%81%EB%8B%A8%EC%97%90-%EB%B6%99%EC%9D%B4%EA%B3%A0-%EC%9B%90%ED%95%98%EB%8A%94-%EC%98%81%EC%97%AD%EC%9C%BC%EB%A1%9C-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EC%9D%B4%EB%8F%99%EC%8B%9C%EC%BC%9C%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link href={'https://velog.io/@syub98774/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%8D%94%EB%B3%B4%EA%B8%B0'}>
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[5] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[5] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            무한스크롤을 이용하여 상품 리스트 페이지를 구현하였으며, 카테고리, 필터링 및 마감 상품 포함 기능을 추가하여
            사용자가 원하는 상품을 더 쉽게 제공할 수 있도록 설계했습니다. <br />
            별점과 리뷰 개수와 함께 공동구매 진행률과 남은 기간을 표시하여 상품에 대한 정보들을 상세페이지 접근 없이도
            확인할 수 있도록 UI를 구현했습니다.
            <br />
            상품 수량을 +/- 버튼을 통해 수량을 쉽게 설정할 수 있도록 하였으며, 변경된 수량에 따라 가격을 실시간으로
            변경하여 구매 가격을 쉽게 파악할 수 있도록 하였습니다.
            <br />
            상품 header를 상단에 고정시켜 상세 정보, 후기, 문의 영역으로 빠르게 이동할 수 있도록 설계했습니다. <br />
            구매 가능 시간까지 남은 시간을 실시간으로 표시하였으며, 남은 시간이 마감된 이후 결제 버튼을 비활성화하여
            마감된 상품에 구매를 방지했습니다.
            <br />
            상세 정보 이미지를 더보기 버튼을 통해 일부만 표시하여 사용자의 스크롤 부담을 줄여 사용자 경험을
            향상시켰습니다.
            <br />
            progress와 별점을 통해 상품에 대한 평균 별점 및 별점 분포를 표시하여 사용자의 구매 결정에 도움을 주도록
            설계하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(6)}
        >
          상품 주문 및 결제
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9C%A0%EC%9A%A9%ED%95%98%EA%B2%8C-form-%EA%B4%80%EB%A6%AC%ED%95%B4%EC%A3%BC%EB%8A%94-React-Hook-Form-%ED%95%84%EC%9A%94%ED%95%9C%EB%A7%8C%ED%81%BC-%EC%8B%B9-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B4%A4%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/react-daum-postcode%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EC%A3%BC%EC%86%8C-%EA%B0%92-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%A3%BC%EB%AC%B8%EC%9E%90-%EA%B2%B0%EC%A0%9C-Form%EC%9D%84-%EC%83%9D%EC%84%B1%ED%95%98%EA%B3%A0-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%8E%98%EC%9D%B4-%EA%B2%B0%EC%A0%9C-%EC%B2%98%EB%A6%AC%EB%8F%84-%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%ED%86%A0%EC%8A%A4%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%8B%A0%EC%9A%A9%EC%B9%B4%EB%93%9C-%EA%B2%B0%EC%A0%9C%EA%B9%8C%EC%A7%80-%EC%99%84%EB%A3%8C'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[6] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[6] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            React Hook Form을 이용하여 주문 form을 구현했습니다. 사용자의 배송지 정보가 존재할 경우 기본 배송지를
            default로 설정하여 주문 정보를 편하게 작성할 수 있도록 설계하였습니다.
            <br />
            설정한 배송지 이름을 선택할 경우 다른 배송지로 form 값을 변경하고, 직접 입력 버튼을 선택할 시 모든 form을
            초기화하도록 구현했습니다.
            <br />
            배송 메시지를 기본으로 제공하며, 직접 입력하기를 선택할 경우 custom message를 입력할 수 있도록 설계했습니다.
            <br />
            카카오페이 결제 시 주문 정보를 생성하고 서버로부터 전송된 결제 URL을 표시하여 결제 완료 시 서버로부터
            postMessage를 통해 주문 결과와 주문 번호를 반환받아 주문 완료 페이지로 리다이렉트하도록 구현했습니다.
            <br />
            신용카드 결제 시 포트원 토스페이먼츠 API를 이용하여 신용 카드 결제를 진행한 뒤, 서버로부터 주문 정보를
            전달하여 반환된 주문 번호로 주문 완료 페이지로 리다이렉트 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(7)}
        >
          주문(결제) 내역
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[7] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[7] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            주문 상태에 따라 주문 내역을 Load More 방식으로 렌더링하였습니다.
            <br />
            주문 상태에 맞춰 후기, 문의, 구매 취소 등의 버튼을 표시하도록 조건부 렌더링을 구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(8)}
        >
          상품 별점
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/0.1-%EB%8B%A8%EC%9C%84%EB%A1%9C-%EB%B3%84%EC%A0%90%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%98%EA%B3%A0-%EC%B6%9C%EB%A0%A5%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8B%A4%EB%84%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[8] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[8] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            0.1 단위로 표시되는 별점을 클릭과 드래그를 통해 설정할 수 있도록 구현했습니다. <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(9)}
        >
          상품 좋아요(찜)
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[9] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[9] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            상품 리스트 페이지와 상세페이지에서 상품 좋아요 버튼을 구현하였습니다.
            <br />
            회원일 경우, 상품 API 호출 시 JWT header를 추가하여 호출하여 사용자가 좋아요한 상품을 함께 반환받도록
            설계했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(10)}
        >
          상품 검색 및 자동완성
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/hangul-js%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1%EC%9C%BC%EB%A1%9C-%EA%B2%80%EC%83%89-%ED%80%84%EB%A6%AC%ED%8B%B0%EB%A5%BC-%EB%86%92%EC%97%AC%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[10] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[10] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            검색창에 focus 할 경우, 최근 검색어 목록을 표시하며 키보드와 마우스를 이용하여 원하는 검색어를 선택할 수
            있습니다.
            <br />
            검색어 삭제와 검색 기록 저장 여부를 선택하도록 하여 사용자 경험을 향상시켰습니다.
            <br />
            검색어 입력 시 입력된 검색어를 포함하는 검색어 목록을 반환하고 키보드와 마우스를 이용하여 선택할 수 있도록
            구현했습니다.
            <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(11)}
        >
          커뮤니티 게시글 CRUD
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/React-Quill%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1%EA%B3%BC-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EC%84%A4%EC%A0%95%ED%95%B4%EB%B3%B4%EA%B8%B0-%EB%82%9C%EC%9D%B4%EB%8F%84-%EC%83%81'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/React-Quill%EB%A1%9C-%EC%9E%85%EB%A0%A5%ED%95%9C-%EB%82%B4%EC%9A%A9%EC%9D%84-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-%EC%B6%9C%EB%A0%A5%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link href={'https://velog.io/@syub98774/tailwindcsstypography'}>
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[11] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[11] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            React Quill을 이용하여 글자 스타일링(볼드, 이탤릭, 밑줄), 리스트, 링크, 이미지 삽입 등 다양한 서식을
            포함하여 게시글을 작성할 수 있도록 했습니다.
            <br />
            이미지 업로드 핸들러를 구현하고, 붙여넣기한 이미지를 File 객체로 변환하여 S3에 업로드함으로써 콘텐츠 크기를
            줄였습니다.
            <br />
            업로드 된 이미지를 이미지 영역에 표시하여 삭제 및 대표 이미지 설정을 할 수 있도록 설계하여 게시글을 쉽게
            관리할 수 있도록 했습니다.
            <br />
            Dompurify와 dangerouslySetInnerHTML를 이용하여 안전하게 HTML 태그를 렌더링 했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(12)}
        >
          지역 게시글 위치 정보
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[12] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[12] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            지역 게시글 작성 시 네이버 지도 MAP과 geolocation을 이용하여 사용자의 위치를 표시하고 마커를 이동시켜 거래
            위치를 설정할 수 있도록 설계했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(13)}
        >
          랜딩 페이지
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[13] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[13] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            React-slick을 이용하여 메인 Carosel과 상품 Carousel을 구현했습니다. <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(14)}
        >
          UI/UX 및 웹 접근성
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/CSS%EB%A1%9C-%EA%BE%B8%EB%AF%B8%EB%8A%94-%EC%A7%84%ED%96%89%EC%9D%98-%EA%B8%B8-Progress-%ED%83%9C%EA%B7%B8-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/input-number-%EC%9E%85%EB%A0%A5-%EB%8C%80%EC%8B%A0-%EB%B2%84%ED%8A%BC%EC%9C%BC%EB%A1%9C'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%95%84%EC%BD%94%EB%94%94%EC%96%B8-%ED%86%A0%EA%B8%80%EB%8F%84-%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0-%EC%9B%B9-%EC%A0%91%EA%B7%BC%EC%84%B1%EB%8F%84-%EB%86%92%EC%97%AC%EB%B3%B4%EA%B8%B0'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/input-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EC%8B%9C-%EB%B0%B0%EA%B2%BD%EC%83%89%EC%9D%B4-%EC%A7%80-%EB%A7%98%EB%8C%80%EB%A1%9C-%EB%B3%80%EA%B2%BD%EB%90%9C%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[14] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[14] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            WAI-ARIA를 적용하여 모든 사용자가 웹사이트를 쉽게 이용할 수 있도록 구현했습니다.
            <br />
            콘텐츠가 로드되는 동안 사용자에게 빈 화면 대신 Loading Spinner와 Skeleton UI를 표시하여 사용자 경험을
            향상시켰습니다.
            <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(15)}
        >
          프로젝트 성능 개선
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%86%8D%EB%8F%84%EB%A5%BC-2%EB%B0%B0%EB%A1%9C-Next.js-Image-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EB%B0%98%EB%B3%B5%EB%90%98%EB%8A%94-li-%EC%9E%91%EC%84%B1%EC%9D%80-%EA%B9%94%EB%81%94%ED%95%98%EA%B2%8C-%EC%83%81%EC%88%98%EC%B2%98%EB%A6%AC%ED%95%B4%EC%84%9C-%ED%95%B4%EA%B2%B0%ED%95%B4%EB%B2%84%EB%A6%AC%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/dynamic%EA%B3%BC-skeleton-UI%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%80%84%EB%A6%AC%ED%8B%B0-%EC%83%81%EC%8A%B9%EC%8B%9C%ED%82%A4%EA%B8%B0'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[15] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[15] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            Lighthouse를 활용하여 웹사이트의 성능을 분석하고, 코드 스플리팅과 Dynamic 등을 활용하여 로딩 속도 최적화,
            코드 최적화, 웹 접근성 개선 등의 작업을 수행하여 전반적인 성능을 향상시켰습니다.
            <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(16)}
        >
          도메인 연결 및 배포
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Next.js%EB%A1%9C-S3Cloudfront-%EB%B0%B0%ED%8F%AC-%EC%A4%91-%EC%9D%BC%EC%96%B4%EB%82%9C-%EC%88%98%EB%A7%8E%EC%9D%80-%EC%98%A4%EB%A5%98%EB%93%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/Next.js-%EC%A0%95%EC%A0%81-%EB%B0%B0%ED%8F%AC%EC%9D%98-%EC%B6%95%EB%B3%B5%EC%9D%B4-%EB%81%9D%EC%9D%B4...-%EC%97%86%EB%84%A4...-%EC%A0%95%EC%A0%81-%EB%B0%B0%ED%8F%AC%EC%9D%98-%EC%98%A4%EB%A5%98-%EC%A0%95%EB%A6%AC'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EA%B2%B0%EA%B5%AD...-Vercel%EB%A1%9C-%EB%B0%B0%ED%8F%AC%EB%A5%BC-%EB%B3%80%EA%B2%BD%ED%96%88%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[16] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[16] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            Vercel을 이용해 웹사이트를 배포하고, AWS Route 53을 통해 도메인을 설정하여 사용자들이 해당 도메인을 통해
            웹사이트에 접근할 수 있도록 하였습니다.
            <br />
            또한, 도메인 연결을 통해 CORS 오류를 해결하여 원활한 데이터 통신이 가능하도록 하였습니다.
          </div>
        )}
      </li>
    </ul>
  );
}
