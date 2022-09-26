import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Detail() {
  //  /detail/8493824
  const params = useParams();
  const movieID = params.id;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]); //   get / set
  const [crew, setCrew] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      console.log(res.data);
      setDetail(res.data);
      setGenres(res.data.genres);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      setCast(res.data.cast);
      setCrew(res.data.crew);
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
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p className="originalTitle">{detail.original_title}</p>
              <p className="release">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd className="genre">
                  {genres.map((item, idx) => {
                    return <span key={idx}>{item.name}</span>;
                  })}
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>런타임</dt>
                <dd>{detail.runtime}</dd>
              </dl>
              <dl>
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>cast</dt>
                <dd>
                  <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                    {cast
                      .filter((item, idx) => {
                        if (idx < 10) {
                          return true;
                        }
                      })
                      .map((item, idx) => {
                        return (
                          <SwiperSlide className="item">
                            <Profile key={idx} profileInfo={item} />
                          </SwiperSlide>
                        );
                        //return <Profile key={idx} profile_path={item.profile_path} name={item.name} />;
                      })}
                  </Swiper>
                </dd>
              </dl>
              <dl>
                <dt>crew</dt>
                <dd>
                  <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                    {crew
                      .filter((item, idx) => {
                        if (idx < 10) {
                          return true;
                        }
                      })
                      .map((item, idx) => {
                        return (
                          <SwiperSlide className="item">
                            <Profile key={idx} profileInfo={item} />
                          </SwiperSlide>
                        );
                        //return <Profile key={idx} profile_path={item.profile_path} name={item.name} />;
                      })}
                  </Swiper>
                </dd>
              </dl>
            </div>
            <div className="overviewBox">
              <p className="overview">{detail.overview}</p>
            </div>
          </div>
        </div>
        <div className="btns">
          <button
            className="btn btnBack"
            onClick={function () {
              navigate(-1);
            }}
          >
            BACK
          </button>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </div>
  );
}
