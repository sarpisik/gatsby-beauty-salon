import React from "react"
import SectionHeader from "../components/SectionHeader"
import { mapImagesToFluid, capitalizeLetter } from "../lib/helper"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
  query aboutPage {
    avatars: allFile(filter: { relativeDirectory: { eq: "staff" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const About = ({ data }) => {
  const avatars = mapImagesToFluid(data.avatars, "fixed")
  return (
    <Layout>
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="about us" />
            </div>
          </div>
          <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2 text-center animate-box">
              <div class="about-content">
                <h3>History</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quo est quis mollitia ratione magni assumenda repellat atque
                  modi temporibus tempore ex. Dolore facilis ex sunt ea
                  praesentium expedita numquam. Quos quia provident consequuntur
                  culpa facere ratione maxime commodi voluptates id repellat
                  velit eaque aspernatur expedita.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center animate-box ">
              <div class="heading-section">
                <h2>{capitalizeLetter("our staff")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                image: avatars[0],
                alt: "Photo by Kamila Ferreira from Pexels",
              },
              { image: avatars[1], alt: "Photo by Juliana Stein from Pexels" },
              { image: avatars[2], alt: "Photo by Ingrid Santana from Pexels" },
            ].map((avatar, index) => (
              <div key={index} class="col-md-4 col-sm-4 animate-box">
                <div class="fh5co-staff">
                  <Img fixed={avatar.image} />
                  <h3>Jean Smith</h3>
                  <span class="role">Web Designer</span>
                  <p>
                    Quos quia provident consequuntur culpa facere ratione maxime
                    commodi voluptates id repellat velit eaque aspernatur
                    expedita. Possimus itaque adipisci.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
