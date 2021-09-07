import axios from 'axios';
import { backUrl } from '../../config/config';

export const createSignup = async (email: string, password: string) => {
  const res = await axios.post(`${backUrl}/api/v1/member`, { email, password });
  return res.data;
};

export const requestLogin = async (email: string, password: string) => {
  const res = await axios.post(`${backUrl}/api/v1/login`, { email, password });
  return res.data;
};
