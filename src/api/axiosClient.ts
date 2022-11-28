import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "constants/movie";

const getToken = () => {
  return localStorage.getItem("token_user") || "";
};
const token = getToken();
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer " + token,
  },
});

axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  
  return config;
}, function (error) {
  
  return Promise.reject(error);
});


axiosClient.interceptors.response.use(function (response: AxiosResponse) {
  
  return response.data;
}, function (error) {
  
  return Promise.reject(error);
});
export default axiosClient;