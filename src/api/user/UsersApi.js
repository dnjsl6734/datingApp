import axios from 'axios';
import serverIp from '../../common/data'; 
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${serverIp}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllUserInfo = async () => {
  try {
    const response = await axios.get(`${serverIp}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};