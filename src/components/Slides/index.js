import React from "react"
import BackgroundImage from "gatsby-background-image"

const Slide = ({ slide, title, text }, index) => (
  <BackgroundImage Tag="li" key={index} fluid={slide}>
    <div className="overlay-gradient"></div>
    <div className="overlay">
      <div className="col-md-8 col-md-offset-2 col-md-push-4 js-fullheight slider-text">
        <div className="slider-text-inner">
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      </div>
    </div>
  </BackgroundImage>
)

const Slides = ({ slides }) => (
  <aside id="fh5co-hero" className="js-fullheight">
    <div className="flexslider js-fullheight">
      <ul className="slides">{slides.map(Slide)}</ul>
    </div>
  </aside>
)

export default Slides
