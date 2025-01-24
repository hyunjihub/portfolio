'use client';

import Image from 'next/image';
import Link from 'next/link';
import chat from '/public/project/brave/chat.gif';
import find from '/public/project/brave/find.gif';
import img from '/public/project/brave/img.gif';
import login from '/public/project/brave/login.gif';
import more from '/public/project/more.svg';
import notice from '/public/project/brave/notice.gif';
import post from '/public/project/brave/post.gif';
import profile from '/public/project/brave/profile.gif';
import reset from '/public/project/brave/reset.gif';
import review from '/public/project/brave/review.gif';
import signup from '/public/project/brave/signup.gif';
import { useState } from 'react';
import velog from '/public/link/velog.svg';

export default function Brave() {
  const [openIndexes, setOpenIndexes] = useState(Array(10).fill(false));

  const handleToggle = (index: number) => {
    setOpenIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <ul className="mt-2 mb-24 text-center">
      <li className="mt-3">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(0)}
        >
          모든 페이지 UI/UX 및 CSS
          <div className="flex gap-10 items-center">
            <div className="flex gap-3">
              <Link
                href={
                  'https://velog.io/@syub98774/%EC%98%88%EC%81%9C-Alert%EC%B0%BD%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%84-%EB%95%90-SweetAlert2%EB%A5%BC-%EC%93%B0%EC%8B%AD%EC%87%BC'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
              <Link
                href={
                  'https://velog.io/@syub98774/%EC%9B%B9-%ED%8F%B0%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A5%BC-%EB%8D%94-%EC%98%88%EC%81%98%EA%B2%8C-%EA%BE%B8%EB%A8%80%EB%B3%B4%EB%8F%84%EB%A1%9D-%ED%95%98%EC%9E%90'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
              <Link
                href={
                  'https://velog.io/@syub98774/%EC%95%84%EC%9D%B4%EC%BD%98%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%A0-%EB%95%8C-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-React-Icons%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
              <Link
                href={
                  'https://velog.io/@syub98774/API-%ED%98%B8%EC%B6%9C-%EC%8B%9C-%EB%A1%9C%EB%94%A9-%EC%8A%A4%ED%94%BC%EB%84%88%EB%A5%BC-%ED%86%B5%ED%95%B4-%EB%A1%9C%EB%94%A9%EC%A4%91-%EC%83%81%ED%83%9C%EC%9E%84%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%9E%90'
                }
              >
                <Image src={velog} alt="velog" width={20} height={20} />
              </Link>
            </div>
            <Image className={`${openIndexes[0] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[0] && (
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            Photoshop을 이용하여 화면(UI/UX)을 설계했습니다.
            <br />
            Styled Components의 컴포넌트 기반 스타일링을 통해 UI와 로직을 분리하지 않고 유지보수가 용이하도록
            구현했습니다.
            <br /> 프로젝트를 진행하며 처음으로 CSS를 직접 구현해봄으로써 CSS의 기본 구조를 이해하게 되었습니다.
            레이아웃 구조를 효율적으로 잡는 방법과 상태에 따라 스타일이 동적으로 변경되는 UI의 필요성에 대해 인지하게
            되었습니다.
            <br />
            사용자가 학습을 하지 않고도 친숙하게 사이트를 이용하는 것에 중요성을 깨닫게 된 프로젝트였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(1)}
        >
          로그인
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9C%A0%EC%A0%80-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={login} alt="login" width={0} height={0} />
            JWT 토큰을 사용하여 사용자를 식별하였으며, 유저 정보와 토큰을 Redux(Session Storage)를 통해 관리하였습니다.
            <br />
            Access Token이 만료되기 전, Reissue를 통해 사용자가 지속적으로 로그인 상태를 유지할 수 있도록
            구현하였습니다.
            <br />
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(2)}
        >
          회원가입
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9C%A0%EC%A0%80%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={signup} alt="signup" width={0} height={0} />
            정규표현식을 통해 유효성 검사를 진행하여 필드 규칙에 맞지 않는 값들이 서버로 전송되지 않도록 설계했습니다.
            <br />
            회원가입 과정에서는 이메일 인증을 도입하여, 인증된 이메일로만 가입이 가능하도록 구현하였습니다. 또한, 이메일
            인증 후에는 이메일 값을 변경할 수 없도록 하여 인증된 이메일과 가입된 이메일의 일치성을 보장하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(3)}
        >
          계정 찾기 및 비밀번호 재설정
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center"></div>
          </div>
          <Image className={`${openIndexes[3] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
        </header>
        {openIndexes[3] && (
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={find} alt="find" width={0} height={0} />
            아이디 찾기 시, 가입된 이메일 주소를 통해 아이디의 일부를 반환하도록 구현하였습니다.
            <br />
            비밀번호 찾기 시에는 아이디와 이메일 주소를 입력받아 비밀번호 재설정 링크가 포함된 이메일을 전송할 수 있도록
            설계하였습니다.
            <Image className="max-w-[600px]" src={reset} alt="reset" width={0} height={0} />
            비회원 비밀번호 재설정 시, URL에 authcode 쿼리 파라미터를 포함하여 변경할 비밀번호와 함께 서버로
            전송함으로써 안전하게 비밀번호를 재설정할 수 있도록 설계하였습니다.
            <br />
            회원 비밀번호 재설정 시에는 기존 비밀번호를 입력하여 본인 인증을 거친 후, 비밀번호를 재설정할 수 있도록
            구현하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(4)}
        >
          프로필 페이지
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%9C%A0%EC%A0%80-%EC%A0%95%EB%B3%B4%EB%A5%BC-%ED%99%95%EC%9D%B8%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={profile} alt="profile" width={0} height={0} />
            프로필 모드와 수정 모드를 구분하여 수정 모드 설정 시 닉네임, 자기소개 문구와 프로필 이미지를 변경할 수
            있도록 설계했습니다.
            <br />
            내가 작성한 게시글과 받은 후기를 확인할 수 있도록 하여, 다른 사용자가 프로필 페이지를 확인할 경우, 해당
            사용자의 후기와 별점 정보를 통해 신뢰할 수 있는 사용자임을 확인할 수 있도록 구현하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(5)}
        >
          이미지 업로드 구현 및 확대 모달
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%ED%94%84%EB%A1%9C%ED%95%84-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B1%84%ED%8C%85-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%A0%84%EC%86%A1%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%8D%94%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={img} alt="img" width={0} height={0} />
            REST API를 통해 이미지 파일 업로드 시 S3에 이미지가 저장되도록 설계하였습니다.
            <br />
            프로필 이미지와 채팅 이미지는 클릭 시 확대가 되도록 구현하여, 사용자가 큰 이미지를 확인할 수 있도록 함으로써
            사용자 경험을 향상 시켰습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(6)}
        >
          게시글
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EA%B2%8C%EC%8B%9C%ED%8C%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B3%A0-CRUD%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={post} alt="post" width={0} height={0} />
            게시글 내 필터링 기능을 통해 사용자가 원하는 반경 내의 게시글만 표시되도록 구현하였습니다.
            <br />
            게시글 작성 시 각 필드의 실시간 글자 수를 표시하고, 글자 수를 초과할 경우 alert를 통해 사용자가 불가능한
            값을 입력하지 않도록 설계하였습니다.
            <br />
            가격 값에 콤마(,)를 자동으로 삽입하게 하여 사용자가 가격을 쉽게 확인할 수 있도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(7)}
        >
          후기 및 별점
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/Modal%EC%9D%84-%ED%86%B5%ED%95%B4-%ED%9B%84%EA%B8%B0%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={review} alt="review" width={0} height={0} />
            의뢰를 완료할 때 후기 모달이 표시되어 후기를 작성할 수 있게 설계했습니다.
            <br />
            후기 내 별점을 드래그와 클릭을 통해 0.5 단위로 설정할 수 있게 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(8)}
        >
          채팅
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/%EC%B1%84%ED%8C%85-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-%EC%B1%84%ED%8C%85-UI%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/WebSocket%EA%B3%BC-STOMP%EB%A1%9C-%EC%B1%84%ED%8C%85%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
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
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={chat} alt="chat" width={0} height={0} />
            Websocket과 STOMP를 이용하여 채팅을 송수신할 수 있도록 구현하였습니다.
            <br />
            같은 사용자가 연속적으로 메시지를 전송할 경우, 마지막으로 보낸 메시지에만 시간을 표시하도록 하여 채팅 화면
            내 과도한 정보 전달을 방지하고 사용자 경험을 향상시켰습니다.
            <br />
            00시를 기준으로 채팅을 구분하여 날짜 변경을 한눈에 파악할 수 있도록 하였습니다.
            <br /> 채팅 목록 필터링 기능을 통해 의뢰 상태에 따라 채팅방을 구분하였습니다.
            <br />
            읽지 않은 채팅이 있을 경우 이를 표시하고, 채팅방에 입장하면 항상 채팅이 읽음 처리되도록 설계하여 읽음 처리
            상태가 정확하게 표시되도록 하였습니다.
          </div>
        )}
      </li>

      <li className="max-w-[600px]">
        <header
          className="w-[800px] flex justify-between items-center gap-10 text-lg font-semibold border px-6 py-3"
          onClick={() => handleToggle(9)}
        >
          알림
          <div className="flex justify-center items-center gap-10 text-lg font-semibold">
            <div className="flex gap-10 items-center">
              <div className="flex gap-3">
                <Link
                  href={
                    'https://velog.io/@syub98774/SSE%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%B1%84%ED%8C%85-%EC%95%8C%EB%A6%BC%EA%B3%BC-%EC%9D%98%EB%A2%B0-%EC%83%81%ED%83%9C%EB%A5%BC-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%9C%BC%EB%A1%9C-%EB%B0%98%EC%98%81%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
                <Link
                  href={
                    'https://velog.io/@syub98774/React-Toastify%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%95%8C%EB%A6%BC%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90'
                  }
                >
                  <Image src={velog} alt="velog" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Image className={`${openIndexes[9] ? '' : 'rotate-180'}`} src={more} alt="more" width={20} height={20} />
          </div>
        </header>
        {openIndexes[9] && (
          <div className="w-[800px] py-2 px-10 bg-gray-100 border flex flex-col items-center justify-center text-sm">
            <Image className="max-w-[600px]" src={notice} alt="notice" width={0} height={0} />
            SSE를 통해 채팅 방에 입장하지 않은 경우에도 서버로부터 데이터를 전송받아 실시간으로 알림을 표시할 수 있게
            설계하였습니다.
            <br />
            react toastify을 활용하여 SSE로 받은 메시지를 일시적으로 표시하였고, toast를 클릭 시, 채팅 페이지로 이동할
            수 있게 해주었습니다.
          </div>
        )}
      </li>
    </ul>
  );
}
