import React from "react"
import { capitalizeLetter } from "../../lib/helper"
import { Link } from "gatsby"

const Header = ({ brand, onClickMenu }) => (
  <header>
    <div className="container">
      <div className="fh5co-navbar-brand">
        <h1 className="text-center">
          <Link to="/" className="fh5co-logo">
            {capitalizeLetter(brand)}
          </Link>
        </h1>
        {/* Hamburger Menu */}
        <a
          onClick={onClickMenu}
          className="js-fh5co-nav-toggle fh5co-nav-toggle"
        >
          <i></i>
        </a>
      </div>
    </div>
  </header>
)

export default Header
