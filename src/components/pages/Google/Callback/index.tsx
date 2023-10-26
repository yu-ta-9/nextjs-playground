'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { FC} from 'react';

export const Callback: FC = () => {
  const pathname = usePathname();
  const [searchParams, setSearchParams] = useState<URLSearchParams>();
  const [parsedParams, setParsedParams] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
    const parsedHash = new URLSearchParams(hash.replace('#', ''));
    setSearchParams(parsedHash);
    console.log(parsedHash.get('id_token'));
  }, [pathname]);

  useEffect(() => {
    if (searchParams === undefined) {
      return;
    }

    for (const entry of searchParams.entries()) {
      console.log(entry);
      setParsedParams((prev) => {
        const newValue = prev.concat();
        newValue.push({ key: entry[0], value: entry[1] });
        return newValue;
      });
    }
  }, [searchParams]);

  return (
    <div className='p-12'>
      <h1>callback</h1>
      <ul className='flex flex-col w-full gap-4'>
        {parsedParams.map((param) => (
          <li className='break-all' key={param.key}>{`${param.key}: ${param.value}`}</li>
        ))}
      </ul>
    </div>
  );
};
