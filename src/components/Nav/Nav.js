import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"

function Nav({getSearchInput, sortMovies}) {
  return <nav>
    <Link to = "/"><h1>Rancid Tomatillos</h1> </Link>
    <div class = "drop-down">
      <label htmlFor = "filter-rating">Filter</label>
      <select onChange={sortMovies} name="filter" id ="filter">
        <option value={"none"}>None</option>
        <option value={"highToLow"}>↑ Rating High To Low ↓ </option>
        <option value={"lowToHigh"}>↓ Rating Low to High ↑</option>
      </select>
    </div>
    <img className="search-icon" src={logo} alt="search icon" />
    <input type="search" placeholder="Search.." onChange={getSearchInput}  />
    </nav>;
}

export default Nav;
