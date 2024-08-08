// lib/init-middleware.js
import Cors from 'cors';

// Helper method to wait for a middleware to execute before continuing
function initMiddleware(middleware: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: 'https://authnextjss.vercel.app', // Your frontend domain
  })
);

export default cors;
