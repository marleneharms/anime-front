/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostServices from "../../services/post-service";
import AuthService from "../../services/auth-service";

const Users = () => {
  const [animeList, setAnimeList] = useState([]);
  const navigate = useNavigate();
  const placeholderImg = "https://via.placeholder.com/150";

  useEffect(() => {
    PostServices.getAnimeList().then(
      (response) => {
        setAnimeList(response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);

        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/register");
          window.location.reload();
        } else if (error.response && error.response.status === 401) {
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  const handleDelete = (id) => {
    PostServices.deleteAnime(id).then(
      (response) => {
        setAnimeList(animeList.filter((anime) => anime._id !== id));
      },
      (error) => {
        console.log(error.response);
        // if (error.response && error.response.status === 403) {
        //   AuthService.logout();
        //   navigate("/register");
        //   window.location.reload();
        // } else if (error.response && error.response.status === 401) {
        //   navigate("/login");
        //   window.location.reload();
        // }
      }
    );
  };

  const handleWatched = (watched, _id) => {
    PostServices.setAnimeStatus(watched, _id).then(
      (response) => {
        setAnimeList(
          animeList.map((anime) => {
            if (anime._id === _id) {
              anime.watched = watched;
            }
            return anime;
          })
        );
      },
      (error) => {
        console.log(error.response);
      }
    );
  };

  return (
    <div>
      <h2>Posts</h2>
      {animeList.map((post) => (
        <div className="card" key={post._id}>
          <div className="card-image">
            <figure className="image is-96x96">
              <img
                src={!post.imgURL ? placeholderImg : post.imgURL}
                alt={post.title}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{post.title}</p>
                <p className="subtitle is-6">{post.genre}</p>
                {post.watched ? (
                  <p className="subtitle is-6">
                    <s>Watched</s>
                  </p>
                ) : (
                  <p className="subtitle is-6">
                    <strong>Watching</strong>
                  </p>
                )}
              </div>
            </div>

            <footer className="card-footer">
              <input
                type="checkbox"
                className="checkbox card-footer-item"
                checked={post.watched}
                onChange={(e) => {
                  e.preventDefault();
                  handleWatched(e.target.checked, post._id);
                }}
              />
              <button
                onClick={() => handleDelete(post._id)}
                className="card-footer-item"
              >
                Delete
              </button>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
