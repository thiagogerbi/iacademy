import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-iacademy.onrender.com", //"http://localhost:5000","https://api-iacademy.onrender.com",
});

// Interceptor para incluir o token automaticamente
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
