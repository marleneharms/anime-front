import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/login/login";
import Users from "./components/users/users";
import Home from "./components/home/home";
import Register from "./components/register/register";
import "bulma/css/bulma.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAnime from "./components/addAnime/addAnime";

function App() {
  return (
    // routing
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add_anime" element={<AddAnime />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
