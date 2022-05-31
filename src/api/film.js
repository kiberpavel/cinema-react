import axios from 'axios';
import path from '@constants/api';

const getFilms = () => axios.get(`${path.getFilmsPath}`);

const setFilm = (data) => axios.post(`${path.getFilmsPath}`, data);

export default { getFilms, setFilm };
