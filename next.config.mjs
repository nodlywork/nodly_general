/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nota: `output: 'export'` se removió porque desactiva las API routes
  // y hace que `/api/*` no funcione en el sitio publicado.
  // Mantén la sección `images` si usas <Image />.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;