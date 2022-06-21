import axiosClient from "./axiosClient";

const moiveApi = {
  getListMovies: (type, params) => {
    const url = `/movie/${type}`;
    return axiosClient.get(url, { params });
  },
  searchMoive: (params) => {
    const url = `/search/movie`;
    return axiosClient.get(url, { params });
  },
  getDetails: (moiveId) => {
    const url = `/movie/${moiveId}`;
    return axiosClient.get(url);
  },
};

export default moiveApi;
