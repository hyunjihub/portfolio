'use client';

import Image from 'next/image';
import Link from 'next/link';
import arrow from '/public/link/arrow.svg';
import github from '/public/link/github.svg';
import { motion } from 'framer-motion';
import notion from '/public/link/notion.svg';
import velog from '/public/link/velog.svg';

export default function Archiving() {
  return (
    <motion.section
      className="max-w-screen-lg my-24 flex flex-col lg:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link href={'https://github.com/hyunjihub'} className="w-72" title="@hyunjihub 바로가기">
        <div className="flex">
          <Image src={github} alt="github" width={60} height={60} />
          <div className="ml-4">
            <p className="text-3xl font-black">GitHub</p>
            <p>@hyunjihub</p>
          </div>
          <div className="ml-6 flex text-xs items-center">
            바로가기
            <Image className="ml-2" src={arrow} alt="link" width={5} height={5} />
          </div>
        </div>
        <p className="mt-2 text-xs text-darkgray">: 프로젝트 및 스터디 소스 코드를 저장하고 있습니다.</p>
      </Link>
      <Link href={'https://velog.io/@syub98774/posts'} className="w-72" title="@FEhyunji.log 바로가기">
        <div className="flex">
          <Image src={velog} alt="velog" width={60} height={60} />
          <div className="ml-4">
            <p className="text-3xl font-black">Velog</p>
            <p>@FEhyunji.log</p>
          </div>
          <div className="ml-6 flex text-xs items-center">
            바로가기
            <Image className="ml-2" src={arrow} alt="link" width={5} height={5} />
          </div>
        </div>
        <p className="mt-2 text-xs text-darkgray">: 알고리즘 풀이 및 프로젝트 회고 등을 기록하고 있습니다.</p>
      </Link>
      <Link
        href={
          'https://tall-bestseller-c51.notion.site/12a242ce400e810da585cae42de8eece?v=12a242ce400e81f99a57000cf575bd3d&pvs=4'
        }
        className="w-72"
        title="@현지 장의 Notion 바로가기"
      >
        <div className="flex">
          <Image src={notion} alt="notion" width={60} height={60} />
          <div className="ml-4">
            <p className="text-3xl font-black">Notion</p>
            <p>@현지 장의 Notion</p>
          </div>
          <div className="ml-6 flex text-xs items-center">
            바로가기
            <Image className="ml-2" src={arrow} alt="link" width={5} height={5} />
          </div>
        </div>
        <p className="mt-2 text-xs text-darkgray">: CS 스터디 내용을 기록하고 있습니다.</p>
      </Link>
    </motion.section>
  );
}
