import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";

function NavBar() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand p-0">
        <Link to="/">
          <img src="images/fanime-logo.svg" width="125px" alt="logo" />
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

          <Link to={"/add_anime"} className="navbar-item">
            Add Anime
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

export default NavBar;
