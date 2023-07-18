import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.response.data.message === "jwt expired"
    ) {
      try {
        await axiosInstance.post(`/api/auth/refresh`);
        return await axiosInstance(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }

    return Promise.reject(error);
  }
);

export const httpRequest = axiosInstance;
