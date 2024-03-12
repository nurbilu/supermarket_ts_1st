// registerAPI.ts
import axios from 'axios';

interface RegisterData {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const registerAPI = (data: RegisterData) => {
  try {
    const response = axios.post('http://127.0.0.1:8000/register/', data);
    return response; // Adjust based on your server response structure
  } catch (error: any) {
    throw error.response.data; // Ensuring the error handling is consistent with loginAPI.ts
  }
};
