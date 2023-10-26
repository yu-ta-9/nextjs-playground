'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { FC} from 'react';

export const Callback: FC = () => {
  const searchParams = useSearchParams();
  const [parsedParams, setParsedParams] = useState<{ key: string; value: string }[]>([]);

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
      <h1>line callback</h1>
      <ul className='flex flex-col w-full gap-4'>
        {parsedParams.map((param) => (
          <li className='break-all' key={param.key}>{`${param.key}: ${param.value}`}</li>
        ))}
      </ul>
    </div>
  );
};
