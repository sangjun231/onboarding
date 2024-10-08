import axios from "axios";

const API_URL = import.meta.env.VITE_MONEYFUL_PUBLIC_POLICY_URL;

export const registerUser = async (
  id: string,
  password: string,
  nickname: string
) => {
  const response = await axios.post(`${API_URL}/register`, {
    id,
    password,
    nickname,
  });
  return response.data;
};

export const loginUser = async (id: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { id, password });
  return response.data;
};

export const fetchUserProfile = async (accessToken: string) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export const updateUserProfile = async (
  accessToken: string,
  formData: FormData
) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
