import React from "react"
import SectionHeader from "../components/SectionHeader"
import { mapImagesToFluid } from "../lib/helper"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

export const query = graphql`
  query salonPage {
    backgrounds: allFile(filter: { relativeDirectory: { eq: "salon" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const Salon = ({ data }) => {
  const backgrounds = mapImagesToFluid(data.backgrounds)
  return (
    <Layout>
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="our salon" />
            </div>
          </div>
          <div className="row">
            {backgrounds.map((image, index) => (
              <div key={index} className="col-md-6 text-center animate-box">
                <BackgroundImage fluid={image} className="product" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Salon
