'use client';

import Image from 'next/image';
import ProjectModal from './ProjectModal';
import { Skill } from '@/app/data/types';
import { TECH_STACK } from '@/app/data/constant';
import { useState } from 'react';

interface DevopsProps {
  tech: Skill[];
}

export default function Devops({ tech }: DevopsProps) {
  const [selectedItem, setSelectedItem] = useState<Skill | null>(null);

  const handleClick = (index: number) => {
    if (!selectedItem) setSelectedItem(tech[index]);
    else setSelectedItem(null);
  };

  return (
    <article className="w-full p-5 rounded-lg border shadow-xs">
      <h3 className="text-2xl font-bold">DevOps</h3>

      <div className="mt-5 flex flex-wrap gap-5">
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
