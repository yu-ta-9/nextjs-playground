declare namespace NodeJS {
  interface ProcessEnv {
    /** next.js host */
    readonly NEXT_PUBLIC_BASE_URL: string;
    /** DB URL */
    readonly DATABASE_URL: string;
    /** Google OAuth Client Id */
    readonly GOOGLE_OAUTH_CLIENT_ID: string;
  }
}
