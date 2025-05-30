/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
              protocol: 'https',
              hostname: 'sjc.microlink.io',
              port: '',
              pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
          },       {
            protocol: "https",
            hostname: "res.cloudinary.com",
          },       {
            protocol: "https",
            hostname: "unsplash.com",
          },  {
            protocol: "https",
            hostname: "plus.unsplash.com",
          },{
            protocol: "https",
            hostname: "images.unsplash.com",
          },
    
    
        ],
      },
};

export default nextConfig;
