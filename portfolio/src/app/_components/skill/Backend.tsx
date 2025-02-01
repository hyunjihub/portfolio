import Image from 'next/image';
import { Skill } from '@/app/data/types';
import { TECH_STACK } from '@/app/data/constant';

interface BackProps {
  tech: Skill[];
}

export default function Backend({ tech }: BackProps) {
  return (
    <article className="min-h-[194px] p-5 rounded-lg border border-darkgray">
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
          />
        ))}
      </div>
    </article>
  );
}
