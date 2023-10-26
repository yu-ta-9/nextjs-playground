import { Callback } from '@/components/pages/Google/Callback';

import type { Metadata } from 'next';

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
  console.log(params);

  return <Callback />;
};

export default GoogleCallbackPage;
