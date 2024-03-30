import "./Nav.css";


function Nav({getSearchInput}) {
  return <nav>
    <h1>Rancid Tomatillos</h1>
    <input type="search" placeholder="Search.." onChange ={getSearchInput}  />
    </nav>;
}

export default Nav;
