import { Google } from '@/components/pages/Google';
import { Callback } from '@/components/pages/Google/Callcack';
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
  console.log('params', params);
  const res = await fetch('http://localhost:3000/login/google', {
    method: 'POST',
    body: JSON.stringify({
      idToken: params.access_token,
    }),
  });

  const resJson = await res.json();
  console.log('data', resJson);

  return <Callback />;
};

export default GoogleCallbackPage;
