import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.info/api/',
});

export const getCharacterById = (id) => api.get(`people/${id}/`);
export const getStarshipsByUrls = (urls) => Promise.all(urls.map(url => axios.get(url)));
export const getFilmsByUrls = (urls) => Promise.all(urls.map(url => axios.get(url)));

export default api;
