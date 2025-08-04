import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Kitty} from '../types/index.ts';

if (!import.meta.env.VITE_API_KEY) {
  throw new Error('API key not found in environment variables');
}

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = '/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Auth-Token': API_KEY
  }
});

export const getKittys = (): Promise<AxiosResponse<Kitty[]>> => 
    api.get('/images/search?limit=10');