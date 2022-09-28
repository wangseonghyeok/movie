import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div id="search" className="search">
      <input
        type="text"
        placeholder="영화를 검색하세요"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        onKeyUp={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            navigate(`/search?movie=${search}`);
          }
        }}
      />
      <Link className="btnSearch" to={`/search?movie=${search}`}>
        검색
      </Link>
    </div>
  );
}
