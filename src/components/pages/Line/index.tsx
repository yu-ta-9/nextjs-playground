'use client';

import type { FC } from 'react';

export const Line: FC = () => {
  const handleLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID;
    const redirectUri = 'http://localhost:3033/line/callback';

    const crypto = require('crypto');
    const state = crypto.randomBytes(16).toString('base64');
    const nonce = crypto.randomBytes(16).toString('base64');

    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid&nonce=${nonce}`;
  };

  return (
    <div className='p-12'>
      <p>Line Login</p>
      <button type='button' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
