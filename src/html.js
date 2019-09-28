import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        <link
          href="https://fonts.googleapis.com/css?family=Karla:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
          rel="stylesheet"
        />

        {/* Animate.css  */}
        <link rel="stylesheet" href="css/animate.css" />
        {/* Icomoon Icon Fonts */}
        <link rel="stylesheet" href="css/icomoon.css" />
        {/* Flexslider   */}
        <link rel="stylesheet" href="css/flexslider.css" />

        {/* Modernizr JS  */}
        <script src="js/modernizr-2.6.2.min.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* jQuery */}
        <script src="js/jquery.min.js"></script>
        {/* jQuery Easing */}
        <script src="js/jquery.easing.1.3.js"></script>
        {/*  Bootstrap */}
        <script src="js/bootstrap.min.js"></script>
        {/* Waypoints */}
        <script src="js/jquery.waypoints.min.js"></script>
        {/* Counters */}
        <script src="js/jquery.countTo.js"></script>
        {/* Flexslider */}
        <script src="js/jquery.flexslider-min.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
