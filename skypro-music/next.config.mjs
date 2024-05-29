/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            //откуда хотим редиректить
             source: '/',
             // куда редиректить 
            destination: '/signin',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
