import axios from 'axios';
import path from '@constants/api';

const getAdvertise = () => axios.get(`${path.getAdvertisePath}`);

export default { getAdvertise };
