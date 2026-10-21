import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// Domínio próprio (movescreen.com.br) => base '/'.
// Sem domínio próprio (usuario.github.io/movescreen) => rode com VITE_BASE=/movescreen/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
});
