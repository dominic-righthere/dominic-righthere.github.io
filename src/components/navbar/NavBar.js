import React from "react";
import { Link } from "gatsby"
import "./navbar.css";

const NavBar = ( props ) => {
  return (
    <div className="nav-bar">
                <p>🍔 Right Here</p>
                <p>Web Dev, Data Science</p>

                <ul id="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about/">Dominic</Link>
                    </li>
                </ul>

            </div>
  );
};

export default NavBar;