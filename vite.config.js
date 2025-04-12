import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: './', // Usa './' para que funcione en cualquier entorno
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Esto define el alias "@"
    },
  },
});
