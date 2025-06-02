import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/paradise-nursery/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
