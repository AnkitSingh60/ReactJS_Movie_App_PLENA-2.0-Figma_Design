/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchResult, setSearchResult] = useState([]);

  const debounce = (func) => {
    let timer;
    return function(...args){
      const context = this;
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args)
      }, 500);
    }
  }

  const searchMovie = async(event) => {
    const {value} = event.target;
const res = await fetch(`https://api.themoviedb.org/3/search/movie?&query=${value}&api_key=9e547eaa8b83cf89de24b0885f9b31f5&page=1`);

    let data = await res.json();
    setSearchResult(data.results)
  }

  const newVersion = useCallback(debounce(searchMovie),[]) 

  const logout = () => {
    localStorage.clear()
    window.location.href="/"
  }

  useEffect(() => {
    searchMovie();
  }, [])
  

  return (
    <>
    <div className='Navbar'>
        <h1 className='Anonime'><Link to="/" style={{textDecoration: "none", color:"white" }} > <span>Anonime</span> </Link></h1>
        <ul >
        <li className='lis'><Link to="/" style={{textDecoration: "none", color:"white" }} > <span>Home</span> </Link></li>
        <li className='lis'><Link to="/" style={{textDecoration: "none", color:"white" }} > <span>List</span> </Link></li>
        </ul>

        <div className="searchBar">
          <button className="ptrs" onClick={()=>{logout()}}>Logout</button>

            </div>
            <input type="text" className="search" placeholder='Search anime or movie' onChange={newVersion}/>
            </div>
         
            {
              searchResult?.length > 0 && 
              <div className='searchResultDiv'>
                {
                  searchResult?.map((item,index)=>(
                    <div className="searchResultItem" key={index}>
                      {item.title.slice(0,10)}
                    </div>
                  ))
                }
              </div>
            }
    </>
            
    
  )
}

export default Navbar