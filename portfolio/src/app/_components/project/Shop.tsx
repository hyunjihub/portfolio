'use client';

import Image from 'next/image';
import cart from '/public/project/shop/cart.gif';
import more from '/public/project/more.svg';
import product from '/public/project/shop/product.gif';
import responsive from '/public/project/shop/responsive.gif';
import search from '/public/project/shop/search.gif';
import theme from '/public/project/shop/theme.gif';
import { useState } from 'react';

export default function Shop() {
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
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(0)}
        >
          반응형 디자인
          <div className="flex gap-10 items-center">
            <div className="hidden md:flex gap-3"></div>
            <Image className={`${openIndexes[0] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[0] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={responsive} alt="responsive" width={0} height={0} />
            다양한 디바이스에서도 접근 가능하도록 Tailwind를 활용하여 반응형을 구현하였습니다. <br />
            모바일 해상도에서 nav를 햄버거 메뉴 안으로 이동시켜 좁은 width에서도 레이아웃이 깨지지 않고 깔끔하게
            유지되도록 했습니다. <br />
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          화이트/다크 테마
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
            </div>
            <Image className={`${openIndexes[1] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[1] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={theme} alt="theme" width={0} height={0} />
            테마 속성을 Recoil로 관리하여 전역 상태로 테마를 변경하고, 모든 컴포넌트에서 일관된 스타일을 유지할 수
            있도록 설계하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          상품 상세페이지
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
              <Image className={`${openIndexes[2] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[2] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={product} alt="product" width={0} height={0} />
            Fake Store API를 통해 한 번만 상품 데이터를 fetch한 후, 해당 데이터를 Recoil 상태로 저장하여 관리함으로써
            동일한 데이터를 다시 호출하지 않고 재사용할 수 있도록 구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          장바구니
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
              <Image className={`${openIndexes[3] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[3] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={cart} alt="cart" width={0} height={0} />
            Recoil의 atom으로, 장바구니 상태를 로컬 스토리지에 저장하여 새로고침 시에도 유지시켰습니다.
            <br />
            Recoil의 selector로, 장바구니에 담긴 상품 목록을 가져와 cartState의 항목 ID에 맞는 제품만 필터링하여
            장바구니에 표시할 데이터를 반환하도록 했습니다.
            <br />
            cart 상태에 이미 장바구니에 있는 상품이라면 개수를 1 증가시키고, 없는 상품이라면 새로운 항목으로 추가하고
            상품의 개수가 1이면 해당 상품을 삭제하고, 1보다 많으면 개수를 1 감소시키도록 구현했습니다.
          </div>
        )}
      </li>

      <li className="max-w-[370px] md:maw-w-[750px] lg:max-w-[600px]">
        <header
          className="w-[360px] md:w-[740px] lg:w-[800px] flex justify-between items-center gap-10 text-base md:text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          상품 검색
          <div className="flex justify-center items-center gap-10 text-base md:text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="hidden md:flex gap-3"></div>
              <Image className={`${openIndexes[4] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
            </div>
          </div>
        </header>
        {openIndexes[4] && (
          <div className="w-[360px] md:w-[740px] lg:w-[800px] py-2 px-5 md:px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[380px] md:max-w-[600px]" src={search} alt="search" width={0} height={0} />
            검색어를 입력할 경우, 저장된 상품 중 상품명이 일치하는 상품들만 반환하여 검색 목록에 표시하도록
            구현했습니다.
            <br />
            원하는 검색어를 클릭 할 경우, 검색 목록을 비워주고 클릭한 상품 상세페이지로 이동하게 됩니다.
          </div>
        )}
      </li>
    </ul>
  );
}
