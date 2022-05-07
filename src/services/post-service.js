import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `${process.env.REACT_APP_API_URL}/posts`;

const getAnimeList = () => {
  return axios.get(API_URL + "/animelist", { headers: authHeader() });
};

const deleteAnime = (_id) => {
  const headers = {
    "anime-id": _id,
    ...authHeader(), // add auth header
  };

  return axios.delete(API_URL + "/animelist/", { headers });
};

const addAnime = (anime) => {
  const headers = {
    ...authHeader(), // add auth header
  };

  return axios.post(API_URL + "/animelist/", anime, { headers }); // anime is the payload
};

const setAnimeStatus = (watched, _id) => {
  const headers = {
    "anime-id": _id,
    ...authHeader(), // add auth header
  };

  return axios.put(API_URL + "/animelist/", { watched }, { headers }); // watched is the payload  and _id is the anime id
};

const postServices = {
  getAnimeList,
  deleteAnime,
  addAnime,
  setAnimeStatus,
};

export default postServices;
