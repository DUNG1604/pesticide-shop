import axios from "axios";

let axiosInstance = null;
let headers = {
  "cache-control": "public, s-maxage=10, stale-while-revalidate=59",
};

const setHeaders = (inputHeaders) => {
  headers = { ...headers, ...inputHeaders };
  getInstance().defaults.headers.common = headers;
};

const getHeaders = () => headers;

const getInstance = () => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SOME_KEY,
    headers: getHeaders(),
  });
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-api-token"] = token;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

const getRequest = (endpointApiUrl, payload = {}, config = {}) =>
  getInstance().get(endpointApiUrl, {
    params: payload,
    ...config,
  });

const postRequest = (endpointApiUrl, payload = {}, config = {}) =>
  getInstance().post(endpointApiUrl, payload, config);

const putRequest = (endpointApiUrl, payload = {}, config = {}) =>
  getInstance().put(endpointApiUrl, payload, config);

const delRequest = (endpointApiUrl, payload = {}, config = {}) =>
  getInstance().delete(endpointApiUrl, { data: payload, ...config });

const patchRequest = (endpointApiUrl, payload = {}, config = {}) =>
  getInstance().patch(endpointApiUrl, payload, config);

export const Axios = {
  axiosInstance,
  getHeaders,
  setHeaders,
  getRequest,
  postRequest,
  putRequest,
  delRequest,
  patchRequest,
};
