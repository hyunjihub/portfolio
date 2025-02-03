'use client';

import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { Skill } from '@/app/data/types';
import { TECH_STACK } from '@/app/data/constant';
import { useState } from 'react';

interface LanguageProps {
  tech: Skill[];
}

export default function Language({ tech }: LanguageProps) {
  const [selectedItem, setSelectedItem] = useState<Skill | null>(null);
  const commonTech = tech.filter((item) => item.isCommon);
  const experiencedTech = tech.filter((item) => !item.isCommon);

  const handleClick = (index: number, type: string) => {
    if (!selectedItem) setSelectedItem(type === 'common' ? commonTech[index] : experiencedTech[index]);
    else setSelectedItem(null);
  };

  return (
    <article className="p-5 rounded-lg border border-darkgray">
      <h3 className="text-2xl font-bold">Language</h3>

      <div className="mt-5 flex gap-5">
        <p className="leading-tight">
          주로
          <br />
          사용
        </p>
        <div className="flex gap-5">
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
        <p className="leading-tight">
          경험
          <br />
          있음
        </p>
        <div className="flex gap-5">
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
