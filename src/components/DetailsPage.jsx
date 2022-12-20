import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
let API_KEY = "&api_key=9e547eaa8b83cf89de24b0885f9b31f5";
let BASE_URL = "https://api.themoviedb.org/3";
let URL = `${BASE_URL}/trending/movie/day?${API_KEY}`;
let img_url = "https://image.tmdb.org/t/p/w500";

const DetailsPage = ({ info }) => {
  const [movieData, setMovieData] = useState([]);
  const [currentMovieDetail, setMovie] = useState();
  const [urlSet, setUrl] = useState(URL);
  const [search, setSearch] = useState("");

  const { id } = useParams();

  const fetchMovies = async () => {
    try {
      URL = BASE_URL + "/discover/movie?sort_by=popularity.desc" + API_KEY;
      let res = await fetch(URL);
      let result = await res.json();
      setMovieData(result.results);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const getSingleMovies = async () => {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9e547eaa8b83cf89de24b0885f9b31f5&language=en-US`
      );
      let result = await res.json();
      setMovie(result);
      console.log("result:", result);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    getSingleMovies();
  }, [urlSet]);

  return (
    <>
      <div className="detailsDiv">
        <div className="leftSideDiv">
          <h1 className="videoTitle">{currentMovieDetail?.title}</h1>
          <br />
          <div className="player">
            <img
              className="player"
              src={img_url + currentMovieDetail?.poster_path}
              alt="ytplayer"
            />
            <img
              className="miniPlayer"
              src="https://www.nicepng.com/png/full/14-147850_youtube-play-button-youtube-play-button-black.png"
              alt="ytplayer"
            />
          </div>

          <div className="card3">
            <div className="divImg3">
              {
                <img
                  src={img_url + currentMovieDetail?.poster_path}
                  alt="img"
                  className="img3"
                />
              }
            </div>
            <div className="info">
              <p className="gener">Language :</p>
              <p className="gener1">
                {currentMovieDetail?.spoken_languages[0].name}
              </p>
              <p className="gener">Status :</p>
              <p className="gener1">{currentMovieDetail?.status}</p>
              <p className="gener">Studios :</p>
              <p className="gener1">
                {currentMovieDetail?.production_companies[0].name}
              </p>
              <p className="gener">Duration :</p>
              <p className="gener1">
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </p>
              <p className="gener">Genres :</p>
              <p className="gener1">{currentMovieDetail?.genres[0].name}</p>
            </div>
          </div>

          <div className="descDiv">
            <h2 className="videoTitle">Sypnosis :</h2>
            <p className="gener1">{currentMovieDetail?.overview}</p>
          </div>
        </div>

        <div className="rightSideDiv">
          <h1>Popular Anime</h1>
          <div className="popularCards">
            {movieData.map((item, index) => {
              return (
                <div className="Card2" key={index}>
                  <img
                    src={img_url + item?.poster_path}
                    alt="img"
                    className="cardImg2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
