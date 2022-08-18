import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="nav_lrft">
        <Link className="link" to={"/"}>
          Logo
        </Link>
      </div>
      <div className="nav_centr">
        <input type="search" placeholder="search" />
      </div>
      <Link className="link" to={"/app"}>
        Aplication
      </Link>
    </nav>
  );
}

export default Navbar;
