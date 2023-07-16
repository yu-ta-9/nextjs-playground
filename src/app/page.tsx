import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link className='text-blue' href='/todo/1'>
              TODO詳細ページ
            </Link>
          </li>
          <li>
            <Link className='text-blue' href='/google'>
              googleログイン
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
