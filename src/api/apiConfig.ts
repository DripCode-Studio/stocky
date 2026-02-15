import axios from "axios";

export const api = axios.create({
  //   baseURL: process.env.VITE_API_BASE_URL,
  baseURL: "http://localhost:8001/api/v1",
  headers: {},
  withCredentials: true,
});
