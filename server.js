import http from 'http';
import app from './app';

const port = process.env.PORT || 700;
const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT} `);
  });
};

export default startServer;
