'use client';

import Arrow from '../layout/Arrow';
import Image from 'next/image';
import Link from 'next/link';
import calender from '/public/profile/calender.svg';
import call from '/public/profile/call.svg';
import character from '/public/character.png';
import location from '/public/profile/location.svg';
import mail from '/public/profile/mail.svg';
import person from '/public/profile/person.svg';
import school from '/public/profile/school.svg';

export default function About() {
  return (
    <section className="max-w-screen-lg mt-16 flex gap-24">
      <div className="flex flex-col justify-center">
        <Image className="object-cover" src={character} alt="character" width={370} height={330} />
        <div className="flex justify-between">
          <Link
            className="min-w-[180px] text-sm px-5 py-2 rounded bg-primary text-white flex justify-between items-center hover:underline"
            href={'https://drive.google.com/file/d/12SVZoOTvSHXHptF6ts6PUjxb6ze9zZlz/view?usp=sharing'}
            role="button"
          >
            이력서
            <Arrow color={'#ffffff'} />
          </Link>
          <Link
            className="min-w-[180px] text-sm px-5 py-2 rounded bg-primary text-white flex justify-between items-center hover:underline"
            href={'/skills'}
            role="button"
          >
            보유 기술스택
            <Arrow color={'#ffffff'} />
          </Link>
        </div>
      </div>

      <article className="grid grid-cols-1 gap-1">
        <div className="flex gap-4 items-center">
          <Image src={person} alt="person" width={30} height={30} />
          <div className="text-sm flex flex-col">
            <p className="font-bold">이름</p>
            <p className="text-darkgray">장현지</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={calender} alt="date" width={30} height={30} />
          <div className="text-sm flex flex-col">
            <p className="font-bold">생년월일</p>
            <p className="text-darkgray">2000. 04. 02</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={location} alt="location" width={25} height={25} />
          <div className="ml-[5px] text-sm flex flex-col">
            <p className="font-bold">지역</p>
            <p className="text-darkgray">강원도 춘천시</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={school} alt="university" width={30} height={30} />
          <div className="text-sm flex flex-col">
            <p className="font-bold">학력</p>
            <p className="text-darkgray">강원대학교 정보통신공학전공</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={call} alt="phone" width={30} height={30} />
          <div className="text-sm flex flex-col">
            <p className="font-bold">연락처</p>
            <p className="text-darkgray">010-6888-2499</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Image src={mail} alt="email" width={30} height={30} />
          <div className="text-sm flex flex-col">
            <p className="font-bold">이메일</p>
            <Link href={'mailto:janghyunji42@gmail.com'} className="text-darkgray hover:underline">
              janghyunji42@gmail.com
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
