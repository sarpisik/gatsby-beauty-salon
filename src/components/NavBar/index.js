import React from "react"
import { Link } from "gatsby"
import { capitalizeLetter } from "../../lib/helper"

const LinkItem = ({ name, to }) => (
  <li key={name}>
    <Link to={to}>{capitalizeLetter(name)}</Link>
  </li>
)

const IconLinkItem = ({ icon, url }) => (
  <a href={url}>
    <i className={`icon-${icon}`}></i>
  </a>
)

const NavBar = ({ links, iconLinks }) => {
  return (
    <nav id="fh5co-main-nav" role="navigation">
      <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle active">
        <i></i>
      </a>
      <div className="js-fullheight fh5co-table">
        <div className="fh5co-table-cell js-fullheight">
          <ul>{links.map(LinkItem)}</ul>
          <p className="fh5co-social-icon">{iconLinks.map(IconLinkItem)}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
