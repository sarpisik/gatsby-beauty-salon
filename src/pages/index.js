import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import hero from "../images/hero.jpg"
import Intro from "../components/Intro"
import Slides from "../components/Slides"
import SectionHeader from "../components/SectionHeader"
import Service from "../components/Service"
import { Link } from "gatsby"
import { mapImagesToFluid, capitalizeLetter } from "../lib/helper"
import { BackgroundImage } from "../components/Image"

export const query = graphql`
  query indexPage {
    slides: allFile(filter: { relativeDirectory: { eq: "slide" } }) {
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

    salonImages: allFile(
      limit: 4
      filter: { relativeDirectory: { eq: "salon" } }
    ) {
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

    productImages: allFile(
      limit: 3
      filter: { relativeDirectory: { eq: "product" } }
    ) {
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

const IndexPage = ({ data }) => {
  const slides = mapImagesToFluid(data.slides)
  const salonImages = mapImagesToFluid(data.salonImages)
  const productImages = mapImagesToFluid(data.productImages)
  return (
    <Layout>
      <SEO title="Home" />
      <Intro title="Minimal leads you for a better site" />
      <Slides
        slides={[
          {
            slide: slides[0],
            title: "Create A Motivational Template",
            text: "Branding",
          },
          {
            slide: slides[1],
            title: "Start Practicing Your Course",
            text: "Website",
          },
          {
            slide: slides[2],
            title: "Start Practicing Your Course",
            text: "Products",
          },
        ]}
      />

      {/* Services */}
      <div id="fh5co-services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader
                title="Our Services"
                subTitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: "mobile",
                title: "responsive",
                text:
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              },
              {
                icon: "browser",
                title: "compatible to all browser",
                text:
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              },
              {
                icon: "toolbox",
                title: "web design",
                text:
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              },
            ].map(service => (
              <div
                key={service.title}
                className="col-md-4 text-center animate-box"
              >
                <Service {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Salon */}
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="our salon" />
            </div>
          </div>
          <div className="row">
            {salonImages.map((image, index) => (
              <div key={index} className="col-md-6 text-center animate-box">
                <BackgroundImage fluid={image} className="product" />
              </div>
            ))}
            <div className="row">
              <div className="col-sm-12">
                <p className="text-center view-button animate-box">
                  <Link
                    to="salon"
                    className="btn btn-primary btn-outline btn-lg"
                  >
                    {capitalizeLetter("check salon")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div id="fh5co-product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="our products" />
            </div>
          </div>
          <div className="row">
            {[
              {
                text: "product 1",
                image: productImages[0],
              },
              {
                text: "product 2",
                image: productImages[1],
              },
              {
                text: "product 3",
                image: productImages[2],
              },
            ].map(({ text, image }, index) => (
              <div
                key={index}
                className="col-md-4 prod text-center animate-box"
              >
                <BackgroundImage fluid={image} className="product" />
                <h3>{text}</h3>
              </div>
            ))}
            <div className="row">
              <div className="col-sm-12">
                <p className="text-center view-button animate-box">
                  <Link
                    to="products"
                    className="btn btn-primary btn-outline btn-lg"
                  >
                    See More Product
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fh5co-counters"
        style={{ backgroundImage: `url(${hero})` }}
        data-stellar-background-ratio="0.5"
        id="counter-animate"
      >
        <div className="fh5co-narrow-content animate-box">
          <div className="row">
            <div className="col-md-4 text-center">
              <span
                className="fh5co-counter js-counter"
                data-from="0"
                data-to="130"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="fh5co-counter-label">Salon</span>
            </div>
            <div className="col-md-4 text-center">
              <span
                className="fh5co-counter js-counter"
                data-from="0"
                data-to="1450"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="fh5co-counter-label">Services</span>
            </div>
            <div className="col-md-4 text-center">
              <span
                className="fh5co-counter js-counter"
                data-from="0"
                data-to="7497"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="fh5co-counter-label">Products</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
