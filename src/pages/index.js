import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import slide1 from "../images/slide_1.jpg"
import slide2 from "../images/slide_2.jpg"
import slide3 from "../images/slide_3.jpg"

import salon1 from "../images/salon_1.jpg"
import salon2 from "../images/salon_2.jpg"
import salon3 from "../images/salon_3.jpg"
import salon4 from "../images/salon_4.jpg"
import product1 from "../images/product_1.jpg"
import product2 from "../images/product_2.jpg"
import product3 from "../images/product_3.jpg"
import hero from "../images/hero.jpg"
import Intro from "../components/Intro"
import Slides from "../components/Slides"
import SectionHeader from "../components/SectionHeader"
import Service from "../components/Service"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro title="Minimal leads you for a better site" />
    <Slides
      slides={[
        {
          image: slide1,
          title: "Create A Motivational Template",
          text: "Branding",
        },
        {
          image: slide2,
          title: "Start Practicing Your Course",
          text: "Website",
        },
        {
          image: slide3,
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
          {[
            { src: salon1, alt: "Photo by Delbeautybox from Pexels" },
            { src: salon2, alt: "Photo by Delbeautybox from Pexels" },
            { src: salon3, alt: "Photo by Asad Photo Maldives from Pexels" },
            { src: salon4, alt: "Photo by freestocks.org from Pexels" },
          ].map((image, index) => (
            <div key={index} className="col-md-6 text-center animate-box">
              <img
                className="img-responsive"
                style={{ marginBottom: "2rem" }}
                {...image}
              />
            </div>
          ))}
          <div className="row">
            <div className="col-sm-12">
              <p className="text-center view-button animate-box">
                <Link to="salon" className="btn btn-primary btn-outline btn-lg">
                  See More Project
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
              image: {
                src: product1,
                alt: "Photo by Skitterphoto from Pexels",
              },
            },
            {
              text: "product 2",
              image: {
                src: product2,
                alt: "Photo by Dana Tentis from Pexels",
              },
            },
            {
              text: "product 3",
              image: {
                src: product3,
                alt: "Photo by Asad Photo Maldives from Pexels",
              },
            },
          ].map(({ text, image }, index) => (
            <div key={index} className="col-md-4 prod text-center animate-box">
              <img className="img-responsive" {...image} />
              <h3>
                <a href="#">{text}</a>
              </h3>
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

export default IndexPage
