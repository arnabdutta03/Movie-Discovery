// src/config.js
export const API_URL = import.meta.env.VITE_TMDB_URL;
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};
