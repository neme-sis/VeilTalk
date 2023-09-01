import axios from "axios";
const baseURL = `http://localhost:8080`;
// const baseURL = `https://veiltalk-backend.onrender.com`;

export const ownerApi = axios.create({
  baseURL: `${baseURL}/owner-api`,
});

export const userApi = axios.create({
  baseURL: `${baseURL}/user-api`,
});
