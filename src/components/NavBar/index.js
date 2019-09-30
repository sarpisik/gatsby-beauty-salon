import React from "react"
import { Link } from "gatsby"
import { capitalizeLetter } from "../../lib/helper"

const LinkItem = onClick => ({ name, to }) => (
  <li key={name} onClick={onClick} key={name}>
    <Link to={to}>{capitalizeLetter(name)}</Link>
  </li>
)

const IconLinkItem = ({ icon, url }) => (
  <a key={icon} href={url}>
    <i className={`icon-${icon}`}></i>
  </a>
)

const NavBar = ({ links, iconLinks, onClickMenu, menuOpen }) => {
  return (
    <nav id="fh5co-main-nav" role="navigation">
      <a
        onClick={onClickMenu}
        className={`js-fh5co-nav-toggle fh5co-nav-toggle active ${menuOpen &&
          "show"}`}
      >
        <i></i>
      </a>
      <div className="js-fullheight fh5co-table">
        <div className="fh5co-table-cell js-fullheight">
          <ul>{links.map(LinkItem(onClickMenu))}</ul>
          <p className="fh5co-social-icon">{iconLinks.map(IconLinkItem)}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
