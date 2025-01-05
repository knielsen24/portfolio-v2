declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENABLE_EXPERIENCE_PAGE: boolean;
    NODE_ENV: "development" | "production" | "test"; // Always good to define NODE_ENV
  }
}
