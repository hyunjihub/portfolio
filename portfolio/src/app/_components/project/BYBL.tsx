'use client';

import Image from 'next/image';
import cart from '/public/project/BYBL/cart.gif';
import like from '/public/project/BYBL/like.gif';
import list from '/public/project/BYBL/list.gif';
import more from '/public/project/more.svg';
import order from '/public/project/BYBL/order.gif';
import product from '/public/project/BYBL/product.gif';
import search from '/public/project/BYBL/search.gif';
import signup from '/public/project/BYBL/signup.gif';
import store from '/public/project/BYBL/store.gif';
import { useState } from 'react';

export default function BYBL() {
  const [openIndexes, setOpenIndexes] = useState(Array(8).fill(false));

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
          회원가입 및 카카오 소셜 로그인
          <div className="flex gap-10 items-center">
            <div className="flex gap-3"></div>
            <Image className={`${openIndexes[0] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[0] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={signup} alt="signup" width={0} height={0} />
            회원가입시 React Hook Form을 활용하여 이메일, 비밀번호 형식 검사를 거친 뒤, 회원가입을 진행하도록
            구현했습니다.
            <br />
            카카오 소셜 로그인 API를 통해 간편 로그인을 구현하여 빠르게 회원가입/로그인이 가능하도록 했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          스토어 목록 및 판매 상품 목록
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[1] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[1] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={list} alt="list" width={0} height={0} />
            IntersectionObserver을 이용하여 무한스크롤을 구현하였으며, Firestore의 query를 활용하여 스토어와 판매 상품이
            선택한 필터링 순으로 제공되도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          스토어 정보 및 팔로우
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
              <Image className={`${openIndexes[2] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[2] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={store} alt="store" width={0} height={0} />
            스토어의 정보와 스토어 Id를 통해 해당 스토어가 판매하고 있는 상품들을 한 눈에 확인 가능하도록
            구현하였습니다.
            <br />
            팔로우 기능을 통해 마음에 드는 스토어들만 저장하여 마이페이지에서 확인할 수 있도록 했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          상품 정보 및 옵션 선택
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
              <Image className={`${openIndexes[2] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[3] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={product} alt="product" width={0} height={0} />
            상품 페이지에서 옵션과 수량 선택 시, 실시간으로 총 금액을 계산하여 표시하도록 구현하였습니다.
            <br />
            선택한 수량을 장바구니에 담거나 바로 주문 할 수 있는 선택지를 제공하여 사용자 경험을 향상 시켰습니다. <br />
            상품 상세이미지를 일부만 표시하여 스크롤 거리를 단축하여 사용자가 피로감을 해소하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          위시리스트
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[4] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[4] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={like} alt="like" width={0} height={0} />
            좋아요 기능을 통해 사용자가 마음에 든 상품을 저장하고 마이페이지에서 확인할 수 있습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(5)}
        >
          장바구니
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[5] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[5] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={cart} alt="cart" width={0} height={0} />
            비회원일 경우, sessionStorage에 장바구니를 저장하도록 설계하여 로그인을 하지 않았을 때에도 장바구니에 상품을
            담을 수 있습니다.
            <br />
            회원일 경우, Firestore에 Cart Collection에 상품을 저장하여 재로그인을 하더라도 장바구니에 상품이 유지되도록
            설계하였습니다.
            <br />
            비회원에서 로그인 할 경우, sessionStorage에 담겨있는 상품을 Firestore에 저장하도록 설계하여 로그인 했을
            경우에도 장바구니가 유지되도록 하였습니다. <br />
            장바구니 페이지에서 상품을 전체 선택, 일부 선택할 수 있는 선택지를 제공하였으며 선택한 상품 삭제와 전체 상품
            삭제를 통해 사용자가 편리하게 장바구니를 이용할 수 있도록 설계하였습니다. <br />
            선택한 상품 또는 전체 상품을 선택하여 주문할 수 있고, 주문 완료 시 해당 상품들만 Cart Collection에서
            삭제하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(6)}
        >
          상품 주문 및 주문 내역
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[6] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[6] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={order} alt="order" width={0} height={0} />
            React Hook Form을 이용하여 주문 Form을 구현하였고 다음 우편번호 API를 통해 주소지를 간편하게 찾을 수 있도록
            하였습니다. <br />
            주문자 정보와 수령인 정보 Form을 별도로 두고 주문자와 수령인 정보 동일 체크박스를 체크할 경우, 주문자 정보
            데이터를 수령인 정보에 동기화하도록 구현했습니다.
            <br />
            기본 배송 메시지 외에 직접 입력하기 option을 두어 직접 입력하기를 선택할 경우, 배송 메시지 입력 input이
            표시되도록 하였습니다. <br />
            주문 시, 주문번호(년월일-랜덤5자리)를 랜덤으로 생성하고 다른 주문번호와 중복되지 않도록 query하여 Order
            Collection에 주문 데이터를 추가해주었습니다.
          </div>
        )}
      </li>

      <li className="max-w-[400px] md:max-w-[600px]">
        <header
          className="w-[400px] md:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(7)}
        >
          상품 검색 및 자동완성
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[7] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[7] && (
          <div className="w-[400px] md:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={search} alt="search" width={0} height={0} />
            React Select 라이브러리를 통해 검색 input을 구현하였고, 입력 값을 포함하는 검색 단어를 반환하도록
            하였습니다.
          </div>
        )}
      </li>
    </ul>
  );
}
