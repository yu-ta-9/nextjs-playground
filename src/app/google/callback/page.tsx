import { Google } from '@/components/pages/Google';
import { Callback } from '@/components/pages/Google/Callback';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google callback',
};

type Props = {
  // TODO: 適切なものに変える
  access_token: string;
};

/**
 * @param params
 * @returns
 */
const GoogleCallbackPage = async (params: Props) => {
  return <Callback />;
};

export default GoogleCallbackPage;
