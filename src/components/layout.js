/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix, Link } from "gatsby"
import NavBar from "./NavBar"
import runJquery from "../js/main"
import "../sass/bootstrap.scss"
import "../sass/style.scss"
import Header from "./Header"
import { capitalizeLetter } from "../lib/helper"

const toggleActiveState = active => !active

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [active, setActive] = useState(false)

  useEffect(runJquery)
  const toggleNavList = () => {
    document.body.classList.toggle("menu-show")
    setTimeout(() => setActive(toggleActiveState), 900)
  }

  return (
    <>
      <Helmet>
        <link src={withPrefix("/css/animate.css")} />
        <link src={withPrefix("/css/flexslider.css")} />
        <link src={withPrefix("/css/icomoon.css")} />

        {/* jQuery */}
        <script src={withPrefix("js/jquery.min.js")}></script>
        {/* jQuery Easing */}
        <script src={withPrefix("js/jquery.easing.1.3.js")}></script>
        {/*  Bootstrap */}
        <script src={withPrefix("js/bootstrap.min.js")}></script>
        {/* Waypoints */}
        <script src={withPrefix("js/jquery.waypoints.min.js")}></script>
        {/* Counters */}
        <script src={withPrefix("js/jquery.countTo.js")}></script>
        {/* Flexslider */}
        <script src={withPrefix("js/jquery.flexslider-min.js")}></script>
      </Helmet>
      <NavBar
        onClickMenu={toggleNavList}
        menuOpen={active}
        links={[
          { name: "home", to: "/" },
          { name: "salon", to: "/salon" },
          { name: "products", to: "/products" },
          { name: "about", to: "/about" },
          { name: "contact", to: "/contact" },
        ]}
        iconLinks={[
          { icon: "facebook2", url: "" },
          { icon: "instagram", url: "" },
          { icon: "envelope2", url: "" },
        ]}
      />
      <div id="fh5co-page">
        <Header onClickMenu={toggleNavList} brand="minimal" />
        {children}
      </div>
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="section-title">Minimal</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics.
                </p>
              </div>

              <div className="col-md-4 col-md-push-1">
                <h3 className="section-title">Our Services</h3>
                <ul>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">Photography</a>
                  </li>
                  <li>
                    <a href="#">Editing Photos</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">API</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h3 className="section-title">Information</h3>
                <ul>
                  <li>
                    <Link to="/contact">{capitalizeLetter("contact us")}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row copy-right">
              <div className="col-md-6 col-md-offset-3 text-center">
                <p className="fh5co-social-icon">
                  <a href="#">
                    <i className="icon-twitter2"></i>
                  </a>
                  <a href="#">
                    <i className="icon-facebook2"></i>
                  </a>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icon-dribbble2"></i>
                  </a>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </p>
                <p>
                  © {new Date().getFullYear()}, Made By
                  {` `}
                  <a href="https://www.sarpisik.com">Sarp IŞIK</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
