import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{
                  width: "20rem",
                  height: "20rem",
                  margin: "2rem 0",
                  borderRadius: "100%",
                }}
                src=""
                alt="Founder"
              />
              <h1>Sneha Chaurasia</h1>
              <button
                onClick={() =>
                  window.open("")
                }
              >
                Visit Website
              </button>
              <br />
              <p>
                This is a sample wesbite made by @Sneha Chaurasia.
                <br />
                Only with the purpose to Learning MERN Stack
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
