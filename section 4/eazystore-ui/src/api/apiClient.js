import axios from "axios";
console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers:{
    Accept: "application/json"
  },
  timeout: 10000,
});

export default apiClient;