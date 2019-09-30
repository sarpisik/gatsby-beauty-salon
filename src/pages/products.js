import React from "react"
import SectionHeader from "../components/SectionHeader"
import { mapImagesToFluid } from "../lib/helper"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

export const query = graphql`
  query productsPage {
    backgrounds: allFile(filter: { relativeDirectory: { eq: "product" } }) {
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

const Products = ({ data }) => {
  const backgrounds = mapImagesToFluid(data.backgrounds)
  return (
    <Layout>
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="our products" />
            </div>
          </div>
          <div className="row">
            {backgrounds.map((image, index) => (
              <div
                key={index}
                className="col-md-4 prod text-center animate-box"
              >
                <BackgroundImage fluid={image} className="product" />
                <h3>{`product ${index + 1}`}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
