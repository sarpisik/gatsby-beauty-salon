/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix, Link } from "gatsby"
import NavBar from "./NavBar"
import runJquery from "../js/main"
import "../sass/bootstrap.scss"
import "../sass/style.scss"
import Header from "./Header"
import { capitalizeLetter } from "../lib/helper"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(runJquery, [])

  return (
    <>
      <NavBar
        links={[
          { name: "home", to: "home" },
          { name: "salon", to: "salon" },
          { name: "products", to: "products" },
          { name: "services", to: "services" },
          { name: "about", to: "about" },
          { name: "contact", to: "contact" },
        ]}
        iconLinks={[
          { icon: "facebook2", url: "" },
          { icon: "instagram", url: "" },
          { icon: "envelope2", url: "" },
        ]}
      />
      <div id="fh5co-page">
        <Header brand="Minimal" />
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
                    <Link to="contact">{capitalizeLetter("contact us")}</Link>
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
