// src/types/global.d.ts
export {};

declare global {
  interface Window {
    Cookiebot?: {
      show: () => void;
    };
  }
}
