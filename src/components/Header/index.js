import React from "react"

const Header = ({ brand }) => (
  <header>
    <div className="container">
      <div className="fh5co-navbar-brand">
        <h1 className="text-center">
          <a className="fh5co-logo" href="index.html">
            {brand}
          </a>
        </h1>
        {/* Hamburger Menu */}
        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle">
          <i></i>
        </a>
      </div>
    </div>
  </header>
)

export default Header
