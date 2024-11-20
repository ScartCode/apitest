// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/clientes", // URL base para las peticiones
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
