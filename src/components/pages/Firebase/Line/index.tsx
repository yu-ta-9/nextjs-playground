"use client";

import { OAuthProvider, getAuth, signInWithCredential } from "firebase/auth";
import { useEffect, useState } from "react";

import type { FC } from "react";

export const nonceGen = (length: number) => {
	let result = "";

	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

export const Line: FC = () => {
	const [nonce, setNonce] = useState("");
	const [digestNonce, setDigestNonce] = useState("");

	console.log({ nonce, digestNonce });

	useEffect(() => {
		(async () => {
			const crypto = require("crypto");
			const nonce = nonceGen(32);
			const digestNonce = await crypto
				.createHash("sha256")
				.update(nonce)
				.digest("hex");
			setNonce(nonce);
			setDigestNonce(digestNonce);
		})();
	}, []);

	// const handleLogin = async () => {
	//   const clientId = process.env.NEXT_PUBLIC_LINE_CLIENT_ID;
	//   const redirectUri = 'http://localhost:3033/line/callback';

	//   const crypto = require('crypto');
	//   const state = crypto.randomBytes(16).toString('hex');

	//   window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid%20email&nonce=${digestNonce}`;
	// };

	const handleLoginClick = () => {
		const provider = new OAuthProvider("oidc.line");
		// signInWithRedirect(getAuth(), provider);

		const credential = provider.credential({
			idToken:
				"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVTA4MTA0YjgxNjJlMzEyZmJjZjk2OWJkYzFhMzlhYTlkIiwiYXVkIjoiMjAwMDIwOTY5NiIsImV4cCI6MTY5MTM3MDM0OSwiaWF0IjoxNjkxMzY2NzQ5LCJhbXIiOlsibGluZXNzbyJdLCJuYW1lIjoiWXV0YSBNYXRzdW8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9wcm9maWxlLmxpbmUtc2Nkbi5uZXQvMGhkMkJRODkyM094MV9LQ3oxUkI5RVNrTnROWEFJQmoxVkIwMGhMRjU0WjNoV1NIdERGazBnZTFNcVlpMVZTeWxJUUVraExnOG9NbmhXIiwiZW1haWwiOiJ5bS45bW0uY2hpaGlyb0BnbWFpbC5jb20ifQ.5_0vuYtSOhnAiFegn0VnN6OBcxu5Sw-VqCVe6ArYOys",
		});
		signInWithCredential(getAuth(), credential)
			.then((result) => {
				// User is signed in.
				// IdP data available in result.additionalUserInfo.profile.
				console.log({ result });

				// Get the OAuth access token and ID Token
				const credential = OAuthProvider.credentialFromResult(result);
				console.log({ credential });
				// const accessToken = credential.accessToken;
				// const idToken = credential.idToken;
			})
			.catch(() => {
				// Handle error.
			});
	};

	return (
		<div className="p-12">
			<h1>Firebase line</h1>

			<button onClick={handleLoginClick}>Login</button>
		</div>
	);
};
