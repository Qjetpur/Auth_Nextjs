// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://authnextjss.vercel.app',
  timeout: 5000 
});

export default api;
