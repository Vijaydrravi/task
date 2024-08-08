import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional: to handle specific assets or file types
  assetsInclude: ['**/*.js', '**/*.jsx']
});
