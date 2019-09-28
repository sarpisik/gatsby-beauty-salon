import React from "react"

const Slide = ({ image, title, text }, index) => {
  const backgroundImage = `url(${image})`
  return (
    <li
      key={index}
      style={{
        backgroundImage,
      }}
    >
      <div className="overlay-gradient"></div>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 col-md-push-4 js-fullheight slider-text">
          <div className="slider-text-inner">
            <h2>{title}</h2>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

const Slides = ({ slides }) => (
  <aside id="fh5co-hero" className="js-fullheight">
    <div className="flexslider js-fullheight">
      <ul className="slides">{slides.map(Slide)}</ul>
    </div>
  </aside>
)

export default Slides
