import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import "swiper/css";

export default function Detail() {
  const params = useParams();
  const personId = params.personId;
  console.log("🚀 ~ file: ProfileDetail.js ~ line 11 ~ Detail ~ movieID", personId);
  const [detail, setDetail] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=1`).then((res) => {
      setDetail(res.data);
    });
    axios.get(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=1`).then((res) => {
      console.log("movie===", res.data.cast);
      setMovies(res.data.cast);
    });
  }, []);

  return (
    <div id="detail" className="detail">
      <div className="container">
        <h2 className="title">
          <strong>Detail</strong>
        </h2>
        <div className="detailBox">
          <div className="img">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p className="originalTitle">{detail.original_title}</p>
              <p className="release">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>이름</dt>
                <dd>{detail.name}</dd>
              </dl>
              <dl>
                <dt>생일</dt>
                <dd>{detail.birthday}</dd>
              </dl>
              <dl>
                <dt>국적</dt>
                <dd>{detail.place_of_birth}</dd>
              </dl>

              <dl>
                <dt>출연영화</dt>
                <dd>
                  <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                    {movies
                      .filter((item, idx) => {
                        if (idx < 10) {
                          return true;
                        }
                      })
                      .map((item, idx) => {
                        return (
                          <SwiperSlide className="item">
                            <MovieItem key={idx} movieInfo={item} />
                          </SwiperSlide>
                        );
                        //return <Profile key={idx} profile_path={item.profile_path} name={item.name} />;
                      })}
                  </Swiper>
                </dd>
              </dl>
            </div>
            <div className="overviewBox">
              <p className="overview">{detail.biography}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </div>
  );
}
