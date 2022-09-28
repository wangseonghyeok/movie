import { Link } from "react-router-dom";

// }
export default function Movie({ movieInfo }) {
  return (
    <li className="item">
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
          <span className="point"> {movieInfo.vote_average}</span>
        </div>
        <div className="info">
          <div className="titleBox">
            <h3>{movieInfo.title}</h3>
            <p className="originalTitle">{movieInfo.original_title}</p>
            <p className="release">{movieInfo.release_date}</p>
          </div>
          <div className="overviewBox">
            <p className="overview">{movieInfo.overview}</p>
            {/* <p className="vote">{movieInfo.vote_count}</p> */}
          </div>
        </div>
      </Link>
    </li>
  );
}
