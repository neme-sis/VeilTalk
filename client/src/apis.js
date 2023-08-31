import axios from "axios";
const baseURL = `http://localhost:8080`;

export const ownerApi = axios.create({
  baseURL: `${baseURL}/owner-api`,
});

export const userApi = axios.create({
  baseURL: `${baseURL}/user-api`,
});
