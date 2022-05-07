import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import "./style.css";

function Home() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  });

  const logout = () => {
    AuthService.logout();
    window.location.reload();
  };

  const navigate = useNavigate();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src="https://images.vexels.com/media/users/3/235566/isolated/preview/aa7999d29439dfa85bd9ef73303590a1-cabeza-de-chica-anime-enamorada.png"
            width="28"
            height="28"
          />
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to={"/"} className="navbar-item">
            Home
          </Link>

          <Link to={"/users"} className="navbar-item">
            Anime List
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to={"/register"} className="button is-primLry">
                <strong>Sign up</strong>
              </Link>
              {currentUser ? (
                <button className="button is-light" onClick={logout}>
                  Log out
                </button>
              ) : (
                <Link to={"/login"} className="button is-light">
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Home;
