import axios from 'axios';
import path from '@constants/api';

const setUser = (data) => axios.post(`${path.getUsersPath}`, data);

const loginCurrentUser = (data) => axios.post(`${path.getLoginPath}`, data);

export default { setUser, loginCurrentUser };
