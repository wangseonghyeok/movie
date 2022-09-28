import axios from "axios";
import qs from "qs";
import { gsap } from "gsap";

import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Movie from "./Movie";

export default function List() {
  //const movieList = useRef();
  //const items = gsap.utils.selector(movieList);
  //const query = "슈퍼맨";
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie; //? 무시하기....
  useEffect(() => {
    // state 또는 변수가 바꼈을때 실행하는 함수.....
    console.log("나는 state가 바꼈을때 실행하는 함수입니다.");
    axios
      .get(
        `
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&query=${searchMovie}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [searchMovie]);

  return (
    <>
      <div className="container">
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            //console.log({ ...item });
            return <Movie movieInfo={item} key={idx} className="item" />;
          })}
        </ul>
      </div>
    </>
  );
}
