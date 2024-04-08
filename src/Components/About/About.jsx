// About.jsx
import React, { useState } from 'react';
import './About.css';

function About() {
  const [activeSection, setActiveSection] = useState('about');

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <section id='about'>
        <div className="renderBtn">
          <button className="btn" onClick={() => showSection('about')}>About</button>
          <button className="btn" onClick={() => showSection('embroidery')}>Embroidery</button>
          <button className="btn" onClick={() => showSection('functionGarment')}>Function</button>
          <button className="btn" onClick={() => showSection('color')}>Color & Print</button>
          <button className="btn" onClick={() => showSection('materialCare')}>Material</button>
          <button className="btn" onClick={() => showSection('SizeFitSection')}>Size & Fit</button>
          <button className="btn" onClick={() => showSection('WashingSection')}>Washing Instruction</button>
        </div>
        <div className="renderComponents">
          {activeSection === 'about' && (
            <div className="AboutSection">
              <div className="aboutTitle">Blind Faith</div>
              <img src="./Dress.jpg" alt="" className="aboutImg" />
              <h1 className="brandTitle">Adaptive Reversible Garment</h1>
              <div className="aboutContent">
                <div className="aboutTitleExp">
                  <div className="price">MRP: Rs. 1499/-</div>
                  <div className="aboutDesc">Presenting a line of adaptive reversible garment, specifically tailored and manufactured in India for individuals with visual impairments.
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSection === 'embroidery' && (
            <div className="embroidery">
              <h1 className="embroideryTitle">Embroidery</h1>
              <p className="embroideryPara">Embroidered with "Blind Faith" on the neck side. The left sleeve reads, "So truly where there is hardship, there is also ease," and the right sleeve carries the message, "A blind person who sees is better than a seeing person who is blind." </p>
            </div>
          )}
          {activeSection === 'functionGarment' && (
            <div className="functionGarment">
              <h1 className="functionHeading">Functions of Garment</h1>
              <div className="functionDesc">
                <ul>
                  <li>Adaptive</li>
                  <li>Reversible</li>
                  <li>Cane Holding Pocket(Capacity: 12 inches)</li>
                  <li>Segmented Pocket(Each Side)</li>
                  <li>Braille Embroidery</li>
                  <li>Side Stripes</li>
                </ul>
              </div>
            </div>
          )}
          {activeSection === 'color' && (
            <div className="color">
              <h1 className="colorTitle">Color & Print of the Garment</h1>
              <p className="colorPara">Featuring pastel colors with one side in light pink and the other in light blue, our garment incorporates a blurred pattern print on the pocket. This aesthetic touch offers a unique perspective, providing a glimpse into how visually impaired individuals perceive the world.</p>
            </div>
          )}
          {activeSection === 'materialCare' && (
            <div className="MaterialSection">
              <div className="materialCare">
                <h1 className="materialTitle">Material</h1>
                <div className="material">Cotton: 80% <br /> Polyster: 20%</div>
              </div>
            </div>
          )}
          {activeSection === 'SizeFitSection' && (
            <div className="SizeFitSection">
              <h1 className='sizeFitTitle'>Size & Fit</h1>
              <div className='sizeFit'>
                <p className='size'>Size: Medium (M)</p>
                <p className='fit'>Brand Fit: Classic Regular Fit</p>
                <p className='chest'>Chest: 36-37'</p>
              </div>
            </div>
          )}
          {activeSection === 'WashingSection' && (
            <div className="WashingSection">
              <h1 className="careTitle">Washing Instructions</h1>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./machinewash.svg" alt="" className="instructionImg" />
                  <p className="instruction">Machine wash at 86 F / 30 C</p>
                </div>
              </section>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./nobleach.svg" alt="" className="instructionImg" />
                  <p className="instruction">No chlorine bleach</p>
                </div>
              </section>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./notumbledry.svg" alt="" className="instructionImg" />
                  <p className="instruction">Do not tumble dry.</p>
                </div>
              </section>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./maxiron.svg" alt="" className="instructionImg" />
                  <p className="instruction">Maximum iron at 230 F / 110 C</p>
                </div>
              </section>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./nodryclean.svg" alt="" className="instructionImg" />
                  <p className="instruction">Do not dry clean.</p>
                </div>
              </section>
              <section className="washingInstruction">
                <div className="instructionBar">
                  <img src="./donotiron.svg" alt="" className="instructionImg" />
                  <p className="instruction">Do not iron on decoration.</p>
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About;
