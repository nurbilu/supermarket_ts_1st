// loginAPI.ts
import axios from 'axios';

export const loginUserAPI = async (username: string, password: string) => {
  try {
    
    const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
    return response.data; // You might want to adjust this based on your server response
  } catch (error:any) {
    throw error.response.data;
  }
};