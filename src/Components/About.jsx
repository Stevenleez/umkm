import React from "react";
import AboutUs from "../assets/aboutus.jpg";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section-container">
        <div className="about-banner-container">
          <img src={AboutUs} alt="" />
        </div>

        <div className="about-text-container">
          <div className="about-text-content">
            <header className="about-header">
              <h2>Our Story</h2>
              <div className="about-story">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptate exercitationem officiis labore, ea pariatur eaque quo porro nobis explicabo est. Cupiditate provident hic architecto, ducimus cum similique esse doloremque?</p>
              </div>
              <a href="">Read more</a>
            </header>
          </div>
        </div>
      </section>
        
    </div>
  )
}

export default About;