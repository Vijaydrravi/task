import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data.token;
};

export const register = async (email, password) => {
  await axios.post(`${API_URL}/register`, { email, password });
};

export const fetchTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
};
