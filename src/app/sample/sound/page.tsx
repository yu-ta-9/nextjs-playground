import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sound',
};

const SoundPage = async () => {
  return (
    <div className='p-8'>
      <h1 className='font-bold'>Sound</h1>

      <div className='p-4'></div>
    </div>
  );
};

export default SoundPage;
