import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about'>
      <div className="aboutTitle">About The Fabric</div>
      
      <img src="./cotton.jpeg" alt="" className="aboutImg" />
      <div className="aboutContent">
        <div className="aboutTitleExp">
            <div className="aboutDesc">Cotton, a timeless natural fiber, boasts a rich history dating back to ancient times. Cultivated in warm climates, its soft fibers, found in fluffy bolls, make it a staple in textile manufacturing. Known for breathability and absorbency, cotton continues to be a key resource for durable and comfortable everyday products.
            </div>
                <div className="experience">
                <div className="one">
                    <h2 className="title">1000+</h2>
                    <p className="text">Years Old Fabric</p>
                </div>
                <div className="two">
                    <h2 className="title">70+</h2>
                    <p className="text">Countries Cultivate</p>
                </div>
                <div className="three">
                    <h2 className="title">~35%</h2>
                    <p className="text">Clothes are Cotton</p>
                </div>
                </div>
            </div>
      </div>

    </section>
  );
}

export default About;
