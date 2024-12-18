declare namespace NodeJS {
	interface ProcessEnv {
		/** next.js host */
		readonly NEXT_PUBLIC_BASE_URL: string;
		/** DB URL */
		readonly DATABASE_URL: string;
		/** Google OAuth Client Id */
		readonly NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID: string;
		/** LINE Client Id */
		readonly NEXT_PUBLIC_LINE_CLIENT_ID: string;
		/** LINE Secret Key */
		readonly NEXT_PUBLIC_LINE_SECRET_KEY: string;
	}
}
