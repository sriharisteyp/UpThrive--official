import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dreampilot.pythonanywhere.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
