'use client';

import Arrow from '../layout/Arrow';
import Image from 'next/image';
import Link from 'next/link';
import calender from '/public/profile/calender.svg';
import call from '/public/profile/call.svg';
import character from '/public/character.png';
import location from '/public/profile/location.svg';
import mail from '/public/profile/mail.svg';
import { motion } from 'framer-motion';
import person from '/public/profile/person.svg';
import school from '/public/profile/school.svg';

export default function About() {
  return (
    <motion.section
      className="max-w-screen-lg lg:mt-24 flex flex-col md:flex-row gap-16 md:gap-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col justify-center">
        <div className="relative w-[400px] h-[400px]">
          <Image className="object-cover" src={character} alt="character" fill />
        </div>

        <div className="px-3 md:px-0 flex justify-between">
          <motion.a
            className="min-w-[180px] text-sm px-5 py-2 rounded bg-primary text-white flex justify-between items-center hover:underline"
            href={'https://drive.google.com/file/d/1cuJNvXTkWg7Buhz0zhef2pHEyMSFD5wE/view?usp=sharing'}
            role="button"
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            이력서
            <Arrow color={'#ffffff'} />
          </motion.a>
          <motion.a
            className="min-w-[180px] text-sm px-5 py-2 rounded bg-primary text-white flex justify-between items-center hover:underline"
            href={'/skills'}
            role="button"
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            보유 기술스택
            <Arrow color={'#ffffff'} />
          </motion.a>
        </div>
      </div>

      <article className="w-full flex flex-col pl-24 md:pl-0 gap-5 md:gap-9">
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
    </motion.section>
  );
}
