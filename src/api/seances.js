import axios from 'axios';
import path from '@constants/api';

const getSeances = () => axios.get(`${path.getSeancesPath}`);

export default { getSeances };
