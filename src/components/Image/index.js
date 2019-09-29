import React from "react"
import BgImage from "gatsby-background-image"

export const BackgroundImage = ({ image, ...props }) => (
  <BgImage fluid={image} {...props} />
)
