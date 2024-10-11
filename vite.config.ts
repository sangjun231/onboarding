/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  test: {
    globals: true, // 글로벌 테스트 환경 설정
    environment: "jsdom", // 브라우저 환경에서 테스트
  },
});
