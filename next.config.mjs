/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto genera la carpeta 'out' con todo listo
  // Si usas imágenes de Next.js (<Image />), añade esto:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;