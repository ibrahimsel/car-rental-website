const production = {
    url: 'https://car-rental-website-server.vercel.app'
  };
  const development = {
    url: 'http://localhost:5000'
  };
  export const dev_env = process.env.NODE_ENV === 'development' ? development : production;