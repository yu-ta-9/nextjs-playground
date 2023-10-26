'use client';

import type { FC } from 'react';

export const Google: FC = () => {
  const handleLogin = async () => {
    oauthSignIn();
  };

  function oauthSignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    const form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
      client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
      redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/google/callback`,
      response_type: 'id_token',
      scope: 'profile email',
      nonce: 'random value',
      // include_granted_scopes: 'true',
      // state: 'pass-through value',
    };

    // Add form parameters as hidden input values.
    for (const p in params) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  return (
    <div className='p-12'>
      <p>Google Login</p>
      <button type='button' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
