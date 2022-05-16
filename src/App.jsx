import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/login/login";
import AnimeList from "./components/animeList/animeList";
import Home from "./components/home/home";
import Register from "./components/register/register";
import "bulma/css/bulma.min.css";
import AddAnime from "./components/addAnime/addAnime";

function App() {
  return (
    // routing
    <Router>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/anime_list" element={<AnimeList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add_anime" element={<AddAnime />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
