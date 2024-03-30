import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({getSearchInput}) {
  return <nav>
    <Link to = "/"><h1>Rancid Tomatillos</h1> </Link>
    <input type="search" placeholder="Search.." onChange ={getSearchInput}  />
    </nav>;
}

export default Nav;
