import { getApp, getApps, initializeApp } from "firebase/app";

import type { FirebaseApp, FirebaseOptions } from "firebase/app";

/**
 * @see {@link https://firebase.google.com/docs/web/learn-more#config-object}<br>
 */
export const firebaseConfig: FirebaseOptions = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_AMESUREMENT_ID,
	databaseURL: "https://realtime-chat-39dfb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const getFirebaseApp = (): FirebaseApp => {
	return !getApps().length ? app : getApp();
};
