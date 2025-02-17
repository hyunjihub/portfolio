'use client';

import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { Skill } from '@/app/data/types';
import { TECH_STACK } from '@/app/data/constant';
import { useState } from 'react';

interface BackProps {
  tech: Skill[];
}

export default function Backend({ tech }: BackProps) {
  const [selectedItem, setSelectedItem] = useState<Skill | null>(null);

  const handleClick = (index: number) => {
    if (!selectedItem) setSelectedItem(tech[index]);
    else setSelectedItem(null);
  };

  return (
    <article className="w-full min-h-[194px] p-5 rounded-lg border shadow-xs">
      <h3 className="text-2xl font-bold">Backend</h3>

      <div className="mt-5 flex gap-5 grid grid-cols-3">
        {tech.map((item, index) => (
          <Image
            className="cursor-pointer"
            key={index}
            src={TECH_STACK[item.name as keyof typeof TECH_STACK]}
            alt={item.name}
            width={40}
            height={40}
            title={item.name}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {selectedItem && <ProjectModal tech={selectedItem} onClose={() => setSelectedItem(null)} />}
    </article>
  );
}
