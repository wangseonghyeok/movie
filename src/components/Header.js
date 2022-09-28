import { Link } from "react-router-dom";
import Search from "./Search";
export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <Link to="/">
          <img src="images/logo.png" alt="" />
        </Link>
        <Search />
      </header>
    </>
  );
}
