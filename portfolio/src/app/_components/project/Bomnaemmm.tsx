'use client';

import Image from 'next/image';
import Link from 'next/link';
import blogsearch from '/public/project/bomnaemmm/blogsearch.gif';
import filter from '/public/project/bomnaemmm/filter.gif';
import find from '/public/project/bomnaemmm/find.gif';
import like from '/public/project/bomnaemmm/like.gif';
import login from '/public/project/bomnaemmm/login.gif';
import more from '/public/project/more.svg';
import navermap from '/public/project/bomnaemmm/navermap.gif';
import profile from '/public/project/bomnaemmm/profile.gif';
import request from '/public/project/bomnaemmm/request.gif';
import reset from '/public/project/bomnaemmm/reset.gif';
import review from '/public/project/bomnaemmm/review.gif';
import scroll from '/public/project/bomnaemmm/scroll.gif';
import search from '/public/project/bomnaemmm/search.gif';
import signup from '/public/project/bomnaemmm/signup.gif';
import { useState } from 'react';
import velog from '/public/link/velog.svg';
import withdraw from '/public/project/bomnaemmm/withdraw.gif';

export default function Bomnaemmm() {
  const [openIndexes, setOpenIndexes] = useState(Array(11).fill(false));

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
          회원가입 / 회원탈퇴
          <div className="flex gap-10 items-center">
            <div className="hidden md:flex gap-3">
              <Link
                href={
                  'https://velog.io/@syub98774/%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EB%8F%99'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
              <Link
                href={
                  'https://velog.io/@syub98774/Firebase%EB%A1%9C-Auth-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4.-2'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={signup} alt="signup" width={0} height={0} />
            회원가입시 이메일, 비밀번호 형식 검사와 닉네임 중복 검사를 거친 뒤, 회원가입을 진행하도록 구현했습니다.
            <br />
            회원가입시 users, likes Collection에 document를 생성하여 프로필 정보와 리뷰 데이터를 저장할 수 있도록
            하였습니다.
            <Image className="max-w-[380px] md:max-w-[600px]" src={withdraw} alt="withdraw" width={0} height={0} />
            회원탈퇴시 생성된 document를 삭제하여 회원 관련 document를 모두 삭제하도록 구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          로그인/로그아웃
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EB%8F%99'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={login} alt="login" width={0} height={0} />
            로그인 시 users Collection에서 email field가 동일한 document를 반환하도록 하여 Redux에 유저 정보가
            저장되도록 하였습니다.
            <br />
            Redux-persist를 이용해 Redux 변수를 localStorage에 저장하여 새로고침 시 데이터가 소실되지 않고 유지될 수
            있도록 하였습니다.
            <br />
            Outlet을 이용하여 회원만 접근 가능한 페이지에 한해 로그인된 상태가 아닐 경우, 로그인 페이지로 이동되도록
            설계하였습니다.
            <br />
            로그아웃 시 Redux 변수 값을 초기화시켜주었습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          프로필 변경
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Firebase%EB%A1%9C-Auth-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4.-2'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={profile} alt="profile" width={0} height={0} />
            이미지 업로드 시 Firebase의 Storage에 저장한 후, 반환된 URL을 이용하여 이미지를 렌더링하도록 구현했습니다.
            <br />
            닉네임과 프로필 이미지 변경 시 users Collection에서 uid field가 동일한 document에 변경된 값을 업데이트하고,
            Redux 변수 값을 변경하도록 설계했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          비밀번호 찾기 / 재설정
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%ED%8C%8C%EC%9D%B4%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%8A%A4-%EC%97%B0%EB%8F%99'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={find} alt="find" width={0} height={0} />
            회원은 입력받은 Password을 reauthenticateWithCredential을 이용하여 사용자를 재인증한 뒤 비밀번호 재설정을
            하도록 설계하였습니다.
            <br />
            비회원 비밀번호 재설정은 가입한 이메일 주소를 통해 비밀번호 재설정 링크를 전송하도록 구현하였습니다.
            <Image className="max-w-[380px] md:max-w-[600px]" src={reset} alt="reset" width={0} height={0} />
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          무한스크롤을 이용한 맛집 조회
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Firestore%EC%99%80-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A7%9B%EC%A7%91-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A5%BC-%ED%91%9C%EC%8B%9C%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/Firestore%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%ED%95%84%ED%84%B0%EB%A7%81%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%98%EC%98%80%EB%8B%A4'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={scroll} alt="scroll" width={0} height={0} />
            Firestore에 맛집 데이터를 저장해주었습니다. 음식점의 경우 place_id를 1000번, 카페의 경우 place_id를
            2000번대로 저장하였습니다. <br />
            IntersectionObserver을 이용하여 무한스크롤을 구현하였으며, Firestore의 query를 통해 음식점/카페를 구분하여
            출력하도록 설계하였습니다. <br />
            <Image className="max-w-[380px] md:max-w-[600px]" src={filter} alt="filter" width={0} height={0} />
            useState와 useEffect를 이용하여 위치, 종류 필터가 변경될 때마다 필터 값에 맞도록 query를 변경하여 새로운
            리스트를 출력하도록 구현했습니다. <br />
            또한, 필터 값을 배열로 저장하여 필터링 중복 선택이 가능하도록 하여 사용자 경험을 향상 시켰습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(5)}
        >
          나만의 맛집 좋아요(저장)
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Firestore%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
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
            <Image className="max-w-[380px] md:max-w-[600px]" src={like} alt="like" width={0} height={0} />
            Firestore의 Likes Collection에 uid와 일치하는 문서를 읽어와 좋아요한 장소의 place_id 배열을 저장하여
            restaurants Collection에서 place_id와 일치하는 데이터에 좋아요 표시가 되도록 구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(6)}
        >
          맛집 후기 등록 및 조회
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Firestore%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-review%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
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
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={review} alt="review" width={0} height={0} />
            Firestore의 reviews Collection에 후기 데이터를 저장하여 등록하도록 설계하였습니다. <br />
            uid field 값이 사용자 uid와 일치할 경우 삭제 버튼을 활성화하여 사용자 본인만 후기를 삭제할 수 있도록
            하였습니다. <br />
            uid field 값이 사용자 uid와 일치하면서 TimeStamp를 기준으로 최근 등록된 3개의 후기를 반환하여 마이페이지에
            표시되도록 구현했습니다. <br />
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(7)}
        >
          네이버 지도와 블로그 검색 결과
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Cloud-Functions%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%84%A4%EC%9D%B4%EB%B2%84-API%EB%A5%BC-%ED%98%B8%EC%B6%9C%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[7] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[7] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={navermap} alt="navermap" width={0} height={0} />
            데이터에 저장된 주소를 네이버 geocode을 통해 좌표로 변환한 뒤, 네이버 MAP API에 해당 값을 전달하여 해당
            위치를 마커와 함께 표시하였습니다.
            <Image className="max-w-[380px] md:max-w-[600px]" src={blogsearch} alt="blogsearch" width={0} height={0} />
            데이터에 저장된 상호명을 네이버 블로그 검색 API에 전달하여 맛집과 관련된 블로그 글을 표시하도록
            구현하였습니다. 지도와 검색 API의 CORS 에러를 해결하기 위해 Firebase의 Cloud Functions를 사용하여 프록시
            서버를 만들어 외부 API 호출을 대신 수행하도록 구현하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(8)}
        >
          상호명, 메뉴로 맛집 검색
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Firestore%EC%99%80-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%A7%9B%EC%A7%91-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A5%BC-%ED%91%9C%EC%8B%9C%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
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
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={search} alt="search" width={0} height={0} />
            restaurants Collection에서 search 필드를 검색하여 일치하는 데이터를 출력하도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(9)}
        >
          나만의 맛집 등록 요청 및 관리자 계정
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[9] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[9] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={request} alt="request" width={0} height={0} />
            요청 데이터를 Firestore의 requests Collection에 저장하여 사용자의 추천 맛집 등록을 요청할 수 있도록
            구현하였습니다. <br />
            사용자가 요청한 목록을 진행 상태까지 포함하여 확인할 수 있도록 하였습니다.
            <br />
            user documnet 중 isAdmin field 값이 true인 계정에 한해 isAdmin(Redux)을 true로 설정하여 관리자 전용 기능을
            이용할 수 있도록 설계 하였습니다. <br />
            관리자 계정은 관리자 계정은 모든 후기를 삭제할 수 있는 권한을 가지고, requests Collection에 등록된 모든
            요청들이 표시되도록 구현하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(10)}
        >
          기타 UI/UX
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/styled-reset%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-%EC%B4%88%EA%B8%B0-CSS%EB%A5%BC-%EC%84%B8%ED%8C%85%ED%95%B4%EC%A3%BC%EC%97%88%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/Header%EC%99%80-Sidebar%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%ED%99%94%EB%A9%B4%EC%9D%84-%EA%B5%AC%EC%84%B1%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/Embla-Carousel%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/%EB%B4%84%EB%82%B4%EC%9D%8C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4'
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
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            3분기 반응형 UI를 설계하여 다양한 디바이스에서 접근 시에도 편리하게 사용할 수 있도록 설계하였습니다. <br />
            Embla Carousel을 활용하여 랜딩 페이지를 구현하였습니다. <br />
            사용자 테스트를 통해 사용자가 불편함을 느끼거나 동작 방식이 모호한 기능들을 직관적으로 수정하였습니다.
            <br />
          </div>
        )}
      </li>
    </ul>
  );
}
