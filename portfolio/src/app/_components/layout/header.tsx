'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  return (
    <header className="bg-white sticky top-0 px-6 md:px-16 py-4 flex items-center justify-between shadow z-10">
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">혅!</h1>
      </Link>

      <ul className="w-56 md:w-80 flex justify-between text-darkgray text-base md:text-lg">
        <li>
          <Link href={'/'} className={`${path === '/' ? 'text-primary' : ''} hover:font-semibold hover:text-primary`}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href={'/skills'}
            className={`${path.includes('skills') ? 'text-primary' : ''} hover:font-semibold hover:text-primary`}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            href={'/projects'}
            className={`${path.includes('projects') ? 'text-primary' : ''} hover:font-semibold hover:text-primary`}
          >
            PROJECTS
          </Link>
        </li>
      </ul>
    </header>
  );
}
