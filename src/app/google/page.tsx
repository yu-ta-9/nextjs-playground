import { Google } from '@/components/pages/Google';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google',
};

const GooglePage = async () => {
  return <Google />;
};

export default GooglePage;
