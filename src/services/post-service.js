import axios from "axios"; // request
import authHeader from "./auth-header";

const API_URL = `${process.env.REACT_APP_API_URL}/posts`; // `` template literal

const getAnimeList = () => {
  return axios.get(API_URL + "/animelist/", { headers: authHeader() }); // request get in animelist and send the token
};

const deleteAnime = (_id) => {
  const headers = {
    "anime-id": _id,
    ...authHeader(), // add auth header not nested 
  };

  return axios.delete(API_URL + "/animelist/", { headers });
};

const addAnime = (anime) => {  
  return axios.post(API_URL + "/animelist/", anime, { headers: authHeader() }); // anime is an object in the body 
};

const setAnimeStatus = (watched, _id) => {
  const headers = {
    "anime-id": _id,
    ...authHeader(), // add auth header
  };

  return axios.put(API_URL + "/animelist/", { watched }, { headers }); // watchedis an object and _id is the anime id // watched is in the body
};

const postServices = {
  getAnimeList,
  deleteAnime,
  addAnime,
  setAnimeStatus,
};

export default postServices;
