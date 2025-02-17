'use client';

import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { Skill } from '@/app/data/types';
import { TECH_STACK } from '@/app/data/constant';
import { useState } from 'react';

interface FrontProps {
  tech: Skill[];
}

export default function Frontend({ tech }: FrontProps) {
  const [selectedItem, setSelectedItem] = useState<Skill | null>(null);
  const commonTech = tech.filter((item) => item.isCommon);
  const experiencedTech = tech.filter((item) => !item.isCommon);

  const handleClick = (index: number, type: string) => {
    if (!selectedItem) setSelectedItem(type === 'common' ? commonTech[index] : experiencedTech[index]);
    else setSelectedItem(null);
  };

  return (
    <article className="w-full p-5 rounded-lg border shadow-xs">
      <h3 className="text-2xl font-bold">Frontend</h3>

      <div className="mt-5 flex gap-5">
        <p className="min-w-[30px] leading-tight">
          주로
          <br />
          사용
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-5">
          {commonTech.map((item, index) => (
            <Image
              className="cursor-pointer"
              key={index}
              src={TECH_STACK[item.name as keyof typeof TECH_STACK]}
              alt={item.name}
              width={40}
              height={40}
              title={item.name}
              onClick={() => handleClick(index, 'common')}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        <p className="min-w-[30px] leading-tight">
          경험
          <br />
          있음
        </p>
        <div className="flex flex-wrap gap-8 md:gap-5">
          {experiencedTech.map((item, index) => (
            <Image
              className="cursor-pointer"
              key={index}
              src={TECH_STACK[item.name as keyof typeof TECH_STACK]}
              alt={item.name}
              width={40}
              height={40}
              title={item.name}
              onClick={() => handleClick(index, 'uncommon')}
            />
          ))}
        </div>
      </div>

      {selectedItem && <ProjectModal tech={selectedItem} onClose={() => setSelectedItem(null)} />}
    </article>
  );
}
