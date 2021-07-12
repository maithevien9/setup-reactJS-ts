import axios from "axios";

import configs from "../configs/index";

axios.defaults.withCredentials = true;

const apiRequest = axios.create({
  baseURL: configs.API_ENDPOINT,
});

apiRequest.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  return config;
});

apiRequest.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (error) => {
    return Promise.reject(error.response.data);
  },
);

export default apiRequest;
