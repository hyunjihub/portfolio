import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 px-16 py-4 flex items-center justify-between shadow z-10">
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">혅!</h1>
      </Link>

      <ul className="w-80 flex justify-between text-darkgray text-lg">
        <li>
          <Link href={'/'} className="hover:font-semibold">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href={'/skills'} className="hover:font-semibold">
            SKILLS
          </Link>
        </li>
        <li>
          <Link href={'/projects'} className="hover:font-semibold">
            PROJECTS
          </Link>
        </li>
      </ul>
    </header>
  );
}
