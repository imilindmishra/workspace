import axios from "axios";

const API_URL = "https://dynamic-form-generator-9rl7.onrender.com";

export const createUser = async (rollNumber: string, name: string) => {
  const response = await axios.post(`${API_URL}/create-user`, {
    rollNumber,
    name,
  });
  return response.data;
};

export const getForm = async (rollNumber: string) => {
  const response = await axios.get(
    `${API_URL}/get-form?rollNumber=${rollNumber}`
  );
  return response.data;
};
