import axios from 'axios';
import path from '@constants/api';

const getHalls = () => axios.get(`${path.getHallsPath}`);

const setHall = (data) => axios.post(`${path.getHallsPath}`, data);

export default { getHalls, setHall };
