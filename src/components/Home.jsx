import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import {addProducts} from "../redux/movieSlice";
import { Link} from "react-router-dom";
let img_url = "https://image.tmdb.org/t/p/w500";

const page = 1;

const Home = () => {
    const [scrollState, setscrollState] = useState([]);
    const [currentPage, setcurrentPage] = useState(page);

    const [loading, setLoading] = useState(false);

    const fetchMovies = async () => {
        try {
            let res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?&api_key=9e547eaa8b83cf89de24b0885f9b31f5&page?=${currentPage}`);
      let result = await res.json();
      setscrollState([...scrollState, ...result.results]);
      dispatch(addProducts(result.results[0]))
    } catch (error) {
      console.log("error:", error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const scrollToEnd = () => {
    setcurrentPage(page + 1)
  }

  window.onscroll = function () {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      scrollToEnd()
    }
  }

  return (
    <>
    <div className='carousel'>
        <div className='exploreDiv'>
        <h1 className='Explore'>Explore</h1>
        <p className='p1'>What are you gonna watch today ?</p>
        </div>
        <div className="banner">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/331/86/desktop-wallpaper-mark-ruffalo-interested-in-doing-planet-hulk-movie-marvel-cinematic-universe-hulk.jpg" alt="img" className='bannerImg' />
            <div className="imgText">
            <h1 className='p2'>Weather With You</h1>
            <p className='p3'> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
            </div>
        </div>
    </div>

    <div className='cardContainer'>
        <h1 className='newRelease'>New Realease</h1>

        <div className="cardDiv">

        {
           
           scrollState.map((res, pos) => {
            return(
                <>
                {
                  loading ?
                  <h1>Loading...</h1>
                 : (
                  <Link to={`/details/${res.id}`} style={{textDecoration:"none", color:"white"}}>
                  <div className="card" key={pos} >
                <img src={img_url+res.poster_path} alt="img" className='cardImg' />
                <p className='cardImgTitile'>{res.original_title.slice(0,15)}</p>
            </div>
                      </Link>
                 )
                }
                </>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Home
