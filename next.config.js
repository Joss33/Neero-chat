/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/settings/general',
        destination: '/settings', // Configuraciones - archivo index.tsx en la carpeta "settings"
      },
      {
        source: '/settings/notificaciones',
        destination: '/settings', // Configuraciones - archivo index.tsx en la carpeta "settings"
      },
      {
        source: '/settings/team-members',
        destination: '/settings', // Configuraciones - archivo index.tsx en la carpeta "settings"
      },
    ];
  },
}

module.exports = nextConfig
