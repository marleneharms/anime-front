import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AuthServices from "../../services/auth-service";
import PostServices from "../../services/post-service";

const AddAnime = () => {
  
  const [title, setTitle] = useState(""); // attribute this returns an array
  const [genre, setGenre] = useState(""); 
  const [imgURL, setImgURL] = useState("");
  const [watched, setWatched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthServices.getCurrentUser();

    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault(); // to not send the form

    // validate genre is not empty
    if (genre === "") {
      alert("Please enter a genre");
      return;
    }
    // Validate title is not empty
    if (title === "") {
      alert("Please enter a title");
      return;
    }

    //send anime to database
    const newAnime = {
      title,
      genre,
      imgURL,
      watched,
    };
    try {
      await PostServices.addAnime(newAnime).then(() => {
        alert("Anime added successfully");
        navigate("/anime_list");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={handleSave} className="box">
                <p className="has-text-centered">Anime Register</p>
                <div className="field mt-5">
                  <label className="label">Title</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Genre</label>
                  <div className="controls">
                    <div className="select">
                      <select onChange={(e) => setGenre(e.target.value)}>
                        <option value="">Select a genre</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Magic">Magic</option>
                        <option value="Martial Arts">Martial Arts</option>
                        <option value="Sports">Sports</option>
                        <option value="Supernatural">Supernatural</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="field mt-5">
                    <label className="label">Image</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Image URL"
                        value={imgURL}
                        onChange={(e) => setImgURL(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Watched</label>
                    <div className="controls">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={watched}
                        onChange={(e) => setWatched(e.target.checked)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5"></div>
                  <button className="button is-success is-fullwidth">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAnime;
