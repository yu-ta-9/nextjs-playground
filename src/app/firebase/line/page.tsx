import { Line } from '@/components/pages/Firebase/Line';
import { FirebaseAuthProvider } from '@/lib/firebase/utils/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firebase Line',
};

const LinePage = async () => {
  return (
    <FirebaseAuthProvider>
      <Line />
    </FirebaseAuthProvider>
  );
};

export default LinePage;
