import { defineConfig } from 'vite';
const style=require('./src/assets/global/style.css');
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
