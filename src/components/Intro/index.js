import React from "react"

const Intro = ({ title }) => (
  <div id="fh5co-intro-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 animate-box text-center">
          <h2 className="intro-heading">{title}</h2>
        </div>
      </div>
    </div>
  </div>
)

export default Intro
