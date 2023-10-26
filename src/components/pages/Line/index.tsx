'use client';

import { useEffect, useState } from 'react';

import type { FC } from 'react';

export const nonceGen = (length: number) => {
  let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const Line: FC = () => {
  const [nonce, setNonce] = useState('');
  const [digestNonce, setDigestNonce] = useState('');

  useEffect(() => {
    (async () => {
      const crypto = require('crypto');
      const nonce = nonceGen(32);
      const digestNonce = await crypto.createHash('sha256').update(nonce).digest('hex');
      setNonce(nonce);
      setDigestNonce(digestNonce);
    })();
  }, []);

  const handleLogin = async () => {
    const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID;
    const redirectUri = 'http://localhost:3033/line/callback';

    const crypto = require('crypto');
    const state = crypto.randomBytes(16).toString('hex');

    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid%20email`;
  };

  return (
    <div className='p-12'>
      <p>Line Login</p>
      <button type='button' onClick={handleLogin}>
        Login
      </button>

      <p>nonce:</p>
      <p>{nonce}</p>

      <p>digestNonce:</p>
      <p>{digestNonce}</p>
    </div>
  );
};
