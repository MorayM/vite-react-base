import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Support for JSX and React Fast
    react(),
    // Import SVG images as JSX components
    svgr(),
    // Resolve custom import paths from tsconfig.compilerOptions.paths
    tsconfigPaths(),
  ],
});
