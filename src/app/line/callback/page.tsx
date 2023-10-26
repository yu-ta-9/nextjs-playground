import { Callback } from '@/components/pages/Line/Callback';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Line callback',
};

type Params = {
  // TODO: 適切なものに変える
  searchParams: any;
};

/**
 * @param params
 * @returns
 */
const LineCallbackPage = async ({ searchParams }: Params) => {
  const code = searchParams.code;
  const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID;
  const secretKey = process.env.NEXT_PUBLIC_LINE_SECRET_KEY;
  console.log({ code, clientId, secretKey });
  const redirectUri = 'http://localhost:3033/line/callback';
  const tokenRes = await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${secretKey}`,
  });
  const tokenJson = await tokenRes.json();
  console.log({ lineToken: tokenJson });

  return <Callback />;
};

export default LineCallbackPage;
